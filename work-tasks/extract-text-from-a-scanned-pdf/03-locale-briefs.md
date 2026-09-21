# Locale briefs

Master: en. **状态**：`i18n-done`。

Batches authored and reviewed: en master; zh/es/ja; fr/de/pt; ar/id/ru. Runtime acceptance is tracked separately in notes.md.

- [x] 清单前检索覆盖已做
- [x] 用户意图审查已做

Avoid parameter-list titles, perfect accuracy, lossless format preservation when re-encoding, security guarantees, or claims that OCR outputs a searchable PDF. UI language is distinct from OCR language. Privacy means files stay on the device and are not uploaded.

## en
Search terms: Extract text from a scanned PDF; scanned PDF to TXT; OCR PDF to plain text.
Title/H1: Extract text from a scanned PDF.
Buttons: Choose files → Process → Download; Load sample; Clear.
Example vocabulary: Load sample creates a scanned page reading “SCAN SAMPLE”, “Order 1042” and “Total 125 dollars”, then runs OCR. Compare those words with the editable result.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## zh
Search terms: 扫描 PDF 转 TXT; 扫描件文字提取；PDF 图片识别文字.
Title/H1: 扫描 PDF 转 TXT.
Buttons: 选择文件 → 开始处理 → 下载结果; 载入样例; 清空.
Example vocabulary: 点击「载入样例」会生成并识别一页扫描 PDF，其中含有 SCAN SAMPLE、Order 1042 和 Total 125 dollars。请将这些字与结果对照，检查识别是否正确。
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## es
Search terms: Extraer texto de un PDF escaneado; PDF escaneado a TXT; reconocer texto de un PDF.
Title/H1: Extraer texto de un PDF escaneado.
Buttons: Elegir archivos → Procesar → Descargar; Cargar ejemplo; Borrar.
Example vocabulary: Cargar ejemplo genera una página con SCAN SAMPLE, Order 1042 y Total 125 dollars y ejecuta el OCR en inglés. Compara el resultado antes de descargarlo.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ar
Search terms: استخراج النص من PDF ممسوح ضوئياً; تحويل PDF ممسوح إلى TXT؛ التعرف على نص صفحات PDF.
Title/H1: استخراج النص من PDF ممسوح ضوئياً.
Buttons: اختيار الملفات → معالجة → تنزيل; تحميل مثال; مسح.
Example vocabulary: ينشئ زر تحميل مثال صورة صفحة تحمل SCAN SAMPLE وOrder 1042 وTotal 125 dollars، ثم يتعرف عليها باللغة الإنجليزية. قارن الكلمات بالنتيجة.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## pt
Search terms: Extrair texto de PDF digitalizado; PDF digitalizado para TXT; reconhecer texto de PDF.
Title/H1: Extrair texto de PDF digitalizado.
Buttons: Escolher arquivos → Processar → Baixar; Carregar exemplo; Limpar.
Example vocabulary: Carregar exemplo cria uma página com SCAN SAMPLE, Order 1042 e Total 125 dollars e executa o OCR em inglês. Compare essas palavras com o texto obtido.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## id
Search terms: Ekstrak teks dari PDF hasil pindai; PDF pindai ke TXT; mengenali tulisan dalam PDF.
Title/H1: Ekstrak teks dari PDF hasil pindai.
Buttons: Pilih berkas → Proses → Unduh; Muat contoh; Bersihkan.
Example vocabulary: Muat contoh membuat gambar halaman bertuliskan SCAN SAMPLE, Order 1042, dan Total 125 dollars, lalu menjalankan OCR bahasa Inggris. Cocokkan hasilnya dengan kata-kata tersebut.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## fr
Search terms: Extraire le texte d’un PDF numérisé; PDF numérisé en TXT ; reconnaître le texte d’un scan.
Title/H1: Extraire le texte d’un PDF numérisé.
Buttons: Choisir des fichiers → Traiter → Télécharger; Charger un exemple; Effacer.
Example vocabulary: Le bouton Charger un exemple produit un scan portant SCAN SAMPLE, Order 1042 et Total 125 dollars. L’OCR anglais lit réellement cette image : vérifiez les mots obtenus.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ja
Search terms: スキャンPDFをテキストに変換; スキャンPDFをTXTに変換；PDF画像から文字を抽出.
Title/H1: スキャンPDFをテキストに変換.
Buttons: ファイルを選択 → 処理する → ダウンロード; サンプルを試す; クリア.
Example vocabulary: サンプルにはSCAN SAMPLE、Order 1042、Total 125 dollarsが画像として入っています。英語のOCRを実行するので、編集欄の文字と見比べてください。
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## ru
Search terms: Извлечь текст из сканированного PDF; скан PDF в TXT; распознавание текста PDF.
Title/H1: Извлечь текст из сканированного PDF.
Buttons: Выбрать файлы → Обработать → Скачать; Загрузить пример; Очистить.
Example vocabulary: Пример создаёт страницу-изображение со словами SCAN SAMPLE, Order 1042 и Total 125 dollars. Запускается английское OCR; сравните результат с этими надписями.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## de
Search terms: Text aus einem gescannten PDF extrahieren; gescanntes PDF in TXT; OCR für PDF-Text.
Title/H1: Text aus einem gescannten PDF extrahieren.
Buttons: Dateien auswählen → Verarbeiten → Herunterladen; Beispiel laden; Leeren.
Example vocabulary: Das Beispiel erzeugt eine Bildseite mit SCAN SAMPLE, Order 1042 und Total 125 dollars. Die englische OCR wird ausgeführt; vergleichen Sie den Text mit diesen Wörtern.
Review: output format, failure behavior and privacy agree with the implemented scope in 02.

## Coverage rounds
| Round | Date | Review | Result |
| --- | --- | --- | --- |
| 0b | 2026-09-21 | Reviewed existing neighbor and user-selected task before source creation. | Kept a task-specific title and explicit output; no duplicate single-file page or invented SERP statistics. |
| 1b | 2026-09-21 | Reviewed English OCR-to-TXT wording: explicitly separated text extraction from Word and searchable-PDF output; documented four recognition languages and editable TXT. | Output claims and button order match the authored interface; title remains a concrete task. |
| 2b | 2026-09-21 | Reviewed en, zh, es, ja and all remaining locales: native task titles, actual TXT direction, page limits and explicit distinction between interface language and four OCR languages. | Output claims and button order match the authored interface; title remains a concrete task. |

- [x] 检索覆盖已优化：各语言标题与 PDF→TXT 产物一致；非支持 OCR 语种明确说明。
