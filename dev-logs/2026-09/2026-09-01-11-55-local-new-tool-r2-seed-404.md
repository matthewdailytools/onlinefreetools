Date: 2026-09-01 11:55
Summary: Local new-tool 404s were caused by start-dev R2 seed failing on a missing https-proxy-agent package; re-seeding local R2 restored 200s.

[question]
http://localhost:8787/zh/tools/open-graph-image-size 无法打开，但是旧的tool能打开

[try to solve]
Tool HTML is served from local R2 (`Cache → PAGES_BUCKET`), not from `public/_pages` Assets. `start-dev` builds the HTML, then runs `upload:r2:local`. That seed crashed with `ERR_MODULE_NOT_FOUND: https-proxy-agent` (declared in package.json but missing from node_modules), so wrangler still started with the old local bucket. Existing tools stayed 200; new P0 slugs 404’d.

Fix: `npm install` the proxy-agent packages, delay-load them in `scripts/lib/r2-s3-client.mjs` so a missing agent package does not break a no-proxy local seed, then `npm run upload:r2:local`. `GET /zh/tools/open-graph-image-size` with `Accept: text/html` returned 200.

[actions]
- Installed `https-proxy-agent` and `socks-proxy-agent`
- Lazy-require proxy agents in `scripts/lib/r2-s3-client.mjs`
- `npm run upload:r2:local`
