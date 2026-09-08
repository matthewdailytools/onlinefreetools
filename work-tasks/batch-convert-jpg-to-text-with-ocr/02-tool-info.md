# 02 — 工具信息定稿

**状态**：`ready`  
**slug**：`batch-convert-jpg-to-text-with-ocr`  
**路径**：`/tools/batch-convert-jpg-to-text-with-ocr`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> **相对 N1 硬约束**：不得只加 `multiple` 换皮；队列、skip、ZIP、合并 TXT 必须是首屏可操作能力。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 多张拍页 / JPG 一次识别成可带走的 TXT | batch convert JPG to text with OCR; batch ocr | 多图 → 多 TXT → ZIP | **默认**：多文件 dropzone；串行 Convert all；ZIP 含每张 `{stem}.txt` + `combined.txt`；失败 skip |
| 一叠截图 / PNG / WebP | bulk ocr; convert multiple jpg to text; batch image to text | **同一管线** | 芯片：JPEG/PNG/WebP；不拆 URL |
| 只要一张图 | jpg to text; convert a JPG to text with OCR | **邻页作业** | 有意不满足抢 N1；FAQ 链 `convert-a-jpg-to-text-with-ocr`；本页仍可丢 1 张（队列一行）但不把单张头词当 H1 |
| 中文 / 阿语印刷体整批 | chinese ocr；arabic ocr | 同引擎、整批语种 | 整批共用语种芯片；禁 `batch-arabic-ocr` URL |
| 手写便条一叠 | handwritten ocr | **能力不够** | FAQ 划界失败；不独立 slug |
| 扫描件 PDF 多页 | batch ocr pdf; pdf to ocr multiple document | **另一作业** | 有意不满足；不收 PDF |
| 表格照片 → CSV / 发票 | excel ocr; invoice ocr | **另一作业 / YMYL** | 有意不满足 |
| 品类壳 / 扫描服务 | online ocr; bulk document scanning services | 壳 / 服务 | FAQ 一句分流；禁独立 URL |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：batch convert JPG to text with OCR；batch ocr；bulk ocr；convert multiple jpg to text；batch image to text
- 用户真实任务：一次丢进多张印刷体照片/截图，在本机串行识别，下载 ZIP（每张一份 TXT），必要时再拿一份按文件名切开的合并文本；某一张糊了不要整批作废。
- [x] 竞品 SERP 形态（公开页 2026-09，未人工逐条 SERP）：OnlineOCR.net / i2OCR = 上传万能台，批量常要账号或限次；云端「bulk OCR」多收文件上云；N1 本站已是单张本地 OCR。头词 `online ocr` 仍被品牌站占位，本页不硬刚。
- [x] 它们没讲清什么？（缺口）① 多张时失败是整批作废还是 skip；② ZIP 文件名如何对应原图；③ 能不能拼成一份带页分隔的 TXT；④ 文件是否离开设备；⑤ 和「一次转一张」页差在哪（队列 vs 单框）；⑥ 扫描 PDF 批量不是同一输入。
- [x] 我们补哪 ≥3 条增益（**相对 N1 的额外 IG**）：① 队列表 + 逐行状态；② 失败 skip 继续；③ ZIP 每图一份 TXT（重名 `stem (2).txt`）；④ 默认附 `combined.txt`（`--- filename ---`）；⑤ 进度 i/n、串行复用同一 OCR Worker；⑥ FAQ 划界单张 N1 / 扫描 PDF。详见下方对照表与 `notes.md`。
- [x] 长尾：Planner `batch ocr` / `bulk ocr` 主打本页。`jpg to text` / `image to text` **不改 N1 H1**，本页 desc/FAQ「多张才用本页」。不拆 Free/Online/语种 URL。PDF/Word/表另 slug。
- [x] 权威来源 URL：https://github.com/tesseract-ocr/tesseract ；https://github.com/naptha/tesseract.js ；https://github.com/101arrowz/fflate
- [x] Use case 草稿：讲义/说明书连拍多页抽字归档；一串聊天气泡/报错截图一次复制；菜单/价目照片按文件名进 ZIP 再合并校对。
- [x] 边界：上限 10 张；单张体积/边长与 N1 同级；手写/糊图 skip；表格不保格；不收 PDF；不输出 docx；并行识别不做（OOM）。
- [x] 结果区：队列表（文件名、状态、字数或错误）+ 只读合并预览；**Download ZIP**；**Copy combined text**（无产物 disabled）。
- [x] Related：`convert-a-jpg-to-text-with-ocr`、`extract-text-from-pdf`（第三候选 `images-to-pdf`）

### 相对 N1 的额外 Information Gain（控件级，必须实现）

