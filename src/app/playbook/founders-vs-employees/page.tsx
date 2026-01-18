import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "QSBS for Founders vs. Employees: How Stock Acquisition Differs",
    description: "Founders typically receive stock at incorporation while employees acquire through options. Learn how these different paths affect QSBS qualification.",
    openGraph: {
        title: "QSBS for Founders vs. Employees: How Stock Acquisition Differs",
        description: "Understanding how founders and employees acquire QSBS differently and the implications for the 5-year holding period.",
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
                        Stock Acquisition
                    </span>
                    <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mb-6">
                        Founders vs. Employees
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                        How you acquire your stock determines when your QSBS holding period begins.
                        Founders and employees typically follow different paths to stock ownership.
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
                            <div className="p-4 sm:p-6 font-medium text-gray-900 bg-gray-50">Typical Acquisition</div>
                            <div className="p-4 sm:p-6 text-center">Stock at incorporation</div>
                            <div className="p-4 sm:p-6 text-center">Stock options (ISO/NSO)</div>
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="p-4 sm:p-6 font-medium text-gray-900 bg-gray-50">Holding Period Start</div>
                            <div className="p-4 sm:p-6 text-center">Date stock is issued</div>
                            <div className="p-4 sm:p-6 text-center font-medium text-slate-900">Date of exercise</div>
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="p-4 sm:p-6 font-medium text-gray-900 bg-gray-50">83(b) Election</div>
                            <div className="p-4 sm:p-6 text-center">Often applicable for restricted stock</div>
                            <div className="p-4 sm:p-6 text-center">May apply for early exercise</div>
                        </div>

                        <div className="grid grid-cols-3">
                            <div className="p-4 sm:p-6 font-medium text-gray-900 bg-gray-50">Original Issuance</div>
                            <div className="p-4 sm:p-6 text-center">Direct from corporation</div>
                            <div className="p-4 sm:p-6 text-center">Direct from corporation at exercise</div>
                        </div>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mt-12">

                    {/* Founders Section */}
                    <div className="prose prose-slate">
                        <h3 className="flex items-center text-emerald-800">
                            <span className="bg-emerald-100 p-2 rounded-lg mr-3">🚀</span>
                            Founder Stock
                        </h3>
                        <p className="text-sm">
                            Founders typically receive stock directly from the corporation at or near incorporation, often at a nominal price.
                            The holding period begins when the stock is issued.
                        </p>
                        <p className="font-bold text-sm">Key Considerations</p>
                        <p className="text-sm">
                            If stock is subject to vesting, filing an 83(b) election within 30 days starts the QSBS clock immediately.
                            Without the election, the holding period begins as shares vest.
                        </p>
                        <p className="text-sm">
                            Companies that converted from an LLC or other entity should review when the C-Corp status began,
                            as the QSBS holding period cannot start before the corporation existed.
                        </p>
                    </div>

                    {/* Employees Section */}
                    <div className="prose prose-slate">
                        <h3 className="flex items-center text-blue-800">
                            <span className="bg-blue-100 p-2 rounded-lg mr-3">💼</span>
                            Employee Stock Options
                        </h3>
                        <p className="text-sm">
                            Employees typically receive stock options (ISOs or NSOs) that grant the right to purchase stock at a set price.
                            Options are not stock ownership until exercised.
                        </p>
                        <p className="font-bold text-sm">Key Considerations</p>
                        <p className="text-sm">
                            The QSBS holding period begins at exercise, not at grant. Stock must be held for more than 5 years from the exercise date.
                        </p>
                        <p className="text-sm">
                            Some companies allow early exercise of unvested options. Combined with an 83(b) election,
                            this can start the holding period before vesting completes.
                        </p>
                        <p className="text-sm text-blue-600 font-medium">
                            <Link href="/iso-exercise">Learn more about ISO exercises →</Link>
                        </p>
                    </div>

                </div>

                {/* CTA */}
                <div className="mt-16 p-8 bg-gray-900 rounded-2xl text-center text-white">
                    <h3 className="text-2xl font-bold mb-4">Questions About Your Situation?</h3>
                    <p className="text-gray-300 mb-8 max-w-lg mx-auto">
                        QSBS qualification depends on your specific facts and circumstances.
                        Consider consulting a tax professional to review your stock acquisition details.
                    </p>
                    <Link
                        href="/find-advisor"
                        className="inline-flex items-center justify-center px-8 py-3 text-base font-bold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all"
                    >
                        Find a QSBS Specialist
                    </Link>
                </div>

            </article>
        </main>
    );
}
