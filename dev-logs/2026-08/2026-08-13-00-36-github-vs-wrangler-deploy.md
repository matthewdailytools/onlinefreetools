Date: 2026-08-13 00:36
Summary: Compare GitHub→CF pull deploy vs bare wrangler deploy vs npm run deploy.

[question]
现在通过push到github，然后cloudflare拉取，和npx wrangler deploy部署的区别是什么

[try to solve]
两者都主要更新 Worker 脚本 + Assets（`public/`，已 `.assetsignore` 排除 `_pages`），都不会自动灌 R2。差异：Git 拉部署用远端仓库快照，通常不跑本地 `predeploy`/`upload:r2`/`verify`，依赖已 commit 的 vendor；裸 `wrangler deploy` 用本机工作区，同样不建站、不 upload、不校验。生产推荐 `npm run deploy`（predeploy=build+lint → upload:r2 → verify → wrangler deploy → live verify）。仅 push 或仅 wrangler 且未事先 upload，预渲染 HTML 会 404 或仍是旧 R2。

[actions]
- （只读说明）
