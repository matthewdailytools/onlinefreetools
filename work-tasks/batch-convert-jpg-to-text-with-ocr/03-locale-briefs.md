# 03 — 各语言 Locale Brief + 禁词核查

> 实现/改写 i18n **之前**按语种填写。完整规则见 `.cursor/rules/tool-i18n-localization.mdc`（**稳妥常态**：母版一语 → 逐语或每批 ≤3 语独立重写 → ≥3 轮；禁止脚本同构灌语）。  
> Agent：**按 brief 用目标语重写**，不要 `Translate the English page into {lang}`。

**工具 slug**：`batch-convert-jpg-to-text-with-ocr`  
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

技术专名（OCR、JPG、JPEG、PNG、WebP、TXT、ZIP）可保留，**不可**替代本地主 title。  
Title 方向须为当地口语检索向。H1 禁止 `Batch OCR` / `Bulk OCR` / `Online OCR` / `OCR to text` 光杆。H1 禁止参数枚举（语种、上限 10、ZIP 结构不进 H1）。H1 禁止用 page/页 当产品名。可见正文禁止 doorway/薄页/slug/库名卖点。每语 FAQ 须说清与**单张** OCR 页的差别（队列 / ZIP / skip），不要写成「和单张一样只是多选」。

**本工具额外禁用**：承诺手写准确、发票字段、表格 CSV、扫描 PDF、可检索 PDF、Word 版式、并行多引擎、扫描厂上门服务、100 种语言 URL。FAQ 勿写「库从 CDN 加载」。

---

## 每语 brief

### en

- 检索词（3–5）：batch convert JPG to text with OCR; batch ocr; bulk ocr; convert multiple jpg to text; batch image to text
- 语气：口语工具站
- Title / H1 方向：Batch convert JPG to text with OCR
- 按钮短词：Convert all; Download ZIP; Copy combined text; Load sample; Clear
- 本地示例用词：two printed photos, ZIP of TXT files, skipped blurry shot
- 可保留英文/符号：OCR, JPG, JPEG, PNG, WebP, TXT, ZIP
- 额外禁用：H1=Batch OCR / Bulk OCR / JPG to text（单张抢 N1）；H1 列 languages/limit/ZIP
- SERP 竞品 title（1–3）：Batch OCR; Bulk OCR; Image to Text（待人工 SERP 复核）
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh

- 检索词（3–5）：用 OCR 批量把 JPG 转成文字; 批量图片转文字; 多张 JPG 识别文字; 批量 OCR; 多张截图提取文字
- 语气：口语工具站
- Title / H1 方向：用 OCR 批量把 JPG 转成文字（不要把 batch/convert/online 硬塞进中文 H1）
- 按钮短词：全部转换; 下载 ZIP; 复制合并文本; 载入样例; 清空
- 本地示例用词：连拍讲义、一串截图、一张失败其余继续
- 可保留英文/符号：OCR、JPG、PNG、TXT、ZIP
- 额外禁用：批量 OCR 光杆；「本地处理」不提不上服务器；写成能出 Word；抢「JPG 转文字」单张 H1
- SERP 竞品 title（1–3）：批量图片转文字; 批量 OCR; 多图识别
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es

- 检索词（3–5）：convertir varios JPG a texto con OCR; OCR por lotes; OCR masivo; varios JPG a texto; varias imágenes a texto
- 语气：口语工具站
- Title / H1 方向：Convertir varios JPG a texto con OCR
- 按钮短词：Convertir todo; Descargar ZIP; Copiar texto combinado; Cargar ejemplo; Borrar
- 本地示例用词：varias fotos impresas, ZIP de TXT, una foto se omite
- 可保留英文/符号：OCR, JPG, PNG, TXT, ZIP
- 额外禁用：altas y bajas；H1=OCR por lotes 光杆；página 当产品名；H1=JPG a texto 单张
- SERP 竞品 title（1–3）：OCR por lotes; varias imágenes a texto; OCR masivo
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar

- 检索词（3–5）：تحويل عدة صور JPG إلى نص بـ OCR; التعرف الضوئي على دفعة صور; تحويل صور متعددة إلى نص; استخراج نص من عدة لقطات; أرشيف TXT مضغوط
- 语气：口语工具站
- Title / H1 方向：حوّل عدة صور JPG إلى نص بالتعرّف الضوئي دفعة واحدة
- 按钮短词：تحويل الكل; تنزيل ZIP; نسخ النص المدمج; تحميل مثال; مسح
- 本地示例用词：صفحات مطبوعة متتالية، لقطات متعددة
- 可保留英文/符号：OCR, JPG, PNG, TXT, ZIP
- 额外禁用：H1=OCR دفعي 光杆；承诺手写；拆独立 arabic-ocr 批量产品
- SERP 竞品 title（1–3）：OCR دفعة; صور إلى نص; استخراج نص من عدة صور
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### pt

