import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: "My Gain Exceeds $10M—Can I Exclude More? QSBS Cap Strategies",
  description: "QSBS caps at $10M (or $15M post-July 2025). If your gain exceeds this, gift stacking, spouse transfers, and charitable giving can multiply your exclusion.",
  alternates: {
    canonical: '/10-million-limit',
  },
  openGraph: {
    title: "My Gain Exceeds $10M—Can I Exclude More?",
    description: "Strategies to maximize your QSBS exclusion when your gain exceeds the cap.",
    url: 'https://www.qsbsguide.com/10-million-limit',
    siteName: 'QSBS Guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "My Gain Exceeds $10M—Can I Exclude More?",
    description: "QSBS cap strategies: gift stacking, spouse transfers, and more.",
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is the QSBS exclusion limit?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You can exclude up to the greater of $10 million or 10 times your adjusted basis in the stock. For most startup employees who paid little for their shares, the $10 million cap is the binding constraint.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the $10M QSBS limit per company or lifetime?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The $10 million limit is per issuer (per company), not lifetime. If you hold QSBS in multiple companies, you can potentially exclude $10 million from each one.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my gain exceeds $10 million?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Any gain above the $10 million cap is taxed normally as capital gains. On a $15M gain, you would exclude $10M (tax-free) and pay capital gains tax on the remaining $5M.',
      },
    },
    {
      '@type': 'Question',
      name: 'How does the 10x basis rule work for QSBS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If 10 times your original investment exceeds $10 million, you can use the higher amount. For example, if you invested $2 million, your cap is $20 million (10 x $2M). This mainly benefits investors who put significant capital into the company.',
      },
    },
  ],
};

