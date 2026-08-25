Date: 2026-08-14 21:13
Summary: Clarify whether start:dev with a custom port follows updatedAt incrementality.

[question]
npm run start:dev -- --port 8788 符合这个逻辑么

[try to solve]
`npm run start:dev -- --port 8788` follows the new `updatedAt` build logic, as long as no healthy dev server is already running on that port. `--port 8788` only changes the Wrangler listen port; the script still runs `npm run build:site` first, and `build:site` defaults to incremental prerender by comparing each tool catalog shard's `updatedAt` with `.cache/tool-build-state.json` `toolGeneratedAt`. It then runs `npm run upload:r2:local` to seed the local R2 mock bucket before starting Wrangler. Note: if a healthy dev server is already on 8788, the script reuses it and skips build/seed; `--no-build` also bypasses this incremental build path.

[actions]
- Checked `ops/dev/start-dev.mjs` and package scripts.
