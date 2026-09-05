/**
 * i18n 工具分片（compress-pdf / de）。按当地检索习惯独立重写。
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_compress_pdf_article:
    'Verkleinern Sie PDF-Dateien im Browser, indem jede Seite als JPEG neu gezeichnet und das Dokument neu aufgebaut wird—Dateien bleiben auf Ihrem Gerät, ohne Server-Upload. Ehrliche, begrenzte Kompression, kein Cloud-Re-Encoding.',
  tool_compress_pdf_choose_file: 'PDF wählen',
  tool_compress_pdf_clear: 'Leeren',
  tool_compress_pdf_compress: 'Komprimieren',
  tool_compress_pdf_desc:
    'PDF im Browser komprimieren und Dateigröße verringern—Dateien bleiben auf dem Gerät, ohne Server-Upload.',
  tool_compress_pdf_description:
    'PDF-Größe im Browser komprimieren und Bytes vorher/nachher vergleichen—nichts wird hochgeladen. Schritte: PDF öffnen, Mittel oder Niedrig wählen, komprimieren, herunterladen. Beispiel: Zwei-Seiten-Muster mit Bildern sinkt bei Mittel von ~180 KB auf ~90 KB. Text-PDFs ändern sich kaum. Verschlüsselte Dateien schlagen mit klarer Meldung fehl. Anders als Sortieren (Seiten) und Zusammenführen (mehrere Dateien).',
  tool_compress_pdf_download: 'Download',
  tool_compress_pdf_drop_hint: 'Oder PDF hier ablegen. Verarbeitung bleibt in diesem Tab.',
  tool_compress_pdf_empty: 'PDF zum Komprimieren hinzufügen.',
  tool_compress_pdf_err_compress: 'Komprimieren fehlgeschlagen. Datei prüfen und erneut versuchen.',
  tool_compress_pdf_err_encrypted: 'Dieses PDF scheint passwortgeschützt. Zuerst entsperren.',
  tool_compress_pdf_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_compress_pdf_example:
    'Muster lädt ein Zwei-Seiten-PDF mit Farbblöcken und eingebettetem JPEG, wendet Mittel-Kompression an, zeigt Größe vor/nachher mit Prozent Ersparnis und aktiviert Download von compressed.pdf.',
  tool_compress_pdf_example_title: 'PDF-Dateigröße verkleinern',
  tool_compress_pdf_faq_a1:
    'Nein. pdf.js und die PDF-Bibliothek laufen in Ihrem Tab (Bibliotheken ggf. vom CDN). Ihr PDF wird nicht auf unsere Server hochgeladen.',
  tool_compress_pdf_faq_a2:
    'Das Tool rasterisiert jede Seite zu JPEG und baut ein neues PDF. Textlastige oder bereits optimierte Dateien schrumpfen kaum. Kein Cloud-Recompress eingebetteter Streams.',
  tool_compress_pdf_faq_a3:
    'Nein. Seiten werden im Browser als Bilder neu gezeichnet—kein Cloud-Schritt, Ihre Bytes verlassen das Gerät nicht.',
  tool_compress_pdf_faq_a4: 'Passwortgeschützte PDFs scheitern hier meist. Passwort entfernen, dann komprimieren.',
  tool_compress_pdf_faq_a5:
    'Mittel behält mehr Detail (Skala 1.2, JPEG ~72 %). Niedrig ist kleiner aber weicher (Skala 1.0, JPEG ~55 %). Wählen nach E-Mail-Limit vs Lesbarkeit.',
  tool_compress_pdf_faq_q1: 'Wird mein PDF hochgeladen?',
  tool_compress_pdf_faq_q2: 'Warum kaum kleiner geworden?',
  tool_compress_pdf_faq_q3: 'Ist das Cloud-Re-Encoding?',
  tool_compress_pdf_faq_q4: 'Was ist mit verschlüsselten PDFs?',
  tool_compress_pdf_faq_q5: 'Welche Qualitätsstufe wählen?',
  tool_compress_pdf_how_body:
    'PDF wählen, Mittel oder Niedrig wählen, Komprimieren klicken, dann Download. Jede Seite wird als JPEG im neuen PDF gespeichert. Statistik zeigt Originalgröße, neue Größe und Prozentänderung. Bibliotheken laden beim ersten Mal.',
  tool_compress_pdf_how_item_1: "Wählen Sie die Eingabe mit „PDF wählen“",
  tool_compress_pdf_how_item_2: "Optionen einstellen und „Komprimieren“ anklicken",
  tool_compress_pdf_how_item_3: "Vorschau, Seitenzahl oder Statusmeldung prüfen",
  tool_compress_pdf_how_item_4: "Mit „Download“ das Ergebnis speichern",
  tool_compress_pdf_how_title: 'So funktioniert es',
  tool_compress_pdf_pages_label: 'Seiten',
  tool_compress_pdf_quality_label: 'Qualität',
  tool_compress_pdf_quality_low: 'Niedrig — kleinere Datei',
  tool_compress_pdf_quality_med: 'Mittel — ausgewogen',
  tool_compress_pdf_rules_body:
    'JPEG-Raster-Presets, Vorher/Nachher-Statistik, Datenschutz und Fehler bei lokaler Kompression.',
  tool_compress_pdf_rules_item_1:
    'Engine: pdf.js zeichnet jede Seite auf Canvas; die PDF-Bibliothek bettet JPEG-Seiten ein—kein Server-Roundtrip für Ihre Datei.',
  tool_compress_pdf_rules_item_2:
    'Presets: Mittel (Skala 1.2, JPEG ~72 %) vs Niedrig (Skala 1.0, JPEG ~55 %). Niedriger = kleiner, aber weicher.',
  tool_compress_pdf_rules_item_3:
    'Statistik: Original-Bytes, komprimierte Bytes und Prozentänderung. Unter 5 % Ersparnis Hinweis «kaum kleiner».',
  tool_compress_pdf_rules_item_4:
    'Grenzen: verschlüsselte/kaputte PDFs mit lesbarer Fehlermeldung; sehr große (>~25 MB) langsam; Text-PDFs oft wenig Effekt.',
  tool_compress_pdf_rules_title: 'Erwartete Regeln',
  tool_compress_pdf_sample: 'Muster laden',
  tool_compress_pdf_stats_tpl: '{from} → {to} · {pct} % gespart',
  tool_compress_pdf_status_done: 'Fertig — Download klicken für compressed.pdf.',
  tool_compress_pdf_status_working: 'PDF wird komprimiert…',
  tool_compress_pdf_title: 'PDF-Dateigröße verringern',
  tool_compress_pdf_usecase_1: 'Büro: Scan verkleinern vor E-Mail-Anhangslimit.',
  tool_compress_pdf_usecase_2: 'Studierende: foto-lastiges PDF für Upload-Formular verkleinern.',
  tool_compress_pdf_usecase_3: 'Webmaster: Marketing-PDF leichter teilen, wenn Rasterqualität reicht.',
  tool_compress_pdf_usecases_title: 'Gute Einsatzfälle',
  tool_compress_pdf_warn_large: 'Datei größer als ~25 MB—Kompression kann langsam sein oder in manchen Browsern scheitern.',
  tool_compress_pdf_warn_little: 'Kaum kleiner—Text- oder bereits komprimierte PDFs profitieren oft nicht von JPEG-Raster.',
  tool_compress_pdf_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen und erneut versuchen.',
  tool_compress_pdf_warn_pdfjs: 'PDF-Renderer konnte nicht geladen werden. Netzwerk prüfen und erneut versuchen.',
};
export default de;
