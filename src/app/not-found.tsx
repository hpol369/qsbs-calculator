import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold text-gray-300 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Page not found
        </h2>
        <p className="text-gray-600 mb-6">
          Looking for your QSBS results? The link may have expired or been mistyped.
        </p>
        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full bg-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-emerald-700 transition-colors"
          >
            Calculate Your QSBS Savings
          </Link>
          <div className="text-sm text-gray-500">
            Or check out these common questions:
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <Link href="/holding-period" className="text-emerald-600 hover:text-emerald-700">
              When does my holding period start?
            </Link>
            <Link href="/california" className="text-emerald-600 hover:text-emerald-700">
              Does California recognize QSBS?
            </Link>
            <Link href="/iso-exercise" className="text-emerald-600 hover:text-emerald-700">
              Grant date vs exercise date?
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
