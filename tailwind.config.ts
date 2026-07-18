import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        aubergine: '#2C1E3F',
        persimmon: '#EA5A3D',
        'persimmon-deep': '#A83A16',
        'persimmon-hover': '#D64A2E',
        lilac: '#C4B0DC',
        cream: '#F4EAD5',
        ivory: '#FDFAF2',
        graphite: '#221E2E',
        sage: '#758F73',
        fog: '#B4AFC0',
        blush: '#EFD9C9',
        warning: '#B44E2A',
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-caveat)', 'cursive'],
      },
      fontSize: {
        display: ['64px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-mobile': ['44px', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1: ['44px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        h2: ['34px', { lineHeight: '1.15', letterSpacing: '-0.015em' }],
        h3: ['24px', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'body-lg': ['18px', { lineHeight: '1.55' }],
        body: ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.55' }],
        label: ['13px', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      borderRadius: {
        DEFAULT: '10px',
        card: '16px',
        modal: '20px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(44,30,63,0.04), 0 12px 32px rgba(44,30,63,0.05)',
        card: '0 1px 2px rgba(44,30,63,0.04), 0 8px 24px rgba(44,30,63,0.05)',
        elevated: '0 1px 2px rgba(44,30,63,0.05), 0 20px 40px rgba(44,30,63,0.10)',
        persimmon: '0 8px 20px rgba(234,90,61,0.25)',
        'persimmon-hover': '0 12px 28px rgba(234,90,61,0.35)',
      },
      maxWidth: {
        prose: '672px',
        content: '1152px',
        wide: '1280px',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
