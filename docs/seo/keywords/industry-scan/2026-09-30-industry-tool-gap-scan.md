# 2026-09-30 从行业出发：本站未覆盖工具调研

本次是规划调研：不新建工具、不建 `work-tasks/`、不改已有工具文案、不部署。基线为本地 catalog（278 个工具）。结论写入 [`../../keyword-daily-pool.tsv`](../../keyword-daily-pool.tsv)（`source_batch=2026-09-30-industry-tool-gap-scan`）与 [`../../keyword-to-tool-tracker.md`](../../keyword-to-tool-tracker.md) 决策日志。

## 0. 结论

1. **0 个 `long_gap`，本批 0 个 `build`**。在 10 个行业、5 种语言（en / de / ja / es / zh）上抽查了 14 条场景长尾，前排都被多家「浏览器本地处理、无上传」的小工具站占住，全部判为 `mid_covered`（KDP 书脊计算与工作日计算判为 `head`）。连按各国规范切换的楼梯计算（DIN 18065 / CTE / GB 50352-2019）在各自语种也都有专页。
2. 按 `competition_tier=mid_covered` 且本站无同作业 slug 的规则，13 行全部记 **`defer`**。`defer` 不等于不做：能力仍须实现，区别只在 slug、H1 和信息增量。
3. 在这个市场里，选题不能再以「前排有没有缺口」为主要依据，改用四个条件排序：
   - 与本站**已有展示的簇**相邻（media 100 个、documents 55 个；construction 只有 4 个工具但 GSC 有 es/de/zh/fr 展示）；
   - **复用已同域 vendor 的引擎**（pdfjs、pdf-lib、tesseract、papaparse、xlsx、jszip），不引新库；
   - 能写出**可验证的信息增量**，而且不是竞品已有的（例如两点校准字幕、只栅格化被打码的页、同页切换多国规范）；
   - 不是重 YMYL（电气安全、医疗降权）。
4. 建议的工程顺序（不是流量预测）：
   - **P1**：`black-out-text-in-a-pdf-permanently`（补 PDF 簇缺口）、`fix-out-of-sync-subtitles`、`check-subtitle-reading-speed`、`calculate-stair-rise-and-run-to-code`
   - **P2**：`split-a-large-csv-into-smaller-files`、`convert-a-bank-statement-pdf-to-excel`、`how-many-cartons-fit-in-a-container`
   - **P3**：时间码、条码、电压降、工作日、KDP 封面、烘焙百分比

## 1. 方法与证据口径

- **现有覆盖**：读 `src/site/tool-catalog.json` 的 `scenario` / `subject` 字段统计；对照 `docs/2026-07-28-tool-direction.md` 方向 C 已写的六个垂直（V1 开发者、V2 SEO、V3 电商、V4 财务、V5 健康、V6 App 上架）和 C.8 第二梯队。
- **去重**：对照 [2026-09-21 待建复核](../../reviews/2026-09-21/tool-backlog-priority.md) 和 2026-09-27 两篇开发日志，已排队的声音、批量 PDF、OCR 草稿不再重复列出。
- **站内是否已有**：在 catalog 分片、i18n 分片和 `src/pages/` 中检索 business days、barcode、redact、timecode、WebVTT、word count、remove duplicates 等词，均无命中（`redact` 只出现在域名查询页的 WHOIS 脱敏说明里，和 PDF 无关）。
- **SERP**：用 Cursor WebSearch 取每条查询的前 5 个结果和摘要。**这不等于**策略 §3.3 要求的人工 Google / Bing 前 5–10 核查，`competition_tier` 只是草稿；要升级为 `build`，须先用 `ops/seo/bing_serp` 或人工 Google 复核。
- **量级**：本批没有跑 Keyword Planner，不写搜索量。
- **GSC**：参考 `reviews/2026-09-10/…/网页.csv`（7 日）。

## 2. 现有覆盖：按应用场景

