Date: 2026-08-07 16:03
Summary: Created image-optimizer locale briefs (briefs-ready) and inserted ten-locale i18n keys after image-compress.

[question]
You are helping implement the image-optimizer tool for onlinefreetools (Cloudflare Pages site).

Create TWO files by writing their full contents:

## 1) `work-tasks/image-optimizer/03-locale-briefs.md`
Status: `briefs-ready`. Slug: `image-optimizer`. Mother tongue: en.
Fill briefs for: en, zh, es, ar, pt, id, fr, ja, ru, de.
Search intent (NOT "advanced codec"): image optimizer / 图片优化; differentiate from image-compress.
Include shared ban-word checklist (unchecked), per-locale fields, round checkboxes unchecked.

## 2) Provide FULL en + 9 locale TypeScript property blocks with prefix `tool_image_optimizer_`, preferring direct write into `src/site/i18n/{lang}.ts` after image-compress / before image-crop.

[try to solve]
Wrote `work-tasks/image-optimizer/03-locale-briefs.md` (status `briefs-ready`) with ten-locale briefs: search terms, outcome-oriented Title/H1, short button labels, SERP snippets; shared ban-word list and round checkboxes left unchecked.

Inserted full `tool_image_optimizer_*` keys in all ten `src/site/i18n/{lang}.ts` files between `tool_image_compress_faq_a6` and `tool_image_crop_*` (~64 keys per locale): title/description/article, engine and codec UI, compare/stats/warning/error states, How/Rules/Example/Use cases, FAQ×6 (question order varies by locale). EN title: `Image Optimizer — WebP, AVIF & MozJPEG Local`; ZH title covers image optimization with smaller size, tunable encoders, and local completion. Body distinguishes the Canvas compress page from this WASM optimizer and does not sell package names like jsquash. Synced Locale briefs status in `02-tool-info.md`. Home short descriptions in `scripts/site/i18n.mjs` not added yet (sync when catalog is implemented).

[actions]
- Created `work-tasks/image-optimizer/03-locale-briefs.md`
- Updated `work-tasks/image-optimizer/02-tool-info.md` (briefs status)
- Appended `tool_image_optimizer_*` keys in `src/site/i18n/en.ts`, `zh.ts`, `es.ts`, `ar.ts`, `pt.ts`, `id.ts`, `fr.ts`, `ja.ts`, `ru.ts`, `de.ts`
