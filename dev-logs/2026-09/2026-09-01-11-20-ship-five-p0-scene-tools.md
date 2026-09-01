Date: 2026-09-01 11:20
Summary: Shipped five P0 scene tools with verbatim long-tail H1s, ten-locale copy, and coverage 0b/2/4; site build and SEO lint passed.

[question]
按token效率优化模式依次重新立项和实现工具：create-zip-file，amazon-main-image-size，iphone-app-store-screenshot，apple-touch-icon，open-graph-image-size；

[try to solve]
Five P0 slugs were briefed and implemented in token-efficiency A→B→C→D order. Title/H1 is the locked long-tail phrase (layout still appends `| Brand`); pixels, privacy, and examples stay in description.

- `create-zip-file` — H1 **Create zip file**. Multi-file ZIP via fflate `zipSync`; Gzip is a single-file secondary mode. Sample packs `notes.txt`, `photo.png`, `docs/readme.md`.
- `amazon-main-image-size` — H1 **Amazon main image size**. Default 2000×2000 JPEG on RGB 255 white, optional 85% fit, 1000px zoom chip. Not Seller Central review.
- `iphone-app-store-screenshot` — H1 **iPhone 6.9 screenshot size**. Cover-fill 1320×2868 / 1290×2796 / 1260×2736; ZIP of all three. 6.7 is FAQ-only, not H1.
- `apple-touch-icon` — H1 **Apple-touch-icon 180×180**. Opaque contain PNG; ZIP chips 32 / 192 / 512. Favicon generator is not the H1.
- `open-graph-image-size` — H1 **Open Graph image size**. Cover-fill 1200×630 (chip 1200×627). Short “og image” is not the title; tag debugging stays on `open-graph-preview`.

Gates: `coverage:gate` 0b/2/4 green per slug; `lint:tool-page` (source + `--require-html`) green; `build:site` + `lint:seo` green on the last verify. Isolation fails in this session because five `work-tasks/` trees plus pre-existing untracked docs sit in one working tree — other tool shards were not edited.

[actions]
- Added catalog shards, `*Page.ts`, icons, and ten-locale i18n under each slug
- Updated `work-tasks/{slug}/02` and `03` (0b/1b/2b rows)
- README Chinese and English list entries
- `npm run build:site` via `verify:tool -- --slug=open-graph-image-size`
