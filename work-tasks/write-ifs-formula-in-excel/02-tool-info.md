# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`write-ifs-formula-in-excel`  
**路径**：`/tools/write-ifs-formula-in-excel`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词 / 长尾意图：write an IFS formula in Excel
- 用户真实任务：Emit IFS() from the same condition table; fail closed with a note for Excel before 2016.
- [x] 竞品 SERP：公式站 / 模板站 / Excel Online（本页不克隆套件）
- [x] 缺口：TRUE else branch；Excel 2019 / Microsoft 365+；对照 nested IF page。
- [x] 我们补哪 ≥3 条增益：规则 + 边界 + 进页样例数值
- [x] 长尾：合并进本页 FAQ/芯片，不拆近义 URL
- [x] 权威来源：Microsoft IFS function support article
- [x] Use case / 边界 / Example：见交互规格
- [x] Related：write-nested-if-formula-for-excel, wrap-formula-with-ifna

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 完整 IFS 字符串 + 页内试算 + Excel 2019/Microsoft 365 兼容提示 |
| 2 | 边界/失败 | 永久版 Excel 2016 及更早不支持；空条件报错；本地版语法可能不同 |
| 6 | 本地隐私 | 文件与粘贴留在设备、不上传服务器 |
| 8 | 数值示例 | Same West/East rows → =IFS(A1="West","A",A1="East","B",TRUE,"Other") |
| 9 | 主题内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Catalog `page.style` | opts |
| Title (en) / H1 | **Write an IFS formula in Excel** |
| Description 要点 | Process + example. Files/paste stay on the device and are not uploaded. |
| FAQ 要点（≥3） | 上传？和邻页差？头词也叫？ |
| Disclaimer / References | Microsoft IFS function support article |
| related | write-nested-if-formula-for-excel, wrap-formula-with-ifna |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-04 |
| slug 结论 | 保留 `write-ifs-formula-in-excel`（Planner 场景句 kebab） |
| 主检索词 → title/H1 | **Write an IFS formula in Excel** |
| 次要关键词 → desc / FAQ / Use cases | ifs excel → FAQ also-called; ifs function excel → desc |
| 用户搜索习惯判断 | 搜的是这一次动作/结果，不是 Microsoft Excel 安装 |
| 优化摘要 | H1 用场景句，不用 ms excel / online excel / IFS Excel / Pivot table Excel 头词进攻 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/excel/2026-09-04-excel-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| `ifs excel` | absorb FAQ | FAQ also-called | not H1 |
| `ifs function excel` | build | H1 scene | IFS() emit + 2016 boundary |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-04 |
| 总判 | 满足：进页样例自动生成完整 IFS、显示试算并提示 Excel 2019/Microsoft 365+ |
| 主词搜索者任务 | Emit IFS() from the same condition table; fail closed with a note for Excel before 2016. |
| Ads/Planner 长尾任务 | 上表每条有控件；套件编辑器 / 下载 Excel / 教程有意不满足 |
| 满足之处 | loadSample 与 Example 对齐：Same West/East rows → =IFS(A1="West","A",A1="East","B",TRUE,"Other") |
| 超出 / 应划边界 | 不做 Excel Online；不把邻页函数硬塞进首屏第二套控件 |
| 缺口与已做优化 | 版本边界修正为 Excel 2019/Microsoft 365+；移除 H1/搜索词元叙述并补完整公式 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：Same condition rows as nested IF
- 输出：IFS 字符串 + 试算 + Excel 2019/Microsoft 365 兼容提示
- 核心规则 / 算法：TRUE else branch；Excel 2019 / Microsoft 365+；对照 nested IF page。
- 失败与边界行为：无条件时报错；首个为真条件优先；永久版 Excel 2016 不支持；本地版可能需调整语法
- 示例 Input → Output：Same West/East rows → =IFS(A1="West","A",A1="East","B",TRUE,"Other")
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
