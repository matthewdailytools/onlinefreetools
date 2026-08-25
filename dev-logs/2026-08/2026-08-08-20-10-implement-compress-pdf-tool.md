Date: 2026-08-08 20:10
Summary: Implemented compress-pdf tool with pdf.js rasterize + pdf-lib JPEG rebuild.

[question]
Implement the full `compress-pdf` tool in /Users/xuli/vscodeai/onlinefreetools following existing patterns from organize-pdf and merge-pdf.

[try to solve]
Finished full `compress-pdf` implementation: pdf.js rasterize + pdf-lib JPEG re-embed, Med/Low quality tiers, on-enter sample auto-compress, ten-locale i18n, catalog/icon/page. `coverage:gate --phase=all`, `lint:seo`, and `lint:tool-isolation` all passed; inventory #53 and README updated.

[actions]
- src/site/tool-catalog.d/compress-pdf.json
- public/icons/tools/compress-pdf.svg
- src/pages/compressPdfPage.ts
- src/site/i18n/tools/compress-pdf/{en,zh,es,ja,ar,pt,id,fr,ru,de}.ts
- work-tasks/compress-pdf/02-tool-info.md, 03-locale-briefs.md
- docs/2026-08-08-tool-inventory-table.md, README.md