| scenario | 工具数 | 观察 |
|---|---|---|
| media | 100 | 声音为主（audio 56），video 只有 4 |
| documents | 55 | PDF 40；缺打码（竞品 PDF 套件标配） |
| developer | 37 | 网络 / 编码 / CIDR 较全 |
| finance | 20 | 公式计算器为主；缺文件型记账作业 |
| math | 20 | — |
| seo | 19 | — |
| health | 6 | YMYL，不扩 |
| design / everyday / physics | 各 5 | — |
| construction | 4 | 混凝土、油漆、瓷砖、平方英尺；GSC：`square-feet` es 94 / de 85 / zh 40 / fr 37 次展示，`zh/how-to-calculate-concrete` 56 次展示、平均排名 7.7 |
| sports | 2 | — |

站点现在偏工具类型（音频 / PDF / 计算器），岗位行业覆盖薄：字幕本地化、影视后期、物流、记账、法务合规、数据运营、施工工种都没有工具。

## 3. 各行业调研

每条候选的 slug 按策略 §3.3 H 写成「情境 + 动作 + 结果」任务句，都是草稿。

### 3.1 字幕与本地化（字幕员、本地化 PM、视频剪辑）

- **任务**：交付前做字幕 QC（阅读速度、每行字数、时间重叠）；字幕和视频不同步时重新对轴。
- **本站现状**：有 `make-srt-subtitles-from-an-audio-file`、`transcribe-an-audio-file-to-text`（这两页的文件转写能力仍待 09-21 P0 核验），但没有任何处理已有 SRT/VTT 文件的工具。
- **候选**
  - `check-subtitle-reading-speed`（校验型）：逐条计算 CPS（每秒字符数）、CPL（每行字符数）、行数、时长、重叠，按阈值标红，导出报告。
  - `fix-out-of-sync-subtitles`（转换型）：整体平移；**两点校准**（输入第一句和最后一句的正确时间，线性拉伸）；帧率换算（23.976 ↔ 25）。
- **标准**：Netflix Timed Text Style Guide（英文成人 17 CPS、42 CPL）、BBC Subtitle Guidelines、W3C WebVTT、EBU-TT。
- **引擎**：纯文本解析，不需要新库。
- **SERP**
  - en「check subtitle reading speed characters per second」：termiva、socaptions、geeklink、versely、screenapp，全部本地处理，已带 Netflix / BBC / 儿童预设。
  - de「Untertitel Lesegeschwindigkeit prüfen」：versely、screenapp(de)、voice2sub(de)、elysiatools(de)。
  - zh「SRT VTT 字幕 时间轴 整体平移」：timedsubs(zh)、subvideo(zh)、digtools(zh-TW)、sozai、convertr(zh)。
  - 判定：`mid_covered`。
- **可做的信息增量**：时间平移类竞品多数只做固定偏移，并明确写「不修逐条漂移」，两点校准和帧率换算是它们的短板；CJK 字幕需要单独的 CPS 阈值（约 9–12），在十语页面里可以按语种给默认值。
- **YMYL**：否。**建议**：P1，成本低，与 media 簇相邻。

### 3.2 影视后期（剪辑、调色、音频后期）

- **任务**：SMPTE 时间码和帧号互转，处理 29.97 / 59.94 丢帧（DF）和不丢帧（NDF），时间码加减。
- **候选**：`convert-timecode-to-frames`
- **标准**：SMPTE ST 12-1。
- **SERP**：en「drop frame timecode calculator 29.97」：rontersound、altftool、tools-chain、ottengine，都已实现丢帧规则、非法标签校验和精确的 1000/1001 帧率。判定 `mid_covered`。
- **信息增量**：弱。可选方向是批量换算 EDL 时间码列表。
- **建议**：P3。

### 3.3 自出版与印刷（KDP 作者、封面设计师）

