import type { SiteLangDict } from './types';
const es: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'Inicio',
  nav_devlogs: 'Registros de Desarrollo',
  nav_tools: 'Herramientas',
  footer_text: 'Online Free Tools · Proyecto de aprendizaje · Iterando',
  tool_headers_title: 'Ver cabeceras HTTP de un sitio — Inspeccionar response headers',
  tool_headers_description:
    'Comprueba online las cabeceras HTTP de respuesta de una URL desde nuestro edge. Pasos: pega https, envía HEAD (GET si hace falta), sigue redirecciones, muestra estado y mapa de cabeceras; bloquea hosts privados. Ejemplo: lee cache-control, CORS y Strict-Transport-Security al depurar CDN o redirecciones.',
  tool_headers_article:
    'Mira las cabeceras que recibe el edge para una URL pública: caché, CORS, redirecciones y cabeceras de seguridad. La petición pasa por proxy; no almacenamos el cuerpo de la página como producto.',
  url_label: 'URL',
  url_placeholder: 'por ejemplo https://ejemplo.com',
  fetch_button: 'Comprobar cabeceras',
  result_title: 'Resultado',
  status_label: 'Estado',
  final_url_label: 'URL Final',
  headers_label: 'Encabezados',
  error_prefix: 'Error: ',
  note_title: 'Notas',
  note_1: 'Si el sitio rechaza HEAD, probamos con GET. Buscamos cabeceras, no descargar el HTML entero.',
  note_2: 'localhost y redes privadas quedan bloqueados para que el worker no pueda sondear hosts internos.',
  tool_headers_how_title: 'Cómo funciona',
  tool_headers_how_body:
    'Pega una URL pública http(s) y pulsa comprobar. El worker del edge manda HEAD (GET si hace falta), sigue redirecciones y devuelve estado, URL final y cabeceras observadas. Los destinos privados se rechazan. Es la vista del edge: puede diferir de tu navegador si el CDN enruta por región.',
  tool_headers_rules_title: 'Qué hace el comprobador',
  tool_headers_rules_body:
    'Actúa como proxy efímero para inspeccionar cabeceras; no guarda el contenido de la página. Los nombres siguen la semántica HTTP (ver Referencias).',
  tool_headers_rules_item_1: 'HEAD primero; GET si el origen no admite HEAD.',
  tool_headers_rules_item_2: 'Sigue redirecciones e informa la URL final.',
  tool_headers_rules_item_3: 'Bloquea localhost e IPs de red privada.',
  tool_headers_rules_item_4: 'Resalta cabeceras habituales: Cache-Control, CORS, CSP, etc.',
  tool_headers_example_title: 'Ejemplo',
  tool_headers_example:
    'ejemplo.com → estado 200, URL final sin cambios; cabeceras con content-type: text/html y, según el origen, cache-control o cabeceras de seguridad.',
  tool_headers_usecases_title: 'Cuándo te sirve',
  tool_headers_usecase_1: 'Antes de un despliegue, confirma Cache-Control o la caché del CDN.',
  tool_headers_usecase_2: 'Depura preflight CORS leyendo Access-Control-* en la respuesta.',
  tool_headers_usecase_3: 'Comprueba si CSP, HSTS u otras cabeceras de seguridad llegan de verdad.',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Semántica HTTP',
  tool_headers_ref_mdn_label: 'MDN — Cabeceras HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — Caché HTTP',
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
  tool_bmi_title: 'Calculadora de IMC — Cómo calcular el índice de masa corporal',
  tool_bmi_description:
    'Calcula el índice de masa corporal (IMC) con la fórmula de cribado para adultos. Pasos: elige unidades métricas o imperiales, introduce peso y altura, obtén el IMC y compáralo con las categorías habituales. Ejemplo: 70 kg y 175 cm → IMC 22,9 (normal). Solo orientación educativa, no es un diagnóstico.',
  tool_bmi_article:
    'Esta calculadora gratuita explica cómo se obtiene el IMC adulto a partir del peso y la talla: fórmulas métricas e imperiales, puntos de corte y límites (deportistas, menores). Los cálculos se hacen en tu navegador, sin subir datos.',
  tool_bmi_weight_label: 'Peso (kg)',
  tool_bmi_weight_placeholder: 'Introduce el peso en kilogramos',
  tool_bmi_height_label: 'Altura (cm)',
  tool_bmi_height_placeholder: 'Introduce la altura en centímetros',
  tool_bmi_calculate: 'Calcular IMC',
  tool_bmi_how_title: 'Cómo funciona',
  tool_bmi_how_body:
    'Selecciona métrico o imperial, introduce peso y altura y pulsa calcular. La herramienta aplica la fórmula estándar para adultos, muestra un decimal y ubica el valor en las bandas de cribado más usadas. Todo se procesa en el navegador; no enviamos tus medidas.',
  tool_bmi_formula_title: 'Fórmula del IMC y categorías adultas',
  tool_bmi_formula_body:
    'Métrico: IMC = peso (kg) ÷ altura (m)². Imperial: IMC = 703 × peso (lb) ÷ altura (in)². Los umbrales adultos siguen bandas de cribado ampliamente publicadas.',
  tool_bmi_formula_item_1: 'Bajo peso: IMC < 18,5',
  tool_bmi_formula_item_2: 'Normal: IMC 18,5–24,9',
  tool_bmi_formula_item_3: 'Sobrepeso: IMC 25–29,9',
  tool_bmi_formula_item_4: 'Obesidad: IMC ≥ 30',
  tool_bmi_example_title: 'Ejemplo',
  tool_bmi_example:
    'Ejemplo (métrico): peso 70 kg, altura 175 cm → altura = 1,75 m → IMC = 70 / (1,75²) ≈ 22,9 → banda normal de cribado.',
  tool_bmi_usecases_title: 'Para qué sirve',
  tool_bmi_usecase_1: 'Autocontrol rápido antes de una revisión médica de rutina (solo cribado).',
  tool_bmi_usecase_2: 'Anotar un IMC de referencia al empezar un plan de entrenamiento.',
  tool_bmi_usecase_3: 'Comprobar la misma medida en unidades métricas e imperiales.',
  tool_bmi_ref_who_label: 'OMS — Hoja informativa sobre obesidad y sobrepeso',
  tool_bmi_ref_cdc_label: 'CDC — Categorías de IMC en adultos',
  bmi_chart_title: 'Categorías de IMC adulto (cribado)',
  bmi_underweight: 'Bajo peso',
  bmi_normal: 'Normal',
  bmi_overweight: 'Sobrepeso',
  bmi_obese: 'Obesidad',
  bmi_metric_units: 'Métrico',
  bmi_imperial_units: 'Imperial',
  bmi_unit_group_label: 'Sistema de unidades',
  bmi_result_label: 'Tu IMC',
  bmi_invalid_input: 'Introduce peso y altura positivos para calcular.',
  bmi_weight_lbs: 'Peso (lb)',
  bmi_weight_lbs_placeholder: 'Peso en libras',
  bmi_height_ft: 'Altura (ft)',
  bmi_height_ft_placeholder: 'Pies',
  bmi_height_in: 'Altura (in)',
  bmi_height_in_placeholder: 'Pulgadas',
  bmi_interpretation_underweight:
    'Resultado de cribado: banda de bajo peso. El IMC no diagnostica enfermedades; consulta a un profesional sanitario si lo necesitas.',
  bmi_interpretation_normal:
    'Resultado de cribado: banda normal para adultos. El IMC no mide por sí solo grasa corporal ni condición física.',
  bmi_interpretation_overweight:
    'Resultado de cribado: banda de sobrepeso. El IMC no diagnostica enfermedades; consulta a un profesional sanitario si lo necesitas.',
  bmi_interpretation_obese:
    'Resultado de cribado: banda de obesidad. El IMC no diagnostica enfermedades; consulta a un profesional sanitario si lo necesitas.',
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
  tool_headers_faq_q1: '¿Qué información dan las cabeceras de respuesta?',
  tool_headers_faq_a1:
    'Metadatos del servidor: tipo de contenido, reglas de caché, redirecciones y políticas como HSTS, CSP o CORS.',
  tool_headers_faq_q2: '¿Descarga el HTML completo de la página?',
  tool_headers_faq_a2:
    'Prioriza HEAD y pasa a GET solo si hace falta. El objetivo es inspeccionar cabeceras, no raspar ni guardar el cuerpo.',
  tool_headers_faq_q3: '¿Por qué no puedo probar localhost o IPs privadas?',
  tool_headers_faq_a3:
    'Se bloquean redes privadas para que nadie use el worker como sonda contra hosts internos.',
  tool_headers_faq_q4: '¿Es lo mismo que las DevTools del navegador?',
  tool_headers_faq_a4:
    'No siempre. Ves la respuesta desde nuestro edge; CDN, geo o filtros anti-bot pueden cambiar el resultado respecto a tu PC.',
  tool_headers_faq_q5: '¿Guardáis un historial de las URLs que consulto?',
  tool_headers_faq_a5:
    'Cada consulta es una petición corta en el edge. No hay historial de URLs; evita pegar secretos en parámetros.',
  tool_bmi_faq_q1: '¿Cuál es la fórmula del IMC?',
  tool_bmi_faq_a1: 'Métrico: IMC = peso(kg) / altura(m)². Imperial: IMC = 703 × peso(lb) / altura(in)².',
  tool_bmi_faq_q2: '¿Qué significan las categorías de IMC?',
  tool_bmi_faq_a2:
    'Umbrales habituales en adultos: bajo peso <18,5; normal 18,5–24,9; sobrepeso 25–29,9; obesidad ≥30. Son referencias de cribado, no un diagnóstico.',
  tool_bmi_faq_q3: '¿El IMC sirve para deportistas?',
  tool_bmi_faq_a3:
    'No siempre. El IMC no distingue músculo de grasa. Un deportista puede quedar en una banda alta con poca grasa; pide valoración personalizada a un profesional.',
  tool_bmi_faq_q4: '¿Puedo usarlo con niños o en el embarazo?',
  tool_bmi_faq_a4:
    'Estos umbrales adultos no valen para menores ni embarazo. Usa tablas por edad y orientación clínica.',
  tool_bmi_disclaimer:
    'Esta calculadora de IMC es solo para cribado educativo en adultos. No es consejo médico, no diagnostica enfermedades y no sustituye la atención de un profesional de la salud.',
  tool_bmi_references:
    'Hoja informativa de la OMS sobre obesidad y sobrepeso; guía del CDC sobre categorías de IMC en adultos; fórmulas métricas e imperiales estándar.',

  /* --- IG: ip / roi / mr --- */
