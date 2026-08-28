# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：粘贴 IPv4 CIDR（或 IP+前缀/掩码），在浏览器内算出网络地址、广播、可用主机范围、主机数与掩码/通配符；并吸收 mask 互转、限额展开、contains/overlap、轻量可视化与 Proxmox 场景说明。
- 谁在什么任务里用：网络/云/虚拟化运维把「一段 CIDR 记法」立刻展开成可写进 ACL、DHCP、防火墙或文档的起止 IP 与掩码。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | Tier 0 位运算；无后端；与反向 `ip-range-to-cidr` 同栈 |
| **B** 场景桥接 | 弱 | 输出是范围/掩码字段，不是独立格式链旅程 |
| **C** 行业专属 | 弱 | 通用子网算子；Proxmox 仅 FAQ/Use case 钩子，非垂直主叙事 |

**选定主方向**：A  
**次要互链参考**：`ip-range-to-cidr`（反向任务）、`terraform-cidrsubnet` 或 `private-cidr-ranges`（同簇，intent 不撞）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对头词 `CIDR Calculator` / `CIDR Notation Calculator`：H1 用 **CIDR to IP range**，能力一带多场景）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认「一带多场景」：notation calculator / mask / expand / visual / checker / Proxmox **不拆**近义 URL；IPv6 留给 `ipv6-cidr`；VLSM / VPC 分配器不并入

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：原生 JS（IPv4 用 number/`>>>`；可选 BigInt 预留）；**无** npm IP 包
- Tier（0 / 1 / 2）：0
- CWV / 懒加载注意：无 WASM；「展开全部主机」须硬上限（如 ≤1024 行）并提示缩小前缀

## 结论

- 继续立项：是（簇内收割页；用户点名后开夹；**不占周进攻名额**，实现排期可后于 P0）
- 建议 slug：`cidr-to-ip-range`
- 与已上线工具关系：新建；related → `ip-range-to-cidr`, `terraform-cidrsubnet`（或已上线的同簇页）；禁止 absorb 进 `ip-address`
- 进入 `02-tool-info.md` 前仍缺的信息：无（Planner §2 + SERP `cidr notation calculator` tool=10 已定：title_gap + /31/32 IG）
- 用户意图审查（标 ready 前）：见 `02` 专节
