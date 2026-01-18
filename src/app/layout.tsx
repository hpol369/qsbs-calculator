import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import Script from 'next/script';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

const baseUrl = 'https://www.qsbsguide.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "QSBS Guide | The Founder's Guide to Tax-Free Exits",
  description: "Stop leaving millions on the table. The complete guide to Section 1202 Qualified Small Business Stock (QSBS) tax exemptions.",
  keywords: ["QSBS", "Section 1202", "qualified small business stock", "tax savings calculator", "QSBS eligibility", "capital gains exclusion"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "QSBS Guide | The Founder's Guide to Tax-Free Exits",
    description: "Estimate your QSBS tax savings and audit-proof your exclusion.",
    type: "website",
    url: baseUrl,
    siteName: "QSBS Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "QSBS Guide | The Founder's Guide to Tax-Free Exits",
    description: "Estimate your QSBS tax savings and audit-proof your exclusion.",
  },
};

// Organization schema for the site
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "QSBS Guide",
  "url": baseUrl,
  "logo": `${baseUrl}/og-default.png`,
  "description": "Free tools and guides for understanding Section 1202 Qualified Small Business Stock (QSBS) tax benefits.",
  "sameAs": [],
};

// WebSite schema with search
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "QSBS Guide",
  "url": baseUrl,
  "description": "QSBS Calculator and educational resources for Section 1202 tax savings.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${baseUrl}/?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

// SoftwareApplication schema for the calculator
const calculatorSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "QSBS Tax Savings Calculator",
  "applicationCategory": "FinanceApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD",
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "127",
  },
  "description": "Free calculator to estimate your Section 1202 QSBS tax savings. Calculate holding period, federal exclusion up to $10M+, and state tax conformity.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorSchema) }}
        />
      </head>
      <body className="font-sans bg-slate-50 text-slate-900 antialiased selection:bg-emerald-200 selection:text-emerald-900">

        {/* Global Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-gray-100 dark:bg-slate-900/80 dark:border-slate-800 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link href="/" className="flex items-center group">
                  <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center mr-3 group-hover:bg-emerald-500 transition-colors shadow-sm">
                    <span className="text-white font-serif font-bold text-xl">Q</span>
                  </div>
                  <span className="font-serif font-bold text-xl text-slate-900 dark:text-white tracking-tight">QSBS Guide</span>
                </Link>

                <div className="hidden md:flex ml-10 space-x-8">
                  <Link href="/playbook" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">The Playbook</Link>
                  <Link href="/holding-period" className="text-sm font-medium text-slate-600 hover:text-emerald-600 transition-colors">Visualizer</Link>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Link
                  href="/find-advisor"
                  className="hidden sm:inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-slate-900 hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg"
                >
                  Find an Advisor
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {children}
      </body>
    </html>
  );
}
