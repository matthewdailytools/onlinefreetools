# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

以 token 优化效率的模式进行立项：private-cidr-ranges

## 已知约束（若有）

- 参考现有工具：同簇 `terraform-cidrsubnet`、`ip-range-to-cidr`（已实现）；选题见 `docs/seo/keywords/cidr/2026-08-28-cidr-keyword-planner.md`（P0）
- 必须本地处理：是
- YMYL：否
- 优先语言：en 母版；十语 brief
- 其他：Token 效率会话 A · Brief（00–03、0b、0i、`coverage:gate --phase=0b`）；禁止 absorb 进 `ip-address`；catalog 尚无本 slug

## 建议 slug（可空，由讨论阶段拟定）

- `private-cidr-ranges`（Planner 锁定）
