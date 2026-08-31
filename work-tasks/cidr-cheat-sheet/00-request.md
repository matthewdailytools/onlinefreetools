# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

采用 token效率优化模式立项剩余的cidr slug，并实现

## 已知约束（若有）

- 参考现有工具：`cidr-to-ip-range`（计算器/展开）、`private-cidr-ranges`（私网分类，非总表）
- 必须本地处理：是
- YMYL：否
- 优先语言：en 母版；十语检索向重写
- 其他：
  - Planner 权威：slug `cidr-cheat-sheet`（由旧名 `cidr-prefix-chart` 改），H1 **CIDR cheat sheet**，P1 build
  - 并入：`cidr chart`、`cidr notation chart`、`cidr chart comptia`、what-is / notation FAQ、兽医 CIDR 消歧
  - IG：可点选 /8–/32；CompTIA 列；/31 /32 脚注
  - **不是** CIDR 计算器（展开任意前缀 → `cidr-to-ip-range`）
  - Token 流程：Brief 可与 `ipv6-cidr` 并行；Page/i18n **串行**（须等 `ipv6-cidr` phase=4 绿）

## 建议 slug（可空，由讨论阶段拟定）

- `cidr-cheat-sheet`
