/**
 * i18n tool shard (pdf-page-to-image-sizes / de). Unabhängig für deutsche Suche formuliert.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_pdf_page_to_image_sizes_article:
    'Wählen Sie eine PDF-Seite und exportieren Sie ein ZIP mit Social-JPEGs — 1080 Quadrat, OG 1200×630, HD 1280×720, Story 1080×1920. der Seitenrenderer rendert einmal; Canvas passt jedes Preset mit weißen Rändern an.',
  tool_pdf_page_to_image_sizes_choose_file: 'PDF wählen',
  tool_pdf_page_to_image_sizes_clear: 'Leeren',
  tool_pdf_page_to_image_sizes_desc:
    'Eine PDF-Seite als Multi-Size-JPEG-Paket auf dem Gerät exportieren — ZIP; ohne Server-Upload.',
  tool_pdf_page_to_image_sizes_description:
    'Verwandeln Sie eine PDF-Seite im Browser in ein Multi-Size-JPEG-Paket — Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen. PDF wählen, Seitennummer (Standard 1) setzen, Exportieren, dann ZIP mit page-N-WxH.jpg laden. Beispiel: Die Beispiel-Coverseite liefert vier Presets (1080², 1200×630, 1280×720, 1080×1920). Passwortgeschützte oder defekte PDFs zeigen einen klaren Fehler.',
  tool_pdf_page_to_image_sizes_download: 'Download',
  tool_pdf_page_to_image_sizes_drop_hint: 'Oder PDF hier ablegen. Verarbeitung in diesem Tab.',
  tool_pdf_page_to_image_sizes_empty: 'Zuerst eine PDF-Datei wählen.',
  tool_pdf_page_to_image_sizes_err_bad_page: 'Seitennummer außerhalb des Bereichs. Gesamtseitenzahl prüfen.',
  tool_pdf_page_to_image_sizes_err_encrypted: 'Diese PDF scheint passwortgeschützt. Zuerst entsperren.',
  tool_pdf_page_to_image_sizes_err_export: 'Export fehlgeschlagen. Datei und Seitennummer prüfen.',
  tool_pdf_page_to_image_sizes_err_fflate: 'ZIP-Bibliothek konnte nicht geladen werden. Netzwerk prüfen.',
  tool_pdf_page_to_image_sizes_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_pdf_page_to_image_sizes_err_pdfjs: 'PDF-Renderer konnte nicht geladen werden. Netzwerk prüfen.',
  tool_pdf_page_to_image_sizes_example:
    'Beispiel erstellt ein einseitiges PDF, exportiert Seite 1 in vier JPEG-Presets und aktiviert Download für page-1-sizes.zip.',
  tool_pdf_page_to_image_sizes_example_title: 'Beispiel',
  tool_pdf_page_to_image_sizes_export: 'Exportieren',
  tool_pdf_page_to_image_sizes_faq_a1:
    'Nein. der Seitenrenderer, die PDF-Bibliothek und die ZIP-Bibliothek laufen in Ihrem Tab (Skripte ggf. von dieser Website). Ihre PDF wird nicht auf unsere Server hochgeladen.',
  tool_pdf_page_to_image_sizes_faq_a2:
    'PDF zu JPG exportiert jede Seite im Originalseitenverhältnis. Dieses Tool wählt eine Seite und passt sie in feste Plattformgrößen ein (contain, zentriert, weiße Ränder).',
  tool_pdf_page_to_image_sizes_faq_a3:
    '1080×1080 (Instagram-Quadrat), 1200×630 (Open Graph / Facebook-Vorschau), 1280×720 (HD Querformat), 1080×1920 (Story / vertikal).',
  tool_pdf_page_to_image_sizes_faq_a4:
    'Die Seite wird skaliert, um ganz ohne Beschnitt zu passen. Leerraum wird weiß gefüllt für saubere JPEGs.',
  tool_pdf_page_to_image_sizes_faq_a5:
    'Dateien über ~25 MB können langsam sein oder in manchen Browsern scheitern. Komplexe Seiten brauchen mehr Speicher.',
  tool_pdf_page_to_image_sizes_faq_q1: 'Wird meine PDF hochgeladen?',
  tool_pdf_page_to_image_sizes_faq_q2: 'Unterschied zu PDF zu JPG?',
  tool_pdf_page_to_image_sizes_faq_q3: 'Welche Größen sind enthalten?',
  tool_pdf_page_to_image_sizes_faq_q4: 'Warum weißer Rand um das Bild?',
  tool_pdf_page_to_image_sizes_faq_q5: 'Gibt es Größenlimits?',
  tool_pdf_page_to_image_sizes_how_body:
    'PDF wählen, Seitennummer (ab 1) eingeben, Exportieren, dann Download. Ein Render, Anpassung an jedes Preset, dann ZIP.',
  tool_pdf_page_to_image_sizes_how_title: 'So funktioniert es',
  tool_pdf_page_to_image_sizes_page_label: 'Seitennummer',
  tool_pdf_page_to_image_sizes_pages_label: 'Seiten',
  tool_pdf_page_to_image_sizes_rules_body:
    'Preset-Größen, Contain-Verhalten, JPEG, ZIP-Namen, Datenschutz und Fehlerfälle.',
  tool_pdf_page_to_image_sizes_rules_item_1:
    'Presets: 1080×1080 (instagram-square), 1200×630 (og-facebook), 1280×720 (hd-landscape), 1080×1920 (story-portrait).',
  tool_pdf_page_to_image_sizes_rules_item_2:
    'Gewählte Seite einmal in 2× skaliert rendern, dann drawImage contain zentriert; JPEG-Qualität 0.9.',
  tool_pdf_page_to_image_sizes_rules_item_3:
    'ZIP-Dateinamen: page-{N}-{W}x{H}.jpg. Archiv: page-{N}-sizes.zip.',
  tool_pdf_page_to_image_sizes_rules_item_4:
    'Datenschutz & Limits: Bytes bleiben im Tab; verschlüsselte/defekte PDFs scheitern klar; >~25 MB kann langsam sein.',
  tool_pdf_page_to_image_sizes_rules_title: 'Erwartete Regeln',
  tool_pdf_page_to_image_sizes_sample: 'Beispiel laden',
  tool_pdf_page_to_image_sizes_stats_tpl: 'Seite {page} · {n} Größen · {bytes}',
  tool_pdf_page_to_image_sizes_status_done: 'Fertig — Download für ZIP klicken.',
  tool_pdf_page_to_image_sizes_status_exporting: 'Seite wird gerendert und Größenpaket erstellt…',
  tool_pdf_page_to_image_sizes_title: 'PDF-Seite in mehreren Größen — Multi-Size-Exportpaket',
  tool_pdf_page_to_image_sizes_usecase_1: 'Social: Poster-PDF → IG-Quadrat, OG und Story in einem ZIP.',
  tool_pdf_page_to_image_sizes_usecase_2: 'Webmaster: Cover-Folie 1200×630 für Link-Vorschau ohne manuelles Zuschneiden.',
  tool_pdf_page_to_image_sizes_usecase_3: 'Studierende: Eine Vorlesungsfolie in handyfreundlichen Größen speichern.',
  tool_pdf_page_to_image_sizes_usecases_title: 'Gute Einsatzfälle',
  tool_pdf_page_to_image_sizes_warn_large: 'Datei größer als ~25 MB — Export kann langsam sein oder scheitern.',
  tool_pdf_page_to_image_sizes_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen.',
};
export default de;
