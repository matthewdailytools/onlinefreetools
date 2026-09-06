/**
 * i18n tool shard (batch-compress-pdfs-for-email / es).
 * H1 sigue la búsqueda «Comprimir PDF para correo en lote».
 */
import type { SiteLangDict } from '../../../types';

/** Español: varios adjuntos se encogen por separado y salen en un ZIP. */
const es: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'Antes de enviar el correo, encoge varios presupuestos o escaneos en esta pestaña. En el ZIP siguen siendo PDF sueltos, no un solo cuadernillo. Si uno va cifrado o es demasiado pesado, se omite y el resto se descarga. No salen del dispositivo ni se suben al servidor.',
	tool_batch_compress_pdfs_for_email_choose_files: 'Elegir PDF',
	tool_batch_compress_pdfs_for_email_chip_email: 'Preset correo',
	tool_batch_compress_pdfs_for_email_chip_max: 'Encoger al máximo',
	tool_batch_compress_pdfs_for_email_chip_print: 'Preset impresión',
	tool_batch_compress_pdfs_for_email_clear: 'Borrar',
	tool_batch_compress_pdfs_for_email_col_after: 'Después',
	tool_batch_compress_pdfs_for_email_col_before: 'Antes',
	tool_batch_compress_pdfs_for_email_col_name: 'Archivo',
	tool_batch_compress_pdfs_for_email_col_status: 'Estado',
	tool_batch_compress_pdfs_for_email_compress: 'Comprimir todo',
	tool_batch_compress_pdfs_for_email_desc:
		'Comprimir PDF para correo en lote: cada archivo se encoge por separado y el ZIP sigue teniendo varios PDF; no salen del dispositivo, sin subir al servidor.',
	tool_batch_compress_pdfs_for_email_description:
		'Comprimir PDF para correo en lote: mete varios presupuestos o escaneos, aplica el preset de correo a cada archivo, omite los cifrados o demasiado pesados y descarga un ZIP de PDF sueltos, no un cuadernillo fusionado. Pasos: elige el montón, deja el preset de correo, comprime todo, mira los bytes ahorrados. Ejemplo: dos PDF de muestra siguen siendo dos archivos en el ZIP. No salen del dispositivo y no se suben al servidor.',
	tool_batch_compress_pdfs_for_email_download_zip: 'Descargar ZIP',
	tool_batch_compress_pdfs_for_email_drop_hint: 'Suelta PDF (hasta 20). Cada archivo se comprime por su cuenta. El trabajo queda en esta pestaña.',
	tool_batch_compress_pdfs_for_email_empty: 'Añade PDF primero.',
	tool_batch_compress_pdfs_for_email_err_encrypted: 'Lleva contraseña. Omitido.',
	tool_batch_compress_pdfs_for_email_err_fflate: 'Este navegador no pudo armar el ZIP. Prueba uno actual.',
	tool_batch_compress_pdfs_for_email_err_load: 'No se pudo leer este PDF. Omitido.',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'La biblioteca PDF no cargó. Prueba un navegador actual.',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'pdf.js no cargó. Prueba un navegador actual.',
	tool_batch_compress_pdfs_for_email_err_too_many: 'Como máximo 20 PDF. Los de más no se añadieron.',
	tool_batch_compress_pdfs_for_email_example:
		'Cargar ejemplo crea dos PDF cortos con una página de imagen, aplica el preset de correo a cada uno, deja dos archivos en el ZIP y muestra los bytes ahorrados.',
	tool_batch_compress_pdfs_for_email_example_title: 'Ejemplo',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'No. El rasterizado y el rearmado ocurren en esta pestaña. No salen del dispositivo ni se suben al servidor. pdf.js, pdf-lib y el ayudante del ZIP se cargan desde este sitio; tus PDF siguen en la pestaña.',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'No. Obtienes un ZIP de N PDF. Juntarlos en un cuadernillo es Combinar PDF: otro trabajo, no esta página.',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'Los escaneos con fotos suelen encogerse. Un PDF solo de texto a veces apenas se mueve. La tabla enseña el antes y el después.',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'Comprimir PDF trata un archivo. Esta página comparte un preset de correo en un montón y mete los aciertos en un ZIP.',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'Esa fila se omite y el resto sigue. Desbloquéalo en otra parte y vuelve a añadirlo.',
	tool_batch_compress_pdfs_for_email_faq_q1: '¿Los PDF salen de mi ordenador?',
	tool_batch_compress_pdfs_for_email_faq_q2: '¿Esto fusiona todo en un solo PDF?',
	tool_batch_compress_pdfs_for_email_faq_q3: '¿Los escaneos encogen más que el texto?',
	tool_batch_compress_pdfs_for_email_faq_q4: '¿En qué se diferencia de Comprimir PDF?',
	tool_batch_compress_pdfs_for_email_faq_q5: '¿Y si un archivo va cifrado?',
	tool_batch_compress_pdfs_for_email_file_count_tpl: '{n} PDF en la cola',
	tool_batch_compress_pdfs_for_email_how_body:
		'Mete varios adjuntos, elige el preset de correo, comprime cada archivo por su cuenta y llévate un ZIP de los que salieron bien.',
	tool_batch_compress_pdfs_for_email_how_item_1: 'Elige los presupuestos o escaneos que deben pasar el límite del adjunto.',
	tool_batch_compress_pdfs_for_email_how_item_2: 'Deja el preset de correo salvo que necesites Impresión (más nítido) o Encoger al máximo.',
	tool_batch_compress_pdfs_for_email_how_item_3: 'Pulsa Comprimir todo. Los archivos siguen sueltos. Nada se concatena en un cuadernillo.',
	tool_batch_compress_pdfs_for_email_how_item_4: 'Los cifrados o rotos se omiten. El resumen suma los bytes ahorrados en los aciertos.',
	tool_batch_compress_pdfs_for_email_how_item_5: 'Descarga el ZIP cuando haya al menos un acierto. ¿Solo un PDF? Usa Comprimir PDF.',
	tool_batch_compress_pdfs_for_email_how_title: 'Cómo comprimir el lote para el correo',
	tool_batch_compress_pdfs_for_email_preset_label: 'Preset compartido',
	tool_batch_compress_pdfs_for_email_rules_body:
		'Cada PDF se rasteriza a páginas JPEG y se rearma. La salida es siempre un ZIP de PDF sueltos.',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'Correo es el valor por defecto: escala cerca de 1.0 y JPEG cerca de 0.55. Impresión es más suave. El máximo encoge más.',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'Cifrado, dañado o sin memoria omite solo esa fila. Nombres repetidos en el ZIP pasan a nombre (2).pdf.',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'Un archivo solo de texto puede apenas encogerse. Es esperable; la tabla igual informa los tamaños.',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'Los archivos no salen del dispositivo y no se suben al servidor.',
	tool_batch_compress_pdfs_for_email_rules_title: 'Qué esperar',
	tool_batch_compress_pdfs_for_email_sample: 'Cargar ejemplo',
	tool_batch_compress_pdfs_for_email_status_compressing: 'Comprimiendo cada PDF para el correo…',
	tool_batch_compress_pdfs_for_email_status_done: 'Lote listo: revisa la tabla y descarga el ZIP.',
	tool_batch_compress_pdfs_for_email_status_ok: 'Comprimido',
	tool_batch_compress_pdfs_for_email_status_skip: 'Omitido',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} listos · {skip} omitidos · ahorrados {saved}',
	tool_batch_compress_pdfs_for_email_title: 'Comprimir PDF para correo en lote',
	tool_batch_compress_pdfs_for_email_usecase_1: 'Un montón de presupuestos que juntos superan el tope de 25 MB del buzón.',
	tool_batch_compress_pdfs_for_email_usecase_2: 'Enviar tickets escaneados como adjuntos sueltos, no como un cuadernillo.',
	tool_batch_compress_pdfs_for_email_usecase_3: 'Encoger varios PDF antes del correo sin fusionarlos.',
	tool_batch_compress_pdfs_for_email_usecases_title: 'Cuándo viene bien',
	tool_batch_compress_pdfs_for_email_warn_large: 'Hay un archivo de más de 40 MB; esta pestaña puede quedarse sin memoria en esa fila.',
};

export default es;
