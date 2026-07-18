import { Section, SectionHeader } from '@/components/design-system/Section';

const STEPS = [
  {
    when: 'Day 0',
    title: '15-min discovery call',
    body: 'Free. No pitch. We just listen and tell you if we’re a fit.',
  },
  {
    when: 'Day 1–7',
    title: 'You send us what you have',
    body: 'Last 3 months of receipts, statements, and last year’s return. That’s it.',
  },
  {
    when: 'Day 8–30',
    title: 'We build your books',
    body: 'End of month: you get a walkthrough call and a clean report on Day 30.',
  },
  {
    when: 'Every month after',
    title: 'One report on the 5th',
    body: 'One check-in call per month. No surprises. Ever.',
  },
];

export function FirstThirtyDays() {
  return (
    <Section background="ivory">
      <SectionHeader
        eyebrow="Your first 30 days"
        title={<>What actually happens after you say yes.</>}
      />
      <div className="grid gap-6 md:grid-cols-4">
        {STEPS.map((s, i) => (
          <div key={s.when} className="relative">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-aubergine font-display text-[16px] text-ivory">
              {i + 1}
            </div>
            <div className="mt-4 text-[12px] font-medium uppercase tracking-[0.08em] text-persimmon-deep">
              {s.when}
            </div>
            <div className="mt-2 font-display text-[18px] font-medium leading-tight text-aubergine">
              {s.title}
            </div>
            <p className="mt-2 text-body-sm text-graphite/85">{s.body}</p>

            {/* Connecting line for desktop */}
            {i < STEPS.length - 1 && (
              <div
                className="absolute left-12 top-5 hidden h-px w-[calc(100%-40px)] bg-fog/40 md:block"
                aria-hidden="true"
              />
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
