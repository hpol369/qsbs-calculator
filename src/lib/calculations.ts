import { getStateByCode, type StateInfo } from './states';

export type StockType =
  | 'common_stock'
  | 'iso'
  | 'nso'
  | 'restricted_stock'
  | 'rsu'
  | 'safe_conversion'
  | 'gift'
  | 'inheritance';

export type AcquisitionMethod =
  | 'purchased'
  | 'exercised'
  | 'services'
  | 'conversion'
  | 'gift'
  | 'inheritance';

export interface CalculatorInputs {
  stockType: StockType;
  acquisitionMethod: AcquisitionMethod;
  election83b: boolean | null;
  grantDate: Date | null;
  exerciseDate: Date | null;
  vestingDate: Date | null;
  purchaseDate: Date | null;
  conversionDate: Date | null;
  saleDate: Date;
  costBasis: number;
  expectedValue: number;
  stateCode: string;
}

export interface HoldingPeriodResult {
  startDate: Date | null;
  qualificationDate: Date | null;
  isQualified: boolean;
  daysRemaining: number;
  explanation: string;
  saleDateBeforeQualification: boolean;
}

export interface ExclusionResult {
  exclusionPercent: number;
  maxExclusion: number;
  gain: number;
  actualExclusion: number;
  taxableGain: number;
  isFullyExcluded: boolean;
}

export interface FederalTaxResult {
  taxWithoutQSBS: number;
  taxWithQSBS: number;
  savings: number;
  effectiveRate: number;
  disclaimer: string;
}

export interface StateTaxResult {
  status: 'full' | 'none' | 'no_tax';
  stateName: string;
  stateCode: string;
  taxWithQSBS: number;
  taxWithoutQSBS: number;
  savings: number;
  topRate: number;
  message: string;
}

export interface CalculationResults {
  holdingPeriod: HoldingPeriodResult;
  exclusion: ExclusionResult;
  federalTax: FederalTaxResult;
  stateTax: StateTaxResult;
  totalSavings: number;
  totalTaxOwed: number;
}

/**
 * Determines the holding period start date based on stock type and acquisition method
 */
export function getHoldingPeriodStart(inputs: CalculatorInputs): { date: Date | null; explanation: string } {
  const { stockType, election83b, grantDate, exerciseDate, vestingDate, purchaseDate, conversionDate } = inputs;

  switch (stockType) {
    case 'common_stock':
      return {
        date: purchaseDate,
        explanation: 'Your holding period started on your purchase date.'
      };

    case 'iso':
    case 'nso':
      return {
        date: exerciseDate,
        explanation: 'Your holding period started on your option EXERCISE date, not your grant date. This is a common point of confusion.'
      };

    case 'restricted_stock':
      if (election83b) {
        return {
          date: grantDate,
          explanation: 'Your 83(b) election means your holding period started at grant, not vesting.'
        };
      } else {
        return {
          date: vestingDate,
          explanation: 'Without an 83(b) election, your holding period starts when shares vest.'
        };
      }

    case 'rsu':
      return {
        date: vestingDate,
        explanation: 'For RSUs, your holding period starts when shares are delivered to you (at vesting).'
      };

    case 'safe_conversion':
      return {
        date: conversionDate,
        explanation: 'Your holding period started when the SAFE converted to stock.'
      };

    case 'gift':
      // For gifts, we'd need the donor's acquisition date, but we simplify here
      return {
        date: purchaseDate, // This would be donor's acquisition date in practice
        explanation: 'For gifted stock, you inherit the donor\'s holding period. Your clock started when they acquired the stock.'
      };

    case 'inheritance':
      return {
        date: null,
        explanation: 'Inherited stock automatically satisfies the 5-year holding period requirement.'
      };

    default:
      return {
        date: null,
        explanation: 'Unable to determine holding period start date.'
      };
  }
}

/**
 * Calculates the 5-year qualification date from the holding period start
 */
export function getQualificationDate(holdingPeriodStart: Date | null): Date | null {
  if (holdingPeriodStart === null) {
    return null; // Inheritance or special case - immediately qualified
  }

  const qualDate = new Date(holdingPeriodStart);
  qualDate.setFullYear(qualDate.getFullYear() + 5);
  qualDate.setDate(qualDate.getDate() + 1); // More than 5 years
  return qualDate;
}

/**
 * Full holding period calculation
 */
