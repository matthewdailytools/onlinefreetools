Date: 2026-08-09 08:08
Summary: Wrote nine independent i18n locale files for how-to-calculate-ideal-weight with required titles and full key parity.

[question]
Create 9 independent i18n locale files for slug how-to-calculate-ideal-weight. Read master keys from en.ts; write zh/es/ja/fr/de/pt/id/ru/ar with exact titles, ~73.2 kg sample + YMYL in descriptions, zh/ja desc ≥120 chars, no English UI strings; confirm zh has 理想体重 and no Calculate button.

[try to solve]
Wrote nine independent locale rewrites: `zh.ts`, `es.ts`, `ja.ts`, `fr.ts`, `de.ts`, `pt.ts`, `id.ts`, `ru.ts`, `ar.ts` (47 keys each, aligned with en). Titles match the brief; descriptions include the ~73.2 kg sample and a non-medical disclaimer. zh description is 133 characters; ja is 158. zh copy includes the “ideal weight” term; the primary button is “Start estimate” in Chinese (no English “Calculate”).

[actions]
- Wrote `src/site/i18n/tools/how-to-calculate-ideal-weight/{zh,es,ja,fr,de,pt,id,ru,ar}.ts`
