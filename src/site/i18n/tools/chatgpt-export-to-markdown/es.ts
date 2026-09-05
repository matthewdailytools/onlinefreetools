/**
 * Fragmento i18n (chatgpt-export-to-markdown / es).
 * H1 local: exportar ChatGPT a Markdown.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'Convierte una exportación de ChatGPT a Markdown en esta página. Pega o suelta el JSON, obtén turnos legibles y, si quieres, cambia a JSON o CSV. Las exportaciones de Claude usan el mismo lienzo. Se queda en el dispositivo; no se sube a un servidor.',
	tool_chatgpt_export_to_markdown_choose_file: 'Elegir archivo',
	tool_chatgpt_export_to_markdown_clear: 'Limpiar',
	tool_chatgpt_export_to_markdown_convert: 'Convertir',
	tool_chatgpt_export_to_markdown_copy: 'Copiar',
	tool_chatgpt_export_to_markdown_desc:
		'Exportar ChatGPT a Markdown (chips JSON/CSV); se queda en el dispositivo, no se sube al servidor.',
	tool_chatgpt_export_to_markdown_description:
		'Exportar ChatGPT a Markdown: suelta o pega un JSON de exportación, mapea turnos usuario/asistente y descarga Markdown. Ejemplo: la conversación de muestra ya es Markdown al abrir. JSON y CSV son chips de salida. Los chat_messages de Claude se detectan en la misma página. Los archivos se quedan en el dispositivo y no se suben a un servidor. No es un contador de tokens ni una sincronización en la nube.',
	tool_chatgpt_export_to_markdown_download: 'Descargar',
	tool_chatgpt_export_to_markdown_drop_hint: 'Suelta un JSON de conversations o pégalo abajo. El análisis queda en esta pestaña.',
	tool_chatgpt_export_to_markdown_empty: 'Pega o elige un archivo de exportación primero.',
	tool_chatgpt_export_to_markdown_err_none: 'No hay turnos. Comprueba que el JSON tenga mapping, messages o chat_messages.',
	tool_chatgpt_export_to_markdown_err_parse: 'No se pudo leer ese JSON. Pega una exportación válida de ChatGPT o Claude.',
	tool_chatgpt_export_to_markdown_example:
		'Cargar ejemplo inserta un JSON mapping de dos turnos, lo convierte a Markdown con encabezados User y Assistant, y activa Copiar y Descargar.',
	tool_chatgpt_export_to_markdown_example_title: 'Ejemplo',
	tool_chatgpt_export_to_markdown_faq_a1: 'No. La exportación se lee en esta pestaña. Nada va a OpenAI, Anthropic ni a nuestros servidores.',
	tool_chatgpt_export_to_markdown_faq_a2: 'La vía principal es conversations de ChatGPT con árbol mapping. También valen arrays role/content y chat_messages de Claude.',
	tool_chatgpt_export_to_markdown_faq_a3: 'Sí. El mismo conversor interpreta los arrays chat_messages de Claude (sender + text), así que con un solo pegado resuelves exportaciones de ChatGPT y de Claude.',
	tool_chatgpt_export_to_markdown_faq_a4: 'Se omiten nodos system vacíos y shells de tool sin texto. Adjuntos e imágenes no se reconstruyen como archivos.',
	tool_chatgpt_export_to_markdown_faq_a5: 'Contar tokens es otro trabajo y no forma parte de este conversor. Usa un contador de tokens dedicado cuando lo necesites.',
	tool_chatgpt_export_to_markdown_faq_q1: '¿Se sube mi chat?',
	tool_chatgpt_export_to_markdown_faq_q2: '¿Qué formas de exportación funcionan?',
	tool_chatgpt_export_to_markdown_faq_q3: '¿Funciona la exportación de Claude?',
	tool_chatgpt_export_to_markdown_faq_q4: '¿Qué campos se pierden?',
	tool_chatgpt_export_to_markdown_faq_q5: '¿Es un contador de tokens?',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: 'Formato de salida',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body:
		'Exporta el chat, pega o suelta el JSON, convierte a Markdown y copia o descarga. JSON y CSV son chips del mismo trabajo.',
	tool_chatgpt_export_to_markdown_how_item_1: 'Consigue una exportación de ChatGPT (o JSON de Claude) — el trabajo es exportar ChatGPT a Markdown.',
	tool_chatgpt_export_to_markdown_how_item_2: 'Suelta el archivo o pega el JSON en el cuadro.',
	tool_chatgpt_export_to_markdown_how_item_3: 'Deja Markdown salvo que necesites el chip JSON o CSV.',
	tool_chatgpt_export_to_markdown_how_item_4: 'Copia o descarga. El ejemplo ya corrió al abrir.',
	tool_chatgpt_export_to_markdown_how_title: 'Cómo funciona',
	tool_chatgpt_export_to_markdown_input_label: 'JSON de exportación',
	tool_chatgpt_export_to_markdown_input_ph: 'Pega aquí el JSON de conversations…',
	tool_chatgpt_export_to_markdown_load_sample: 'Cargar ejemplo',
	tool_chatgpt_export_to_markdown_output_label: 'Resultado',
	tool_chatgpt_export_to_markdown_role_assistant: 'Asistente',
	tool_chatgpt_export_to_markdown_role_system: 'Sistema',
	tool_chatgpt_export_to_markdown_role_tool: 'Herramienta',
	tool_chatgpt_export_to_markdown_role_user: 'Usuario',
	tool_chatgpt_export_to_markdown_rules_body:
		'La conversión de exportaciones necesita mapa de campos, Markdown por defecto y una privacidad clara sobre el procesamiento local.',
	tool_chatgpt_export_to_markdown_rules_item_1: 'La salida por defecto es Markdown con secciones ## Usuario / ## Asistente y un # título opcional.',
	tool_chatgpt_export_to_markdown_rules_item_2: 'Árboles mapping de ChatGPT, arrays planos y chat_messages de Claude se analizan en una página.',
	tool_chatgpt_export_to_markdown_rules_item_3: 'Los chips JSON y CSV reemiten los mismos turnos para pipelines u hojas de cálculo.',
	tool_chatgpt_export_to_markdown_rules_item_4: 'Los formatos cambian. Si falla el análisis, pega el JSON crudo y revisa el FAQ.',
	tool_chatgpt_export_to_markdown_rules_title: 'Reglas que debes esperar',
	tool_chatgpt_export_to_markdown_status_copied: 'Copiado al portapapeles.',
	tool_chatgpt_export_to_markdown_status_done: 'Listo — {n} turnos ({source}).',
	tool_chatgpt_export_to_markdown_status_working: 'Analizando exportación…',
	tool_chatgpt_export_to_markdown_title: 'exportar ChatGPT a Markdown',
	tool_chatgpt_export_to_markdown_usecase_1: 'Archiva la exportación de ChatGPT de hoy como Markdown antes de borrar el hilo.',
	tool_chatgpt_export_to_markdown_usecase_2: 'Pasa a CSV cuando necesites columnas role/content en una hoja.',
	tool_chatgpt_export_to_markdown_usecase_3: 'Suelta un JSON chat_messages de Claude aquí; el mismo conversor mapea esos turnos a Markdown.',
	tool_chatgpt_export_to_markdown_usecases_title: 'Buenos encajes',
};

export default es;
