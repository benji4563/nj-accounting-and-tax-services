import { getProofMetrics, formatDollars, formatHours } from '@/lib/proof-metrics';

export async function LiveCounter() {
  const m = await getProofMetrics();

  const items = [
    {
      value: m.clients_served_total.toString(),
      label: 'Small businesses served',
      note: 'Since 2019',
    },
    {
      value: formatDollars(m.dollars_saved_total_usd),
      label: 'Saved for our clients',
      note: 'All-time',
    },
    {
      value: formatHours(m.median_reply_hours_this_week),
      label: 'Median first-reply time',
      note: 'This week',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
      {items.map((item) => (
        <div key={item.label} className="text-center">
          <div className="font-display text-[44px] leading-none tracking-[-0.02em] text-aubergine">
            {item.value}
          </div>
          <div className="mt-2 text-body-sm text-graphite/70">{item.label}</div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.06em] text-graphite/50">
            {item.note}
          </div>
        </div>
      ))}
    </div>
  );
}
