/**
 * i18n tool shard (prompt-template-builder / de).
 * Master H1: Prompt-Vorlagen-Builder; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Verwandeln Sie einen Prompt-Entwurf in eine wiederverwendbare Role / Task / Constraints / Output-Vorlage auf dieser Seite. Fügen Sie Freitext ein oder füllen Sie die Felder aus, kopieren Sie dann Markdown oder JSON nach ChatGPT, Gemini, Claude oder DeepSeek. Es wird keine Modell-API aufgerufen. Der Text bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
	tool_prompt_template_builder_build: 'Vorlage erstellen',
	tool_prompt_template_builder_clear: 'Leeren',
	tool_prompt_template_builder_constraints_label: 'Constraints',
	tool_prompt_template_builder_constraints_ph: 'Ton, Umfang, was vermieden werden soll…',
	tool_prompt_template_builder_copy: 'Kopieren',
	tool_prompt_template_builder_desc:
		'Prompt-Vorlagen-Builder für ChatGPT, Gemini, Claude & DeepSeek — Markdown/JSON; bleibt auf dem Gerät.',
	tool_prompt_template_builder_description:
		'Prompt-Vorlagen-Builder für ChatGPT, Gemini, Claude und DeepSeek: Role, Task, Constraints und Output zu einer wiederverwendbaren Vorlage zusammenführen. Szenen-Chips decken Code-Review, Spielfilm, Kurzdrama, Android und iOS ab. Beispiel: Das Code-Review-Agent-Preset läuft beim ersten Laden. Standard ist Markdown; JSON liefert {role,task,constraints,output}. Parsing bleibt in diesem Tab — kein LLM. Der Text bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
	tool_prompt_template_builder_download: 'Herunterladen',
	tool_prompt_template_builder_empty: 'Fügen Sie Freitext oder mindestens ein Feld hinzu, bevor Sie erstellen.',
	tool_prompt_template_builder_example:
		'Beispiel laden füllt das Code-Review-Agent-Preset, erzeugt Markdown mit vier ##-Abschnitten und aktiviert Kopieren und Herunterladen. Probieren Sie Film, Kurzdrama, Android oder iOS für andere Voreinstellungen.',
	tool_prompt_template_builder_example_title: 'Beispiel',
	tool_prompt_template_builder_faq_a1:
		'Nein. Vorlagen werden in diesem Browser-Tab erstellt. Nichts wird an OpenAI, Google, Anthropic, DeepSeek oder unsere Server gesendet.',
	tool_prompt_template_builder_faq_a2:
		'Nein. Diese Seite formatiert nur Ihren Text in Blöcke. Sie ruft ChatGPT, Gemini, Claude, DeepSeek oder keine andere Modell-API auf.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown macht aus Chat-Exporten lesbare Dateien. Hier strukturieren Sie einen wiederverwendbaren System-Prompt — nutzen Sie beides nach dem Archivieren von Chats.',
	tool_prompt_template_builder_faq_a4:
		'Ja. Der JSON-Chip liefert {role,task,constraints,output} für Configs oder Tests. Kombinieren Sie bei Bedarf mit dem JSON-Schema-Validator.',
	tool_prompt_template_builder_faq_a5:
		'Zeilen, die mit Role:, Task:, Constraints: oder Output: im Freitext beginnen, werden in Abschnitte geteilt. Explizite Felder haben Vorrang.',
	tool_prompt_template_builder_faq_a6:
		'Ja. Kopieren Sie die erstellte Vorlage nach ChatGPT, Gemini, Claude oder DeepSeek — dieselbe Vier-Felder-Struktur funktioniert in jeder Chat-UI. Keine separaten URLs pro Plattform, weil es um Textformatierung geht, nicht um API-Aufrufe.',
	tool_prompt_template_builder_faq_q1: 'Wird mein Prompt hochgeladen?',
	tool_prompt_template_builder_faq_q2: 'Ruft das einen LLM auf?',
	tool_prompt_template_builder_faq_q3: 'Unterschied zu ChatGPT-Export nach Markdown?',
	tool_prompt_template_builder_faq_q4: 'Kann ich JSON erhalten?',
	tool_prompt_template_builder_faq_q5: 'Wie funktioniert die Freitext-Analyse?',
	tool_prompt_template_builder_faq_q6: 'Kann ich das mit ChatGPT, Gemini, Claude oder DeepSeek nutzen?',
	tool_prompt_template_builder_faq_q7: 'Unterschied zwischen lokalem Modus und optionalem Cloudflare AI?',
	tool_prompt_template_builder_faq_a7:
		'Lokal formatiert nur in diesem Tab—nichts wird hochgeladen. Optionales Erweitern/Polieren sendet den Text dieses Klicks an Cloudflare Workers AI (limitiert, Turnstile). Bei Fehler oder Kontingent weiter lokal. Kein unbegrenztes AI-Versprechen.',
	tool_prompt_template_builder_ai_expand: 'Mit AI erweitern',
	tool_prompt_template_builder_ai_polish: 'Mit AI polieren',
	tool_prompt_template_builder_ai_panel_label: 'Optionales Cloudflare AI',
	tool_prompt_template_builder_ai_consent_title: 'Text an Cloudflare Workers AI senden?',
	tool_prompt_template_builder_ai_consent_body:
		'Dieser optionale Schritt sendet deinen Entwurf an Cloudflare Workers AI. Nicht an OpenAI, Google, Anthropic oder DeepSeek von unseren Servern. Lokale Montage funktioniert ohne AI.',
	tool_prompt_template_builder_ai_consent_ok: 'Weiter',
	tool_prompt_template_builder_ai_consent_cancel: 'Abbrechen',
	tool_prompt_template_builder_ai_working: 'Cloudflare AI arbeitet…',
	tool_prompt_template_builder_ai_done: 'AI-Vorschlag angewendet. Vor dem Kopieren prüfen.',
	tool_prompt_template_builder_ai_err_generic: 'AI fehlgeschlagen. Lokale Vorlage unverändert.',
	tool_prompt_template_builder_ai_err_rate: 'AI-Kontingent erreicht. Lokal nutzen oder morgen (UTC) erneut.',
	tool_prompt_template_builder_ai_err_turnstile: 'Turnstile vor AI-Nutzung abschließen.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Ausgabeformat',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Freier Prompt (optional)',
	tool_prompt_template_builder_free_ph: 'Entwurf einfügen oder Zeilen Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Wählen Sie einen Szenen-Chip oder schreiben Sie Ihren Entwurf, füllen Sie Role / Task / Constraints / Output aus, erstellen Sie die Vorlage und fügen Sie sie in ChatGPT, Gemini, Claude oder DeepSeek ein.',
	tool_prompt_template_builder_how_item_1:
		'Wählen Sie Code-Review, Film, Kurzdrama, Android oder iOS — oder fügen Sie Ihren Entwurf ins Freitextfeld ein.',
	tool_prompt_template_builder_how_item_2: 'Klicken Sie auf Vorlage erstellen (Beispiel laden hat das Code-Review-Preset beim Öffnen bereits ausgeführt).',
	tool_prompt_template_builder_how_item_3: 'Zu JSON wechseln, wenn Sie {role,task,constraints,output} für Code oder Config brauchen.',
	tool_prompt_template_builder_how_item_4: 'Kopieren oder herunterladen, dann in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_prompt_template_builder_how_title: 'So funktioniert es',
	tool_prompt_template_builder_load_sample: 'Beispiel laden',
	tool_prompt_template_builder_output_fmt_label: 'Output format',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown-Abschnitte, JSON-Form, Liste…',
	tool_prompt_template_builder_platforms_lead:
		'Für ChatGPT, Gemini, Claude und DeepSeek — kopieren Sie die fertige Vorlage in eine dieser Chat-UIs.',
	tool_prompt_template_builder_result_label: 'Vorlage',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Wen das Modell spielen soll…',
	tool_prompt_template_builder_rules_body:
		'Eine wiederverwendbare Vorlage braucht klare Blöcke, Feld-Priorität und ehrliche Grenzen — kein zweites Generator-Produkt.',
	tool_prompt_template_builder_rules_item_1:
		'Vier Blöcke: Role, Task, Constraints, Output. Leere fehlen im Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Explizite Felder schlagen geparste Freitext-Zeilen.',
	tool_prompt_template_builder_rules_item_3: 'Standard: Markdown mit ##. JSON ist ein Chip auf derselben Seite.',
	tool_prompt_template_builder_rules_item_4:
		'Szenen-Chips presetten Felder für Film, Kurzdrama und Mobile-Code — derselbe Builder, keine plattformspezifischen URLs.',
	tool_prompt_template_builder_rules_title: 'Erwartete Regeln',
	tool_prompt_template_builder_scene_android: 'Android-Code',
	tool_prompt_template_builder_scene_code: 'Code-Review',
	tool_prompt_template_builder_scene_ios: 'iOS-Code',
	tool_prompt_template_builder_scene_label: 'Szenen-Preset',
	tool_prompt_template_builder_scene_movie: 'Spielfilm',
	tool_prompt_template_builder_scene_short_drama: 'Kurzdrama',
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
		'System-Prompt für Code-Review-Agent veröffentlichen, den das Team in ChatGPT, Gemini, Claude oder DeepSeek einfügen kann.',
	tool_prompt_template_builder_usecase_2:
		'Meeting-Notizen in Role/Task/Constraints-Blöcke vor dem API-Anschluss an jeden Chat-Anbieter umwandeln.',
	tool_prompt_template_builder_usecase_3:
		'JSON exportieren und JSON-Schema-Validator für downstream Config-Dateien öffnen.',
	tool_prompt_template_builder_usecase_4:
		'Film-Chip laden für ein Drei-Akt-Beat-Sheet, das Sie in Ihre bevorzugte Chat-UI einfügen.',
	tool_prompt_template_builder_usecase_5:
		'Kurzdrama laden für Hooks und Cliffhanger einer vertikalen Serie — mobile Binge-Episoden.',
	tool_prompt_template_builder_usecase_6:
		'Android oder iOS laden für Kotlin/Swift-Coding-Agent-Vorlagen ohne vier plattformspezifische Seiten.',
	tool_prompt_template_builder_usecases_title: 'Gute Einsätze',
};

export default de;
