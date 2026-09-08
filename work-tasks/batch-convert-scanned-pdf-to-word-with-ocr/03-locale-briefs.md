# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`batch-convert-scanned-pdf-to-word-with-ocr`  
**母版语言**：en  
**状态**：`i18n-done`

> `pending-native-review`：仅当仍有语种勾选「待母语抽查」时使用。清掉所有待抽查勾选并完成轮次 3 后，才可标 `i18n-done`。

---

## 共用禁词 / 禁模式（发布前勾选）

- [x] 无 granularity / 对比粒度 / Diff-Granularität / Granularitas 等造词
- [x] 无错义借译（如 es `altas y bajas` 表增删；乱造 `*hunk*` 德语词）
- [x] 无残缺缩写（如 `Cars.`）
- [x] 场景标题非「ユースケース」式空壳英借；改为当地说法
- [x] title/H1 非「参数A、参数B、参数C」目录腔（写结果/场景；控件名留给 UI）
- [x] 隐私句非含糊「local/本地」：文件类须该语说清「留在设备」+「不上服务器」（见 `tool-i18n-localization.mdc`「隐私本地处理表述」）
- [x] 十语非同一句式骨架；title 含该语检索说法
- [x] 未依赖 `t()` 英文回退冒充缺语种
- [x] 未使用「脚本批量同构灌语」作为唯一交付；待母语抽查已清或已排期
- [x] **清单前检索覆盖已做**（slug/title/关键词/desc；`02`/`notes` 有覆盖表；见 localization 步 0b）——勾工程/页面/上线清单前必做
- [x] **用户意图审查已做**（对照主词搜索者任务：满足/超出；已回写 How/交互；见 `work-tasks-tool-brief.mdc` 步 0i）
- [x] **检索覆盖已优化**（i18n 初稿之后按 `tool-i18n-localization.mdc` 步 2+4 再过一遍；多轮记录有摘要）

技术专名（OCR、PDF、Word、DOCX）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向。H1 禁止 `OCR to Word` / `ocr pdf to word` / `pdf to word` / `Batch OCR` / `Online OCR` 光杆。H1 禁止参数枚举（页图开关、5 文件/20 页不进 H1）。H1 禁止用 page/页 当产品名。每语 FAQ 须说清与 **字层 PDF→Word（A2）**、**照片 OCR→Word（N4-jpg-batch）**、**扫描 PDF→TXT / 可检索 PDF** 的差别。

**本工具额外禁用**：承诺栏/表版式与原件一致、手写准确、发票字段、CSV、JPG 主输入、可检索 PDF 当主产物、TXT ZIP 当主产物、并行多引擎、扫描厂服务。FAQ 勿写「库从 CDN 加载」。

---

## 每语 brief

### en

