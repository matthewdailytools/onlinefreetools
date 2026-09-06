/**
 * i18n tool shard (rotate-pdf / de). Unabhängig für lokale Suche formuliert.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_rotate_pdf_angle_180: '180°',
  tool_rotate_pdf_angle_90ccw: '90° gegen den Uhrzeigersinn',
  tool_rotate_pdf_angle_90cw: '90° im Uhrzeigersinn',
  tool_rotate_pdf_angle_label: 'Drehung',
  tool_rotate_pdf_article:
    'Richten Sie schief oder auf dem Kopf stehende PDF-Seiten im Browser aus. Alle Seiten oder Bereiche drehen—Dateien bleiben auf dem Gerät, ohne Server-Upload.',
  tool_rotate_pdf_choose_file: 'PDF wählen',
  tool_rotate_pdf_clear: 'Leeren',
  tool_rotate_pdf_desc:
    'PDF-Ausrichtung auf dem Gerät korrigieren—alle Seiten oder Bereich; kein Upload auf einen Server.',
  tool_rotate_pdf_description:
    'PDF-Seiten im Browser drehen, um Quer/Hoch-Mischungen zu beheben—nichts wird auf einen Server hochgeladen. Schritte: PDF wählen, alle Seiten oder Bereiche wie 1-3,5, 90° im Uhrzeigersinn, 180° oder 90° gegen den Uhrzeigersinn wählen, drehen und herunterladen. Beispiel: Zwei-Seiten-Muster dreht alles 90° im Uhrzeigersinn und aktiviert Download für rotated.pdf. Verschlüsselte Dateien schlagen mit klarer Meldung fehl.',
  tool_rotate_pdf_download: 'Download',
  tool_rotate_pdf_drop_hint: 'Oder PDF hier ablegen. Verarbeitung bleibt in diesem Tab.',
  tool_rotate_pdf_empty: 'Zuerst ein PDF wählen.',
  tool_rotate_pdf_err_encrypted: 'Dieses PDF scheint passwortgeschützt. Entsperren und erneut versuchen.',
  tool_rotate_pdf_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_rotate_pdf_err_range: 'Ungültige oder außerhalb liegende Seiten. Bereiche ab 1, z. B. 1-3,5.',
  tool_rotate_pdf_err_rotate: 'Drehung fehlgeschlagen. Datei und Bereiche prüfen und erneut versuchen.',
  tool_rotate_pdf_example:
    'Muster erstellt ein Zwei-Seiten-PDF, dreht alle 90° im Uhrzeigersinn und aktiviert Download für rotated.pdf.',
  tool_rotate_pdf_example_title: 'Beispiel',
  tool_rotate_pdf_faq_a1:
    'Nein. die PDF-Bibliothek läuft in Ihrem Tab (Skripte von dieser Website). Ihr PDF wird nicht auf unsere Server hochgeladen.',
  tool_rotate_pdf_faq_a2: 'Ja—die heruntergeladene Datei speichert die neue Ausrichtung. Vor dem Teilen im Viewer prüfen.',
  tool_rotate_pdf_faq_a3: 'Seiten ab 1: 1-3,5 bedeutet Seiten 1–3 und 5. Leerzeichen optional. Leer oder außerhalb schlägt fehl.',
  tool_rotate_pdf_faq_a4: 'Passwort-PDFs lassen sich hier meist nicht öffnen. Passwort mit vertrauenswürdigem Tool entfernen, dann drehen.',
  tool_rotate_pdf_faq_q1: 'Wird mein PDF hochgeladen?',
  tool_rotate_pdf_faq_q2: 'Ändert die Drehung die Datei dauerhaft?',
  tool_rotate_pdf_faq_q3: 'Wie funktionieren Seitenbereiche?',
  tool_rotate_pdf_faq_q4: 'Was ist mit verschlüsselten PDFs?',
  tool_rotate_pdf_how_body:
    'PDF wählen, alle Seiten oder Bereiche, Winkel wählen, Drehen und Download. Drehung addiert zum aktuellen Seitenwinkel. Nach dem Laden der Bibliothek läuft alles in diesem Tab—keine Datei geht an einen Server.',
  tool_rotate_pdf_how_item_1: "Wählen Sie die Eingabe mit „PDF wählen“",
  tool_rotate_pdf_how_item_2: "Optionen einstellen und „Drehen“ anklicken",
  tool_rotate_pdf_how_item_3: "Vorschau, Seitenzahl oder Statusmeldung prüfen",
  tool_rotate_pdf_how_item_4: "Mit „Download“ das Ergebnis speichern",
  tool_rotate_pdf_how_title: 'So funktioniert es',
  tool_rotate_pdf_mode_all: 'Alle Seiten',
  tool_rotate_pdf_mode_label: 'Zu drehende Seiten',
  tool_rotate_pdf_mode_ranges: 'Eigene Bereiche',
  tool_rotate_pdf_pages_label: 'Seiten in der Datei',
  tool_rotate_pdf_ranges_hint: 'Beispiel: 1-3,5 (ab 1)',
  tool_rotate_pdf_ranges_label: 'Seitenbereiche',
  tool_rotate_pdf_rotate: 'Drehen',
  tool_rotate_pdf_rules_body: 'Winkel, kumulative Drehung, Bereichssyntax, Datenschutz und Fehler.',
  tool_rotate_pdf_rules_item_1: 'Winkel: 90° im Uhrzeigersinn, 180° oder 90° gegen den Uhrzeigersinn (270°). Addiert zur aktuellen Seitendrehung.',
  tool_rotate_pdf_rules_item_2: 'Seiten: alle oder Bereiche ab 1 wie 1-3,5 (gleiche Syntax wie PDF teilen).',
  tool_rotate_pdf_rules_item_3: 'Ausgabe: ein PDF mit gewählten Seiten neu ausgerichtet; übrige unverändert.',
  tool_rotate_pdf_rules_item_4: 'Datenschutz & Grenzen: Bytes im Tab; verschlüsselt/beschädigt scheitert klar; sehr große Dateien können langsam sein.',
  tool_rotate_pdf_rules_title: 'Erwartete Regeln',
  tool_rotate_pdf_sample: 'Beispiel laden',
  tool_rotate_pdf_stats_tpl: '{n} Seite(n) gedreht · {bytes}',
  tool_rotate_pdf_status_done: 'Fertig — Download klicken für rotated.pdf.',
  tool_rotate_pdf_status_rotating: 'PDF wird gedreht…',
  tool_rotate_pdf_title: 'PDF drehen — Seitenausrichtung im Browser korrigieren',
  tool_rotate_pdf_usecase_1: 'Büro: seitlichen Scan vor Druck oder Versand aufrichten.',
  tool_rotate_pdf_usecase_2: 'Studierende: Handy-Fotos von Folien mit gemischter Ausrichtung korrigieren.',
  tool_rotate_pdf_usecase_3: 'Webbetreiber: eine falsche Seite fixen, ohne alles neu zu scannen.',
  tool_rotate_pdf_usecases_title: 'Gute Einsatzfälle',
  tool_rotate_pdf_warn_large: 'Datei größer als ~25 MB — Drehung kann langsam sein oder in manchen Browsern scheitern.',
  tool_rotate_pdf_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen und erneut versuchen.',
};
export default de;
