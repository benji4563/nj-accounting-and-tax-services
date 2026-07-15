import { Section, SectionHeader } from '@/components/design-system/Section';
import { FirstThirtyDays } from '@/components/home/FirstThirtyDays';
import { GuaranteeChip, ALL_GUARANTEES } from '@/components/proof/GuaranteeChip';
import { CtaDrop } from '@/components/home/CtaDrop';

export const metadata = { title: 'How we work' };

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
