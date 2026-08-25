Date: 2026-08-13 00:36
Summary: Compare GitHub→CF pull deploy vs bare wrangler deploy vs npm run deploy.

[question]
现在通过push到github，然后cloudflare拉取，和npx wrangler deploy部署的区别是什么

[try to solve]
Both mainly update the Worker script + Assets (`public/`, with `.assetsignore` excluding `_pages`); neither auto-seeds R2. Differences: Git-triggered deploy uses the remote repo snapshot, usually skips local `predeploy` / `upload:r2` / `verify`, and relies on committed vendor. Bare `wrangler deploy` uses the local workspace and likewise does not build the site, upload, or verify.

Production recommendation: `npm run deploy` (predeploy=build+lint → upload:r2 → verify → wrangler deploy → live verify). Push-only or wrangler-only without a prior upload leaves prerendered HTML 404 or stuck on old R2.

[actions]
- Read-only explanation
