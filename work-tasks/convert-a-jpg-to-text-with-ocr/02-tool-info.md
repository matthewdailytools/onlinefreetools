# 02 — 工具信息定稿

**状态**：`implemented`  
**slug**：`convert-a-jpg-to-text-with-ocr`  
**路径**：`/tools/convert-a-jpg-to-text-with-ocr`  
**主方向**：A  
**YMYL**：否  

> 填完且状态为 `ready` 后，再按 `.cursor/rules/tool-creation.mdc` 实现。  
> IG 依据：`docs/2026-07-28-google-seo-strategy-implementation.md` §3.1 / §3.8。  
> 实现前硬门禁：印刷体中英 **POC** 过（点后加载体积、首字耗时、桌面 Chrome + 一部 Android）；日语走 fallback，不得用 tiny 冒充日文产品级。

---

## 使用场景（§3.3 H）

| 使用场景 | 用户搜法 | 作业类型 | 本页默认 / 芯片 |
|---|---|---|---|
| 手机拍印刷页 / JPG 截图 → 可复制纯文本 | jpg to ocr; convert a JPG to text with OCR | 图 → TXT | **默认**：单张 JPG；点 Convert 加载 OCR；中英；复制/下载 TXT |
| 屏幕截图 / PNG / WebP / 照片 | ocr image reader; convert image to ocr text; jpg to ocr online | **同一管线** | 芯片：PNG、WebP、JPEG；不拆 URL |
| 要「OCR 成文本」的近义说法 | ocr to text; ocr text recognition; free ocr to text | 同作业 | absorb 进 desc/FAQ；**禁** H1=`OCR to text` |
| 中文 / 阿语印刷体 | chinese ocr online; arabic ocr | 同引擎、换语种 | 语种芯片；**禁** `arabic-ocr` / `chinese-ocr` URL |
| 手写便条 | handwritten ocr | **能力不够** | FAQ 划界失败；不独立 slug |
| 扫描件 PDF → 文本 / 可检索 PDF / Word | ocr pdf to text; convert pdf to ocr pdf; ocr pdf to word | **另一作业** | 有意不满足；FAQ 指向未来 N2/N3/N4，本页不收 PDF |
| 表格照片 → CSV / 发票字段 | excel ocr; invoice ocr | **另一作业 / YMYL** | 有意不满足；N5 后排；发票不做 |
| 批量多图 OCR | batch ocr; bulk ocr | **后排** | 单文件；不加 multiple 冒充 |
| 品类壳 / 下载软件 | online ocr; free ocr; tesseract ocr download | 壳 / 下载 | FAQ 一句分流；禁独立 URL |

---

## IG 预审

- 目标主词 / 长尾意图（1–5）：jpg to ocr；convert a JPG to text with OCR；ocr to text；ocr text recognition；ocr image reader
- 用户真实任务：丢一张印刷体 JPG/截图，在本机识别成可复制文字，复制或下载 TXT；要能选中英/阿语，并知道手写和扫描 PDF 不是本页。
- [x] 竞品 SERP 形态（公开页 2026-09，未人工逐条 SERP）：OnlineOCR.net / i2OCR = 上传 + TXT/Word/Excel 下拉万能台；iLovePDF OCR PDF = 扫描 PDF→可检索 PDF；zpdf / OneClickPDF = 浏览器 Tesseract。头词 `online ocr` 被品牌站占位。
- [x] 它们没讲清什么？（缺口）① 文件是否离开设备；② 点后才加载引擎、首屏不拉数十 MB；③ 印刷体 vs 手写失败；④ 图片 OCR ≠ 数字 PDF 抽字层 ≠ 可检索 PDF ≠ Word；⑤ 语种是芯片不是新 URL；⑥ 置信度低的行会怎样。
- [x] 我们补哪 ≥3 条增益：本地 WASM + 点后加载；语种芯片（默认中英）；置信度可见；诚实失败（手写/糊图/非图）；邻页划界；单文件上限与缩边。
- [x] 长尾：Planner N1 表全部 absorb 进本页。不拆 Free/Online/语种/手写 URL。PDF/Word/表/批量另 slug。
- [x] 权威来源 URL：https://www.paddleocr.ai/ ；https://github.com/tesseract-ocr/tesseract ；https://github.com/naptha/tesseract.js
- [x] Use case 草稿：拍白板/讲义印刷字粘进笔记；截图聊天气泡/报错字复制；中英菜单/说明书照片抽字（非手写菜单）。
- [x] 边界：手写连笔失败；表格不保单元格；不收 PDF；不输出 docx/searchable PDF；模糊/过曝/强透视差；单张体积/边长上限。
- [x] 结果区：识别文本框 + Copy + Download TXT；可选显示均置信度；低置信行仍输出但 Rules 说明勿当校对。
- [x] Related：`extract-text-from-pdf`、`images-to-pdf`（第三候选 `images-to-word` 若 related 槽够再加）

