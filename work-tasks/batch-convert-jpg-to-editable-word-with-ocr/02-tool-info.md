# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`batch-convert-jpg-to-editable-word-with-ocr`  
**路径**：`/tools/batch-convert-jpg-to-editable-word-with-ocr`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> **相对其他 OCR 硬约束**：不得只改 MIME；须交付**可编辑 Word 文档结构**（节标题、分页、可选原图）。不得抢 N1-batch 的 TXT ZIP，不得抢 `images-to-word` 的纯贴图，不得抢未来 N4 的扫描 PDF。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 多张拍页 / JPG 一次认成可在 Word 里改的文档 | batch convert JPG to editable Word with OCR; jpg to word ocr | 多图 → 一份 DOCX | **默认**：多文件 dropzone；串行 Convert all；一份 Word（每张一节 + 分页）；默认段前插原图 |
| 一叠截图 / PNG / WebP 要进 Word 校对 | ocr jpg to word; convert jpg to word ocr | **同一管线** | 芯片：JPEG/PNG/WebP；不拆 URL |
| 只要纯文本 ZIP | batch convert JPG to text with OCR | **邻页作业** | 有意不满足抢 N1-batch；FAQ 链该页 |
| 只要一张图出 TXT | convert a JPG to text with OCR | **邻页作业** | FAQ 链 N1；本页可丢 1 张但仍是 Word 产物 |
| 只要把照片装进 Word、不必认字 | images to word | **邻页作业** | FAQ：无 OCR 贴图走 `images-to-word` |
| 扫描件 PDF → Word | ocr pdf to word; convert scanned pdf to word | **另一作业（N4）** | 有意不满足；不收 PDF |
| 数字 PDF 已有字层 → Word | pdf to word | **邻页 A2** | 有意不满足；链 `turn-pdf-into-word-document` |
| 手写便条一叠 | scan handwritten text to word | **能力不够** | FAQ 划界失败 |
| 品类壳 | ocr to word；online ocr | 壳 | FAQ 分流；禁光杆 H1 |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch convert JPG to editable Word with OCR；jpg to word ocr；ocr jpg to word；convert jpg to word ocr；ocr to word（FAQ 也叫，不作进攻 H1）
- 用户真实任务：一次丢进多张印刷体照片，在本机识别，下载**一份能在 Microsoft Word / 兼容软件里改字的 DOCX**；某一张糊了不要整份作废；最好还能对照原图校对。
- [x] 竞品 SERP 形态（公开页 2026-09，未人工逐条 SERP）：OnlineOCR / i2OCR 万能台常出 Word 但上云、限次；`ocr pdf to word` 被 PDF 转换站占头词。本页不硬刚该头词。N1-batch 本站已是多图→TXT ZIP，不是 Word。
- [x] 它们没讲清什么？（缺口）① TXT ZIP 和「能打开改的 Word」不是同一产物；② 失败是整份没了还是 skip 后其余进 Word；③ 每张图在 Word 里如何分节；④ 要不要带原图校对；⑤ 文件是否离开设备；⑥ 贴图 Word 页并不能改字。
- [x] 我们补哪 ≥3 条增益：① 队列 + skip；② **一份** DOCX（Heading 1=文件名 + 分页 + OCR 段落）；③ 默认段前原图可关；④ Download Word；⑤ FAQ 划界 N1 / N1-batch / images-to-word / N4。详见对照表与 `notes.md`。
- [x] 长尾：`jpg to word ocr` 等 absorb 本页（H1 仍是批量任务句）。`ocr pdf to word` / `convert scanned pdf to word` **不吸收进攻**，留给 N4。不拆 Free/Online/语种 URL。
- [x] 权威来源 URL：https://github.com/tesseract-ocr/tesseract ；https://github.com/naptha/tesseract.js ；https://github.com/dolanmiu/docx
- [x] Use case 草稿：连拍讲义进 Word 再改标题；菜单照片一节一张带图校对；一串报错截图进同一文档给同事改。
- [x] 边界：上限 10 张；手写/糊图 skip；表格不保格；不收 PDF；不承诺原件栏布局；不做 TXT ZIP。
- [x] 结果区：队列表 + **Download Word**（无产物 disabled）。
- [x] Related：`batch-convert-jpg-to-text-with-ocr`、`convert-a-jpg-to-text-with-ocr`、`images-to-word`

