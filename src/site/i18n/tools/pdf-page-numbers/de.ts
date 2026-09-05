/**
 * i18n tool shard (pdf-page-numbers / de). Unabhängig für lokale Suche formuliert.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_pdf_page_numbers_add: 'Seitenzahlen',
  tool_pdf_page_numbers_article:
    'Seitenzahlen auf jede PDF-Seite im Browser. Ecke oder Mitte, Startnummer und Rand wählen—Dateien bleiben auf Ihrem Gerät, ohne Server-Upload.',
  tool_pdf_page_numbers_choose_file: 'PDF wählen',
  tool_pdf_page_numbers_clear: 'Leeren',
  tool_pdf_page_numbers_desc:
    'PDF im Browser nummerieren—Position und Startzahl frei wählbar; ohne Server-Upload, bleiben auf dem Gerät.',
  tool_pdf_page_numbers_description:
    'Seitenzahlen in ein PDF im Browser—ohne Server-Upload. Schritte: PDF öffnen, unten Mitte oder Ecke wählen, erste Zahl (Standard 1), Rand und Schriftgröße, optional „Seite N“, nummerieren und herunterladen. Beispiel: Drei-Seiten-Muster mit Zahlen unten Mitte ab 1 und Download numbered.pdf. Verschlüsselte PDFs schlagen mit klarer Meldung fehl.',
  tool_pdf_page_numbers_download: 'Download',
  tool_pdf_page_numbers_drop_hint: 'Oder PDF hier ablegen. Verarbeitung in diesem Tab.',
  tool_pdf_page_numbers_empty: 'Zuerst ein PDF wählen.',
  tool_pdf_page_numbers_err_encrypted: 'Dieses PDF scheint passwortgeschützt. Entsperren und erneut versuchen.',
  tool_pdf_page_numbers_err_load: 'PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei probieren.',
  tool_pdf_page_numbers_err_number: 'Nummerierung fehlgeschlagen. Datei und Einstellungen prüfen.',
  tool_pdf_page_numbers_example:
    'Muster erstellt ein Drei-Seiten-PDF, nummeriert unten Mitte ab 1 und aktiviert Download numbered.pdf.',
  tool_pdf_page_numbers_example_title: 'Beispiel',
  tool_pdf_page_numbers_faq_a1:
    'Nein. die PDF-Bibliothek läuft in Ihrem Tab (Skripte ggf. per CDN). Ihr PDF wird nicht auf unsere Server hochgeladen.',
  tool_pdf_page_numbers_faq_a2:
    'Ja—„Start bei“ ist die Zahl auf Seite 1 (z. B. 0 für Deckblatt oder 5 nach gelöschten Seiten). Jede folgende Seite +1.',
  tool_pdf_page_numbers_faq_a3:
    'Einfache Ziffern (1, 2, 3…) oder „Seite N“. Position, Rand (pt) und Größe gelten für alle Seiten gleich.',
  tool_pdf_page_numbers_faq_a4:
    'Passwort-PDFs lassen sich hier meist nicht öffnen. Passwort mit vertrauenswürdigem Tool entfernen.',
  tool_pdf_page_numbers_faq_q1: 'Wird mein PDF hochgeladen?',
  tool_pdf_page_numbers_faq_q2: 'Kann ich nach dem Deckblatt starten?',
  tool_pdf_page_numbers_faq_q3: 'Welche Formate und Positionen?',
  tool_pdf_page_numbers_faq_q4: 'Was ist mit verschlüsselten PDFs?',
  tool_pdf_page_numbers_font_size_label: 'Schriftgröße (pt)',
  tool_pdf_page_numbers_format_label: 'Format',
  tool_pdf_page_numbers_format_number: 'Nur Zahl',
  tool_pdf_page_numbers_format_page_n: 'Seite N',
  tool_pdf_page_numbers_format_page_n_tpl: 'Seite {n}',
  tool_pdf_page_numbers_how_body:
    'PDF wählen, Position (Standard unten Mitte), Startzahl, Rand und Größe, Seitenzahlen klicken, dann Download. Zahlen werden auf jeder Seite gezeichnet. Bibliothek lädt beim ersten Mal.',
  tool_pdf_page_numbers_how_item_1: "Wählen Sie die Eingabe mit „PDF wählen“",
  tool_pdf_page_numbers_how_item_2: "Optionen einstellen und „Seitenzahlen“ anklicken",
  tool_pdf_page_numbers_how_item_3: "Vorschau, Seitenzahl oder Statusmeldung prüfen",
  tool_pdf_page_numbers_how_item_4: "Mit „Download“ das Ergebnis speichern",
  tool_pdf_page_numbers_how_title: 'So funktioniert es',
  tool_pdf_page_numbers_margin_label: 'Rand (pt)',
  tool_pdf_page_numbers_pages_label: 'Seiten',
  tool_pdf_page_numbers_position_bc: 'Unten Mitte',
  tool_pdf_page_numbers_position_bl: 'Unten links',
  tool_pdf_page_numbers_position_br: 'Unten rechts',
  tool_pdf_page_numbers_position_label: 'Position',
  tool_pdf_page_numbers_position_tc: 'Oben Mitte',
  tool_pdf_page_numbers_position_tl: 'Oben links',
  tool_pdf_page_numbers_position_tr: 'Oben rechts',
  tool_pdf_page_numbers_rules_body:
    'Positionen, Startwert, Format, Datenschutz und Grenzen der lokalen Seitenzahlen.',
  tool_pdf_page_numbers_rules_item_1:
    'Position: unten Mitte (Standard), Mitte oben/unten oder Ecken. Rand in PDF-Punkten (Standard 24 pt).',
  tool_pdf_page_numbers_rules_item_2:
    'Start bei: Zahl auf Seite 1 (Standard 1). Jede Seite +1—hilfreich nach Löschen in Organize PDF.',
  tool_pdf_page_numbers_rules_item_3:
    'Format: Ziffer oder „Seite N“. Standard 12 pt. Neues PDF; Original geht nicht an einen Server.',
  tool_pdf_page_numbers_rules_item_4:
    'Grenzen: verschlüsselte/kaputte PDFs scheitern klar; >~25 MB kann langsam sein; Zahlen eingebrannt—Original nötig.',
  tool_pdf_page_numbers_rules_title: 'Erwartete Regeln',
  tool_pdf_page_numbers_sample: 'Beispiel laden',
  tool_pdf_page_numbers_start_at_label: 'Start bei',
  tool_pdf_page_numbers_stats_tpl: '{n} Seite(n) nummeriert · {bytes}',
  tool_pdf_page_numbers_status_done: 'Fertig — Download für numbered.pdf.',
  tool_pdf_page_numbers_status_working: 'Seitenzahlen werden hinzugefügt…',
  tool_pdf_page_numbers_title: 'Seitenzahlen in PDF — im Browser hinzufügen',
  tool_pdf_page_numbers_usecase_1: 'Büro: Bericht vor dem Druck nummerieren, um „Seite 12“ zu zitieren.',
  tool_pdf_page_numbers_usecase_2: 'Studierende: Fußzeile 1–N in der Abschlussarbeit nach Kapitel-Merge.',
  tool_pdf_page_numbers_usecase_3: 'Site-Betreiber: Handouts nach Organize oder Wasserzeichen nummerieren.',
  tool_pdf_page_numbers_usecases_title: 'Gute Einsätze',
  tool_pdf_page_numbers_warn_large: 'Datei größer als ~25 MB — Nummerierung kann langsam sein oder scheitern.',
  tool_pdf_page_numbers_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen.',
};
export default de;
