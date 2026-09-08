/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / de).
 * 当地主词：Mehrere JPG mit OCR in Text umwandeln.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: 'Erweiterte Einstellungen (optional)',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'Legen Sie mehrere gedruckte Fotos oder Screenshots ab, klicken Sie auf Alle umwandeln und laden Sie ein ZIP. Jedes Bild wird eine .txt; die kombinierte Datei trennt nach Dateinamen. Ein unscharfes Bild wird übersprungen. Dateien bleiben auf dem Gerät, ohne Server-Upload. Nur ein Foto? Nutzen Sie JPG mit OCR in Text umwandeln.',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: 'JPG, PNG oder WebP wählen',
	tool_batch_convert_jpg_to_text_with_ocr_clear: 'Leeren',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: 'Hinweise',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: 'Datei',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: 'Pixel',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: 'Status',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint:
		'Standard an. Das ZIP enthält combined.txt mit --- Dateiname --- zwischen den Fotos.',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'combined.txt ins ZIP legen',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: 'Alle umwandeln',
	tool_batch_convert_jpg_to_text_with_ocr_copied: 'Kopiert.',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: 'Kombinierten Text kopieren',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} Dateien (max. 10)',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'Mehrere JPG mit OCR in Text umwandeln: Warteschlange, Alle umwandeln, ZIP — auf dem Gerät, ohne Server-Upload.',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'Legen Sie mehrere JPG oder Screenshots ab und laden Sie ein ZIP mit Textdateien. Die Erkennung läuft in diesem Tab, Foto für Foto, ohne Server-Upload. Schritte: Bilder hinzufügen, Alle umwandeln, ZIP herunterladen. Beispiel: zwei gedruckte Musterfotos werden zwei TXT plus eine kombinierte Datei. Auch als Stapel-OCR gesucht. Ein Foto? Die Einzelseite.',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: 'ZIP herunterladen',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint:
		'Mehrere Fotos hier ablegen (max. 10). Die Verarbeitung bleibt in diesem Tab.',
	tool_batch_convert_jpg_to_text_with_ocr_empty: 'Zuerst Fotos hinzufügen.',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty:
		'Kein gedruckter Text. Übersprungen. Schärfere Druckseite, keine Handschrift.',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine:
		'OCR-Engine nicht geladen. Aktualisieren, dann Alle umwandeln. Fertige Zeilen bleiben ladbar.',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: 'ZIP ließ sich in diesem Browser nicht bauen. Neueren Browser versuchen.',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: 'Bild nicht lesbar. JPEG, PNG oder WebP. Übersprungen.',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: 'Diese Seite liest Fotos, keine PDF. Die Datei kam nicht in die Warteschlange.',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: 'Größer als 12 MB. Komprimieren oder zuschneiden. Übersprungen.',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: 'Höchstens 10 Fotos. Weitere wurden nicht übernommen.',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'Beispiel laden fügt sample-1.jpg und sample-2.jpg hinzu, führt Alle umwandeln aus und aktiviert ZIP herunterladen mit zwei TXT und combined.txt.',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: 'Beispiel',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1:
		'Nein. Fotos bleiben in diesem Tab. Engine- und ZIP-Skripte kommen von dieser Website; Dateien gehen nicht auf unsere Server.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'Die Einzelseite kopiert einen Text. Hier: Warteschlange, Alle umwandeln, fehlende Zeile überspringen, ZIP. Gleiche Engine, andere Aufgabe.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3:
		'Nein. Dieses Foto wird übersprungen, der Rest läuft weiter. Erfolgreiches landet im ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'Eine .txt pro Foto, Name wie das Original. Combined.txt ist standardmäßig dabei, mit --- Dateiname --- zwischen den Seiten — so werden mehrere JPG auf einmal Text.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'Für ein Foto: JPG mit OCR in Text umwandeln. Hier heißen die Knöpfe Alle umwandeln und ZIP herunterladen.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6: 'Ja. JPEG, PNG und WebP teilen die Warteschlange, ohne extra URL.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7:
		'Druckschrift klappt am besten. Handschrift scheitert oft in dieser Zeile. Kein Scan-Service vor Ort.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8:
		'Kein PDF und kein Tabellenblatt. Bearbeitbares OCR-Word liegt bei Mehrere JPG mit OCR in bearbeitbares Word umwandeln. Digitales PDF mit Textschicht gehört zu Text aus einem PDF extrahieren.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: 'Werden meine Fotos auf einen Server hochgeladen?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: 'Worin unterscheidet sich das von einem einzelnen JPG mit OCR?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: 'Stoppt der ganze Stapel, wenn ein Foto scheitert?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: 'Was steckt im ZIP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: 'Ich habe nur ein Foto. Kann ich die Seite trotzdem nutzen?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: 'Kann ich PNG oder WebP-Screenshots stapeln?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: 'Funktioniert Handschrift oder ein Scan-Service?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: 'Kann ich ein gescanntes PDF ablegen?',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'Machen Sie aus einem Stapel gedruckter Fotos ein ZIP mit Texten: Bilder hinzufügen, Alle umwandeln (die Engine lädt beim ersten Klick und liest Foto für Foto), dann ZIP herunterladen oder kombinierten Text kopieren.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: 'Mehrere JPG, PNG oder WebP ablegen (oder Dateien wählen).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2:
		'Optional: Sprache für den ganzen Stapel (Chinesisch und Englisch Standard).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3:
		'Alle umwandeln klicken — der erste Lauf lädt die Engine in diesem Tab und liest Foto für Foto. Ein fehlgeschlagenes Foto wird übersprungen.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4:
		'ZIP herunterladen (eine TXT pro Foto plus kombinierte Datei) oder kombinierten Text kopieren.',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: 'So funktioniert es',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: 'Arabisch',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: 'Englisch',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: 'Japanisch',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: 'Erkennungssprache für den ganzen Stapel',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: 'Chinesisch',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: 'Chinesisch + Englisch',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: 'Längste Kante vor dem Lesen (px)',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: 'Standard 2048. Am Handy kleiner = weniger Speicher.',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: 'Vorschau des kombinierten Texts',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'Höchstens 10 Fotos. Überschreitet die lange Kante das Limit, wird verkleinert. Ein OCR-Worker liest nacheinander. Fehlzeile übersprungen; erfolgreicher Text ins ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'ZIP-Namen folgen dem Original. Combined.txt (an) setzt --- Dateiname --- zwischen Fotos, wie ein fotografiertes Heft.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2:
		'Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen. Skripte kommen von dieser Website.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3:
		'Handschrift, starkes Unscharf und starke Perspektive scheitern oft in dieser Zeile. Tabellen werden Lesereihenfolge, kein CSV.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'Kein PDF, Word oder durchsuchbares PDF. Ein Foto zum Kopieren gehört zu JPG mit OCR in Text umwandeln.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: 'Was Sie erwarten sollten',
	tool_batch_convert_jpg_to_text_with_ocr_sample: 'Beispiel laden',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: 'Fertig',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: 'Wartend',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: 'Lesen',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: 'Übersprungen',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: 'Fertig.',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: 'OCR-Engine wird geladen…',
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: 'Mehrere JPG mit OCR in Text umwandeln',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1:
		'Mehrere Handout-Seiten fotografieren und ein ZIP mit TXT in die Notizen laden.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2:
		'Einen Stapel Chat- oder Fehler-Screenshots in Text, wenn Pixel nicht markierbar sind.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3:
		'Speisekartenfotos in combined.txt mit Dateinamen-Trennern legen und zum Korrekturlesen kopieren.',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: 'Wann es passt',
};

export default de;
