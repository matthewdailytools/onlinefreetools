Date: 2026-08-14 20:22
Summary: Make the default build, upload, and deploy flow incremental.

[question]
流程脚本默认使用增量更新

[try to solve]
Changed the default workflow so `build:site`, `prerender:tools`, `upload:r2`, and `deploy` prefer incremental behavior. Full rebuild/reupload paths remain available through `build:site:full`, `prerender:tools:full`, `gzip:pages:full`, `upload:r2:full`, `deploy:full`, and `verify:full`. The incremental site build now skips tool prerender when no changed tool slug is detected, but automatically falls back to a full tool prerender if the local `_pages` gzip baseline is missing. Updated workflow docs and repository rules to describe default incremental commands.

[actions]
- Updated `package.json` default scripts and added explicit `:full` commands.
- Updated `scripts/build-site.mjs`, `scripts/prerender-tool-pages.mjs`, `scripts/gzip-pages.mjs`, and `scripts/deploy-site.mjs`.
- Updated `.cursor/rules/cloudflare-workflow.mdc`, `.cursor/rules/tool-creation.mdc`, `ops/worker-r2-ops.md`, and `ops/README.md`.
- Verified with `node --check`, `npm run prerender:tools`, `npm run prerender:tools -- --slug=text-diff`, `npm run gzip:pages:changed`, and `npm run gzip:pages -- --slug=text-diff`.
