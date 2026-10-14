# 03 — 各语言 Locale Brief + 禁词核查

**工具 slug**：`images-to-pdf`  
**母版语言**：en  
**状态**：`i18n-done`  
**YMYL**：否

## 共用禁词 / 禁模式

- [x] title 非参数目录腔（不把 A4 / Letter / 边距 / 质量档串进 H1）
- [x] 隐私只作事实陈述（FAQ「是否上传」），不当首要卖点
- [x] 禁「Rules 节 / 见下文公式」等站内自指；禁 doorway / 薄页等元叙述
- [x] 当地说法：zh 图片转 PDF / JPG 转 PDF / 多张图片合成一个 PDF；ja JPG PDF 変換 / 画像 PDF まとめる；es convertir JPG a PDF / unir imágenes en un PDF；pt converter JPG em PDF / juntar imagens em um PDF；fr convertir JPG en PDF / rassembler des images en un PDF；de JPG in PDF umwandeln / Bilder zu einer PDF zusammenfügen；ru JPG в PDF / объединить картинки в один PDF；id ubah JPG ke PDF / gabungkan gambar jadi satu PDF；ar تحويل JPG إلى PDF / دمج الصور في ملف PDF
- [x] 数字固定各语不得改动：A4 595 × 842 pt（210 × 297 mm）、Letter 612 × 792 pt（8.5 × 11 in）、1 pt = 1/72 in、96 ppi、1200 × 800 → 317 × 212 mm、800 × 1131、800 × 800、6 / 12 / 20 mm、2480 px ≈ 200 dpi、1600 px ≈ 140 dpi、85% / 70%、IMG_2 / IMG_10
- [x] `count_tpl` 的 `{n}`、`embed_step` 的 `{i}` `{n}`、`elapsed` 的 `{s}`、`warn_skipped` 的 `{names}`、`stats_tpl` 的 `{n}` `{size}` `{bytes}` `{raw}` `{re}` 原样保留
- [x] How / FAQ 中引用的按钮、选项（Sort by file name、Reverse order、More options、Original、Smaller file、Same as each image、↻）须与该语控件文案一致
- [x] **清单前检索覆盖已做**
- [x] **用户意图审查已做**
- [x] **检索覆盖已优化**
- [x] 十语非同构（FAQ 题序 / Why choose 条序随语种调整）

## 每语 brief

### en
- 检索词：jpg to pdf；images to pdf；combine multiple images into one pdf；jpg to pdf without losing quality；png to pdf
- 语气：口语工具站
- Title：JPG to PDF Converter — Combine Multiple Images into One PDF Without Losing Quality
- 按钮：Convert to PDF / Download PDF / Load sample / Clear
- 轮次2已重写：[x]  轮次3已抽查：[x]

### zh
- 检索词：图片转 PDF；JPG 转 PDF；多张图片合成一个 PDF；照片转 PDF 不压缩；截图转 PDF
- 语气：口语
- Title：图片转 PDF — 把多张 JPG 照片合并成一个 PDF，原图不压缩
- 按钮：转换为 PDF / 下载 PDF / 加载样例 / 清空
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ja
- 检索词：JPG PDF 変換；画像 PDF まとめる；複数画像 1つのPDF；写真 PDF 画質 落ちない；スクショ PDF
- 语气：です・ます
- Title：JPGをPDFに変換 — 複数の画像を画質そのままで1つのPDFにまとめる
- 按钮：PDFに変換 / PDFをダウンロード / サンプルを読み込む / クリア
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ar
- 检索词：تحويل JPG إلى PDF；تحويل الصور إلى PDF；دمج عدة صور في ملف PDF واحد；تحويل الصور إلى PDF بدون فقدان الجودة
- 语气：فصحى مبسطة
- Title：تحويل JPG إلى PDF — دمج عدة صور في ملف PDF واحد دون فقدان الجودة
- 按钮：حوّل إلى PDF / تنزيل PDF / تحميل مثال / مسح
- 轮次2已重写：[x]  轮次3已抽查：[x]

