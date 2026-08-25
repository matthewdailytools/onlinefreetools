Date: 2026-08-06 15:19
Summary: Fixed ops start/stop on Windows; added `status:dev` and an HTTP health check before reporting ready.

[question]
http://127.0.0.1:8787 无法访问，请对运维手册的命令进行测试

[try to solve]
Testing found two problems:

1. **False “already running”**: the PID file tracked the spawn process while Wrangler listened in a child; after stop, the PID could still look alive.
2. **False “unreachable”**: PowerShell/curl without `Accept: text/html` got 404 from the Worker on `/`, while a browser worked.

Fixes:
- HTTP health check before/after start (with `Accept: text/html`)
- Wait for log line `Ready on http://127.0.0.1:8787` before reporting success
- Prefer killing the LISTEN process on the port when stopping
- Auto-clean stale PID files
- Added `npm run status:dev`

Verification noted in source: `status:dev` → HTTP health OK; `Invoke-WebRequest` with Accept → 200; `restart:dev -- --no-build` succeeded.

[actions]
- `ops/lib/dev-process.mjs`
- `ops/dev/start-dev.mjs`, `stop-dev.mjs`, `status-dev.mjs`
- `package.json`, `ops/README.md`, `cloudflare-workflow.mdc`
