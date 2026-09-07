/**
 * i18n tool shard (convert-html-web-pages-to-word-document / de).
 * H1: HTML-Webseiten in ein Word-Dokument umwandeln.
 * IG: bearbeitbare Überschriften/Listen/Tabellen — kein A4-PDF, kein Screenshot, kein PDF→Word, kein Bilder→Word.
 */
import type { SiteLangDict } from '../../../types';

/** Sichtbare Texte für HTML→Word (de). */
const de: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: 'Erweiterte Einstellungen (optional)',
	tool_convert_html_web_pages_to_word_document_article:
		'Aus eingefügtem HTML oder einer öffentlichen URL wird ein .docx, das Sie weiterbearbeiten: Überschriften, Listen, Tabellen und Links werden Word-Formatvorlagen. Das ist kein A4-Druck-PDF und kein Screenshot. Eingefügtes HTML bleibt in diesem Tab und geht nicht auf den Server. Eine URL holen wir einmal und speichern sie nicht. Drucken: HTML in PDF umwandeln. Schon ein PDF: PDF in ein Word-Dokument umwandeln.',
	tool_convert_html_web_pages_to_word_document_clear: 'Leeren',
	tool_convert_html_web_pages_to_word_document_convert: 'Konvertieren',
	tool_convert_html_web_pages_to_word_document_desc:
		'HTML einfügen oder URL holen — editierbares Word, kein PDF und kein Screenshot.',
	tool_convert_html_web_pages_to_word_document_description:
		'HTML-Webseiten in ein Word-Dokument umwandeln (HTML in Word / HTML zu DOCX): HTML oder URL, dann ein editierbares .docx statt A4-PDF. Schritte: einfügen oder holen, Konvertieren, Herunterladen. Beispiel: Release-Notes mit Tabelle werden Word-Formatvorlagen. Eingefügtes HTML bleibt in diesem Tab; die URL wird einmal geholt und nicht gespeichert.',
	tool_convert_html_web_pages_to_word_document_download: 'Herunterladen',
	tool_convert_html_web_pages_to_word_document_empty: 'Zuerst HTML einfügen oder eine öffentliche URL eintragen.',
	tool_convert_html_web_pages_to_word_document_err_convert: 'Aus diesem HTML ließ sich keine Word-Datei bauen. Markup prüfen und erneut versuchen.',
	tool_convert_html_web_pages_to_word_document_err_load: 'Die Word-Bibliothek wurde nicht geladen. Neu laden und nochmal versuchen.',
	tool_convert_html_web_pages_to_word_document_err_url: 'Diese URL ließ sich nicht laden. Adresse prüfen — oder die Gegenseite blockiert Abrufe.',
	tool_convert_html_web_pages_to_word_document_err_url_empty: 'Zuerst eine gültige http(s)-URL eintragen.',
	tool_convert_html_web_pages_to_word_document_example:
		'Beispiel laden füllt Release-Notes-HTML (H1, Liste, Zweispaltentabelle, Link), führt Konvertieren aus und schaltet Herunterladen frei. Das .docx nutzt Überschriften- und Tabellenformat — Text ist editierbar. Im URL-Tab holt Konvertieren eine Live-Adresse.',
	tool_convert_html_web_pages_to_word_document_example_title: 'Beispiel',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'HTML in PDF umwandeln paginiert auf A4 zum Drucken. Hier wird HTML auf editierbare Absätze, Überschriften, Listen und Tabellen abgebildet. Gleiches HTML, anderes Artefakt.',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'Der Download ist .docx (HTML zu DOCX). Öffnen Sie ihn in Word oder einem Editor mit Office Open XML. Kein binäres .doc und kein Chrome-.mhtml.',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'Ja. URL-Tab öffnen, eine https-Adresse einfügen, Konvertieren. Skripte werden entfernt. Login-Wände und JavaScript-Apps weichen oft von der Live-Ansicht ab. CSS-Layout bleibt nicht pixelgenau.',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'PDF in ein Word-Dokument umwandeln startet bei einer PDF-Datei und ihrer Textschicht. Hier starten Sie bei eingefügtem HTML oder einer URL. Liegt schon ein PDF vor, nutzen Sie jenes Werkzeug.',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'Eingefügtes HTML verlässt diesen Tab nicht und wird nicht auf einen Server hochgeladen. Bei einer URL schicken wir die Adresse einmal zum Abruf und speichern sie nicht. Das .docx entsteht im Browser.',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'Nein. HTML exportieren oder kopieren. Chrome-Komplettspeicher / MHTML ist ein anderes Format und wird hier nicht geparst.',
	tool_convert_html_web_pages_to_word_document_faq_q1: 'Worin unterscheidet sich das von HTML in PDF umwandeln?',
	tool_convert_html_web_pages_to_word_document_faq_q2: 'Ist das Ergebnis HTML in Word / ein .docx?',
	tool_convert_html_web_pages_to_word_document_faq_q3: 'Kann ich eine Webseite per URL nach Word holen?',
	tool_convert_html_web_pages_to_word_document_faq_q4: 'Worin unterscheidet sich das von PDF in ein Word-Dokument umwandeln?',
	tool_convert_html_web_pages_to_word_document_faq_q5: 'Werden HTML oder URLs hochgeladen und gespeichert?',
	tool_convert_html_web_pages_to_word_document_faq_q6: 'Kann ich eine Chrome-.mhtml-Datei umwandeln?',
	tool_convert_html_web_pages_to_word_document_how_body:
		'Ein Konvertieren ergibt ein editierbares .docx: Überschriften und Tabellen werden Word-Formatvorlagen. Danach Herunterladen — nicht ein Bild der Ansicht.',
	tool_convert_html_web_pages_to_word_document_how_item_1:
		'Eigenes Markup bleibt bei HTML einfügen. Eine öffentliche https-Adresse (Webseite in Word) gehört in den URL-Tab.',
	tool_convert_html_web_pages_to_word_document_how_item_2:
		'Konvertieren drücken. Skripte fliegen raus. Überschriften, Listen, Tabellen, Links landen in Word. Fehlgeschlagene Bilder entfallen.',
	tool_convert_html_web_pages_to_word_document_how_item_3:
		'<img> aus dem HTML einbetten? Erweiterte Einstellungen — Bilder einschließen ist standardmäßig an, blockierte Bilder werden trotzdem übersprungen. Entwurf ohne Überschriften und Tabellen: Nur Text aktivieren (Bilder gehen dann ebenfalls aus).',
	tool_convert_html_web_pages_to_word_document_how_item_4:
		'A4-Druck: HTML in PDF umwandeln. Screenshot: Mehrere Webseiten in PNG oder JPG. Schon PDF: PDF in ein Word-Dokument umwandeln.',
	tool_convert_html_web_pages_to_word_document_how_item_5: 'Nach erfolgreichem Konvertieren: Herunterladen. .docx öffnen und Text ändern.',
	tool_convert_html_web_pages_to_word_document_how_title: 'So geht’s',
	tool_convert_html_web_pages_to_word_document_html_hint:
		'Fragment oder vollständiges HTML. Skripte werden vorher entfernt. Layout-CSS wird nicht pixelgenau nachgebaut.',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>Release-Notes</h1><p>HTML hier einfügen…</p>',
	tool_convert_html_web_pages_to_word_document_hud_download: 'Word-Datei herunterladen',
	tool_convert_html_web_pages_to_word_document_hud_elapsed_tpl: '{s} s vergangen',
	tool_convert_html_web_pages_to_word_document_hud_fail_hint: 'HTML oder URL prüfen, dann erneut Konvertieren.',
	tool_convert_html_web_pages_to_word_document_hud_fail_title: 'Umwandlung fehlgeschlagen',
	tool_convert_html_web_pages_to_word_document_hud_next: 'Umwandlung fertig. Als Nächstes: .docx herunterladen, öffnen und den Text ändern.',
	tool_convert_html_web_pages_to_word_document_hud_pct_tpl: '{pct} %',
	tool_convert_html_web_pages_to_word_document_hud_step_fetch: 'Abrufen',
	tool_convert_html_web_pages_to_word_document_hud_step_map: 'Zuordnen',
	tool_convert_html_web_pages_to_word_document_hud_step_pack: 'Packen',
	tool_convert_html_web_pages_to_word_document_hud_title: 'Fortschritt',
	tool_convert_html_web_pages_to_word_document_imgs_hint:
		'Wenn an, werden lesbare <img> eingebettet. Kaputte oder blockierte Bilder entfallen. Aus für reinen Text.',
	tool_convert_html_web_pages_to_word_document_imgs_label: 'Bilder einschließen',
	tool_convert_html_web_pages_to_word_document_opts_hint:
		'Bilder einschließen versucht Fotos aus dem HTML einzubetten. Nur Text macht aus Überschriften, Tabellen und Links gewöhnliche Absätze. CSS-Positionierung wird nicht abgebildet. Ausgabe ist immer ein .docx.',
	tool_convert_html_web_pages_to_word_document_plain_hint:
		'Nur bearbeitbare Absätze: keine Word-Überschriftenvorlagen, keine Tabellenobjekte, keine eingebetteten Bilder. Links werden zu „Beschriftung (URL)“. Zellen stehen tabgetrennt in Zeilen.',
	tool_convert_html_web_pages_to_word_document_plain_label: 'Nur Text',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'Ein Konvertieren, ein .docx. Überschriften, Absätze, Listen, Tabellen, Links und optionale Bilder werden abgebildet. Absolutes CSS, Fixleisten und Skripte nicht.',
	tool_convert_html_web_pages_to_word_document_rules_item_1:
		'Eingefügtes HTML bleibt in diesem Tab, ohne Server-Upload. Eine URL wird einmal geholt und nicht gespeichert.',
	tool_convert_html_web_pages_to_word_document_rules_item_2:
		'Standard: h1–h6 werden Word-Überschriften, ul/ol Listen, table eine Tabelle, a ein Hyperlink. „Nur Text“ in den erweiterten Einstellungen macht daraus normale Absätze.',
	tool_convert_html_web_pages_to_word_document_rules_item_3:
		'Login-Wände, JavaScript-Apps und Print-CSS weichen oft von der Live-Ansicht ab. Das ist kein Screenshot-Raster.',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'Gegen HTML in PDF: editierbares Word, keine A4-Bögen. Gegen PDF in Word: Eingabe ist HTML oder URL, kein PDF-Upload. Gegen Bilder zu Word: Eingabe ist Markup, kein Fotostapel.',
	tool_convert_html_web_pages_to_word_document_rules_title: 'Regeln, mit denen Sie rechnen sollten',
	tool_convert_html_web_pages_to_word_document_sample: 'Beispiel laden',
	tool_convert_html_web_pages_to_word_document_status_done: 'Fertig — als Nächstes Herunterladen.',
	tool_convert_html_web_pages_to_word_document_status_fetching: 'HTML der URL wird geholt…',
	tool_convert_html_web_pages_to_word_document_status_mapping: 'HTML wird Word-Absätzen zugeordnet…',
	tool_convert_html_web_pages_to_word_document_status_packing: '.docx wird gepackt…',
	tool_convert_html_web_pages_to_word_document_status_working: 'Word-Dokument wird gebaut…',
	tool_convert_html_web_pages_to_word_document_tab_html: 'HTML einfügen',
	tool_convert_html_web_pages_to_word_document_tab_url: 'URL',
	tool_convert_html_web_pages_to_word_document_title: 'HTML-Webseiten in ein Word-Dokument umwandeln',
	tool_convert_html_web_pages_to_word_document_url_hint:
		'Eine öffentliche http(s)-URL. Wir holen das HTML einmal und schreiben CSS-/Bild-URLs um. Skripte fliegen vor dem Word-Mapping raus.',
	tool_convert_html_web_pages_to_word_document_url_label: 'URL',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1:
		'A4-Ausdrucke bleiben bei HTML in PDF, Screenshots bei PNG-Stapel. Hier nur, wenn ein editierbares .docx gebraucht wird.',
	tool_convert_html_web_pages_to_word_document_usecase_2:
		'Hilfezentrum-HTML exportieren und als Word-Entwurf an Legal geben — Überschriften bleiben Überschriften.',
	tool_convert_html_web_pages_to_word_document_usecase_3:
		'Öffentliche Release-Notes-URL holen und die Tabelle als echte, editierbare Word-Tabelle behalten.',
	tool_convert_html_web_pages_to_word_document_usecases_title: 'Gute Einsätze',
};

export default de;
