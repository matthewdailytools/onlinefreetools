Date: 2026-08-09 08:08
Summary: Wrote nine independent i18n locale files for how-to-calculate-ideal-weight with required titles and full key parity.

[question]
Create 9 independent i18n locale files for slug how-to-calculate-ideal-weight. Read master keys from en.ts; write zh/es/ja/fr/de/pt/id/ru/ar with exact titles, ~73.2 kg sample + YMYL in descriptions, zh/ja desc ≥120 chars, no English UI strings; confirm zh has 理想体重 and no Calculate button.

[try to solve]
已写入 9 个独立重写 locale：`zh.ts` `es.ts` `ja.ts` `fr.ts` `de.ts` `pt.ts` `id.ts` `ru.ts` `ar.ts`（各 47 键与 en 对齐）。标题按要求；描述含约 73.2 kg 样例与非医疗免责；zh desc 133 / ja 158 字；zh 含「理想体重」，按钮为「开始估算」（无 Calculate）。

[actions]
- Wrote `src/site/i18n/tools/how-to-calculate-ideal-weight/{zh,es,ja,fr,de,pt,id,ru,ar}.ts`
