/**
 * i18n tool shard (midjourney-prompt-builder / fr).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const fr: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Constructeur de prompts Midjourney — Local + IA optionnelle pour ChatGPT, Gemini, Claude et DeepSeek : assemblage local par défaut, puis Expand/Polish optionnel via Cloudflare Workers AI (Turnstile requis, quota). L’exemple s’exécute à l’ouverture. Markdown par défaut ; JSON pour pipelines. Le texte reste sur l’appareil sauf IA.',
	tool_midjourney_prompt_builder_build:
		'Créer le prompt',
	tool_midjourney_prompt_builder_clear:
		'Effacer',
	tool_midjourney_prompt_builder_copy:
		'Copier',
	tool_midjourney_prompt_builder_desc:
		'Constructeur de prompts Midjourney — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_midjourney_prompt_builder_description:
		'Processus et exemple : Constructeur de prompts Midjourney — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_midjourney_prompt_builder_download:
		'Télécharger',
	tool_midjourney_prompt_builder_empty:
		'Remplissez au moins un champ avant de créer.',
	tool_midjourney_prompt_builder_example:
		'Entrée : Subject = samouraï sur pont mousseux ; Style = encre ciné ; Flags = --v 6.1 --style raw --chaos 8. Sortie (Markdown) : ## Task avec ligne MJ et --ar 16:9 ; JSON structuré.',
	tool_midjourney_prompt_builder_example_title:
		'Exemple',
	tool_midjourney_prompt_builder_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_midjourney_prompt_builder_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_midjourney_prompt_builder_faq_a3:
		'Constructeur de prompts Midjourney covers generic Role/Task/Constraints/Output templates. This page focuses on Constructeur de prompts Midjourney fields with a dedicated sample and rules for this scenario.',
	tool_midjourney_prompt_builder_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_midjourney_prompt_builder_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_midjourney_prompt_builder_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_midjourney_prompt_builder_faq_q1:
		'Is my prompt uploaded?',
	tool_midjourney_prompt_builder_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_midjourney_prompt_builder_faq_q3:
		'How is this different from Constructeur de prompts Midjourney?',
	tool_midjourney_prompt_builder_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_midjourney_prompt_builder_faq_q5:
		'Can I get JSON output?',
	tool_midjourney_prompt_builder_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_midjourney_prompt_builder_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_midjourney_prompt_builder_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_midjourney_prompt_builder_ai_expand:
		'Expandir con IA',
	tool_midjourney_prompt_builder_ai_polish:
		'Pulir con IA',
	tool_midjourney_prompt_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_midjourney_prompt_builder_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_midjourney_prompt_builder_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_midjourney_prompt_builder_ai_working:
		'Cloudflare AI trabajando…',
	tool_midjourney_prompt_builder_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_midjourney_prompt_builder_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_midjourney_prompt_builder_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'Format de sortie',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'Subject',
	tool_midjourney_prompt_builder_subject_ph:
		'Sample subject…',
	tool_midjourney_prompt_builder_style_label:
		'Style',
	tool_midjourney_prompt_builder_style_ph:
		'Sample style…',
	tool_midjourney_prompt_builder_lighting_label:
		'Lighting',
	tool_midjourney_prompt_builder_lighting_ph:
		'Sample lighting…',
	tool_midjourney_prompt_builder_aspect_label:
		'Aspect',
	tool_midjourney_prompt_builder_aspect_ph:
		'Sample aspect…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'Mj / Flags',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'Sample mj flags…',
	tool_midjourney_prompt_builder_rules_table_title:
		'Midjourney flag mapping',
	tool_midjourney_prompt_builder_rules_table_ar:
		'Aspect → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'Version → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'Append flags from the table when aspect or version is set.',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 square',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 landscape',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 vertical',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'MJ v6 default',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'Fill Constructeur de prompts Midjourney fields, build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_midjourney_prompt_builder_how_item_1:
		'Load sample already ran the default preset on first paint.',
	tool_midjourney_prompt_builder_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_midjourney_prompt_builder_how_item_3:
		'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
	tool_midjourney_prompt_builder_how_item_4:
		'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_midjourney_prompt_builder_how_title:
		'Comment ça marche',
	tool_midjourney_prompt_builder_load_sample:
		'Charger un exemple',
	tool_midjourney_prompt_builder_platforms_lead:
		'Pour ChatGPT, Gemini, Claude et DeepSeek — copiez le prompt fini dans n’importe quel chat.',
	tool_midjourney_prompt_builder_result_label:
		'Sortie du prompt',
	tool_midjourney_prompt_builder_rules_body:
		'MJ parameter mapping table for --ar and --v. Local assembly is default; optional AI is rate-limited and requires Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_midjourney_prompt_builder_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_midjourney_prompt_builder_rules_item_3:
		'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
	tool_midjourney_prompt_builder_rules_item_4:
		'This tool assembles text only; it does not run midjourney prompt builder engines or call chat APIs locally.',
	tool_midjourney_prompt_builder_rules_title:
		'Règles à connaître',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output format',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'Copié.',
	tool_midjourney_prompt_builder_status_done:
		'Prompt prêt.',
	tool_midjourney_prompt_builder_status_working:
		'Création du prompt…',
	tool_midjourney_prompt_builder_title:
		'Constructeur de prompts Midjourney — Local + IA optionnelle',
	tool_midjourney_prompt_builder_usecase_1:
		'Ship a paste-ready midjourney prompt builder brief for your team chat in ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_midjourney_prompt_builder_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_midjourney_prompt_builder_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_midjourney_prompt_builder_usecase_4:
		'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
	tool_midjourney_prompt_builder_usecases_title:
		'Bonnes utilisations',
};

export default fr;
