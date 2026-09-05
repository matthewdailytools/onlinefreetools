# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`wrap-formula-with-ifna`  
**路径**：`/tools/wrap-formula-with-ifna`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图：wrap a formula with IFNA
- 用户真实任务：Paste an existing formula and an alternate; wrap with IFNA().
- [x] 竞品 SERP：公式站 / 模板站 / Excel Online（本页不克隆套件）
- [x] 缺口：去除多余等号；解释 IFERROR 与 IFNA；不在浏览器伪执行任意 Excel 公式。
- [x] 我们补哪 ≥3 条增益：规则 + 边界 + 进页样例数值
- [x] 长尾：合并进本页 FAQ/芯片，不拆近义 URL
- [x] 权威来源：Microsoft IFNA function support article
- [x] Use case / 边界 / Example：见交互规格
- [x] Related：write-nested-if-formula-for-excel, excel-formulas-cheat-sheet

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 生成 `IFNA(inner,fallback)`；去掉内部公式开头等号并正确引用文本 |
| 2 | 边界/失败 | 仅处理 `#N/A`；不隐藏其他错误；页面不执行任意 Excel 公式 |
| 6 | 本地隐私 | 文件与粘贴留在设备、不上传服务器 |
| 8 | 数值示例 | Inner `NA()`、alt `0` → `=IFNA(NA(),0)`；在 Excel 中结果为 0 |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Catalog `page.style` | opts |
| Title (en) / H1 | **Wrap a formula with IFNA** |
| Description 要点 | Process + example. Files/paste stay on the device and are not uploaded. |
| FAQ 要点（≥3） | 上传？和邻页差？头词也叫？ |
| Disclaimer / References | Microsoft IFNA function support article |
| related | write-nested-if-formula-for-excel, excel-formulas-cheat-sheet |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-04 |
| slug 结论 | 保留 `wrap-formula-with-ifna`（Planner 场景句 kebab） |
| 主检索词 → title/H1 | **Wrap a formula with IFNA** |
| 次要关键词 → desc / FAQ / Use cases | ifna excel → FAQ; excel if na → FAQ |
| 用户搜索习惯判断 | 搜的是这一次动作/结果，不是 Microsoft Excel 安装 |
| 优化摘要 | H1 用场景句，不用 ms excel / online excel / IFS Excel / Pivot table Excel 头词进攻 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/excel/2026-09-04-excel-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| `ifna excel` | absorb | FAQ | wrap UI |
| `excel if na` | absorb | FAQ | same wrap |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-04 |
| 总判 | 满足：进页样例自动生成 `=IFNA(NA(),0)`；明确计算应在 Excel 中完成 |
| 主词搜索者任务 | Paste an existing formula and an alternate; wrap with IFNA(). |
| Ads/Planner 长尾任务 | 上表每条有控件；套件编辑器 / 下载 Excel / 教程有意不满足 |
| 满足之处 | `loadSample` 与 Example 对齐：Inner `NA()`、alt `0` → `=IFNA(NA(),0)` |
| 超出 / 应划边界 | 不做 Excel Online；不把邻页函数硬塞进首屏第二套控件 |
| 缺口与已做优化 | 删除会对任意内部公式错误显示备用值的伪试算；How/FAQ 明示只生成语法 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：Inner formula + alternate value
- 输出：`IFNA(...)` 包装公式
- 核心规则 / 算法：去除内部公式开头等号；文本备选值转义；仅承诺生成语法
- 失败与边界行为：空表、非数字、无 SheetJS、加密工作簿
- 示例 Input → Output：Inner `NA()`、alt `0` → `=IFNA(NA(),0)`；Excel 结果为 0
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
