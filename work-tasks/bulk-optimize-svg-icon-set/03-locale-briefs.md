# Locale briefs

Master: en. **状态**：`i18n-done`。

Batches authored and reviewed: en master; zh/es/ja; fr/de/pt; ar/id/ru. Runtime acceptance is tracked separately in notes.md.

- [x] 清单前检索覆盖已做
- [x] 用户意图审查已做

Avoid parameter-list titles, perfect accuracy, lossless format preservation when re-encoding, security guarantees, or claims that OCR outputs a searchable PDF. UI language is distinct from OCR language. Privacy means files stay on the device and are not uploaded.

## en
Search terms: Batch optimize SVG icons; compress SVG icons in bulk; check SVG references.
Title/H1: Batch optimize SVG icons.
Buttons: Choose files → Process → Download; Load sample; Clear.
Example vocabulary: The sample uses a gradient and a use element pointing to a path ID. Cleanup removes comments and metadata while both previews should keep the same colored square.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## zh
Search terms: 批量优化 SVG 图标; SVG 图标批量压缩；SVG 引用检查.
Title/H1: 批量优化 SVG 图标.
Buttons: 选择文件 → 开始处理 → 下载结果; 载入样例; 清空.
Example vocabulary: 样例中有渐变和引用路径 ID 的 use 元素。删除注释和元数据后，两张预览应仍显示相同的彩色方块。
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## es
Search terms: Optimizar iconos SVG por lotes; comprimir varios SVG; comprobar referencias SVG.
Title/H1: Optimizar iconos SVG por lotes.
Buttons: Elegir archivos → Procesar → Descargar; Cargar ejemplo; Borrar.
Example vocabulary: El ejemplo tiene un degradado y un elemento use que apunta al ID de un trazado. Tras quitar comentarios y metadatos, ambas vistas deben mostrar el mismo cuadrado de colores.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ar
Search terms: تحسين أيقونات SVG دفعة واحدة; ضغط ملفات SVG؛ فحص مراجع أيقونات SVG.
Title/H1: تحسين أيقونات SVG دفعة واحدة.
Buttons: اختيار الملفات → معالجة → تنزيل; تحميل مثال; مسح.
Example vocabulary: يستخدم المثال تدرجاً وعنصر use يشير إلى معرّف مسار. بعد حذف التعليقات والبيانات الوصفية يجب أن تعرض المعاينتان المربع الملون نفسه.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## pt
Search terms: Otimizar ícones SVG em lote; comprimir vários SVGs; verificar referências SVG.
Title/H1: Otimizar ícones SVG em lote.
Buttons: Escolher arquivos → Processar → Baixar; Carregar exemplo; Limpar.
Example vocabulary: O exemplo usa um gradiente e um elemento use apontando para o ID de um caminho. Depois da limpeza, as duas prévias devem mostrar o mesmo quadrado colorido.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## id
Search terms: Optimalkan ikon SVG sekaligus; kompres banyak SVG; periksa referensi SVG.
Title/H1: Optimalkan ikon SVG sekaligus.
Buttons: Pilih berkas → Proses → Unduh; Muat contoh; Bersihkan.
Example vocabulary: Contoh memakai gradien dan elemen use yang merujuk ID jalur. Setelah komentar dan metadata dibuang, kedua pratinjau seharusnya menampilkan kotak berwarna yang sama.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## fr
Search terms: Optimiser des icônes SVG par lot; compresser plusieurs SVG ; vérifier les références SVG.
Title/H1: Optimiser des icônes SVG par lot.
Buttons: Choisir des fichiers → Traiter → Télécharger; Charger un exemple; Effacer.
Example vocabulary: L’exemple contient un dégradé et un élément use ciblant l’ID d’un tracé. Après nettoyage, les deux aperçus doivent montrer le même carré coloré.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ja
Search terms: SVGアイコンを一括最適化; SVGの一括圧縮；SVG参照切れの確認.
Title/H1: SVGアイコンを一括最適化.
Buttons: ファイルを選択 → 処理する → ダウンロード; サンプルを試す; クリア.
Example vocabulary: サンプルはグラデーションとパスIDを参照するuse要素を含みます。コメントとメタデータを削除した後も同じ色付きの四角が表示されるはずです。
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ru
Search terms: Оптимизировать значки SVG пакетом; сжать несколько SVG; проверить ссылки SVG.
Title/H1: Оптимизировать значки SVG пакетом.
Buttons: Выбрать файлы → Обработать → Скачать; Загрузить пример; Очистить.
Example vocabulary: Пример содержит градиент и элемент use со ссылкой на ID пути. После удаления комментариев и метаданных оба превью должны показывать одинаковый цветной квадрат.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## de
Search terms: SVG-Symbole stapelweise optimieren; mehrere SVGs komprimieren; SVG-Referenzen prüfen.
Title/H1: SVG-Symbole stapelweise optimieren.
Buttons: Dateien auswählen → Verarbeiten → Herunterladen; Beispiel laden; Leeren.
Example vocabulary: Das Beispiel nutzt einen Verlauf und ein use-Element mit Verweis auf eine Pfad-ID. Nach der Bereinigung sollten beide Vorschauen dasselbe farbige Quadrat zeigen.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## Coverage rounds
| Round | Date | Review | Result |
| --- | --- | --- | --- |
| 0b | 2026-09-21 | Reviewed existing neighbor and user-selected task before source creation. | Kept a task-specific title and explicit output; no duplicate single-file page or invented SERP statistics. |
| 1b | 2026-09-21 | English master limits optimization to conservative XML cleanup and distinguishes per-file reference validation from project-level imports; preserved IDs and previews are concrete benefits. | Output claims and button order match the authored interface; title remains a concrete task. |
| 2b | 2026-09-21 | Reviewed en, zh, es, ja and the other six locales: conservative cleanup, preserved IDs, per-file references and before/after previews are described without promising full SVGO or guaranteed savings. | Output claims and button order match the authored interface; title remains a concrete task. |

- [x] 检索覆盖已优化：批量 SVG 优化、引用检查和压缩对比的落点在十语保持清晰。
