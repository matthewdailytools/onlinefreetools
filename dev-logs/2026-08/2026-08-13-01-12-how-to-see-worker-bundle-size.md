Date: 2026-08-13 01:12
Summary: Worker bundle size is not shown clearly online; use wrangler deploy --dry-run.

[question]
怎么在线上看worker的包大小

[try to solve]
Dashboard Deployments/Versions 一般不直观展示 gzip 包体积。官方建议本机 `npx wrangler deploy --dry-run`（或 `--outdir`）看 `Total Upload: … / gzip: …`。当前仓库 dry-run 约 414 KiB / gzip 83 KiB。Static Assets 体积与 Worker 脚本限额分开；免费档压缩后脚本上限约 3MB。

[actions]
- （只读说明 + 本地 dry-run）
