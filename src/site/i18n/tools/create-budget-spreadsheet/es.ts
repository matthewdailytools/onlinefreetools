/**
 * i18n 工具分片（create-budget-spreadsheet / es）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 教育规划，非理财建议。
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "Crear una hoja de presupuesto — Categorías a Excel xlsx",
	tool_create_budget_spreadsheet_description: "Arma una hoja de presupuesto con filas de categoría e importe, mira el total en la página y descarga un .xlsx con SUM en vivo. Ejemplo: Rent 1200 + Food 400 → Total 1600. Todo en el navegador: solo cifras de planificación, no es consejo financiero ni fiscal.",
	tool_create_budget_spreadsheet_article: "Escribe líneas categoría,importe, previsualiza el total y descarga un budget.xlsx reutilizable cuya celda Total usa SUM.",
	tool_create_budget_spreadsheet_desc: "Importes por categoría → total en vista previa → xlsx con SUM. Sin subir al servidor.",

	tool_create_budget_spreadsheet_safety_banner: "Solo números de planificación. Esta página arma una lista simple con total SUM. No es un libro mayor, una declaración fiscal ni consejo de inversión.",
	tool_create_budget_spreadsheet_hint: "Una fila por línea: categoría,importe (coma o tabulador). Los importes deben ser números finitos. Las líneas mal formadas se omiten.",
	tool_create_budget_spreadsheet_input_label: "Filas del presupuesto (categoría, importe)",
	tool_create_budget_spreadsheet_input_ph: "p. ej. Alquiler,1200",
	tool_create_budget_spreadsheet_write: "Generar hoja",
	tool_create_budget_spreadsheet_download: "Descargar xlsx",
	tool_create_budget_spreadsheet_sample: "Ejemplo",
	tool_create_budget_spreadsheet_clear: "Borrar",
	tool_create_budget_spreadsheet_preview_title: "Vista previa",
	tool_create_budget_spreadsheet_col_category: "Categoría",
	tool_create_budget_spreadsheet_col_amount: "Importe",
	tool_create_budget_spreadsheet_total_label: "Total",
	tool_create_budget_spreadsheet_rows_label: "Filas contadas",
	tool_create_budget_spreadsheet_ready_note: "Vista previa lista. La descarga escribe budget.xlsx con una fórmula SUM en la celda Total.",
	tool_create_budget_spreadsheet_empty: "Añade al menos una fila válida categoría,importe (por ejemplo Alquiler,1200) o carga el ejemplo.",
	tool_create_budget_spreadsheet_need_lib: "No se pudo cargar la biblioteca de hojas. Revisa la red y actualiza.",
	tool_create_budget_spreadsheet_sheet_name: "Presupuesto",

	tool_create_budget_spreadsheet_how_title: "Cómo crear una hoja de presupuesto",
	tool_create_budget_spreadsheet_how_body: "Lista cada categoría de gasto con su importe, genera la vista previa con el total y descarga el .xlsx. Si cambias un importe en Excel, el total SUM se recalcula.",
	tool_create_budget_spreadsheet_how_item_1: "Escribe una fila por línea como categoría,importe.",
	tool_create_budget_spreadsheet_how_item_2: "Pulsa Generar hoja para ver las filas y el total.",
	tool_create_budget_spreadsheet_how_item_3: "Corrige o quita las líneas omitidas si el total no cuadra.",
	tool_create_budget_spreadsheet_how_item_4: "Pulsa Descargar xlsx para guardar budget.xlsx con SUM en vivo.",

	tool_create_budget_spreadsheet_why_choose_title: "Qué aporta este generador de hoja de presupuesto",
	tool_create_budget_spreadsheet_why_choose_item_1: "Lista rápida de categorías con total visible en la página.",
	tool_create_budget_spreadsheet_why_choose_item_2: "La celda Total del archivo usa una fórmula SUM de Excel viva.",
	tool_create_budget_spreadsheet_why_choose_item_3: "Ejemplos rotativos: mes, viaje y gastos de club.",
	tool_create_budget_spreadsheet_why_choose_item_4: "Corre en el navegador: las filas no se suben al servidor.",
	tool_create_budget_spreadsheet_why_choose_item_5: "Límite YMYL claro: solo planificación — no es mayor ni herramienta fiscal.",

	tool_create_budget_spreadsheet_rules_title: "Reglas que debes esperar",
	tool_create_budget_spreadsheet_rules_body: "Esta herramienta arma una hoja de planificación a partir de importes por categoría. No es software contable.",
	tool_create_budget_spreadsheet_rules_item_1: "Los importes deben ser números finitos; las filas mal formadas se omiten.",
	tool_create_budget_spreadsheet_rules_item_2: "La celda Total descargada usa =SUM sobre la columna de importes.",
	tool_create_budget_spreadsheet_rules_item_3: "Solo una lista tipo gasto — sin motor de ingresos frente a gastos.",
	tool_create_budget_spreadsheet_rules_item_4: "Los valores se quedan en tu dispositivo y no se suben al servidor.",
	tool_create_budget_spreadsheet_rules_item_5: "El formato sigue la práctica OOXML/xlsx habitual vía SheetJS en el navegador.",

	tool_create_budget_spreadsheet_example_title: "Ejemplos resueltos",
	tool_create_budget_spreadsheet_example: "El ejemplo empieza con Rent 1200 + Food 400 → Total 1600. El siguiente añade Utilities 150 y Transport 200. El último es una lista corta de viaje (Hotel, Flights, Food).",

	tool_create_budget_spreadsheet_usecases_title: "Cuándo crear aquí una hoja de presupuesto",
	tool_create_budget_spreadsheet_usecase_1: "Borrador de presupuesto mensual tipo sobre antes de una plantilla completa.",
	tool_create_budget_spreadsheet_usecase_2: "Meter costes esperados de viaje o evento en una sola hoja descargable.",
	tool_create_budget_spreadsheet_usecase_3: "Plan de gastos de un club antes de la contabilidad formal.",
	tool_create_budget_spreadsheet_usecase_4: "Entregar un .xlsx cuyo total SUM aún se recalcula en Excel.",

	tool_create_budget_spreadsheet_faq_q1: "¿Es un libro mayor?",
	tool_create_budget_spreadsheet_faq_a1: "No. No tiene cuentas, movimientos, conciliación ni historial de auditoría.",
	tool_create_budget_spreadsheet_faq_q2: "¿Se suben mis filas?",
	tool_create_budget_spreadsheet_faq_a2: "No. El análisis y la escritura del xlsx ocurren en tu navegador.",
	tool_create_budget_spreadsheet_faq_q3: "¿El xlsx descargado se recalcula?",
	tool_create_budget_spreadsheet_faq_a3: "Sí. La celda Total contiene una fórmula SUM sobre la columna de importes.",
	tool_create_budget_spreadsheet_faq_q4: "¿Controla ingresos frente a gastos?",
	tool_create_budget_spreadsheet_faq_a4: "No. Usa una plantilla de presupuesto más completa para ingresos, metas, desviaciones o gráficos.",
	tool_create_budget_spreadsheet_faq_q5: "¿Qué formato es categoría,importe?",
	tool_create_budget_spreadsheet_faq_a5: "Una fila por línea: categoría e importe separados por coma o tabulador. Ejemplo: Alquiler,1200.",
	tool_create_budget_spreadsheet_faq_q6: "¿Es consejo financiero?",
	tool_create_budget_spreadsheet_faq_a6: "No. Solo aritmética de planificación — no es consejo financiero, fiscal ni de inversión.",

	tool_create_budget_spreadsheet_disclaimer: "Solo números de planificación — no es consejo financiero, fiscal, contable ni de inversión.",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML; documentación de SheetJS para escribir xlsx en el navegador.",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "Documentación SheetJS",
};

export default es;
