# WHITE NOISE FM — website

Astro site with a Sanity-backed archive (switched off for now).

## Everyday commands

    npm run dev      # preview at http://localhost:4321 (add `-- --host` to open it on your phone)
    npm run build    # builds the finished site into dist/

## Where things live

- `images/` — homepage photos, one folder per collection. The file name is the caption.
- `src/data/site.ts` — text and settings: homepage folder order, shop link, stockists, team (Info page), `ARCHIVE_LIVE`, `GRID_ON_TOP`.
- `public/` — header illustration, About stamp, watermark, Archive illustration, favicons and the link-preview image (`og-image.jpg`).
- `src/pages/` — one file per page. `info` is unlisted: no menu link and hidden from search.

## Going live

The host needs these settings (also in `.env`, which is not uploaded):

    PUBLIC_SANITY_PROJECT_ID=d9id18ww
    PUBLIC_SANITY_DATASET=production
    SITE_URL=https://your-domain   # for link previews; Netlify sets this automatically
