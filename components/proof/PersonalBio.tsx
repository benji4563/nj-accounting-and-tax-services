import Image from 'next/image';
import { Card } from '@/components/design-system/Card';

/**
 * "Meet Njock" — the personal bio component.
 * Uses a placeholder headshot if /public/njock.jpg doesn't exist yet.
 */
export function PersonalBio({ photoSrc }: { photoSrc?: string }) {
  return (
    <Card className="grid grid-cols-1 items-center gap-8 p-10 md:grid-cols-[200px_1fr] md:gap-10">
      <div className="relative mx-auto h-[200px] w-[200px] shrink-0 overflow-hidden rounded-full bg-blush">
        {photoSrc ? (
          <Image
            src={photoSrc}
            alt="Njock Simon Ndum, Co-founder and CEO of NJ's Accounting and Tax Services"
            fill
            sizes="200px"
            style={{ objectFit: 'cover', objectPosition: 'center top' }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-display text-[48px] text-aubergine">
            NJ
          </div>
        )}
      </div>
      <div>
        <div className="section-eyebrow mb-2">The person doing your books</div>
        <h3 className="font-display text-h3 text-aubergine">
          Hi, I&rsquo;m Njock.
        </h3>
        <p className="mt-3 text-body-lg text-graphite">
          I co-founded NJ&rsquo;s Accounting and Tax Services because small
          businesses deserve an accountant who answers the email. I&rsquo;m
          QuickBooks-certified, working on my CFO certification, and I&rsquo;ve
          spent enough years doing this to know what a bad quarter feels like.
        </p>
        <p className="mt-3 text-body text-graphite/80">
          When you email us, I&rsquo;m the one who answers. Not a
          receptionist, not a bot, not a junior.
        </p>
      </div>
    </Card>
  );
}
