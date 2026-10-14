# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`compare-two-pdfs`  
**路径**：`/tools/compare-two-pdfs`  
**主方向**：A  
**catalog**：`pdf`  
**YMYL**：否  
**最近改写**：2026-10-13（薄页逐页改写队列 #8）

## 改写原因（2026-10-13）

审计：265 词；title 过短「Compare two PDFs」；FAQ/Use cases 通用空话；How 写「enter content」与 UI 不符；**Clear 误调用 loadSample**；摘要只有模糊 change blocks，无增删分计。

## IG 预审

- 用户任务：两份 PDF 的可选中文本差异（合同修订、条款改动）
- [x] 缺口：Clear bug；增删分计；忽略大小写/空白；图例；实质 FAQ
- [x] 增益：① 修 Clear ② added/removed + 页数 ③ Advanced 忽略选项 ④ 更明显样例（thirty→sixty）⑤ Why/FAQ 重写
- [x] Related：`text-diff`、`extract-text-from-pdf`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Compare Two PDFs — Highlight Text Differences |
| Description (en) | Compare two PDF files by extracting their selectable text and highlighting words that were added or removed. Steps: choose PDF A and PDF B, click Compare, review the green/red diff, Download HTML. Example: “thirty days” vs “sixty days” is highlighted. Scanned pages need OCR first — this tool does not OCR. |
| related | text-diff, extract-text-from-pdf |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-13 |
| slug 结论 | **保留** `compare-two-pdfs` |
| 主检索词 → title/H1 | Compare Two PDFs — Highlight Text Differences |
| 次要关键词 | pdf diff / compare pdf text → How；scanned pdf → FAQ q2；password → FAQ q3；vs text diff → FAQ q4 |
| 优化摘要 | H1 补「高亮文本差异」；desc 含步骤按钮词与 thirty/sixty 样例；声明非 OCR |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法 | 判定 | 落点 |
|---|---|---|
| compare two pdfs / pdf diff | 吸 | title；How |
| compare pdf text / highlight changes | 吸 | desc；图例 |
| scanned pdf compare | 吸（说明边界） | FAQ q2；Rules |
| password protected pdf | 吸（报错） | FAQ q3 |
| visual / pixel pdf compare | **不吸** | FAQ q5 |
| plain text diff | **不吸**（邻工具） | FAQ q4 → text-diff |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 不适用

## 用户意图审查

| 层 | 结论 |
|---|---|
| 主检索词任务 | 改写前能比文本但 Clear 错、文案薄 → **部分满足**；修 bug + 选项 + 摘要 → **满足** |
| 有意不满足 | 视觉/像素对比、OCR、带批注的 PDF 导出 |
| 总判 | 满足（已回写 H1、FAQ、desc、Clear、Advanced） |

## 交互规格

- 双 dropzone：PDF A / PDF B；Compare → Download HTML diff
- Advanced：ignore case；collapse whitespace（改选项若已有文件则重跑）
- 摘要：`{added} added · {removed} removed · pages A=…, B=…`
- Clear：**清空**，不再调用 loadSample
- 样例：thirty days vs sixty days；进页 loadSample

## 页面模块清单

- [x] H1 + 交互 + How×4/Why×5/Rules×5/Example/Use cases×4/FAQ×7/Related/References
