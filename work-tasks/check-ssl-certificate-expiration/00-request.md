# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按照建议立项工具和实现。

选词与 H1 依据：[`docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md`](../../docs/seo/keywords/web-check/2026-09-02-web-check-related-longtail-selection.md)（Bing Related 全空 → title 代理定 H1）。

- **slug**：`check-ssl-certificate-expiration`
- **H1**：Check SSL certificate expiration
- **Job**：User enters hostname; query Certificate Transparency via crt.sh JSON API (Workers cannot read peer cert from fetch); show notBefore/notAfter/issuer of newest matching cert. Rules must state CT lag vs live handshake.

## 已知约束（若有）

- 参考现有工具：`website-headers`, `domain-lookup`, `private-cidr-ranges`
- 必须本地处理：**否**（`localProcessing: false`；Worker 边缘请求）
- YMYL：否
- 优先语言：en 母版 → 十语
- 其他：Do not hard-rank on bare "ssl certificate checker" H1; expiration scene is intentional.；`page.style: opts`；Ads/Planner N/A（Bing related 空，仅 title 代理）

## 建议 slug

- `check-ssl-certificate-expiration`