| # | N1 `convert-a-jpg-to-text-with-ocr` | 本页必须多出来的能力 | 可见落点 |
|---|---|---|---|
| 1 | 单文件；无 `multiple` | `input multiple` + 队列表（文件名、像素、queued/reading/done/skipped） | 首屏表；Rules |
| 2 | 按钮 Convert；一份 TXT | **Convert all**；无 ZIP 时 Download ZIP disabled | How 用词=按钮 |
| 3 | 一张失败即整页错误 | **失败 skip**：该行错误，其余继续；成功项仍进 ZIP | 行状态 + FAQ |
| 4 | Download `{stem}.txt` | **ZIP**：每张 `{stem}.txt`；重名 `stem (2).txt`；另含 **`combined.txt`** | 默认产物；Example |
| 5 | 无合并 | 合并 TXT 用 `--- {filename} ---` 分隔各张；**Copy combined text** | Rules + Use case「一本书连拍」 |
| 6 | 进度 Loading engine / Reading | **i / n** + 当前文件名；同一 Worker 串行复用 | aria-live |
| 7 | FAQ：批量后排、一次一张 | FAQ：只要一张 → 链 N1；本页是一叠照片 | 互链，禁止文案说「和单张页一样只是多选」 |

**禁止当 IG**：换 H1 不改控件；并行开多个 WASM 冒充更快；Word/Excel 下拉；收 PDF。

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 多文件入队 → 缩最长边 → 串行 OCR → 每张一份 TXT → ZIP；合并件按文件名插入分隔行 |
| 2 | 边界/失败 | 上限 10；非图/损坏/超限 skip；手写差 skip；引擎加载失败则整批停并说明已完成行 |
| 3 | 场景语境 | 连拍讲义、一串截图、菜单照片归档；对照「只要一张走 N1 / 只要 PDF 字层」 |
| 4 | 对照表 | Rules/FAQ：本页 ZIP TXT vs N1 单张 vs 字层抽取 vs 照片装订 PDF |
| 6 | 本地隐私 | 图留在设备；不上服务器；脚本从本站 `/vendor/` 加载 |
| 8 | 数值示例 | 样例 2 张印刷图 → 2 个 TXT + combined → ZIP；上限 10 |
| 9 | 主题内链 | convert-a-jpg-to-text-with-ocr、extract-text-from-pdf |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | image / OCR 批量行（N1 的队列兄弟页，非 doorway） |
| 场景与行业 | 多张拍页/截图 → TXT ZIP（可选合并） |
| 技术（包、Tier、本地处理） | 复用 N1 Tesseract LSTM 点后加载；fflate ZIP；`page.style: opts`；`localProcessing: true`；Tier 2；vendor 已入库则勿重复拷贝 |
| Catalog `page.style` | **opts** |
| Title (en) | **Batch convert JPG to text with OCR** |
| Description 要点 | **SERP 摘要窗口（前 120–160 字符）**：Drop several JPGs or screenshots and download a ZIP of text files — recognition runs in this tab, one photo after another. 紧跟短句：Steps: add images, Convert all, Download ZIP. Example: two printed sample photos become two TXT files plus one combined file. 次词：also called batch OCR / bulk OCR. 只要一张 → 链单张页（用户文案勿写 slug）。语种：整批默认中英。勿堆 Online/Free；勿把说明书全文当 meta。 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；无虚假评分） |
| FAQ 要点（≥3） | 会上传吗？和单张 JPG OCR 有何不同？一张失败会不会整批没了？ZIP 里有什么？只要一张怎么办？PNG/WebP？手写呢？能收 PDF 吗？阿语/中文怎么整批选？上限几张？ |
| Disclaimer / References | 非 YMYL；Tesseract / tesseract.js / fflate |
| related | `convert-a-jpg-to-text-with-ocr`, `extract-text-from-pdf` |
| 验收 | `coverage:gate` 0b（本步）→ 实现后 2→4；`verify:tool`；`lint:vendor` |
| 工期粗估 | 会话 B：Page 队列+ZIP + 母版（引擎复用 N1）；C：十语；D：ship。另：N1 FAQ 批量链（CROSS_TOOL） |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-08 |
| slug 结论 | 保留 `batch-convert-jpg-to-text-with-ocr`（情境=多张 JPG + 动作=批量 OCR + 结果=text/ZIP；不是品类头词 `batch-ocr` doorway，也不是 N1 单张换皮，也不是扫描 PDF 批量） |
| 主检索词 → title/H1 | 英文 H1 **Batch convert JPG to text with OCR**（主打任务句；OCR 三字留在 H1 以免被理解成改扩展名）。中文 H1 方向：**用 OCR 批量把 JPG 转成文字**（勿硬塞 batch/online） |
| 次要关键词 → desc / FAQ / Use cases | `batch ocr` / `bulk ocr` → desc「also called」+ FAQ；`convert multiple jpg to text` → How（多文件 dropzone）；`batch image to text` → Use case 一串截图；`jpg to text` 单张头词 → FAQ 链 N1，**不进本页 H1**；`bulk ocr scanning solutions` → FAQ 一句不是扫描厂服务 |
| 用户搜索习惯判断 | 搜 batch/bulk ocr 的人拿的是一叠图要一次出字；搜 jpg to text 的人常是单张，应去 N1。H1 禁 Batch OCR / Online OCR / Bulk OCR 光杆（策略禁硬刚头词 + doorway）。H1 禁参数枚举（语种、上限、ZIP 结构不进 H1）。 |
| 优化摘要 | 相对用户原话「batch convert jpg to text with ocr」：slug/H1 采用该任务句；Planner `batch ocr`/`bulk ocr` 指定 absorb 落点；明确不吸收 N1 单张头词当进攻 H1；IG 写成队列/skip/ZIP/合并四件套，避免只加 multiple 的薄页。未跑 SERP，上线前仍须看 organic title。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=batch-convert-jpg-to-text-with-ocr --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。来源：[`docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`](../../docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md)（`batch ocr` / `bulk ocr` 原 defer 后排）；CSV：`ocr-Keyword Planner 09-06-2026 at 07-19-16.csv`。09-08 Text Converter 批的 `jpg to text` 仍归 **N1**，本页只 FAQ 分流。

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| batch convert JPG to text with OCR（用户点名任务句） | **build 主词** | H1「Batch convert JPG to text with OCR」 | multiple dropzone → Convert all → ZIP of TXT | |
| batch ocr（10–100） | absorb | desc 也叫 + FAQ | 同一队列作业 | 不把 H1 改成光杆 Batch OCR |
| bulk ocr（10–100） | absorb | desc + FAQ | 同一 ZIP 产物 | 不拆 bulk-ocr URL |
| bulk ocr scanning solutions（10–100） | drop 服务意图；FAQ 消歧 | FAQ：不是上门扫描服务 | 只办成本机多图→TXT | 服务/解决方案采购 |
| convert multiple jpg to text / batch image to text | absorb（搜法，Planner 近邻） | How + Use case | JPEG/PNG/WebP 多选 | 不拆 png 批量 URL |
| jpg to text / jpeg to text / image to text（09-08，1k 带） | **不覆盖进攻** | FAQ：只要一张用单张 OCR 页 | 本页可丢 1 张但不改 H1 | 已实现 N1；禁 doorway |
| pdf to ocr multiple document（0–10） | **不覆盖** | FAQ：本页不收 PDF | 无 PDF 输入 | N2 |
| online ocr / free ocr / ocr converter | drop URL；FAQ 分流 | FAQ：多图 TXT 用本页；单张用 N1 | 只办成本页作业 | 禁壳 slug |
| handwritten ocr | drop 独立 URL；FAQ 划界 | FAQ：印刷体为主 | 不提供手写模型开关 | 能力上限 |
| bulk document scanning / scanning services | drop | 不进 H1 | 无 | 硬件/服务 |

