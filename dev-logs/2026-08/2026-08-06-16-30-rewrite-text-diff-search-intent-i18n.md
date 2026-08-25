Date: 2026-08-06 16:30
Summary: Rewrote text-diff ten-locale copy for search intent; lint:seo passed; re-audited SEO quality.

[question]
按上表直接改一版「检索向」十语文案并再跑 lint:seo，然后再次核查seo

[try to solve]
Rewrote text-diff title, description, UI, FAQ, How, Rules, Use cases, and home-card copy for all ten locales to match local search phrasing (examples: zh online text compare; es Comparar textos online; de Texte online vergleichen; ja text-compare phrasing). Removed machine-translation artifacts (granularity/hunk/altas y bajas style calques).

`npm run lint:seo` passed. Re-audit: structure and Information Gain still meet the bar; search intent and readability improved clearly. Native spot-checks for ar/ja/ru detail wording remain recommended.

[actions]
- src/site/i18n/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts
- scripts/site/i18n.mjs
- npm run lint:seo
