# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-density`  
**路径**：`/tools/how-to-calculate-density`  
**主方向**：C  
**catalog 分类**：`calculator`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #22，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文极薄（How 一句、Formula 列表含「Pair with volume / Ohm tools」这类非内容条目、FAQ 4 条为「Sample? / 10/2=5.」式两词问答、Use cases「Quick ρ check.」），九语为旧稿。功能缺口：

- 只能求密度，不能反求质量或体积（「mass from density and volume」是同意图高频追问）；
- 无单位：结果只是 m/V 的数字，用户最常见的错误（g 与 m³ 混用差 1,000 倍）无法避免；
- 不规则物体（排水法）与规则形体（长方体、圆柱）的体积求法完全缺失；
- 结果无解释：没有过程、没有换算、没有「会不会浮」或「像什么材料」；固定 2 位小数，小密度显示为 0.00。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：作业 / 实验报告里由质量和体积求密度（或反求），并能说明步骤；或者用称重 + 排水判断一块金属 / 石头是什么
- [x] 竞品（Omni density calculator、Calculator.net、各教科书页）：多数可选单位并反求；少有排水法输入；几乎都不给「最接近材料」与浮沉判断；过程行少见
- [x] 缺口：排水法 / 长方体 / 圆柱体积来源；过程行；一次给出 6 种密度单位；比重 + 浮沉；常见材料对照；读数误差对小物体的影响
- [x] 增益：① 求解对象三选一（被求栏变只读结果栏）② 质量 6 单位、体积 7 单位、密度 6 单位（内部统一 SI）③ 体积来源：直接 / 排水（后 − 前）/ 长方体 L×W×H / 圆柱 π(d/2)²h，尺寸单位 mm·cm·m·in·ft ④ 过程行（含体积步骤）⑤ 同一密度 6 单位换算表 ⑥ 比重（水 = 1，4 °C）与浮 / 沉 / 接近中性 ⑦ 20 种常见材料（±6% 内给出最接近者）⑧ Example：9.65 g 戒指排水 0.5 mL → 19.3 g/cm³（金），读数差 0.1 mL → 16.1；松木块 10×5×2 cm、50 g → 0.5 浮 ⑨ FAQ ×7 ⑩ 权威引用（NIST SP 811、Engineering ToolBox）
- [x] Related：`how-to-calculate-volume`（形体体积）、`how-to-calculate-circle`（圆柱底面 / 直径）、`how-to-calculate-scientific-notation`（极小 / 极大密度值的写法）

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 技术 | 纯前端；Intl.NumberFormat 有效数字；`page.style: opts` |
| Title (en) | How to Calculate Density — Density Calculator That Also Solves for Mass or Volume, Even for Irregular Objects |
| Description (en) | Calculate density with ρ = m ÷ V, or solve for mass or volume, in grams, kilograms, pounds, millilitres, litres, cubic metres or cubic feet. For irregular objects, enter water levels before and after. Example: 54 g in 20 mL → 2.7 g/cm³, close to aluminium. |
| related | how-to-calculate-volume, how-to-calculate-circle, how-to-calculate-scientific-notation |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-08-09） |
| slug 结论 | **保留** `how-to-calculate-density`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**How to Calculate Density — Density Calculator That Also Solves for Mass or Volume, Even for Irregular Objects**；他语按 03 当地搜法（密度怎么算、密度の求め方、cómo calcular la densidad、Dichte berechnen、masse volumique 等） |
| 次要关键词 → desc/FAQ | density formula → Formula + FAQ q1；density of irregular object / water displacement → 体积来源 + FAQ q2 + Example；density of water → FAQ q3；g/cm³ to kg/m³ → 换算表 + FAQ q4；mass from density and volume → 求解对象 + FAQ q5；density doesn't match textbook → FAQ q6；float or sink → 比重 + FAQ q7 |
| 用户搜索习惯判断 | 「how to calculate density」是问法型主词，H1 保留问法并写明「也能反求、不规则物体」；不把单位列表串进 H1 |
| 优化摘要 | 保留 slug；H1 由「Density Calculator — Mass over Volume」改为问法 + 反求 + 不规则物体；desc 写 steps + 可验证例子；FAQ 由 4 条两词问答扩为 7 条 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| how to calculate density / density formula / density calculator | 吸（主词） | title / H1；How；Formula |
| how to find mass from density and volume | 吸 | 求解对象「Mass」；FAQ q5 |
| how to find volume from mass and density | 吸 | 求解对象「Volume」 |
| density of irregular object / water displacement method | 吸 | 体积来源「排水」；FAQ q2；Example |
| density of a cube / cylinder | 吸 | 长方体 / 圆柱体积来源；Formula item 3 |
| density of water | 吸 | FAQ q3；比重参照 |
| g/cm³ to kg/m³ / lb/ft³ conversion | 吸 | 换算表；FAQ q4；Formula item 1 |
| specific gravity / will it float | 吸 | 比重行；FAQ q7 |
| identify metal by density | 吸 | 最接近材料；Use case 2 |
| density of air / gases（理想气体 ρ = PM/RT） | **不吸**（需压力与温度，另属气体计算） | — |
| buoyancy force calculation | **不吸**（浮力计算） | — |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 本工具无独立 Planner 文件；主词与长尾按上表（2026-10-14 同意图检索整理）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 密度计算器（ρ = m/V），仍成立 |
| 主词搜索者任务 | 「由质量和体积算密度并知道怎么算」——改写前只能求密度、无单位、无过程、固定 2 位小数 → **部分满足**；改写后三向求解、单位换算、排水 / 形体体积、过程、换算表、比重、材料对照 → **满足** |
| 超出 | 材料对照与比重放在结果区下方，不干扰主结果 |
| 有意不满足 | 气体密度（需 P、T）、浮力大小：未吸 |
| 总判 | 满足（已回写 How、控件、FAQ、desc） |

## 交互规格

- 求解对象：密度（默认）/ 质量 / 体积；被求栏只读、标「result」，计算后填入结果；其单位下拉即输出单位
- 单位：质量 mg / g（默认）/ kg / t / oz / lb；体积 mL (cm³)（默认）/ L / m³ / in³ / ft³ / US gal / US fl oz；密度 g/cm³（默认）/ kg/m³ / kg/L / lb/ft³ / lb/in³ / lb/US gal
- 体积来源（体积为输入时）：直接 / 排水（前、后水位，单位同体积单位；后 ≤ 前 → 报错）/ 长方体 L×W×H / 圆柱 π(d/2)²h（尺寸单位 mm / cm（默认）/ m / in / ft）；算出的体积回填到体积栏
- 结果：主结果（5 位有效数字，分组）；过程行（含体积步骤）；6 单位换算表；比重（> 1.01 沉 / < 0.99 浮 / 其间接近中性）；最接近材料（对数距离 ≤ ln 1.06，否则说明无）
- 报错：缺数字；≤ 0；排水后 ≤ 前
- 改单位：已有结果时立即重算
- 样例：54 g、20 mL → 2.7 g/cm³ = 2,700 kg/m³ = 168.56 lb/ft³；比重 2.7，下沉；最接近铝（2.70）；进页自动运行
- Clear：清空输入与结果，求解对象 / 体积来源恢复默认，不重载样例

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（4 步）/ Why choose ×4 / Formula ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