export function calculateHoldingPeriod(inputs: CalculatorInputs): HoldingPeriodResult {
  const { date: startDate, explanation } = getHoldingPeriodStart(inputs);
  const qualificationDate = getQualificationDate(startDate);
  const today = new Date();
  const saleDate = inputs.saleDate;

  // Handle inheritance - immediately qualified
  if (inputs.stockType === 'inheritance') {
    return {
      startDate: null,
      qualificationDate: null,
      isQualified: true,
      daysRemaining: 0,
      explanation,
      saleDateBeforeQualification: false
    };
  }

  if (!startDate || !qualificationDate) {
    return {
      startDate: null,
      qualificationDate: null,
      isQualified: false,
      daysRemaining: 0,
      explanation: 'Unable to calculate holding period.',
      saleDateBeforeQualification: false
    };
  }

  const isQualified = today >= qualificationDate;
  const daysRemaining = isQualified
    ? 0
    : Math.ceil((qualificationDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

  const saleDateBeforeQualification = saleDate < qualificationDate;

  return {
    startDate,
    qualificationDate,
    isQualified,
    daysRemaining,
    explanation,
    saleDateBeforeQualification
  };
}

/**
 * Determines exclusion percentage based on acquisition date
 */
export function getExclusionPercentage(acquisitionDate: Date): number {
  const feb182009 = new Date('2009-02-18');
  const sep272010 = new Date('2010-09-28');

  if (acquisitionDate < feb182009) {
    return 0.50;
  } else if (acquisitionDate < sep272010) {
    return 0.75;
  } else {
    return 1.00;
  }
}

/**
 * Calculates the QSBS exclusion amount
 */
export function calculateExclusion(inputs: CalculatorInputs, holdingPeriodStart: Date | null): ExclusionResult {
  const { costBasis, expectedValue } = inputs;
  const gain = Math.max(0, expectedValue - costBasis);

  // Use holding period start for exclusion percentage, fallback to today for inheritance
  const acquisitionDate = holdingPeriodStart || new Date();
  const exclusionPercent = getExclusionPercentage(acquisitionDate);

  // Maximum exclusion: greater of $10M or 10x basis
  const maxExclusion = Math.max(10_000_000, costBasis * 10);

  // Calculate excludable amount
  const potentialExclusion = gain * exclusionPercent;
  const actualExclusion = Math.min(potentialExclusion, maxExclusion);

  // Taxable amount (if gain exceeds cap)
  const taxableGain = Math.max(0, gain - actualExclusion);

  return {
    exclusionPercent,
    maxExclusion,
    gain,
    actualExclusion,
    taxableGain,
    isFullyExcluded: taxableGain === 0
  };
}

/**
 * Calculates federal tax savings
 */
export function calculateFederalTax(exclusion: ExclusionResult): FederalTaxResult {
  // Using 20% LTCG rate + 3.8% NIIT as default for high earners
  const effectiveRate = 0.238;

  const taxWithoutQSBS = exclusion.gain * effectiveRate;
  const taxWithQSBS = exclusion.taxableGain * effectiveRate;
  const savings = taxWithoutQSBS - taxWithQSBS;

  return {
    taxWithoutQSBS,
    taxWithQSBS,
    savings,
    effectiveRate,
    disclaimer: 'Based on 20% LTCG rate + 3.8% NIIT. Your actual rate may vary based on income and filing status.'
  };
}

/**
 * Calculates state tax impact
 */
export function calculateStateTax(
  stateCode: string,
  gain: number,
  qsbsExclusion: number
): StateTaxResult {
  const stateInfo = getStateByCode(stateCode);

  if (!stateInfo) {
    return {
      status: 'full',
      stateName: 'Unknown',
      stateCode,
      taxWithQSBS: 0,
      taxWithoutQSBS: 0,
      savings: 0,
      topRate: 0,
      message: 'State not found in database.'
    };
  }

  if (stateInfo.conformity === 'no_tax') {
    return {
      status: 'no_tax',
      stateName: stateInfo.name,
      stateCode,
      taxWithQSBS: 0,
      taxWithoutQSBS: 0,
      savings: 0,
      topRate: 0,
      message: `${stateInfo.name} does not have a state income tax, so there's no state tax on your gain regardless of QSBS status.`
    };
  }

  if (stateInfo.conformity === 'none') {
    const stateTax = gain * stateInfo.topRate;
    return {
      status: 'none',
      stateName: stateInfo.name,
      stateCode,
      taxWithQSBS: stateTax,
      taxWithoutQSBS: stateTax,
      savings: 0,
      topRate: stateInfo.topRate,
      message: `${stateInfo.name} does not recognize the federal QSBS exclusion. Your full gain will be subject to state capital gains tax.`
    };
  }

  // Full conformity
  const taxWithoutQSBS = gain * stateInfo.topRate;
  const taxableAfterQSBS = Math.max(0, gain - qsbsExclusion);
  const taxWithQSBS = taxableAfterQSBS * stateInfo.topRate;

  return {
    status: 'full',
    stateName: stateInfo.name,
    stateCode,
    taxWithQSBS,
    taxWithoutQSBS,
    savings: taxWithoutQSBS - taxWithQSBS,
    topRate: stateInfo.topRate,
    message: `${stateInfo.name} recognizes the federal QSBS exclusion. Your gain will be excluded from state tax.`
  };
}

/**
 * Main calculation function - runs all calculations
 */
export function calculateAll(inputs: CalculatorInputs): CalculationResults {
  const holdingPeriod = calculateHoldingPeriod(inputs);
  const exclusion = calculateExclusion(inputs, holdingPeriod.startDate);
  const federalTax = calculateFederalTax(exclusion);
  const stateTax = calculateStateTax(inputs.stateCode, exclusion.gain, exclusion.actualExclusion);

  const totalSavings = federalTax.savings + stateTax.savings;
  const totalTaxOwed = federalTax.taxWithQSBS + stateTax.taxWithQSBS;

  return {
    holdingPeriod,
    exclusion,
    federalTax,
    stateTax,
    totalSavings,
    totalTaxOwed
  };
}

/**
 * Format currency for display
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

/**
 * Format date for display
 */
export function formatDate(date: Date | null): string {
  if (!date) return 'N/A';
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

/**
 * Format percentage for display
 */
export function formatPercent(decimal: number): string {
  return `${(decimal * 100).toFixed(1)}%`;
}
