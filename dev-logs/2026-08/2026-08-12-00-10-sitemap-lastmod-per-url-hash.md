Date: 2026-08-12 00:10
Summary: Explained sitemap lastmod is per-URL source hash, not full generation timestamp.

[question]
ops的sitemap生成，会根据工具的是否新建更新来更改sitemap的lastmod么，还是会全量按照sitemap生成时间来写lastmod

[try to solve]
按 URL 用源文件内容哈希决定 lastmod：哈希未变沿用旧日期；新建或源变了才写当前 HEAD 提交日（无 git 则当天 UTC）。不是整站统一写成「本次生成时间」。仅全量写入 `public/sitemap.xml` 时持久化 `sitemap-lastmod-state.json`；ops 筛选默认写 filtered、不污染状态。

[actions]
- （只读）scripts/site/sitemap-lastmod.mjs、sitemap.mjs、ops/README §4.0
