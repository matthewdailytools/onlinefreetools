/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / es).
 * H1 当地检索句：Convertir varias páginas web a PDF.
 * IG frente a JPG: A4 vertical paginado para imprimir, no captura de viewport.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Pega URLs públicas y conviértelas en PDF A4 vertical, paginados para imprimir y leer página a página — no un JPEG infinito. Las filas que fallen se omiten; las que salgan van a un ZIP. Cada dirección se pide una vez al servidor y no se guarda. ¿Capturas para el chat o comparar móvil y escritorio? Usa Convertir varias páginas web a JPG.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Marco oculto de captura',
	tool_batch_convert_web_pages_to_pdf_clear: 'Borrar',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Archivo',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Estado',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Convertir todo',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Guarda una lista de URLs como PDF A4 vertical para imprimir — ZIP; no es una captura de pantalla.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Convertir varias páginas web a PDF: la lista de URLs sale en A4 vertical, lista para imprimir y leer por páginas, no un JPEG alto. Pasos: pega la lista, Convertir todo, Descargar ZIP. Ejemplo: dos políticas se vuelven dos PDF. Cada URL se pide una vez y no se guarda. HTML suelto: Convertir HTML a PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Descargar ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Pega al menos una URL de página.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Esta página no se pudo pasar a PDF. Omitida.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'La biblioteca de conversión no cargó. Actualiza e inténtalo de nuevo.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'Como máximo 10 URLs. Las líneas de más no se añadieron.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'No se pudo cargar esa URL. Revisa la dirección o el sitio bloquea la petición.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Esa línea no es una URL http(s) válida. Omitida.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Cargar ejemplo rellena una ayuda y una política de example.com, arma dos PDF A4 locales con salto de página CSS (sin visitar el sitio) y activa Descargar ZIP. Convertir todo sí recupera las direcciones que pegaste. El CSS de impresión cambia dónde se corta cada hoja.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Ejemplo',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'El papel es siempre A4 vertical. Las páginas largas se parten con reglas CSS de salto (y un respaldo clásico). No es una hoja infinita. ¿Quieres una captura larga? Usa Convertir varias páginas web a JPG.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'La hermana JPG recorta un JPEG por URL al ancho que elijas (1280 / 768 / 390), con calidad y página completa o primera pantalla. Aquí cada URL se parte en hojas A4 para imprimir. Misma lista, otro artefacto.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Esta página es una lista de URLs: varias webs públicas → PDF A4 sueltos → ZIP. Para un HTML o una dirección con editor, usa Convertir HTML a PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'La conversión ocurre en esta pestaña. Enviamos cada dirección al servidor una vez para traer el HTML; no guardamos las páginas. El PDF se crea en tu dispositivo y aquí se empaqueta.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Cada fila correcta es un PDF aparte en un ZIP. No se fusionan: después de descargar usa Combinar archivos en un PDF si quieres un solo cuadernillo.',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'No. Se quitan los scripts. Login, paywall y apps en JavaScript casi nunca coinciden con el sitio en vivo. El CSS de impresión también puede mover los cortes.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: '¿Qué tamaño de papel usa? ¿Sale una página kilométrica?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: '¿En qué se diferencia de Convertir varias páginas web a JPG?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: '¿En qué se diferencia de Convertir HTML a PDF?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: '¿Se suben y guardan mis páginas en un servidor?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: '¿Sale un PDF único o un ZIP con varios?',
	tool_batch_convert_web_pages_to_pdf_faq_q6: '¿Una web con login o mucho JavaScript se verá igual?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URLs en la cola',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Pega las URLs públicas que quieras archivar o imprimir, conviértelas a PDF A4 vertical y llévate un ZIP de las que salieron.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Pega una URL https por línea. Políticas, centros de ayuda y docs que imprimirías encajan bien.',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Deja la espera cerca de 1 segundo salvo que en alguna hoja A4 las imágenes salgan en blanco.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Pulsa Convertir todo. Cada URL pública se pide una vez y se pagina a A4 vertical (el CSS de saltos puede cortar secciones). Las fallidas se omiten.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: '¿Un HTML con vista previa? Convertir HTML a PDF. ¿Una captura al ancho de pantalla? Convertir varias páginas web a JPG.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Descarga el ZIP cuando al menos una fila haya salido bien. Cargar ejemplo prueba dos páginas A4 locales con salto CSS.',
	tool_batch_convert_web_pages_to_pdf_how_item_6: 'Para unir varios PDF en un cuadernillo, descarga primero y usa Combinar archivos en un PDF.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Cómo funciona',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Progreso del lote',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s} s transcurridos',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Obtener',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Imágenes',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Una URL http(s) por línea, máximo 10. El resultado es A4 vertical con saltos CSS, no un JPEG de página completa. Conversión en serie. Errores omitidos. Los PDF correctos van al ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Cada URL se envía una vez al servidor para traer HTML y no se almacena. El PDF se arma en esta pestaña en A4 vertical.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'La paginación sigue CSS de saltos (con respaldo clásico). El estilo de impresión puede diferir de la pantalla. Páginas muy altas se recortan para no tumbar la pestaña.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Redes privadas, logins y páginas inexistentes fallan esa fila. Nombres repetidos en el ZIP pasan a name (2).pdf. Los scripts se quitan antes.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'No es un rastreador de sitios enteros ni una herramienta de capturas. Pega las URLs públicas que ya tienes.',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'Frente a Convertir varias páginas web a JPG: allí sale un JPEG al viewport. Frente a Convertir HTML a PDF: allí pegas HTML, no una lista. Frente a Combinar archivos en un PDF: aquí no se unen salidas.',
	tool_batch_convert_web_pages_to_pdf_rules_title: 'Reglas que debes esperar',
	tool_batch_convert_web_pages_to_pdf_sample: 'Cargar ejemplo',
	tool_batch_convert_web_pages_to_pdf_status_done: 'Lote listo: revisa la tabla y descarga el ZIP.',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'Obteniendo el HTML…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF listo',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'Omitido',
	tool_batch_convert_web_pages_to_pdf_status_waiting: 'Esperando a que terminen las imágenes…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'Generando el PDF… esta pestaña puede pausarse unos segundos',
	tool_batch_convert_web_pages_to_pdf_status_queued: 'En cola',
	tool_batch_convert_web_pages_to_pdf_status_working: 'Convirtiendo el lote…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} listos · {skip} omitidos',
	tool_batch_convert_web_pages_to_pdf_title: 'Convertir varias páginas web a PDF',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'Una URL http(s) pública por línea, hasta 10. Pedimos cada página una vez y reescribimos CSS e imágenes. Los scripts se quitan; el resultado es A4 vertical con saltos CSS.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URLs de página (una por línea)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Antes de una reunión, archiva varias ayudas o docs públicos como PDF A4 imprimibles, sin abrir Imprimir en cada pestaña.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Empaqueta políticas, términos o avisos en un ZIP para leerlos luego o adjuntarlos al correo.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'El HTML suelto se queda en Convertir HTML a PDF. Las capturas de chat y el contraste móvil/escritorio, en Convertir varias páginas web a JPG. Aquí solo el archivo para imprimir.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Buenos encajes',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Segundos extra después de que las imágenes empiecen a cargar en cada hoja A4. El valor por defecto es 1. Súbelo si el PDF muestra recuadros vacíos.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Espera de carga (s)',
};

export default es;
