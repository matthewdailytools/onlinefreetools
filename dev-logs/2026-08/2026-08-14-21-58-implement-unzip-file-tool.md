Date: 2026-08-14 21:58
Summary: Implemented the unzip-file tool with ZIP extraction, ten locale shards, generated site outputs, and verification.

[question]
实现

[try to solve]
Implemented `unzip-file` as a browser-side ZIP extraction tool. The page loads a real sample ZIP on entry, displays the extracted file tree and preview, supports single-file download and export-all as a sanitized ZIP, and documents path safety, large-file, password ZIP, and multi-format archive boundaries. Added catalog, icon, page implementation, ten i18n shards, README entries, generated site files, and updated the work-task status to implemented. Verification passed: coverage gate phase 2/4/all, `npm run build:site`, `npm run lint:seo`, `TOOL_SLUG=unzip-file npm run lint:tool-isolation`, and `npm run verify:tool -- --slug=unzip-file`. Dev server is running at `http://127.0.0.1:8788/tools/unzip-file`.

[actions]
- Added `src/pages/unzipFilePage.ts`
- Added `src/site/tool-catalog.d/unzip-file.json`
- Added `src/site/i18n/tools/unzip-file/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Added `public/icons/tools/unzip-file.svg`
- Updated generated catalog, i18n, registry, homepage, and sitemap outputs via `npm run build:site`
- Updated `README.md` and `work-tasks/unzip-file/*`
- Ran `npm run coverage:gate -- --slug=unzip-file --phase=2`
- Ran `npm run coverage:gate -- --slug=unzip-file --phase=4`
- Ran `npm run coverage:gate -- --slug=unzip-file --phase=all`
- Ran `npm run lint:seo`
- Ran `TOOL_SLUG=unzip-file npm run lint:tool-isolation`
- Ran `npm run verify:tool -- --slug=unzip-file`
- Started dev server on port 8788 and checked English/Chinese tool pages with HTML requests
