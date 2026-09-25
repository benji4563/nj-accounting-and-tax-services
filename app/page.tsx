import { Hero } from '@/components/home/Hero';
import { ProofStrip } from '@/components/home/ProofStrip';
import { EmotionalRecognition } from '@/components/home/EmotionalRecognition';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { MeetNjock } from '@/components/home/MeetNjock';
import { WhoWeFit } from '@/components/home/WhoWeFit';
import { FirstThirtyDays } from '@/components/home/FirstThirtyDays';
import { Testimonials } from '@/components/home/Testimonials';
import { PricingPreview } from '@/components/home/PricingPreview';
import { CtaDrop } from '@/components/home/CtaDrop';
import { StructuredData } from '@/components/seo/StructuredData';
import {
  professionalServiceJsonLd,
  pricingFaqJsonLd,
} from '@/lib/structured-data';

export default function HomePage() {
  return (
    <>
      {/* FAQPage on the homepage was a gap in the 2026-09-25 GEO audit
          (schema_jsonld scored 8/16). The questions are the pricing FAQs,
          which are the ones AI assistants actually get asked. */}
      <StructuredData data={[professionalServiceJsonLd, pricingFaqJsonLd]} />
      <Hero />
      <ProofStrip />
      <EmotionalRecognition />
      <ServicesGrid />
      <MeetNjock />
      <WhoWeFit />
      <FirstThirtyDays />
      <Testimonials />
      <PricingPreview />
      <CtaDrop />
    </>
  );
}
