Date: 2026-08-08 14:22
Summary: Renamed archive tool slugs to match search word order (create-zip-file, unzip-file) instead of API-style zip-create.

[question]
slug：zip-create，没有考虑用户搜索习惯

[try to solve]
已将建议 slug 改为贴近检索语序：`create-zip-file`（create zip file）、`unzip-file`（unzip online）；同步 `extract-archive` / `gzip-file` / `convert-archive-to-zip`。在 A.5 增加「Slug 命名原则」：动词/任务词在前，禁用 zip-create 类 API 命名。清单总表与方向文档已对齐；中文「在线压缩」等落 title/H1，不另拆 slug。

[actions]
- docs/2026-07-28-tool-direction.md
- docs/2026-08-08-tool-inventory-table.md
