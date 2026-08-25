Date: 2026-08-14 21:12
Summary: Update docs for the updatedAt incremental tool flow.

[question]
更新文档

[try to solve]
Updated the related docs so tool-page incremental generation and upload are clearly based on `updatedAt` versus the last generation/upload timestamps, and so `npm run tool:touch -- --slug=<slug>` is part of the daily flow. Build and upload do not key off latest push, latest commit, or uncommitted git diff; git is only for final commits and for Cloudflare pulling the repo to deploy Worker/Assets.

[actions]
- Updated `.github/copilot-instructions.md` to mention `tool:touch`.
- Updated `docs/SEO_PUBLISH_CHECKLIST.md` with the pre-build updatedAt bump step.
- Updated `docs/worker+R2架构/design.md` command examples with `tool:touch`.
- Updated `ops/README.md` command table with `tool:touch`.
- Re-scanned docs for stale git-based build/upload incrementality wording.