- 检索词（3–5）：converter vários JPG em texto com OCR; OCR em lote; OCR em massa; vários JPG para texto; várias imagens para texto
- 语气：口语工具站
- Title / H1 方向：Converter vários JPG em texto com OCR
- 按钮短词：Converter tudo; Baixar ZIP; Copiar texto combinado; Carregar exemplo; Limpar
- 本地示例用词：várias fotos impressas, ZIP de TXT, uma foto pulada
- 可保留英文/符号：OCR, JPG, PNG, TXT, ZIP
- 额外禁用：H1=OCR em lote 光杆；sem enviar ao servidor 须写清；H1=JPG para texto 单张
- SERP 竞品 title（1–3）：OCR em lote; várias imagens para texto; OCR em massa
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### id

- 检索词（3–5）：ubah banyak JPG jadi teks dengan OCR; OCR massal; OCR banyak file; beberapa JPG ke teks; banyak gambar ke teks
- 语气：口语工具站
- Title / H1 方向：Ubah banyak JPG menjadi teks dengan OCR
- 按钮短词：Konversi semua; Unduh ZIP; Salin teks gabungan; Muat contoh; Hapus
- 本地示例用词：beberapa foto cetak, ZIP berisi TXT, satu file dilewati
- 可保留英文/符号：OCR, JPG, PNG, TXT, ZIP
- 额外禁用：H1=OCR batch 光杆；tanpa unggah 须写清 perangkat + server
- SERP 竞品 title（1–3）：OCR massal; banyak gambar ke teks; OCR batch
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### fr

- 检索词（3–5）：convertir plusieurs JPG en texte avec OCR; OCR par lot; OCR en masse; plusieurs JPG vers texte; plusieurs images en texte
- 语气：口语工具站
- Title / H1 方向：Convertir plusieurs JPG en texte avec OCR
- 按钮短词：Tout convertir; Télécharger le ZIP; Copier le texte combiné; Charger un exemple; Effacer
- 本地示例用词：plusieurs photos imprimées, ZIP de TXT, une photo ignorée
- 可保留英文/符号：OCR, JPG, PNG, TXT, ZIP
- 额外禁用：H1=OCR par lot 光杆；sans envoi 须写清 appareil + serveur
- SERP 竞品 title（1–3）：OCR par lot; plusieurs images en texte; OCR en masse
- 轮次2已重写：[x]  轮次3已抽查：[ ]

### ja

- 检索词（3–5）：複数のJPGをOCRでまとめてテキスト化; 一括OCR; 複数画像 文字起こし; まとめて画像から文字抽出; JPGをまとめてテキスト
- 语气：口语工具站
- Title / H1 方向：複数のJPGをOCRでまとめてテキストにする（「一括OCR」光杆禁止；日语模型弱 → FAQ 写可能需加载较大模型）
- 按钮短词：すべて変換; ZIPをダウンロード; 結合テキストをコピー; サンプルを読み込む; クリア
- 本地示例用词：連続撮影した印刷ページ、失敗した1枚はスキップ
- 可保留英文/符号：OCR、JPG、PNG、TXT、ZIP
- 额外禁用：ユースケース空壳；H1 参数目录；承诺手写/縦書き完美
- SERP 竞品 title（1–3）：一括OCR; 複数画像 文字起こし; 画像まとめてテキスト
- 轮次2已重写：[x]  轮次3已抽查：[x]  待母语抽查：[ ]

### ru

- 检索词（3–5）：пакетно преобразовать JPG в текст с OCR; пакетный OCR; массовый OCR; несколько JPG в текст; пачка изображений в текст
- 语气：口语工具站
- Title / H1 方向：Пакетно преобразовать JPG в текст с помощью OCR
- 按钮短词：Преобразовать всё; Скачать ZIP; Копировать объединённый текст; Загрузить пример; Очистить
- 本地示例用词：несколько печатных фото, ZIP из TXT, один файл пропущен
- 可保留英文/符号：OCR, JPG, PNG, TXT, ZIP
- 额外禁用：H1=Пакетный OCR 光杆；локально 含糊不提 сервер
- SERP 竞品 title（1–3）：пакетный OCR; несколько изображений в текст; массовое распознавание
- 轮次2已重写：[x]  轮次3已抽查：[ ]  待母语抽查：[ ]

