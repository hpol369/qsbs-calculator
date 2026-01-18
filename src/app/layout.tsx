import type { Metadata } from "next";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const baseUrl = 'https://www.qsbsguide.com';

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "QSBS Calculator – Estimate Your Section 1202 Tax Savings",
  description: "Free QSBS eligibility calculator. Find your holding period start date, estimate tax savings up to $10M+, and check your state's conformity. Takes 60 seconds.",
  keywords: ["QSBS", "Section 1202", "qualified small business stock", "tax savings calculator", "QSBS eligibility", "capital gains exclusion"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "QSBS Calculator – Estimate Your Section 1202 Tax Savings",
    description: "Estimate your QSBS tax savings in 60 seconds. Calculate holding period, federal savings up to $10M+, and state conformity.",
    type: "website",
    url: baseUrl,
    siteName: "QSBS Guide",
  },
  twitter: {
    card: "summary_large_image",
    title: "QSBS Calculator – Section 1202 Tax Savings",
    description: "Estimate your QSBS tax savings in 60 seconds.",
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(calculatorSchema),
          }}
        />
      </head>
      <body className="antialiased">
        <GoogleAnalytics />
        <nav className="bg-white border-b border-gray-200 print:hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <a href="/" className="flex-shrink-0 flex items-center font-bold text-xl text-emerald-900">
                  QSBS Guide
                </a>
              </div>
              <div className="flex items-center">
                <a
                  href="/find-advisor"
                  className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
                >
                  Find an Advisor
                </a>
              </div>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
