/**
 * i18n tool shard (sketch-prompt-generator / es).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'Crea prompts listos de Generador de prompts de boceto aquí. Rellena campos y copia Markdown o JSON a ChatGPT, Gemini, Claude o DeepSeek. Local por defecto; Expand/Polish opcional con Cloudflare Workers AI (Turnstile).',
	tool_sketch_prompt_generator_build:
		'Crear prompt',
	tool_sketch_prompt_generator_clear:
		'Limpiar',
	tool_sketch_prompt_generator_copy:
		'Copiar',
	tool_sketch_prompt_generator_desc:
		'Generador de prompts de boceto — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_sketch_prompt_generator_description:
		'Proceso y ejemplo: Generador de prompts de boceto — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_sketch_prompt_generator_download:
		'Descargar',
	tool_sketch_prompt_generator_empty:
		'Rellena al menos un campo antes de crear.',
	tool_sketch_prompt_generator_example:
		'Cargar ejemplo rellena el preset, crea Markdown y habilita Copiar. IA opcional envía solo ese clic tras Turnstile.',
	tool_sketch_prompt_generator_example_title:
		'Ejemplo',
	tool_sketch_prompt_generator_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_sketch_prompt_generator_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_sketch_prompt_generator_faq_a3:
		'Constructor de plantillas de Prompt covers generic Role/Task/Constraints/Output templates. This page focuses on sketch prompt generator fields with a dedicated sample and rules for this scenario.',
	tool_sketch_prompt_generator_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_sketch_prompt_generator_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_sketch_prompt_generator_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_sketch_prompt_generator_faq_q1:
		'Is my prompt uploaded?',
	tool_sketch_prompt_generator_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_sketch_prompt_generator_faq_q3:
		'How is this different from Constructor de plantillas de Prompt?',
	tool_sketch_prompt_generator_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_sketch_prompt_generator_faq_q5:
		'Can I get JSON output?',
	tool_sketch_prompt_generator_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_sketch_prompt_generator_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_sketch_prompt_generator_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_sketch_prompt_generator_ai_expand:
		'Expandir con IA',
	tool_sketch_prompt_generator_ai_polish:
		'Pulir con IA',
	tool_sketch_prompt_generator_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_sketch_prompt_generator_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_sketch_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_sketch_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_sketch_prompt_generator_ai_working:
		'Cloudflare AI trabajando…',
	tool_sketch_prompt_generator_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_sketch_prompt_generator_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_sketch_prompt_generator_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_sketch_prompt_generator_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_sketch_prompt_generator_fmt_json:
		'JSON',
	tool_sketch_prompt_generator_fmt_label:
		'Formato de salida',
	tool_sketch_prompt_generator_fmt_md:
		'Markdown',
	tool_sketch_prompt_generator_medium_label:
		'Medium',
	tool_sketch_prompt_generator_medium_ph:
		'Sample medium…',
	tool_sketch_prompt_generator_stroke_label:
		'Stroke',
	tool_sketch_prompt_generator_stroke_ph:
		'Sample stroke…',
	tool_sketch_prompt_generator_composition_label:
		'Composition',
	tool_sketch_prompt_generator_composition_ph:
		'Sample composition…',
	tool_sketch_prompt_generator_artist_ref_label:
		'Artist / Ref',
	tool_sketch_prompt_generator_artist_ref_ph:
		'Sample artist ref…',
	tool_sketch_prompt_generator_how_body:
		'Rellena campos de Generador de prompts de boceto, crea el prompt localmente, opcionalmente Expand/Polish con Turnstile, y pégalo en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_sketch_prompt_generator_how_item_1:
		'Al abrir, el ejemplo predeterminado ya se ejecutó (Cargar ejemplo).',
	tool_sketch_prompt_generator_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_sketch_prompt_generator_how_item_3:
		'Opcional: completa Turnstile y Expand/Polish con Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4:
		'Copia o descarga y pega en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_sketch_prompt_generator_how_title:
		'Cómo funciona',
	tool_sketch_prompt_generator_load_sample:
		'Cargar ejemplo',
	tool_sketch_prompt_generator_platforms_lead:
		'Para ChatGPT, Gemini, Claude y DeepSeek — copia el prompt terminado en cualquier chat.',
	tool_sketch_prompt_generator_result_label:
		'Salida del prompt',
	tool_sketch_prompt_generator_rules_body:
		'Generador de prompts de boceto: ensamblaje local por defecto; IA opcional con límites y Turnstile.',
	tool_sketch_prompt_generator_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_sketch_prompt_generator_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_sketch_prompt_generator_rules_item_3:
		'La IA opcional no reemplaza el modo local — revisa antes de copiar.',
	tool_sketch_prompt_generator_rules_item_4:
		'This tool assembles text only; it does not run sketch prompt generator engines or call chat APIs locally.',
	tool_sketch_prompt_generator_rules_title:
		'Reglas que debes conocer',
	tool_sketch_prompt_generator_sec_constraints:
		'Constraints',
	tool_sketch_prompt_generator_sec_output:
		'Output format',
	tool_sketch_prompt_generator_sec_role:
		'Role',
	tool_sketch_prompt_generator_sec_task:
		'Task',
	tool_sketch_prompt_generator_status_copied:
		'Copiado al portapapeles.',
	tool_sketch_prompt_generator_status_done:
		'Prompt listo.',
	tool_sketch_prompt_generator_status_working:
		'Creando prompt…',
	tool_sketch_prompt_generator_title:
		'Generador de prompts de boceto — Local + IA opcional',
	tool_sketch_prompt_generator_usecase_1:
		'Brief listo para pegar de Generador de prompts de boceto en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_sketch_prompt_generator_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_sketch_prompt_generator_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_sketch_prompt_generator_usecase_4:
		'Borradores sensibles en local — IA solo tras aceptar el modal.',
	tool_sketch_prompt_generator_usecases_title:
		'Buenos casos de uso',
};

export default es;
