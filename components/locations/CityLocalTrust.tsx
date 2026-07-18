import Link from 'next/link';
import { Section } from '@/components/design-system/Section';

const linkClass =
  'border-b-[1.5px] border-aubergine pb-0.5 font-medium text-aubergine hover:border-persimmon hover:text-persimmon';

type Props = {
  heading: string;
  paragraphs: string[];
  neighborhoods: string[];
};

export function CityLocalTrust({ heading, paragraphs, neighborhoods }: Props) {
  return (
    <Section background="ivory">
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
        <div>
          <div className="section-eyebrow mb-3">Where we work</div>
          <h2 className="font-display text-h2 text-aubergine">{heading}</h2>
          {paragraphs.map((p, i) => (
            <p key={i} className="mt-6 text-body text-graphite first:mt-6">
              {p}
            </p>
          ))}
          <p className="mt-6 text-body text-graphite">
            Curious what working with us looks like? Take a look at{' '}
            <Link href="/services" className={linkClass}>our services</Link>,
            see{' '}
            <Link href="/pricing" className={linkClass}>transparent pricing</Link>,
            or read about{' '}
            <Link href="/how-we-work" className={linkClass}>your first 30 days</Link>.
          </p>
        </div>

        <div>
          <div className="section-eyebrow mb-3">Neighborhoods we serve</div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-body-sm text-aubergine">
            {neighborhoods.map((n) => (
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
