# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按照建议立项工具和实现。

选词与 H1 依据：[`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`](../../docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md)（Bing Related 全空 → title 代理定 H1）。

- **slug**：`validate-security-txt`
- **H1**：Validate security.txt
- **Job**：User enters domain/URL; fetch https://host/.well-known/security.txt (fallback /security.txt); parse Contact/Expires/Preferred-Languages/Canonical per RFC 9116; report missing required fields.

## 已知约束（若有）

- 参考现有工具：`website-headers`, `on-page-seo-checker`, `open-graph-preview`
- 必须本地处理：**否**（`localProcessing: false`；Worker 边缘请求）
- YMYL：否
- 优先语言：en 母版 → 十语
- 其他：RFC docs SERP dropped as H1; keep product H1 Validate security.txt.；`page.style: opts`；Ads/Planner N/A（Bing related 空，仅 title 代理）

## 建议 slug

- `validate-security-txt`
