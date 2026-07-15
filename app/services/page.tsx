import type { Metadata } from 'next';
import { Section, SectionHeader } from '@/components/design-system/Section';
import { ServicesGrid } from '@/components/home/ServicesGrid';
import { CtaDrop } from '@/components/home/CtaDrop';
import { StructuredData } from '@/components/seo/StructuredData';
import { servicesJsonLd } from '@/lib/structured-data';

export const metadata: Metadata = {
  title: 'Bookkeeping, Tax Prep & Planning for Small Businesses',
  description:
    'Monthly bookkeeping, tax preparation, quarterly tax planning, and audit support for small businesses. Flat monthly pricing, plain-English deliverables, a real accountant on email.',
  alternates: { canonical: '/services' },
  openGraph: {
    title: 'What we do — Bookkeeping, Tax & Planning',
    description:
      'Four services. Zero jargon. Monthly bookkeeping, tax prep, quarterly planning, audit support.',
    url: 'https://booksbynj.com/services',
  },
};

export default function ServicesPage() {
  console.log('[page] /services rendered');
  return (
    <>
      <StructuredData data={servicesJsonLd} />
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
