import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The QSBS Founder Stack | Tools for Tax-Free Exits",
    description: "Curated list of QSBS-compliant tools for startups. Cap table management, banking, and legal infrastructure to protect your Section 1202 exclusion.",
};

export default function FounderStackPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white pt-32 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-emerald-400 font-bold tracking-wide uppercase text-sm mb-3">INFRASTRUCTURE</p>
                    <h1 className="text-4xl sm:text-5xl font-display font-medium tracking-tight mb-6">
                        The <span className="text-emerald-400">Founder Stack</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        QSBS compliance isn't just about the exit. It's about the paperwork you generate 5 years prior.
                        Here are the tools we recommend to keep your exclusion safe.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">

                {/* Tool 1: Pulley */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8 grid md:grid-cols-3">
                    <div className="md:col-span-2 p-8 sm:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-purple-100 p-2 rounded-lg">
                                {/* Placeholder Icon for Pulley */}
                                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Pulley</h2>
                            <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2.5 py-0.5 rounded-full">CAP TABLE</span>
                        </div>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            <strong>Why for QSBS?</strong> Pulley is the only cap table that natively tracks QSBS holding periods for every shareholder.
                            If you mess up your 83(b) or exercise dates here, no lawyer can save you. Pulley prevents those errors.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://pulley.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700">
                                Get Pulley (20% Off)
                            </a>
                            <Link href="/iso-exercise" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-gray-50">
                                Read: ISO Exercises
                            </Link>
                        </div>
                    </div>
                    <div className="bg-purple-50 p-8 sm:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Best For</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start text-slate-600">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Seed to Series B Startups
                            </li>
                            <li className="flex items-start text-slate-600">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                409A Valuations
                            </li>
                            <li className="flex items-start text-slate-600">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Generating Form 3921s
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Tool 2: Mercury */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8 grid md:grid-cols-3">
                    <div className="md:col-span-2 p-8 sm:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-blue-100 p-2 rounded-lg">
                                {/* Placeholder Icon for Mercury */}
                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24"><path d="M4 10h16v2H4zm0-4h16v2H4zm0 8h16v2H4zM4 18h16v2H4z" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Mercury</h2>
                            <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full">BANKING</span>
                        </div>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            <strong>Why for QSBS?</strong> When you exit, you need a safe place to park $10M+ that isn't a single point of failure.
                            Mercury's Vault offering ($5M FDIC insurance) and Treasury products are the standard for post-exit liquidity.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://mercury.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700">
                                Open Account
                            </a>
                        </div>
                    </div>
                    <div className="bg-blue-50 p-8 sm:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Best For</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start text-slate-600">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                High-Yield Treasury Mgmt
                            </li>
                            <li className="flex items-start text-slate-600">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Venture Debt
                            </li>
                            <li className="flex items-start text-slate-600">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                $5M FDIC Insurance
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Tool 3: Clerky */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden mb-8 grid md:grid-cols-3">
                    <div className="md:col-span-2 p-8 sm:p-10 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-slate-100 p-2 rounded-lg">
                                {/* Placeholder Icon for Clerky */}
                                <svg className="w-8 h-8 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                            </div>
                            <h2 className="text-2xl font-bold text-slate-900">Clerky</h2>
                            <span className="bg-slate-100 text-slate-800 text-xs font-bold px-2.5 py-0.5 rounded-full">FORMATION</span>
                        </div>
                        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                            <strong>Why for QSBS?</strong> 90% of QSBS failures happen at incorporation.
                            Clerky ensures you are an 83(b)-filing C-Corp from Day 1. Do not use generic legal sites for a high-growth startup.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a href="https://clerky.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-slate-800 hover:bg-slate-700">
                                Start Incorporation
                            </a>
                            <Link href="/83b-election" className="inline-flex items-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-gray-50">
                                Read: 83(b) Guide
                            </Link>
                        </div>
                    </div>
                    <div className="bg-slate-50 p-8 sm:p-10 flex flex-col justify-center border-t md:border-t-0 md:border-l border-gray-100">
                        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Best For</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start text-slate-600">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                New C-Corp Formation
                            </li>
                            <li className="flex items-start text-slate-600">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Automated 83(b) filing
                            </li>
                            <li className="flex items-start text-slate-600">
                                <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                Standard SAFE Notes
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <p className="text-slate-500 text-sm">
                        Disclaimer: Some links may be affiliate links. We only recommend tools that are legally rigorous enough for QSBS protection.
                    </p>
                    <div className="mt-8">
                        <Link href="/playbook" className="text-emerald-600 font-bold hover:text-emerald-500 transition-colors">
                            &larr; Back to Playbook
                        </Link>
                    </div>
                </div>

            </div>
        </main>
    );
}
