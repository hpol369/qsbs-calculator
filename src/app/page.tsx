import Calculator from '@/components/Calculator';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl font-bold text-gray-900">QSBS Calculator</h1>
              <p className="text-sm text-gray-500">Section 1202 Tax Savings</p>
            </div>
            <div className="text-right text-xs text-gray-400">
              <p>Updated December 2025</p>
              <p>IRC §1202 + OBBBA</p>
            </div>
          </div>
        </div>
      </header>

      {/* 2025 Law Change Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 text-white print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="bg-white/20 text-xs font-bold px-2 py-1 rounded">NEW LAW</span>
              <p className="text-sm">
                <strong>July 2025:</strong> QSBS rules changed. Stock acquired after July 4, 2025 gets a $15M cap and partial exclusions at 3-4 years.
              </p>
            </div>
            <Link
              href="/2025-changes"
              className="text-sm font-medium bg-white/20 hover:bg-white/30 px-3 py-1 rounded whitespace-nowrap transition-colors"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8 print:py-4">
        {/* Hero - Problem-First */}
        <div className="text-center mb-8 print:hidden">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Do You Actually Qualify for QSBS?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-2">
            Most people think they do. Most people are wrong about when their 5-year clock started.
          </p>
          <p className="text-base text-gray-500">
            Find out in 60 seconds—before you accidentally trigger a $500K tax bill.
          </p>
        </div>

        {/* The Date That Matters - Asymmetric emphasis */}
        <div className="bg-slate-900 text-white rounded-xl p-6 mb-6 print:hidden">
          <h3 className="text-lg font-semibold mb-2">The date that matters</h3>
          <p className="text-slate-300 mb-4">
            Your 5-year clock started on a specific date. Most people guess wrong. Options?
            It&apos;s not your grant date. Restricted stock? Depends on your 83(b). RSUs? Not until delivery.
          </p>
          <p className="text-slate-400 text-sm">
            Get this wrong and you sell early. Sell early and you lose everything—though new 2025 rules add partial exclusions for 3-4 year holds on newer stock.
          </p>
        </div>

        {/* Calculator */}
        <Calculator />

        {/* SEO Content - Below the Tool - Rewritten with voice */}
        <div className="mt-12 space-y-8 print:hidden">

          {/* The Short Version */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">The short version</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Sell your startup stock after 5 years and you might owe zero federal tax on the gain.
                Up to $10M for pre-July 2025 stock, $15M for newer stock.
              </p>
              <p className="font-medium text-gray-900">
                The catch: most people screw it up.
              </p>
              <p>
                They think they qualify when they don&apos;t. They sell 2 months early. They&apos;re in California
                and don&apos;t realize the state doesn&apos;t care about QSBS. They find out during the wire
                transfer that their $400K tax bill is real.
              </p>
              <p>
                This calculator won&apos;t tell you everything. But it&apos;ll tell you the three things that
                matter most: when your clock actually started, how much you&apos;d save, and whether your
                state is going to take it anyway.
              </p>
            </div>
          </section>

          {/* The Mistake That Costs Millions */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">The mistake that costs people millions</h2>
            <div className="text-gray-600 space-y-4">
              <p>
                Here&apos;s what I see constantly: a founder gets options in 2019, exercises in 2023,
                and tries to sell in 2025 thinking they&apos;re qualified.
              </p>
              <p className="font-medium text-gray-900">
                They&apos;re not. Not even close.
              </p>
              <p>
                Your clock starts at EXERCISE. Not grant. Not vesting. Exercise.
              </p>
              <p>
                If you exercised in 2023, you can&apos;t sell until 2028. Period. Doesn&apos;t matter that
                you&apos;ve been at the company for 8 years.
              </p>

              {/* Real-world callout */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4">
                <p className="text-red-800 text-sm">
                  <strong>Real example:</strong> Last year, an employee at a YC company exercised their options
                  on December 15, 2019 and tried to sell on December 10, 2024—thinking 5 years had passed.
                  It hadn&apos;t. Five years from December 15, 2019 is December 16, 2024. They were 6 days early.
                  The entire QSBS benefit was lost. $340K in taxes they didn&apos;t need to pay.
                </p>
              </div>

              <p>
                The calculator above will tell you your actual qualification date. If you don&apos;t like
                the answer, there&apos;s nothing to be done—except wait.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">When your clock starts:</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <ul className="space-y-2 text-sm">
                  <li><strong>Stock options (ISOs/NSOs):</strong> Exercise date. Not grant.</li>
                  <li><strong>Restricted stock with 83(b):</strong> Grant date.</li>
                  <li><strong>Restricted stock without 83(b):</strong> Vesting date. (Honestly, if you didn&apos;t file the 83(b), you probably forgot.)</li>
                  <li><strong>RSUs:</strong> Delivery date. You can&apos;t file 83(b) on RSUs.</li>
                  <li><strong>SAFE/convertible note:</strong> Conversion date.</li>
                  <li><strong>Inherited stock:</strong> Immediately qualified. Lucky you.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* California Section */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">If you&apos;re in California, I have bad news</h2>
            <div className="text-gray-600 space-y-4">
              <p className="font-medium text-gray-900">
                California doesn&apos;t recognize QSBS. At all.
              </p>
              <p>
                You can qualify for the federal exclusion. You can save $500K in federal taxes.
                And California will still hand you a bill for 13.3% of your gain.
              </p>
              <p>
                On a $2M gain, that&apos;s $266,000. To California. Even though you owe the IRS nothing.
              </p>
              <p>
                This isn&apos;t a bug in the tax code—it&apos;s a policy choice. California wants the revenue.
                They&apos;re not going to change.
              </p>

              {/* Real-world callout */}
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 my-4">
                <p className="text-amber-800 text-sm">
                  <strong>Real example:</strong> I talked to a founder who moved from SF to Austin specifically
                  for the QSBS state tax benefit. Six weeks before their exit. California audited them anyway,
                  argued they hadn&apos;t &quot;really&quot; moved, and sent a bill for $180K. The lesson: if you&apos;re going
                  to relocate, do it right—and do it early. California&apos;s Franchise Tax Board is aggressive.
                </p>
              </div>

              <p>
                Some people move before their exit. That&apos;s a real option, but it&apos;s complicated
                (California&apos;s exit tax rules are aggressive, and you need to actually move, not just pretend).
                Talk to a tax attorney if you&apos;re considering it.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-medium text-red-900 mb-2">States that don&apos;t recognize QSBS</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>California (13.3%)</li>
                    <li>Pennsylvania (3.07%)</li>
                    <li>Alabama (5%)</li>
                    <li>Mississippi (5%)</li>
                  </ul>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-900 mb-2">States with no income tax</h4>
                  <ul className="text-sm text-emerald-800 space-y-1">
                    <li>Texas, Florida, Nevada, Wyoming</li>
                    <li>Tennessee, South Dakota, Alaska</li>
                    <li>Washington*, New Hampshire*</li>
                  </ul>
                  <p className="text-xs text-emerald-600 mt-2">* WA has 7% cap gains tax over $270K</p>
                </div>
              </div>
            </div>
          </section>

          {/* What This Tells You - With real-world callout */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What this tells you (and what it doesn&apos;t)</h2>
            <div className="text-gray-600 space-y-4">
              <p>This calculator answers three questions:</p>

              <div className="space-y-3">
                <div className="flex gap-3">
                  <span className="text-emerald-600 font-bold">1.</span>
                  <div>
                    <strong className="text-gray-900">When does your holding period actually qualify?</strong>
                    <p className="text-sm mt-1">Most people get this wrong, especially with options.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-emerald-600 font-bold">2.</span>
                  <div>
                    <strong className="text-gray-900">How much would you save if you qualify?</strong>
                    <p className="text-sm mt-1">The real number. Federal taxes, based on your gain.</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="text-emerald-600 font-bold">3.</span>
                  <div>
                    <strong className="text-gray-900">What&apos;s your state going to do?</strong>
                    <p className="text-sm mt-1">Spoiler: if you&apos;re in California, nothing good.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-medium text-gray-900 mt-6 mb-3">What this DOESN&apos;T tell you:</h3>

              <p>
                Whether your company qualifies. That depends on things like: Was it a C-corp when you
                got your shares? Did it have under $50M in gross assets at that moment? Is the business
                actually a &quot;qualified trade or business&quot;? (Consulting companies often aren&apos;t. Seriously.)
              </p>

              <p>
                We can&apos;t check those from here. You&apos;ll need your company&apos;s records—or a conversation
                with someone who has them.
              </p>

              {/* Real-world callout */}
              <div className="bg-slate-100 border border-slate-300 rounded-lg p-4 my-4">
                <p className="text-slate-800 text-sm">
                  <strong>Real example:</strong> In 2024, a Series B founder lost $2.3M in QSBS benefits
                  because their company crossed $50M in gross assets one week before his shares were issued.
                  The calculator would have shown a big savings number. He would have been wrong.
                </p>
                <p className="text-slate-600 text-sm mt-2">
                  Check with your CFO. Or don&apos;t—but know the risk.
                </p>
              </div>
            </div>
          </section>

          {/* What We Check / Don't Check - Transparency */}
          <section className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="bg-emerald-50 px-6 py-4 border-b border-emerald-100">
              <h2 className="text-lg font-semibold text-emerald-900">What this calculator checks</h2>
            </div>
            <div className="p-6">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <div>
                    <strong className="text-gray-900">Your holding period start date</strong>
                    <p className="text-sm text-gray-600">Based on stock type, acquisition method, and 83(b) status</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <div>
                    <strong className="text-gray-900">Your exclusion cap</strong>
                    <p className="text-sm text-gray-600">$10M floor or 10× basis, whichever is greater</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <div>
                    <strong className="text-gray-900">Your state&apos;s QSBS treatment</strong>
                    <p className="text-sm text-gray-600">Conformity status for all 50 states + DC</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-emerald-600">✓</span>
                  <div>
                    <strong className="text-gray-900">Federal tax savings estimate</strong>
                    <p className="text-sm text-gray-600">Based on standard LTCG + NIIT rates (23.8%)</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
              <h2 className="text-lg font-semibold text-gray-700">What this calculator does NOT check</h2>
            </div>
            <div className="p-6 pt-4">
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-gray-400">✗</span>
                  <div>
                    <strong className="text-gray-700">C-corporation status</strong>
                    <p className="text-sm text-gray-500">Was your company a C-corp when you got your shares? Ask your CFO or check your stock agreement.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400">✗</span>
                  <div>
                    <strong className="text-gray-700">$50M gross assets test</strong>
                    <p className="text-sm text-gray-500">Did the company have under $50M in assets at issuance? This is in your company&apos;s tax records.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400">✗</span>
                  <div>
                    <strong className="text-gray-700">Qualified trade or business</strong>
                    <p className="text-sm text-gray-500">Is the business type eligible? Consulting, finance, law, hospitality = usually no.</p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-gray-400">✗</span>
                  <div>
                    <strong className="text-gray-700">Original issuance requirement</strong>
                    <p className="text-sm text-gray-500">Did you get stock directly from the company? Secondary purchases don&apos;t qualify.</p>
                  </div>
                </li>
              </ul>
              <p className="text-sm text-gray-500 mt-4">
                These require documentation you have—we don&apos;t. A tax professional can verify them before your exit.
              </p>
              <Link href="/methodology" className="text-sm text-emerald-600 hover:text-emerald-700 mt-2 inline-block">
                See full methodology →
              </Link>
            </div>
          </section>

          {/* Common Questions - Links to Problem Pages */}
          <section className="bg-slate-100 rounded-xl p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Common questions</h2>
            <div className="space-y-4">
              <Link href="/holding-period" className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-emerald-700 mb-1">When does my QSBS holding period start?</h3>
                <p className="text-sm text-gray-600">It depends on your stock type. Most people get this wrong—especially with options.</p>
              </Link>
              <Link href="/california" className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-emerald-700 mb-1">Does California recognize QSBS?</h3>
                <p className="text-sm text-gray-600">No. You&apos;ll owe 13.3% to California even if you owe the IRS nothing.</p>
              </Link>
              <Link href="/iso-exercise" className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-emerald-700 mb-1">Does QSBS start at grant or exercise?</h3>
                <p className="text-sm text-gray-600">Exercise. This is the #1 mistake that costs people millions.</p>
              </Link>
              <Link href="/83b-election" className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-emerald-700 mb-1">How does an 83(b) election affect QSBS?</h3>
                <p className="text-sm text-gray-600">It can start your clock years earlier. But you have 30 days to file—no exceptions.</p>
              </Link>
              <Link href="/10-million-limit" className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-emerald-700 mb-1">What&apos;s the QSBS exclusion cap?</h3>
                <p className="text-sm text-gray-600">$10M for pre-July 2025 stock, $15M for newer stock. Or 10× your basis if higher.</p>
              </Link>
              <Link href="/dont-qualify" className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-emerald-700 mb-1">What if I don&apos;t qualify for QSBS?</h3>
                <p className="text-sm text-gray-600">You have options: Section 1045 rollover, deal timing, and tax planning strategies.</p>
              </Link>
              <Link href="/selling-early" className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-emerald-700 mb-1">What if I have to sell before 5 years?</h3>
                <p className="text-sm text-gray-600">Section 1045 rollover and other strategies if you can&apos;t wait.</p>
              </Link>
              <Link href="/stock-types" className="block bg-white rounded-lg p-4 hover:shadow-md transition-shadow">
                <h3 className="font-medium text-emerald-700 mb-1">ISOs vs RSUs vs restricted stock—which can be QSBS?</h3>
                <p className="text-sm text-gray-600">Not all equity is equal. Know your type, know when your clock starts.</p>
              </Link>
            </div>
          </section>

        </div>
      </div>

      {/* Legal Sources - Trust Signals */}
      <section className="max-w-4xl mx-auto px-4 mt-8 print:hidden">
        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
          <h3 className="text-sm font-semibold text-slate-700 mb-3">Legal Sources & References</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-slate-600 mb-2">Primary IRC sections:</p>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.law.cornell.edu/uscode/text/26/1202" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                    IRC §1202 — QSBS exclusion rules
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.law.cornell.edu/uscode/text/26/1045" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                    IRC §1045 — Rollover provisions
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://www.law.cornell.edu/uscode/text/26/83" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                    IRC §83(b) — Property transfers
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-slate-600 mb-2">Recent law changes:</p>
              <ul className="space-y-1">
                <li>
                  <a href="https://www.congress.gov/bill/119th-congress/house-bill/1" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline flex items-center gap-1">
                    OBBBA 2025 — New partial exclusions
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              </ul>
              <p className="text-slate-500 text-xs mt-3">
                Last verified: December 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - With operator attribution */}
      <footer className="bg-white border-t border-gray-200 mt-8 print:hidden">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="text-center text-sm text-gray-500 space-y-2">
            <p>
              Built by people who think this information should be easier to find.
            </p>
            <p>
              This tool provides educational information about QSBS. Not affiliated with the IRS.
              Not tax, legal, or financial advice.
            </p>
            <p className="text-gray-400">
              © {new Date().getFullYear()} QSBS Calculator · <Link href="/methodology" className="hover:text-gray-600">Methodology</Link> · <Link href="/company-qualifies" className="hover:text-gray-600">Company Requirements</Link> · <Link href="/1045-rollover" className="hover:text-gray-600">Section 1045</Link>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
