/**
 * i18n tool shard (prompt-template-builder / es).
 * H1 local: constructor de plantillas de Prompt.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Convierte un borrador de prompt en una plantilla reutilizable Role / Task / Constraints / Output en esta página. Pega texto libre o rellena los campos y copia Markdown o JSON. No se llama a ninguna API de modelo. El texto permanece en tu dispositivo y no se sube al servidor.',
	tool_prompt_template_builder_build: 'Crear plantilla',
	tool_prompt_template_builder_clear: 'Limpiar',
	tool_prompt_template_builder_constraints_label: 'Restricciones',
	tool_prompt_template_builder_constraints_ph: 'Límites de tono, alcance, qué evitar…',
	tool_prompt_template_builder_copy: 'Copiar',
	tool_prompt_template_builder_desc:
		'Plantilla Prompt estructurada (Markdown/JSON) — en tu dispositivo, sin subir al servidor.',
	tool_prompt_template_builder_description:
		'Constructor de plantillas de Prompt: une texto libre con Role, Task, Constraints y Output en una plantilla reutilizable. Ejemplo: la plantilla de revisión de código aparece al cargar. Markdown por defecto; JSON devuelve {role,task,constraints,output}. Todo en esta pestaña — no es un LLM ni una biblioteca en la nube. El texto no sale del dispositivo y no se sube al servidor.',
	tool_prompt_template_builder_download: 'Descargar',
	tool_prompt_template_builder_empty: 'Añade texto libre o al menos un campo antes de crear.',
	tool_prompt_template_builder_example:
		'Cargar ejemplo rellena Role, Task, Constraints y Output para un agente de revisión de código, genera Markdown con cuatro secciones ## y habilita Copiar y Descargar.',
	tool_prompt_template_builder_example_title: 'Ejemplo',
	tool_prompt_template_builder_faq_a1:
		'No. La plantilla se crea en esta pestaña del navegador. No se sube a OpenAI, Anthropic ni a nuestros servidores.',
	tool_prompt_template_builder_faq_a2:
		'No. Esta página solo formatea tu texto en bloques. No llama a ningún modelo ni inventa texto nuevo.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown convierte exportaciones de chat en archivos legibles. Aquí estructuras un system prompt reutilizable — úsalos juntos si archivas chats y luego refinás la plantilla.',
	tool_prompt_template_builder_faq_a4:
		'Sí. El chip JSON emite {role,task,constraints,output}. Combínalo con el validador JSON Schema si necesitas comprobar esquemas.',
	tool_prompt_template_builder_faq_a5:
		'Las líneas que empiezan por Role:, Task:, Constraints: u Output: en el cuadro libre se separan en secciones. Los campos explícitos tienen prioridad.',
	tool_prompt_template_builder_faq_q1: '¿Se sube mi prompt?',
	tool_prompt_template_builder_faq_q2: '¿Llama a un LLM?',
	tool_prompt_template_builder_faq_q3: '¿En qué se diferencia de exportar ChatGPT a Markdown?',
	tool_prompt_template_builder_faq_q4: '¿Puedo obtener JSON?',
	tool_prompt_template_builder_faq_q5: '¿Cómo funciona el análisis del texto libre?',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Formato de salida',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt libre (opcional)',
	tool_prompt_template_builder_free_ph: 'Pega un borrador o líneas Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Escribe un borrador, opcionalmente divide Role / Task / Constraints / Output, crea la plantilla y copia o descarga. Markdown y JSON son chips del mismo trabajo.',
	tool_prompt_template_builder_how_item_1:
		'Pega un borrador o rellena Role, Task, Constraints y Output — el objetivo es una plantilla prompt estructurada.',
	tool_prompt_template_builder_how_item_2: 'Pulsa Crear plantilla (el ejemplo ya corrió al abrir la página).',
	tool_prompt_template_builder_how_item_3: 'Cambia a JSON si necesitas {role,task,constraints,output} para código o config.',
	tool_prompt_template_builder_how_item_4: 'Copia o descarga. Edita y vuelve a crear cuando quieras.',
	tool_prompt_template_builder_how_title: 'Cómo funciona',
	tool_prompt_template_builder_load_sample: 'Cargar ejemplo',
	tool_prompt_template_builder_output_fmt_label: 'Formato de salida',
	tool_prompt_template_builder_output_fmt_ph: 'Secciones Markdown, forma JSON, lista…',
	tool_prompt_template_builder_result_label: 'Plantilla',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Quién debe actuar el modelo…',
	tool_prompt_template_builder_rules_body:
		'Una plantilla reutilizable necesita bloques claros y límites honestos — no un segundo generador.',
	tool_prompt_template_builder_rules_item_1:
		'Cuatro bloques: Role, Task, Constraints, Output. Los vacíos no aparecen en Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Los campos explícitos ganan sobre las líneas parseadas del texto libre.',
	tool_prompt_template_builder_rules_item_3: 'Salida por defecto: Markdown con ##. JSON es un chip en la misma página.',
	tool_prompt_template_builder_rules_item_4: 'Solo formatea texto. No estima tokens ni valida JSON contra un esquema.',
	tool_prompt_template_builder_rules_title: 'Reglas que debes esperar',
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
		'Publica un system prompt de revisión de código que el equipo pueda pegar en cualquier chat.',
	tool_prompt_template_builder_usecase_2:
		'Convierte notas de reunión en bloques Role/Task/Constraints antes de conectar la API.',
	tool_prompt_template_builder_usecase_3:
		'Exporta JSON y abre el validador JSON Schema para comprobar archivos de configuración.',
	tool_prompt_template_builder_usecases_title: 'Buenos encajes',
};

export default es;
