/**
 * Real client testimonials.
 *
 * THIS FILE SHIPS EMPTY ON PURPOSE.
 *
 * The 2026-09-25 audit found no reviews or testimonials anywhere on the site,
 * and social proof is one of the clearest gaps against every competitor on
 * page 1. The component and the Review schema are both built and wired — they
 * simply render nothing while this array is empty.
 *
 * To turn social proof on: add real entries below. The section and the
 * schema appear automatically on the next build. No other file needs editing.
 *
 * RULES — these are not stylistic preferences:
 *   - Only real quotes from real clients who agreed to be quoted.
 *   - Never invent a quote, a name, a business, or a rating. Fabricated review
 *     markup is a Google manual-action risk, not a ranking shortcut.
 *   - `rating` is optional and should only be set if the client actually left
 *     that star rating somewhere you can point to (e.g. a Google review).
 *   - Do not add an aggregateRating until there are genuine Google reviews to
 *     aggregate. Self-declared aggregate ratings are a structured-data
 *     violation and Google strips them.
 */

export type Testimonial = {
  /** Client's name, as they agreed to be credited. */
  author: string;
  /** Business name + city, e.g. "Harper & Co. Landscaping, Cincinnati". */
  business?: string;
  /** The quote itself, in the client's own words. */
  body: string;
  /** Only if they left an actual star rating you can point to. */
  rating?: number;
  /** ISO date, e.g. '2026-09-14'. */
  datePublished?: string;
};

export const TESTIMONIALS: Testimonial[] = [];
