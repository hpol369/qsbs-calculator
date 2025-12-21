import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import Calculator from '@/components/Calculator';
import RegimeChecker from '@/components/RegimeChecker';

export const metadata: Metadata = {
  title: "Which QSBS Rules Apply to Your Stock? 2025 Law Changes",
  description: "QSBS rules changed July 2025. Check if old rules ($10M cap, 5 years) or new rules ($15M cap, partial exclusions at 3-4 years) apply to your stock.",
  alternates: {
    canonical: '/2025-changes',
  },
  openGraph: {
    title: "Which QSBS Rules Apply to Your Stock?",
    description: "Check if old or new QSBS rules apply based on your stock acquisition date.",
    url: 'https://www.qsbsguide.com/2025-changes',
    siteName: 'QSBS Guide',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Which QSBS Rules Apply to Your Stock?",
    description: "Old rules or new rules? Check based on your acquisition date.",
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What changed for QSBS in 2025?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The One Big Beautiful Bill Act (OBBBA), signed July 4, 2025, expanded QSBS benefits for stock acquired after that date: the exclusion cap increased from $10M to $15M, partial exclusions at 3-4 years were added, and the gross assets threshold rose from $50M to $75M.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does the new QSBS law apply to my existing stock?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The OBBBA changes only apply to stock acquired after July 4, 2025. Stock acquired before that date remains under the old rules: $10M cap, 5-year all-or-nothing holding period, $50M asset threshold.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the new QSBS holding period tiers?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For stock acquired after July 4, 2025: 3 years = 50% exclusion, 4 years = 75% exclusion, 5+ years = 100% exclusion. Pre-July 2025 stock still requires 5 years for any exclusion.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I convert old stock to get the new QSBS benefits?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. The law explicitly prevents this. You cannot exchange pre-July 2025 QSBS for new QSBS to access the enhanced benefits. The acquisition date is locked in.',
      },
    },
  ],
};

