# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`write-pdf-document-online`  
**路径**：`/tools/write-pdf-document-online`  
**主方向**：A  
**YMYL**：否  
**最近改写**：2026-10-15（薄页逐页改写队列 #41，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-15）

审计 `04-tool-ig-audit.csv`：en 正文为模板空壳（How / Rules / FAQ 多为「Files stay on your device」「Example in page」类通用句，与「写 PDF」任务无关）。功能缺口：

- 「write pdf online / text to pdf」SERP（WaveSpeed、CustomizedPDF、PDF Win、PDF Monster、text-to-pdf.app）主意图：输入文字 → 可下载 PDF，带页面尺寸 / 字体 / 边距；本页只有一个文本框 + 固定排版，**部分满足**；
- 共用 `wrapTextLines` 按字符断行（英文单词被拆开）；中日韩 / 阿拉伯文无法编码；无标题、列表、分页；无页码；
- 无排版反馈（每页几行、每行几字）、无 PDF 元数据标题与文件名。

## 与站内相邻工具的分工

- `add-text-to-pdf-file`：在**已有** PDF 上按坐标盖字。本页从零新建 PDF，FAQ q7 指向该工具。
- `convert-html-to-pdf`：HTML / 网页排版转 PDF（表格、图片、样式）。本页只做纯文字 + 少量行首标记。
- `turn-pdf-into-editable-document`：从 PDF 取出可编辑文字，方向相反。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：不开 Word 也能写一封信 / 通知 / 会议记录并保存为 PDF；把邮件或聊天里复制的文字整理成分页 PDF；学生做简单讲义（含中文、日文、阿拉伯文）
- [x] 竞品（WaveSpeed Text to PDF、CustomizedPDF、PDF Win、PDF Monster、text-to-pdf.app）：多为单文本框 + 字号 / 页面尺寸；text-to-pdf.app 明确不支持中日韩 / 阿拉伯文；少有标题 / 列表标记、按词换行说明、每页行数与每行字数反馈、PDF 元数据标题
- [x] 缺口：按词换行；非拉丁文字；行首标记（标题、列表、分页）；页码；排版反馈；草稿
- [x] 增益：① 按词换行，中日文按字断开且不以逗号 / 句号起行 ② 非拉丁文字行用系统字体高清栅格化，阿拉伯文 / 希伯来文右对齐，结果写明几行被栅格化 ③ 弯引号、破折号、重音字母、欧元符号保持真实文字（WinAnsi 字符集检测）④ `#` / `##` / `-` / `1.` / `---` 行首标记 + 两空格缩进层级 ⑤ A4 / Letter / Legal / A5、横竖向、三档边距、三种标准字体、字号 8–24、四档行距、页码「n / N」⑥ 结果区：页数、版式、每页行数与每行约字数、文字可选情况、文件名 ⑦ PDF Title 元数据 + 标题作文件名 ⑧ 可选本机草稿（localStorage）
- [x] 权威：pdf-lib 文档（pdf-lib.js.org）；Wikipedia — Paper size（A4 210 × 297 mm、US Letter 8.5 × 11 in）
- [x] Related：`add-text-to-pdf-file`、`convert-html-to-pdf`、`turn-pdf-into-editable-document`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Write a PDF Document Online — Type Text and Get a Multi-Page PDF With Headings, Lists and Page Numbers |
| Description (en) | Write a PDF document online: type or paste text, add a title, headings and bullet or numbered lists, then pick A4 or US Letter, margins, font, size and line spacing. Long text flows onto numbered pages, Chinese, Japanese and Arabic work too, and example minutes and a letter show the markup. |
| related | add-text-to-pdf-file, convert-html-to-pdf, turn-pdf-into-editable-document |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-15（初版 2026-09-03） |
| slug 结论 | **保留** `write-pdf-document-online`（已有曝光，不改 URL） |
| 主检索词 → title/H1 | en：**Write a PDF Document Online — Type Text and Get a Multi-Page PDF With Headings, Lists and Page Numbers**；zh：**在线写 PDF 文档 — 输入文字就能生成带标题、列表和页码的多页 PDF** |
| 次要关键词 → desc/FAQ | how to write a pdf online → FAQ q1 + How；headings / bullet points / page break → FAQ q2 + Rules 1；chinese / arabic text to pdf → FAQ q3 + Why 2；searchable text → FAQ q4；A4 vs letter / margins → FAQ q5 + Rules 2–3；privacy → FAQ q6；edit existing pdf → FAQ q7（链出） |
| 用户搜索习惯判断 | 动作向（write / create / text to pdf）；H1 以 write a PDF document online 开头，副句写产物（多页、标题、列表、页码） |
| 优化摘要 | 保留 slug；H1 由裸主词扩为动作 + 产物；desc 写 type or paste、headings、lists、A4 / Letter、margins、font、line spacing、numbered pages、CJK / Arabic |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| write a pdf document online / write pdf online | 吸（主词） | title / H1；FAQ q1 |
| text to pdf / convert text to pdf | 吸 | 粘贴文字即生成；desc；Use case 3 |
| create pdf from text / make a pdf document | 吸 | How；desc |
| pdf with page numbers | 吸 | 页码选项；H1 副句 |
| a4 vs letter / pdf margins | 吸（说明性） | Rules 2–3；FAQ q5 |
| chinese / japanese / arabic text to pdf | 吸 | 栅格化行；FAQ q3；Why 2 |
| txt file to pdf（上传 .txt） | **部分吸**（粘贴内容即可） | Use case 3 说明复制粘贴 |
| edit pdf online / add text to existing pdf | **不吸**（相邻工具） | FAQ q7 → Related |
| word to pdf / html to pdf | **不吸** | FAQ q2 指向文字处理器；Related HTML to PDF |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 已引用：`docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`（write a pdf document online 为 build 主词；本次改写未新增 Planner 词）

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 在线写 PDF 文档，仍成立 |
| 主检索词任务 | 「输入文字得到排版干净、可下载的 PDF」——改写前单框 + 按字符断行 + 不支持非拉丁文 → **部分满足**；改写后：按词换行 + 标记 + 页面设置 + 页码 + 多语种 → **满足** |
| 超出 | 无富文本编辑器（加粗 / 斜体 / 表格 / 图片），FAQ q2 明说 |
| 有意不满足 | 编辑已有 PDF、上传 .txt / .docx、嵌入自定义字体 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：标题（可选）+ 正文 textarea（等宽字体）+ 字数统计；折叠「页面设置」摘要显示当前设置
- 标记：`#` 标题（1.5 × 字号，粗体）、`##` 小标题（1.2 ×）、`-` / `*` / `•` 圆点列表、`1.` / `1)` 编号列表、行首每 2 空格缩进一级（最多 3 级）、仅含 `---` 的行分页；空行保留
- 页面：A4 595.28 × 841.89 pt / Letter 612 × 792 / Legal 612 × 1008 / A5 419.53 × 595.28；横向互换；边距 36 / 72 / 108 pt；字体 Helvetica / Times / Courier（各含粗体）；字号 8–24（接受小数逗号）；行距 1 / 1.15 / 1.5 / 2；行高 = 字号 × 行距 × 1.2
- 页码：底边距居中「n / N」，9 pt 灰色；可关闭
- 非 WinAnsi 字符行：`OftPdfWork.drawPageText` 栅格化；RTL（U+0590–U+08FF）右对齐
- 结果：页数、版式、每页行数与每行约字数（Courier 为精确值）、文字可选 / 栅格化行数、文件名（标题去非法字符，空则 document.pdf）
- 设置改动后有内容即自动重新生成；正文改动后标记过期（下载禁用，提示重新生成）；生成中改动正文 → 完成后仍判过期
- 草稿：勾选后 500 ms 防抖存 localStorage；进页有草稿则恢复并生成，否则加载样例
- 报错：空输入；字号越界 / 非数字；pdf-lib 未加载；生成失败
- 样例轮换：会议记录（A4、Helvetica 12、1.15、1 页）→ 推荐信（Letter、Times 12、1.5、`---` 分页成 2 页）
- Clear 清空标题与正文、删除草稿、隐藏结果；保留页面设置，不重载样例；进度 HUD：pdfWorkUi 进度条 + 主按钮 spinner

