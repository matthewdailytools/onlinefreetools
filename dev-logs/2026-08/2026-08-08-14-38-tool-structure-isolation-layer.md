Date: 2026-08-08 14:38
Summary: Adopted structural tool isolation: catalog/i18n shards, merge pipeline, generated registry, isolation lint, and tool-creation rules.

[question]
采用结构层

[try to solve]
已落地「结构层」隔离：每个工具的可编辑真相源按 slug 分片，合并产物由脚本生成，新工具不再手改 `src/index.ts` 或其他工具文件。

**真相源（可编辑）**
- `src/site/tool-catalog.d/{slug}.json`（含 `page.module` / `page.export` / `page.style`）
- `src/site/i18n/tools/{slug}/{lang}.ts`
- `src/site/i18n/core/{lang}.ts`（站点共用，非单工具勿动）
- `src/pages/{camel}Page.ts`

**生成勿手改**
- `src/site/tool-catalog.json`
- `src/site/i18n/{lang}.ts`
- `src/site/toolPageRegistry.generated.ts`
- `scripts/site/i18n-tools.generated.mjs`

**脚本与 npm**
- `npm run split:tools` — 一次性从旧单体拆分（日常勿在未 merge 时重跑）
- `npm run merge:tools` — 合并分片；已挂入 `build:site`；`--no-build` 的 `start:dev` 也会先 merge
- `TOOL_SLUG={slug} npm run lint:tool-isolation` — 路径 allowlist；跨工具改动需 `CROSS_TOOL_UPDATE=1`

**注册**
- `src/index.ts` 用 `TOOL_PAGE_RENDERERS` 循环 `registerToolPage`，共 32 个工具。

**规则**
- `.cursor/rules/tool-creation.mdc` 已改为分片工作流与上线 checklist。

**验证**
- `lint:seo` OK；本地 `/zh/tools/flip-image`、`/tools/image-exif`、`/zh/tools/images-to-gif`、`/zh/tools/image-compress` 均 200。

[actions]
- Added `scripts/tool-modules/{lib,split-once,merge-all}.mjs`, `scripts/check-tool-isolation.mjs`
- Created `src/site/tool-catalog.d/*`, `src/site/i18n/core/*`, `src/site/i18n/tools/**`
- Regenerated catalog / locale / registry / `i18n-tools.generated.mjs`
- Updated `package.json`, `src/index.ts`, `scripts/site/i18n.mjs`, `ops/dev/start-dev.mjs`, `.cursor/rules/tool-creation.mdc`
