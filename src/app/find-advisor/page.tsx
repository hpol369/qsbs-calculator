'use client';

import { useActionState, useEffect } from 'react';
import { submitLead } from './actions';
import { ConversionEvents } from '@/lib/analytics';
import Link from 'next/link';

export default function FindAdvisorPage() {
    const [state, formAction, isPending] = useActionState(submitLead, null);

    useEffect(() => {
        if (state?.success) {
            ConversionEvents.submitLeadForm('lead_' + Date.now());
        }
    }, [state?.success]);

    if (state?.success) {
        return (
            <main className="min-h-screen bg-white">
                <header className="bg-white border-b border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                        <Link href="/" className="font-bold text-xl text-emerald-900">
                            QSBS Guide
                        </Link>
                        <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
                            Back to Calculator
                        </Link>
                    </div>
                </header>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    <div className="max-w-2xl mx-auto text-center">
                        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-extrabold text-slate-900 mb-6">Request Received</h1>
                        <p className="text-xl text-slate-600 mb-8">
                            We have received your details. A QSBS specialist will review your case and contact you at the email provided typically within 24 hours.
                        </p>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 text-left">
                            <p className="font-semibold text-slate-900 mb-2">What happens next?</p>
                            <ul className="space-y-3 text-slate-600">
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg">1.</span>
                                    <span>We verify your basic eligibility (timeline & role).</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg">2.</span>
                                    <span>We match you with a CPA or Tax Attorney who specializes in your specific situation.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 text-lg">3.</span>
                                    <span>You receive an introduction email to schedule a free initial consultation.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="mt-10">
                            <a href="/" className="text-emerald-600 font-medium hover:text-emerald-500">
                                Return to Calculator
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <header className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                    <Link href="/" className="font-bold text-xl text-emerald-900">
                        QSBS Guide
                    </Link>
                    <Link href="/" className="text-sm text-gray-500 hover:text-gray-900">
                        Back to Calculator
                    </Link>
                </div>
            </header>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

                    {/* Left Col: Sales Copy */}
                    <div className="space-y-8">
                        <div>
                            <span className="inline-block px-4 py-1.5 bg-emerald-100 text-emerald-800 font-bold rounded-full text-sm mb-6 tracking-wide uppercase">
                                Audit Defense & Opinions
                            </span>
                            <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">
                                Secure Your QSBS Exclusion with an Expert Opinion.
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Section 1202 is the single most valuable tax break in the US Code.
                                Don&apos;t risk your $10M+ tax-free exit on a DIY calculation.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 shrink-0 h-fit">
                                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Formal Opinion Letters</h3>
                                    <p className="mt-1 text-slate-600">Get a Section 1202 opinion letter from a qualified tax attorney to protect against audit penalties.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 shrink-0 h-fit">
                                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">Holding Period Analysis</h3>
                                    <p className="mt-1 text-slate-600">Complex timeline verification for ISO/NSO exercises, conversions, and secondary sales.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-100 shrink-0 h-fit">
                                    <svg className="w-6 h-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-slate-900">State Tax Optimization</h3>
                                    <p className="mt-1 text-slate-600">Strategies for non-conforming states like California, PA, and NJ.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-200">
                            <p className="text-sm text-gray-500 italic">
                                &quot;Finding a CPA who actually understands QSBS is a nightmare. This service connected me with an expert in 24 hours.&quot; — SaaS Founder, $12M Exit
                            </p>
                        </div>
                    </div>

                    {/* Right Col: Form */}
                    <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8 sm:p-10">
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Find a QSBS Advisor</h3>
                        <p className="text-gray-600 mt-2 mb-6">Tell us about your situation. We&apos;ll match you with the right firm.</p>
                        <form action={formAction} className="space-y-5">

                            {state?.error && (
                                <div className="p-3 bg-red-50 text-red-600 text-sm rounded-lg border border-red-100">
                                    {state.error}
                                </div>
                            )}

                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-1">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    placeholder="e.g., Sarah Chen"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-1">Work Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="sarah@company.com"
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="role" className="block text-sm font-semibold text-slate-700 mb-1">Role / Situation</label>
                                <select
                                    id="role"
                                    name="role"
                                    required
                                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                >
                                    <option value="">Select your role...</option>
                                    <option value="Founder/Co-Founder">Founder / Co-Founder</option>
                                    <option value="Early Employee (ISO/NSO)">Early Employee (ISO/NSO)</option>
                                    <option value="Angel Investor">Angel Investor</option>
                                    <option value="CPA/Advisor">CPA / Wealth Advisor</option>
                                </select>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="savings" className="block text-sm font-semibold text-slate-700 mb-1">Est. Tax Savings</label>
                                    <select
                                        id="savings"
                                        name="savings"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    >
                                        <option value="Less than $500k">Less than $500k</option>
                                        <option value="$500k - $2M">$500k - $2M</option>
                                        <option value="$2M - $10M">$2M - $10M</option>
                                        <option value="$10M+">$10M+</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700 mb-1">Exit Timeline</label>
                                    <select
                                        id="timeline"
                                        name="timeline"
                                        className="w-full px-4 py-3 bg-slate-50 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                                    >
                                        <option value="Just Exploring">Just Exploring</option>
                                        <option value="< 6 Months">&lt; 6 Months</option>
                                        <option value="6-12 Months">6-12 Months</option>
                                        <option value="Already Exited">Already Exited</option>
                                    </select>
                                </div>
                            </div>

                            <button
                                type="submit"
                                disabled={isPending}
                                className="w-full py-4 px-6 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all flex justify-center items-center disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isPending ? (
                                    <>
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </>
                                ) : 'Match With an Advisor'}
                            </button>

                            <p className="text-xs text-center text-slate-400 mt-4">
                                Your information is held in strict confidence. No spam.
                            </p>
                        </form>
                    </div>

                </div>
            </div>
        </main>
    );
}
