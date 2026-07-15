import { Section } from '@/components/design-system/Section';

const NEIGHBORHOODS = [
  'Downtown',
  'Over-the-Rhine',
  'Hyde Park',
  'Oakley',
  'Mount Adams',
  'Clifton',
  'Northside',
  'Walnut Hills',
  'East Walnut Hills',
  'Mount Lookout',
  'Pleasant Ridge',
  'Madisonville',
];

export function CincinnatiLocalTrust() {
  return (
    <Section background="ivory">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <div className="section-eyebrow mb-3">Where we work</div>
          <h2 className="font-display text-h2 text-aubergine">
            Serving Cincinnati and greater Hamilton County.
          </h2>
          <p className="mt-6 text-body text-graphite">
            We work with small businesses from every corner of the city.
            Everything is delivered remotely — you send us what you have,
            we do the work, you approve. But we know the local terrain:
            Ohio&rsquo;s sales-tax filing cadence, Hamilton County&rsquo;s
            local addition, and the Cincinnati municipal income tax that
            catches every out-of-state owner off guard in year one.
          </p>
          <p className="mt-4 text-body text-graphite">
            If your business runs in one of these neighborhoods (or
            anywhere within a 45-mile radius, including Northern Kentucky),
            we&rsquo;re a fit.
          </p>
        </div>

        <div>
          <div className="section-eyebrow mb-3">Neighborhoods we serve</div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-body-sm text-aubergine">
            {NEIGHBORHOODS.map((n) => (
              <li key={n} className="flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-persimmon"
                />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
