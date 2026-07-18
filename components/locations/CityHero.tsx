import Link from 'next/link';
import { Button } from '@/components/design-system/Button';
import { Emphasis } from '@/components/signature/UnderlineSwoosh';
import { BlobImage } from '@/components/signature/BlobImage';
import { ResponseTimeBadge } from '@/components/proof/ResponseTimeBadge';

type Props = {
  cityName: string;
  slug: string;
  description: string;
  floatingHeadline: string;
  floatingSubline: string;
};

export function CityHero({ cityName, slug, description, floatingHeadline, floatingSubline }: Props) {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="container-content grid gap-12 py-20 md:grid-cols-[1.15fr_1fr] md:py-24 lg:gap-16">
        <div className="max-w-[560px]">
          <nav aria-label="Breadcrumb" className="mb-6 text-body-sm text-graphite/75">
            <Link href="/" className="hover:text-persimmon">Home</Link>
            <span aria-hidden className="mx-2">/</span>
            <Link href={`/locations/${slug}`} className="hover:text-persimmon">{cityName}</Link>
          </nav>

          <ResponseTimeBadge />

          <h1 className="mt-6 font-display text-display-mobile leading-[1.05] tracking-[-0.02em] text-aubergine md:text-display">
            A small-business{' '}
            <Emphasis>accountant</Emphasis>
            <br />
            in <Emphasis>{cityName}</Emphasis>.
          </h1>

          <p className="mt-8 max-w-[480px] text-body-lg text-graphite">
            {description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6">
            <Button href="/contact" variant="primary" showArrow>
              Book a free 15-min call
            </Button>
            <Button href="/pricing" variant="tertiary">
              See our pricing
            </Button>
          </div>
        </div>

        <div className="relative">
          <BlobImage src="/njock-portrait.webp" alt="Njock Simon Ndum, Co-founder and CEO" />

          <div className="absolute bottom-10 left-0 z-20 flex max-w-[260px] items-center gap-3 rounded-card bg-ivory px-5 py-4 shadow-elevated">
            <div
              className="h-2.5 w-2.5 shrink-0 rounded-full bg-sage"
              style={{ boxShadow: '0 0 0 4px rgba(117,143,115,.2)' }}
            />
            <div className="text-body-sm">
              <div className="font-display text-[15px] font-medium text-aubergine">
                {floatingHeadline}
              </div>
              <div className="text-graphite/70">{floatingSubline}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
