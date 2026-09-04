Date: 2026-09-04 07:59
Summary: Added per-slug SERP/OG images for all PDF tools (37) with centralized layout/JSON-LD wiring matching the organize-pdf pilot.
Visibility: people

[question]
检查各个工具页面的seo图片设置，如果没有，仿照”organize-pdf“ 创建图片和增加seo/GEO图片元素，让搜索结果有可能展现图片

[try to solve]
## Context
Only `organize-pdf` had a dedicated `public/og/tools/{slug}.webp` plus visible `<figure>`, `og:image` / `twitter:image`, and JSON-LD `primaryImageOfPage` / `WebApplication.image`. Other PDF tools still used the generic site `og-image.png`, which Search treats as a weak preferred-image signal.

## Process
1. Audited assets: `public/og/tools/` contained only `organize-pdf.webp`.
2. Centralized wiring (so we do not hand-edit ~30 page files):
   - `layout.ts`: resolve `og:image` / `twitter:image` via `resolveToolOgImageUrl(slug)`; inject `max-image-preview:large` on tool pages; auto-insert visible `<figure class="tool-preview-figure">` when a per-slug asset exists (skip if already present).
   - `toolContent.ts` `buildToolJsonLd`: auto-fill `image` + `primaryImageOfPage` when the asset exists.
   - `ogImage.ts`: added `renderToolPreferredImageHtml` / path helper.
3. Added `scripts/seo/capture-tool-og-images.mjs` (Playwright + system Chrome + sharp → 1280×720 WebP) and npm script `seo:capture-og`.
4. Captured UI screenshots against local `http://127.0.0.1:8788` for all `category=pdf` tools plus `images-to-pdf`, `pdf-to-jpg`, `pdf-page-to-image-sizes` (37 total; kept existing organize-pdf asset).
5. Prerendered tool HTML and gzipped `_pages`; spot-checked meta + JSON-LD + figure.

## Root cause / analysis
Generic site OG cards are valid for social fallback but are not page-representative. Google/Bing preferred-image guidance wants a real UI (or equivalent) image ≥1200px, the same absolute URL in og/twitter/schema, and a matching visible `<img>` — the organize-pdf pilot already proved that path.

## Solution
| Signal | Behavior when `public/og/tools/{slug}.webp` exists |
|---|---|
| `og:image` / `twitter:image` | `https://onlinefreetools.org/og/tools/{slug}.webp` |
| Visible `<figure>` | Injected after `.tool-lead` (or page-local figure for organize-pdf) |
| JSON-LD | `WebPage.primaryImageOfPage` + `WebApplication.image` |
| Robots | `max-image-preview:large` on tool pages |

Capture: `npm run seo:capture-og -- --base=http://127.0.0.1:8788 --category=pdf`

## Notes / boundaries
- SERP thumbnails are **not guaranteed**; this only improves eligibility.
- Non-PDF tools still fall back to `/og-image.png` until assets are captured; reuse the same script with `--category=` or `--slugs=`.
- Screenshots are English UI only (ten locales share one asset), per the SERP image plan.
- Requires deploy for production crawlers to see new images/meta.

[actions]
- Updated `src/pages/site/ogImage.ts`, `layout.ts`, `toolContent.ts`
- Added `scripts/seo/capture-tool-og-images.mjs`, `seo:capture-og` script, `playwright-core` devDependency
- Added 36 new `public/og/tools/*.webp` (37 with organize-pdf)
- Prerendered + gzipped tool pages
