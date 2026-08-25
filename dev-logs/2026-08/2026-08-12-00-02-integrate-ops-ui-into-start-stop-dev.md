Date: 2026-08-12 00:02
Summary: Integrated sitemap:ui / ops:ui into start-dev and stop-dev lifecycle scripts.

[question]
将 npm run sitemap:ui / npm run ops:ui 融入到 start-dev.sh和stop-dev.sh 脚本里面

[try to solve]
`start-dev.sh` / `stop-dev.sh` already forward to `.mjs`; the start/stop chain now manages Ops UI by default (same as `sitemap:ui` / `ops:ui`):

- **start**: after wrangler is ready, background-start `ops/seo/sitemap-ui.mjs` (`.run/ops-ui.pid` / `.run/ops-ui.log`); `--no-ops-ui` skips; if the site is already running, Ops UI is still started if missing.
- **stop**: cleans wrangler and Ops UI together; does not kill foreign processes on the port or fail because of them.
- **status**: reports health checks for both sides.
- Synced `.ps1` scripts and `ops/README.md`.

[actions]
- `ops/lib/dev-process.mjs`
- `ops/dev/start-dev.mjs`, `stop-dev.mjs`, `status-dev.mjs`
- `ops/dev/start-dev.sh`, `stop-dev.sh`, `status-dev.sh`, `start-dev.ps1`, `stop-dev.ps1`
- `ops/README.md`
