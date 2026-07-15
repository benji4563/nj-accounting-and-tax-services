import { Section, SectionHeader } from '@/components/design-system/Section';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { CtaDrop } from '@/components/home/CtaDrop';

export const metadata = { title: 'Services' };

export default function ServicesPage() {
  console.log('[page] /services rendered');
  return (
    <>
      <Section background="cream">
        <SectionHeader
          eyebrow="What we actually do"
          title={<>You don&rsquo;t know exactly what you need &mdash; and that&rsquo;s fine.</>}
        />
        <p className="mx-auto max-w-prose text-center text-body-lg text-graphite">
          Here&rsquo;s what we do, in plain English. Detailed breakdowns of each
          service &mdash; with the deliverables, what&rsquo;s included, and
          what isn&rsquo;t &mdash; are coming shortly.
        </p>
      </Section>
      <ServicesGrid />
      <CtaDrop />
    </>
  );
}
