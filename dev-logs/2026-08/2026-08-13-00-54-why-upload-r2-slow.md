Date: 2026-08-13 00:54
Summary: Explain slow remote upload:r2 due to per-file wrangler CLI puts.

[question]
为什么npm run upload:r2这么缓慢

[try to solve]
远程约 1510 个 `.html.gz`（~24MB），每个都 `spawn npx wrangler r2 object put`（冷启动 CLI + REST 一轮），默认并发 6，墙钟常数分钟到十余分钟。瓶颈是进程开销与 API 次数，不是压缩体积。`upload:r2:local` 走 binding 直写故快。可临时提高 `R2_UPLOAD_CONCURRENCY`；长期应改 S3 兼容批量上传或只传变更文件。

[actions]
- （只读说明）
