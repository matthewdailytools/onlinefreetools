Date: 2026-09-04 20:39
Summary: Tool-page OG screenshots now display as a small logo before the H1 with a centered slug watermark; source 1280×720 files are unchanged.
Visibility: people

[question]
截图在工具页所占的区域太大了，且和页面看起来一致，对用户不友好。1、不改变图片大小，控制显示缩小，作为一个logo图片显示在H1前面。2、图片中间显示大水印，显示字符为slug（替换‘-’符号为空格）

[try to solve]
## Context
Per-slug SERP/OG screenshots (`public/og/tools/{slug}.webp`, served from `https://assets.onlinefreetools.org/og/tools/…`) were injected as a full-width `<figure class="tool-preview-figure mb-4">` after `.tool-lead`. On a tool page that 1280×720 capture looks like a second copy of the UI and crowds the first screen.

## Process
1. Confirmed injection lived in `src/pages/site/layout.ts` via `renderToolPreferredImageHtml` (`src/pages/site/ogImage.ts`). `organize-pdf` also inlined the same full-width figure.
2. Changed the figure to a CSS-scaled logo (`width/height` attributes stay 1280×720; display box ~135×76, 16:9, `object-fit: cover`). Layout now wraps the first `<h1>` in `.tool-h1-with-logo` so the logo sits immediately before the title.
3. Overlay `<span class="tool-preview-watermark">` with `slug.replace(/-/g, ' ')` (e.g. `organize-pdf` → `organize pdf`), plus a dark scrim so the thumb cannot be mistaken for the live form.
4. Removed the duplicate figure from `organizePdfPage.ts`. OG capture script hides `.tool-preview-figure` so future recaptures do not nest the logo.
5. Prerendered all 197×10 tool pages. Browser check: logo 135×76, natural image still 1280×720, watermark text matches slug-with-spaces, same row as H1.

## Root cause / analysis
The visible `<img>` reused the SERP bitmap at `w-100`, so display size followed the content column (~960px). Users do not need a second full screenshot of the page they are already on. Scaling in CSS (not re-encoding) keeps OG/JSON-LD/`og:image` on the original asset.

## Solution
| Piece | Behavior |
|---|---|
| Source files | Unchanged 1280×720 WebP |
| Display | `.tool-preview-logo` ~4.75rem tall, before H1 |
| Watermark | Centered slug, hyphens → spaces, `aria-hidden` |
| `og:image` / JSON-LD | Still the CDN URL |

Local wrangler Cache API / R2 may still serve old HTML until `restart:dev` or `upload:r2:local`.

## Notes / boundaries
- Watermark is a CSS overlay, not baked into the bitmap (so recapture stays a clean UI shot).
- Tools without a per-slug OG file get no logo (fallback `og-image.png` is not shown in-page).

[actions]
- src/pages/site/ogImage.ts, src/pages/site/layout.ts, src/pages/organizePdfPage.ts, public/styles/site.css, scripts/seo/capture-tool-og-images.mjs
- `node scripts/prerender-tool-pages.mjs --full` then gzip-pages
