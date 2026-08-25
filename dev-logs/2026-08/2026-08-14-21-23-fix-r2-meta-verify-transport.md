Date: 2026-08-14 21:23
Summary: Fix R2 meta verification after updatedAt incremental upload.

[question]
=== [deploy] verify R2 ↔ Worker version ===

> cloudflare-workers-openapi@0.0.1 verify:r2
> node scripts/verify-r2-worker-sync.mjs

[verify:r2] worker PAGES_CACHE_VERSION=4
[verify:r2] local gz files=1520 contentHash=31596af63ef5c4c98cdb426072a4a2fc871169150390ef733790e1a197a5dd5d
[verify:r2] target=remote bucket=onlinefreetools-pages
[verify:r2] ok key _pages/en/index.html.gz
[verify:r2] ok key _pages/en/about.html.gz
[verify:r2] ok key _pages/en/tools/text-diff.html.gz
[verify:r2] FAILED:
- R2 missing _meta/pages-build.json — run npm run upload:r2
[deploy] failed: verify R2 ↔ Worker version (exit 1)
xuli@Matthew-2023 onlinefreetools %

[try to solve]
Fixed a transport mismatch between `verify:r2` and `upload:r2`: `upload:r2` prefers R2 S3 credentials when available, while the old `verify:r2` remote read path used only wrangler. `verify:r2` now also prefers S3 when credentials are configured, with `--wrangler` to force wrangler. Then ran `npm run upload:r2` to refresh remote `_meta/pages-build.json`, and `npm run verify:r2` confirmed R2 meta, contentHash, fileCount, and `PAGES_CACHE_VERSION=4` aligned.

[actions]
- Updated `scripts/verify-r2-worker-sync.mjs` to prefer S3 for remote verification when S3 credentials are configured.
- Updated `ops/worker-r2-ops.md` and `ops/README.md` to document verify transport behavior.
- Ran `npm run upload:r2` to write `_meta/pages-build.json`.
- Ran `npm run verify:r2`; verification passed with `transport=s3`.
