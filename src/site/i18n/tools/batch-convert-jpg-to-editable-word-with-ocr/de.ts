/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / de).
 * Lokales H1: Mehrere JPG mit OCR in bearbeitbares Word umwandeln.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: 'Erweiterte Einstellungen (optional)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'Legen Sie mehrere gedruckte Fotos oder Screenshots ab, klicken Sie auf Alle umwandeln und dann auf Word herunterladen. Jedes Foto wird ein Abschnitt: die Überschrift ist der Dateiname, der Text ist editierbar; das Originalfoto steht standardmäßig darüber zum Abgleich. Ein unscharfes Bild wird übersprungen. Dateien bleiben auf Ihrem Gerät und gehen nicht auf einen Server. Ein ZIP mit TXT? Nutzen Sie Mehrere JPG mit OCR in Text umwandeln.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: 'JPG, PNG oder WebP wählen',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: 'Leeren',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: 'Hinweise',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: 'Datei',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: 'Pixel',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: 'Status',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: 'Alle umwandeln',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n} Dateien (max. 10)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'Mehrere JPG mit OCR in bearbeitbares Word umwandeln: Warteschlange, Alle umwandeln, Word herunterladen — bleibt auf dem Gerät, geht nicht auf einen Server.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'Legen Sie mehrere JPG ab und laden Sie eine Word-Datei herunter, die Sie bearbeiten können. Die Erkennung läuft in diesem Tab, Foto für Foto; Dateien bleiben auf Ihrem Gerät und gehen nicht auf einen Server. Schritte: Bilder hinzufügen, Alle umwandeln, Word herunterladen. Beispiel: zwei Druckmuster werden zwei Abschnitte mit Überschrift und optionalem Foto. Man sucht auch JPG zu Word mit OCR. Ein fehlgeschlagenes Foto wird übersprungen. Das TXT-ZIP liegt auf der Stapel-Textseite.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: 'Word herunterladen',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: 'Mehrere Fotos hier ablegen (max. 10). Die Verarbeitung bleibt in diesem Tab.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: 'Zuerst Fotos hinzufügen.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: 'Dieser Browser konnte die Word-Datei nicht bauen. Bitte einen aktuellen Browser nutzen.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty:
		'Kein gedruckter Text gefunden. Übersprungen. Eine schärfere Druckseite versuchen, keine Handschrift.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'Die OCR-Engine ließ sich nicht laden. Neu laden, dann Alle umwandeln. Fertige Abschnitte bleiben herunterladbar.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: 'Dieses Bild ließ sich nicht lesen. JPEG, PNG oder WebP verwenden. Übersprungen.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: 'Diese Seite liest Fotos, keine PDF. Die Datei wurde nicht hinzugefügt.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: 'Größer als 12 MB. Zuerst komprimieren oder zuschneiden. Übersprungen.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: 'Höchstens 10 Fotos. Weitere wurden nicht aufgenommen.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'Beispiel laden fügt sample-1.jpg (ONLINEFREETOOLS und The quick brown fox) und sample-2.jpg (SAMPLE TWO und 印刷体样例) hinzu, führt Alle umwandeln aus und aktiviert Word herunterladen mit zwei betitelten Abschnitten.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: 'Beispiel',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'Nein. Die Fotos bleiben in diesem Browser-Tab. Engine und Word-Skript kommen von dieser Website; Dateien gehen nicht auf unsere Server.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'Mehrere JPG mit OCR in Text umwandeln lädt ein ZIP aus TXT. Hier entsteht eine bearbeitbare Word-Datei, ein Abschnitt pro Foto. Gleiche Engine, andere Aufgabe.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'Bilder zu Word setzt Fotos als Grafiken ein — Buchstaben sind nicht markierbar. Hier schreibt OCR Absätze, die Sie ändern. Das Originalfoto ist optional zum Abgleich.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4:
		'Nein. Dieses Foto wird übersprungen; der Rest kommt in dieselbe Word-Datei.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'Jedes gelungene Foto ist ein Abschnitt: Überschrift ist der Dateiname, dann optionales Bild, OCR-Absätze und ein Seitenumbruch. Spalten und Tabellen kopieren das Original-Layout nicht.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'Nein. Diese Seite nimmt kein PDF. Ein gescanntes PDF nach Word ist ein anderes Tool (nicht diese URL). Ein digitales PDF mit Textebene gehört zu PDF in ein Word-Dokument umwandeln.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'Druckschrift funktioniert am besten. Verbundene Handschrift scheitert oft in dieser Zeile. Das ist kein Handschrift-Produkt.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'Ja: JPEG, PNG und WebP teilen die Warteschlange. Auch ein einzelnes Foto lädt Word, nicht TXT. Für ein einzelnes Bild zu Text nutzen Sie Ein JPG mit OCR in Text umwandeln.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: 'Werden meine Fotos hochgeladen?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: 'Was unterscheidet das von mehreren JPG mit OCR in Text?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: 'Was unterscheidet das von Bilder zu Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: 'Ist die Word-Datei leer, wenn ein Foto scheitert?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: 'Wie sieht jeder Abschnitt in Word aus?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: 'Kann ich ein gescanntes PDF für OCR nach Word ablegen?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: 'Funktioniert Handschrift?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: 'Kann ich PNG nutzen, oder nur ein JPG?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'Machen Sie aus einem Stapel Druckfotos eine bearbeitbare Word-Datei: Bilder hinzufügen, Alle umwandeln klicken (die Engine lädt beim ersten Klick und liest Foto für Foto), dann Word herunterladen.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: 'Mehrere JPG, PNG oder WebP ablegen (oder Dateien wählen).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2:
		'Optional: Sprachchip für den ganzen Stapel wählen (Chinesisch und Englisch sind Standard).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'Auf Alle umwandeln klicken — der erste Lauf lädt die OCR-Engine in diesem Tab und liest dann Foto für Foto. Ein fehlgeschlagenes Foto wird übersprungen.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'Auf Word herunterladen klicken — ein Dokument mit einem Abschnitt pro Foto (Überschrift, optionales Bild, editierbarer Text).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: 'So funktioniert es',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: 'Arabisch',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: 'Englisch',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: 'Japanisch',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: 'Erkennungssprache für den ganzen Stapel',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: 'Chinesisch',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: 'Chinesisch + Englisch',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: 'Längste Kante vor dem Lesen (px)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: 'Standard 2048. Kleiner entlastet das Handy.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'Standardmäßig an. Jeder Abschnitt zeigt das Foto über den OCR-Absätzen zum Abgleich in Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: 'Originalfoto über dem Text einfügen',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'Warteschlange bis 10 Fotos. Überschreitet die längste Kante das Limit, wird verkleinert und in visueller Reihenfolge gelesen. Ein OCR-Worker läuft seriell. Eine fehlgeschlagene Zeile wird übersprungen; gelungene werden Abschnitte einer Word-Datei.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'Jedes gelungene Foto ist ein Word-Abschnitt: Überschrift 1 ist der Dateiname, dann optionales Bild, OCR-Absätze und Seitenumbruch. Das ist JPG zu Word mit OCR für einen Stapel, kein TXT-ZIP.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2:
		'Dateien bleiben auf Ihrem Gerät; sie gehen nicht auf einen Server. Skripte kommen von dieser Website.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'Handschrift, starkes Weichzeichnen und starke Perspektive scheitern oft in dieser Zeile. Tabellen werden Zeilen in Lesereihenfolge. Spalten kopieren die Originalseite nicht.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'Kein PDF. Das TXT-ZIP liegt bei Mehrere JPG mit OCR in Text umwandeln. Fotos ohne OCR bei Bilder zu Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: 'Was Sie erwarten sollten',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: 'Beispiel laden',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: 'Fertig',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: 'In der Warteschlange',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: 'Liest',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: 'Übersprungen',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: 'Fertig.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: 'OCR-Engine wird geladen…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: 'Word-Datei wird gebaut…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: 'Mehrere JPG mit OCR in bearbeitbares Word umwandeln',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1:
		'Fotografieren Sie mehrere Handzettel-Seiten und laden Sie eine Word-Datei zum Umbenennen.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2:
		'Speisekarten-Fotos in ein Dokument mit Bild über jedem OCR-Abschnitt zum Abgleich.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3:
		'Fehler-Screenshots in eine bearbeitbare Word-Datei für eine Kollegin oder einen Kollegen.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: 'Wofür das passt',
};

export default de;
