# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-triangle-area`  
**路径**：`/tools/how-to-calculate-triangle-area`  
**主方向**：C  
**YMYL**：否  
**最近改写**：2026-10-13（薄页逐页改写队列 #2，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-13）

审计：en 正文 108 词；模式下拉只有「Base × height」一个选项；FAQ 为 "Sample?" / "Advice?" / "Educational only." 等空壳；7 条他语值与英文相同。搜「area of triangle with 3 sides」「heron's formula calculator」的人在本页无法完成任务。

## IG 预审

- 用户任务：已知某组量（底高 / 三边 / 两边夹角 / 顶点坐标）求三角形面积，并想看到步骤
- [x] 竞品：多为单一底×高；海伦公式页常不显示 s 与各因子；少有坐标法与不可能输入的报错
- [x] 缺口：多入口；可见计算过程；三角不等式 / 角度范围 / 三点共线报错；钝角三角形高在形外的说明；单位换算
- [x] 增益：① 四种方法一页（同意图：都是「求三角形面积」）② 计算过程 ③ 可复现例子（3-4-5 → 6、7-8-9 → 26.8328、5,7,30° → 8.75、(0,0)(4,0)(0,3) → 6、等边 6 → 15.5885）④ 不可能输入报错 ⑤ 权威引用（MathWorld）
- [x] 权威：Wikipedia — Triangle；Wolfram MathWorld — Triangle Area
- [x] Related：`how-to-calculate-pythagorean-theorem`、`how-to-calculate-circle`、`square-feet`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Triangle Area Calculator — Base and Height or Three Sides, with Working |
| Description (en) | Calculate the area of a triangle from base and height, three sides (Heron's formula), two sides and the angle between them, or three corner points — with the working shown. |
| related | how-to-calculate-pythagorean-theorem, how-to-calculate-circle, square-feet |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-13（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-triangle-area`（与 how to calculate triangle area 一致；已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Triangle Area Calculator — Base and Height or Three Sides, with Working**；zh：**三角形面积计算器 — 已知底和高或三条边求面积，附过程** |
| 次要关键词 → desc/FAQ | area of triangle with 3 sides / heron's formula → H1 + desc + Formula 2 + FAQ q2；how to find area of triangle → FAQ q1；right triangle area → FAQ q4；two sides and angle (SAS) → desc + Formula 3；coordinates → desc + Formula 4；equilateral → FAQ q7 |
| 用户搜索习惯判断 | H1 只放两个最高频入口（底高、三边），SAS / 坐标放 desc 与模式选项，避免目录腔 |
| 优化摘要 | H1 由裸「Triangle Area Calculator」加结果向副标题；模式由 1 增至 4；desc 写全四种方法并去掉 "Browser-only geometry process" 空话；FAQ 全部重写为可复现例子 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| triangle area calculator / area of a triangle calculator | 吸（主词） | title / H1 |
| how to find the area of a triangle / formula | 吸 | How 总答；FAQ q1 |
| area of triangle with 3 sides / heron's formula calculator | 吸 | H1；模式 sss；Formula 2；FAQ q2 |
| area of triangle with two sides and angle / SAS area | 吸 | 模式 sas；Formula 3 |
| area of triangle from coordinates / shoelace | 吸 | 模式 coords；Formula 4；Use case 3 |
| area of right triangle | 吸 | FAQ q4（直角边 / 斜边上的高 2.4） |
| area of equilateral triangle | 吸 | FAQ q7（√3/4 × a²） |
| height of triangle / obtuse triangle height | 吸 | Formula 1；FAQ q3 |
| triangle inequality / can these sides make a triangle | 吸（报错 + FAQ） | err_inequality；FAQ q5 |
| triangle perimeter / angle calculator | **不吸**（异意图，需不同输出） | — |
| hypotenuse / missing side | **不吸**（另有工具） | related → how-to-calculate-pythagorean-theorem |
| square footage of a room | **不吸** | related → square-feet |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用（本 slug 无 Planner 分析）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 三角形面积计算器，仍成立 |
| 主检索词任务 | 「用手上已有的量求面积」——改写前只有底×高，三边 / 两边夹角无法求 → **部分满足**；改写后四种入口 + 计算过程 + 报错 → **满足** |
| 超出 | 四种方法共用一个模式下拉，不另开第二个工具；不输出周长/角度 |
| 有意不满足 | 求斜边 / 缺失边、周长、角度：related 指向勾股定理工具 |
| 总判 | 满足（已回写 H1、模式、How、FAQ、desc） |

## 交互规格

- 模式：bh（默认）/ sss / sas / coords；切换只显示对应输入组
- bh：A = b × h ÷ 2；sss：三角不等式校验后 Heron，显示 s 与四个因子；sas：0° < C < 180°，显示 sin C；coords：鞋带公式，|cross| < 1e-12 报共线
- 输出：面积 + 计算过程（dir=ltr）；数字最多 4 位小数，按页面语言小数点（Intl `{lang}-u-nu-latn`）
- 报错：缺值（坐标）/ 长度 ≤ 0 / 三角不等式 / 角度越界 / 三点共线；报错时隐藏过程
- 样例：bh 10、6 → 30；`A = 10 × 6 ÷ 2 = 30`
- 进页自动 loadSample；进度 HUD：不适用

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Formula ×4 / Example / Use cases ×4 / FAQ ×7 / Related / References
- [x] `03-locale-briefs.md` 已按当地搜法重填
