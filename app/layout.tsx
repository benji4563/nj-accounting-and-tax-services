import type { Metadata } from 'next';
import { Fraunces, Inter, Caveat } from 'next/font/google';
import { Nav } from '@/components/layout/Nav';
import { Footer } from '@/components/layout/Footer';
import { AskAboutMe } from '@/components/layout/AskAboutMe';
import { StructuredData } from '@/components/seo/StructuredData';
import { organizationJsonLd, websiteJsonLd } from '@/lib/structured-data';
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
  icons: {
    icon: "/favicon.svg",
    apple: "/logo-monogram.svg",
  },
  // Brand-first title. The audit found we do not rank in the top 25 for our
  // own brand term — Google resolves "NJ" to New Jersey — so the brand leads
  // the title tag instead of trailing it. Template kept short (20 chars) so
  // child pages stay under Google's ~60-char truncation point.
  title: {
    default: "NJ's Accounting & Tax Services | Small-Business Bookkeeping",
    template: "%s | NJ's Accounting",
  },
  description:
    "Small-business bookkeeping and tax services from Njock Simon. Flat monthly pricing from $299. A real accountant on email. Books current in 30 days — or your next month is free.",
  metadataBase: new URL("https://njaccountstax.com"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: "NJ's Accounting — small-business tax & bookkeeping blog" },
      ],
    },
  },
  openGraph: {
    title: "NJ's Accounting & Tax Services | Small-Business Bookkeeping",
    description:
      "Flat monthly pricing. A real accountant on email. Books current in 30 days — or your next month is free.",
    url: "https://njaccountstax.com",
    siteName: "NJ's Accounting and Tax Services",
    images: [
      {
        url: "/og-default.png",
        width: 1200,
        height: 630,
        alt: "NJ's Accounting and Tax Services — small-business bookkeeping and tax, flat monthly pricing from $299.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NJ's Accounting & Tax Services | Small-Business Bookkeeping",
    description:
      "Flat monthly pricing. A real accountant on email. 30-day guarantee.",
    images: ["/og-default.png"],
  },
  robots: { index: true, follow: true },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
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
      <head>
        <link
          rel="preload"
          as="image"
          href="/_next/image?url=%2Fnjock-portrait.webp&w=384&q=75"
          fetchPriority="high"
          imageSizes="380px"
        />
      </head>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-aubergine focus:px-4 focus:py-2 focus:text-ivory focus:shadow-lg"
        >
          Skip to content
        </a>
        <StructuredData data={[organizationJsonLd, websiteJsonLd]} />
        <Nav />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
        <AskAboutMe />
        <Footer />
      </body>
    </html>
  );
}
