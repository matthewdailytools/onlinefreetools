Date: 2026-08-13 08:19
Summary: Guide to speed up remote R2 publish: raise concurrency now; S3 API + delta upload next.

[question]
如何优化R2的发布速度

[try to solve]
The bottleneck is spawning wrangler CLI once per file, not gzip size. Speed up from low to high effort:

## Current state

- `npm run upload:r2` runs ~**1510** `.html.gz` files each via `spawn npx wrangler r2 object put`
- Default `R2_UPLOAD_CONCURRENCY=6`
- Wall clock is dominated by **CLI cold start × count**, not the ~24MB transfer
- `upload:r2:local` writes via binding, so local is fast and remote is slow

## Available immediately (no code change)

1. **Raise concurrency** (simplest)
   ```bash
   R2_UPLOAD_CONCURRENCY=20 npm run upload:r2
   ```
   Empirically 12–24 is often faster than 6; higher may hit API limits or local CPU — tune a few times.

2. **Skip the bucket when HTML did not change**
   ```bash
   npm run deploy:skip-upload
   ```
   Use when only Worker/Assets changed.

3. **Do not treat every local `wrangler deploy` as required**
   Default path is upload → git push → CF pulls the repo; do not double-count Worker deploy and R2 fill as one slow path.

## High-ROI changes (recommended)

| Direction | Effect | Approach |
|------|------|------|
| **S3-compatible PutObject** | Often “minutes–10+ min” → “tens of seconds” | `@aws-sdk/client-s3` + R2 endpoint; in-process concurrent `PutObject`; **stop** spawning wrangler. Use R2 S3 credentials (Object R/W), separate from wrangler Admin token |
| **Delta only** | Near seconds when one tool changes | Local build already has whole-bucket `contentHash`; extend meta with per-file sha256, compare last `.cache/pages-build.json` or R2 meta, put only changes + rewrite `_meta/pages-build.json` |
| **Batch/pipeline** | Stabilizes | CI: `build:site` → S3 upload → `verify:r2`; local push only; or local delta + CI full fallback |

Priority: **S3 direct upload (drop CLI) first → then delta**. Concurrency tuning alone is a stopgap.

## Not worth prioritizing

- Further gzip compression: already `.html.gz`; size is not the main cost
- Multipart: objects are small; multipart does not help
- Expecting Cloudflare Git deploy to fill R2: remote default **does not** run `upload:r2`

Minimal script change: remote path in `upload-r2-pages.mjs` → S3 `PutObject` + optional `--changed-only`.

[actions]
- Read-only guidance