- **任务**：按页数、纸张、开本算书脊宽度和整张封面尺寸（含出血），拿到模板。
- **候选**：`calculate-a-kdp-paperback-cover-size`
- **标准**：KDP 帮助页公式（白纸每页 0.002252"、奶油纸 0.0025"；出血 0.125"；79 页以上才能印书脊文字）。
- **SERP**：KDP 官方计算器占第 1–2 位，另有 makemybookcover、kdpbuilder。判定 `head`（官方工具占位）。
- **建议**：P3，官方工具已经能直接给模板。

### 3.4 零售与物流（外贸、货代、仓储、电商）

- **候选 1**：`generate-an-ean-13-barcode-with-check-digit`
  - 标准：GS1 mod-10 校验位（GTIN-8 / 12 / 13 / 14）。
  - SERP：eancheck、barcodesgenerator、govisually（已支持批量 CSV→ZIP 和 X 尺寸检查）、practicaltools、qrbarcodetools，外加 GS1 各国官方校验器。判定 `mid_covered`。
  - 成本：需要新 vendor 条码库。**建议 P3**。
- **候选 2**：`how-many-cartons-fit-in-a-container`
  - 任务：按纸箱尺寸、重量算 20GP / 40GP / 40HC 能装多少箱，以及受体积限还是受载重限。
  - SERP：en calculatecbm、calculatorlib、hellofapartner、containerload；es clic.tools、gogotem、searates、freightapis（3D 装箱）。判定 `mid_covered`。
  - 信息增量：六种摆放方向逐一比较、混装多种箱型；这些竞品也基本具备。
  - 与本站电商簇（Amazon 主图、商品图批量压缩）相邻。**建议 P2**。

### 3.5 财务记账（记账员、小企业主、报税）

- **任务**：把网银下载的 PDF 流水转成 Excel / CSV，导入记账软件。
- **候选**：`convert-a-bank-statement-pdf-to-excel`
- **引擎**：pdfjs 取带坐标的文字，按行列切分，用 xlsx 导出；扫描件可接 tesseract。三者都已 vendor。
- **SERP**
  - en：bankstatementconverter.us.com、autymate、convert-magic、softzar、localbankstatementconverter（均本地处理）。
  - zh：statementsift 已做逐行余额校验和重复扣款提示；另有 paplume、airparser、conzlab。
  - 判定：`mid_covered`。
- **信息增量**：十语对应的数字和日期格式（1.234,56 与 1,234.56；DD.MM.YYYY）；airparser 的免费版明确不支持扫描件，本站可以用 OCR 支持，但准确率风险高，须强制人工复核提示。
- **YMYL**：弱，涉及财务数据隐私，但不给建议。**建议**：P2，需求明确，表格切分成本中高。

### 3.6 法务、HR 与合规（律师助理、HR、政务、医疗文书）

- **候选 1**：`black-out-text-in-a-pdf-permanently`
  - 任务：对外提供文件前，把身份证号、账号、姓名等**真正删除**，而不是盖一个能被移走的黑框。
  - 本站现状：PDF 簇 40 个工具，**没有打码**；iLovePDF / Smallpdf 等 PDF 套件都有这一项，是簇内显眼的缺口。
  - 引擎：pdfjs 渲染 → 画布涂黑 → pdf-lib 用图像页替换；扫描件用 tesseract 做「搜词打码」。全部已 vendor。
  - SERP：en oneclickpdf、2redact、safepaper、pdfedit、sejda.in；ja totonoe、freetool.jp、pdfux、gottrix、pdfree。判定 `mid_covered`。
  - 信息增量：只栅格化被打码的页、其他页保留文字层（totonoe 已做）；扫描页 OCR 搜词打码（2redact 已做，但整份输出为 PNG）；把这两点组合起来，再加元数据清除和打码后自检报告（复制、搜索均无结果），目前前排没有一家同时做到。
  - **建议**：P1。
- **候选 2**：`count-business-days-between-dates`
  - 标准：各国和各地区法定假日；德国 BGB §193 的期限顺延规则。
  - SERP：en bizdaysglobal、daytics、holidaydb、timeanddate；de rechner-portal（已写 §193 BGB）、arbeitsrechner、arbeitstage.org、calcexact。判定 `head`。
  - 成本：需要假日数据集（体积大、要逐年维护）。**建议 P3**。

