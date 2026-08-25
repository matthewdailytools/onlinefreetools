Date: 2026-08-13 00:49
Summary: Explain verify:r2:live checks R2 meta plus live Worker /api/ops/pages-build.

[question]
npm run verify:r2:live的作用

[try to solve]
`verify:r2:live` = all `verify:r2` checks plus a request to production `GET /api/ops/pages-build`. First it compares local wrangler `PAGES_CACHE_VERSION`, local gzip hashes, and R2 `_meta/pages-build.json`, and samples related keys; then it confirms the live Worker env version matches R2 meta with `aligned: true`. Use it after git push / CF deploy finishes to catch “new Worker + old R2” (or the reverse). Do not run while CF deploy is still in progress.

[actions]
- Read-only explanation
