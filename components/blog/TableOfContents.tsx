import Link from 'next/link';

type TocItem = { id: string; label: string };

export function TableOfContents({ items }: { items: TocItem[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="mb-12 rounded-card border border-aubergine/10 bg-ivory p-6"
    >
      <div className="section-eyebrow mb-3">In this post</div>
      <ol className="space-y-2 text-body-sm text-graphite">
        {items.map((item, i) => (
          <li key={item.id}>
            <Link
              href={`#${item.id}`}
              className="inline-flex gap-3 hover:text-persimmon"
            >
              <span className="w-5 shrink-0 text-right text-aubergine/50">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
