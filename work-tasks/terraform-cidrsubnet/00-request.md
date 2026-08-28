# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

按照 token 优化的模式立项：terraform-cidrsubnet

## 已知约束（若有）

- 参考现有工具：catalog **无** CIDR 工具；**禁止** absorb 进 `ip-address`（漏斗 CIDR 批已裁定）
- 必须本地处理：是（前缀/参数在浏览器内求值，不上传）
- YMYL：否
- 优先语言：en 母版；十语 brief 须当地检索词（函数名 `cidrsubnet` 可保留）
- 其他：
  - 来源：CIDR Keyword Planner 重跑表 P0；主词 `terraform cidrsubnet`（100–1k）；`competition_tier=long_gap`
  - SERP：`docs/seo/keywords/cidr/2026-08-28-cidr-longtail-serp.md`（docs/博客为主，可交互求值稀）
  - H1 定稿：**Terraform cidrsubnet**（Planner slug/H1 一致）
  - 并入本页、不另建 URL：`cidrsubnet`、`cidrhost`、`cidrnetmask`、`hashicorp subnets cidr`、`cidrsubnets`（复数）
  - 不占本页：通用 `cidr calculator` / `cidr to ip range`（另 slug `cidr-to-ip-range`）；AWS VPC 分配器（`aws-vpc-cidr-planner`）
  - 会话模式：token 优化 Session **A · Brief**（只交付 `work-tasks/` + gate 0b；不改 `src/`）

## 建议 slug（可空，由讨论阶段拟定）

- `terraform-cidrsubnet`
