/**
 * i18n-Fragment (chatgpt-export-to-markdown / de).
 * Lokales H1: ChatGPT Export zu Markdown.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'Wandeln Sie einen ChatGPT-Export auf dieser Seite in Markdown um. JSON einfügen oder ablegen, lesbare Turns erhalten und optional auf JSON oder CSV wechseln. Claude-Exporte nutzen dieselbe Fläche. Bleibt auf dem Gerät, wird nicht hochgeladen.',
	tool_chatgpt_export_to_markdown_choose_file: 'Datei wählen',
	tool_chatgpt_export_to_markdown_clear: 'Leeren',
	tool_chatgpt_export_to_markdown_convert: 'Umwandeln',
	tool_chatgpt_export_to_markdown_copy: 'Kopieren',
	tool_chatgpt_export_to_markdown_desc:
		'ChatGPT Export zu Markdown (JSON/CSV-Chips); bleibt auf dem Gerät, wird nicht hochgeladen.',
	tool_chatgpt_export_to_markdown_description:
		'ChatGPT Export zu Markdown: Export-JSON ablegen oder einfügen, User-/Assistenten-Turns mappen und Markdown speichern. Beispiel: Die Beispielunterhaltung ist beim Öffnen schon Markdown. JSON und CSV sind Ausgabe-Chips. Claude-chat_messages werden auf derselben Seite erkannt. Dateien bleiben auf dem Gerät und werden nicht an einen Server geschickt. Weder Token-Zähler noch Cloud-Sync.',
	tool_chatgpt_export_to_markdown_download: 'Speichern',
	tool_chatgpt_export_to_markdown_drop_hint: 'Conversations-JSON ablegen oder unten einfügen. Die Auswertung bleibt in diesem Tab.',
	tool_chatgpt_export_to_markdown_empty: 'Zuerst Export einfügen oder Datei wählen.',
	tool_chatgpt_export_to_markdown_err_none: 'Keine Turns gefunden. Prüfen Sie, ob das JSON mapping, messages oder chat_messages hat.',
	tool_chatgpt_export_to_markdown_err_parse: 'Dieses JSON ließ sich nicht lesen. Gültigen ChatGPT- oder Claude-Export einfügen.',
	tool_chatgpt_export_to_markdown_example:
		'Beispiel laden fügt ein zwei-Turns-Mapping-JSON ein, wandelt es in Markdown mit User-/Assistant-Überschriften um und aktiviert Kopieren und Speichern.',
	tool_chatgpt_export_to_markdown_example_title: 'Beispiel',
	tool_chatgpt_export_to_markdown_faq_a1: 'Nein. Der Export wird in diesem Tab gelesen. Nichts geht zu OpenAI, Anthropic oder unseren Servern.',
	tool_chatgpt_export_to_markdown_faq_a2: 'Hauptweg ist der ChatGPT-Datenexport mit Mapping-Baum. Flache role/content-Arrays und Claude-chat_messages werden ebenfalls akzeptiert.',
	tool_chatgpt_export_to_markdown_faq_a3: 'Ja. Claude-chat_messages-Arrays (sender + text) laufen durch denselben Konverter – ein Einfügen deckt ChatGPT- und Claude-Exporte ab.',
	tool_chatgpt_export_to_markdown_faq_a4: 'Leere System-Knoten und Tool-Hüllen ohne Text werden übersprungen. Anhänge und Bilder werden nicht als Dateien rekonstruiert.',
	tool_chatgpt_export_to_markdown_faq_a5: 'Token zählen ist ein anderer Job und steckt nicht in diesem Konverter. Nutzen Sie bei Bedarf einen eigenen Token-Zähler.',
	tool_chatgpt_export_to_markdown_faq_q1: 'Wird mein Chat hochgeladen?',
	tool_chatgpt_export_to_markdown_faq_q2: 'Welche Exportformen funktionieren?',
	tool_chatgpt_export_to_markdown_faq_q3: 'Funktioniert der Claude-Export?',
	tool_chatgpt_export_to_markdown_faq_q4: 'Welche Felder entfallen?',
	tool_chatgpt_export_to_markdown_faq_q5: 'Ist das ein Token-Zähler?',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: 'Ausgabeformat',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body:
		'Chat exportieren, JSON einfügen oder ablegen, nach Markdown umwandeln, dann kopieren oder speichern. JSON und CSV sind Chips derselben Aufgabe.',
	tool_chatgpt_export_to_markdown_how_item_1: 'ChatGPT-Datenexport (oder Claude-JSON) holen — der Job ist ChatGPT Export zu Markdown.',
	tool_chatgpt_export_to_markdown_how_item_2: 'Datei ablegen oder JSON in das Feld einfügen.',
	tool_chatgpt_export_to_markdown_how_item_3: 'Markdown lassen, außer JSON- oder CSV-Chip wird gebraucht.',
	tool_chatgpt_export_to_markdown_how_item_4: 'Kopieren oder speichern. Das Beispiel lief schon beim ersten Paint.',
	tool_chatgpt_export_to_markdown_how_title: 'So funktioniert es',
	tool_chatgpt_export_to_markdown_input_label: 'Export-JSON',
	tool_chatgpt_export_to_markdown_input_ph: 'Conversations-JSON hier einfügen…',
	tool_chatgpt_export_to_markdown_load_sample: 'Beispiel laden',
	tool_chatgpt_export_to_markdown_output_label: 'Ergebnis',
	tool_chatgpt_export_to_markdown_role_assistant: 'Assistent',
	tool_chatgpt_export_to_markdown_role_system: 'System',
	tool_chatgpt_export_to_markdown_role_tool: 'Werkzeug',
	tool_chatgpt_export_to_markdown_role_user: 'Nutzer',
	tool_chatgpt_export_to_markdown_rules_body:
		'Exportkonvertierung braucht eine Feldzuordnung, Markdown als Standard und klare Hinweise zur lokalen Verarbeitung.',
	tool_chatgpt_export_to_markdown_rules_item_1: 'Standardausgabe ist Markdown mit ## Nutzer / ## Assistent und optionalem # Titel.',
	tool_chatgpt_export_to_markdown_rules_item_2: 'ChatGPT-Mapping-Bäume, flache Arrays und Claude-chat_messages werden auf einer Seite geparst.',
	tool_chatgpt_export_to_markdown_rules_item_3: 'JSON- und CSV-Chips geben dieselben Turns für Pipelines oder Tabellen erneut aus.',
	tool_chatgpt_export_to_markdown_rules_item_4: 'Anbieterformate ändern sich. Bei Fehlern Roh-JSON einfügen und die FAQ prüfen.',
	tool_chatgpt_export_to_markdown_rules_title: 'Regeln, die Sie erwarten sollten',
	tool_chatgpt_export_to_markdown_status_copied: 'In die Zwischenablage kopiert.',
	tool_chatgpt_export_to_markdown_status_done: 'Fertig — {n} Turns ({source}).',
	tool_chatgpt_export_to_markdown_status_working: 'Export wird ausgewertet…',
	tool_chatgpt_export_to_markdown_title: 'ChatGPT Export zu Markdown',
	tool_chatgpt_export_to_markdown_usecase_1: 'Archivieren Sie den ChatGPT-Export von heute als Markdown, bevor Sie den Thread löschen.',
	tool_chatgpt_export_to_markdown_usecase_2: 'Wechseln Sie zu CSV, wenn Sie role/content-Spalten für eine Tabelle brauchen.',
	tool_chatgpt_export_to_markdown_usecase_3: 'Legen Sie Claude-chat_messages-JSON hier ab; derselbe Konverter mappt die Turns nach Markdown.',
	tool_chatgpt_export_to_markdown_usecases_title: 'Gute Einsätze',
};

export default de;
