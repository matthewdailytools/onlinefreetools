/**
 * i18n（compare-two-word-documents-for-differences / es）。
 * H1: Comparar dos documentos Word para ver diferencias.
 * 检索向独立重写：comparar docx / Word; 非 Microsoft Revisar → Comparar。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'Elige dos .docx y mira solo el texto visible. No se reproducen estilos ni encabezados, ni el panel de revisión de Word. Los archivos se quedan en el dispositivo y no se suben al servidor.',
	tool_compare_two_word_documents_for_differences_clear: 'Borrar',
	tool_compare_two_word_documents_for_differences_compare: 'Comparar',
	tool_compare_two_word_documents_for_differences_desc:
		'Comparar dos documentos Word para ver diferencias: extrae texto visible de dos .docx en el navegador, sin subir al servidor.',
	tool_compare_two_word_documents_for_differences_description:
		'Comparar dos documentos Word para ver diferencias en el navegador. Proceso: elige dos .docx, extrae el texto visible de los párrafos y marca lo añadido y lo borrado. Los archivos no salen del dispositivo y no se suben al servidor. Ejemplo: dos memorandos cortos donde cambia una frase. Esto no es Revisar → Comparar de Microsoft; se descartan encabezados y estilos. El PDF no entra aquí.',
	tool_compare_two_word_documents_for_differences_empty: 'Primero elige dos archivos Word, o carga el ejemplo.',
	tool_compare_two_word_documents_for_differences_err_extract:
		'No se pudo leer el texto. Puede estar dañado, cifrado o no ser un .docx.',
	tool_compare_two_word_documents_for_differences_err_no_text: 'Ningún archivo tiene texto extraíble (vacío o solo imágenes).',
	tool_compare_two_word_documents_for_differences_err_not_docx: 'Usa .docx (Office Open XML). El .doc antiguo no se admite.',
	tool_compare_two_word_documents_for_differences_example:
		'Cargar ejemplo genera dos .docx mínimos. El segundo cambia “meet at noon” por “meet at 3pm”. Al entrar ya ves esa diferencia de redacción.',
	tool_compare_two_word_documents_for_differences_example_title: 'Ejemplo',
	tool_compare_two_word_documents_for_differences_faq_a1:
		'No. Se leen en esta pestaña. mammoth y jsdiff pueden llegar como código desde un CDN; tus documentos no se suben a nuestros servidores.',
	tool_compare_two_word_documents_for_differences_faq_a2:
		'No. Word sí compara formato y cambios registrados. Aquí solo se extrae el texto visible y se hace un diff de esa redacción. Encabezados, pies y estilos se tiran.',
	tool_compare_two_word_documents_for_differences_faq_a3:
		'Si falla la extracción, suele ser contraseña, archivo corrupto o no OOXML. Las páginas solo con imagen dan texto vacío.',
	tool_compare_two_word_documents_for_differences_faq_a4:
		"Acepta dos .docx y compara el texto extraído. No analiza PDF ni el formato .doc antiguo, y el resultado no incluye formato ni historial de revisiones de Word.",
	tool_compare_two_word_documents_for_differences_faq_q1: '¿Se suben mis archivos Word?',
	tool_compare_two_word_documents_for_differences_faq_q2: '¿Es lo mismo que Revisar → Comparar en Word?',
	tool_compare_two_word_documents_for_differences_faq_q3: '¿Por qué falla la extracción o faltan encabezados?',
	tool_compare_two_word_documents_for_differences_faq_q4: '¿Puedo comparar PDF o cualquier par de documentos?',
	tool_compare_two_word_documents_for_differences_how_body:
		'Mira la diferencia de redacción entre dos Word. Esta página no abre el panel de revisión.',
	tool_compare_two_word_documents_for_differences_how_item_1: 'Elige el primer .docx (original).',
	tool_compare_two_word_documents_for_differences_how_item_2: 'Elige el segundo .docx (revisado).',
	tool_compare_two_word_documents_for_differences_how_item_3:
		"Pulsa Comparar para extraer el texto visible y calcular las diferencias de redacción.",
	tool_compare_two_word_documents_for_differences_how_item_4: 'Lee en verde lo añadido y en rojo lo borrado.',
	tool_compare_two_word_documents_for_differences_how_title: 'Cómo usarlo',
	tool_compare_two_word_documents_for_differences_label_a: 'Primer documento Word',
	tool_compare_two_word_documents_for_differences_label_b: 'Segundo documento Word',
	tool_compare_two_word_documents_for_differences_legend: 'Verde = añadido · Rojo = borrado',
	tool_compare_two_word_documents_for_differences_load_sample: 'Cargar ejemplo',
	tool_compare_two_word_documents_for_differences_need_lib: 'No se cargó una biblioteca. Revisa la red y recarga.',
	tool_compare_two_word_documents_for_differences_no_diff: 'El texto extraído no tiene diferencias de redacción.',
	tool_compare_two_word_documents_for_differences_result_label: 'Diferencias de redacción',
	tool_compare_two_word_documents_for_differences_rules_body:
		'Tras extraer, se compara texto. El formato no es un rastro de revisiones.',
	tool_compare_two_word_documents_for_differences_rules_item_1:
		'mammoth lee párrafos visibles del OOXML. Ese texto se compara por líneas con jsdiff.',
	tool_compare_two_word_documents_for_differences_rules_item_2:
		'Encabezados, pies, comentarios y casi todos los estilos se descartan. Si solo cambió el formato, puede parecer idéntico.',
	tool_compare_two_word_documents_for_differences_rules_item_3: 'Un .docx cifrado o dañado falla. El .doc legado no se analiza.',
	tool_compare_two_word_documents_for_differences_rules_item_4:
		'No es “Comparar documentos” de Microsoft. Si necesitas formato con control de cambios, usa Word.',
	tool_compare_two_word_documents_for_differences_rules_title: 'Qué esperar al comparar',
	tool_compare_two_word_documents_for_differences_sample_a: 'Team memo\nPlease meet at noon.',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: 'Team memo\nPlease meet at 3pm.',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: '{added} añadidos, {removed} borrados',
	tool_compare_two_word_documents_for_differences_title: 'Comparar dos documentos Word para ver diferencias',
	tool_compare_two_word_documents_for_differences_usecase_1:
		'Borradores de contrato: ver qué frases cambiaron entre dos exportaciones .docx.',
	tool_compare_two_word_documents_for_differences_usecase_2: 'Actas: comparar el archivo de la reunión pasada con el de esta semana.',
	tool_compare_two_word_documents_for_differences_usecase_3: 'Tareas: dos entregas Word cuando importa la redacción, no el diseño.',
	tool_compare_two_word_documents_for_differences_usecases_title: 'Cuándo encaja',
};

export default es;
