import { ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

export type GuaranteeName =
  | 'four-hour'
  | 'straight-price'
  | 'report-on-the-fifth'
  | 'no-hostage';

const GUARANTEES: Record<
  GuaranteeName,
  { title: string; body: string }
> = {
  'four-hour': {
    title: 'The 4-Hour Promise',
    body:
      'We reply to every email within 4 business hours. If we don’t, that month is on us.',
  },
  'straight-price': {
    title: 'The Straight-Price Promise',
    body:
      'Every price on our pricing page is what you pay. If we ever bill you for something we didn’t warn you about in writing first, that charge is voided.',
  },
  'report-on-the-fifth': {
    title: 'The Report-on-the-5th Promise',
    body:
      'Your monthly bookkeeping report lands in your inbox by the 5th of every month. If it’s ever late, that month is free.',
  },
  'no-hostage': {
    title: 'The No-Hostage Promise',
    body:
      'If you ever decide to leave, we hand every file to your next accountant in their format within 5 business days. No fees, no drama.',
  },
};

export function GuaranteeChip({
  name,
  variant = 'card',
  className,
}: {
  name: GuaranteeName;
  variant?: 'card' | 'inline';
  className?: string;
}) {
  const g = GUARANTEES[name];

  if (variant === 'inline') {
    return (
      <div className={cn('inline-flex items-center gap-2 text-body-sm text-sage', className)}>
        <ShieldCheck size={16} strokeWidth={1.8} />
        <span className="font-medium">{g.title}</span>
      </div>
    );
  }

  return (
    <div
      className={cn(
        'flex items-start gap-3 rounded-card bg-ivory p-5 shadow-card',
        className
      )}
    >
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sage/10 text-sage">
        <ShieldCheck size={18} strokeWidth={1.8} />
      </div>
      <div>
        <div className="font-display text-[16px] font-medium leading-tight text-aubergine">
          {g.title}
        </div>
        <p className="mt-1 text-body-sm text-graphite/85">{g.body}</p>
      </div>
    </div>
  );
}

export const ALL_GUARANTEES: GuaranteeName[] = [
  'four-hour',
  'straight-price',
  'report-on-the-fifth',
  'no-hostage',
];
