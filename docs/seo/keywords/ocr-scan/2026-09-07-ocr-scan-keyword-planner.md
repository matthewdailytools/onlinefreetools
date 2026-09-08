# OCR / Scan Keyword Planner — 归类与可做 slug

- date: **2026-09-07 16:05**
- locale / gl: en / us（Google Keyword Planner 导出）
- source:
  - [`ocr-Keyword Planner 09-06-2026 at 07-19-16.csv`](./ocr-Keyword%20Planner%2009-06-2026%20at%2007-19-16.csv)（**1045** 词，OCR 种子）
  - [`scan-Keyword Planner 09-06-2026 at 07-25-14.csv`](./scan-Keyword%20Planner%2009-06-2026%20at%2007-25-14.csv)（**799** 词，Scan/硬件种子）
  - [`scan-Keyword Planner 09-06-2026 at 07-30-14.csv`](./scan-Keyword%20Planner%2009-06-2026%20at%2007-30-14.csv)（**799** 词，Scan→Word / OCR 转换种子）
- 合计 **2643** 行、**2438** 个不重复词；两份 scan CSV 有少量重叠
- 另批（不覆盖本表）：[`Keyword Planner 09-07-2026 at 23-55-12.csv`](./Keyword%20Planner%2009-07-2026%20at%2023-55-12.csv) → [`2026-09-08-text-converter-keyword-planner.md`](./2026-09-08-text-converter-keyword-planner.md)
- catalog：**无** OCR 页。近邻但**办不成**扫描件识别：`extract-text-from-pdf`、`pdf-to-markdown`、`turn-pdf-into-word-document`、`turn-pdf-into-editable-document`（均声明无 OCR）。照片装订：`images-to-pdf`（无识别）
- 规则：[`../../keyword-planner-analysis-rules.md`](../../keyword-planner-analysis-rules.md) + 策略 **§3.3 H** + 同日 JS OCR 能力上限（印刷体产品级；手写/表格结构半成品；可检索 PDF 管线可行；可重排 Word 版式撞墙）
- SERP：**无人工批次** → 不得标 `long_gap`；周进攻 **0**
- work-tasks：**N1** `convert-a-jpg-to-text-with-ocr` 于 **2026-09-07** 用户点名立项并实现（`02=implemented`，Tesseract LSTM 点后加载）。**N1-batch** `batch-convert-jpg-to-text-with-ocr` 于 **2026-09-08** 用户点名并实现（队列 + skip + ZIP TXT）。**N4-jpg-batch** `batch-convert-jpg-to-editable-word-with-ocr` 于 **2026-09-08** 用户点名并实现（多图 → 一份可编辑 DOCX；≠ TXT ZIP 换皮）。N2–N3、**N4 扫描 PDF→Word**、N5 仍未建夹。

> **结论先行**  
> 1）三份 CSV 里大约六到七成是 **打印机驱动 / HP·Epson·Canon / 下载安装 / 品牌导航 / 百科**，不是浏览器作业。  
> 2）可产品化的轴是 **结果文件**，不是 Free/Online/OCR 品类壳：纯文本 ≠ 可检索 PDF ≠ Word。图片 vs 扫描 PDF 因对象不同各一页（对照已有 `extract-text-from-pdf`）。  
> 3）**可独立 slug（须实现，本批 defer）**：**4** 条主作业 + **1** 条表格弱证据。长尾一律 absorb，禁止按语种/手写/Free 拆页。  
> 4）**禁止** `online-ocr` / `free-ocr` / `ocr-converter` / `ocr-software` / `ocr-to-text` 光杆壳。头词只进 FAQ「也叫」。  
> 5）已有抽文本 / 转 Word 页 **不得 absorb OCR 词**（生成≠校验的同类错误：无 OCR 不能冒充扫描件作业）。只加失败 FAQ 外链到下表新 slug。

---

## 0. 本批拆页规则

| 可拆（独立 slug） | 不可拆（doorway） |
| --- | --- |
| 输出不同：`.txt` ≠ 可检索 PDF ≠ `.docx` ≠ `.csv` | 只换 Free / Online / Best / Tool / Software |
| 对象不同：照片/JPG ≠ 扫描 PDF（已有数字 PDF 抽文本页） | jpg ≈ jpeg ≈ png ≈ photo 作输入芯片 |
| 扫描件 OCR ≠ 已有字层抽取（`extract-text-from-pdf`） | scan to word ≈ ocr pdf to word（**扫描 PDF→Word**，N4）。`jpg to word ocr` 在用户点名后归 **N4-jpg-batch**（照片叠→一份 DOCX），不再并进未建的 N4 |
| 可检索 PDF ≠ 转成 Word（Acrobat 搜 vs 拿去改） | arabic / chinese 只是语种，不是新作业 |
| | 手写：能力不够独立成页，FAQ 划界 |
| | 品牌：i2OCR、OnlineOCR.net、iLovePDF、Tesseract 下载 |

