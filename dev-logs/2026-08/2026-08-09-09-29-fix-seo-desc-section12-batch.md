Date: 2026-08-09 09:29
Summary: Fixed 126 SEO description length/keyword warnings for §12 remaining-batch tools across i18n shards.

[question]
In /Users/xuli/vscodeai/onlinefreetools, fix ALL SEO description length/keyword warnings for tools shipped in §12 remaining batch.

Run: npm run lint:seo 2>&1 | rg 'SEO-WARN.*(too short|missing calculation)'

For every failing `tool_*_description` in src/site/i18n/tools/{slug}/{lang}.ts (prefer shards, not only merged files):
- Expand to ≥120 characters
- Include calculation/process/example cues (English: calculate/example/process or equivalent; keep sample numbers)
- Keep independent localization (don't paste English into zh/ar/etc.)
- Keep YMYL disclaimers where ymyl tools

Slugs likely affected include age, date-difference, mean, median, permutation-combination, quadratic-equation, triangle-area, circle, volume, macros, heart-rate, pace, one-rep-max, ohms-law, density, velocity, acceleration — and ANY other short ones from lint.

After edits: npm run merge:tools && npm run build:site && npm run lint:seo
Must end with: SEO validator: OK (no WARNINGS detected for descriptions). COVER-WARN legacy titles on old tools are OK to leave.

Return count of description keys fixed and final lint:seo summary line.

[try to solve]
扩写了 **126** 个失败的 `tool_*_description`（shards，非仅合并文件），覆盖 acceleration、age(ar)、circle、date-difference、density、heart-rate、macros、mean、median、ohms-law、one-rep-max、pace、permutation-combination、quadratic-equation、triangle-area、velocity、volume 等语种；英文补上 calculate/example/process/formula，他语独立本地化并保留 YMYL 免责。随后 `merge:tools` + `build:site` + `lint:seo`。

最终：`SEO validator: OK — descriptions, FAQ pairs, and YMYL disclaimers look good`（描述过短/缺关键词 WARN 为 0；遗留 COVER-WARN title 未动）。

[actions]
- 更新 `src/site/i18n/tools/how-to-calculate-*/{en,es,fr,de,ru,pt,id,ar}.ts` 中相关 description
- `npm run merge:tools && npm run build:site && npm run lint:seo`
