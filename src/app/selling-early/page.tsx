import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: "Selling QSBS Before 5 Years: Your Options",
  description: "Selling before your 5-year QSBS holding period? You have options: Section 1045 rollover or timing the deal. Here's what you need to know.",
  alternates: {
    canonical: '/selling-early',
  },
  openGraph: {
    title: "Selling QSBS Before 5 Years: Your Options",
    description: "Section 1045 rollover, deal timing, and other strategies if you can't wait for QSBS qualification.",
    url: 'https://www.qsbsguide.com/selling-early',
    siteName: 'QSBS Guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Selling QSBS Before 5 Years: Your Options",
    description: "Section 1045 rollover and other strategies.",
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What happens if I sell QSBS before 5 years?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you sell before completing the 5-year holding period, you lose the Section 1202 exclusion entirely. Your gain is taxed as regular capital gains—up to 23.8% federal plus state taxes.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is a Section 1045 rollover?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Section 1045 lets you defer (not exclude) gain from selling QSBS held for at least 6 months by reinvesting the proceeds in new QSBS within 60 days. The holding period of the original stock transfers to the new stock.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I negotiate deal timing to qualify for QSBS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you are close to the 5-year mark, you can negotiate deal structure: deferred payment, earnouts, or installment sales can push recognition past your qualification date.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is there a partial QSBS exclusion for holding less than 5 years?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Under current law (pre-July 2025 stock), no—it is all or nothing. You must hold for 5 full years. However, for stock acquired after July 4, 2025, new rules may allow partial exclusions at 3 and 4 years.',
      },
    },
  ],
};

