/**
 * i18n tool shard (compare-two-pdfs / de).
 * Deutsch (Sie-Form): zwei PDFs über die Textebene vergleichen, Ergänzungen/Löschungen markieren,
 * HTML-Diff herunterladen; keine OCR, kein Server-Upload. Schlüssel und Reihenfolge wie en.ts.
 */
import type { SiteLangDict } from '../../../types';

/** Deutsches Wörterbuch für das Tool „Zwei PDFs vergleichen“. */
const de: SiteLangDict = {
	tool_compare_two_pdfs_title: "Zwei PDFs vergleichen — Textunterschiede hervorheben",
	tool_compare_two_pdfs_desc: "Zwei PDFs im Browser vergleichen und Textunterschiede als HTML-Diff herunterladen — ohne Server-Upload.",
	tool_compare_two_pdfs_description:
		"Zwei PDFs vergleichen und Textunterschiede Wort für Wort hervorheben – Ergänzungen grün, Löschungen rot. Schritte: PDF A und PDF B auswählen, auf Vergleichen klicken, bei Bedarf HTML-Diff herunterladen. Beispiel: „dreißig Tagen“ gegenüber „sechzig Tagen“ wird markiert. Nur Textebene: Scans brauchen vorher OCR.",
	tool_compare_two_pdfs_file_a: "PDF A (älter / Original)",
	tool_compare_two_pdfs_file_b: "PDF B (neuer / überarbeitet)",
	tool_compare_two_pdfs_choose_file: "PDF auswählen — oder auf dieses Feld ziehen",
	tool_compare_two_pdfs_choose_files: "Dateien auswählen",
	tool_compare_two_pdfs_drop_hint: "Oder ein PDF hier ablegen. Die Verarbeitung bleibt in diesem Tab.",
	tool_compare_two_pdfs_compare: "Vergleichen",
	tool_compare_two_pdfs_download: "HTML-Diff herunterladen",
	tool_compare_two_pdfs_sample: "Beispiel laden",
	tool_compare_two_pdfs_clear: "Leeren",
	tool_compare_two_pdfs_advanced: "Erweiterte Einstellungen (optional)",
	tool_compare_two_pdfs_ignore_case: "Groß- und Kleinschreibung ignorieren",
	tool_compare_two_pdfs_ignore_space: "Mehrfache Leerzeichen und Zeilenumbrüche zusammenfassen",
	tool_compare_two_pdfs_advanced_hint: "Hilfreich, wenn ein Export Zeilen anders umbricht, der Wortlaut aber gleich bleibt.",
	tool_compare_two_pdfs_result_label: "Textunterschiede (A → B)",
	tool_compare_two_pdfs_legend_added: "Neu in B",
	tool_compare_two_pdfs_legend_removed: "Aus A entfernt",
	tool_compare_two_pdfs_empty: "Bitte wählen Sie zuerst PDF A und PDF B aus.",
	tool_compare_two_pdfs_err_convert: "Der Vergleich konnte nicht erstellt werden. Laden Sie die Seite neu und versuchen Sie es erneut.",
	tool_compare_two_pdfs_err_encrypted: "Dieses PDF scheint passwortgeschützt zu sein. Entsperren Sie es und vergleichen Sie dann erneut.",
	tool_compare_two_pdfs_err_load: "Eine der PDF-Dateien konnte nicht gelesen werden.",
	tool_compare_two_pdfs_err_notext: "Keine markierbare Textebene gefunden. Gescannte PDFs, die nur aus Bildern bestehen, brauchen vor dem Vergleich eine OCR.",
	tool_compare_two_pdfs_err_pdfjs: "Die PDF-Anzeige konnte nicht geladen werden.",
	tool_compare_two_pdfs_status_working: "Text wird ausgelesen und verglichen …",
	tool_compare_two_pdfs_status_done: "Fertig — Grün ist neu in B, Rot wurde aus A entfernt. Der Download speichert eine HTML-Datei.",
	tool_compare_two_pdfs_status_identical: "Mit den aktuellen Optionen gibt es keine Textunterschiede.",
	tool_compare_two_pdfs_summary_tpl: "{added} hinzugefügt · {removed} entfernt",
	tool_compare_two_pdfs_pages_tpl: "Seiten A={a}, B={b}",
	tool_compare_two_pdfs_warn_large: "Große Datei — der Vergleich kann länger dauern.",
	tool_compare_two_pdfs_how_title: "So vergleichen Sie zwei PDFs",
	tool_compare_two_pdfs_how_body:
		"Das Tool liest die Textebene jedes PDFs mit PDF.js aus und gleicht beide Wort für Wort ab. Layout, Schriften und Bilder spielen keine Rolle — es zählt nur markierbarer Text.",
	tool_compare_two_pdfs_how_item_1: "Wählen Sie PDF A (Original) und PDF B (Überarbeitung) aus oder ziehen Sie jede Datei auf ihr Feld.",
	tool_compare_two_pdfs_how_item_2: "Öffnen Sie bei Bedarf die erweiterten Einstellungen, um Groß- und Kleinschreibung zu ignorieren oder Leerraum zusammenzufassen.",
	tool_compare_two_pdfs_how_item_3: "Klicken Sie auf Vergleichen und warten Sie, bis der Fortschrittsbalken beide Dateien geladen und ausgelesen hat.",
	tool_compare_two_pdfs_how_item_4: "Prüfen Sie die grünen und roten Markierungen samt Zählern und klicken Sie auf HTML-Diff herunterladen, wenn Sie eine Datei brauchen.",
	tool_compare_two_pdfs_why_choose_title: "Warum Sie zwei PDFs mit diesem Tool vergleichen sollten",
	tool_compare_two_pdfs_why_choose_item_1: "Klare Hinweise bei passwortgeschützten Dateien und bei Scans ohne Textebene — statt eines leeren Ergebnisses.",
	tool_compare_two_pdfs_why_choose_item_2: "Vorschau beider PDFs nebeneinander und ein einziger wortgenauer Textvergleich in einem Durchgang.",
	tool_compare_two_pdfs_why_choose_item_3: "Zählt hinzugefügte und entfernte Stellen und zeigt die Seitenzahl jeder Datei.",
	tool_compare_two_pdfs_why_choose_item_4: "Groß- und Kleinschreibung oder Leerraum lassen sich ausblenden — praktisch, wenn ein Export nur Zeilen anders umbricht.",
	tool_compare_two_pdfs_why_choose_item_5: "Läuft im Browser: Ihre PDFs bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.",
	tool_compare_two_pdfs_rules_title: "Regeln und Grenzen",
	tool_compare_two_pdfs_rules_body: "Verglichen wird nur die Textebene — kein optischer oder pixelgenauer Abgleich.",
	tool_compare_two_pdfs_rules_item_1: "Markierbarer Text aus A und B wird mit PDF.js ausgelesen und mit jsdiff hervorgehoben.",
	tool_compare_two_pdfs_rules_item_2: "Alles bleibt in diesem Tab; eine ausgewählte Datei wird nicht auf einen Server hochgeladen.",
	tool_compare_two_pdfs_rules_item_3: "Keine OCR. Reine Bild-Scans müssen vorher an anderer Stelle per Texterkennung bearbeitet werden.",
	tool_compare_two_pdfs_rules_item_4: "Passwortgeschützte oder beschädigte PDFs brechen mit einer verständlichen Fehlermeldung ab.",
	tool_compare_two_pdfs_rules_item_5: "Der Download speichert den markierten Text als HTML — nicht als kommentiertes PDF.",
	tool_compare_two_pdfs_example_title: "Beispiel",
	tool_compare_two_pdfs_example:
		"Beispiel laden erzeugt zwei einseitige Verträge. In A steht „Zahlung fällig in dreißig Tagen.“, in B „Zahlung fällig in sechzig Tagen.“ Vergleichen markiert „dreißig“ als entfernt und „sechzig“ als hinzugefügt. Mit „Groß- und Kleinschreibung ignorieren“ gelten „Tagen“ und „tagen“ als gleich.",
	tool_compare_two_pdfs_usecases_title: "Wann sich der Vergleich lohnt",
	tool_compare_two_pdfs_usecase_1: "Einen überarbeiteten Vertrag als PDF mit der Fassung abgleichen, die Sie letzte Woche verschickt haben.",
	tool_compare_two_pdfs_usecase_2: "Geänderte Formulierungen in AGB oder Richtlinien finden, bevor Sie unterschreiben.",
	tool_compare_two_pdfs_usecase_3: "Zwei Textexporte vergleichen, wenn nur die Wörter zählen, nicht Schriften oder Seitenränder.",
	tool_compare_two_pdfs_usecase_4: "Vertrauliche Entwürfe auf dem Gerät behalten — für den Vergleich wird nichts hochgeladen.",
	tool_compare_two_pdfs_faq_q1: "Werden meine PDFs hochgeladen?",
	tool_compare_two_pdfs_faq_a1:
		"Nein. Anzeige und Textauslese laufen in Ihrem Browser-Tab. Die nötigen Skripte kommen von dieser Website selbst; Ihre Dateien bleiben auf Ihrem Gerät und gehen nicht an unsere Server.",
	tool_compare_two_pdfs_faq_q2: "Warum melden gescannte PDFs „keine markierbare Textebene“?",
	tool_compare_two_pdfs_faq_a2:
		"Scans sind Bilder ohne Textebene, und diese Seite führt keine OCR durch. Lassen Sie den Text mit einem anderen Werkzeug erkennen, speichern Sie ein durchsuchbares PDF und vergleichen Sie es dann hier.",
	tool_compare_two_pdfs_faq_q3: "Was ist mit passwortgeschützten PDFs?",
	tool_compare_two_pdfs_faq_a3:
		"Verschlüsselte Dateien lassen sich hier nicht öffnen. Entsperren Sie sie zuerst in einem PDF-Betrachter, speichern Sie eine ungeschützte Kopie und wählen Sie diese Kopie aus.",
	tool_compare_two_pdfs_faq_q4: "Was ist der Unterschied zu einem normalen Textvergleich?",
	tool_compare_two_pdfs_faq_a4:
		"Hier legen Sie PDFs ab, sehen Seitenvorschauen und erhalten die Seitenzahl. Der Textvergleich ist für eingefügten Text oder .txt-Dateien gedacht und liest keine PDFs aus.",
	tool_compare_two_pdfs_faq_q5: "Werden Layout, Bilder oder Unterschriften verglichen?",
	tool_compare_two_pdfs_faq_a5:
		"Nein. Es zählt nur markierbarer Text. Ein verschobenes Logo oder eine andere Schrift bei gleichem Wortlaut sieht hier identisch aus.",
	tool_compare_two_pdfs_faq_q6: "Was speichert der Download?",
	tool_compare_two_pdfs_faq_a6:
		"Eine HTML-Datei mit denselben grünen und roten Markierungen wie auf der Seite — praktisch zum Versenden per E-Mail oder zum Archivieren. Es ist kein markiertes PDF.",
	tool_compare_two_pdfs_faq_q7: "Wann sollten Sie Groß- und Kleinschreibung oder Leerraum ignorieren?",
	tool_compare_two_pdfs_faq_a7:
		"Wenn ein Export nur die Großschreibung oder den Zeilenumbruch geändert hat. Schalten Sie die Optionen ein, wenn der Wortlaut gleich ist, die rohe Textebene aber abweicht.",
	tool_compare_two_pdfs_article: "Markierbaren Text aus zwei PDFs vergleichen und einen wortgenauen HTML-Diff herunterladen — ohne Server-Upload.",
	tool_compare_two_pdfs_references: "PDF.js für das Auslesen des Textes; jsdiff für die wortgenaue Markierung.",
	tool_compare_two_pdfs_ref_a_label: "PDF.js — PDF-Anzeige von Mozilla",
	tool_compare_two_pdfs_ref_b_label: "jsdiff — Bibliothek für Textvergleiche",
};

export default de;
