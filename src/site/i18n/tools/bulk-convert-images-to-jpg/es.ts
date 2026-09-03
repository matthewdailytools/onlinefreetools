/**
 * i18n tool shard (bulk-convert-images-to-jpg / es).
 * H1 sigue la búsqueda «Convertir imágenes a JPG en lote».
 */
import type { SiteLangDict } from '../../../types';

/** Español: formularios que solo aceptan JPG; tono de herramienta cotidiana. */
const es: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'Cuando el adjunto tiene que ser .jpg, pasa un lote de fotos, logos PNG y HEIC del móvil en esta pestaña: un fondo compartido para la transparencia, se saltan las que fallen y bajas un ZIP. No salen del dispositivo ni se suben al servidor.',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: 'Fondo blanco',
	tool_bulk_convert_images_to_jpg_choose_files: 'Elegir imágenes',
	tool_bulk_convert_images_to_jpg_clear: 'Borrar',
	tool_bulk_convert_images_to_jpg_col_after: 'Después',
	tool_bulk_convert_images_to_jpg_col_before: 'Antes',
	tool_bulk_convert_images_to_jpg_col_name: 'Archivo',
	tool_bulk_convert_images_to_jpg_col_status: 'Estado',
	tool_bulk_convert_images_to_jpg_convert: 'Convertir todo',
	tool_bulk_convert_images_to_jpg_desc:
		'Convertir imágenes a JPG en lote con un fondo compartido y bajar un ZIP; no salen del dispositivo, sin subir al servidor.',
	tool_bulk_convert_images_to_jpg_description:
		'Convertir imágenes a JPG en lote: mete fotos, logos PNG o disparos HEIC, pinta un fondo detrás de la transparencia, escribe .jpg aquí, salta fallos y descarga un ZIP. Pasos: elige el lote, deja el fondo blanco salvo que pidan negro, convierte todo. Ejemplo: una foto y un logo hueco sobre blanco salen como dos .jpg. Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_bulk_convert_images_to_jpg_download_zip: 'Descargar ZIP',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'Suelta PNG, JPEG, WebP, GIF o HEIC (hasta 20). La conversión queda en esta pestaña.',
	tool_bulk_convert_images_to_jpg_empty: 'Añade imágenes primero.',
	tool_bulk_convert_images_to_jpg_err_decode: 'No se pudo leer este archivo (HEIC puede pedir otro navegador). Omitido.',
	tool_bulk_convert_images_to_jpg_err_encode: 'No se pudo escribir un .jpg de este archivo. Omitido.',
	tool_bulk_convert_images_to_jpg_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_bulk_convert_images_to_jpg_err_too_many: 'Como máximo 20 imágenes. Las de más no se añadieron.',
	tool_bulk_convert_images_to_jpg_example:
		'Cargar ejemplo pone un bloque opaco y un logo transparente, los pinta sobre blanco, deja dos nombres .jpg y activa Descargar ZIP.',
	tool_bulk_convert_images_to_jpg_example_title: 'Ejemplo',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'No. La lectura y la escritura .jpg ocurren en esta pestaña. No salen del dispositivo y no se suben al servidor. El ayudante del ZIP puede cargarse desde un CDN; tus fotos siguen en la pestaña.',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'Sí. PNG a JPG es esto: elige los archivos, deja el fondo blanco para que los huecos no se vuelvan negros, convierte todo.',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'Si el navegador no lee HEIC, esa fila se omite y el resto entra al ZIP. Prueba Safari o pásalo antes en el teléfono.',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'No. JPEG y JPG son la misma salida. Los archivos se llaman .jpg.',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'Aquí solo cambia el sufijo a JPG. Encoger fotos de ficha hacia 200 KB es Comprimir fotos de producto en lote.',
	tool_bulk_convert_images_to_jpg_faq_q1: '¿Las fotos salen de mi ordenador?',
	tool_bulk_convert_images_to_jpg_faq_q2: '¿Cómo paso PNG a JPG aquí?',
	tool_bulk_convert_images_to_jpg_faq_q3: '¿Y si HEIC a JPG no funciona?',
	tool_bulk_convert_images_to_jpg_faq_q4: '¿Hace falta otra herramienta «JPEG» aparte de JPG?',
	tool_bulk_convert_images_to_jpg_faq_q5: '¿Esto comprime las fotos?',
	tool_bulk_convert_images_to_jpg_file_count_tpl: '{n} imágenes en la cola',
	tool_bulk_convert_images_to_jpg_how_body:
		'Si el formulario pide JPG, deja las fotos en cola, comparte un fondo para los píxeles transparentes, conviértelas aquí y llévate el ZIP de las que salieron bien.',
	tool_bulk_convert_images_to_jpg_how_item_1: 'Elige las fotos, PNG o HEIC que el formulario solo acepta como JPG.',
	tool_bulk_convert_images_to_jpg_how_item_2: 'Deja Fondo blanco salvo que pidan negro. JPG no guarda agujeros.',
	tool_bulk_convert_images_to_jpg_how_item_3: 'Baja un poco la calidad si el correo debe pesar poco; la tarea sigue siendo pasar a JPG, no cazar 200 KB.',
	tool_bulk_convert_images_to_jpg_how_item_4: 'Pulsa Convertir todo. Un HEIC ilegible se omite y el resto sigue en .jpg.',
	tool_bulk_convert_images_to_jpg_how_item_5: 'Descarga el ZIP cuando haya al menos un acierto. Cargar ejemplo ya corrió al abrir.',
	tool_bulk_convert_images_to_jpg_how_title: 'Cómo pasar las fotos a JPG',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: 'Negro',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: 'Personalizado',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: 'Fondo detrás de la transparencia',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: 'Blanco',
	tool_bulk_convert_images_to_jpg_quality_label: 'Calidad JPG',
	tool_bulk_convert_images_to_jpg_rules_body:
		'JPG no tiene canal alfa. Cada archivo se pinta sobre el mismo fondo y se guarda como .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'Los nombres de salida terminan siempre en .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'Los píxeles transparentes se rellenan con el fondo compartido antes de guardar. No hay un modo «sin fondo» que deje manchas negras sin explicación.',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'Un fallo de lectura o escritura omite esa fila. Nombres repetidos en el ZIP pasan a nombre (2).jpg. Un GIF animado usa el primer fotograma.',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_bulk_convert_images_to_jpg_rules_title: 'Qué esperar',
	tool_bulk_convert_images_to_jpg_sample: 'Cargar ejemplo',
	tool_bulk_convert_images_to_jpg_status_compressing: 'Pasando el lote a JPG…',
	tool_bulk_convert_images_to_jpg_status_done: 'Lote listo: revisa la tabla y descarga el ZIP.',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG listo',
	tool_bulk_convert_images_to_jpg_status_skip: 'Omitido',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} listas · {skip} omitidas',
	tool_bulk_convert_images_to_jpg_title: 'Convertir imágenes a JPG en lote',
	tool_bulk_convert_images_to_jpg_usecase_1: 'Un alta que rechaza PNG y solo admite adjuntos JPG.',
	tool_bulk_convert_images_to_jpg_usecase_2: 'Mandar por correo un paquete de fotos de producto que la imprenta pide en .jpg.',
	tool_bulk_convert_images_to_jpg_usecase_3: 'Fotos HEIC del móvil que Windows no abre: convierte las que este navegador sepa leer.',
	tool_bulk_convert_images_to_jpg_usecases_title: 'Cuándo viene bien',
	tool_bulk_convert_images_to_jpg_warn_anim: 'Animaciones: solo se convierte el primer fotograma.',
	tool_bulk_convert_images_to_jpg_warn_edge: 'Hay un archivo más ancho o más alto que 8192 px; irá lento.',
	tool_bulk_convert_images_to_jpg_warn_large: 'Hay un archivo de más de 25 MB; esta pestaña puede quedarse sin memoria.',
};

export default es;
