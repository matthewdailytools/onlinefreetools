/**
 * i18n shard for compare-two-text-files-online (German).
 * H1 is the search task “Zwei Textdateien online vergleichen”; DE phrasing, not a calque of the English template.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'Wähle in diesem Tab zwei Textdateien und sieh Zeilen, die dazukamen oder weggefallen sind. Die Dateien bleiben auf deinem Gerät und werden nicht hochgeladen. Große Einfügefelder gibt es hier nicht — nur Text einfügen geht auf «Unterschied zwischen zwei Texten prüfen».',
	tool_compare_two_text_files_online_clear: 'Leeren',
	tool_compare_two_text_files_online_compare: 'Vergleichen',
	tool_compare_two_text_files_online_desc:
		'Zwei Textdateien online vergleichen: zwei .txt wählen, Zeilendifferenzen im Browser sehen — nichts wird hochgeladen.',
	tool_compare_two_text_files_online_description:
		"Vergleichen Sie zwei Textdateien online im Browser. Wählen Sie die ursprüngliche und überarbeitete .txt-Datei: Beide werden strikt als UTF-8 decodiert, ein führendes BOM wird entfernt und ungültige Codierung oder Binärinhalt wird vor der Zeilenmarkierung abgelehnt. Die Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen. Beispiel: notes-a.txt und notes-b.txt unterscheiden sich nur in der mittleren Zeile. Word-, Tabellen- und strukturierte JSON-Dateien werden nicht geparst.",
	tool_compare_two_text_files_online_empty: 'Zuerst zwei Textdateien wählen oder das Beispiel laden.',
	tool_compare_two_text_files_online_err_binary:
		'Eine Datei wirkt binär (Nullbytes). Diese Seite vergleicht nur Klartext wie .txt.',
	tool_compare_two_text_files_online_err_encoding: "Eine Datei ist kein gültiges UTF-8. Speichern oder konvertieren Sie sie als UTF-8 und vergleichen Sie erneut.",
	tool_compare_two_text_files_online_err_too_large:
		'Eine Datei ist größer als etwa 1 MB. Nimm einen kürzeren Ausschnitt, damit der Tab flüssig bleibt.',
	tool_compare_two_text_files_online_example:
		'Beispiel laden stellt notes-a.txt (alpha / zweite Zeile / dritte) notes-b.txt gegenüber, dessen Mitte «geänderte Zeile» lautet. Der Zeilenmodus markiert nur diese. Schon beim ersten Zeichnen siehst du das Ergebnis.',
	tool_compare_two_text_files_online_example_title: 'Beispiel',
	tool_compare_two_text_files_online_faq_a1:
		'Nein. FileReader liest die Bytes in diesem Tab. jsdiff kann als Bibliothek per CDN kommen; deine Dateien gehen nicht auf unsere Server.',
	tool_compare_two_text_files_online_faq_a2:
		"Dateien werden strikt als UTF-8 decodiert; ein führendes BOM wird entfernt. Ungültiges UTF-8 wird abgelehnt statt mit Ersatzzeichen angezeigt. Ältere Codierungen wie Windows-1252 bitte zuerst konvertieren.",
	tool_compare_two_text_files_online_faq_a3:
		'Ein Nullbyte gilt als Binärdatei und wird abgelehnt. Dafür Hex- oder Archivwerkzeuge. Word und Excel gehören auf ihre eigenen Vergleichsseiten.',
	tool_compare_two_text_files_online_faq_a4:
		"Das Tool verarbeitet .txt / .text als UTF-8. Ohne Dateien nutzen Sie den Einfügevergleich; für .docx, xlsx, xls oder csv den passenden Word- oder Tabellenvergleich.",
	tool_compare_two_text_files_online_faq_q1: 'Werden meine Dateien hochgeladen?',
	tool_compare_two_text_files_online_faq_q2: 'Welche Kodierung und welche BOM-Regel gelten?',
	tool_compare_two_text_files_online_faq_q3: 'Kann ich hier Binärdateien, Word oder Excel vergleichen?',
	tool_compare_two_text_files_online_faq_q4: 'Ist das dasselbe wie txt vergleichen oder zwei Dateien vergleichen?',
	tool_compare_two_text_files_online_how_body:
		'Nimm zwei Textdateien, die schon auf der Platte liegen, und lies die markierten Zeilen. Auf dem ersten Bildschirm fehlt ein großes Einfügefeld.',
	tool_compare_two_text_files_online_how_item_1: 'Erste Textdatei wählen (Originalstand oder Export).',
	tool_compare_two_text_files_online_how_item_2: 'Zweite Textdatei wählen (überarbeiteter Stand).',
	tool_compare_two_text_files_online_how_item_3:
		"Klicken Sie auf Vergleichen, um den Zeilen-Diff zu aktualisieren; nach Auswahl beider Dateien läuft er ebenfalls automatisch.",
	tool_compare_two_text_files_online_how_item_4: 'Grün sind Zugänge, rot Streichungen. Leeren nimmt beide Dateien aus diesem Tab.',
	tool_compare_two_text_files_online_how_title: 'So funktioniert’s',
	tool_compare_two_text_files_online_label_a: 'Erste Textdatei',
	tool_compare_two_text_files_online_label_b: 'Zweite Textdatei',
	tool_compare_two_text_files_online_legend: 'Grün = hinzugefügt · Rot = gelöscht',
	tool_compare_two_text_files_online_load_sample: 'Beispiel laden',
	tool_compare_two_text_files_online_need_lib: 'Der Vergleicher ließ sich nicht laden. Netz prüfen und neu laden.',
	tool_compare_two_text_files_online_no_diff: 'Keine Unterschiede: beide Dateien stimmen als Text überein.',
	tool_compare_two_text_files_online_result_label: 'Zeilenunterschiede',
	tool_compare_two_text_files_online_rules_body:
		'Nach UTF-8-Dekodierung folgt ein Zeilendiff. Kodierung, BOM und Binärprüfung liegen vor dem Einfärben.',
	tool_compare_two_text_files_online_rules_item_1:
		'Jede Datei wird mit FileReader / ArrayBuffer gelesen und als UTF-8 dekodiert. Ein UTF-8-BOM am Anfang wird entfernt, damit es keinen falschen Erstzeilenwechsel gibt.',
	tool_compare_two_text_files_online_rules_item_2:
		'Ein Nullbyte gilt als Binärdatei und wird abgelehnt. Das ist kein Hexdump-Werkzeug.',
	tool_compare_two_text_files_online_rules_item_3:
		'Der Diff läuft im Zeilenmodus (jsdiff diffLines). Ändert sich ein Wort in der Zeile, wird oft die ganze Zeile markiert.',
	tool_compare_two_text_files_online_rules_item_4:
		'Kein Einfügefeld auf dem ersten Bildschirm. Zwei Texte ohne Dateien fügst du auf «Unterschied zwischen zwei Texten prüfen» ein.',
	tool_compare_two_text_files_online_rules_title: 'Regeln, mit denen du rechnen solltest',
	tool_compare_two_text_files_online_sample_a: 'alpha\nzweite Zeile\ndritte',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\ngeänderte Zeile\ndritte',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: '{added} hinzugefügt, {removed} entfernt',
	tool_compare_two_text_files_online_title: 'Zwei Textdateien online vergleichen',
	tool_compare_two_text_files_online_usecase_1:
		'Exporte: gestriges log.txt mit dem heutigen Export vergleichen, ohne zehntausende Zeilen einzufügen.',
	tool_compare_two_text_files_online_usecase_2:
		'Konfig-Backups: zwei .env- oder .txt-Stände von der Platte, zeilenweise.',
	tool_compare_two_text_files_online_usecase_3:
		'Hausaufgaben: zwei Abgabe-.txt, in denen du sehen musst, welche Zeilen sich geändert haben.',
	tool_compare_two_text_files_online_usecases_title: 'Typische Situationen',
};

export default de;
