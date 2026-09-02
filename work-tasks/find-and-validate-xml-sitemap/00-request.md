# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按照建议立项工具和实现。

选词与 H1 依据：[`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`](../../docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md)（Bing Related 全空 → title 代理定 H1）。

- **slug**：`find-and-validate-xml-sitemap`
- **H1**：Find and validate XML sitemap
- **Job**：User enters a site URL; tool finds sitemap via robots.txt Sitemap: lines and/or /sitemap.xml; validates XML structure, counts urls, flags index vs urlset, shows sample locs. Not a generator.

## 已知约束（若有）

- 参考现有工具：`sitemap-xml-generator`, `indexnow`, `on-page-seo-checker`
- 必须本地处理：**否**（`localProcessing: false`；Worker 边缘请求）
- YMYL：否
- 优先语言：en 母版 → 十语
- 其他：Generation ≠ validation; keep separate from sitemap-xml-generator.；`page.style: opts`；Ads/Planner N/A（Bing related 空，仅 title 代理）

## 建议 slug

- `find-and-validate-xml-sitemap`
