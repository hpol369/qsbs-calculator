'use client';

import { useState, useEffect, useMemo, useId, useCallback } from 'react';
import { sortedStates } from '@/lib/states';
import type { CalculatorInputs, StockType, AcquisitionMethod, CalculationResults } from '@/lib/calculations';
import { calculateAll, getQualificationDate } from '@/lib/calculations';
import { decodeState } from '@/lib/url-state';
import Results from './Results';
import SavedScenariosPanel from './SavedScenariosPanel';
import { CalculatorEvents, ConversionEvents } from '@/lib/analytics';

const stockTypeOptions: { value: StockType; label: string }[] = [
  { value: 'common_stock', label: 'Common Stock' },
  { value: 'iso', label: 'Incentive Stock Options (ISOs)' },
  { value: 'nso', label: 'Non-Qualified Stock Options (NSOs)' },
  { value: 'restricted_stock', label: 'Restricted Stock' },
  { value: 'rsu', label: 'RSUs (Restricted Stock Units)' },
  { value: 'safe_conversion', label: 'Converted SAFE/Convertible Note' },
  { value: 'gift', label: 'Gift' },
  { value: 'inheritance', label: 'Inheritance' },
];

const acquisitionMethodOptions: { value: AcquisitionMethod; label: string }[] = [
  { value: 'purchased', label: 'Purchased for cash' },
  { value: 'exercised', label: 'Exercised options' },
  { value: 'services', label: 'Received for services' },
  { value: 'conversion', label: 'Converted from SAFE/note' },
  { value: 'gift', label: 'Gift' },
  { value: 'inheritance', label: 'Inheritance' },
];

function formatDateForInput(date: Date | null): string {
  if (!date) return '';
  return date.toISOString().split('T')[0];
}

function parseDateFromInput(value: string): Date | null {
  if (!value) return null;
  const date = new Date(value + 'T00:00:00');
  return isNaN(date.getTime()) ? null : date;
}

interface FormErrors {
  costBasis?: string;
  expectedValue?: string;
  saleDate?: string;
  exerciseDate?: string;
  vestingDate?: string;
  purchaseDate?: string;
  conversionDate?: string;
  grantDate?: string;
  election83b?: string;
}

