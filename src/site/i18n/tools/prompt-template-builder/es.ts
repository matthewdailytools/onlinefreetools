/**
 * i18n tool shard (prompt-template-builder / es).
 * Master H1: constructor de plantillas de Prompt; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Convierte un borrador de prompt en una plantilla reutilizable Role / Task / Constraints / Output en esta página. Pega texto libre o rellena los campos, luego copia Markdown o JSON en ChatGPT, Gemini, Claude o DeepSeek. No se llama a ninguna API de modelo. El texto permanece en tu dispositivo y no se sube al servidor.',
	tool_prompt_template_builder_build: 'Crear plantilla',
	tool_prompt_template_builder_clear: 'Limpiar',
	tool_prompt_template_builder_constraints_label: 'Restricciones',
	tool_prompt_template_builder_constraints_ph: 'Límites de tono, alcance, qué evitar…',
	tool_prompt_template_builder_copy: 'Copiar',
	tool_prompt_template_builder_desc:
		'Constructor de plantillas de Prompt para ChatGPT, Gemini, Claude y DeepSeek — Markdown/JSON; permanece en el dispositivo.',
	tool_prompt_template_builder_description:
		'Constructor de plantillas de Prompt para ChatGPT, Gemini, Claude y DeepSeek: une Role, Task, Constraints y Output en una plantilla reutilizable. Los chips de escena cubren revisión de código, largometraje, drama corto, Android e iOS. Ejemplo: el preset Agent de revisión de código se ejecuta al abrir. Markdown por defecto; JSON emite {role,task,constraints,output}. El análisis ocurre en esta pestaña — no es un LLM. El texto permanece en tu dispositivo y no se sube al servidor.',
	tool_prompt_template_builder_download: 'Descargar',
	tool_prompt_template_builder_empty: 'Añade texto libre o al menos un campo antes de crear.',
	tool_prompt_template_builder_example:
		'Cargar ejemplo rellena el preset Agent de revisión de código, genera Markdown con cuatro secciones ## y habilita Copiar y Descargar. Prueba los chips Película, Drama corto, Android o iOS para otros valores predeterminados.',
	tool_prompt_template_builder_example_title: 'Ejemplo',
	tool_prompt_template_builder_faq_a1:
		'No. Las plantillas se crean en esta pestaña del navegador. Nada se sube a OpenAI, Google, Anthropic, DeepSeek ni a nuestros servidores.',
	tool_prompt_template_builder_faq_a2:
		'No. Esta página solo formatea tu texto en bloques. No llama a ChatGPT, Gemini, Claude, DeepSeek ni a ninguna otra API de modelo.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown convierte exportaciones de chat en archivos legibles. Aquí estructuras un system prompt reutilizable — úsalos juntos cuando archives chats y luego refinés la plantilla.',
	tool_prompt_template_builder_faq_a4:
		'Sí. El chip JSON emite {role,task,constraints,output} para configs o pruebas. Combínalo con el validador JSON Schema si necesitas comprobar esquemas.',
	tool_prompt_template_builder_faq_a5:
		'Las líneas que empiezan por Role:, Task:, Constraints: u Output: en el cuadro libre se separan en secciones. Los campos explícitos tienen prioridad.',
	tool_prompt_template_builder_faq_a6:
		'Sí. Copia la plantilla creada en ChatGPT, Gemini, Claude o DeepSeek — la misma estructura de cuatro campos funciona en cada interfaz de chat. No mantenemos URLs separadas por plataforma porque el trabajo es formatear texto, no llamar APIs.',
	tool_prompt_template_builder_faq_q1: '¿Se sube mi prompt?',
	tool_prompt_template_builder_faq_q2: '¿Llama a un LLM?',
	tool_prompt_template_builder_faq_q3: '¿En qué se diferencia de exportar ChatGPT a Markdown?',
	tool_prompt_template_builder_faq_q4: '¿Puedo obtener JSON?',
	tool_prompt_template_builder_faq_q5: '¿Cómo funciona el análisis del texto libre?',
	tool_prompt_template_builder_faq_q6: '¿Puedo usarlo con ChatGPT, Gemini, Claude o DeepSeek?',
	tool_prompt_template_builder_faq_q7: '¿Diferencia entre modo local y Cloudflare AI opcional?',
	tool_prompt_template_builder_faq_a7:
		'El modo local solo formatea en esta pestaña—nada se sube. Expandir/Pulir opcional envía el texto de ese clic a Cloudflare Workers AI (con límite y Turnstile). Si falla o se agota la cuota, sigue el modo local. No prometemos AI ilimitada.',
	tool_prompt_template_builder_ai_expand: 'Expandir con AI',
	tool_prompt_template_builder_ai_polish: 'Pulir con AI',
	tool_prompt_template_builder_ai_panel_label: 'Cloudflare AI opcional',
	tool_prompt_template_builder_ai_consent_title: '¿Enviar texto a Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No se envía a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores. El ensamblado local sigue funcionando sin AI.',
	tool_prompt_template_builder_ai_consent_ok: 'Continuar',
	tool_prompt_template_builder_ai_consent_cancel: 'Cancelar',
	tool_prompt_template_builder_ai_working: 'Cloudflare AI trabajando…',
	tool_prompt_template_builder_ai_done: 'Sugerencia AI aplicada. Revísala antes de copiar.',
	tool_prompt_template_builder_ai_err_generic: 'AI falló. Tu plantilla local no cambió.',
	tool_prompt_template_builder_ai_err_rate: 'Cuota AI agotada. Usa modo local o prueba mañana (UTC).',
	tool_prompt_template_builder_ai_err_turnstile: 'Completa Turnstile antes de usar AI.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Formato de salida',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt libre (opcional)',
	tool_prompt_template_builder_free_ph: 'Pega un borrador o líneas Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Elige un chip de escena o redacta tu propio texto, rellena Role / Task / Constraints / Output, crea la plantilla y pégala en ChatGPT, Gemini, Claude o DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Elige Revisión de código, Película, Drama corto, Android o iOS — o pega tu borrador en el cuadro libre.',
	tool_prompt_template_builder_how_item_2: 'Pulsa Crear plantilla (Cargar ejemplo ya ejecutó el preset de revisión de código al abrir).',
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
		'Una plantilla reutilizable necesita bloques claros, precedencia de campos y límites honestos — no un segundo producto generador.',
	tool_prompt_template_builder_rules_item_1:
		'Cuatro bloques: Role, Task, Constraints, Output. Los vacíos no aparecen en Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Los campos explícitos ganan sobre las líneas parseadas del texto libre.',
	tool_prompt_template_builder_rules_item_3: 'Salida por defecto: Markdown con ##. JSON es un chip en la misma página.',
	tool_prompt_template_builder_rules_item_4:
		'Los chips de escena presetean campos para cine, drama corto y código móvil — mismo constructor, sin URLs separadas por plataforma.',
	tool_prompt_template_builder_rules_title: 'Reglas que debes esperar',
	tool_prompt_template_builder_scene_android: 'Código Android',
	tool_prompt_template_builder_scene_code: 'Revisión de código',
	tool_prompt_template_builder_scene_ios: 'Código iOS',
	tool_prompt_template_builder_scene_label: 'Preset de escena',
	tool_prompt_template_builder_scene_movie: 'Largometraje',
	tool_prompt_template_builder_scene_short_drama: 'Drama corto',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'Copiado al portapapeles.',
	tool_prompt_template_builder_status_done: 'Plantilla lista.',
	tool_prompt_template_builder_status_working: 'Creando plantilla…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Qué hacer paso a paso…',
	tool_prompt_template_builder_title: 'constructor de plantillas de Prompt',
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
		'Carga Android o iOS para plantillas de agente de código Kotlin/Swift sin abrir cuatro páginas específicas por plataforma.',
	tool_prompt_template_builder_usecases_title: 'Buenos encajes',
};

export default es;
