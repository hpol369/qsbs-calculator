import Link from 'next/link';
import type { Metadata } from 'next';
import Script from 'next/script';
import Calculator from '@/components/Calculator';

export const metadata: Metadata = {
  title: "83(b) Election and QSBS: Start Your Clock Earlier | QSBS Calculator",
  description: "Filing an 83(b) election within 30 days of receiving restricted stock starts your QSBS holding period at grant, not vesting. Here's how it works and when it matters.",
  alternates: {
    canonical: '/83b-election',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Does an 83(b) election affect my QSBS holding period?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If you file an 83(b) election within 30 days of receiving restricted stock, your QSBS holding period starts at the grant date. Without the 83(b), your holding period starts when shares vest—potentially years later.',
      },
    },
    {
      '@type': 'Question',
      name: 'How do I file an 83(b) election?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Mail the signed 83(b) form to the IRS within 30 days of receiving restricted stock. Send it certified mail with return receipt. Give a copy to your employer and keep one for your records. There is no extension—miss the deadline and you cannot file.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I file an 83(b) for stock options or RSUs?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'For regular options (ISOs/NSOs), you cannot file an 83(b)—the holding period starts at exercise. For RSUs, 83(b) elections are not available because you do not receive actual stock until vesting. 83(b) only works for restricted stock (not RSUs) and early-exercised options.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if I miss the 30-day 83(b) deadline?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'There is no remedy. If you miss the 30-day deadline, your holding period starts at vesting instead of grant. This can delay your QSBS qualification by years depending on your vesting schedule.',
      },
    },
  ],
};

