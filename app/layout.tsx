import type { Metadata } from 'next';
import { Fraunces, Inter, Caveat } from 'next/font/google';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
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
    default: 'NJ’s Accounting and Tax Services — Focus on growth. We handle the finances.',
    template: '%s — NJ’s Accounting and Tax Services',
  },
  description:
    'Bookkeeping and tax services for small businesses. Flat monthly pricing. A real person you can email. Books current within 30 days — or your next month is free.',
  metadataBase: new URL('https://booksbynj.com'),
  openGraph: {
    title: 'NJ’s Accounting and Tax Services',
    description: 'Focus on growth. We handle the finances.',
    url: 'https://booksbynj.com',
    siteName: 'NJ’s Accounting and Tax Services',
    locale: 'en_US',
    type: 'website',
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
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
