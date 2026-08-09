# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-paint`  
**路径**：`/tools/how-to-calculate-paint`  
**主方向**：C  
**YMYL**：否  

## IG 预审

- 目标主词：paint calculator；how to estimate paint needed；油漆计算器 / 用漆量
- 用户任务：墙面面积（或 L×H×walls）+ 涂层 + 覆盖率 → 升数（可选罐数）
- [x] 竞品：常给面积与涂层；覆盖率默认不一；与瓷砖/混凝土内链弱
- [x] 缺口：面积直填与 L×H×面数同页；覆盖默认 10；可选 3.78 L 罐；related tile+concrete
- [x] 增益：① 公式 liters=A×coats÷coverage ② 边界（零/负）⑤ NIST 换算引用 ⑧ Example 40 m² / 2 coats / 10 → 8 L ⑨ related
- [x] 长尾：室内墙/多涂层合并本页选项与 FAQ，不拆品牌 URL
- [x] 权威：NIST SP 811（面积换算）
- [x] Related：`how-to-calculate-tile`、`how-to-calculate-concrete`

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | liters = A × coats ÷ coverage；可选 cans = ceil(liters / 3.78) |
| 2 | 边界/失败 | 面积/涂层/覆盖率须 >0；无效不显示升数 |
| 5 | 权威引用 | NIST SP 811 |
| 8 | 数值示例 | 40 m²，2 coats，10 m²/L → **8 L** |
| 9 | 主题内链 | how-to-calculate-tile、how-to-calculate-concrete |

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | Omni construction §12 #21 · P2 |
| 场景与行业 | 装修辅助、DIY 刷墙 |
| 技术 | 纯前端面积×涂层÷覆盖率；localProcessing: true |
| Title (en) | Paint Calculator — How to Estimate Paint Needed |
| Description 要点 | Estimate paint liters from wall area in m² (or length × height × walls), coats, and coverage m²/L (default 10). Example: 40 m², 2 coats, 10 m²/L → 8 L. Optional can count at 3.78 L per can. Runs in your browser. |
| Schema | WebApplication + BreadcrumbList |
| FAQ 要点 | 覆盖率怎么取；为何可选罐；面积 vs L×H×walls；是否上传 |
| Disclaimer / References | 非 YMYL；References ≥1（NIST） |
| related | how-to-calculate-tile, how-to-calculate-concrete |
| 验收 | coverage:gate all；lint:seo；进页样例 **8 L** |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-09 |
| slug 结论 | **保留** `how-to-calculate-paint`（与 Omni paint / §12 #21 / §9 #113 一致；不拆品牌色号页） |
| 主检索词 → title/H1 | en：**Paint Calculator — How to Estimate Paint Needed**；zh：**油漆计算器 — 如何估算用漆量**（主词 Paint / 油漆 / Estimate / 用漆量 落 H1） |
| 次要关键词 → desc / FAQ / Use cases | coverage / 覆盖率 → desc + Formula + FAQ；coats / 涂层 → desc + UI；3.78 L cans → FAQ；40 m² / 8 L → Example |
| 用户搜索习惯判断 | en 搜 paint calculator / paint needed；zh 搜油漆计算器/用漆量；勿把「面积、涂层、覆盖率」参数枚举进 H1 |
| 优化摘要 | 结果向 Paint Calculator + Estimate Paint Needed；禁参数枚举副标题；次词 coverage/coats 落 desc/FAQ；related 用 tile + concrete |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> `npm run coverage:gate -- --slug=how-to-calculate-paint --phase=0b`

## 交互规格（给实现用）

- 输入模式：`area`（直接 m²）或 `lhw`（墙长 m × 墙高 m × 面数）
- 涂层 coats：默认 2，须 >0
- 覆盖率 coverage：m²/L，默认 **10**，须 >0
- 输出：升数 = `A × coats ÷ coverage`；可选罐数 = `ceil(liters / 3.78)`（3.78 L/罐为常见美制加仑约值，页内标明假设）
- 失败：面积/涂层/覆盖 ≤0 或非数字 → 错误文案
- 示例：40 m²，2 coats，10 m²/L → **8 L**（可选罐：ceil(8/3.78)=3）
- **进页样例**：默认 area 模式填 40 / 2 / 10，`loadSample()` 自动算出 **8 L**

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
