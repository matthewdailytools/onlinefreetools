# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`excel-compare-files`  
**路径**：`/tools/excel-compare-files`  
**主方向**：A  
**YMYL**：否  

---

## IG 预审

- 目标主词：Excel compare files；excel compare online → desc；csv 同页
- 用户真实任务：两份表对格子，默认第一张工作表。
- [x] 竞品：Compare Excel Files Online 类站。
- [x] 缺口：空单元格；列错位按坐标不按表头；只比当前 sheet。
- [x] 增益：A1 坐标规则；空格 vs 空；sheet 选择；SheetJS；隐私；十语。
- [x] 权威：https://docs.sheetjs.com/ ；https://www.ecma-international.org/publications-and-standards/standards/ecma-376/
- [x] Use cases：报价两版、导出名单、作业表。
- [x] Example：两份 2×2 表，B2 不同。
- [x] Related：csv-json、text-diff、compare-two-text-files-online

### 计划勾选的 §3.1 维度

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 规则 | 按单元格坐标比对 |
| 2 | 边界 | 空单元格、类型文本/数字 |
| 4 | 对照 | 只比当前 sheet |
| 5 | 权威 | SheetJS docs |
| 6 | 隐私 | 文件留在设备 |
| 7 | 多语言 | 03 |
| 8 | 示例 | 进页 CSV/xlsx 样例 |
| 9 | 内链 | related ≥2 |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Catalog `page.style` | opts |
| Title (en) / H1 | **Excel compare files** |
| Description 要点 | Choose two spreadsheets, compare the current sheet cell by cell. Process + example B2. Files stay on the device and are not uploaded. Online 不进 H1。 |
| FAQ | 上传？只第一张表？CSV？空格子/列错位？公式、显示值与格式边界？ |
| related | csv-json, text-diff |

## 清单前检索覆盖优化（生成页面模块清单前必做）

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-01 |
| slug 结论 | `excel-compare-files` 对齐 Planner 原句 kebab |
| 主检索词 → title/H1 | **Excel compare files**（online 进 desc） |
| 次要关键词 → desc / FAQ / Use cases | excel compare online → desc；compare two csv → FAQ/自动识别；excel compare strings → FAQ 不另建 URL |
| 用户搜索习惯判断 | 要对格子不是要比二进制文件 |
| 优化摘要 | H1 跟 Planner 原句；不把 Online 塞进 H1；CSV 同页 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

## Ads / Keyword Planner 长尾（有分析时必做）

- [x] 已引用分析路径：`docs/seo/keywords/text-compare/2026-09-01-text-compare-topic.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由（若有） |
|---|---|---|---|---|
| excel compare files | build 主词 | H1 | 两表 → 格子差 | |
| excel compare online | absorb | desc | 同上 | online 不进 H1 |
| compare two csv / excel compare strings | absorb | FAQ | csv 可读；字符串不另页 | |

- [x] 交互规格已按上表补齐能力（不仅写进文案）

## 用户意图审查（标 ready 前必做）

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-01 |
| 总判 | 满足：进页两份表已标出不同格子；默认第一张 sheet |
| 主词搜索者任务 | 两份 Excel/表对格子 |
| Ads/Planner 长尾任务 | 主词能办成；csv 同页 |
| 满足之处 | loadSample 两份小表 B2 不同 |
| 超出 / 应划边界 | 不整本工作簿逐表默认全比 |
| 缺口与已做优化 | How 写选两个表、默认第一张 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：两个 file，xlsx/xls/csv；sheet 下拉默认第一张
- 输出：不同单元格列表（地址 + 左右显示文本）；输出统一 HTML 转义，工作簿文本不会被解释为标签
- 核心：SheetJS 读 `sheet_to_json({ header: 1, raw: false })`；缺格当 `''`；不单独比较公式表达式、样式、批注、列宽或工作簿结构
- 失败：非表、加密、空表、库失败
- **进页样例**：两个 CSV File 自动比
- **实现防呆**：opts；`\\w`

## 页面模块清单（与 tool-creation 对齐）

- [ ] 实现阶段再勾落地项
- [ ] `03-locale-briefs.md` 已填
