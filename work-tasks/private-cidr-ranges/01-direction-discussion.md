# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：粘贴 IP/CIDR，立刻判断属于哪类私网/特殊用途前缀（RFC1918、CGNAT、ULA、文档网段等），并对照可点选参考表。
- 谁在什么任务里用：网络/云/SRE 在配 VPC、ACL、VPN、Tailscale 时核对「这段地址算不算私网/特殊用途」。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 次要 | Tier 0 前缀匹配即可，非品类主叙事 |
| **B** 场景桥接 | 弱 | 不是格式 A→B 转换链 |
| **C** 行业专属 | **是** | 岗位=网络/云运维；行话=RFC1918/CGNAT/ULA；规范表=权威增量 |

**选定主方向**：C  
**次要互链参考**：同簇 CIDR 计算器（`ip-range-to-cidr`、`terraform-cidrsubnet`）；勿链成「我的公网 IP」主任务。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体（相对静态 cheat sheet：交互分类 + 多类前缀对照）
- [x] 不是无增量机翻铺量（十语检索向 brief）
- [x] 不依赖偏离定位的重后端（纯本地匹配）
- [x] 长尾默认「一带多场景」：`private cidr` / `private ip ranges cidr` / `tailscale cidr` absorb；不拆近义 URL；不并入 `ip-address`

## 方向专属检查

### 若选 C

立项三问（任一「否」则暂缓）：

1. 能否一句话说清「哪个岗位在什么业务里用」？是 — 网络/云工程师核对私网与特殊用途 CIDR。
2. 能否写出该行业才有的对照表/边界/标准？是 — RFC1918 / RFC6598 / RFC4193 / 文档前缀 / Tailscale 占用 CGNAT 说明。
3. 实现是否落在可行浏览器技术且 CWV 可控？是 — Tier 0 原生 JS 前缀包含判断。

## 结论

- 继续立项：是
- 建议 slug：`private-cidr-ranges`
- 与已上线工具关系：新建；related → `ip-range-to-cidr`、`terraform-cidrsubnet`
- 进入 `02-tool-info.md` 前仍缺的信息：无（Planner + SERP 已齐）
- 用户意图审查（标 ready 前）：见 `02` 专节
