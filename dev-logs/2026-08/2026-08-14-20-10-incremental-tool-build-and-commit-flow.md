Date: 2026-08-14 20:10
Summary: Add incremental static tool page generation, changed R2 upload flow, and scoped tool commit commands.

[question]
目前是全量生成静态页面和压缩包。需要增量生成静态页面和压缩包，以及增量提交。只提交修改过的和新增的工具。在命令中和流程中增加这个能力

[try to solve]
Implemented an incremental tool workflow: changed/new tool slugs can now be inferred from git paths or passed explicitly with `--slug`, tool prerendering can target only those slugs, gzip can target those pages when needed, and `deploy:changed` uses changed-only R2 upload. Added `stage:tools:changed` and `commit:tools:changed` so commits can be scoped to the modified/new tool paths plus required generated shared files. Updated package commands, deployment docs, and Cursor rules to document the new flow and the required local `_pages` baseline.

[actions]
- Added `scripts/lib/changed-tools.mjs`.
- Added `scripts/commit-changed-tools.mjs`.
- Updated incremental support in `scripts/prerender-tool-pages.mjs`, `scripts/prerender-tool-pages-entry.ts`, `scripts/gzip-pages.mjs`, `scripts/build-site.mjs`, and `scripts/deploy-site.mjs`.
- Added npm commands in `package.json`.
- Updated `.cursor/rules/cloudflare-workflow.mdc`, `.cursor/rules/tool-creation.mdc`, `ops/worker-r2-ops.md`, and `ops/README.md`.
- Verified with `node --check`, `node scripts/prerender-tool-pages.mjs --slug=text-diff`, `node scripts/gzip-pages.mjs --slug=text-diff`, and `node scripts/commit-changed-tools.mjs --slug=text-diff --dry-run`.
