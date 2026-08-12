Date: 2026-08-13 00:46
Summary: Refresh ops docs for upload → git push → live verify deploy path.

[question]
更新运维文档

[try to solve]
已重写/对齐运维文档到现行发版：`npm run deploy`（upload+verify）→ git push（CF）→ `verify:r2:live`。更新 `ops/worker-r2-ops.md`（文首发版一览、§2–10）、`ops/README.md`、`ops/seo/keyword-to-tool-ops.md`；Ops UI 手册标题改为 upload / git push / verify。

[actions]
- Rewrote `ops/worker-r2-ops.md`
- Updated `ops/README.md`, `ops/seo/keyword-to-tool-ops.md`, `ops/seo/sitemap-ui.mjs`
