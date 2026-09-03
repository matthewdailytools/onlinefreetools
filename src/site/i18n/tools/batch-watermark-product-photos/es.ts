/**
 * i18n tool shard (batch-watermark-product-photos / es).
 * H1 sigue la búsqueda «Marca de agua en fotos de producto por lote».
 */
import type { SiteLangDict } from '../../../types';

/** Español: un mismo sello de copyright en un lote de fotos de ficha. */
const es: SiteLangDict = {
	tool_batch_watermark_product_photos_anchor_bc: 'Abajo',
	tool_batch_watermark_product_photos_anchor_bl: 'Abajo izq.',
	tool_batch_watermark_product_photos_anchor_br: 'Abajo der.',
	tool_batch_watermark_product_photos_anchor_label: 'Ancla',
	tool_batch_watermark_product_photos_anchor_mc: 'Centro',
	tool_batch_watermark_product_photos_anchor_ml: 'Medio izq.',
	tool_batch_watermark_product_photos_anchor_mr: 'Medio der.',
	tool_batch_watermark_product_photos_anchor_tc: 'Arriba',
	tool_batch_watermark_product_photos_anchor_tl: 'Arriba izq.',
	tool_batch_watermark_product_photos_anchor_tr: 'Arriba der.',
	tool_batch_watermark_product_photos_apply: 'Aplicar a todas',
	tool_batch_watermark_product_photos_article:
		'Estampa una línea de copyright en un lote de fotos de ficha en esta pestaña. El tamaño sigue el lado corto de cada foto para que horizontal y vertical caigan en la misma esquina relativa. Previsualiza un fotograma, aplícalo a todas, salta lienzos demasiado pequeños, descarga un ZIP. No salen del dispositivo ni se suben al servidor.',
	tool_batch_watermark_product_photos_chip_draft: 'DRAFT en diagonal',
	tool_batch_watermark_product_photos_choose_files: 'Elegir fotos',
	tool_batch_watermark_product_photos_clear: 'Borrar',
	tool_batch_watermark_product_photos_col_after: 'Después',
	tool_batch_watermark_product_photos_col_before: 'Antes',
	tool_batch_watermark_product_photos_col_name: 'Archivo',
	tool_batch_watermark_product_photos_col_status: 'Estado',
	tool_batch_watermark_product_photos_color_label: 'Color',
	tool_batch_watermark_product_photos_desc:
		'Marca de agua en fotos de producto por lote, tamaño según el lado corto, vista previa, aplicar a todas, ZIP; no salen del dispositivo, sin subir al servidor.',
	tool_batch_watermark_product_photos_description:
		'Marca de agua en fotos de producto por lote: mete un lote de fotos de ficha, un sello cuyo tamaño sale del lado corto, previsualiza un fotograma, aplícalo a todas, salta lienzos minúsculos, descarga un ZIP. Pasos: elige el lote, deja la esquina, previsualiza una, aplica a todas. Ejemplo: un paisaje y un retrato comparten el mismo SAMPLE relativo. Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_batch_watermark_product_photos_download_zip: 'Descargar ZIP',
	tool_batch_watermark_product_photos_drop_hint: 'Suelta JPEG, PNG o WebP de ficha (hasta 20). El sello queda en esta pestaña.',
	tool_batch_watermark_product_photos_empty: 'Añade fotos primero.',
	tool_batch_watermark_product_photos_empty_text: 'Escribe el texto del sello antes de aplicar.',
	tool_batch_watermark_product_photos_err_decode: 'No se pudo leer este archivo. Omitido.',
	tool_batch_watermark_product_photos_err_encode: 'No se pudo escribir este archivo. Omitido.',
	tool_batch_watermark_product_photos_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_batch_watermark_product_photos_err_tiny: 'Lado corto menor de 64 px: esa fila se omite.',
	tool_batch_watermark_product_photos_err_too_many: 'Como máximo 20 fotos. Las de más no se añadieron.',
	tool_batch_watermark_product_photos_example:
		'Cargar ejemplo pone un bloque apaisado y uno vertical, escribe SAMPLE, previsualiza el primero, aplica la misma marca relativa a ambos y activa Descargar ZIP.',
	tool_batch_watermark_product_photos_example_title: 'Ejemplo',
	tool_batch_watermark_product_photos_faq_a1:
		'No. La lectura y el sello en Canvas ocurren en esta pestaña. No salen del dispositivo y no se suben al servidor. El ayudante del ZIP puede cargarse desde un CDN; tus fotos siguen en la pestaña.',
	tool_batch_watermark_product_photos_faq_a2:
		'No. El tamaño es un porcentaje del lado corto y las nueve anclas son fracciones de ese lienzo. Retrato y paisaje quedan en la misma esquina relativa.',
	tool_batch_watermark_product_photos_faq_a3:
		'No. Esta página sella fotos. El sello de PDF es otro trabajo: usa la herramienta de PDF cuando necesites páginas, no JPEG de ficha.',
	tool_batch_watermark_product_photos_faq_a4:
		'Añadir marca de agua es una foto con ajustes de píxel. Esta página comparte un sello en un lote, previsualiza una y aplica todas a un ZIP.',
	tool_batch_watermark_product_photos_faq_a5:
		'También se busca «marcar fotos en lote». En este sitio ese trabajo vive aquí; no hay una segunda URL bulk-watermark.',
	tool_batch_watermark_product_photos_faq_q1: '¿Las fotos salen de mi ordenador?',
	tool_batch_watermark_product_photos_faq_q2: '¿Se descolocan horizontal y vertical?',
	tool_batch_watermark_product_photos_faq_q3: '¿Puedo sellar un PDF aquí?',
	tool_batch_watermark_product_photos_faq_q4: '¿En qué se diferencia de Añadir marca de agua?',
	tool_batch_watermark_product_photos_faq_q5: 'Busqué marcar fotos en lote: ¿es esta página?',
	tool_batch_watermark_product_photos_file_count_tpl: '{n} fotos en la cola',
	tool_batch_watermark_product_photos_format_jpeg: 'JPEG',
	tool_batch_watermark_product_photos_format_label: 'Salida',
	tool_batch_watermark_product_photos_format_png: 'PNG',
	tool_batch_watermark_product_photos_how_body:
		'Deja el lote en cola, define un sello, previsualiza un fotograma, aplica la misma marca relativa a todas y llévate un ZIP.',
	tool_batch_watermark_product_photos_how_item_1: 'Elige las fotos de ficha que necesitan la misma línea de copyright.',
	tool_batch_watermark_product_photos_how_item_2: 'Define texto, esquina y porcentaje del lado corto. Por defecto SAMPLE abajo a la derecha, 8%.',
	tool_batch_watermark_product_photos_how_item_3: 'Pulsa Vista previa. Comprueba que apaisado y vertical caen en la misma esquina relativa.',
	tool_batch_watermark_product_photos_how_item_4: 'Pulsa Aplicar a todas. Lienzos de menos de 64 px se omiten. JPEG pinta un fondo blanco primero.',
	tool_batch_watermark_product_photos_how_item_5: 'Descarga el ZIP cuando haya al menos un acierto. ¿Un ajuste de una sola foto? Usa Añadir marca de agua.',
	tool_batch_watermark_product_photos_how_title: 'Cómo sellar el lote',
	tool_batch_watermark_product_photos_opacity_label: 'Opacidad',
	tool_batch_watermark_product_photos_pct_label: 'Tamaño vs lado corto',
	tool_batch_watermark_product_photos_preview: 'Vista previa',
	tool_batch_watermark_product_photos_rotation_label: 'Ángulo',
	tool_batch_watermark_product_photos_rules_body:
		'El tamaño en píxeles es el lado corto por el porcentaje. Las anclas son fracciones de ese lienzo, no píxeles fijos.',
	tool_batch_watermark_product_photos_rules_item_1:
		'Sello por defecto: SAMPLE, abajo derecha, 8% de min(ancho, alto), opacidad 45%. JPEG usa fondo blanco.',
	tool_batch_watermark_product_photos_rules_item_2:
		'Un lado corto menor de 64 px falla esa fila. Texto vacío desactiva Aplicar a todas. Fallos de lectura se omiten.',
	tool_batch_watermark_product_photos_rules_item_3:
		'DRAFT en diagonal tesela la palabra. Nombres repetidos en el ZIP pasan a nombre (2).jpg o .png.',
	tool_batch_watermark_product_photos_rules_item_4:
		'Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_batch_watermark_product_photos_rules_title: 'Qué esperar',
	tool_batch_watermark_product_photos_sample: 'Cargar ejemplo',
	tool_batch_watermark_product_photos_status_applying: 'Sellando el lote…',
	tool_batch_watermark_product_photos_status_done: 'Lote listo: revisa la tabla y descarga el ZIP.',
	tool_batch_watermark_product_photos_status_ok: 'Sellada',
	tool_batch_watermark_product_photos_status_preview: 'La vista previa es la primera foto de la cola.',
	tool_batch_watermark_product_photos_status_skip: 'Omitido',
	tool_batch_watermark_product_photos_status_tiny: 'Demasiado pequeña',
	tool_batch_watermark_product_photos_summary_tpl: '{ok} selladas · {skip} omitidas',
	tool_batch_watermark_product_photos_text_label: 'Texto del sello',
	tool_batch_watermark_product_photos_title: 'Marca de agua en fotos de producto por lote',
	tool_batch_watermark_product_photos_usecase_1: 'Estampar el nombre de la tienda en una carpeta de fotos de ficha antes de publicar.',
	tool_batch_watermark_product_photos_usecase_2: 'Marcar muestras SAMPLE para que un comprador no reuse la vista previa como ficha.',
	tool_batch_watermark_product_photos_usecase_3: 'Añadir una línea de copyright a varias imágenes sin abrir cada archivo en Añadir marca de agua.',
	tool_batch_watermark_product_photos_usecases_title: 'Cuándo viene bien',
	tool_batch_watermark_product_photos_warn_anim: 'Animaciones: solo se sella el primer fotograma.',
	tool_batch_watermark_product_photos_warn_edge: 'Hay un archivo más ancho o más alto que 8192 px; irá lento.',
	tool_batch_watermark_product_photos_warn_large: 'Hay un archivo de más de 25 MB; esta pestaña puede quedarse sin memoria.',
};

export default es;
