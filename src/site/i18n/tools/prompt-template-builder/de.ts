/**
 * i18n tool shard (prompt-template-builder / de).
 * Such-orientierte H1: Prompt-Vorlagen-Builder; die Seite formatiert nur Text und ruft keine
 * Chat-API auf. ChatGPT / Gemini / Claude / DeepSeek stehen in Description und erster Bildschirmseite.
 * Erweitern/Verfeinern ist optional über Cloudflare Workers AI (Turnstile + Kontingent).
 */
import type { SiteLangDict } from '../../../types';

const de: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Verwandeln Sie einen Prompt-Entwurf in eine wiederverwendbare Role / Task / Constraints / Output-Vorlage auf dieser Seite. Fügen Sie Freitext ein oder füllen Sie die Felder aus, kopieren Sie dann Markdown oder JSON nach ChatGPT, Gemini, Claude oder DeepSeek. Standardmäßig wird die Vorlage im Browser zusammengebaut, und wir rufen für Sie keine Chat-API auf; erst wenn Sie „Mit KI erweitern“ oder „Mit KI verfeinern“ klicken, geht der aktuelle Entwurf an Cloudflare Workers AI (Turnstile nötig, Kontingent begrenzt).',
	tool_prompt_template_builder_build: 'Vorlage erstellen',
	tool_prompt_template_builder_clear: 'Leeren',
	tool_prompt_template_builder_constraints_label: 'Constraints',
	tool_prompt_template_builder_constraints_ph: 'Ton, Umfang, was vermieden werden soll…',
	tool_prompt_template_builder_copy: 'Kopieren',
	tool_prompt_template_builder_desc:
		'Prompt-Vorlagen-Builder — Zusammenbau lokal im Browser, Erweitern/Verfeinern optional über Cloudflare AI (Turnstile nötig).',
	tool_prompt_template_builder_description:
		'Prompt-Vorlagen-Builder: Bringen Sie Ihren Entwurf in vier Schritten — Role, Task, Constraints, Output — in Form und kopieren Sie ihn nach ChatGPT, Gemini, Claude oder DeepSeek. Beim Öffnen läuft bereits ein Code-Review-Beispiel; Export standardmäßig als Markdown, für Pipelines als JSON. Der Zusammenbau läuft im Browser, die Cloudflare-KI (Erweitern/Verfeinern) ist optional und kontingentiert.',
	tool_prompt_template_builder_download: 'Herunterladen',
	tool_prompt_template_builder_empty: 'Fügen Sie Freitext oder mindestens ein Feld hinzu, bevor Sie erstellen.',
	tool_prompt_template_builder_example:
		'Eingabe (Beispiel laden, Code-Chip): Role = Senior-Code-Reviewer (Sicherheit & Lesbarkeit); Task = PR-Diff prüfen; Constraints = max. 12 Punkte. Ausgabe (Markdown): ## Rolle / ## Aufgabe / ## Einschränkungen / ## Ausgabeformat — vier Abschnitte für ChatGPT oder Claude.',
	tool_prompt_template_builder_example_title: 'Beispiel',
	tool_prompt_template_builder_faq_a1:
		'Standardmäßig entsteht die Vorlage in diesem Tab, nichts verlässt den Browser. Nur Erweitern/Verfeinern schickt den Text dieses Klicks an Cloudflare Workers AI; von unseren Servern geht nichts an OpenAI, Google, Anthropic oder DeepSeek.',
	tool_prompt_template_builder_faq_a2:
		'Der lokale Modus formatiert nur Ihre Felder in diesem Tab. Erweitern/Verfeinern nutzt nach dem Turnstile Cloudflare Workers AI — wir öffnen weder ChatGPT noch Gemini, Claude oder DeepSeek für Sie.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown macht aus Chat-Exporten lesbare Dateien. Hier strukturieren Sie einen wiederverwendbaren System-Prompt — nutzen Sie beides nach dem Archivieren von Chats.',
	tool_prompt_template_builder_faq_a4:
		'Ja. Lösen Sie das Turnstile-Widget im KI-Panel, bevor Sie Erweitern oder Verfeinern klicken; ohne gültiges Token meldet der Button einen Fehler, der lokale Modus läuft weiter.',
	tool_prompt_template_builder_faq_a5:
		'Zeilen, die mit Role:, Task:, Constraints: oder Output: im Freitext beginnen, werden in Abschnitte geteilt. Explizite Felder haben Vorrang.',
	tool_prompt_template_builder_faq_a6:
		'Ja. Kopieren Sie die erstellte Vorlage nach ChatGPT, Gemini, Claude oder DeepSeek — dieselbe Vier-Felder-Struktur funktioniert in jedem dieser Chats. Die Seite bereitet nur den Text auf; sie meldet sich nirgends an und ruft keine API auf.',
	tool_prompt_template_builder_faq_q1: 'Wird mein Prompt hochgeladen?',
	tool_prompt_template_builder_faq_q2: 'Ruft das einen LLM auf?',
	tool_prompt_template_builder_faq_q3: 'Unterschied zu ChatGPT-Export nach Markdown?',
	tool_prompt_template_builder_faq_q4:
		'Warum verlangt die optionale KI ein Turnstile?',
	tool_prompt_template_builder_faq_q5: 'Wie funktioniert die Freitext-Analyse?',
	tool_prompt_template_builder_faq_q6: 'Kann ich das mit ChatGPT, Gemini, Claude oder DeepSeek nutzen?',
	tool_prompt_template_builder_faq_q7:
		'Was unterscheidet den lokalen Modus von der optionalen Cloudflare-KI?',
	tool_prompt_template_builder_faq_a7:
		'Lokal: alles entsteht in diesem Tab, ohne Versand. Erweitern/Verfeinern schickt den Entwurf an Cloudflare Workers AI (Turnstile und Tageskontingent), und die Antwort ersetzt den Ergebnisblock. Bei Fehler oder erschöpftem Kontingent bleiben Sie beim lokalen Modus.',
	tool_prompt_template_builder_ai_expand:
		'Mit KI erweitern',
	tool_prompt_template_builder_ai_polish:
		'Mit KI verfeinern',
	tool_prompt_template_builder_ai_panel_label:
		'Optionale Cloudflare-KI (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'Text an Cloudflare Workers AI senden?',
	tool_prompt_template_builder_ai_consent_body:
		'Dieser optionale Schritt schickt Ihren aktuellen Entwurf zur Inferenz an Cloudflare Workers AI. Von unseren Servern geht nichts an OpenAI, Google, Anthropic oder DeepSeek. Ohne KI funktioniert der lokale Zusammenbau unverändert.',
	tool_prompt_template_builder_ai_consent_ok:
		'Weiter',
	tool_prompt_template_builder_ai_consent_cancel:
		'Abbrechen',
	tool_prompt_template_builder_ai_working:
		'Die Cloudflare-KI arbeitet…',
	tool_prompt_template_builder_ai_done:
		'Der KI-Text steht vollständig im Ergebnis. Bitte vor dem Kopieren prüfen.',
	tool_prompt_template_builder_ai_err_generic:
		'Die KI ist fehlgeschlagen. Ihr lokaler Prompt bleibt unverändert.',
	tool_prompt_template_builder_ai_err_rate:
		'KI-Kontingent erschöpft. Nutzen Sie den lokalen Modus oder versuchen Sie es morgen (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'Lösen Sie das Turnstile, bevor Sie die KI nutzen.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Ausgabeformat',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Freier Prompt (optional)',
	tool_prompt_template_builder_free_ph: 'Entwurf einfügen oder Zeilen Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Wählen Sie einen Szenen-Chip oder schreiben Sie Ihren Entwurf, füllen Sie Role / Task / Constraints / Output aus, erstellen Sie die Vorlage und fügen Sie sie in ChatGPT, Gemini, Claude oder DeepSeek ein.',
	tool_prompt_template_builder_how_item_1:
		'Wählen Sie Code-Review, Film, Kurzdrama, Android oder iOS — oder fügen Sie Ihren Entwurf ins Freitextfeld ein.',
	tool_prompt_template_builder_how_item_2: 'Klicken Sie auf Vorlage erstellen (Beispiel laden lädt das Code-Review-Preset).',
	tool_prompt_template_builder_how_item_3: 'Zu JSON wechseln, wenn Sie {role,task,constraints,output} für Code oder Config brauchen.',
	tool_prompt_template_builder_how_item_4: 'Kopieren oder herunterladen, dann in ChatGPT, Gemini, Claude oder DeepSeek einfügen.',
	tool_prompt_template_builder_how_title: 'So funktioniert es',
	tool_prompt_template_builder_load_sample: 'Beispiel laden',
	tool_prompt_template_builder_output_fmt_label: 'Ausgabeformat',
	tool_prompt_template_builder_output_fmt_ph: 'Markdown-Abschnitte, JSON-Form, Liste…',
	tool_prompt_template_builder_platforms_lead:
		'Für ChatGPT, Gemini, Claude und DeepSeek — kopieren Sie die fertige Vorlage in eine dieser Chat-UIs.',
	tool_prompt_template_builder_result_label: 'Vorlage',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Wen das Modell spielen soll…',
	tool_prompt_template_builder_rules_body:
		'Eine wiederverwendbare Vorlage braucht klare Blöcke, eine Rangfolge der Felder und eine offene Ansage, was diese Seite nicht macht.',
	tool_prompt_template_builder_rules_item_1:
		'Vier Blöcke: Role, Task, Constraints, Output. Leere fehlen im Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Explizite Felder schlagen geparste Freitext-Zeilen.',
	tool_prompt_template_builder_rules_item_3: 'Standard: Markdown mit ##. JSON ist ein Chip auf derselben Seite.',
	tool_prompt_template_builder_rules_item_4:
		'Szenen-Chips füllen die üblichen Felder für Film, Kurzdrama und Mobile-Code vor; danach können Sie alles von Hand ändern.',
	tool_prompt_template_builder_rules_title: 'Erwartete Regeln',
	tool_prompt_template_builder_scene_android: 'Android-Code',
	tool_prompt_template_builder_scene_code: 'Code-Review',
	tool_prompt_template_builder_scene_ios: 'iOS-Code',
	tool_prompt_template_builder_scene_label: 'Szenen-Preset',
	tool_prompt_template_builder_scene_movie: 'Spielfilm',
	tool_prompt_template_builder_scene_short_drama: 'Kurzdrama',
	tool_prompt_template_builder_sec_constraints: 'Einschränkungen',
	tool_prompt_template_builder_sec_output: 'Ausgabeformat',
	tool_prompt_template_builder_sec_role: 'Rolle',
	tool_prompt_template_builder_sec_task: 'Aufgabe',
	tool_prompt_template_builder_status_copied: 'In die Zwischenablage kopiert.',
	tool_prompt_template_builder_status_done: 'Vorlage fertig.',
	tool_prompt_template_builder_status_working: 'Vorlage wird erstellt…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Was Schritt für Schritt zu tun ist…',
	tool_prompt_template_builder_title:
		'Prompt-Vorlagen-Builder — Lokal + optionale KI',
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
		'Android oder iOS laden für Coding-Agent-Vorlagen mit Kotlin/Swift-Konventionen und die Hausregeln Ihres Teams ergänzen.',
	tool_prompt_template_builder_usecases_title: 'Gute Einsätze',
};

export default de;
