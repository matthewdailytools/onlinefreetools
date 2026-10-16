/**
 * i18n 工具分片（write-nested-if-formula-for-excel / es）。
 * Condiciones ordenadas → SI anidado para Excel; prueba en el navegador; copiar. Claves = en.ts.
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "Generador de fórmula SI anidada para Excel — condiciones ordenadas listas para copiar",
	tool_write_nested_if_formula_for_excel_description: "Arma una fórmula SI anidada para Excel con pruebas de igual, contiene o vacío. Ejemplo: West→A, East→B, si no Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\")). Pruébala en el navegador y cópiala con nombres en inglés y comas.",
	tool_write_nested_if_formula_for_excel_article: "Añade condiciones ordenadas, define cada resultado y el SINO final, previsualiza un valor de prueba y copia el SI anidado completo.",
	tool_write_nested_if_formula_for_excel_desc: "Condiciones ordenadas → SI anidado con prueba en el navegador y copia.",

	tool_write_nested_if_formula_for_excel_hint: "Las condiciones se evalúan de arriba abajo. Gana la primera coincidencia. Contiene emite ISNUMBER(SEARCH(...)). Las fórmulas usan nombres en inglés y comas.",
	tool_write_nested_if_formula_for_excel_cell_label: "Celda objetivo",
	tool_write_nested_if_formula_for_excel_cell_ph: "p. ej. A1",
	tool_write_nested_if_formula_for_excel_trial_label: "Valor de prueba",
	tool_write_nested_if_formula_for_excel_trial_ph: "p. ej. West",
	tool_write_nested_if_formula_for_excel_else_label: "SINO (falso final)",
	tool_write_nested_if_formula_for_excel_else_ph: "p. ej. Other",
	tool_write_nested_if_formula_for_excel_col_op: "Prueba",
	tool_write_nested_if_formula_for_excel_col_val: "Valor / texto",
	tool_write_nested_if_formula_for_excel_col_then: "Entonces",
	tool_write_nested_if_formula_for_excel_op_eq: "igual a",
	tool_write_nested_if_formula_for_excel_op_contains: "contiene",
	tool_write_nested_if_formula_for_excel_op_blank: "está vacío",
	tool_write_nested_if_formula_for_excel_add: "Añadir condición",
	tool_write_nested_if_formula_for_excel_write: "Generar fórmula",
	tool_write_nested_if_formula_for_excel_sample: "Cargar ejemplo",
	tool_write_nested_if_formula_for_excel_clear: "Borrar",
	tool_write_nested_if_formula_for_excel_copy: "Copiar fórmula",
	tool_write_nested_if_formula_for_excel_copied: "Copiado.",
	tool_write_nested_if_formula_for_excel_formula_label: "Fórmula SI anidada",
	tool_write_nested_if_formula_for_excel_trial_result_label: "Resultado de prueba",
	tool_write_nested_if_formula_for_excel_empty: "Añade al menos una condición (o carga el ejemplo) y genera la fórmula.",
	tool_write_nested_if_formula_for_excel_copy_fail: "No se pudo copiar. Selecciona la fórmula y cópiala a mano.",

	tool_write_nested_if_formula_for_excel_how_title: "Cómo escribir una fórmula SI anidada",
	tool_write_nested_if_formula_for_excel_how_body: "Indica la celda y las condiciones en orden. Generar fórmula muestra el SI anidado y evalúa tu valor de prueba. Copiar pega sintaxis Excel en inglés con comas.",
	tool_write_nested_if_formula_for_excel_how_item_1: "Define la celda objetivo y, si quieres, un valor de prueba.",
	tool_write_nested_if_formula_for_excel_how_item_2: "Añade filas de igual, contiene o vacío en el orden en que Excel debe probarlas.",
	tool_write_nested_if_formula_for_excel_how_item_3: "Rellena cada Entonces y el SINO final.",
	tool_write_nested_if_formula_for_excel_how_item_4: "Pulsa Generar fórmula, revisa el resultado de prueba y Copiar fórmula.",

	tool_write_nested_if_formula_for_excel_why_choose_title: "Por qué usar este generador de fórmula SI anidada para Excel",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "Igual / contiene / vacío en un solo SI anidado ordenado.",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "Prueba en el navegador para ver qué rama gana antes de pegar.",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "Ejemplos rotativos: regiones, tramos de nota y contiene «promo».",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "Copia con un clic la cadena completa de la fórmula.",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "Aclara que genera SI anidado, no SI.CONJUNTO/IFS (véase la página relacionada).",

	tool_write_nested_if_formula_for_excel_rules_title: "Reglas que debes esperar",
	tool_write_nested_if_formula_for_excel_rules_body: "El generador emite IF(...) anidados clásicos. Las comillas de texto se duplican dentro de cadenas Excel.",
	tool_write_nested_if_formula_for_excel_rules_item_1: "Las comillas de texto se duplican dentro de cadenas Excel.",
	tool_write_nested_if_formula_for_excel_rules_item_2: "Contiene emite ISNUMBER(SEARCH(...)); vacío prueba texto vacío.",
	tool_write_nested_if_formula_for_excel_rules_item_3: "Gana la primera condición que coincida (de arriba abajo).",
	tool_write_nested_if_formula_for_excel_rules_item_4: "Nombres en inglés y comas pueden requerir localización en tu Excel.",
	tool_write_nested_if_formula_for_excel_rules_item_5: "Para sintaxis IFS()/SI.CONJUNTO usa la página relacionada de IFS.",

	tool_write_nested_if_formula_for_excel_example_title: "Ejemplos trabajados",
	tool_write_nested_if_formula_for_excel_example: "Cargar ejemplo empieza con West→A y East→B, si no Other; prueba West→A. El siguiente arma tramos de nota (≥90 / ≥80). El último usa contiene para «promo».",

	tool_write_nested_if_formula_for_excel_usecases_title: "Cuándo conviene un generador de SI anidado",
	tool_write_nested_if_formula_for_excel_usecase_1: "Asignar notas o bandas de riesgo con reglas ordenadas.",
	tool_write_nested_if_formula_for_excel_usecase_2: "Convertir códigos de región en etiquetas de informe.",
	tool_write_nested_if_formula_for_excel_usecase_3: "Comprobar una fórmula de varias ramas antes de pegarla en el libro.",
	tool_write_nested_if_formula_for_excel_usecase_4: "Prototipar ramas contiene/vacío sin escribir SEARCH a mano.",

	tool_write_nested_if_formula_for_excel_faq_q1: "¿Se suben mis valores?",
	tool_write_nested_if_formula_for_excel_faq_a1: "No. La generación y la prueba se quedan en tu navegador; no salen al servidor.",
	tool_write_nested_if_formula_for_excel_faq_q2: "¿Es lo mismo que IFS / SI.CONJUNTO?",
	tool_write_nested_if_formula_for_excel_faq_a2: "No. Esta página emite IF(...) anidados. Usa el generador IFS relacionado para IFS().",
	tool_write_nested_if_formula_for_excel_faq_q3: "¿Cómo funciona «contiene»?",
	tool_write_nested_if_formula_for_excel_faq_a3: "Emite ISNUMBER(SEARCH(\"texto\", celda)) dentro de la prueba del IF.",
	tool_write_nested_if_formula_for_excel_faq_q4: "¿La fórmula pega en cualquier idioma de Excel?",
	tool_write_nested_if_formula_for_excel_faq_a4: "Usa nombres en inglés y comas. Algunas instalaciones necesitan nombres traducidos o punto y coma.",
	tool_write_nested_if_formula_for_excel_faq_q5: "¿Para qué sirve el valor de prueba?",
	tool_write_nested_if_formula_for_excel_faq_a5: "Evalúa el mismo orden de ramas en el navegador para confirmar qué Entonces/SINO gana.",
	tool_write_nested_if_formula_for_excel_faq_q6: "¿Puedo anidar más de dos condiciones?",
	tool_write_nested_if_formula_for_excel_faq_a6: "Sí. Cada fila añade otra capa IF alrededor del SINO final.",

	tool_write_nested_if_formula_for_excel_references: "Documentación de la función IF de Microsoft.",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — función IF",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — función IFS",
};

export default es;
