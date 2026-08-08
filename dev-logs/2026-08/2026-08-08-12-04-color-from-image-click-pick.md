Date: 2026-08-08 12:04
Summary: Added click-to-pick region color (~7×7 source average) on the color-from-image preview, with ten-locale copy updates.

[question]
图片主色提取，增加点击图片获取点击区域颜色的能力

[try to solve]
`color-from-image` now keeps a full-res pick buffer; clicking the preview averages opaque pixels in about a 7×7 window, shows HEX/RGB/HSL with a marker, and stays separate from the median-cut palette. Updated How/Rules/FAQ/Example and ten-locale keys (`pick_*`, `palette_label`, `rules_item_5`). `lint:seo` OK.

[actions]
- Updated `src/pages/colorFromImagePage.ts`
- Updated `src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Updated `work-tasks/color-from-image/02-tool-info.md`
- Ran `npm run lint:seo`
