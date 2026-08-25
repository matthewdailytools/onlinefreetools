Date: 2026-08-07 05:55
Summary: start-dev timed out because port 8787 was held by another project's wrangler; scripts now detect foreign blockers and suggest --port.

[question]
start-dev still fails: "Dev server failed to become ready within timeout" after ENOENT fix.

[try to solve]
Root cause was not slow wrangler startup in this repo: **8787 was already in use** (log: `Address already in use`). The listener belonged to workerd from `seoontest/funnyT/apps/api`, not onlinefreetools.

**Immediate workaround**
```bash
npm run start:dev -- --port 8788
```
Then open http://127.0.0.1:8788/tools/html-entity

Or stop the other project's wrangler and use the default 8787 here.

**Script improvements** (`ops/lib/dev-process.mjs`, `ops/dev/start-dev.mjs`)
- Before start, detect the port; if another project owns it, print that process command line and suggest `--port 8788` instead of waiting the full 90s
- Only clean up **this repo's** wrangler/workerd so other projects are not killed
- Fail fast when logs contain `Address already in use`

[actions]
- Updated `ops/lib/dev-process.mjs`, `ops/dev/start-dev.mjs`
