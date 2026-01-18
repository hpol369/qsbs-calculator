import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "QSBS for Founders vs. Employees: The Critical Differences",
    description: "Founders lose QSBS on secondary sales. Employees lose it on late exercises. Understand the specific traps for your role.",
    openGraph: {
        title: "QSBS for Founders vs. Employees: The Critical Differences",
        description: "The rules are the same, but the traps are different. A comparison guide for startup stakeholders.",
        type: 'article',
    },
};

export default function FoundersVsEmployeesPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-slate-50 border-b border-slate-200">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
                    <div className="flex items-center text-sm text-slate-500">
                        <Link href="/playbook" className="hover:text-emerald-600 transition-colors">The Playbook</Link>
                        <svg className="w-4 h-4 mx-2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-slate-900 font-medium">Founders vs. Employees</span>
                    </div>
                </div>
            </div>

            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

                <header className="text-center mb-12">
                    <span className="inline-block px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-bold rounded-full mb-4 tracking-wide uppercase">
                        Persona Guide
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">
                        Founders vs. Employees
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        The tax code doesn't explicitly distinguish between you. <br className="hidden sm:block" />
                        But in practice, you face completely different risks.
                    </p>
                </header>

                {/* Comparison Table */}
                <div className="overflow-hidden bg-white shadow-lg rounded-2xl border border-gray-200 mb-16">
                    <div className="grid grid-cols-3 bg-slate-900 text-white text-sm sm:text-base">
                        <div className="p-4 sm:p-6 font-bold border-r border-slate-700">The Metric</div>
                        <div className="p-4 sm:p-6 font-bold text-center border-r border-slate-700 bg-emerald-900/20">Founders</div>
                        <div className="p-4 sm:p-6 font-bold text-center bg-blue-900/20">Employees</div>
                    </div>

                    <div className="divide-y divide-gray-200 text-sm sm:text-base">
                        <div className="grid grid-cols-3">
                            <div className="p-4 sm:p-6 font-medium text-gray-900 bg-gray-50">Clock Start Date</div>
                            <div className="p-4 sm:p-6 text-center">Incorporation Date</div>
                            <div className="p-4 sm:p-6 text-center font-bold text-red-600">Exercise Date (Not Grant)</div>
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="p-4 sm:p-6 font-medium text-gray-900 bg-gray-50">Biggest Risk</div>
                            <div className="p-4 sm:p-6 text-center">Secondary Sales (Redemptions)</div>
                            <div className="p-4 sm:p-6 text-center">The "Golden Handcuffs"</div>
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="p-4 sm:p-6 font-medium text-gray-900 bg-gray-50">Transferability</div>
                            <div className="p-4 sm:p-6 text-center">Can gift to trusts/family</div>
                            <div className="p-4 sm:p-6 text-center">Limited by vesting/company</div>
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="p-4 sm:p-6 font-medium text-gray-900 bg-gray-50">Audit Profile</div>
                            <div className="p-4 sm:p-6 text-center font-bold text-amber-600">High ($10M+ exclusions)</div>
                            <div className="p-4 sm:p-6 text-center text-gray-500">Lower (unless early employee)</div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-12">

                    {/* Founders Section */}
                    <div className="prose prose-slate">
                        <h3 className="flex items-center text-emerald-800">
                            <span className="bg-emerald-100 p-2 rounded-lg mr-3">🚀</span>
                            The Founder Trap
                        </h3>
                        <p className="lead text-sm">
                            As a founder, you got your stock "cheap" at incorporation. Your basis is near zero, meaning 100% of your exit is gain.
                        </p>
                        <p className="font-bold text-sm">Your Enemy: Stock Redemptions</p>
                        <p className="text-sm">
                            Did you cash out some chips in a Series B or C secondary? <strong>Warning.</strong>
                            If the company bought back stock from <em>anyone</em> (not just you) within a 2-year window of your issuance, it could incinerate your QSBS status.
                        </p>
                        <p className="text-sm">
                            Also, did you convert from an LLC? The time you spent as an LLC member <strong>does not count</strong> towards the 5-year clock.
                        </p>
                    </div>

                    {/* Employees Section */}
                    <div className="prose prose-slate">
                        <h3 className="flex items-center text-blue-800">
                            <span className="bg-blue-100 p-2 rounded-lg mr-3">💼</span>
                            The Employee Trap
                        </h3>
                        <p className="lead text-sm">
                            You likely hold Options (ISOs or NSOs) or RSUs.
                        </p>
                        <p className="font-bold text-sm">Your Enemy: The Exercise Date</p>
                        <p className="text-sm">
                            The single most tragic mistake: <br />
                            <em>"I've worked here for 6 years, so I'm vested and qualified."</em>
                        </p>
                        <p className="text-sm">
                            <strong>False.</strong> You don't own stock until you exercise. If you wait until the acquisition to exercise ("cashless exercise"), your holding period is <strong>0 days</strong>. You pay full tax.
                        </p>
                        <p className="text-sm text-blue-600 font-medium">
                            <Link href="/iso-exercise">Read the ISO guide for more details →</Link>
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-16 p-8 bg-gray-900 rounded-2xl text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">It's Complicated for Everyone</h3>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                        Whether you are a founder worrying about redemptions or an early employee planning an exercise,
                        don't navigate this alone.
                    </p>
                    <Link
                        href="/find-advisor"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all"
                    >
                        Talk to an Expert
                    </Link>
                </div>

            </article>
        </main>
    );
}