### 3.7 数据运营与 CRM（营销运营、销售运营、数据分析）

- **任务**：CRM 或表格导入有行数、体积上限，需要把大 CSV 拆成每份都带表头的小文件。
- **候选**：`split-a-large-csv-into-smaller-files`
- **规格依据**：HubSpot 付费版每个文件最多 1,048,576 行、512 MB；免费版 20 MB；Excel 每表 1,048,576 行。
- **引擎**：papaparse 流式解析 + jszip 打包，均已 vendor。
- **SERP**：en csvsplitteronline（已有 Salesforce / HubSpot 预设）、joinlines、baeldung。判定 `mid_covered`。
- **信息增量**：按列值拆分（例如同一公司域名保持在同一份，避免关联断裂）。
- **相邻工具**：`csv-json`、`excel-compare-files`、Excel 公式页。**建议 P2**，成本低。
- **未抽查的同类**：CSV 去重、合并多个 CSV。

### 3.8 建筑与装修工种（木工、电工、装修业主）

- **背景**：construction 只有 4 个工具，却是少数有多语种 GSC 展示的簇（见 §2）。
- **候选 1**：`calculate-stair-rise-and-run-to-code`
  - 任务：由层高算踏步数、踏步高、踏面宽、梯段水平长度、斜梁长度，并按规范检查。
  - 各地规范：美国 IRC R311.7（踏步高 ≤ 7¾"，踏面 ≥ 10"）；德国 DIN 18065（步距 2s + a = 59–65 cm）；西班牙 CTE DB-SUA；中国 GB 50352-2019 楼梯踏步表（住宅公共楼梯踏面 ≥ 0.26 m、踏步高 ≤ 0.175 m）。调研时注意：中国现行住宅楼梯尺寸应引用 **GB 50352-2019**，不是 GB 50096。
  - SERP：en cutonce、subcontractorhub、diyrated；de techeld、deutschland-rechner；zh toolv、yikeaigc；es calculadoradora、planetacalculadoras（后者一页已覆盖墨西哥、秘鲁、哥伦比亚、智利和西班牙的规范）。四个语种都是 `mid_covered`。
  - 信息增量：一页内按语种默认规范、可切换并逐条对照；多数竞品只写单一规范。增量偏薄，立项前须补更具体的点。
  - **建议**：P1（簇有展示），但必须先补信息增量。
- **候选 2**：`calculate-voltage-drop-for-a-wire-run`
  - 标准：NEC 第 9 章表 8 / 表 9（3% / 5% 为说明性建议，不是强制条款）；IEC 60364-5-52 和 VDE 0100-520 为 4%。
  - SERP：remodelcalculators、btusize、hardhatmath、voltdropcalc、poweraire。判定 `mid_covered`。
  - 涉及电气安全，须免责并提示找持证电工。**建议 P3**。
- **未抽查**：屋面坡度、石膏板用量、碎石 / 覆盖物体积、板英尺。

### 3.9 烘焙与餐饮

- **候选**：`calculate-bakers-percentage-and-dough-hydration`（含酵头拆分）。
- **SERP**：calculate.co.nz、bakersmath、engbench、bakercalculator、bakerspercentage。判定 `mid_covered`。
- **建议**：P3。

### 3.10 记录但未抽查（下一批）

| 行业 | 候选作业 | 备注 |
|---|---|---|
| 教育（教师） | 加权成绩、期末需考多少分、成绩曲线 | 已有 GPA 页；须写明地区口径 |
| IT 运维 | PEM 证书 / CSR 解码 | 需要 ASN.1 库；developer 簇相邻 |
| 视频创作者 | 码率 ↔ 文件大小估算 | video subject 只有 4 个 |
| 社媒运营 | 按平台规则计算帖子长度（X 的 CJK 字符算 2） | 平台规则须标注检索日期 |
| 游戏开发 | 精灵图合并 + 图集 JSON | 与 `image-merge` 区分 |
| 摄影 | 景深、ND 滤镜曝光 | — |
| 医疗 / 药剂 | 剂量、滴速 | 重 YMYL，默认 drop |