- 检索词（3–5）：batch convert scanned PDF to Word with OCR; convert scanned pdf to word; ocr pdf to word; pdf to word ocr; scan to word converter
- 语气：口语工具站
- Title / H1 方向：Batch convert scanned PDF to Word with OCR
- 按钮短词：Convert all; Download Word; Load sample; Clear
- 本地示例用词：two-page printed sample PDF, one Word file, skipped blurry page
- 可保留英文/符号：OCR, PDF, Word, DOCX
- 额外禁用：H1=OCR to Word / ocr pdf to word / pdf to word / Batch OCR；H1 抢 jpg to word ocr
- SERP 竞品 title（1–3）：OCR PDF to Word; Scanned PDF to Word; Scan to Word（待人工 SERP 复核）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：用 OCR 批量把扫描 PDF 转成 Word; 扫描件 PDF 转 Word; PDF OCR 转 Word; 多份扫描 PDF 识别成 Word; 扫描 PDF 转可编辑文档
- 语气：口语工具站
- Title / H1 方向：用 OCR 批量把扫描 PDF 转成 Word（不要把 batch/convert/online/editable 硬塞进中文 H1）
- 按钮短词：全部转换; 下载 Word; 载入样例; 清空
- 本地示例用词：两页印刷样例进 Word、一页失败其余仍在文档里、页图对照
- 可保留英文/符号：OCR、PDF、Word、DOCX
- 额外禁用：OCR 转 Word 光杆；写成能完美还原版式；抢「将 PDF 转为 Word 文档」字层页；抢照片 OCR Word 页
- SERP 竞品 title（1–3）：扫描件转 Word; PDF OCR 转 Word; PDF 转 Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir PDF escaneados a Word con OCR; PDF escaneado a Word; OCR de PDF a Word; varios PDF a Word; escanear a Word
- 语气：口语工具站
- Title / H1 方向：Convertir PDF escaneados a Word con OCR
- 按钮短词：Convertir todo; Descargar Word; Cargar ejemplo; Borrar
- 本地示例用词：un PDF de dos páginas, un Word, una página se omite
- 可保留英文/符号：OCR, PDF, Word, DOCX
- 额外禁用：altas y bajas；H1=OCR a Word / PDF a Word 光杆；página 当产品名
- SERP 竞品 title（1–3）：OCR PDF a Word; escanear a Word; PDF a Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حوّل ملفات PDF الممسوحة إلى وورد بالتعرّف الضوئي دفعة واحدة; تحويل PDF ممسوح إلى وورد; OCR من PDF إلى وورد; عدة ملفات مسح إلى وورد
- 语气：口语工具站
- Title / H1 方向：حوّل ملفات PDF الممسوحة إلى وورد بالتعرّف الضوئي دفعة واحدة
- 按钮短词：تحويل الكل; تنزيل وورد; تحميل مثال; مسح
- 本地示例用词：ملف مسح من صفحتين في مستند واحد
- 可保留英文/符号：OCR, PDF, Word, DOCX
- 额外禁用：H1=OCR إلى وورد 光杆；承诺手写；拆独立 arabic-ocr-pdf-word URL
- SERP 竞品 title（1–3）：تحويل المسح إلى وورد; OCR PDF إلى وورد
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### pt

- 检索词（3–5）：converter PDFs digitalizados em Word com OCR; PDF digitalizado para Word; OCR de PDF para Word; vários PDFs para Word; digitalizar para Word
- 语气：口语工具站
- Title / H1 方向：Converter PDFs digitalizados em Word com OCR
- 按钮短词：Converter tudo; Baixar Word; Carregar exemplo; Limpar
- 本地示例用词：um PDF de duas páginas, um Word, uma página pulada
- 可保留英文/符号：OCR, PDF, Word, DOCX
- 额外禁用：H1=OCR para Word / PDF para Word 光杆；sem enviar ao servidor 须写清
- SERP 竞品 title（1–3）：OCR PDF para Word; digitalizar para Word; PDF para Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah PDF hasil pindai jadi Word dengan OCR sekaligus; PDF pindai ke Word; OCR PDF ke Word; beberapa PDF ke Word
- 语气：口语工具站
- Title / H1 方向：Ubah PDF hasil pindai menjadi Word dengan OCR sekaligus
- 按钮短词：Konversi semua; Unduh Word; Muat contoh; Hapus
- 本地示例用词：PDF dua halaman, satu berkas Word, satu halaman dilewati
- 可保留英文/符号：OCR, PDF, Word, DOCX
- 额外禁用：H1=OCR ke Word 光杆；tanpa unggah 须写清 perangkat + server
- SERP 竞品 title（1–3）：OCR PDF ke Word; pindai ke Word; PDF ke Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir des PDF scannés en Word avec OCR; PDF scanné vers Word; OCR PDF vers Word; plusieurs PDF en Word; scan vers Word
- 语气：口语工具站
- Title / H1 方向：Convertir des PDF scannés en Word avec OCR
- 按钮短词：Tout convertir; Télécharger Word; Charger un exemple; Effacer
- 本地示例用词：un PDF de deux pages, un Word, une page ignorée
- 可保留英文/符号：OCR, PDF, Word, DOCX
- 额外禁用：H1=OCR vers Word / PDF vers Word 光杆；sans envoi 须写清 appareil + serveur
- SERP 竞品 title（1–3）：OCR PDF vers Word; scan vers Word; PDF vers Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：スキャンしたPDFをOCRでまとめてWordにする; スキャンPDFをWordに; PDF OCRでWord; 複数のスキャンPDFをWordへ
- 语气：口语工具站
- Title / H1 方向：スキャンしたPDFをOCRでまとめてWordにする（「OCR to Word」「PDFをWordに」光杆禁止——后者像字层转换）
- 按钮短词：すべて変換; Wordをダウンロード; サンプルを読み込む; クリア
- 本地示例用词：2ページの印刷サンプルが1つのWord、失敗した1ページはスキップ
- 可保留英文/符号：OCR、PDF、Word、DOCX
- 额外禁用：ユースケース空壳；承诺手写/縦書き完美版式；抢字层 PDF→Word
- SERP 竞品 title（1–3）：スキャンをWordに; PDF OCR Word; PDFをWordに
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：пакетно преобразовать отсканированные PDF в Word с OCR; отсканированный PDF в Word; OCR PDF в Word; несколько сканов в Word
- 语气：口语工具站
- Title / H1 方向：Пакетно преобразовать отсканированные PDF в Word с помощью OCR
- 按钮短词：Преобразовать всё; Скачать Word; Загрузить пример; Очистить
- 本地示例用词：двухстраничный скан, один Word, одна страница пропущена
- 可保留英文/符号：OCR, PDF, Word, DOCX
- 额外禁用：H1=OCR в Word / PDF в Word 光杆；локально 含糊不提 сервер
- SERP 竞品 title（1–3）：OCR PDF в Word; скан в Word; PDF в Word
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### de

