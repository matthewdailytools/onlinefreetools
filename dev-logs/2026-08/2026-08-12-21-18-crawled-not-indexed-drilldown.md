Date: 2026-08-12 21:18
Summary: Classify GSC crawled-not-indexed drilldown (110 URLs) and update SEO review docs

[question]
“https___onlinefreetools.org_-Coverage-Drilldown-2026-08-12已抓取未索引 ”数据提供

[try to solve]
已读取 Drilldown（110 URL）并写入分类文档，同步更新 01/02/03。

**结构**：工具 84 · 信息页 21 · devlogs 4 · `/api/tools/ip-address` 1。  
**工具**：以图片簇多语为主（image-merge/border/watermark 等）；`ru/image-merge` 有展示且不在未收录列表 → 选择性收录，其余语种属消化期，不砍语种。  
**须修**：`Disallow: /api/`（robots 目前仅有 `/devlogs/`）；确认 live noindex；信息页 5 对尾斜杠重复做 301。

产出：`docs/seo/reviews/2026-08-12/04-crawled-not-indexed-sample.md`；已勾选 todo 抽样项。

[actions]
- docs/seo/reviews/2026-08-12/04-crawled-not-indexed-sample.md（新建）
- docs/seo/reviews/2026-08-12/01-analysis-review.md（§5.1）
- docs/seo/reviews/2026-08-12/02-next-strategy.md（P0 定性）
- docs/seo/reviews/2026-08-12/03-todo.md（勾选 + 拆修噪声项）
