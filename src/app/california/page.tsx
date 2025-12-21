import Link from 'next/link';
import type { Metadata } from 'next';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: "California QSBS Tax: Why You'll Still Owe the State | QSBS Calculator",
  description: "California doesn't recognize the federal QSBS exclusion. You'll owe up to 13.3% state tax on your gains even if you qualify federally. Calculate your CA tax bill.",
  alternates: {
    canonical: '/california',
  },
};

export default function CaliforniaPage() {
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
        <div className="mb-6">
          <Link href="/" className="text-sm text-emerald-600 hover:text-emerald-700">
            ← Back to Calculator
          </Link>
        </div>

        {/* H1 and Lead */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          California Doesn&apos;t Care About Your QSBS Exclusion
        </h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            California does not recognize the federal QSBS exclusion. If you&apos;re a California resident when you sell, you&apos;ll owe state capital gains tax on the full amount—even if you owe zero federal tax.
          </p>
          <p className="text-gray-600">
            On a $2M gain, that&apos;s roughly <span className="font-semibold text-red-600">$266,000 to California</span>.
          </p>
        </div>

        {/* How This Works */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How This Works</h2>

          <p className="text-gray-600 mb-4">
            The federal QSBS exclusion (Section 1202) lets you exclude up to $10M in capital gains from qualified small business stock.
          </p>

          <p className="text-gray-600 mb-4">
            California has explicitly chosen not to adopt this exclusion. California Revenue and Taxation Code §18152.5 does not conform to IRC §1202.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="font-medium text-gray-900 mb-2">What this means in practice:</p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600 font-semibold">Federal tax:</span>
                <span>$0 (if you qualify for QSBS)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-semibold">California tax:</span>
                <span>Up to 13.3% of your gain</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-gray-900 font-semibold">Net effect:</span>
                <span>You save ~$475K federally, but still owe ~$266K to CA</span>
              </li>
            </ul>
          </div>

          <p className="text-gray-600 text-sm">
            This isn&apos;t a bug or oversight. California wants the revenue. They&apos;re not going to change this.
          </p>
        </section>

        {/* Calculator Embed */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Calculate Your California Tax Bill</h2>
          <p className="text-gray-600 mb-6">
            See exactly what you&apos;ll owe California, even with federal QSBS qualification.
          </p>
          <Calculator />
        </section>

        {/* What About Moving */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What About Moving?</h2>

          <p className="text-gray-600 mb-4">
            Yes, people move out of California before liquidity events. It&apos;s legal. It&apos;s also complicated.
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-amber-500 pl-4">
              <p className="font-medium text-gray-900">California is aggressive.</p>
              <p className="text-gray-600 text-sm">
                The Franchise Tax Board audits people who &quot;move&quot; right before a sale. If you keep your house in SF, your kids in school in Palo Alto, and your dentist in Oakland, you didn&apos;t move. You&apos;re still a CA resident.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <p className="font-medium text-gray-900">You need to actually move.</p>
              <p className="text-gray-600 text-sm">
                Change your driver&apos;s license. Register to vote. Move your bank accounts. Establish real ties in the new state. The more documentation, the better.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <p className="font-medium text-gray-900">Timing matters.</p>
              <p className="text-gray-600 text-sm">
                Moving 6 weeks before closing is a red flag. Moving 12+ months before is much stronger. The longer you&apos;re a resident of the new state before the sale, the harder it is for CA to challenge.
              </p>
            </div>

            <div className="border-l-4 border-amber-500 pl-4">
              <p className="font-medium text-gray-900">It has to make sense.</p>
              <p className="text-gray-600 text-sm">
                If you hate Texas and move to Austin purely for taxes, then move back to SF three months after the sale, expect an audit.
              </p>
            </div>
          </div>

          {/* Real story */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
            <p className="text-red-800 text-sm">
              <span className="font-semibold">Real case:</span> A founder moved from SF to Austin six weeks before their exit. California audited them, argued they hadn&apos;t &quot;really&quot; moved, and sent a bill for $180K. They&apos;re still fighting it.
            </p>
          </div>

          <p className="text-gray-600 mt-4 text-sm font-medium">
            Bottom line: Relocation works, but do it right and do it early. Talk to a tax attorney who specializes in California residency.
          </p>
        </section>

        {/* Other Non-Conforming States */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Other States That Don&apos;t Conform</h2>

          <p className="text-gray-600 mb-4">California isn&apos;t alone:</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">State</th>
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">QSBS Treatment</th>
                  <th className="text-left py-2 font-semibold text-gray-900">Top Rate</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium text-gray-900">California</td>
                  <td className="py-2 pr-4 text-red-600">No conformity</td>
                  <td className="py-2">13.3%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium text-gray-900">Pennsylvania</td>
                  <td className="py-2 pr-4 text-red-600">No conformity</td>
                  <td className="py-2">3.07%</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4 font-medium text-gray-900">Mississippi</td>
                  <td className="py-2 pr-4 text-red-600">No conformity</td>
                  <td className="py-2">5%</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium text-gray-900">Alabama</td>
                  <td className="py-2 pr-4 text-red-600">No conformity</td>
                  <td className="py-2">5%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            Pennsylvania hurts less because the rate is lower. California hurts the most because the rate is high and most startup employees are there.
          </p>
        </section>

        {/* No Income Tax States */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">States With No Income Tax</h2>

          <p className="text-gray-600 mb-4">If you&apos;re considering relocation, these states have no state income tax on capital gains:</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-4">
            {['Texas', 'Florida', 'Washington', 'Nevada', 'Wyoming', 'South Dakota', 'Alaska', 'Tennessee'].map((state) => (
              <div key={state} className="bg-white rounded px-3 py-2 text-sm font-medium text-gray-700">
                {state}
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm">
            New Hampshire has no tax on earned income but limited taxes on interest/dividends. Most people who relocate for QSBS reasons go to Texas, Florida, or Washington.
          </p>
        </section>

        {/* Related Questions */}
        <section className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h2>
          <div className="space-y-3">
            <Link href="/holding-period" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              When does my holding period start? → Make sure you actually qualify first.
            </Link>
            <Link href="/iso-exercise" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              ISO exercise vs grant date → The timing mistake that costs people millions.
            </Link>
            <Link href="/methodology" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Full state conformity data → All 50 states.
            </Link>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600 mb-3">Check your full QSBS picture—holding period, federal savings, and state impact.</p>
          <Link
            href="/"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Use the Calculator
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-500">
            <p className="mb-2">
              <Link href="/methodology" className="hover:text-emerald-600">Methodology</Link>
              {' · '}
              <Link href="/" className="hover:text-emerald-600">Calculator</Link>
            </p>
            <p>© {new Date().getFullYear()} QSBS Guide</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