export default function Calculator() {
  const formId = useId();
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [inputs, setInputs] = useState<CalculatorInputs | null>(null);
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  // Form state
  const [stockType, setStockType] = useState<StockType>('iso');
  const [acquisitionMethod, setAcquisitionMethod] = useState<AcquisitionMethod>('exercised');
  const [election83b, setElection83b] = useState<boolean | null>(null);
  const [grantDate, setGrantDate] = useState<string>('');
  const [exerciseDate, setExerciseDate] = useState<string>('');
  const [vestingDate, setVestingDate] = useState<string>('');
  const [purchaseDate, setPurchaseDate] = useState<string>('');
  const [conversionDate, setConversionDate] = useState<string>('');
  const [saleDate, setSaleDate] = useState<string>('');
  const [costBasis, setCostBasis] = useState<string>('');
  const [expectedValue, setExpectedValue] = useState<string>('');
  const [stateCode, setStateCode] = useState<string>('CA');

  // Load state from URL on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const encoded = params.get('s');
      if (encoded) {
        const decoded = decodeState(encoded);
        if (decoded) {
          setStockType(decoded.stockType);
          setAcquisitionMethod(decoded.acquisitionMethod);
          setElection83b(decoded.election83b);
          setGrantDate(formatDateForInput(decoded.grantDate));
          setExerciseDate(formatDateForInput(decoded.exerciseDate));
          setVestingDate(formatDateForInput(decoded.vestingDate));
          setPurchaseDate(formatDateForInput(decoded.purchaseDate));
          setConversionDate(formatDateForInput(decoded.conversionDate));
          setSaleDate(formatDateForInput(decoded.saleDate));
          setCostBasis(decoded.costBasis.toString());
          setExpectedValue(decoded.expectedValue.toString());
          setStateCode(decoded.stateCode);

          // Auto-calculate results
          setTimeout(() => {
            handleCalculate(decoded);
          }, 100);
        }
      }
    }
  }, []);

  // Determine which date fields to show based on stock type
  const showGrantDate = ['iso', 'nso', 'restricted_stock', 'rsu'].includes(stockType);
  const showExerciseDate = ['iso', 'nso'].includes(stockType);
  const showVestingDate = (stockType === 'restricted_stock' && !election83b) || stockType === 'rsu';
  const showPurchaseDate = stockType === 'common_stock' || stockType === 'gift';
  const showConversionDate = stockType === 'safe_conversion';
  const show83bElection = stockType === 'restricted_stock';
  const showAnyDateField = stockType !== 'inheritance';

  // Calculate progress
  const formProgress = useMemo(() => {
    let required = 0;
    let filled = 0;

    // Always required
    required += 3; // costBasis, expectedValue, saleDate
    if (costBasis) filled++;
    if (expectedValue) filled++;
    if (saleDate) filled++;

    // Conditional requirements
    if (showExerciseDate) {
      required++;
      if (exerciseDate) filled++;
    }
    if (showVestingDate) {
      required++;
      if (vestingDate) filled++;
    }
    if (showPurchaseDate) {
      required++;
      if (purchaseDate) filled++;
    }
    if (showConversionDate) {
      required++;
      if (conversionDate) filled++;
    }
    if (show83bElection) {
      required++;
      if (election83b !== null) filled++;
    }
    if (stockType === 'restricted_stock' && election83b) {
      required++;
      if (grantDate) filled++;
    }

    return { filled, required, percent: required > 0 ? Math.round((filled / required) * 100) : 0 };
  }, [stockType, election83b, costBasis, expectedValue, saleDate, exerciseDate, vestingDate, purchaseDate, conversionDate, grantDate, showExerciseDate, showVestingDate, showPurchaseDate, showConversionDate, show83bElection]);

  // Calculate days until qualification preview
  const qualificationPreview = useMemo(() => {
    let startDate: Date | null = null;

    if (stockType === 'inheritance') {
      return { message: 'Inherited stock automatically qualifies', daysRemaining: 0, qualifies: true };
    }

    // Determine the holding period start date based on current inputs
    if (stockType === 'iso' || stockType === 'nso') {
      startDate = parseDateFromInput(exerciseDate);
    } else if (stockType === 'restricted_stock') {
      startDate = election83b ? parseDateFromInput(grantDate) : parseDateFromInput(vestingDate);
    } else if (stockType === 'rsu') {
      startDate = parseDateFromInput(vestingDate);
    } else if (stockType === 'common_stock' || stockType === 'gift') {
      startDate = parseDateFromInput(purchaseDate);
    } else if (stockType === 'safe_conversion') {
      startDate = parseDateFromInput(conversionDate);
    }

    if (!startDate) return null;

    const qualDate = getQualificationDate(startDate);
    if (!qualDate) return null;

    const today = new Date();
    const diffMs = qualDate.getTime() - today.getTime();
    const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    if (daysRemaining <= 0) {
      return { message: 'Your stock already qualifies for full QSBS exclusion!', daysRemaining: 0, qualifies: true };
    }

    const years = Math.floor(daysRemaining / 365);
    const months = Math.floor((daysRemaining % 365) / 30);
    const days = daysRemaining % 30;

    let timeStr = '';
    if (years > 0) timeStr += `${years}y `;
    if (months > 0) timeStr += `${months}m `;
    if (days > 0 && years === 0) timeStr += `${days}d`;

    return {
      message: `${timeStr.trim()} until full QSBS qualification`,
      daysRemaining,
      qualifies: false,
      qualificationDate: qualDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };
  }, [stockType, election83b, exerciseDate, vestingDate, purchaseDate, conversionDate, grantDate]);

  // Get helper text for dates
  const getDateHelperText = (): string | null => {
    switch (stockType) {
      case 'iso':
      case 'nso':
        return 'Your holding period starts at EXERCISE, not grant. This is the #1 mistake people make.';
      case 'restricted_stock':
        return election83b
          ? 'With an 83(b) election, your holding period starts at grant.'
          : 'Without 83(b), your holding period starts when shares vest.';
      case 'rsu':
        return 'For RSUs, your holding period starts when shares are delivered (at vesting).';
      case 'safe_conversion':
        return 'Your holding period starts when the SAFE converted to stock.';
      case 'inheritance':
        return 'Inherited stock automatically satisfies the 5-year holding period.';
      default:
        return null;
    }
  };

  // Validation function
  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {};

    if (!costBasis) {
      newErrors.costBasis = 'Required—what did you pay for this stock?';
    } else if (parseFloat(costBasis) < 0) {
      newErrors.costBasis = 'Cost basis cannot be negative';
    }

    if (!expectedValue) {
      newErrors.expectedValue = 'Required—what will your stock be worth at sale?';
    } else if (parseFloat(expectedValue) < 0) {
      newErrors.expectedValue = 'Sale value cannot be negative';
    }

    if (!saleDate) {
      newErrors.saleDate = 'Required—when do you expect to sell?';
    }

    if (stockType === 'iso' || stockType === 'nso') {
      if (!exerciseDate) {
        newErrors.exerciseDate = 'Required—this is when your 5-year QSBS clock started';
      }
    }

    if ((stockType === 'restricted_stock' && !election83b) || stockType === 'rsu') {
      if (!vestingDate) {
        newErrors.vestingDate = 'Required—your holding period starts at vesting';
      }
    }

    if (stockType === 'restricted_stock' && election83b === true) {
      if (!grantDate) {
        newErrors.grantDate = 'Required—with 83(b), your clock starts at grant';
      }
    }

    if (stockType === 'restricted_stock' && election83b === null) {
      newErrors.election83b = 'Please select whether you filed an 83(b)—it affects your holding period';
    }

    if (stockType === 'common_stock' || stockType === 'gift') {
      if (!purchaseDate) {
        newErrors.purchaseDate = stockType === 'gift'
          ? "Required—when did the donor acquire this stock?"
          : 'Required—when did you purchase this stock?';
      }
    }

    if (stockType === 'safe_conversion') {
      if (!conversionDate) {
        newErrors.conversionDate = 'Required—when did your SAFE convert to stock?';
      }
    }

    return newErrors;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    // Validate on blur
    const newErrors = validateForm();
    setErrors(newErrors);
  };

  const handleCalculate = (overrideInputs?: CalculatorInputs) => {
    // Validate before calculating
    const newErrors = validateForm();
    setErrors(newErrors);

    // Mark all fields as touched
    setTouched({
      costBasis: true,
      expectedValue: true,
      saleDate: true,
      exerciseDate: true,
      vestingDate: true,
      purchaseDate: true,
      conversionDate: true,
      grantDate: true,
      election83b: true,
    });

    if (Object.keys(newErrors).length > 0 && !overrideInputs) {
      return;
    }

    const calcInputs: CalculatorInputs = overrideInputs || {
      stockType,
      acquisitionMethod,
      election83b,
      grantDate: parseDateFromInput(grantDate),
      exerciseDate: parseDateFromInput(exerciseDate),
      vestingDate: parseDateFromInput(vestingDate),
      purchaseDate: parseDateFromInput(purchaseDate),
      conversionDate: parseDateFromInput(conversionDate),
      saleDate: parseDateFromInput(saleDate) || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      costBasis: parseFloat(costBasis) || 0,
      expectedValue: parseFloat(expectedValue) || 0,
      stateCode,
    };

    const calculationResults = calculateAll(calcInputs);
    setResults(calculationResults);
    setInputs(calcInputs);
    setShowResults(true);

    // Track calculation event
    CalculatorEvents.calculationCompleted({
      stockType: calcInputs.stockType,
      stateCode: calcInputs.stateCode,
      isQualified: calculationResults.holdingPeriod.isQualified,
      totalSavings: calculationResults.totalSavings,
      federalSavings: calculationResults.federalTax.savings,
      stateSavings: calculationResults.stateTax.savings,
    });

    // Track high-value calculations
    ConversionEvents.highValueCalculation(calculationResults.totalSavings);
  };

  const handleReset = () => {
    setShowResults(false);
    setResults(null);
    setInputs(null);
    setErrors({});
    setTouched({});
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  const isFormValid = (): boolean => {
    return Object.keys(validateForm()).length === 0;
  };

  // Handle loading a saved scenario
  const handleLoadScenario = useCallback((loadedInputs: CalculatorInputs, loadedResults: CalculationResults) => {
    setInputs(loadedInputs);
    setResults(loadedResults);
    setShowResults(true);

    // Also populate the form fields in case user wants to modify
    setStockType(loadedInputs.stockType);
    setAcquisitionMethod(loadedInputs.acquisitionMethod);
    setElection83b(loadedInputs.election83b);
    setGrantDate(formatDateForInput(loadedInputs.grantDate));
    setExerciseDate(formatDateForInput(loadedInputs.exerciseDate));
    setVestingDate(formatDateForInput(loadedInputs.vestingDate));
    setPurchaseDate(formatDateForInput(loadedInputs.purchaseDate));
    setConversionDate(formatDateForInput(loadedInputs.conversionDate));
    setSaleDate(formatDateForInput(loadedInputs.saleDate));
    setCostBasis(loadedInputs.costBasis.toString());
    setExpectedValue(loadedInputs.expectedValue.toString());
    setStateCode(loadedInputs.stateCode);
  }, []);

  if (showResults && results && inputs) {
    return (
      <>
        <Results results={results} inputs={inputs} onReset={handleReset} />
        <SavedScenariosPanel
          currentInputs={inputs}
          currentResults={results}
          onLoadScenario={handleLoadScenario}
        />
      </>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">QSBS Savings Calculator</h2>
            <p className="text-emerald-100 text-sm mt-1">Estimate your Section 1202 tax savings in 60 seconds</p>
          </div>
          {/* Progress indicator */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="text-right">
              <p className="text-emerald-100 text-xs">{formProgress.filled} of {formProgress.required} fields</p>
              <p className="text-white text-sm font-medium">{formProgress.percent}% complete</p>
            </div>
            <div className="w-12 h-12 relative">
              <svg className="w-12 h-12 transform -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.3)"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeDasharray={`${formProgress.percent}, 100`}
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Qualification Preview Banner */}
      {qualificationPreview && (
        <div className={`px-6 py-3 ${qualificationPreview.qualifies ? 'bg-emerald-50 border-b border-emerald-200' : 'bg-blue-50 border-b border-blue-200'}`}>
          <div className="flex items-center gap-2">
            {qualificationPreview.qualifies ? (
              <svg className="w-5 h-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
            <p className={`text-sm font-medium ${qualificationPreview.qualifies ? 'text-emerald-800' : 'text-blue-800'}`}>
              {qualificationPreview.message}
            </p>
            {qualificationPreview.qualificationDate && (
              <span className="text-xs text-blue-600 ml-auto">
                Qualifies: {qualificationPreview.qualificationDate}
              </span>
            )}
          </div>
        </div>
      )}

      <form
        onSubmit={(e) => { e.preventDefault(); handleCalculate(); }}
        className="p-6 space-y-6"
        aria-label="QSBS Tax Savings Calculator"
      >
        {/* Stock Information */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 w-full">
            Your Stock
          </legend>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`${formId}-stockType`} className="block text-sm font-medium text-gray-700 mb-1">
                Stock Type
              </label>
              <select
                id={`${formId}-stockType`}
                value={stockType}
                onChange={(e) => {
                  setStockType(e.target.value as StockType);
                  setElection83b(null);
                  setErrors({});
                }}
                aria-describedby={`${formId}-stockType-help`}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900"
              >
                {stockTypeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <p id={`${formId}-stockType-help`} className="text-xs text-gray-500 mt-1">
                Different stock types have different holding period rules
              </p>
            </div>

            <div>
              <label htmlFor={`${formId}-acquisitionMethod`} className="block text-sm font-medium text-gray-700 mb-1">
                How Acquired
              </label>
              <select
                id={`${formId}-acquisitionMethod`}
                value={acquisitionMethod}
                onChange={(e) => setAcquisitionMethod(e.target.value as AcquisitionMethod)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900"
              >
                {acquisitionMethodOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 83(b) Election */}
          {show83bElection && (
            <div
              className={`rounded-lg p-4 ${errors.election83b && touched.election83b ? 'bg-red-50 border border-red-300' : 'bg-amber-50 border border-amber-200'}`}
              role="group"
              aria-labelledby={`${formId}-election83b-label`}
            >
              <p id={`${formId}-election83b-label`} className="block text-sm font-medium text-gray-700 mb-2">
                Did you file an 83(b) election? <span className="text-red-500" aria-hidden="true">*</span>
              </p>
              <div className="flex gap-4" role="radiogroup" aria-required="true">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="election83b"
                    checked={election83b === true}
                    onChange={() => { setElection83b(true); setErrors(prev => ({ ...prev, election83b: undefined })); }}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                    aria-describedby={`${formId}-election83b-desc`}
                  />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="election83b"
                    checked={election83b === false}
                    onChange={() => { setElection83b(false); setErrors(prev => ({ ...prev, election83b: undefined })); }}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm">No</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="election83b"
                    checked={election83b === null}
                    onChange={() => setElection83b(null)}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm">Not sure</span>
                </label>
              </div>
              <p id={`${formId}-election83b-desc`} className="text-xs text-amber-700 mt-2">
                An 83(b) election, filed within 30 days of grant, starts your holding period earlier.
              </p>
              {errors.election83b && touched.election83b && (
                <p className="text-sm text-red-600 mt-2" role="alert">
                  {errors.election83b}
                </p>
              )}
            </div>
          )}
        </fieldset>

        {/* Key Dates */}
        {showAnyDateField && (
          <fieldset className="space-y-4">
            <legend className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 w-full">
              Key Dates
            </legend>

            {getDateHelperText() && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3" role="note">
                <p className="text-sm text-blue-800">{getDateHelperText()}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {showGrantDate && (
                <div>
                  <label htmlFor={`${formId}-grantDate`} className="block text-sm font-medium text-gray-700 mb-1">
                    Grant Date
                    {stockType === 'restricted_stock' && election83b && <span className="text-red-500" aria-hidden="true"> *</span>}
                  </label>
                  <input
                    type="date"
                    id={`${formId}-grantDate`}
                    value={grantDate}
                    onChange={(e) => setGrantDate(e.target.value)}
                    onBlur={() => handleBlur('grantDate')}
                    aria-required={stockType === 'restricted_stock' && election83b === true}
                    aria-invalid={errors.grantDate && touched.grantDate ? 'true' : undefined}
                    aria-describedby={errors.grantDate && touched.grantDate ? `${formId}-grantDate-error` : undefined}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                      errors.grantDate && touched.grantDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.grantDate && touched.grantDate && (
                    <p id={`${formId}-grantDate-error`} className="text-sm text-red-600 mt-1" role="alert">
                      {errors.grantDate}
                    </p>
                  )}
                </div>
              )}

              {showExerciseDate && (
                <div>
                  <label htmlFor={`${formId}-exerciseDate`} className="block text-sm font-medium text-gray-700 mb-1">
                    Exercise Date <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="date"
                    id={`${formId}-exerciseDate`}
                    value={exerciseDate}
                    onChange={(e) => setExerciseDate(e.target.value)}
                    onBlur={() => handleBlur('exerciseDate')}
                    aria-required="true"
                    aria-invalid={errors.exerciseDate && touched.exerciseDate ? 'true' : undefined}
                    aria-describedby={`${formId}-exerciseDate-help ${errors.exerciseDate && touched.exerciseDate ? `${formId}-exerciseDate-error` : ''}`}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                      errors.exerciseDate && touched.exerciseDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  <p id={`${formId}-exerciseDate-help`} className="text-xs text-gray-500 mt-1">
                    When you paid to convert options to shares
                  </p>
                  {errors.exerciseDate && touched.exerciseDate && (
                    <p id={`${formId}-exerciseDate-error`} className="text-sm text-red-600 mt-1" role="alert">
                      {errors.exerciseDate}
                    </p>
                  )}
                </div>
              )}

              {showVestingDate && (
                <div>
                  <label htmlFor={`${formId}-vestingDate`} className="block text-sm font-medium text-gray-700 mb-1">
                    Vesting Date <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="date"
                    id={`${formId}-vestingDate`}
                    value={vestingDate}
                    onChange={(e) => setVestingDate(e.target.value)}
                    onBlur={() => handleBlur('vestingDate')}
                    aria-required="true"
                    aria-invalid={errors.vestingDate && touched.vestingDate ? 'true' : undefined}
                    aria-describedby={errors.vestingDate && touched.vestingDate ? `${formId}-vestingDate-error` : undefined}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                      errors.vestingDate && touched.vestingDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.vestingDate && touched.vestingDate && (
                    <p id={`${formId}-vestingDate-error`} className="text-sm text-red-600 mt-1" role="alert">
                      {errors.vestingDate}
                    </p>
                  )}
                </div>
              )}

              {showPurchaseDate && (
                <div>
                  <label htmlFor={`${formId}-purchaseDate`} className="block text-sm font-medium text-gray-700 mb-1">
                    {stockType === 'gift' ? "Donor's Acquisition Date" : 'Purchase Date'} <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="date"
                    id={`${formId}-purchaseDate`}
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    onBlur={() => handleBlur('purchaseDate')}
                    aria-required="true"
                    aria-invalid={errors.purchaseDate && touched.purchaseDate ? 'true' : undefined}
                    aria-describedby={errors.purchaseDate && touched.purchaseDate ? `${formId}-purchaseDate-error` : undefined}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                      errors.purchaseDate && touched.purchaseDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.purchaseDate && touched.purchaseDate && (
                    <p id={`${formId}-purchaseDate-error`} className="text-sm text-red-600 mt-1" role="alert">
                      {errors.purchaseDate}
                    </p>
                  )}
                </div>
              )}

              {showConversionDate && (
                <div>
                  <label htmlFor={`${formId}-conversionDate`} className="block text-sm font-medium text-gray-700 mb-1">
                    Conversion Date <span className="text-red-500" aria-hidden="true">*</span>
                  </label>
                  <input
                    type="date"
                    id={`${formId}-conversionDate`}
                    value={conversionDate}
                    onChange={(e) => setConversionDate(e.target.value)}
                    onBlur={() => handleBlur('conversionDate')}
                    aria-required="true"
                    aria-invalid={errors.conversionDate && touched.conversionDate ? 'true' : undefined}
                    aria-describedby={errors.conversionDate && touched.conversionDate ? `${formId}-conversionDate-error` : undefined}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                      errors.conversionDate && touched.conversionDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.conversionDate && touched.conversionDate && (
                    <p id={`${formId}-conversionDate-error`} className="text-sm text-red-600 mt-1" role="alert">
                      {errors.conversionDate}
                    </p>
                  )}
                </div>
              )}

              <div>
                <label htmlFor={`${formId}-saleDate`} className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Sale Date <span className="text-red-500" aria-hidden="true">*</span>
                </label>
                <input
                  type="date"
                  id={`${formId}-saleDate`}
                  value={saleDate}
                  onChange={(e) => setSaleDate(e.target.value)}
                  onBlur={() => handleBlur('saleDate')}
                  aria-required="true"
                  aria-invalid={errors.saleDate && touched.saleDate ? 'true' : undefined}
                  aria-describedby={`${formId}-saleDate-help ${errors.saleDate && touched.saleDate ? `${formId}-saleDate-error` : ''}`}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                    errors.saleDate && touched.saleDate ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
                <p id={`${formId}-saleDate-help`} className="text-xs text-gray-500 mt-1">
                  When you expect to sell (exit, IPO, secondary, etc.)
                </p>
                {errors.saleDate && touched.saleDate && (
                  <p id={`${formId}-saleDate-error`} className="text-sm text-red-600 mt-1" role="alert">
                    {errors.saleDate}
                  </p>
                )}
              </div>
            </div>
          </fieldset>
        )}

        {/* Value */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 w-full">
            Value
          </legend>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor={`${formId}-costBasis`} className="block text-sm font-medium text-gray-700 mb-1">
                Cost Basis <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500" aria-hidden="true">$</span>
                <input
                  type="number"
                  id={`${formId}-costBasis`}
                  value={costBasis}
                  onChange={(e) => setCostBasis(e.target.value)}
                  onBlur={() => handleBlur('costBasis')}
                  placeholder="50,000"
                  min="0"
                  aria-required="true"
                  aria-invalid={errors.costBasis && touched.costBasis ? 'true' : undefined}
                  aria-describedby={`${formId}-costBasis-help ${errors.costBasis && touched.costBasis ? `${formId}-costBasis-error` : ''}`}
                  className={`w-full pl-7 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                    errors.costBasis && touched.costBasis ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
              </div>
              <p id={`${formId}-costBasis-help`} className="text-xs text-gray-500 mt-1">
                What you paid, or the value included in your income
              </p>
              {errors.costBasis && touched.costBasis && (
                <p id={`${formId}-costBasis-error`} className="text-sm text-red-600 mt-1" role="alert">
                  {errors.costBasis}
                </p>
              )}
            </div>

            <div>
              <label htmlFor={`${formId}-expectedValue`} className="block text-sm font-medium text-gray-700 mb-1">
                Expected Sale Value <span className="text-red-500" aria-hidden="true">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500" aria-hidden="true">$</span>
                <input
                  type="number"
                  id={`${formId}-expectedValue`}
                  value={expectedValue}
                  onChange={(e) => setExpectedValue(e.target.value)}
                  onBlur={() => handleBlur('expectedValue')}
                  placeholder="2,000,000"
                  min="0"
                  aria-required="true"
                  aria-invalid={errors.expectedValue && touched.expectedValue ? 'true' : undefined}
                  aria-describedby={errors.expectedValue && touched.expectedValue ? `${formId}-expectedValue-error` : undefined}
                  className={`w-full pl-7 pr-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 ${
                    errors.expectedValue && touched.expectedValue ? 'border-red-500 bg-red-50' : 'border-gray-300'
                  }`}
                />
              </div>
              {errors.expectedValue && touched.expectedValue && (
                <p id={`${formId}-expectedValue-error`} className="text-sm text-red-600 mt-1" role="alert">
                  {errors.expectedValue}
                </p>
              )}
            </div>
          </div>
        </fieldset>

        {/* Location */}
        <fieldset className="space-y-4">
          <legend className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2 w-full">
            Your Location
          </legend>

          <div className="max-w-md">
            <label htmlFor={`${formId}-stateCode`} className="block text-sm font-medium text-gray-700 mb-1">
              State of Residence <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <select
              id={`${formId}-stateCode`}
              value={stateCode}
              onChange={(e) => setStateCode(e.target.value)}
              aria-required="true"
              aria-describedby={`${formId}-stateCode-help`}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900"
            >
              {sortedStates.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
            <p id={`${formId}-stateCode-help`} className="text-xs text-gray-500 mt-1">
              Your state at time of sale determines tax treatment
            </p>
          </div>
        </fieldset>

        {/* Calculate Button */}
        <div className="pt-4">
          <button
            type="submit"
            className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors focus:ring-4 focus:ring-emerald-200 ${
              isFormValid()
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-emerald-600 text-white hover:bg-emerald-700'
            }`}
          >
            Calculate My QSBS Savings
          </button>
          {Object.keys(errors).length > 0 && Object.keys(touched).length > 0 && (
            <p className="text-sm text-red-600 text-center mt-2" role="alert">
              Please fix the errors above to calculate your savings
            </p>
          )}
        </div>
      </form>

      {/* Saved Scenarios Panel - available from form view to load previous scenarios */}
      <SavedScenariosPanel onLoadScenario={handleLoadScenario} />
    </div>
  );
}