### 计划勾选的 §3.1 维度（至少 3）

| # | 维度 | 本页如何体现 |
|---|---|---|
| 1 | 公式/规则 | 解码图 → 可选缩最长边 → 按语种跑检测+识别 → 按框阅读顺序拼行 → TXT |
| 2 | 边界/失败 | 非图片/损坏/超限/手写差/引擎加载失败；明确错误，不静默空结果 |
| 3 | 场景语境 | 拍页、截图、说明书照片；对照「只要装订 PDF / 只要 PDF 字层」 |
| 4 | 对照表 | Rules/FAQ：本页 TXT vs 字层抽取 vs 照片→PDF vs 扫描件→Word（N4 未上线则只写「本页不出 Word」） |
| 6 | 本地隐私 | 图留在设备；不上服务器；脚本从本站 `/vendor/` 加载 |
| 8 | 数值示例 | 样例印刷图 → 固定一句可见英文（+可选中文）与 Example 对齐 |
| 9 | 主题内链 | extract-text-from-pdf、images-to-pdf |

---

## 开发 / SEO 卡片

| 字段 | 内容 |
|---|---|
| 集群 / 优先级 | image / OCR 首条（N1 最小闭环，验证引擎） |
| 场景与行业 | 拍页/截图 → 可复制纯文本 |
| 技术（包、Tier、本地处理） | PP-OCRv6 tiny 点后加载（`@paddleocr/paddleocr-js` 或实现时钉死的等价 ONNX 包）；语种 fallback Tesseract LSTM 或 PP-OCR small；`page.style: opts`；`localProcessing: true`；Tier 2；vendor 入库 |
| Catalog `page.style` | **opts** |
| Title (en) | **Convert a JPG to text with OCR** |
| Description 要点 | **SERP 摘要窗口（前 120–160 字符）**：Drop a JPG or screenshot and copy the printed text — recognition runs in this tab, not on a server. 紧跟短句：Steps: drop image, Convert, Copy text or Download TXT. Example: a printed sample photo becomes selectable lines. 次词：also called OCR to text / image reader. 语种：Chinese and English by default; Arabic as a chip. 勿堆 Online/Free；勿把说明书全文当 meta。 |
| Schema | WebApplication + BreadcrumbList（与可见文案一致；无虚假评分） |
| FAQ 要点（≥3） | 会上传吗？和 PDF 抽文本有何不同？PNG/WebP 行不行？手写呢？阿语/中文怎么选？这是 Online OCR 吗？能出 Word/可检索 PDF 吗？批量呢？ |
| Disclaimer / References | 非 YMYL；PaddleOCR / Tesseract 官方或 GitHub |
| related | `extract-text-from-pdf`, `images-to-pdf` |
| 验收 | `coverage:gate` 0b（本步）→ 实现后 2→4；`verify:tool`；`lint:vendor` |
| 工期粗估 | 会话 B：POC + Page + 母版；C：十语；D：ship。POC 不过则停在 B。 |
| 本地化核查 | 见 `03-locale-briefs.md` |

