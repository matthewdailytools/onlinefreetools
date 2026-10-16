/**
 * write-countif-formula-in-excel 西班牙语 i18n 分片：fórmula COUNTIF、comodines y celdas en blanco。
 */
import type { SiteLangDict } from '../../../types';

/** 西班牙语站点文案字典（herramienta COUNTIF） */
const es: SiteLangDict = {
	tool_write_countif_formula_in_excel_title: 'Escribir fórmula COUNTIF en Excel — contar con comodines y criterios',
	tool_write_countif_formula_in_excel_description:
		'Indica un rango A1 y un criterio para obtener una fórmula COUNTIF lista para copiar. Ejemplo: A2:A6 y West → =COUNTIF(A2:A6,"West"). Comodines * y ?, operadores como >10 y celdas en blanco con "". Vista previa en tabla de muestra; todo en el navegador, sin subir al servidor.',
	tool_write_countif_formula_in_excel_article:
		'Escribe un rango A1 y un criterio, copia la fórmula COUNTIF completa (texto, números, operadores o comodines) y mira cuántas celdas de la muestra coinciden antes de pegar en Excel.',
	tool_write_countif_formula_in_excel_desc:
		'Un rango y un criterio; copia la fórmula COUNTIF con comodines, operadores o celdas vacías.',

	tool_write_countif_formula_in_excel_range: 'Rango',
	tool_write_countif_formula_in_excel_range_ph: 'p. ej. A2:A6',
	tool_write_countif_formula_in_excel_criteria: 'Criterio',
	tool_write_countif_formula_in_excel_crit_ph: 'p. ej. West, *west* o >10',
	tool_write_countif_formula_in_excel_hint:
		'Rango en notación A1. El asterisco (*) encaja cualquier secuencia; el signo de interrogación (?) un solo carácter. Operadores como >10 van entre comillas en la fórmula. Celdas en blanco: criterio "".',
	tool_write_countif_formula_in_excel_chips_label: 'Criterios rápidos',
	tool_write_countif_formula_in_excel_write: 'Escribir fórmula',
	tool_write_countif_formula_in_excel_sample: 'Ejemplo',
	tool_write_countif_formula_in_excel_copy: 'Copiar',
	tool_write_countif_formula_in_excel_clear: 'Borrar',
	tool_write_countif_formula_in_excel_formula: 'Fórmula',
	tool_write_countif_formula_in_excel_preview_title: 'Vista previa de coincidencias',
	tool_write_countif_formula_in_excel_col_cell: 'Celda',
	tool_write_countif_formula_in_excel_col_value: 'Valor',
	tool_write_countif_formula_in_excel_steps_title: 'Pasos',
	tool_write_countif_formula_in_excel_empty: 'Escribe rango y criterio, o carga un ejemplo primero.',
	tool_write_countif_formula_in_excel_err_range: 'Usa un rango A1, por ejemplo A2:A6 o $B$2:$B$10.',
	tool_write_countif_formula_in_excel_copied: 'Fórmula copiada.',
	tool_write_countif_formula_in_excel_row_count: 'Coincidencias',
	tool_write_countif_formula_in_excel_row_quoted: 'Literal del criterio',
	tool_write_countif_formula_in_excel_row_match_tpl: '{n} de {total} celdas de muestra coinciden.',
	tool_write_countif_formula_in_excel_step_range_tpl: 'Rango: {r}',
	tool_write_countif_formula_in_excel_step_crit_tpl: 'Criterio: {c}',
	tool_write_countif_formula_in_excel_step_lit_tpl: 'Literal en la fórmula: {lit}',
	tool_write_countif_formula_in_excel_step_out_tpl: 'Resultado: {f}',
	tool_write_countif_formula_in_excel_result_note:
		'La vista previa es una coincidencia simplificada en el navegador, para aprender la regla. Pega la fórmula en Excel o Google Sheets y compruébala con tus datos. En algunos Excel locales el separador de argumentos es ; en lugar de ,.',
	tool_write_countif_formula_in_excel_chip_eq: 'Igual a West',
	tool_write_countif_formula_in_excel_chip_contains: 'Contiene west (*west*)',
	tool_write_countif_formula_in_excel_chip_gt: 'Mayor que 10',
	tool_write_countif_formula_in_excel_chip_blank: 'Celdas en blanco',
	tool_write_countif_formula_in_excel_header_region: 'Región',
	tool_write_countif_formula_in_excel_header_qty: 'Cant.',
	tool_write_countif_formula_in_excel_ref_ms_label: 'Microsoft: función COUNTIF',

	tool_write_countif_formula_in_excel_how_title: 'Cómo escribir una fórmula COUNTIF',
	tool_write_countif_formula_in_excel_how_body:
		'Escribe rango A1 y criterio, pulsa Escribir fórmula y copia el resultado a Excel. Ejemplo recorre igual, contiene, mayor que y celdas en blanco con recuento en vivo.',
	tool_write_countif_formula_in_excel_how_item_1: 'Indica un rango A1 como A2:A6 (también vale $A$2:$A$6).',
	tool_write_countif_formula_in_excel_how_item_2:
		'Un solo criterio: texto (West), comodín (*west*), operador (>10) o vacío para contar celdas en blanco.',
	tool_write_countif_formula_in_excel_how_item_3: 'Pulsa Escribir fórmula para obtener =COUNTIF(rango,criterio) y ver qué celdas de la muestra encajan.',
	tool_write_countif_formula_in_excel_how_item_4: 'Copia la fórmula en Excel y verifica con un rango que ya conozcas en tu hoja.',

	tool_write_countif_formula_in_excel_why_choose_title: 'Qué aporta este generador COUNTIF',
	tool_write_countif_formula_in_excel_why_choose_item_1:
		'=COUNTIF(...) completo y listo para pegar, con comillas correctas para texto, operadores y "" para blancos.',
	tool_write_countif_formula_in_excel_why_choose_item_2:
		'Comodines al estilo Excel: * cualquier secuencia, ? un carácter, ~ para un * o ? literal.',
	tool_write_countif_formula_in_excel_why_choose_item_3: 'Tabla de muestra que resalta coincidencias y muestra el recuento antes de pegar.',
	tool_write_countif_formula_in_excel_why_choose_item_4: 'Chips de un clic: igual, contiene (*west*), mayor que y celdas en blanco.',
	tool_write_countif_formula_in_excel_why_choose_item_5:
		'Solo COUNTIF de una condición; para varios rangos o criterios a la vez usa COUNTIFS.',

	tool_write_countif_formula_in_excel_rules_title: 'Reglas de COUNTIF y comillas',
	tool_write_countif_formula_in_excel_rules_body: 'COUNTIF cuenta celdas de un rango que cumplen un criterio. Comillas y comodines siguen Excel.',
	tool_write_countif_formula_in_excel_rules_item_1: 'Sintaxis: =COUNTIF(rango, criterio). Ejemplo: =COUNTIF(A2:A6,"West").',
	tool_write_countif_formula_in_excel_rules_item_2: '* encaja cualquier secuencia; ? un carácter. Escapa * o ? literales con ~.',
	tool_write_countif_formula_in_excel_rules_item_3: 'Números sueltos sin comillas (10). Texto y comparaciones entre comillas (">10", "<>0").',
	tool_write_countif_formula_in_excel_rules_item_4: 'Celdas en blanco: criterio "". No vacías: "<>".',
	tool_write_countif_formula_in_excel_rules_item_5:
		'COUNTIFS sirve para varios criterios o rangos. Esta página solo genera COUNTIF simple. Algunos Excel usan ; como separador.',

	tool_write_countif_formula_in_excel_example_title: 'Ejemplos resueltos',
	tool_write_countif_formula_in_excel_example:
		'Ejemplo empieza con A2:A6 y West → =COUNTIF(A2:A6,"West") y tres coincidencias en la columna región. Sigue *west* → =COUNTIF(A2:A6,"*west*"). Luego B2:B6 y >10 → =COUNTIF(B2:B6,">10"). El blanco usa "" para contar vacíos. Pega en Excel y comprueba con tu hoja real.',

	tool_write_countif_formula_in_excel_usecases_title: 'Cuándo conviene COUNTIF',
	tool_write_countif_formula_in_excel_usecase_1: 'Listas de asistencia o estado: contar filas igual a Presente, Ausente o una región como West.',
	tool_write_countif_formula_in_excel_usecase_2: 'Umbrales de inventario: contar cantidades por encima de un número con >10 o >=100.',
	tool_write_countif_formula_in_excel_usecase_3: 'Texto parcial: contar celdas que contienen un fragmento con *west* o empiezan por West*.',
	tool_write_countif_formula_in_excel_usecase_4: 'Limpieza de datos: contar celdas en blanco en una columna antes de rellenar, con criterio "".',

	tool_write_countif_formula_in_excel_faq_q1: '¿Cómo escribo una fórmula COUNTIF en Excel?',
	tool_write_countif_formula_in_excel_faq_a1:
		'Usa =COUNTIF(rango, criterio). Rango en estilo A1 (A2:A6) y un criterio. Aquí se arma la fórmula entera y ves coincidencias en la muestra para copiar y verificar.',
	tool_write_countif_formula_in_excel_faq_q2: '¿Cómo funcionan los comodines en COUNTIF (tipo LIKE)?',
	tool_write_countif_formula_in_excel_faq_a2:
		'* para cualquier secuencia de caracteres y ? para exactamente uno. Ejemplo: "*west*" coincide con West, Midwest, etc. Pon ~ delante de un * o ? literal.',
	tool_write_countif_formula_in_excel_faq_q3: '¿Cuándo debo usar COUNTIFS?',
	tool_write_countif_formula_in_excel_faq_a3:
		'Cuando deben cumplirse dos o más rangos o criterios (p. ej. Región = West Y Cant. > 10). Esta página solo genera COUNTIF de una condición.',
	tool_write_countif_formula_in_excel_faq_q4: '¿Cómo se ponen comillas a números y operadores?',
	tool_write_countif_formula_in_excel_faq_a4: 'Un número solo como 10 va sin comillas. Criterios con operadores van entre comillas: ">10", "<=5", "<>0". El texto siempre entre comillas.',
	tool_write_countif_formula_in_excel_faq_q5: '¿Cómo cuento celdas en blanco con COUNTIF?',
	tool_write_countif_formula_in_excel_faq_a5:
		'Criterio "" (dos comillas dobles), p. ej. =COUNTIF(A2:A6,""). Para no vacías usa "<>". El chip Celdas en blanco carga ese ejemplo.',
	tool_write_countif_formula_in_excel_faq_q6: '¿Se suben mis datos?',
	tool_write_countif_formula_in_excel_faq_a6:
		'No. La fórmula se genera en tu navegador; lo que escribes no se sube al servidor. Verifica siempre en tu hoja real.',
	tool_write_countif_formula_in_excel_faq_q7: '¿Por qué mi Excel usa punto y coma en lugar de coma?',
	tool_write_countif_formula_in_excel_faq_a7:
		'Muchos Excel en español usan ; como separador de lista. Tras copiar, cambia =COUNTIF(A2:A6,"West") por =COUNTIF(A2:A6;"West") si tu versión lo exige.',

	tool_write_countif_formula_in_excel_add: 'Añadir fila',
	tool_write_countif_formula_in_excel_alt: 'Si #N/A entonces',
	tool_write_countif_formula_in_excel_bar: 'Barras',
	tool_write_countif_formula_in_excel_buyer: 'Comprador',
	tool_write_countif_formula_in_excel_cell: 'Celda',
	tool_write_countif_formula_in_excel_count: 'Contar',
	tool_write_countif_formula_in_excel_csv: 'Pegar CSV',
	tool_write_countif_formula_in_excel_download: 'Descargar xlsx',
	tool_write_countif_formula_in_excel_draw: 'Dibujar',
	tool_write_countif_formula_in_excel_else: 'Si no',
	tool_write_countif_formula_in_excel_err_read: 'No se pudo leer el archivo. Prueba xlsx, xls o csv.',
	tool_write_countif_formula_in_excel_file: 'Archivo de hoja',
	tool_write_countif_formula_in_excel_filter: 'Filtrar',
	tool_write_countif_formula_in_excel_inner: 'Fórmula interna',
	tool_write_countif_formula_in_excel_line: 'Línea',
	tool_write_countif_formula_in_excel_lines: 'desc,qty,price',
	tool_write_countif_formula_in_excel_need_lib: 'No se cargó la biblioteca de hojas. Revisa la red y actualiza.',
	tool_write_countif_formula_in_excel_note_2016: 'IFS requiere Excel 2019, Microsoft 365 o posterior.',
	tool_write_countif_formula_in_excel_op_blank: 'está en blanco',
	tool_write_countif_formula_in_excel_op_contains: 'contiene',
	tool_write_countif_formula_in_excel_op_eq: 'igual a',
	tool_write_countif_formula_in_excel_row_field: 'Campo de fila',
	tool_write_countif_formula_in_excel_seller: 'Vendedor',
	tool_write_countif_formula_in_excel_sheet: 'Hoja',
	tool_write_countif_formula_in_excel_sum: 'Suma',
	tool_write_countif_formula_in_excel_tax: 'Impuesto %',
	tool_write_countif_formula_in_excel_trial: 'Valor de prueba',
	tool_write_countif_formula_in_excel_val_field: 'Campo de valor',
};

export default es;
