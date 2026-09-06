/**
 * i18n tool shard (pdf-watermark / de). Unabhängig für lokale Suche formuliert.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_pdf_watermark_apply: 'Anwenden',
  tool_pdf_watermark_article:
    'Stempeln Sie DRAFT, VERTRAULICH oder eigenen Text auf jede PDF-Seite im Browser. Optionales PNG/JPG-Logo — Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
  tool_pdf_watermark_choose_file: 'PDF wählen',
  tool_pdf_watermark_clear: 'Leeren',
  tool_pdf_watermark_desc:
    'Text-Wasserzeichen auf jeder PDF-Seite im Browser — ohne Server-Upload; Dateien bleiben auf dem Gerät.',
  tool_pdf_watermark_description:
    'Fügen Sie ein Text-Wasserzeichen auf jeder PDF-Seite im Browser hinzu — ohne Server-Upload. Schritte: PDF öffnen, Stempeltext (z. B. DRAFT) eingeben, Deckkraft und Winkel setzen, optional PNG/JPG-Logo, anwenden, herunterladen. Beispiel: Zwei-Seiten-Muster mit DRAFT zentriert, −45°, 35 % Deckkraft; Download watermarked.pdf. Verschlüsselte PDFs schlagen mit klarer Meldung fehl. Unterscheidet sich von Bild-Wasserzeichen und PDF drehen.',
  tool_pdf_watermark_download: 'Download',
  tool_pdf_watermark_drop_hint: 'Oder PDF hier ablegen. Verarbeitung in diesem Tab.',
  tool_pdf_watermark_empty: 'PDF zum Stempeln hinzufügen.',
  tool_pdf_watermark_err_apply: 'Wasserzeichen fehlgeschlagen. Datei und Einstellungen prüfen.',
  tool_pdf_watermark_err_encrypted: 'PDF scheint passwortgeschützt. Zuerst entsperren.',
  tool_pdf_watermark_err_image: 'Bild nicht lesbar. PNG oder JPG verwenden.',
  tool_pdf_watermark_err_load: 'PDF nicht lesbar (beschädigt oder nicht unterstützt).',
  tool_pdf_watermark_example:
    'Muster erstellt ein Zwei-Seiten-PDF, wendet DRAFT zentriert mit 35 % Deckkraft und −45° auf jeder Seite an und aktiviert Download watermarked.pdf.',
  tool_pdf_watermark_example_title: 'Beispiel',
  tool_pdf_watermark_faq_a1:
    'Nein. die PDF-Bibliothek läuft in Ihrem Tab (Skripte ggf. from this site). Ihr PDF wird nicht auf unsere Server hochgeladen.',
  tool_pdf_watermark_faq_a2:
    'Wasserzeichen auf Bildern legt Text/Logos auf Fotos. Dieses Tool stempelt jede Seite eines PDF-Dokuments.',
  tool_pdf_watermark_faq_a3:
    'Nein. Nach dem Download ist das Wasserzeichen eingebrannt. Entfernen braucht Original oder aufwendige Bearbeitung.',
  tool_pdf_watermark_faq_a4:
    'Passwort-PDFs öffnen hier meist nicht. Passwort mit vertrauenswürdigem Tool entfernen.',
  tool_pdf_watermark_faq_a5:
    'Ja — PNG oder JPG wählen. Skaliert auf ~ein Drittel der Seite, gleiche Position/Deckkraft/Drehung wie Text.',
  tool_pdf_watermark_faq_q1: 'Wird mein PDF hochgeladen?',
  tool_pdf_watermark_faq_q2: 'Unterschied zum Bild-Wasserzeichen?',
  tool_pdf_watermark_faq_q3: 'Kann ich das Wasserzeichen später entfernen?',
  tool_pdf_watermark_faq_q4: 'Was ist mit verschlüsselten PDFs?',
  tool_pdf_watermark_faq_q5: 'Kann ich ein Logo hinzufügen?',
  tool_pdf_watermark_how_body:
    'PDF wählen, Stempeltext eingeben, Deckkraft und Drehung, Position setzen, optional PNG/JPG-Logo, Anwenden, Download. Jede Seite erhält dieselbe Schicht.',
  tool_pdf_watermark_how_item_1: "Wählen Sie die Eingabe mit „PDF wählen“",
  tool_pdf_watermark_how_item_2: "Optionen einstellen und „Anwenden“ anklicken",
  tool_pdf_watermark_how_item_3: "Vorschau, Seitenzahl oder Statusmeldung prüfen",
  tool_pdf_watermark_how_item_4: "Mit „Download“ das Ergebnis speichern",
  tool_pdf_watermark_how_title: 'So funktioniert es',
  tool_pdf_watermark_image_hint: 'Optionales PNG/JPG-Logo (gleiche Position wie Text).',
  tool_pdf_watermark_image_label: 'Bild-Wasserzeichen (optional)',
  tool_pdf_watermark_opacity_label: 'Deckkraft',
  tool_pdf_watermark_pages_label: 'Seiten',
  tool_pdf_watermark_position_bl: 'Unten links',
  tool_pdf_watermark_position_br: 'Unten rechts',
  tool_pdf_watermark_position_center: 'Mitte',
  tool_pdf_watermark_position_label: 'Position',
  tool_pdf_watermark_position_tl: 'Oben links',
  tool_pdf_watermark_position_tr: 'Oben rechts',
  tool_pdf_watermark_rotation_label: 'Drehung (Grad)',
  tool_pdf_watermark_rules_body:
    'Regeln für Text/Bild, Position, Deckkraft, Datenschutz und Fehlerfälle.',
  tool_pdf_watermark_rules_item_1:
    'Text: Helvetica-Stempel auf jeder Seite; Muster DRAFT zentriert, 35 % Deckkraft, −45°.',
  tool_pdf_watermark_rules_item_2:
    'Bild: optionales PNG/JPG ~35 % der Seite, gleiche Position/Deckkraft/Drehung.',
  tool_pdf_watermark_rules_item_3:
    'Positionen: Mitte oder Ecken; Deckkraft 0,1–1; Drehung −180° bis 180°. Ausgabe: neues PDF ohne Server-Upload.',
  tool_pdf_watermark_rules_item_4:
    'Grenzen: verschlüsselte/beschädigte PDFs scheitern; >~25 MB kann langsam sein; Entfernen nicht unterstützt.',
  tool_pdf_watermark_rules_title: 'Erwartete Regeln',
  tool_pdf_watermark_sample: 'Beispiel laden',
  tool_pdf_watermark_stats_tpl: '{pages} Seite(n) gestempelt · {bytes}',
  tool_pdf_watermark_status_done: 'Fertig — Download für watermarked.pdf.',
  tool_pdf_watermark_status_working: 'Wasserzeichen wird angewendet…',
  tool_pdf_watermark_text_label: 'Stempeltext',
  tool_pdf_watermark_title: 'PDF-Wasserzeichen — Text im Browser auf jede Seite stempeln',
  tool_pdf_watermark_usecase_1: 'Recht/Operations: VERTRAULICH auf Vertragsentwürfe vor Versand.',
  tool_pdf_watermark_usecase_2: 'Studierende: DRAFT auf Kapitel für Feedback.',
  tool_pdf_watermark_usecase_3: 'Seitenbetreiber: halbtransparentes Logo auf jeder Vorschau-PDF-Seite.',
  tool_pdf_watermark_usecases_title: 'Typische Einsätze',
  tool_pdf_watermark_warn_large: 'Datei >~25 MB — kann langsam sein oder fehlschlagen.',
  tool_pdf_watermark_warn_pdflib: 'PDF-Bibliothek nicht geladen. Netzwerk prüfen.',
};
export default de;