export default function SellingEarlyPage() {
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
          Selling Before 5 Years? You Have Options.
        </h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            If you have to sell your startup stock before the 5-year QSBS holding period is complete, you lose the exclusion. But there are ways to preserve some benefit—or buy yourself more time.
          </p>
          <p className="text-gray-600">
            Here&apos;s what actually works.
          </p>
        </div>

        {/* The Reality */}
        <section className="bg-slate-800 text-white rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">The Reality of Early Sales</h2>
          <p className="text-slate-300 mb-4">
            QSBS is all or nothing. Sell on day 1,824 of a 1,826-day requirement (5 years), and you get zero exclusion. The full gain is taxable.
          </p>
          <p className="text-slate-200 mb-4">
            On a $2M gain, that&apos;s the difference between <span className="text-emerald-400">$0 federal tax</span> and <span className="text-red-400">~$476,000 in federal tax</span>.
          </p>
          <p className="text-slate-300">
            Two days. Half a million dollars.
          </p>
        </section>

        {/* Option 1: Section 1045 */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Option 1: Section 1045 Rollover</h2>

          <p className="text-gray-600 mb-4">
            If you&apos;ve held your QSBS for at least 6 months, you can defer the gain by reinvesting in replacement QSBS within 60 days.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="font-medium text-gray-900 mb-2">How it works:</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">1.</span>
                <span>You sell QSBS that you&apos;ve held for at least 6 months (but less than 5 years)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">2.</span>
                <span>Within 60 days, you reinvest the proceeds in new QSBS</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">3.</span>
                <span>Your original holding period transfers to the new stock</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">4.</span>
                <span>When the combined holding period hits 5 years, you can sell with the full exclusion</span>
              </li>
            </ul>
          </div>

          <div className="border-l-4 border-amber-500 pl-4 mb-4">
            <p className="font-medium text-gray-900">The catch:</p>
            <p className="text-gray-600 text-sm">
              Finding qualifying replacement QSBS isn&apos;t easy. It must be stock in a C-corp with less than $50M in assets at issuance. You can&apos;t just buy public stock. Most people use this to invest in another startup—which means you need to find one accepting investment on your timeline.
            </p>
          </div>

          <p className="text-gray-500 text-sm">
            This is deferral, not exclusion. You&apos;re kicking the can down the road, which is fine if you believe you&apos;ll eventually hold for 5 years total.
          </p>
        </section>

        {/* Option 2: Deal Structure */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Option 2: Negotiate Deal Timing</h2>

          <p className="text-gray-600 mb-4">
            If you&apos;re close to the 5-year mark, the deal structure can push your gain recognition past the line.
          </p>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">Installment Sale</p>
              <p className="text-gray-600 text-sm">
                Receive payment over time. Gain is recognized as you receive payments, not at closing. If your first payment comes after the 5-year mark, that portion qualifies.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">Earnout Structure</p>
              <p className="text-gray-600 text-sm">
                Contingent payments based on milestones. If the contingency resolves after your 5-year date, that portion may qualify. Talk to a tax attorney about timing.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4">
              <p className="font-medium text-gray-900">Deferred Closing</p>
              <p className="text-gray-600 text-sm">
                If you&apos;re weeks away, sometimes the deal can be structured to close after your date. This is rare in M&A but possible in secondary sales.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-amber-800 text-sm">
              <strong>Reality check:</strong> You probably can&apos;t control the deal timeline. If a company is selling, you&apos;re along for the ride. But if you have any leverage—founder shares, board seat, or it&apos;s a secondary transaction—it&apos;s worth asking.
            </p>
          </div>
        </section>

        {/* Option 3: Just Wait */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Option 3: Just Wait</h2>

          <p className="text-gray-600 mb-4">
            If the deal hasn&apos;t closed yet and you&apos;re close, see if you can hold out.
          </p>

          <div className="bg-white rounded-lg p-4 mb-4">
            <p className="text-gray-700">
              <span className="font-medium">Example:</span> You exercise options on March 15, 2021. Your 5-year mark is March 15, 2026. The company is selling with a February 2026 close date. Ask your CFO if there&apos;s any flexibility on closing dates—sometimes there is, especially for larger shareholders.
            </p>
          </div>

          <p className="text-gray-500 text-sm">
            A few weeks of delay could be worth hundreds of thousands of dollars. Make sure the acquirer and board know what&apos;s at stake for affected shareholders.
          </p>
        </section>

        {/* Calculator Embed */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">When Do You Actually Qualify?</h2>
          <p className="text-gray-600 mb-6">
            Enter your stock details to see your exact qualification date and how much is at stake.
          </p>
          <Calculator />
        </section>

        {/* What Doesn't Work */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What Doesn&apos;t Work</h2>

          <div className="space-y-3 text-gray-600">
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold">✕</span>
              <div>
                <p className="font-medium text-gray-900">Partial sales</p>
                <p className="text-sm">Selling half your shares early doesn&apos;t give you half the exclusion. Each share has its own holding period.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold">✕</span>
              <div>
                <p className="font-medium text-gray-900">Gifting and buying back</p>
                <p className="text-sm">The IRS sees through this. Related party rules apply.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold">✕</span>
              <div>
                <p className="font-medium text-gray-900">Accelerating the clock</p>
                <p className="text-sm">There is no mechanism to speed up the holding period. 5 years means 5 years.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Questions */}
        <section className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h2>
          <div className="space-y-3">
            <Link href="/holding-period" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              When does my holding period start? → Make sure you know your real date.
            </Link>
            <Link href="/iso-exercise" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              ISO exercise vs grant date → The timing that catches people off guard.
            </Link>
            <Link href="/83b-election" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              83(b) election timing → Could have started your clock earlier.
            </Link>
            <Link href="/10-million-limit" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              What&apos;s the $10M exclusion cap? → How much can you actually exclude.
            </Link>
            <Link href="/dont-qualify" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Don&apos;t qualify for QSBS? → Your other options for tax savings.
            </Link>
            <Link href="/2025-changes" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              2025 QSBS changes → Partial exclusions now available for newer stock.
            </Link>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600 mb-3">Know your exact numbers before making a decision.</p>
          <Link
            href="/"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Calculate Your QSBS Status
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
