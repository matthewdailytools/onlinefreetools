/**
 * write-ifs-formula-in-excel 西班牙语 i18n 分片：条件有序 → IFS / SI.CONJUNTO；TRUE/VERDADERO 兜底；Excel 2019+。
 */
import type { SiteLangDict } from '../../../types';

/** 西班牙语站点文案字典（generador de fórmula IFS para Excel） */
const es: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: 'Generador de fórmula IFS para Excel — pruebas en orden con TRUE de cierre',
	tool_write_ifs_formula_in_excel_description:
		'Arme una fórmula IFS para Excel 2019 o Microsoft 365 con pruebas ordenadas de igualdad, contiene o celda vacía. Ejemplo: West → A, East → B y, si no, Other → =IFS(A1="West","A",A1="East","B",TRUE,"Other"). Pruebe en el navegador y copie. No está en Excel 2016 perpetuo; en Excel en español la función local es SI.CONJUNTO.',
	tool_write_ifs_formula_in_excel_article:
		'Añada pruebas en orden, defina cada resultado y un else con TRUE, pruebe un valor y copie la IFS completa.',
	tool_write_ifs_formula_in_excel_desc:
		'Pruebas ordenadas → fórmula IFS con TRUE de cierre, prueba en el navegador y copia.',

	tool_write_ifs_formula_in_excel_hint:
		'Las condiciones se evalúan de arriba abajo. El generador añade TRUE,else como cierre. Requiere Excel 2019, Microsoft 365 o posterior. Nombres en inglés y comas.',
	tool_write_ifs_formula_in_excel_note_2016:
		'IFS necesita Excel 2019, Microsoft 365 o posterior. En Excel más antiguo use el generador de SI anidados.',
	tool_write_ifs_formula_in_excel_cell_label: 'Celda objetivo',
	tool_write_ifs_formula_in_excel_cell_ph: 'p. ej. A1',
	tool_write_ifs_formula_in_excel_trial_label: 'Valor de prueba',
	tool_write_ifs_formula_in_excel_trial_ph: 'p. ej. West',
	tool_write_ifs_formula_in_excel_else_label: 'Else (TRUE de cierre)',
	tool_write_ifs_formula_in_excel_else_ph: 'p. ej. Other',
	tool_write_ifs_formula_in_excel_col_op: 'Prueba',
	tool_write_ifs_formula_in_excel_col_val: 'Valor / texto',
	tool_write_ifs_formula_in_excel_col_then: 'Entonces',
	tool_write_ifs_formula_in_excel_op_eq: 'igual a',
	tool_write_ifs_formula_in_excel_op_contains: 'contiene',
	tool_write_ifs_formula_in_excel_op_blank: 'está vacía',
	tool_write_ifs_formula_in_excel_add: 'Añadir condición',
	tool_write_ifs_formula_in_excel_write: 'Escribir fórmula',
	tool_write_ifs_formula_in_excel_sample: 'Cargar ejemplo',
	tool_write_ifs_formula_in_excel_clear: 'Borrar',
	tool_write_ifs_formula_in_excel_copy: 'Copiar fórmula',
	tool_write_ifs_formula_in_excel_copied: 'Copiado.',
	tool_write_ifs_formula_in_excel_formula_label: 'Fórmula IFS',
	tool_write_ifs_formula_in_excel_trial_result_label: 'Resultado de prueba',
	tool_write_ifs_formula_in_excel_empty: 'Añada al menos una condición (o cargue el ejemplo) y escriba la fórmula.',
	tool_write_ifs_formula_in_excel_copy_fail: 'No se pudo copiar. Seleccione la fórmula y cópiela a mano.',

	tool_write_ifs_formula_in_excel_how_title: 'Cómo escribir una fórmula IFS',
	tool_write_ifs_formula_in_excel_how_body:
		'Indique la celda y las pruebas en orden. Escribir fórmula muestra IFS con TRUE de cierre y evalúa su valor de prueba. La copia usa sintaxis inglesa de Excel con comas.',
	tool_write_ifs_formula_in_excel_how_item_1: 'Defina la celda objetivo y, si quiere, un valor de prueba.',
	tool_write_ifs_formula_in_excel_how_item_2: 'Añada filas igual a, contiene o vacía en el orden de evaluación.',
	tool_write_ifs_formula_in_excel_how_item_3: 'Complete cada resultado Entonces y el valor Else (emparejado con TRUE).',
	tool_write_ifs_formula_in_excel_how_item_4:
		'Pulse Escribir fórmula, revise la prueba y copie. Use SI anidados si sigue en Excel 2016.',

	tool_write_ifs_formula_in_excel_why_choose_title: 'Qué aporta este generador IFS',
	tool_write_ifs_formula_in_excel_why_choose_item_1: 'Pruebas ordenadas igual / contiene / vacía en una sola IFS.',
	tool_write_ifs_formula_in_excel_why_choose_item_2: 'Par automático TRUE,else de cierre.',
	tool_write_ifs_formula_in_excel_why_choose_item_3: 'Prueba en el navegador antes de pegar en Excel.',
	tool_write_ifs_formula_in_excel_why_choose_item_4: 'Ejemplos que rotan regiones, notas y contiene.',
	tool_write_ifs_formula_in_excel_why_choose_item_5: 'Límite claro de Excel 2016 con enlace a SI anidados.',

	tool_write_ifs_formula_in_excel_rules_title: 'Reglas que debe esperar',
	tool_write_ifs_formula_in_excel_rules_body:
		'El generador emite IFS(prueba,valor,...,TRUE,else). Las comillas del texto se duplican dentro de cadenas de Excel.',
	tool_write_ifs_formula_in_excel_rules_item_1: 'Las comillas del texto se duplican dentro de cadenas de Excel.',
	tool_write_ifs_formula_in_excel_rules_item_2:
		'Contiene emite ISNUMBER(SEARCH(...)); vacío comprueba texto vacío.',
	tool_write_ifs_formula_in_excel_rules_item_3: 'Gana la primera prueba que coincida; el TRUE de cierre va al final.',
	tool_write_ifs_formula_in_excel_rules_item_4:
		'IFS necesita Excel 2019, Microsoft 365 o posterior — no Excel 2016 perpetuo.',
	tool_write_ifs_formula_in_excel_rules_item_5:
		'Nombres en inglés y comas pueden requerir localización en su instalación de Excel (p. ej. SI.CONJUNTO y ;).',

	tool_write_ifs_formula_in_excel_example_title: 'Ejemplos resueltos',
	tool_write_ifs_formula_in_excel_example:
		'Cargar ejemplo empieza con West → A y East → B, else Other → =IFS(...,TRUE,"Other"); prueba West → A. El siguiente arma iguales de notas. El último usa contiene para «promo».',

	tool_write_ifs_formula_in_excel_usecases_title: 'Cuándo usar un generador de fórmula IFS',
	tool_write_ifs_formula_in_excel_usecase_1: 'Mapear códigos de región a etiquetas sin paréntesis de SI muy anidados.',
	tool_write_ifs_formula_in_excel_usecase_2: 'Borrador de bandas de nota o riesgo en libros de Microsoft 365.',
	tool_write_ifs_formula_in_excel_usecase_3: 'Probar el orden de ramas antes de pegar en una hoja compartida.',
	tool_write_ifs_formula_in_excel_usecase_4: 'Pasar a la página de SI anidados si el equipo aún usa Excel 2016.',

	tool_write_ifs_formula_in_excel_faq_q1: '¿Excel 2016 ejecuta IFS?',
	tool_write_ifs_formula_in_excel_faq_a1:
		'La versión perpetua de Excel 2016 no. Use SI anidados, Excel 2019 o posterior, o Microsoft 365.',
	tool_write_ifs_formula_in_excel_faq_q2: '¿Qué pasa si ninguna prueba coincide?',
	tool_write_ifs_formula_in_excel_faq_a2: 'TRUE se empareja con su valor else como resultado de cierre.',
	tool_write_ifs_formula_in_excel_faq_q3: '¿Se suben los valores?',
	tool_write_ifs_formula_in_excel_faq_a3: 'No. La generación y la prueba se quedan en su navegador.',
	tool_write_ifs_formula_in_excel_faq_q4: '¿Excel localizado la aceptará?',
	tool_write_ifs_formula_in_excel_faq_a4:
		'Algunas instalaciones necesitan nombres traducidos (SI.CONJUNTO) o separadores con punto y coma.',
	tool_write_ifs_formula_in_excel_faq_q5: '¿En qué se diferencia del SI anidado?',
	tool_write_ifs_formula_in_excel_faq_a5:
		'IFS es una lista plana de pruebas. El SI anidado envuelve SI dentro de SI. Use la página relacionada de SI anidados para Excel antiguo.',
	tool_write_ifs_formula_in_excel_faq_q6: '¿Qué emite contiene?',
	tool_write_ifs_formula_in_excel_faq_a6: 'ISNUMBER(SEARCH("texto", celda)) como argumento de prueba dentro de IFS.',

	tool_write_ifs_formula_in_excel_references: 'Documentación de Microsoft sobre la función IFS.',
	tool_write_ifs_formula_in_excel_ref_a_label: 'Microsoft — función IFS',
	tool_write_ifs_formula_in_excel_ref_b_label: 'Microsoft — función IF',
};

export default es;
