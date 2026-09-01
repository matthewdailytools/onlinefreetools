/**
 * i18n tool shard (writing-prompt-generator / de).
 * Search H1: Schreib-Prompt-Generator — Dialog, Figur, Drehbuch, Zufall; lokale Montage.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek in description; random prompt generator absorbed in FAQ.
 */
import type { SiteLangDict } from '../../../types';

/** Schreib-Prompt-Generator — deutschsprachiger Text-Shard */
const de: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Stellen Sie einfügefertige Schreib-Prompts zusammen: Dialogszenen, Charakterstudien, Skizzen für Drehbücher oder zufällige Story-Starter. Wählen Sie einen Modus, füllen Sie Felder aus oder würfeln Sie, kopieren Sie dann Markdown oder JSON nach ChatGPT, Gemini, Claude oder DeepSeek. Es wird keine Modell-API aufgerufen. Der Text bleibt auf Ihrem Gerät und wird nicht auf einen Server hochgeladen.',
	tool_writing_prompt_generator_build: 'Prompt erstellen',
	tool_writing_prompt_generator_char_flaw_label: 'Schwäche / Makel',
	tool_writing_prompt_generator_char_flaw_ph: 'Was sie ausbremst…',
	tool_writing_prompt_generator_char_goal_label: 'Ziel',
	tool_writing_prompt_generator_char_goal_ph: 'Was sie in dieser Geschichte will…',
	tool_writing_prompt_generator_char_name_label: 'Charaktername',
	tool_writing_prompt_generator_char_name_ph: 'Vorname oder Rollenbezeichnung…',
	tool_writing_prompt_generator_char_traits_label: 'Eigenschaften',
	tool_writing_prompt_generator_char_traits_ph: 'Persönlichkeit, Gewohnheiten, Widersprüche…',
	tool_writing_prompt_generator_char_voice_label: 'Stimme / Diktion',
	tool_writing_prompt_generator_char_voice_ph: 'Satzrhythmus, Wortschatz…',
	tool_writing_prompt_generator_clear: 'Leeren',
	tool_writing_prompt_generator_copy: 'Kopieren',
	tool_writing_prompt_generator_desc:
		'Schreib-Prompt-Generator — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_writing_prompt_generator_description:
		'Prozess und Beispiel: Schreib-Prompt-Generator — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_writing_prompt_generator_dlg_characters_label: 'Figuren',
	tool_writing_prompt_generator_dlg_characters_ph: 'Namen + Rollen in einer Zeile…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Konflikt',
	tool_writing_prompt_generator_dlg_conflict_ph: 'Welche Spannung die Szene antreibt…',
	tool_writing_prompt_generator_dlg_genre_label: 'Genre / Ton',
	tool_writing_prompt_generator_dlg_genre_ph: 'Zeitgenössisches Drama, Rom-Com…',
	tool_writing_prompt_generator_dlg_setting_label: 'Schauplatz',
	tool_writing_prompt_generator_dlg_setting_ph: 'Ort, Zeit, Atmosphäre…',
	tool_writing_prompt_generator_dlg_tone_label: 'Dialogstil',
	tool_writing_prompt_generator_dlg_tone_ph: 'Subtext, Schlagabtausch, knapp…',
	tool_writing_prompt_generator_download: 'Herunterladen',
	tool_writing_prompt_generator_empty: 'Füllen Sie in diesem Modus mindestens ein Feld aus, bevor Sie erstellen.',
	tool_writing_prompt_generator_example:
		'Beispiel laden wählt den Modus Dialog, füllt eine Nacht-Diner-Szene, erzeugt Markdown mit Role/Task/Constraints/Output-Abschnitten und aktiviert Kopieren. Probieren Sie die Chips Figur, Drehbuch oder Zufall für andere Voreinstellungen.',
	tool_writing_prompt_generator_example_title: 'Beispiel',
	tool_writing_prompt_generator_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_writing_prompt_generator_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_writing_prompt_generator_faq_a3:
		'Der Prompt-Vorlagen-Builder strukturiert generische Role/Task/Constraints/Output-Vorlagen. Diese Seite fokussiert Schreibmodi — Dialogfelder, Charakterbögen, Drehbuch-Beats und einen Zufalls-Prompt-Generator auf einer Leinwand.',
	tool_writing_prompt_generator_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_writing_prompt_generator_faq_a5:
		'Ja. Der JSON-Chip liefert {mode,fields,role,task,constraints,output} für Tests oder Configs. Markdown nutzt ## Role / Task / Constraints / Output-Überschriften.',
	tool_writing_prompt_generator_faq_a6:
		'Ja. Kopieren Sie den fertigen Prompt nach ChatGPT, Gemini, Claude oder DeepSeek. Wir trennen keine URLs pro Plattform, weil die Aufgabe Textformatierung ist, nicht API-Aufrufe.',
	tool_writing_prompt_generator_faq_q1: 'Wird mein Schreib-Prompt hochgeladen?',
	tool_writing_prompt_generator_faq_q2: 'Ruft das einen LLM auf?',
	tool_writing_prompt_generator_faq_q3: 'Worin unterscheidet es sich vom Prompt-Vorlagen-Builder?',
	tool_writing_prompt_generator_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_writing_prompt_generator_faq_q5: 'Kann ich JSON erhalten?',
	tool_writing_prompt_generator_faq_q6: 'Kann ich es mit ChatGPT, Gemini, Claude oder DeepSeek nutzen?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Ausgabeformat',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Wählen Sie einen Schreibmodus, füllen Sie Felder aus oder würfeln Sie, erstellen Sie einen Prompt-Block und fügen Sie ihn in ChatGPT, Gemini, Claude oder DeepSeek ein.',
	tool_writing_prompt_generator_how_item_1:
		'Wählen Sie Dialog, Figur, Drehbuch oder Zufall — Beispiel laden hat beim Öffnen bereits das Dialog-Preset ausgeführt.',
	tool_writing_prompt_generator_how_item_2: 'Füllen Sie modusspezifische Felder aus (oder geben Sie einen Seed ein und klicken Zufall würfeln).',
	tool_writing_prompt_generator_how_item_3: 'Klicken Sie Prompt erstellen (in Zufall ausgeblendet — Zufall würfeln nutzen).',
	tool_writing_prompt_generator_how_item_4: 'Kopieren oder laden Sie Markdown/JSON herunter und fügen Sie es in Ihre Chat-Oberfläche ein.',
	tool_writing_prompt_generator_how_title: 'So funktioniert es',
	tool_writing_prompt_generator_load_sample: 'Beispiel laden',
	tool_writing_prompt_generator_mode_character: 'Figur',
	tool_writing_prompt_generator_mode_dialogue: 'Dialog',
	tool_writing_prompt_generator_mode_label: 'Schreibmodus',
	tool_writing_prompt_generator_mode_random: 'Zufall',
	tool_writing_prompt_generator_mode_script: 'Drehbuch / Gliederung',
	tool_writing_prompt_generator_platforms_lead:
		'Für ChatGPT, Gemini, Claude und DeepSeek — kopieren Sie den fertigen Schreib-Prompt in eine dieser Chat-Oberflächen.',
	tool_writing_prompt_generator_random_lead:
		'Würfeln Sie einen Story-Starter aus Genre, Schauplatz, Objekt, Emotion und Konflikt. Optionaler Seed wiederholt denselben Wurf.',
	tool_writing_prompt_generator_random_roll: 'Zufall würfeln',
	tool_writing_prompt_generator_random_seed_label: 'Seed (optional)',
	tool_writing_prompt_generator_random_seed_ph: 'z. B. 42',
	tool_writing_prompt_generator_result_label: 'Schreib-Prompt',
	tool_writing_prompt_generator_rules_body:
		'Schreib-Prompts brauchen modusspezifische Felder, ehrliche Zufallsgrenzen und dieselbe lokale Privatsphäre wie andere Builder.',
	tool_writing_prompt_generator_rules_item_1:
		'Vier Blöcke in der Ausgabe: Role, Task, Constraints, Output — im Einklang mit strukturierten Prompt-Vorlagen.',
	tool_writing_prompt_generator_rules_item_2:
		'Der Zufallsmodus integriert den Zufalls-Prompt-Generator unter dieser URL — ohne separate Seite.',
	tool_writing_prompt_generator_rules_item_3:
		'Standardexport ist Markdown. JSON ist ein Chip auf derselben Leinwand.',
	tool_writing_prompt_generator_rules_item_4:
		'Dieses Tool stellt nur Text zusammen. Es erzeugt keine fertigen Geschichten und ruft keine Cloud-Modelle auf.',
	tool_writing_prompt_generator_rules_title: 'Was Sie erwarten sollten',
	tool_writing_prompt_generator_scr_notes_label: 'Beat-Notizen',
	tool_writing_prompt_generator_scr_notes_ph: 'Szenenzahl, Tempo, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Prämisse / Logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Setup in einem Absatz…',
	tool_writing_prompt_generator_scr_structure_label: 'Struktur',
	tool_writing_prompt_generator_scr_structure_ph: 'Drei Akte, Save the Cat, episodisch…',
	tool_writing_prompt_generator_sec_constraints: 'Constraints',
	tool_writing_prompt_generator_sec_output: 'Output format',
	tool_writing_prompt_generator_sec_role: 'Role',
	tool_writing_prompt_generator_sec_task: 'Task',
	tool_writing_prompt_generator_status_copied: 'In die Zwischenablage kopiert.',
	tool_writing_prompt_generator_status_done: 'Prompt bereit.',
	tool_writing_prompt_generator_status_working: 'Prompt wird erstellt…',
	tool_writing_prompt_generator_title:
		'Schreib-Prompt-Generator — Lokal + optionale KI',
	tool_writing_prompt_generator_usecase_1:
		'Entwerfen Sie einen Dialogszenen-Prompt für eine Schreibgruppe — fügen Sie ihn in ChatGPT oder Claude für Beat-Vorschläge ein, nicht für vollständige Prosa.',
	tool_writing_prompt_generator_usecase_2:
		'Würfeln Sie, wenn Sie einen frischen Story-Starter brauchen, ohne eine separate Zufallsseite zu öffnen.',
	tool_writing_prompt_generator_usecase_3:
		'Exportieren Sie Charakterbogen-Prompt-JSON für einen Pipeline-Test, dann öffnen Sie den Prompt-Vorlagen-Builder für API-Vierfeld-Vorlagen.',
	tool_writing_prompt_generator_usecase_4:
		'Skizzieren Sie lokal ein Kurzdrehbuch-Beat-Sheet, bevor Sie den Prompt in Gemini für Table Reads übernehmen.',
	tool_writing_prompt_generator_usecases_title: 'Gute Einsatzfälle',
	tool_writing_prompt_generator_ai_expand:
		'Expandir con IA',
	tool_writing_prompt_generator_ai_polish:
		'Pulir con IA',
	tool_writing_prompt_generator_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_writing_prompt_generator_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_writing_prompt_generator_ai_working:
		'Cloudflare AI trabajando…',
	tool_writing_prompt_generator_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_writing_prompt_generator_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_writing_prompt_generator_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_writing_prompt_generator_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_writing_prompt_generator_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
};

export default de;
