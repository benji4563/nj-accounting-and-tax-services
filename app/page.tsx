import { Hero } from '@/components/home/Hero';
import { ProofStrip } from '@/components/home/ProofStrip';
import { EmotionalRecognition } from '@/components/home/EmotionalRecognition';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { MeetNjock } from '@/components/home/MeetNjock';
import { FirstThirtyDays } from '@/components/home/FirstThirtyDays';
import { PricingPreview } from '@/components/home/PricingPreview';
import { CtaDrop } from '@/components/home/CtaDrop';
import { StructuredData } from '@/components/seo/StructuredData';
import { professionalServiceJsonLd } from '@/lib/structured-data';

export default function HomePage() {
  console.log('[page] / rendered');
  return (
    <>
      <StructuredData data={professionalServiceJsonLd} />
      <Hero />
      <ProofStrip />
      <EmotionalRecognition />
      <ServicesGrid />
      <MeetNjock />
      <FirstThirtyDays />
      <PricingPreview />
      <CtaDrop />
    </>
  );
}
