/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / es).
 * Palabra local: Convertir PDF escaneados a Word con OCR.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: 'Ajustes avanzados (opcional)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'Suelta uno o varios PDF escaneados, pulsa Convertir todo y luego Descargar Word. Por defecto sale un Word para todo el lote; si prefieres un Word por PDF, con varios aciertos el botón pasa a Descargar ZIP. Cada archivo es un título; cada página leída pasa a párrafos que puedes editar. La imagen de la página va encima por defecto para cotejar. Una página borrosa se omite. Los archivos se quedan en tu dispositivo, no se suben a un servidor. Si el PDF ya deja seleccionar texto, usa Convertir PDF en documento Word. Las fotos van en Convertir varios JPG a Word editable con OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: 'Elige archivos PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: 'Borrar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: 'Archivo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: 'Notas',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: 'Páginas',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: 'Estado',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: 'Convertir todo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n} archivos (máx. 5, 20 páginas)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'Convertir PDF escaneados a Word con OCR: cola, Convertir todo, Descargar Word — se queda en tu dispositivo, no se sube a un servidor.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'Suelta PDF escaneados y baja un Word que puedes editar: cada página se lee en esta pestaña y los archivos se quedan en tu dispositivo, no se suben a un servidor. Pasos: añade PDF, Convertir todo, Descargar Word. Ejemplo: un PDF impreso de dos páginas pasa a un Word con título e imágenes opcionales. También se busca como PDF escaneado a Word u OCR de PDF a Word. Un PDF digital con capa de texto va en Convertir PDF en documento Word. Las fotos, en Convertir varios JPG a Word editable con OCR.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: 'Descargar Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: 'Descargar ZIP',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: 'Suelta PDF escaneados aquí (máx. 5 archivos, 20 páginas). El proceso se queda en esta pestaña.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: 'Añade PDF escaneados primero.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: 'Este navegador no pudo armar el Word. Prueba uno actual.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty: 'No hubo texto impreso en esa página. Omitida. Prueba un escaneo más nítido, no un manuscrito.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: 'Ese PDF tiene contraseña. No se añadió.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'No cargó el renderizado PDF o el OCR. Recarga y pulsa Convertir todo. Las páginas ya leídas siguen descargables.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'Esta página lee PDF escaneados, no fotos. Para JPG, PNG o WebP usa Convertir varios JPG a Word editable con OCR. Ese archivo no se añadió.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: 'No se pudo leer ese PDF. Omitido.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: 'No cargó el visor PDF en esta pestaña. Recarga e inténtalo.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: 'Pesa más de 12 MB. Comprime primero. Ese archivo no se añadió.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: 'Como máximo 5 PDF. Los demás no se añadieron.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages: 'Como máximo 20 páginas por lote. Los archivos de más no se añadieron.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'Cargar ejemplo añade sample-scan.pdf (página 1: ONLINEFREETOOLS y The quick brown fox; página 2: SAMPLE TWO y Printed sample page), ejecuta Convertir todo y activa Descargar Word con un título y dos páginas.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: 'Ejemplo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'No. Los PDF se quedan en esta pestaña. El renderizado, el OCR y Word se cargan desde este sitio; no se suben a nuestros servidores.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'Convertir PDF en documento Word copia una capa de texto que ya existe y no hace OCR. Aquí se dibuja cada página y se lee la imagen, así un escaneo sin texto seleccionable sí puede volverse párrafos. Si ya puedes marcar palabras, usa esa otra página.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'Convertir varios JPG a Word editable con OCR es una cola de fotos. Aquí solo se aceptan PDF. Un JPG se rechaza a propósito.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'No. La página fallida se omite; el resto de páginas y PDF sí entra en el Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'En el modo por defecto «un Word para el lote», cada PDF correcto es un título (el nombre del archivo). Cada página correcta es imagen opcional, párrafos OCR y un salto de página. Si quieres documentos sueltos, elige un Word por PDF. Tablas y columnas no copian el diseño original.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'No. Las fotos van en Convertir varios JPG a Word editable con OCR. Esta zona solo admite PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'La letra impresa va mejor. La cursiva manuscrita suele fallar en esa página. Esto no es un producto de manuscritos.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'Esta página entrega Word, no un TXT ni un PDF buscable de vuelta. Quien busca PDF escaneado a Word, escanear a Word u OCR de PDF a Word para un escaneo está en el sitio correcto. Un volcado de capa de texto va en Extraer texto de un PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'Como máximo 5 PDF, 12 MB cada uno y 20 páginas en el lote. Un solo PDF también usa Convertir todo y Descargar Word; no hay otra URL para un archivo suelto.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'Sí. Elige un Word por PDF y pulsa Convertir todo. Si solo acierta un PDF, el botón sigue siendo Descargar Word. Con dos o más aciertos, Descargar ZIP (un .docx por archivo de entrada). Juntar en un solo Word es lo predeterminado.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: '¿Se suben mis PDF?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: '¿En qué se diferencia de Convertir PDF en documento Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: '¿En qué se diferencia de convertir varios JPG a Word editable con OCR?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: 'Si falla una página, ¿el Word queda vacío?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: '¿Cómo se ve el archivo Word?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: '¿Puedo soltar fotos JPG aquí?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: '¿Funciona el OCR de manuscritos?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: '¿Esto es OCR de PDF a Word, o me dan TXT / un PDF buscable?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: '¿Cuáles son los límites de archivos y páginas?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: '¿Puedo sacar un Word por cada PDF en vez de juntarlos?',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'Pasa PDF escaneados a un Word editable: añade los PDF, pulsa Convertir todo (el renderizado y el OCR cargan al primer clic, página a página) y luego Descargar Word.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: 'Suelta uno o varios PDF escaneados (o elige archivos).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2: 'Opcional: elige un idioma para todo el lote (chino e inglés por defecto).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'Opcional: deja un Word para el lote, o pasa a un Word por PDF (varios PDF correctos → Descargar ZIP).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'Pulsa Convertir todo: la primera vez carga el renderizado PDF y el OCR en esta pestaña, luego lee una página tras otra. Una página fallida se omite.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'Pulsa Descargar Word — o Descargar ZIP si elegiste un Word por PDF y acertó más de un archivo.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: 'Cómo funciona',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: '{s}s transcurridos',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: 'Recarga y pulsa Convertir todo. Las páginas ya leídas se pueden descargar.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: 'La conversión se detuvo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: 'Listo. Siguiente paso: Descargar Word, o Descargar ZIP si elegiste un Word por PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: 'Cargar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: 'Empaquetar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: 'Leer',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: 'Dibujar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: 'Progreso de la conversión',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: 'Empezando…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: 'Árabe',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: 'Inglés',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: 'Japonés',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: 'Idioma de reconocimiento para todo el lote',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: 'Chino',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: 'Chino + inglés',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: 'Lado más largo antes de leer (px)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: 'Por defecto 2048. Más pequeño alivia el móvil.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint:
		'Por defecto, un solo Word. Un Word por PDF: Descargar Word si acierta uno; Descargar ZIP si aciertan varios.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'Exportación a Word',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: 'Un Word para todo el lote',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: 'Un Word por cada PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint: 'Activado por defecto. Cada página de Word muestra el escaneo encima de los párrafos para cotejar.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: 'Incluir la imagen de la página encima del texto',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · página {page}/{pages}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'Entran hasta 5 PDF y 20 páginas. Cada página se dibuja, se reduce si el lado largo supera el límite y se lee en orden visual. Un solo motor OCR corre en serie. Una página fallida se omite. Puedes exportar un Word fusionado o un Word por PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'Por defecto: un Word, título por PDF, imagen opcional y párrafos OCR por página, luego salto. Un Word por PDF: cada entrada correcta es su propio .docx; varios archivos bajan en un ZIP. No es un ZIP de TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2: 'Los archivos se quedan en tu dispositivo; no se suben a un servidor. Los scripts se cargan desde este sitio.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'Manuscritos, mucho desenfoque y perspectiva fuerte suelen fallar en esa página. Las tablas salen en orden de lectura. Las columnas no copian el original. Un PDF digital con capa de texto también se rasteriza aquí; usa Convertir PDF en documento Word si solo quieres esa capa.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'Sin fotos. Los JPG van en Convertir varios JPG a Word editable con OCR. Esta página no escribe un PDF buscable ni descarga TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: 'Reglas que debes esperar',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: 'Cargar ejemplo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: 'Listo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: 'En cola',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: 'Leyendo',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: 'Dibujando',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: 'Omitida',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: 'En curso',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: 'Listo.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: 'Cargando renderizado PDF y OCR…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: 'Armando el archivo Word…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: 'Convertir PDF escaneados a Word con OCR',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1: 'Suelta el PDF escaneado de una clase y baja un Word para retitular apartados.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2: 'Junta dos contratos escaneados en un documento de cotejo con la imagen de cada página.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3: 'Pasa un escaneo de factura de varias páginas a Word para que un colega lo edite (aquí no se extraen campos de factura).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: 'Buenos encajes',
};

export default es;
