Date: 2026-08-14 23:55
Summary: Implemented the archive-extractor tool with local ZIP, TAR, and TAR.GZ extraction.

[question]
实现

[try to solve]
Implemented archive-extractor end to end: the page opens ZIP, TAR, and TAR.GZ/TGZ archives in the browser, auto-runs a real sample archive on entry, shows file metadata and previews, supports selected-file downloads, exports supported entries as a clean ZIP, and gives honest boundary messages for RAR, 7Z, ISO, passwords, unsafe paths, and large archives. Added catalog, icon, ten-locale i18n shards, README entries, generated site outputs, and reverse related linking from unzip-file. Verification passed for coverage gates, build:site, lint:seo, lint:vendor, lint:taxonomy, and tool isolation with CROSS_TOOL_UPDATE=1; strict isolation reports the existing dirty tree plus the intentional unzip-file related-link update.

[actions]
- Added `src/pages/archiveExtractorPage.ts`.
- Added `src/site/tool-catalog.d/archive-extractor.json`.
- Added `src/site/i18n/tools/archive-extractor/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`.
- Added `public/icons/tools/archive-extractor.svg`.
- Updated `src/site/tool-catalog.d/unzip-file.json` with the reverse related link.
- Updated `README.md` with Chinese and English archive extractor entries.
- Updated `work-tasks/archive-extractor/03-locale-briefs.md` to `i18n-done`.
- Ran `npm run coverage:gate -- --slug=archive-extractor --phase=0b`, `--phase=2`, `--phase=4`, and `--phase=all`.
- Ran `npm run build:site`, `npm run lint:seo`, `npm run lint:vendor`, `npm run lint:taxonomy`, `TOOL_SLUG=archive-extractor npm run lint:tool-isolation`, and `CROSS_TOOL_UPDATE=1 TOOL_SLUG=archive-extractor npm run lint:tool-isolation`.
