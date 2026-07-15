import { Card } from '@/components/design-system/Card';

/**
 * Radical honesty — the "what we don't do" / "what costs extra" strip.
 * Building trust by naming the things others hide.
 */
export function HonestyStrip() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      <Card>
        <div className="section-eyebrow mb-3">What we don&rsquo;t charge extra for</div>
        <p className="text-body text-graphite">
          Phone calls. Emails. Quick questions. Adding a category to your books.
          Explaining a form. If it takes us less than 15 minutes, it&rsquo;s
          included. Always.
        </p>
      </Card>
      <Card>
        <div className="section-eyebrow mb-3">What costs extra (and why)</div>
        <ul className="space-y-2 text-body text-graphite">
          <li>
            <strong className="font-medium text-aubergine">
              Multi-state returns:
            </strong>{' '}
            +$75 per state.
          </li>
          <li>
            <strong className="font-medium text-aubergine">
              Prior-year cleanup:
            </strong>{' '}
            one-time fee, quoted upfront based on volume.
          </li>
          <li>
            <strong className="font-medium text-aubergine">
              Special situations
            </strong>{' '}
            (crypto, K-1s, S-corp election): always quoted before we start, never after.
          </li>
        </ul>
      </Card>
    </div>
  );
}
