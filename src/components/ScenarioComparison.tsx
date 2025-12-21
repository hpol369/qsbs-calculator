'use client';

import { useState, useMemo } from 'react';
import type { CalculatorInputs, CalculationResults } from '@/lib/calculations';
import { calculateAll, formatCurrency, formatDate } from '@/lib/calculations';

interface ScenarioComparisonProps {
  baseInputs: CalculatorInputs;
  baseResults: CalculationResults;
}

type ScenarioType = 'wait_for_qsbs' | 'sell_early' | 'different_state' | 'custom';

interface Scenario {
  id: string;
  name: string;
  description: string;
  type: ScenarioType;
  inputs: CalculatorInputs;
  results: CalculationResults;
}

export default function ScenarioComparison({ baseInputs, baseResults }: ScenarioComparisonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customSaleDate, setCustomSaleDate] = useState('');
  const [customState, setCustomState] = useState('');
  const [customValue, setCustomValue] = useState('');

  // Generate "Wait for QSBS" scenario if not qualified
  const waitForQsbsScenario = useMemo((): Scenario | null => {
    if (baseResults.holdingPeriod.isQualified || !baseResults.holdingPeriod.qualificationDate) {
      return null;
    }

    // Set sale date to 1 day after qualification
    const qualDate = new Date(baseResults.holdingPeriod.qualificationDate);
    qualDate.setDate(qualDate.getDate() + 1);

    const newInputs: CalculatorInputs = {
      ...baseInputs,
      saleDate: qualDate,
    };

    const newResults = calculateAll(newInputs);

    return {
      id: 'wait_for_qsbs',
      name: 'Wait for Full QSBS',
      description: `Sell after ${formatDate(qualDate)} when 5-year period is complete`,
      type: 'wait_for_qsbs',
      inputs: newInputs,
      results: newResults,
    };
  }, [baseInputs, baseResults]);

  // Generate "Sell Early" scenario if qualified
  const sellEarlyScenario = useMemo((): Scenario | null => {
    if (!baseResults.holdingPeriod.isQualified || !baseResults.holdingPeriod.qualificationDate) {
      return null;
    }

    // What if they had sold 1 year before qualification?
    const earlyDate = new Date(baseResults.holdingPeriod.qualificationDate);
    earlyDate.setFullYear(earlyDate.getFullYear() - 1);

    // Only show if early date is in the past
    if (earlyDate <= new Date()) {
      return null;
    }

    const newInputs: CalculatorInputs = {
      ...baseInputs,
      saleDate: earlyDate,
    };

    const newResults = calculateAll(newInputs);

    return {
      id: 'sell_early',
      name: 'If You Had Sold Early',
      description: `What it would have cost if you sold ${formatDate(earlyDate)}`,
      type: 'sell_early',
      inputs: newInputs,
      results: newResults,
    };
  }, [baseInputs, baseResults]);

  // Generate "Move to No-Tax State" scenario if in non-conforming state
  const moveStateScenario = useMemo((): Scenario | null => {
    if (baseResults.stateTax.status !== 'none') {
      return null;
    }

    const newInputs: CalculatorInputs = {
      ...baseInputs,
      stateCode: 'TX', // Texas - no income tax
    };

    const newResults = calculateAll(newInputs);

    return {
      id: 'move_state',
      name: 'If You Moved to Texas',
      description: 'Move to a state with no income tax before sale',
      type: 'different_state',
      inputs: newInputs,
      results: newResults,
    };
  }, [baseInputs, baseResults]);

  const addCustomScenario = () => {
    const newInputs: CalculatorInputs = {
      ...baseInputs,
      saleDate: customSaleDate ? new Date(customSaleDate + 'T00:00:00') : baseInputs.saleDate,
      stateCode: customState || baseInputs.stateCode,
      expectedValue: customValue ? parseFloat(customValue) : baseInputs.expectedValue,
    };

    const newResults = calculateAll(newInputs);

    const changes = [];
    if (customSaleDate && customSaleDate !== baseInputs.saleDate?.toISOString().split('T')[0]) {
      changes.push(`Sale: ${formatDate(new Date(customSaleDate + 'T00:00:00'))}`);
    }
    if (customState && customState !== baseInputs.stateCode) {
      changes.push(`State: ${customState}`);
    }
    if (customValue && parseFloat(customValue) !== baseInputs.expectedValue) {
      changes.push(`Value: ${formatCurrency(parseFloat(customValue))}`);
    }

    const scenario: Scenario = {
      id: `custom_${Date.now()}`,
      name: 'Custom Scenario',
      description: changes.join(' | ') || 'Same as base',
      type: 'custom',
      inputs: newInputs,
      results: newResults,
    };

    setScenarios([...scenarios, scenario]);
    setShowCustomForm(false);
    setCustomSaleDate('');
    setCustomState('');
    setCustomValue('');
  };

  const removeScenario = (id: string) => {
    setScenarios(scenarios.filter(s => s.id !== id));
  };

  const allScenarios = [
    waitForQsbsScenario,
    sellEarlyScenario,
    moveStateScenario,
    ...scenarios,
  ].filter((s): s is Scenario => s !== null);

  const hasAvailableScenarios = allScenarios.length > 0 || true; // Always show custom option

  if (!hasAvailableScenarios) {
    return null;
  }

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden print:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 px-6 py-4 flex items-center justify-between hover:from-blue-100 hover:to-indigo-100 transition-colors"
      >
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 rounded-lg p-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-gray-900">What If? Scenario Comparison</h3>
            <p className="text-sm text-gray-600">Compare different sale dates, states, or values</p>
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="p-6 space-y-6">
          {/* Comparison Table */}
          {allScenarios.length > 0 && (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-2 font-medium text-gray-500">Scenario</th>
                    <th className="text-right py-3 px-2 font-medium text-gray-500">Total Savings</th>
                    <th className="text-right py-3 px-2 font-medium text-gray-500">Difference</th>
                    <th className="text-center py-3 px-2 font-medium text-gray-500">Qualified?</th>
                    <th className="py-3 px-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {/* Base scenario */}
                  <tr className="border-b border-gray-100 bg-emerald-50">
                    <td className="py-3 px-2">
                      <div className="font-medium text-gray-900">Your Current Scenario</div>
                      <div className="text-xs text-gray-500">
                        Sale: {formatDate(baseInputs.saleDate)} | State: {baseInputs.stateCode}
                      </div>
                    </td>
                    <td className="text-right py-3 px-2 font-semibold text-emerald-700">
                      {formatCurrency(baseResults.totalSavings)}
                    </td>
                    <td className="text-right py-3 px-2 text-gray-400">—</td>
                    <td className="text-center py-3 px-2">
                      {baseResults.holdingPeriod.isQualified ? (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-emerald-100 text-emerald-800">Yes</span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-amber-100 text-amber-800">No</span>
                      )}
                    </td>
                    <td className="py-3 px-2"></td>
                  </tr>

                  {/* Alternative scenarios */}
                  {allScenarios.map((scenario) => {
                    const diff = scenario.results.totalSavings - baseResults.totalSavings;
                    const isPositive = diff > 0;
                    const isNegative = diff < 0;

                    return (
                      <tr key={scenario.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-3 px-2">
                          <div className="font-medium text-gray-900">{scenario.name}</div>
                          <div className="text-xs text-gray-500">{scenario.description}</div>
                        </td>
                        <td className="text-right py-3 px-2 font-semibold text-gray-900">
                          {formatCurrency(scenario.results.totalSavings)}
                        </td>
                        <td className={`text-right py-3 px-2 font-medium ${isPositive ? 'text-emerald-600' : isNegative ? 'text-red-600' : 'text-gray-400'}`}>
                          {isPositive && '+'}
                          {diff !== 0 ? formatCurrency(diff) : '—'}
                        </td>
                        <td className="text-center py-3 px-2">
                          {scenario.results.holdingPeriod.isQualified ? (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-emerald-100 text-emerald-800">Yes</span>
                          ) : (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs bg-amber-100 text-amber-800">No</span>
                          )}
                        </td>
                        <td className="py-3 px-2">
                          {scenario.type === 'custom' && (
                            <button
                              onClick={() => removeScenario(scenario.id)}
                              className="text-gray-400 hover:text-red-500"
                              aria-label="Remove scenario"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {/* Quick Add Buttons */}
          <div className="flex flex-wrap gap-2">
            {!waitForQsbsScenario && !baseResults.holdingPeriod.isQualified && (
              <div className="text-sm text-gray-500 py-2">No alternative scenarios available</div>
            )}
          </div>

          {/* Custom Scenario Form */}
          {!showCustomForm ? (
            <button
              onClick={() => setShowCustomForm(true)}
              className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              Add Custom Scenario
            </button>
          ) : (
            <div className="bg-gray-50 rounded-lg p-4 space-y-4">
              <h4 className="font-medium text-gray-900">Create Custom Scenario</h4>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Sale Date</label>
                  <input
                    type="date"
                    value={customSaleDate}
                    onChange={(e) => setCustomSaleDate(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Same as current"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">State</label>
                  <select
                    value={customState}
                    onChange={(e) => setCustomState(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white"
                  >
                    <option value="">Same as current</option>
                    <option value="TX">Texas (no income tax)</option>
                    <option value="FL">Florida (no income tax)</option>
                    <option value="WA">Washington (no income tax)</option>
                    <option value="NV">Nevada (no income tax)</option>
                    <option value="CA">California (no QSBS)</option>
                    <option value="NY">New York</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Sale Value</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={customValue}
                      onChange={(e) => setCustomValue(e.target.value)}
                      placeholder="Same as current"
                      className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={addCustomScenario}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700"
                >
                  Add Scenario
                </button>
                <button
                  onClick={() => setShowCustomForm(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 text-sm"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Insight Box */}
          {waitForQsbsScenario && (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <div>
                  <p className="font-medium text-emerald-900">
                    Waiting could save you {formatCurrency(waitForQsbsScenario.results.totalSavings - baseResults.totalSavings)} more
                  </p>
                  <p className="text-sm text-emerald-700 mt-1">
                    If you can hold until {formatDate(waitForQsbsScenario.inputs.saleDate)}, you&apos;ll qualify for 100% QSBS exclusion.
                  </p>
                </div>
              </div>
            </div>
          )}

          {moveStateScenario && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="font-medium text-blue-900">
                    Moving could save you {formatCurrency(moveStateScenario.results.totalSavings - baseResults.totalSavings)} in state taxes
                  </p>
                  <p className="text-sm text-blue-700 mt-1">
                    {baseInputs.stateCode} doesn&apos;t recognize QSBS. A no-income-tax state like Texas or Florida would eliminate your state tax liability.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
