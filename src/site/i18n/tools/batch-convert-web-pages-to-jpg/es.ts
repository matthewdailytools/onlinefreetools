/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / es).
 * H1 当地检索句：Convertir varias páginas web a JPG（不是英模 Batch convert…）。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: 'Ajustes avanzados (opcional)',
	tool_batch_convert_web_pages_to_jpg_article:
		'Pega una dirección pública por línea, captura cada página como JPEG al ancho de pantalla que elijas, omite las filas que fallen y descarga un ZIP. Cada URL se recupera una vez en el servidor y no se guarda; la imagen se crea en esta pestaña. Es una captura, no un PDF A4.',
	tool_batch_convert_web_pages_to_jpg_capture_first: 'Solo la primera pantalla',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: 'Marco oculto de captura',
	tool_batch_convert_web_pages_to_jpg_capture_full: 'Página completa',
	tool_batch_convert_web_pages_to_jpg_capture_label: 'Captura',
	tool_batch_convert_web_pages_to_jpg_clear: 'Borrar',
	tool_batch_convert_web_pages_to_jpg_col_file: 'Archivo',
	tool_batch_convert_web_pages_to_jpg_col_status: 'Estado',
	tool_batch_convert_web_pages_to_jpg_col_url: 'URL',
	tool_batch_convert_web_pages_to_jpg_convert: 'Convertir todo',
	tool_batch_convert_web_pages_to_jpg_desc:
		'Convierte varias páginas web a JPG desde una lista de URLs y descarga un ZIP. Cada dirección se recupera una vez y no se almacena.',
	tool_batch_convert_web_pages_to_jpg_description:
		'Convierte varias páginas web a JPG desde una lista de URLs (una línea también vale). Elige viewport y calidad JPEG, página completa o primera pantalla, y baja un ZIP. Pasos: pegar URLs, Convertir todo, Descargar ZIP. Ejemplo: dos páginas de ayuda salen como dos JPEG. Cada URL se pide una vez y no se guarda.',
	tool_batch_convert_web_pages_to_jpg_download_zip: 'Descargar ZIP',
	tool_batch_convert_web_pages_to_jpg_empty: 'Pega al menos una URL de página.',
	tool_batch_convert_web_pages_to_jpg_err_convert: 'Esta página no se pudo pasar a JPEG. Omitida.',
	tool_batch_convert_web_pages_to_jpg_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_batch_convert_web_pages_to_jpg_err_load: 'La biblioteca de conversión no cargó. Actualiza e inténtalo de nuevo.',
	tool_batch_convert_web_pages_to_jpg_err_too_many: 'Como máximo 10 URLs. Las líneas de más no se añadieron.',
	tool_batch_convert_web_pages_to_jpg_err_url: 'No se pudo cargar esa URL. Revisa la dirección o el sitio bloquea la petición.',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: 'Esa línea no es una URL http(s) válida. Omitida.',
	tool_batch_convert_web_pages_to_jpg_example:
		'Cargar ejemplo rellena dos URLs de example.com, arma dos JPEG con HTML local (sin visitar el sitio en vivo) y activa Descargar ZIP. Convertir todo sí recupera las direcciones que pegaste. El viewport, la calidad y página completa vs primera pantalla cambian los píxeles.',
	tool_batch_convert_web_pages_to_jpg_example_title: 'Ejemplo',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'La conversión ocurre en esta pestaña. Al convertir una lista enviamos cada dirección al servidor una vez para traer el HTML; no guardamos las páginas. Los JPEG se crean en tu dispositivo y aquí se empaquetan en ZIP.',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'La hermana PDF pagina en A4 para leer e imprimir. Esta página rasteriza un JPEG por URL al ancho que elijas (escritorio 1280, tableta 768 o móvil 390), con calidad y página completa o primera pantalla. Misma lista, otro archivo.',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'PDF a JPG parte de un archivo PDF que subes. Aquí partes de URLs de páginas. Si ya tienes PDFs, usa PDF a JPG; si tienes una lista de enlaces, usa esta página.',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'No. Se quitan los scripts. Muros de login, paywalls y apps con mucho JavaScript casi nunca coinciden con el sitio en vivo. El CSS adaptable sigue el ancho de viewport que elegiste.',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'Cada fila correcta es un JPEG aparte dentro de un ZIP. Una sola URL también sirve. Aquí no se fusionan las imágenes en un solo archivo.',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'El ancho de viewport cambia el diseño (móvil vs escritorio). La calidad JPEG equilibra peso y artefactos. Página completa captura la altura de scroll (con tope para no tumbar la pestaña); primera pantalla deja más o menos un viewport.',
	tool_batch_convert_web_pages_to_jpg_faq_q1: '¿Se suben y guardan mis páginas en un servidor?',
	tool_batch_convert_web_pages_to_jpg_faq_q2: '¿En qué se diferencia de Convertir varias páginas web a PDF?',
	tool_batch_convert_web_pages_to_jpg_faq_q3: '¿En qué se diferencia de PDF a JPG?',
	tool_batch_convert_web_pages_to_jpg_faq_q4: '¿Una web con login o mucho JavaScript se verá igual?',
	tool_batch_convert_web_pages_to_jpg_faq_q5: '¿Sale un JPG único o un ZIP? ¿Puedo convertir una sola URL?',
	tool_batch_convert_web_pages_to_jpg_faq_q6: '¿Qué cambian el viewport, la calidad JPEG y la primera pantalla?',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: '{n} URLs en la cola',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'Pega la lista de páginas públicas, pulsa Convertir todo (escritorio 1280, JPEG 85 %, página completa por defecto) y llévate un ZIP con las que sí salieron.',
	tool_batch_convert_web_pages_to_jpg_how_item_1: 'Pega una URL https por línea (centro de ayuda o tickets encajan bien). Una línea basta para URL a JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_2: 'Pulsa Convertir todo. Por defecto: escritorio 1280, JPEG al 85 % y página completa. Cada URL pública se pide una vez; las filas fallidas se omiten.',
	tool_batch_convert_web_pages_to_jpg_how_item_3: '¿Móvil, solo la primera pantalla, o más espera si salen huecos? Abre Ajustes avanzados para viewport, calidad JPEG, captura y espera de carga.',
	tool_batch_convert_web_pages_to_jpg_how_item_4: '¿Necesitas A4 imprimible en vez de capturas? Usa Convertir varias páginas web a PDF. ¿Ya tienes un PDF? Usa PDF a JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_5: 'Pulsa Descargar ZIP cuando al menos una fila haya salido.',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'Cargar ejemplo prueba dos páginas locales; el panel de progreso se muestra mientras convierten.',
	tool_batch_convert_web_pages_to_jpg_how_title: 'Cómo funciona',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: '{s}s transcurridos',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: 'Descarga',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: 'Imágenes',
	tool_batch_convert_web_pages_to_jpg_hud_title: 'Progreso del lote',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'El ancho de viewport cambia el diseño. La calidad JPEG cambia el tamaño. Página completa es una captura alta; primera pantalla tiene más o menos un viewport.',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'Calidad JPEG',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'Una URL http(s) por línea, hasta 10. Conversión en serie. Las filas fallidas se omiten. Los JPEG correctos van a un ZIP. Viewport, calidad y modo de captura cambian los píxeles: no es un PDF con otra extensión.',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'Cada URL se envía al servidor una vez para traer el HTML y no se guarda. El JPEG se arma en esta pestaña.',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'Redes privadas, logins y páginas que faltan fallan esa fila. El resto del lote sigue.',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'Nombres ZIP repetidos pasan a name (2).jpg. Se quitan scripts y trampas noscript de refresco. Las portadas muy altas se recortan para no tumbar la pestaña.',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'Esto no es un rastreador de sitios enteros. Pega las URLs que ya tienes.',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'Frente a Convertir varias páginas web a PDF: no hay paginación A4. Frente a PDF a JPG: la entrada es una lista de URLs, no un PDF. Frente a convertidores de fotos: la entrada es una web, no un archivo local.',
	tool_batch_convert_web_pages_to_jpg_rules_title: 'Reglas que debes esperar',
	tool_batch_convert_web_pages_to_jpg_sample: 'Cargar ejemplo',
	tool_batch_convert_web_pages_to_jpg_status_converting: 'Generando JPEG… esta pestaña puede pausarse unos segundos',
	tool_batch_convert_web_pages_to_jpg_status_done: 'Lote terminado — revisa la tabla y descarga el ZIP.',
	tool_batch_convert_web_pages_to_jpg_status_fetching: 'Descargando el HTML de la página…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG listo',
	tool_batch_convert_web_pages_to_jpg_status_queued: 'En cola',
	tool_batch_convert_web_pages_to_jpg_status_skip: 'Omitida',
	tool_batch_convert_web_pages_to_jpg_status_waiting: 'Esperando a que terminen las imágenes…',
	tool_batch_convert_web_pages_to_jpg_status_working: 'Convirtiendo el lote…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} listas · {skip} omitidas',
	tool_batch_convert_web_pages_to_jpg_title: 'Convertir varias páginas web a JPG',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'Una URL http(s) pública por línea, hasta 10. Pedimos cada página una vez y reescribimos CSS e imágenes. Se quitan scripts antes de capturar.',
	tool_batch_convert_web_pages_to_jpg_url_label: 'URLs de página (una por línea)',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_jpg_usecase_1: 'Tira varias URLs de ayuda o tickets y saca capturas JPEG para el chat sin abrir cada pestaña.',
	tool_batch_convert_web_pages_to_jpg_usecase_2: 'Captura la misma página pública a 390 (móvil) y 1280 (escritorio) para comparar la primera pantalla antes de una revisión.',
	tool_batch_convert_web_pages_to_jpg_usecase_3: 'Deja los PDF A4 de archivo en Convertir varias páginas web a PDF; usa esta página cuando necesites imágenes desde una lista de URLs.',
	tool_batch_convert_web_pages_to_jpg_usecases_title: 'Buenos encajes',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: 'Escritorio 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: 'Ancho de vista',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: 'Móvil 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: 'Tableta 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'Segundos extra después de que las imágenes empiecen a cargar. El valor por defecto es 1. Súbelo si el JPEG muestra cajas vacías.',
	tool_batch_convert_web_pages_to_jpg_wait_label: 'Espera de carga (s)',
};

export default es;
