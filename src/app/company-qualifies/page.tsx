import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Does My Company Qualify for QSBS? | C-Corp Requirements Checklist',
  description: 'QSBS requires your company to meet strict requirements: C-corp status, $50M assets test, active business, and more. Use this checklist to verify QSBS eligibility.',
  alternates: {
    canonical: '/company-qualifies',
  },
  openGraph: {
    title: 'Does My Company Qualify for QSBS?',
    description: 'C-corp requirements checklist for Section 1202 QSBS eligibility.',
    type: 'article',
  },
};

export default function CompanyQualifiesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-gray-700">Calculator</Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Company Requirements</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
            Company Requirements
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Does My Company Qualify for QSBS?
          </h1>
          <p className="text-xl text-gray-600">
            Your stock only qualifies if your company meets all IRC Section 1202 requirements.
            Here&apos;s what the IRS checks.
          </p>
        </header>

        {/* Key Requirements */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">The Six Company Requirements</h2>

          <div className="space-y-6">
            {/* Requirement 1 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Domestic C-Corporation
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The company must be a U.S. C-corporation at the time you acquire stock.
                    S-corps, LLCs, partnerships, and foreign corporations do not qualify.
                  </p>
                  <div className="bg-amber-50 border border-amber-200 rounded-lg p-3">
                    <p className="text-amber-800 text-sm">
                      <strong>Watch out:</strong> Delaware C-corps are fine. But if your company
                      started as an LLC and converted, only stock issued after conversion qualifies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirement 2 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    $50 Million Gross Assets Test
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The company&apos;s gross assets must have been $50 million or less at all times
                    from August 10, 1993, through immediately after your stock was issued.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Key point:</strong> This is measured at issuance, not at sale.
                      Even if the company is worth billions when you sell, you can still qualify
                      if it was under $50M when your stock was issued.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirement 3 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Active Business Requirement
                  </h3>
                  <p className="text-gray-600 mb-3">
                    At least 80% of assets must be used in the active conduct of one or more
                    qualified trades or businesses.
                  </p>
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm font-medium mb-2">These businesses DO NOT qualify:</p>
                    <ul className="list-disc ml-5 text-red-700 text-sm space-y-1">
                      <li>Professional services (law, health, engineering, accounting, consulting, financial services, performing arts)</li>
                      <li>Banking, insurance, financing, leasing</li>
                      <li>Farming, hotels, motels, restaurants</li>
                      <li>Oil, gas, or mineral extraction</li>
                      <li>Businesses whose principal asset is the reputation of employees</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirement 4 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Original Issuance Requirement
                  </h3>
                  <p className="text-gray-600 mb-3">
                    You must have acquired the stock at original issuance (directly from the company),
                    in exchange for money, property, or services. Stock purchased in the secondary
                    market doesn&apos;t count.
                  </p>
                  <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-3">
                    <p className="text-emerald-800 text-sm">
                      <strong>Good news:</strong> Exercising options, receiving RSAs/RSUs, and
                      SAFE conversions all count as original issuance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirement 5 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold">5</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    No Significant Redemptions
                  </h3>
                  <p className="text-gray-600 mb-3">
                    The company cannot have made significant redemptions of its stock during certain
                    periods relative to when you acquired your shares.
                  </p>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                    <p className="text-gray-700 text-sm">
                      This is technical and rarely an issue for most startups. Your tax advisor
                      can verify this requirement.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Requirement 6 */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-700 font-bold">6</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Reporting Agreement (Optional but Helpful)
                  </h3>
                  <p className="text-gray-600 mb-3">
                    While not strictly required, many companies execute QSBS reporting agreements
                    to help shareholders document their eligibility.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-blue-800 text-sm">
                      <strong>Ask your company:</strong> &quot;Can you provide a QSBS eligibility letter
                      confirming the company met the requirements when my stock was issued?&quot;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Self-Check Checklist */}
        <section className="mb-12">
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
            <h2 className="text-xl font-bold text-purple-900 mb-4">Quick Self-Check</h2>
            <p className="text-purple-800 mb-4">
              Answer these questions about when you acquired your stock:
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-purple-400 rounded flex-shrink-0"></div>
                <span className="text-purple-900">Was the company a U.S. C-corporation?</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-purple-400 rounded flex-shrink-0"></div>
                <span className="text-purple-900">Did the company have $50M or less in gross assets?</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-purple-400 rounded flex-shrink-0"></div>
                <span className="text-purple-900">Is the business a technology/product company (not services)?</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 border-2 border-purple-400 rounded flex-shrink-0"></div>
                <span className="text-purple-900">Did you get stock directly from the company (not secondary)?</span>
              </li>
            </ul>
            <p className="text-purple-700 text-sm mt-4">
              If you answered yes to all, your company likely qualifies. Get confirmation from your legal/tax team before sale.
            </p>
          </div>
        </section>

        {/* Documentation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Documentation You&apos;ll Need</h2>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <p className="text-gray-600 mb-4">
              The IRS may ask for documentation. Gather these before you sell:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Stock certificates or issuance records showing dates and amounts</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Company financial statements showing gross assets at issuance</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Certificate of incorporation confirming C-corp status</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">QSBS eligibility letter from the company (if available)</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-emerald-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">Option exercise or RSU vesting documentation</span>
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
            <Link href="/stock-types" className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-emerald-300 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">Stock Types</h3>
              <p className="text-sm text-gray-600">Which equity types qualify for QSBS?</p>
            </Link>
            <Link href="/10-million-limit" className="block bg-white rounded-xl border border-gray-200 p-4 hover:border-emerald-300 transition-colors">
              <h3 className="font-semibold text-gray-900 mb-1">$10 Million Limit</h3>
              <p className="text-sm text-gray-600">Understanding the exclusion cap</p>
            </Link>
            <Link href="/" className="block bg-emerald-50 rounded-xl border border-emerald-200 p-4 hover:border-emerald-300 transition-colors">
              <h3 className="font-semibold text-emerald-900 mb-1">Calculate Your Savings</h3>
              <p className="text-sm text-emerald-700">Use our free QSBS calculator</p>
            </Link>
          </div>
        </section>

        {/* Citation */}
        <footer className="text-sm text-gray-500 border-t border-gray-200 pt-6">
          <p>Source: IRC §1202(c), §1202(e) — Qualified small business stock requirements</p>
        </footer>
      </div>
    </main>
  );
}
