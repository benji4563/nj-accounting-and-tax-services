import { Check } from 'lucide-react';
import { Section, SectionHeader } from '@/components/design-system/Section';
import { Button } from '@/components/design-system/Button';
import { cn } from '@/lib/utils';

const TIERS = [
  {
    name: 'Essential',
    price: 299,
    best: 'For solo & side-hustles',
    features: [
      'Monthly bookkeeping',
      'Annual tax return',
      'Email support (4-hr SLA)',
    ],
  },
  {
    name: 'Growth',
    price: 549,
    best: 'For 1–5 person shops',
    features: [
      'Everything in Essential',
      'Quarterly tax planning',
      'Monthly 30-min call',
      'Dedicated advisor',
    ],
    featured: true,
  },
  {
    name: 'Full-Service',
    price: 949,
    best: 'For 5–20 person shops',
    features: [
      'Everything in Growth',
      'Payroll for up to 10',
      'Unlimited quick-question calls',
    ],
  },
];

export function PricingPreview() {
  return (
    <Section background="cream">
      <SectionHeader
        eyebrow={'Real prices. No “call for a quote.”'}
        title={<>Three tiers. All-in. Every price is what you pay.</>}
      />

      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {TIERS.map((t) => (
          <div
            key={t.name}
            className={cn(
              'relative flex flex-col rounded-card p-8 shadow-card transition-transform',
              t.featured
                ? 'bg-aubergine text-ivory md:scale-[1.03] shadow-elevated'
                : 'bg-ivory'
            )}
          >
            {t.featured && (
              <span className="absolute -top-3 right-5 rounded-full bg-persimmon px-3 py-1 text-[11px] font-medium uppercase tracking-[0.06em] text-ivory">
                Most chosen
              </span>
            )}

            <div
              className={cn(
                'font-display text-[22px] font-medium',
                t.featured ? 'text-ivory' : 'text-aubergine'
              )}
            >
              {t.name}
            </div>
            <div
              className={cn(
                'mt-1 text-[12px]',
                t.featured ? 'text-lilac' : 'text-graphite/65'
              )}
            >
              {t.best}
            </div>

            <div
              className={cn(
                'mt-5 font-display text-[44px] font-medium leading-none tracking-[-0.02em]',
                t.featured ? 'text-ivory' : 'text-aubergine'
              )}
            >
              ${t.price}
              <span className="text-[15px] font-normal opacity-60">/mo</span>
            </div>

            <ul className="my-7 flex-1 space-y-3">
              {t.features.map((f) => (
                <li
                  key={f}
                  className={cn(
                    'flex items-start gap-2.5 text-body-sm',
                    t.featured ? 'text-ivory' : 'text-graphite'
                  )}
                >
                  <Check
                    size={16}
                    strokeWidth={2}
                    className={cn(
                      'mt-0.5 shrink-0',
                      t.featured ? 'text-persimmon' : 'text-sage'
                    )}
                  />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="/contact"
              className={cn(
                'block rounded py-3 text-center text-body-sm font-medium transition-all duration-200',
                t.featured
                  ? 'bg-persimmon text-ivory hover:bg-persimmon-hover'
                  : 'border-[1.5px] border-aubergine text-aubergine hover:bg-aubergine hover:text-ivory'
              )}
            >
              Start with {t.name}
            </a>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center text-body-sm text-graphite/75">
        Switching from another accountant?{' '}
        <span className="font-medium text-aubergine">
          Your first month is 50% off.
        </span>{' '}
        Just mention it when you book.
      </div>

      <div className="mt-4 text-center">
        <Button href="/pricing" variant="tertiary">
          See what&rsquo;s included in each tier
        </Button>
      </div>
    </Section>
  );
}
