/**
 * Canonical list of the city landing pages.
 *
 * `ALL_CITIES` in lib/city-data.ts only covers the six data-driven cities —
 * Cincinnati predates that config and is built from bespoke components. Nav,
 * footer and sitemap all need the full set of seven, so it lives here.
 *
 * Adding a city: add it here AND give it an entry in lib/city-tax-guides.ts.
 * A location page without real local tax content is the doorway-page pattern
 * the 2026-09-25 audit flagged — do not ship one.
 */
export type LocationLink = {
  slug: string;
  name: string;
  /** Used in the footer so the links are not seven identical city names. */
  region: string;
};

export const LOCATIONS: LocationLink[] = [
  { slug: 'cincinnati', name: 'Cincinnati', region: 'OH' },
  { slug: 'cleveland', name: 'Cleveland', region: 'OH' },
  { slug: 'chicago', name: 'Chicago', region: 'IL' },
  { slug: 'dallas', name: 'Dallas', region: 'TX' },
  { slug: 'san-diego', name: 'San Diego', region: 'CA' },
  { slug: 'raleigh', name: 'Raleigh', region: 'NC' },
  { slug: 'charlotte', name: 'Charlotte', region: 'NC' },
];