## 清单前检索覆盖优化（生成页面模块清单前必做）

> 规则：`.cursor/rules/tool-i18n-localization.mdc`「清单前检索覆盖优化」。未填本表不得勾下方「页面模块清单」，不得标 `ready`。

| 项 | 结论 / 落点 |
|---|---|
| 日期 | 2026-09-07 |
| slug 结论 | 保留 `convert-a-jpg-to-text-with-ocr`（情境=JPG/拍页 + 动作=OCR 转换 + 结果=text；不是品类头词 `online-ocr` / `ocr-to-text` doorway，也不是扫描 PDF 邻作业） |
| 主检索词 → title/H1 | 英文 H1 **Convert a JPG to text with OCR**（主打 Planner `jpg to ocr` 的场景任务句；OCR 三字留在 H1 以免被理解成「改扩展名」）。中文 H1 方向：**用 OCR 把 JPG 转成文字**（勿硬塞 convert / online） |
| 次要关键词 → desc / FAQ / Use cases | `ocr to text` / `free ocr to text` → desc「also called」+ FAQ；`ocr text recognition` → FAQ；`ocr image reader` → Use case 截图；`jpg to ocr online` → desc 写「this tab」不把 online 进 H1；`convert image to ocr text` → How（PNG/WebP 芯片）；`chinese ocr online` / `arabic ocr` → 语种芯片 + FAQ；`handwritten ocr` → FAQ 失败边界；`optical character recognition` → FAQ 百科一句 |
| 用户搜索习惯判断 | 搜 jpg to ocr 的人拿的是照片/截图要字；搜 ocr to text / online ocr 的人常要万能台，本页只办成图→TXT，头词进 FAQ「也叫」并说明 PDF/Word 不是本页。搜 arabic/chinese ocr 是换语种不是新作业。H1 禁 Online OCR / Free OCR / OCR to text 光杆（策略禁硬刚头词 + doorway）。 |
| 优化摘要 | 相对方向文档旧名 `ocr-to-text`：slug/H1 改为 JPG→text 场景句，避免品类壳；Planner N1 长尾全部指定落点与芯片；明确不吸收 PDF/Word/表/批量；Related 只用已上线邻页。未跑 SERP，上线前仍须看 organic title。 |
| [x] 已回写上方 SEO 卡片 Title / Description 与建议 slug | |

> 填完后验收：`npm run coverage:gate -- --slug=convert-a-jpg-to-text-with-ocr --phase=0b`（须绿才可标 `ready` / 勾下方页面模块清单）。

## Ads / Keyword Planner 长尾（有分析时必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「Ads / Keyword Planner 长尾融入」。来源：[`docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`](../../docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md) §3.2 N1 / §6.1。CSV：`ocr-Keyword Planner 09-06-2026 at 07-19-16.csv`。

- [ ] 不适用（本 slug 无 Planner / Ads 长尾分析）
- [x] 已引用分析路径：`docs/seo/keywords/ocr-scan/2026-09-07-ocr-scan-keyword-planner.md`

