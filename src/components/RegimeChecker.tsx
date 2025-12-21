'use client';

import { useState } from 'react';
import { OBBBA_EFFECTIVE_DATE } from '@/lib/calculations';

export default function RegimeChecker() {
  const [date, setDate] = useState<string>('');
  const [result, setResult] = useState<'pre' | 'post' | null>(null);

  const checkRegime = () => {
    if (!date) return;
    const acquisitionDate = new Date(date);
    setResult(acquisitionDate >= OBBBA_EFFECTIVE_DATE ? 'post' : 'pre');
  };

  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="bg-slate-800 text-white rounded-xl p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Quick Check: Which Rules Apply to Your Stock?</h2>

      <p className="text-slate-300 text-sm mb-4">
        The OBBBA changed QSBS rules on July 4, 2025. Your stock acquisition date determines which rules apply.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm text-slate-300 mb-1">
            When did you acquire this stock?
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setResult(null);
            }}
            className="w-full px-3 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
          />
          <p className="text-xs text-slate-400 mt-1">
            For options: use exercise date. For restricted stock with 83(b): use grant date.
          </p>
        </div>
        <button
          onClick={checkRegime}
          disabled={!date}
          className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-6 py-2 rounded font-medium self-end transition-colors"
        >
          Check Rules
        </button>
      </div>

      {result === 'pre' && (
        <div className="bg-slate-700 rounded-lg p-4 mt-4">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 text-2xl">📋</span>
            <div>
              <p className="font-semibold text-amber-400 mb-2">Old Rules Apply (Pre-OBBBA)</p>
              <p className="text-slate-300 mb-3">
                Your stock was acquired before {formatDate(OBBBA_EFFECTIVE_DATE)}. The original QSBS rules apply:
              </p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• <strong>$10M</strong> exclusion cap (or 10× your basis if higher)</li>
                <li>• <strong>All-or-nothing:</strong> Full 5 years required for any exclusion</li>
                <li>• <strong>$50M</strong> gross assets threshold at issuance</li>
                <li>• <strong>0% exclusion</strong> if you sell even 1 day early</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {result === 'post' && (
        <div className="bg-slate-700 rounded-lg p-4 mt-4">
          <div className="flex items-start gap-3">
            <span className="text-emerald-400 text-2xl">✨</span>
            <div>
              <p className="font-semibold text-emerald-400 mb-2">New Rules Apply (Post-OBBBA)</p>
              <p className="text-slate-300 mb-3">
                Your stock was acquired on or after {formatDate(OBBBA_EFFECTIVE_DATE)}. The expanded QSBS rules apply:
              </p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• <strong>$15M</strong> exclusion cap (or 10× your basis if higher)</li>
                <li>• <strong>Tiered exclusions:</strong> 50% at 3 years, 75% at 4 years, 100% at 5 years</li>
                <li>• <strong>$75M</strong> gross assets threshold at issuance</li>
                <li>• <strong>Inflation adjustments</strong> to the cap starting in 2027</li>
              </ul>
              <p className="text-emerald-300 text-sm mt-3">
                You get partial benefit even if you sell before 5 years (as long as you held 3+ years).
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
