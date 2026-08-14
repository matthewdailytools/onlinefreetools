Date: 2026-08-14 21:12
Summary: Update docs for the updatedAt incremental tool flow.

[question]
更新文档

[try to solve]
已补充相关文档，明确工具页增量生成/上传以 `updatedAt` 和上次生成/上传时间为依据，并把 `npm run tool:touch -- --slug=<slug>` 写入日常流程。构建/上传不看最新 push、最新 commit 或未提交 git diff；git 只用于最终提交和 Cloudflare 拉仓库部署 Worker/Assets。

[actions]
- Updated `.github/copilot-instructions.md` to mention `tool:touch`.
- Updated `docs/SEO_PUBLISH_CHECKLIST.md` with the pre-build updatedAt bump step.
- Updated `docs/worker+R2架构/design.md` command examples with `tool:touch`.
- Updated `ops/README.md` command table with `tool:touch`.
- Re-scanned docs for stale git-based build/upload incrementality wording.
