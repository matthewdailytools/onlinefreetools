# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

如何实现根据域名查询相关信息

立项：domain-lookup

## 已知约束（若有）

- 参考现有工具：`add-www-to-dns`（已有 `GET /api/tools/dns-lookup` DoH）、`website-headers`、`ip-address`
- 必须本地处理：否（须经 Worker 查 DoH / RDAP；FAQ 诚实说明）
- YMYL：否
- 优先语言：en 母版 + 十语 brief
- 其他：平台为 Cloudflare Workers；浏览器无法直连 WHOIS:43；注册数据优先 RDAP

## 建议 slug（可空，由讨论阶段拟定）

- `domain-lookup`
