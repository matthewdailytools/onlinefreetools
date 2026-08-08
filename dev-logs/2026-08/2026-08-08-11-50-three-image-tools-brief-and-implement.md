Date: 2026-08-08 11:50
Summary: Briefed and shipped color-from-image, image-merge, and image-overlay in order (work-tasks → pages → ten-locale i18n → lint/build).

[question]
主色提取 / 多图拼接 / 图层叠加 — 立项后按序实现

Implement the plan as specified, it is attached for your reference. Do NOT edit the plan file itself.

To-do's from the plan have already been created. Do not create them again. Mark them as in_progress as you work, starting with the first one. Don't stop until you have completed all the to-dos.

[try to solve]
Completed stage A (work-tasks briefs to ready) then stage B (implementation) for three tools in order:

1. `color-from-image` — local median-cut palette (2–12 colors), copy HEX/RGB/HSL; related gradient + crop.
2. `image-merge` — horizontal/vertical/grid merge with gap/background, IG 1080² and FB 1200×630 presets; related crop/compress/overlay.
3. `image-overlay` — base + overlay with opacity, position, scale, blend modes; related merge + crop.

Each tool: catalog + registerToolPage + Page.ts + icon SVG + ten-locale i18n + home i18n.mjs + README. `npm run lint:seo` OK; `npm run build:site` wrote sitemap including the new URLs.

[actions]
- Created work-tasks/{color-from-image,image-merge,image-overlay}/00–03
- Added src/pages/{colorFromImage,imageMerge,imageOverlay}Page.ts
- Updated src/index.ts, src/site/tool-catalog.json, src/site/i18n/*.ts, scripts/site/i18n.mjs, README.md, public/icons/tools/*.svg
- Ran npm run lint:seo && npm run build:site
