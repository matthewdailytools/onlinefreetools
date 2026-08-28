# 01 — 工具方向讨论

> 对照 `docs/2026-07-28-tool-direction.md`。一条工具只标一个**主方向**（A / B / C），不要硬凑三维交叉。

## 候选一句话

- 工具做什么：把霍尔探头 / 高斯计 / 手机磁力计读数在特斯拉与高斯等单位之间换算，并对照典型场强与仪器量程；次要模式用钕铁硼牌号与几何估算轴上场，而不是再做一个磁铁店吸力计算器首页。
- 谁在什么任务里用：先要知道「怎么测」（仪器与摆放），再把读数换成 T/G 并对照磁铁大概多少高斯；业余选型看场强而不是吸力公斤。作业向的洛伦兹力 / 库仑力 **不是**本页用户。

## 主方向判定

| 选项 | 是否匹配 | 理由 |
|---|---|---|
| **A** 浏览器 JS 能力 | 技术落地是 | Tier 0 纯公式、无 WASM；但这是物理量换算/估算，不是「展示某 JS 包能力」 |
| **B** 场景桥接 | 弱 | 不是格式/状态从 A 到 B 的工作流桥 |
| **C** 行业专属 | **是** | 实验室 / 物理课 / 磁测量岗位才认 B vs H、T vs G、霍尔探头量程；有 SI 与典型场强对照 |

**选定主方向**：C  
**次要互链参考**（可选，非立项条件）：`how-to-calculate-ohms-law`（电磁学相邻）、`how-to-calculate-density`（物理计算器簇）。不链 `magnet-link-decoder`。不把日常 `unit-converter` 当同意图（该页无磁学单位）。

## 红线自检

- [x] 不是仅改 title/slug 的空壳变体 — 主意图从「吸力计算器」改为「测量读数换算 + 解读」；交互主路径是读数换算，吸力/牌号为次模块
- [x] 不是无增量机翻铺量 — 本回合只立项 brief，十语待实现回合按 brief 重写
- [x] 不依赖偏离定位的重后端 — 无仪器驱动、无云端标定
- [x] 长尾默认「一带多场景」，不轻易拆近义 URL — tesla↔gauss、霍尔探头、地磁场 µT、N 级轴向估算、吸力关系、词表中的 field strength / gauss strength / bar magnet / magnet strength chart 全部留在本 slug；不拆 magnetic-force、lorentz、coulomb 独立页

## 方向专属检查

### 若选 C

立项三问（任一「否」则暂缓）：

1. 能否一句话说清「哪个岗位在什么业务里用」？是 — 实验员 / 学生把高斯计或手机磁力计读数换算成 SI，并判断是否落在探头量程内。
2. 能否写出该行业才有的对照表/边界/标准？是 — 1 T = 10⁴ G；真空近似 B = μ₀H；地磁场约 25–65 µT；霍尔探头 vs 手机磁力计量程；N 级剩磁 Br 表。
3. 实现是否落在可行浏览器技术且 CWV 可控？是 — Tier 0 算术；进页 `loadSample()` 即出 200 G → 0.02 T。

## 与漏斗策略的关系（给实现/周审看，不进用户文案）

- 原 `magnet-pull-force-calculator` 因 K&J 等商店吸力页标 `mid_covered`，**不得**再以「magnet pull force calculator」做 H1 去硬刚商店。
- 用户指定主词 **measuring magnetic fields**：EN SERP 以实验指南、霍尔探头厂商文、百科为主，另有少量 tesla↔gauss 转换器。本页 **people-first 任务**是「把一次测量读数换算并对照典型值」，不是再写一篇「如何测磁场」空壳科普。
- 可交互缺口：前排多为文章或卖仪器；本页提供读数换算 + 典型场强表 + 仪器量程边界 +（次）N 级轴向估算。吸力公式只进 FAQ，避免把门面做成商店克隆。
- 2026-08-28 词表：头词三件套量级均为 1,000–1 万，但意图不同。**H1 只锁定 measuring magnetic fields**；`magnetic field of magnet` 进 desc/Use cases；`magnetic force` 进 FAQ（场 vs 力），禁止把 title 改成 Magnetic Force。`magnetic field calculator` / `magnetic field strength` 用副标题「Field strength calculator」吸收，不另开 URL。库仑力、张力、电学力、泛「how to calculate force」不进本页主文案。

## 结论

- 继续立项：是（用户 2026-08-28 明确要求创建）
- 建议 slug：`measuring-magnetic-fields`
- 与已上线工具关系：新建；Related 指向物理计算器，不增强 `magnet-link-decoder`
- 进入 `02-tool-info.md` 前仍缺的信息：无。意图审查见 `notes.md`：主词「怎么测」须写进 How；估算模式保持次要。
