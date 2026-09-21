# Locale briefs

Master: en. **状态**：`i18n-done`。

Batches authored and reviewed: en master; zh/es/ja; fr/de/pt; ar/id/ru. Runtime acceptance is tracked separately in notes.md.

- [x] 清单前检索覆盖已做
- [x] 用户意图审查已做

Avoid parameter-list titles, perfect accuracy, lossless format preservation when re-encoding, security guarantees, or claims that OCR outputs a searchable PDF. UI language is distinct from OCR language. Privacy means files stay on the device and are not uploaded.

## en
Search terms: Batch watermark PDF drafts; watermark multiple PDFs; add draft stamp to PDFs.
Title/H1: Batch watermark PDF drafts.
Buttons: Choose files → Process → Download; Load sample; Clear.
Example vocabulary: The automatic sample has three pages: portrait, a rotated smaller page and a landscape page with an offset crop box. Download it to inspect the watermark placement.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## zh
Search terms: 批量给 PDF 添加水印; 多份 PDF 加水印；PDF 草稿标记.
Title/H1: 批量给 PDF 添加水印.
Buttons: 选择文件 → 开始处理 → 下载结果; 载入样例; 清空.
Example vocabulary: 自动样例含三页：竖版、旋转的小页面，以及带偏移裁切框的横版页。下载后可对照检查水印位置。
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## es
Search terms: Añadir marca de agua a varios PDF; marca de agua en varios PDF; marcar PDF como borrador.
Title/H1: Añadir marca de agua a varios PDF.
Buttons: Elegir archivos → Procesar → Descargar; Cargar ejemplo; Borrar.
Example vocabulary: El ejemplo tiene tres páginas: vertical, pequeña girada y horizontal con área de recorte desplazada. Descárgalo para comprobar la posición de las marcas.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ar
Search terms: إضافة علامة مائية إلى عدة ملفات PDF; علامة مائية لملفات PDF؛ وسم مستندات PDF كمسودات.
Title/H1: إضافة علامة مائية إلى عدة ملفات PDF.
Buttons: اختيار الملفات → معالجة → تنزيل; تحميل مثال; مسح.
Example vocabulary: يتضمن المثال ثلاث صفحات: عمودية وصغيرة مدوّرة وأفقية ذات منطقة قص مزاحة. نزّله للتحقق من موضع العلامات.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## pt
Search terms: Adicionar marca d’água a vários PDFs; marca d’água em vários PDFs; marcar PDF como rascunho.
Title/H1: Adicionar marca d’água a vários PDFs.
Buttons: Escolher arquivos → Processar → Baixar; Carregar exemplo; Limpar.
Example vocabulary: O exemplo tem três páginas: retrato, uma pequena girada e paisagem com área de corte deslocada. Baixe para conferir a posição das marcas.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## id
Search terms: Tambahkan watermark ke banyak PDF; watermark beberapa PDF; tandai PDF sebagai draf.
Title/H1: Tambahkan watermark ke banyak PDF.
Buttons: Pilih berkas → Proses → Unduh; Muat contoh; Bersihkan.
Example vocabulary: Contoh berisi tiga halaman: potret, halaman kecil diputar, dan lanskap dengan area potong bergeser. Unduh untuk memeriksa posisi watermark.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## fr
Search terms: Ajouter un filigrane à plusieurs PDF; filigrane sur plusieurs PDF ; marquer des PDF comme brouillons.
Title/H1: Ajouter un filigrane à plusieurs PDF.
Buttons: Choisir des fichiers → Traiter → Télécharger; Charger un exemple; Effacer.
Example vocabulary: L’exemple comprend trois pages : portrait, petite page tournée et paysage avec recadrage décalé. Téléchargez-le pour vérifier le placement.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ja
Search terms: PDFにまとめて透かしを追加; 複数PDFに透かし；PDFに草稿の印を付ける.
Title/H1: PDFにまとめて透かしを追加.
Buttons: ファイルを選択 → 処理する → ダウンロード; サンプルを試す; クリア.
Example vocabulary: サンプルは縦長、回転した小さいページ、位置をずらした裁切枠を持つ横長の3ページです。ダウンロードして透かしの位置を確認できます。
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ru
Search terms: Добавить водяной знак на несколько PDF; водяной знак для нескольких PDF; пометить PDF как черновик.
Title/H1: Добавить водяной знак на несколько PDF.
Buttons: Выбрать файлы → Обработать → Скачать; Загрузить пример; Очистить.
Example vocabulary: В примере три страницы: книжная, маленькая повёрнутая и альбомная со смещённой областью обрезки. Скачайте его и проверьте положение знака.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## de
Search terms: Mehrere PDFs mit Wasserzeichen versehen; Wasserzeichen für mehrere PDFs; PDFs als Entwurf markieren.
Title/H1: Mehrere PDFs mit Wasserzeichen versehen.
Buttons: Dateien auswählen → Verarbeiten → Herunterladen; Beispiel laden; Leeren.
Example vocabulary: Das Beispiel enthält drei Seiten: Hochformat, eine kleine gedrehte Seite und Querformat mit versetztem Beschnittrahmen. Im Download lässt sich die Platzierung prüfen.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## Coverage rounds
| Round | Date | Review | Result |
| --- | --- | --- | --- |
| 0b | 2026-09-21 | Reviewed existing neighbor and user-selected task before source creation. | Kept a task-specific title and explicit output; no duplicate single-file page or invented SERP statistics. |
| 1b | 2026-09-21 | English master identifies the shared template, crop-box sizing, rotated-page handling and file-level skip semantics; watermark claims explicitly exclude protection and redaction. | Output claims and button order match the authored interface; title remains a concrete task. |
| 2b | 2026-09-21 | Reviewed en, zh, es, ja plus remaining locales: shared text template, per-page crop sizing, rotation and skipped-file reporting are consistent; no copy-protection promise. | Output claims and button order match the authored interface; title remains a concrete task. |

- [x] 检索覆盖已优化：十语区分可见水印与内容保护，步骤均对应现有设置和 ZIP 输出。