export default function Changes2025Page() {
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
          QSBS Just Changed: What the 2025 Law Means for You
        </h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            On July 4, 2025, the One Big Beautiful Bill Act (OBBBA) expanded QSBS benefits significantly. Higher caps, partial exclusions, and more companies qualifying. But only for stock acquired after the law passed.
          </p>
          <p className="text-gray-600">
            If you got your shares before July 5, 2025, the old rules still apply to you.
          </p>
        </div>

        {/* Quick Check Tool */}
        <RegimeChecker />

        {/* The Key Changes */}
        <section className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">What Changed</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <h3 className="font-medium text-gray-500 text-sm uppercase mb-2">Old Rules (Pre-July 2025)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span><strong>$10M</strong> exclusion cap (or 10× basis)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span><strong>5 years</strong> minimum—all or nothing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span><strong>$50M</strong> gross assets threshold</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-4 shadow-sm border-2 border-emerald-300">
              <h3 className="font-medium text-emerald-700 text-sm uppercase mb-2">New Rules (Post-July 2025)</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span><strong>$15M</strong> exclusion cap (inflation-adjusted from 2027)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span><strong>Tiered exclusions:</strong> 50% at 3yr, 75% at 4yr, 100% at 5yr</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-emerald-600">•</span>
                  <span><strong>$75M</strong> gross assets threshold (inflation-adjusted)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tiered Exclusions Deep Dive */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">The New Tiered Exclusion System</h2>

          <p className="text-gray-600 mb-4">
            The biggest change: you no longer lose everything if you sell before 5 years. For stock acquired after July 4, 2025:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Holding Period</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Exclusion</th>
                  <th className="text-left py-3 font-semibold text-gray-900">Example: $10M Gain</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Less than 3 years</td>
                  <td className="py-3 pr-4 text-red-600">0%</td>
                  <td className="py-3">$0 excluded, ~$2.38M tax</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">3 to 4 years</td>
                  <td className="py-3 pr-4 text-amber-600">50%</td>
                  <td className="py-3">$5M excluded, ~$1.19M tax</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">4 to 5 years</td>
                  <td className="py-3 pr-4 text-emerald-600">75%</td>
                  <td className="py-3">$7.5M excluded, ~$595K tax</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-900">5+ years</td>
                  <td className="py-3 pr-4 text-emerald-700 font-bold">100%</td>
                  <td className="py-3">$10M excluded, $0 tax</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            This is a major improvement for anyone who has to sell before 5 years. Previously, selling at 4.9 years meant zero exclusion.
          </p>
        </section>

        {/* Who This Affects */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Who Benefits from the New Rules</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-700 font-bold">1</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Employees joining startups after July 2025</p>
                <p className="text-gray-600 text-sm">
                  Your options, RSUs, or stock grants will be under the new regime. Higher cap, partial exclusions available.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-700 font-bold">2</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Investors in post-July 2025 funding rounds</p>
                <p className="text-gray-600 text-sm">
                  SAFE conversions and equity purchases after the date get the $15M cap and tiered exclusions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                <span className="text-emerald-700 font-bold">3</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">Companies between $50M and $75M in assets</p>
                <p className="text-gray-600 text-sm">
                  Previously disqualified companies can now issue QSBS again until they hit the new $75M threshold.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-700 font-bold">!</span>
              </div>
              <div>
                <p className="font-medium text-gray-900">People with existing stock: No change</p>
                <p className="text-gray-600 text-sm">
                  If you acquired stock before July 5, 2025, you&apos;re still under the old rules. The new law only applies prospectively.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What Didn't Change */}
        <section className="bg-slate-800 text-white rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">What Didn&apos;t Change</h2>

          <div className="space-y-3 text-slate-300">
            <div className="flex items-start gap-3">
              <span className="text-slate-400">→</span>
              <span>Still requires a domestic C-corporation</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-400">→</span>
              <span>Still must be original issuance (no secondary purchases)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-400">→</span>
              <span>Still requires &quot;qualified trade or business&quot; (consulting, finance, law still excluded)</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-400">→</span>
              <span>5 years still required for the full 100% exclusion</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-slate-400">→</span>
              <span>State non-conformity unchanged (California still doesn&apos;t recognize QSBS)</span>
            </div>
          </div>
        </section>

        {/* Calculator Embed */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Calculate Your QSBS Benefits</h2>
          <p className="text-gray-600 mb-6">
            Our calculator automatically applies the correct rules based on your stock acquisition date.
          </p>
          <Calculator />
        </section>

        {/* Anti-Abuse Rule */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-900 mb-4">You Can&apos;t Game This</h2>

          <p className="text-red-800 mb-4">
            The law explicitly prevents swapping old stock for new stock to access the enhanced benefits:
          </p>

          <div className="bg-white rounded-lg p-4 text-red-800 text-sm">
            <p className="font-medium mb-2">Blocked strategies:</p>
            <ul className="space-y-1">
              <li>• Exchanging pre-July 2025 QSBS for new QSBS</li>
              <li>• Converting old stock through corporate restructuring to get new acquisition date</li>
              <li>• Any transaction designed to reset the acquisition date</li>
            </ul>
          </div>

          <p className="text-red-700 text-sm mt-4">
            Your acquisition date is locked in. The IRS wrote the rules this way specifically to prevent arbitrage.
          </p>
        </section>

        {/* Sources */}
        <section className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Sources</h2>
          <div className="space-y-2 text-sm">
            <p className="text-gray-600">
              <a href="https://www.cooley.com/news/insight/2025/2025-07-11-the-one-big-beautiful-bill-act-expands-qsbs-benefits" className="text-emerald-600 hover:text-emerald-700" target="_blank" rel="noopener noreferrer">
                Cooley LLP: The One Big Beautiful Bill Act Expands QSBS Benefits →
              </a>
            </p>
            <p className="text-gray-600">
              <a href="https://www.mintz.com/insights-center/viewpoints/2906/2025-07-09-qsbs-benefits-expanded-under-one-big-beautiful-bill-act" className="text-emerald-600 hover:text-emerald-700" target="_blank" rel="noopener noreferrer">
                Mintz: QSBS Benefits Expanded Under One Big Beautiful Bill Act →
              </a>
            </p>
            <p className="text-gray-600">
              <a href="https://www.mwe.com/insights/one-big-beautiful-bill-act-brings-major-changes-to-section-1202-capital-gains-exclusion/" className="text-emerald-600 hover:text-emerald-700" target="_blank" rel="noopener noreferrer">
                McDermott: One Big Beautiful Bill Act brings major changes to Section 1202 →
              </a>
            </p>
          </div>
        </section>

        {/* Related Questions */}
        <section className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h2>
          <div className="space-y-3">
            <Link href="/holding-period" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              When does my holding period start? → Same rules apply, just different outcomes.
            </Link>
            <Link href="/10-million-limit" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              What about the $10M vs $15M cap? → It depends on when you got your stock.
            </Link>
            <Link href="/selling-early" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              Selling before 5 years? → New rules make this less painful for newer stock.
            </Link>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600 mb-3">See which rules apply to your stock.</p>
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
