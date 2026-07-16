import type { Metadata } from 'next';
import { CincinnatiHero } from '@/components/locations/CincinnatiHero';
import { CincinnatiLocalTrust } from '@/components/locations/CincinnatiLocalTrust';
import { CincinnatiFaq, CINCINNATI_FAQ } from '@/components/locations/CincinnatiFaq';
import { ProofStrip } from '@/components/home/ProofStrip';
import { EmotionalRecognition } from '@/components/home/EmotionalRecognition';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { MeetNjock } from '@/components/home/MeetNjock';
import { FirstThirtyDays } from '@/components/home/FirstThirtyDays';
import { PricingPreview } from '@/components/home/PricingPreview';
import { CtaDrop } from '@/components/home/CtaDrop';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  localBusinessJsonLd,
  faqPageJsonLd,
  breadcrumbJsonLd,
} from '@/lib/structured-data';

const TITLE = 'Small-Business Accountant in Cincinnati — Bookkeeping & Tax Services';
const DESCRIPTION =
  'Monthly bookkeeping and tax preparation for Cincinnati small businesses. Flat pricing from $299/mo. Books current in 30 days or your next month is free. Serving all of Hamilton County.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/locations/cincinnati' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: 'https://njaccountstax.com/locations/cincinnati',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function CincinnatiLandingPage() {
  return (
    <>
      <StructuredData
        data={localBusinessJsonLd({
          name: 'Cincinnati',
          region: 'Ohio',
          regionCode: 'OH',
        })}
      />
      <StructuredData data={faqPageJsonLd(CINCINNATI_FAQ)} />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: '/locations/cincinnati' },
          { name: 'Cincinnati', path: '/locations/cincinnati' },
        ])}
      />

      <CincinnatiHero />
      <ProofStrip />
      <CincinnatiLocalTrust />
      <EmotionalRecognition />
      <ServicesGrid />
      <MeetNjock />
      <FirstThirtyDays />
      <CincinnatiFaq />
      <PricingPreview />
      <CtaDrop />
    </>
  );
}
