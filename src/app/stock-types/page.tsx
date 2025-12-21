import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "ISOs vs RSUs vs Restricted Stock: Which Can Be QSBS?",
  description: "Not all startup equity qualifies for QSBS. ISOs need exercise. RSUs start at vesting. Restricted stock with 83(b) starts at grant. Know your type.",
  alternates: {
    canonical: '/stock-types',
  },
  openGraph: {
    title: "ISOs vs RSUs vs Restricted Stock: Which Can Be QSBS?",
    description: "Which startup equity types qualify for QSBS and when your holding period starts.",
    url: 'https://www.qsbsguide.com/stock-types',
    siteName: 'QSBS Guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "ISOs vs RSUs vs Restricted Stock: Which Can Be QSBS?",
    description: "Know your equity type. Know when your QSBS clock starts.",
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can ISOs qualify for QSBS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but only after you exercise them. Unexercised ISO grants are not QSBS—your holding period starts when you exercise and pay for the shares, not when the options were granted.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can RSUs qualify for QSBS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, but only after they vest and you receive actual shares. RSUs are promises to deliver stock in the future. Your QSBS holding period starts on the vesting date when shares are delivered to you.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is the difference between restricted stock and RSUs for QSBS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'With restricted stock, you own actual shares immediately (subject to vesting). You can file an 83(b) to start your QSBS clock at grant. With RSUs, you do not own shares until vesting—no 83(b) is possible, and your clock starts at vesting.',
      },
    },
    {
      '@type': 'Question',
      name: 'When does my QSBS holding period start for early-exercised options?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For early-exercised options with an 83(b) election filed within 30 days, your QSBS holding period starts at exercise. Without the 83(b), your clock starts when the shares vest.',
      },
    },
  ],
};

