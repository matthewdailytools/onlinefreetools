/**
 * i18n tool shard (short-drama-prompt-generator / es).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'Crea prompts listos de Generador de prompts de drama corto aquí. Rellena campos y copia Markdown o JSON a ChatGPT, Gemini, Claude o DeepSeek. Local por defecto; Expand/Polish opcional con Cloudflare Workers AI (Turnstile).',
	tool_short_drama_prompt_generator_build:
		'Crear prompt',
	tool_short_drama_prompt_generator_clear:
		'Limpiar',
	tool_short_drama_prompt_generator_copy:
		'Copiar',
	tool_short_drama_prompt_generator_desc:
		'Generador de prompts de drama corto — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_short_drama_prompt_generator_description:
		'Proceso y ejemplo: Generador de prompts de drama corto — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_short_drama_prompt_generator_download:
		'Descargar',
	tool_short_drama_prompt_generator_empty:
		'Rellena al menos un campo antes de crear.',
	tool_short_drama_prompt_generator_example:
		'Cargar ejemplo rellena el preset, crea Markdown y habilita Copiar. IA opcional envía solo ese clic tras Turnstile.',
	tool_short_drama_prompt_generator_example_title:
		'Ejemplo',
	tool_short_drama_prompt_generator_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_short_drama_prompt_generator_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_short_drama_prompt_generator_faq_a3:
		'Constructor de plantillas de Prompt covers generic Role/Task/Constraints/Output templates. This page focuses on short drama prompt generator fields with a dedicated sample and rules for this scenario.',
	tool_short_drama_prompt_generator_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_short_drama_prompt_generator_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_short_drama_prompt_generator_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_short_drama_prompt_generator_faq_q1:
		'Is my prompt uploaded?',
	tool_short_drama_prompt_generator_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_short_drama_prompt_generator_faq_q3:
		'How is this different from Constructor de plantillas de Prompt?',
	tool_short_drama_prompt_generator_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_short_drama_prompt_generator_faq_q5:
		'Can I get JSON output?',
	tool_short_drama_prompt_generator_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_short_drama_prompt_generator_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_short_drama_prompt_generator_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_short_drama_prompt_generator_ai_expand:
		'Expandir con IA',
	tool_short_drama_prompt_generator_ai_polish:
		'Pulir con IA',
	tool_short_drama_prompt_generator_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_short_drama_prompt_generator_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI trabajando…',
	tool_short_drama_prompt_generator_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'Formato de salida',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'Episodes',
	tool_short_drama_prompt_generator_episodes_ph:
		'Sample episodes…',
	tool_short_drama_prompt_generator_hook_label:
		'Gancho',
	tool_short_drama_prompt_generator_hook_ph:
		'Sample hook…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'Cliffhanger',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'Sample cliffhanger…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'Vertical / Format',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'Sample vertical format…',
	tool_short_drama_prompt_generator_genre_label:
		'Género',
	tool_short_drama_prompt_generator_genre_ph:
		'Sample genre…',
	tool_short_drama_prompt_generator_how_body:
		'Rellena campos de Generador de prompts de drama corto, crea el prompt localmente, opcionalmente Expand/Polish con Turnstile, y pégalo en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_short_drama_prompt_generator_how_item_1:
		'Al abrir, el ejemplo predeterminado ya se ejecutó (Cargar ejemplo).',
	tool_short_drama_prompt_generator_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_short_drama_prompt_generator_how_item_3:
		'Opcional: completa Turnstile y Expand/Polish con Cloudflare Workers AI.',
	tool_short_drama_prompt_generator_how_item_4:
		'Copia o descarga y pega en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_short_drama_prompt_generator_how_title:
		'Cómo funciona',
	tool_short_drama_prompt_generator_load_sample:
		'Cargar ejemplo',
	tool_short_drama_prompt_generator_platforms_lead:
		'Para ChatGPT, Gemini, Claude y DeepSeek — copia el prompt terminado en cualquier chat.',
	tool_short_drama_prompt_generator_result_label:
		'Salida del prompt',
	tool_short_drama_prompt_generator_rules_body:
		'Generador de prompts de drama corto: ensamblaje local por defecto; IA opcional con límites y Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_short_drama_prompt_generator_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_short_drama_prompt_generator_rules_item_3:
		'La IA opcional no reemplaza el modo local — revisa antes de copiar.',
	tool_short_drama_prompt_generator_rules_item_4:
		'This tool assembles text only; it does not run short drama prompt generator engines or call chat APIs locally.',
	tool_short_drama_prompt_generator_rules_title:
		'Reglas que debes conocer',
	tool_short_drama_prompt_generator_sec_constraints:
		'Constraints',
	tool_short_drama_prompt_generator_sec_output:
		'Output format',
	tool_short_drama_prompt_generator_sec_role:
		'Role',
	tool_short_drama_prompt_generator_sec_task:
		'Task',
	tool_short_drama_prompt_generator_status_copied:
		'Copiado al portapapeles.',
	tool_short_drama_prompt_generator_status_done:
		'Prompt listo.',
	tool_short_drama_prompt_generator_status_working:
		'Creando prompt…',
	tool_short_drama_prompt_generator_title:
		'Generador de prompts de drama corto — Local + IA opcional',
	tool_short_drama_prompt_generator_usecase_1:
		'Brief listo para pegar de Generador de prompts de drama corto en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_short_drama_prompt_generator_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_short_drama_prompt_generator_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_short_drama_prompt_generator_usecase_4:
		'Borradores sensibles en local — IA solo tras aceptar el modal.',
	tool_short_drama_prompt_generator_usecases_title:
		'Buenos casos de uso',
};

export default es;
