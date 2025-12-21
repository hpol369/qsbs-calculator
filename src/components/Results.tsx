'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import type { CalculationResults, CalculatorInputs } from '@/lib/calculations';
import { formatCurrency, formatDate, formatPercent } from '@/lib/calculations';
import { generateShareableUrl, copyToClipboard } from '@/lib/url-state';

interface ResultsProps {
  results: CalculationResults;
  inputs: CalculatorInputs;
  onReset: () => void;
}

export default function Results({ results, inputs, onReset }: ResultsProps) {
  const [copied, setCopied] = useState(false);
  const [showPdfMessage, setShowPdfMessage] = useState(false);
  const [shareableUrl, setShareableUrl] = useState('');
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShareableUrl(generateShareableUrl(inputs));
  }, [inputs]);

  const handleShare = async () => {
    const success = await copyToClipboard(shareableUrl);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleDownloadPdf = () => {
    setShowPdfMessage(true);
    setTimeout(() => {
      window.print();
      setShowPdfMessage(false);
    }, 100);
  };

  const { holdingPeriod, exclusion, federalTax, stateTax } = results;

  const getOverallStatus = () => {
    if (holdingPeriod.saleDateBeforeQualification) {
      return {
        status: 'warning',
        label: 'SALE DATE BEFORE QUALIFICATION',
        icon: '⚠️'
      };
    }
    if (holdingPeriod.isQualified) {
      return {
        status: 'qualified',
        label: 'HOLDING PERIOD QUALIFIED',
        icon: '✓'
      };
    }
    return {
      status: 'pending',
      label: `${holdingPeriod.daysRemaining} DAYS REMAINING`,
      icon: '⏳'
    };
  };

  const overallStatus = getOverallStatus();

  return (
    <div ref={resultsRef} className="space-y-6 print:space-y-4">
      {/* Summary Box - The Screenshot Moment */}
      <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl shadow-lg text-white p-6 print:p-4">
        <div className="text-center">
          <p className="text-emerald-100 text-sm uppercase tracking-wide mb-2">Your QSBS Tax Savings Estimate</p>
          <p className="text-5xl font-bold mb-4 print:text-3xl">
            ~{formatCurrency(results.totalSavings)}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className={`px-3 py-1 rounded-full ${overallStatus.status === 'qualified' ? 'bg-emerald-500' : overallStatus.status === 'warning' ? 'bg-red-500' : 'bg-amber-500'}`}>
              {overallStatus.icon} {overallStatus.label}
            </div>
            <div className={`px-3 py-1 rounded-full ${stateTax.status === 'none' ? 'bg-red-500' : stateTax.status === 'no_tax' ? 'bg-emerald-500' : 'bg-emerald-500'}`}>
              {stateTax.stateName}: {stateTax.status === 'none' ? 'No Conformity' : stateTax.status === 'no_tax' ? 'No State Tax' : 'Conforms'}
            </div>
          </div>
        </div>
      </div>

      {/* PROMINENT SHARE BOX - The viral loop */}
      <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-5 print:hidden">
        <div className="flex items-start gap-3 mb-4">
          <div className="bg-slate-200 rounded-full p-2">
            <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Share these results</h3>
            <p className="text-sm text-slate-600">Anyone with this link sees these exact results. Send it to your accountant, attorney, or advisor.</p>
          </div>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            readOnly
            value={shareableUrl}
            className="flex-1 px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-600 font-mono truncate"
          />
          <button
            onClick={handleShare}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              copied
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-900 text-white hover:bg-slate-800'
            }`}
          >
            {copied ? '✓ Copied!' : 'Copy Link'}
          </button>
        </div>

        <div className="flex gap-3 mt-4 pt-4 border-t border-slate-200">
          <button
            onClick={handleDownloadPdf}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download PDF
          </button>
          <button
            onClick={onReset}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Start Over
          </button>
        </div>
      </div>

      {showPdfMessage && (
        <div className="bg-blue-100 border border-blue-300 rounded-lg p-4 text-blue-800 text-sm print:hidden">
          Opening print dialog... Use &quot;Save as PDF&quot; to download.
        </div>
      )}

      {/* Holding Period Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Holding Period</h3>
        </div>
        <div className="p-6 space-y-4">
          {inputs.stockType === 'inheritance' ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 font-medium">✓ Automatically Qualified</p>
              <p className="text-emerald-700 text-sm mt-1">{holdingPeriod.explanation}</p>
            </div>
          ) : (
            <>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Holding Period Started</p>
                  <p className="text-lg font-semibold text-gray-900">{formatDate(holdingPeriod.startDate)}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">5-Year Qualification Date</p>
                  <p className="text-lg font-semibold text-gray-900">{formatDate(holdingPeriod.qualificationDate)}</p>
                </div>
              </div>

              <div className="text-sm text-gray-600 bg-gray-50 rounded-lg p-3">
                {holdingPeriod.explanation}
              </div>

              {holdingPeriod.saleDateBeforeQualification && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-red-800 font-medium">⚠️ Sale Date Before Qualification</p>
                  <p className="text-red-700 text-sm mt-1">
                    Your expected sale date ({formatDate(inputs.saleDate)}) is before your 5-year qualification date.
                    This stock would NOT qualify for QSBS treatment if sold on that date.
                  </p>
                  <div className="mt-3 text-sm text-red-700">
                    <p className="font-medium">Options:</p>
                    <ul className="list-disc ml-5 mt-1">
                      <li>Delay the sale until after {formatDate(holdingPeriod.qualificationDate)}</li>
                      <li>Look into Section 1045 rollover (partial deferral, not exclusion)</li>
                    </ul>
                  </div>
                </div>
              )}

              {!holdingPeriod.saleDateBeforeQualification && !holdingPeriod.isQualified && (
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-amber-800 font-medium">⏳ {holdingPeriod.daysRemaining} Days Remaining</p>
                  <p className="text-amber-700 text-sm mt-1">
                    Your 5-year holding period will be complete on {formatDate(holdingPeriod.qualificationDate)}.
                    Selling before this date would disqualify this stock from QSBS treatment.
                  </p>
                </div>
              )}

              {holdingPeriod.isQualified && (
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-emerald-800 font-medium">✓ Holding Period Qualified</p>
                  <p className="text-emerald-700 text-sm mt-1">
                    Your 5-year holding period is complete. You can sell anytime and claim the QSBS exclusion
                    (assuming other requirements are met).
                  </p>
                </div>
              )}
            </>
          )}
          {/* Citation */}
          <p className="text-xs text-gray-400 pt-2 border-t border-gray-100">
            Source: IRC §1202(c)(1) — holding period requirements
          </p>
        </div>
      </div>

      {/* Tax Savings Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">Potential Tax Savings</h3>
        </div>
        <div className="p-6 space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Your Basis</p>
              <p className="text-lg font-semibold text-gray-900">{formatCurrency(inputs.costBasis)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Expected Gain</p>
              <p className="text-lg font-semibold text-gray-900">{formatCurrency(exclusion.gain)}</p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Exclusion Percentage</span>
              <span className="font-medium">{formatPercent(exclusion.exclusionPercent)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Maximum QSBS Exclusion</span>
              <span className="font-medium">{formatCurrency(exclusion.maxExclusion)}</span>
            </div>
            <p className="text-xs text-gray-500">Greater of $10M or 10× your basis</p>
          </div>

          {exclusion.isFullyExcluded ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 font-medium">✓ Your gain is fully excludable</p>
            </div>
          ) : (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 space-y-2">
              <p className="text-amber-800 font-medium">Gain exceeds exclusion cap</p>
              <div className="text-sm text-amber-700">
                <p>Excludable: {formatCurrency(exclusion.actualExclusion)} → $0 federal tax</p>
                <p>Taxable: {formatCurrency(exclusion.taxableGain)} → ~{formatCurrency(exclusion.taxableGain * federalTax.effectiveRate)} federal tax</p>
              </div>
            </div>
          )}

          <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex justify-between items-center">
              <span className="text-emerald-800 font-medium">Federal Tax Savings</span>
              <span className="text-2xl font-bold text-emerald-700">~{formatCurrency(federalTax.savings)}</span>
            </div>
            <p className="text-xs text-emerald-600 mt-2">{federalTax.disclaimer}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 pt-2 text-sm">
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500">Without QSBS</p>
              <p className="font-semibold text-gray-900">~{formatCurrency(federalTax.taxWithoutQSBS)} federal tax</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3">
              <p className="text-gray-500">With QSBS</p>
              <p className="font-semibold text-gray-900">~{formatCurrency(federalTax.taxWithQSBS)} federal tax</p>
            </div>
          </div>
          {/* Citation */}
          <p className="text-xs text-gray-400 pt-2 border-t border-gray-100">
            Source: IRC §1202(a), §1202(b) — exclusion percentage and limitations
          </p>
        </div>
      </div>

      {/* State Tax Impact Section */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">State Tax Impact</h3>
        </div>
        <div className="p-6 space-y-4">
          {stateTax.status === 'no_tax' ? (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <p className="text-emerald-800 font-medium">✓ {stateTax.stateName}: No State Income Tax</p>
              <p className="text-emerald-700 text-sm mt-1">{stateTax.message}</p>
            </div>
          ) : stateTax.status === 'none' ? (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 space-y-3">
              <p className="text-red-800 font-medium">🔴 {stateTax.stateName}: Does Not Recognize QSBS</p>
              <p className="text-red-700 text-sm">{stateTax.message}</p>
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-sm text-gray-600">Estimated {stateTax.stateName} Tax</p>
                <p className="text-xl font-bold text-red-700">~{formatCurrency(stateTax.taxWithQSBS)}</p>
                <p className="text-xs text-gray-500 mt-1">Based on {formatPercent(stateTax.topRate)} top rate</p>
              </div>
              <p className="text-sm text-gray-600">
                Some people relocate before a liquidity event. That&apos;s a real option—but do it right and do it early.
                {stateTax.stateCode === 'CA' && ' California\'s Franchise Tax Board is aggressive.'}
              </p>
            </div>
          ) : (
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 space-y-3">
              <p className="text-emerald-800 font-medium">✓ {stateTax.stateName}: Full QSBS Conformity</p>
              <p className="text-emerald-700 text-sm">{stateTax.message}</p>
              {stateTax.savings > 0 && (
                <div className="bg-white rounded-lg p-3 border border-emerald-200">
                  <p className="text-sm text-gray-600">State Tax Savings</p>
                  <p className="text-xl font-bold text-emerald-700">~{formatCurrency(stateTax.savings)}</p>
                </div>
              )}
            </div>
          )}

          {/* Total Summary */}
          <div className="bg-gray-900 text-white rounded-lg p-4 mt-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Your Total Savings</span>
              <span className="text-2xl font-bold">~{formatCurrency(results.totalSavings)}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>Federal: ~{formatCurrency(federalTax.savings)}</span>
              <span>State: ~{formatCurrency(stateTax.savings)}</span>
            </div>
            {stateTax.status === 'none' && (
              <div className="border-t border-gray-700 mt-3 pt-3">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">You Still Owe ({stateTax.stateName})</span>
                  <span className="text-red-400 font-medium">~{formatCurrency(stateTax.taxWithQSBS)}</span>
                </div>
              </div>
            )}
          </div>
          {/* Citation */}
          <p className="text-xs text-gray-400 pt-2 border-t border-gray-100">
            Source: {stateTax.stateCode === 'CA' ? 'Cal. Rev. & Tax Code §18152.5' : `${stateTax.stateName} Revenue Code`} — QSBS conformity status
          </p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
        <p className="font-medium text-gray-700 mb-2">This is an estimate, not advice.</p>
        <p>
          We checked your holding period, exclusion cap, and state conformity. We didn&apos;t check
          whether your company qualifies (C-corp status, $50M assets test, qualified business type).
          Those require documentation we don&apos;t have.
        </p>
        <p className="mt-2">
          Before you sell, talk to someone who can verify the company-level requirements.
        </p>
      </div>

      {/* What's Next - Contextual links based on results */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden print:hidden">
        <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
          <h3 className="font-semibold text-gray-900">What&apos;s Next?</h3>
        </div>
        <div className="p-6">
          <div className="grid gap-3">
            {/* Show if selling before qualification and no exclusion */}
            {holdingPeriod.saleDateBeforeQualification && exclusion.exclusionPercent === 0 && (
              <Link href="/dont-qualify" className="block bg-red-50 rounded-lg p-4 hover:bg-red-100 transition-colors">
                <p className="font-medium text-red-900">You don&apos;t qualify yet—but you have options</p>
                <p className="text-sm text-red-700 mt-1">
                  Section 1045 rollover, deal timing, and other strategies when QSBS doesn&apos;t apply.
                </p>
              </Link>
            )}

            {/* Show if selling before qualification but has partial exclusion (post-OBBBA) */}
            {holdingPeriod.saleDateBeforeQualification && exclusion.exclusionPercent > 0 && exclusion.exclusionPercent < 1 && (
              <Link href="/selling-early" className="block bg-amber-50 rounded-lg p-4 hover:bg-amber-100 transition-colors">
                <p className="font-medium text-amber-900">Getting partial exclusion—could you wait for full?</p>
                <p className="text-sm text-amber-700 mt-1">
                  You&apos;re getting {formatPercent(exclusion.exclusionPercent)} exclusion. Waiting until {formatDate(holdingPeriod.qualificationDate)} would give you 100%.
                </p>
              </Link>
            )}

            {/* Show if days remaining (not yet qualified but will be) */}
            {!holdingPeriod.isQualified && holdingPeriod.daysRemaining > 0 && !holdingPeriod.saleDateBeforeQualification && (
              <Link href="/holding-period" className="block bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                <p className="font-medium text-blue-900">Make sure your holding period date is correct</p>
                <p className="text-sm text-blue-700 mt-1">
                  The most common mistake: using the wrong start date. Double-check before you sell.
                </p>
              </Link>
            )}

            {/* Show if state doesn't conform */}
            {stateTax.status === 'none' && (
              <Link href="/california" className="block bg-amber-50 rounded-lg p-4 hover:bg-amber-100 transition-colors">
                <p className="font-medium text-amber-900">{stateTax.stateName} doesn&apos;t recognize QSBS</p>
                <p className="text-sm text-amber-700 mt-1">
                  You&apos;ll owe ~{formatCurrency(stateTax.taxWithQSBS)} to {stateTax.stateName} even with federal QSBS.
                  {stateTax.stateCode === 'CA' && ' Some founders relocate—here\'s what to know.'}
                </p>
              </Link>
            )}

            {/* Show if gain exceeds cap */}
            {exclusion.taxableGain > 0 && exclusion.actualExclusion > 0 && (
              <Link href="/10-million-limit" className="block bg-blue-50 rounded-lg p-4 hover:bg-blue-100 transition-colors">
                <p className="font-medium text-blue-900">Your gain exceeds the exclusion cap</p>
                <p className="text-sm text-blue-700 mt-1">
                  {formatCurrency(exclusion.actualExclusion)} excluded, {formatCurrency(exclusion.taxableGain)} taxable. Learn about gift stacking and other strategies.
                </p>
              </Link>
            )}

            {/* Show if fully qualified - general success case */}
            {holdingPeriod.isQualified && exclusion.isFullyExcluded && stateTax.status !== 'none' && (
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="font-medium text-emerald-900">You&apos;re in good shape</p>
                <p className="text-sm text-emerald-700 mt-1">
                  Your holding period is complete and your gain is fully excludable.
                  Just verify company-level requirements with your tax advisor before selling.
                </p>
              </div>
            )}

            {/* Always show - learn more */}
            <Link href="/methodology" className="block bg-gray-100 rounded-lg p-4 hover:bg-gray-200 transition-colors">
              <p className="font-medium text-gray-900">How we calculated this</p>
              <p className="text-sm text-gray-600 mt-1">
                Our methodology, data sources, and what we can&apos;t verify.
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* Print-only footer */}
      <div className="hidden print:block text-center text-sm text-gray-500 pt-4 border-t border-gray-200">
        <p>Generated by QSBS Calculator · qsbscalculator.com</p>
        <p className="text-xs mt-1">This is an estimate only. Consult a tax professional for advice.</p>
      </div>
    </div>
  );
}
