import Image from 'next/image';

/**
 * Organic blob-masked image with Lilac Mist glow behind.
 * Uses CSS `clip-path: url(#njBlobClip)` referencing an inline SVG def.
 * Falls back to an abstract portrait illustration if no `src` is passed
 * (or `src` is a broken path — next/image will just render nothing).
 */
export function BlobImage({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  return (
    <div className="relative flex h-[460px] w-full items-center justify-center">
      {/* Inline SVG defs for the clip-path (rendered but invisible) */}
      <svg
        aria-hidden="true"
        width="0"
        height="0"
        className="absolute"
      >
        <defs>
          <clipPath id="njBlobClip" clipPathUnits="objectBoundingBox">
            <path d="M0.5,0.043 C0.71,0.043 0.921,0.174 0.934,0.391 C0.947,0.587 0.842,0.739 0.658,0.87 C0.474,0.989 0.237,0.957 0.118,0.804 C-0.013,0.63 0.039,0.391 0.145,0.239 C0.237,0.109 0.342,0.043 0.5,0.043 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Lilac Mist radial glow */}
      <div
        aria-hidden="true"
        className="absolute h-[480px] w-[480px] rounded-full opacity-70"
        style={{
          background:
            'radial-gradient(circle at 45% 45%, #C4B0DC 0%, rgba(196,176,220,0) 62%)',
          filter: 'blur(20px)',
        }}
      />

      {/* The clipped image container */}
      <div
        className="relative z-10 h-[460px] w-[380px] overflow-hidden bg-blush"
        style={{ clipPath: 'url(#njBlobClip)' }}
      >
        {src ? (
          <Image
            src={src}
            alt={alt}
            fill
            priority
            sizes="380px"
            style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
          />
        ) : (
          <FallbackPortrait />
        )}
      </div>

      {/* Persimmon accent dot outside the blob */}
      <div
        aria-hidden="true"
        className="absolute z-20 h-4 w-4 rounded-full bg-persimmon"
        style={{ top: '90px', left: 'calc(50% + 155px)' }}
      />
    </div>
  );
}

function FallbackPortrait() {
  return (
    <svg
      viewBox="0 0 380 460"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="portraitBg" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EFD9C9" />
          <stop offset="100%" stopColor="#C4B0DC" />
        </linearGradient>
      </defs>
      <rect width={380} height={460} fill="url(#portraitBg)" />
      <rect x={0} y={360} width={380} height={120} fill="#2C1E3F" opacity={0.9} />
      <rect x={0} y={352} width={380} height={10} fill="#EA5A3D" />
      <path
        d="M120,460 L120,300 C120,270 150,250 190,250 C230,250 260,270 260,300 L260,460 Z"
        fill="#F4EAD5"
      />
      <path
        d="M155,255 L165,300 M225,255 L215,300"
        stroke="#EA5A3D"
        strokeWidth={4}
        strokeLinecap="round"
      />
      <path
        d="M125,300 Q100,340 105,380"
        stroke="#F4EAD5"
        strokeWidth={24}
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M255,300 Q280,340 275,380"
        stroke="#F4EAD5"
        strokeWidth={24}
        strokeLinecap="round"
        fill="none"
      />
      <rect x={175} y={215} width={30} height={45} fill="#D9A98B" />
      <ellipse cx={190} cy={185} rx={48} ry={55} fill="#D9A98B" />
      <path
        d="M142,175 C140,140 165,120 190,120 C215,120 240,140 238,175 C238,170 235,155 230,150 C220,140 205,138 190,138 C175,138 160,140 150,150 C145,155 142,170 142,175 Z"
        fill="#2C1E3F"
      />
    </svg>
  );
}
