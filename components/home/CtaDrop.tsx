import { Button } from '@/components/design-system/Button';
import { LilacGlow } from '@/components/signature/LilacGlow';

export function CtaDrop() {
  return (
    <section className="relative overflow-hidden bg-aubergine">
      <LilacGlow
        className="right-[-6rem] top-[-6rem] h-[24rem] w-[24rem]"
        intensity={0.22}
      />
      <div className="container-content relative z-10 py-20 text-center">
        <h2 className="font-display text-h1 leading-[1.1] tracking-[-0.02em] text-ivory">
          Ready to hand over the shoebox?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-body-lg text-lilac/90">
          15 minutes. No pitch. Just a look at where you are.
        </p>
        <div className="mt-8">
          <Button href="/contact" variant="primary" showArrow>
            Book a free 15-min call
          </Button>
        </div>
      </div>
    </section>
  );
}
