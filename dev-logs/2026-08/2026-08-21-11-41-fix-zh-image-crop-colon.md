Date: 2026-08-21 11:41
Summary: Force Size presets/Output size to ASCII colon; bust local HTML cache.

[question]
http://localhost:8787/zh/tools/image-crop 还是问号

[try to solve]
Likely causes: (1) earlier `×` / `&times;` rendered as missing glyphs / `?` under some font subsets; (2) local Workers Cache (`PAGES_CACHE_VERSION=4.1`) still serving stale HTML. Separators for Size presets and Output size were switched to ASCII `:`; `×` in all ten locale copy files was changed to `:` as well; `PAGES_CACHE_VERSION` → 4.2; then re-prerender + `upload:r2:local` and restart wrangler. Local zh/en now show `512:512`.

[actions]
- src/pages/imageCropPage.ts (preset and output separators use `:`)
- src/site/i18n/tools/image-crop/*.ts (×→:)
- wrangler.jsonc PAGES_CACHE_VERSION 4.2
- merge/prerender/gzip/upload:r2:local; wrangler restart