export default function TenMillionLimitPage() {
  return (
    <>
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
          The QSBS $10 Million Limit: What You Can Actually Exclude
        </h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            Section 1202 lets you exclude up to $10 million in capital gains from QSBS—or 10 times your basis, whichever is greater. That&apos;s per company, not lifetime.
          </p>
          <p className="text-gray-600">
            For most startup employees who paid pennies per share, $10M is the cap. For investors who wrote bigger checks, the 10x rule can matter.
          </p>
        </div>

        {/* The Basic Rule */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">The Basic Rule</h2>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="font-medium text-gray-900 mb-3">Your exclusion limit is the GREATER of:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">A</span>
                <span className="text-gray-700">$10 million</span>
              </div>
              <div className="text-center text-gray-400 font-medium">OR</div>
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-bold">B</span>
                <span className="text-gray-700">10 × your adjusted basis in the stock</span>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-4">
            For most people, $10M is higher. The 10x rule only kicks in if you paid more than $1 million for your shares.
          </p>

          <div className="border-l-4 border-emerald-500 pl-4">
            <p className="text-gray-700">
              <span className="font-medium">Example:</span> You exercised options at $0.10/share, spending $10,000 total. Your 10x basis is $100,000—way below $10M. So your cap is $10M.
            </p>
          </div>
        </section>

        {/* When 10x Matters */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">When the 10x Rule Actually Matters</h2>

          <p className="text-gray-600 mb-4">
            The 10x rule benefits people who put significant capital into the company—usually investors, not employees.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Your Basis</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">10x Amount</th>
                  <th className="text-left py-3 font-semibold text-gray-900">Your Exclusion Cap</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">$10,000</td>
                  <td className="py-3 pr-4 text-gray-400">$100,000</td>
                  <td className="py-3 font-medium text-emerald-600">$10,000,000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">$100,000</td>
                  <td className="py-3 pr-4 text-gray-400">$1,000,000</td>
                  <td className="py-3 font-medium text-emerald-600">$10,000,000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4">$1,000,000</td>
                  <td className="py-3 pr-4 text-gray-400">$10,000,000</td>
                  <td className="py-3 font-medium text-emerald-600">$10,000,000</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium">$2,000,000</td>
                  <td className="py-3 pr-4 font-medium">$20,000,000</td>
                  <td className="py-3 font-medium text-emerald-600">$20,000,000</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">$5,000,000</td>
                  <td className="py-3 pr-4 font-medium">$50,000,000</td>
                  <td className="py-3 font-medium text-emerald-600">$50,000,000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            The 10x rule helps angel investors and founders who invested real cash. Most employees who exercised options at low strike prices will be capped at $10M.
          </p>
        </section>

        {/* Per Company Not Lifetime */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Per Company, Not Lifetime</h2>

          <p className="text-gray-700 mb-4">
            This is crucial: the $10M limit applies to each company separately.
          </p>

          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-gray-700">
              <span className="font-medium">Example:</span> You hold QSBS in Company A and Company B. Both exit. You can potentially exclude $10M from Company A AND $10M from Company B—$20M total.
            </p>
          </div>

          <p className="text-gray-600 text-sm">
            Serial entrepreneurs and angel investors in multiple startups can benefit significantly from this structure.
          </p>
        </section>

        {/* What Happens Above the Cap */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What Happens Above the Cap</h2>

          <p className="text-gray-600 mb-4">
            If your gain exceeds your exclusion limit, you pay normal capital gains tax on the excess.
          </p>

          <div className="bg-slate-800 text-white rounded-lg p-4 mb-4">
            <p className="text-slate-400 mb-2">Example: $15M gain with $10M cap</p>
            <div className="space-y-2 font-mono text-sm">
              <p>Total gain: $15,000,000</p>
              <p>QSBS exclusion: <span className="text-emerald-400">-$10,000,000</span></p>
              <p>Taxable gain: <span className="text-amber-400">$5,000,000</span></p>
              <p className="border-t border-slate-600 pt-2">Federal tax on $5M at 23.8%: <span className="text-red-400">~$1,190,000</span></p>
            </div>
          </div>

          <p className="text-gray-600 text-sm">
            Still, saving $2.38M on the first $10M is significant. You&apos;re only paying tax on the portion above the cap.
          </p>
        </section>

        {/* Calculator Embed */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Calculate Your Tax Savings</h2>
          <p className="text-gray-600 mb-6">
            Enter your expected gain to see how much you can exclude and what you&apos;ll owe above the cap.
          </p>
          <Calculator />
        </section>

        {/* Planning Strategies */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Strategies for Larger Gains</h2>

          <p className="text-gray-600 mb-4">
            If you expect gains above $10M, there are legitimate strategies to optimize:
          </p>

          <div className="space-y-4">
            <div className="border-l-4 border-emerald-500 pl-4">
              <p className="font-medium text-gray-900">Gifting to family members</p>
              <p className="text-gray-600 text-sm">
                Each donee gets their own $10M limit. Gifting QSBS to children before a sale can multiply the exclusion. Gift tax rules apply—work with an estate planning attorney.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <p className="font-medium text-gray-900">Stacking with spouse</p>
              <p className="text-gray-600 text-sm">
                Each spouse has a separate $10M limit. If you hold stock jointly or transfer to your spouse, you may be able to exclude up to $20M combined on the same company.
              </p>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4">
              <p className="font-medium text-gray-900">Charitable contributions</p>
              <p className="text-gray-600 text-sm">
                Donating appreciated QSBS to charity avoids capital gains entirely and provides a deduction. This works whether or not you&apos;ve hit the $10M cap.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-amber-800 text-sm">
              <strong>Timing matters:</strong> These strategies need to be executed before the sale. Transferring stock after a deal is signed may not work. Plan early.
            </p>
          </div>
        </section>

        {/* Gift Stacking Deep Dive */}
        <section className="bg-slate-800 text-white rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">Gift Stacking: How It Works</h2>

          <p className="text-slate-300 mb-4">
            Each person who receives QSBS gets their own $10M exclusion. By gifting shares before a sale, you can multiply the family&apos;s total exclusion.
          </p>

          <div className="bg-slate-700 rounded-lg p-4 mb-4">
            <p className="text-slate-200 font-medium mb-3">Example: $40M gain, family of four</p>
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between border-b border-slate-600 pb-2">
                <span className="text-slate-400">Without gift stacking:</span>
                <span></span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">You exclude</span>
                <span className="text-emerald-400">$10M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Taxable gain</span>
                <span className="text-red-400">$30M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Federal tax at 23.8%</span>
                <span className="text-red-400">~$7.14M</span>
              </div>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-4 mb-4">
            <div className="space-y-2 font-mono text-sm">
              <div className="flex justify-between border-b border-slate-600 pb-2">
                <span className="text-slate-400">With gift stacking (you + spouse + 2 children):</span>
                <span></span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">You exclude</span>
                <span className="text-emerald-400">$10M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Spouse excludes</span>
                <span className="text-emerald-400">$10M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Child 1 excludes</span>
                <span className="text-emerald-400">$10M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Child 2 excludes</span>
                <span className="text-emerald-400">$10M</span>
              </div>
              <div className="flex justify-between border-t border-slate-600 pt-2">
                <span className="text-slate-300">Total excluded</span>
                <span className="text-emerald-400">$40M</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-300">Taxable gain</span>
                <span className="text-emerald-400">$0</span>
              </div>
              <div className="flex justify-between font-bold">
                <span className="text-slate-200">Tax saved</span>
                <span className="text-emerald-400">~$7.14M</span>
              </div>
            </div>
          </div>

          <div className="bg-amber-900/50 border border-amber-700 rounded-lg p-4">
            <p className="text-amber-300 font-medium mb-2">Critical requirements:</p>
            <ul className="text-amber-200 text-sm space-y-1">
              <li>&bull; Gifts must be completed before the sale (or binding agreement)</li>
              <li>&bull; Gift tax returns required—uses lifetime exemption or triggers gift tax</li>
              <li>&bull; Minors typically need a trust (UTMA or irrevocable)</li>
              <li>&bull; Each recipient must meet their own 5-year holding period</li>
              <li>&bull; Work with an estate planning attorney—this is complex</li>
            </ul>
          </div>
        </section>

        {/* Aggregation Rules */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">The Fine Print: Aggregation Rules</h2>

          <p className="text-gray-600 mb-4">
            Related entities may be treated as one issuer for the $10M cap:
          </p>

          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Parent/subsidiary relationships can aggregate</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Members of a controlled group may share one cap</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span>Stock acquired in a single transaction is aggregated</span>
            </li>
          </ul>

          <p className="text-gray-500 text-sm mt-4">
            If you hold stock in multiple related entities, consult a tax advisor to understand how the caps apply.
          </p>
        </section>

        {/* Related Questions */}
        <section className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h2>
          <div className="space-y-3">
            <Link href="/holding-period" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              When does my holding period start? → You need 5 years first.
            </Link>
            <Link href="/california" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Does California recognize QSBS? → State taxes still apply.
            </Link>
            <Link href="/selling-early" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              What if I sell before 5 years? → You lose the exclusion entirely.
            </Link>
            <Link href="/2025-changes" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              What changed in 2025? → New $15M cap and tiered exclusions for new stock.
            </Link>
            <Link href="/dont-qualify" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Don&apos;t qualify for QSBS? → Alternative strategies when the exclusion doesn&apos;t apply.
            </Link>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600 mb-3">See your full tax picture—federal savings, state impact, and more.</p>
          <Link
            href="/"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Calculate Your QSBS Savings
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
    </>
  );
}
