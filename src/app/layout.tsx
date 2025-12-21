import type { Metadata } from "next";
import "./globals.css";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
