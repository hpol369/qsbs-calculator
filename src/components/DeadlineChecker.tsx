'use client';

import { useState } from 'react';

export default function DeadlineChecker() {
  const [grantDate, setGrantDate] = useState<string>('');
  const [result, setResult] = useState<{
    deadline: Date;
    daysRemaining: number;
    status: 'ok' | 'urgent' | 'missed';
  } | null>(null);

  const checkDeadline = () => {
    if (!grantDate) return;

    const grant = new Date(grantDate);
    const deadline = new Date(grant);
    deadline.setDate(deadline.getDate() + 30);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const diffMs = deadline.getTime() - today.getTime();
    const daysRemaining = Math.ceil(diffMs / (1000 * 60 * 60 * 24));

    let status: 'ok' | 'urgent' | 'missed';
    if (daysRemaining < 0) {
      status = 'missed';
    } else if (daysRemaining <= 7) {
      status = 'urgent';
    } else {
      status = 'ok';
    }

    setResult({ deadline, daysRemaining, status });
  };

  const formatDate = (d: Date) => {
    return d.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="bg-slate-800 text-white rounded-xl p-6 mb-8">
      <h2 className="text-xl font-semibold mb-4">Check Your 83(b) Deadline</h2>

      <p className="text-slate-300 text-sm mb-4">
        Enter when you received your restricted stock to see your 30-day filing deadline.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="flex-1">
          <label className="block text-sm text-slate-300 mb-1">
            When did you receive restricted stock?
          </label>
          <input
            type="date"
            value={grantDate}
            onChange={(e) => {
              setGrantDate(e.target.value);
              setResult(null);
            }}
            className="w-full px-3 py-2 rounded bg-slate-700 text-white border border-slate-600 focus:border-emerald-500 focus:outline-none"
          />
          <p className="text-xs text-slate-400 mt-1">
            Use the date you signed the restricted stock agreement or received the grant.
          </p>
        </div>
        <button
          onClick={checkDeadline}
          disabled={!grantDate}
          className="bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-600 disabled:cursor-not-allowed px-6 py-2 rounded font-medium self-end transition-colors"
        >
          Check Deadline
        </button>
      </div>

      {result?.status === 'ok' && (
        <div className="bg-emerald-900/50 border border-emerald-700 rounded-lg p-4 mt-4">
          <div className="flex items-start gap-3">
            <span className="text-emerald-400 text-2xl">&#10003;</span>
            <div>
              <p className="font-semibold text-emerald-400 mb-2">
                You have {result.daysRemaining} days left to file
              </p>
              <p className="text-slate-300 mb-2">
                Your deadline is <strong>{formatDate(result.deadline)}</strong>
              </p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>&#8226; Mail your 83(b) form via certified mail by this date</li>
                <li>&#8226; The postmark date is what counts—don&apos;t wait until the last day</li>
                <li>&#8226; Keep your certified mail receipt as proof</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {result?.status === 'urgent' && (
        <div className="bg-amber-900/50 border border-amber-600 rounded-lg p-4 mt-4">
          <div className="flex items-start gap-3">
            <span className="text-amber-400 text-2xl">&#9888;</span>
            <div>
              <p className="font-semibold text-amber-400 mb-2">
                Only {result.daysRemaining} day{result.daysRemaining === 1 ? '' : 's'} left!
              </p>
              <p className="text-slate-300 mb-2">
                Your deadline is <strong>{formatDate(result.deadline)}</strong>
              </p>
              <div className="bg-amber-800/50 rounded p-3 mt-2">
                <p className="text-amber-200 font-medium mb-1">Act immediately:</p>
                <ul className="text-amber-100 text-sm space-y-1">
                  <li>&#8226; Complete your 83(b) form today</li>
                  <li>&#8226; Go to the post office and send via certified mail</li>
                  <li>&#8226; The postmark must be on or before your deadline</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {result?.status === 'missed' && (
        <div className="bg-red-900/50 border border-red-700 rounded-lg p-4 mt-4">
          <div className="flex items-start gap-3">
            <span className="text-red-400 text-2xl">&#10007;</span>
            <div>
              <p className="font-semibold text-red-400 mb-2">
                Deadline has passed
              </p>
              <p className="text-slate-300 mb-2">
                Your deadline was <strong>{formatDate(result.deadline)}</strong> ({Math.abs(result.daysRemaining)} days ago)
              </p>
              <p className="text-slate-300 text-sm mb-3">
                There is no extension or remedy for a missed 83(b) deadline. Your QSBS holding period will start when shares vest, not when they were granted.
              </p>
              <div className="bg-slate-700 rounded p-3">
                <p className="text-slate-200 font-medium mb-1">What this means for QSBS:</p>
                <ul className="text-slate-300 text-sm space-y-1">
                  <li>&#8226; Each vesting tranche has its own 5-year holding period</li>
                  <li>&#8226; Your earliest shares will qualify first</li>
                  <li>&#8226; Use the calculator below with your vesting dates</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
