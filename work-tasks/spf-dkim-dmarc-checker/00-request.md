# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按照建议立项工具和实现。

选词与 H1 依据：[`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`](../../docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md)（Bing Related 全空 → title 代理定 H1）。

- **slug**：`spf-dkim-dmarc-checker`
- **H1**：SPF DKIM DMARC checker
- **Job**：User enters domain + optional DKIM selector (default google); DoH TXT for SPF, _dmarc.domain, selector._domainkey; explain policy (p=, v=spf1 mechanisms summary) — not raw dump only.

## 已知约束（若有）

- 参考现有工具：`domain-lookup`, `website-headers`
- 必须本地处理：**否**（`localProcessing: false`；Worker 边缘请求）
- YMYL：否
- 优先语言：en 母版 → 十语
- 其他：One page triple; do not split email-pack doorway URLs.；`page.style: opts`；Ads/Planner N/A（Bing related 空，仅 title 代理）

## 建议 slug

- `spf-dkim-dmarc-checker`
