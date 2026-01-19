import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "QSBS Founder Stock | Qualification Requirements for Founders",
    description: "Learn the IRC 1202 requirements for founder stock to qualify as QSBS: original issuance, C-Corp status, and the $50 million gross assets test.",
};

export default function FounderStockPage() {
    return (
        <main className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className="bg-slate-900 text-white pt-24 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-emerald-400 font-bold tracking-wide uppercase text-sm mb-3">FOUNDER GUIDE</p>
                    <h1 className="text-3xl sm:text-5xl font-display font-medium tracking-tight mb-6">
                        Does My <span className="text-emerald-400">Founder Stock</span> Qualify?
                    </h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                        Founder stock can qualify for the Section 1202 exclusion, but it must meet specific requirements
                        under IRC 1202(c) and 1202(d). Here are the key qualification tests.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">

                {/* Rule 1: Original Issuance */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded">IRC 1202(c)</div>
                        <h2 className="text-2xl font-bold text-slate-900">Original Issuance Requirement</h2>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        Under IRC 1202(c)(1), stock must be acquired by the taxpayer at its original issuance in exchange for money, property (other than stock), or as compensation for services provided to the corporation.
                    </p>
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                        <p className="text-amber-900 font-medium">Secondary Purchases</p>
                        <p className="text-amber-800 text-sm mt-1">
                            Stock purchased from another shareholder (secondary transaction) does not meet the original issuance requirement.
                            The stock must be issued directly by the corporation to the taxpayer.
                        </p>
                    </div>
                </div>

                {/* Rule 2: C-Corp */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded">IRC 1202(c)(1)</div>
                        <h2 className="text-2xl font-bold text-slate-900">Domestic C-Corporation Requirement</h2>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        The issuing entity must be a domestic C-Corporation at the time of issuance. The corporation must also meet the qualified small business requirements under IRC 1202(d) during substantially all of the taxpayer&apos;s holding period.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <p className="font-bold text-slate-900 mb-2">LLC Conversions</p>
                            <p className="text-slate-600 text-sm">
                                If the company converted from an LLC to a C-Corp, stock issued after conversion may qualify. The holding period begins when the C-Corp stock is issued.
                            </p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-lg">
                            <p className="font-bold text-slate-900 mb-2">S-Corporation Stock</p>
                            <p className="text-slate-600 text-sm">
                                Stock issued while the corporation has an S-election in effect does not qualify as QSBS under IRC 1202(c)(1)(A).
                            </p>
                        </div>
                    </div>
                </div>

                {/* Rule 3: Gross Assets */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-emerald-100 text-emerald-800 font-bold px-3 py-1 rounded">IRC 1202(d)(1)</div>
                        <h2 className="text-2xl font-bold text-slate-900">$50 Million Gross Assets Test</h2>
                    </div>
                    <p className="text-slate-600 text-lg leading-relaxed mb-4">
                        Under IRC 1202(d)(1), the corporation&apos;s aggregate gross assets must not exceed $50 million at any time before and immediately after the stock issuance. Gross assets are measured by the adjusted basis of the corporation&apos;s property.
                    </p>
                    <p className="text-slate-600 text-sm">
                        The $50 million test is applied at the time of each stock issuance. Stock issued when the corporation met this requirement can still qualify even if the corporation later exceeds $50 million in assets.
                        However, any new stock issued after exceeding the threshold would not qualify.
                    </p>
                </div>

                {/* CTA */}
                <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Calculate Your Potential Savings
                    </h2>
                    <p className="text-slate-300 text-lg mb-8">
                        Use our calculator to estimate your federal tax savings under Section 1202.
                    </p>
                    <Link
                        href="/"
                        className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-all"
                    >
                        Open Calculator
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
