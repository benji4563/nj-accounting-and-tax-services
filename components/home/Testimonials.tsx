import { Section, SectionHeader } from '@/components/design-system/Section';
import { StructuredData } from '@/components/seo/StructuredData';
import { reviewsJsonLd } from '@/lib/structured-data';
import { TESTIMONIALS } from '@/lib/testimonials';

/**
 * Renders nothing at all while `TESTIMONIALS` is empty — see lib/testimonials.ts.
 * Add real client quotes there and this section plus its Review schema appear
 * on the next build.
 */
export function Testimonials() {
  if (TESTIMONIALS.length === 0) return null;

  const schema = reviewsJsonLd(TESTIMONIALS);

  return (
    <Section background="ivory" id="testimonials">
      {schema && <StructuredData data={schema} />}
      <SectionHeader
        eyebrow="In their words"
        title="What owners say after the first 30 days."
      />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TESTIMONIALS.map((t) => (
          <figure
            key={`${t.author}-${t.body.slice(0, 24)}`}
            className="flex h-full flex-col rounded-card border-l-4 border-persimmon bg-cream p-6 md:p-8"
          >
            <blockquote className="flex-1 text-body text-graphite">
              &ldquo;{t.body}&rdquo;
            </blockquote>
            <figcaption className="mt-5 border-t border-aubergine/10 pt-4">
              <div className="font-medium text-aubergine">{t.author}</div>
              {t.business && (
                <div className="text-body-sm text-graphite/80">{t.business}</div>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
