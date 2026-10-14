/**
 * i18n tool shard (compare-two-pdfs / es).
 * Compara la capa de texto de dos PDF: resalta lo añadido y lo eliminado, muestra páginas; sin OCR.
 */
import type { SiteLangDict } from '../../../types';

/** Diccionario de textos en español para la herramienta «Comparar dos PDF». */
const es: SiteLangDict = {
	tool_compare_two_pdfs_title: "Comparar dos PDF — resaltar diferencias de texto",
	tool_compare_two_pdfs_desc: "Compara el texto de dos PDF y resalta los cambios; sin subir al servidor. Descarga el resultado en HTML.",
	tool_compare_two_pdfs_description:
		"Compara dos PDF y resalta palabra por palabra el texto añadido y eliminado. Pasos: elige PDF A y PDF B, pulsa Comparar y usa Descargar diff HTML. Ejemplo: «treinta días» frente a «sesenta días» queda marcado. Solo capa de texto: los escaneos necesitan OCR antes.",
	tool_compare_two_pdfs_file_a: "PDF A (versión anterior / original)",
	tool_compare_two_pdfs_file_b: "PDF B (versión nueva / revisada)",
	tool_compare_two_pdfs_choose_file: "Elige un PDF o arrástralo a este recuadro",
	tool_compare_two_pdfs_choose_files: "Elegir archivos",
	tool_compare_two_pdfs_drop_hint: "También puedes soltar un PDF aquí. Todo se procesa en esta pestaña.",
	tool_compare_two_pdfs_compare: "Comparar",
	tool_compare_two_pdfs_download: "Descargar diff HTML",
	tool_compare_two_pdfs_sample: "Cargar ejemplo",
	tool_compare_two_pdfs_clear: "Borrar",
	tool_compare_two_pdfs_advanced: "Ajustes avanzados (opcional)",
	tool_compare_two_pdfs_ignore_case: "No distinguir mayúsculas y minúsculas",
	tool_compare_two_pdfs_ignore_space: "Unificar espacios repetidos y saltos de línea",
	tool_compare_two_pdfs_advanced_hint: "Útil cuando una exportación corta las líneas en otro sitio pero el texto es el mismo.",
	tool_compare_two_pdfs_result_label: "Diferencias de texto (A → B)",
	tool_compare_two_pdfs_legend_added: "Añadido en B",
	tool_compare_two_pdfs_legend_removed: "Eliminado de A",
	tool_compare_two_pdfs_empty: "Primero elige PDF A y PDF B.",
	tool_compare_two_pdfs_err_convert: "No se pudo generar la comparación. Recarga la página e inténtalo de nuevo.",
	tool_compare_two_pdfs_err_encrypted: "Este PDF parece protegido con contraseña. Desbloquéalo y vuelve a comparar.",
	tool_compare_two_pdfs_err_load: "No se pudo leer uno de los PDF.",
	tool_compare_two_pdfs_err_notext: "No hay texto seleccionable. Un PDF escaneado (solo imagen) necesita OCR antes de poder compararlo aquí.",
	tool_compare_two_pdfs_err_pdfjs: "No se pudo cargar el visor de PDF.",
	tool_compare_two_pdfs_status_working: "Extrayendo el texto y comparando…",
	tool_compare_two_pdfs_status_done: "Listo: en verde lo añadido en B y en rojo lo eliminado de A. Descargar guarda un archivo HTML.",
	tool_compare_two_pdfs_status_identical: "Con las opciones actuales no hay diferencias de texto.",
	tool_compare_two_pdfs_summary_tpl: "{added} añadidos · {removed} eliminados",
	tool_compare_two_pdfs_pages_tpl: "páginas A={a}, B={b}",
	tool_compare_two_pdfs_warn_large: "Archivo grande: la comparación puede tardar.",
	tool_compare_two_pdfs_how_title: "Cómo comparar dos PDF",
	tool_compare_two_pdfs_how_body:
		"Se lee la capa de texto de cada PDF y se comparan palabra por palabra. No se revisan el diseño, las fuentes ni las imágenes: solo el texto que puedes seleccionar.",
	tool_compare_two_pdfs_how_item_1: "Elige el PDF A (original) y el PDF B (revisado), o arrastra cada archivo a su recuadro.",
	tool_compare_two_pdfs_how_item_2: "Si lo necesitas, abre Ajustes avanzados para no distinguir mayúsculas o unificar espacios.",
	tool_compare_two_pdfs_how_item_3: "Pulsa Comparar y espera a que la barra de progreso termine de previsualizar y extraer ambos archivos.",
	tool_compare_two_pdfs_how_item_4: "Revisa el resaltado verde y rojo y los contadores; luego pulsa Descargar diff HTML si quieres guardarlo.",
	tool_compare_two_pdfs_why_choose_title: "Por qué usar Comparar dos PDF",
	tool_compare_two_pdfs_why_choose_item_1: "Ves las dos vistas previas y, debajo, un único resaltado de cambios palabra por palabra.",
	tool_compare_two_pdfs_why_choose_item_2: "Cuenta cuántos fragmentos se añadieron y cuántos se eliminaron, y muestra las páginas de cada archivo.",
	tool_compare_two_pdfs_why_choose_item_3: "Puedes ignorar mayúsculas y espacios cuando una exportación solo cambió los saltos de línea.",
	tool_compare_two_pdfs_why_choose_item_4: "Avisos claros si el PDF tiene contraseña o si es un escaneo sin capa de texto.",
	tool_compare_two_pdfs_why_choose_item_5: "Funciona en el navegador: los PDF no se suben al servidor.",
	tool_compare_two_pdfs_rules_title: "Reglas",
	tool_compare_two_pdfs_rules_body: "Solo se compara la capa de texto; no es una comparación visual ni píxel a píxel.",
	tool_compare_two_pdfs_rules_item_1: "Se extrae el texto seleccionable de A y B con PDF.js y se resaltan los cambios con jsdiff.",
	tool_compare_two_pdfs_rules_item_2: "Todo ocurre en esta pestaña; elegir un archivo no lo envía a ningún servidor.",
	tool_compare_two_pdfs_rules_item_3: "No hay OCR. Los escaneos que solo son imagen deben pasar antes por un OCR.",
	tool_compare_two_pdfs_rules_item_4: "Si el PDF tiene contraseña o está dañado, verás un mensaje de error comprensible.",
	tool_compare_two_pdfs_rules_item_5: "La descarga guarda el texto resaltado como HTML, no como PDF anotado.",
	tool_compare_two_pdfs_example_title: "Ejemplo",
	tool_compare_two_pdfs_example:
		"Cargar ejemplo crea dos contratos de una página. A dice «El pago vence en treinta días.» y B dice «El pago vence en sesenta días.». Al pulsar Comparar, «treinta» aparece en rojo como eliminado y «sesenta» en verde como añadido. Con «No distinguir mayúsculas y minúsculas» activado, «Días» y «días» cuentan como iguales.",
	tool_compare_two_pdfs_usecases_title: "Cuándo te sirve",
	tool_compare_two_pdfs_usecase_1: "Revisar el contrato en PDF que te devolvieron frente a la versión que enviaste la semana pasada.",
	tool_compare_two_pdfs_usecase_2: "Detectar cambios de redacción en unas condiciones o una política en PDF antes de firmar.",
	tool_compare_two_pdfs_usecase_3: "Comparar dos exportaciones cuando solo importan las palabras, no las fuentes ni los márgenes.",
	tool_compare_two_pdfs_usecase_4: "Comparar borradores confidenciales sin que salgan del dispositivo.",
	tool_compare_two_pdfs_faq_q1: "¿Se suben mis PDF a algún servidor?",
	tool_compare_two_pdfs_faq_a1:
		"No. La vista previa y la extracción del texto se hacen en la pestaña del navegador. Los scripts se cargan desde este mismo sitio, pero el contenido de tus archivos no sale del dispositivo.",
	tool_compare_two_pdfs_faq_q2: "¿Por qué un PDF escaneado dice «no hay texto seleccionable»?",
	tool_compare_two_pdfs_faq_a2:
		"Un escaneo es una imagen sin capa de texto y esta página no hace OCR. Pásalo por un OCR, exporta un PDF con texto buscable y compáralo aquí.",
	tool_compare_two_pdfs_faq_q3: "¿Y si el PDF tiene contraseña?",
	tool_compare_two_pdfs_faq_a3:
		"Los archivos cifrados no se pueden abrir aquí. Desbloquéalo en tu lector de PDF, guarda una copia sin protección y elige esa copia.",
	tool_compare_two_pdfs_faq_q4: "¿En qué se diferencia de comparar texto plano?",
	tool_compare_two_pdfs_faq_a4:
		"Aquí sueltas directamente los PDF, ves sus vistas previas y el número de páginas. La herramienta de comparar textos sirve para texto pegado o archivos .txt, sin leer PDF.",
	tool_compare_two_pdfs_faq_q5: "¿Compara el diseño, las imágenes o las firmas?",
	tool_compare_two_pdfs_faq_a5:
		"No. Solo compara el texto seleccionable. Un logotipo movido o una fuente distinta con las mismas palabras se verán idénticos.",
	tool_compare_two_pdfs_faq_q6: "¿Qué guarda el botón de descarga?",
	tool_compare_two_pdfs_faq_a6:
		"Un archivo HTML con el mismo resaltado verde y rojo que ves en pantalla, práctico para enviarlo por correo o archivarlo. No es un PDF con anotaciones.",
	tool_compare_two_pdfs_faq_q7: "¿Cuándo conviene ignorar mayúsculas o espacios?",
	tool_compare_two_pdfs_faq_a7:
		"Cuando una de las exportaciones solo cambió las mayúsculas o los saltos de línea. Actívalo si la redacción es la misma pero el texto extraído no coincide.",
	tool_compare_two_pdfs_article: "Compara el texto seleccionable de dos PDF y descarga en HTML las diferencias palabra por palabra.",
	tool_compare_two_pdfs_references: "PDF.js para extraer el texto; jsdiff para resaltar las diferencias palabra por palabra.",
	tool_compare_two_pdfs_ref_a_label: "PDF.js — visor de PDF de Mozilla",
	tool_compare_two_pdfs_ref_b_label: "jsdiff — biblioteca para comparar textos",
};

export default es;
