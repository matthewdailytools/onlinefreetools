# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`extract-text-from-pdf`  
**路径**：`/tools/extract-text-from-pdf`  
**主方向**：A  
**catalog 分类**：`pdf`  
**YMYL**：否  
**最近改写**：2026-10-14（薄页逐页改写队列 #25，见 `docs/seo/reviews/2026-10-13/05-thin-rewrite-queue.md`）

## 改写原因（2026-10-14）

审计 `04-tool-ig-audit.csv`：en 正文约 304 词但几乎全是模板句（How「Choose a PDF or enter content」「Review the output area」「Download or print when needed」；Use cases「Office: quick PDF tasks」；FAQ「Are large files supported? Large files may be slow」）。功能上只把每页 `getTextContent()` 按 y 分行后**逐项加空格**拼接：PDF 每个排版行都变成一行（复制到 Word 要手动删换行）、行尾连字符断词保留、双栏文章左右栏半行交错、每页页眉页脚重复、表格单元格被空格糊成一行、扫描页只在全部无字时才报错、加密 PDF 直接失败。无法回应本意图最常见的追问：「复制 PDF 文字怎么不断行」「表格怎么到 Excel」「只要某几页」「为什么没文字（扫描件）」「有密码的 PDF」。

## IG 预审

- 目标主词：见覆盖表
- 用户任务：把 PDF 里的文字拿出来，粘到 Word / 邮件 / 翻译 / AI，或存成 .txt；常追问断行、表格、页码范围、扫描件、密码
- [x] 竞品（Smallpdf / iLovePDF「PDF to Text」、pdftotext 在线版、各语种「PDF 提取文字」站）：上传后转换；多数输出原样折行；少数有「保留版式」；几乎不说明页眉页脚、连字符、双栏、扫描页逐页提示
- [x] 缺口：段落重排（接回折行）；行尾连字符接回；双栏阅读顺序；重复页眉页脚删除并计数；表格行 → 制表符（直接粘进表格）；三种版式；页码范围；无字页逐页列出；密码 PDF；页间分隔（空行 / Page N 标记 / 换页符）；LF / CRLF；统计（页 / 词 / 字符 / 行）
- [x] 增益：① 段落判定规则（> 1.5 倍行距、字号变化、项目符号、短行 + 句末标点）② 连字符接回（harden- + ing）③ 双栏判定（中间空白带 + 两侧行均 ≥ 20 字符）④ 页眉页脚判定（顶 / 底 2 行、≥ 3 页且 ≥ 60% 有字页、数字视为相同）⑤ ≥ 2 倍字号间距 → 制表符 ⑥ form feed 与 pdftotext 相同 ⑦ 扫描页 = 无文本层 → OCR ⑧ 权威引用
- [x] 权威：PDF.js `PDFPageProxy.getTextContent()`；Wikipedia「Newline」（LF / CRLF）
- [x] Related：`extract-text-from-a-scanned-pdf`、`pdf-to-markdown`、`turn-pdf-into-word-document`、`unlock-pdf`

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| Title (en) | Extract Text from PDF — Copy PDF Text as Clean Paragraphs or Save It as a TXT File |
| Description (en) | Extract text from a PDF in your browser, then copy it or save it as a .txt file. Lines that the PDF broke mid-sentence are joined back into paragraphs, words split by a hyphen are rejoined, two-column pages are read one column at a time and repeated headers and footers are dropped. Example: the 4-page sample newsletter gives clean text for pages 1–3 and flags page 4 as a scan that needs OCR. |
| related | extract-text-from-a-scanned-pdf, pdf-to-markdown, turn-pdf-into-word-document, unlock-pdf |

## 清单前检索覆盖优化

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-10-14（初版 2026-09-03） |
| slug 结论 | **保留** `extract-text-from-pdf`（已有曝光，不改 URL；不拆 pdf-to-text / pdf-to-txt / copy-text-from-pdf 近义页） |
| 主检索词 → title/H1 | en：**Extract Text from PDF — Copy PDF Text as Clean Paragraphs or Save It as a TXT File**；zh：**PDF 提取文字 — 复制 PDF 文本不再断行，也能导出成 TXT 文件** |
| 次要关键词 → desc/FAQ | pdf to text / pdf to txt → title 副句 + Download .txt；copy text from pdf without line breaks → title + FAQ q1 + Why choose 1；pdf table to excel → FAQ q4 + Use case 3 + rules 2；extract text from specific pages → FAQ q3；scanned pdf no text → FAQ q2 + 扫描页提示；password protected pdf → FAQ q6；two column pdf → Why choose 3 + rules 4 + FAQ q7 |
| 用户搜索习惯判断 | 「extract text from pdf」是本意图最大搜法，放 H1 主词；「copy」「txt」放副句 |
| 优化摘要 | 保留 slug；H1 由「Extract text from a PDF」扩为主词 + 不断行复制 + 存 TXT；desc 写清段落、连字符、双栏、页眉页脚与样例结果 |
| [x] 已回写 SEO 卡片 | |

## 同意图相关搜索词（页面生成必吸）

