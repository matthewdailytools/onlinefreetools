Date: 2026-08-13 01:12
Summary: Worker bundle size is not shown clearly online; use wrangler deploy --dry-run.

[question]
怎么在线上看worker的包大小

[try to solve]
Dashboard Deployments/Versions generally do not surface gzip bundle size clearly. Official guidance is to run locally `npx wrangler deploy --dry-run` (or `--outdir`) and read `Total Upload: … / gzip: …`. Current repo dry-run is about 414 KiB / gzip 83 KiB. Static Assets size is separate from the Worker script limit; free tier compressed script limit is about 3MB.

[actions]
- Read-only explanation plus local dry-run
