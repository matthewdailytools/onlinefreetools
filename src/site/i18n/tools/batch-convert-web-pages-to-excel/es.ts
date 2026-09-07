/**
 * i18n tool shard (batch-convert-web-pages-to-excel / es).
 * H1: Convertir páginas web a Excel por lotes.
 * IG: celdas de <table> HTML en un solo libro — no captura, no PDF A4, no prosa Word.
 */
import type { SiteLangDict } from '../../../types';

/** Diccionario visible del conversor web→Excel (es). */
const es: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: 'Ajustes avanzados (opcional)',
	tool_batch_convert_web_pages_to_excel_article:
		'Saca las tablas HTML de una lista de URLs públicas a un libro Excel: cada tabla pasa a una hoja con celdas que puedes filtrar. El texto corrido y las capturas no entran. No es un PDF A4 ni un documento Word. Cada dirección se pide una vez al servidor y no se guarda. El HTML pegado se queda en esta pestaña. ¿Impresión? Convertir páginas web a PDF por lotes. ¿Títulos editables? Convertir páginas HTML a un documento Word.',
	tool_batch_convert_web_pages_to_excel_clear: 'Borrar',
	tool_batch_convert_web_pages_to_excel_col_file: 'Hojas',
	tool_batch_convert_web_pages_to_excel_col_status: 'Estado',
	tool_batch_convert_web_pages_to_excel_col_url: 'URL',
	tool_batch_convert_web_pages_to_excel_convert: 'Convertir todo',
	tool_batch_convert_web_pages_to_excel_desc:
		'Saca tablas HTML de una lista de URLs a un libro Excel; no es captura, ni PDF, ni Word.',
	tool_batch_convert_web_pages_to_excel_description:
		'Convertir páginas web a Excel por lotes: extrae tablas HTML a un .xlsx (HTML a Excel / tabla HTML a Excel). No es captura ni PDF A4. Pasos: pegar URLs, Convertir todo, Descargar Excel. Ejemplo: lista de precios e inventario salen en dos hojas. La URL se pide una vez y no se guarda.',
	tool_batch_convert_web_pages_to_excel_download: 'Descargar Excel',
	tool_batch_convert_web_pages_to_excel_empty: 'Pega al menos una URL, o cambia a Pegar HTML.',
	tool_batch_convert_web_pages_to_excel_err_convert: 'Esa página no tiene una tabla HTML usable. Omitida.',
	tool_batch_convert_web_pages_to_excel_err_html_empty: 'Pega primero HTML que incluya un <table>.',
	tool_batch_convert_web_pages_to_excel_err_load: 'No se cargó la librería de Excel. Actualiza e inténtalo.',
	tool_batch_convert_web_pages_to_excel_err_too_many: 'Como máximo 10 URLs. Las líneas de más no se añadieron.',
	tool_batch_convert_web_pages_to_excel_err_url: 'No se pudo cargar esa URL. Revisa el enlace o el sitio bloquea la petición.',
	tool_batch_convert_web_pages_to_excel_err_url_empty: 'Esa línea no es una URL http(s) válida. Omitida.',
	tool_batch_convert_web_pages_to_excel_example:
		'Cargar ejemplo rellena una lista de precios y un inventario, arma un libro local con dos tablas HTML (sin visitar el sitio real) y activa Descargar Excel. Convertir todo sí recupera las direcciones que pegaste. Pegar HTML usa el mismo mapeo de tablas sin URL.',
	tool_batch_convert_web_pages_to_excel_example_title: 'Ejemplo',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'El HTML pegado no sale de esta pestaña. Si conviertes URLs, enviamos cada dirección una vez para pedir el HTML y no lo guardamos. El .xlsx se construye en tu navegador.',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'La hermana Word pasa títulos, listas y párrafos a un .docx editable. Esta página ignora la prosa y solo copia celdas de tablas HTML a hojas Excel. Misma petición, otro archivo.',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG son capturas de viewport (ZIP de imágenes). PDF pagina A4 para imprimir. Aquí salen números y texto que filtras en Excel: un libro, no un ZIP de fotos.',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'Sí. Una sola línea basta para página web a Excel. Las URLs que funcionan comparten un .xlsx con varias hojas.',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'No. No hay OCR ni lector de PDF. Convierte la página HTML o pega el marcado de la tabla. Si ya tienes CSV, usa CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'Usa la pestaña Pegar HTML (HTML a Excel / tabla HTML a Excel). Chrome página completa / .mhtml no entra: exporta HTML o copia la tabla. Esto no es Excel en la web.',
	tool_batch_convert_web_pages_to_excel_faq_q1: '¿Se suben y guardan mis páginas?',
	tool_batch_convert_web_pages_to_excel_faq_q2: '¿En qué se diferencia de Convertir páginas HTML a un documento Word?',
	tool_batch_convert_web_pages_to_excel_faq_q3: '¿Y respecto a JPG, PNG o PDF por lotes?',
	tool_batch_convert_web_pages_to_excel_faq_q4: '¿Puedo convertir una sola URL?',
	tool_batch_convert_web_pages_to_excel_faq_q5: '¿Sacais tablas de un PDF?',
	tool_batch_convert_web_pages_to_excel_faq_q6: 'Tengo HTML o una tabla HTML, no una URL. ¿Excel online o mhtml?',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: '{n} URLs en la cola',
	tool_batch_convert_web_pages_to_excel_how_body:
		'Pega URLs públicas que tengan tablas HTML, pulsa Convertir todo y descarga un libro Excel. El texto corrido se salta; solo las celdas <table> pasan a hojas.',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'Una URL https por línea (listas de precios y tablas HTML públicas encajan). Una línea basta para página web a Excel.',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'Pulsa Convertir todo. Cada URL pública se pide una vez; las páginas sin tabla usable se omiten y el resto sigue.',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'¿Tienes el marcado y no la URL (HTML a Excel / tabla HTML a Excel)? Abre Pegar HTML, pega el código y Convertir todo.',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'¿Una hoja por URL en vez de por tabla, o quieres las tablas minúsculas? Abre Ajustes avanzados.',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'¿PDF A4? Convertir páginas web a PDF por lotes. ¿Títulos? Convertir páginas HTML a un documento Word. ¿Ya tienes CSV? CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_how_item_6: 'Descargar Excel cuando se haya mapeado al menos una tabla.',
	tool_batch_convert_web_pages_to_excel_how_title: 'Cómo usarlo',
	tool_batch_convert_web_pages_to_excel_html_hint: 'Pega un fragmento o un HTML completo con <table>. El mapeo se queda en esta pestaña; no se sube.',
	tool_batch_convert_web_pages_to_excel_html_label: 'HTML con tablas',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>Cant.</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: 'Hojas',
	tool_batch_convert_web_pages_to_excel_layout_table: 'Una hoja por tabla HTML',
	tool_batch_convert_web_pages_to_excel_layout_url: 'Una hoja por URL (apilar tablas)',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'Por defecto, una hoja por tabla HTML en un solo libro. Apilar pone todas las tablas de una URL en una hoja con una fila vacía entre ellas. Las tablas minúsculas (menos de dos filas o dos columnas) se omiten para no llenar el archivo de menús.',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'Solo se copian celdas de <table> HTML. Una URL http(s) por línea, hasta 10. Las filas fallidas se omiten. Las tablas buenas comparten un .xlsx. No es una captura renombrada ni un PDF.',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'Cada URL se envía una vez para pedir HTML y no se guarda. El HTML pegado no sale de la pestaña. El libro se arma aquí.',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'Redes privadas, inicios de sesión y páginas sin <table> fallan esa fila. El resto sigue.',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan inserta celdas vacías. rowspan se aplana (cada fila es independiente). Se quitan los scripts, así que una tabla solo-JS saldrá vacía.',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'No es un crawler del sitio entero ni Excel para la web. Pega las URLs o el HTML que ya tienes. Los nombres de hoja cortan a 31 caracteres.',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'Frente a Convertir páginas HTML a Word: solo tablas, no títulos/listas. Frente a JPG/PNG/PDF por lotes: celdas en un libro, no ZIP de rasters ni A4. Frente a CSV ↔ JSON: la entrada es una página, no un archivo que ya tienes.',
	tool_batch_convert_web_pages_to_excel_rules_title: 'Qué debes esperar',
	tool_batch_convert_web_pages_to_excel_sample: 'Cargar ejemplo',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: 'Omitir tablas minúsculas (menos de 2×2)',
	tool_batch_convert_web_pages_to_excel_status_converting: 'Mapeando tablas HTML…',
	tool_batch_convert_web_pages_to_excel_status_done: 'Lote terminado — mira la tabla y descarga Excel.',
	tool_batch_convert_web_pages_to_excel_status_fetching: 'Pidiendo el HTML de la página…',
	tool_batch_convert_web_pages_to_excel_status_ok: 'Tablas mapeadas',
	tool_batch_convert_web_pages_to_excel_status_queued: 'En cola',
	tool_batch_convert_web_pages_to_excel_status_skip: 'Omitida',
	tool_batch_convert_web_pages_to_excel_status_working: 'Convirtiendo el lote…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} listas · {skip} omitidas',
	tool_batch_convert_web_pages_to_excel_tab_html: 'Pegar HTML',
	tool_batch_convert_web_pages_to_excel_tab_urls: 'URLs de página',
	tool_batch_convert_web_pages_to_excel_title: 'Convertir páginas web a Excel por lotes',
	tool_batch_convert_web_pages_to_excel_url_hint: 'Una URL http(s) pública por línea, hasta 10. Pedimos cada página una vez. Se quitan los scripts. Solo las tablas HTML pasan a hojas.',
	tool_batch_convert_web_pages_to_excel_url_label: 'URLs de página (una por línea)',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'Archiva una lista de precios o SKU en HTML dentro de Excel para que las cantidades sigan siendo números filtrables — un PNG sería solo píxeles.',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'Junta tablas de parámetros de dos ayudas en un libro y añade tu SUM. Word dejaría los títulos como prosa.',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'Deja la impresión A4 en Convertir páginas web a PDF por lotes y el CSV que ya tienes en CSV ↔ JSON; usa esta página cuando la fuente sigue siendo una tabla de página.',
	tool_batch_convert_web_pages_to_excel_usecases_title: 'Cuándo encaja',
};

export default es;
