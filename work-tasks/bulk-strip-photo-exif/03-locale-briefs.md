# Locale briefs

Master: en. **状态**：`i18n-done`。

Batches authored and reviewed: en master; zh/es/ja; fr/de/pt; ar/id/ru. Runtime acceptance is tracked separately in notes.md.

- [x] 清单前检索覆盖已做
- [x] 用户意图审查已做

Avoid parameter-list titles, perfect accuracy, lossless format preservation when re-encoding, security guarantees, or claims that OCR outputs a searchable PDF. UI language is distinct from OCR language. Privacy means files stay on the device and are not uploaded.

## en
Search terms: Bulk remove photo EXIF; batch photo metadata remover; remove GPS from photos.
Title/H1: Bulk remove photo EXIF.
Buttons: Choose files → Process → Download; Load sample; Clear.
Example vocabulary: The automatic sample generates a small JPEG and processes it into a PNG. Its ZIP contains the image and one CSV report row; your files replace the sample.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## zh
Search terms: 批量清除照片 EXIF; 批量删除照片定位；照片元数据清理.
Title/H1: 批量清除照片 EXIF.
Buttons: 选择文件 → 开始处理 → 下载结果; 载入样例; 清空.
Example vocabulary: 页面自动生成一张小 JPEG，并转为 PNG。下载包包含净图和一行 CSV 记录；选择自己的文件会替换样例。
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## es
Search terms: Quitar EXIF de varias fotos; eliminar metadatos de fotos; quitar GPS de imágenes.
Title/H1: Quitar EXIF de varias fotos.
Buttons: Elegir archivos → Procesar → Descargar; Cargar ejemplo; Borrar.
Example vocabulary: El ejemplo automático genera un JPEG pequeño y lo convierte a PNG. El ZIP contiene la imagen y una fila CSV; al elegir fotos se sustituye el ejemplo.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ar
Search terms: حذف بيانات EXIF من صور متعددة; إزالة بيانات الصور؛ حذف إحداثيات GPS من الصور.
Title/H1: حذف بيانات EXIF من صور متعددة.
Buttons: اختيار الملفات → معالجة → تنزيل; تحميل مثال; مسح.
Example vocabulary: ينشئ المثال التلقائي JPEG صغيراً ويحوله إلى PNG. يحتوي ZIP على الصورة وصف CSV واحد؛ اختيار ملفاتك يستبدل المثال.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## pt
Search terms: Remover EXIF de várias fotos; limpar metadados de fotos; remover GPS das imagens.
Title/H1: Remover EXIF de várias fotos.
Buttons: Escolher arquivos → Processar → Baixar; Carregar exemplo; Limpar.
Example vocabulary: O exemplo automático gera um JPEG pequeno e o converte em PNG. O ZIP contém a imagem e uma linha CSV; seus arquivos substituem o exemplo.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## id
Search terms: Hapus EXIF banyak foto sekaligus; bersihkan metadata foto; hapus lokasi GPS foto.
Title/H1: Hapus EXIF banyak foto sekaligus.
Buttons: Pilih berkas → Proses → Unduh; Muat contoh; Bersihkan.
Example vocabulary: Contoh otomatis membuat JPEG kecil lalu mengubahnya ke PNG. ZIP berisi gambar dan satu baris CSV; berkas Anda menggantikan contoh.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## fr
Search terms: Supprimer les EXIF de photos par lot; nettoyer les métadonnées des photos ; retirer le GPS des images.
Title/H1: Supprimer les EXIF de photos par lot.
Buttons: Choisir des fichiers → Traiter → Télécharger; Charger un exemple; Effacer.
Example vocabulary: L’exemple automatique crée un petit JPEG puis un PNG. Le ZIP contient l’image et une ligne CSV ; vos fichiers remplacent cet exemple.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ja
Search terms: 写真のEXIFを一括削除; 写真の位置情報をまとめて削除；画像メタデータの削除.
Title/H1: 写真のEXIFを一括削除.
Buttons: ファイルを選択 → 処理する → ダウンロード; サンプルを試す; クリア.
Example vocabulary: 自動サンプルでは小さなJPEGを生成してPNGへ変換します。ZIPには画像とCSVの1行が入り、自分の写真を選ぶとサンプルが置き換わります。
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ru
Search terms: Удалить EXIF у нескольких фотографий; очистить метаданные фото; убрать GPS из фотографий.
Title/H1: Удалить EXIF у нескольких фотографий.
Buttons: Выбрать файлы → Обработать → Скачать; Загрузить пример; Очистить.
Example vocabulary: Автопример создаёт небольшой JPEG и преобразует его в PNG. В ZIP входят изображение и строка CSV; ваши файлы заменяют пример.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## de
Search terms: EXIF aus mehreren Fotos entfernen; Fotometadaten stapelweise löschen; GPS aus Bildern entfernen.
Title/H1: EXIF aus mehreren Fotos entfernen.
Buttons: Dateien auswählen → Verarbeiten → Herunterladen; Beispiel laden; Leeren.
Example vocabulary: Das automatische Beispiel erzeugt ein kleines JPEG und wandelt es in PNG um. Das ZIP enthält ein Bild und eine CSV-Zeile; eigene Dateien ersetzen das Beispiel.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## Coverage rounds
| Round | Date | Review | Result |
| --- | --- | --- | --- |
| 0b | 2026-09-21 | Reviewed existing neighbor and user-selected task before source creation. | Kept a task-specific title and explicit output; no duplicate single-file page or invented SERP statistics. |
| 1b | 2026-09-21 | English master explicitly promises PNG re-encoding, not original-format losslessness; CSV includes failures and privacy copy distinguishes metadata from visible content. | Output claims and button order match the authored interface; title remains a concrete task. |
| 2b | 2026-09-21 | Reviewed en, zh, es, ja and remaining locales for PNG-only copies, 24-megapixel limits, orientation, per-file reporting and explicit non-anonymization caveat. | Output claims and button order match the authored interface; title remains a concrete task. |

- [x] 检索覆盖已优化：批量清理与 PNG 输出说明在十语保持一致，未宣传保留原格式。
