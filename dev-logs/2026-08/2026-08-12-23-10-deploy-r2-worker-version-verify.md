Date: 2026-08-12 23:10
Summary: Deploy now uploads R2, verifies PAGES_CACHE_VERSION/contentHash vs Worker, then live-checks /api/ops/pages-build.

[question]
部署脚本增加验证（需要R2和项目worker版本一致）

[try to solve]
- upload 写入 R2 `_meta/pages-build.json`（pagesCacheVersion + contentHash）
- `verify:r2` / `verify:r2:live` 校验 R2 ↔ wrangler ↔ 线上 Worker
- Worker 新增 `GET /api/ops/pages-build`（aligned 时 200，否则 409）
- `npm run deploy` → `scripts/deploy-site.mjs`：upload → verify → wrangler deploy → live verify
- 更新 ops/worker-r2-ops.md、ops/README.md、design.md

[actions]
- scripts/lib/pages-build-meta.mjs、verify-r2-worker-sync.mjs、deploy-site.mjs；upload-r2-pages.mjs
- src/index.ts（/api/ops/pages-build）；package.json；ops 文档
