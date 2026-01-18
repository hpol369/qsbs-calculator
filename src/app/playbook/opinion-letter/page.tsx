import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Do You Need a QSBS Opinion Letter? (The \"Audit Insurance\" Guide)",
    description: "When to get a QSBS opinion letter, how much it costs, and why it's your best defense against an IRS audit. A guide for founders and investors.",
    openGraph: {
        title: "Do You Need a QSBS Opinion Letter? (The \"Audit Insurance\" Guide)",
        description: "The IRS is scrutinizing Section 1202 claims. An opinion letter is your insurance policy. Here is when you need one.",
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
                        Audit Defense
                    </span>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
                        Do You Need a QSBS Opinion Letter?
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto">
                        The IRS is hiring thousands of agents. Section 1202 exclusions are a prime target.
                        Here is why a formal legal opinion is your only real insurance policy.
                    </p>
                </header>

                {/* Content Body */}
                <div className="prose prose-slate prose-lg mx-auto">

                    <p>
                        You just sold your company. The wire hit your account. You're ready to claim your 100% tax exclusion under Section 1202.
                    </p>
                    <p>
                        But there's a nagging question: <strong>"How do I prove this was QSBS if the IRS asks?"</strong>
                    </p>
                    <p>
                        You might have a certification from the company (good). You might have a 409A valuation (irrelevant).
                        But the gold standard—the only thing that allows you to waive penalties if you're wrong—is a <strong>QSBS Opinion Letter</strong>.
                    </p>

                    <h3>What is a QSBS Opinion Letter?</h3>
                    <p>
                        It is a formal legal memorandum written by a tax attorney or qualified CPA firm. It analyzes your specific facts against the Section 1202 requirements and concludes that your stock "should" or "more likely than not" qualifies as QSBS.
                    </p>
                    <p>
                        It is not just a "note." It is a 20-50 page research paper defending your specific tax position.
                    </p>

                    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 my-8 not-prose rounded-r-lg">
                        <h4 className="text-lg font-bold text-amber-900 mb-2">Why it matters (The "Penalty Shield")</h4>
                        <p className="text-amber-800 text-sm leading-relaxed">
                            If the IRS disallows your QSBS claim, you owe the back taxes <strong>PLUS a 20% negligence penalty</strong>.
                            On a $10M exclusion ($2.38M tax), that penalty is ~$476,000.
                        </p>
                        <p className="text-amber-800 text-sm leading-relaxed mt-2">
                            A formal Opinion Letter generally protects you from this 20% penalty effectively serving as "audit insurance."
                        </p>
                    </div>

                    <h3>When Should You Get One?</h3>
                    <p>
                        Not everyone needs one. If you saved $10,000 in taxes, it's not worth the cost. But the higher the stakes, the more critical it becomes.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 not-prose my-8">
                        <div className="bg-white border rounded-lg p-5 shadow-sm">
                            <div className="font-bold text-slate-900 mb-2 flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Probably Don't Need It
                            </div>
                            <ul className="text-sm text-slate-600 space-y-2">
                                <li>• Tax savings under $250k</li>
                                <li>• Simple "vanilla" C-Corp history</li>
                                <li>• No red flags (never an LLC, always active)</li>
                            </ul>
                        </div>
                        <div className="bg-slate-900 border border-slate-700 rounded-lg p-5 shadow-lg relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-purple-500/20 blur-xl rounded-full"></div>
                            <div className="font-bold text-white mb-2 flex items-center relative z-10">
                                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                                Definitely Need It
                            </div>
                            <ul className="text-sm text-slate-300 space-y-2 relative z-10">
                                <li>• <strong>Tax savings &gt; $500k</strong></li>
                                <li>• Company was an LLC before Inc.</li>
                                <li>• "Redemptions" occurred recently</li>
                                <li>• Large cash/investment holdings</li>
                            </ul>
                        </div>
                    </div>

                    <h3>The "Qualified Trade or Business" Trap</h3>
                    <p>
                        This is where most founders get tripped up. Section 1202(e)(3) excludes any business where the "principal asset" is the reputation or skill of its employees.
                    </p>
                    <p>
                        This rules out consulting firms, law firms, and medical practices. But what about a <strong>fintech startup</strong>? Or a <strong>marketing technology platform</strong>?
                    </p>
                    <p>
                        The line is blurry. An Opinion Letter builds the legal argument that your company creates <em>technology</em>, not just services, ensuring you stay on the right side of the line.
                    </p>

                </div>

                {/* CTA Section - The "Money" Part */}
                <div className="mt-16 bg-slate-50 border-2 border-slate-200 rounded-2xl p-8 text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                        Don't Guess With $10 Million
                    </h3>
                    <p className="text-slate-600 mb-8 max-w-lg mx-auto">
                        If you are projecting significant savings, get matched with a QSBS specialist who can review your facts and issue a formal opinion.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/find-advisor"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-bold rounded-lg text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-md hover:shadow-lg"
                        >
                            Get Matched with an Expert
                        </Link>
                        <Link
                            href="/playbook"
                            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                        >
                            Back to Playbook
                        </Link>
                    </div>
                    <p className="text-xs text-slate-400 mt-4">
                        Most initial consultations are free.
                    </p>
                </div>

            </article>
        </main>
    );
}
