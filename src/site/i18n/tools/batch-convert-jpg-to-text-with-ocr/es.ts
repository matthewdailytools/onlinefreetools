/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / es).
 * 当地主词：convertir varios JPG a texto con OCR.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: 'Ajustes avanzados (opcional)',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'Arrastra varias fotos impresas o capturas, pulsa Convertir todo y descarga un ZIP. Cada imagen sale en su .txt; el combinado las une con el nombre de archivo. Una foto borrosa se omite. Los archivos no salen del dispositivo ni se suben al servidor. ¿Solo una foto? Usa Pasar un JPG a texto con OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: 'Elige JPG, PNG o WebP',
	tool_batch_convert_jpg_to_text_with_ocr_clear: 'Borrar',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: 'Notas',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: 'Archivo',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: 'Píxeles',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: 'Estado',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint:
		'Activado por defecto. El ZIP incluye combined.txt con --- nombre --- entre fotos.',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'Incluir combined.txt en el ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: 'Convertir todo',
	tool_batch_convert_jpg_to_text_with_ocr_copied: 'Copiado.',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: 'Copiar texto combinado',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} archivos (máx. 10)',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'Convierte varios JPG a texto con OCR: cola, Convertir todo, ZIP — en el dispositivo, sin subir al servidor.',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'Pasa varios JPG o capturas a un ZIP de textos. El OCR corre en esta pestaña, foto a foto, sin subir al servidor. Pasos: añade imágenes, Convertir todo, Descargar ZIP. Ejemplo: dos fotos de muestra impresas salen en dos TXT más un combinado. También se busca como OCR por lotes u OCR masivo. ¿Una sola foto? Usa la página de un JPG.',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: 'Descargar ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint: 'Suelta varias fotos aquí (máx. 10). El proceso queda en esta pestaña.',
	tool_batch_convert_jpg_to_text_with_ocr_empty: 'Añade fotos primero.',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty:
		'No hay texto impreso. Omitida. Prueba una página nítida, no un manuscrito.',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine:
		'El motor OCR no cargó. Actualiza y pulsa Convertir todo. Las filas listas siguen descargables.',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: 'No se pudo armar el ZIP en este navegador. Prueba uno actual.',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: 'No se pudo leer la imagen. Usa JPEG, PNG o WebP. Omitida.',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: 'Esta página lee fotos, no PDF. Ese archivo no entró a la cola.',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: 'Supera 12 MB. Comprime o recorta. Omitida.',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: 'Como máximo 10 fotos. Las demás no se añadieron.',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'Cargar ejemplo añade sample-1.jpg (ONLINEFREETOOLS y The quick brown fox) y sample-2.jpg (SAMPLE TWO y 印刷体样例), ejecuta Convertir todo y activa Descargar ZIP con dos TXT y combined.txt.',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: 'Ejemplo',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1:
		'No. Las fotos se quedan en esta pestaña. Los scripts del motor y del ZIP salen de este sitio; no se suben a nuestros servidores.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'La página de un JPG copia un solo texto. Aquí hay cola: Convertir todo, omitir la fila fallida, Descargar ZIP. Mismo motor, otro trabajo.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3:
		'No. Esa foto se omite y el resto sigue. Lo logrado entra al ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'Un .txt por foto, con el nombre original (duplicados: stem (2).txt). Combined.txt va por defecto, con --- archivo --- entre páginas, para pasar varios JPG a texto de una vez.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'Para un solo JPG a texto usa Pasar un JPG a texto con OCR. Aquí el flujo es Convertir todo y Descargar ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6:
		'Sí. JPEG, PNG y WebP comparten la cola: varias imágenes a texto sin otra URL.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7:
		'La letra impresa va mejor. El manuscrito suele fallar en esa fila. No es un servicio de escaneo a domicilio.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8:
		'Sin PDF, Word ni hoja de cálculo. Un PDF digital con capa de texto va a Extraer texto de un PDF.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: '¿Se suben mis fotos?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: '¿En qué se diferencia de convertir un solo JPG con OCR?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: 'Si una foto falla, ¿se cancela el lote?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: '¿Qué hay dentro del ZIP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: 'Solo tengo una foto. ¿Puedo usarlo igual?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: '¿Puedo meter PNG o capturas WebP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: '¿Sirve para manuscritos o un servicio de escaneo?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: '¿Puedo soltar un PDF escaneado?',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'Convierte un montón de fotos impresas en un ZIP de textos: añade las imágenes, pulsa Convertir todo (el motor carga al primer clic y lee una tras otra) y luego Descargar ZIP o Copiar texto combinado.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: 'Suelta varios JPG, PNG o WebP (o elige archivos).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2:
		'Opcional: elige el idioma para todo el lote (chino e inglés por defecto).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3:
		'Pulsa Convertir todo: la primera vez carga el motor en esta pestaña y lee foto a foto. Una foto fallida se omite.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4:
		'Pulsa Descargar ZIP (un TXT por foto, más el combinado) o Copiar texto combinado.',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: 'Cómo funciona',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: 'Árabe',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: 'Inglés',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: 'Japonés',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: 'Idioma de reconocimiento para todo el lote',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: 'Chino',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: 'Chino + inglés',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: 'Lado más largo antes de leer (px)',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: 'Por defecto 2048. En el móvil, más bajo aligera la memoria.',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: 'Vista del texto combinado',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'Hasta 10 fotos en cola. Si el lado largo pasa el límite, se reduce. Un solo worker OCR las lee en serie. La fila fallida se omite; el texto bueno va al ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'Los nombres del ZIP siguen al archivo original. Combined.txt (activado) inserta --- archivo --- entre fotos, como un cuaderno fotografiado.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2:
		'Los archivos se quedan en el dispositivo; no se suben al servidor. Los scripts salen de este sitio.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3:
		'Manuscrito, desenfoque fuerte y perspectiva extrema suelen fallar en esa fila. Las tablas salen en orden de lectura, no en CSV.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'Sin PDF, Word ni PDF buscable. Una sola foto con copiar texto va a Pasar un JPG a texto con OCR.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: 'Qué esperar',
	tool_batch_convert_jpg_to_text_with_ocr_sample: 'Cargar ejemplo',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: 'Listo',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: 'En cola',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: 'Leyendo',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: 'Omitida',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: 'Listo.',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: 'Cargando el motor OCR…',
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: 'Convertir varios JPG a texto con OCR',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1:
		'Fotografía varias hojas de apuntes y baja un ZIP de TXT para el bloc de notas.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2:
		'Pasa a texto un montón de capturas de chat o errores cuando no puedes seleccionar los píxeles.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3:
		'Une fotos de un menú en un combined.txt con separadores y cópialo para corregir.',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: 'Cuándo viene bien',
};

export default es;
