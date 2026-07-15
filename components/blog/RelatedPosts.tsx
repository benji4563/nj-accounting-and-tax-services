import Link from 'next/link';
import { Section } from '@/components/design-system/Section';

type Related = {
  href: string;
  eyebrow: string;
  title: string;
  blurb: string;
};

export function RelatedPosts({ items }: { items: Related[] }) {
  return (
    <Section background="ivory">
      <div className="mb-10 text-center">
        <div className="section-eyebrow mb-3">Keep reading</div>
        <h2 className="font-display text-h2 text-aubergine">
          More plain-English answers.
        </h2>
      </div>
      <ul className="grid gap-6 md:grid-cols-3">
        {items.map((r) => (
          <li key={r.href}>
            <Link
              href={r.href}
              className="group block h-full rounded-card border border-aubergine/10 bg-cream p-6 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="section-eyebrow mb-2">{r.eyebrow}</div>
              <h3 className="font-display text-h4 text-aubergine transition-colors group-hover:text-persimmon">
                {r.title}
              </h3>
              <p className="mt-3 text-body-sm text-graphite">{r.blurb}</p>
              <span className="mt-4 inline-block border-b-[1.5px] border-aubergine pb-0.5 text-body-sm font-medium text-aubergine transition-colors group-hover:border-persimmon group-hover:text-persimmon">
                Read more
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
}
