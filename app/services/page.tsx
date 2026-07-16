import type { Metadata } from 'next';
import Image from 'next/image';
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
    url: 'https://njaccountstax.com/services',
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

        <figure className="mx-auto mt-14 max-w-5xl">
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-card">
            <Image
              src="/scenes/coffee-shop-owner-stressed.webp"
              alt="A packed coffee shop with the owner sitting at a back table, tense over a laptop and paperwork while the cafe hums behind her"
              fill
              sizes="(min-width: 1024px) 1024px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="mx-auto mt-4 max-w-prose text-center text-body-sm text-graphite/70">
            The cafe is packed. The books aren&rsquo;t. Every service below
            solves one specific version of this moment.
          </figcaption>
        </figure>
      </Section>
      <ServicesGrid />
      <CtaDrop />
    </>
  );
}
