/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / es).
 * H1 当地检索句：Convertir varias páginas web a PDF（不是英模 Batch convert…）。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Pega una dirección pública por línea, convierte cada página a PDF A4 en esta pestaña, omite las filas que fallen y descarga un ZIP. Cada URL se recupera una vez en el servidor y no se guarda; la conversión permanece en tu dispositivo.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Marco oculto de captura',
	tool_batch_convert_web_pages_to_pdf_clear: 'Borrar',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Archivo',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Estado',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Convertir todo',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Convierte varias páginas web a PDF desde una lista de URLs y descarga un ZIP; cada dirección se recupera una vez y no se almacena.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Convertir varias páginas web a PDF: pega una lista de URLs (una https por línea, hasta 10), genera un PDF A4 en esta pestaña, omite errores y descarga un ZIP. Pasos: pega la lista, pulsa Convertir todo, revisa la tabla, descarga. Ejemplo: dos páginas de ayuda y política de muestra salen como dos PDF en un ZIP. Cada URL se pide una vez al servidor y no se guarda; la conversión se queda en el dispositivo. Si solo tienes un fragmento HTML, usa Convertir HTML a PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Descargar ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Pega al menos una URL de página.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Esta página no se pudo pasar a PDF. Omitida.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'La biblioteca de conversión no cargó. Actualiza e inténtalo de nuevo.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'Como máximo 10 URLs. Las líneas de más no se añadieron.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'No se pudo cargar esa URL. Revisa la dirección o el sitio bloquea la petición.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Esa línea no es una URL http(s) válida. Omitida.',
	tool_batch_convert_web_pages_to_pdf_example:
		'Cargar ejemplo rellena dos URLs de example.com, arma dos PDF con HTML local (sin visitar el sitio en vivo) y activa Descargar ZIP. Convertir todo sí recupera las direcciones que pegaste.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Ejemplo',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'La conversión ocurre en esta pestaña. Al convertir una lista enviamos cada dirección al servidor una vez para traer el HTML; no guardamos las páginas. Los PDF se crean en tu dispositivo y aquí se empaquetan en ZIP.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'Esta página sirve para una lista de URLs (varias webs a PDF y luego ZIP). Para un solo HTML o una dirección con editor de vista previa, usa Convertir HTML a PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'No. Se quitan los scripts. Muros de login, paywalls y apps renderizadas con JavaScript casi nunca coinciden con el sitio en vivo. El CSS de impresión también puede diferir.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Cada fila correcta es un PDF aparte dentro de un ZIP. Aquí no se fusionan en un solo archivo: después de descargar usa Combinar archivos en un PDF si lo necesitas.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Hasta 10 URLs http(s). El resto se ignora. Las filas fallidas se omiten para que el lote siga.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: '¿Se suben y guardan mis páginas en un servidor?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: '¿En qué se diferencia de Convertir HTML a PDF?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: '¿Una web con login o mucho JavaScript se verá igual?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: '¿Sale un PDF único o un ZIP con varios?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: '¿Cuántas URLs puedo convertir de una vez?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URLs en la cola',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Pega la lista de páginas públicas, conviértelas una tras otra y llévate un ZIP con los PDF que sí salieron.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Pega una URL https por línea (centro de ayuda o políticas encajan bien).',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Deja la espera cerca de 1 segundo salvo que las imágenes salgan en blanco.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Pulsa Convertir todo. Cada URL pública se pide una vez; las fallidas se omiten.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: '¿Solo un fragmento HTML, no una lista? Usa Convertir HTML a PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_5: 'Descarga el ZIP cuando al menos una fila haya salido bien. El ejemplo ya corrió al abrir.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Cómo funciona',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Progreso del lote',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: '{s} s transcurridos',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Obtener',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Imágenes',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Una URL http(s) por línea, máximo 10. Conversión en serie. Errores omitidos. Los PDF correctos van al ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Cada URL se envía una vez al servidor para traer HTML y no se almacena. El PDF se arma en esta pestaña.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Redes privadas, logins y páginas inexistentes fallan esa fila. El resto del lote sigue.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Nombres repetidos en el ZIP pasan a name (2).pdf. Los scripts se quitan antes de capturar.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'No es un rastreador de sitios enteros. Pega las URLs que ya tienes.',
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
		'Una URL http(s) pública por línea, hasta 10. Pedimos cada página una vez y reescribimos CSS e imágenes. Los scripts se quitan antes del PDF.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URLs de página (una por línea)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Guardar varias páginas de ayuda o documentación como PDF sin abrirlas una a una.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Archivar una lista de URLs de políticas públicas en un ZIP para leerlas después.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'El HTML suelto se queda en Convertir HTML a PDF; esta página es para cuando ya tienes muchos enlaces.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Buenos encajes',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Segundos extra después de que las imágenes empiecen a cargar. El valor por defecto es 1. Súbelo si el PDF muestra recuadros vacíos.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Espera de carga (s)',
};

export default es;
