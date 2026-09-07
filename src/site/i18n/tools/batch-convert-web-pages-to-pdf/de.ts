/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / de).
 * H1: Mehrere Webseiten als PDF speichern.
 * IG gegenüber JPG: A4-Hochformat mit Umbrüchen zum Drucken, kein Viewport-Screenshot.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Öffentliche URLs werden in dieser Registerkarte zu A4-Hochformat-PDFs mit Seitenumbrüchen — zum Drucken und Blättern, nicht als endloses JPEG. Fehlzeilen überspringen, gelungene Dateien ins ZIP. Jede Adresse wird einmal geholt und nicht gespeichert. Chat-Screenshots oder Handy-gegen-Desktop? Mehrere Webseiten als JPG speichern.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Verstecktes Aufnahme-Fenster',
	tool_batch_convert_web_pages_to_pdf_clear: 'Leeren',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Datei',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Status',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Alle umwandeln',
	tool_batch_convert_web_pages_to_pdf_desc:
		'URL-Liste als druckbare A4-Hochformat-PDFs im ZIP — kein Webseiten-Screenshot.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Mehrere Webseiten als PDF speichern: Die URL-Liste wird zu A4-Hochformat mit Umbrüchen, zum Drucken und Lesen — nicht ein hohes JPEG. Schritte: Liste einfügen, Alle umwandeln, ZIP herunterladen. Beispiel: zwei Richtlinienseiten werden zwei PDFs. Jede URL einmal geholt, nicht gespeichert. HTML-Schnipsel: HTML in PDF umwandeln.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'ZIP herunterladen',
	tool_batch_convert_web_pages_to_pdf_empty: 'Fügen Sie zuerst mindestens eine Seiten-URL ein.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Diese Seite wurde kein PDF. Übersprungen.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Dieser Browser konnte das ZIP nicht bauen. Versuchen Sie einen aktuellen Browser.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'Die Umwandlungsbibliothek lud nicht. Aktualisieren und erneut versuchen.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'Höchstens 10 URLs. Extra-Zeilen wurden nicht übernommen.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Diese URL ließ sich nicht laden. Adresse prüfen, oder die Seite blockiert den Abruf.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Diese Zeile ist keine gültige http(s)-URL. Übersprungen.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Beispiel laden füllt Hilfe- und Richtlinien-URLs, erzeugt zwei lokale A4-PDFs mit CSS-Seitenumbruch (ohne Live-Abruf) und schaltet ZIP herunterladen frei. Alle umwandeln holt die Adressen, die Sie eingefügt haben. Druck-CSS verschiebt die Schnitte.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Beispiel',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'Papier ist immer A4 hochkant. Lange Seiten werden per CSS-Umbruch (plus Legacy-Fallback) zerteilt — keine unendlich hohe Seite. Langes Screenshot: Mehrere Webseiten als JPG speichern.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'Die JPG-Schwester rastert ein JPEG pro URL in 1280 / 768 / 390, mit Qualität und Ganzseite oder erstem Screen. Hier wird jede URL in A4-Blätter für den Druck geschnitten. Gleiche Liste, anderes Artefakt.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Diese Seite ist die URL-Liste: mehrere öffentliche Seiten → einzelne A4-PDFs → ZIP. Für ein HTML-Stück mit Vorschau: HTML in PDF umwandeln.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Umwandlung in dieser Registerkarte. Jede URL geht einmal an den Server für HTML; Seiten werden nicht gespeichert. Das PDF entsteht auf Ihrem Gerät, das ZIP hier.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Jede gelungene Zeile ist ein eigenes PDF in einem ZIP. Zusammenführen tun wir nicht — nach dem Download Dateien zu einem PDF kombinieren.',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'Nein. Skripte fallen weg. Login-Wände, Paywalls und JavaScript-Apps treffen die Live-Seite oft nicht. Druck-CSS kann Umbrüche verschieben.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Welches Papierformat? Wird es eine endlos hohe Seite?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Worin unterscheidet sich das von Mehrere Webseiten als JPG speichern?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Worin unterscheidet sich das von HTML in PDF umwandeln?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Werden meine Seiten hochgeladen und auf einem Server gespeichert?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'Kommt ein PDF oder ein ZIP mit mehreren Dateien heraus?',
	tool_batch_convert_web_pages_to_pdf_faq_q6: 'Stimmt eine Seite mit Login oder viel JavaScript mit der Live-Seite überein?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URLs in der Warteschlange',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Fügen Sie die öffentlichen URLs ein, die Sie archivieren oder drucken wollen, wandeln Sie sie in A4-Hochformat um und nehmen Sie ein ZIP der gelungenen Dateien mit.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Eine https-URL pro Zeile. Richtlinien, Hilfe und druckwürdige öffentliche Docs passen gut.',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Wartezeit bei etwa 1 Sekunde lassen, außer Bilder auf einem A4-Blatt bleiben leer.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Alle umwandeln drücken. Jede öffentliche URL wird einmal geholt und auf A4 hochkant umbrochen (CSS-page-break kann Abschnitte teilen). Fehlzeilen übersprungen.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'HTML mit Vorschau? HTML in PDF umwandeln. Viewport-Screenshot statt Papier? Mehrere Webseiten als JPG speichern.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'ZIP herunterladen, sobald mindestens eine Zeile geklappt hat. Beispiel laden testet zwei lokale A4-Seiten mit CSS-Umbruch.',
	tool_batch_convert_web_pages_to_pdf_how_item_6: 'Mehrere PDFs zu einem Heft binden: erst herunterladen, dann Dateien zu einem PDF kombinieren.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'So funktioniert es',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Stapel-Fortschritt',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct} %',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s} s vergangen',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Abrufen',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Bilder',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Eine http(s)-URL pro Zeile, höchstens 10. Ausgabe ist A4 hochkant mit CSS-Umbrüchen, kein Ganzseiten-JPEG. Der Reihe nach. Fehler überspringen. Gelungene PDFs ins ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Jede URL geht einmal an den Server für HTML und wird nicht gespeichert. Das PDF entsteht in dieser Registerkarte auf A4 hochkant.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Umbrüche folgen CSS (plus Legacy-Fallback). Druckstile können von der Bildschirmansicht abweichen. Sehr hohe Seiten werden gekappt, damit der Tab nicht abstürzt.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Private Netze, Logins und fehlende Seiten lassen nur diese Zeile scheitern. Doppelte ZIP-Namen werden zu name (2).pdf. Skripte fallen vor der Aufnahme weg.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Kein Crawler für ganze Websites und kein Screenshot-Werkzeug. Fügen Sie öffentliche URLs ein, die Sie schon haben.',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'Gegen Mehrere Webseiten als JPG speichern: dort ein JPEG in gewählter Breite. Gegen HTML in PDF umwandeln: dort eingefügtes HTML. Gegen Dateien zu einem PDF kombinieren: hier keine Zusammenführung.',
	tool_batch_convert_web_pages_to_pdf_rules_title: 'Regeln, mit denen Sie rechnen sollten',
	tool_batch_convert_web_pages_to_pdf_sample: 'Beispiel laden',
	tool_batch_convert_web_pages_to_pdf_status_done: 'Stapel fertig — Tabelle prüfen, dann ZIP herunterladen.',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'Seiten-HTML wird geholt…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF bereit',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'Übersprungen',
	tool_batch_convert_web_pages_to_pdf_status_waiting: 'Warten, bis Bilder fertig sind…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'PDF wird gerendert… der Tab kann kurz einfrieren',
	tool_batch_convert_web_pages_to_pdf_status_queued: 'In der Warteschlange',
	tool_batch_convert_web_pages_to_pdf_status_working: 'Stapel wird umgewandelt…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} bereit · {skip} übersprungen',
	tool_batch_convert_web_pages_to_pdf_title: 'Mehrere Webseiten als PDF speichern',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'Eine öffentliche http(s)-URL pro Zeile, bis 10. Wir holen jede Seite einmal und schreiben CSS- und Bild-URLs um. Skripte fallen weg; Ergebnis ist A4 hochkant mit CSS-Umbrüchen.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'Seiten-URLs (eine pro Zeile)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Vor dem Meeting Hilfe- oder öffentliche Docs als druckbare A4-PDFs sichern, ohne in jedem Tab Drucken zu öffnen.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Richtlinien, AGB oder Hinweise als ZIP ablegen, später offline lesen oder per Mail anhängen.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Eingefügtes HTML bleibt bei HTML in PDF umwandeln. Chat-Screenshots und Handy/Desktop-Vergleich bei JPG. Hier nur das Druckarchiv aus der URL-Liste.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Gute Einsätze',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Zusätzliche Sekunden, nachdem Bilder auf jedem A4-Blatt zu laden beginnen. Standard ist 1. Erhöhen, wenn das PDF leere Bildrahmen zeigt.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Lade-Wartezeit (s)',
};

export default de;
