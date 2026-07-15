import { Section, SectionHeader } from '@/components/design-system/Section';
import { Card } from '@/components/design-system/Card';

const CARDS = [
  {
    quote: 'I have a shoebox of receipts and no idea where to start.',
    answerTitle: 'We start there.',
    answerBody:
      'Send us the shoebox. We build your books from scratch. Your first month is on us if we can’t get you current within 30 days.',
  },
  {
    quote: 'My last accountant took 8 days to reply.',
    answerTitle: 'We answer within 4 business hours. Or that month is free.',
    answerBody: 'Yes, it’s written into your invoice. We track it. You see it.',
  },
  {
    quote: 'I’m terrified of an IRS audit.',
    answerTitle: 'We audit-proof every return before we file.',
    answerBody:
      'Three specific checks, every return, every time. Ask us to walk you through them on your discovery call.',
  },
];

export function EmotionalRecognition() {
  return (
    <Section background="cream">
      <SectionHeader
        eyebrow="You’re not the only one"
        title={<>Sound familiar? Here&rsquo;s exactly what we do about it.</>}
      />
      <div className="grid gap-6 md:grid-cols-3">
        {CARDS.map((c) => (
          <Card key={c.answerTitle} interactive>
            <p className="border-l-[3px] border-lilac pl-4 font-display text-[18px] italic leading-snug text-graphite">
              &ldquo;{c.quote}&rdquo;
            </p>
            <div className="mt-5">
              <div className="font-display text-[17px] font-medium text-aubergine">
                {c.answerTitle}
              </div>
              <p className="mt-2 text-body-sm text-graphite/85">{c.answerBody}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}
