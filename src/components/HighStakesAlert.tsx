import Link from 'next/link';
import { ConversionEvents } from '@/lib/analytics';

interface HighStakesAlertProps {
  savings: number;
}

export default function HighStakesAlert({ savings }: HighStakesAlertProps) {
  if (savings < 500000) return null;

  return (
    <div className="mt-6 bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 shadow-xl border border-slate-700 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-red-500/20 blur-2xl rounded-full" />
      <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-20 h-20 bg-emerald-500/20 blur-2xl rounded-full" />

      <div className="relative z-10">
        <div className="flex items-start gap-4">
          <div className="bg-red-500/20 p-2 rounded-lg shrink-0">
            <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white mb-2">
              ⚠️ High Stakes Alert: $500k+ in Savings
            </h3>
            <p className="text-slate-300 text-sm mb-4 leading-relaxed">
              You are projecting significant tax savings. The IRS scrutinizes large QSBS exclusion claims heavily.
            </p>
            <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-600 mb-5">
              <p className="text-xs text-slate-400">
                <strong>Risk:</strong> Without a documented "QSBS Opinion Letter" or proper audit trail, your claim could be denied years from now—triggering back taxes + penalties.
              </p>
            </div>
            
            <Link 
              href="/find-advisor"
              className="inline-flex w-full sm:w-auto items-center justify-center px-4 py-2.5 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition-colors gap-2"
              onClick={() => ConversionEvents.clickFindAdvisor('calculator_alert')}
            >
              <span>Find a QSBS Advisor</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <p className="text-[10px] text-slate-500 mt-2 text-center sm:text-left">
              Secure your exclusion before you sell.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
