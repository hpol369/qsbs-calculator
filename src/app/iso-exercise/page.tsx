import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: "QSBS for ISOs: Your Clock Starts at Exercise, Not Grant",
  description: "Your QSBS holding period for stock options starts when you exercise, not when granted. The #1 mistake that costs founders millions.",
  alternates: {
    canonical: '/iso-exercise',
  },
  openGraph: {
    title: "QSBS for ISOs: Your Clock Starts at Exercise, Not Grant",
    description: "Your QSBS holding period for stock options starts when you exercise, not when granted.",
    url: 'https://www.qsbsguide.com/iso-exercise',
    siteName: 'QSBS Guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "QSBS for ISOs: Starts at Exercise, Not Grant",
    description: "The #1 mistake that costs founders millions.",
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'When does the QSBS holding period start for ISOs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For incentive stock options (ISOs), the QSBS holding period starts on the date you exercise the options—not the grant date. Until you exercise, you own the right to buy stock, not actual shares.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is the QSBS holding period different for NSOs vs ISOs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. For QSBS holding period purposes, ISOs and NSOs work the same way—the clock starts at exercise for both. The ISO vs NSO distinction matters for other tax reasons (AMT, income treatment) but not for QSBS timing.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does early exercise affect my QSBS holding period?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, if you file an 83(b) election within 30 days. Early exercise with an 83(b) starts your holding period at the early exercise date, even though shares haven\'t vested. Without an 83(b), your holding period starts at vesting.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I sell QSBS before the 5-year holding period?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If you sell before completing 5 years, you lose the entire QSBS exclusion. Even selling a few days early can cost hundreds of thousands of dollars in federal taxes. There is no partial exclusion for holding less than 5 years.',
      },
    },
  ],
};

export default function ISOExercisePage() {
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
          Your ISO Holding Period Starts at Exercise, Not Grant
        </h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            If you have incentive stock options (ISOs) or non-qualified stock options (NSOs), your QSBS holding period starts on the date you exercise—not the date you were granted the options.
          </p>
          <p className="text-gray-600">
            This is the most common QSBS mistake. People think they&apos;ve been holding for 6 years when they&apos;ve actually been holding for 2.
          </p>
        </div>

        {/* Why This Confuses People */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Why This Confuses People</h2>

          <p className="text-gray-600 mb-4">
            It feels like you&apos;ve &quot;had&quot; the stock since your grant date. You&apos;ve been at the company. You&apos;ve been vesting. The options have been sitting in your Carta account.
          </p>

          <p className="text-gray-600 mb-4">
            But you didn&apos;t own stock. You owned the <em>right to buy</em> stock.
          </p>

          <p className="text-gray-600 mb-6">
            QSBS requires you to hold <strong>stock</strong>—actual shares. The clock doesn&apos;t start until you have shares. For options, that means exercise.
          </p>

          {/* Timeline */}
          <div className="bg-slate-800 text-white rounded-lg p-4 font-mono text-sm">
            <p className="text-slate-400 mb-2">Timeline example:</p>
            <div className="space-y-1">
              <p><span className="text-slate-400">2019:</span> Options granted (4-year vest)</p>
              <p><span className="text-slate-400">2020:</span> 25% vested</p>
              <p><span className="text-slate-400">2021:</span> 50% vested</p>
              <p><span className="text-slate-400">2022:</span> 75% vested</p>
              <p><span className="text-emerald-400">2023:</span> Fully vested, you exercise all options <span className="text-amber-400">← CLOCK STARTS HERE</span></p>
              <p><span className="text-emerald-400">2028:</span> 5-year holding period complete <span className="text-emerald-400">← QSBS QUALIFIED</span></p>
            </div>
          </div>

          <p className="text-gray-600 mt-4 text-sm">
            If you try to sell in 2025, thinking you&apos;ve held since 2019, you&apos;re wrong. You&apos;ve held since 2023. You don&apos;t qualify until 2028.
          </p>
        </section>

        {/* The $487K Mistake */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-900 mb-4">The $487K Mistake</h2>

          <p className="text-red-800 mb-4">
            Last year, an employee at a YC company exercised their options on December 15, 2019. They tried to sell on December 10, 2024—thinking 5 years had passed.
          </p>

          <p className="text-red-800 mb-4">
            It hadn&apos;t. Five years from December 15, 2019 is December 16, 2024. They were <strong>6 days early</strong>.
          </p>

          <p className="text-red-800 mb-4">
            The entire QSBS benefit was lost. On their gain, that was roughly <span className="font-bold">$487,000 in federal taxes</span> they could have avoided by waiting one week.
          </p>

          <p className="text-red-900 font-semibold">
            Six days. Half a million dollars.
          </p>
        </section>

        {/* Calculator Embed */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Check Your Exercise Date</h2>
          <p className="text-gray-600 mb-6">
            Enter your exercise date and expected sale date. We&apos;ll tell you exactly when you qualify.
          </p>
          <Calculator />
        </section>

        {/* ISOs vs NSOs */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">ISOs vs NSOs — Does It Matter?</h2>

          <p className="text-gray-600 mb-4">
            For QSBS holding period purposes, ISOs and NSOs work the same way. The clock starts at exercise for both.
          </p>

          <p className="text-gray-600">
            The difference between ISOs and NSOs matters for other tax reasons (AMT, ordinary income vs capital gains), but not for when your QSBS clock starts.
          </p>
        </section>

        {/* Early Exercise */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What About Early Exercise?</h2>

          <p className="text-gray-600 mb-4">
            If you early-exercised your options (bought shares before they vested), your holding period starts at the early exercise date—assuming you <Link href="/83b-election" className="text-emerald-600 hover:text-emerald-700">filed an 83(b) election</Link> within 30 days.
          </p>

          <p className="text-gray-600 mb-4">
            This is one of the few ways to start your QSBS clock earlier. Early exercise + 83(b) = holding period starts at exercise, even though shares aren&apos;t vested yet.
          </p>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>Warning:</strong> If you early-exercised but didn&apos;t file an 83(b), your holding period starts when shares vest. The IRS treats you as if you received the stock at vesting.
            </p>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Reference</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-2 pr-4 font-semibold text-gray-900">Scenario</th>
                  <th className="text-left py-2 font-semibold text-gray-900">Holding Period Starts</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">ISOs, exercised normally</td>
                  <td className="py-2 font-medium text-gray-900">Exercise date</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">NSOs, exercised normally</td>
                  <td className="py-2 font-medium text-gray-900">Exercise date</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-2 pr-4">Early exercise + 83(b) filed</td>
                  <td className="py-2 font-medium text-emerald-600">Early exercise date</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Early exercise, no 83(b)</td>
                  <td className="py-2 font-medium text-amber-600">Vesting date</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Questions */}
        <section className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h2>
          <div className="space-y-3">
            <Link href="/holding-period" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              When does my holding period start? → Full breakdown for all stock types.
            </Link>
            <Link href="/california" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Does California tax QSBS gains? → Yes. Here&apos;s what you&apos;ll owe.
            </Link>
            <Link href="/methodology" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              What&apos;s the $10M exclusion cap? → How much you can actually exclude.
            </Link>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600 mb-3">Know your real numbers.</p>
          <Link
            href="/"
            className="inline-block bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Check Your Holding Period and Tax Savings
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
