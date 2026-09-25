import { Section } from '@/components/design-system/Section';

/**
 * Outbound citations to primary IRS sources.
 *
 * Added 2026-09-25. The audit found zero external links on the homepage and
 * the geo-optimizer flagged "no links to authoritative sources" — a direct
 * credibility signal for both Google's E-E-A-T assessment and AI answer
 * engines deciding whether to cite you.
 *
 * These are not decorative. Every link is a page a small-business owner
 * genuinely needs, verified to return 200 on 2026-09-25. Linking out to the
 * primary source is also the honest move: we would rather you read the rule
 * than take our word for it.
 */

const SOURCES = [
  {
    href: 'https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes',
    label: 'Estimated taxes',
    note: 'Who has to pay quarterly, how to work out the amount, and the four due dates.',
  },
  {
    href: 'https://www.irs.gov/businesses/small-businesses-self-employed/recordkeeping',
    label: 'Recordkeeping',
    note: 'What the IRS expects you to keep, in what form, and for how long.',
  },
  {
    href: 'https://www.irs.gov/businesses/small-businesses-self-employed/business-structures',
    label: 'Business structures',
    note: 'Sole proprietorship, partnership, LLC, S-corp, C-corp — and what each one means at tax time.',
  },
  {
    href: 'https://www.irs.gov/businesses/small-businesses-self-employed/deducting-business-expenses',
    label: 'Deducting business expenses',
    note: 'The "ordinary and necessary" test, in the IRS’s own words.',
  },
  {
    href: 'https://www.irs.gov/businesses/small-businesses-self-employed/employment-taxes',
    label: 'Employment taxes',
    note: 'What changes the moment you hire your first employee.',
  },
  {
    href: 'https://www.irs.gov/businesses/small-businesses-self-employed',
    label: 'IRS Small Business hub',
    note: 'The whole section, if you would rather browse it yourself.',
  },
];

export function OfficialSources() {
  return (
    <Section background="cream" id="official-sources">
      <div className="container-prose">
        <div className="section-eyebrow mb-3">Straight from the source</div>
        <h2 className="font-display text-h2 text-aubergine">
          Don&rsquo;t take our word for any of it.
        </h2>
        <p className="mt-5 text-body-lg text-graphite">
          Plenty of accounting sites explain the rules and hope you never check.
          These are the actual IRS pages behind the things we handle for you.
          If something we say ever contradicts one of these, the IRS wins and we
          want to hear about it.
        </p>

        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {SOURCES.map((s) => (
            <li
              key={s.href}
              className="rounded-card border border-aubergine/10 bg-ivory p-5"
            >
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-h4 text-aubergine underline decoration-aubergine/30 underline-offset-4 hover:text-persimmon hover:decoration-persimmon"
              >
                {s.label}
              </a>
              <p className="mt-2 text-body-sm text-graphite">{s.note}</p>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-body-sm text-graphite/80">
          Links verified 25 September 2026. These are federal rules — your state
          and city may add their own, which is what the city pages in the footer
          cover.
        </p>
      </div>
    </Section>
  );
}
