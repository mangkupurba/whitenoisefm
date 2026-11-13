// @ts-check
import { defineConfig } from 'astro/config';

// The site's public address, used for link previews (WhatsApp, Instagram).
// Netlify fills in URL automatically; elsewhere set SITE_URL, e.g.
// SITE_URL=https://whitenoisefm.com npm run build
// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || process.env.URL || undefined,
});
