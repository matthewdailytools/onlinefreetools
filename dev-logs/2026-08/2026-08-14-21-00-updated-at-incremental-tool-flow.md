Date: 2026-08-14 21:00
Summary: Replace git-based tool incrementality with per-tool updatedAt markers.

[question]
这个会有问题，过于依赖git，修改为，每个工具增加一个最新更新时间，每次编辑修改时候修改为最新时间，这个时间也可以展示在页面上。以此时间作为标记和上次最后生成和上传时间作对比。

[try to solve]
Switched tool-page build/upload incrementality from git diffs to each tool catalog shard's `updatedAt`. When editing a tool, bump `updatedAt` in `src/site/tool-catalog.d/{slug}.json`. Build compares against local `.cache/tool-build-state.json` `toolGeneratedAt`; upload compares against `_meta/pages-build.json` `toolUploadedAt`. Git commit, push, and uncommitted changes no longer decide whether a tool page enters incremental generation or upload.

[actions]
- Added `updatedAt` to all tool catalog shards and merged generated catalog/i18n outputs.
- Added `npm run tool:touch -- --slug=<slug>` to bump tool `updatedAt` markers from the command line.
- Added timestamp-based incremental selection, local generation state, R2 upload markers, and schemaVersion 3 meta fields.
- Displayed each tool's last updated time in shared tool page content.
- Added `lint:seo` validation for missing/invalid tool `updatedAt`.
- Updated README, workflow rules, SEO checklist, Worker/R2 design docs, and ops runbooks.
- Verified with `node --check`, `npm run merge:tools`, `npm run lint:seo`, `npm run prerender:tools -- --slug=text-diff`, `npm run gzip:pages -- --slug=text-diff`, and `npm run build:site -- --slug=text-diff`.
