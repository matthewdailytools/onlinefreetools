Date: 2026-08-20 20:50
Summary: Executed P0 CTR meta absorb on four high-impression zero-click tools; lint:seo and build:site passed.

[question]
立刻执行优化

[try to solve]
Completed title/description absorb for the four 2026-08-12 P0 pages (no URL splits):

1. ru image-merge → “Склеить фото онлайн — …”; desc front-loads склеить/объединить + no-server
2. en schema-jsonld-generator → “JSON-LD Schema Generator — Schema.org Markup Online”; home_title/desc synced; removed outdated richer-results promise
3. es how-to-calculate-volume → “Calcular el volumen — Calculadora de caja y esfera”
4. en how-to-calculate-npv → “How to Calculate NPV — Net Present Value Calculator”; desc lead aligns to the query and includes the formula

Also: tool:touch on four slugs; ru home legacy short title; merge:tools + build:site; lint:seo OK.
Docs: 03-todo CTR items checked with a deploy follow-up; keyword-to-tool-tracker decision log appended 2026-08-20.

Next: deploy + IndexNow incremental; verify CTR in GSC after ≥28 days.

[actions]
- src/site/i18n/tools/image-merge/ru.ts
- src/site/i18n/tools/schema-jsonld-generator/en.ts
- src/site/i18n/tools/how-to-calculate-volume/es.ts
- src/site/i18n/tools/how-to-calculate-npv/en.ts
- scripts/site/i18n.mjs (ru home legacy)
- catalog updatedAt via tool:touch ×4
- docs/seo/reviews/2026-08-12/03-todo.md
- docs/seo/keyword-to-tool-tracker.md
- npm run build:site && npm run lint:seo
