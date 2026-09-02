Date: 2026-09-02 13:49
Summary: Local R2 seed no longer opens a Cloudflare preview session for Workers AI, so `start:dev` works when `*.workers.dev` times out.
Visibility: people

[question]
start-dev failed at upload:r2:local with ConnectTimeoutError to dailyonetools.workers.dev

[try to solve]
## Context

`build:site` succeeded. `npm run upload:r2:local` then called `getPlatformProxy({ persist: true })`. Wrangler tried to create a **remote preview session** for the Workers AI binding in `wrangler.jsonc`, fetched `*.dailyonetools.workers.dev:443`, and hit `UND_ERR_CONNECT_TIMEOUT` (10s). `start-dev` exits on seed failure, so wrangler never started.

Ops docs had said local seed does not need Cloudflare. That stopped being true after the AI binding: wrangler 4.58 treats AI as always-remote. `remoteBindings: false` still printed the AI warning and still opened a preview session.

## Process

1. Matched the stack to `scripts/upload-r2-pages.mjs` `uploadLocal` → `getPlatformProxy`.
2. Confirmed wrangler types: `GetPlatformProxyOptions.remoteBindings` defaults to true; AI is always picked as a remote binding.
3. Seed path now writes a **minimal** config (same worker `name` + `r2_buckets` only, stub `scripts/lib/r2-seed-worker.mjs`) so getPlatformProxy does not load AI or site assets.
4. Default `start:dev` writes `.cache/wrangler.no-ai.json` (full config minus `ai`) and runs `wrangler dev --local -c` that file.
5. Opt-in: `--remote-bindings` / `-RemoteBindings` uses the real `wrangler.jsonc` so Prompt AI can hit Cloudflare when the network works.

## Root cause / analysis

Local persist R2 lives under `.wrangler/state/v3/r2/onlinefreetools-pages-preview`. That does not need the internet. The timeout was the **AI preview token**, not the mock bucket. SOCKS `R2_HTTPS_PROXY` would help **remote** `upload:r2` (S3); it does not wrap wrangler’s preview-session fetch used here.

## Solution

- `scripts/lib/local-r2-platform-proxy.mjs`: `getLocalPlatformProxy()` / `writeWranglerConfigWithoutRemoteBindings()`.
- `upload:r2:local` and `verify:r2 --local` use the seed helper.
- Re-run `.\ops\dev\start-dev.ps1 -NoBuild` if `_pages` is already built.

## Notes / boundaries

- Default local Prompt Expand/Polish will not call Workers AI until `--remote-bindings`.
- This machine’s getPlatformProxy smoke test can hang if a leftover `workerd` holds the persist lock; kill stray `workerd`/`node` from a failed seed before retrying.

[actions]
- Added seed stub worker and no-AI wrangler config writer; wired upload/verify/start-dev; documented `--remote-bindings`.
