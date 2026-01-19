import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "How to Qualify for QSBS | Section 1202 Requirements",
    description: "Learn the five requirements for QSBS qualification under IRC 1202: C-Corp status, gross assets test, active business requirement, original issuance, and holding period.",
};

export default function QualifyPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-emerald-400 font-bold tracking-wide uppercase text-sm mb-3">ELIGIBILITY CHECK</p>
                    <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-tight mb-6">
                        How to <span className="text-emerald-400">Qualify</span> for QSBS
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        To claim the Section 1202 exclusion, both the corporation and the stockholder must meet specific requirements under the Internal Revenue Code.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">

                {/* Intro */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <p className="text-lg text-slate-700">
                        IRC 1202 has requirements at both the <strong>corporate level</strong> (the issuing corporation must be a &quot;qualified small business&quot;) and the <strong>shareholder level</strong> (how and when the stock was acquired).
                    </p>
                </div>

                {/* The 5 Tests */}
                <div className="space-y-6">
                    {/* Test 1 */}
                    <div className="bg-white rounded-xl border-l-8 border-emerald-500 shadow-sm p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">1. Domestic C-Corporation [IRC 1202(c)(1)]</h3>
                        <p className="text-slate-600">
                            The stock must be issued by a domestic C-Corporation. Stock issued by S-Corporations, LLCs taxed as partnerships, or foreign corporations does not qualify.
                        </p>
                    </div>

                    {/* Test 2 */}
                    <div className="bg-white rounded-xl border-l-8 border-emerald-500 shadow-sm p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">2. Gross Assets Test [IRC 1202(d)(1)]</h3>
                        <p className="text-slate-600">
                            The corporation&apos;s aggregate gross assets must not exceed $50 million at any time before and immediately after the stock issuance. Gross assets are measured by adjusted basis.
                        </p>
                    </div>

                    {/* Test 3 */}
                    <div className="bg-white rounded-xl border-l-8 border-emerald-500 shadow-sm p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">3. Active Business Requirement [IRC 1202(e)]</h3>
                        <p className="text-slate-600">
                            At least 80% of the corporation&apos;s assets must be used in the active conduct of one or more qualified trades or businesses.
                            <span className="block mt-2 text-slate-500 text-sm">Certain businesses are excluded under IRC 1202(e)(3), including services in health, law, engineering, architecture, accounting, actuarial science, performing arts, consulting, athletics, financial services, and brokerage.</span>
                        </p>
                    </div>

                    {/* Test 4 */}
                    <div className="bg-white rounded-xl border-l-8 border-emerald-500 shadow-sm p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">4. Original Issuance [IRC 1202(c)(1)(B)]</h3>
                        <p className="text-slate-600">
                            The taxpayer must acquire the stock at original issuance in exchange for money, property (other than stock), or as compensation for services. Stock purchased from another shareholder does not qualify.
                        </p>
                    </div>

                    {/* Test 5 */}
                    <div className="bg-white rounded-xl border-l-8 border-emerald-500 shadow-sm p-6">
                        <h3 className="text-xl font-bold text-slate-900 mb-2">5. Holding Period [IRC 1202(a)]</h3>
                        <p className="text-slate-600">
                            The stock must be held for more than 5 years. For stock options, the holding period begins at exercise. See our <Link href="/iso-exercise" className="text-emerald-600 underline">ISO exercise guide</Link> for details.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 bg-slate-100 rounded-2xl p-8 border border-slate-200">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Pass all 5 tests?</h3>
                            <p className="text-slate-600">Run the numbers to see how much tax you save.</p>
                        </div>
                        <Link
                            href="/"
                            className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-slate-900 rounded-lg hover:bg-slate-800 transition-all"
                        >
                            Calculate Savings
                        </Link>
                    </div>
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
