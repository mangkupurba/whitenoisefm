// Archive data from Sanity. Not used yet: the Archive page shows "coming soon"
// until ARCHIVE_LIVE in src/data/site.ts is set to true.
import { client } from './sanity';

export type ArchiveEntry = {
  _id: string;
  title: string;
  slug: string;
  category: 'collections' | 'runway' | 'objects-installations' | 'events';
  year: number;
  date?: string;
  location?: string;
  coverUrl?: string;
  coverAlt?: string;
};

export const ARCHIVE_GROUPS = [
  { value: 'collections', label: 'Collections' },
  { value: 'runway', label: 'Runway' },
  { value: 'objects-installations', label: 'Objects / Installations' },
  { value: 'events', label: 'Events' },
] as const;

export async function getArchiveEntries(): Promise<ArchiveEntry[]> {
  return client.fetch(`*[_type == "archiveEntry" && defined(slug.current)] | order(year desc, date desc) {
    _id, title, "slug": slug.current, category, year, date, location,
    "coverUrl": coverImage.asset->url, "coverAlt": coverImage.alt
  }`);
}