- [x] 交互规格已按上表补齐能力（多图 JPEG/PNG/WebP → Convert all → ZIP + combined；skip；语种整批芯片；单张头词/PDF/Word/表/服务有意不满足）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务（有 Planner 长尾时含长尾任务）。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-08 |
| 总判 | **满足**：搜 batch convert JPG to text / batch ocr 的人打开页即多文件队列，点 Convert all 得到 ZIP（每张 TXT + combined）；失败 skip。**有意不满足**：单张头词进攻（链 N1）、Online OCR 万能台、扫描 PDF、Word、表格 CSV、手写产品页、扫描厂服务。**不超出**：不做第二套 PDF 上传、不做并行多 Worker、不把合并 TXT 做成第二套「文档编辑器」。 |
| 主词搜索者任务 | 把一叠 JPG（或同类照片/截图）一次变成可下载的文本文件，某一张失败不要全没，文件尽量别上传。 |
| Ads/Planner 长尾任务 | batch ocr / bulk ocr / convert multiple jpg：能多选图出 ZIP。jpg to text 单张：**有意不满足进攻**，FAQ 链 N1。pdf multiple / scanning services：**有意不满足**。 |
| 满足之处 | How 先答「一叠照片变成 ZIP 里的文字」，再写 Add images → Convert all → Download ZIP。默认中英、点后加载、串行。样例两张印刷图，点 Load sample 再跑（与自动跑 WASM 的 CWV 例外写清）。 |
| 超出 / 应划边界 | 首屏不要 PDF、不要 TXT/Word/Excel 下拉。desc 不写 doorway/slug/库名卖点。语种与上限不进 H1。合并预览是只读，不当富文本编辑器。不要为「差异」做并排双引擎对比。 |
| 缺口与已做优化 | 相对「只加 multiple」薄页：How 动词对齐 Convert all / Download ZIP / Copy combined text；默认 ZIP 同时含 per-file + combined（不打开高级设置也能拿到两种产物）；N1 分流写进 FAQ 而非 H1。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file][multiple]`（`accept` 写死 `image/jpeg,image/png,image/webp`）。显示队列：文件名、像素、状态。可继续追加直至上限。禁止云盘。禁止第二套 PDF/URL 输入抢首屏。
- 主按钮行只放动作：**Convert all**（primary） / **Download ZIP**（无成功 TXT 时 disabled） / **Copy combined text**（无合并文本时 disabled） / **Load sample** / **Clear**。How 用词必须等于这些按钮。
- 语种：默认 **Chinese + English**，**整批共用**（不对每行设语种，避免超出）。芯片至少：中文、English、Arabic。语种放队列与主按钮之间，或「高级设置（可选）」内；**默认不打开也能转**。≥3 个可选参数时用 `<details>`：语种、是否在 ZIP 内附 combined（**默认开**）、最长边上限（默认 1920 或 2048，与 N1 对齐）。
- 输出：队列表逐行更新；只读合并预览；Download `jpg-ocr-text.zip`（或当地日期文件名）；ZIP 内 `{stem}.txt` + 默认 `combined.txt`。不输出 PDF/docx/csv。
- 核心规则 / 算法：入队（上限 **10**）→ 点 Convert all 时懒加载 OCR WASM（进度：Loading engine… / 3/10 filename）→ **串行**解码→缩边→识别→写入该行 TXT → skip 失败行 → 全部结束后打包 ZIP（fflate）。复用**一个** Tesseract worker。失败：无法解码、非支持类型、超体积（建议 ≤8–12MB/张）、识别为空 → 该行错误文案，不静默、不中断其余行。引擎脚本加载失败 → 停止后续行并保留已完成行可下载。
- 失败与边界行为：手写不保证；表格只出读序文本不保格；多栏可能乱序（Rules 一句）。超 10 张拒绝追加并 hint。
- 示例 Input → Output：内置 **2** 张印刷体样例图（与 N1 同级清晰印刷；文件名可 `sample-1.jpg` / `sample-2.jpg`）。Output：两份 TXT + combined 含两段分隔；写进 H2 Example。
- **进页样例（必填）**：**例外：进页不自动调用 `loadSample()` / 不自动跑 OCR。** 理由：Tier 2 WASM + 多图串行会打坏 LCP/INP，且手机内存紧。`loadSample()` 必须存在且按钮可点：填入 2 张样例并**走与 Convert all 相同的识别管线**，队列表出现真实文本、启用 ZIP/Copy。用户也可先丢自己的图再 Convert all。与 H2 Example 对齐。
- **实现防呆**：Page `opts` 签名；`extraBodyHtml` 正则 `\\w`；库仅 `/vendor/...`。B 后 `npm run lint:tool-page -- --slug=batch-convert-jpg-to-text-with-ocr`。禁止 CDN。禁止在本页实现 PDF 光栅化。禁止并行多个 OCR worker。实现本页后改 N1 FAQ 批量链须 `CROSS_TOOL_UPDATE=1`。

### How 步骤草稿（en 母版方向；按钮原文）

1. Drop several JPG, PNG, or WebP files (or choose files).
2. Optional: pick a language chip for the whole batch (Chinese and English are the default).
3. Click **Convert all** — the first run loads the OCR engine in this tab, then reads one photo after another. A failed photo is skipped.
4. Click **Download ZIP** (one TXT per photo, plus a combined file) or **Copy combined text**.

### Converter SEO 自检（立项）

- [x] Slug/H1 = 批量任务句，不硬刚 `batch ocr` / `online ocr`，不抢 N1 `jpg to text`
- [x] Meta 前 160 字符含 several JPGs → ZIP + 本标签页串行识别
- [x] How 用词 = Convert all / Download ZIP / Copy combined text
- [x] 队列 skip / ZIP 内容 / 语种芯片在 Rules/FAQ 有一句
- [x] 无百科主节、无 Best、无近义 URL 列表
- [x] 头词 batch ocr absorb 为 FAQ，多文件输入能办成批量图→TXT

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
