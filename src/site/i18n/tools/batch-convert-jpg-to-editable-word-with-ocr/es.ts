/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / es).
 * Palabra local: Convertir varios JPG a Word editable con OCR.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: 'Ajustes avanzados (opcional)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'Suelta varias fotos impresas o capturas, pulsa Convertir todo y luego Descargar Word. Cada foto es una sección: el título es el nombre del archivo y el cuerpo es texto que puedes editar; la foto original va encima por defecto para cotejar. Una toma borrosa se omite. Los archivos se quedan en tu dispositivo, no se suben a un servidor. ¿Solo quieres un ZIP de TXT? Usa Convertir varios JPG a texto con OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: 'Elige JPG, PNG o WebP',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: 'Borrar',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: 'Notas',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: 'Archivo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: 'Píxeles',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: 'Estado',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: 'Convertir todo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n} archivos (máx. 10)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'Convertir varios JPG a Word editable con OCR: cola, Convertir todo, Descargar Word — se queda en tu dispositivo, no se sube a un servidor.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'Suelta varios JPG y baja un Word que puedes editar: el reconocimiento corre en esta pestaña, foto a foto, y los archivos se quedan en tu dispositivo, no se suben a un servidor. Pasos: añade imágenes, Convertir todo, Descargar Word. Ejemplo: dos muestras impresas pasan a dos secciones con título y foto opcional. También se busca como JPG a Word con OCR. Una foto fallida se omite. ¿ZIP de texto? Usa Convertir varios JPG a texto con OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: 'Descargar Word',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: 'Suelta varias fotos aquí (máx. 10). El proceso se queda en esta pestaña.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: 'Añade fotos primero.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: 'Este navegador no pudo armar el Word. Prueba uno actual.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty:
		'No hubo texto impreso. Omitida. Prueba una página más nítida, no un manuscrito.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'El motor OCR no cargó. Recarga y pulsa Convertir todo. Las secciones ya hechas siguen descargables.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: 'No se pudo leer esa imagen. Usa JPEG, PNG o WebP. Omitida.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: 'Esta página lee fotos, no PDF. Ese archivo no se añadió.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: 'Pesa más de 12 MB. Comprime o recorta primero. Omitida.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: 'Como máximo 10 fotos. El resto no se añadió.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'Cargar ejemplo añade sample-1.jpg (ONLINEFREETOOLS y The quick brown fox) y sample-2.jpg (SAMPLE TWO y 印刷体样例), ejecuta Convertir todo y deja Descargar Word con dos secciones tituladas.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: 'Ejemplo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'No. Las fotos se quedan en esta pestaña. El motor y el script de Word se cargan desde este sitio; no se suben a nuestros servidores.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'Convertir varios JPG a texto con OCR entrega un ZIP de TXT. Aquí se arma un Word editable, una sección por foto. Mismo motor, otro trabajo.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'Imágenes a Word pega las fotos como dibujos: no seleccionas las letras. Aquí el OCR escribe párrafos que sí editas. La foto original es opcional, para cotejar.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4:
		'No. Esa foto se omite; el resto entra en el mismo Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'Cada foto correcta es una sección: el título es el nombre del archivo, luego la foto opcional, luego los párrafos OCR y un salto de página. Columnas y tablas no copian el diseño original.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'No. Esta página no admite PDF. Los PDF escaneados van en Convertir PDF escaneados a Word con OCR. Un PDF digital con capa de texto va en Convertir PDF en documento Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'La letra de imprenta funciona mejor. La cursiva a mano suele fallar en esa fila. Esto no es un producto de manuscritos.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'Sí: JPEG, PNG y WebP comparten cola. Aunque sueltes una sola foto, descargas Word, no TXT. Para una sola imagen a texto usa Convertir un JPG a texto con OCR.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: '¿Se suben mis fotos?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: '¿En qué se diferencia de convertir varios JPG a texto con OCR?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: '¿En qué se diferencia de Imágenes a Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: 'Si una foto falla, ¿el Word queda vacío?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: '¿Cómo se ve cada sección en Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: '¿Puedo soltar un PDF escaneado para OCR a Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: '¿Funciona la letra manuscrita?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: '¿Puedo usar PNG, o solo un JPG?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'Pasa un montón de fotos impresas a un Word editable: añade las imágenes, pulsa Convertir todo (el motor carga al primer clic y lee una foto tras otra) y luego Descargar Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: 'Suelta varios JPG, PNG o WebP (o elige archivos).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2:
		'Opcional: elige un chip de idioma para todo el lote (chino e inglés van por defecto).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'Pulsa Convertir todo: la primera vez carga el motor OCR en esta pestaña y luego lee una foto tras otra. Una foto fallida se omite.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'Pulsa Descargar Word: un documento con una sección por foto (título, foto opcional, texto editable).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: 'Cómo funciona',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: 'Árabe',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: 'Inglés',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: 'Japonés',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: 'Idioma de reconocimiento para todo el lote',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: 'Chino',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: 'Chino + inglés',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: 'Lado más largo antes de leer (px)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: 'Por defecto 2048. Más pequeño alivia el móvil.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'Activado por defecto. Cada sección muestra la foto encima de los párrafos OCR para cotejar en Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: 'Incluir la foto original encima del texto',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'Hasta 10 fotos en cola. Si el lado más largo supera el límite, se reduce y luego se lee en orden visual. Un solo worker OCR corre en serie. Una fila fallida se omite; las correctas pasan a secciones de un solo Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'Cada foto correcta es una sección de Word: Título 1 es el nombre del archivo, luego la foto opcional, luego párrafos OCR y un salto de página. Eso es JPG a Word con OCR para un lote, no un ZIP de TXT.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2:
		'Los archivos se quedan en tu dispositivo; no se suben a un servidor. Los scripts se cargan desde este sitio.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'Manuscritos, mucho desenfoque y perspectiva fuerte suelen fallar en esa fila. Las tablas salen como líneas en orden de lectura. Las columnas no copian la página original.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'Sin PDF. El ZIP de TXT está en Convertir varios JPG a texto con OCR. Fotos sin OCR, en Imágenes a Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: 'Qué debes esperar',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: 'Cargar ejemplo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: 'Listo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: 'En cola',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: 'Leyendo',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: 'Omitida',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: 'Listo.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: 'Cargando el motor OCR…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: 'Armando el Word…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: 'Convertir varios JPG a Word editable con OCR',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1:
		'Fotografía varias hojas de un folleto y baja un Word para retitularlo.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2:
		'Pasa fotos de un menú a un documento con la imagen encima de cada sección OCR para cotejar.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3:
		'Reúne capturas de error en un Word editable y mándalo a un compañero.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: 'Para qué sirve',
};

export default es;
