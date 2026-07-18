import type { Metadata } from 'next';
import { CityHero } from '@/components/locations/CityHero';
import { CityLocalTrust } from '@/components/locations/CityLocalTrust';
import { CityFaq } from '@/components/locations/CityFaq';
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
import { RALEIGH } from '@/lib/city-data';

const c = RALEIGH;

export const metadata: Metadata = {
  title: c.metaTitle,
  description: c.metaDescription,
  alternates: { canonical: `/locations/${c.slug}` },
  openGraph: {
    title: c.metaTitle,
    description: c.metaDescription,
    url: `https://njaccountstax.com/locations/${c.slug}`,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: c.metaTitle,
    description: c.metaDescription,
  },
};

export default function RaleighLandingPage() {
  return (
    <>
      <StructuredData
        data={localBusinessJsonLd({
          name: c.name,
          region: c.state,
          regionCode: c.stateCode,
        })}
      />
      <StructuredData data={faqPageJsonLd(c.faqs)} />
      <StructuredData
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Locations', path: `/locations/${c.slug}` },
          { name: c.name, path: `/locations/${c.slug}` },
        ])}
      />

      <CityHero
        cityName={c.name}
        slug={c.slug}
        description={c.heroDescription}
        floatingHeadline={c.floatingBadge.headline}
        floatingSubline={c.floatingBadge.subline}
      />
      <ProofStrip />
      <CityLocalTrust
        heading={c.localTrustHeading}
        paragraphs={c.localTrustBody}
        neighborhoods={c.neighborhoods}
      />
      <EmotionalRecognition />
      <ServicesGrid />
      <MeetNjock />
      <FirstThirtyDays />
      <CityFaq eyebrow={c.faqEyebrow} heading={c.faqHeading} items={c.faqs} sources={c.sources} />
      <PricingPreview />
      <CtaDrop />
    </>
  );
}