| 长尾词（Planner） | 归属 | 文案落点（H1/desc/FAQ/usecase） | 功能覆盖（控件/结果哪一步） | 不覆盖理由（若有） |
|---|---|---|---|---|
| jpg to ocr（100–1k） | **build 主词** | H1「Convert a JPG to text with OCR」 | dropzone `accept` 含 JPEG；Convert → TXT | |
| ocr to text / free ocr to text | absorb | desc 也叫 + FAQ | 同一 TXT 结果；不堆 free 进 H1 | |
| ocr text recognition（100–1k） | absorb | FAQ | 识别管线 | |
| ocr image reader | absorb | Use case：截图 | PNG/WebP 芯片同一管线 | |
| jpg to ocr online | absorb | desc「runs in this tab」 | 无云盘；不上服务器 | Online 不进 H1 |
| convert image to ocr text / ocr image to text | absorb | How | JPEG/PNG/WebP | 不拆 png-to-ocr URL |
| chinese ocr online | absorb | 语种芯片 + FAQ | 默认含中文模型或中英包 | 禁 chinese-ocr URL |
| arabic ocr / online ocr arabic（100–1k） | absorb | 语种芯片 + FAQ | 点阿语芯片可加载对应包（或提示体积） | 禁 arabic-ocr URL |
| handwritten ocr 等（10–100） | drop 独立 URL；FAQ 划界 | FAQ：印刷体为主，连笔会失败 | 不提供手写专用模型开关冒充产品 | 能力上限 |
| optical character recognition | absorb 百科 | FAQ 一句 | 仍是图→TXT | 不改 H1 为百科词 |
| online ocr / free ocr / ocr converter | drop URL；FAQ 分流 | FAQ：图→TXT 用本页；PDF/Word 不是本页 | 只办成本页作业 | 禁壳 slug |
| ocr pdf to text / convert pdf to ocr pdf / ocr pdf to word | **不覆盖** | FAQ 指向 N2/N3/N4（未上线则写「本页不接受 PDF / 不出 Word」） | **不**收 PDF、**不**写隐形字层、**不**导出 docx | 异意图；勿硬塞 |
| excel ocr / ocr to spreadsheet | **不覆盖** | FAQ：表格结构后排 | 无 CSV 导出 | N5 |
| batch ocr / bulk ocr | **不覆盖** | FAQ：一次一张 | `multiple` 关闭 | 后排批量页 |
| jpg to word ocr | **不覆盖** | FAQ：本页是 TXT；要 Word 等 N4 | 无 docx | N4 芯片，不是本 URL |
| tesseract ocr download / i2ocr / epson scan | drop | FAQ 一句「不是安装包/不是他们官网/不是打印机驱动」 | 无 | 品牌/下载/硬件 |

- [x] 交互规格已按上表补齐能力（单图 JPEG/PNG/WebP → Convert → 复制/下载 TXT；语种芯片；手写/PDF/Word/表/批量有意不满足）

## 用户意图审查（标 ready 前必做）

> 规则：`.cursor/rules/work-tasks-tool-brief.mdc`「用户意图审查」。对照 `00` 原话 + 主检索词用户任务（有 Planner 长尾时含长尾任务）。未填不得 `ready`。

| 项 | 结论 |
|---|---|
| 日期 | 2026-09-07 |
| 总判 | **满足**：搜 jpg to ocr 的人打开页即单图 dropzone，点 Convert 得到可复制 TXT；PNG/WebP/中英/阿语为同页芯片。**有意不满足**：Online OCR 万能台、扫描 PDF、可检索 PDF、Word、表格 CSV、手写产品页、批量。**不超出**：不做第二套 PDF 上传抢首屏，不做 Excel 导出。 |
| 主词搜索者任务 | 把一张 JPG（或同类照片/截图）变成能复制的印刷体文字，文件尽量别上传。 |
| Ads/Planner 长尾任务 | jpg to ocr / convert image to ocr text：能丢图出 TXT。ocr to text / ocr image reader：同一结果。arabic/chinese ocr：换语种芯片能跑（阿语包体积须进度提示）。handwritten / PDF / Word / excel ocr / batch：**有意不满足**，FAQ 划界，不改 H1。 |
| 满足之处 | How 先答「照片里的字变成可复制文本」，再写 Drop → Convert → Copy/Download TXT。默认中英、单文件、点后加载。样例为印刷体图，点 Load sample 再 Convert（与自动跑 WASM 的 CWV 例外写清）。 |
| 超出 / 应划边界 | 首屏不要 PDF 上传、不要 TXT/Word/Excel 下拉。desc 不写 doorway/slug/PP-OCR 库名当卖点（库名进 References）。语种控件不进 H1。不把置信度滑条做成第二「校对工具」。 |
| 缺口与已做优化 | 相对 Planner 草稿「禁 H1=Online OCR」：Title 定为场景句；How 动词对齐按钮 Convert / Copy text / Download TXT；高级设置仅语种与可选「显示低置信行」，默认不打开也能转；进页不自动加载 WASM 的例外写入交互规格。 |
| [x] 已按审查回写 How / 交互主次 / FAQ / desc | |

