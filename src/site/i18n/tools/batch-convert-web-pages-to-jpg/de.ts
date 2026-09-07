/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / de).
 * H1: Mehrere Webseiten als JPG speichern (kein Batch-convert-Kalk).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: 'Erweiterte Einstellungen (optional)',
	tool_batch_convert_web_pages_to_jpg_article:
		'Fügen Sie pro Zeile eine öffentliche Adresse ein, erfassen Sie jede Seite als JPEG in der gewählten Breite, überspringen Sie Fehlzeilen und laden Sie ein ZIP. Jede URL wird einmal über den Server geholt und nicht gespeichert; das Bild entsteht in diesem Tab. Das ist ein Screenshot, kein A4-PDF.',
	tool_batch_convert_web_pages_to_jpg_capture_first: 'Nur der erste Bildschirm',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: 'Versteckter Erfassungsrahmen',
	tool_batch_convert_web_pages_to_jpg_capture_full: 'Ganze Seite',
	tool_batch_convert_web_pages_to_jpg_capture_label: 'Erfassung',
	tool_batch_convert_web_pages_to_jpg_clear: 'Leeren',
	tool_batch_convert_web_pages_to_jpg_col_file: 'Datei',
	tool_batch_convert_web_pages_to_jpg_col_status: 'Status',
	tool_batch_convert_web_pages_to_jpg_col_url: 'URL',
	tool_batch_convert_web_pages_to_jpg_convert: 'Alle umwandeln',
	tool_batch_convert_web_pages_to_jpg_desc:
		'Speichern Sie mehrere Webseiten als JPG aus einer URL-Liste und laden Sie ein ZIP. Jede Adresse wird einmal geholt und nicht gespeichert.',
	tool_batch_convert_web_pages_to_jpg_description:
		'Mehrere Webseiten als JPG speichern: URL-Liste einfügen (eine Zeile reicht). Breite und JPEG-Qualität, ganze Seite oder erster Bildschirm, dann ZIP. Schritte: URLs einfügen, Alle umwandeln, ZIP herunterladen. Beispiel: zwei Hilfeseiten werden zwei JPEGs. Jede URL wird einmal geholt und nicht gespeichert.',
	tool_batch_convert_web_pages_to_jpg_download_zip: 'ZIP herunterladen',
	tool_batch_convert_web_pages_to_jpg_empty: 'Fügen Sie zuerst mindestens eine Seiten-URL ein.',
	tool_batch_convert_web_pages_to_jpg_err_convert: 'Diese Seite ließ sich nicht als JPEG speichern. Übersprungen.',
	tool_batch_convert_web_pages_to_jpg_err_fflate: 'Dieser Browser konnte das ZIP nicht bauen. Versuchen Sie einen aktuellen.',
	tool_batch_convert_web_pages_to_jpg_err_load: 'Die Konverter-Bibliothek lud nicht. Aktualisieren und erneut versuchen.',
	tool_batch_convert_web_pages_to_jpg_err_too_many: 'Höchstens 10 URLs. Extra-Zeilen wurden nicht übernommen.',
	tool_batch_convert_web_pages_to_jpg_err_url: 'Diese URL ließ sich nicht laden. Adresse prüfen oder die Site blockiert den Abruf.',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: 'Diese Zeile ist keine gültige http(s)-URL. Übersprungen.',
	tool_batch_convert_web_pages_to_jpg_example:
		'Beispiel laden füllt zwei example.com-URLs, baut zwei JPEG aus lokalem HTML (ohne die Live-Site) und aktiviert ZIP herunterladen. Alle umwandeln holt die Adressen, die Sie eingefügt haben. Breite, Qualität und ganze Seite vs. erster Bildschirm ändern die Pixel.',
	tool_batch_convert_web_pages_to_jpg_example_title: 'Beispiel',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'Die Umwandlung läuft in diesem Tab. Bei einer Liste senden wir jede Adresse einmal an den Server, um HTML zu holen; Seiten speichern wir nicht. Die JPEGs entstehen auf Ihrem Gerät und werden hier ins ZIP gepackt.',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'Das PDF-Geschwister paginiert auf A4 zum Lesen und Drucken. Diese Seite rastert ein JPEG pro URL in der von Ihnen gewählten Breite (Desktop 1280, Tablet 768 oder Handy 390), mit Qualität und ganzer Seite oder erstem Bildschirm. Gleiche Liste, anderes Artefakt.',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'PDF zu JPG startet von einer hochgeladenen PDF-Datei. Hier starten Sie mit Seiten-URLs. Haben Sie schon PDFs, nutzen Sie PDF zu JPG; haben Sie eine Linkliste, diese Seite.',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'Nein. Skripte werden entfernt. Login-Mauern, Paywalls und stark JavaScript-lastige Apps treffen die Live-Site oft nicht. Responsives CSS folgt der gewählten Viewport-Breite.',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'Jede gelungene Zeile wird ein eigenes JPEG in einem ZIP. Eine einzelne URL funktioniert ebenfalls. Bilder werden hier nicht zu einer Datei zusammengefügt.',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'Die Viewport-Breite ändert das Layout (Handy vs. Desktop). JPEG-Qualität handelt Dateigröße gegen Artefakte. Ganze Seite erfasst die Scrollhöhe (gedeckelt, damit der Tab nicht abstürzt); erster Bildschirm bleibt ungefähr eine Viewport-Höhe.',
	tool_batch_convert_web_pages_to_jpg_faq_q1: 'Werden meine Seiten hochgeladen und auf dem Server gespeichert?',
	tool_batch_convert_web_pages_to_jpg_faq_q2: 'Worin unterscheidet sich das von Mehrere Webseiten als PDF speichern?',
	tool_batch_convert_web_pages_to_jpg_faq_q3: 'Worin unterscheidet sich das von PDF zu JPG?',
	tool_batch_convert_web_pages_to_jpg_faq_q4: 'Sieht eine Seite mit Login oder viel JavaScript wie live aus?',
	tool_batch_convert_web_pages_to_jpg_faq_q5: 'Kommt ein JPG oder ein ZIP? Kann ich eine einzelne URL umwandeln?',
	tool_batch_convert_web_pages_to_jpg_faq_q6: 'Was ändern Viewport, JPEG-Qualität und erster Bildschirm?',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: '{n} URLs in der Warteschlange',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'Fügen Sie die Liste öffentlicher Seiten ein, drücken Sie Alle umwandeln (Standard: Desktop 1280, JPEG 85 %, ganze Seite) und nehmen Sie ein ZIP der gelungenen Bilder mit.',
	tool_batch_convert_web_pages_to_jpg_how_item_1: 'Fügen Sie eine https-URL pro Zeile ein (Hilfe oder Tickets passen gut). Eine Zeile reicht für URL zu JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_2: 'Alle umwandeln drücken. Standard ist Desktop 1280, JPEG 85 % und ganze Seite. Jede öffentliche URL wird einmal geholt; Fehlzeilen werden übersprungen.',
	tool_batch_convert_web_pages_to_jpg_how_item_3: 'Handy-Breite, nur erster Bildschirm, oder mehr Wartezeit bei leeren Bildern? Erweiterte Einstellungen öffnen für Viewport, JPEG-Qualität, Ausschnitt und Ladezeit.',
	tool_batch_convert_web_pages_to_jpg_how_item_4: 'Druckbare A4-Dateien statt Screenshots? Mehrere Webseiten als PDF speichern. Schon ein PDF? PDF zu JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_5: 'ZIP herunterladen, sobald mindestens eine Zeile geklappt hat.',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'Beispiel laden testet zwei lokale Seiten; die Fortschrittsleiste erscheint während der Umwandlung.',
	tool_batch_convert_web_pages_to_jpg_how_title: 'So funktioniert es',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: '{s}s vergangen',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: 'Abruf',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: 'Bilder',
	tool_batch_convert_web_pages_to_jpg_hud_title: 'Stapelfortschritt',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'Die Viewport-Breite ändert das Layout. Die JPEG-Qualität ändert die Dateigröße. Ganze Seite ist ein hohes Bild; der erste Bildschirm ist ungefähr eine Viewport-Höhe.',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'JPEG-Qualität',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'Eine http(s)-URL pro Zeile, höchstens 10. Serielle Umwandlung. Fehlzeilen überspringen. Gelungene JPEGs landen im ZIP. Breite, Qualität und Erfassungsmodus ändern Pixel — das ist kein umbenanntes PDF.',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'Jede URL geht einmal an den Server, um HTML zu holen, und wird nicht gespeichert. Das JPEG entsteht in diesem Tab.',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'Private Netze, Logins und fehlende Seiten lassen diese Zeile scheitern. Der Rest des Stapels läuft weiter.',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'Doppelte ZIP-Namen werden zu name (2).jpg. Skripte und noscript-Refresh-Fallen werden entfernt. Sehr hohe Homepages werden gekappt, damit die Leinwand den Tab nicht sprengt.',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'Das ist kein Crawler für ganze Sites. Fügen Sie die URLs ein, die Sie schon haben.',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'Gegenüber Mehrere Webseiten als PDF speichern: keine A4-Paginierung. Gegenüber PDF zu JPG: Eingabe ist eine URL-Liste, kein PDF-Upload. Gegenüber Stapel-Bildkonvertern: Eingabe ist eine Webseite, kein lokales Foto.',
	tool_batch_convert_web_pages_to_jpg_rules_title: 'Regeln, mit denen Sie rechnen sollten',
	tool_batch_convert_web_pages_to_jpg_sample: 'Beispiel laden',
	tool_batch_convert_web_pages_to_jpg_status_converting: 'JPEG wird gezeichnet… dieser Tab kann ein paar Sekunden stocken',
	tool_batch_convert_web_pages_to_jpg_status_done: 'Stapel fertig — Tabelle prüfen, dann ZIP herunterladen.',
	tool_batch_convert_web_pages_to_jpg_status_fetching: 'Seiten-HTML wird geholt…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG bereit',
	tool_batch_convert_web_pages_to_jpg_status_queued: 'In der Warteschlange',
	tool_batch_convert_web_pages_to_jpg_status_skip: 'Übersprungen',
	tool_batch_convert_web_pages_to_jpg_status_waiting: 'Warten, bis Bilder fertig sind…',
	tool_batch_convert_web_pages_to_jpg_status_working: 'Stapel wird umgewandelt…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} bereit · {skip} übersprungen',
	tool_batch_convert_web_pages_to_jpg_title: 'Mehrere Webseiten als JPG speichern',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'Eine öffentliche http(s)-URL pro Zeile, höchstens 10. Jede Seite wird einmal geholt, CSS- und Bild-URLs umgeschrieben. Skripte werden vor der Erfassung entfernt.',
	tool_batch_convert_web_pages_to_jpg_url_label: 'Seiten-URLs (eine pro Zeile)',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_jpg_usecase_1: 'Mehrere Hilfe- oder Ticket-URLs ablegen und JPEG-Screenshots für den Chat holen, ohne jeden Tab zu öffnen.',
	tool_batch_convert_web_pages_to_jpg_usecase_2: 'Dieselbe öffentliche Seite bei 390 (Handy) und 1280 (Desktop) erfassen, um den ersten Bildschirm vor einem Review zu vergleichen.',
	tool_batch_convert_web_pages_to_jpg_usecase_3: 'A4-Archiv-PDFs bei Mehrere Webseiten als PDF speichern lassen; diese Seite nutzen, wenn Sie Bilddateien aus einer URL-Liste brauchen.',
	tool_batch_convert_web_pages_to_jpg_usecases_title: 'Gute Einsätze',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: 'Desktop 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: 'Anzeigebreite',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: 'Handy 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: 'Tablet 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'Zusätzliche Sekunden, nachdem Bilder zu laden beginnen. Standard ist 1. Erhöhen, wenn das JPEG leere Rahmen zeigt.',
	tool_batch_convert_web_pages_to_jpg_wait_label: 'Ladezeit (Sek.)',
};

export default de;
