import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Section 1202 Exclusion | IRC 1202 QSBS Tax Guide",
    description: "IRC Section 1202 allows taxpayers to exclude gain from the sale of qualified small business stock. Learn about the exclusion percentage, limits, and requirements.",
};

export default function Section1202Page() {
    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-emerald-400 font-bold tracking-wide uppercase text-sm mb-3">IRS CODE EXPLAINED</p>
                    <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-tight mb-6">
                        The <span className="text-emerald-400">Section 1202</span> Exclusion
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        IRC Section 1202 provides a partial exclusion from gross income for gain from the sale of qualified small business stock (QSBS) held for more than five years.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">

                {/* The Core Benefit */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">The Exclusion</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        Under IRC 1202(a), taxpayers may exclude a percentage of gain realized on the sale of QSBS held for more than five years. The exclusion percentage depends on when the stock was acquired.
                    </p>
                    <ul className="space-y-3 bg-slate-50 p-6 rounded-lg border border-slate-100">
                        <li className="flex gap-3">
                            <svg className="w-6 h-6 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="text-slate-700"><strong>Exclusion Amount:</strong> Up to 100% of qualifying gain (for stock acquired after September 27, 2010)</span>
                        </li>
                        <li className="flex gap-3">
                            <svg className="w-6 h-6 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="text-slate-700"><strong>Per-Issuer Limit:</strong> Greater of $10 million or 10 times the adjusted basis of stock in the corporation [IRC 1202(b)(1)]</span>
                        </li>
                        <li className="flex gap-3">
                            <svg className="w-6 h-6 text-emerald-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                            <span className="text-slate-700"><strong>Holding Period:</strong> More than 5 years from the date of issuance [IRC 1202(a)(1)]</span>
                        </li>
                    </ul>
                </div>

                {/* The History (Important nuance) */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">Exclusion Percentage by Acquisition Date</h2>
                    <p className="text-slate-600 mb-4">
                        The exclusion percentage under IRC 1202(a) depends on when the QSBS was acquired:
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead>
                                <tr className="border-b border-gray-200">
                                    <th className="py-2 font-bold text-slate-900">Acquisition Date</th>
                                    <th className="py-2 font-bold text-slate-900">Exclusion</th>
                                    <th className="py-2 font-bold text-slate-900">Code Reference</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-600">
                                <tr className="border-b border-gray-100">
                                    <td className="py-3">After September 27, 2010</td>
                                    <td className="py-3 font-bold text-emerald-600">100%</td>
                                    <td className="py-3">IRC 1202(a)(4)</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3">February 18, 2009 – September 27, 2010</td>
                                    <td className="py-3 font-bold">75%</td>
                                    <td className="py-3">IRC 1202(a)(3)</td>
                                </tr>
                                <tr className="border-b border-gray-100">
                                    <td className="py-3">August 11, 1993 – February 17, 2009</td>
                                    <td className="py-3 font-bold">50%</td>
                                    <td className="py-3">IRC 1202(a)(1)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* State Non-Conformity */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-4">State Tax Considerations</h2>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        Section 1202 is a federal provision. State conformity varies.
                    </p>
                    <p className="text-slate-600 mb-4">
                        Several states do not conform to IRC 1202, including <Link href="/california" className="text-emerald-600 hover:text-emerald-500 font-bold">California</Link>, Pennsylvania, New Jersey, and Mississippi.
                        In non-conforming states, gain that is excluded for federal purposes may still be subject to state income tax.
                    </p>
                </div>

                {/* CTA */}
                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Questions About Your Situation?
                    </h2>
                    <p className="text-slate-300 text-lg mb-8">
                        IRC 1202 eligibility depends on specific facts and circumstances. Consider consulting a tax professional to review your stock and holding period.
                    </p>
                    <Link
                        href="/find-advisor"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all"
                    >
                        Find a QSBS Specialist
                    </Link>
                </div>
                <div className="mt-8 text-center">
                    <Link href="/playbook" className="text-emerald-600 font-bold hover:text-emerald-500 transition-colors">
                        &larr; Back to Playbook
                    </Link>
                </div>

            </div>
        </main>
    );
}
