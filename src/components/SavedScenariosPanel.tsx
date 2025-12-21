'use client';

import { useState, useEffect } from 'react';
import type { CalculatorInputs, CalculationResults } from '@/lib/calculations';
import { formatCurrency, formatDate } from '@/lib/calculations';
import {
  SavedScenario,
  getSavedScenarios,
  saveScenario,
  deleteScenario,
  renameScenario,
  generateScenarioName,
} from '@/lib/saved-scenarios';

interface SavedScenariosPanelProps {
  currentInputs?: CalculatorInputs;
  currentResults?: CalculationResults;
  onLoadScenario?: (inputs: CalculatorInputs, results: CalculationResults) => void;
}

export default function SavedScenariosPanel({
  currentInputs,
  currentResults,
  onLoadScenario,
}: SavedScenariosPanelProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scenarios, setScenarios] = useState<SavedScenario[]>([]);
  const [showSaveForm, setShowSaveForm] = useState(false);
  const [saveName, setSaveName] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editName, setEditName] = useState('');
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    setScenarios(getSavedScenarios());
  }, []);

  const handleSave = () => {
    if (!currentInputs || !currentResults) return;

    const name = saveName.trim() || generateScenarioName(currentInputs, currentResults);
    saveScenario(name, currentInputs, currentResults);
    setScenarios(getSavedScenarios());
    setShowSaveForm(false);
    setSaveName('');
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 2000);
  };

  const handleDelete = (id: string) => {
    deleteScenario(id);
    setScenarios(getSavedScenarios());
  };

  const handleRename = (id: string) => {
    if (editName.trim()) {
      renameScenario(id, editName.trim());
      setScenarios(getSavedScenarios());
    }
    setEditingId(null);
    setEditName('');
  };

  const handleLoad = (scenario: SavedScenario) => {
    if (onLoadScenario) {
      onLoadScenario(scenario.inputs, scenario.results);
    }
  };

  const formatRelativeTime = (dateStr: string): string => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    return date.toLocaleDateString();
  };

  const canSave = currentInputs && currentResults;

  return (
    <div className="print:hidden">
      {/* Floating button when collapsed */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-slate-900 text-white rounded-full p-4 shadow-lg hover:bg-slate-800 transition-colors z-50 flex items-center gap-2"
          title="Saved Scenarios"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
          </svg>
          {scenarios.length > 0 && (
            <span className="bg-emerald-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {scenarios.length}
            </span>
          )}
        </button>
      )}

      {/* Panel */}
      {isOpen && (
        <div className="fixed bottom-0 right-0 w-full md:w-96 bg-white border-t md:border-l border-gray-200 shadow-xl z-50 max-h-[70vh] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
              </svg>
              <h3 className="font-semibold text-gray-900">Saved Scenarios</h3>
              {scenarios.length > 0 && (
                <span className="text-xs text-gray-500">({scenarios.length}/10)</span>
              )}
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-gray-600"
              aria-label="Close panel"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Save button */}
          {canSave && (
            <div className="px-4 py-3 border-b border-gray-200">
              {!showSaveForm ? (
                <button
                  onClick={() => {
                    setShowSaveForm(true);
                    setSaveName(generateScenarioName(currentInputs, currentResults));
                  }}
                  className={`w-full py-2 px-4 rounded-lg font-medium transition-colors ${
                    justSaved
                      ? 'bg-emerald-100 text-emerald-700'
                      : 'bg-emerald-600 text-white hover:bg-emerald-700'
                  }`}
                >
                  {justSaved ? '✓ Saved!' : 'Save Current Results'}
                </button>
              ) : (
                <div className="space-y-2">
                  <input
                    type="text"
                    value={saveName}
                    onChange={(e) => setSaveName(e.target.value)}
                    placeholder="Scenario name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    autoFocus
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSave();
                      if (e.key === 'Escape') setShowSaveForm(false);
                    }}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleSave}
                      className="flex-1 py-2 px-4 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setShowSaveForm(false)}
                      className="py-2 px-4 text-gray-600 hover:text-gray-800 text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Scenarios list */}
          <div className="flex-1 overflow-y-auto">
            {scenarios.length === 0 ? (
              <div className="px-4 py-8 text-center text-gray-500">
                <svg className="w-12 h-12 mx-auto mb-3 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
                <p className="text-sm">No saved scenarios yet</p>
                <p className="text-xs text-gray-400 mt-1">Save your results to compare later</p>
              </div>
            ) : (
              <ul className="divide-y divide-gray-100">
                {scenarios.map((scenario) => (
                  <li
                    key={scenario.id}
                    className="px-4 py-3 hover:bg-gray-50 transition-colors"
                  >
                    {editingId === scenario.id ? (
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="flex-1 px-2 py-1 border border-gray-300 rounded text-sm"
                          autoFocus
                          onKeyDown={(e) => {
                            if (e.key === 'Enter') handleRename(scenario.id);
                            if (e.key === 'Escape') setEditingId(null);
                          }}
                        />
                        <button
                          onClick={() => handleRename(scenario.id)}
                          className="text-emerald-600 hover:text-emerald-700"
                        >
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </button>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start justify-between">
                          <div
                            className="flex-1 cursor-pointer"
                            onClick={() => handleLoad(scenario)}
                          >
                            <p className="font-medium text-gray-900 text-sm">{scenario.name}</p>
                            <div className="flex items-center gap-2 mt-1 text-xs text-gray-500">
                              <span className="font-medium text-emerald-600">
                                {formatCurrency(scenario.results.totalSavings)}
                              </span>
                              <span>·</span>
                              <span>{scenario.inputs.stateCode}</span>
                              <span>·</span>
                              <span>{formatRelativeTime(scenario.createdAt)}</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1 ml-2">
                            <button
                              onClick={() => {
                                setEditingId(scenario.id);
                                setEditName(scenario.name);
                              }}
                              className="p-1 text-gray-400 hover:text-gray-600"
                              title="Rename"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                              </svg>
                            </button>
                            <button
                              onClick={() => handleDelete(scenario.id)}
                              className="p-1 text-gray-400 hover:text-red-500"
                              title="Delete"
                            >
                              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                            </button>
                          </div>
                        </div>
                        <div className="mt-2 flex flex-wrap gap-1">
                          {scenario.results.holdingPeriod.isQualified ? (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-emerald-100 text-emerald-700">
                              Qualified
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-amber-100 text-amber-700">
                              {scenario.results.holdingPeriod.daysRemaining}d left
                            </span>
                          )}
                          {scenario.results.stateTax.status === 'none' && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-red-100 text-red-700">
                              No state QSBS
                            </span>
                          )}
                          {scenario.inputs.saleDate && (
                            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-xs bg-gray-100 text-gray-600">
                              Sale: {formatDate(scenario.inputs.saleDate)}
                            </span>
                          )}
                        </div>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          {scenarios.length > 0 && (
            <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 text-xs text-gray-500">
              Click a scenario to load it · Stored locally on your device
            </div>
          )}
        </div>
      )}
    </div>
  );
}
