Date: 2026-09-26 14:25
Summary: Captured and uploaded 81 missing per-tool OG WebP images; rebuilt those tool pages and bumped cache to 4.79.
Visibility: people

[question]
Og 图片缺失的工具进行补充

[try to solve]
## Context
Catalog had 278 tools; only 197 local `public/og/tools/*.webp`. Missing pages fell back to the site-wide `og-image.png`.

## Process
1. Diffed catalog vs `public/og/tools` → 81 missing slugs.
2. `npm run seo:capture-og -- --base=https://onlinefreetools.org --slugs=…` (Playwright 1280×720 + watermark). Resumed after two hangs on heavy audio pages.
3. `npm run upload:r2:og` → uploaded 81 new objects to bucket `assets`.
4. Prerendered + gzip’d those 81 × 10 langs (810 HTML); `upload:r2` → `upload=810 skipped=2450`.
5. Bumped `PAGES_CACHE_VERSION` 4.78 → 4.79 and `git:deploy` so edge cache picks new `og:image` URLs.

## Solution
All 278 tools now have per-slug OG WebP on Git and CDN (`https://assets.onlinefreetools.org/og/tools/{slug}.webp`).

## Notes / boundaries
- Capture alone does not update R2 HTML; pages must be prerendered after files exist so `resolveToolOgImageUrl` embeds the CDN URL.
- Worker-only deploys do not publish `og/tools/` (`.assetsignore`); always `upload:r2:og`.

[actions]
- Added 81 files under `public/og/tools/`
- `upload:r2:og` + partial prerender/upload HTML; wrangler 4.79