| 搜法（en；他语按 03 当地说法） | 判定 | 落点 |
|---|---|---|
| extract text from pdf | 吸（主词） | title / H1 |
| pdf to text / pdf to txt / pdf text extractor | 吸 | title 副句；Download .txt；desc |
| copy text from pdf without line breaks | 吸 | 段落模式默认；FAQ q1；Why choose 1 |
| pdf table to excel / copy table from pdf | 吸 | 制表符行；FAQ q4；Use case 3；rules 2 |
| extract text from specific pages of pdf | 吸 | 页码范围；FAQ q3 |
| why can't i copy text from pdf / pdf no text | 吸（说明边界） | 无字页提示；FAQ q2；err_notext |
| extract text from password protected pdf | 吸 | 密码框；FAQ q6 |
| two column pdf text order | 吸 | 双栏识别；rules 4；FAQ q7 |
| ocr pdf / scanned pdf to text | **不吸**（需 OCR） | Related：extract-text-from-a-scanned-pdf |
| pdf to word / docx | **不吸** | Related：turn-pdf-into-word-document |
| pdf to markdown | **不吸** | Related：pdf-to-markdown |
| remove pdf password | **不吸** | Related：unlock-pdf |

- [x] 上表已列全本意图相关搜索
- [x] 生成 title / description / FAQ / Use cases 时按上表写入

## Ads / Keyword Planner 长尾

- [x] 已引用分析路径：`docs/seo/keywords/pdf/2026-09-03-pdf-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点 | 功能覆盖 | 不覆盖理由 |
|---|---|---|---|---|
| extract text from a pdf | build 主词 | H1 | 进页样例即该场景 | |
| pdf to text / copy text from pdf | absorb | title 副句 / FAQ q1 | 段落模式 + 复制 / 下载 | |

## 用户意图审查

| 层 | 结论 |
|---|---|
| 00 原话 | 从 PDF 提取文字，仍成立 |
| 主词任务 | 「拿到干净可用的文字」——改写前每个排版行一行、连字符 / 页眉页脚 / 双栏都没处理 → **部分满足**；改写后：段落重排 + 连字符 + 双栏 + 页眉页脚 + 表格制表符 + 页码 + 扫描页提示 + 密码 → **满足** |
| 超出 | 无第二工具抢首屏；页眉 / 连字符 / 双栏 / 换行符收进高级设置 |
| 有意不满足 | OCR、转 Word、转 Markdown、去密码：不吸，Related 指路 |
| 总判 | 满足（已回写 How、结果区、FAQ、desc） |

## 交互规格

- 输入：单个 PDF（点击或拖放）；需要密码时出现密码框（只在本页解密，回车或 Extract text 提交）
- 主选项：页码（全部默认 / 自定义：1-3, 5, 8-，按输入顺序去重）；换行方式（段落默认 / PDF 原行 / 保留列对齐）；页间（空行默认 / `--- Page N ---` / 换页符）
- 主按钮：Extract text → Download .txt（`<原名>.txt`，UTF-8）/ Copy text（按钮短暂显示 Copied）
- 高级设置（折叠）：删除重复页眉页脚（默认开）；接回行尾连字符（默认开，仅段落模式）；双栏逐栏读（默认开，保留列模式下禁用）；换行符 LF 默认 / CRLF
- 算法：pdf.js `getTextContent()` + 视口矩阵（含页面旋转）→ 基线差 ≤ 半个字高为同一行 → 词间距只按非空白项计算（pdf.js 插入的空格项宽度覆盖整个空隙）→ ≥ 2 倍字号为制表符 → 页眉页脚（顶 / 底 2 行，≥ 3 页且 ≥ 60% 有字页，数字记 #）→ 双栏（中间一半宽度内 ≤ 15% 行覆盖的竖向空白带，宽 ≥ max(8 pt, 1.2 倍字号)，两侧 ≥ 3 行且行长中位数 ≥ 20 字符；跨栏行原位输出；RTL 页先右栏）→ 段落（> 1.45 倍行距、字号差 > 15%、项目符号 / 编号、上一行句末标点且短于栏宽 2.5 倍字号）→ 中日韩相邻不加空格
- 文本层缓存：改换行方式 / 分隔 / 页眉 / 连字符 / 双栏 / 换行符即时重排，不重读；改页码会重新提取（已读页走缓存）
- 进度：共用 PDF 进度条 + 状态「Reading page i of n…」+ 主按钮 spinner
- 统计：`Pages: … · Words: …（Intl.Segmenter）· Characters: …（不含换行）· Lines: …` + 删除的页眉页脚行数
- 警告 / 错误：无字页逐页列出（最多 20 个）；全部无字 → 错误；非 PDF；损坏；需要密码 / 密码错误；页码无效；> 50 MB 软警告
- 样例（进页自动）：4 页 420 × 595 pt 园艺社简报——每页页眉「Northwind Garden Club - Spring Newsletter」+ 页脚「Page n of 4」；p1 标题 + 折成 4 行的段落（harden- / ing）+ 第二段；p2 三列播种表；p3 跨栏标题 + 双栏新闻；p4 只有图形（模拟扫描页）。默认输出：段落接回、hardening、表格 4 行制表符、左栏先于右栏、删除 6 行页眉页脚、提示第 4 页无文字
- Clear 只清空并恢复默认设置，不重载样例

## 页面模块清单

- [x] H1 + 交互 + 进页样例 + 统计
- [x] How（总答 + 4 步）/ Why choose ×5 / Rules ×5 / Example / Use cases ×4 / FAQ ×7 / Related / References ×2
- [x] `03-locale-briefs.md` 已按当地搜法重填
