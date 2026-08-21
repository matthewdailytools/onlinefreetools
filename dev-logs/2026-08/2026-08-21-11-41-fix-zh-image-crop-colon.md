Date: 2026-08-21 11:41
Summary: Force Size presets/Output size to ASCII colon; bust local HTML cache.

[question]
http://localhost:8787/zh/tools/image-crop 还是问号

[try to solve]
根因更可能是：① 先前 `×`/`&times;` 在部分字体子集下显示成缺字/`?`；② 本地 Workers Cache（PAGES_CACHE_VERSION=4.1）仍喂旧 HTML。已将 Size presets、Output size 分隔符改为 ASCII `:`；十语文案中的 `×` 一并改为 `:`；`PAGES_CACHE_VERSION` → 4.2；重新 prerender + upload:r2:local；重启 wrangler。本地验证 zh/en 已为 `512:512`。

[actions]
- src/pages/imageCropPage.ts（预设与输出分隔符用 `:`）
- src/site/i18n/tools/image-crop/*.ts（×→:）
- wrangler.jsonc PAGES_CACHE_VERSION 4.2
- merge/prerender/gzip/upload:r2:local；wrangler restart
