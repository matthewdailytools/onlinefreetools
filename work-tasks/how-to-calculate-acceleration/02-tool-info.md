# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-acceleration`  
**路径**：`/tools/how-to-calculate-acceleration`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-13（薄页逐页改写队列 #4）

## 改写原因（2026-10-13）

审计：91 词；FAQ「Sample? / Advice?」；无 How 步骤、无 Why choose、无计算过程；只能求 a，作业常给 a 求 v/t。

## IG 预审

- 用户任务：匀变速直线求 a，或反解 v / v0 / t
- [x] 缺口：过程；四未知数；负加速度说明；自由落体 g；与平均速率划界
- [x] 增益：① 可解 a/v/v0/t ② 过程 ③ 例子互验 ④ 不可能输入报错 ⑤ Hypertextbook 引用
- [x] Related：`how-to-calculate-velocity`、`how-to-calculate-ohms-law`（存量）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Acceleration Calculator — From Change in Velocity Over Time |
| Description (en) | Calculate constant acceleration with a = (v − v0) ÷ t, or rearrange to find final velocity, initial velocity or time. Example: v0 = 0, v = 10, t = 2 → a = 5. Working is shown for each step. |
| related | how-to-calculate-velocity, how-to-calculate-ohms-law |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-13 |
| slug 结论 | **保留** `how-to-calculate-acceleration` |
| 主检索词 → title/H1 | Acceleration Calculator — From Change in Velocity Over Time |
| 次要关键词 | how to calculate acceleration → FAQ q1；deceleration → FAQ q2；final velocity → 模式 v；free fall / 9.8 → FAQ q4；units → FAQ q3 |
| 优化摘要 | H1 结果向；新增解 v/v0/t；过程；FAQ 重写 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| acceleration calculator / how to calculate acceleration | 吸 | title；FAQ q1 |
| a = (v-u)/t / change in velocity | 吸 | Formula；How |
| find final velocity given acceleration | 吸 | 模式 v |
| deceleration / negative acceleration | 吸 | FAQ q2 |
| free fall 9.8 | 吸（说明） | FAQ q4 |
| centripetal acceleration | **不吸** | FAQ q5 |
| average speed / velocity from distance | **不吸** | FAQ q7 → velocity 工具 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 主检索词任务 | 改写前只能求 a → **部分满足**；四向求解 + 过程 → **满足** |
| 有意不满足 | 向心加速度、变加速、平均速率 |
| 总判 | 满足（已回写 H1、模式、FAQ、desc） |

## 交互规格

- Solve for：a（默认）/ v / v0 / t；隐藏所求字段
- a=(v−v0)/t；v=v0+at；v0=v−at；t=(v−v0)/a（a≠0，t>0）
- 样例：0,10,2 → 5
- 进页 loadSample

## 页面模块清单

- [x] H1 + 交互 + How/Why/Formula/Example/Use cases×4/FAQ×7/Related/References
