/**
 * i18n tool shard (film-prompt-builder / es).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_film_prompt_builder_article:
		'Crea prompts listos de Constructor de prompts de cine aquí. Rellena campos y copia Markdown o JSON a ChatGPT, Gemini, Claude o DeepSeek. Local por defecto; Expand/Polish opcional con Cloudflare Workers AI (Turnstile).',
	tool_film_prompt_builder_build:
		'Crear prompt',
	tool_film_prompt_builder_clear:
		'Limpiar',
	tool_film_prompt_builder_copy:
		'Copiar',
	tool_film_prompt_builder_desc:
		'Constructor de prompts de cine — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_film_prompt_builder_description:
		'Proceso y ejemplo: Constructor de prompts de cine — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_film_prompt_builder_download:
		'Descargar',
	tool_film_prompt_builder_empty:
		'Rellena al menos un campo antes de crear.',
	tool_film_prompt_builder_example:
		'Entrada: Logline = food-trucks rivales comparten cocina 30 días; Act II = festival + conflicto de receta; 6 escenas; Arc = orgullo → teamwork → co-dueños. Salida (Markdown): ## Task con Logline, Act1–3, Scene / List, Character / Arc.',
	tool_film_prompt_builder_example_title:
		'Ejemplo',
	tool_film_prompt_builder_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_film_prompt_builder_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_film_prompt_builder_faq_a3:
		'Constructor de plantillas de Prompt covers generic Role/Task/Constraints/Output templates. This page focuses on film prompt builder fields with a dedicated sample and rules for this scenario.',
	tool_film_prompt_builder_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_film_prompt_builder_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_film_prompt_builder_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_film_prompt_builder_faq_q1:
		'Is my prompt uploaded?',
	tool_film_prompt_builder_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_film_prompt_builder_faq_q3:
		'How is this different from Constructor de plantillas de Prompt?',
	tool_film_prompt_builder_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_film_prompt_builder_faq_q5:
		'Can I get JSON output?',
	tool_film_prompt_builder_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_film_prompt_builder_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_film_prompt_builder_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_film_prompt_builder_ai_expand:
		'Expandir con IA',
	tool_film_prompt_builder_ai_polish:
		'Pulir con IA',
	tool_film_prompt_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_film_prompt_builder_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_film_prompt_builder_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_film_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_film_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_film_prompt_builder_ai_working:
		'Cloudflare AI trabajando…',
	tool_film_prompt_builder_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_film_prompt_builder_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_film_prompt_builder_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_film_prompt_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'Formato de salida',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'Logline',
	tool_film_prompt_builder_logline_ph:
		'Sample logline…',
	tool_film_prompt_builder_act1_label:
		'Act1',
	tool_film_prompt_builder_act1_ph:
		'Sample act1…',
	tool_film_prompt_builder_act2_label:
		'Act2',
	tool_film_prompt_builder_act2_ph:
		'Sample act2…',
	tool_film_prompt_builder_act3_label:
		'Act3',
	tool_film_prompt_builder_act3_ph:
		'Sample act3…',
	tool_film_prompt_builder_scene_list_label:
		'Scene / List',
	tool_film_prompt_builder_scene_list_ph:
		'Sample scene list…',
	tool_film_prompt_builder_character_arc_label:
		'Character / Arc',
	tool_film_prompt_builder_character_arc_ph:
		'Sample character arc…',
	tool_film_prompt_builder_how_body:
		'Rellena campos de Constructor de prompts de cine, crea el prompt localmente, opcionalmente Expand/Polish con Turnstile, y pégalo en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_film_prompt_builder_how_item_1:
		'Al abrir, el ejemplo predeterminado ya se ejecutó (Cargar ejemplo).',
	tool_film_prompt_builder_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_film_prompt_builder_how_item_3:
		'Opcional: completa Turnstile y Expand/Polish con Cloudflare Workers AI.',
	tool_film_prompt_builder_how_item_4:
		'Copia o descarga y pega en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_film_prompt_builder_how_title:
		'Cómo funciona',
	tool_film_prompt_builder_load_sample:
		'Cargar ejemplo',
	tool_film_prompt_builder_platforms_lead:
		'Para ChatGPT, Gemini, Claude y DeepSeek — copia el prompt terminado en cualquier chat.',
	tool_film_prompt_builder_result_label:
		'Salida del prompt',
	tool_film_prompt_builder_rules_body:
		'Constructor de prompts de cine: ensamblaje local por defecto; IA opcional con límites y Turnstile.',
	tool_film_prompt_builder_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_film_prompt_builder_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_film_prompt_builder_rules_item_3:
		'La IA opcional no reemplaza el modo local — revisa antes de copiar.',
	tool_film_prompt_builder_rules_item_4:
		'This tool assembles text only; it does not run film prompt builder engines or call chat APIs locally.',
	tool_film_prompt_builder_rules_title:
		'Reglas que debes conocer',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output format',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'Copiado al portapapeles.',
	tool_film_prompt_builder_status_done:
		'Prompt listo.',
	tool_film_prompt_builder_status_working:
		'Creando prompt…',
	tool_film_prompt_builder_title:
		'Constructor de prompts de cine — Local + IA opcional',
	tool_film_prompt_builder_usecase_1:
		'Brief listo para pegar de Constructor de prompts de cine en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_film_prompt_builder_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_film_prompt_builder_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_film_prompt_builder_usecase_4:
		'Borradores sensibles en local — IA solo tras aceptar el modal.',
	tool_film_prompt_builder_usecases_title:
		'Buenos casos de uso',
};

export default es;
