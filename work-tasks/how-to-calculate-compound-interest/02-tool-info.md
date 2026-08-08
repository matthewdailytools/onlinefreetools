# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`how-to-calculate-compound-interest`  
**路径**：`/tools/how-to-calculate-compound-interest`  
**主方向**：C  
**YMYL**：是  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> Omni 合并：`docs/competitor-refs/omnicalculator-2026-08-08/omnicalculator-intent-merge-howto.tsv`。

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：
  1. compound interest calculator / how to calculate compound interest  
  2. compound interest formula  
  3. 复利计算器 / 复利公式 / 如何计算复利  
  4. simple vs compound interest（同页模式，不拆页）  
  5. compound interest monthly / daily（频率作控件，不拆页）
- 用户真实任务：输入本金、年利率、年数（与复利频率），得到终值与利息；理解复利与单利差异及「非投资建议」。
- [x] 竞品 SERP 前 5–10 都提供了什么？  
  本金/利率/期数输入、终值数字、简短公式；部分有频率下拉；少假设表与醒目免责；Omni/ToolDone 有讲解深度。
- [x] 它们没讲清什么？（≥3 条缺口）  
  1. 复利频率与名义利率假设表（年化口径）  
  2. 单利对照同一组输入（避免拆 simple-interest 页）  
  3. 醒目非投资建议 + 权威公式来源  
  4. r=0、P≤0、极端期数边界  
  5. 与 ROI / 百分比变化的意图边界（Related）
- [x] 我们补哪 ≥3 条增益？  
  - **①** 可见公式：复利 \(A = P(1 + r/n)^{nt}\)；单利 \(A = P(1 + rt)\)（模式切换）→ Formula  
  - **④** 假设表：利率为名义年利率、频率 n、不含追加存入/税费 → Rules  
  - **⑤** References：Investopedia Compound Interest 等 ≥2  
  - **②** 边界：P≤0、非法 n、过大指数溢出提示 → FAQ  
  - **⑧** 固定数值 Example（与进页样例一致）  
  - **③** Use cases：存款估算、教学作业、通胀粗算对照（非投顾）  
  - **⑨** related catalog  
  - **YMYL** Disclaimer
- [x] 长尾：**合并**进本页（simple interest 模式；daily/monthly/quarterly/annual 频率；勿拆 APY 专用薄页——APY 概念进 FAQ）。
- [x] 权威来源 URL：  
  - https://www.investopedia.com/terms/c/compoundinterest.asp  
  - https://www.investopedia.com/terms/s/simple_interest.asp  
  - 公式对照（研发）：https://www.omnicalculator.com/finance/compound-interest （不写入用户「来源」）
- [x] Use case 草稿：定期存款复利粗算；课堂作业；比较「同样利率下复利 vs 单利」  
- [x] 边界草稿：本金≤0；利率为 0 → 终值=本金；负利率教育场景可选支持或拒绝（实现选拒绝负利率并提示）；期数过大防 Infinity  
- [x] 结果区 → Example + FAQ 固定数字与免责  
- [x] Related：`how-to-calculate-roi`、`how-to-calculate-percentage-change`（上线后补 `how-to-calculate-emi`）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 复利/单利公式可见；频率 n 定义 |
| 2 | 边界/失败 | FAQ：P≤0、溢出、非投资建议 |
| 3 | 场景语境 | Use cases：存款/教学/复利vs单利 |
| 4 | 对照表 | 假设表（名义年利率、频率、无追加存入） |
| 5 | 权威引用 | Investopedia ≥2 |
| 6 | 本地隐私 | 纯浏览器计算，无上传 |
| 7 | 多语言 | `03` 十语 brief |
| 8 | 数值示例 | Example = 进页样例 |
| 9 | 主题内链 | related ≥2 |

