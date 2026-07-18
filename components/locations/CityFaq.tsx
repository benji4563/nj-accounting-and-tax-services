import { Section } from '@/components/design-system/Section';

type Props = {
  eyebrow: string;
  heading: string;
  items: Array<{ q: string; a: string }>;
  sources?: Array<{ label: string; url: string }>;
};

export function CityFaq({ eyebrow, heading, items, sources }: Props) {
  return (
    <Section background="cream">
      <div className="container-prose">
        <div className="section-eyebrow mb-3">{eyebrow}</div>
        <h2 className="font-display text-h2 text-aubergine">{heading}</h2>
        <dl className="mt-10 divide-y divide-aubergine/10">
          {items.map((item) => (
            <div key={item.q} className="py-6">
              <dt className="font-display text-h4 text-aubergine">{item.q}</dt>
              <dd className="mt-3 text-body text-graphite">{item.a}</dd>
            </div>
          ))}
        </dl>

        {sources && sources.length > 0 && (
          <div className="mt-8 rounded-card border border-aubergine/10 bg-ivory/50 px-6 py-5">
            <div className="text-body-sm font-medium text-aubergine">Helpful resources</div>
            <ul className="mt-3 space-y-1.5 text-body-sm text-graphite">
              {sources.map((s) => (
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
          </div>
        )}
      </div>
    </Section>
  );
}
