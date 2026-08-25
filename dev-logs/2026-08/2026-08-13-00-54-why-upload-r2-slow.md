Date: 2026-08-13 00:54
Summary: Explain slow remote upload:r2 due to per-file wrangler CLI puts.

[question]
为什么npm run upload:r2这么缓慢

[try to solve]
Remote upload covers ~1510 `.html.gz` files (~24MB). Each file `spawn`s `npx wrangler r2 object put` (CLI cold start + one REST round-trip), default concurrency 6 → wall clock from several to 10+ minutes. Bottleneck is process overhead and API call count, not compressed size. `upload:r2:local` writes via binding and is fast. Temporary: raise `R2_UPLOAD_CONCURRENCY`. Longer term: S3-compatible bulk upload or upload only changed files.

[actions]
- Read-only explanation
