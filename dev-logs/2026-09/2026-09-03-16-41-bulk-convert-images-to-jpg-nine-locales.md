Date: 2026-09-03 16:41
Summary: Nine locale i18n shards for bulk-convert-images-to-jpg were rewritten from briefs; coverage:gate phase=4 passed.
Visibility: people

[question]
Write nine locale i18n shards for slug `bulk-convert-images-to-jpg` (not en.ts or Page.ts), update 03 to i18n-done with rounds 2/2b/3, add README bullets, run coverage:gate phase=4.

[try to solve]
## Context
The English master shard already existed. Nine other locales needed independent search-intent copy from `03-locale-briefs.md`, not a translate-en pass.

## Process
Copied the exact key set from `en.ts` (64 keys). Wrote zh, es, ar, pt, id, fr, ja, ru, de with local H1s, privacy (device + not uploaded to a server), PNG/HEIC in FAQ, JPEG spelling only in FAQ, and varied How/FAQ openings. Updated `03` status to `i18n-done`, checked coverage-optimized plus rounds 2 and 3, filled table rows 2 / 2b / 3 dated 2026-09-03. Added README bullets next to the other bulk image tools. Left `02` as `ready`. Ran `npm run coverage:gate -- --slug=bulk-convert-images-to-jpg --phase=4`.

## Root cause / analysis
Coverage step 4 only greens if sample-locale titles exist, 2b names en,zh,es,ja, and 「检索覆盖已优化」 is checked. Copy still had to avoid doorway/meta-narration that the English rules item had used for jpeg search.

## Solution
Independent locale shards + brief/README updates. Gate result: `coverage:gate OK slug=bulk-convert-images-to-jpg phase=4`.

H1: zh 批量把图片转成 JPG; es Convertir imágenes a JPG en lote; ja 画像を JPG に一括変換.

## Notes / boundaries
Did not write `en.ts` or `Page.ts`. Did not change `02` status. Ship still needs `build:site` / `verify:tool` in a later session.

[actions]
- Wrote `src/site/i18n/tools/bulk-convert-images-to-jpg/{zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Updated `work-tasks/bulk-convert-images-to-jpg/03-locale-briefs.md` and `README.md`
- Ran `npm run coverage:gate -- --slug=bulk-convert-images-to-jpg --phase=4`
