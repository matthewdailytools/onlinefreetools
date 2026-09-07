Date: 2026-09-07 13:23
Summary: `npm run upload:r2` did not fail on an auth 403; missing R2 S3 API token credentials forced the wrangler fallback, which then crashed with `spawn npx ENOENT` on Windows.
Visibility: people

[question]
分析是否由于缺乏api token而无法完成 npm run upload:r2

[try to solve]
## Context

The user ran `npm run upload:r2` in the project terminal. The command exited 1. The question is whether that was because an API token was missing.

## Process

1. Read `scripts/upload-r2-pages.mjs` and `scripts/lib/r2-s3-client.mjs`. Default `upload:r2` is `--changed-only`. Remote transport is S3 when `hasR2S3Credentials()` is true; otherwise it falls back to `npx wrangler r2 object get/put`.
2. Inspected the terminal output. The process never printed `[upload-r2] files=… transport=…`. It died inside `getRemoteWranglerText()` while fetching `_meta/pages-build.json`.
3. Confirmed local env without printing secrets: no `.env`, no `.env.local`, and all of `R2_ACCOUNT_ID` / `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` / `CLOUDFLARE_API_TOKEN` were empty. `hasR2S3Credentials()` was false.

## Root cause / analysis

Two different tokens exist in this workflow. They are not interchangeable:

- **R2 S3 API token** (Dashboard → R2 → Manage API Tokens): `R2_ACCESS_KEY_ID` + `R2_SECRET_ACCESS_KEY`, plus `R2_ACCOUNT_ID`. This is what the fast S3 path needs.
- **Cloudflare API Token** (`CLOUDFLARE_API_TOKEN` / Profile → API Tokens): used by wrangler REST. An Object Read & Write R2 token cannot replace it.

What actually happened:

1. Because S3 credentials were absent, `--changed-only` skipped `s3GetObjectText` and called `wrangler r2 object get` for `_meta/pages-build.json`.
2. That spawn used `spawn('npx', ['wrangler', …])` without `shell: true`. On Windows `npx` is `npx.cmd`, so Node raised `Error: spawn npx ENOENT` before wrangler could even ask for a token.
3. The crash is therefore **not** “API token rejected (403/401)”. It is “no R2 S3 credentials → wrangler fallback → Windows cannot spawn `npx`”.

Missing the R2 S3 token is still the reason the recommended path never started. Filling `.env` from `.env.example` would use S3 and would not hit the `npx` spawn at all.

## Solution

To use the intended S3 upload:

1. Copy `.env.example` → `.env` (gitignored).
2. Create an R2 API token with Object Read & Write on `onlinefreetools-pages` (and `assets` if also running `upload:r2:og`).
3. Set `R2_ACCOUNT_ID`, `R2_ACCESS_KEY_ID` (32 chars), `R2_SECRET_ACCESS_KEY` (64 chars). Do not put a Profile Cloudflare API Token in those fields.
4. Recheck with `npm run upload:r2 -- --dry-run` and expect `transport=s3`.

If S3 still cannot be configured and wrangler fallback is required, that path needs `wrangler login` or a separate Admin Cloudflare API Token, plus a Windows-safe spawn (`npx.cmd` / `shell: true` / local `node_modules/wrangler`). That spawn bug is independent of token presence.

## Notes / boundaries

- Do not write secrets into git, logs, or chat.
- `upload:r2:local` does not need these tokens; this diagnosis is for remote `npm run upload:r2` only.
- Historical similar failures: 403 from the wrong token type (`ops/worker-r2-ops.md` §9.1); ETIMEDOUT when credentials exist but Cloudflare is unreachable (§9.2). Neither matches this terminal log.

[actions]
- Inspected terminal `npm run upload:r2` output (`spawn npx ENOENT` on wrangler get)
- Confirmed `.env` / R2 S3 keys / `CLOUDFLARE_API_TOKEN` are absent without printing values
