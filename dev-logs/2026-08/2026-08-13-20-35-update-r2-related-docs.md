Date: 2026-08-13 20:35
Summary: Sync related docs/rules/todos with S3 upload, .env creds, and upload:r2:changed.

[question]
更新相关文档

[try to solve]
Synced S3 / `.env` / `upload:r2:changed` into surrounding docs and checklists (ops §3.1 already existed; this pass added cross-refs):

- `docs/worker+R2架构/design.md`: build/deploy commands + schemaVersion 2 / fileHashes
- `docs/SEO_PUBLISH_CHECKLIST.md`: pre-ship R2 items include `.env` and optional delta path
- `ops/README.md` / `ops/worker-r2-ops.md`: deploy flow; version-alignment table includes fileHashes
- `.cursor/rules/cloudflare-workflow.mdc`: require `.env` first; local seed via `upload:r2:local`
- `scripts/deploy-site.mjs`: header comment points to §3.1
- `work-todos/2026-08/2026-08-13.md`: incremental upload marked Done

[actions]
- Updated the files listed above
