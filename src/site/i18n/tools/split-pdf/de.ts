/**
 * i18n tool shard（split-pdf / de）. Eigenständige Formulierung.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_split_pdf_article:
    'Teilen Sie ein PDF seitenweise oder nach Bereichen mit clientseitigem pdf-lib. Mehrere Ausgaben als ZIP über fflate — ohne Server-Upload; Dateien bleiben auf dem Gerät.',
  tool_split_pdf_choose_file: 'PDF wählen',
  tool_split_pdf_clear: 'Leeren',
  tool_split_pdf_desc: 'Seiten auf Ihrem Gerät aus einem PDF extrahieren — jede Seite oder Bereiche; bei Bedarf ZIP; ohne Server-Upload.',
  tool_split_pdf_description:
    'Teilen Sie ein PDF im Browser und laden Sie Seiten oder Bereiche separat herunter — ohne Server-Upload. Schritte: PDF wählen, jede Seite oder Bereiche wie 1-3,5 angeben, teilen, dann herunterladen. Beispiel: ein dreiseitiges Beispiel wird zu einem ZIP mit page-1.pdf bis page-3.pdf. Eine einzelne Ausgabe lädt als PDF. Verschlüsselte Dateien scheitern mit klarer Meldung.',
  tool_split_pdf_download: 'Download',
  tool_split_pdf_drop_hint: 'Oder ein PDF hier ablegen. Die Verarbeitung bleibt in diesem Tab.',
  tool_split_pdf_empty: 'Wählen Sie zuerst eine PDF-Datei.',
  tool_split_pdf_err_encrypted: 'Dieses PDF scheint passwortgeschützt. Entsperren Sie es und versuchen Sie es erneut.',
  tool_split_pdf_err_fflate: 'ZIP-Bibliothek konnte nicht geladen werden. Netzwerk prüfen und erneut versuchen.',
  tool_split_pdf_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_split_pdf_err_range: 'Ungültige oder außerhalb liegende Seiten. Bereiche ab 1, z. B. 1-3,5.',
  tool_split_pdf_err_split: 'Teilen fehlgeschlagen. Datei und Bereiche prüfen und erneut versuchen.',
  tool_split_pdf_example:
    'Das Beispiel erzeugt ein dreiseitiges PDF, teilt jede Seite und aktiviert Download für ein ZIP mit page-1.pdf, page-2.pdf und page-3.pdf.',
  tool_split_pdf_example_title: 'Mein PDF aufteilen',
  tool_split_pdf_faq_a1:
    'Nein. pdf-lib und fflate laufen in Ihrem Tab (Skripte können von einem CDN kommen). Ihr PDF wird nicht hochgeladen.',
  tool_split_pdf_faq_a2:
    'Seiten ab 1: 1-3,5 bedeutet Seiten 1–3 und 5. Leerzeichen optional. Leere oder ungültige Werte scheitern.',
  tool_split_pdf_faq_a3:
    'Mehr als eine Datei → ZIP. Genau eine Ausgabe → PDF-Download.',
  tool_split_pdf_faq_a4:
    'Passwortgeschützte PDFs lassen sich hier oft nicht öffnen. Passwort mit einem vertrauenswürdigen Tool entfernen, dann teilen.',
  tool_split_pdf_faq_a5:
    'PDF zusammenfügen verbindet mehrere PDFs. Dieses Tool extrahiert Seiten aus einem PDF in separate Dateien.',
  tool_split_pdf_faq_q1: 'Wird mein PDF hochgeladen?',
  tool_split_pdf_faq_q2: 'Wie funktionieren Seitenbereiche?',
  tool_split_pdf_faq_q3: 'Wann ZIP und wann PDF?',
  tool_split_pdf_faq_q4: 'Was ist mit verschlüsselten PDFs?',
  tool_split_pdf_faq_q5: 'Unterschied zu PDF zusammenfügen?',
  tool_split_pdf_how_body:
    'Ein PDF wählen, jede Seite oder Bereiche wählen, Teilen, dann Download. Mehrere Ausgaben → ZIP; eine → PDF. Nach dem Laden der Bibliotheken alles lokal.',
  tool_split_pdf_how_item_1: "Wählen Sie die Eingabe mit „PDF wählen“",
  tool_split_pdf_how_item_2: "Optionen einstellen und „Teilen“ anklicken",
  tool_split_pdf_how_item_3: "Vorschau, Seitenzahl oder Statusmeldung prüfen",
  tool_split_pdf_how_item_4: "Mit „Download“ das Ergebnis speichern",
  tool_split_pdf_how_title: 'So funktioniert’s',
  tool_split_pdf_mode_every: 'Jede Seite (eine Datei pro Seite)',
  tool_split_pdf_mode_label: 'Teilungsmodus',
  tool_split_pdf_mode_ranges: 'Eigene Seitenbereiche',
  tool_split_pdf_pages_label: 'Seiten in der Datei',
  tool_split_pdf_ranges_hint: 'Beispiel: 1-3,5 (ab 1)',
  tool_split_pdf_ranges_label: 'Seitenbereiche',
  tool_split_pdf_rules_body:
    'Bereiche ab 1, Dateinamen, ZIP vs PDF, Datenschutz und Fehlerfälle lokal.',
  tool_split_pdf_rules_item_1:
    'Modi: jede Seite → ein PDF pro Seite; Bereiche → ein PDF pro kommagetrenntem Segment (z. B. 1-3 und 5).',
  tool_split_pdf_rules_item_2:
    'Namen: page-N.pdf für eine Seite; pages-A-B.pdf für einen zusammenhängenden Bereich.',
  tool_split_pdf_rules_item_3:
    'Ausgabe: mehr als eine Datei → ZIP mit fflate; genau eine → dieses PDF herunterladen.',
  tool_split_pdf_rules_item_4:
    'Datenschutz & Grenzen: Bytes bleiben im Tab; verschlüsselte/korrupte PDFs scheitern klar; sehr große Dateien können langsam sein.',
  tool_split_pdf_rules_title: 'Regeln, die Sie erwarten sollten',
  tool_split_pdf_sample: 'Beispiel laden',
  tool_split_pdf_split: 'Teilen',
  tool_split_pdf_stats_tpl: '{n} Datei(en) · {bytes}',
  tool_split_pdf_status_done: 'Fertig — Download speichert das Ergebnis.',
  tool_split_pdf_status_splitting: 'PDF wird geteilt…',
  tool_split_pdf_title: 'Meine PDF teilen',
  tool_split_pdf_usecase_1: 'Büro: eine unterschriebene Seite aus einem langen Vertrag holen.',
  tool_split_pdf_usecase_2: 'Lehre: Folien-PDF in Seiten-Handouts zerlegen.',
  tool_split_pdf_usecase_3: 'Ops: jede gescannte Seite als eigene Datei ablegen.',
  tool_split_pdf_usecases_title: 'Gut geeignet für',
  tool_split_pdf_warn_large: 'Datei größer als ~25 MB — Teilen kann langsam sein oder in manchen Browsern scheitern.',
  tool_split_pdf_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen und erneut versuchen.',
};
export default de;
