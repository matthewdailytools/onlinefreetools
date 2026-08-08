Date: 2026-08-08 11:37
Summary: Implemented image-merge tool with ten-locale i18n and SEO lint pass.

[question]
Implement the `image-merge` tool following color-from-image/image-exif patterns; register catalog, icon, ten locales, home i18n, README, work-tasks status; run lint:seo.

[try to solve]
Created `src/pages/imageMergePage.ts` with multi-file drag-drop, reorder, horizontal/vertical/grid layouts, gap/background/fit, JPEG/WebP/PNG export, IG/FB size presets, sample loader, and local-only warnings. Registered in `src/index.ts`, added `tool-catalog.json` entry, SVG icon, full `tool_image_merge_*` keys in all ten locale files plus `scripts/site/i18n.mjs` home strings, updated README (zh/en), set work-tasks statuses to implemented/i18n-done. `npm run lint:seo` passed.

[actions]
- src/pages/imageMergePage.ts (new)
- src/index.ts, src/site/tool-catalog.json
- public/icons/tools/image-merge.svg
- src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- scripts/site/i18n.mjs, README.md
- work-tasks/image-merge/02-tool-info.md, 03-locale-briefs.md
