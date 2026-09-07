/**
 * i18n tool shard (convert-html-web-pages-to-word-document / es).
 * H1: Convertir páginas HTML a un documento Word.
 * IG: títulos/listas/tablas editables en Word — no PDF A4, no captura PNG/JPG, no PDF→Word, no fotos→Word.
 */
import type { SiteLangDict } from '../../../types';

/** Diccionario visible del convertidor HTML→Word (es). */
const es: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: 'Ajustes avanzados (opcional)',
	tool_convert_html_web_pages_to_word_document_article:
		'Pega HTML o una URL pública y saldrá un .docx que se puede editar: títulos, listas, tablas y enlaces pasan a estilos de Word. No es un PDF A4 ni una captura. El HTML pegado se queda en esta pestaña. La URL se pide una vez al servidor y no se guarda. ¿Impresión A4? Convertir HTML a PDF. ¿Ya tienes PDF? Convertir PDF en documento Word.',
	tool_convert_html_web_pages_to_word_document_clear: 'Borrar',
	tool_convert_html_web_pages_to_word_document_convert: 'Convertir',
	tool_convert_html_web_pages_to_word_document_desc:
		'Pega HTML o una URL y baja un Word editable; no es PDF ni captura de pantalla.',
	tool_convert_html_web_pages_to_word_document_description:
		'Convertir páginas HTML a un documento Word (HTML a Word): pega código o una URL y obtén un .docx editable, no un PDF A4. Pasos: pegar o cargar, Convertir, Descargar. Ejemplo: notas de versión con tabla pasan a estilos Word. El HTML pegado se queda en esta pestaña; la URL se recupera una vez y no se guarda.',
	tool_convert_html_web_pages_to_word_document_download: 'Descargar',
	tool_convert_html_web_pages_to_word_document_empty: 'Pega HTML o escribe una URL pública primero.',
	tool_convert_html_web_pages_to_word_document_err_convert: 'No se pudo armar el Word con ese HTML. Revisa las etiquetas e inténtalo de nuevo.',
	tool_convert_html_web_pages_to_word_document_err_load: 'No se cargó la librería de Word. Actualiza e inténtalo otra vez.',
	tool_convert_html_web_pages_to_word_document_err_url: 'No se pudo cargar esa URL. Comprueba la dirección o el sitio bloquea la petición.',
	tool_convert_html_web_pages_to_word_document_err_url_empty: 'Escribe primero una URL http(s) válida.',
	tool_convert_html_web_pages_to_word_document_example:
		'Cargar ejemplo rellena HTML de notas de versión (un H1, una lista, una tabla de dos columnas y un enlace), ejecuta Convertir y activa Descargar. El .docx usa estilos de título y tabla: puedes cambiar el texto. En la pestaña URL, Convertir pide una dirección en vivo.',
	tool_convert_html_web_pages_to_word_document_example_title: 'Ejemplo',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'Sí. Abre la pestaña URL, pega un https y pulsa Convertir. Se quitan los scripts. Muros de login y apps en JavaScript casi nunca coinciden con el sitio en vivo. El CSS no se reconstruye píxel a píxel.',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'La descarga es .docx (HTML a DOCX). Ábrelo en Word u otro editor que lea Office Open XML. No es el .doc binario ni un .mhtml de Chrome.',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'Convertir HTML a PDF pagina en hojas A4 para imprimir. Aquí el HTML se mapea a párrafos, títulos, listas y tablas que se pueden editar. Mismo HTML, otro archivo.',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'El HTML pegado no sale de esta pestaña ni se sube al servidor. Si usas una URL, enviamos esa dirección una vez para traer el HTML y no la almacenamos. El .docx se arma en el navegador.',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'Convertir PDF en documento Word parte de un PDF y su capa de texto. Aquí partes de HTML pegado o de una URL. Si ya tienes PDF, usa esa herramienta.',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'No. Exporta o copia el HTML. El paquete «página completa» / MHTML de Chrome es otro formato y aquí no se analiza.',
	tool_convert_html_web_pages_to_word_document_faq_q1: '¿Puedo pasar una URL (página web a Word)?',
	tool_convert_html_web_pages_to_word_document_faq_q2: '¿El resultado es HTML a DOCX / un .docx?',
	tool_convert_html_web_pages_to_word_document_faq_q3: '¿En qué se diferencia de Convertir HTML a PDF?',
	tool_convert_html_web_pages_to_word_document_faq_q4: '¿Se sube y guarda mi HTML o la URL?',
	tool_convert_html_web_pages_to_word_document_faq_q5: '¿En qué se diferencia de Convertir PDF en documento Word?',
	tool_convert_html_web_pages_to_word_document_faq_q6: '¿Puedo convertir un .mhtml de Chrome?',
	tool_convert_html_web_pages_to_word_document_how_body:
		'Si buscas página web a Word, cambia a la pestaña URL, pulsa Convertir y descarga un .docx editable. Los títulos y tablas son estilos de Word, no una foto de la pantalla.',
	tool_convert_html_web_pages_to_word_document_how_item_1:
		'Para HTML a Word con código que ya tienes, quédate en Pegar HTML. Para una dirección https pública, usa la pestaña URL.',
	tool_convert_html_web_pages_to_word_document_how_item_2:
		'Pulsa Convertir. Se eliminan scripts. Títulos, listas, tablas y enlaces pasan a Word. Las imágenes que fallan se omiten.',
	tool_convert_html_web_pages_to_word_document_how_item_3:
		'¿Quieres las <img> del HTML? Abre Ajustes avanzados: Incluir imágenes viene activado y sigue saltándose fotos bloqueadas. Si prefieres un borrador sin títulos ni tablas de Word, marca Solo texto (también apaga las imágenes).',
	tool_convert_html_web_pages_to_word_document_how_item_4:
		'¿Hojas A4? Convertir HTML a PDF. ¿Captura? Convertir varias páginas web a PNG o JPG. ¿Ya es PDF? Convertir PDF en documento Word.',
	tool_convert_html_web_pages_to_word_document_how_item_5: 'Cuando Convertir termine, pulsa Descargar. Abre el .docx y edita el texto.',
	tool_convert_html_web_pages_to_word_document_how_title: 'Cómo usarlo',
	tool_convert_html_web_pages_to_word_document_html_hint:
		'Pega un fragmento o un documento HTML completo. Los scripts se quitan antes. El CSS de maquetación no se recrea píxel a píxel.',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>Notas de versión</h1><p>Pega el HTML aquí…</p>',
	tool_convert_html_web_pages_to_word_document_hud_download: 'Descargar el Word',
	tool_convert_html_web_pages_to_word_document_hud_elapsed_tpl: '{s} s transcurridos',
	tool_convert_html_web_pages_to_word_document_hud_fail_hint: 'Revisa el HTML o la URL y pulsa Convertir otra vez.',
	tool_convert_html_web_pages_to_word_document_hud_fail_title: 'La conversión falló',
	tool_convert_html_web_pages_to_word_document_hud_next: 'La conversión terminó. Siguiente: descarga el .docx, ábrelo y edita el texto.',
	tool_convert_html_web_pages_to_word_document_hud_pct_tpl: '{pct}%',
	tool_convert_html_web_pages_to_word_document_hud_step_fetch: 'Obtener',
	tool_convert_html_web_pages_to_word_document_hud_step_map: 'Mapear',
	tool_convert_html_web_pages_to_word_document_hud_step_pack: 'Empaquetar',
	tool_convert_html_web_pages_to_word_document_hud_title: 'Progreso de la conversión',
	tool_convert_html_web_pages_to_word_document_imgs_hint:
		'Si está activo, se intentan incrustar las <img> que el navegador pueda leer. Las rotas o bloqueadas se omiten. Desactívalo para un Word solo de texto.',
	tool_convert_html_web_pages_to_word_document_imgs_label: 'Incluir imágenes',
	tool_convert_html_web_pages_to_word_document_opts_hint:
		'Incluir imágenes intenta embeber las fotos del HTML. Solo texto aplana títulos, tablas y enlaces a párrafos. El posicionamiento CSS no se mapea. La salida es siempre un .docx.',
	tool_convert_html_web_pages_to_word_document_plain_hint:
		'Deja párrafos editables: sin estilos de título de Word, sin tablas ni fotos incrustadas. Los enlaces quedan como «texto (URL)». Las celdas se escriben en líneas separadas por tabulador.',
	tool_convert_html_web_pages_to_word_document_plain_label: 'Solo texto',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'Un Convertir genera un .docx. Se mapean títulos, párrafos, listas, tablas, enlaces e imágenes opcionales. No se mapean CSS absoluto, barras fijas ni scripts.',
	tool_convert_html_web_pages_to_word_document_rules_item_1:
		'El HTML pegado se queda en esta pestaña, sin subir al servidor. Una URL se recupera una vez y no se almacena.',
	tool_convert_html_web_pages_to_word_document_rules_item_2:
		'Por defecto h1–h6 pasan a títulos de Word, ul/ol a listas, table a tabla y a a hipervínculo. «Solo texto» en Ajustes avanzados lo deja en párrafos normales.',
	tool_convert_html_web_pages_to_word_document_rules_item_3:
		'Login, apps JavaScript y CSS de impresión casi nunca coinciden con el sitio en vivo. Esto no es un raster de captura.',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'Frente a Convertir HTML a PDF: Word editable, no hojas A4. Frente a Convertir PDF en documento Word: la entrada es HTML o URL, no un PDF. Frente a Imágenes a Word: la entrada es marcado, no un montón de fotos.',
	tool_convert_html_web_pages_to_word_document_rules_title: 'Qué debes esperar',
	tool_convert_html_web_pages_to_word_document_sample: 'Cargar ejemplo',
	tool_convert_html_web_pages_to_word_document_status_done: 'Listo — el siguiente paso es Descargar.',
	tool_convert_html_web_pages_to_word_document_status_fetching: 'Obteniendo el HTML de la URL…',
	tool_convert_html_web_pages_to_word_document_status_mapping: 'Pasando el HTML a párrafos de Word…',
	tool_convert_html_web_pages_to_word_document_status_packing: 'Empaquetando el .docx…',
	tool_convert_html_web_pages_to_word_document_status_working: 'Armando el documento Word…',
	tool_convert_html_web_pages_to_word_document_tab_html: 'Pegar HTML',
	tool_convert_html_web_pages_to_word_document_tab_url: 'URL',
	tool_convert_html_web_pages_to_word_document_title: 'Convertir páginas HTML a un documento Word',
	tool_convert_html_web_pages_to_word_document_url_hint:
		'Una URL http(s) pública. Pedimos el HTML una vez y reescribimos CSS/imágenes. Los scripts se quitan antes del mapeo a Word.',
	tool_convert_html_web_pages_to_word_document_url_label: 'URL',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1:
		'Trae una URL pública de notas de versión y conserva la tabla como tabla de Word de verdad, no como imagen.',
	tool_convert_html_web_pages_to_word_document_usecase_2:
		'Convierte un HTML exportado del centro de ayuda en un borrador que legal pueda comentar: los títulos siguen siendo títulos.',
	tool_convert_html_web_pages_to_word_document_usecase_3:
		'Deja la impresión A4 en Convertir HTML a PDF y las capturas en Convertir varias páginas web a PNG; usa esto cuando necesites un .docx editable.',
	tool_convert_html_web_pages_to_word_document_usecases_title: 'Cuándo encaja',
};

export default es;
