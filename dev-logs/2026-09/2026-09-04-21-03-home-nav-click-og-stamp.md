Date: 2026-09-04 21:03
Summary: Homepage top nav now matches tool pages (click to open Tools mega); slug watermarks are burned into OG WebP files instead of a CSS overlay.
Visibility: people

[question]
1、首页的菜单没有和单个slug tool页面一样，工具收缩为tools，点击下来，要完全一样。2、水印直接印在图片上

[try to solve]
## Context
After the previous pass, homepage still had an extra **where2use** item and desktop **Tools** clicks navigated to `/topics` instead of opening the mega panel. The slug watermark lived only as a CSS overlay, which did not look printed on the bitmap.

## Process
1. Set `buildHomeNavItems` = `buildToolPageNavItems` (Home → Tools mega → Tool topics → Tool types → Dev Logs). Mega tool labels use `i18nKey` like tool pages.
2. In both `scripts/site/layout.mjs` and `src/pages/site/layout.ts`, Tools click always `preventDefault` and toggles `.is-open`; outside click closes. Desktop hover still opens.
3. Added `scripts/seo/stamp-og-watermark.mjs`: composite a 1280×720 SVG (dark scrim + centered slug with `-` → spaces) via sharp. Capture pipeline stamps after screenshot. Ran it on all 197 existing `public/og/tools/*.webp`.
4. Removed the HTML/CSS overlay span. Page logo still CSS-scales the same file; pixels now include the watermark.
5. Rebuilt all-language homes and prerendered tool pages. Clicking Tools on `/` expands the same two-pane panel as a slug page.

## Root cause / analysis
Home had a separate taxonomy list. Desktop mega click was a no-op so the `<a href="/topics">` won. CSS overlays sit above the image and vanish if the overlay is missed; burning into WebP is what “printed on the image” means.

## Solution
Same chrome items and click-to-open on home and tool pages. Watermark is in the WebP (and thus in `og:image` / JSON-LD after CDN upload).

## Notes / boundaries
- Re-running `seo:stamp-og-watermark` on already-stamped files double-prints; refresh with `seo:capture-og --force`.
- Live/CDN still serves old objects until `npm run upload:r2:og`. Page `<img>` URLs stay on `assets.onlinefreetools.org`.

[actions]
- scripts/site/nav.mjs, home.mjs, layout.mjs; src/pages/site/layout.ts, nav.ts, ogImage.ts; public/styles/site.css; scripts/seo/stamp-og-watermark.mjs; capture-tool-og-images.mjs; package.json script; stamped public/og/tools/*.webp; rebuilt homes + prerender
