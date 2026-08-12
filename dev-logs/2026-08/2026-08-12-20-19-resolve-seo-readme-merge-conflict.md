Date: 2026-08-12 20:19
Summary: Resolved merge conflict in docs/seo/README.md by keeping both keyword funnel and SERP thumbnail sections.

[question]
解决 seo @docs/competitor-refs/aconvert-2026-08-09/README.md 冲突问题

[try to solve]
实际未合并冲突在 `docs/seo/README.md`（Aconvert 快照本身无冲突标记）。合并时本地 HEAD 增加「关键词 → 工具漏斗」索引，远端增加「出图 / 缩略图」索引；两边独立且都需要，已同时保留并完成 merge commit。当前 main 领先 origin/main 5 个提交；`public/sitemap.xml` 与 lastmod 状态仍有未暂存改动，未纳入本次合并。

[actions]
- 编辑 `docs/seo/README.md`：去掉冲突标记，保留两节
- `git add docs/seo/README.md` + merge commit `74c3e7a`
