import { cn } from '@/lib/utils';

type Background = 'cream' | 'ivory' | 'blush' | 'aubergine';

const bgClasses: Record<Background, string> = {
  cream: 'bg-cream',
  ivory: 'bg-ivory',
  blush: 'bg-blush',
  aubergine: 'bg-aubergine text-ivory',
};

export function Section({
  children,
  background = 'cream',
  className,
  id,
}: {
  children: React.ReactNode;
  background?: Background;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cn('section', bgClasses[background], className)}>
      <div className="container-content">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  center = true,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <header className={cn('mb-14', center && 'text-center', className)}>
      {eyebrow && <div className="section-eyebrow mb-3">{eyebrow}</div>}
      <h2 className="font-display text-h2 md:text-h2 text-aubergine">{title}</h2>
    </header>
  );
}
