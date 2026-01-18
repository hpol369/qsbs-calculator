import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "The QSBS Playbook – A Founder's Guide to Section 1202",
    description: "The complete guide to Qualified Small Business Stock. Strategies for founders, employees, and investors to maximize tax-free exits.",
    openGraph: {
        title: "The QSBS Playbook – A Founder's Guide to Section 1202",
        description: "The complete guide to Qualified Small Business Stock. Strategies for founders, employees, and investors to maximize tax-free exits.",
    },
};

export default function PlaybookPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20">

            {/* Hero Header */}
            <div className="bg-slate-900 text-white pt-16 pb-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-emerald-400 font-bold tracking-wide uppercase text-sm mb-3">The Playbook</p>
                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
                        The Founder's Guide to <span className="text-emerald-400">Tax-Free Exits</span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        QSBS isn't just a checkbox on a tax form. It's a multi-year strategy.
                        Here is the complete manual for navigating Section 1202 without getting trapped by the fine print.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">

                {/* Featured Guides Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

                    {/* Card 1: The Basics (Existing) */}
                    <Link href="/holding-period" className="group flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="h-2 bg-emerald-500" />
                        <div className="p-6 flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-2 py-1 rounded">ESSENTIAL</span>
                                <span className="text-gray-400 text-xs">5 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors">
                                The 5-Year Holding Period
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The most common point of failure. Understand exactly when your clock starts—especially for options vs. stock.
                            </p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-50 bg-gray-50 group-hover:bg-emerald-50/50 transition-colors">
                            <span className="text-emerald-700 font-semibold text-sm flex items-center">
                                Read guide <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </div>
                    </Link>

                    {/* Card 2: 83(b) (Existing) */}
                    <Link href="/83b-election" className="group flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="h-2 bg-blue-500" />
                        <div className="p-6 flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2 py-1 rounded">EARLY STAGE</span>
                                <span className="text-gray-400 text-xs">4 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                                The 83(b) Election Guide
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The "billion dollar email." How a single piece of paper can start your QSBS clock years before you vest.
                            </p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-50 bg-gray-50 group-hover:bg-blue-50/50 transition-colors">
                            <span className="text-blue-700 font-semibold text-sm flex items-center">
                                Read guide <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </div>
                    </Link>

                    {/* Card 3: Opinion Letters (New - Coming Soon) */}
                    <Link href="/playbook/opinion-letter" className="group flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="h-2 bg-purple-500" />
                        <div className="p-6 flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-purple-100 text-purple-800 text-xs font-bold px-2 py-1 rounded">ADVANCED</span>
                                <span className="text-gray-400 text-xs">7 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-700 transition-colors">
                                Do You Need an Opinion Letter?
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The IRS is scrutinizing QSBS claims more than ever. Learn when you need a formal legal opinion to audit-proof your return.
                            </p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-50 bg-gray-50 group-hover:bg-purple-50/50 transition-colors">
                            <span className="text-purple-700 font-semibold text-sm flex items-center">
                                Read guide <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </div>
                    </Link>

                    {/* Card 4: ISOs (Existing) */}
                    <Link href="/iso-exercise" className="group flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="h-2 bg-amber-500" />
                        <div className="p-6 flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-amber-100 text-amber-800 text-xs font-bold px-2 py-1 rounded">WARNING</span>
                                <span className="text-gray-400 text-xs">3 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-700 transition-colors">
                                ISO Exercise & QSBS
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                The #1 mistake employees make: thinking their clock starts at grant. It starts at exercise. Don't get caught 6 days short.
                            </p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-50 bg-gray-50 group-hover:bg-amber-50/50 transition-colors">
                            <span className="text-amber-700 font-semibold text-sm flex items-center">
                                Read guide <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </div>
                    </Link>

                    {/* Card 5: Founders vs Employees (New - Coming Soon) */}
                    <Link href="/playbook/founders-vs-employees" className="group flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="h-2 bg-indigo-500" />
                        <div className="p-6 flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-indigo-100 text-indigo-800 text-xs font-bold px-2 py-1 rounded">COMPARISON</span>
                                <span className="text-gray-400 text-xs">6 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-700 transition-colors">
                                Founders vs. Employees
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                Founders lose QSBS on "secondary sales." Employees lose it on "late exercises." Every role has its own trapdoors.
                            </p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-50 bg-gray-50 group-hover:bg-indigo-50/50 transition-colors">
                            <span className="text-indigo-700 font-semibold text-sm flex items-center">
                                Read guide <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </div>
                    </Link>

                    {/* Card 6: State Tax (Existing) */}
                    <Link href="/california" className="group flex flex-col bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="h-2 bg-red-500" />
                        <div className="p-6 flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-red-100 text-red-800 text-xs font-bold px-2 py-1 rounded">STATE TAX</span>
                                <span className="text-gray-400 text-xs">5 min read</span>
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-700 transition-colors">
                                California & State Non-Conformity
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                You can save millions on federal tax and still owe California 13.3%. Why moving states isn't as simple as it sounds.
                            </p>
                        </div>
                        <div className="px-6 py-4 border-t border-gray-50 bg-gray-50 group-hover:bg-red-50/50 transition-colors">
                            <span className="text-red-700 font-semibold text-sm flex items-center">
                                Read guide <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </div>
                    </Link>

                    {/* Card 7: Founder Stack (Affiliate) */}
                    <Link href="/playbook/founder-stack" className="group flex flex-col bg-slate-900 rounded-xl shadow-lg border border-slate-700 overflow-hidden hover:shadow-2xl transition-all hover:-translate-y-1 ring-1 ring-white/10">
                        <div className="h-2 bg-gradient-to-r from-emerald-400 to-emerald-600" />
                        <div className="p-6 flex-1">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="bg-emerald-500/20 text-emerald-300 text-xs font-bold px-2 py-1 rounded border border-emerald-500/20">TOOLS</span>
                                <span className="text-slate-400 text-xs">Recommended</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors font-display">
                                The Founder Stack
                            </h3>
                            <p className="text-slate-300 text-sm leading-relaxed">
                                The exact banking, legal, and cap table setup you need to ensure your stock remains QSBS qualified.
                            </p>
                        </div>
                        <div className="px-6 py-4 border-t border-slate-800 bg-slate-800/50 group-hover:bg-slate-800 transition-colors">
                            <span className="text-emerald-400 font-semibold text-sm flex items-center">
                                View stack <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </span>
                        </div>
                    </Link>

                </div>

                {/* Lead Magnet / CTA Section */}
                <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mt-8 -mr-8 w-64 h-64 bg-emerald-500/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 -mb-8 -ml-8 w-48 h-48 bg-blue-500/10 blur-3xl rounded-full" />

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Don't Leave It to Chance
                        </h2>
                        <p className="text-slate-300 text-lg mb-8">
                            QSBS rules are complex and high-stakes. If you have over $500k in potential savings, you need a professional review.
                        </p>
                        <Link
                            href="/find-advisor"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all transform hover:scale-105"
                        >
                            Find a QSBS Advisor
                        </Link>
                        <p className="text-slate-500 text-sm mt-4">
                            Get matched with a tax attorney or specialist CPA.
                        </p>
                    </div>
                </div>

            </div>
        </main>
    );
}
