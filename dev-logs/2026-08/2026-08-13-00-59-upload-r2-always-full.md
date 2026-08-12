Date: 2026-08-13 00:59
Summary: Confirm upload:r2 is always full put; few-tool changes still reupload all gz.

[question]
如果后续修改或新增几个工具，是否也会导致全量更新？

[try to solve]
会。当前 `upload:r2` 无增量：每次把 `public/_pages` 下全部 `.html.gz`（约 1510）逐个 wrangler put，并重写 `_meta/pages-build.json`。改/加几个工具时，构建也会重渲相关页（加工具常连带首页/taxonomy），但上传仍是全量。本地 `--local` 同样全量写，只是快。要避免全量需日后做按 hash/ETag 跳过未变文件或 S3 同步。

[actions]
- （只读说明）
