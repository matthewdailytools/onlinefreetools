Date: 2026-08-13 00:49
Summary: Explain verify:r2:live checks R2 meta plus live Worker /api/ops/pages-build.

[question]
npm run verify:r2:live的作用

[try to solve]
`verify:r2:live` = `verify:r2` 全部检查 + 请求生产 `GET /api/ops/pages-build`。先比本地 wrangler `PAGES_CACHE_VERSION`、本地 gzip 哈希与 R2 `_meta/pages-build.json`，并抽样关键 key；再确认线上 Worker 的 env 版本与 R2 meta 一致且 `aligned: true`。用于 git push / CF 部署完成后验收，避免「新 Worker + 旧 R2」或反过来。CF 未部署完时不要跑。

[actions]
- （只读说明）
