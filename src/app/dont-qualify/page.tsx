import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: "Don't Qualify for QSBS? Here's What to Do Next",
  description: "Discovered you don't qualify for QSBS tax exclusion? Options include Section 1045 rollover, deal timing, installment sales, and tax planning strategies.",
  alternates: {
    canonical: '/dont-qualify',
  },
  openGraph: {
    title: "Don't Qualify for QSBS? Here's What to Do Next",
    description: "Options when QSBS exclusion doesn't apply: 1045 rollover, deal timing, and tax planning.",
    url: 'https://www.qsbsguide.com/dont-qualify',
    siteName: 'QSBS Guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Don't Qualify for QSBS? Your Options",
    description: "What to do when QSBS exclusion doesn't apply.",
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens if I don\'t qualify for QSBS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you don\'t qualify for QSBS, your entire gain is taxed as capital gains—up to 23.8% federal (20% LTCG + 3.8% NIIT) plus state taxes. However, you may have options like Section 1045 rollover, installment sales, or deal timing strategies.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I fix a QSBS disqualification?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'It depends on why you don\'t qualify. If you\'re selling before 5 years but held for at least 6 months, Section 1045 rollover lets you defer the gain by reinvesting in new QSBS within 60 days. If the deal hasn\'t closed, installment sales or earnouts may push recognition past your qualification date.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are alternatives to QSBS tax savings?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Alternatives include: Section 1045 rollover (defer by reinvesting in new QSBS), installment sales (spread gain over years), Qualified Opportunity Zone investment (defer and potentially reduce gain), charitable giving strategies, and state relocation before the sale.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does QSBS apply to secondary market purchases?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Generally no. QSBS requires original issuance—you must acquire stock directly from the company in exchange for money, property, or services. Stock purchased from another shareholder on the secondary market typically does not qualify.',
      },
    },
  ],
};

