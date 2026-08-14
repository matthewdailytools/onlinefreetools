Date: 2026-08-14 23:12
Summary: Switched site builds to full prerendering while keeping R2 uploads hash-incremental.

[question]
build site剔除增量逻辑，统一全量build。上传保留增量上传，逻辑为：每次upload R2成功之后，保存一份最后一次上传的全量文件以及对应的hash记录。后续每次上传R2前检查文件的hash与记录表的差异，不同则上传，上传完毕后更新记录表。

[try to solve]
Updated `build:site` and related prerender scripts so builds always prerender all tool pages. `scripts/build-site.mjs` now ignores old incremental flags such as `--changed-tools` or `--slug` and logs that full build is enforced. Updated R2 upload logic so `upload:r2 --changed-only` compares current `.html.gz` sha256 hashes only against the last successful upload manifest's `fileHashes`; the previous `updatedAt > toolUploadedAt` upload path was removed. The upload manifest is now schema 4 and stores the full file list, `contentHash`, `uploadedAt`, and full `fileHashes` without `toolUpdatedAt` or `toolUploadedAt`. Updated package scripts and the main workflow docs to match.

[actions]
- Updated `package.json`
- Updated `scripts/build-site.mjs`
- Updated `scripts/upload-r2-pages.mjs`
- Updated `scripts/lib/pages-build-meta.mjs`
- Updated deploy/build/R2 docs and Cursor rules
- Ran `npm run build:site`
- Ran `node scripts/upload-r2-pages.mjs --changed-only --dry-run --wrangler`
- Ran manifest schema check
- Ran `npm run lint:seo`
- Ran `node --check` on changed scripts
