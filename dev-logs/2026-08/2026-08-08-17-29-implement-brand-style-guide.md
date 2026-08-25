Date: 2026-08-08 17:29
Summary: Implemented /tools/brand-style-guide with modular smart draft, ten-locale i18n, lint and build.

[question]
实现页面

[try to solve]
Shipped `/tools/brand-style-guide` (primary direction A, local rule engine — not cloud AI):

- **Interaction**: brand name / industry / primary color / personality tags / structure presets (Strict·Product·Friendly) / module toggles; Generate, refill-only-unedited, Sample, Copy Markdown/JSON; fields marked `smart|manual`; on load auto-loads Northline Studio `#0F6E8C` sample with full preview.
- **Modules M0–M9**: preview + Do/Don’t; disabled modules excluded from export.
- **Engineering**: catalog shard, `brandStyleGuidePage.ts`, icon, ten-locale i18n, README zh+en entries; `merge:tools`; `lint:seo` OK; `build:site` (420 URLs).
- **work-tasks**: `02` → `implemented`; `03` → `pending-native-review` (ar/ja/ru await native check).
- Isolation lint failed due to dirty files from other tools in the workspace; this tool’s own changes are on the allowlist (can use `CROSS_TOOL_UPDATE=1` to skip a dirty tree).

Preview: `/tools/brand-style-guide` and `/zh/tools/brand-style-guide`.

[actions]
- Added `src/pages/brandStyleGuidePage.ts`
- Added `src/site/tool-catalog.d/brand-style-guide.json`
- Added `src/site/i18n/tools/brand-style-guide/{en,zh,es,ar,pt,id,fr,ja,ru,de}.ts`
- Added `public/icons/tools/brand-style-guide.svg`
- Updated `README.md`, `work-tasks/brand-style-guide/*`
- Ran `npm run merge:tools`, `lint:seo`, `build:site`
