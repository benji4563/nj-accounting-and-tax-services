import { Menu, FileText, TrendingUp, ShieldAlert } from 'lucide-react';
import { Section, SectionHeader } from '@/components/design-system/Section';

const SERVICES = [
  {
    icon: Menu,
    title: 'Monthly bookkeeping',
    problem: 'The shoebox problem',
    body:
      'Send us anything. We categorise it. You get one clean report on the 5th of every month.',
  },
  {
    icon: FileText,
    title: 'Tax preparation',
    problem: 'The 11pm-Google problem',
    body:
      'Federal, state, local. Every deduction. We file. You approve. Nobody Googles “K-1” at 11pm ever again.',
  },
  {
    icon: TrendingUp,
    title: 'Quarterly tax planning',
    problem: 'The “am I paying too much?” problem',
    body:
      'Every three months we tell you exactly what to owe — and how to owe less next year.',
  },
  {
    icon: ShieldAlert,
    title: 'Audit support & representation',
    problem: 'The “the IRS just called” problem',
    body:
      'We pick up. We prepare the paperwork. We show up with you. You are not alone in that room.',
  },
];

export function ServicesGrid() {
  return (
    <Section background="blush">
      <SectionHeader
        eyebrow="What we actually do"
        title={<>Four services. Zero jargon. Real deliverables.</>}
      />
      <div className="grid gap-6 md:grid-cols-2">
        {SERVICES.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.title}
              className="flex items-start gap-5 rounded-card bg-ivory p-8 shadow-card"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cream text-aubergine">
                <Icon size={22} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="font-display text-[20px] font-medium leading-tight text-aubergine">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[13px] italic text-graphite/65">
                  &ldquo;{s.problem}&rdquo;
                </p>
                <p className="mt-2.5 text-body-sm text-graphite">{s.body}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
