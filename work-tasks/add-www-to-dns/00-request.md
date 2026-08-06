# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

工具页面立项:add www to dns

## 已知约束（若有）

- 参考现有工具：`website-headers`、`ip-address`（开发者/站长网络链）
- 必须本地处理：部分（记录模板生成可纯前端；可选 DNS 查询走 Worker DoH，域名输入不上传到第三方业务库）
- YMYL：否
- 优先语言：十语（en 母版 → 按 `03-locale-briefs.md` 逐语重写）
- 其他：方向文档 A.10「DNS over HTTPS · Worker + DoH」；A.12 站长/SEO 辅助可作场景语境

## 建议 slug（可空，由讨论阶段拟定）

- `add-www-to-dns`（路径 `/tools/add-www-to-dns`；覆盖「加 www / apex↔www / CNAME vs A」长尾，不拆 `www-cname`、`apex-www-redirect` 薄页）
