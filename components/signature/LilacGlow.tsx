import { cn } from '@/lib/utils';

/**
 * Ambient Lilac Mist glow — used as decorative background in Aubergine sections.
 * Positioned absolutely; parent must be `relative overflow-hidden`.
 */
export function LilacGlow({
  className,
  intensity = 0.18,
  color = 'lilac',
}: {
  className?: string;
  intensity?: number;
  color?: 'lilac' | 'persimmon';
}) {
  const c = color === 'lilac' ? '#C4B0DC' : '#EA5A3D';
  return (
    <div
      aria-hidden="true"
      className={cn('pointer-events-none absolute rounded-full', className)}
      style={{
        background: `radial-gradient(circle, ${c} 0%, transparent 60%)`,
        opacity: intensity,
        filter: 'blur(20px)',
      }}
    />
  );
}
