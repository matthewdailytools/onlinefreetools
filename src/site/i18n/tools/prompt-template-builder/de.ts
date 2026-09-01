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
		'Prompt-Vorlagen-Builder — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_prompt_template_builder_description:
		'Prozess und Beispiel: Prompt-Vorlagen-Builder — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_prompt_template_builder_download: 'Herunterladen',
	tool_prompt_template_builder_empty: 'Fügen Sie Freitext oder mindestens ein Feld hinzu, bevor Sie erstellen.',
	tool_prompt_template_builder_example:
		'Beispiel laden füllt das Code-Review-Agent-Preset, erzeugt Markdown mit vier ##-Abschnitten und aktiviert Kopieren und Herunterladen. Probieren Sie Film, Kurzdrama, Android oder iOS für andere Voreinstellungen.',
	tool_prompt_template_builder_example_title: 'Beispiel',
	tool_prompt_template_builder_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_prompt_template_builder_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown macht aus Chat-Exporten lesbare Dateien. Hier strukturieren Sie einen wiederverwendbaren System-Prompt — nutzen Sie beides nach dem Archivieren von Chats.',
	tool_prompt_template_builder_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_prompt_template_builder_faq_a5:
		'Zeilen, die mit Role:, Task:, Constraints: oder Output: im Freitext beginnen, werden in Abschnitte geteilt. Explizite Felder haben Vorrang.',
	tool_prompt_template_builder_faq_a6:
		'Ja. Kopieren Sie die erstellte Vorlage nach ChatGPT, Gemini, Claude oder DeepSeek — dieselbe Vier-Felder-Struktur funktioniert in jeder Chat-UI. Keine separaten URLs pro Plattform, weil es um Textformatierung geht, nicht um API-Aufrufe.',
	tool_prompt_template_builder_faq_q1: 'Wird mein Prompt hochgeladen?',
	tool_prompt_template_builder_faq_q2: 'Ruft das einen LLM auf?',
	tool_prompt_template_builder_faq_q3: 'Unterschied zu ChatGPT-Export nach Markdown?',
	tool_prompt_template_builder_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_prompt_template_builder_faq_q5: 'Wie funktioniert die Freitext-Analyse?',
	tool_prompt_template_builder_faq_q6: 'Kann ich das mit ChatGPT, Gemini, Claude oder DeepSeek nutzen?',
	tool_prompt_template_builder_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_prompt_template_builder_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_prompt_template_builder_ai_expand:
		'Expandir con IA',
	tool_prompt_template_builder_ai_polish:
		'Pulir con IA',
	tool_prompt_template_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_prompt_template_builder_ai_consent_ok:
		'Continuar',
	tool_prompt_template_builder_ai_consent_cancel:
		'Cancelar',
	tool_prompt_template_builder_ai_working:
		'Cloudflare AI trabajando…',
	tool_prompt_template_builder_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_prompt_template_builder_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_prompt_template_builder_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
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
		'Android oder iOS laden für Kotlin/Swift-Coding-Agent-Vorlagen ohne vier plattformspezifische Seiten.',
	tool_prompt_template_builder_usecases_title: 'Gute Einsätze',
};

export default de;