### es
- 检索词：convertir JPG a PDF；pasar imágenes a PDF；unir varias imágenes en un PDF；JPG a PDF sin perder calidad
- 语气：tú
- Title：Convertir JPG a PDF — Une varias imágenes en un solo PDF sin perder calidad
- 按钮：Convertir a PDF / Descargar PDF / Cargar ejemplo / Borrar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### pt
- 检索词：converter JPG em PDF；transformar imagem em PDF；juntar várias imagens em um PDF；JPG para PDF sem perder qualidade
- 语气：você（pt-BR）
- Title：Converter JPG em PDF — Junte várias imagens em um único PDF sem perder qualidade
- 按钮：Converter para PDF / Baixar PDF / Carregar exemplo / Limpar
- 轮次2已重写：[x]  轮次3已抽查：[x]

### fr
- 检索词：convertir JPG en PDF；transformer une image en PDF；rassembler plusieurs images en un seul PDF；JPG en PDF sans perte de qualité
- 语气：vouvoiement
- Title：Convertir JPG en PDF — Rassemblez plusieurs images dans un seul PDF sans perte de qualité
- 按钮：Convertir en PDF / Télécharger le PDF / Charger un exemple / Effacer
- 轮次2已重写：[x]  轮次3已抽查：[x]

### de
- 检索词：JPG in PDF umwandeln；Bilder in PDF umwandeln；mehrere Bilder zu einer PDF zusammenfügen；JPG zu PDF ohne Qualitätsverlust
- 语气：Sie-Form
- Title：JPG in PDF umwandeln — Mehrere Bilder ohne Qualitätsverlust zu einer PDF zusammenfügen
- 按钮：In PDF umwandeln / PDF herunterladen / Beispiel laden / Leeren
- 轮次2已重写：[x]  轮次3已抽查：[x]

### ru
- 检索词：конвертировать JPG в PDF；картинки в PDF онлайн；объединить несколько фото в один PDF；JPG в PDF без потери качества
- 语气：нейтральный，на «вы»
- Title：Конвертировать JPG в PDF — объедините несколько картинок в один PDF без потери качества
- 按钮：Конвертировать в PDF / Скачать PDF / Загрузить пример / Очистить
- 轮次2已重写：[x]  轮次3已抽查：[x]

### id
- 检索词：ubah JPG ke PDF；gambar ke PDF；gabungkan banyak foto jadi satu PDF；JPG ke PDF tanpa mengurangi kualitas
- 语气：Anda
- Title：Ubah JPG ke PDF — Gabungkan Banyak Gambar Jadi Satu PDF Tanpa Mengurangi Kualitas
- 按钮：Ubah ke PDF / Unduh PDF / Muat contoh / Hapus
- 轮次2已重写：[x]  轮次3已抽查：[x]

## 多轮记录（摘要）

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 0b 清单前检索覆盖（改写） | 2026-10-14 | 保留 slug；H1 由「Turn JPG into PDF」改为格式对 + 多图合一 + 不降质；02 新增同意图相关搜索全表（images / png / screenshot to pdf、combine、without losing quality、A4 / Letter、旋转、排序、压缩、HEIC 吸；pdf to jpg、merge pdf、OCR 不吸）与意图审查（部分满足→满足） | 02 覆盖表与意图审查已回写 |
| 1b 母版检索覆盖优化（改写） | 2026-10-14 | en title 含 jpg to pdf + combine multiple images into one pdf + without losing quality；desc 写顺序、旋转、页面尺寸与例子；quality → Why choose 1 / FAQ q2 / rules 3；sideways → FAQ q5；order → FAQ q4；size → FAQ q6；HEIC → FAQ q7 | 主词在 H1；次词逐一有落点 |
| 2b 十语检索向重写（改写） | 2026-10-14 | 十语按各语 brief 独立重写；title 用当地格式对说法（图片转 PDF、JPGをPDFに変換、convertir JPG a PDF、JPG in PDF umwandeln 等）；数字不变 | 十语键集与 en 一致；抽查 en,zh,es,ja,de,ar |

### 历史

| 轮次 | 日期 | 做了什么 | 结果 |
|---|---|---|---|
| 初版 | 2026-08-09 | 多图一页一张 + A4 方向 / 适配立项 + 十语首稿 | 上线；2026-10-14 审计判定过薄，已重写 |
