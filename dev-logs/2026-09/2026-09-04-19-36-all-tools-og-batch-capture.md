Date: 2026-09-04 19:36
Summary: Batch-captured OG screenshots for all 197 tools and wired pages to assets CDN URLs via layout/JSON-LD.
Visibility: people

[question]
进行自动批量截图和在页面上设置链接

[try to solve]
## Context
PDF tools already had per-slug `public/og/tools/*.webp`. The other ~160 tools still fell back to the generic site OG card. Pages already resolve `og:image` / visible `<figure>` / JSON-LD from disk assets (and publish URLs under `https://assets.onlinefreetools.org`).

## Process
1. Extended capture CLI with `--all`.
2. Started local wrangler on `:8788`, ran `npm run seo:capture-og -- --base=http://127.0.0.1:8788 --all`.
3. Result: `{ ok: 160, skip: 37, fail: 0 }` → **197/197** webp files.
4. Prerendered all tool pages + gzip; spot-checked `og:image`, `twitter:image`, `tool-preview-figure`, and JSON-LD image URLs.
5. Uploaded bitmaps to R2 bucket `assets` (`npm run upload:r2:og:full`) so CDN URLs return 200.

## Root cause / analysis
Wiring was already centralized; the gap was missing screenshot files (and CDN sync). GitHub deploy ignores `og/tools/` via `.assetsignore`, so R2 upload is required for live image URLs.

## Solution
| Step | Command / path |
|---|---|
| Capture | `npm run seo:capture-og -- --base=http://127.0.0.1:8788 --all` |
| Page links | `layout.ts` + `buildToolJsonLd` auto-use `resolveToolOgImageUrl` |
| Public URL | `https://assets.onlinefreetools.org/og/tools/{slug}.webp` |
| CDN sync | `npm run upload:r2:og` / `:full` |

## Notes / boundaries
- SERP thumbnails remain best-effort, not guaranteed.
- HTML must be deployed (GitHub → CF) for crawlers to see new meta; images are already on the assets domain after upload.
- Re-capture one slug: `--slugs=... --force` then `upload:r2:og`.

[actions]
- Captured 160 new OG webps (197 total); prerender + gzip tool HTML
- Ran upload:r2:og:full; capture script supports --all
