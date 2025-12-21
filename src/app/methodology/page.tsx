import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Methodology – QSBS Calculator',
  description: 'How our QSBS calculator determines holding period start dates, exclusion amounts, and state conformity status. Sources and limitations explained.',
  alternates: {
    canonical: '/methodology',
  },
};

export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900 hover:text-emerald-600">
              QSBS Calculator
            </Link>
            <div className="text-right text-xs text-gray-400">
              <p>Updated December 2025</p>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700">
            ← Back to Calculator
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">How This Calculator Works</h1>
        <p className="text-gray-600 mb-8">
          Methodology, sources, and limitations. Last updated December 2025.
        </p>

        <div className="space-y-8">
          {/* Holding Period */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Holding Period Calculation</h2>
            <p className="text-gray-600 mb-4">
              Your QSBS holding period start date depends on how you acquired your shares.
              Here&apos;s the logic we use:
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-medium text-gray-900">Stock Type</th>
                    <th className="text-left py-2 pr-4 font-medium text-gray-900">Start Date</th>
                    <th className="text-left py-2 font-medium text-gray-900">Authority</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Common stock (purchased)</td>
                    <td className="py-2 pr-4">Purchase date</td>
                    <td className="py-2">IRC §1202(c)(1)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">ISOs/NSOs (exercised)</td>
                    <td className="py-2 pr-4">Exercise date</td>
                    <td className="py-2">IRC §1202(c)(1)(B); Rev. Rul. 2001-26</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Restricted stock with 83(b)</td>
                    <td className="py-2 pr-4">Grant date</td>
                    <td className="py-2">IRC §83(b); Treas. Reg. §1.83-4(a)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Restricted stock without 83(b)</td>
                    <td className="py-2 pr-4">Vesting date</td>
                    <td className="py-2">IRC §83(a)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">RSUs</td>
                    <td className="py-2 pr-4">Delivery/vesting date</td>
                    <td className="py-2">IRC §83(a); no 83(b) election possible</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">SAFE/Note conversion</td>
                    <td className="py-2 pr-4">Conversion date</td>
                    <td className="py-2">IRC §1202(c)(1)(B)</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Inherited stock</td>
                    <td className="py-2 pr-4">Immediate qualification</td>
                    <td className="py-2">IRC §1202(h)(2)(C)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-600 mt-4 text-sm">
              The 5-year holding period requirement means you must hold for more than 5 years—5 years
              and 1 day is the minimum qualifying period.
            </p>
          </section>

          {/* Exclusion Calculation */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Exclusion Calculation</h2>

            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Exclusion Percentage</h3>
                <p className="mb-2">Based on stock acquisition date:</p>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>Before February 18, 2009: 50% exclusion</li>
                  <li>February 18, 2009 – September 27, 2010: 75% exclusion</li>
                  <li>After September 27, 2010: 100% exclusion</li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">Source: IRC §1202(a)</p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">Maximum Exclusion</h3>
                <p>
                  The maximum QSBS exclusion is the <strong>greater of</strong>:
                </p>
                <ul className="list-disc ml-5 space-y-1 text-sm mt-2">
                  <li>$10,000,000, OR</li>
                  <li>10× your adjusted basis in the stock</li>
                </ul>
                <p className="text-sm mt-2">
                  This is calculated per issuer. You can have QSBS in multiple companies.
                </p>
                <p className="text-sm text-gray-500 mt-2">Source: IRC §1202(b)(1)</p>
              </div>
            </div>
          </section>

          {/* Tax Rate Assumptions */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Tax Rate Assumptions</h2>

            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-900 mb-2">Federal Tax Estimate</h3>
                <p className="mb-2">We assume:</p>
                <ul className="list-disc ml-5 space-y-1 text-sm">
                  <li>20% long-term capital gains rate (top bracket)</li>
                  <li>3.8% Net Investment Income Tax (NIIT)</li>
                  <li><strong>Total: 23.8%</strong></li>
                </ul>
                <p className="text-sm text-gray-500 mt-2">
                  Your actual rate may differ based on income level and filing status. Lower-income
                  taxpayers may qualify for 0% or 15% LTCG rates.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900 mb-2">State Tax Estimates</h3>
                <p>
                  State tax estimates use <strong>top marginal rates</strong>. Your actual rate may
                  be lower depending on your total income.
                </p>
              </div>
            </div>
          </section>

          {/* State Conformity */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">State Conformity Data</h2>

            <p className="text-gray-600 mb-4">
              We track state QSBS conformity status based on state revenue code provisions,
              state tax authority guidance, and published conformity analyses. Data is reviewed quarterly.
            </p>

            <h3 className="font-medium text-gray-900 mb-3">States That Do Not Conform</h3>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 pr-4 font-medium text-gray-900">State</th>
                    <th className="text-left py-2 pr-4 font-medium text-gray-900">Top Rate</th>
                    <th className="text-left py-2 font-medium text-gray-900">Authority</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">California</td>
                    <td className="py-2 pr-4">13.3%</td>
                    <td className="py-2">Cal. Rev. & Tax Code §18152.5</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Pennsylvania</td>
                    <td className="py-2 pr-4">3.07%</td>
                    <td className="py-2">72 P.S. §7303(a)(1)</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-4">Mississippi</td>
                    <td className="py-2 pr-4">5%</td>
                    <td className="py-2">Miss. Code Ann. §27-7-15</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4">Alabama</td>
                    <td className="py-2 pr-4">5%</td>
                    <td className="py-2">Ala. Code §40-18-14</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="font-medium text-gray-900 mb-3">States With No Income Tax</h3>
            <p className="text-gray-600 text-sm mb-2">
              Alaska, Florida, Nevada, New Hampshire*, South Dakota, Tennessee, Texas, Washington*, Wyoming
            </p>
            <p className="text-gray-500 text-xs">
              * New Hampshire has no tax on earned income. Washington has a 7% capital gains tax on gains over $270K
              (separate from QSBS conformity).
            </p>
          </section>

          {/* What We Don't Check */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What We Don&apos;t Check</h2>

            <p className="text-gray-600 mb-4">
              This calculator does NOT verify company-level requirements. These require documentation
              we don&apos;t have access to:
            </p>

            <div className="space-y-4 text-gray-600">
              <div>
                <h3 className="font-medium text-gray-900">C-Corporation Status</h3>
                <p className="text-sm">
                  The company must be a domestic C corporation at the time of stock issuance and
                  during substantially all of the holding period. S-corps, LLCs, and partnerships
                  do not qualify.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">$50 Million Gross Assets Test</h3>
                <p className="text-sm">
                  The corporation&apos;s aggregate gross assets must be ≤$50 million at all times from
                  incorporation through immediately after your stock issuance. This is measured at
                  issuance, not at sale.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Qualified Trade or Business</h3>
                <p className="text-sm">
                  At least 80% of assets must be used in active conduct of a qualified trade or business.
                  Excluded industries include: professional services (law, health, accounting, consulting),
                  banking, insurance, financing, hospitality, farming, and extractive industries.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Original Issuance Requirement</h3>
                <p className="text-sm">
                  Stock must be acquired directly from the corporation at original issuance, in exchange
                  for money, property (not stock), or services. Secondary market purchases do not qualify.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-900">Redemption Rules</h3>
                <p className="text-sm">
                  Certain stock redemptions within 2 years before or after issuance can disqualify QSBS.
                  This requires review of company transaction history.
                </p>
              </div>
            </div>
          </section>

          {/* Disclaimer */}
          <section className="bg-gray-100 rounded-xl p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Disclaimer</h2>
            <p className="text-gray-600 text-sm">
              This calculator provides educational information about QSBS. It is not tax, legal, or
              financial advice. QSBS eligibility depends on facts and circumstances that require
              professional verification. Consult a qualified tax professional before making decisions
              based on this information.
            </p>
            <p className="text-gray-500 text-sm mt-3">
              We are not affiliated with the IRS or any government agency.
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-8">
          <Link href="/" className="text-emerald-600 hover:text-emerald-700 font-medium">
            ← Back to Calculator
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-500">
            <p>© {new Date().getFullYear()} QSBS Calculator</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
