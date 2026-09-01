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
		'Zwei Textdateien online im Browser vergleichen. Ablauf: Originaldatei und überarbeitete Datei wählen, als UTF-8 dekodieren (BOM wird entfernt), Binärbytes ablehnen, dann Zeilen-Adds und -Deletes markieren. Die Dateien bleiben auf deinem Gerät und werden nicht hochgeladen. Beispiel: notes-a.txt gegen notes-b.txt, nur die mittlere Zeile ändert sich. Word, Excel und JSON haben eigene Seiten; hier geht es nur um Textdateien. Auch txt vergleichen fällt darunter.',
	tool_compare_two_text_files_online_empty: 'Zuerst zwei Textdateien wählen oder das Beispiel laden.',
	tool_compare_two_text_files_online_err_binary:
		'Eine Datei wirkt binär (Nullbytes). Diese Seite vergleicht nur Klartext wie .txt.',
	tool_compare_two_text_files_online_err_too_large:
		'Eine Datei ist größer als etwa 1 MB. Nimm einen kürzeren Ausschnitt, damit der Tab flüssig bleibt.',
	tool_compare_two_text_files_online_example:
		'Beispiel laden stellt notes-a.txt (alpha / zweite Zeile / dritte) notes-b.txt gegenüber, dessen Mitte «geänderte Zeile» lautet. Der Zeilenmodus markiert nur diese. Schon beim ersten Zeichnen siehst du das Ergebnis.',
	tool_compare_two_text_files_online_example_title: 'Beispiel',
	tool_compare_two_text_files_online_faq_a1:
		'Nein. FileReader liest die Bytes in diesem Tab. jsdiff kann als Bibliothek per CDN kommen; deine Dateien gehen nicht auf unsere Server.',
	tool_compare_two_text_files_online_faq_a2:
		'Dekodierung als UTF-8. Ein führendes BOM fällt weg, damit die erste Zeile nicht nur deshalb als geändert gilt. Andere Kodierungen können Zeichensalat ergeben — speichere vorher als UTF-8.',
	tool_compare_two_text_files_online_faq_a3:
		'Ein Nullbyte gilt als Binärdatei und wird abgelehnt. Dafür Hex- oder Archivwerkzeuge. Word und Excel gehören auf ihre eigenen Vergleichsseiten.',
	tool_compare_two_text_files_online_faq_a4:
		'Diese Seite ist für .txt / .text. Wer «txt vergleichen» oder einen Online-Dateivergleich sucht, meint oft genau das. Meinte «zwei Dateien vergleichen» Word oder Tabellen, nimm jene Seiten. Nur einfügen ohne Dateien: «Unterschied zwischen zwei Texten prüfen».',
	tool_compare_two_text_files_online_faq_q1: 'Werden meine Dateien hochgeladen?',
	tool_compare_two_text_files_online_faq_q2: 'Welche Kodierung und welche BOM-Regel gelten?',
	tool_compare_two_text_files_online_faq_q3: 'Kann ich hier Binärdateien, Word oder Excel vergleichen?',
	tool_compare_two_text_files_online_faq_q4: 'Ist das dasselbe wie txt vergleichen oder zwei Dateien vergleichen?',
	tool_compare_two_text_files_online_how_body:
		'Nimm zwei Textdateien, die schon auf der Platte liegen, und lies die markierten Zeilen. Auf dem ersten Bildschirm fehlt ein großes Einfügefeld.',
	tool_compare_two_text_files_online_how_item_1: 'Erste Textdatei wählen (Originalstand oder Export).',
	tool_compare_two_text_files_online_how_item_2: 'Zweite Textdatei wählen (überarbeiteter Stand).',
	tool_compare_two_text_files_online_how_item_3:
		'Sobald beide gewählt sind, läuft der Vergleich von selbst; Beispiel laden hat das beim ersten Zeichnen schon erledigt.',
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