**计划硬性增益**：① ④ ⑤ + YMYL Disclaimer

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | 计算器 · C-V4 财务 · **YMYL** · 清单 P1 · Omni 意图合并 |
| 场景与行业 | 个人理财教育、学生作业、存款复利粗算 |
| 技术（包、Tier、本地处理） | Tier 0；纯 JS；`localProcessing: true` |
| Title (en) | Compound Interest Calculator — How to Calculate Future Value |
| Description 要点 | 用本金、年利率、年数与复利频率算终值与利息；可见公式；示例本金 10000、年利率 5%、年复利 10 年；可选单利对照；非投资建议。≥120 字落地 |
| Schema | WebApplication + BreadcrumbList（与可见免责一致） |
| FAQ 要点（≥3） | 复利公式；复利 vs 单利；复利频率含义；是否投资建议；利率为 0 |
| Disclaimer / References | **必备**非投资建议；Investopedia compound + simple ≥2 |
| related | `how-to-calculate-roi`, `how-to-calculate-percentage-change` |
| 验收 | `lint:seo` YMYL；公式与假设表可见；进页样例出结果；`03` ≥3 轮后 `i18n-done` |
| 工期粗估 | ~1–1.5d（含十语） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-08-08 |
| slug 结论 | **保留** `how-to-calculate-compound-interest`：对齐「how to calculate compound interest」主检索；与清单/Omni 合并表一致；不另拆 `compound-interest-calculator` / `simple-interest`（doorway） |
| 主检索词 → title/H1 | en：**Compound Interest Calculator — How to Calculate Future Value**（对齐 ROI/BMI）；zh：**复利计算器 — 如何计算复利终值** |
| 次要关键词 → desc / FAQ / Use cases | compound interest formula → Formula/FAQ；simple vs compound → 模式 + FAQ；monthly/daily compounding → 频率控件 + FAQ；复利公式/单利对照 → zh FAQ/Use cases；APY 概念 → FAQ 一句，不拆页 |
| 用户搜索习惯判断 | en 头词多为 “compound interest calculator” 与 “how to calculate…” 并存；slug 用 how-to-calculate，title 同时吃 calculator；zh 搜「复利计算器」「复利公式」；勿把「本金、利率、期数、频率」堆进 H1 |
| 优化摘要 | 初稿参数枚举 → 改为 `Calculator — How to Calculate Future Value`（与 ROI/BMI 杂交模式）；单利/频率为同页次词；与 ROI 分意图 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 验收：`npm run coverage:gate -- --slug=how-to-calculate-compound-interest --phase=0b`

## 交互规格（给实现用）

- 输入：
  - 本金 P（>0）
  - 名义年利率 r（% 或小数，UI 用 %；≥0）
  - 时间 t（年，>0；可用小数）
  - 复利频率 n：每年 1 / 2 / 4 / 12 / 365（或 Continuous 若做：\(A=Pe^{rt}\)，可选 P2；首版可先离散频率）
  - 模式：Compound（默认）| Simple
- 输出：终值 A；利息 A−P；可选展示有效年利率近似（FAQ/次要结果，非必拆）
- 核心规则 / 算法：
  - Compound：\(A = P\,(1 + r/n)^{n t}\)，r 为小数年利率  
  - Simple：\(A = P\,(1 + r t)\)  
  - 展示中间量时可说明 n、nt
- 失败与边界行为：
  - 非数字 / P≤0 / t≤0 → 行内错误，不算出 Infinity  
  - r=0 → A=P，利息 0  
  - 结果非有限数 → 提示缩小期数或检查输入
- 示例 Input → Output（与 Example / 进页样例一致）：
  - P=10000，r=5%/年，t=10，n=1（年复利），Compound → A=16288.95（四舍五入到分或 2 位小数）；利息=6288.95  
  - 同输入 Simple → A=15000；利息=5000（对照）
- **进页样例（必填）**：加载上述 Compound 默认值并 `loadSample()` **自动算出**终值与利息；H2 Example 数字与结果区一致

## 页面模块清单（与 tool-creation 对齐）

> 勾选前已完成「清单前检索覆盖优化」且 `coverage:gate --phase=0b` 绿。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [x] Disclaimer（YMYL 必备）
- [x] `03-locale-briefs.md` 已填（实现十语前）
