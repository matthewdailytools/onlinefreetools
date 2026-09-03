/**
 * i18n tool shard (bulk-convert-images-to-png / es).
 * H1 sigue la búsqueda «Convertir imágenes a PNG en lote».
 */
import type { SiteLangDict } from '../../../types';

/** Español: capturas y logos que deben ser PNG y conservar alpha; tono de herramienta cotidiana. */
const es: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'Cuando el lote tiene que ser PNG, pasa fotos JPEG, capturas y logos con agujero en esta pestaña: si el origen tiene transparencia se conserva, se saltan las que fallen y bajas un ZIP. Un JPEG a PNG suele pesar más; la tabla lo marca. No salen del dispositivo ni se suben al servidor.',
	tool_bulk_convert_images_to_png_choose_files: 'Elegir imágenes',
	tool_bulk_convert_images_to_png_clear: 'Borrar',
	tool_bulk_convert_images_to_png_col_after: 'Después',
	tool_bulk_convert_images_to_png_col_before: 'Antes',
	tool_bulk_convert_images_to_png_col_name: 'Archivo',
	tool_bulk_convert_images_to_png_col_status: 'Estado',
	tool_bulk_convert_images_to_png_convert: 'Convertir todo',
	tool_bulk_convert_images_to_png_desc:
		'Convertir imágenes a PNG en lote, conservar la transparencia si el origen la tiene y bajar un ZIP; no salen del dispositivo, sin subir al servidor.',
	tool_bulk_convert_images_to_png_description:
		'Convertir imágenes a PNG en lote: mete JPEG o capturas, reescribe como PNG en esta pestaña sin un fondo JPEG, salta fallos y descarga un ZIP. Pasos: elige el lote, convierte todo, mira la tabla si un JPEG creció como PNG. Ejemplo: una foto opaca y un logo con agujero salen como .png. Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_bulk_convert_images_to_png_download_zip: 'Descargar ZIP',
	tool_bulk_convert_images_to_png_drop_hint: 'Suelta JPEG, PNG, WebP o GIF (hasta 20). La conversión queda en esta pestaña.',
	tool_bulk_convert_images_to_png_empty: 'Añade imágenes primero.',
	tool_bulk_convert_images_to_png_err_decode: 'No se pudo leer este archivo. Omitido.',
	tool_bulk_convert_images_to_png_err_encode: 'No se pudo escribir un PNG de este archivo. Omitido.',
	tool_bulk_convert_images_to_png_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_bulk_convert_images_to_png_err_too_many: 'Como máximo 20 imágenes. Las de más no se añadieron.',
	tool_bulk_convert_images_to_png_example:
		'Cargar ejemplo pone un bloque JPEG y un logo transparente, escribe dos .png y activa Descargar ZIP. La fila JPEG suele mostrar un PNG más grande.',
	tool_bulk_convert_images_to_png_example_title: 'Ejemplo',
	tool_bulk_convert_images_to_png_faq_a1:
		'No. La lectura y la escritura PNG ocurren en esta pestaña. No salen del dispositivo y no se suben al servidor. El ayudante del ZIP puede cargarse desde un CDN; tus fotos siguen en la pestaña.',
	tool_bulk_convert_images_to_png_faq_a2:
		'No. JPEG nunca guardó agujeros. jpg a png te da un envoltorio PNG; el fondo sigue opaco. Los huecos de verdad solo sobreviven si el origen ya tenía alfa.',
	tool_bulk_convert_images_to_png_faq_a3:
		'PNG es sin pérdida. Un JPEG de foto suele crecer. La tabla marca «más grande». Reduce píxeles en Comprimir imágenes PNG en lote, o quédate en JPEG si no necesitas PNG.',
	tool_bulk_convert_images_to_png_faq_a4:
		'Comprimir PNG es para archivos que ya son PNG y deben seguir siéndolo, pero más pequeños. Esta página cambia el sufijo a PNG.',
	tool_bulk_convert_images_to_png_faq_a5:
		'No. Solo el primer fotograma se guarda como PNG estático, y esa fila se anota.',
	tool_bulk_convert_images_to_png_faq_q1: '¿Las fotos salen de mi ordenador?',
	tool_bulk_convert_images_to_png_faq_q2: '¿JPG a PNG recupera la transparencia?',
	tool_bulk_convert_images_to_png_faq_q3: '¿Por qué el PNG pesa más que el JPEG?',
	tool_bulk_convert_images_to_png_faq_q4: '¿En qué se diferencia de comprimir PNG?',
	tool_bulk_convert_images_to_png_faq_q5: '¿Los GIF animados siguen animados?',
	tool_bulk_convert_images_to_png_file_count_tpl: '{n} imágenes en la cola',
	tool_bulk_convert_images_to_png_how_body:
		'Elige las imágenes que deben ser PNG, conviértelas aquí sin pintar un fondo, luego llévate un ZIP de las que salieron bien.',
	tool_bulk_convert_images_to_png_how_item_1: 'Elige las capturas o logos que tienen que ser PNG.',
	tool_bulk_convert_images_to_png_how_item_2: 'No hay control de fondo blanco: los agujeros siguen si el origen tiene alfa.',
	tool_bulk_convert_images_to_png_how_item_3: 'Pulsa Convertir todo. Un JPEG sale PNG opaco; la tabla avisa si creció.',
	tool_bulk_convert_images_to_png_how_item_4: '¿Quieres JPG? Usa Convertir imágenes a JPG en lote. ¿PNG más pequeño? Usa Comprimir imágenes PNG en lote.',
	tool_bulk_convert_images_to_png_how_item_5: 'Descarga el ZIP cuando haya al menos un acierto. Cargar ejemplo ya corrió al abrir.',
	tool_bulk_convert_images_to_png_how_title: 'Cómo pasar las fotos a PNG',
	tool_bulk_convert_images_to_png_max_edge_label: 'Lado máximo',
	tool_bulk_convert_images_to_png_resize_on: 'Limitar el lado más largo',
	tool_bulk_convert_images_to_png_rules_body:
		'La salida es siempre PNG. Esta página no aplana la transparencia sobre un fondo JPEG.',
	tool_bulk_convert_images_to_png_rules_item_1:
		'Se conserva el alfa si el origen lo tiene. Un JPEG no tiene alfa que guardar.',
	tool_bulk_convert_images_to_png_rules_item_2:
		'El recorte opcional del lado largo está apagado por defecto para no redimensionar a escondidas.',
	tool_bulk_convert_images_to_png_rules_item_3:
		'Si el PNG es más grande que el original, la fila lo dice. Fallos de lectura se omiten. Nombres repetidos en el ZIP pasan a nombre (2).png.',
	tool_bulk_convert_images_to_png_rules_item_4:
		'Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_bulk_convert_images_to_png_rules_title: 'Qué esperar',
	tool_bulk_convert_images_to_png_sample: 'Cargar ejemplo',
	tool_bulk_convert_images_to_png_status_compressing: 'Pasando el lote a PNG…',
	tool_bulk_convert_images_to_png_status_done: 'Lote listo: revisa la tabla y descarga el ZIP.',
	tool_bulk_convert_images_to_png_status_larger: 'Más grande que el original',
	tool_bulk_convert_images_to_png_status_ok: 'PNG listo',
	tool_bulk_convert_images_to_png_status_skip: 'Omitido',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} listas · {larger} más grandes · {skip} omitidas',
	tool_bulk_convert_images_to_png_title: 'Convertir imágenes a PNG en lote',
	tool_bulk_convert_images_to_png_usecase_1: 'Archivar capturas como PNG para un pase de diseño.',
	tool_bulk_convert_images_to_png_usecase_2: 'Unificar stickers como PNG cuando el origen ya tiene agujeros.',
	tool_bulk_convert_images_to_png_usecase_3: 'jpg a png cuando el CMS solo acepta PNG — espera un archivo de foto más grande.',
	tool_bulk_convert_images_to_png_usecases_title: 'Cuándo viene bien',
	tool_bulk_convert_images_to_png_warn_anim: 'Animaciones: solo se guarda el primer fotograma como PNG estático.',
	tool_bulk_convert_images_to_png_warn_edge: 'Hay un archivo más ancho o más alto que 8192 px; irá lento.',
	tool_bulk_convert_images_to_png_warn_large: 'Hay un archivo de más de 25 MB; esta pestaña puede quedarse sin memoria.',
	tool_bulk_convert_images_to_png_warn_larger: 'Algunos PNG pesan más que el original. Es normal con JPEG de foto.',
};

export default es;
