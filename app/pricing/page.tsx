import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/design-system/Section';
import { PricingPreview } from '@/components/home/PricingPreview';
import { HonestyStrip } from '@/components/proof/HonestyStrip';
import { CtaDrop } from '@/components/home/CtaDrop';
import { StructuredData } from '@/components/seo/StructuredData';
import { pricingFaqJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Small-Business Accountant Pricing — Flat Monthly, In Writing',
  description:
    'Real prices, in writing. Three plans from $299/mo. Monthly bookkeeping, annual tax prep, quarterly planning — flat monthly pricing, no “call for a quote.”',
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Real prices. No “call for a quote.” | NJ’s Accounting',
    description:
      'Three tiers from $299/mo. Flat monthly pricing for bookkeeping, tax prep, and planning.',
    url: 'https://njaccountstax.com/pricing',
  },
};

export default function PricingPage() {
  console.log('[page] /pricing rendered');
  return (
    <>
      <StructuredData data={pricingFaqJsonLd} />
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
