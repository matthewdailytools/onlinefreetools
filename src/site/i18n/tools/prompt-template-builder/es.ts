/**
 * i18n tool shard (prompt-template-builder / es).
 * Master H1: constructor de plantillas de Prompt; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Convierte un borrador de prompt en una plantilla reutilizable Role / Task / Constraints / Output en esta página. Pega texto libre o rellena los campos, luego copia Markdown o JSON en ChatGPT, Gemini, Claude o DeepSeek. Por defecto la plantilla se monta en tu navegador y no llamamos a ninguna API de chat por ti; solo si pulsas Expandir o Pulir con IA se envía el borrador actual a Cloudflare Workers AI (con Turnstile y con cuota limitada).',
	tool_prompt_template_builder_build: 'Crear plantilla',
	tool_prompt_template_builder_clear: 'Limpiar',
	tool_prompt_template_builder_constraints_label: 'Restricciones',
	tool_prompt_template_builder_constraints_ph: 'Límites de tono, alcance, qué evitar…',
	tool_prompt_template_builder_copy: 'Copiar',
	tool_prompt_template_builder_desc:
		'Constructor de plantillas de prompt — montaje local en el navegador, con Expandir/Pulir opcional de Cloudflare AI (requiere Turnstile).',
	tool_prompt_template_builder_description:
		'Constructor de plantillas de prompt: ordena tu borrador en cuatro pasos —Role, Task, Constraints, Output— y cópialo en ChatGPT, Gemini, Claude o DeepSeek. Al abrir ya corre un ejemplo de revisión de código; exporta Markdown o cambia a JSON para pipelines. El montaje es local en el navegador y la IA de Cloudflare (Expandir/Pulir) es opcional y con cuota.',
	tool_prompt_template_builder_download: 'Descargar',
	tool_prompt_template_builder_empty: 'Añade texto libre o al menos un campo antes de crear.',
	tool_prompt_template_builder_example:
		'Entrada (Cargar ejemplo, chip Código): Role = revisor senior (seguridad y legibilidad); Task = revisar el diff del PR que pegue; Constraints = máx. 12 viñetas. Salida (Markdown): ## Rol / ## Tarea / ## Restricciones / ## Formato de salida — cuatro secciones listas para ChatGPT o Claude. Coincide con la primera carga.',
	tool_prompt_template_builder_example_title: 'Ejemplo',
	tool_prompt_template_builder_faq_a1:
		'Por defecto la plantilla se monta en esta pestaña y no sale nada. Solo Expandir/Pulir envía el texto de ese clic a Cloudflare Workers AI; desde nuestros servidores no va a OpenAI, Google, Anthropic ni DeepSeek.',
	tool_prompt_template_builder_faq_a2:
		'El modo local solo da formato a tus campos en esta pestaña. Expandir/Pulir usa Cloudflare Workers AI tras pasar Turnstile: no abrimos ChatGPT, Gemini, Claude ni DeepSeek por ti.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown convierte exportaciones de chat en archivos legibles. Aquí estructuras un system prompt reutilizable — úsalos juntos cuando archives chats y luego refinés la plantilla.',
	tool_prompt_template_builder_faq_a4:
		'Sí. Completa el widget Turnstile del panel de IA antes de Expandir o Pulir; sin token válido el botón devuelve error y el modo local sigue funcionando.',
	tool_prompt_template_builder_faq_a5:
		'Las líneas que empiezan por Role:, Task:, Constraints: u Output: en el cuadro libre se separan en secciones. Los campos explícitos tienen prioridad.',
	tool_prompt_template_builder_faq_a6:
		'Sí. Copia la plantilla creada en ChatGPT, Gemini, Claude o DeepSeek: la misma estructura de cuatro campos funciona en cualquiera de esos chats. Esta página solo prepara el texto; no inicia sesión ni llama a la API de ninguno.',
	tool_prompt_template_builder_faq_q1: '¿Se sube mi prompt?',
	tool_prompt_template_builder_faq_q2: '¿Llama a un LLM?',
	tool_prompt_template_builder_faq_q3: '¿En qué se diferencia de exportar ChatGPT a Markdown?',
	tool_prompt_template_builder_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_prompt_template_builder_faq_q5: '¿Cómo funciona el análisis del texto libre?',
	tool_prompt_template_builder_faq_q6: '¿Puedo usarlo con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_prompt_template_builder_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_prompt_template_builder_faq_a7:
		'Local: todo se arma en esta pestaña, sin envío. Expandir/Pulir manda el borrador a Cloudflare Workers AI (Turnstile y cuota diaria) y su respuesta reemplaza el bloque de resultado. Si falla o se agota la cuota, sigue con el modo local.',
	tool_prompt_template_builder_ai_expand:
		'Expandir con IA',
	tool_prompt_template_builder_ai_polish:
		'Pulir con IA',
	tool_prompt_template_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Este paso opcional envía tu borrador actual a Cloudflare Workers AI. Desde nuestros servidores no va a OpenAI, Google, Anthropic ni DeepSeek. Sin IA el montaje local sigue funcionando igual.',
	tool_prompt_template_builder_ai_consent_ok:
		'Continuar',
	tool_prompt_template_builder_ai_consent_cancel:
		'Cancelar',
	tool_prompt_template_builder_ai_working:
		'Cloudflare AI trabajando…',
	tool_prompt_template_builder_ai_done:
		'El texto de la IA se escribió completo en el resultado. Revísalo antes de copiar.',
	tool_prompt_template_builder_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_prompt_template_builder_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Formato de salida',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt libre (opcional)',
	tool_prompt_template_builder_free_ph: 'Pega un borrador o líneas Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Elige un chip de escena o redacta tu propio texto, rellena Role / Task / Constraints / Output, crea la plantilla y pégala en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Elige Revisión de código, Película, Drama corto, Android o iOS — o pega tu borrador en el cuadro libre.',
	tool_prompt_template_builder_how_item_2: 'Pulsa Crear plantilla (pulsa Cargar ejemplo para el preset de revisión de código).',
	tool_prompt_template_builder_how_item_3: 'Cambia a JSON si necesitas {role,task,constraints,output} para código o config.',
	tool_prompt_template_builder_how_item_4: 'Copia o descarga, luego pega en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_prompt_template_builder_how_title: 'Cómo funciona',
	tool_prompt_template_builder_load_sample: 'Cargar ejemplo',
	tool_prompt_template_builder_output_fmt_label: 'Formato de salida',
	tool_prompt_template_builder_output_fmt_ph: 'Secciones Markdown, forma JSON, lista…',
	tool_prompt_template_builder_platforms_lead:
		'Pensado para ChatGPT, Gemini, Claude y DeepSeek — copia la plantilla terminada en cualquiera de esas interfaces de chat.',
	tool_prompt_template_builder_result_label: 'Plantilla',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Quién debe actuar el modelo…',
	tool_prompt_template_builder_rules_body:
		'Una plantilla reutilizable necesita bloques claros, un orden de prioridad entre campos y decir sin rodeos qué no hace esta página.',
	tool_prompt_template_builder_rules_item_1:
		'Cuatro bloques: Role, Task, Constraints, Output. Los vacíos no aparecen en Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Los campos explícitos ganan sobre las líneas parseadas del texto libre.',
	tool_prompt_template_builder_rules_item_3: 'Salida por defecto: Markdown con ##. JSON es un chip en la misma página.',
	tool_prompt_template_builder_rules_item_4:
		'Los chips de escena rellenan campos típicos de cine, drama corto y código móvil; después puedes seguir editándolos a mano.',
	tool_prompt_template_builder_rules_title: 'Reglas que debes esperar',
	tool_prompt_template_builder_scene_android: 'Código Android',
	tool_prompt_template_builder_scene_code: 'Revisión de código',
	tool_prompt_template_builder_scene_ios: 'Código iOS',
	tool_prompt_template_builder_scene_label: 'Preset de escena',
	tool_prompt_template_builder_scene_movie: 'Largometraje',
	tool_prompt_template_builder_scene_short_drama: 'Drama corto',
	tool_prompt_template_builder_sec_constraints: 'Restricciones',
	tool_prompt_template_builder_sec_output: 'Formato de salida',
	tool_prompt_template_builder_sec_role: 'Rol',
	tool_prompt_template_builder_sec_task: 'Tarea',
	tool_prompt_template_builder_status_copied: 'Copiado al portapapeles.',
	tool_prompt_template_builder_status_done: 'Plantilla lista.',
	tool_prompt_template_builder_status_working: 'Creando plantilla…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Qué hacer paso a paso…',
	tool_prompt_template_builder_title:
		'Constructor de plantillas de Prompt — Local + IA opcional',
	tool_prompt_template_builder_usecase_1:
		'Publica un system prompt de Agent de revisión de código que tu equipo pueda pegar en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_prompt_template_builder_usecase_2:
		'Convierte notas de reunión en bloques Role/Task/Constraints antes de conectar la API de cualquier proveedor de chat.',
	tool_prompt_template_builder_usecase_3:
		'Exporta JSON y abre el validador JSON Schema para comprobar archivos de configuración downstream.',
	tool_prompt_template_builder_usecase_4:
		'Carga el chip Película para una hoja de beats en tres actos que pegues en tu interfaz de chat preferida.',
	tool_prompt_template_builder_usecase_5:
		'Carga Drama corto para ganchos y cliffhangers de serie vertical — episodios móviles estilo binge.',
	tool_prompt_template_builder_usecase_6:
		'Carga Android o iOS para plantillas de agente de código con convenciones Kotlin/Swift, y añade encima el estilo de tu equipo.',
	tool_prompt_template_builder_usecases_title: 'Buenos encajes',
};

export default es;
