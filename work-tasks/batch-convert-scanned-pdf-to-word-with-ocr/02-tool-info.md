# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-convert-scanned-pdf-to-word-with-ocr`  
**路径**：`/tools/batch-convert-scanned-pdf-to-word-with-ocr`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> **相对其他 OCR 硬约束**：不得只把 N4-jpg-batch 的 dropzone 改成 PDF。须 **pdf.js 逐页光栅 + OCR + 一份分节 DOCX**。不得抢 A2 字层转 Word，不得抢 N4-jpg-batch 的照片队列，不得把 TXT ZIP 当主产物。不另建 `turn-a-scanned-pdf-into-word` doorway。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 一份或多份扫描 PDF 一次认成可在 Word 里改的文档 | batch convert scanned PDF to Word with OCR; convert scanned pdf to word | 扫描 PDF→一份 DOCX | **默认**：多 PDF dropzone；Convert all；一份 Word（文件=H1，页=分页）；默认段前页图 |
| 只要扫描 PDF 出 Word（单文件） | ocr pdf to word; pdf to word ocr; scan to word converter | **同一管线** | 丢 1 个 PDF 仍走队列；按钮仍是 Convert all / Download Word；不拆 URL |
| 数字 PDF 已有字层 → Word | pdf to word | **邻页 A2** | 有意不满足当主路径；FAQ 链 `turn-pdf-into-word-document` |
| 照片 / JPG 叠 → Word | jpg to word ocr | **邻页 N4-jpg-batch** | 有意不满足；入队拒绝图片；FAQ 链该页 |
| 扫描 PDF → 纯文本 | ocr pdf to text | **未来 N2** | 有意不满足；本页出 Word |
| 扫描 PDF → 可检索 PDF | ocr searchable pdf | **未来 N3** | 有意不满足；不写回 PDF |
| 只要 TXT ZIP 的照片 OCR | batch convert JPG to text with OCR | **邻页** | FAQ 链 N1-batch |
| 品类壳 | ocr to word；online ocr | 壳 | FAQ 分流；禁光杆 H1 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch convert scanned PDF to Word with OCR；convert scanned pdf to word；ocr pdf to word；pdf to word ocr；scan to word converter
- 用户真实任务：把扫描件 PDF（一页或多页、一份或多份）在本机认成**能在 Word 里改字的文档**；某一页糊了不要整份作废；最好还能对照页图校对。
- [x] 竞品 SERP 形态（公开页 2026-09，未人工逐条 SERP）：`ocr pdf to word` 被 iLovePDF / Smallpdf 等 PDF 站占头词、常上云。本页不硬刚该头词。A2 本站已是字层转 Word，扫描件会失败。N4-jpg-batch 不收 PDF。
- [x] 它们没讲清什么？（缺口）① 扫描 OCR Word 和「抽字层 Word」不是同一作业；② 多份 PDF / 多页是整份作废还是 skip；③ Word 里文件名标题与分页怎么排；④ 要不要带页图校对；⑤ 文件是否离开设备；⑥ 照片 Word 页办不成扫描 PDF。
- [x] 我们补哪 ≥3 条增益：① PDF 队列 + 页展开 + skip；② **一份** DOCX（H1=文件名、按页分页、OCR 段落）；③ 默认段前页图可关；④ Download Word；⑤ FAQ 划界 A2 / N4-jpg-batch / N2 / N3。详见对照表与 `notes.md`。
- [x] 长尾：`convert scanned pdf to word` / `scan to word converter` absorb 本页。`ocr pdf to word` / `pdf to word ocr` **也叫、不作进攻 H1**。`jpg to word ocr` **不吸收进攻**（N4-jpg-batch）。`pdf to word` 无 OCR 归 A2。不拆 Free/Online URL。
- [x] 权威来源 URL：https://github.com/tesseract-ocr/tesseract ；https://github.com/naptha/tesseract.js ；https://mozilla.github.io/pdf.js/ ；https://docx.js.org/
- [x] Use case 草稿：连扫的讲义 PDF 进 Word 再改标题；两份合同扫描件合成一份带页图的校对稿；多页发票扫描进 Word 给同事改（不抽发票字段）。
- [x] 边界：最多 5 个 PDF、整批 20 页、单文件 12 MB；手写/糊页 skip；表格不保格；不收图片文件；不承诺原件栏布局；不做 TXT / 可检索 PDF。
- [x] 结果区：队列表（文件、页数、状态）+ **Download Word**（无产物 disabled）。
- [x] Related：`batch-convert-jpg-to-editable-word-with-ocr`、`turn-pdf-into-word-document`、`extract-text-from-pdf`

### 相对其他 OCR / Word 页的额外 Information Gain（控件级，必须实现）

