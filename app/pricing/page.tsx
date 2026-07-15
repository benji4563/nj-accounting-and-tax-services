import { Section, SectionHeader } from '@/components/design-system/Section';
import { PricingPreview } from '@/components/home/PricingPreview';
import { HonestyStrip } from '@/components/proof/HonestyStrip';
import { CtaDrop } from '@/components/home/CtaDrop';

export const metadata = { title: 'Pricing' };

export default function PricingPage() {
  console.log('[page] /pricing rendered');
  return (
    <>
      <Section background="cream">
        <SectionHeader
          eyebrow="Real prices. In writing."
          title={<>You&rsquo;re tired of &ldquo;call for a quote.&rdquo; So are we.</>}
        />
        <p className="mx-auto max-w-prose text-center text-body-lg text-graphite">
          Here&rsquo;s what it costs. Flat monthly, every feature listed,
          nothing hidden.
        </p>
      </Section>
      <PricingPreview />
      <Section background="ivory">
        <SectionHeader
          eyebrow="Radical honesty"
          title={<>Here&rsquo;s what we don&rsquo;t hide.</>}
        />
        <HonestyStrip />
      </Section>
      <CtaDrop />
    </>
  );
}