### de

- 检索词（3–5）：mehrere JPG mit OCR in Text umwandeln; Stapel-OCR; OCR im Batch; mehrere JPG zu Text; mehrere Bilder zu Text
- 语气：口语工具站
- Title / H1 方向：Mehrere JPG mit OCR in Text umwandeln
- 按钮短词：Alle umwandeln; ZIP herunterladen; kombinierten Text kopieren; Beispiel laden; Leeren
- 本地示例用词：mehrere gedruckte Fotos, ZIP mit TXT, ein fehlgeschlagenes Bild übersprungen
- 可保留英文/符号：OCR, JPG, PNG, TXT, ZIP
- 额外禁用：H1=Stapel-OCR 光杆；ohne Upload 须写清 Gerät + Server
- SERP 竞品 title（1–3）：Stapel-OCR; mehrere Bilder zu Text; Batch OCR
- 轮次2已重写：[x]  轮次3已抽查：[ ]

---

## 多轮记录（摘要）

> 行首 ID（`0b` / `1b` / `2b`）供 `npm run coverage:gate` 解析；**日期列填 YYYY-MM-DD**；「做了什么/结果」合计 ≥20 字，禁止只写「完成」。  
> 验收：`coverage:gate --phase=0b`（标 ready 前）→ `--phase=2`（母版 i18n 后）→ `--phase=4`（抽查语后，须在结果中写出 `en,zh,es,ja`）。

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖 | 2026-09-08 | slug 保留 batch-convert-jpg-to-text-with-ocr；H1 用批量任务句承接 batch ocr，禁光杆 Batch OCR 且不抢 N1 的 jpg to text；Planner batch/bulk ocr 写入 desc/FAQ；意图审查满足队列+ZIP+skip，有意不满足 PDF/Word/单张进攻；相对 N1 的 IG 写成队列/skip/ZIP/合并四件套 | 覆盖表与 Ads 表在 02；notes 有控件对照；03 勾选清单前覆盖与意图审查；未写 i18n |
| 1 母版+lint | 2026-09-08 | 写 en 全键：H1 Batch convert JPG to text with OCR；How 四步对齐 Convert all / Download ZIP / Copy combined text；FAQ 覆盖 batch/bulk ocr、skip、ZIP、单张链 N1 | 母版落盘 i18n/tools/batch-convert-jpg-to-text-with-ocr/en.ts |
| 1b 母版检索覆盖优化 | 2026-09-08 | 扫 title/desc：主词 Batch convert JPG to text with OCR 在 H1；desc 前 160 字含 several JPGs、ZIP、this tab、Steps Convert all；次词 batch OCR / bulk OCR 从 snippet 挪到 Steps 之后以免截断按钮词；单张 jpg to text 只在 FAQ | H1 保留批量任务句，不改成 Batch OCR 光杆 |
| 2 按 brief 重写 | 2026-09-08 | 十语独立重写：en Batch convert JPG to text with OCR；zh 用 OCR 批量把 JPG 转成文字；es Convertir varios JPG a texto con OCR；ja 複数のJPGをOCRでまとめてテキストにする；How 对齐当地 Convert all / ZIP / Copy combined；FAQ 写 skip、ZIP、单张链 | 十语分片齐全，非英模同构灌语 |
| 2b 抽查语检索覆盖优化 | 2026-09-08 | 抽查语 en,zh,es,ja：再扫 title/desc；en H1 主词保留，desc 前段含 Convert all 与 ZIP、device；zh H1 用 OCR 批量把 JPG 转成文字，desc 含全部转换与不上服务器；es H1 Convertir varios JPG，desc Convertir todo；ja H1 複数のJPGをOCRでまとめてテキストにする，desc すべて変換。次词 batch OCR / 批量 OCR / OCR por lotes / 一括OCR 放在 Steps 之后 | 抽查四语主词在 H1，未改成光杆 Batch OCR |
| 3 抽查+禁词+lint | 2026-09-08 | 抽查 en,zh,es,ja title 与按钮对齐；勾禁词（无残缺缩写、ja 场景标题用「こんなときに」非ユースケース、十语不同骨架）；ar/ru 待母语抽查未勾 | 可标 i18n-done |
