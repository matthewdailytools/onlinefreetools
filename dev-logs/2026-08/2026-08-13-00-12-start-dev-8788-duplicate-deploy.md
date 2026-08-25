Date: 2026-08-13 00:12
Summary: start-dev on 8788 succeeded; fix duplicate deploy script key warning.

[question]
xuli@Matthew-2023 onlinefreetools % bash ops/dev/start-dev.sh -- --port 8788
…（build:site / prerender lang=en… Duplicate key "deploy" 警告）

[try to solve]
That start completed: prerendered 1240 pages, gzip 1510, local R2 seeded, wrangler on http://127.0.0.1:8788/, Ops UI on 8791; home with `Accept: text/html` returned 200. `Duplicate key "deploy"` came from package.json defining both `wrangler deploy` and `deploy-site.mjs`; removed the duplicate—kept `deploy` → deploy-site and added `deploy:worker-only` → bare wrangler. `npm run status:dev` probes 8787 by default; a FAIL when using 8788 is expected noise.

[actions]
- Fixed `package.json` duplicate `deploy` key (`deploy` + `deploy:worker-only`)
