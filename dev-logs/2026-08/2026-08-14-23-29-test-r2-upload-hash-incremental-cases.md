Date: 2026-08-14 23:29
Summary: Tested the R2 upload hash-incremental behavior across multiple cases.

[question]
进行分情况测试上传功能

[try to solve]
Tested the upload selection logic without writing production R2. Unit-style cases verified: missing previous manifest uploads all files, matching hashes upload none, one changed hash uploads only that key, a new key uploads only the new key, legacy `toolUploadedAt` is ignored when hashes match, and generated manifest schema 4 stores `fileHashes` without `toolUpdatedAt` or `toolUploadedAt`. Then ran the real upload entry in dry-run mode against the current remote/wrangler path, which reported `files=1530 upload=0 skipped=1530`. Local R2 dry-run initially reported `upload=1260 skipped=270`; after a real local simulated R2 upload, the script wrote `_meta/pages-build.json` with schema 4 and 1530 hashes. A second local dry-run then reported `upload=0 skipped=1530`, confirming successful manifest persistence and no-op behavior after hashes match.

[actions]
- Ran unit-style Node assertions for hash diff and manifest schema
- Ran `node scripts/upload-r2-pages.mjs --changed-only --dry-run --wrangler`
- Ran `npm run upload:r2:local -- --dry-run`
- Ran `npm run upload:r2:local`
- Ran `npm run upload:r2:local -- --dry-run` again
- Inspected `.cache/pages-build.json`
