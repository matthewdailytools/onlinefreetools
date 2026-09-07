/**
 * i18n tool shard (batch-convert-web-pages-to-png / de).
 * H1: Mehrere Webseiten in PNG umwandeln. IG vs JPG: verlustfreies PNG, scharfe 1-px-Kanten, optional transparent, 1×/2× — keine JPEG-Qualität, kein A4.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: 'Erweiterte Einstellungen (optional)',
	tool_batch_convert_web_pages_to_png_article:
		'Öffentliche URLs werden in verlustfreie PNG in der von Ihnen gewählten Breite (Desktop 1280, Tablet 768, Telefon 390). Weißer oder transparenter Hintergrund, 1× oder 2×, danach ein ZIP der gelungenen Zeilen. Gut für scharfe UI-Kanten — kein Chat-JPEG und kein A4-Druck. Jede Adresse holen wir einmal als HTML und speichern sie nicht. Die PNG-Umwandlung läuft in diesem Tab. Kleinere Fotodateien: Mehrere Webseiten als JPG speichern.',
	tool_batch_convert_web_pages_to_png_bg_label: 'Hintergrund',
	tool_batch_convert_web_pages_to_png_bg_transparent: 'Transparent',
	tool_batch_convert_web_pages_to_png_bg_white: 'Weiß',
	tool_batch_convert_web_pages_to_png_capture_first: 'Erster Bildschirm',
	tool_batch_convert_web_pages_to_png_capture_frame_title: 'Versteckter Capture-Rahmen',
	tool_batch_convert_web_pages_to_png_capture_full: 'Ganze Seite',
	tool_batch_convert_web_pages_to_png_capture_label: 'Ausschnitt',
	tool_batch_convert_web_pages_to_png_clear: 'Leeren',
	tool_batch_convert_web_pages_to_png_col_file: 'Datei',
	tool_batch_convert_web_pages_to_png_col_status: 'Status',
	tool_batch_convert_web_pages_to_png_col_url: 'URL',
	tool_batch_convert_web_pages_to_png_convert: 'Alle konvertieren',
	tool_batch_convert_web_pages_to_png_desc:
		'URL-Liste als verlustfreies PNG mit optional transparentem Hintergrund und 2×, als ZIP. Kein JPEG, kein A4.',
	tool_batch_convert_web_pages_to_png_description:
		'Mehrere Webseiten in PNG umwandeln: verlustfreie Screenshots plus ZIP aus einer URL-Liste. Weiß oder transparent, 1× oder 2×. Schritte: URLs einfügen, Alle konvertieren, ZIP herunterladen. Beispiel: zwei UI-Ansichten werden scharfe PNG. Eine Zeile reicht für Webseite als PNG speichern. Abruf einmal, nicht gespeichert; Umwandlung in diesem Tab.',
	tool_batch_convert_web_pages_to_png_download_zip: 'ZIP herunterladen',
	tool_batch_convert_web_pages_to_png_empty: 'Bitte zuerst mindestens eine öffentliche URL einfügen.',
	tool_batch_convert_web_pages_to_png_err_convert: 'Diese Adresse ließ sich nicht als PNG speichern. Übersprungen.',
	tool_batch_convert_web_pages_to_png_err_fflate: 'In diesem Browser ließ sich das ZIP nicht bauen. Anderen aktuellen Browser versuchen.',
	tool_batch_convert_web_pages_to_png_err_load: 'Die Konverter-Bibliothek konnte nicht laden. Seite neu laden und erneut versuchen.',
	tool_batch_convert_web_pages_to_png_err_too_many: 'Höchstens 10 URLs. Zusätzliche Zeilen wurden nicht übernommen.',
	tool_batch_convert_web_pages_to_png_err_url: 'Diese URL ließ sich nicht laden. Adresse prüfen oder die Gegenseite blockiert den Abruf.',
	tool_batch_convert_web_pages_to_png_err_url_empty: 'Diese Zeile ist keine gültige http(s)-URL. Übersprungen.',
	tool_batch_convert_web_pages_to_png_example:
		'Beispiel laden füllt eine Component-Kit-URL und eine halbtransparente Ebene, erzeugt zwei PNG im Tab (1-px-Kante bleibt scharf; bei transparentem Hintergrund bleibt Alpha erhalten), ohne die Live-Site abzurufen, und schaltet ZIP herunterladen frei. Alle konvertieren holt die eingefügten Adressen. Viewport, Hintergrund, Skalierung und ganze Seite vs. erster Bildschirm ändern die Pixel.',
	tool_batch_convert_web_pages_to_png_example_title: 'Beispiel',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'Mehrere Webseiten als PDF speichern paginiert nach A4 zum Lesen und Drucken. Hier entsteht ein PNG-Raster pro URL. Druckseiten brauchen Sie das PDF-Werkzeug.',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'Das JPG-Geschwister ist verlustbehaftetes JPEG mit Qualitätsregler für Chat und Tickets. Hier schreiben wir verlustfreies PNG, damit 1-px-UI-Kanten und Schrift scharf bleiben, plus optional transparentes PNG und 1×/2×. Dieselbe URL-Liste, anderes Artefakt — kein JPEG-Qualitätsschieber.',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'Die Umwandlung läuft in diesem Tab. Bei einer URL-Liste schicken wir jede Adresse einmal an unseren Server, damit er das HTML holt; wir speichern die Seiten nicht. Die PNG entstehen in Ihrem Browser, das ZIP ebenfalls hier — die Dateien gehen nicht auf unseren Server zur Ablage.',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'Jede gelungene Zeile wird ein eigenes PNG in einem ZIP. Eine URL reicht (Webseite als PNG / URL zu PNG verlustfrei): eine Zeile einfügen. Mehrere Bilder werden nicht zu einer Datei zusammengefügt.',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'Nein. Skripte werden entfernt. Login-Wände, Paywalls und JavaScript-Apps treffen oft nicht die angemeldete Live-Ansicht. Responsives CSS folgt der gewählten Viewport-Breite.',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'Transparent wirkt nur, wo die Seite selbst Alpha hat oder den Körper nicht vollflächig füllt. Eine typische weiße Startseite bleibt weiß. 2× verdoppelt Pixel (Retina-Review) und macht die Datei größer. Eine Volltonfläche lässt sich nicht zum Schachbrett „durchstanzen“.',
	tool_batch_convert_web_pages_to_png_faq_q1: 'Worin unterscheidet sich das von Mehrere Webseiten als PDF speichern?',
	tool_batch_convert_web_pages_to_png_faq_q2: 'Worin unterscheidet sich das von Mehrere Webseiten als JPG speichern?',
	tool_batch_convert_web_pages_to_png_faq_q3: 'Werden meine Adressen hochgeladen und gespeichert?',
	tool_batch_convert_web_pages_to_png_faq_q4: 'Ist das Ergebnis ein PNG oder ein ZIP? Reicht eine URL?',
	tool_batch_convert_web_pages_to_png_faq_q5: 'Stimmt ein Login- oder JavaScript-lastiges Angebot mit der Live-Ansicht überein?',
	tool_batch_convert_web_pages_to_png_faq_q6: 'Wann sieht man den transparenten Hintergrund, und was ändert 2×?',
	tool_batch_convert_web_pages_to_png_file_count_tpl: '{n} URLs in der Warteschlange',
	tool_batch_convert_web_pages_to_png_how_body:
		'Adressen einfügen, Alle konvertieren drücken (Standard: Desktop 1280, weißer Hintergrund, 1×, ganze Seite) und das ZIP der gelungenen PNG holen.',
	tool_batch_convert_web_pages_to_png_how_item_1:
		'Pro Zeile eine https-URL (Component-Kits und öffentliche UI-Docs passen gut). Eine Zeile reicht, um eine Webseite als PNG zu speichern.',
	tool_batch_convert_web_pages_to_png_how_item_2:
		'Alle konvertieren drücken. Standard: Desktop 1280, weiß, 1×, ganze Seite. Jede öffentliche URL wird einmal geholt; fehlgeschlagene Zeilen entfallen.',
	tool_batch_convert_web_pages_to_png_how_item_3:
		'Transparenter Hintergrund, 2×, Telefonbreite oder nur der erste Bildschirm? Unter Erweiterte Einstellungen (optional) liegen Viewport, Hintergrund, Skala, Ausschnitt und Ladewartezeit.',
	tool_batch_convert_web_pages_to_png_how_item_4:
		'Kleineres JPEG für den Chat: Mehrere Webseiten als JPG speichern. Druckbares A4: Mehrere Webseiten als PDF speichern. Fotos schon auf dem Gerät: Bilder in Masse nach PNG umwandeln.',
	tool_batch_convert_web_pages_to_png_how_item_5: 'ZIP herunterladen, sobald mindestens eine Zeile geklappt hat.',
	tool_batch_convert_web_pages_to_png_how_item_6:
		'Beispiel laden erzeugt zwei lokale UI-Ansichten; die Fortschrittsleiste läuft während der Umwandlung.',
	tool_batch_convert_web_pages_to_png_how_title: 'So geht’s',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: '{s}s vergangen',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: 'Abruf',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: 'Bilder',
	tool_batch_convert_web_pages_to_png_hud_title: 'Stapel-Fortschritt',
	tool_batch_convert_web_pages_to_png_opts_hint:
		'Die Viewport-Breite ändert das Layout. Transparenter Hintergrund behält Alpha. 2× verdoppelt Pixel. Ganze Seite ist ein hohes Screenshot; erster Bildschirm etwa eine Viewport-Höhe.',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'Eine http(s)-URL pro Zeile, bis 10. Seriell. Fehlschläge überspringen. Gelungene PNG ins ZIP. Hintergrund und Skala ändern Pixel — kein umbenanntes JPEG und kein PDF-Export.',
	tool_batch_convert_web_pages_to_png_rules_item_1:
		'Jede URL geht einmal an unseren Server zum HTML-Abruf und wird nicht gespeichert. Das PNG entsteht in diesem Tab.',
	tool_batch_convert_web_pages_to_png_rules_item_2:
		'Private Netze, Logins und fehlende Adressen lassen nur diese Zeile scheitern. Der Rest läuft weiter.',
	tool_batch_convert_web_pages_to_png_rules_item_3:
		'Doppelte ZIP-Namen werden zu name (2).png. Skripte und noscript-Reload-Fallen werden entfernt. Sehr hohe Aufnahmen sind begrenzt, damit der Tab nicht abstürzt.',
	tool_batch_convert_web_pages_to_png_rules_item_4: 'Kein Crawler für ganze Sites. Fügen Sie URLs ein, die Sie schon haben.',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'Gegenüber JPG-Stapel: verlustfreies PNG, kein JPEG-Regler, optional transparent. Gegenüber PDF-Stapel: keine A4-Paginierung. Gegenüber Bilder in Masse nach PNG: Eingabe ist eine Web-URL, kein Foto auf dem Gerät.',
	tool_batch_convert_web_pages_to_png_rules_title: 'Was Sie erwarten dürfen',
	tool_batch_convert_web_pages_to_png_sample: 'Beispiel laden',
	tool_batch_convert_web_pages_to_png_scale_1x: '1×',
	tool_batch_convert_web_pages_to_png_scale_2x: '2× (Retina)',
	tool_batch_convert_web_pages_to_png_scale_label: 'Pixelskala',
	tool_batch_convert_web_pages_to_png_status_converting: 'PNG wird gezeichnet … dieser Tab kann kurz einfrieren',
	tool_batch_convert_web_pages_to_png_status_done: 'Stapel fertig — Tabelle prüfen, dann ZIP herunterladen.',
	tool_batch_convert_web_pages_to_png_status_fetching: 'HTML wird geholt …',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG bereit',
	tool_batch_convert_web_pages_to_png_status_queued: 'In der Warteschlange',
	tool_batch_convert_web_pages_to_png_status_skip: 'Übersprungen',
	tool_batch_convert_web_pages_to_png_status_waiting: 'Warten, bis Bilder fertig sind …',
	tool_batch_convert_web_pages_to_png_status_working: 'Stapel wird konvertiert …',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} bereit · {skip} übersprungen',
	tool_batch_convert_web_pages_to_png_title: 'Mehrere Webseiten in PNG umwandeln',
	tool_batch_convert_web_pages_to_png_url_hint:
		'Eine öffentliche http(s)-URL pro Zeile, bis 10. Wir holen jede einmal und schreiben CSS-/Bild-URLs um. Skripte fallen vor der PNG-Aufnahme weg. Das Layout folgt dem Viewport.',
	tool_batch_convert_web_pages_to_png_url_label: 'URLs (eine pro Zeile)',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1:
		'Ein Component-Kit als scharfes UI-Screenshot ablegen: 1-px-Rahmen bleiben lesbar. JPEG würde die Kanten verwischen.',
	tool_batch_convert_web_pages_to_png_usecase_2:
		'Ein schwebendes Panel mit transparentem PNG exportieren und auf einen Figma-Frame legen. Eine vollflächig weiße Startseite bleibt weiß.',
	tool_batch_convert_web_pages_to_png_usecase_3:
		'Chat-JPEG bleibt bei Mehrere Webseiten als JPG speichern, A4 bei Mehrere Webseiten als PDF speichern; hier nur verlustfreie UI-Raster.',
	tool_batch_convert_web_pages_to_png_usecases_title: 'Wann das passt',
	tool_batch_convert_web_pages_to_png_viewport_desktop: 'Desktop 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: 'Viewport',
	tool_batch_convert_web_pages_to_png_viewport_mobile: 'Telefon 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: 'Tablet 768',
	tool_batch_convert_web_pages_to_png_wait_hint:
		'Zusätzliche Sekunden, nachdem Bilder zu laden beginnen. Standard 1. Erhöhen, wenn das PNG leere Bildkästen zeigt.',
	tool_batch_convert_web_pages_to_png_wait_label: 'Ladewartezeit (s)',
};

export default de;
