Date: 2026-08-09 00:47
Summary: Fully rewrote BMR/TDEE ten-locale i18n after an English UI fallback bug.

[question]
不对，http://localhost:8788/zh/tools/how-to-calculate-bmr-tdee语言没有重写

[try to solve]
Root cause: ship-one only localized title/buttons; form labels and How/Formula/FAQ/disclaimer still fell back to English. Fully rewrote zh/es/ja/fr/de/pt/id/ru/ar per the 03 brief (including control labels and Q&A). `merge:tools` + coverage phase=4 passed. Tightened `scripts/dev/omni-s12/ship-one.mjs`: fail immediately when a non-en locale lacks `t.ui[lang]` or when how_body still equals the English master—no more English-shell locale dumps.

[actions]
- Rewrote `src/site/i18n/tools/how-to-calculate-bmr-tdee/{zh,es,ja,fr,de,pt,id,ru,ar}.ts`
- Updated `03-locale-briefs.md`, `scripts/dev/omni-s12/ship-one.mjs`
- `npm run merge:tools`; `coverage:gate --phase=4`
