import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: 'When Does Your QSBS Holding Period Start?',
  description: 'Your QSBS holding period starts at exercise for options, vesting for RSUs, or grant if you filed an 83(b). Find your exact date.',
  alternates: {
    canonical: '/holding-period',
  },
  openGraph: {
    title: 'When Does Your QSBS Holding Period Start?',
    description: 'Your QSBS holding period starts at exercise for options, vesting for RSUs, or grant if you filed an 83(b).',
    url: 'https://www.qsbsguide.com/holding-period',
    siteName: 'QSBS Guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'When Does Your QSBS Holding Period Start?',
    description: 'Find your exact QSBS qualification date based on your stock type.',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When does the QSBS holding period start for stock options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For stock options (ISOs and NSOs), the QSBS holding period starts on the exercise date—not the grant date. You must hold actual shares, not just the right to buy shares.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does the QSBS holding period start for RSUs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For RSUs, the holding period starts when shares are delivered to you, which is typically the vesting date. RSUs cannot benefit from an 83(b) election.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does filing an 83(b) election affect my QSBS holding period?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you have restricted stock and file an 83(b) election within 30 days of grant, your holding period starts at the grant date. Without an 83(b), it starts at vesting.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long do I need to hold QSBS to qualify for the exclusion?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'You must hold the stock for at least 5 years from the date you acquired it to qualify for the full QSBS exclusion under Section 1202.',
      },
    },
  ],
};

export default function HoldingPeriodPage() {
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
          When Does Your QSBS Holding Period Actually Start?
        </h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            It depends on your stock type. For options, it starts when you exercise—not when you were granted the options. For RSUs, it starts when shares are delivered. For restricted stock with an 83(b) election, it starts at grant.
          </p>
          <p className="text-gray-600">
            Most people get this wrong. They think their clock started years earlier than it did.
          </p>
        </div>

        {/* Rules by Stock Type */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">The Rules by Stock Type</h2>
          <p className="text-gray-600 mb-4">Here&apos;s when your 5-year QSBS holding period begins:</p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Stock Type</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Holding Period Starts</th>
                  <th className="text-left py-3 font-semibold text-gray-900">Common Mistake</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Stock options (ISOs/NSOs)</td>
                  <td className="py-3 pr-4">Exercise date</td>
                  <td className="py-3 text-amber-700">Thinking it&apos;s the grant date</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900"><Link href="/83b-election" className="text-emerald-600 hover:text-emerald-700">Restricted stock with 83(b)</Link></td>
                  <td className="py-3 pr-4">Grant date</td>
                  <td className="py-3 text-amber-700">Not filing the 83(b) in time</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Restricted stock without 83(b)</td>
                  <td className="py-3 pr-4">Vesting date</td>
                  <td className="py-3 text-amber-700">Assuming grant date counts</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">RSUs</td>
                  <td className="py-3 pr-4">Vesting/delivery date</td>
                  <td className="py-3 text-amber-700">Confusing with restricted stock</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">SAFE/Note conversion</td>
                  <td className="py-3 pr-4">Conversion date</td>
                  <td className="py-3 text-amber-700">Thinking it&apos;s the investment date</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Direct purchase</td>
                  <td className="py-3 pr-4">Purchase date</td>
                  <td className="py-3">—</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Gift</td>
                  <td className="py-3 pr-4">Donor&apos;s original date</td>
                  <td className="py-3 text-amber-700">Not knowing to ask</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-900">Inheritance</td>
                  <td className="py-3 pr-4">Immediate qualification</td>
                  <td className="py-3">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* The Mistake That Costs Millions */}
        <section className="bg-slate-800 text-white rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">The Mistake That Costs Millions</h2>
          <p className="text-slate-300 mb-4">Here&apos;s what happens constantly:</p>
          <p className="text-slate-200 mb-4">
            A founder gets options in 2019. They exercise in 2023. In late 2025, they&apos;re selling the company and assume they&apos;ve held for 6+ years.
          </p>
          <p className="text-slate-200 mb-4">
            They haven&apos;t. Their clock started in 2023. They need to wait until 2028.
          </p>
          <p className="text-slate-200 mb-4">
            If they sell in 2025, they lose the entire QSBS exclusion. On a $2M gain, that&apos;s roughly <span className="text-amber-400 font-semibold">$475,000 in federal taxes</span> they didn&apos;t need to pay.
          </p>
          <p className="text-white font-medium">
            The fix is simple: know your actual start date. The problem is most people don&apos;t check until it&apos;s too late.
          </p>
        </section>

        {/* Calculator Embed */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Check Your Start Date</h2>
          <p className="text-gray-600 mb-6">
            Enter your stock type and dates. We&apos;ll tell you exactly when your holding period started and when you&apos;ll qualify.
          </p>
          <Calculator />
        </section>

        {/* What If You're Not There Yet */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What If You&apos;re Not There Yet?</h2>
          <p className="text-gray-600 mb-4">If your qualification date is in the future, you have two options:</p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold">1</div>
              <div>
                <p className="font-medium text-gray-900">Wait.</p>
                <p className="text-gray-600 text-sm">Don&apos;t sell until after the date. Even if it means pushing back a deal.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold">2</div>
              <div>
                <p className="font-medium text-gray-900">Section 1045 rollover.</p>
                <p className="text-gray-600 text-sm">If you must sell early, you can defer (not exclude) the gain by reinvesting in another QSBS within 60 days. This is complicated—talk to a tax advisor.</p>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mt-4 text-sm border-t border-gray-100 pt-4">
            There&apos;s no way to accelerate the clock. If you exercised in 2023, you&apos;re waiting until 2028. Period.
          </p>
        </section>

        {/* Related Questions */}
        <section className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h2>
          <div className="space-y-3">
            <Link href="/california" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Does California recognize QSBS? → No. Here&apos;s what you&apos;ll owe.
            </Link>
            <Link href="/iso-exercise" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              ISO exercise date vs grant date → The #1 QSBS mistake explained.
            </Link>
            <Link href="/methodology" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Full QSBS methodology → How we calculate everything.
            </Link>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600 mb-3">Not sure about your situation?</p>
          <Link
            href="/"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Use the Full Calculator
          </Link>
          <p className="text-sm text-gray-500 mt-2">Check your holding period, estimate savings, and see state treatment.</p>
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
