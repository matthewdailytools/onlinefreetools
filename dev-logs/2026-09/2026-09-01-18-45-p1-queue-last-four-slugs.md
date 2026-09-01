Date: 2026-09-01 18:45
Summary: Finished the remaining P1 queue by shipping svg-optimizer, curl-to-fetch, prompt-template-builder, and file-metadata-analyzer end to end.

[question]
继续，直到最后一个slug

[try to solve]
Shipped the last four inventory §0 P1 scene tools in order, each A→D (brief 0b/0i → catalog/page/en → ten locales → build + prerender/gzip + HTML smoke).

1. `svg-optimizer` — SVGOMG-like local SVG compress with option chips, before/after bytes, preview; related image-optimizer + html-entity. H1: SVG optimizer.
2. `curl-to-fetch` — paste cURL → JavaScript fetch (async/await chip); related website-headers + jwt-decoder. H1: curl to fetch.
3. `prompt-template-builder` — free text + Role/Task/Constraints/Output → Markdown/JSON template; no LLM calls; related chatgpt-export-to-markdown + json-schema-validator. H1: Prompt template builder.
4. `file-metadata-analyzer` — local file name/size/MIME/modified + image size / media duration + magic-byte hints; not an EXIF editor; related image-exif + file-hash. H1: File metadata analyzer.

Inventory §0 P1 pending table is empty; all ten P1 scene slugs from the 2026-09-01 queue are catalog-live. Coverage 0b/2/4 and lint:tool-page --require-html reported green per slug. Isolation may still fail while sibling dirty worktrees exist. No commit in this session.

[actions]
- Added work-tasks, catalog shards, pages, ten-locale i18n, icons for the four slugs
- README 中英; docs/2026-08-08-tool-inventory-table.md §0 + numbered rows → 已上线
- Explicit prerender/gzip --slug for each after build:site
