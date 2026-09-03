Date: 2026-09-03 19:55
Summary: Extended bulk product-photo compress with JPEG/PNG/WebP output, size-rule presets, and format-aware H1 titles.
Visibility: people

[question]
http://localhost:8788/zh/tools/bulk-compress-product-photos 增加处理和输出图片的格式支持，以及增加多种大小规则的图片输出选择
标题增加支持图片格式

[try to solve]
## Context
The shipped P0 page only offered JPEG/WebP output and a single longest-edge resize control. Operators asked for broader input/output formats, multiple size rules (not only longest edge), and H1 copy that names the supported output formats.

## Process
1. Aligned UI with `image-compress`: output select JPEG (default) / WebP / PNG; accept list includes JPEG, PNG, WebP, GIF, BMP, AVIF; chips for 100 KB / 200 KB / .jpg / JPEG / WebP / PNG.
2. Added a size-rule select (`max_edge` / `max_width` / `max_height`) plus a shared pixel field, and a preset dropdown (listing HD/standard, email, social, thumb, tiny; edge-only and KB-only groups). Presets that aim for a KB target switch away from PNG because quality search does not apply to lossless PNG.
3. Updated encode path: PNG skips target-KB binary search and disables the quality slider; JPEG still mattes a background; WebP support is probed and falls back to JPEG when needed.
4. Wrote en/zh UI + How/Rules copy for the new controls; appended matching UI keys and format-aware titles to the other eight locales; `merge:tools` + `prerender-tool-pages --slug=bulk-compress-product-photos`.
5. On request, changed H1/`<title>` across ten locales to name JPEG / PNG / WebP (zh: 「支持 JPEG / PNG / WebP」).

## Root cause / analysis
Longest-edge alone does not cover listing thumbs that constrain width or height. Omitting PNG from the output menu and formats from the H1 made the page look narrower than the single-file compress neighbor, even though decode already accepted common photo types.

## Solution
- Page: `src/pages/bulkCompressProductPhotosPage.ts` — formats, size rules, presets, PNG/WebP/JPEG chips.
- i18n: ten shards under `src/site/i18n/tools/bulk-compress-product-photos/`; zh H1 **批量压缩商品图（支持 JPEG / PNG / WebP）**; en H1 **Bulk compress product photos (JPEG, PNG, WebP)**.
- Spec: `work-tasks/bulk-compress-product-photos/02-tool-info.md` title/coverage notes updated.
- Verified prerendered zh HTML shows the new H1, preset select, size-rule select, and PNG option.

## Notes / boundaries
- Default output remains JPEG for listing caps; PNG is available but warns that photos rarely hit KB targets.
- Transparent-must-stay-PNG and convert-to-JPG jobs stay on sibling bulk slugs.
- Local `start:dev` on :8788 may need a restart to pick up Worker/i18n changes if Cache API still serves an older page.

[actions]
- Extended `bulkCompressProductPhotosPage.ts` formats + size rules/presets
- Updated ten-locale titles and new UI keys; touched catalog; merge + prerender this slug
- Updated `02-tool-info.md` Title / coverage H1 notes
