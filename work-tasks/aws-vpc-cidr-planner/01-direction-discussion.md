# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把一条 VPC CIDR 按 AZ 数切成公有/私有子网，标出 AWS 每子网保留地址，并警告与 Docker `172.17.0.0/16` 重叠。
- 谁在什么任务里用：云工程师开新 VPC 时需要「这块 /16 怎么切给 3 个 AZ」，而不是读 AWS 营销页。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 子网装箱算术；Tier 0；无 AWS API |
| **B** 场景桥接 | 弱 | 可链 Terraform cidrsubnet，本页不是 IaC 求值 |
| **C** 行业专属 | 弱 | AWS 规则是边界，不是「只服务一个岗位的垂直站」 |

**选定主方向**：A  
**次要互链参考**：`terraform-cidrsubnet`（IaC 切块求值）、`cidr-to-ip-range`（看单块主机范围）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（必须是分配器：AZ × 公有/私有 + 保留地址 + 172.17 警告）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端（**无** AWS 账号/API）
- [x] 长尾默认「一带多场景」：vpc cidr / aws cidr block / azure 开关并入，不拆 URL

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：原生 JS；无 AWS SDK
- Tier（0 / 1 / 2）：0
- CWV / 懒加载注意：无 WASM

## 结论

- 继续立项：是
- 建议 slug：`aws-vpc-cidr-planner`
- 与已上线工具关系：新建；**不是** what-is VPC 页；不做 Terraform 函数求值
- 进入 `02-tool-info.md` 前仍缺的信息：无
- 用户意图审查（标 ready 前）：见 `02` 专节
