Date: 2026-08-08 17:10
Summary: Retitle brand-color-token-pack to action + search-intent phrasing across 10 locales.

[question]
https://onlinefreetools.org/zh/tools/brand-color-token-pack 品牌色 Token 包 — HEX/HSL/OKLCH 色阶，标题不符合seo搜索，同时应该是一个动作

[try to solve]
Agreed. The old title was a noun phrase (“Token pack”) plus a HEX/HSL/OKLCH parameter list — not how people search for “color scale / palette generation.” Retitled to action + primary search intent (slug unchanged):

- ZH: generate brand color scale — one primary color yields a 50–950 palette and CSS variables
- EN: `Generate Brand Color Scale — 50–950 Palette & CSS Tokens`
- Other eight locales synced to action verbs (Generate / Generar / Buat / erzeugen, etc.); HEX/HSL/OKLCH stay in description and the color-space section.

Updated ten-locale i18n, `02`/`03` briefs, README, inventory table, related-tool FAQ wording, then `merge:tools` + `build:site`; `lint:seo` passed.

[actions]
- src/site/i18n/tools/brand-color-token-pack/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- src/site/i18n/tools/smart-website-color-scheme/*.ts (FAQ related-tool labels)
- work-tasks/brand-color-token-pack/02-tool-info.md, 03-locale-briefs.md
- README.md, docs/2026-08-08-tool-inventory-table.md
- src/pages/brandColorTokenPackPage.ts (comments)
- npm run merge:tools && npm run build:site
