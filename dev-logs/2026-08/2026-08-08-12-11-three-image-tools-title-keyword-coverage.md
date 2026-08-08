Date: 2026-08-08 12:11
Summary: Applied title/description/search-keyword coverage optimization (steps 2+4) to color-from-image, image-merge, and image-overlay across 10 locales.

[question]
Apply the mandatory "Title / description / search-keyword coverage optimization" pass (tool-i18n-localization.mdc steps 2+4) to these three tools: color-from-image, image-merge, image-overlay — all 10 locales, home i18n.mjs, locale briefs, lint:seo green.

[try to solve]
Completed retrieval-coverage optimization for all three image tools in 10 locales:

**color-from-image**
- en: `Extract Colors from Image — Local Palette` → `Extract Colors from Image — Palette & Click Pick`
- zh: `图片主色提取 — 本地色板` → `图片主色提取 — 色板与点击取色`
- Descriptions lead with dominant color / palette / click pick; home `_desc` mentions click pick + palette.

**image-merge**
- en: `Merge Images — Horizontal, Vertical & Grid, Locally` → `Merge Images — Combine Photos into One Collage`
- zh: `多图拼接 — 横排、竖排与网格，本地完成` → `多图拼接 — 合成一张拼图，本地完成`
- Removed parameter-enum H1; collage/拼图 early in description; IG/FB sizes out of H1.

**image-overlay**
- en: `Overlay Images — Opacity, Position & Blend, Locally` → `Overlay Images — Put a Logo on a Photo`
- zh: `图层叠加 — 透明度、位置与混合，本地完成` → `图片叠加 Logo — 透明定位，本地完成`
- Logo/PNG watermark early; vs merge and text watermark in description; no bare "Watermark" H1.

Other langs rewritten per locale (es/fr/de/ja/ru/ar/pt/id). Updated `03-locale-briefs.md` with 1b/2b rows and 「检索覆盖已优化」; synced `02-tool-info.md` Title (en). `npm run lint:seo` passes.

[actions]
- src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts — title + description for three tools
- scripts/site/i18n.mjs — home _title/_desc all 10 langs
- work-tasks/{color-from-image,image-merge,image-overlay}/03-locale-briefs.md
- work-tasks/{color-from-image,image-merge,image-overlay}/02-tool-info.md