### 相对其他 OCR / Word 页的额外 Information Gain（控件级，必须实现）

| # | 邻页 | 本页必须多出来的能力 | 可见落点 |
|---|---|---|---|
| 1 | N1 单张 TXT | 多文件队列 + Convert all + skip | 首屏表；FAQ |
| 2 | N1-batch TXT ZIP + `--- filename ---` | **一份** `.docx`：每张一节、Heading 1=文件名、分页、正文是段落不是纯文本文件 | Example / Rules |
| 3 | N1-batch Download ZIP | **Download Word**；不默认输出 TXT ZIP | How = 按钮 |
| 4 | `images-to-word` 每页只贴图 | OCR **可编辑文字**为正文；原图默认插在段前且可关 | 高级设置 + FAQ |
| 5 | A2 / 未来 N4 吃 PDF | 本页 **不收 PDF** | 入队拒绝 + FAQ |

**禁止当 IG**：只改扩展名的 ZIP；并行多引擎；Word/Excel 下拉；收 PDF；H1=`OCR to Word` 光杆。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 入队 → 缩边 → 串行 OCR → 按序写入 DOCX 节（标题、可选图、段落、分页） |
| 2 | 边界/失败 | 上限 10；失败 skip；手写差；表格乱序；版式不保；不收 PDF |
| 3 | 场景语境 | 讲义/菜单/截图要进 Word 改，对照「只要 TXT ZIP / 只要贴图 / 只要扫描 PDF」 |
| 4 | 对照表 | Rules/FAQ：本页 vs N1-batch vs images-to-word vs 字层转 Word |
| 6 | 本地隐私 | 图留在设备；不上服务器；脚本从本站 `/vendor/` 加载 |
| 8 | 数值示例 | 样例 2 张 → 两节 Word；上限 10 |
| 9 | 主题内链 | N1-batch、N1、images-to-word |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | image / OCR→Word（N1-batch 的 Word 兄弟页，非 doorway） |
| 场景与行业 | 多张拍页/截图 → 一份可编辑 DOCX |
| 技术（包、Tier、本地处理） | 复用 N1 Tesseract LSTM 点后加载；`docx` vendor；`page.style: opts`；`localProcessing: true`；Tier 2 |
| Catalog `page.style` | **opts** |
| Title (en) | **Batch convert JPG to editable Word with OCR** |
| Description 要点 | **SERP 摘要窗口（前 120–160 字符）**：Drop several JPGs and download one Word file you can edit — recognition runs in this tab, photo after photo. 紧跟：Steps: add images, Convert all, Download Word. Example: two printed samples become two sections with headings and optional photos. 次词：also called jpg to word ocr. 要 TXT ZIP → 链 N1-batch。勿堆 Online/Free。 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；无虚假评分） |
| FAQ 要点（≥3） | 会上传吗？和批量 TXT OCR 有何不同？和「图片转 Word」贴图页有何不同？一张失败整份没了吗？Word 里长什么样？只要扫描 PDF？手写呢？PNG？上限几张？ |
| Disclaimer / References | 非 YMYL；Tesseract / tesseract.js / docx |
| related | `batch-convert-jpg-to-text-with-ocr`, `convert-a-jpg-to-text-with-ocr`, `images-to-word` |
| 验收 | `coverage:gate` 0b（本步）→ 实现后 2→4；`verify:tool` |
| 工期粗估 | 会话 B：Page 队列+docx + 母版；C：十语；D：ship。邻页 FAQ 互链须 `CROSS_TOOL_UPDATE=1` |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-08 |
| slug 结论 | 保留 `batch-convert-jpg-to-editable-word-with-ocr`（情境=多张 JPG + 动作=OCR + 结果=可编辑 Word；不是 `ocr-to-word` 壳，也不是 N4 扫描 PDF，也不是 N1-batch TXT ZIP 换皮） |
| 主检索词 → title/H1 | 英文 H1 **Batch convert JPG to editable Word with OCR**。中文 H1 方向：**用 OCR 批量把 JPG 转成可编辑的 Word**（勿硬塞 batch/online/editable 英文） |
| 次要关键词 → desc / FAQ / Use cases | `jpg to word ocr` / `ocr jpg to word` / `convert jpg to word ocr` → desc「also called」+ FAQ；`ocr to word` → FAQ 也叫，**不进 H1**；`ocr pdf to word` / `convert scanned pdf to word` → FAQ 有意不满足、留给 N4；TXT 批量 → FAQ 链 N1-batch |
| 用户搜索习惯判断 | 搜 jpg to word ocr 的人要的是能打开改的 Word，不是 TXT。搜 ocr pdf to word 的人拿的是 PDF，应去 N4。H1 禁 OCR to Word / jpg to word / Batch OCR 光杆。H1 禁参数枚举（插图开关、上限不进 H1）。 |
| 优化摘要 | 相对用户原话：slug/H1 用批量+可编辑 Word 任务句；Planner `jpg to word ocr` 从「仅 N4 芯片」改为本页 absorb（用户点名 JPG 批量 Word，对象≠扫描 PDF）；明确不进攻 `ocr pdf to word`；IG 写成 DOCX 节结构+插图校对，避免只改扩展名。未跑 SERP。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-convert-jpg-to-editable-word-with-ocr --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。来源：[`docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`](../../docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md) §6.4（原归 N4 芯片）。CSV：`scan-Keyword Planner 09-06-2026 at 07-30-14.csv`。

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| batch convert JPG to editable Word with OCR（用户点名任务句） | **build 主词** | H1 | multiple → Convert all → Download Word | |
| jpg to word ocr / ocr jpg to word / convert jpg to word ocr（10–100） | absorb | desc 也叫 + FAQ | 同一 JPEG 入队；一份 DOCX | 不把 H1 改成光杆 jpg to word；不另建单张 URL |
| ocr to word / ocr to word converter（100–1k） | absorb 也叫；**不作进攻 H1** | FAQ | 能出可编辑 DOCX | 禁 `ocr-to-word` 壳 slug；PDF 意图分流 N4 |
| ocr pdf to word / pdf to word ocr（1k–10k） | **不覆盖进攻** | FAQ：本页不收 PDF | 无 PDF 输入 | 留给 N4；A2 无 OCR |
| convert scanned pdf to word / scan to word converter（100–1k） | **不覆盖** | FAQ | 无 | N4 |
| scan handwritten text to word（10–100） | drop 独立 URL；FAQ 划界 | FAQ：印刷体为主 | 不提供手写开关 | 能力上限 |
| online ocr / free ocr | drop URL | FAQ 分流 | 只办成本页作业 | 禁壳 |
| batch ocr / bulk ocr（10–100） | **不抢 N1-batch H1** | FAQ：要 TXT ZIP 用批量转文字页 | 本页出 Word 不是 TXT ZIP | 已实现/已立项 N1-batch |

