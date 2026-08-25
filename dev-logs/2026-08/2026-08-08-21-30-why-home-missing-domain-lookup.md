Date: 2026-08-08 21:30
Summary: Homepage missing domain-lookup because code is uncommitted/undeployed and local wrangler is not running; built _pages already include the card.

[question]
为什么首页找不到入口

[try to solve]
Local `build:site` already places Domain Lookup as featured card #10 in `public/_pages/zh/index.html`; top nav and All tools also list it.

Not seeing it usually means:
1. Looking at production https://onlinefreetools.org — `domain-lookup` files are still untracked/unpushed, so prod has none.
2. Local server not running, or started with `--no-build`: `status:dev` showed port 8787 not listening.

Local check: `npm run start:dev`, then open `/zh/` (with Accept: text/html) or go straight to `/zh/tools/domain-lookup`. Shipping needs commit + push/deploy.

[actions]
- Checked `public/_pages/zh/index.html`, `git status`, `status:dev`
