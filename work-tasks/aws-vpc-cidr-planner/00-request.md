# 00 — 用户原始需求

> 只记录用户原话与已知约束；讨论与定稿写在 `01` / `02`。

## 原始描述

采用 token效率优化模式立项剩余的cidr slug，并实现

## 已知约束（若有）

- 参考现有工具：`cidr-to-ip-range`、`terraform-cidrsubnet`、`private-cidr-ranges`
- 必须本地处理：是
- YMYL：否（云网络算术，非财务/医疗）
- 优先语言：en 母版；十语检索向重写
- 其他：
  - Planner 权威：slug `aws-vpc-cidr-planner`（旧名 `vpc-cidr-planner` 废止），H1 **AWS VPC CIDR planner**，P2 build
  - **仅当做成分配器才立项**（SERP `aws vpc cidr` 品牌噪声；what-is / 解释页不建）
  - IG：前缀上下限 + AWS 每子网保留地址；三 AZ；避 172.17（Docker 默认桥）；Azure 开关为次模式
  - 并入：`vpc cidr`、`aws cidr block`、`vpc cidr block`、`aws vpc cidr range`
  - Token 流程：Brief 可并行；Page/i18n 须等前一 CIDR slug `phase=4` 绿
  - **不立项** `vlsm-subnet-calculator`（Planner 明确 defer P2）

## 建议 slug（可空，由讨论阶段拟定）

- `aws-vpc-cidr-planner`
