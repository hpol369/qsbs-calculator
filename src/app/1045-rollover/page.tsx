import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Section 1045 Rollover: Defer QSBS Gains Without Waiting 5 Years',
  description: 'If you can\'t wait 5 years for QSBS, Section 1045 lets you defer gains by rolling into another QSBS. Learn the rules, timing, and limitations.',
  alternates: {
    canonical: '/1045-rollover',
  },
  openGraph: {
    title: 'Section 1045 Rollover for QSBS',
    description: 'Defer gains by rolling into another qualified small business stock.',
    type: 'article',
  },
};

export default function Section1045Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">Calculator</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Section 1045 Rollover</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Alternative Strategy
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Section 1045 Rollover: An Exit Valve When You Can&apos;t Wait
          </h1>
          <p className="text-xl text-gray-600">
            If you need to sell QSBS before the 5-year holding period, Section 1045 lets you
            defer (not exclude) the gain by reinvesting in another QSBS.
          </p>
        </header>

        {/* Key Difference Box */}
        <section className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h2 className="text-lg font-bold text-amber-900 mb-3">1045 vs 1202: Critical Difference</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-2">Section 1202 (Full QSBS)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Requires 5-year holding period</li>
                  <li><strong>Excludes</strong> gain entirely (tax-free)</li>
                  <li>Up to $10M+ exclusion</li>
                  <li>Best outcome if you can wait</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-4 border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-2">Section 1045 (Rollover)</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>Only need 6+ months holding</li>
                  <li><strong>Defers</strong> gain (pay later, not never)</li>
                  <li>Must reinvest within 60 days</li>
                  <li>Emergency option when you can&apos;t wait</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Section 1045 Works</h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Sell Your QSBS After 6 Months
                  </h3>
                  <p className="text-gray-600">
                    You must have held your original QSBS for at least 6 months (not 5 years).
                    This triggers an &quot;eligible&quot; sale under Section 1045.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Reinvest in New QSBS Within 60 Days
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Use the sale proceeds to buy stock in another company that qualifies as QSBS.
                    The 60-day clock starts on the sale date.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-red-800 text-sm">
                      <strong>Strict deadline:</strong> Miss the 60-day window and you lose the
                      rollover option entirely. Plan ahead.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-700 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Basis Carries Over to New Stock
                  </h3>
                  <p className="text-gray-600 mb-3">
                    Your cost basis in the old stock becomes the basis in the new stock.
                    The gain is deferred until you sell the replacement stock.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Holding period benefit:</strong> Your old holding period &quot;tacks on&quot;
                      to the new stock. If you had 3 years in the old QSBS, you only need 2 more
                      years in the new one to hit 5 years for Section 1202.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Example */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Example: 1045 Rollover in Action</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="space-y-4">
              <div className="border-b border-gray-100 pb-4">
                <p className="text-gray-600">
                  <strong>Situation:</strong> You hold QSBS in StartupCo for 3 years (cost basis: $50K, current value: $500K).
                  StartupCo is being acquired and you have no choice but to sell.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <p className="text-gray-600">
                  <strong>Without 1045:</strong> You&apos;d owe capital gains tax on $450K gain
                  (~$107K at 23.8% federal rate). No QSBS exclusion because you didn&apos;t hit 5 years.
                </p>
              </div>

              <div className="border-b border-gray-100 pb-4">
                <p className="text-gray-600">
                  <strong>With 1045:</strong> Within 60 days, you invest $500K in NewStartupCo stock
                  (which also qualifies as QSBS). Your $450K gain is deferred. Your basis in
                  NewStartupCo is $50K (the original basis).
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                <p className="text-emerald-800">
                  <strong>The payoff:</strong> After 2 more years in NewStartupCo (5 total with
                  tacking), you can sell and potentially exclude the gain under Section 1202.
                  The $450K gain that was deferred could become tax-free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Section 1045 Requirements</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">For the Stock You&apos;re Selling:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Must be QSBS (meet Section 1202 company requirements)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Held for at least 6 months</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Acquired at original issuance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 p-5">
              <h3 className="font-semibold text-gray-900 mb-3">For the Replacement Stock:</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Must also be QSBS (different company)</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Purchased within 60 days of sale</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Also acquired at original issuance</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* When to Use */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">When to Consider 1045</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-5">
              <h3 className="font-semibold text-emerald-900 mb-3">Good Scenarios:</h3>
              <ul className="space-y-2 text-sm text-emerald-800">
                <li>Company is being acquired before 5 years</li>
                <li>You need liquidity but have another QSBS opportunity lined up</li>
                <li>You&apos;re confident in the replacement company&apos;s QSBS eligibility</li>
                <li>You can invest the full proceeds (not just the gain)</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl border border-red-200 p-5">
              <h3 className="font-semibold text-red-900 mb-3">Poor Scenarios:</h3>
              <ul className="space-y-2 text-sm text-red-800">
                <li>No qualifying replacement company available</li>
                <li>You need the cash and can&apos;t reinvest</li>
                <li>You&apos;re uncertain about replacement company&apos;s QSBS status</li>
                <li>The 60-day window is too tight</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Limitations */}
        <section className="mb-12">
          <div className="bg-gray-900 text-white rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4">Important Limitations</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-amber-400">1.</span>
                <span><strong className="text-white">Only individuals:</strong> Corporations and most other entities cannot use Section 1045.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">2.</span>
                <span><strong className="text-white">Full reinvestment:</strong> You must reinvest the entire sale proceeds (not just the gain) to defer the full amount.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">3.</span>
                <span><strong className="text-white">New company risk:</strong> If the replacement company fails or doesn&apos;t qualify as QSBS, you&apos;ve lost the deferral benefit.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400">4.</span>
                <span><strong className="text-white">Deferral, not exclusion:</strong> You&apos;re kicking the can down the road. The gain is still there until you get to Section 1202.</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Topics</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/holding-period" className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-emerald-300 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Holding Period</h3>
              <p className="text-sm text-gray-600">When does your 5-year clock start?</p>
            </Link>
            <Link href="/company-qualifies" className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-emerald-300 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Company Requirements</h3>
              <p className="text-sm text-gray-600">Does your company qualify as QSBS?</p>
            </Link>
            <Link href="/selling-early" className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-emerald-300 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Selling Early</h3>
              <p className="text-sm text-gray-600">Options when you can&apos;t wait 5 years</p>
            </Link>
            <Link href="/" className="block bg-emerald-50 rounded-xl border border-emerald-200 p-4 hover:border-emerald-300 transition-colors">
              <h3 className="font-semibold text-emerald-900 mb-1">Calculate Your Savings</h3>
              <p className="text-sm text-emerald-700">Use our free QSBS calculator</p>
            </Link>
          </div>
        </section>

        {/* Citation */}
        <footer className="text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>Source: IRC §1045 — Rollover of gain from qualified small business stock to another qualified small business stock</p>
        </footer>
      </div>
    </main>
  );
}
