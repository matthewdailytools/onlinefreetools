/**
 * i18n tool shard (bulk-convert-images-to-webp / es).
 * H1 sigue la búsqueda «Convertir imágenes a WebP en lote».
 */
import type { SiteLangDict } from '../../../types';

/** Español: recursos de sitio a WebP con pérdida y alfa; tono de herramienta cotidiana. */
const es: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'Cuando el sitio pide WebP, pasa logos PNG y fotos en esta pestaña a .webp con pérdida: si el origen tiene transparencia se conserva, se saltan las que este navegador no sepa escribir y bajas un ZIP. Algunos correos aún rechazan WebP; ahí usa JPG. No salen del dispositivo ni se suben al servidor.',
	tool_bulk_convert_images_to_webp_chip_q80: 'Calidad 0.8',
	tool_bulk_convert_images_to_webp_choose_files: 'Elegir imágenes',
	tool_bulk_convert_images_to_webp_clear: 'Borrar',
	tool_bulk_convert_images_to_webp_col_after: 'Después',
	tool_bulk_convert_images_to_webp_col_before: 'Antes',
	tool_bulk_convert_images_to_webp_col_name: 'Archivo',
	tool_bulk_convert_images_to_webp_col_status: 'Estado',
	tool_bulk_convert_images_to_webp_convert: 'Convertir todo',
	tool_bulk_convert_images_to_webp_desc:
		'Convertir imágenes a WebP en lote con calidad con pérdida y alfa si el origen la tiene; ZIP; no salen del dispositivo, sin subir al servidor.',
	tool_bulk_convert_images_to_webp_description:
		'Convertir imágenes a WebP en lote: mete logos PNG o fotos, recodifica WebP con pérdida en esta pestaña sin un fondo JPEG, salta lo que este navegador no escriba y descarga un ZIP. Pasos: elige el lote, deja la calidad cerca de 0.8, convierte todo. Ejemplo: una foto y un logo con agujero salen como .webp. Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_bulk_convert_images_to_webp_download_zip: 'Descargar ZIP',
	tool_bulk_convert_images_to_webp_drop_hint: 'Suelta JPEG, PNG, WebP o GIF (hasta 20). La conversión queda en esta pestaña.',
	tool_bulk_convert_images_to_webp_empty: 'Añade imágenes primero.',
	tool_bulk_convert_images_to_webp_err_decode: 'No se pudo leer este archivo. Omitido.',
	tool_bulk_convert_images_to_webp_err_encode: 'No se pudo escribir un WebP de este archivo. Omitido.',
	tool_bulk_convert_images_to_webp_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_bulk_convert_images_to_webp_err_too_many: 'Como máximo 20 imágenes. Las de más no se añadieron.',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'Este navegador no devolvió un blob WebP. Esa fila se omite; no se escribe JPEG.',
	tool_bulk_convert_images_to_webp_example:
		'Cargar ejemplo pone un bloque opaco y un logo transparente, escribe dos .webp y activa Descargar ZIP. El logo conserva el agujero.',
	tool_bulk_convert_images_to_webp_example_title: 'Ejemplo',
	tool_bulk_convert_images_to_webp_faq_a1:
		'No. La lectura y la escritura WebP ocurren en esta pestaña. No salen del dispositivo y no se suben al servidor. El ayudante del ZIP puede cargarse desde este sitio; tus fotos siguen en la pestaña.',
	tool_bulk_convert_images_to_webp_faq_a2:
		'Sí. png a webp es esta página: elige los archivos, deja la calidad cerca de 0.8, convierte todo. Los agujeros quedan si el PNG tenía alfa.',
	tool_bulk_convert_images_to_webp_faq_a3:
		'Algunos correos y CMS aún rechazan WebP. Para esos adjuntos usa Convertir imágenes a JPG en lote.',
	tool_bulk_convert_images_to_webp_faq_a4:
		'Esa fila se omite. Esta página no escribe JPEG a escondidas. Prueba Chrome, Edge o Firefox actuales.',
	tool_bulk_convert_images_to_webp_faq_a5:
		'No. Solo el primer fotograma se guarda como WebP estático, y esa fila se anota.',
	tool_bulk_convert_images_to_webp_faq_q1: '¿Las fotos salen de mi ordenador?',
	tool_bulk_convert_images_to_webp_faq_q2: '¿Cómo paso PNG a WebP aquí?',
	tool_bulk_convert_images_to_webp_faq_q3: '¿El correo aceptará estos WebP?',
	tool_bulk_convert_images_to_webp_faq_q4: '¿Y si este navegador no sabe escribir WebP?',
	tool_bulk_convert_images_to_webp_faq_q5: '¿Los GIF animados siguen animados?',
	tool_bulk_convert_images_to_webp_file_count_tpl: '{n} imágenes en la cola',
	tool_bulk_convert_images_to_webp_how_body:
		'Elige las imágenes que deben ser WebP en el sitio, conviértelas aquí sin un fondo JPEG, luego llévate un ZIP de las que salieron bien.',
	tool_bulk_convert_images_to_webp_how_item_1: 'Elige las fotos o stickers PNG que deben ser WebP en el sitio.',
	tool_bulk_convert_images_to_webp_how_item_2: 'Deja la calidad cerca de 0.8 salvo que necesites un archivo más pequeño. No hay fondo JPEG.',
	tool_bulk_convert_images_to_webp_how_item_3: 'Pulsa Convertir todo. Si toBlob no es WebP, esa fila falla en vez de escribir JPEG.',
	tool_bulk_convert_images_to_webp_how_item_4: '¿JPG para el correo? Usa Convertir imágenes a JPG en lote. ¿PNG sin pérdida? Usa Convertir imágenes a PNG en lote.',
	tool_bulk_convert_images_to_webp_how_item_5: 'Descarga el ZIP cuando haya al menos un acierto. Cargar ejemplo ya corrió al abrir.',
	tool_bulk_convert_images_to_webp_how_title: 'Cómo pasar las fotos a WebP',
	tool_bulk_convert_images_to_webp_quality_label: 'Calidad WebP',
	tool_bulk_convert_images_to_webp_rules_body:
		'La salida es siempre WebP. Esta página no aplana la transparencia sobre un fondo JPEG ni cae a JPEG.',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'Se conserva el alfa si el origen lo tiene. Un JPEG no tiene alfa que guardar.',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'La calidad por defecto es 0.8. Bájala solo si el presupuesto del sitio pide un archivo más pequeño.',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'Si este navegador no escribe WebP, esa fila se omite. Fallos de lectura se omiten. Nombres repetidos en el ZIP pasan a nombre (2).webp.',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_bulk_convert_images_to_webp_rules_title: 'Qué esperar',
	tool_bulk_convert_images_to_webp_sample: 'Cargar ejemplo',
	tool_bulk_convert_images_to_webp_status_compressing: 'Pasando el lote a WebP…',
	tool_bulk_convert_images_to_webp_status_done: 'Lote listo: revisa la tabla y descarga el ZIP.',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP listo',
	tool_bulk_convert_images_to_webp_status_skip: 'Omitido',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} listas · {skip} omitidas',
	tool_bulk_convert_images_to_webp_title: 'Convertir imágenes a WebP en lote',
	tool_bulk_convert_images_to_webp_usecase_1: 'Encoger héroes y miniaturas del sitio a WebP sin un desplegable de formato.',
	tool_bulk_convert_images_to_webp_usecase_2: 'png a webp para stickers que ya tienen agujeros.',
	tool_bulk_convert_images_to_webp_usecase_3: 'Quédate en JPEG para el correo si el cliente aún rechaza WebP.',
	tool_bulk_convert_images_to_webp_usecases_title: 'Cuándo viene bien',
	tool_bulk_convert_images_to_webp_warn_anim: 'Animaciones: solo se guarda el primer fotograma como WebP estático.',
	tool_bulk_convert_images_to_webp_warn_edge: 'Hay un archivo más ancho o más alto que 8192 px; irá lento.',
	tool_bulk_convert_images_to_webp_warn_large: 'Hay un archivo de más de 25 MB; esta pestaña puede quedarse sin memoria.',
};

export default es;
