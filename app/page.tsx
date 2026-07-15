import { Hero } from '@/components/home/Hero';
import { ProofStrip } from '@/components/home/ProofStrip';
import { EmotionalRecognition } from '@/components/home/EmotionalRecognition';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { MeetNjock } from '@/components/home/MeetNjock';
import { FirstThirtyDays } from '@/components/home/FirstThirtyDays';
import { PricingPreview } from '@/components/home/PricingPreview';
import { CtaDrop } from '@/components/home/CtaDrop';

export default function HomePage() {
  console.log('[page] / rendered');
  return (
    <>
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
