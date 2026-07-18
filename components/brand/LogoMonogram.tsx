type Props = {
  variant?: 'default' | 'reversed';
  size?: number;
  className?: string;
};

const COLORS = {
  default: { fill: '#2C1E3F', dot: '#EA5A3D' },
  reversed: { fill: '#F4EAD5', dot: '#EA5A3D' },
};

export function LogoMonogram({ variant = 'default', size = 36, className }: Props) {
  const { fill, dot } = COLORS[variant];
  return (
    <svg
      viewBox="0 0 90 90"
      width={size}
      height={size}
      role="img"
      aria-label="NJ"
      className={className}
    >
      <path
        d="M0,80 L0,0 L8,0 L48,60 L48,0 L56,0 L56,80 L48,80 L8,20 L8,80 Z"
        fill={fill}
      />
      <path
        d="M68,0 L76,0 L76,62 Q76,88 52,88 L40,88 L40,80 L52,80 Q68,80 68,62 Z"
        fill={fill}
      />
      <circle cx="84" cy="6" r="5" fill={dot} />
    </svg>
  );
}
