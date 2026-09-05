/**
 * i18n tool shard (crop-pdf / de). Unabhängige Formulierung für lokale Suche.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_crop_pdf_all_sides_label: 'Alle Seiten (pt)',
  tool_crop_pdf_article:
    'PDF-Ränder im Browser trimmen—einheitlich oder pro Seite in Punkten. Kein Pixel-Drag-Editor; Dateien bleiben auf dem Gerät.',
  tool_crop_pdf_bottom_label: 'Unten (pt)',
  tool_crop_pdf_choose_file: 'PDF wählen',
  tool_crop_pdf_clear: 'Leeren',
  tool_crop_pdf_crop: 'Zuschneiden',
  tool_crop_pdf_desc:
    'PDF-Seitenränder auf dem Gerät trimmen—einheitlich oder pro Seite (pt); ohne Server-Upload.',
  tool_crop_pdf_description:
    'PDF-Ränder im Browser durch Verengen der CropBox trimmen—nichts wird auf einen Server hochgeladen. Oben/rechts/unten/links in Punkten (Standard 36) oder ein Wert für alle Seiten, dann herunterladen. Beispiel: Einseiten-Muster schneidet 36 pt auf jeder Seite ab und aktiviert cropped.pdf mit Größenstatistik. Kein Drag-Pixel-Editor; verschlüsselte PDFs schlagen mit klarer Meldung fehl.',
  tool_crop_pdf_download: 'Download',
  tool_crop_pdf_drop_hint: 'Oder PDF hier ablegen. Verarbeitung bleibt in diesem Tab.',
  tool_crop_pdf_empty: 'Zuerst eine PDF-Datei wählen.',
  tool_crop_pdf_err_crop: 'Zuschneiden fehlgeschlagen. Ränder und Datei prüfen und erneut versuchen.',
  tool_crop_pdf_err_encrypted: 'Diese PDF scheint passwortgeschützt. Zuerst entsperren, dann zuschneiden.',
  tool_crop_pdf_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_crop_pdf_err_margin:
    'Ränder zu groß—breite oder Höhe nach Schnitt wäre ≤ 10 pt. Eine oder mehr Seiten verkleinern.',
  tool_crop_pdf_example:
    'Muster erstellt eine Einseiten-PDF, schneidet 36 pt auf allen Seiten ab und aktiviert cropped.pdf mit Größenstatistik.',
  tool_crop_pdf_example_title: 'Beispiel',
  tool_crop_pdf_faq_a1:
    'Nein. die PDF-Bibliothek läuft in Ihrem Tab (Skripte ggf. von CDN). Ihre PDF wird nicht auf unsere Server hochgeladen.',
  tool_crop_pdf_faq_a2:
    'Dieses Tool verengt PDF-Boxen per Punkt-Rändern—kein Rechteck auf der Vorschau ziehen wie bei Bildern.',
  tool_crop_pdf_faq_a3:
    'Richtig. Nur Punkteingabe; kein Freihand-Rahmen oder Pixelbearbeitung—Bild-Tool nutzen, wenn nötig.',
  tool_crop_pdf_faq_a4:
    'Passwortgeschützte PDFs lassen sich hier meist nicht öffnen. Passwort mit vertrauenswürdigem Tool entfernen, dann zuschneiden.',
  tool_crop_pdf_faq_q1: 'Wird meine PDF hochgeladen?',
  tool_crop_pdf_faq_q2: 'Unterschied zum Bild-Zuschneiden?',
  tool_crop_pdf_faq_q3: 'Ist das ein Pixel-Drag-Editor?',
  tool_crop_pdf_faq_q4: 'Was ist mit verschlüsselten PDFs?',
  tool_crop_pdf_how_body:
    'PDF wählen, Ränder in Punkten setzen (alle Seiten oder je Kante), Zuschneiden klicken, dann Download. Zuschneide- und Medienrahmen schrumpfen; Viewer und Druck respektieren die neuen Grenzen. Alles im Tab nach dem Laden der Bibliothek—keine Datei geht an einen Server.',
  tool_crop_pdf_how_item_1: "Wählen Sie die Eingabe mit „PDF wählen“",
  tool_crop_pdf_how_item_2: "Optionen einstellen und „Zuschneiden“ anklicken",
  tool_crop_pdf_how_item_3: "Vorschau, Seitenzahl oder Statusmeldung prüfen",
  tool_crop_pdf_how_item_4: "Mit „Download“ das Ergebnis speichern",
  tool_crop_pdf_how_title: 'So funktioniert es',
  tool_crop_pdf_left_label: 'Links (pt)',
  tool_crop_pdf_margins_title: 'Zu trimmende Ränder (Punkte)',
  tool_crop_pdf_pages_label: 'Seiten in Datei',
  tool_crop_pdf_right_label: 'Rechts (pt)',
  tool_crop_pdf_rules_body: 'Randrechnung, PDF-Boxen, Grenzen, Datenschutz und Fehler beim lokalen Zuschneiden.',
  tool_crop_pdf_rules_item_1: 'Einheiten: PDF-Punkte (pt). 72 pt ≈ 1 Zoll. Muster: 36 pt (½ Zoll) pro Seite.',
  tool_crop_pdf_rules_item_2: 'Boxen: Zuschneide- und Medienrahmen schrumpfen von jeder Kante. Ursprung unten links (PDF-Spec).',
  tool_crop_pdf_rules_item_3: 'Sicherheit: wenn Breite oder Höhe nach Schnitt ≤ 10 pt, werden Einstellungen vor dem Speichern abgelehnt.',
  tool_crop_pdf_rules_item_4: 'Datenschutz & Limits: Bytes im Tab; verschlüsselt/kaputt scheitert klar; riesige Dateien können langsam werden.',
  tool_crop_pdf_rules_title: 'Erwartete Regeln',
  tool_crop_pdf_sample: 'Muster laden',
  tool_crop_pdf_stats_page_tpl: 'Seite {n}: {ow}×{oh} pt → {nw}×{nh} pt',
  tool_crop_pdf_stats_tpl: '{pages} · {bytes}',
  tool_crop_pdf_status_cropping: 'PDF wird zugeschnitten…',
  tool_crop_pdf_status_done: 'Fertig — Download klicken für cropped.pdf.',
  tool_crop_pdf_title: 'PDF zuschneiden — Ränder im Browser trimmen',
  tool_crop_pdf_top_label: 'Oben (pt)',
  tool_crop_pdf_uniform_hint: '«Alle Seiten» ändern aktualisiert jede Kante; einzelne Seiten fein justierbar.',
  tool_crop_pdf_usecase_1: 'Büro: weiße Scan-Ränder vor Druck oder Archiv entfernen.',
  tool_crop_pdf_usecase_2: 'Studierende: Handout-Ränder straffen für mehr Inhalt auf dem Bildschirm.',
  tool_crop_pdf_usecase_3: 'Seitenbetreiber: gleichen Rand auf einseitigem Flyer-Export trimmen.',
  tool_crop_pdf_usecases_title: 'Gute Einsätze',
  tool_crop_pdf_warn_large: 'Datei größer als ~25 MB — Zuschneiden kann langsam sein oder in manchen Browsern scheitern.',
  tool_crop_pdf_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen und erneut versuchen.',
};
export default de;
