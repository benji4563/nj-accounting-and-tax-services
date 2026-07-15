import { getProofMetrics, formatHours } from '@/lib/proof-metrics';

export async function ResponseTimeBadge() {
  const m = await getProofMetrics();
  const time = formatHours(m.median_reply_hours_this_week);

  return (
    <div className="inline-flex items-center gap-2 rounded-full bg-blush px-3 py-1.5 text-[12px] font-medium uppercase tracking-[0.03em] text-aubergine">
      <span
        className="inline-block h-1.5 w-1.5 rounded-full bg-sage"
        style={{ boxShadow: '0 0 0 3px rgba(117,143,115,.25)' }}
        aria-hidden="true"
      />
      Median first reply this week — {time}
    </div>
  );
}
