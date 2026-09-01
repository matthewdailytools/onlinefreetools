/**
 * i18n tool shard (midjourney-prompt-builder / es).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'Crea prompts listos de Constructor de prompts Midjourney aquí. Rellena campos y copia Markdown o JSON a ChatGPT, Gemini, Claude o DeepSeek. Local por defecto; Expand/Polish opcional con Cloudflare Workers AI (Turnstile).',
	tool_midjourney_prompt_builder_build:
		'Crear prompt',
	tool_midjourney_prompt_builder_clear:
		'Limpiar',
	tool_midjourney_prompt_builder_copy:
		'Copiar',
	tool_midjourney_prompt_builder_desc:
		'Constructor de prompts Midjourney — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_midjourney_prompt_builder_description:
		'Proceso y ejemplo: Constructor de prompts Midjourney — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_midjourney_prompt_builder_download:
		'Descargar',
	tool_midjourney_prompt_builder_empty:
		'Rellena al menos un campo antes de crear.',
	tool_midjourney_prompt_builder_example:
		'Cargar ejemplo rellena el preset, crea Markdown y habilita Copiar. IA opcional envía solo ese clic tras Turnstile.',
	tool_midjourney_prompt_builder_example_title:
		'Ejemplo',
	tool_midjourney_prompt_builder_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_midjourney_prompt_builder_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_midjourney_prompt_builder_faq_a3:
		'Constructor de plantillas de Prompt covers generic Role/Task/Constraints/Output templates. This page focuses on midjourney prompt builder fields with a dedicated sample and rules for this scenario.',
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
		'How is this different from Constructor de plantillas de Prompt?',
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
		'Formato de salida',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'Sujeto',
	tool_midjourney_prompt_builder_subject_ph:
		'Sample subject…',
	tool_midjourney_prompt_builder_style_label:
		'Estilo',
	tool_midjourney_prompt_builder_style_ph:
		'Sample style…',
	tool_midjourney_prompt_builder_lighting_label:
		'Iluminación',
	tool_midjourney_prompt_builder_lighting_ph:
		'Sample lighting…',
	tool_midjourney_prompt_builder_aspect_label:
		'Relación de aspecto',
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
		'Rellena campos de Constructor de prompts Midjourney, crea el prompt localmente, opcionalmente Expand/Polish con Turnstile, y pégalo en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_midjourney_prompt_builder_how_item_1:
		'Al abrir, el ejemplo predeterminado ya se ejecutó (Cargar ejemplo).',
	tool_midjourney_prompt_builder_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_midjourney_prompt_builder_how_item_3:
		'Opcional: completa Turnstile y Expand/Polish con Cloudflare Workers AI.',
	tool_midjourney_prompt_builder_how_item_4:
		'Copia o descarga y pega en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_midjourney_prompt_builder_how_title:
		'Cómo funciona',
	tool_midjourney_prompt_builder_load_sample:
		'Cargar ejemplo',
	tool_midjourney_prompt_builder_platforms_lead:
		'Para ChatGPT, Gemini, Claude y DeepSeek — copia el prompt terminado en cualquier chat.',
	tool_midjourney_prompt_builder_result_label:
		'Salida del prompt',
	tool_midjourney_prompt_builder_rules_body:
		'Constructor de prompts Midjourney: ensamblaje local por defecto; IA opcional con límites y Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_midjourney_prompt_builder_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_midjourney_prompt_builder_rules_item_3:
		'La IA opcional no reemplaza el modo local — revisa antes de copiar.',
	tool_midjourney_prompt_builder_rules_item_4:
		'This tool assembles text only; it does not run midjourney prompt builder engines or call chat APIs locally.',
	tool_midjourney_prompt_builder_rules_title:
		'Reglas que debes conocer',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output format',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'Copiado al portapapeles.',
	tool_midjourney_prompt_builder_status_done:
		'Prompt listo.',
	tool_midjourney_prompt_builder_status_working:
		'Creando prompt…',
	tool_midjourney_prompt_builder_title:
		'Constructor de prompts Midjourney — Local + IA opcional',
	tool_midjourney_prompt_builder_usecase_1:
		'Brief listo para pegar de Constructor de prompts Midjourney en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_midjourney_prompt_builder_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_midjourney_prompt_builder_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_midjourney_prompt_builder_usecase_4:
		'Borradores sensibles en local — IA solo tras aceptar el modal.',
	tool_midjourney_prompt_builder_usecases_title:
		'Buenos casos de uso',
};

export default es;
