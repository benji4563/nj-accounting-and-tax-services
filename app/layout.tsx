import type { Metadata } from 'next';
import { Fraunces, Inter, Caveat } from 'next/font/google';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { StructuredData } from '@/components/seo/StructuredData';
import { organizationJsonLd } from '@/lib/structured-data';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-caveat',
  display: 'swap',
  weight: ['500'],
});

export const metadata: Metadata = {
  title: {
    default: 'Small-Business Bookkeeping & Tax Services | NJ’s Accounting',
    template: '%s | NJ’s Accounting and Tax Services',
  },
  description:
    'Small-business bookkeeping and tax services. Flat monthly pricing from $299. A real accountant on email. Books current in 30 days — or your next month is free.',
  metadataBase: new URL('https://booksbynj.com'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Small-Business Bookkeeping & Tax | NJ’s Accounting',
    description:
      'Flat monthly pricing. A real accountant on email. Books current in 30 days — or your next month is free.',
    url: 'https://booksbynj.com',
    siteName: 'NJ’s Accounting and Tax Services',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Small-Business Bookkeeping & Tax | NJ’s Accounting',
    description:
      'Flat monthly pricing. A real accountant on email. 30-day guarantee.',
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { 'msvalidate.01': process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${caveat.variable}`}
    >
      <body>
        <StructuredData data={organizationJsonLd} />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
