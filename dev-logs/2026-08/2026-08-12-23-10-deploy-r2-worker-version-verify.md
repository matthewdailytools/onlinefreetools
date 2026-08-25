Date: 2026-08-12 23:10
Summary: Deploy now uploads R2, verifies PAGES_CACHE_VERSION/contentHash vs Worker, then live-checks /api/ops/pages-build.

[question]
部署脚本增加验证（需要R2和项目worker版本一致）

[try to solve]
- Upload writes R2 `_meta/pages-build.json` (`pagesCacheVersion` + `contentHash`)
- `verify:r2` / `verify:r2:live` check R2 ↔ wrangler ↔ live Worker
- Worker adds `GET /api/ops/pages-build` (200 when aligned, else 409)
- `npm run deploy` → `scripts/deploy-site.mjs`: upload → verify → wrangler deploy → live verify
- Docs updated: ops/worker-r2-ops.md, ops/README.md, design.md

[actions]
- scripts/lib/pages-build-meta.mjs, verify-r2-worker-sync.mjs, deploy-site.mjs; upload-r2-pages.mjs
- src/index.ts (/api/ops/pages-build); package.json; ops docs
