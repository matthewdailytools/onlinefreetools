Date: 2026-08-08 14:38
Summary: Adopted structural tool isolation: catalog/i18n shards, merge pipeline, generated registry, isolation lint, and tool-creation rules.

[question]
采用结构层

[try to solve]
Landed “structural layer” isolation: each tool’s editable source of truth is sharded by slug; merge outputs are script-generated; new tools no longer hand-edit `src/index.ts` or other tools’ files.

**Editable source of truth**
- `src/site/tool-catalog.d/{slug}.json` (includes `page.module` / `page.export` / `page.style`)
- `src/site/i18n/tools/{slug}/{lang}.ts`
- `src/site/i18n/core/{lang}.ts` (site-wide; do not touch for single-tool work)
- `src/pages/{camel}Page.ts`

**Generated — do not hand-edit**
- `src/site/tool-catalog.json`
- `src/site/i18n/{lang}.ts`
- `src/site/toolPageRegistry.generated.ts`
- `scripts/site/i18n-tools.generated.mjs`

**Scripts and npm**
- `npm run split:tools` — one-time split from old monolith (do not re-run daily without a prior merge)
- `npm run merge:tools` — merge shards; hooked into `build:site`; `--no-build` `start:dev` also merges first
- `TOOL_SLUG={slug} npm run lint:tool-isolation` — path allowlist; cross-tool edits need `CROSS_TOOL_UPDATE=1`

**Registration**
- `src/index.ts` loops `TOOL_PAGE_RENDERERS` into `registerToolPage` (32 tools).

**Rules**
- `.cursor/rules/tool-creation.mdc` updated to the shard workflow and ship checklist.

**Verification**
- `lint:seo` OK; local `/zh/tools/flip-image`, `/tools/image-exif`, `/zh/tools/images-to-gif`, `/zh/tools/image-compress` all 200.

[actions]
- Added `scripts/tool-modules/{lib,split-once,merge-all}.mjs`, `scripts/check-tool-isolation.mjs`
- Created `src/site/tool-catalog.d/*`, `src/site/i18n/core/*`, `src/site/i18n/tools/**`
- Regenerated catalog / locale / registry / `i18n-tools.generated.mjs`
- Updated `package.json`, `src/index.ts`, `scripts/site/i18n.mjs`, `ops/dev/start-dev.mjs`, `.cursor/rules/tool-creation.mdc`
