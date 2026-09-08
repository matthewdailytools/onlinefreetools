# Text Converter Keyword Planner — 归类与选词

- date: **2026-09-08 08:30**
- locale / gl: en / us（Google Keyword Planner 导出）
- source: [`Keyword Planner 09-07-2026 at 23-55-12.csv`](./Keyword%20Planner%2009-07-2026%20at%2023-55-12.csv)（**932** 词 / **932** 不重复；**52** 个广告组）
- 与 [`2026-09-07-ocr-scan-keyword-planner.md`](./2026-09-07-ocr-scan-keyword-planner.md) **并存**：09-07 是 OCR+Scan 硬件/识别权威表（2643 行）；**本文件不覆盖 N1–N5**。本 CSV 种子是 **Text Converter / 转成 TXT**，广告组 Free/Online/Tool 只是近义簇，不是拆页轴。
- catalog 已能办成的同意图：`convert-a-jpg-to-text-with-ocr`（图→TXT OCR）、`extract-text-from-pdf`（数字 PDF **字层**→TXT）。近邻但**不是**纯文本：`convert-html-web-pages-to-word-document`（网页→DOCX）、`images-to-word`（图→DOCX）、`markdown-to-html`（MD↔HTML）、`csv-json`、`pdf-to-markdown`
- 规则：[`../../keyword-planner-analysis-rules.md`](../../keyword-planner-analysis-rules.md) + 策略 **§3.3 H**
- SERP：**无人工批次** → 不得标 `long_gap`；周进攻 **0**
- work-tasks：**禁止**因本分析自动创建

> **结论先行**  
> 1）约 **四成** 是 **语音/视频转写**（`speech to text` 达 **1万–10万**）。这要云端 ASR，不是本地 OCR；**不做产品**，禁止写进 N1。  
> 2）可产品化的轴仍是 **输入对象 + 结果 TXT**：照片/JPG ≠ 数字 PDF 字层 ≠ 扫描 PDF ≠ Word 文件 ≠ 网址抓正文。  
> 3）**已实现 → absorb**：`jpg to text` / `jpeg to text` / `png to text` / `image to text`（皆 1k 带）并进 **N1**（H1 已含 JPG to text；FAQ 欠 `image to text` / `png to text`）。`pdf to text`（1k–10k）并进 `extract-text-from-pdf`（仅字层；扫描件仍走 N2）。  
> 4）**未实现 → defer（须规格，不立项）**：Word/DOCX→TXT；粘贴 HTML 或抓 URL→纯文本（同一套「得到 TXT」控件，一 URL）。PPT/表格后排。  
> 5）**禁止** `online converter` / `ocr converter` / `online text converter` / `pdf converter online` 壳页。  
> 6）ASR 技术可行性已另写 [JS 语音转文字完整方案](../../../2026-09-08-js-speech-to-text-solutions.md)；**本批仍 drop 产品**，直到用户点名立项。

---

## 0. 量级分桶（只筛选）

| 带 | n（行） | 角色 |
| --- | --- | --- |
| 1万–10万 | 1 | `speech to text` — ASR 头词，禁工具 H1，本站不做 |
| 1k–10k | 22 | 混：`jpg to text` / `jpeg to text` / `png to text` / `image to text *` / `pdf to text` 与 ASR/壳（`audio to text`、`youtube to text`、`ocr converter`、`online converter`） |
| 100–1k | 114 | 场景长尾 + 大量转写/品牌 |
| 10–100 / 0–10 | 653+142 | 微尾；作业证据仍收录 |

量级最高的**浏览器文件作业**是 **图→文字** 与 **PDF→文字**，不是「Text Converter」品类壳。

---

## 1. 先剔除（drop）— 仅非工具意图

| 类型 | Planner 例 | 处理 |
| --- | --- | --- |
| 云端 ASR / 转写（有意不做） | `speech to text`（1万–10万）、`audio to text`、`mp3 to text`、`voice to text`、`youtube to text`、`video to text`、`transcribe audio to text free`、`google speech to text` | **drop 产品**；禁止 absorb 进 N1。不是像素 OCR |
| 品牌 / 竞品站 | `google translate *`、`notta`、`dragon voice to text`、`zamzar pdf to text`、`smallpdf`、`ilovepdf pdf to text`、`adobe pdf to text` | drop；FAQ 一句「不是他们的官网」（挂在对应已有页） |
| 下载 / 桌面软件 | `speech to text apps`、`voice to text windows`、`voice to text software` | drop |
| 代写 / 服务 | `professional text conversion services`、`text conversion service` | drop |
| 数据恢复 / 同形 | `text recovery converter`（1k–10k，Undelete 向） | drop |
| 条码 | `qr to text`、`qr code to text` | drop（不是文档转 TXT） |
| 数字读法 | `digit to words converter` | drop |
| 噪声 / 错拼簇 | `trranscript` 广告组、`speach to text`、`vido e to text`、`convet to text` | 错拼并进正确作业或 drop |
| 品类壳 | `online converter`、`online conversion`、`ocr converter`、`online text converter`、`document converter`、`pdf converter online` | **禁独立 URL**；OCR 壳 FAQ 分发 N1–N4；PDF 壳已在 pdf 主题 drop |

