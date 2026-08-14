Date: 2026-08-14 20:38
Summary: Update documentation for the default incremental build and deploy flow.

[question]
更新相关的文档

[try to solve]
Updated the remaining documentation that still described full upload/build as the default. The docs now say `build:site`, `upload:r2`, and `deploy` are incremental by default, while `build:site:full`, `upload:r2:full`, and `deploy:full` are the explicit full rebuild/reupload paths. The SEO checklist, Worker+R2 design doc, Copilot instructions, README, and ops troubleshooting notes now match the current flow.

[actions]
- Updated `.github/copilot-instructions.md`.
- Updated `README.md`.
- Updated `docs/SEO_PUBLISH_CHECKLIST.md`.
- Updated `docs/worker+R2架构/design.md`.
- Updated `ops/README.md`.
- Searched for stale default-full wording and `*:changed` recommendations.
