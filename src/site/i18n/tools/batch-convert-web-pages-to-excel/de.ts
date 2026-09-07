/**
 * i18n tool shard (batch-convert-web-pages-to-excel / de).
 * H1: Webseiten gesammelt in Excel umwandeln.
 * IG: HTML-Tabellenzellen in einer Arbeitsmappe — kein Screenshot, kein A4-PDF, keine Word-Prosa.
 */
import type { SiteLangDict } from '../../../types';

/** Sichtbare Texte für Web→Excel (de). */
const de: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: 'Erweiterte Einstellungen (optional)',
	tool_batch_convert_web_pages_to_excel_article:
		'Ziehen Sie HTML-Tabellen aus einer Liste öffentlicher URLs in eine Excel-Mappe: Jede Tabelle wird ein Blatt mit Zellen, die Sie filtern können. Fließtext und Screenshots bleiben draußen. Das ist kein A4-Druck-PDF und kein Word-Dokument. Jede Adresse holen wir einmal über den Server und speichern sie nicht. Eingefügtes HTML bleibt in diesem Tab. Drucken: Webseiten gesammelt in PDF umwandeln. Überschriften bearbeiten: HTML-Webseiten in ein Word-Dokument umwandeln.',
	tool_batch_convert_web_pages_to_excel_clear: 'Leeren',
	tool_batch_convert_web_pages_to_excel_col_file: 'Blätter',
	tool_batch_convert_web_pages_to_excel_col_status: 'Status',
	tool_batch_convert_web_pages_to_excel_col_url: 'URL',
	tool_batch_convert_web_pages_to_excel_convert: 'Alle konvertieren',
	tool_batch_convert_web_pages_to_excel_desc:
		'HTML-Tabellen aus einer URL-Liste in eine Excel-Mappe — kein Screenshot, kein PDF, kein Word.',
	tool_batch_convert_web_pages_to_excel_description:
		'Webseiten gesammelt in Excel umwandeln: HTML-Tabellen in eine .xlsx ziehen (HTML in Excel / HTML-Tabelle nach Excel). Kein Screenshot, kein A4-PDF. Schritte: URLs einfügen, Alle konvertieren, Excel herunterladen. Beispiel: Preisliste und Bestand werden zwei Blätter. Die URL wird einmal geholt und nicht gespeichert.',
	tool_batch_convert_web_pages_to_excel_download: 'Excel herunterladen',
	tool_batch_convert_web_pages_to_excel_empty: 'Mindestens eine Seiten-URL einfügen oder zu HTML einfügen wechseln.',
	tool_batch_convert_web_pages_to_excel_err_convert: 'Auf dieser Seite gibt es keine brauchbare HTML-Tabelle. Übersprungen.',
	tool_batch_convert_web_pages_to_excel_err_html_empty: 'Zuerst HTML mit einem <table> einfügen.',
	tool_batch_convert_web_pages_to_excel_err_load: 'Die Excel-Bibliothek wurde nicht geladen. Neu laden und nochmal versuchen.',
	tool_batch_convert_web_pages_to_excel_err_too_many: 'Höchstens 10 URLs. Extra-Zeilen kamen nicht dazu.',
	tool_batch_convert_web_pages_to_excel_err_url: 'Diese URL ließ sich nicht laden. Adresse prüfen — oder die Gegenseite blockiert Abrufe.',
	tool_batch_convert_web_pages_to_excel_err_url_empty: 'Diese Zeile ist keine gültige http(s)-URL. Übersprungen.',
	tool_batch_convert_web_pages_to_excel_example:
		'Beispiel laden füllt eine Preisliste und ein Bestandsraster, baut lokal eine Mappe aus zwei HTML-Tabellen (ohne die Live-Site) und aktiviert Excel herunterladen. Alle konvertieren holt die Adressen, die Sie eingefügt haben. HTML einfügen ist dieselbe Tabellenzuordnung ohne URL.',
	tool_batch_convert_web_pages_to_excel_example_title: 'Beispiel',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'Eingefügtes HTML verlässt diesen Tab nicht. Bei URLs schicken wir jede Adresse einmal, um HTML zu holen, und speichern nichts. Die .xlsx entsteht in Ihrem Browser.',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'Die Word-Seite mappt Überschriften, Listen und Absätze in ein editierbares .docx. Hier ignorieren wir Fließtext und kopieren nur HTML-Tabellenzellen in Excel-Blätter. Gleicher Abruf, anderes Artefakt.',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG sind Viewport-Screenshots (ZIP aus Bildern). PDF paginiert A4 zum Drucken. Hier Zahlen und Text, den Sie in Excel filtern: eine Mappe, kein Foto-ZIP.',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'Ja. Eine Zeile reicht für Webseite nach Excel. Erfolgreiche URLs teilen sich eine .xlsx mit mehreren Blättern.',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'Nein. Kein OCR, kein PDF-Parser. Wandeln Sie die HTML-Seite um oder fügen Sie das Tabellenmarkup ein. Haben Sie schon CSV, nutzen Sie CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'Nutzen Sie den Tab HTML einfügen (HTML in Excel / HTML-Tabelle nach Excel). Chrome komplette Seite / .mhtml ist außen vor: HTML exportieren oder die Tabelle kopieren. Das ist nicht Excel im Web.',
	tool_batch_convert_web_pages_to_excel_faq_q1: 'Werden meine Seiten hochgeladen und gespeichert?',
	tool_batch_convert_web_pages_to_excel_faq_q2: 'Worin unterscheidet sich das von HTML-Webseiten in ein Word-Dokument umwandeln?',
	tool_batch_convert_web_pages_to_excel_faq_q3: 'Und im Vergleich zu JPG-, PNG- oder PDF-Stapeln?',
	tool_batch_convert_web_pages_to_excel_faq_q4: 'Kann ich eine einzelne URL umwandeln?',
	tool_batch_convert_web_pages_to_excel_faq_q5: 'Zieht ihr Tabellen aus einem PDF?',
	tool_batch_convert_web_pages_to_excel_faq_q6: 'Ich habe HTML oder eine HTML-Tabelle, keine URL. Excel Online oder mhtml?',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: '{n} URLs in der Warteschlange',
	tool_batch_convert_web_pages_to_excel_how_body:
		'Fügen Sie öffentliche URLs mit HTML-Tabellen ein, klicken Sie auf Alle konvertieren und laden Sie eine Excel-Mappe herunter. Fließtext wird übersprungen; nur <table>-Zellen werden Blätter.',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'Eine https-URL pro Zeile (Preislisten und öffentliche HTML-Tabellen passen). Eine Zeile reicht für Webseite nach Excel.',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'Alle konvertieren klicken. Jede öffentliche URL wird einmal geholt; Seiten ohne brauchbare Tabelle werden übersprungen, der Rest läuft weiter.',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'Markup statt URL (HTML in Excel / HTML-Tabelle nach Excel)? Tab HTML einfügen öffnen, Quelltext einfügen, dann Alle konvertieren.',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'Ein Blatt pro URL statt pro Tabelle, oder winzige Nav-Tabellen behalten? Erweiterte Einstellungen öffnen.',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'A4-Druck? Webseiten gesammelt in PDF umwandeln. Überschriften? HTML-Webseiten in ein Word-Dokument umwandeln. Schon CSV? CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_how_item_6: 'Excel herunterladen, sobald mindestens eine Tabelle gemappt wurde.',
	tool_batch_convert_web_pages_to_excel_how_title: 'So geht’s',
	tool_batch_convert_web_pages_to_excel_html_hint: 'Fragment oder vollständiges HTML mit <table> einfügen. Das Mapping bleibt in diesem Tab; nichts wird hochgeladen.',
	tool_batch_convert_web_pages_to_excel_html_label: 'HTML mit Tabellen',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>Menge</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: 'Blätter',
	tool_batch_convert_web_pages_to_excel_layout_table: 'Ein Blatt pro HTML-Tabelle',
	tool_batch_convert_web_pages_to_excel_layout_url: 'Ein Blatt pro URL (Tabellen stapeln)',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'Standard ist ein Blatt pro HTML-Tabelle in einer Mappe. Stapeln legt alle Tabellen einer URL auf ein Blatt mit einer Leerzeile dazwischen. Winzige Tabellen (unter zwei Zeilen oder zwei Spalten) werden übersprungen, damit Navigationsgitter die Datei nicht vollmüllen.',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'Kopiert werden nur HTML-<table>-Zellen. Eine http(s)-URL pro Zeile, bis 10. Fehlzeilen werden übersprungen. Erfolgreiche Tabellen teilen sich eine .xlsx. Das ist kein umbenanntes Screenshot und kein PDF-Export.',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'Jede URL geht einmal raus, um HTML zu holen, und wird nicht gespeichert. Eingefügtes HTML bleibt im Tab. Die Mappe entsteht hier.',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'Private Netze, Logins und Seiten ohne <table> lassen diese Zeile scheitern. Der Rest läuft weiter.',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan setzt leere Platzhalterzellen. rowspan wird flachgezogen (jede Zeile unabhängig). Skripte fallen weg, deshalb sind rein JS-gezeichnete Tabellen leer.',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'Kein Crawler der ganzen Site und kein Excel im Web. Fügen Sie die URLs oder das HTML ein, das Sie schon haben. Blattnamen enden bei 31 Zeichen.',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'Gegenüber HTML-Webseiten in Word: nur Tabellen, keine Überschriften/Listen. Gegenüber JPG/PNG/PDF-Stapeln: Zellen in einer Mappe, kein Raster-ZIP und kein A4. Gegenüber CSV ↔ JSON: Eingabe ist eine Webseite, keine Datei, die Sie schon haben.',
	tool_batch_convert_web_pages_to_excel_rules_title: 'Regeln, mit denen Sie rechnen sollten',
	tool_batch_convert_web_pages_to_excel_sample: 'Beispiel laden',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: 'Winzige Tabellen überspringen (unter 2×2)',
	tool_batch_convert_web_pages_to_excel_status_converting: 'HTML-Tabellen werden zugeordnet…',
	tool_batch_convert_web_pages_to_excel_status_done: 'Stapel fertig — Tabelle prüfen, dann Excel herunterladen.',
	tool_batch_convert_web_pages_to_excel_status_fetching: 'Seiten-HTML wird geholt…',
	tool_batch_convert_web_pages_to_excel_status_ok: 'Tabellen zugeordnet',
	tool_batch_convert_web_pages_to_excel_status_queued: 'In der Warteschlange',
	tool_batch_convert_web_pages_to_excel_status_skip: 'Übersprungen',
	tool_batch_convert_web_pages_to_excel_status_working: 'Stapel wird konvertiert…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} fertig · {skip} übersprungen',
	tool_batch_convert_web_pages_to_excel_tab_html: 'HTML einfügen',
	tool_batch_convert_web_pages_to_excel_tab_urls: 'Seiten-URLs',
	tool_batch_convert_web_pages_to_excel_title: 'Webseiten gesammelt in Excel umwandeln',
	tool_batch_convert_web_pages_to_excel_url_hint: 'Eine öffentliche http(s)-URL pro Zeile, bis 10. Jede Seite holen wir einmal. Skripte werden entfernt. Nur HTML-Tabellen werden Blätter.',
	tool_batch_convert_web_pages_to_excel_url_label: 'Seiten-URLs (eine pro Zeile)',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'Legen Sie eine öffentliche Preis- oder SKU-HTML-Tabelle in Excel ab, damit Mengen Zahlen zum Filtern bleiben — ein PNG wäre nur Pixel.',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'Ziehen Sie Parametertabellen aus zwei Hilfe-URLs in eine Mappe und ergänzen Sie eine SUM-Spalte. Word ließe die Überschriften als Fließtext.',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'A4-Druck bleibt bei Webseiten gesammelt in PDF; vorhandenes CSV bei CSV ↔ JSON. Diese Seite, wenn die Quelle noch eine Webseitentabelle ist.',
	tool_batch_convert_web_pages_to_excel_usecases_title: 'Gute Einsätze',
};

export default de;
