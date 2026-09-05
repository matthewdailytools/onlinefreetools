# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`write-countif-formula-in-excel`  
**路径**：`/tools/write-countif-formula-in-excel`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图：write a COUNTIF formula in Excel
- 用户真实任务：Build COUNTIF(range, criteria) including wildcard LIKE.
- [x] 竞品 SERP：公式站 / 模板站 / Excel Online（本页不克隆套件）
- [x] 缺口：* and ? wildcards; COUNTIFS not on this page.
- [x] 我们补哪 ≥3 条增益：规则 + 边界 + 进页样例数值
- [x] 长尾：合并进本页 FAQ/芯片，不拆近义 URL
- [x] 权威来源：Microsoft COUNTIF function support article
- [x] Use case / 边界 / Example：见交互规格
- [x] Related：excel-formulas-cheat-sheet, write-nested-if-formula-for-excel

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | COUNTIF formula |
| 2 | 边界/失败 | 空区域/条件报错；单条件而非 COUNTIFS；本地版 Excel 语法可能不同 |
| 6 | 本地隐私 | 文件与粘贴留在设备、不上传服务器 |
| 8 | 数值示例 | Range A2:A6, criteria West → =COUNTIF(A2:A6,"West") |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Catalog `page.style` | opts |
| Title (en) / H1 | **Write a COUNTIF formula in Excel** |
| Description 要点 | Process + example. Files/paste stay on the device and are not uploaded. |
| FAQ 要点（≥3） | 上传？和邻页差？头词也叫？ |
| Disclaimer / References | Microsoft COUNTIF function support article |
| related | excel-formulas-cheat-sheet, write-nested-if-formula-for-excel |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-04 |
| slug 结论 | 保留 `write-countif-formula-in-excel`（Planner 场景句 kebab） |
| 主检索词 → title/H1 | **Write a COUNTIF formula in Excel** |
| 次要关键词 → desc / FAQ / Use cases | excel countif like → FAQ wildcards |
| 用户搜索习惯判断 | 搜的是这一次动作/结果，不是 Microsoft Excel 安装 |
| 优化摘要 | H1 用场景句，不用 ms excel / online excel / IFS Excel / Pivot table Excel 头词进攻 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/excel/2026-09-04-excel-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| `excel countif like` | absorb | FAQ * ? | wildcard criteria |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-04 |
| 总判 | 满足：进页样例即跑出 COUNTIF formula |
| 主词搜索者任务 | Build COUNTIF(range, criteria) including wildcard LIKE. |
| Ads/Planner 长尾任务 | 上表每条有控件；套件编辑器 / 下载 Excel / 教程有意不满足 |
| 满足之处 | loadSample 与 Example 对齐：Range A2:A6, criteria West → =COUNTIF(A2:A6,"West") |
| 超出 / 应划边界 | 不做 Excel Online；不把邻页函数硬塞进首屏第二套控件 |
| 缺口与已做优化 | How 改为区域→条件→生成→验证；Example 补完整普通与通配公式 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：Range A1-style + criteria
- 输出：COUNTIF formula
- 核心规则 / 算法：* and ? wildcards; COUNTIFS not on this page.
- 失败与边界行为：区域或条件为空时报错；仅生成单条件 COUNTIF；本地版可能需调整函数名/分隔符
- 示例 Input → Output：Range A2:A6, criteria West → =COUNTIF(A2:A6,"West")
- **进页样例（必填）**：`loadSample()` 自动跑；与 H2 Example 一致
- **实现防呆**：opts；正则 `\\w`

## 页面模块清单（与 tool-creation 对齐）

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含进页自动样例结果）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [x] Disclaimer（本页按需）
- [x] `03-locale-briefs.md` 已填（实现十语前）