export default function StockTypesPage() {
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
            &larr; Back to Calculator
          </Link>
        </div>

        {/* H1 and Lead */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          ISOs, RSUs, Restricted Stock: Which Can Be QSBS?
        </h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            Not all startup equity is created equal for QSBS purposes. Your stock type determines when—and whether—your 5-year holding period starts.
          </p>
          <p className="text-gray-600">
            Get this wrong and you might think you qualify when you don&apos;t. Or miss out on years of holding period you&apos;ve already completed.
          </p>
        </div>

        {/* Quick Reference Table */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Reference: When Does Your Clock Start?</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Stock Type</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">You Own Stock When...</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">QSBS Clock Starts</th>
                  <th className="text-left py-3 font-semibold text-gray-900">83(b) Option?</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 font-medium text-gray-900">Common Stock</td>
                  <td className="py-4 pr-4">Purchase date</td>
                  <td className="py-4 pr-4 text-emerald-600 font-medium">Purchase date</td>
                  <td className="py-4">N/A</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 font-medium text-gray-900">ISOs / NSOs</td>
                  <td className="py-4 pr-4">Exercise date</td>
                  <td className="py-4 pr-4 text-emerald-600 font-medium">Exercise date</td>
                  <td className="py-4 text-gray-400">No</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 font-medium text-gray-900">Early-Exercised Options</td>
                  <td className="py-4 pr-4">Exercise date</td>
                  <td className="py-4 pr-4 text-emerald-600 font-medium">Exercise (with 83b) or Vesting (without)</td>
                  <td className="py-4 text-emerald-600 font-medium">Yes</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 font-medium text-gray-900">Restricted Stock</td>
                  <td className="py-4 pr-4">Grant date (subject to vesting)</td>
                  <td className="py-4 pr-4 text-emerald-600 font-medium">Grant (with 83b) or Vesting (without)</td>
                  <td className="py-4 text-emerald-600 font-medium">Yes</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 pr-4 font-medium text-gray-900">RSUs</td>
                  <td className="py-4 pr-4">Vesting/delivery date</td>
                  <td className="py-4 pr-4 text-amber-600 font-medium">Vesting date</td>
                  <td className="py-4 text-gray-400">No</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-gray-900">Converted Preferred</td>
                  <td className="py-4 pr-4">Conversion date</td>
                  <td className="py-4 pr-4 text-emerald-600 font-medium">Conversion date</td>
                  <td className="py-4">N/A</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ISOs Deep Dive */}
        <section className="bg-slate-800 text-white rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">ISOs and NSOs: The Grant vs Exercise Trap</h2>

          <p className="text-slate-300 mb-4">
            Stock options are not stock. They&apos;re the right to buy stock. Your QSBS clock doesn&apos;t start until you actually exercise.
          </p>

          <div className="bg-slate-700 rounded-lg p-4 mb-4">
            <p className="text-slate-200 font-medium mb-2">The most common mistake:</p>
            <div className="font-mono text-sm space-y-1">
              <p className="text-slate-400">Jan 2020: Options granted</p>
              <p className="text-slate-400">Jan 2022: Options vest</p>
              <p className="text-red-400">Jan 2025: Sale &mdash; &quot;I&apos;ve held these 5 years!&quot;</p>
              <p className="text-slate-300 mt-2">Problem: You never exercised. You have no stock. No QSBS.</p>
            </div>
          </div>

          <div className="bg-slate-700 rounded-lg p-4">
            <p className="text-slate-200 font-medium mb-2">What should have happened:</p>
            <div className="font-mono text-sm space-y-1">
              <p className="text-slate-400">Jan 2020: Options granted</p>
              <p className="text-emerald-400">Jan 2020: Exercise options immediately &larr; CLOCK STARTS</p>
              <p className="text-emerald-400">Jan 2025: Sale &mdash; 5 years complete, QSBS applies</p>
            </div>
          </div>

          <p className="text-slate-400 text-sm mt-4">
            <Link href="/iso-exercise" className="text-emerald-400 hover:text-emerald-300">Learn more about ISO exercise timing &rarr;</Link>
          </p>
        </section>

        {/* RSUs vs Restricted Stock */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">RSUs vs Restricted Stock: They&apos;re Not the Same</h2>

          <p className="text-gray-600 mb-4">
            These terms sound similar but work completely differently for QSBS:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <h3 className="font-semibold text-amber-900 mb-2">RSUs (Restricted Stock Units)</h3>
              <ul className="text-amber-800 text-sm space-y-2">
                <li>&bull; A promise to give you stock in the future</li>
                <li>&bull; You own nothing until vesting</li>
                <li>&bull; No 83(b) election possible</li>
                <li>&bull; QSBS clock starts at vesting/delivery</li>
                <li>&bull; Common at later-stage companies</li>
              </ul>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
              <h3 className="font-semibold text-emerald-900 mb-2">Restricted Stock</h3>
              <ul className="text-emerald-800 text-sm space-y-2">
                <li>&bull; Actual stock issued to you immediately</li>
                <li>&bull; Subject to vesting (company can buy back if you leave)</li>
                <li>&bull; 83(b) election available</li>
                <li>&bull; With 83(b): clock starts at grant</li>
                <li>&bull; Common at early-stage startups</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-gray-700 font-medium mb-2">How to tell which you have:</p>
            <p className="text-gray-600 text-sm">
              Check your grant agreement. Restricted stock agreements say you&apos;re receiving &quot;shares&quot; subject to repurchase. RSU agreements say you&apos;ll receive shares on a future vesting date. If you&apos;re unsure, ask your company&apos;s equity administrator.
            </p>
          </div>
        </section>

        {/* 83(b) Election Section */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">The 83(b) Advantage</h2>

          <p className="text-gray-600 mb-4">
            For restricted stock and early-exercised options, filing an 83(b) election within 30 days can start your QSBS clock years earlier.
          </p>

          <div className="bg-slate-800 text-white rounded-lg p-4 mb-4">
            <p className="text-slate-400 mb-2">4-year vesting schedule comparison:</p>
            <div className="grid md:grid-cols-2 gap-4 font-mono text-sm">
              <div>
                <p className="text-slate-300 mb-1">Without 83(b):</p>
                <p className="text-slate-400">Clock starts at each vest</p>
                <p className="text-slate-400">Last shares qualify: Year 9</p>
              </div>
              <div>
                <p className="text-emerald-400 mb-1">With 83(b):</p>
                <p className="text-emerald-400">Clock starts at grant</p>
                <p className="text-emerald-400">All shares qualify: Year 5</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 text-sm">
              <strong>The 83(b) deadline is 30 days from grant—no exceptions.</strong> Miss it and your clock starts at vesting.
            </p>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            <Link href="/83b-election" className="text-emerald-600 hover:text-emerald-700">Full guide to 83(b) elections &rarr;</Link>
          </p>
        </section>

        {/* Special Cases */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Special Cases</h2>

          <div className="space-y-4">
            <div className="border-l-4 border-gray-300 pl-4">
              <p className="font-medium text-gray-900">Preferred Stock (Investor shares)</p>
              <p className="text-gray-600 text-sm">
                Preferred stock can qualify for QSBS if it meets all requirements. Clock starts at purchase. Many later-stage preferreds fail the $50M/$75M gross assets test.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <p className="font-medium text-gray-900">Converted Preferred &rarr; Common</p>
              <p className="text-gray-600 text-sm">
                If preferred converts to common (often at IPO or acquisition), your QSBS holding period starts at conversion, not when you originally bought the preferred.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <p className="font-medium text-gray-900">Inherited Stock</p>
              <p className="text-gray-600 text-sm">
                Inherited QSBS includes the decedent&apos;s holding period. If they held for 5+ years, you qualify immediately. The tacking rules are favorable.
              </p>
            </div>

            <div className="border-l-4 border-gray-300 pl-4">
              <p className="font-medium text-gray-900">Gifted Stock</p>
              <p className="text-gray-600 text-sm">
                Gifted QSBS carries over the donor&apos;s holding period and basis. If the donor held for 3 years and you hold for 2 more, you qualify.
              </p>
            </div>
          </div>
        </section>

        {/* Don't Know Your Stock Type */}
        <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-amber-900 mb-4">Not Sure What Type of Stock You Have?</h2>

          <p className="text-amber-800 mb-4">
            Look at your original grant documents. Key things to check:
          </p>

          <ul className="text-amber-800 text-sm space-y-2 mb-4">
            <li>&bull; <strong>Stock Option Agreement</strong> &mdash; You have options (ISOs or NSOs). Check if you&apos;ve exercised them.</li>
            <li>&bull; <strong>RSU Award Agreement</strong> &mdash; You have RSUs. Check your vesting schedule.</li>
            <li>&bull; <strong>Restricted Stock Purchase Agreement</strong> &mdash; You have restricted stock. Check if you filed 83(b).</li>
            <li>&bull; <strong>Stock Subscription Agreement</strong> &mdash; You likely purchased common stock outright.</li>
          </ul>

          <p className="text-amber-800 text-sm">
            Still unsure? Contact your company&apos;s equity administrator or check your Carta/Shareworks/Equity Edge account.
          </p>
        </section>

        {/* Related Questions */}
        <section className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h2>
          <div className="space-y-3">
            <Link href="/holding-period" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              When does my holding period start? &rarr; Detailed breakdown by situation.
            </Link>
            <Link href="/83b-election" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Should I file an 83(b)? &rarr; The 30-day election that can save years.
            </Link>
            <Link href="/iso-exercise" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              ISO exercise timing &rarr; Why the grant date doesn&apos;t matter.
            </Link>
            <Link href="/dont-qualify" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Don&apos;t qualify for QSBS? &rarr; Your options when the exclusion doesn&apos;t apply.
            </Link>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600 mb-3">Know your stock type? Calculate when you&apos;ll qualify.</p>
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
            <p>&copy; {new Date().getFullYear()} QSBS Guide</p>
          </div>
        </div>
      </footer>
    </main>
    </>
  );
}
