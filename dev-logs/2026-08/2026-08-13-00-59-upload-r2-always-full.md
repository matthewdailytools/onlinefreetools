Date: 2026-08-13 00:59
Summary: Confirm upload:r2 always does a full put; adding or changing a few tools still reuploads every .html.gz.

[question]
如果后续修改或新增几个工具，是否也会导致全量更新？

[try to solve]
Yes. Current `upload:r2` has no incremental path: each run puts every `.html.gz` under `public/_pages` (about 1510) via wrangler and rewrites `_meta/pages-build.json`. Changing or adding a few tools still re-renders related pages (new tools often also refresh home/taxonomy), but upload remains full. Local `--local` is also full write—just faster. Avoiding full uploads later would need hash/ETag skip of unchanged objects or an S3-style sync.

[actions]
- Read-only explanation