- [x] 交互规格已按上表补齐能力（多图 → 一份可编辑 DOCX + skip + 可选插图；PDF/TXT ZIP/贴图 Word/手写产品有意不满足）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务（有 Planner 长尾时含长尾任务）。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-08 |
| 总判 | **满足**：搜批量 JPG→可编辑 Word / jpg to word ocr 的人打开页即多文件队列，点 Convert all 得到一份可改字的 DOCX；失败 skip；默认带原图校对。**有意不满足**：TXT ZIP（N1-batch）、单张 TXT（N1）、无 OCR 贴图 Word、扫描 PDF→Word（N4）、数字 PDF 字层转 Word（A2）、Online OCR 万能台、手写产品。**不超出**：不做第二套 PDF 上传、不做 Word 所见即所得编辑器、不把插图开关做成第二个产品。 |
| 主词搜索者任务 | 把一叠 JPG 变成能在 Word 里改的文档，不是纯文本包，也不是只能看图的相册 DOCX。 |
| Ads/Planner 长尾任务 | jpg to word ocr：**能**把 JPG 认成 Word 正文。ocr pdf to word / convert scanned pdf to word：**有意不满足**。ocr to word：能出 DOCX，但不把壳词当 H1。 |
| 满足之处 | How 先答「一叠照片变成一份可编辑 Word」，再写 Add images → Convert all → Download Word。默认中英、点后加载、串行。样例两张印刷图走 Load sample。 |
| 超出 / 应划边界 | 首屏不要 PDF、不要 TXT/Word 格式下拉。desc 不写 slug/库名卖点。节结构/插图不进 H1。下载后的文件在 Word 里改，本页不做富文本编辑器。 |
| 缺口与已做优化 | 相对「TXT 改后缀」薄页：产物定为**一份**分节 DOCX + 默认插图；How 动词对齐 Convert all / Download Word；N1-batch / images-to-word / N4 分流写进 FAQ。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file][multiple]`（`accept` 写死 `image/jpeg,image/png,image/webp`）。队列表：文件名、像素、状态。禁止云盘。禁止第二套 PDF/URL 抢首屏。
- 主按钮行只放动作：**Convert all**（primary） / **Download Word**（无成功节时 disabled） / **Load sample** / **Clear**。How 用词必须等于这些按钮。
- 语种：默认 **Chinese + English**，整批共用。芯片至少：中文、English、Arabic。
- 高级设置（`<details>`，默认不打开也能转）：是否在每节 OCR 正文前插入原图（**默认开**）；最长边（默认 2048，与 N1 对齐）。
- 输出：一份 `.docx`。每张成功图一节：Heading 1 = 原文件名；可选原图；OCR 文本按行变段落；节后分页。失败行不进文档。不输出 TXT ZIP / PDF / CSV。
- 核心规则 / 算法：入队（上限 **10**）→ Convert all 懒加载 OCR → **串行**同一 Worker → skip 失败 → 用 `docx` 组文档。引擎加载失败则停后续行，已完成节仍可下载。
- 失败与边界行为：手写不保证；表格只出读序文本；多栏可能乱序；版式不承诺与原件一致。超 10 张拒绝追加。
- 示例 Input → Output：内置 **2** 张印刷体样例（可与 N1 同级）。Output：两节 Heading + 段落（默认含图）。写进 H2 Example。
- **进页样例（必填）**：**例外：进页不自动调用 `loadSample()`。** 理由：Tier 2 WASM + 多图 + 组 DOCX 会打坏 LCP。`loadSample()` 必须存在：填 2 张样例并走 Convert all 同一管线，启用 Download Word。
- **实现防呆**：Page `opts`；`extraBodyHtml` 正则 `\\w`；库仅 `/vendor/...`。禁止 CDN。禁止 PDF 光栅化。禁止并行多 OCR worker。改邻页 FAQ/related 须 `CROSS_TOOL_UPDATE=1`。

### How 步骤草稿（en 母版方向；按钮原文）

1. Drop several JPG, PNG, or WebP files (or choose files).
2. Optional: pick a language chip for the whole batch (Chinese and English are the default).
3. Click **Convert all** — the first run loads the OCR engine in this tab, then reads one photo after another. A failed photo is skipped.
4. Click **Download Word** — one document with a section per photo (heading, optional picture, editable text).

### Converter SEO 自检（立项）

- [x] Slug/H1 = 批量任务句，不硬刚 `ocr to word` / `ocr pdf to word`，不抢 N1-batch TXT
- [x] Meta 前 160 字符含 several JPGs → one Word file + 本标签页
- [x] How 用词 = Convert all / Download Word
- [x] 分节 / 插图 / skip 在 Rules/FAQ 有一句
- [x] 无百科主节、无 Best、无近义 URL 列表
- [x] `jpg to word ocr` absorb，多文件输入能办成 JPG→可编辑 Word

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
