/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / de).
 * H1: Mehrere Webseiten als PDF speichern — Suchsatz, kein Batch-convert-Gerüst.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Fügen Sie pro Zeile eine öffentliche Adresse ein, wandeln Sie jede Seite in dieser Registerkarte in ein A4-PDF um, überspringen Sie fehlgeschlagene Zeilen und laden Sie ein ZIP herunter. Jede URL wird einmal über den Server geholt und nicht gespeichert; die Umwandlung bleibt auf Ihrem Gerät.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Verstecktes Aufnahme-Fenster',
	tool_batch_convert_web_pages_to_pdf_clear: 'Leeren',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Datei',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Status',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Alle umwandeln',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Mehrere Webseiten als PDF aus einer URL-Liste speichern und als ZIP holen; jede Adresse wird einmal abgerufen und nicht abgelegt.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Mehrere Webseiten als PDF speichern: Eine https-URL pro Zeile (höchstens 10), A4-PDF in dieser Registerkarte, Fehler überspringen, ZIP herunterladen. Schritte: Liste einfügen, Alle umwandeln, Tabelle prüfen, Download. Beispiel: zwei Muster-Hilfe- und Richtlinienseiten werden zwei PDFs in einem ZIP. Jede URL wird einmal vom Server geholt und nicht gespeichert; die Umwandlung bleibt auf dem Gerät. Für ein HTML-Fragment nutzen Sie HTML in PDF umwandeln.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'ZIP herunterladen',
	tool_batch_convert_web_pages_to_pdf_empty: 'Fügen Sie zuerst mindestens eine Seiten-URL ein.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Diese Seite wurde kein PDF. Übersprungen.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Dieser Browser konnte das ZIP nicht bauen. Versuchen Sie einen aktuellen Browser.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'Die Umwandlungsbibliothek lud nicht. Aktualisieren und erneut versuchen.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'Höchstens 10 URLs. Extra-Zeilen wurden nicht übernommen.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Diese URL ließ sich nicht laden. Adresse prüfen, oder die Seite blockiert den Abruf.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Diese Zeile ist keine gültige http(s)-URL. Übersprungen.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Beispiel laden füllt zwei example.com-URLs, erzeugt zwei PDFs aus lokalem HTML (ohne die Live-Seite) und schaltet ZIP herunterladen frei. Alle umwandeln holt die Adressen, die Sie eingefügt haben.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Beispiel',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'Die Umwandlung läuft in dieser Registerkarte. Bei einer URL-Liste senden wir jede Adresse einmal an den Server, um HTML zu holen; Seiten werden nicht gespeichert. PDFs entstehen auf Ihrem Gerät, das ZIP hier.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'Diese Seite ist für eine URL-Liste (mehrere Seiten als PDF, dann ZIP). Für ein HTML-Stück oder eine Adresse mit Vorschau nutzen Sie HTML in PDF umwandeln.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Nein. Skripte werden entfernt. Login-Wände, Paywalls und JavaScript-Apps treffen die Live-Seite oft nicht. Druck-CSS kann ebenfalls abweichen.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Jede gelungene Zeile ist ein eigenes PDF in einem ZIP. Wir führen sie nicht zu einer Datei zusammen — nach dem Download ggf. Dateien zu einem PDF kombinieren.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Bis zu 10 http(s)-URLs. Der Rest wird ignoriert. Fehlzeilen werden übersprungen, damit der Stapel weiterläuft.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Werden meine Seiten hochgeladen und auf einem Server gespeichert?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Worin unterscheidet sich das von HTML in PDF umwandeln?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Stimmt eine Seite mit Login oder viel JavaScript mit der Live-Seite überein?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Kommt ein PDF oder ein ZIP mit mehreren Dateien heraus?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'Wie viele URLs kann ich auf einmal umwandeln?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URLs in der Warteschlange',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Fügen Sie die Liste öffentlicher Seiten ein, wandeln Sie sie nacheinander um und nehmen Sie ein ZIP der gelungenen PDFs mit.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Eine https-URL pro Zeile einfügen (Hilfe oder Richtlinien passen gut).',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Wartezeit bei etwa 1 Sekunde lassen, außer Bilder im PDF bleiben leer.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Alle umwandeln drücken. Jede öffentliche URL wird einmal geholt; Fehlzeilen übersprungen.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'Nur ein HTML-Fragment statt einer Liste? HTML in PDF umwandeln nutzen.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'ZIP herunterladen, sobald mindestens eine Zeile geklappt hat. Beispiel laden testet zwei lokale Seiten; dabei erscheint die Fortschrittsleiste.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'So funktioniert es',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Stapel-Fortschritt',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct} %',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s} s vergangen',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Abrufen',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Bilder',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Eine http(s)-URL pro Zeile, höchstens 10. Der Reihe nach. Fehler überspringen. Gelungene PDFs ins ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Jede URL geht einmal an den Server für HTML und wird nicht gespeichert. Das PDF entsteht in dieser Registerkarte.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Private Netze, Logins und fehlende Seiten lassen nur diese Zeile scheitern. Der Rest läuft weiter.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Doppelte ZIP-Namen werden zu name (2).pdf. Skripte fallen vor der Aufnahme weg.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Das ist kein Crawler für ganze Websites. Fügen Sie URLs ein, die Sie schon haben.',
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
		'Eine öffentliche http(s)-URL pro Zeile, bis 10. Wir holen jede Seite einmal und schreiben CSS- und Bild-URLs um. Skripte fallen vor dem PDF weg.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'Seiten-URLs (eine pro Zeile)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Mehrere Hilfe- oder Dokumentationsseiten als PDF sichern, ohne jede einzeln zu öffnen.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Eine URL-Liste öffentlicher Richtlinien als ZIP ablegen und später lesen.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Eingefügtes HTML bleibt bei HTML in PDF umwandeln; diese Seite, wenn Sie schon viele Links haben.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Gute Einsätze',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Zusätzliche Sekunden, nachdem Bilder zu laden beginnen. Standard ist 1. Erhöhen, wenn das PDF leere Bildrahmen zeigt.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Lade-Wartezeit (s)',
};

export default de;
