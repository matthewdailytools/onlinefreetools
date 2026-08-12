Date: 2026-08-13 00:42
Summary: Default deploy uses GitHub push instead of wrangler deploy; live verify after CF.

[question]
注释掉，替换成github

[try to solve]
`scripts/deploy-site.mjs` 已注释默认 `wrangler deploy`，改为打印 git push → Cloudflare 拉仓库步骤；`verify:r2:live` 默认跳过（加 `--live` 或单独命令）。紧急仍可用 `--wrangler-deploy` / `deploy:worker-only`。已同步 ops/worker-r2-ops、ops/README、design、cloudflare-workflow、SEO checklist。

[actions]
- Updated `scripts/deploy-site.mjs`
- Updated `ops/worker-r2-ops.md`, `ops/README.md`, `docs/worker+R2架构/design.md`, `.cursor/rules/cloudflare-workflow.mdc`, `docs/SEO_PUBLISH_CHECKLIST.md`
