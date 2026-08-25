Date: 2026-08-06 14:13
Summary: Added cross-platform start, stop, and restart scripts for the local wrangler dev server.

[question]
创建脚本，常见启动和停止应用的脚本

[try to solve]
Added local dev start/stop scripts:

| Command / file | Role |
|---|---|
| `npm run start:dev` | `build:site` + background `wrangler dev` (default 8787) |
| `npm run start:dev -- --no-build` | Skip build for a faster start |
| `npm run stop:dev` | Stop via PID file or port |
| `npm run restart:dev` | Stop then start |
| `scripts/start-dev.ps1` / `stop-dev.ps1` | Windows shortcuts |
| `scripts/start-dev.sh` / `stop-dev.sh` | macOS/Linux shortcuts |

Implementation: `scripts/lib/dev-process.mjs` (PID/port/kill), `scripts/start-dev.mjs`, `scripts/stop-dev.mjs`. Logs and PID live under `.run/` (added to `.gitignore`).

[actions]
- `scripts/lib/dev-process.mjs`
- `scripts/start-dev.mjs`, `stop-dev.mjs`
- `scripts/start-dev.ps1`, `stop-dev.ps1`, `start-dev.sh`, `stop-dev.sh`
- `package.json`
- `.gitignore`
- `.cursor/rules/cloudflare-workflow.mdc`
