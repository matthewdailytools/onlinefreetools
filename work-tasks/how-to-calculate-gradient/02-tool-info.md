# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-gradient`  
**路径**：`/tools/how-to-calculate-gradient`  
**主方向**：A  
**YMYL**：否  
**最近改写**：2026-10-13（薄页逐页改写队列 #7）

## 改写原因（2026-10-13）

审计：284 词但仍偏薄交互——仅单一固定函数、无过程行、无模长、无 Sample/Clear、无 How 步骤/Why choose；与「两点斜率」易混的边界虽有 FAQ 但演示不足。

## IG 预审

- 用户任务：在给定点求多元标量函数的 ∇f（偏导向量），理解最速上升方向
- [x] 缺口：多示例函数；过程；|∇f| 与单位方向；进页样例；与 slope 划界强化
- [x] 增益：① 四示例函数 ② 过程行 ③ 模长/单位向量 ④ Sample ⑤ FAQ 临界点/弧度
- [x] Related：`how-to-calculate-slope`、`how-to-calculate-aspect-ratio`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Gradient Calculator — Multivariable ∇f at a Point |
| Description (en) | Calculate the multivariable gradient ∇f as the vector of partial derivatives, with working and magnitude. Example: for f(x,y)=x²y+3y at (1,2), ∂f/∂x=4 and ∂f/∂y=4 so ∇f=(4,4) with \|∇f\|≈5.6569. Not a two-point slope calculator. |
| related | how-to-calculate-slope, how-to-calculate-aspect-ratio |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-13 |
| slug 结论 | **保留** `how-to-calculate-gradient` |
| 主检索词 → title/H1 | Gradient Calculator — Multivariable ∇f at a Point |
| 次要关键词 | how to calculate gradient → How/FAQ；partial derivatives → Formula；gradient descent → FAQ q3；gradient vs slope → FAQ q4 |
| 优化摘要 | H1 结果向（在一点求 ∇f）；去掉括号参数腔；desc 含 (1,2)→(4,4) 与模长 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| gradient calculator / how to calculate gradient | 吸 | title；How；FAQ q2 |
| partial derivatives vector / ∇f | 吸 | Formula；交互 |
| gradient descent meaning | 吸（说明） | FAQ q3；usecase 2 |
| magnitude of gradient | 吸 | 结果 \|∇f\|；Formula item 4 |
| gradient vs slope | **不吸**（划界） | FAQ q4 → slope 工具 |
| arbitrary symbolic CAS | **不吸** | FAQ q6 |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 主检索词任务 | 改写前能求一点但无过程/模长 → **部分满足**；四函数 + 过程 + \|∇f\| → **满足** |
| 有意不满足 | 任意符号微分 CAS、训练神经网络、两点斜率 |
| 总判 | 满足（已回写 H1、函数选择、FAQ、desc） |

## 交互规格

- 函数：xy3y（默认）/ x2y2 / xy / sincos（弧度）
- 输出：∇f、过程、\|∇f\|、单位方向（模长≈0 时提示临界点）
- 样例：xy3y 在 (1,2) → (4,4)，\|∇f\|≈5.6569
- 进页 loadSample

## 页面模块清单

- [x] H1 + 交互 + How/Why/Formula/Example/Use cases×4/FAQ×7/Related/References