市场对照（2026-09 公开页，不作抄袭源）：

| 竞品形态 | 代表 | 对本站 |
| --- | --- | --- |
| 上传 → 扫描 PDF **可检索** | [iLovePDF OCR PDF](https://www.ilovepdf.com/ocr-pdf)、SmallPDF、PDF24 | 对应 **N3**；它们收文件上云、常限次/付费。IG = 本地 WASM + 页数/准确率诚实边界 |
| 上传 → 下拉 TXT/Word/Excel 万能台 | OnlineOCR.net、i2OCR（Planner 1k+ 品牌词） | **禁**做成一页下拉壳；按输出拆 N1/N2/N4 |
| 浏览器 Tesseract → 文本或隐形字层 | zpdf OCR PDF、OneClickPDF | 同栈可行性已验证；本站应用 PP-OCRv6 档 + 场景 H1，不跟 `online ocr` 硬刚 |
| 云端单据理解 | ScanToExcel、Textract、DeepSeek OCR 站 | 发票/表结构超出 JS 上限；N5 仅弱 defer，不做 YMYL 发票助手 |
| 硬件/驱动 | Epson Scan、HP Smart、Windows Fax and Scan | drop |

---

## 1. 量级分桶（只筛选）

| 带 | n（行） | 角色 |
| --- | --- | --- |
| 10万–100万 | 1 | `scanner` — 硬件头词，禁工具 H1 |
| 1万–10万 | 5 | `epson scan`、`scanner hp` 等驱动/型号 |
| 1k–10k | 63 | 混：`online ocr` / `free ocr` / `pdf to ocr` / `ocr pdf to word` / `tesseract ocr` / `i2ocr` / `scan a document` |
| 100–1k | 388 | 场景长尾主观察（仍大量品牌/软件） |
| 10–100 / 0–10 | 1838+348 | 微尾；作业证据仍收录 |

OCR 种子文件可产品化比例明显高于 Scan 硬件文件。下表只收**有作业句**的搜法。

---

## 2. 先剔除（drop）— 仅非工具意图

| 类型 | Planner 例 | 处理 |
| --- | --- | --- |
| 打印机/驱动/型号 | `epson scan`、`hp scan doctor`、`canon scan`、`apeosport c3070`、`twain scanner`、`windows fax scan` | drop |
| 品牌导航 | `i2ocr`、`onlineocr net`、`ilovepdf`/`i love pdf to ocr`、`pdf24 ocr`、`smallpdf ocr`、`convertio ocr`、`newocr`、`adobe ocr`、`google drive ocr` | drop；FAQ 一句「不是他们的官网」 |
| 下载/安装/库 | `tesseract ocr download`、`ocr software`、`free ocr software`、`easyocr install`、`ocr keyboard` | drop |
| 百科 | `optical character recognition`、`ocr meaning`、`how does ocr work` | FAQ 一句进 N1 |
| 本地服务 | `document scanning services near me`、`document scanning near me` | drop |
| 开发者 API | `free ocr api`、`azure ocr`、`pytesseract` | drop（本站不做 API 产品） |
| 噪声/截断 | `ocr interchange`、`google drivr`、`run scan`、`scannow` | drop |
| 品类壳 | `online ocr`、`free ocr`、`ocr converter`、`ocr tool`、`ocr scanner` | **禁独立 URL**；FAQ 分发到 N1–N4 |

---

## 3. 用户实际任务 → 作业类型（覆盖落点 + 是否主打）

### 3.1 已上线近邻 — **不能**把 OCR 作业 absorb 进去

| ID | 现 slug | 现能力 | 本批搜法 | 正确动作 |
| --- | --- | --- | --- | --- |
| **A1** | `extract-text-from-pdf` | 只读数字 PDF **字层** | `pdf text`、扫描失败相关 | FAQ：扫描件 → **N2**；不改 H1 为 OCR |
| **A2** | `turn-pdf-into-word-document` | 字层 → docx，无 OCR | `pdf to word` 无 scan 时 | FAQ：扫描件 → **N4** |
| **A3** | `turn-pdf-into-editable-document` | 无 OCR；扫描失败 | `turn pdf into editable document` 已在 PDF 批 absorb | FAQ：要先可检索 → **N3**，再去改字页 |
| **A4** | `images-to-pdf` | 照片装订成 PDF，不认字 | `scan a document or picture`（1k–10k，常是打印机向） | 仅当用户**已有照片、只要 PDF 文件**时相关；要文字 → N1 |
| **A5** | `pdf-to-jpg` | PDF 页出图 | `jpg to ocr pdf` 的逆向 | 不吸收 OCR 词 |

### 3.2 未实现 — 独立 slug（defer；待 SERP 钉进攻词）

| ID | 使用场景（情境→动作→结果） | Planner 证据（量级） | 作业类型 | 为何不并进邻页 | 建议 slug | 建议 H1（场景句，待 SERP） | 主控件规格 |
| --- | --- | --- | --- | --- | --- | --- | --- |
| **N1** | 手机拍页 / JPG 截图 → **可复制纯文本** | `jpg to ocr`（100–1k）、`ocr to text`（100–1k）、`ocr text recognition`（100–1k）、`ocr image reader`、`jpg to ocr online` | 图→TXT | ≠ A1（对象是 PDF 字层）；≠ N2（对象是扫描 PDF） | `convert-a-jpg-to-text-with-ocr` | Convert a JPG to text with OCR | 点后加载 OCR；PNG/WebP/照片芯片；语种默认中英，阿语/中文芯片；置信度；复制/下载 TXT。**禁 H1=`Online OCR` / `OCR to text` 光杆** |
| **N2** | 扫描件 PDF → **抽出纯文本**（不当 Word、不改原 PDF） | `ocr pdf to text` 类（10–100）、`tesseract ocr pdf to text`、`online ocr pdf to text`；头词 `pdf to ocr`（1k–10k）歧义时 FAQ 分流 | PDF→TXT | ≠ A1（A1 无 OCR）；≠ N3（N3 仍交出 PDF） | `extract-text-from-a-scanned-pdf` | Extract text from a scanned PDF | PDF.js 逐页光栅化 + OCR；页范围；上限页数（手机更严）；失败链 A1「若本就是可选中 PDF」 |
| **N3** | 扫描件 PDF → **可检索/可选中的 PDF**（原图保留 + 隐形字层） | `convert pdf to ocr pdf`（100–1k）、`pdf to ocr pdf`（100–1k）、`ocr searchable pdf`（10–100）、`add ocr to pdf`、`apply ocr to pdf` | PDF→可检索 PDF | 输出仍是 PDF，不是 TXT/Word；对齐 iLovePDF 主形态 | `make-a-scanned-pdf-searchable` | Make a scanned PDF searchable | 识别后按框写透明字；声明不是可重排编辑；页数上限 |
| **N4** | 扫描 PDF → **可在 Word 里改的文档** | `ocr pdf to word`（1k–10k）、`pdf to word ocr`（1k–10k）、`convert scanned pdf to word`（100–1k）、`scan to word converter`（100–1k） | 扫描 PDF→DOCX | ≠ A2（A2 无 OCR）；≠ N4-jpg-batch（对象是照片不是 PDF） | `turn-a-scanned-pdf-into-word` | Turn a scanned PDF into Word | OCR 文本写入 docx；可选带图；FAQ：版式会乱。**不收**把 JPG 批量当主输入（那是 N4-jpg-batch） |
| **N4-jpg-batch** | 一叠 JPG/截图 → **一份可在 Word 里改的文档** | 用户点名任务句；Planner `jpg to word ocr` / `ocr jpg to word` / `convert jpg to word ocr`（10–100） | 多图→一份 DOCX | ≠ N1-batch（TXT ZIP）；≠ `images-to-word`（无 OCR 贴图）；≠ N4（PDF） | `batch-convert-jpg-to-editable-word-with-ocr` | Batch convert JPG to editable Word with OCR | 队列 + skip + **一份**分节 DOCX（Heading=文件名、分页、默认段前原图）；**Download Word**。禁只改 TXT 扩展名 |
| **N5** | 表格照片 / 扫描表 → **CSV** | `excel ocr`（100–1k，歧义）、`ocr to spreadsheet`（10–100）、`convert pdf ocr excel`（0–10） | 表图→CSV | 主控件是表结构不是纯文本；JS 表格半成品 | `convert-a-table-photo-to-csv` | Convert a table photo to CSV | **后排**；单元格文字可抽，合并格不保证。发票/收据字段抽取 **不做**（YMYL + 超上限） |

手写 6 词（皆 10–100）：`handwritten ocr`、`scan handwritten text to word` 等 → **N1/N4 FAQ 划界**，不独立 slug。

阿语 `arabic ocr`（100–1k）、`chinese ocr online`（10–100）→ N1/N2 **语种芯片**，禁止 `arabic-ocr` URL。

`batch ocr` / `bulk ocr`（10–100）→ **2026-09-08 用户点名立项** `batch-convert-jpg-to-text-with-ocr`（队列 + skip + ZIP + 合并 TXT；≠ N1 单张换皮）。单文件页仍不加 multiple 冒充。

---

## 4. 每 URL 仅一条主打

| slug | 主打关键词 | 次词（同页 FAQ / Use cases / 芯片） | 禁止当本页进攻 H1 |
| --- | --- | --- | --- |
| `convert-a-jpg-to-text-with-ocr` | jpg to ocr | ocr to text、ocr text recognition、ocr image reader、chinese ocr online、arabic ocr（芯片） | online ocr、free ocr、ocr converter |
| `batch-convert-jpg-to-text-with-ocr` | batch convert JPG to text with OCR / batch ocr | bulk ocr、convert multiple jpg to text、batch image to text | batch ocr 光杆、jpg to text（单张归 N1）、online ocr |
| `extract-text-from-a-scanned-pdf` | extract text from a scanned PDF / ocr pdf to text | online ocr pdf to text、tesseract ocr pdf to text（库名仅 FAQ 消歧） | pdf to ocr（歧义头词，FAQ 也叫并链 N3） |
| `make-a-scanned-pdf-searchable` | convert pdf to ocr pdf | ocr searchable pdf、add ocr to pdf、pdf to ocr pdf、i love pdf to ocr（品牌消歧） | OCR PDF、online ocr |
| `turn-a-scanned-pdf-into-word` | convert scanned pdf to word | ocr pdf to word、pdf to word ocr、scan to word converter、ocr to word（PDF 意图） | pdf to word（无 OCR 的 A2 头词）；jpg to word ocr（已归 N4-jpg-batch） |
| `batch-convert-jpg-to-editable-word-with-ocr` | batch convert JPG to editable Word with OCR / jpg to word ocr | ocr jpg to word、convert jpg to word ocr、ocr to word（照片意图 FAQ 也叫） | ocr pdf to word、Batch OCR 光杆、jpg to word 光杆、N1-batch 的 TXT ZIP |
| `convert-a-table-photo-to-csv` | convert a table photo to CSV | ocr to spreadsheet、excel ocr（FAQ 也叫；歧义消解） | excel ocr 光杆、invoice ocr |

---

## 5. 头词 → 收割 / title_gap（无 SERP，只定方向）

| 头词（1k+） | 处理 |
| --- | --- |
| `online ocr` / `ocr online` / `ocr online free` / `free ocr` | `head` 壳。FAQ 分发 N1–N4。**不**建 `online-ocr` |
| `ocr converter` / `ocr software` | 壳 + 下载。drop URL |
| `pdf to ocr` | 常被 iLovePDF 收成可检索 PDF → 主叙事给 **N3**；只要 TXT 链 N2 |
| `ocr pdf to word` / `pdf to word ocr` | 量级够但工具站密。H1 用场景句 **Turn a scanned PDF into Word**（N4），头词进 FAQ「也叫」 |
| `tesseract ocr` / `easyocr` / `deepseek ocr` / `i2ocr` / `onlineocr` | 品牌/库/竞品站。drop |
| `scan a document` / `document scanner` / `pdf scanner` | 硬件或拍照装订。硬件 drop；照片→PDF 链 A4 |
| `optical character recognition` | 百科 → N1 FAQ |

G（title_gap_fallback）**未跑 SERP**，不得声称缺口。上线前须人工看 N1–N4 选用长尾的 organic title。

---

## 6. 长尾 slug 清单（吸收，不新建 URL）

以下搜法**可以做进产品**，但 **不是** 独立 path。slug 栏 = 归属页。

### 6.1 归 N1（图 → 文本）

| 长尾搜法 | 量级 | 落点 |
| --- | --- | --- |
| jpg to ocr | 100–1k | **H1 / 主打** |
| ocr to text / free ocr to text | 100–1k / 10–100 | desc + FAQ 也叫 |
| ocr text recognition | 100–1k | FAQ |
| ocr image reader | 100–1k | Use case：截图 |
| jpg to ocr online | 10–100 | 芯片 Online 不进 H1 |
| convert image to ocr text / ocr image to text free | 10–100 | How |
| chinese ocr online | 10–100 | 语种芯片 |
| arabic ocr / online ocr arabic | 100–1k / 10–100 | 语种芯片；禁独立 slug |
| handwritten ocr / scan handwritten documents to text | 10–100 | FAQ：印刷体为主，连笔会失败 |

### 6.2 归 N2（扫描 PDF → 文本）

| 长尾搜法 | 量级 | 落点 |
| --- | --- | --- |
| ocr pdf to text / online ocr pdf to text | 10–100 | **H1 方向** |
| tesseract ocr pdf to text | 10–100 | FAQ 消歧（我们不是安装包） |
| convert scanned pdf text | 0–10 | Use case |

### 6.3 归 N3（可检索 PDF）

| 长尾搜法 | 量级 | 落点 |
| --- | --- | --- |
| convert pdf to ocr pdf / pdf to ocr pdf | 100–1k | **H1 方向** |
| ocr searchable pdf | 10–100 | desc |
| add ocr to pdf / apply ocr to pdf | 10–100 | How |
| scanned pdf to ocr pdf / convert scanned pdf to ocr | 10–100 | Use case |
| jpg to ocr pdf / image to ocr pdf | 10–100 | 芯片：先出可检索 PDF（图先拼页或单页 PDF） |

### 6.4 归 N4（扫描件 → Word）

| 长尾搜法 | 量级 | 落点 |
| --- | --- | --- |
| convert scanned pdf to word / convert scan pdf to word | 100–1k | **H1 方向** |
| ocr pdf to word / pdf to word ocr | 1k–10k | FAQ 也叫；**不作进攻 H1** |
| scan to word converter / scan copy to word converter | 100–1k | Use case |
| ocr to word / ocr to word converter / ocr to word free | 100–1k | 芯片 |
| jpg to word ocr / ocr jpg to word / convert jpg to word ocr | 10–100 | **2026-09-08 改归 N4-jpg-batch** `batch-convert-jpg-to-editable-word-with-ocr`（H1 仍是批量任务句；不另建光杆 jpg-to-word URL） |
| convert ocr pdf to word | 100–1k | How |
| edit scanned document in word | 100–1k | Use case：下完再在 Word 改 |
| scan handwritten text to word | 10–100 | FAQ 失败边界 |

**不要**建的近义 slug 示例：`ocr-to-text`、`jpg-to-ocr`、`ocr-pdf-to-word`、`scan-to-word-converter`、`free-online-ocr`、`arabic-ocr`、`handwriting-ocr`。

---

## 7. SERP 复核

**待采。** 未跑 Google/Bing 人工 SERP → `competition_tier` 最多「暂估 head/mid + 待 SERP」；**0** `long_gap`；**0** 周 build。

上线前建议最少查 6 词：`jpg to ocr`、`ocr to text`、`convert pdf to ocr pdf`、`ocr searchable pdf`、`convert scanned pdf to word`、`ocr pdf to word`。

---

## 8. 对已有 slug 的 SEO/功能动作

| slug | 动作 |
| --- | --- |
| `extract-text-from-pdf` | FAQ 扫描失败链 **N2**（实现后）；禁止把 OCR 关键词写进 H1 |
| `turn-pdf-into-word-document` | FAQ 扫描失败链 **N4** |
| `turn-pdf-into-editable-document` | FAQ：扫描件先 **N3** 再编辑；不承诺本页 OCR |
| `images-to-pdf` | FAQ：只要装订照片链本页；要认字链 N1 |
| `pdf-to-markdown` | 维持无 OCR；失败链 N2 |

---

## 9. 周产能 / 下一步

实现顺序（**须用户点名立项**；POC 过印刷体中英日后再写页面）：

1. **N1** `convert-a-jpg-to-text-with-ocr`（最小闭环，验证引擎）
2. **N2** `extract-text-from-a-scanned-pdf`（接 A1 失败流量）
3. **N3** `make-a-scanned-pdf-searchable`（对齐 iLovePDF 主搜法，隐私差）
4. **N4** `turn-a-scanned-pdf-into-word`（量级最大的转换对，须诚实版式边界）
5. **N5** 仅当表结构 POC 可接受再开

N1 已实现；N1-batch 已实现（TXT ZIP）。N4-jpg-batch 于 2026-09-08 已实现（一份可编辑 DOCX）。N2–N3、N4 扫描 PDF、N5 **未**建夹。
