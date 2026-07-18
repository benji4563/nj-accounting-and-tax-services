/**
 * A stylised "monthly report" preview — proves you get a real deliverable.
 * Not a real photo, an illustrated preview.
 */
export function InboxPreview() {
  return (
    <div className="relative mx-auto max-w-[520px] rounded-card bg-ivory p-8 shadow-elevated">
      <div className="flex items-center justify-between border-b border-fog/30 pb-4">
        <div className="font-display text-[18px] font-medium text-aubergine">
          March 2026 Report
        </div>
        <div className="text-[11px] uppercase tracking-[0.06em] text-graphite/75">
          Delivered April 5
        </div>
      </div>

      <div className="mt-6 grid grid-cols-3 gap-4">
        <Stat label="Revenue" value="$58,420" trend="+12%" />
        <Stat label="Expenses" value="$41,180" trend="-3%" />
        <Stat label="Net" value="$17,240" trend="+38%" positive />
      </div>

      <div className="mt-6 space-y-2">
        <Row label="Cost of goods sold" value="$22,400" />
        <Row label="Payroll" value="$14,200" />
        <Row label="Rent &amp; utilities" value="$3,800" />
        <Row label="Marketing" value="$780" />
      </div>

      <div className="mt-6 rounded-lg bg-cream p-4 text-body-sm text-graphite">
        <span className="font-medium text-aubergine">Njock&rsquo;s note:</span>{' '}
        Great month. Your net is up because payroll came in a week later than
        expected. Nothing to worry about — just heads-up for April.
      </div>
    </div>
  );
}

function Stat({
  label,
  value,
  trend,
  positive = false,
}: {
  label: string;
  value: string;
  trend: string;
  positive?: boolean;
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-[0.06em] text-graphite/75">
        {label}
      </div>
      <div className="mt-1 font-display text-[20px] text-aubergine">{value}</div>
      <div
        className={
          positive || trend.startsWith('+')
            ? 'text-[11px] text-sage'
            : 'text-[11px] text-persimmon-deep'
        }
      >
        {trend} vs last month
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between border-b border-fog/20 pb-1.5 text-body-sm text-graphite">
      <span dangerouslySetInnerHTML={{ __html: label }} />
      <span className="font-medium text-aubergine">{value}</span>
    </div>
  );
}
