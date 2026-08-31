# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

采用 token效率优化模式立项剩余的cidr slug，并实现

## 已知约束（若有）

- 参考现有工具：`cidr-to-ip-range`（IPv4 展开）、`ip-range-to-cidr`（起止→前缀，含双栈）、`private-cidr-ranges`、`terraform-cidrsubnet`
- 必须本地处理：是
- YMYL：否
- 优先语言：en 母版；十语检索向重写
- 其他：
  - Planner 权威：`docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md` — slug `ipv6-cidr`，H1 **IPv6 CIDR calculator**，P1 build；须 nibble IG
  - 主叙事 `ipv6 cidr`（100–1k）；计算器近义 `ipv6 cidr calculator`（10–100）absorb
  - **禁止**并进 IPv4 `cidr-to-ip-range`；搜 IPv6 必须进本页
  - Token 流程：本会话 **A · Brief**；实现串行（coverage Skill：本 slug `phase=4` 绿之前不得开下一 slug 的 Page/i18n）

## 建议 slug（可空，由讨论阶段拟定）

- `ipv6-cidr`
