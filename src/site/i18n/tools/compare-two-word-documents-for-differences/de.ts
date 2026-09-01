/**
 * i18n（compare-two-word-documents-for-differences / de）。
 * H1: Zwei Word-Dokumente auf Unterschiede vergleichen.
 * Kein Microsoft Überprüfen → Vergleichen.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'Wählen Sie zwei .docx und vergleichen Sie den sichtbaren Wortlaut. Formatvorlagen, Kopfzeilen und der Word-Überprüfungsbereich werden nicht nachgebaut. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen.',
	tool_compare_two_word_documents_for_differences_clear: 'Leeren',
	tool_compare_two_word_documents_for_differences_compare: 'Vergleichen',
	tool_compare_two_word_documents_for_differences_desc:
		'Zwei Word-Dokumente auf Unterschiede vergleichen: sichtbaren Text aus zwei .docx im Browser ziehen — ohne Server-Upload.',
	tool_compare_two_word_documents_for_differences_description:
		'Zwei Word-Dokumente auf Unterschiede vergleichen, direkt im Browser. Ablauf: zwei .docx wählen, sichtbaren Absatztext ziehen, dann Ergänzungen und Streichungen markieren. Dateien bleiben auf Ihrem Gerät und werden nicht auf einen Server hochgeladen. Beispiel: zwei kurze Memos, in denen ein Satz wechselt. Das ist nicht Microsoft Überprüfen → Vergleichen; Kopfzeilen und Formatierungen entfallen. PDF liegt außerhalb.',
	tool_compare_two_word_documents_for_differences_empty: 'Zuerst zwei Word-Dateien wählen oder das Beispiel laden.',
	tool_compare_two_word_documents_for_differences_err_extract:
		'Text ließ sich nicht lesen. Die Datei kann beschädigt, verschlüsselt oder kein .docx sein.',
	tool_compare_two_word_documents_for_differences_err_no_text: 'In keiner Datei ist Text extrahierbar (leer oder nur Bilder).',
	tool_compare_two_word_documents_for_differences_err_not_docx: 'Bitte .docx (Office Open XML) verwenden. Altes .doc wird hier nicht unterstützt.',
	tool_compare_two_word_documents_for_differences_example:
		'Beispiel laden erzeugt zwei winzige .docx. Das zweite Memo ändert „meet at noon“ in „meet at 3pm“. Schon beim ersten Anzeigen steht dieser Wortlaut-Diff.',
	tool_compare_two_word_documents_for_differences_example_title: 'Beispiel',
	tool_compare_two_word_documents_for_differences_faq_a1:
		'Nein. Die Dateien werden in diesem Tab gelesen. mammoth und jsdiff können als Bibliothekscode über ein CDN kommen; Ihre Dokumente werden nicht auf unsere Server hochgeladen.',
	tool_compare_two_word_documents_for_differences_faq_a2:
		'Nein. Word kann Formatierung und Änderungsnachverfolgung vergleichen. Diese Seite zieht nur sichtbaren Text und vergleicht den. Kopf-, Fußzeilen und Formatvorlagen entfallen.',
	tool_compare_two_word_documents_for_differences_faq_a3:
		'Scheitert die Extraktion, ist die Datei oft passwortgeschützt, beschädigt oder kein OOXML. Nur-Bild-Seiten liefern leeren Text.',
	tool_compare_two_word_documents_for_differences_faq_a4:
		'Manche suchen „Word online vergleichen“ — dieselbe Aufgabe bei zwei .docx. Meinte „zwei Dokumente vergleichen“ ein PDF, ist das nicht diese Seite.',
	tool_compare_two_word_documents_for_differences_faq_q1: 'Werden meine Word-Dateien hochgeladen?',
	tool_compare_two_word_documents_for_differences_faq_q2: 'Ist das dasselbe wie Überprüfen → Vergleichen in Word?',
	tool_compare_two_word_documents_for_differences_faq_q3: 'Warum schlägt die Extraktion fehl oder fehlen Kopfzeilen?',
	tool_compare_two_word_documents_for_differences_faq_q4: 'Kann ich PDF oder beliebige zwei Dokumente vergleichen?',
	tool_compare_two_word_documents_for_differences_how_body:
		'Zwei Word-Dateien wählen und den Wortlaut-Diff lesen. Der Überprüfungsbereich öffnet sich nicht.',
	tool_compare_two_word_documents_for_differences_how_item_1: 'Erste .docx wählen (Original).',
	tool_compare_two_word_documents_for_differences_how_item_2: 'Zweite .docx wählen (überarbeitet).',
	tool_compare_two_word_documents_for_differences_how_item_3:
		'Vergleichen zieht sichtbaren Text automatisch; Beispiel laden lief schon beim ersten Anzeigen.',
	tool_compare_two_word_documents_for_differences_how_item_4: 'Grün sind Ergänzungen, rot Streichungen.',
	tool_compare_two_word_documents_for_differences_how_title: 'So gehen Sie vor',
	tool_compare_two_word_documents_for_differences_label_a: 'Erstes Word-Dokument',
	tool_compare_two_word_documents_for_differences_label_b: 'Zweites Word-Dokument',
	tool_compare_two_word_documents_for_differences_legend: 'Grün = hinzugefügt · Rot = gelöscht',
	tool_compare_two_word_documents_for_differences_load_sample: 'Beispiel laden',
	tool_compare_two_word_documents_for_differences_need_lib: 'Eine Bibliothek ließ sich nicht laden. Netz prüfen und neu laden.',
	tool_compare_two_word_documents_for_differences_no_diff: 'Im extrahierten Text gibt es keine Wortlaut-Unterschiede.',
	tool_compare_two_word_documents_for_differences_result_label: 'Wortlaut-Unterschiede',
	tool_compare_two_word_documents_for_differences_rules_body:
		'Verglichen wird ein Text-Diff nach der Extraktion. Formatierung ist keine Änderungsleiste.',
	tool_compare_two_word_documents_for_differences_rules_item_1:
		'mammoth liest sichtbare Absätze aus OOXML. Dieser Text wird zeilenweise mit jsdiff verglichen.',
	tool_compare_two_word_documents_for_differences_rules_item_2:
		'Kopf-, Fußzeilen, Kommentare und die meisten Formatvorlagen entfallen. Zwei Dateien, die nur umgestaltet sind, können identisch wirken.',
	tool_compare_two_word_documents_for_differences_rules_item_3: 'Verschlüsselte oder beschädigte .docx scheitern. Altes .doc wird nicht geparst.',
	tool_compare_two_word_documents_for_differences_rules_item_4:
		'Das ist nicht Microsoft „Dokumente vergleichen“. Für nachverfolgte Formatierung Word selbst nutzen.',
	tool_compare_two_word_documents_for_differences_rules_title: 'Was Sie erwarten sollten',
	tool_compare_two_word_documents_for_differences_sample_a: 'Team memo\nPlease meet at noon.',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: 'Team memo\nPlease meet at 3pm.',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: '{added} hinzugefügt, {removed} gelöscht',
	tool_compare_two_word_documents_for_differences_title: 'Zwei Word-Dokumente auf Unterschiede vergleichen',
	tool_compare_two_word_documents_for_differences_usecase_1:
		'Vertragsentwürfe: sehen, welche Sätze zwischen zwei .docx-Exporten wechselten.',
	tool_compare_two_word_documents_for_differences_usecase_2: 'Protokoll: die Datei der letzten Sitzung mit der von dieser Woche.',
	tool_compare_two_word_documents_for_differences_usecase_3: 'Hausaufgaben: zwei Word-Abgaben, wenn der Wortlaut zählt, nicht das Layout.',
	tool_compare_two_word_documents_for_differences_usecases_title: 'Wann das passt',
};

export default de;
