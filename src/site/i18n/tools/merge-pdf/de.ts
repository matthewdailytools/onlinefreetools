/**
 * i18n tool shard（merge-pdf / de）. Eigenständige Such-Formulierung.
 */
import type { SiteLangDict } from '../../../types';
const de: SiteLangDict = {
  tool_merge_pdf_article:
    'Mehrere PDFs in Listenreihenfolge mit clientseitigem pdf-lib zusammenfügen — ohne Server-Upload; Dateien bleiben auf dem Gerät. Neu ordnen, verschlüsselte Fehler klar melden, eine Datei herunterladen.',
  tool_merge_pdf_choose_files: 'PDFs wählen',
  tool_merge_pdf_clear: 'Leeren',
  tool_merge_pdf_desc: 'Mehrere PDFs im Browser zu einer Datei kombinieren — ohne Server-Upload; Dateien bleiben auf Ihrem Gerät.',
  tool_merge_pdf_description:
    'PDFs im Browser zusammenfügen und eine kombinierte Datei herunterladen — ohne Server-Upload. Schritte: mindestens zwei PDFs hinzufügen, Liste neu ordnen, zusammenfügen, dann herunterladen. Beispiel: zwei einseitige Beispiele werden zu einem zweiseitigen PDF. Verschlüsselte oder beschädigte Dateien scheitern mit klarer Meldung. Anders als Bilder zu PDF, das von Fotos startet.',
  tool_merge_pdf_download: 'Download',
  tool_merge_pdf_drop_hint: 'Oder PDFs hier ablegen. Die Verarbeitung bleibt in diesem Tab.',
  tool_merge_pdf_empty: 'Fügen Sie mindestens zwei PDFs zum Zusammenfügen hinzu.',
  tool_merge_pdf_err_encrypted: 'Eine Datei scheint passwortgeschützt. Entsperren Sie sie und versuchen Sie es erneut.',
  tool_merge_pdf_err_load: 'Ein PDF konnte nicht gelesen werden (beschädigt oder nicht unterstützt). Andere Datei versuchen.',
  tool_merge_pdf_err_merge: 'Zusammenfügen fehlgeschlagen. Dateien prüfen und erneut versuchen.',
  tool_merge_pdf_example:
    'Das Beispiel lädt zwei einseitige PDFs (A und B), fügt sie in Listenreihenfolge zusammen und aktiviert Download für ein zweiseitiges merged.pdf.',
  tool_merge_pdf_example_title: 'PDF-Dateien zu einer Datei kombinieren',
  tool_merge_pdf_faq_a1:
    'Nein. pdf-lib läuft in Ihrem Tab (die Bibliothek kann von einem CDN kommen). PDFs werden nicht auf unsere Server hochgeladen.',
  tool_merge_pdf_faq_a2:
    'Bilder zu PDF erstellt ein PDF aus Fotos. Dieses Tool fügt vorhandene PDF-Dateien zu einem Dokument zusammen.',
  tool_merge_pdf_faq_a3:
    'Ja — mit Hoch/Runter pro Zeile. Die Listenreihenfolge von oben nach unten ist die Seitenreihenfolge.',
  tool_merge_pdf_faq_a4:
    'Passwortgeschützte PDFs lassen sich hier oft nicht öffnen. Passwort mit einem vertrauenswürdigen Tool entfernen, dann zusammenfügen.',
  tool_merge_pdf_faq_a5: 'Die meisten Desktop- und Mobil-PDF-Reader öffnen das Ergebnis.',
  tool_merge_pdf_faq_q1: 'Werden meine PDFs hochgeladen?',
  tool_merge_pdf_faq_q2: 'Unterschied zu Bilder zu PDF?',
  tool_merge_pdf_faq_q3: 'Kann ich die Reihenfolge ändern?',
  tool_merge_pdf_faq_q4: 'Was ist mit verschlüsselten PDFs?',
  tool_merge_pdf_faq_q5: 'Öffnet sich das Ergebnis in Acrobat oder Vorschau?',
  tool_merge_pdf_how_body:
    'Mindestens zwei PDFs hinzufügen, bei Bedarf neu ordnen, Zusammenfügen, dann Download. Seitenreihenfolge folgt der Liste. Nach dem Laden der Bibliothek alles auf dem Gerät (kein Server-Upload).',
  tool_merge_pdf_how_item_1: "Wählen Sie die Eingabe mit „PDFs wählen“",
  tool_merge_pdf_how_item_2: "Optionen einstellen und „Zusammenfügen“ anklicken",
  tool_merge_pdf_how_item_3: "Vorschau, Seitenzahl oder Statusmeldung prüfen",
  tool_merge_pdf_how_item_4: "Mit „Download“ das Ergebnis speichern",
  tool_merge_pdf_how_title: 'So funktioniert’s',
  tool_merge_pdf_merge: 'Zusammenfügen',
  tool_merge_pdf_move_down: 'Runter',
  tool_merge_pdf_move_up: 'Hoch',
  tool_merge_pdf_remove: 'Entfernen',
  tool_merge_pdf_rules_body:
    'Listenreihenfolge, copyPages, Datenschutz und Fehlerfälle beim lokalen Zusammenfügen.',
  tool_merge_pdf_rules_item_1:
    'Reihenfolge: Seiten werden nach der Liste kopiert (oberste Datei zuerst). Vor dem Zusammenfügen neu ordnen.',
  tool_merge_pdf_rules_item_2:
    'Engine: pdf-lib lädt jedes PDF und nutzt copyPages in ein neues Dokument — ohne Server-Upload Ihrer Dateien.',
  tool_merge_pdf_rules_item_3:
    'Datenschutz: Bytes bleiben im Tab. Das Bibliotheksskript kann von einem CDN kommen.',
  tool_merge_pdf_rules_item_4:
    'Grenzen: ≥2 Dateien nötig; verschlüsselte/korrupte PDFs scheitern lesbar; sehr große Mengen können im Speicher langsam sein.',
  tool_merge_pdf_rules_title: 'Regeln, die Sie erwarten sollten',
  tool_merge_pdf_sample: 'Beispiel laden',
  tool_merge_pdf_stats_tpl: '{n} Dateien → {pages} Seiten · {bytes}',
  tool_merge_pdf_status_done: 'Fertig — Download speichert merged.pdf.',
  tool_merge_pdf_status_merging: 'PDFs werden zusammengefügt…',
  tool_merge_pdf_title: 'PDF-Dateien zu einer zusammenfügen',
  tool_merge_pdf_usecase_1: 'Büro: Unterschriften und Anhänge zu einem Paket bündeln.',
  tool_merge_pdf_usecase_2: 'Studium: Kapitel einer Arbeit vor Abgabe zusammenfügen.',
  tool_merge_pdf_usecase_3: 'Ops: Briefings und Specs als ein PDF übergeben.',
  tool_merge_pdf_usecases_title: 'Gut geeignet für',
  tool_merge_pdf_warn_large: 'Eine Datei ist größer als ~25 MB — Zusammenfügen kann langsam sein oder in manchen Browsern scheitern.',
  tool_merge_pdf_warn_pdflib: 'PDF-Bibliothek konnte nicht geladen werden. Netzwerk prüfen und erneut versuchen.',
};
export default de;
