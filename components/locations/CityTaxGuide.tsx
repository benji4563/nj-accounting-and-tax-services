import Link from 'next/link';
import { Section } from '@/components/design-system/Section';
import type { CityTaxGuide as Guide } from '@/lib/city-tax-guides';

/**
 * The section that makes a city page genuinely about that city.
 *
 * Added 2026-09-25 to fix the audit's doorway-page finding. Every fact here is
 * cited to a primary .gov source — which is also the GEO play: literal,
 * quotable, sourced statements are what AI answer engines cite.
 *
 * Also carries the internal links from the city page into the money pages and
 * the blog, which the audit found were completely absent.
 */
export function CityTaxGuide({
  guide,
  cityName,
  slug,
}: {
  guide: Guide;
  cityName: string;
  slug: string;
}) {
  return (
    <Section background="ivory" id="local-tax">
      <div className="container-prose">
        <div className="section-eyebrow mb-3">Local tax, plainly</div>
        <h2 className="font-display text-h2 text-aubergine">{guide.heading}</h2>
        <p className="mt-5 text-body-lg text-graphite">{guide.intro}</p>

        <dl className="mt-10 space-y-8">
          {guide.facts.map((fact) => (
            <div
              key={fact.label}
              className="border-l-4 border-persimmon pl-5 md:pl-6"
            >
              <dt className="font-display text-h4 text-aubergine">{fact.label}</dt>
              <dd className="mt-2 text-body text-graphite">{fact.detail}</dd>
            </div>
          ))}
        </dl>

        <div className="mt-10 rounded-card bg-blush px-6 py-6 md:px-8">
          <p className="text-body-lg text-aubergine">{guide.takeaway}</p>
          <p className="mt-4 text-body-sm text-graphite">
            <Link
              href="/contact"
              className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
            >
              Ask us about your {cityName} filings
            </Link>
            {' · '}
            <Link
              href="/pricing"
              className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
            >
              See flat pricing
            </Link>
            {' · '}
            <Link
              href="/services"
              className="border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon"
            >
              What we handle
            </Link>
          </p>
        </div>

        <div className="mt-8 rounded-card border border-aubergine/10 bg-cream px-6 py-5">
          <div className="text-body-sm font-medium text-aubergine">
            Where these figures come from
          </div>
          <ul className="mt-3 space-y-1.5 text-body-sm text-graphite">
            {guide.sources.map((s) => (
              <li key={s.url}>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-aubergine/30 pb-0.5 hover:border-persimmon hover:text-persimmon"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-body-sm text-graphite/80">
            Rates and thresholds last verified{' '}
            <time dateTime={guide.verified}>
              {new Date(`${guide.verified}T12:00:00Z`).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                timeZone: 'UTC',
              })}
            </time>
            . Tax rules change — this is general information for {cityName} business
            owners, not advice on your specific situation.{' '}
            <Link
              href={`/locations/${slug}#contact`}
              className="border-b border-aubergine/30 pb-0.5 hover:border-persimmon hover:text-persimmon"
            >
              Ask us about yours
            </Link>
            .
          </p>
        </div>
      </div>
    </Section>
  );
}
