Date: 2026-08-08 11:32
Summary: Added complete tool_color_from_image_* i18n keys to 9 locale files and home keys to i18n.mjs for all 10 languages.

[question]
Add complete `tool_color_from_image_*` i18n keys to zh/es/ar/pt/id/fr/ja/ru/de matching en key set; add home title/desc to scripts/site/i18n.mjs for all 10 langs after tool_image_crop_desc.

[try to solve]
已为 9 个 locale 文件各插入 44 个 `tool_color_from_image_*` 键（与 en 完全一致），位置在 `tool_add_www_to_dns_title` 之前；并在 `scripts/site/i18n.mjs` 的 10 语首页块加入 `tool_color_from_image_title` / `tool_color_from_image_desc`（位于 `tool_image_crop_desc` 之后）。文案按 brief 独立重写：场景向 title、description ≥120 字含步骤与示例、FAQ 题序各语差异化；`npm run lint:seo` 已通过。

[actions]
- src/site/i18n/zh.ts, es.ts, ar.ts, pt.ts, id.ts, fr.ts, ja.ts, ru.ts, de.ts
- scripts/site/i18n.mjs