- 检索词（3–5）：gescannte PDFs mit OCR gesammelt in Word umwandeln; gescanntes PDF zu Word; OCR PDF zu Word; mehrere Scans zu Word
- 语气：口语工具站
- Title / H1 方向：Gescannte PDFs mit OCR in Word umwandeln
- 按钮短词：Alle umwandeln; Word herunterladen; Beispiel laden; Leeren
- 本地示例用词：ein zweiseitiges Scan-PDF, eine Word-Datei, eine Seite übersprungen
- 可保留英文/符号：OCR, PDF, Word, DOCX
- 额外禁用：H1=OCR zu Word / PDF zu Word 光杆；ohne Upload 须写清 Gerät + Server
- SERP 竞品 title（1–3）：OCR PDF zu Word; Scan zu Word; PDF zu Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-08 | slug 保留 batch-convert-scanned-pdf-to-word-with-ocr；H1 用批量扫描 PDF→Word 任务句，禁光杆 ocr pdf to word / pdf to word；Planner convert scanned pdf to word 写入 desc/FAQ，jpg to word ocr 有意不满足留给 N4-jpg-batch；意图审查满足队列+光栅 OCR+一份分节 DOCX；相对 jpg-batch 的 IG 写成 PDF 页展开而非改 accept | 覆盖表与 Ads 表在 02；notes 有邻页对照；03 勾选清单前覆盖与意图审查；未写 i18n |
| 1 母版+lint | 2026-09-08 | Wrote full en keys plus Page.ts queue, pdf.js raster, serial OCR, gold HUD, one DOCX; lint:tool-page after merge | Master i18n complete; loadSample exists; How verbs match Convert all / Download Word |
| 1b 母版检索覆盖优化 | 2026-09-08 | Rechecked en title/description/_desc after first draft: H1 stays Batch convert scanned PDF to Word with OCR; meta opens with scanned PDFs to one Word in this tab; convert scanned pdf to word and ocr pdf to word sit in description and FAQ, not H1; photos and text-layer PDFs stay FAQ neighbors | Main term in H1; no parameter-list title; secondary terms have desc/FAQ landings |
| 2 按 brief 重写 | 2026-09-08 | Independent shards for zh, es, ar, pt, id, fr, ja, ru, de from locale briefs; buttons and How labels match each brief; FAQ cites A2 and N4-jpg-batch H1s | Ten locales present; sentence shapes differ from English |
| 2b 抽查语检索覆盖优化 | 2026-09-08 | Rechecked en,zh,es,ja titles and descriptions after rewrite: zh 用 OCR 批量把扫描 PDF 转成 Word; es Convertir PDF escaneados a Word con OCR; ja スキャンしたPDFをOCRでまとめてWordにする; none use bare ocr pdf to word; Convert all / Download Word appear in How | en,zh,es,ja titles are scene-result; coverage:gate phase=4 |
| 3 抽查+禁词+lint | 2026-09-08 | Banlist pass plus verify:tool: no ユースケース, no altas y bajas, privacy says device + server, neighbor FAQ names H1s | Banlist clear; verify:tool green; native-review boxes left empty |