广告组 `Text Converter Online` / `Text Online Free` / `Keyword Like: trranscript` **不是**拆页理由。

---

## 2. 用户实际任务 → 作业类型（覆盖落点 + 是否主打）

| ID | 使用场景（情境→动作→结果） | Planner 证据（量级） | 主控件是否已有 | 覆盖落点 | 主打？ |
| --- | --- | --- | --- | --- | --- |
| **T1** | 照片 / JPG / PNG 截图 → **可复制 TXT** | `jpg to text`、`jpeg to text`、`png to text`（均 1k–10k）；`image to text online` / `image to text free`（1k–10k）；`ocr to text`（100–1k）；`jpg to text free`、`png to text converter`、`scan to text`（100–1k） | **是** `convert-a-jpg-to-text-with-ocr` | **absorb**：巩固 N1；FAQ/Use cases 补 image/png/jpeg to text；手写 `handwritten to text converter` FAQ 失败。**禁** H1=`image to text` / `ocr converter` 光杆 | 本 URL 主打仍是场景句 Convert a JPG to text with OCR（已含 jpg to text） |
| **T2** | 数字 PDF **已有字层** → TXT | `pdf to text`（1k–10k）、`pdf2txt`、`pdf txt`、`export pdf to text`（10–100） | **是** `extract-text-from-pdf` | **absorb**：FAQ「也叫 pdf to text」；扫描件失败链 **N2**。禁止改 H1 为 OCR | 不改 A1 主打 |
| **T3** | 扫描件 PDF（无字层）→ TXT | `ocr pdf to text`（100–1k）、`scanned pdf to text`（100–1k） | **否**（N2） | 仍归 [`2026-09-07`](./2026-09-07-ocr-scan-keyword-planner.md) **N2** `extract-text-from-a-scanned-pdf`；本批只加证据，不新 slug | N2 主打待 SERP |
| **T4** | `.doc` / `.docx` → 纯文本 | `microsoft word to text converter`（1k–10k）、`word to text`（100–1k）、`docx to text`（10–100） | **否**（`convert-word-document-to-pdf` 是出 PDF；`images-to-word` 是图→DOCX） | **defer**：建议 slug `extract-text-from-a-word-document`；mammoth 已在 vendor；复制/下载 TXT；不是 OCR | 独立 URL 控件差：读 OOXML 不是认像素 |
| **T5** | 粘贴 HTML **或** 打开网址 → 纯文本（去标签） | `html to text`（100–1k）；`url to text`（100–1k）；`webpage to text` / `website to text` / `web page to text`（10–100） | **否**（`convert-html-web-pages-to-word-document` 出 **DOCX**；批量网页工具出 JPG/PDF/XLSX） | **defer**：一页两输入（粘贴 HTML + URL），结果 TXT。建议 slug `convert-html-or-a-web-page-to-plain-text`。禁止并进截图页 | 同「得到 TXT」主控件，HTML 与 URL 为芯片 |
| **T6** | Markdown 源 → 纯文本 | `md to text`（100–1k） | 近邻 `markdown-to-html`（出 HTML 不是 .txt） | FAQ 划界：本页出 HTML；要 TXT → 实现后链 T5 或「复制预览纯文本」若以后做。**不**新建 md-to-text URL | 否 |
| **T7** | 表格 / CSV → 纯文本 | `excel to text`（100–1k）、`csv to text`（10–100） | `csv-json` 是结构化互转，不是「倒成一段 TXT」 | `csv to text` → FAQ absorb `csv-json`；xlsx 倒 TXT **后排 defer**，不立项 | 否 |
| **T8** | PPT → 纯文本 | `ppt to text`（100–1k，1 词） | 否 | **后排 defer** `extract-text-from-a-powerpoint`；证据过弱不占周 | 否 |
| **T9** | 手写照片 → 文字 | `handwritten to text converter`（100–1k） | N1 已划界失败 | N1 FAQ；不独立 slug | 否 |
| **T10** | 语音 / 视频 → 文字 | 见 §1 ASR | 否，且有意不做 | drop；禁止 N1 冒充 | — |

**禁止**：把 T4/T5 absorb 进 N1（对象不是图）；把 T2 的扫描失败写成「本页会 OCR」；把 T5 absorb 进网页截图工具。

---

## 3. 每 URL 仅一条主打

