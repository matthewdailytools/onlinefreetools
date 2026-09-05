/**
 * i18n tool shard (pdf-to-markdown / de). Unabhängige Formulierung.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_pdf_to_markdown_article:
    'Extrahieren Sie wählbaren Text aus der PDF-Textschicht im Browser und laden Sie Markdown herunter — Dateien bleiben auf Ihrem Gerät, ohne Server-Upload. Kein OCR.',
  tool_pdf_to_markdown_choose_file: 'PDF wählen',
  tool_pdf_to_markdown_clear: 'Leeren',
  tool_pdf_to_markdown_convert: 'Konvertieren',
  tool_pdf_to_markdown_desc:
    'PDF-Text im Browser in Markdown für Notizen — ohne Server-Upload; Dateien bleiben auf dem Gerät.',
  tool_pdf_to_markdown_description:
    'PDF-Text im Browser als Markdown extrahieren für Notizen oder LLM — Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen. Schritte: PDF mit Textschicht wählen, Konvertieren, Vorschau prüfen, .md herunterladen. Beispiel: Einseiten-Sample wird .md mit „Hello PDF to Markdown sample.“ Scan-only scheitert ohne OCR. Verschlüsselte Dateien: klare Fehlermeldung.',
  tool_pdf_to_markdown_download: '.md herunterladen',
  tool_pdf_to_markdown_drop_hint: 'Oder PDF hier ablegen. Verarbeitung bleibt in diesem Tab.',
  tool_pdf_to_markdown_empty: 'Zuerst eine PDF-Datei wählen.',
  tool_pdf_to_markdown_err_convert: 'Konvertierung fehlgeschlagen. Datei prüfen und erneut versuchen.',
  tool_pdf_to_markdown_err_encrypted: 'Diese PDF scheint passwortgeschützt. Entsperren und erneut versuchen.',
  tool_pdf_to_markdown_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_pdf_to_markdown_err_notext:
    'Kein wählbarer Text. Nur Textschicht — kein OCR. Digitale PDF versuchen oder PDF zu JPG für Bilder.',
  tool_pdf_to_markdown_err_pdfjs: 'PDF-Renderer konnte nicht geladen werden. Netzwerk prüfen und erneut versuchen.',
  tool_pdf_to_markdown_example:
    'Beispiel erstellt einseitige Helvetica-PDF, konvertiert, zeigt den Satz in der Vorschau und aktiviert .md-Download.',
  tool_pdf_to_markdown_example_title: 'Beispiel',
  tool_pdf_to_markdown_faq_a1:
    'Nein. der Seitenrenderer läuft in Ihrem Tab (Skripte ggf. per CDN). Ihre PDF wird nicht auf unsere Server hochgeladen.',
  tool_pdf_to_markdown_faq_a2:
    'Scans sind meist Bilder ohne Textschicht. Ohne OCR bleibt die Extraktion leer — klare Fehlermeldung.',
  tool_pdf_to_markdown_faq_a3: 'Keine Wiederherstellung von Überschriften/Tabellen — einfache Zeilen nach Position.',
  tool_pdf_to_markdown_faq_a4:
    'Text aus PDF extrahieren lädt plain .txt mit Leerzeilen zwischen Seiten. Dieses Tool packt jede Seite in ## Page N und trennt mit --- für Markdown-Editoren.',
  tool_pdf_to_markdown_faq_a5:
    'PDF zu JPG rasterisiert jede Seite als Bild. Dieses Tool bei bearbeitbarem Text aus digitaler PDF.',
  tool_pdf_to_markdown_faq_q1: 'Wird meine PDF hochgeladen?',
  tool_pdf_to_markdown_faq_q2: 'Warum scheitert mein Scan-PDF?',
  tool_pdf_to_markdown_faq_q3: 'Bleiben Überschriften oder Tabellen erhalten?',
  tool_pdf_to_markdown_faq_q4: 'Unterschied zu Text aus PDF extrahieren?',
  tool_pdf_to_markdown_faq_q5: 'Wann PDF zu JPG nutzen?',
  tool_pdf_to_markdown_how_body:
    'PDF mit Textebene wählen, konvertieren, Markdown-Entwurf mit Seitenüberschriften prüfen, dann .md laden. Scans ohne Text schlagen klar fehl — kein OCR.',
  tool_pdf_to_markdown_how_item_1: "PDF mit Textebene wählen oder ablegen (oder Beispiel laden)",
  tool_pdf_to_markdown_how_item_2: "Konvertieren klicken, um den Markdown-Entwurf zu bauen",
  tool_pdf_to_markdown_how_item_3: "Abschnitte ## Page N und --- als Trenner in der Vorschau prüfen",
  tool_pdf_to_markdown_how_item_4: ".md herunterladen klicken, um den Entwurf zu speichern",
  tool_pdf_to_markdown_how_title: 'So funktioniert es',
  tool_pdf_to_markdown_pages_label: 'Seiten',
  tool_pdf_to_markdown_preview_label: 'Markdown-Vorschau',
  tool_pdf_to_markdown_rules_body: 'Textschicht-Extraktion, Seitentrenner, kein OCR, Datenschutz und Fehlerfälle.',
  tool_pdf_to_markdown_rules_item_1: 'Jede Seite wird ## Page N plus Textzeilen; Seiten mit --- für Markdown-Editoren getrennt.',
  tool_pdf_to_markdown_rules_item_2: 'Anders als Text aus PDF (.txt): dieser Download ist ein .md-Entwurf für Editoren — keine layoutgetreue Konvertierung.',
  tool_pdf_to_markdown_rules_item_3: 'Kein OCR: leerer trim → harter Fehler mit Hinweis.',
  tool_pdf_to_markdown_rules_item_4: 'Grenzen: Bytes im Tab; verschlüsselt/kaputt klar; >~25 MB kann langsam sein.',
  tool_pdf_to_markdown_rules_title: 'Erwartete Regeln',
  tool_pdf_to_markdown_sample: 'Beispiel laden',
  tool_pdf_to_markdown_stats_tpl: '{n} Seite(n) · {chars} Zeichen',
  tool_pdf_to_markdown_status_converting: 'Text wird extrahiert…',
  tool_pdf_to_markdown_status_done: 'Fertig — .md herunterladen zum Speichern.',
  tool_pdf_to_markdown_title: 'PDF zu Markdown — Text im Browser für Notizen extrahieren',
  tool_pdf_to_markdown_usecase_1: 'Büro: Vertragsklauseln in Notizen kopieren ohne Abtippen.',
  tool_pdf_to_markdown_usecase_2: 'Autoren & KI: Berichte als Markdown für Bearbeitung oder Prompts.',
  tool_pdf_to_markdown_usecase_3: 'Studierende: Vorlesungstext aus PDF mit Textschicht.',
  tool_pdf_to_markdown_usecases_title: 'Gute Einsatzfälle',
  tool_pdf_to_markdown_warn_large: 'Datei größer als ~25 MB — Extraktion kann langsam scheitern.',
  tool_pdf_to_markdown_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen.',
};
export default de;
