'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function StickyCta() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling past the hero (approx 600px)
            if (window.scrollY > 600) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up print:hidden">
            <div className="max-w-4xl mx-auto bg-slate-900/90 backdrop-blur-md text-white rounded-2xl shadow-2xl border border-slate-700 p-4 flex flex-col sm:flex-row items-center justify-between gap-4">

                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                        <span className="text-xl">💰</span>
                    </div>
                    <div>
                        <p className="font-bold text-sm sm:text-base text-emerald-300">High Stakes?</p>
                        <p className="text-xs sm:text-sm text-slate-300">Don&apos;t risk a $500k+ tax bill on a DIY calculator.</p>
                    </div>
                </div>

                <Link
                    href="/find-advisor"
                    className="w-full sm:w-auto px-6 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-900 font-bold rounded-full text-sm transition-all transform hover:scale-105 whitespace-nowrap text-center"
                >
                    Get Expert Opinion
                </Link>
            </div>
        </div>
    );
}
