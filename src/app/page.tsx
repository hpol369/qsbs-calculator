import Link from 'next/link';
import Calculator from '@/components/Calculator';
import StickyCta from '@/components/StickyCta';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-slate-900 pb-16 pt-24 sm:pb-24 lg:pb-32">
        {/* Background Gradients */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[500px] h-[500px] bg-emerald-500/10 blur-[100px] rounded-full mix-blend-screen" />
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-indigo-600/10 blur-[120px] rounded-full mix-blend-screen" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-emerald-900/20 blur-[120px] rounded-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">

          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-900/30 px-4 py-1.5 text-sm font-medium text-emerald-300 border border-emerald-500/30 mb-8 backdrop-blur-sm shadow-lg">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Updated for 2025 Tax Rules
          </div>

          <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-white sm:text-7xl leading-tight mb-8">
            Keep <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-400">100% of Your Exit</span>. <br />
            Tax-Free.
          </h1>

          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-slate-300 mb-12 leading-relaxed">
            Section 1202 (QSBS) is the single most powerful tax break in the US Code.
            Stop guessing. Calculate your potential savings in 60 seconds and audit-proof your windfall.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <a href="#calculator" className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-full transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              Calculate Savings
            </a>
            <Link href="/playbook" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-medium rounded-full border border-white/10 backdrop-blur-sm transition-all hover:border-white/20">
              Read the Playbook
            </Link>
          </div>

          {/* Social Proof / Trust Banner */}
          <div className="border-t border-white/5 pt-10">
            <p className="text-sm font-medium text-slate-500 mb-6 uppercase tracking-wider">Trusted Resource For</p>
            <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Simple text labels are safer than SVG logos for this demo */}
              <span className="text-xl font-serif text-slate-400 font-bold px-4">Founders</span>
              <span className="text-xl font-serif text-slate-400 font-bold px-4">VCs</span>
              <span className="text-xl font-serif text-slate-400 font-bold px-4">Early Employees</span>
              <span className="text-xl font-serif text-slate-400 font-bold px-4">Family Offices</span>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 -mt-10 relative z-20">
        <div id="calculator" className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
          <Calculator />
        </div>
      </div>

      {/* SEO Content Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-display font-medium tracking-tight text-slate-900 sm:text-4xl">Common QSBS Pitfalls</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              The 100% exclusion is powerful, but fragile. One wrong move can disqualify you.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">

              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  The 5-Year Clock
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">For options (ISOs/NSOs), the 5-year holding period starts when you <strong>exercise</strong>, not when you were granted the options.
                    Don&apos;t sell 4 years and 11 months after exercise.</p>
                  <p className="mt-6">
                    <Link href="/holding-period" className="text-sm font-semibold leading-6 text-emerald-600 hover:text-emerald-500">
                      Learn about the clock <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                    </svg>
                  </div>
                  State Tax Traps
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">Federal QSBS exclusion is 100%, but states like California (13.3%) do not conform.
                    You may still owe millions to the FTB even if you owe $0 to the IRS.</p>
                  <p className="mt-6">
                    <Link href="/california" className="text-sm font-semibold leading-6 text-emerald-600 hover:text-emerald-500">
                      Check state conformity <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>

              <div className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-slate-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                    <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  Redemptions & Buybacks
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-600">
                  <p className="flex-auto">If your company bought back stock from <strong>anyone</strong> within a 2-year window of your issuance,
                    your shares might be disqualified. This is a common killer for founders.</p>
                  <p className="mt-6">
                    <Link href="/playbook/founders-vs-employees" className="text-sm font-semibold leading-6 text-emerald-600 hover:text-emerald-500">
                      View redemption rules <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>

            </dl>
          </div>
        </div>
      </div>

      {/* What We Check / Don't Check - Transparency */}
      <section className="bg-white mb-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="bg-emerald-50/50 rounded-2xl p-8 sm:p-12 border border-emerald-100">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-display font-medium text-emerald-900 mb-6">What this calculator checks</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <svg className="h-6 w-5 flex-none text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700"><strong>5-Year Holding Period:</strong> Verified against user input and current date.</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="h-6 w-5 flex-none text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700"><strong>Gain Exclusion Cap:</strong> Applies the greater of $10M or 10x basis rule.</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="h-6 w-5 flex-none text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-700"><strong>State Conformity:</strong> Checks if your state (e.g., CA, PA) allows QSBS.</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-display font-medium text-slate-900 mb-6">What requires an Opinion Letter</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <svg className="h-6 w-5 flex-none text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-slate-600"><strong>Qualified Business Status:</strong> Does your company do "consulting" or "tech"?</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="h-6 w-5 flex-none text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-slate-600"><strong>Asset Test:</strong> Did the company always have &lt;$50M in gross assets?</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="h-6 w-5 flex-none text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span className="text-slate-600"><strong>Redemption Rules:</strong> Did the company buy back stock?</span>
                  </li>
                </ul>
                <div className="mt-8">
                  <Link href="/find-advisor" className="text-sm font-bold text-slate-900 border-b-2 border-slate-900 pb-0.5 hover:text-emerald-600 hover:border-emerald-600 transition-colors">
                    Why you need an opinion letter &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <StickyCta />

      </section>

    </main>
  );
}
