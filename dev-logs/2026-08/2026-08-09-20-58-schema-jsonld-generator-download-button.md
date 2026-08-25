Date: 2026-08-09 20:58
Summary: Added a Download button to schema-jsonld-generator output (schema.jsonld) with tool_schema_download across 10 locales.

[question]
http://localhost:8788/zh/tools/schema-jsonld-generator 缺少下载按钮

[try to solve]
Aligned with other generators (sitemap/robots): the output area gets a Download button. Blob writes `schema.jsonld` (`application/ld+json`) for any schema type output (including script-wrapped form). Copy button kept. Added 10-locale key `tool_schema_download` (en Download plus native labels in zh/es/ja/ar/pt/id/fr/ru/de).

Verification: 10-locale keysets match; tool script syntax OK; DOM mock — FAQ sample on load + download → schema.jsonld; template-escape scan clean; 119 tool-page scripts pass; build:site / lint:seo green.

[actions]
- src/pages/schemaJsonldGeneratorPage.ts (output download button + JS)
- src/site/i18n/tools/schema-jsonld-generator/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts (tool_schema_download)
- work-tasks/schema-jsonld-generator/03-locale-briefs.md (interaction-enhance round)
- Commands: npm run merge:tools, npm run build:site, npm run lint:seo
