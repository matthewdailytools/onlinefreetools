# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把起止 IP（或一行一条的多个范围）转成覆盖该闭区间的最小 CIDR 前缀列表（含非对齐多前缀、乱序规范化、禁混族）。
- 谁在什么任务里用：网络/安全/运维工程师写 ACL、防火墙、云安全组、路由汇总时，手里只有 start–end，需要写成 CIDR。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | **是（主）** | 纯 IPv4/IPv6 整数位运算；Tier 0；无后端 |
| **B** 场景桥接 | 弱 | 可互链未来 `cidr-to-ip-range`，但本页不是旅程桥 |
| **C** 行业专属 | 弱 | 通用网络算子，非单一垂直行话页 |

**选定主方向**：A  
**次要互链参考**：`terraform-cidrsubnet`（同簇）、`ip-address`（网络入口，intent 不撞）

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对「CIDR Calculator」大词与反向 `cidr-to-ip-range` 任务分离）
- [x] 不是无增量机翻铺量
- [x] 不依赖偏离定位的重后端
- [x] 长尾默认「一带多场景」：`convert ip range to cidr` / 列表汇总 / `cidr aggregation` 并入本页，不拆近义 URL

## 方向专属检查

### 若选 A

- 成熟度 / 推荐包：原生 JS BigInt；**无** npm IP 包（与 `terraform-cidrsubnet` 一致，避免语义漂移）
- Tier（0 / 1 / 2）：0
- CWV / 懒加载注意：无 WASM；大列表展开有行数上限提示即可

## 结论

- 继续立项：是
- 建议 slug：`ip-range-to-cidr`
- 与已上线工具关系：新建；related → `terraform-cidrsubnet`, `ip-address`；反向工具 `cidr-to-ip-range` 未上线前 FAQ 一句说明「CIDR→范围」另页，不假装有链
- 进入 `02-tool-info.md` 前仍缺的信息：无（Planner IG 已定：非对齐多前缀 / 乱序规范化 / 禁混族）
- 用户意图审查（标 ready 前）：见 `02` 专节
