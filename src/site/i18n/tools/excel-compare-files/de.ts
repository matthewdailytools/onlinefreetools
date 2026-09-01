/**
 * i18n（excel-compare-files / de）。
 * H1: Excel-Dateien vergleichen（kein „online“ in der Überschrift）。
 * Standard: erstes Blatt; leere Zellen als leere Zeichenkette.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_excel_compare_files_article:
		'Zwei Tabellen wählen und das aktuelle Blatt Zelle für Zelle vergleichen. Leere Zellen zählen als leere Zeichenkette. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_excel_compare_files_clear: 'Leeren',
	tool_excel_compare_files_col_addr: 'Zelle',
	tool_excel_compare_files_col_left: 'Erste Datei',
	tool_excel_compare_files_col_right: 'Zweite Datei',
	tool_excel_compare_files_compare: 'Vergleichen',
	tool_excel_compare_files_desc:
		'Excel-Dateien vergleichen: zwei Tabellen wählen, aktuelles Blatt Zelle für Zelle — bleibt auf dem Gerät, ohne Server-Upload.',
	tool_excel_compare_files_description:
		'Excel-Dateien vergleichen im Browser. Ablauf: zwei xlsx- oder csv-Dateien wählen, das aktuelle Blatt nehmen (standardmäßig das erste), dann Zellen mit abweichendem Wert listen. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen. Beispiel: zwei 3-Zeilen-Tabellen, in denen B3 von 2 auf 9 wechselt. „Online“ beschreibt den Ablauf, nicht die Überschrift. Verschobene Spalten werden über die Adresse verglichen, nicht über den Kopftext.',
	tool_excel_compare_files_empty: 'Zuerst zwei Tabellendateien wählen oder das Beispiel laden.',
	tool_excel_compare_files_err_read:
		'Die Tabelle ließ sich nicht lesen. xlsx oder csv versuchen und geschützte Mappen zuerst entsperren.',
	tool_excel_compare_files_example:
		'Beispiel laden vergleicht zwei CSV-Tabellen. Name/Qty-Köpfe passen; die Gadget-Menge ist 2 gegen 9, daher steht B3. Schon beim ersten Anzeigen erscheint diese Zelle.',
	tool_excel_compare_files_example_title: 'Beispiel',
	tool_excel_compare_files_faq_a1:
		'Nein. Die Bytes werden in diesem Tab mit SheetJS gelesen. Die Bibliothek kann über ein CDN kommen; Ihre Dateien werden nicht auf unsere Server hochgeladen.',
	tool_excel_compare_files_faq_a2:
		'Ja: das erste Blatt ist standardmäßig gewählt. Über die Blattlisten ein anderes Register derselben Datei wählen. Andere Blätter werden erst verglichen, wenn Sie sie wählen.',
	tool_excel_compare_files_faq_a3:
		'Ja. CSV gilt als ein Blatt. Wer zwei csv vergleichen sucht, bleibt auf dieser Seite, ohne extra URL.',
	tool_excel_compare_files_faq_a4:
		'Fehlende und leere Zellen sind beide eine leere Zeichenkette. Eine verschobene Spalte vergleicht weiter A1 mit A1, nicht „die Name-Spalte“ nach Kopf. So entstehen keine stillen Fehlzuordnungen, wenn Köpfe wandern.',
	tool_excel_compare_files_faq_q1: 'Werden meine Excel-Dateien hochgeladen?',
	tool_excel_compare_files_faq_q2: 'Wird nur das erste Blatt verglichen?',
	tool_excel_compare_files_faq_q3: 'Kann ich hier zwei CSV-Dateien vergleichen?',
	tool_excel_compare_files_faq_q4: 'Wie werden leere Zellen und verschobene Spalten behandelt?',
	tool_excel_compare_files_how_body:
		'Zwei Tabellen wählen und auf den aktuellen Blättern lesen, welche Zelladressen abweichen.',
	tool_excel_compare_files_how_item_1: 'Erste Tabelle wählen (xlsx, xls oder csv).',
	tool_excel_compare_files_how_item_2: 'Zweite Tabelle wählen.',
	tool_excel_compare_files_how_item_3: 'Erstes Blatt belassen, außer Sie brauchen ein anderes Register.',
	tool_excel_compare_files_how_item_4: 'Vergleichen listet abweichende Zellen; Beispiel laden lief schon beim ersten Anzeigen.',
	tool_excel_compare_files_how_title: 'So gehen Sie vor',
	tool_excel_compare_files_label_a: 'Erste Tabelle',
	tool_excel_compare_files_label_b: 'Zweite Tabelle',
	tool_excel_compare_files_load_sample: 'Beispiel laden',
	tool_excel_compare_files_need_lib: 'SheetJS ließ sich nicht laden. Netz prüfen und neu laden.',
	tool_excel_compare_files_no_diff: 'Auf den aktuellen Blättern keine Zellunterschiede.',
	tool_excel_compare_files_result_label: 'Zellunterschiede',
	tool_excel_compare_files_rules_body: 'Werte werden nur auf dem gewählten Blatt über die Rasteradresse verglichen.',
	tool_excel_compare_files_rules_item_1: 'SheetJS liest die Mappe. Standardblatt ist der erste Name in der Datei.',
	tool_excel_compare_files_rules_item_2:
		'Jede Zelle wird nach der SheetJS-Umwandlung als Text verglichen. Leer und fehlend sind "".',
	tool_excel_compare_files_rules_item_3:
		'Eine eingefügte Spalte auf einer Seite richtet sich weiter nach A1/B1, nicht nach Kopfbeschriftungen.',
	tool_excel_compare_files_rules_item_4:
		'Andere Blätter der Mappe werden ignoriert, bis Sie sie wählen. Kein Standard-Scan der ganzen Mappe.',
	tool_excel_compare_files_rules_title: 'Was Sie erwarten sollten',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: 'Blatt in der ersten Datei',
	tool_excel_compare_files_sheet_b: 'Blatt in der zweiten Datei',
	tool_excel_compare_files_summary: '{n} Zellen weichen ab',
	tool_excel_compare_files_title: 'Excel-Dateien vergleichen',
	tool_excel_compare_files_usecase_1: 'Angebote: zwei exportierte Preislisten, in denen ein paar Zellen gewandert sind.',
	tool_excel_compare_files_usecase_2: 'Anwesenheit oder Bestand als CSV, Woche gegen Woche.',
	tool_excel_compare_files_usecase_3: 'Hausaufgaben-Tabellen als xlsx von zwei Schülerinnen oder Schülern.',
	tool_excel_compare_files_usecases_title: 'Wann das passt',
};

export default de;
