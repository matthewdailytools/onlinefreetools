Date: 2026-01-11 12:27
Summary: Updated SEO defaults and generated pages to use the apex (non-www) domain.

[question]
更改seo和seo规则：不使用www域名

[try to solve]
- Updated the repo SEO defaults to require apex (non-www) URLs for canonical, `og:url`, and sitemap entries.
- Switched the site generator defaults from `https://www.onlinefreetools.org` to `https://onlinefreetools.org` (including `og-image.png`).
- Updated the README live domain to the apex domain.
- Updated the static tool page `public/tools/markdown-to-html.html` so `canonical`, `og:url`, and `og:image` no longer use `www`.
- Removed legacy outputs that still contained `www` (`public/en/` and `public/dev-logs/index.html`).
- Rebuilt the site and confirmed no `www` remains in canonical/`og:url` tags under `public/**/*.html`.

[actions]
- Updated: `.github/copilot-instructions.md`
- Updated: `scripts/site/config.mjs`
- Updated: `README.md`
- Updated: `public/tools/markdown-to-html.html`
- Removed: `public/en/`
- Removed: `public/dev-logs/index.html`
- Ran: `npm run build:logs`
- Ran: `SITE_LANGS=zh,en SITE_DEFAULT_LANG=en npm run build:site`
