import { cn } from '@/lib/utils';

export function Card({
  children,
  className,
  interactive = false,
  variant = 'ivory',
}: {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  variant?: 'ivory' | 'blush';
}) {
  return (
    <div
      className={cn(
        'rounded-card p-8 shadow-card',
        variant === 'ivory' ? 'bg-ivory' : 'bg-blush',
        interactive &&
          'transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-elevated',
        className
      )}
    >
      {children}
    </div>
  );
}
