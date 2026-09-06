/**
 * i18n tool shard (markdown-to-html / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_markdown_article:
    'Misma URL para los dos sentidos, con reglas claras de qué se limpia y qué se pierde. El pegado no viaja a un servidor nuestro; este sitio solo trae librerías.',
  tool_markdown_clear: 'Limpiar',
  tool_markdown_copy: 'Copiar HTML',
  tool_markdown_copy_done: 'Copiado',
  tool_markdown_copy_md: 'Copiar Markdown',
  tool_markdown_description:
    'Pegas Markdown y quieres HTML limpio, o copiaste HTML del CMS y necesitas Markdown. Elige el sentido, todo corre en el navegador: marked o Turndown + DOMPurify. Ejemplo práctico: publicar un borrador o recuperar texto para Git.',
  tool_markdown_dir_label: 'Dirección de conversión',
  tool_markdown_download: 'Descargar HTML',
  tool_markdown_download_md: 'Descargar Markdown',
  tool_markdown_example:
    '`# Título` + `Hola **mundo**` → HTML saneado. `<h1>Título</h1><p>Hola <strong>mundo</strong></p>` → Markdown con negrita.',
  tool_markdown_example_title: 'Ejemplo concreto',
  tool_markdown_export_description:
    'Generar un documento HTML completo desde Markdown con plantilla y metadatos. Pasos: renderizar, inyectar en plantilla, añadir meta y descargar. Ejemplo: exportar un artículo como .html independiente.',
  tool_markdown_export_title: 'Exportación Markdown a HTML',
  tool_markdown_faq_a1: 'Sí, en Markdown → HTML pasa por DOMPurify antes de la vista previa y de copiar/descargar.',
  tool_markdown_faq_a2: 'Casi nunca del todo. Es un borrador legible: se prioriza el texto frente al diseño.',
  tool_markdown_faq_a3: 'No. La conversión es local. Este sitio, si aparece, solo entrega código abierto.',
  tool_markdown_faq_a4: 'No lo prometemos. Compará con un diff si necesitás igualdad exacta.',
  tool_markdown_faq_a5: 'Lo habitual de CommonMark. Opcional: envolver un HTML completo para compartir offline.',
  tool_markdown_faq_q1: '¿El HTML sale filtrado?',
  tool_markdown_faq_q2: '¿Conserva tablas y CSS al pasar a Markdown?',
  tool_markdown_faq_q3: '¿Subís lo que pego?',
  tool_markdown_faq_q4: '¿Puedo ir y volver sin diferencias?',
  tool_markdown_faq_q5: '¿Qué Markdown acepta y qué puedo exportar?',
  tool_markdown_full_doc: 'Generar documento HTML completo',
  tool_markdown_how_body:
    'Una pestaña por sentido. Escribes a la izquierda y ves el resultado a la derecha sin subir el texto. En HTML puedes llevarte un fragmento o un documento mínimo; en Markdown obtienes texto plano.',
  tool_markdown_how_item_1: 'Elige la pestaña Markdown → HTML o HTML → Markdown.',
  tool_markdown_how_item_2: 'Pega la entrada a la izquierda (o pulsa Cargar ejemplo).',
  tool_markdown_how_item_3: 'En Markdown → HTML, opcionalmente envuelve un documento HTML mínimo.',
  tool_markdown_how_item_4: 'Copia o descarga la salida convertida a la derecha.',
  tool_markdown_how_title: 'Pasos rápidos',
  tool_markdown_html_input_label: 'Entrada HTML',
  tool_markdown_html_placeholder: '<h1>Título</h1>\n<p>Hola <strong>mundo</strong></p>',
  tool_markdown_input_label: 'Entrada Markdown',
  tool_markdown_large_warn: 'Pegado muy grande (>200k caracteres). La conversión puede ir lenta: prueba un fragmento más corto.',
  tool_markdown_loss_hint:
    'Poco o ningún Markdown: scripts, etiquetas vacías o marcado no soportado pueden haberse eliminado. Ver Reglas y FAQ.',
  tool_markdown_md_output_label: 'Salida Markdown',
  tool_markdown_need_lib: 'No se pudo cargar una librería de conversión. Revisa la conexión y recarga.',
  tool_markdown_placeholder:
    '# Título\n\nMarkdown básico: **negrita**, listas y bloques de código.\n\n- Ítem 1\n- Ítem 2\n\n```js\nconsole.log(\'Hola Markdown\');\n```',
  tool_markdown_preview_label: 'Vista previa HTML',
  tool_markdown_rules_intro:
    'Lo que cubre la conversión: qué sintaxis de Markdown se admite, cómo se sanea el HTML y cómo se trata tu texto en local.',
  tool_markdown_rules_item_html_md:
    'Hacia Markdown: limpieza primero; Turndown con títulos `#` y código entre vallas, pensado para editar, no para clonar el diseño.',
  tool_markdown_rules_item_loss: 'Hay pérdida: estilos, scripts y tablas enrevesadas suelen aplanarse. Ida y vuelta ≠ original.',
  tool_markdown_rules_item_md_html:
    'Hacia HTML: marked interpreta el Markdown; DOMPurify quita scripts peligrosos antes de mostrar o guardar.',
  tool_markdown_rules_privacy: 'El contenido se queda en tu pestaña. Descargar librerías desde este sitio no envía tu pegado.',
  tool_markdown_rules_title: 'Reglas por sentido',
  tool_markdown_sample_html: '<h1>Título</h1>\n<p>Hola <strong>mundo</strong></p>',
  tool_markdown_sample_md:
    '# Título\n\nMarkdown básico: **negrita**, listas y bloques de código.\n\n- Ítem 1\n- Ítem 2\n\n```js\nconsole.log(\'Hola Markdown\');\n```',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_title: 'Markdown a HTML (y al revés) — vista previa segura',
  tool_markdown_usecase_1: 'Dejar un artículo listo en HTML para el CMS.',
  tool_markdown_usecase_2: 'Sacar Markdown de un correo o del panel del sitio.',
  tool_markdown_usecase_3: 'Limpiar texto enriquecido antes de un prompt.',
  tool_markdown_usecases_title: 'Para qué sirve',
};
export default es;
