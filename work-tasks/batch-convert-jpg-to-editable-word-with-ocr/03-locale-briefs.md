# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`batch-convert-jpg-to-editable-word-with-ocr`  
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

技术专名（OCR、JPG、JPEG、PNG、WebP、Word、DOCX）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向。H1 禁止 `OCR to Word` / `jpg to word` / `Batch OCR` / `Online OCR` 光杆。H1 禁止参数枚举（插图开关、上限 10 不进 H1）。H1 禁止用 page/页 当产品名。每语 FAQ 须说清与 **TXT 批量 OCR**、**无 OCR 贴图 Word**、**扫描 PDF→Word** 的差别。

**本工具额外禁用**：承诺栏/表版式与原件一致、手写准确、发票字段、CSV、扫描 PDF、可检索 PDF、TXT ZIP 当主产物、并行多引擎、扫描厂服务。FAQ 勿写「库从 CDN 加载」。

---

## 每语 brief

### en

- 检索词（3–5）：batch convert JPG to editable Word with OCR; jpg to word ocr; ocr jpg to word; convert jpg to word ocr; ocr to word
- 语气：口语工具站
- Title / H1 方向：Batch convert JPG to editable Word with OCR
- 按钮短词：Convert all; Download Word; Load sample; Clear
- 本地示例用词：two printed photos, one Word file, two sections, skipped blurry shot
- 可保留英文/符号：OCR, JPG, JPEG, PNG, WebP, Word, DOCX
- 额外禁用：H1=OCR to Word / jpg to word / Batch OCR；H1 抢 ocr pdf to word
- SERP 竞品 title（1–3）：OCR to Word; JPG to Word; Scan to Word（待人工 SERP 复核）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：用 OCR 批量把 JPG 转成可编辑的 Word; 多张 JPG 识别成 Word; JPG OCR 转 Word; 批量图片转 Word; 照片转可编辑文档
- 语气：口语工具站
- Title / H1 方向：用 OCR 批量把 JPG 转成可编辑的 Word（不要把 batch/convert/online/editable 硬塞进中文 H1）
- 按钮短词：全部转换; 下载 Word; 载入样例; 清空
- 本地示例用词：连拍讲义进 Word、一节一张带图校对、一张失败其余仍在文档里
- 可保留英文/符号：OCR、JPG、PNG、Word、DOCX
- 额外禁用：OCR 转 Word 光杆；写成能完美还原版式；抢「批量转文字」TXT 页 H1
- SERP 竞品 title（1–3）：图片转 Word; OCR 转 Word; 扫描件转 Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir varios JPG a Word editable con OCR; JPG a Word con OCR; varias fotos a Word; OCR de JPG a Word; varias imágenes a documento Word
- 语气：口语工具站
- Title / H1 方向：Convertir varios JPG a Word editable con OCR
- 按钮短词：Convertir todo; Descargar Word; Cargar ejemplo; Borrar
- 本地示例用词：varias fotos impresas, un Word, una foto se omite
- 可保留英文/符号：OCR, JPG, PNG, Word, DOCX
- 额外禁用：altas y bajas；H1=OCR a Word 光杆；página 当产品名
- SERP 竞品 title（1–3）：OCR a Word; JPG a Word; escanear a Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي; تحويل JPG إلى وورد بـ OCR; عدة صور إلى مستند وورد; استخراج نص إلى وورد من صور; أرشيف صور إلى DOCX
- 语气：口语工具站
- Title / H1 方向：حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي
- 按钮短词：تحويل الكل; تنزيل وورد; تحميل مثال; مسح
- 本地示例用词：صفحات مطبوعة متتالية في مستند واحد
- 可保留英文/符号：OCR, JPG, PNG, Word, DOCX
- 额外禁用：H1=OCR إلى وورد 光杆；承诺手写；拆独立 arabic-ocr-word URL
- SERP 竞品 title（1–3）：تحويل الصور إلى وورد; OCR إلى وورد
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt

- 检索词（3–5）：converter vários JPG em Word editável com OCR; JPG para Word com OCR; várias fotos para Word; OCR de JPG para Word; várias imagens para documento Word
- 语气：口语工具站
- Title / H1 方向：Converter vários JPG em Word editável com OCR
- 按钮短词：Converter tudo; Baixar Word; Carregar exemplo; Limpar
- 本地示例用词：várias fotos impressas, um Word, uma foto pulada
- 可保留英文/符号：OCR, JPG, PNG, Word, DOCX
- 额外禁用：H1=OCR para Word 光杆；sem enviar ao servidor 须写清
- SERP 竞品 title（1–3）：OCR para Word; JPG para Word; digitalizar para Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id

- 检索词（3–5）：ubah banyak JPG jadi Word yang bisa diedit dengan OCR; JPG ke Word dengan OCR; beberapa foto ke Word; OCR JPG ke dokumen Word; banyak gambar ke DOCX
- 语气：口语工具站
- Title / H1 方向：Ubah banyak JPG menjadi Word yang bisa diedit dengan OCR
- 按钮短词：Konversi semua; Unduh Word; Muat contoh; Hapus
- 本地示例用词：beberapa foto cetak, satu berkas Word, satu file dilewati
- 可保留英文/符号：OCR, JPG, PNG, Word, DOCX
- 额外禁用：H1=OCR ke Word 光杆；tanpa unggah 须写清 perangkat + server
- SERP 竞品 title（1–3）：OCR ke Word; JPG ke Word; pindai ke Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr

