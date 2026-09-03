/**
 * Fragmento i18n (bulk-compress-png-images / es).
 * El H1 sigue la búsqueda «Comprimir imágenes PNG en lote».
 */
import type { SiteLangDict } from '../../../types';

/** Español: logos y recortes PNG que deben conservar transparencia. */
const es: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'Comprime en esta pestaña una carpeta de logos o recortes PNG, conserva la transparencia, omite los fallos y descarga un ZIP. Los archivos no salen del dispositivo y van sin subir al servidor.',
	tool_bulk_compress_png_images_chip_1024: '1024 px',
	tool_bulk_compress_png_images_chip_reencode: 'Solo recodificar',
	tool_bulk_compress_png_images_choose_files: 'Elegir imágenes PNG',
	tool_bulk_compress_png_images_clear: 'Borrar',
	tool_bulk_compress_png_images_col_after: 'Después',
	tool_bulk_compress_png_images_col_before: 'Antes',
	tool_bulk_compress_png_images_col_name: 'Archivo',
	tool_bulk_compress_png_images_col_status: 'Estado',
	tool_bulk_compress_png_images_compress: 'Comprimir todo',
	tool_bulk_compress_png_images_desc:
		'Comprimir PNG en lote, conservar transparencia, bajar un ZIP — no salen del dispositivo, sin subir al servidor.',
	tool_bulk_compress_png_images_description:
		'Comprimir imágenes PNG en lote: añade logos o recortes de interfaz, conserva la transparencia, recorta si hace falta el lado más largo, vuelve a guardar PNG en esta pestaña, omite fallos y descarga un ZIP. Pasos: elige el lote, deja el chip de 1024 px si los iconos deben encogerse, comprime todo y mira la tabla. Ejemplo: dos dameros de muestra siguen siendo PNG con huecos. Los archivos no salen del dispositivo y van sin subir al servidor.',
	tool_bulk_compress_png_images_download_zip: 'Descargar ZIP',
	tool_bulk_compress_png_images_drop_hint: 'Suelta PNG (hasta 20). Otras imágenes también salen como PNG. Se queda en esta pestaña.',
	tool_bulk_compress_png_images_empty: 'Añade primero imágenes PNG.',
	tool_bulk_compress_png_images_err_decode: 'No se pudo decodificar esta imagen. Se omitió.',
	tool_bulk_compress_png_images_err_encode: 'No se pudo guardar esta imagen como PNG. Se omitió.',
	tool_bulk_compress_png_images_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba otro navegador actual.',
	tool_bulk_compress_png_images_err_too_many: 'Como máximo 20 archivos a la vez. Los extra no se añadieron.',
	tool_bulk_compress_png_images_example:
		'Cargar ejemplo mete dos PNG de damero transparente, los recodifica como PNG, llena la tabla y activa Descargar ZIP. Los nombres repetidos pasan a name (2).png.',
	tool_bulk_compress_png_images_example_title: 'Ejemplo',
	tool_bulk_compress_png_images_faq_a1:
		'No. La decodificación y el PNG se hacen en esta pestaña. Los archivos no salen del dispositivo y van sin subir al servidor. El ayudante ZIP puede cargarse desde un CDN; tus imágenes no salen de la pestaña.',
	tool_bulk_compress_png_images_faq_a2:
		'No. La salida es siempre PNG. No hay mate JPEG. Si aceptas JPEG y quieres fotos de producto más livianas, usa Comprimir fotos de producto en lote.',
	tool_bulk_compress_png_images_faq_a3:
		'Sí. Los píxeles se dibujan sin fondo sólido y se guardan como PNG, así que los huecos siguen siendo huecos.',
	tool_bulk_compress_png_images_faq_a4:
		'A menudo, si no recortas el lado más largo. Este PNG de lienzo no optimiza paletas como algunas nubes. El color indexado puede bandearse al recodificar.',
	tool_bulk_compress_png_images_faq_a5:
		'No. Solo se guarda el primer fotograma como PNG estático.',
	tool_bulk_compress_png_images_faq_q1: '¿El reductor PNG sube mis archivos a un servidor?',
	tool_bulk_compress_png_images_faq_q2: '¿Comprimir PNG online los convierte en JPEG?',
	tool_bulk_compress_png_images_faq_q3: '¿Se puede comprimir PNG sin perder transparencia?',
	tool_bulk_compress_png_images_faq_q4: '¿Por qué el PNG sigue pesando casi igual?',
	tool_bulk_compress_png_images_faq_q5: '¿Un GIF animado sigue animado?',
	tool_bulk_compress_png_images_file_count_tpl: '{n} archivos en cola',
	tool_bulk_compress_png_images_how_body:
		'Cuando el lote tiene que seguir siendo PNG, elige un tope común de lado más largo si hace falta, comprime aquí y llévate un ZIP de lo que salió bien.',
	tool_bulk_compress_png_images_how_item_1: 'Elige los logos o recortes PNG que deben conservar transparencia.',
	tool_bulk_compress_png_images_how_item_2: 'Usa el chip de 1024 px si los iconos deben encogerse; Solo recodificar si el tamaño en píxeles no puede cambiar.',
	tool_bulk_compress_png_images_how_item_3: 'Pulsa Comprimir todo. Cada fila sigue siendo PNG. Los fallos se omiten y el resto se empaqueta.',
	tool_bulk_compress_png_images_how_item_4: 'Si un PNG tipo foto casi no baja, la tabla avisa: JPEG en la página de fotos de producto suele pesar menos.',
	tool_bulk_compress_png_images_how_item_5: 'Descarga el ZIP cuando al menos un archivo haya salido bien. Cargar ejemplo ya corrió al entrar.',
	tool_bulk_compress_png_images_how_title: 'Cómo hacerlo',
	tool_bulk_compress_png_images_max_edge_label: 'Lado máximo',
	tool_bulk_compress_png_images_resize_on: 'Limitar el lado más largo',
	tool_bulk_compress_png_images_rules_body:
		'Nunca se pinta un fondo JPEG. El peso suele bajar al recortar el lado más largo, no al volver a guardar tal cual.',
	tool_bulk_compress_png_images_rules_item_1:
		'El MIME de salida es PNG. El alfa no se aplana. No hay control de calidad porque este PNG es sin pérdida.',
	tool_bulk_compress_png_images_rules_item_2:
		'El lado más largo se reduce en proporción y nunca se agranda. Solo recodificar mantiene los píxeles y casi no cambia los bytes.',
	tool_bulk_compress_png_images_rules_item_3:
		'Si falla decodificar o guardar, esa fila se omite. Nombres repetidos en el ZIP pasan a name (2).png. Las paletas indexadas pueden bandearse.',
	tool_bulk_compress_png_images_rules_item_4:
		'Los archivos no salen del dispositivo y van sin subir al servidor.',
	tool_bulk_compress_png_images_rules_title: 'Qué debes esperar',
	tool_bulk_compress_png_images_sample: 'Cargar ejemplo',
	tool_bulk_compress_png_images_status_compressing: 'Comprimiendo el lote PNG…',
	tool_bulk_compress_png_images_status_done: 'Lote listo — revisa la tabla y descarga el ZIP.',
	tool_bulk_compress_png_images_status_ok: 'PNG listo',
	tool_bulk_compress_png_images_status_same: 'Sigue grande',
	tool_bulk_compress_png_images_status_skip: 'Omitido',
	tool_bulk_compress_png_images_summary_tpl: '{ok} listos · {same} casi igual · {skip} omitidos',
	tool_bulk_compress_png_images_title: 'Comprimir imágenes PNG en lote',
	tool_bulk_compress_png_images_usecase_1: 'Una carpeta de logos transparentes que la tienda debe seguir sirviendo en PNG.',
	tool_bulk_compress_png_images_usecase_2: 'Recortes de UI que necesitan el mismo lado más largo antes de pasarlos a desarrollo.',
	tool_bulk_compress_png_images_usecase_3: 'Stickers con huecos; un JPEG rellenaría esos huecos con un mate.',
	tool_bulk_compress_png_images_usecases_title: 'Dónde encaja',
	tool_bulk_compress_png_images_warn_anim: 'Archivos animados: solo se guarda el primer fotograma como PNG estático.',
	tool_bulk_compress_png_images_warn_edge: 'Un archivo supera 8192 px de ancho o alto — irá lento.',
	tool_bulk_compress_png_images_warn_large: 'Un archivo supera 25 MB — esta pestaña puede quedarse sin memoria.',
	tool_bulk_compress_png_images_warn_same: 'Algunos PNG apenas bajaron. Recorta el lado más largo, o usa la compresión de fotos de producto si el JPEG te vale.',
};

export default es;