## 4. 与既有待建队列的关系

- 2026-09-27 的队列（扫描 PDF 可搜索、批量 PDF 加密 / 解锁、BPM、节拍器、噪声）继续有效，本批不替换。
- 同属 documents 簇时，建议**打码排在 `make-a-scanned-pdf-searchable` 之前**：打码只需栅格化加涂黑，不用处理透明文字层的坐标和字体，成本更低；而且它是 PDF 套件的标配缺口。
- 每周新建仍 ≤ 1–2 个，每个都要有 ≥ 3 条信息增量。

## 5. 升级为 build 前必须补的步骤

1. 用人工 Google 或 `ops/seo/bing_serp`（国际版、用户搜法）复核前 5–10，定稿 `competition_tier`；
2. 跑 Keyword Planner 拿量级，按 `keyword-planner-analysis-rules.md` 全覆盖场景；
3. 为每条写使用场景表和 ≥ 3 条相对前排的信息增量；
4. 用户明确点名「立项 / 实现 {slug}」后，才复制 `work-tasks/_template/`，再走 `tool-coverage-pass`。

## 6. 证据链接（本次抽查）

- 字幕：[termiva](https://termiva.app/subtitle/subtitle-reading-speed/) · [socaptions](https://socaptions.com/tools/subtitle-reading-speed) · [screenapp](https://screenapp.io/features/subtitle-quality-checker) · [timedsubs zh](https://timedsubs.com/zh/tools/srt-time-shifter) · [elysiatools de](https://elysiatools.com/de/tools/subtitle-reading-speed-localization-auditor)
- 时间码：[altftool](https://www.altftool.com/tools/all/timecode-to-frames-converter) · [ottengine](https://www.ottengine.com/tools/timecode-calculator)
- KDP：[KDP Create a Paperback Cover](https://kdp.amazon.com/help/topic/G201953020) · [KDP Cover Calculator](https://kdp.amazon.com/cover-calculator)
- 条码：[eancheck](https://eancheck.com/) · [govisually](https://govisually.com/free-tools/barcode)
- 装箱：[calculatecbm](https://calculatecbm.com/container-single) · [freightapis](https://freightapis.dev/tools/container-load-calculator)
- 流水：[bankstatementconverter.us.com](https://bankstatementconverter.us.com/) · [statementsift zh](https://statementsift.com/cn)
- 打码：[oneclickpdf](https://www.oneclickpdf.net/tools/redact) · [2redact](https://2redact.com/) · [totonoe ja](https://totonoe.tech/pdf-redact/)
- 工作日：[bizdaysglobal](https://www.bizdaysglobal.com/en) · [rechner-portal de](https://rechner-portal.de/datum-zeit/arbeitszeit/arbeitstage-rechner)
- CSV：[HubSpot import limits](https://knowledge.hubspot.com/import-and-export/set-up-your-import-file) · [csvsplitteronline](https://csvsplitteronline.com/split-csv/)
- 楼梯：[cutonce](https://cutonce.app/stair-stringer-calculator) · [techeld de](https://techeld.de/handwerksheld/holz-dach/treppenrechner/) · [planetacalculadoras es](https://planetacalculadoras.com/construccion/calculadora-escaleras-blondel/) · [toolv zh](https://toolv.com/zh-CN/app/louti-tabu-jisuan)
- 电压降：[hardhatmath](https://hardhatmath.com/electrical/voltage-drop-calculator/) · [btusize](https://btusize.com/calculators/voltage-drop/)
- 烘焙：[bakersmath](https://bakersmath.co/bakers-percentage-calculator) · [engbench](https://engbench.com/dough.php)
