Date: 2026-08-14 22:08
Summary: Clarified the R2 incremental upload decision logic and corrected a misleading log message.

[question]
你的回答：”也就是本次走的是增量上传，1530 个文件全部因 hash 匹配被跳过“，逻辑不是应该修改为根据 工具的修改更新时间来处理么

[try to solve]
Confirmed that the upload script already uses both decision paths in changed-only mode: tool pages are selected when `updatedAt > toolUploadedAt`, and non-tool page changes are selected by file hash differences. The previous answer was imprecise because the deploy output showed `delta=delta+updatedAt(0)`, meaning no hash differences and no tools with newer `updatedAt` markers. Updated the no-op upload log message from `all hashes match` to `hashes match and no tool updatedAt delta` so future deploy output reflects the real logic.

[actions]
- Inspected `scripts/upload-r2-pages.mjs`
- Inspected `scripts/lib/pages-build-meta.mjs`
- Updated `scripts/upload-r2-pages.mjs`
- Ran `node --check scripts/upload-r2-pages.mjs`
