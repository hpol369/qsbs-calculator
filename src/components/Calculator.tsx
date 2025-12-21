'use client';

import { useState, useEffect } from 'react';
import { sortedStates } from '@/lib/states';
import type { CalculatorInputs, StockType, AcquisitionMethod, CalculationResults } from '@/lib/calculations';
import { calculateAll } from '@/lib/calculations';
import { decodeState } from '@/lib/url-state';
import Results from './Results';

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

export default function Calculator() {
  const [showResults, setShowResults] = useState(false);
  const [results, setResults] = useState<CalculationResults | null>(null);
  const [inputs, setInputs] = useState<CalculatorInputs | null>(null);

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

  const handleCalculate = (overrideInputs?: CalculatorInputs) => {
    const calcInputs: CalculatorInputs = overrideInputs || {
      stockType,
      acquisitionMethod,
      election83b,
      grantDate: parseDateFromInput(grantDate),
      exerciseDate: parseDateFromInput(exerciseDate),
      vestingDate: parseDateFromInput(vestingDate),
      purchaseDate: parseDateFromInput(purchaseDate),
      conversionDate: parseDateFromInput(conversionDate),
      saleDate: parseDateFromInput(saleDate) || new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // Default to 1 year from now
      costBasis: parseFloat(costBasis) || 0,
      expectedValue: parseFloat(expectedValue) || 0,
      stateCode,
    };

    const calculationResults = calculateAll(calcInputs);
    setResults(calculationResults);
    setInputs(calcInputs);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowResults(false);
    setResults(null);
    setInputs(null);
    // Clear URL params
    if (typeof window !== 'undefined') {
      window.history.replaceState({}, '', window.location.pathname);
    }
  };

  const isFormValid = (): boolean => {
    // Check required fields based on stock type
    if (!costBasis || !expectedValue || !saleDate) return false;

    if (stockType === 'common_stock' && !purchaseDate) return false;
    if ((stockType === 'iso' || stockType === 'nso') && !exerciseDate) return false;
    if (stockType === 'restricted_stock' && !election83b && !vestingDate) return false;
    if (stockType === 'restricted_stock' && election83b && !grantDate) return false;
    if (stockType === 'rsu' && !vestingDate) return false;
    if (stockType === 'safe_conversion' && !conversionDate) return false;

    return true;
  };

  if (showResults && results && inputs) {
    return <Results results={results} inputs={inputs} onReset={handleReset} />;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-4">
        <h2 className="text-xl font-semibold text-white">QSBS Savings Calculator</h2>
        <p className="text-emerald-100 text-sm mt-1">Estimate your Section 1202 tax savings in 60 seconds</p>
      </div>

      <div className="p-6 space-y-6">
        {/* Stock Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">Your Stock</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="stockType" className="block text-sm font-medium text-gray-700 mb-1">
                Stock Type
              </label>
              <select
                id="stockType"
                value={stockType}
                onChange={(e) => {
                  setStockType(e.target.value as StockType);
                  setElection83b(null);
                }}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900"
              >
                {stockTypeOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="acquisitionMethod" className="block text-sm font-medium text-gray-700 mb-1">
                How Acquired
              </label>
              <select
                id="acquisitionMethod"
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
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Did you file an 83(b) election?
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="election83b"
                    checked={election83b === true}
                    onChange={() => setElection83b(true)}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm">Yes</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="election83b"
                    checked={election83b === false}
                    onChange={() => setElection83b(false)}
                    className="mr-2 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-sm">No</span>
                </label>
                <label className="flex items-center">
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
              <p className="text-xs text-amber-700 mt-2">
                An 83(b) election, filed within 30 days of grant, starts your holding period earlier.
              </p>
            </div>
          )}
        </div>

        {/* Key Dates */}
        {showAnyDateField && (
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">Key Dates</h3>

            {getDateHelperText() && (
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                <p className="text-sm text-blue-800">{getDateHelperText()}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-4">
              {showGrantDate && (
                <div>
                  <label htmlFor="grantDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Grant Date
                  </label>
                  <input
                    type="date"
                    id="grantDate"
                    value={grantDate}
                    onChange={(e) => setGrantDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              )}

              {showExerciseDate && (
                <div>
                  <label htmlFor="exerciseDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Exercise Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="exerciseDate"
                    value={exerciseDate}
                    onChange={(e) => setExerciseDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              )}

              {showVestingDate && (
                <div>
                  <label htmlFor="vestingDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Vesting Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="vestingDate"
                    value={vestingDate}
                    onChange={(e) => setVestingDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              )}

              {showPurchaseDate && (
                <div>
                  <label htmlFor="purchaseDate" className="block text-sm font-medium text-gray-700 mb-1">
                    {stockType === 'gift' ? "Donor's Acquisition Date" : 'Purchase Date'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="purchaseDate"
                    value={purchaseDate}
                    onChange={(e) => setPurchaseDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              )}

              {showConversionDate && (
                <div>
                  <label htmlFor="conversionDate" className="block text-sm font-medium text-gray-700 mb-1">
                    Conversion Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    id="conversionDate"
                    value={conversionDate}
                    onChange={(e) => setConversionDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              )}

              <div>
                <label htmlFor="saleDate" className="block text-sm font-medium text-gray-700 mb-1">
                  Expected Sale Date <span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  id="saleDate"
                  value={saleDate}
                  onChange={(e) => setSaleDate(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        )}

        {/* Value */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">Value</h3>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="costBasis" className="block text-sm font-medium text-gray-700 mb-1">
                Cost Basis <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  id="costBasis"
                  value={costBasis}
                  onChange={(e) => setCostBasis(e.target.value)}
                  placeholder="50,000"
                  min="0"
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">What you paid, or the value included in your income</p>
            </div>

            <div>
              <label htmlFor="expectedValue" className="block text-sm font-medium text-gray-700 mb-1">
                Expected Sale Value <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <span className="absolute left-3 top-2 text-gray-500">$</span>
                <input
                  type="number"
                  id="expectedValue"
                  value={expectedValue}
                  onChange={(e) => setExpectedValue(e.target.value)}
                  placeholder="2,000,000"
                  min="0"
                  className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-900 border-b border-gray-200 pb-2">Your Location</h3>

          <div className="max-w-md">
            <label htmlFor="stateCode" className="block text-sm font-medium text-gray-700 mb-1">
              State of Residence <span className="text-red-500">*</span>
            </label>
            <select
              id="stateCode"
              value={stateCode}
              onChange={(e) => setStateCode(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white text-gray-900"
            >
              {sortedStates.map((state) => (
                <option key={state.code} value={state.code}>
                  {state.name}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">Your state at time of sale determines tax treatment</p>
          </div>
        </div>

        {/* Calculate Button */}
        <div className="pt-4">
          <button
            onClick={() => handleCalculate()}
            disabled={!isFormValid()}
            className="w-full bg-emerald-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-200 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            Calculate My QSBS Savings
          </button>
        </div>
      </div>
    </div>
  );
}
