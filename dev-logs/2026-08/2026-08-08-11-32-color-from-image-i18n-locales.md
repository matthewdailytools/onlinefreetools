Date: 2026-08-08 11:32
Summary: Added complete tool_color_from_image_* i18n keys to 9 locale files and home keys to i18n.mjs for all 10 languages.

[question]
Add complete `tool_color_from_image_*` i18n keys to zh/es/ar/pt/id/fr/ja/ru/de matching en key set; add home title/desc to scripts/site/i18n.mjs for all 10 langs after tool_image_crop_desc.

[try to solve]
Inserted 44 `tool_color_from_image_*` keys into each of 9 locale files (matching the en key set), placed before `tool_add_www_to_dns_title`. Added `tool_color_from_image_title` / `tool_color_from_image_desc` to all 10 home blocks in `scripts/site/i18n.mjs` (after `tool_image_crop_desc`). Copy independently rewritten per brief: scenario-oriented titles, descriptions ≥120 chars with steps/examples, FAQ question order varied by locale. `npm run lint:seo` passed.

[actions]
- src/site/i18n/zh.ts, es.ts, ar.ts, pt.ts, id.ts, fr.ts, ja.ts, ru.ts, de.ts
- scripts/site/i18n.mjs