| # | 邻页 | 本页必须多出来的能力 | 可见落点 |
|---|---|---|---|
| 1 | N4-jpg-batch 照片队列 | **只收 PDF**；pdf.js 把每页画成图再 OCR | 入队拒绝 JPG；How / FAQ |
| 2 | A2 字层转 Word | **光栅 + OCR**；扫描件没有可选中字层也能出段落 | Rules / FAQ |
| 3 | 「只加 multiple 的单 PDF 薄页」 | 多文件队列 + Convert all + **页失败 skip** + 一份分节 Word | 队列表；FAQ |
| 4 | N1-batch Download ZIP | **Download Word**；不默认 TXT ZIP | How = 按钮 |
| 5 | `images-to-word` | OCR **可编辑文字**为正文；页图可选校对 | 高级设置 + FAQ |

**禁止当 IG**：只改扩展名的 ZIP；把 jpg-batch 换 accept=PDF；并行多引擎；H1=`ocr pdf to word` 光杆；收 JPG 当主输入。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 入队 → pdf.js 逐页光栅 → 缩边 → 串行 OCR → 按文件/页写入 DOCX |
| 2 | 边界/失败 | 5 文件 / 20 页 / 12 MB；页 skip；手写差；表格乱序；版式不保；拒图片 |
| 3 | 场景语境 | 扫描 PDF 要进 Word 改，对照「字层 PDF / 照片 Word / 只要 TXT / 可检索 PDF」 |
| 4 | 对照表 | Rules/FAQ：本页 vs A2 vs N4-jpg-batch vs N2/N3 |
| 6 | 本地隐私 | 文件留在设备；不上服务器；脚本从本站 `/vendor/` 加载 |
| 8 | 数值示例 | 样例 2 页印刷 PDF → 两页 Word；上限 20 页 |
| 9 | 主题内链 | N4-jpg-batch、A2、extract-text-from-pdf |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | pdf-docs / OCR→Word（N4；非 N4-jpg-batch doorway） |
| 场景与行业 | 扫描 PDF（单份或多份）→ 一份可编辑 DOCX |
| 技术（包、Tier、本地处理） | pdf.js + Tesseract LSTM 点后加载；`docx` vendor；`page.style: opts`；`localProcessing: true`；Tier 2 |
| Catalog `page.style` | **opts** |
| Title (en) | **Batch convert scanned PDF to Word with OCR** |
| Description 要点 | **SERP 摘要窗口（前 120–160 字符）**：Drop scanned PDFs and download one Word file you can edit — each page is read in this tab. 紧跟：Steps: add PDFs, Convert all, Download Word. Example: a two-page printed sample becomes two headed pages with optional images. 次词：also called convert scanned pdf to word; ocr pdf to word. 数字 PDF 有字层 → 链 A2。照片 → 链 N4-jpg-batch。勿堆 Online/Free。 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；无虚假评分） |
| FAQ 要点（≥3） | 会上传吗？和「将 PDF 转为 Word 文档」有何不同？和「用 OCR 批量把 JPG 转成可编辑的 Word」有何不同？一页失败整份没了吗？Word 里长什么样？能丢 JPG 吗？手写呢？只要 TXT / 可检索 PDF？上限？ |
| Disclaimer / References | 非 YMYL；Tesseract / tesseract.js / pdf.js / docx |
| related | `batch-convert-jpg-to-editable-word-with-ocr`, `turn-pdf-into-word-document`, `extract-text-from-pdf` |
| 验收 | `coverage:gate` 0b（本步）→ 实现后 2→4；`verify:tool` |
| 工期粗估 | 会话 B：Page 队列+pdf.js+docx + 母版；C：十语；D：ship。邻页 FAQ 互链须 `CROSS_TOOL_UPDATE=1` |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-08 |
| slug 结论 | 保留 `batch-convert-scanned-pdf-to-word-with-ocr`（情境=扫描 PDF + 动作=批量 OCR + 结果=Word）。不用 Planner 旧建议 `turn-a-scanned-pdf-into-word`（会与本页 doorway）。不用 `ocr-pdf-to-word` 壳。 |
| 主检索词 → title/H1 | 英文 H1 **Batch convert scanned PDF to Word with OCR**。中文 H1 方向：**用 OCR 批量把扫描 PDF 转成 Word**（勿硬塞 batch/online/editable 英文） |
| 次要关键词 → desc / FAQ / Use cases | `convert scanned pdf to word` / `scan to word converter` → desc + FAQ；`ocr pdf to word` / `pdf to word ocr` → FAQ「也叫」，**不进 H1**；`pdf to word` 无 OCR → FAQ 链 A2；`jpg to word ocr` → FAQ 链 N4-jpg-batch |
| 用户搜索习惯判断 | 搜 ocr pdf to word 的人拿的是扫描 PDF，要能改的 Word。搜 pdf to word 的人常已有字层，应去 A2。搜 jpg to word 的人拿的是照片，应去 N4-jpg-batch。H1 禁 OCR to Word / ocr pdf to word / Batch OCR / Online OCR 光杆。H1 禁参数枚举（页图开关、5 文件/20 页不进 H1）。 |
| 优化摘要 | 相对用户第一句「batch convert scanned pdf to word」补上 **with ocr** 以免和 A2 撞 intent；相对 Planner 旧 slug 改用批量任务句并 absorb 单文件扫描 PDF；头词只进 FAQ；IG 写成 PDF 光栅+队列+一份分节 Word，避免 jpg-batch 换 accept。未跑 SERP。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-convert-scanned-pdf-to-word-with-ocr --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。来源：[`docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`](../../docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md) §3.2 N4、§5、§6.4。CSV：`scan-Keyword Planner 09-06-2026 at 07-30-14.csv`。

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| batch convert scanned PDF to Word with OCR（用户点名任务句） | **build 主词** | H1 | multiple PDF → Convert all → Download Word | |
| convert scanned pdf to word（100–1k） | absorb | desc + FAQ | 同一 PDF 入队；一份 DOCX | 不另建单文件 URL |
| scan to word converter（100–1k） | absorb | FAQ | 扫描 PDF 光栅+OCR | 不收硬件「扫描仪驱动」意图 |
| ocr pdf to word / pdf to word ocr（1k–10k） | absorb 也叫；**不作进攻 H1** | FAQ | 能出可编辑 DOCX | 禁光杆 H1；工具站密 |
| ocr to word（PDF 意图） | absorb 也叫 | FAQ | 能出 DOCX | 照片意图分流 N4-jpg-batch |
| pdf to word（无 OCR） | **不覆盖进攻** | FAQ：有字层走 A2 | 本页仍走光栅 OCR | A2 `turn-pdf-into-word-document` |
| jpg to word ocr / ocr jpg to word | **不覆盖进攻** | FAQ：照片走 N4-jpg-batch | 入队拒绝图片 | 已实现邻页 |
| ocr pdf to text | **不覆盖** | FAQ：要 TXT 是未来 N2 | 本页出 Word | N2 未建 |
| convert pdf to ocr pdf / searchable pdf | **不覆盖** | FAQ：可检索 PDF 是未来 N3 | 不写回 PDF | N3 未建 |
| scan handwritten text to word | drop 独立 URL；FAQ 划界 | FAQ：印刷体为主 | 不提供手写开关 | 能力上限 |
| online ocr / free ocr | drop URL | FAQ 分流 | 只办成本页作业 | 禁壳 |

