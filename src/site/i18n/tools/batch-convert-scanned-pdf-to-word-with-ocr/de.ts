/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / de).
 * Lokales H1: Gescannte PDFs mit OCR in Word umwandeln.
 * Schlüssel wie en.ts; Sätze eigenständig, keine englische Satzschablone, keine Kunstwörter.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsche UI- und Hilfetexte dieser Werkzeugseite (Buttons aus dem Locale-Brief). */
const de: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: 'Erweiterte Einstellungen (optional)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'Aus Papier-PDFs wird Word: gescannte PDFs ablegen, Alle umwandeln, Word herunterladen. Standard ist eine Word-Datei für den ganzen Stapel; wahlweise eine Word-Datei pro PDF (mehrere Treffer → ZIP herunterladen). Dateiname als Überschrift, gelesene Seite als Absätze, Scanbild standardmäßig darüber zum Abgleich. Eine unscharfe Seite wird übersprungen, der Rest bleibt im selben Dokument. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload. Digitale PDFs mit Textschicht: PDF in ein Word-Dokument umwandeln. Fotos: Mehrere JPG mit OCR in bearbeitbares Word umwandeln.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: 'PDF-Dateien wählen',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: 'Leeren',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: 'Datei',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: 'Hinweise',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: 'Seiten',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: 'Status',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: 'Alle umwandeln',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n} Dateien (max. 5, 20 Seiten)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'Gescannte PDFs mit OCR in Word umwandeln: in die Warteschlange, Alle umwandeln, Word herunterladen — Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'Gescanntes PDF zu Word läuft in diesem Tab: jede Seite wird gezeichnet, gelesen und in einer editierbaren DOCX gesammelt. Ablauf: PDFs hinzufügen, Alle umwandeln, Word herunterladen. Beispiel: ein zweiseitiger Druckscan wird ein Word mit Überschrift und optionalen Seitenbildern. Gesucht wird auch OCR PDF zu Word und mehrere Scans zu Word. Dateien bleiben auf Ihrem Gerät, ohne Server-Upload. Fertige Textschicht: PDF in ein Word-Dokument umwandeln. Fotos: Mehrere JPG mit OCR in bearbeitbares Word umwandeln.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: 'Word herunterladen',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: 'ZIP herunterladen',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: 'Gescannte PDFs hier ablegen (max. 5 Dateien, 20 Seiten). Die Verarbeitung bleibt in diesem Tab.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: 'Zuerst gescannte PDFs hinzufügen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: 'Dieser Browser konnte die Word-Datei nicht bauen. Bitte einen aktuellen Browser versuchen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: 'Dieser Browser konnte die ZIP-Datei nicht bauen. Bitte einen aktuellen Browser versuchen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty:
		'Auf dieser Seite kein gedruckter Text. Übersprungen. Schärferen Scan nehmen, keine Handschrift.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: 'Dieses PDF ist passwortgeschützt. Nicht aufgenommen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'PDF-Zeichnung oder OCR-Engine ließ sich nicht laden. Neu laden, dann Alle umwandeln. Fertige Seiten bleiben herunterladbar.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'Hier gehören gescannte PDFs hin, keine Fotos. JPG, PNG oder WebP: Mehrere JPG mit OCR in bearbeitbares Word umwandeln. Diese Datei wurde nicht aufgenommen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: 'Dieses PDF ließ sich nicht lesen. Übersprungen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: 'Der PDF-Renderer lud in diesem Tab nicht. Neu laden und erneut versuchen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: 'Größer als 12 MB. Zuerst komprimieren. Nicht aufgenommen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: 'Höchstens 5 PDFs. Extra-Dateien wurden nicht aufgenommen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages: 'Ein Stapel liest höchstens 20 Seiten. Extra-Dateien wurden nicht aufgenommen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'Beispiel laden legt sample-scan.pdf ein (Seite 1: ONLINEFREETOOLS und The quick brown fox; Seite 2: SAMPLE TWO und Printed sample page), startet Alle umwandeln und schaltet Word herunterladen frei — eine Überschrift, zwei Seiten.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: 'Beispiel',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'Nein. Die PDFs bleiben in diesem Browser-Tab. Zeichen-, OCR- und Word-Skripte kommen von dieser Website; Dateien gehen nicht auf unsere Server.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'PDF in ein Word-Dokument umwandeln kopiert eine vorhandene Textschicht und macht kein OCR. Hier wird jede Seite gezeichnet und das Bild gelesen, deshalb wird ein Scan ohne markierbaren Text trotzdem zu Absätzen. Wenn Wörter schon markierbar sind, dorthin.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'Mehrere JPG mit OCR in bearbeitbares Word umwandeln ist eine Foto-Warteschlange. Hier nur PDF. Ein abgelegtes JPG wird absichtlich abgelehnt.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'Nein. Die fehlgeschlagene Seite wird übersprungen; die übrigen Seiten und PDFs landen in derselben Word-Datei.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'Im Standard «eine Word-Datei für den Stapel» ist jedes gelungene PDF eine Überschrift (Dateiname). Jede gelungene Seite: optionales Bild, OCR-Absätze, Seitenumbruch. Getrennte Dokumente: auf eine Word-Datei pro PDF umschalten. Tabellen und Spalten kopieren das Original-Layout nicht.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'Nein. Fotos gehören zu Mehrere JPG mit OCR in bearbeitbares Word umwandeln. Diese Ablagezone nimmt nur PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'Druckschrift klappt am besten. Verbundene Handschrift scheitert auf dieser Seite oft. Das ist kein Handschrift-Produkt.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'Ausgabe ist Word, kein TXT und kein durchsuchbares PDF, das zurückgeschrieben würde. Wer gescanntes PDF zu Word, Scan zu Word oder OCR PDF zu Word für einen Papierscan sucht, ist hier richtig. Textschicht-Dump: Text aus PDF extrahieren.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'Höchstens 5 PDFs, je 12 MB, 20 Seiten im ganzen Stapel. Ein einzelnes PDF nutzt ebenfalls Alle umwandeln und Word herunterladen; es gibt keine zweite Adresse für eine Einzeldatei.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'Ja. Eine Word-Datei pro PDF wählen, dann Alle umwandeln. Ein gelungenes PDF bleibt bei Word herunterladen. Zwei oder mehr gelungene PDFs nutzen ZIP herunterladen, mit einer .docx je Eingabedatei. Zusammenführen in eine Word-Datei ist der Standard.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: 'Werden die PDFs auf einen Server geschickt?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: 'Im PDF lässt sich Text markieren. Gehört das zu PDF in ein Word-Dokument umwandeln?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: 'Ich habe JPG-Fotos, kein PDF. Wohin damit?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: 'Eine Seite ist fehlgeschlagen. Ist die Word-Datei dann leer?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: 'Wie sieht die Word-Datei innen aus?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: 'Darf ich JPG hier ablegen?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: 'Funktioniert handschriftliches OCR hier?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: 'Bekomme ich TXT oder ein durchsuchbares PDF — oder nur Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: 'Welche Datei- und Seitengrenzen gelten?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: 'Geht auch eine Word-Datei pro PDF statt einer zusammengeführten?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'Aus einem Papierscan wird editierbares Word: PDFs hinzufügen, Alle umwandeln klicken (erster Klick lädt Zeichnung und OCR in diesem Tab, dann Seite für Seite), danach Word herunterladen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: 'Eine oder mehrere gescannte PDFs ablegen (oder Dateien wählen).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2: 'Optional: Sprachchip für den ganzen Stapel (Standard Chinesisch und Englisch).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'Optional: eine Word-Datei für den Stapel belassen oder eine Word-Datei pro PDF wählen (mehrere gelungene PDFs → ZIP herunterladen).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'Alle umwandeln klicken — der erste Lauf lädt PDF-Zeichnung und OCR in diesem Tab, dann liest er Seite für Seite. Eine fehlgeschlagene Seite wird übersprungen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'Word herunterladen klicken — oder ZIP herunterladen, wenn eine Word-Datei pro PDF gewählt ist und mehr als eine Datei gelungen ist.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: 'So geht’s',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: '{s}s vergangen',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: 'Neu laden, dann Alle umwandeln. Bereits gelesene Seiten bleiben herunterladbar.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: 'Umwandlung gestoppt',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_api: "Erkenner wird gestartet…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_core: "Erster Lauf: OCR-Engine (~4 MB) wird geladen. Tab offen lassen — das kann eine Minute dauern.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_docx: "Word-Baukasten wird geladen (~0,7 MB)…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_lang: "Erster Lauf: Sprachdaten (einige MB) werden geladen. Später wird das wiederverwendet.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_pdf: "Erster Lauf: PDF-Zeichnung wird geladen. Tab offen lassen.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_script: "OCR-Skripte werden geladen…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: 'Fertig. Nächster Schritt: Word herunterladen, oder ZIP herunterladen, wenn eine Word-Datei pro PDF gewählt ist.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: 'Laden',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: 'Packen',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: 'Lesen',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: 'Zeichnen',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: 'Fortschritt der Umwandlung',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: 'Start…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: 'Arabisch',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: 'Englisch',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: 'Japanisch',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: 'Erkennungssprache für den ganzen Stapel',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: 'Chinesisch',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: 'Chinesisch + Englisch',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: 'Längste Kante vor dem Lesen (px)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: 'Standard 2048. Kleiner entlastet das Handy.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint:
		'Standard ist eine Word-Datei. Eine Word-Datei pro PDF: Word herunterladen bei einem Treffer, ZIP herunterladen bei mehreren.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'Word-Export',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: 'Eine Word-Datei für den ganzen Stapel',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: 'Eine Word-Datei pro PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint:
		'Standardmäßig an. Jede Word-Seite zeigt den Scan über den OCR-Absätzen zum Abgleich.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: 'Seitenbild über dem Text einfügen',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · Seite {page}/{pages}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'Warteschlange bis 5 Dateien und 20 Seiten. Jede Seite wird gezeichnet, verkleinert wenn die lange Kante über dem Limit liegt, dann in visueller Reihenfolge gelesen. Ein OCR-Worker läuft nacheinander. Fehlgeschlagene Seite übersprungen. Export ist entweder eine zusammengeführte Word-Datei oder eine Word-Datei pro PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'Standard: eine Word-Datei, Überschrift pro PDF, optionales Bild und OCR-Absätze pro Seite, dann Umbruch. Eine Word-Datei pro PDF: jede gelungene Eingabe wird zur eigenen .docx; mehrere Dateien laden als ZIP. Kein TXT-ZIP.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2:
		'Dateien bleiben auf Ihrem Gerät; sie gehen nicht auf einen Server. Skripte kommen von dieser Website.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'Handschrift, starkes Weichzeichnen und starke Perspektive scheitern auf dieser Seite oft. Tabellen werden Zeilen in Lesereihenfolge. Spalten kopieren den Originalscan nicht. Ein digitales PDF mit Textschicht wird hier trotzdem gerastert; nur die Schicht brauchen Sie bei PDF in ein Word-Dokument umwandeln.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'Kein Foto-Eingang. JPG-Stapel: Mehrere JPG mit OCR in bearbeitbares Word umwandeln. Es wird kein durchsuchbares PDF geschrieben und kein TXT heruntergeladen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: 'Was Sie erwarten sollten',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: 'Beispiel laden',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: 'Fertig',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: 'In der Warteschlange',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: 'Liest',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: 'Zeichnet',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: 'Übersprungen',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: 'Läuft',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: 'Fertig.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: "Beim ersten Mal werden PDF-Zeichnung und OCR-Engine (~4 MB) geladen. Tab offen lassen…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: 'Word-Datei wird gebaut…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: 'Gescannte PDFs mit OCR in Word umwandeln',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1:
		'Gescannte Vorlesungs-PDF ablegen und eine Word-Datei zum Umbenennen der Überschriften holen.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2:
		'Zwei gescannte Verträge in einem Abgleichdokument bündeln, Seitenbild über jedem OCR-Abschnitt.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3:
		'Mehrseitigen Rechnungsscan nach Word bringen, damit eine Kollegin oder ein Kollege editiert (Rechnungsfelder werden nicht extrahiert).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: 'Passt gut, wenn',
};

export default de;
