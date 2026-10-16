# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-pythagorean-theorem`  
**路径**：`/tools/how-to-calculate-pythagorean-theorem`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-16（薄页逐页改写队列 #48）

## 改写原因（2026-10-16）

审计：how-steps<3、why-choose<3、thin、locale-untranslated。原页仅返回缺失边数字，known 标签不区分 a/b/c，无步骤/面积/勾股数组识别。

## 与站内相邻工具的分工

- `how-to-calculate-aspect-ratio`：屏幕比例，非直角三角形。
- `how-to-calculate-gradient`：斜率；本页只做直角边与斜边。

## IG 预审

- [x] 增益：① 三向求解且输入标签随模式变化 ② a²+b²=c² 验算行与步骤 ③ 面积 / 周长 / 斜边上的高 ④ 本原及倍数勾股数组识别 ⑤ 简易直角三角形示意图 ⑥ 斜边不长于直角边时报错
- [x] Related：aspect-ratio, logarithm, gradient（保留）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Pythagorean Theorem Calculator — Find a Missing Side of a Right Triangle |
| Description (en) | Calculate the missing side of a right triangle with a² + b² = c². Example: legs 3 and 4 give hypotenuse 5. See the squared check, area, perimeter, altitude to the hypotenuse and whether the sides form a Pythagorean triple. |
| related | how-to-calculate-aspect-ratio, how-to-calculate-logarithm, how-to-calculate-gradient |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-16 |
| slug 结论 | **保留** |
| 主检索词 → title/H1 | Pythagorean Theorem Calculator — Find a Missing Side of a Right Triangle |
| 次要关键词 → desc/FAQ | hypotenuse / missing leg / 3-4-5 / altitude / obtuse / units → FAQ q1–q7 |
| 优化摘要 | H1 强调 missing side；desc 含公式、3-4-5、面积与 triple |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| pythagorean theorem calculator / find hypotenuse | 吸 | title；求 c |
| find missing leg / a = √(c²−b²) | 吸 | 求 a/b；FAQ q2 |
| 3-4-5 triangle / pythagorean triple | 吸 | triple 行；FAQ q3 |
| area of right triangle | 吸 | Area 行；Formula 4 |
| altitude to hypotenuse | 吸 | Alt 行；FAQ q5 |
| law of cosines / non-right | **不吸** | FAQ q6 说明 |
| 3D distance | **不吸** | — |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 主任务 | 求直角三角形缺失边 → 改写前部分满足 → 满足 |
| 有意不满足 | 钝角/锐角、余弦定理、立体距离 |
| 总判 | 满足 |

## 交互规格

- 模式：求 c（默认）/ a / b；两输入标签随模式切换
- 正数；斜边须严格大于已知直角边
- 结果：缺失边；验算；面积；周长；斜边上的高；勾股数组标注；示意图；步骤
- 样例：3-4-5 → 5-12-13 → a from 8,10 → 6-8-10

## 固定数字

- 3,4 → c=5；面积 6；周长 12；高 2.4；本原 3-4-5
- 5,12 → c=13；面积 30
- b=8,c=10 → a=6
- 6,8 → c=10；2×(3-4-5)

## 验收记录（2026-10-16，英文本地预渲染页）

- 3-4-5：c=5；验算；面积6；周长12；高2.4；本原 triple；SVG 可见
- 5-12-13：c=13；面积30；高≈4.615385
- 求 a（b=8,c=10）→6；标注 2×(3-4-5)=6–8–10
- 6-8-10 → c=10；同样倍数标注
- 求 a 时 c≤b 报错；无 `{placeholder}`；FAQ×7

## 页面模块清单

- [x] How×4 / Why×5 / Formula×5 / Example / Use cases×4 / FAQ×7 / Related / References / disclaimer