- 检索词（3–5）：convertir plusieurs JPG en Word modifiable avec OCR; JPG vers Word avec OCR; plusieurs photos en Word; OCR JPG vers Word; plusieurs images en document Word
- 语气：口语工具站
- Title / H1 方向：Convertir plusieurs JPG en Word modifiable avec OCR
- 按钮短词：Tout convertir; Télécharger Word; Charger un exemple; Effacer
- 本地示例用词：plusieurs photos imprimées, un Word, une photo ignorée
- 可保留英文/符号：OCR, JPG, PNG, Word, DOCX
- 额外禁用：H1=OCR vers Word 光杆；sans envoi 须写清 appareil + serveur
- SERP 竞品 title（1–3）：OCR vers Word; JPG vers Word; scan vers Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja

- 检索词（3–5）：複数のJPGをOCRでまとめて編集できるWordにする; JPGをOCRでWordに; 複数画像をWordへ文字起こし; 写真を編集可能なWordに; JPGまとめてDOCX
- 语气：口语工具站
- Title / H1 方向：複数のJPGをOCRでまとめて編集できるWordにする（「OCR to Word」光杆禁止）
- 按钮短词：すべて変換; Wordをダウンロード; サンプルを読み込む; クリア
- 本地示例用词：連続撮影した印刷ページが1つのWord、失敗した1枚はスキップ
- 可保留英文/符号：OCR、JPG、PNG、Word、DOCX
- 额外禁用：ユースケース空壳；承诺手写/縦書き完美版式
- SERP 竞品 title（1–3）：画像をWordに; OCRでWord; スキャンをWordに
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru

- 检索词（3–5）：пакетно преобразовать JPG в редактируемый Word с OCR; JPG в Word с OCR; несколько фото в Word; OCR JPG в документ Word; пачка снимков в DOCX
- 语气：口语工具站
- Title / H1 方向：Пакетно преобразовать JPG в редактируемый Word с помощью OCR
- 按钮短词：Преобразовать всё; Скачать Word; Загрузить пример; Очистить
- 本地示例用词：несколько печатных фото, один Word, один файл пропущен
- 可保留英文/符号：OCR, JPG, PNG, Word, DOCX
- 额外禁用：H1=OCR в Word 光杆；локально 含糊不提 сервер
- SERP 竞品 title（1–3）：OCR в Word; JPG в Word; скан в Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de

- 检索词（3–5）：mehrere JPG mit OCR in bearbeitbares Word umwandeln; JPG zu Word mit OCR; mehrere Fotos zu Word; OCR JPG zu Word; mehrere Bilder zu DOCX
- 语气：口语工具站
- Title / H1 方向：Mehrere JPG mit OCR in bearbeitbares Word umwandeln
- 按钮短词：Alle umwandeln; Word herunterladen; Beispiel laden; Leeren
- 本地示例用词：mehrere gedruckte Fotos, eine Word-Datei, ein fehlgeschlagenes Bild übersprungen
- 可保留英文/符号：OCR, JPG, PNG, Word, DOCX
- 额外禁用：H1=OCR zu Word 光杆；ohne Upload 须写清 Gerät + Server
- SERP 竞品 title（1–3）：OCR zu Word; JPG zu Word; Scan zu Word
- 轮次2已重写：[x]  轮次3已抽查：[x]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-08 | slug 保留 batch-convert-jpg-to-editable-word-with-ocr；H1 用批量可编辑 Word 任务句，禁光杆 OCR to Word / jpg to word；Planner jpg to word ocr 写入 desc/FAQ，ocr pdf to word 有意不满足留给 N4；意图审查满足队列+一份分节 DOCX+插图校对；相对 N1-batch 的 IG 写成节结构/Download Word 而非 TXT ZIP 换皮 | 覆盖表与 Ads 表在 02；notes 有邻页对照；03 勾选清单前覆盖与意图审查；未写 i18n |
| 1 母版+lint | 2026-09-08 | 写 catalog、Page（队列+Convert all+Download Word+可选段前原图）、icon、en 全键；How 四步对齐按钮；FAQ 对照 TXT ZIP、Images to Word、扫描 PDF、手写 | 母版落盘 i18n/tools/batch-convert-jpg-to-editable-word-with-ocr/en.ts |
| 1b 母版检索覆盖优化 | 2026-09-08 | 母版 H1 锁定 Batch convert JPG to editable Word with OCR；desc 写入 jpg to word ocr 与 Convert all / Download Word；禁参数枚举进 title；FAQ 次词 ocr jpg to word / convert jpg to word ocr 落点 | 主词在 H1 与 description 开篇；次词不拆 doorway |
| 2 按 brief 重写 | 2026-09-08 | 九语按当地检索词独立写全键：按钮对齐 brief；隐私写设备+不上服务器；FAQ 对照 TXT ZIP、多图贴图 Word、扫描 PDF；H1 非 OCR to Word 光杆 | 十语分片齐；非 en 句式同构 |
| 2b 抽查语检索覆盖优化 | 2026-09-08 | 抽查语 en,zh,es,ja 再过 title/desc：en 主词在 H1；zh 用 OCR 批量把 JPG 转成可编辑的 Word 且 desc≥120；es Convertir varios JPG a Word editable con OCR；ja 複数のJPGをOCRでまとめて編集できるWordにする；次词 jpg to word ocr 落 FAQ | 抽查四语主词在 H1，次词在 desc/FAQ |
| 3 抽查+禁词+lint | 2026-09-08 | 禁词表全扫：无 ユースケース、无 altas y bajas、无光杆 OCR to Word、隐私非含糊 local；抽查 en,zh,es,ja How 按钮名与页面一致 | 可发布；待母语抽查未勾 |