tool_ip_address_title: 'Cuál es mi IP — Ver tu IP pública',
  tool_ip_address_description:
    'Consulta la IP pública que ve nuestro edge en tu conexión. Proceso: abre la página o pulsa Actualizar; el worker lee la dirección de cliente de confianza. Ejemplo: puede mostrar 203.0.113.10. Con VPN o proxy verás la IP de salida, no la de tu LAN.',
  tool_ip_address_article:
    'Esta página muestra tu IP de salida pública según nuestro edge. Sirve para comprobar VPN, dar la IP al soporte o depurar allowlists. No es un buscador de geolocalización ni de ISP.',
  tool_ip_address_how_title: 'Cómo funciona',
  tool_ip_address_how_body:
    'El navegador llama a nuestra API en el edge. El worker toma la IP de cliente asociada a la conexión (no solo una cabecera falsificable) y la devuelve. Puedes actualizar cuando quieras; no hace falta cuenta.',
  tool_ip_address_rules_title: 'Qué significa esta IP',
  tool_ip_address_rules_body:
    'Es la dirección pública ligada a tu conexión TCP/TLS en el edge — la identidad de salida que suelen ver los sitios. Límites importantes:',
  tool_ip_address_rules_item_1: 'Con VPN o proxy HTTP verás la IP de salida del proveedor, no la LAN de casa.',
  tool_ip_address_rules_item_2: 'Tras NAT, varios dispositivos comparten una IP pública; 192.168.x.x no aparece aquí.',
  tool_ip_address_rules_item_3: 'Priorizamos la IP de cliente del edge frente a X-Forwarded-For solo (esa cabecera se puede falsificar).',
  tool_ip_address_rules_item_4: 'Puede salir IPv4 o IPv6 según la ruta; en dual-stack puede cambiar al reconectar.',
  tool_ip_address_example_title: 'Ejemplo',
  tool_ip_address_example:
    'Ejemplo de documentación: el edge ve 203.0.113.10 (dirección reservada TEST-NET-3). Tu resultado real será tu IP pública de salida.',
  tool_ip_address_usecases_title: 'Para qué sirve',
  tool_ip_address_usecase_1: 'Comprobar si la VPN o el proxy cambian de verdad tu IP pública.',
  tool_ip_address_usecase_2: 'Indicar al soporte o al firewall qué IP pública hay que permitir.',
  tool_ip_address_usecase_3: 'Revisión rápida al depurar acceso remoto o listas de allowlist de API.',
  tool_ip_address_ref_mdn_label: 'MDN — Cabecera X-Forwarded-For (riesgo de spoofing)',
  tool_ip_address_ref_cloudflare_label: 'Cloudflare Learning — ¿Qué es una dirección IP?',
  ip_label: 'Tu IP pública',
  fetch_ip_button: 'Actualizar',
  fetching_message: 'Obteniendo…',
  tool_ip_address_faq_q1: '¿Por qué no coincide con la IP de mi router?',
  tool_ip_address_faq_a1:
    'Las IP privadas (p. ej. 192.168.x.x) se quedan en la LAN vía NAT. Aquí solo aparece la dirección pública del lado de Internet.',
  tool_ip_address_faq_q2: '¿Cómo obtiene la página mi IP?',
  tool_ip_address_faq_a2:
    'Tu navegador pide nuestra API en el edge; el worker responde con la IP de cliente de confianza de esa conexión.',
  tool_ip_address_faq_q3: '¿Qué pasa si uso VPN o proxy?',
  tool_ip_address_faq_a3:
    'Normalmente verás la IP de salida del VPN/proxy. Es lo esperado: los sitios ven la misma identidad de salida.',
  tool_ip_address_faq_q4: '¿Guardáis mi IP?',
  tool_ip_address_faq_a4:
    'La consulta es una petición corta en el edge. No hay historial de IP; trátalo como visualización temporal.',

  tool_roi_title: 'Calculadora de ROI — Cómo calcular el retorno de la inversión',
  tool_roi_description:
    'Calcula el ROI simple con (Ganancia − Coste) / Coste × 100%, o (Valor final − Inicial) / Inicial × 100%. Proceso: introduce coste y valor final (o ganancia neta) y revisa supuestos de impuestos, comisiones y tiempo. Ejemplo: coste 1000, final 1300 → ROI 30%. Solo ilustración educativa, no es consejo de inversión.',
  tool_roi_article:
    'El ROI simple expresa la ganancia neta frente al coste en porcentaje. Úsalo para recaps aproximados de campañas o proyectos; no calcula IRR/VAN multiperiodo.',
  tool_roi_initial_label: 'Inversión inicial (coste)',
  tool_roi_initial_placeholder: 'p. ej. 1000',
  tool_roi_final_label: 'Valor final',
  tool_roi_final_placeholder: 'p. ej. 1300',
  tool_roi_gain_label: 'Ganancia neta (opcional)',
  tool_roi_gain_placeholder: 'Si la conoces, sustituye final − inicial',
  tool_roi_calculate: 'Calcular',
  tool_roi_result_label: 'ROI',
  tool_roi_how_title: 'Cómo funciona',
  tool_roi_how_body:
    'Introduce el coste y el valor final o una ganancia neta conocida. ROI = neto / coste × 100%. Si dejas la ganancia en blanco, neto = final − inicial. Coste cero no está permitido.',
  tool_roi_formula_title: 'Fórmula y supuestos',
  tool_roi_formula_body:
    'ROI = (Valor final − Inversión inicial) / Inversión inicial × 100%, o Ganancia neta / Coste × 100%. Ten en cuenta:',
  tool_roi_formula_item_1: 'Impuestos: no se estiman; introduce cifras después de impuestos si ese es tu criterio.',
  tool_roi_formula_item_2: 'Tiempo: el ROI simple ignora el periodo de tenencia; no es rentabilidad anualizada.',
  tool_roi_formula_item_3: 'Comisiones: inclúyelas tú en el coste o en el valor final.',
  tool_roi_formula_item_4: 'Flujos multiperiodo e IRR/VAN quedan fuera de este porcentaje de un solo periodo.',
  tool_roi_example_title: 'Ejemplo',
  tool_roi_example:
    'Ejemplo: coste 1000, valor final 1300 → ganancia 300 → ROI = 300 / 1000 × 100% = 30%.',
  tool_roi_usecases_title: 'Para qué sirve',
  tool_roi_usecase_1: 'Marketing: ROI aproximado de una campaña cuando ya conoces gasto e ingresos atribuidos.',
  tool_roi_usecase_2: 'Clase: practicar el porcentaje básico de ROI con números fijos.',
  tool_roi_usecase_3: 'Cierre de proyecto: resumir una iniciativa como un par coste/ganancia (solo estimación).',
  tool_roi_ref_investopedia_label: 'Investopedia — Retorno de la inversión (ROI)',
  tool_roi_ref_guide_label: 'Investopedia — Guía para calcular el ROI',
  tool_roi_interpret_positive: 'ROI positivo (ganancia respecto al coste) — solo ilustración educativa.',
  tool_roi_interpret_zero: 'ROI cero — sin ganancia ni pérdida con estos datos.',
  tool_roi_interpret_negative: 'ROI negativo (pérdida respecto al coste) — solo ilustración educativa.',
  tool_roi_zero_cost: 'La inversión inicial debe ser mayor que cero.',
  tool_roi_faq_q1: '¿Es esto un consejo de inversión?',
  tool_roi_faq_a1: 'No. Los resultados son ilustraciones educativas y no constituyen consejo financiero, fiscal ni de inversión.',
  tool_roi_faq_q2: '¿Qué fórmula usa la calculadora?',
  tool_roi_faq_a2:
    'ROI = (Final − Inicial) / Inicial × 100%, o Ganancia neta / Coste × 100% si introduces la ganancia. Positivo = ganancia; negativo = pérdida.',
  tool_roi_faq_q3: '¿Y los impuestos, comisiones y el tiempo?',
  tool_roi_faq_a3:
    'No estimamos impuestos ni comisiones: incorpóralos tú. El ROI simple tampoco anualiza el periodo.',
  tool_roi_faq_q4: '¿Qué pasa si el coste es cero?',
  tool_roi_faq_a4: 'El ROI no está definido (división por cero). Introduce un coste positivo.',
  tool_roi_disclaimer:
    'Los resultados de ROI son solo ilustraciones educativas y no constituyen consejo de inversión, fiscal ni financiero. Rentabilidades pasadas o hipotéticas no garantizan resultados futuros.',
  tool_roi_references:
    'Definiciones y guías de Investopedia sobre ROI; ROI simple = ganancia neta / coste.',

  tool_marginal_revenue_title: 'Calculadora de ingreso marginal — Fórmula ΔIT / ΔQ',
  tool_marginal_revenue_description:
    'Calcula el ingreso marginal con MR = ΔIT / ΔQ. Proceso: introduce cantidad e ingreso total en dos puntos, resta para obtener ΔIT y ΔQ, y divide. Ejemplo: Q 10→11, IT 1000→1080 → MR = 80. Solo uso educativo — no es consejo de precios.',
  tool_marginal_revenue_article:
    'El ingreso marginal es el cambio del ingreso total al cambiar la cantidad. Esta calculadora muestra la derivación discreta entre dos puntos para deberes y comprobaciones rápidas.',
  tool_marginal_revenue_how_title: 'Cómo funciona',
  tool_marginal_revenue_how_body:
    'Introduce cantidad e ingreso total del tramo 1 y del tramo 2. Se calcula ΔIT = IT2 − IT1, ΔQ = Q2 − Q1 y MR = ΔIT / ΔQ. Todo ocurre en el navegador.',
  tool_marginal_revenue_formula_title: 'Derivación de la fórmula',
  tool_marginal_revenue_formula_body:
    'Por definición, el ingreso marginal mide cómo cambia el ingreso total cuando cambia la cantidad. Con dos puntos observados:',
  tool_marginal_revenue_formula_item_1: 'ΔIT = IT₂ − IT₁ (cambio del ingreso total)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (cambio de cantidad)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔIT / ΔQ si ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'Un paso discreto aproxima el MR medio del intervalo; los modelos continuos usan dIT/dQ. Un MR negativo indica que el ingreso bajó al subir la cantidad.',
  tool_marginal_revenue_example_title: 'Ejemplo',
  tool_marginal_revenue_example:
    'Ejemplo: Q₁ = 10, IT₁ = 1000; Q₂ = 11, IT₂ = 1080 → ΔIT = 80, ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_usecases_title: 'Para qué sirve',
  tool_marginal_revenue_usecase_1: 'Deberes: comprobar una tabla de cantidad/ingreso de dos niveles.',
  tool_marginal_revenue_usecase_2: 'Estimación rápida: cuánto cambia el ingreso al subir una unidad de producción.',
  tool_marginal_revenue_usecase_3: 'Contrastar ingreso marginal e ingreso medio en microeconomía introductoria.',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — Ingreso marginal (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — Principios de microeconomía (competencia)',
  tool_marginal_revenue_q1_label: 'Cantidad (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'p. ej. 10',
  tool_marginal_revenue_tr1_label: 'Ingreso total (IT₁)',
  tool_marginal_revenue_tr1_placeholder: 'p. ej. 1000',
  tool_marginal_revenue_q2_label: 'Cantidad (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'p. ej. 11',
  tool_marginal_revenue_tr2_label: 'Ingreso total (IT₂)',
  tool_marginal_revenue_tr2_placeholder: 'p. ej. 1080',
  tool_marginal_revenue_quantity_label: 'Cantidad',
  tool_marginal_revenue_revenue_label: 'Ingreso total',
  tool_marginal_revenue_calculate: 'Calcular MR',
  tool_marginal_revenue_result_label: 'Ingreso marginal',
  tool_marginal_revenue_zero_dq: 'ΔQ es 0 — la cantidad debe cambiar entre los dos puntos.',
  tool_marginal_revenue_detail_tpl: 'ΔIT = {dTR}, ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_faq_q1: '¿Un MR positivo implica subir la producción?',
  tool_marginal_revenue_faq_a1:
    'No. Esta herramienta no da consejos de precios ni de producción; también hacen falta el coste marginal y otras restricciones.',
  tool_marginal_revenue_faq_q2: '¿Cómo se deriva el ingreso marginal aquí?',
  tool_marginal_revenue_faq_a2:
    'MR = ΔIT / ΔQ con ΔIT = IT₂ − IT₁ y ΔQ = Q₂ − Q₁. Es una derivación discreta, no una derivada continua.',
  tool_marginal_revenue_faq_q3: '¿Qué ocurre si ΔQ es cero?',
  tool_marginal_revenue_faq_a3: 'El MR no está definido si la cantidad no cambia. Elige dos cantidades distintas.',
  tool_marginal_revenue_faq_q4: '¿En qué se diferencia del ingreso medio?',
  tool_marginal_revenue_faq_a4:
    'El ingreso medio es IT / Q en un nivel de producción. El marginal es el cambio de IT al cambiar Q; solo coinciden en casos especiales (p. ej. precio constante).',
  tool_marginal_revenue_disclaimer:
    'Esta calculadora sirve para aprender conceptos de microeconomía. No es consejo empresarial, de precios ni de inversión.',
  tool_marginal_revenue_references:
    'Entrada de Investopedia sobre ingreso marginal; tratamiento introductorio de MR = ΔIT/ΔQ (p. ej. OpenStax).',

  tool_squarefeet_title: 'Pies cuadrados a metros cuadrados — Para viviendas y reformas',
  tool_squarefeet_description:
    'Convierte el área de una habitación entre pies cuadrados y metros cuadrados para anuncios y reformas. Proceso: elige ft/m/in, introduce largo × ancho, calcula el área y muestra ft² y m² con el factor NIST 1 ft² = 0.09290304 m². Ejemplo: piso de 850 sq ft ≈ 78,97 m².',
  tool_squarefeet_article:
    'Estima el área rectangular a partir del largo y el ancho y convierte entre pies cuadrados y metros cuadrados. Pensado para anuncios, suelo y pintura — no es una tasación ni distingue superficie útil y construida.',
  tool_squarefeet_length_label: 'Largo',
  tool_squarefeet_length_placeholder: 'Introduce el largo',
  tool_squarefeet_width_label: 'Ancho',
  tool_squarefeet_width_placeholder: 'Introduce el ancho',
  tool_squarefeet_calculate: 'Convertir área',
  tool_squarefeet_unit_group_label: 'Unidades de entrada',
  unit_feet: 'Pies',
  unit_meters: 'Metros',
  unit_inches: 'Pulgadas',
  sqft_unit: 'sq ft',
  tool_squarefeet_result_note: 'Redondeo a dos decimales. Factor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_invalid_input: 'Introduce largo y ancho positivos.',
  tool_squarefeet_usage_title: 'Uso',
  tool_squarefeet_usage: 'Elige la unidad, introduce largo y ancho y obtén pies cuadrados más el equivalente en m².',
  tool_squarefeet_how_title: 'Cómo funciona',
  tool_squarefeet_how_body:
    'Elige si las medidas están en pies, metros o pulgadas. Multiplica largo × ancho tras pasar ambos lados a pies y convierte a m² con el factor SI exacto. Se rechazan valores vacíos o negativos.',
  tool_squarefeet_formula_title: 'Fórmula de área y factor de conversión',
  tool_squarefeet_formula_body:
    'Área (ft²) = largo (ft) × ancho (ft). En metros: ft² = (L×W) ÷ 0.09290304. En pulgadas: divide cada lado entre 12. Factor exacto: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Entrada en pies: área_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Entrada en metros: área_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Entrada en pulgadas: área_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = área_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_example_title: 'Ejemplo',
  tool_squarefeet_example:
    'Anuncio: piso de 850 sq ft → 850 × 0.09290304 ≈ 78,97 m². Habitación: 10 ft × 12 ft = 120 sq ft ≈ 11,15 m² para comparar con anuncios en m².',
  tool_squarefeet_usecases_title: 'Para qué sirve',
  tool_squarefeet_usecase_1: 'Comparar un listing en sq ft con anuncios locales en m².',
  tool_squarefeet_usecase_2: 'Estimar suelo o moqueta de una habitación rectangular antes de pedir material.',
  tool_squarefeet_usecase_3: 'Calcular a ojo pintura o reforma cuando el plano mezcla unidades.',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Guía del Sistema Internacional de Unidades (SI)',
  tool_squarefeet_faq_q1: '¿Qué factor usáis entre ft² y m²?',
  tool_squarefeet_faq_a1: 'Exactamente 1 ft² = 0.09290304 m² (orientación SI / NIST). El resultado se redondea a dos decimales.',
  tool_squarefeet_faq_q2: '¿Distingue superficie útil y construida?',
  tool_squarefeet_faq_a2: 'No. Solo convierte el área plana de un rectángulo. Las definiciones de los anuncios quedan fuera.',
  tool_squarefeet_faq_q3: '¿Sirve para tasar una vivienda?',
  tool_squarefeet_faq_a3: 'No. La conversión de área no es valoración ni un modelo de precio por metro.',
  tool_squarefeet_faq_q4: '¿Y habitaciones en L?',
  tool_squarefeet_faq_a4: 'Divide en rectángulos, convierte cada uno y suma. No modelamos polígonos irregulares.',
  tool_percentage_change_title: 'Calculadora de cambio porcentual — De valor antiguo a nuevo',
  tool_percentage_change_description:
    'Calcula el aumento o la bajada porcentual entre un valor antiguo y uno nuevo. Proceso: introduce ambos, aplica (nuevo − antiguo) / antiguo × 100 y lee el signo. Ejemplo: 80 → 100 = +25%. Pensado para ingresos MoM, DAU y precios — no son puntos porcentuales.',
  tool_percentage_change_article:
    'El cambio porcentual relativo responde «¿cuánto se movió la métrica frente a su base?». Introduce el valor antiguo y el nuevo; usamos (nuevo − antiguo) / antiguo × 100. Sirve para KPIs, no sustituye al ROI.',
  tool_percentage_change_original_label: 'Valor anterior',
  tool_percentage_change_new_label: 'Valor nuevo',
  tool_percentage_change_calculate: 'Calcular',
  tool_percentage_change_result_label: 'Cambio porcentual',
  tool_percentage_change_example:
    'Ejemplo completo: antiguo 80, nuevo 100 → Δ = 20 → (20 / 80) × 100 = 25% de aumento. Bajada: 100 → 80 = −20%.',
  tool_percentage_change_result_invalid: 'El valor anterior debe ser un número distinto de cero.',
  tool_percentage_change_increase: 'aumento',
  tool_percentage_change_decrease: 'disminución',
  tool_percentage_change_no_change: 'sin cambio',
  tool_percentage_change_abs_note: 'Cambio absoluto: {delta}',
  tool_percentage_change_how_title: 'Cómo funciona',
  tool_percentage_change_how_body:
    'Introduce la base (valor anterior) y el valor posterior. Restamos, dividimos por el antiguo y multiplicamos por 100. Positivo = sube; negativo = baja. Si antiguo = 0, el cambio relativo no está definido.',
  tool_percentage_change_formula_title: 'Fórmula del cambio porcentual',
  tool_percentage_change_formula_body:
    'Cambio % = (nuevo − antiguo) / antiguo × 100. Usamos el antiguo con signo en el denominador (no |antiguo|).',
  tool_percentage_change_formula_item_1: 'Δ = nuevo − antiguo',
  tool_percentage_change_formula_item_2: 'porcentaje = (Δ / antiguo) × 100',
  tool_percentage_change_formula_item_3: 'antiguo = 0 → indefinido (error)',
  tool_percentage_change_example_title: 'Ejemplo',
  tool_percentage_change_usecases_title: 'Usos de negocio y datos',
  tool_percentage_change_usecase_1: 'Ingresos mes a mes: GMV 80 el mes pasado frente a 100 este mes → +25%.',
  tool_percentage_change_usecase_2: 'Analítica de producto: DAU de 50k a 55k → +10% relativo.',
  tool_percentage_change_usecase_3: 'Precios: de 40 a 34 → −15% (no «6 puntos porcentuales»).',
  tool_percentage_change_ref_wiki_label: 'Wikipedia — Relative change and difference',
  tool_percentage_change_faq_q1: '¿Cuál es la fórmula del cambio porcentual?',
  tool_percentage_change_faq_a1: 'Cambio % = (nuevo − antiguo) / antiguo × 100. Positivo = aumento; negativo = bajada.',
  tool_percentage_change_faq_q2: '¿Por qué el valor anterior no puede ser cero?',
  tool_percentage_change_faq_a2: 'Dividir entre cero no está definido. Sin base no hay cambio porcentual relativo.',
  tool_percentage_change_faq_q3: '¿Es lo mismo que puntos porcentuales?',
  tool_percentage_change_faq_a3: 'No. De 10% a 12% son 2 puntos porcentuales, pero un aumento relativo del 20%.',
  tool_percentage_change_faq_q4: '¿En qué se diferencia del ROI?',
  tool_percentage_change_faq_a4: 'El ROI compara ganancia con coste de inversión. El cambio porcentual compara cualquier valor nuevo con una base antigua.',
  tool_gradient_title: 'Calculadora de gradiente — ∇f multivariable (derivadas parciales)',
  tool_gradient_description:
    'Calcula el gradiente ∇f de un campo escalar como vector de derivadas parciales. Proceso: deriva respecto a cada variable, forma ∇f y evalúa en un punto. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); en (1,2) → (4,4). Útil en optimización y descenso por gradiente en ML.',
  tool_gradient_desc:
    'Calcula el gradiente ∇f de un campo escalar como vector de derivadas parciales. Proceso: deriva respecto a cada variable, forma ∇f y evalúa en un punto. Demo f(x,y)=x²y+3y → ∇f=(2xy, x²+3); en (1,2) → (4,4). Útil en optimización y descenso por gradiente en ML.',
  tool_gradient_article:
    'El gradiente de una función escalar multivariable es el vector de sus derivadas parciales de primer orden. Apunta al mayor aumento local y es la base de la optimización por gradiente. Esta página no es una calculadora de pendiente entre dos puntos (rise/run).',
  tool_gradient_fn_hint: 'Función demo (fija en el cuadro interactivo):',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'p. ej. 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'p. ej. 2',
  tool_gradient_calculate: 'Evaluar ∇f',
  tool_gradient_result_label: 'Gradiente en tu punto',
  tool_gradient_result_note: 'Evaluado f(x,y)=x²y+3y en ({x}, {y}).',
  tool_gradient_invalid_input: 'Introduce valores numéricos finitos para x e y.',
  tool_gradient_how_title: 'Cómo funciona',
  tool_gradient_how_body:
    'Para un escalar f(x₁,…,xₙ), calcula cada parcial ∂f/∂xᵢ dejando fijas las demás, apílalas en ∇f y sustituye las coordenadas. El cuadro usa f(x,y)=x²y+3y para comprobar el cálculo a mano.',
  tool_gradient_formula_title: 'Fórmula del gradiente multivariable',
  tool_gradient_formula_body:
    '∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). En dos variables: ∇f(x,y) = (∂f/∂x, ∂f/∂y). ∇f es el ascenso más pronunciado; −∇f se usa en descenso por gradiente.',
  tool_gradient_formula_item_1: 'Calcula ∂f/∂xᵢ para cada variable',
  tool_gradient_formula_item_2: 'Monta el vector ∇f',
  tool_gradient_formula_item_3: 'Evalúa los componentes en el punto elegido',
  tool_gradient_formula_item_4: 'Demo: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_example_title: 'Ejemplo',
  tool_gradient_example:
    'f(x,y)=x²y+3y. Parciales: ∂f/∂x=2xy, ∂f/∂y=x²+3. En (1,2): ∂f/∂x=4, ∂f/∂y=4 → ∇f=(4,4).',
  tool_gradient_usecases_title: 'Optimización y aprendizaje automático',
  tool_gradient_usecase_1: 'Comprobar parciales de un ejercicio antes del paso de optimización.',
  tool_gradient_usecase_2: 'Explicar descenso por gradiente: cada paso se mueve en sentido contrario a ∇loss.',
  tool_gradient_usecase_3: 'Intuición física: ∇f apunta hacia donde el campo escalar crece más rápido.',
  tool_gradient_ref_wiki_label: 'Wikipedia — Gradiente',
  tool_gradient_ref_khan_label: 'Khan Academy — The gradient',
  tool_gradient_faq_q1: '¿Qué es un gradiente en cálculo multivariable?',
  tool_gradient_faq_a1: '∇f es el vector de derivadas parciales y apunta al mayor aumento local de f.',
  tool_gradient_faq_q2: '¿Cómo se calcula a mano?',
  tool_gradient_faq_a2: 'Deriva respecto a cada variable dejando las demás fijas, forma el vector y evalúa en un punto.',
  tool_gradient_faq_q3: '¿Es el mismo “gradiente” del descenso por gradiente en ML?',
  tool_gradient_faq_a3: 'Sí, el mismo objeto: ∇ de una pérdida escalar. El descenso camina en −∇loss. Esta página enseña la definición, no entrena un modelo.',
  tool_gradient_faq_q4: '¿Es una calculadora de pendiente entre dos puntos?',
  tool_gradient_faq_a4: 'No. La pendiente rise/run es otra herramienta; aquí ∇f es el vector de parciales.',

};
export default es;