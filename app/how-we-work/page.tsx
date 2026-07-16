import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/design-system/Section';
import { FirstThirtyDays } from '@/components/home/FirstThirtyDays';
import { GuaranteeChip, ALL_GUARANTEES } from '@/components/proof/GuaranteeChip';
import { CtaDrop } from '@/components/home/CtaDrop';

export const metadata: Metadata = {
  title: 'How We Work — 30-Day Onboarding & Guaranteed Response Times',
  description:
    'Your first 30 days with NJ: discovery call, then we build your books from scratch. Reply within 4 business hours, one clean report every month — or your month is free.',
  alternates: { canonical: '/how-we-work' },
  openGraph: {
    title: 'How we work — four guarantees, written into your invoice',
    description:
      '4-hour reply time. Books current in 30 days. One report on the 5th. Every promise measurable.',
    url: 'https://njaccountstax.com/how-we-work',
  },
};

export default function HowWeWorkPage() {
  console.log('[page] /how-we-work rendered');
  return (
    <>
      <Section background="cream">
        <SectionHeader
          eyebrow="How we work"
          title={<>You&rsquo;ve been ghosted by an accountant before. That won&rsquo;t happen here.</>}
        />
        <p className="mx-auto max-w-prose text-center text-body-lg text-graphite">
          Every promise below is a specific commitment &mdash; not a marketing
          line. Break one and it&rsquo;s written into your invoice.
        </p>
      </Section>
      <FirstThirtyDays />
      <Section background="cream">
        <SectionHeader
          eyebrow="Our four promises"
          title={<>Four things we&rsquo;ll never break.</>}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {ALL_GUARANTEES.map((name) => (
            <GuaranteeChip key={name} name={name} />
          ))}
        </div>
      </Section>
      <CtaDrop />
    </>
  );
}
