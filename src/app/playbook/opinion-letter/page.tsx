import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "QSBS Opinion Letters: When You Need Professional Documentation",
    description: "Understanding when a formal tax opinion letter may be appropriate for documenting your Section 1202 QSBS eligibility and potential penalty protection.",
    openGraph: {
        title: "QSBS Opinion Letters: When You Need Professional Documentation",
        description: "Learn about tax opinion letters for Section 1202 QSBS claims, including reasonable cause defense under IRC 6662.",
        type: 'article',
    },
};

export default function OpinionLetterPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Progress Bar / Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center text-sm text-slate-500">
                        <Link href="/playbook" className="hover:text-emerald-600 transition-colors">The Playbook</Link>
                        <svg className="w-4 h-4 mx-2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-slate-900 font-medium">QSBS Opinion Letters</span>
                    </div>
                </div>
            </div>

            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Header */}
                <header className="mb-10 text-center">
                    <span className="inline-block px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
                        Documentation
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                        QSBS Opinion Letters
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        A tax opinion letter formally documents the analysis supporting your Section 1202 exclusion
                        and may provide penalty protection under IRC 6662 if the position is later challenged.
                    </p>
                </header>

                {/* Content Body */}
                <div className="prose prose-slate prose-lg mx-auto">

                    <p>
                        When claiming a Section 1202 exclusion, the burden of proof rests with the taxpayer.
                        You must be able to demonstrate that your stock met all the qualification requirements at the time of issuance and throughout the holding period.
                    </p>
                    <p>
                        A tax opinion letter is one way to document this analysis formally. It provides a written record of the legal reasoning supporting your QSBS claim.
                    </p>

                    <h3>What is a Tax Opinion Letter?</h3>
                    <p>
                        A tax opinion letter is a formal written analysis prepared by a tax attorney or CPA that applies the relevant IRC provisions to your specific facts.
                        For QSBS, this means analyzing whether your stock meets the requirements under IRC 1202(c) (qualified small business stock), 1202(d) (qualified small business), and 1202(e) (active business requirements).
                    </p>
                    <p>
                        The opinion will typically conclude with a confidence level such as &quot;more likely than not&quot; (greater than 50% likelihood) or &quot;should&quot; (higher confidence) that your position would be sustained if challenged.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 not-prose rounded-r-lg">
                        <h4 className="text-lg font-bold text-amber-900 mb-2">Potential Penalty Protection</h4>
                        <p className="text-amber-800 text-sm leading-relaxed">
                            Under IRC 6662, accuracy-related penalties of 20% may apply to underpayments attributable to negligence or substantial understatement of income tax.
                        </p>
                        <p className="text-amber-800 text-sm leading-relaxed mt-2">
                            However, these penalties may be avoided if the taxpayer had &quot;reasonable cause&quot; and acted in &quot;good faith.&quot;
                            Reliance on a qualified professional&apos;s opinion can help establish reasonable cause, though this is fact-specific.
                        </p>
                    </div>

                    <h3>Factors to Consider</h3>
                    <p>
                        Whether to obtain an opinion letter depends on your specific circumstances. Consider discussing with a tax professional if any of the following apply:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 not-prose my-8">
                        <div className="bg-white border rounded-lg p-5 shadow-sm">
                            <div className="font-bold text-slate-900 mb-2 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Simpler Situations
                            </div>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• Straightforward C-Corp from incorporation</li>
                                <li>• Clear active business operations</li>
                                <li>• Standard stock issuance at founding</li>
                                <li>• No entity conversions or restructuring</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 border border-slate-700 rounded-lg p-5 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/20 blur-xl rounded-full"></div>
                            <div className="font-bold text-white mb-2 flex items-center relative z-10">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2"></div>
                                More Complex Situations
                            </div>
                            <ul className="text-sm text-slate-300 space-y-2 relative z-10">
                                <li>• Converted from LLC or other entity</li>
                                <li>• Stock redemptions occurred</li>
                                <li>• Service-based business model</li>
                                <li>• Significant investment assets held</li>
                            </ul>
                        </div>
                    </div>

                    <h3>The Active Business Requirement</h3>
                    <p>
                        IRC 1202(e)(3) lists specific business types that do not qualify, including any trade or business involving services performed in the fields of health, law, engineering, architecture, accounting, actuarial science, performing arts, consulting, athletics, financial services, or brokerage services.
                    </p>
                    <p>
                        Additionally, businesses where the &quot;principal asset&quot; is the reputation or skill of one or more employees are excluded.
                        For technology companies, the analysis often focuses on whether the company&apos;s value derives from its technology and intellectual property rather than individual expertise.
                    </p>
                    <p>
                        This is an area where professional guidance can be particularly valuable, as the distinction can be fact-intensive.
                    </p>

                </div>

                {/* CTA Section */}
                <div className="mt-16 bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Need Professional Guidance?
                    </h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        A tax attorney or CPA specializing in Section 1202 can evaluate your specific situation and advise on documentation needs.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/find-advisor"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
                        >
                            Find a QSBS Specialist
                        </Link>
                        <Link
                            href="/playbook"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                        >
                            Back to Playbook
                        </Link>
                    </div>
                </div>

            </article>
        </main>
    );
}