## 交互规格（给实现用）

- 输入：**一种主输入** — `label.tool-dropzone` + `input[type=file]`（`accept` 写死 `image/jpeg,image/png,image/webp`，可 `capture` 提示拍照但不做相机 App）。显示文件名与像素。禁止云盘。禁止第二套 PDF/URL 输入抢首屏。
- 主按钮行只放动作： **Convert**（primary） / **Copy text** 与 **Download TXT**（无文本时 disabled） / **Load sample** / **Clear**。How 用词必须等于这些按钮。
- 语种：默认 **Chinese + English**。芯片至少：中文、English、Arabic（Planner absorb）。日语芯片仅在 fallback 包可用时启用，否则 FAQ 写「日语需加载较大模型」。语种放 dropzone 与主按钮之间的一排芯片，或「高级设置（可选）」内；**默认不打开也能转**（中英）。≥3 个可选参数时用 `<details>` 折起来：语种、是否列出低置信词、最长边上限（默认 1920 或 2048）。
- 输出：只读文本区（可复制）；Copy text；Download `{stem}.txt`。可选一行「平均置信度」。不输出 PDF/docx/csv。
- 核心规则 / 算法：读入 bitmap → 若最长边超过上限则缩小 → 点 Convert 时懒加载 OCR WASM（进度：Loading engine… / Reading…）→ 检测框按阅读顺序拼行 → 输出纯文本。Worker 线程若引擎要求则用。失败：无法解码、非支持类型、超文件体积（建议 ≤8–12MB）、引擎加载失败、识别为空（糊图）→ 可读错误，不静默。
- 失败与边界行为：手写不保证；表格只出读序文本不保格；多栏可能乱序（Rules 一句）。单文件，无 `multiple`。
- 示例 Input → Output：内置印刷体样例图（英文短句，如工具名 + 一行 `The quick brown fox` 级清晰印刷；可含少量中文「印刷体样例」）。Output 与该图 OCR 结果一致，写进 H2 Example。
- **进页样例（必填）**：**例外：进页不自动调用 `loadSample()` / 不自动跑 OCR。** 理由：Tier 2 WASM（tiny 数 MB，阿语/small 可达约 30MB）首屏加载会打坏 LCP/INP，且手机内存紧。`loadSample()` 必须存在且按钮可点：填入样例图并**走与 Convert 相同的识别管线**，结果区出现真实文本后启用 Copy/Download。用户也可先丢自己的图再 Convert。与 H2 Example 对齐。
- **实现防呆**：Page `opts` 签名；`extraBodyHtml` 正则 `\\w`；库仅 `/vendor/...`，`copy-tool-libs-vendor.mjs` 登记并 **commit** WASM。B 后 `npm run lint:tool-page -- --slug=convert-a-jpg-to-text-with-ocr`。POC 先 `node`/临时页测中英印刷体再嵌进 Page。禁止 CDN。禁止在本页实现 PDF 光栅化（那是 N2）。

### How 步骤草稿（en 母版方向；按钮原文）

1. Drop a JPG, PNG, or WebP (or choose a file).
2. Optional: pick a language chip (Chinese and English are the default).
3. Click **Convert** — the first run loads the OCR engine in this tab, then reads the photo.
4. Click **Copy text** or **Download TXT**.

### Converter SEO 自检（立项）

- [x] Slug/H1 = 转换对任务句，不硬刚 `online ocr`
- [x] Meta 前 160 字符含 JPG→text + 本标签页识别
- [x] How 用词 = Convert / Copy text / Download TXT
- [x] 语种芯片在 Rules/FAQ 有一句
- [x] 无百科主节、无 Best、无近义 URL 列表
- [x] 头词 online ocr absorb 为 FAQ，一条输入能办成图→TXT

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
