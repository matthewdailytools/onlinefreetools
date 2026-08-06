import type { SiteLangDict } from './types';
const es: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Inicio',
  nav_devlogs: 'Registros de Desarrollo',
  nav_tools: 'Herramientas',
  footer_text: 'Online Free Tools · Proyecto de aprendizaje · Iterando',
  tool_headers_title: 'Obtener encabezados de respuesta del sitio web',
  tool_headers_description:
    "Obtener los encabezados HTTP de una URL desde el servidor (usar HEAD, fallback a GET). Proceso: enviar HEAD, seguir redirecciones, recopilar encabezados y bloquear hosts privados. Ejemplo: inspeccionar CORS, Cache-Control y HSTS para depurar redirecciones y configuración CDN.",
  tool_headers_article:
    'Qué: Obtenga e inspeccione los encabezados de respuesta HTTP de un sitio web. Útil para depurar CORS, caché, redirecciones y verificar encabezados de seguridad o CDN. Escenarios: depuración de desarrollador, verificaciones de SEO y verificación de configuración del servidor.',
  url_label: 'URL',
  url_placeholder: 'por ejemplo https://ejemplo.com',
  fetch_button: 'Obtener Encabezados',
  result_title: 'Resultado',
  status_label: 'Estado',
  final_url_label: 'URL Final',
  headers_label: 'Encabezados',
  error_prefix: 'Error: ',
  note_title: 'Notas',
  note_1: 'Algunos sitios no admiten HEAD; retrocederemos a GET.',
  note_2: 'Por seguridad, se bloquean las solicitudes a localhost/redes privadas.',
  tool_markdown_title: 'Markdown a HTML (y al revés) — vista previa segura',
  tool_markdown_description:
    'Pegas Markdown y quieres HTML limpio, o copiaste HTML del CMS y necesitas Markdown. Elige el sentido, todo corre en el navegador: marked o Turndown + DOMPurify. Ejemplo práctico: publicar un borrador o recuperar texto para Git.',
  tool_markdown_article:
    'Misma URL para los dos sentidos, con reglas claras de qué se limpia y qué se pierde. El pegado no viaja a un servidor nuestro; el CDN solo trae librerías.',
  tool_markdown_dir_label: 'Dirección de conversión',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_copy: 'Copiar HTML',
  tool_markdown_copy_md: 'Copiar Markdown',
  tool_markdown_copy_done: 'Copiado',
  tool_markdown_download: 'Descargar HTML',
  tool_markdown_download_md: 'Descargar Markdown',
  tool_markdown_clear: 'Limpiar',
  tool_markdown_full_doc: 'Generar documento HTML completo',
  tool_markdown_input_label: 'Entrada Markdown',
  tool_markdown_preview_label: 'Vista previa HTML',
  tool_markdown_html_input_label: 'Entrada HTML',
  tool_markdown_md_output_label: 'Salida Markdown',
  tool_markdown_placeholder:
    "# Título\n\nMarkdown básico: **negrita**, listas y bloques de código.\n\n- Ítem 1\n- Ítem 2\n\n```js\nconsole.log('Hola Markdown');\n```",
  tool_markdown_html_placeholder: '<h1>Título</h1>\n<p>Hola <strong>mundo</strong></p>',
  tool_markdown_sample_md:
    "# Título\n\nMarkdown básico: **negrita**, listas y bloques de código.\n\n- Ítem 1\n- Ítem 2\n\n```js\nconsole.log('Hola Markdown');\n```",
  tool_markdown_sample_html: '<h1>Título</h1>\n<p>Hola <strong>mundo</strong></p>',
  tool_markdown_export_title: 'Exportación Markdown a HTML',
  tool_markdown_export_description:
    'Generar un documento HTML completo desde Markdown con plantilla y metadatos. Pasos: renderizar, inyectar en plantilla, añadir meta y descargar. Ejemplo: exportar un artículo como .html independiente.',
  tool_markdown_large_warn:
    'Pegado muy grande (>200k caracteres). La conversión puede ir lenta: prueba un fragmento más corto.',
  tool_markdown_need_lib: 'No se pudo cargar una librería de conversión. Revisa la conexión y recarga.',
  tool_markdown_loss_hint:
    'Poco o ningún Markdown: scripts, etiquetas vacías o marcado no soportado pueden haberse eliminado. Ver Reglas y FAQ.',
  tool_markdown_how_title: 'Pasos rápidos',
  tool_markdown_how_body:
    'Una pestaña por sentido. Escribes a la izquierda y ves el resultado a la derecha sin subir el texto. En HTML puedes llevarte un fragmento o un documento mínimo; en Markdown obtienes texto plano.',
  tool_markdown_rules_title: 'Reglas por sentido',
  tool_markdown_rules_intro:
    'No abrimos otra página casi igual solo para la palabra “html a markdown”.',
  tool_markdown_rules_item_md_html:
    'Hacia HTML: marked interpreta el Markdown; DOMPurify quita scripts peligrosos antes de mostrar o guardar.',
  tool_markdown_rules_item_html_md:
    'Hacia Markdown: limpieza primero; Turndown con títulos `#` y código entre vallas, pensado para editar, no para clonar el diseño.',
  tool_markdown_rules_item_loss:
    'Hay pérdida: estilos, scripts y tablas enrevesadas suelen aplanarse. Ida y vuelta ≠ original.',
  tool_markdown_rules_privacy:
    'El contenido se queda en tu pestaña. Descargar librerías por CDN no envía tu pegado.',
  tool_markdown_example_title: 'Ejemplo concreto',
  tool_markdown_example:
    '`# Título` + `Hola **mundo**` → HTML saneado. `<h1>Título</h1><p>Hola <strong>mundo</strong></p>` → Markdown con negrita.',
  tool_markdown_usecases_title: 'Para qué sirve',
  tool_markdown_usecase_1:
    'Dejar un artículo listo en HTML para el CMS.',
  tool_markdown_usecase_2:
    'Sacar Markdown de un correo o del panel del sitio.',
  tool_markdown_usecase_3:
    'Limpiar texto enriquecido antes de un prompt.',
  tool_markdown_faq_q1: '¿El HTML sale filtrado?',
  tool_markdown_faq_a1:
    'Sí, en Markdown → HTML pasa por DOMPurify antes de la vista previa y de copiar/descargar.',
  tool_markdown_faq_q2: '¿Conserva tablas y CSS al pasar a Markdown?',
  tool_markdown_faq_a2:
    'Casi nunca del todo. Es un borrador legible: se prioriza el texto frente al diseño.',
  tool_markdown_faq_q3: '¿Subís lo que pego?',
  tool_markdown_faq_a3:
    'No. La conversión es local. El CDN, si aparece, solo entrega código abierto.',
  tool_markdown_faq_q4: '¿Puedo ir y volver sin diferencias?',
  tool_markdown_faq_a4:
    'No lo prometemos. Compará con un diff si necesitás igualdad exacta.',
  tool_markdown_faq_q5: '¿Qué Markdown acepta y qué puedo exportar?',
  tool_markdown_faq_a5:
    'Lo habitual de CommonMark. Opcional: envolver un HTML completo para compartir offline.',
  tool_text_diff_description:
    'Compara dos textos online y ve qué cambió. Proceso: pega el texto original y el revisado, elige comparar por línea, por palabra o por carácter, opcionalmente ignora espacios o unifica saltos Windows (CRLF→LF), y marca añadidos y eliminados en el navegador. Ejemplo: cambia "hola mundo" por "hola amigo" — en modo palabra verás un solo cambio.',
  tool_text_diff_article:
    'Herramienta gratis para comparar dos textos lado a lado. Usa modo línea para configs y código; modo palabra para redacción y prompts; modo carácter para erratas. Todo ocurre en tu navegador: no subimos tu texto.',
  tool_text_diff_example:
    'Ejemplo (modo palabra): A = "Hola mundo", B = "Hola amigo" → un cambio (mundo → amigo). Si solo cambia la línea del medio en un bloque de tres, el modo línea marca esa línea.',
  tool_text_diff_sample_a: 'Hola mundo\nsegunda línea\ntercera línea',
  tool_text_diff_sample_b: 'Hola amigo\nsegunda línea\ntercera línea',
  tool_text_diff_label_a: 'Texto original',
  tool_text_diff_label_b: 'Texto revisado',
  tool_text_diff_placeholder_a: 'Pega el texto original…',
  tool_text_diff_placeholder_b: 'Pega el texto revisado…',
  tool_text_diff_mode_label: 'Comparar por',
  tool_text_diff_mode_lines: 'Línea',
  tool_text_diff_mode_words: 'Palabra',
  tool_text_diff_mode_chars: 'Carácter',
  tool_text_diff_ignore_ws: 'Ignorar espacios',
  tool_text_diff_normalize_eol: 'Igualar CRLF y LF',
  tool_text_diff_compare: 'Comparar',
  tool_text_diff_swap: 'Intercambiar lados',
  tool_text_diff_clear: 'Borrar',
  tool_text_diff_result_label: 'Diferencias',
  tool_text_diff_legend: 'Verde = añadido · Rojo = eliminado',
  tool_text_diff_summary: '{added} añadidos, {removed} eliminados',
  tool_text_diff_no_diff: 'Sin diferencias: los dos textos coinciden.',
  tool_text_diff_empty_hint: 'Pega texto en uno o ambos lados y pulsa Comparar.',
  tool_text_diff_large_warn: 'Pegado muy grande (>100k caracteres). Puede ir lento; prueba un trozo más corto.',
  tool_text_diff_need_lib: 'No se pudo cargar el comparador. Revisa la conexión y recarga.',
  tool_text_diff_how_title: 'Cómo usarlo',
  tool_text_diff_how_body:
    'Pega dos versiones, elige si quieres ver cambios por línea, palabra o carácter, y revisa en verde lo añadido y en rojo lo borrado. Tu texto pegado no se sube ni se guarda en nuestros servidores. La página puede cargar la librería open-source jsdiff desde un CDN para poder comparar en el navegador.',
  tool_text_diff_rules_title: 'Cómo se calculan las diferencias',
  tool_text_diff_rules_body:
    'La herramienta busca una lista corta de ediciones para pasar del texto A al B (diff clásico / estilo Myers con jsdiff). Modo línea: configs y código. Modo palabra: frases y prompts. Modo carácter: erratas finas, pero más ruido. Ignorar espacios oculta cambios solo de sangría. Igualar CRLF y LF evita que toda una línea se ponga roja solo por el tipo de salto.',
  tool_text_diff_rules_intro:
    'La herramienta busca una lista corta de ediciones para pasar del texto A al B (diff clásico / estilo Myers con jsdiff). Elige el modo según la tarea:',
  tool_text_diff_rules_item_lines:
    'Línea — ideal para .env, YAML y código; una línea cambiada se marca entera. Rápido de leer, pero un solo cambio de palabra también enrojece toda la línea.',
  tool_text_diff_rules_item_words:
    'Palabra — ideal para frases, correos y prompts; resalta palabras sueltas. Más claro en prosa; la puntuación puede fragmentar el resultado.',
  tool_text_diff_rules_item_chars:
    'Carácter — ideal para erratas finas; más preciso, pero ruidoso en ediciones largas.',
  tool_text_diff_rules_options:
    'Ignorar espacios oculta cambios solo de sangría. Igualar CRLF y LF evita que toda una línea se ponga roja solo por el tipo de salto (Windows vs Unix).',
  tool_text_diff_example_title: 'Ejemplo',
  tool_text_diff_usecases_title: 'Para qué sirve',
  tool_text_diff_usecase_1: 'Revisar configs: compara dos fragmentos .env o YAML línea a línea.',
  tool_text_diff_usecase_2: 'Retocar un prompt: modo palabra para ver qué frases se añadieron o quitaron.',
  tool_text_diff_usecase_3: 'Corregir textos o traducciones: comprueba que solo cambiaron las frases previstas.',
  tool_text_diff_faq_q1: '¿Comparar por línea o por palabra?',
  tool_text_diff_faq_a1: 'Línea para código y configs. Palabra para frases, correos y prompts: resalta palabras sueltas en lugar de toda la línea.',
  tool_text_diff_faq_q2: '¿Se sube mi texto a un servidor?',
  tool_text_diff_faq_a2:
    'Tu texto pegado no se sube ni se guarda en nuestros servidores: la comparación corre en el navegador. La página puede cargar jsdiff (open source) desde un CDN; eso no envía tu texto a nuestros servidores.',
  tool_text_diff_faq_q3: '¿Por qué un cambio de salto de línea pone toda la línea en rojo?',
  tool_text_diff_faq_a3: 'Windows usa CRLF y Unix/Mac suelen usar LF. Activa “Igualar CRLF y LF” antes de comparar.',
  tool_text_diff_faq_q4: '¿Puedo comparar imágenes o archivos binarios?',
  tool_text_diff_faq_a4: 'No. Solo texto plano.',

};
export default es;