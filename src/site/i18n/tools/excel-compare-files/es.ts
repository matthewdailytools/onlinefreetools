/**
 * i18n（excel-compare-files / es）。
 * H1: Comparar archivos de Excel（online 不进 H1）。
 * 默认第一张表；空单元格当空白串。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_excel_compare_files_article:
		'Elige dos hojas de cálculo y compara la hoja actual celda a celda. Las celdas vacías cuentan como cadena vacía. Los archivos se quedan en el dispositivo y no se suben al servidor.',
	tool_excel_compare_files_clear: 'Borrar',
	tool_excel_compare_files_col_addr: 'Celda',
	tool_excel_compare_files_col_left: 'Primer archivo',
	tool_excel_compare_files_col_right: 'Segundo archivo',
	tool_excel_compare_files_compare: 'Comparar',
	tool_excel_compare_files_desc:
		'Comparar archivos de Excel: elige dos tablas, compara la hoja actual celda a celda; se quedan en el dispositivo, sin subir al servidor.',
	tool_excel_compare_files_description:
		'Comparar archivos de Excel en el navegador. Proceso: elige dos xlsx o csv, selecciona la hoja actual (la primera por defecto) y lista las celdas con valor distinto. Los archivos no salen del dispositivo y no se suben al servidor. Ejemplo: dos tablas de 3 filas donde B3 pasa de 2 a 9. Un desplazamiento de columnas se compara por dirección, no por nombre de encabezado.',
	tool_excel_compare_files_empty: 'Primero elige dos archivos de hoja, o carga el ejemplo.',
	tool_excel_compare_files_err_read:
		'No se pudo leer la hoja. Prueba xlsx o csv y desprotege el libro si hace falta.',
	tool_excel_compare_files_example:
		'Cargar ejemplo compara dos tablas CSV. Los encabezados Name/Qty coinciden; la cantidad de Gadget es 2 frente a 9, así que se lista B3. Al abrir ya ves esa celda.',
	tool_excel_compare_files_example_title: 'Ejemplo',
	tool_excel_compare_files_faq_a1:
		'No. Los bytes se leen en esta pestaña con SheetJS. La biblioteca puede llegar desde un CDN; tus archivos no se suben a nuestros servidores.',
	tool_excel_compare_files_faq_a2:
		'Sí: la primera hoja queda seleccionada por defecto. Usa las listas si necesitas otra pestaña del mismo archivo. El resto no se compara hasta que las elijas.',
	tool_excel_compare_files_faq_a3:
		"Sí. El CSV se lee como una sola hoja, de modo que puedes comparar dos CSV o un CSV exportado con una hoja de Excel por dirección de celda.",
	tool_excel_compare_files_faq_a4:
		'Celdas ausentes y vacías se tratan como cadena vacía. Una columna desplazada sigue alineando A1 con A1, no “la columna Name” por encabezado, para no emparejar mal si se mueve el título.',
	tool_excel_compare_files_faq_q5: "¿Compara fórmulas y formato o solo valores mostrados?",
	tool_excel_compare_files_faq_a5: "Compara el texto mostrado que se lee de cada celda. No contrasta por separado fórmulas, estilos, comentarios, anchos de columna ni la estructura del libro; una fórmula distinta con el mismo valor guardado puede parecer igual.",
	tool_excel_compare_files_faq_q1: '¿Se suben mis archivos de Excel?',
	tool_excel_compare_files_faq_q2: '¿Solo compara la primera hoja?',
	tool_excel_compare_files_faq_q3: '¿Puedo comparar dos CSV aquí?',
	tool_excel_compare_files_faq_q4: '¿Cómo se tratan celdas vacías y columnas desplazadas?',
	tool_excel_compare_files_how_body: 'Elige dos tablas y mira qué direcciones de celda diferencian en las hojas actuales.',
	tool_excel_compare_files_how_item_1: 'Elige el primer archivo (xlsx, xls o csv).',
	tool_excel_compare_files_how_item_2: 'Elige el segundo archivo.',
	tool_excel_compare_files_how_item_3: 'Deja la primera hoja salvo que necesites otra pestaña.',
	tool_excel_compare_files_how_item_4: "Pulsa Comparar para listar las celdas cuyo texto mostrado difiere entre las hojas elegidas.",
	tool_excel_compare_files_how_title: 'Cómo usarlo',
	tool_excel_compare_files_label_a: 'Primera hoja de cálculo',
	tool_excel_compare_files_label_b: 'Segunda hoja de cálculo',
	tool_excel_compare_files_load_sample: 'Cargar ejemplo',
	tool_excel_compare_files_need_lib: 'SheetJS no se cargó. Revisa la red y recarga.',
	tool_excel_compare_files_no_diff: 'No hay diferencias de celda en las hojas actuales.',
	tool_excel_compare_files_result_label: 'Diferencias de celda',
	tool_excel_compare_files_rules_body: 'Los valores se comparan por dirección de cuadrícula solo en la hoja elegida.',
	tool_excel_compare_files_rules_item_1: 'SheetJS lee el libro. La hoja por defecto es el primer nombre del archivo.',
	tool_excel_compare_files_rules_item_2:
		'Cada celda se compara como texto tras la conversión. Vacías y ausentes son "".',
	tool_excel_compare_files_rules_item_3:
		'Si insertas una columna en un lado, el alineado sigue A1/B1, no las etiquetas de encabezado.',
	tool_excel_compare_files_rules_item_4:
		'Las demás hojas del libro se ignoran hasta que las elijas. No hay un barrido por defecto de todo el libro.',
	tool_excel_compare_files_rules_title: 'Qué esperar al comparar',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: 'Hoja del primer archivo',
	tool_excel_compare_files_sheet_b: 'Hoja del segundo archivo',
	tool_excel_compare_files_summary: '{n} celdas difieren',
	tool_excel_compare_files_title: 'Comparar archivos de Excel',
	tool_excel_compare_files_usecase_1: 'Presupuestos: dos listas de precios exportadas donde se movieron unas celdas.',
	tool_excel_compare_files_usecase_2: 'Asistencia o inventario en CSV, una semana contra otra.',
	tool_excel_compare_files_usecase_3: 'Tablas de deberes guardadas como xlsx por dos alumnos.',
	tool_excel_compare_files_usecases_title: 'Cuándo encaja',
};

export default es;
