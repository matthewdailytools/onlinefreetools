# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`square-feet`  
**路径**：`/tools/square-feet`  
**主方向**：B  
**YMYL**：否（面积换算；明确非估价）  
**最近改写**：2026-10-13（薄页逐页改写队列 #3）

## 改写原因（2026-10-13）

审计：319 词仍 <350；无 how_item、无 why_choose、无 loadSample、无 Clear；GSC 查询以「sqft ↔ m2 / 1000 sqft in m2 / 平方英尺转平方米」为主，旧页只能长×宽，不能直接换算已知面积。

## IG 预审

- 用户任务：房间长宽求面积，或把已知 sq ft / m² 互转，用于房源对照与装修估算
- [x] 竞品：多为单向换算框；少显示 NIST 精确因子与计算过程；少说明「非套内/建筑面积」
- [x] 缺口：已知面积模式；可见过程；进页样例；how/why；地板损耗 FAQ
- [x] 增益：① 双模式 ② 过程 ③ 精确因子 0.09290304 ④ 可复现例子（850→78.97、1000→92.90、10×12→120/11.15）⑤ 划界（非估价、非套内/建筑）
- [x] Related：`unit-converter`、`how-to-calculate-tile`、`how-to-calculate-concrete`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Square Feet to Square Meters — Convert Room Area for Listings & Renovation |
| Description (en) | Convert square feet to square meters, or calculate room area from length × width. Factor: 1 ft² = 0.09290304 m² (NIST). Example: 850 sq ft ≈ 78.97 m²; a 10×12 ft room = 120 sq ft ≈ 11.15 m². |
| related | unit-converter, how-to-calculate-tile, how-to-calculate-concrete |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-13 |
| slug 结论 | **保留** `square-feet`（曝光高、URL 已建立） |
| 主检索词 → title/H1 | Square Feet to Square Meters — Convert Room Area for Listings & Renovation |
| 次要关键词 → desc/FAQ | sqft to m2 / 1000 sqft → FAQ q1；how to find square footage → FAQ q3；room L×W → How + 模式 dims；what is sqft → Formula；living vs gross → FAQ q4 |
| 用户搜索习惯判断 | 结果向：sq ft → m² 换算 + 房间面积；不把估价写进 H1 |
| 优化摘要 | H1 保留换算主词；新增已知面积模式对齐 GSC；补 how/why/样例/过程；明确非估价、非套内建筑 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| square feet to square meters / sqft to m2 | 吸（主词） | title；模式 area；FAQ q2 |
| 1000 sqft in m2 / 850 sqft | 吸 | FAQ q1；Example |
| how to calculate square footage of a room | 吸 | FAQ q3；模式 dims |
| sq ft to m² converter | 吸 | title / desc |
| what is a square foot | 吸 | Formula；FAQ q1 |
| living area vs gross / 套内建筑 | 吸（划界） | FAQ q4；result_note |
| L shaped room area | 吸 | FAQ q5 |
| price per square foot / home value | **不吸** | FAQ q6 |
| paint calculator by m2 | **不吸**（涂料用量另工具） | FAQ q7 只提损耗比例 |
| acre / hectare | **不吸** | related → unit-converter |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 平方英尺面积换算 / 房间面积，仍成立 |
| 主检索词任务 | 「sqft↔m² 或房间面积」——改写前只有 L×W → **部分满足**；双模式 + 过程 → **满足** |
| 超出 | 无第二工具；不输出价格 |
| 有意不满足 | 估价、亩/公顷、涂料精确用量 |
| 总判 | 满足（已回写 H1、双模式、FAQ、desc） |

## 交互规格

- 模式 dims：单位 ft/m/in；A_ft² = L×W（m 则 ÷0.09290304；in 则各÷12）
- 模式 area：已知 ft² 或 m² ↔ 互转
- 输出：ft²、m²、过程；2 位小数显示；因子四位
- 样例：10×12 ft → 120 ft² ≈ 11.15 m²
- 进页 loadSample

## 页面模块清单

- [x] H1 + 交互 + 样例 + How/Why/Formula/Example/Use cases×4/FAQ×7/Related/References
