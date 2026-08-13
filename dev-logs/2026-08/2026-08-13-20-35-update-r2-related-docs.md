Date: 2026-08-13 20:35
Summary: Sync related docs/rules/todos with S3 upload, .env creds, and upload:r2:changed.

[question]
更新相关文档

[try to solve]
已把 S3 / `.env` / `upload:r2:changed` 同步进周边文档与清单（运维 §3.1 此前已有，本次补齐交叉引用）：

- `docs/worker+R2架构/design.md`：构建部署命令 + schemaVersion 2 / fileHashes
- `docs/SEO_PUBLISH_CHECKLIST.md`：发版前 R2 项含 `.env` 与增量可选路径
- `ops/README.md` / `ops/worker-r2-ops.md`：deploy 流程、版本对齐表含 fileHashes
- `.cursor/rules/cloudflare-workflow.mdc`：前置 `.env`；本地 seed 用 `upload:r2:local`
- `scripts/deploy-site.mjs`：头注释指向 §3.1
- `work-todos/2026-08/2026-08-13.md`：增量 upload 标为 Done

[actions]
- Updated the files listed above
