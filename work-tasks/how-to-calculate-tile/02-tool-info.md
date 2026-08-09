# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-tile`  
**路径**：`/tools/how-to-calculate-tile`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：tile calculator；how to calculate tile quantity；瓷砖计算器 / 瓷砖用量
- 用户任务：输入房间面积（或 L×W）+ 单片 cm 尺寸 + 损耗% → 片数（ceil）
- [x] 竞品：常给面积与片规格；损耗默认不一；与混凝土/面积换算内链弱
- [x] 缺口：面积直填与 L×W 同页；损耗默认 10% 写清；ceil 边界；related 混凝土+平方英尺
- [x] 增益：① 公式（含损耗）② 边界（零/负）⑤ NIST 换算引用 ⑧ Example 12 m² / 30×30 / 10% → 147 ⑨ related
- [x] 长尾：floor/wall/waste 合并本页选项与 FAQ，不拆 URL
- [x] 权威：NIST SP 811（长度/面积换算）；TCNA 瓷砖安装指引（损耗语境）
- [x] Related：`how-to-calculate-concrete`、`square-feet`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | tiles = ceil(A × (1 + waste%/100) ÷ tileArea)；tileArea 由 cm→m² |
| 2 | 边界/失败 | 面积/尺寸须 >0；损耗 ≥0；无效不显示片数 |
| 5 | 权威引用 | NIST SP 811；TCNA |
| 8 | 数值示例 | 12 m²，30×30 cm，10% → **147** 片 |
| 9 | 主题内链 | how-to-calculate-concrete、square-feet |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | Omni construction §12 #19 · P2 |
| 场景与行业 | 装修辅助、DIY 铺地/墙 |
| 技术 | 纯前端面积÷单片×损耗；localProcessing: true |
| Title (en) | Tile Calculator — How to Estimate Tile Quantity |
| Description 要点 | Estimate how many tiles you need from room area (m² or length×width), tile size in cm, and waste % (default 10). Example: 12 m² room, 30×30 cm tiles, 10% waste → 147 tiles (rounded up). Runs in your browser. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 损耗怎么算；为何向上取整；面积 vs L×W；是否上传 |
| Disclaimer / References | 非 YMYL；References ≥1（NIST + TCNA） |
| related | how-to-calculate-concrete, square-feet |
| 验收 | coverage:gate all；lint:seo；进页样例 **147** 片 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-tile`（与 Omni tile / §12 #19 / §9 #111 一致；地砖/墙砖不拆页） |
| 主检索词 → title/H1 | en：**Tile Calculator — How to Estimate Tile Quantity**；zh：**瓷砖计算器 — 如何估算瓷砖用量**（主词 Tile / 瓷砖 / Quantity / 用量 落 H1） |
| 次要关键词 → desc / FAQ / Use cases | waste / 损耗 → desc + Formula + FAQ；room area / 面积 → desc + UI；floor/wall → Use cases；30×30 / 147 → Example |
| 用户搜索习惯判断 | en 搜 tile calculator / tile quantity；zh 搜瓷砖计算器/用量；勿把「面积、长宽、损耗%」参数枚举进 H1 |
| 优化摘要 | 结果向 Tile Calculator + Estimate Tile Quantity；禁参数枚举副标题；次词 waste/area 落 desc/FAQ；related 用 concrete + square-feet |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> `npm run coverage:gate -- --slug=how-to-calculate-tile --phase=0b`

## 交互规格（给实现用）

- 输入模式：`area`（直接 m²）或 `lw`（房间长×宽，单位 m）
- 瓷砖：长 cm、宽 cm（须 >0）
- 损耗：百分比，默认 **10**，须 ≥0
- 输出：所需片数 = `ceil(A × (1 + waste/100) / tileArea_m2)`，其中 `tileArea_m2 = (Lcm/100)×(Wcm/100)`
- 失败：面积/尺寸 ≤0 或非数字、损耗 <0 → 错误文案，不显示片数
- 示例 Input → Output：房间 **12 m²**，瓷砖 **30×30 cm**，损耗 **10%** → **147** 片
  - 验算：单片 0.09 m²；12×1.10/0.09 = 146.666… → ceil = 147
- **进页样例**：默认 area 模式填 12 / 30 / 30 / 10，`loadSample()` 自动算出 **147**

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1
- [ ] Disclaimer（非 YMYL，不强制）
- [x] `03-locale-briefs.md` 已填（实现十语前）