| slug | 状态 | 主打关键词 | 本批次词落点 | 禁止当进攻 H1 |
| --- | --- | --- | --- | --- |
| `convert-a-jpg-to-text-with-ocr` | 已上线 | jpg to ocr（09-07）；本批 **jpg to text** 与 H1 同义 | jpeg to text、png to text、image to text、ocr to text、scan to text、handwritten FAQ | image to text 光杆、ocr converter、online ocr |
| `extract-text-from-pdf` | 已上线 | 现 H1 抽字层 | pdf to text、pdf2txt、export pdf to text | pdf to text 若 SERP 被 OCR 站占满则只 FAQ「也叫」+ 扫描链 N2 |
| `extract-text-from-a-scanned-pdf` | N2 defer | ocr pdf to text | scanned pdf to text | pdf to ocr 歧义头词 |
| `extract-text-from-a-word-document` | T4 defer | convert a Word document to text | docx to text、word to text | word converter、microsoft word 品牌壳 |
| `convert-html-or-a-web-page-to-plain-text` | T5 defer | convert a web page to plain text | html to text、url to text、webpage to text | online text converter |

---

## 4. 头词 → 收割 / title_gap（无 SERP）

| 头词（1k+） | 处理 |
| --- | --- |
| `speech to text` 及 audio/mp3/youtube/video to text | drop ASR |
| `jpg to text` / `jpeg to text` / `png to text` / `image to text *` | 收割进 **N1**；H1 已是场景句，不必改成光杆 image to text |
| `pdf to text` | 收割进 A1；扫描意图 FAQ→N2 |
| `microsoft word to text converter` / `word converter` | 后者是壳；前者是 T4 证据。H1 用场景句，不用 Word Converter |
| `ocr converter` / `online converter` / `pdf converter online` | doorway drop URL |
| `text recovery converter` | 同形 drop |

G（title_gap_fallback）**未跑 SERP**，不得声称缺口。

---

## 5. 意图聚类 → 选词 / slug（权威表）

| 簇 | 代表搜法 | verdict | competition_tier | 覆盖 |
| --- | --- | --- | --- | --- |
| 图 → TXT | jpg/jpeg/png/image to text | **absorb** N1 | 暂估 head + 待 SERP | 已实现 OCR；补次词文案 |
| 数字 PDF → TXT | pdf to text | **absorb** A1 | 暂估 head + 待 SERP | 字层；非 OCR |
| 扫描 PDF → TXT | ocr pdf to text | **defer** N2 | 待 SERP | 与 09-07 相同 slug |
| Word → TXT | word to text | **defer** T4 | 暂估 head + 待 SERP | 须新页 |
| HTML/URL → TXT | html to text；url to text | **defer** T5 | 暂估 mid + 待 SERP | 须新页；≠ 截图 ≠ Word |
| ASR | speech/audio/youtube to text | **drop** | head | 有意不做 |
| 壳 | online converter；ocr converter | **drop** | head | 禁 URL |

---

## 6. 关键词归属（广告组只当标签）

| 广告组（代表） | 作业 | 落点 |
| --- | --- | --- |
| Image Text / Png Text / Ocr Text | T1 | N1 H1/FAQ/芯片 |
| Pdf Text / Convert Pdf Text | T2 或 T3 | 有 ocr/scanned → N2；否则 A1 |
| Word / Word Converter / Word Text Converter | T4 或壳 | `word converter` drop；docx/word to text → T4 |
| Text Converter Online 里的 jpeg/png/jpg/image | T1 | N1 |
| 同组 url/webpage/html | T5 | defer 页 |
| Audio / Speech / Voice / Mp3 / Transcribe / Video | T10 | drop |
| Google Translate Text / Google Text | 品牌 | drop |
| Text Conversion Service | 服务 | drop |

---

## 7. SERP 复核

**待采。** 上线或改 N1 次词进攻前最少看：`jpg to text`、`image to text`、`png to text`、`pdf to text`、`word to text`、`html to text`。

---

## 8. 对已有 slug 的 SEO/功能动作（欠账，本分析不改页面）

| slug | 动作 |
| --- | --- |
| `convert-a-jpg-to-text-with-ocr` | FAQ/desc 补 **image to text**、**png to text**、**jpeg to text**（H1 已覆盖 jpg to text）。手写失败已有。不要加语音。 |
| `extract-text-from-pdf` | FAQ「也叫 pdf to text」；扫描件 / ocr pdf to text 链 N2（N2 未上线前只诚实说本页不 OCR） |
| `markdown-to-html` | FAQ：出 HTML 不是 .txt（`md to text`） |
| `csv-json` | FAQ：CSV↔JSON，不是把 Excel 倒成一段 TXT |
| `convert-html-web-pages-to-word-document` | 失败链：只要纯文本 → T5（未实现则先不链空 URL） |
| `images-to-word` | 不要吸收 image to text（结果是 DOCX 不是 TXT） |

---

## 9. 周产能 / 下一步

- **0** 周 `long_gap` build；**未**建 work-tasks。  
- N1 文案欠账可在下次改该工具时一并 absorb（须 `tool-coverage-pass`）。  
- T4 / T5 仅当用户点名立项。T5 不要做成第四个「网页截图」近义 URL。  
- ASR 整类保持 drop。
