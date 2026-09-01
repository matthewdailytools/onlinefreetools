Date: 2026-09-01 13:24
Summary: start:dev now aborts on local R2 seed failure and status:dev probes the newest catalog tool page so home-200 plus new-tool-404 cannot look healthy.

[question]
启动测试本地流程中修正这个bug

[try to solve]
The local bug was: `build:site` wrote new `_pages` HTML, then `upload:r2:local` crashed, but `start-dev` only warned and still started wrangler. Home and old tools stayed 200 from Assets / the old mock bucket; new slugs 404’d. `--no-build` also skipped seed entirely.

Changes in the start/test flow:
- `runSeedLocalR2` throws; wrangler is not started if seed fails (`--no-seed-r2` still skips on purpose).
- Seed also runs with `--no-build` and when wrangler is already up.
- After Ready, GET the newest catalog `updatedAt` slug (and the newest mtime file) with `Accept: text/html`. Disk mtime alone is wrong after a full gzip (it picked `yaml-json` while `open-graph-image-size` was the new page).
- `status:dev` FAIL if those tool URLs are not 200.
- Docs: `ops/README.md` (“新工具 404、旧工具正常”), `ops/worker-r2-ops.md`, `cloudflare-workflow.mdc`; PowerShell `-NoSeedR2`.

Verified: `npm run status:dev` reports `zh/open-graph-image-size` and `zh/yaml-json` both HTTP 200.

[actions]
- `ops/dev/start-dev.mjs`: fail-hard seed; seed on `--no-build`; tool-page smoke
- `ops/lib/dev-process.mjs`: catalog + mtime probes
- `ops/dev/status-dev.mjs`: tool-page health in status
- `ops/dev/start-dev.ps1` / `start-dev.sh`
- `ops/README.md`, `ops/worker-r2-ops.md`, `.cursor/rules/cloudflare-workflow.mdc`
