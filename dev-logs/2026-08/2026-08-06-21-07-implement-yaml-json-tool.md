Date: 2026-08-06 21:07
Summary: Implemented YAML ↔ JSON tool (yaml-json) with ten-locale IG copy.

[question]
根据规则和任务实现工具

[try to solve]
Implemented **YAML ↔ JSON** from `work-tasks/yaml-json/02-tool-info.md` (`ready`) following `tool-creation.mdc` and the steady localization path.

**URL**: `/tools/yaml-json` (ten-locale hreflang; no reverse thin pages)

**Interaction**
- Tabs: YAML → JSON | JSON → YAML
- `js-yaml@4.1.0` CDN; multi-doc `loadAll` (one doc = value; multiple = array)
- Optional JSON-safe types; indent 2/4/minify; line-number errors; Copy/Download/Sample/Clear
- Paste processed locally; FAQ distinguishes CDN library load

**IG**: Rules (types / multi-doc / round-trip loss / privacy) + Example + Use cases×3 + FAQ×5 + References (YAML 1.2 / js-yaml / RFC 8259) + related → markdown-to-html, text-diff

**Localization**: en master → three independent rewrite batches (FAQ order shuffled); `lint:seo` passed; `03` → `i18n-done`; `02` → `implemented`

**Acceptance**: `npm run lint:seo` OK; `npm run build:site` (sitemap includes yaml-json)

[actions]
- Added `src/pages/yamlJsonPage.ts`
- Updated `src/site/tool-catalog.json`, `src/index.ts`, `README.md`
- Ten-locale `src/site/i18n/*.ts` + `scripts/site/i18n.mjs` home primary terms
- Updated `work-tasks/yaml-json/02` / `03`
- `npm run lint:seo`; `npm run build:site`
