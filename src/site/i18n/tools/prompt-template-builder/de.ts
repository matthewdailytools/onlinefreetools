/**
 * i18n tool shard (prompt-template-builder / de).
 * H1 local: Prompt-Vorlagen-Builder.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Verwandeln Sie einen Prompt-Entwurf in eine wiederverwendbare Role / Task / Constraints / Output-Vorlage auf dieser Seite. Fügen Sie Freitext ein oder füllen Sie die Felder aus, dann kopieren Sie Markdown oder JSON. Es wird keine Modell-API aufgerufen. Der Text bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
	tool_prompt_template_builder_build: 'Vorlage erstellen',
	tool_prompt_template_builder_clear: 'Leeren',
	tool_prompt_template_builder_constraints_label: 'Constraints',
	tool_prompt_template_builder_constraints_ph: 'Ton, Umfang, was vermieden werden soll…',
	tool_prompt_template_builder_copy: 'Kopieren',
	tool_prompt_template_builder_desc:
		'Strukturierte Prompt-Vorlage (Markdown/JSON) — bleibt auf dem Gerät, ohne Server-Upload.',
	tool_prompt_template_builder_description:
		'Prompt-Vorlagen-Builder: Freitext mit Role, Task, Constraints und Output zu einer wiederverwendbaren Vorlage zusammenführen. Beispiel: Die Code-Review-Agent-Vorlage erscheint beim ersten Laden. Standard ist Markdown; JSON liefert {role,task,constraints,output}. Alles in diesem Tab — kein LLM und keine Cloud-Prompt-Bibliothek. Der Text bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
	tool_prompt_template_builder_download: 'Herunterladen',
	tool_prompt_template_builder_empty: 'Fügen Sie Freitext oder mindestens ein Feld hinzu, bevor Sie erstellen.',
	tool_prompt_template_builder_example:
		'Beispiel laden füllt Role, Task, Constraints und Output für einen Code-Review-Agenten, erzeugt Markdown mit vier ##-Abschnitten und aktiviert Kopieren und Herunterladen.',
	tool_prompt_template_builder_example_title: 'Beispiel',
	tool_prompt_template_builder_faq_a1:
		'Nein. Die Vorlage wird in diesem Browser-Tab erstellt. Nichts wird an OpenAI, Anthropic oder unsere Server gesendet.',
	tool_prompt_template_builder_faq_a2:
		'Nein. Diese Seite formatiert nur Ihren Text in Blöcke. Sie ruft kein Modell auf und erfindet keinen neuen Text.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown macht aus Chat-Exporten lesbare Dateien. Hier strukturieren Sie einen wiederverwendbaren System-Prompt — nutzen Sie beides nach dem Archivieren von Chats.',
	tool_prompt_template_builder_faq_a4:
		'Ja. Der JSON-Chip liefert {role,task,constraints,output}. Kombinieren Sie bei Bedarf mit dem JSON-Schema-Validator.',
	tool_prompt_template_builder_faq_a5:
		'Zeilen, die mit Role:, Task:, Constraints: oder Output: im Freitext beginnen, werden in Abschnitte geteilt. Explizite Felder haben Vorrang.',
	tool_prompt_template_builder_faq_q1: 'Wird mein Prompt hochgeladen?',
	tool_prompt_template_builder_faq_q2: 'Ruft das einen LLM auf?',
	tool_prompt_template_builder_faq_q3: 'Unterschied zu ChatGPT-Export nach Markdown?',
	tool_prompt_template_builder_faq_q4: 'Kann ich JSON erhalten?',
	tool_prompt_template_builder_faq_q5: 'Wie funktioniert die Freitext-Analyse?',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Ausgabeformat',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Freier Prompt (optional)',
	tool_prompt_template_builder_free_ph: 'Entwurf einfügen oder Zeilen Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Entwurf schreiben, optional Role / Task / Constraints / Output trennen, Vorlage erstellen, dann kopieren oder herunterladen. Markdown und JSON sind Chips derselben Aufgabe.',
	tool_prompt_template_builder_how_item_1:
		'Entwurf einfügen oder Role, Task, Constraints und Output ausfüllen — Ziel ist eine strukturierte Prompt-Vorlage.',
	tool_prompt_template_builder_how_item_2: 'Auf Vorlage erstellen klicken (Beispiel lief beim Öffnen bereits).',
	tool_prompt_template_builder_how_item_3: 'Zu JSON wechseln, wenn Sie {role,task,constraints,output} für Code oder Config brauchen.',
	tool_prompt_template_builder_how_item_4: 'Kopieren oder herunterladen. Felder bearbeiten und neu erstellen.',
	tool_prompt_template_builder_how_title: 'So funktioniert es',
	tool_prompt_template_builder_load_sample: 'Beispiel laden',
	tool_prompt_template_builder_output_fmt_label: 'Output format',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown-Abschnitte, JSON-Form, Liste…',
	tool_prompt_template_builder_result_label: 'Vorlage',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Wen das Modell spielen soll…',
	tool_prompt_template_builder_rules_body:
		'Eine wiederverwendbare Vorlage braucht klare Blöcke und ehrliche Grenzen — kein zweiter Generator.',
	tool_prompt_template_builder_rules_item_1:
		'Vier Blöcke: Role, Task, Constraints, Output. Leere fehlen im Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Explizite Felder schlagen geparste Freitext-Zeilen.',
	tool_prompt_template_builder_rules_item_3: 'Standard: Markdown mit ##. JSON ist ein Chip auf derselben Seite.',
	tool_prompt_template_builder_rules_item_4: 'Formatiert nur Text. Schätzt keine Tokens und validiert kein JSON gegen ein Schema.',
	tool_prompt_template_builder_rules_title: 'Erwartete Regeln',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'In die Zwischenablage kopiert.',
	tool_prompt_template_builder_status_done: 'Vorlage fertig.',
	tool_prompt_template_builder_status_working: 'Vorlage wird erstellt…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Was Schritt für Schritt zu tun ist…',
	tool_prompt_template_builder_title: 'Prompt-Vorlagen-Builder',
	tool_prompt_template_builder_usecase_1:
		'System-Prompt für Code-Review veröffentlichen, den das Team in jede Chat-UI einfügen kann.',
	tool_prompt_template_builder_usecase_2:
		'Meeting-Notizen in Role/Task/Constraints-Blöcke vor dem API-Anschluss umwandeln.',
	tool_prompt_template_builder_usecase_3:
		'JSON exportieren und JSON-Schema-Validator für Config-Dateien öffnen.',
	tool_prompt_template_builder_usecases_title: 'Gute Einsätze',
};

export default de;