export default function DontQualifyPage() {
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
            You Don&apos;t Qualify for QSBS. Here&apos;s What to Do Next.
          </h1>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="text-xl text-gray-700 leading-relaxed">
              If you just ran the numbers and realized you don&apos;t qualify—or won&apos;t qualify in time—you&apos;re not alone. This is one of the most common and expensive discoveries in startup tax planning.
            </p>
          </div>

          {/* Real Example */}
          <section className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold text-red-900 mb-4">This Happens More Than You Think</h2>
            <p className="text-red-800 mb-4">
              One founder discovered 3 days before closing that her holding period started at exercise, not grant. Her $2.1M gain became fully taxable—roughly <strong>$500K in federal taxes</strong> she thought she&apos;d avoid.
            </p>
            <p className="text-red-700">
              The good news: depending on your situation, you may still have options.
            </p>
          </section>

          {/* Why You Might Not Qualify */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Common Reasons You Don&apos;t Qualify</h2>

            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-medium text-gray-900">Selling before 5 years (most common)</p>
                <p className="text-gray-600 text-sm">
                  Pre-July 2025 stock requires a full 5-year hold. Selling even one day early means 0% exclusion.
                  <Link href="/selling-early" className="text-emerald-600 hover:text-emerald-700 ml-1">
                    See your options →
                  </Link>
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-medium text-gray-900">Secondary market purchase</p>
                <p className="text-gray-600 text-sm">
                  QSBS requires original issuance. Stock bought from another shareholder—not directly from the company—typically doesn&apos;t qualify.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-medium text-gray-900">Company exceeded $50M/$75M gross assets</p>
                <p className="text-gray-600 text-sm">
                  The company must have had $50M or less in gross assets at the time your stock was issued ($75M for post-July 2025 stock). If the company was already too large, the stock doesn&apos;t qualify.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-medium text-gray-900">Not a C-corporation at issuance</p>
                <p className="text-gray-600 text-sm">
                  The company must have been a C-corp when your stock was issued. LLCs, S-corps, and partnerships don&apos;t count—even if they later converted.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-medium text-gray-900">Non-qualified trade or business</p>
                <p className="text-gray-600 text-sm">
                  Certain industries don&apos;t qualify: financial services, law, accounting, consulting, hospitality, farming, and mineral extraction businesses are excluded.
                </p>
              </div>
            </div>
          </section>

          {/* Your Options */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Options Now</h2>

            {/* Option 1: 1045 Rollover */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Option 1: Section 1045 Rollover
                <span className="text-sm font-normal text-amber-600 ml-2">(if you held 6+ months)</span>
              </h3>
              <p className="text-gray-600 mb-3">
                If you&apos;ve held for at least 6 months but less than 5 years, you can defer the gain by reinvesting in new qualifying QSBS within 60 days.
              </p>
              <div className="bg-gray-50 rounded-lg p-4 text-sm">
                <p className="text-gray-700 mb-2"><strong>How it works:</strong></p>
                <ul className="text-gray-600 space-y-1">
                  <li>• Sell your current QSBS</li>
                  <li>• Reinvest proceeds in new QSBS within 60 days</li>
                  <li>• Your holding period transfers to the new stock</li>
                  <li>• When combined period hits 5 years, you can sell with full exclusion</li>
                </ul>
              </div>
              <p className="text-gray-500 text-sm mt-3">
                The catch: finding qualifying replacement QSBS on a 60-day timeline isn&apos;t easy.
                <Link href="/selling-early" className="text-emerald-600 hover:text-emerald-700 ml-1">
                  Learn more about 1045 rollovers →
                </Link>
              </p>
            </div>

            {/* Option 2: Delay the Sale */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Option 2: Delay the Sale
                <span className="text-sm font-normal text-emerald-600 ml-2">(if you&apos;re close)</span>
              </h3>
              <p className="text-gray-600 mb-3">
                If you&apos;re within months of qualifying and have any control over timing, waiting could save hundreds of thousands of dollars.
              </p>
              <div className="bg-emerald-50 rounded-lg p-4 text-sm">
                <p className="text-emerald-800">
                  <strong>Example:</strong> You qualify on March 15, 2026. The deal closes February 28, 2026.
                  If you can negotiate a 3-week delay, that could be worth $400K+ in tax savings.
                </p>
              </div>
            </div>

            {/* Option 3: Installment Sale */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Option 3: Installment Sale
                <span className="text-sm font-normal text-gray-500 ml-2">(if deal structure allows)</span>
              </h3>
              <p className="text-gray-600 mb-3">
                If the deal hasn&apos;t closed, you might be able to structure it so payments come after your qualification date.
              </p>
              <p className="text-gray-600 text-sm">
                Gain is recognized when you receive payment, not at closing. If your first payment comes after the 5-year mark, that portion may qualify for QSBS exclusion.
              </p>
            </div>

            {/* Option 4: State Planning */}
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">
                Option 4: State Tax Planning
              </h3>
              <p className="text-gray-600 mb-3">
                Even if you don&apos;t qualify for federal QSBS, you might reduce your state tax burden.
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <strong>If you&apos;re in California:</strong> You&apos;d owe 13.3% regardless of QSBS status.
                  Some founders relocate to no-tax states (TX, FL, WA, NV) before a liquidity event.
                </li>
                <li>
                  <strong>Timing matters:</strong> Your state of residence on the sale date determines which state taxes apply.
                </li>
              </ul>
              <Link href="/california" className="text-emerald-600 hover:text-emerald-700 text-sm mt-2 inline-block">
                Learn about California and QSBS →
              </Link>
            </div>

            {/* Option 5: Other Tax Strategies */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Option 5: Other Tax Strategies
              </h3>
              <p className="text-gray-600 mb-3">
                If QSBS isn&apos;t available, other strategies might help reduce your tax burden:
              </p>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>
                  <strong>Qualified Opportunity Zone:</strong> Reinvest gains in a QOZ fund to defer and potentially reduce taxes.
                </li>
                <li>
                  <strong>Charitable giving:</strong> Donating appreciated stock to a donor-advised fund avoids capital gains entirely.
                </li>
                <li>
                  <strong>Tax-loss harvesting:</strong> Offset gains with losses from other investments in the same year.
                </li>
              </ul>
              <p className="text-gray-500 text-sm mt-3">
                These strategies require professional guidance. Consult a tax attorney or CPA who specializes in equity compensation.
              </p>
            </div>
          </section>

          {/* If You're Definitely Out */}
          <section className="bg-slate-800 text-white rounded-xl p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">If None of These Options Apply</h2>
            <p className="text-slate-300 mb-4">
              Sometimes there&apos;s no way to qualify. The stock was issued when the company was too large.
              You bought on the secondary market. The industry doesn&apos;t qualify.
            </p>
            <p className="text-slate-300 mb-4">
              In that case, your gain is taxable as long-term capital gains (if held over a year) or ordinary income (if less than a year).
            </p>
            <div className="bg-slate-700 rounded-lg p-4">
              <p className="text-slate-200 font-medium mb-2">Typical tax rates on gains:</p>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• Federal: 20% + 3.8% NIIT = <strong>23.8%</strong> for high earners</li>
                <li>• California: <strong>13.3%</strong> on top of federal</li>
                <li>• New York City: up to <strong>12.7%</strong> state + local</li>
              </ul>
            </div>
            <p className="text-slate-400 text-sm mt-4">
              A $2M gain in California with no QSBS: roughly $740K in combined taxes.
            </p>
          </section>

          {/* Calculator */}
          <section className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Double-Check Your Situation</h2>
            <p className="text-gray-600 mb-6">
              Make sure you&apos;re using the right dates. The most common mistake is using the wrong holding period start date.
            </p>
            <Calculator />
          </section>

          {/* Related Questions */}
          <section className="bg-gray-100 rounded-xl p-6 mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h2>
            <div className="space-y-3">
              <Link href="/selling-early" className="block text-emerald-600 hover:text-emerald-700 font-medium">
                Selling before 5 years? → Section 1045 rollover and other strategies.
              </Link>
              <Link href="/holding-period" className="block text-emerald-600 hover:text-emerald-700 font-medium">
                When does my holding period start? → Make sure you have the right date.
              </Link>
              <Link href="/california" className="block text-emerald-600 hover:text-emerald-700 font-medium">
                California and QSBS → State tax implications for CA residents.
              </Link>
              <Link href="/iso-exercise" className="block text-emerald-600 hover:text-emerald-700 font-medium">
                ISO exercise date → The #1 mistake that disqualifies people.
              </Link>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="text-center py-6 border-t border-gray-200">
            <p className="text-gray-600 mb-3">Need to verify your holding period?</p>
            <Link
              href="/"
              className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
            >
              Check Your QSBS Status
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
