Date: 2026-08-08 12:21
Summary: Re-ran title/description/keyword coverage optimization for color-from-image, image-merge, and image-overlay per the new localization steps 2+4.

[question]
根据最新规则重跑3个工具

[try to solve]
Applied post-draft search-coverage optimization across ten locales, home i18n, and locale briefs:

- color-from-image → Palette & Click Pick (zh: palette and click pick); dominant/picker in description
- image-merge → Combine into One Collage (zh: combine into one collage); removed H/V/grid enum from H1
- image-overlay → Put a Logo on a Photo (zh: overlay logo on image); removed opacity/position/blend enum from H1

Updated README one-liners; `03` marked “search coverage optimized” with 1b/2b rows; `lint:seo` OK.

[actions]
- Updated `src/site/i18n/*.ts`, `scripts/site/i18n.mjs`, `README.md`
- Updated `work-tasks/{color-from-image,image-merge,image-overlay}/02` and `03`
- Ran `npm run lint:seo`
