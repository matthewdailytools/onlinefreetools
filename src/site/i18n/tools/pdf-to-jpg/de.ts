/**
 * i18n tool shard (pdf-to-jpg / de). Unabhängige Neufassung für deutschsprachige Suche.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_pdf_to_jpg_article:
    'der Seitenrenderer rendert jede PDF-Seite im Browser als JPEG. Mehrere Seiten laden als ZIP via die ZIP-Bibliothek—die Datei bleibt auf dem Gerät.',
  tool_pdf_to_jpg_choose_file: 'PDF wählen',
  tool_pdf_to_jpg_clear: 'Leeren',
  tool_pdf_to_jpg_convert: 'Konvertieren',
  tool_pdf_to_jpg_desc: 'PDF-Seiten als JPG auf dem Gerät—ZIP bei mehreren Seiten; ohne Server-Upload.',
  tool_pdf_to_jpg_description:
    'Wandeln Sie PDF-Seiten im Browser in JPG-Bilder um—Dateien bleiben auf dem Gerät und werden nicht auf einen Server hochgeladen. Schritte: PDF wählen, Konvertieren, Herunterladen. Beispiel: eine Zwei-Seiten-Vorschau ergibt page-1.jpg und page-2.jpg in einem ZIP. Einseitige PDFs laden ein JPG direkt. Passwortgeschützte oder beschädigte Dateien zeigen einen klaren Fehler.',
  tool_pdf_to_jpg_download: 'Download',
  tool_pdf_to_jpg_drop_hint: 'Oder PDF hier ablegen. Verarbeitung bleibt in diesem Tab.',
  tool_pdf_to_jpg_empty: 'Zuerst eine PDF-Datei wählen.',
  tool_pdf_to_jpg_err_convert: 'Konvertierung fehlgeschlagen. Datei prüfen und erneut versuchen.',
  tool_pdf_to_jpg_err_encrypted: 'Diese PDF scheint passwortgeschützt. Entsperren und erneut versuchen.',
  tool_pdf_to_jpg_err_fflate: 'ZIP-Bibliothek konnte nicht geladen werden. Netzwerk prüfen.',
  tool_pdf_to_jpg_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_pdf_to_jpg_err_pdfjs: 'PDF-Renderer konnte nicht geladen werden. Netzwerk prüfen.',
  tool_pdf_to_jpg_example:
    'Die Vorschau erstellt eine Zwei-Seiten-PDF, konvertiert jede Seite und aktiviert Download als ZIP mit page-1.jpg und page-2.jpg.',
  tool_pdf_to_jpg_example_title: 'PDF-Seiten in JPG umwandeln',
  tool_pdf_to_jpg_faq_a1:
    'Nein. der Seitenrenderer und die ZIP-Bibliothek laufen in Ihrem Tab (Skripte ggf. vom CDN). Ihre PDF wird nicht auf unsere Server hochgeladen.',
  tool_pdf_to_jpg_faq_a2:
    'Mehr als eine Seite → ZIP pdf-pages.zip mit page-1.jpg, page-2.jpg usw. Eine Seite → ein JPG direkt.',
  tool_pdf_to_jpg_faq_a3:
    'Bilder zu PDF fügt Fotos zu einer mehrseitigen PDF zusammen. Dieses Tool exportiert jede PDF-Seite als separates JPG.',
  tool_pdf_to_jpg_faq_a4:
    'Seiten werden in 2× Skalierung gerendert für schärferen Text. Sehr große PDFs können länger dauern.',
  tool_pdf_to_jpg_faq_a5:
    'Diese Seite liefert nur JPG. Nutzen Sie den Bildformat-Konverter für PNG oder WebP aus vorhandenen Bildern.',
  tool_pdf_to_jpg_faq_q1: 'Wird meine PDF hochgeladen?',
  tool_pdf_to_jpg_faq_q2: 'Wann ZIP und wann ein JPG?',
  tool_pdf_to_jpg_faq_q3: 'Unterschied zu Bilder zu PDF?',
  tool_pdf_to_jpg_faq_q4: 'Warum wirkt das JPG scharf oder weich?',
  tool_pdf_to_jpg_faq_q5: 'Geht auch PNG?',
  tool_pdf_to_jpg_how_body:
    'PDF wählen, Konvertieren, Herunterladen. Jede Seite wird JPG; mehrere Seiten als ZIP. Alles im Tab nach dem Laden der Bibliotheken—keine Datei geht an einen Server.',
  tool_pdf_to_jpg_how_title: 'So funktioniert es',
  tool_pdf_to_jpg_pages_label: 'Seiten',
  tool_pdf_to_jpg_rules_body: 'Render-Skala, JPG-Ausgabe, ZIP vs Einzeldatei, Datenschutz und Fehler.',
  tool_pdf_to_jpg_rules_item_1:
    'Jede Seite als JPEG mit 2× Skala und Qualität 0.92—gut für Folien und Scans.',
  tool_pdf_to_jpg_rules_item_2: 'Namen: page-N.jpg für Seite N. Mehrere Seiten → pdf-pages.zip.',
  tool_pdf_to_jpg_rules_item_3: 'Ausgabe: 1 Seite → JPG; 2+ → ZIP via die ZIP-Bibliothek.',
  tool_pdf_to_jpg_rules_item_4:
    'Datenschutz & Grenzen: Bytes bleiben im Tab; verschlüsselte/kaputte PDFs scheitern klar; >25 MB kann langsam sein.',
  tool_pdf_to_jpg_rules_title: 'Erwartete Regeln',
  tool_pdf_to_jpg_sample: 'Beispiel laden',
  tool_pdf_to_jpg_stats_tpl: '{n} Seite(n) · {bytes}',
  tool_pdf_to_jpg_status_converting: 'Seiten werden in JPG konvertiert…',
  tool_pdf_to_jpg_status_done: 'Fertig — Download klicken zum Speichern.',
  tool_pdf_to_jpg_title: 'PDF-Seiten in JPG umwandeln',
  tool_pdf_to_jpg_usecase_1: 'Büro: Folie oder Unterschriftsseite als JPG für Chat exportieren.',
  tool_pdf_to_jpg_usecase_2: 'Marketing: JPG-Vorschaubilder aus Katalog-PDF ziehen.',
  tool_pdf_to_jpg_usecase_3: 'Studium: PDF-Vorlesungsseiten als Bilder für Notizen.',
  tool_pdf_to_jpg_usecases_title: 'Typische Einsätze',
  tool_pdf_to_jpg_warn_large: 'Datei größer als ~25 MB — Konvertierung kann langsam sein oder scheitern.',
  tool_pdf_to_jpg_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen.',
};
export default de;
