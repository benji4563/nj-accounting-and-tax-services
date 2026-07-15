import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'tertiary';

type BaseProps = {
  children: React.ReactNode;
  variant?: Variant;
  href?: string;
  showArrow?: boolean;
  className?: string;
};

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-persimmon text-ivory shadow-persimmon hover:shadow-persimmon-hover hover:-translate-y-0.5 hover:bg-persimmon-hover',
  secondary:
    'bg-transparent text-aubergine border-[1.5px] border-aubergine hover:bg-aubergine hover:text-ivory',
  tertiary:
    'text-aubergine border-b-[1.5px] border-aubergine pb-0.5 hover:text-persimmon hover:border-persimmon',
};

export function Button({
  children,
  variant = 'primary',
  href,
  showArrow = false,
  className,
}: BaseProps) {
  const base =
    variant === 'tertiary'
      ? 'inline-flex items-center gap-1.5 font-medium text-body-sm transition-all duration-200 ease-out'
      : 'inline-flex items-center gap-2 rounded font-medium text-body-sm px-[26px] py-[14px] transition-all duration-200 ease-out';

  const classes = cn(base, variantClasses[variant], className);

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight size={16} strokeWidth={2} />}
    </>
  );

  if (href) {
    const isExternal = href.startsWith('http');
    return isExternal ? (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes}>
      {content}
    </button>
  );
}