export default function Election83bPage() {
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
          The 83(b) Election: Start Your QSBS Clock Years Earlier
        </h1>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            Filing an 83(b) election within 30 days of receiving restricted stock starts your QSBS holding period at grant—not vesting. On a 4-year vest, that&apos;s potentially 4 years of head start.
          </p>
          <p className="text-gray-600">
            Miss the 30-day window, and there&apos;s no second chance.
          </p>
        </div>

        {/* The Timeline Difference */}
        <section className="bg-slate-800 text-white rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">The Timeline Difference</h2>

          <div className="space-y-4">
            <div>
              <p className="text-slate-400 text-sm mb-2">With 83(b) filed:</p>
              <div className="bg-slate-700 rounded-lg p-3 font-mono text-sm">
                <p><span className="text-slate-400">2021:</span> Receive restricted stock, file 83(b) <span className="text-emerald-400">← CLOCK STARTS</span></p>
                <p><span className="text-slate-400">2022-2024:</span> Stock vests over time</p>
                <p><span className="text-emerald-400">2026:</span> 5 years complete <span className="text-emerald-400">← QSBS QUALIFIED</span></p>
              </div>
            </div>

            <div>
              <p className="text-slate-400 text-sm mb-2">Without 83(b):</p>
              <div className="bg-slate-700 rounded-lg p-3 font-mono text-sm">
                <p><span className="text-slate-400">2021:</span> Receive restricted stock (clock doesn&apos;t start)</p>
                <p><span className="text-slate-400">2022-2024:</span> Stock vests over time</p>
                <p><span className="text-red-400">2025:</span> Final vest <span className="text-red-400">← CLOCK STARTS HERE</span></p>
                <p><span className="text-red-400">2030:</span> 5 years complete <span className="text-red-400">← QSBS QUALIFIED</span></p>
              </div>
            </div>
          </div>

          <p className="text-slate-300 mt-4 text-sm">
            Same stock. Same company exit. But the 83(b) filer qualifies for QSBS 4 years earlier.
          </p>
        </section>

        {/* How to File */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">How to File an 83(b)</h2>

          <p className="text-gray-600 mb-4">
            The process is surprisingly low-tech. There&apos;s no electronic filing—you mail paper to the IRS.
          </p>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold">1</div>
              <div>
                <p className="font-medium text-gray-900">Complete the 83(b) form</p>
                <p className="text-gray-600 text-sm">Include your name, SSN, address, property description, FMV, amount paid, and a statement that you&apos;re making the election under Section 83(b).</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold">2</div>
              <div>
                <p className="font-medium text-gray-900">Mail to IRS within 30 days</p>
                <p className="text-gray-600 text-sm">Send to the IRS Service Center where you file your return. Use certified mail with return receipt requested. The postmark date is what counts.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold">3</div>
              <div>
                <p className="font-medium text-gray-900">Give a copy to your employer</p>
                <p className="text-gray-600 text-sm">They need to know you filed. This also helps if you ever need proof.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 font-semibold">4</div>
              <div>
                <p className="font-medium text-gray-900">Keep records forever</p>
                <p className="text-gray-600 text-sm">Keep your signed copy, certified mail receipt, and return receipt. You may need these years later to prove you filed.</p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-6">
            <p className="text-red-800 text-sm">
              <strong>The 30-day deadline is absolute.</strong> Day 31 is too late. There is no extension, no exception, no remedy. If you miss it, your holding period starts at vesting.
            </p>
          </div>
        </section>

        {/* When It Applies */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">When You Can (and Can&apos;t) File 83(b)</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">Stock Type</th>
                  <th className="text-left py-3 pr-4 font-semibold text-gray-900">83(b) Available?</th>
                  <th className="text-left py-3 font-semibold text-gray-900">Holding Period Starts</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Restricted stock</td>
                  <td className="py-3 pr-4 text-emerald-600 font-medium">Yes</td>
                  <td className="py-3">Grant date (with 83b) or vesting (without)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Early-exercised options</td>
                  <td className="py-3 pr-4 text-emerald-600 font-medium">Yes</td>
                  <td className="py-3">Exercise date (with 83b) or vesting (without)</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-3 pr-4 font-medium text-gray-900">Regular ISOs/NSOs</td>
                  <td className="py-3 pr-4 text-red-600 font-medium">No</td>
                  <td className="py-3">Exercise date only</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium text-gray-900">RSUs</td>
                  <td className="py-3 pr-4 text-red-600 font-medium">No</td>
                  <td className="py-3">Vesting/delivery date only</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-gray-500 text-sm mt-4">
            The key distinction: 83(b) only applies when you receive actual stock that&apos;s subject to vesting. RSUs don&apos;t count because you don&apos;t have stock until they vest. Regular options don&apos;t count because you don&apos;t have stock until you exercise.
          </p>
        </section>

        {/* The Tax Trade-off */}
        <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">The Tax Trade-off</h2>

          <p className="text-gray-600 mb-4">
            When you file an 83(b), you pay income tax on the current value of the stock immediately—even though you haven&apos;t sold anything.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 mb-4">
            <p className="font-medium text-gray-900 mb-2">The bet you&apos;re making:</p>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span>Pay tax on $1/share now at ordinary income rates</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span>Stock grows to $100/share</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-600">•</span>
                <span>Sell with QSBS exclusion on the $99 gain = $0 tax on the appreciation</span>
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <p className="text-amber-800 text-sm">
              <strong>The risk:</strong> If the company fails or the stock becomes worthless, you paid tax on something you never benefited from. You can deduct the loss, but you don&apos;t get the tax back.
            </p>
          </div>

          <p className="text-gray-600 mt-4 text-sm">
            This trade-off is why early-stage employees often file 83(b)—the stock is worth almost nothing at grant, so the immediate tax is minimal. At a later-stage company with higher valuations, the calculus is different.
          </p>
        </section>

        {/* Calculator Embed */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">When Will You Qualify?</h2>
          <p className="text-gray-600 mb-6">
            Enter your stock details to see when your QSBS holding period started—and when you&apos;ll hit 5 years.
          </p>
          <Calculator />
        </section>

        {/* Common Mistakes */}
        <section className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-red-900 mb-4">Common 83(b) Mistakes</h2>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold">1</span>
              <div>
                <p className="font-medium text-red-900">Missing the deadline</p>
                <p className="text-red-800 text-sm">Mark day 30 on your calendar the moment you receive restricted stock. File on day 25 to be safe.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold">2</span>
              <div>
                <p className="font-medium text-red-900">Not using certified mail</p>
                <p className="text-red-800 text-sm">Without proof of mailing date, you can&apos;t prove you met the deadline. Certified mail with return receipt is essential.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold">3</span>
              <div>
                <p className="font-medium text-red-900">Losing your records</p>
                <p className="text-red-800 text-sm">You may need to prove you filed 10+ years later when you sell. Keep everything—digitally backed up.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-red-500 font-bold">4</span>
              <div>
                <p className="font-medium text-red-900">Assuming your company filed for you</p>
                <p className="text-red-800 text-sm">Some companies help, but it&apos;s your responsibility. Verify it was actually sent.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Questions */}
        <section className="bg-gray-100 rounded-xl p-6 mb-8">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Related Questions</h2>
          <div className="space-y-3">
            <Link href="/holding-period" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              When does my holding period start? → Full breakdown for all stock types.
            </Link>
            <Link href="/iso-exercise" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              ISO grant vs exercise date → The other common timing mistake.
            </Link>
            <Link href="/selling-early" className="block text-emerald-600 hover:text-emerald-700 font-medium">
              What if I have to sell before 5 years? → Your options explained.
            </Link>
          </div>
        </section>

        {/* Footer CTA */}
        <div className="text-center py-6 border-t border-gray-200">
          <p className="text-gray-600 mb-3">See your complete QSBS timeline.</p>
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
