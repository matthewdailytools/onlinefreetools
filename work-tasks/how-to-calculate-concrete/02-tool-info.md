# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-concrete`  
**路径**：`/tools/how-to-calculate-concrete`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：concrete calculator；how to calculate concrete volume；混凝土方量 / 混凝土计算器
- 用户任务：输入板/柱/圆柱尺寸 → 体积（m³ 或 ft³）→ 可选袋数粗算
- [x] 竞品：按形状分页或板为主；袋数常无假设说明
- [x] 缺口：同页多形状；袋容积假设写清；与面积/单位换算内链；边界（零/负尺寸）
- [x] 增益：① 公式（板/柱/圆柱）② 边界 ⑤ 权威换算引用 ⑧ Example 2.0 m³ ⑨ related
- [x] 长尾：slab/column/cylinder/bags 合并本页选项，不拆 URL
- [x] 权威：NIST SP 811（长度/体积换算）；PCA Learn — concrete basics（材料语境）
- [x] Related：`unit-converter`、`square-feet`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | Formula：板 L×W×T；柱 L×W×H；圆柱 πr²H |
| 2 | 边界/失败 | 尺寸须 >0；圆柱半径/直径须 >0 |
| 5 | 权威引用 | NIST + PCA |
| 8 | 数值示例 | 5×4×0.1 m → 2.0 m³；可选袋数 |
| 9 | 主题内链 | unit-converter、square-feet |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | Omni construction §12 #18 · P2 |
| 场景与行业 | 装修、施工辅助、DIY 铺板/柱脚 |
| 技术 | 纯前端几何体积；localProcessing: true |
| Title (en) | Concrete Calculator — How to Estimate Concrete Volume |
| Description 要点 | Estimate concrete volume for slab, column, or cylinder from length×width×thickness (or radius×height). Example: 5 m × 4 m × 0.1 m slab → 2.0 m³. Optional bag count using 0.015 m³ (or 0.45 ft³) per bag — assumption shown. Runs in your browser. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 板公式；袋容积假设；圆柱用直径还是半径；是否上传 |
| Disclaimer / References | 非 YMYL；References ≥1（NIST + PCA） |
| related | unit-converter, square-feet |
| 验收 | coverage:gate all；lint:seo；进页样例 2.0 m³ |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-concrete`（与 Omni concrete-slab 合并意图 / §12 #18 一致；形状不拆页） |
| 主检索词 → title/H1 | en：**Concrete Calculator — How to Estimate Concrete Volume**；zh：**混凝土计算器 — 如何估算混凝土方量**（主词 Concrete / 混凝土 / volume / 方量 落 H1） |
| 次要关键词 → desc / FAQ / Use cases | slab / 板厚 → desc + Formula；bags / 袋数 → desc + FAQ；column/cylinder → UI 选项 + Formula；cubic meters / 立方米 → Example |
| 用户搜索习惯判断 | en 搜 concrete calculator / concrete volume；zh 搜混凝土计算器/方量；勿把「长、宽、厚、袋容积」参数枚举进 H1 |
| 优化摘要 | 结果向 Concrete Calculator + Estimate Concrete Volume；禁参数枚举副标题；次词 slab/bags 落 desc/FAQ；related 用 unit-converter + square-feet |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> `npm run coverage:gate -- --slug=how-to-calculate-concrete --phase=0b`

## 交互规格（给实现用）

- 输入：形状选项 slab | column | cylinder；单位 m | ft；尺寸字段随形状切换；可选「估算袋数」勾选
- 输出：体积（m³ 或 ft³，与单位一致）；若勾选袋数 → ceil(volume / bagVolume)
- 袋容积假设（须页面可见）：公制 **0.015 m³/袋**；英制 **0.45 ft³/袋**（常见 60 lb 袋粗量级，非品牌规格）
- 核心公式：
  - Slab：V = L × W × T
  - Column（矩形柱）：V = L × W × H
  - Cylinder：V = π × (D/2)² × H（UI 用直径）
- 失败：任一尺寸 ≤0 或非数字 → 错误文案，不显示体积
- 示例 Input → Output：slab，5 m × 4 m × 0.1 m → **2.0 m³**；袋数可选 ≈ ceil(2/0.015)=134
- **进页样例**：默认 slab + 米制 5/4/0.1，`loadSample()` 自动算出 2.0 m³（与 H2 Example 对齐）；袋数默认勾选以展示袋数行

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