- [x] 交互规格已按上表补齐能力（PDF 队列 → 光栅+OCR → 一份可编辑 DOCX + skip + 可选页图；图片/字层 Word/TXT/可检索 PDF/手写产品有意不满足）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务（有 Planner 长尾时含长尾任务）。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-08 |
| 总判 | **满足**：搜批量扫描 PDF→Word / convert scanned pdf to word 的人打开页即 PDF 队列，点 Convert all 得到一份可改字的 DOCX；页失败 skip；默认带页图校对。**有意不满足**：A2 字层转 Word、N4-jpg-batch 照片、未来 N2 TXT、未来 N3 可检索 PDF、Online OCR 万能台、手写产品。**不超出**：不做第二套 JPG 上传、不做 Word 所见即所得编辑器、不把页图开关做成第二个产品。 |
| 主词搜索者任务 | 把扫描件 PDF 变成能在 Word 里改的文档，不是抽现成字层，也不是把照片当 PDF 骗过去。 |
| Ads/Planner 长尾任务 | convert scanned pdf to word / scan to word：**能**把扫描 PDF 认成 Word 正文。ocr pdf to word：**能办成**，但不把壳词当 H1。pdf to word 无 OCR：**有意不满足**（链 A2）。jpg to word ocr：**有意不满足**（链 N4-jpg-batch）。 |
| 满足之处 | How 先答「扫描 PDF 变成一份可编辑 Word」，再写 Add PDFs → Convert all → Download Word。默认中英、点后加载、串行。样例两页印刷 PDF 走 Load sample。一份 PDF 也能用，不另开 URL。 |
| 超出 / 应划边界 | 首屏不要 JPG、不要 TXT/Word 格式下拉。desc 不写 slug/库名卖点。页上限不进 H1。下载后的文件在 Word 里改，本页不做富文本编辑器。 |
| 缺口与已做优化 | 相对「jpg-batch 改 accept」薄页：主路径定为 **pdf.js 光栅 + 页 skip + 一份分节 DOCX**；How 动词对齐 Convert all / Download Word；A2 / N4-jpg-batch / N2 / N3 分流写进 FAQ。相对旧建议 slug：合并为批量任务句，避免 doorway。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file][multiple]`（`accept` 写死 `application/pdf,.pdf`）。队列表：文件名、页数、状态。禁止云盘。禁止第二套图片/URL 抢首屏。JPG/PNG 入队须人话拒绝并指向 N4-jpg-batch H1。
- 主按钮行只放动作：**Convert all**（primary） / **Download Word** 或 **Download ZIP**（无成功页时 disabled；split 且 ≥2 个成功 PDF 时按钮文案切到 Download ZIP） / **Load sample** / **Clear**。How 用词必须等于这些按钮。
- 语种：默认 **Chinese + English**，整批共用。芯片至少：中文、English、Arabic。
- 导出方式（语种芯片下方 fieldset，默认 merge）：**整批一份 Word** / **每个 PDF 一份 Word**。不放进主按钮行。split 且仅 1 个成功文件仍 Download Word。
- 高级设置（`<details>`，默认不打开也能转）：是否在每页 OCR 正文前插入该页光栅图（**默认开**）；最长边（默认 2048）。
- 输出：默认一份 `.docx`（每个成功 PDF：Heading 1 = 文件名；其内每成功页：可选页图 + OCR 段落 + 分页）。split：每个成功 PDF 各自 `.docx`；≥2 个则 ZIP。失败页/文件不进文档。不输出 TXT / 可检索 PDF / CSV。
- 核心规则 / 算法：入队（最多 **5** 个 PDF，整批最多 **20** 页，单文件 **12 MB**）→ Convert all 懒加载 pdf.js + OCR → **串行**渲染与识别 → skip 失败 → 用 `docx` 组文档。引擎加载失败则停后续，已完成页仍可下载。
- 失败与边界行为：手写不保证；表格只出读序文本；多栏可能乱序；版式不承诺与原件一致。超上限拒绝追加。有字层的数字 PDF **仍走光栅 OCR**（产品是扫描件）；FAQ 建议字层文件去 A2。
- 示例 Input → Output：内置 **2 页**印刷体样例 PDF（可用 pdf-lib 从画布合成）。Output：Heading 1 + 两页段落（默认含图）。写进 H2 Example。
- **进页样例（必填）**：**例外：进页不自动调用 `loadSample()`。** 理由：Tier 2 WASM（PDF + 多页 OCR + 组 DOCX）会打坏 LCP。`loadSample()` 必须存在：填样例 PDF 并走 Convert all 同一管线，启用 Download Word。
- **实现防呆**：Page `opts`；`extraBodyHtml` 正则 `\\w`；库仅 `/vendor/...`。禁止 CDN。禁止把图片当主输入。禁止并行多 OCR worker。改邻页 FAQ/related 须 `CROSS_TOOL_UPDATE=1`。不创建 `turn-a-scanned-pdf-into-word`。

### How 步骤草稿（en 母版方向；按钮原文）

1. Drop one or more scanned PDF files (or choose files).
2. Optional: pick a language chip for the whole batch (Chinese and English are the default).
3. Optional: keep one Word for the batch, or one Word per PDF (several files → **Download ZIP**).
4. Click **Convert all** — the first run loads PDF rendering and the OCR engine in this tab, then reads one page after another. A failed page is skipped.
5. Click **Download Word** (or **Download ZIP** when one-Word-per-PDF and more than one file succeeded).

### Converter SEO 自检（立项）

- [x] Slug/H1 = 批量扫描 PDF→Word 任务句，不硬刚 `ocr pdf to word` / `pdf to word`，不抢 N4-jpg-batch
- [x] Meta 前 160 字符含 scanned PDFs → one Word file + 本标签页
- [x] How 用词 = Convert all / Download Word
- [x] 分节 / 页图 / skip 在 Rules/FAQ 有一句
- [x] 无百科主节、无 Best、无近义 URL 列表
- [x] `convert scanned pdf to word` absorb，一份或多份 PDF 都能办成扫描件→可编辑 Word

## 页面模块清单（与 tool-creation 对齐）

> 勾选前须完成「清单前检索覆盖优化」与「用户意图审查」。

- [x] H1 + 一句话摘要
- [x] 首屏工具交互区（含 Load sample；**不**进页自动跑 OCR，见交互规格例外）
- [x] How it works
- [x] Formula / Rules（计算与转换类）
- [x] Example（固定文案，与默认样例一致）
- [x] Use cases（2–3）
- [x] FAQ ≥3
- [x] Related tools ≥2
- [x] References ≥1（YMYL 建议 ≥2）
- [ ] Disclaimer（YMYL 必备）— 本工具非 YMYL
- [x] `03-locale-briefs.md` 已填（实现十语前）
