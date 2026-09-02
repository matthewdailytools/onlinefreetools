# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按照建议立项工具和实现。

选词与 H1 依据：[`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`](../../docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md)（Bing Related 全空 → title 代理定 H1）。

- **slug**：`check-robots-txt-url-blocked`
- **H1**：Check if a URL is blocked by robots.txt
- **Job**：User pastes a page URL; Worker fetches origin /robots.txt; tool reports whether that path is allowed for a chosen user-agent (default Googlebot + *), and shows matched Allow/Disallow rules.

## 已知约束（若有）

- 参考现有工具：`robots-txt-generator`, `website-headers`, `on-page-seo-checker`
- 必须本地处理：**否**（`localProcessing: false`；Worker 边缘请求）
- YMYL：否
- 优先语言：en 母版 → 十语
- 其他：Forbid absorb into robots-txt-generator; generation ≠ validation (§3.3 E).；`page.style: opts`；Ads/Planner N/A（Bing related 空，仅 title 代理）

## 建议 slug

- `check-robots-txt-url-blocked`
