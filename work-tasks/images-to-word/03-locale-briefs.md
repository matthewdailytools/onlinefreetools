# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`images-to-word`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把 1 / 2 / 4 张、A4 / Letter、边距、图注串进 H1）
- [x] 隐私只作事实陈述（FAQ「是否上传」），不当首要卖点
- [x] 禁「Rules 节 / 见下文公式」等站内自指；禁 doorway / 薄页等元叙述
- [x] **不吸 OCR 意图**：各语不得写成「JPG 转可编辑 Word」「识别文字」；OCR 提示行与 FAQ q3 须明确「图中文字仍是图片」并指向 OCR 工具（ocr_link 文案 = 该工具名的当地说法）
- [x] 当地说法：zh 图片转 Word / 多张图片插入 Word / Word 一页放两张图片；ja 画像 Word 変換 / Word 写真 複数 挿入 / Word 写真 2枚 並べる；es pasar imágenes a Word / insertar varias imágenes en Word；pt converter imagens para Word / inserir várias fotos no Word；fr insérer plusieurs images dans Word / mettre 2 photos par page Word；de mehrere Bilder in Word einfügen / Bilder nebeneinander in Word；ru вставить несколько картинок в Word / фото в Word；id masukkan banyak gambar ke Word / foto ke Word；ar إدراج صور متعددة في Word / تحويل الصور إلى Word
- [x] 数字固定各语不得改动：A4 21 × 29.7 cm、US Letter 8.5 × 11 in、标准边距 2.54 cm（1 in）、窄边距 1.27 cm（0.5 in）、可用宽 15.92 cm、96 ppi、480 px → 12.7 cm、JPEG 92% / 80%、1600 px、≈250 ppi、25 MB、8192 px、样例 1600 × 1200 / 1200 × 1600 / 900 × 600 / 1280 × 720、4 页 / 15.9 cm、1 页 / 约 7.7 cm、IMG_2 / IMG_10、3–5 MB、Word 2007
- [x] `count_tpl` / `figure_tpl` / `more_pages_tpl` 的 `{n}`、`embed_step` 的 `{i}` `{n}`、`elapsed` 的 `{s}`、`warn_skipped` 的 `{names}`、`stats_tpl` 的 `{pages}` `{n}` `{bytes}` `{raw}` `{re}` 原样保留；统计用「标签：值」免复数
- [x] How / FAQ / Rules / 提示中引用的按钮、选项（Choose images、Sort by file name、↻、Pictures per page、Page size、Orientation、More options、File name、Figure 1, 2, 3…、Fill the space、Actual size、Smaller file、Original、Convert to Word、Download .docx）须与该语控件文案一致
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 每语 brief

### en
- 检索词：images to word；insert multiple pictures into word；put 2 pictures on one page in word；add captions to pictures in word；photos to word document
- 语气：口语工具站
- Title：Images to Word — Insert Multiple Pictures into One Word Document (DOCX)
- 按钮：Convert to Word / Download .docx / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：图片转 Word；多张图片插入 Word；Word 一页放两张图片；Word 图片加图注；照片转 Word 文档
- 语气：口语
- Title：图片转 Word — 把多张图片一次性插入一个 Word 文档（DOCX）
- 按钮：转换为 Word / 下载 .docx / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：画像 Word 変換；Word 写真 複数 挿入；Word 写真 2枚 並べる；Word 写真 キャプション；スクショ Word まとめる
- 语气：です・ます
- Title：画像をWordに変換 — 複数の写真を1つのWord文書にまとめて挿入（DOCX）
- 按钮：Wordに変換 / .docxをダウンロード / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：تحويل الصور إلى Word；إدراج صور متعددة في Word；وضع صورتين في صفحة واحدة Word；إضافة تسمية للصور في Word
- 语气：فصحى مبسطة
- Title：تحويل الصور إلى Word — إدراج عدة صور في مستند Word واحد (DOCX)
- 按钮：حوّل إلى Word / تنزيل ‎.docx / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：pasar imágenes a Word；insertar varias imágenes en Word a la vez；poner 2 fotos en una hoja de Word；pie de foto en Word
- 语气：tú
- Title：Imágenes a Word — Inserta varias fotos en un solo documento de Word (DOCX)
- 按钮：Convertir a Word / Descargar .docx / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：converter imagens para Word；inserir várias fotos no Word de uma vez；colocar 2 fotos na mesma página do Word；legenda de imagem no Word
- 语气：você（pt-BR）
- Title：Imagens para Word — Insira várias fotos em um único documento do Word (DOCX)
- 按钮：Converter para Word / Baixar .docx / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：insérer plusieurs images dans Word；mettre 2 photos par page Word；images en Word；légende image Word
- 语气：vouvoiement
- Title：Images en Word — Insérez plusieurs photos dans un seul document Word (DOCX)
- 按钮：Convertir en Word / Télécharger le .docx / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：mehrere Bilder in Word einfügen；Bilder nebeneinander in Word；2 Bilder auf eine Seite Word；Bildunterschrift Word
- 语气：Sie-Form
- Title：Bilder in Word einfügen — Mehrere Fotos auf einmal in ein Word-Dokument (DOCX)
- 按钮：In Word umwandeln / .docx herunterladen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：вставить несколько картинок в Word；картинки в Word онлайн；две фотографии на одной странице Word；подпись к рисунку Word
- 语气：нейтральный，на «вы»
- Title：Картинки в Word — вставьте несколько фото в один документ Word (DOCX)
- 按钮：Конвертировать в Word / Скачать .docx / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：masukkan banyak gambar ke Word；gambar ke Word；2 foto dalam 1 halaman Word；keterangan gambar di Word
- 语气：Anda
- Title：Gambar ke Word — Masukkan Banyak Foto ke Satu Dokumen Word (DOCX)
- 按钮：Ubah ke Word / Unduh .docx / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Build a DOCX from Photos」改为工具名 + 插入多图到一个文档；02 新增同意图相关搜索全表（insert multiple pictures、2 / 4 per page、captions、文件太大、截图、Google Docs / LibreOffice 吸；JPG to editable Word（OCR）、images to pdf、word to jpg 不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 images to word + insert multiple pictures into one Word document；desc 写顺序、每页张数、可编辑应用与例子；2 / 4 per page → FAQ q2 / rules 1；captions → FAQ q4 / rules 5；size → FAQ q5；apps → FAQ q6；OCR → 提示行 + FAQ q3 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地说法（图片转 Word、画像をWordに変換、Imágenes a Word、Bilder in Word einfügen 等）；数字不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-08 | 多图一页一张 + 固定 550 px PNG 嵌入立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