## 固定数字

- A4、正常边距、12 pt、1.15 → 行高 16.56 pt → 每页 42 行；Helvetica 约 82 字 / 行，Times 约 88，Courier 恰好 62（451.28 ÷ 7.2）
- Letter、正常边距、Times 12、1.5 → 每页 30 行，约 92 字 / 行
- Letter、Helvetica 12、1.15 → 每页 39 行，约 85 字 / 行
- A4 横向、Courier 12、1.15 → 每页 27 行，96 字 / 行
- A4、Times 10.5、1.15 → 每页 48 行，约 101 字 / 行
- 样例 1 → 1 页，页脚「1 / 1」；样例 2 → 2 页，「1 / 2」「2 / 2」

## 验收记录（2026-10-15，英文本地预渲染页）

- 样例 1：1 页、42 行 / 页、约 82 字 / 行、文件名「Team meeting notes — 14 October.pdf」；预览标题粗体、两级标题、圆点与编号列表对齐
- 样例 2：2 页、30 行 / 页、约 92 字 / 行（Letter、Times、1.5）
- 混合文字：弯引号与 € 为真实文字；中文长段按字换行且行首无「，」「。」；阿拉伯文行右对齐；超长英文单词串按词换行；`  - ` 嵌套缩进；`---` 分页 → 2 页；结果「13 行中 4 行为图像」
- 报错：字号 40、「abc」→「Enter a font size from 8 to 24 pt.」；「10,5」接受（48 行 / 页）；空输入 →「Type some text or a title first.」
- Clear：清空标题与正文、删除草稿、隐藏结果、保留 Times 字体设置
- 草稿：勾选后输入保存；刷新恢复正文与设置并显示「Your draft from this browser was restored.」
- 生成中修改正文：完成后显示过期提示、下载禁用（本轮修复）
- 下载：`%PDF-1.7` 有效文件；无标题时文件名 document.pdf

## 页面模块清单

- [x] H1 + 摘要 + 交互 + 进页样例
- [x] How（总答 + 4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related ×3 / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
