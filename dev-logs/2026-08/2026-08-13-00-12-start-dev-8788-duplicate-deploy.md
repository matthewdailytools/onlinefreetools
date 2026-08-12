Date: 2026-08-13 00:12
Summary: start-dev on 8788 succeeded; fix duplicate deploy script key warning.

[question]
xuli@Matthew-2023 onlinefreetools % bash ops/dev/start-dev.sh -- --port 8788
…（build:site / prerender lang=en… Duplicate key "deploy" 警告）

[try to solve]
该次启动已跑完：预渲染 1240 页、gzip 1510、本地 R2 灌桶、wrangler 在 http://127.0.0.1:8788/、Ops UI 8791；首页 Accept:text/html 为 200。`Duplicate key "deploy"` 来自 package.json 同时有 `wrangler deploy` 与 `deploy-site.mjs`；已去掉重复，保留 `deploy`→deploy-site，另加 `deploy:worker-only`→纯 wrangler。`npm run status:dev` 默认探 8787，用 8788 时勿被 FAIL 误导。

[actions]
- Fixed `package.json` duplicate `deploy` key (`deploy` + `deploy:worker-only`)
