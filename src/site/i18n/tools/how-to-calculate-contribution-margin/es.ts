/**
 * i18n 工具分片（how-to-calculate-contribution-margin / es）。
 * 用单价与单位变动成本求单位边际贡献与比率；可选销量得总边际贡献，可选固定成本得盈亏平衡件数。
 * 仅供教材算术与作业演算，不构成经营、税务、会计或投资建议。
 */
import type { SiteLangDict } from '../../../types';

/** 西班牙语：margen de contribución / ratio / unidades de equilibrio */
const es: SiteLangDict = {
	tool_contribution_margin_title:
		"Calculadora de margen de contribución — ratio y unidades de equilibrio",
	tool_contribution_margin_description:
		"Calcula el margen de contribución unitario y su ratio a partir del precio y el costo variable. Ejemplo: precio 50, CV 30 → MC 20 (40%). Si añades unidades verás el MC total; si añades costos fijos, las unidades de equilibrio. Solo aritmética educativa — no es consejo empresarial ni de inversión.",
	tool_contribution_margin_article:
		"Obtén el margen de contribución unitario y el ratio; opcionalmente el MC total con unidades y las unidades de equilibrio con costos fijos.",
	tool_contribution_margin_desc:
		"MC unitario y ratio desde precio y CV. Opcional: total y unidades de equilibrio.",

	tool_contribution_margin_safety_banner:
		"Solo educativo. Esta página hace aritmética de libro sobre margen de contribución. No es consejo empresarial, fiscal, contable ni de inversión.",
	tool_contribution_margin_hint:
		"El precio debe ser mayor que cero. El costo variable debe ser ≥ 0 y no superar el precio. Unidades y costos fijos son opcionales.",
	tool_contribution_margin_price_label: "Precio por unidad",
	tool_contribution_margin_price_ph: "p. ej. 50",
	tool_contribution_margin_vc_label: "Costo variable por unidad",
	tool_contribution_margin_vc_ph: "p. ej. 30",
	tool_contribution_margin_units_label: "Unidades (opcional)",
	tool_contribution_margin_units_ph: "p. ej. 100",
	tool_contribution_margin_fixed_label: "Costos fijos (opcional)",
	tool_contribution_margin_fixed_ph: "p. ej. 10000",
	tool_contribution_margin_calculate: "Calcular",
	tool_contribution_margin_sample: "Cargar ejemplo",
	tool_contribution_margin_clear: "Limpiar",
	tool_contribution_margin_cmOut_label: "Margen de contribución (por unidad)",
	tool_contribution_margin_cmrOut_label: "Ratio de MC",
	tool_contribution_margin_totalOut_label: "Margen de contribución total",
	tool_contribution_margin_beOut_label: "Unidades de equilibrio",
	tool_contribution_margin_steps_title: "Pasos",
	tool_contribution_margin_step_cm_tpl: "MC = precio − CV = {price} − {vc} = {cm}.",
	tool_contribution_margin_step_ratio_tpl:
		"Ratio MC = MC ÷ precio × 100 = {cm} ÷ {price} × 100 = {ratio}%.",
	tool_contribution_margin_step_total_tpl: "MC total = MC unitario × unidades = {cm} × {units} = {total}.",
	tool_contribution_margin_step_be_tpl:
		"Unidades de equilibrio = fijos ÷ MC = {fixed} ÷ {cm} = {be}.",
	tool_contribution_margin_result_note:
		"El MC cubre costos fijos y beneficio después de los variables. No modelamos mezclas multiproducto ni impuestos. Solo educativo — no es consejo de negocio.",
	tool_contribution_margin_err_generic:
		"Introduce precio > 0 y costo variable ≥ 0 sin superar el precio (por ejemplo 50 y 30). Unidades opcionales > 0; costos fijos opcionales ≥ 0.",

	tool_contribution_margin_how_title: "Cómo usar la calculadora de margen de contribución",
	tool_contribution_margin_how_body:
		"Escribe precio y costo variable unitario. Añade unidades si quieres el MC total, y costos fijos si quieres las unidades de equilibrio. «Cargar ejemplo» rota: solo unidad, con unidades, con fijos, y el caso combinado.",
	tool_contribution_margin_how_item_1: "Introduce el precio por unidad y el costo variable por unidad.",
	tool_contribution_margin_how_item_2: "Opcional: introduce unidades para ver el margen de contribución total.",
	tool_contribution_margin_how_item_3:
		"Opcional: introduce costos fijos para ver las unidades de equilibrio (hace falta MC > 0).",
	tool_contribution_margin_how_item_4: "Pulsa Calcular para ver MC, ratio y las líneas de pasos.",

	tool_contribution_margin_why_choose_title: "Qué te da esta calculadora de margen de contribución",
	tool_contribution_margin_why_choose_item_1: "MC unitario y ratio a partir de precio y costo variable.",
	tool_contribution_margin_why_choose_item_2: "MC total si introduces unidades.",
	tool_contribution_margin_why_choose_item_3: "Unidades de equilibrio si introduces costos fijos.",
	tool_contribution_margin_why_choose_item_4: "Líneas de pasos que sustituyen tus números en las fórmulas.",
	tool_contribution_margin_why_choose_item_5:
		"Límite YMYL claro: solo aritmética educativa — no es consejo empresarial.",

	tool_contribution_margin_formula_title: "Fórmulas del margen de contribución",
	tool_contribution_margin_formula_body:
		"El margen de contribución es lo que queda del precio tras el costo variable: lo disponible para cubrir fijos y beneficio.",
	tool_contribution_margin_formula_item_1: "MC = precio − CV. Ejemplo: 50 − 30 = 20.",
	tool_contribution_margin_formula_item_2: "Ratio MC = MC ÷ precio. Ejemplo: 20 ÷ 50 = 40%.",
	tool_contribution_margin_formula_item_3: "MC total = MC unitario × unidades.",
	tool_contribution_margin_formula_item_4:
		"Unidades de equilibrio = costos fijos ÷ MC unitario (cuando MC > 0).",
	tool_contribution_margin_formula_item_5:
		"El margen bruto usa COGS; el MC usa solo costo variable — pueden diferir.",

	tool_contribution_margin_example_title: "Ejemplos resueltos",
	tool_contribution_margin_example:
		"El ejemplo empieza con precio 50 y CV 30 → MC 20 (40%). Luego multiplica por 100 unidades → MC total 2.000. Después costos fijos 10.000 → equilibrio 500 unidades. El último ejemplo combina unidades y fijos.",

	tool_contribution_margin_usecases_title: "Cuándo usar una calculadora de margen de contribución",
	tool_contribution_margin_usecase_1: "Tarea: sacar el MC unitario antes de un problema de equilibrio.",
	tool_contribution_margin_usecase_2: "Ver cómo un cambio de costo variable mueve el ratio de MC.",
	tool_contribution_margin_usecase_3:
		"Estimar cuántas unidades cubren un total de costos fijos dado (solo ilustración).",
	tool_contribution_margin_usecase_4:
		"Comparar con el margen bruto en la página relacionada cuando COGS ≠ costo variable.",

	tool_contribution_margin_faq_q1: "¿Cómo se calcula el margen de contribución?",
	tool_contribution_margin_faq_a1: "MC = precio − costo variable. Ejemplo: 50 − 30 = 20; ratio = 20 ÷ 50 = 40%.",
	tool_contribution_margin_faq_q2: "¿En qué se diferencia el MC del margen bruto?",
	tool_contribution_margin_faq_a2:
		"El MC usa costo variable. El margen bruto usa COGS, que puede incluir partidas que no son puramente variables.",
	tool_contribution_margin_faq_q3: "¿Hace falta la cantidad?",
	tool_contribution_margin_faq_a3: "No para el MC unitario. Introduce unidades solo si quieres el MC total.",
	tool_contribution_margin_faq_q4: "¿Cómo se calculan aquí las unidades de equilibrio?",
	tool_contribution_margin_faq_a4:
		"Unidades de equilibrio = costos fijos ÷ MC unitario cuando MC > 0. Para una UI de equilibrio más completa usa la calculadora de punto de equilibrio relacionada.",
	tool_contribution_margin_faq_q5: "¿Puede el costo variable superar el precio?",
	tool_contribution_margin_faq_a5: "Esta página rechaza ese caso para el MC unitario (MC negativo). Revisa los datos.",
	tool_contribution_margin_faq_q6: "¿Se modelan mezclas multiproducto?",
	tool_contribution_margin_faq_a6: "No. Calcula cada producto por separado o usa una hoja con MC ponderado.",
	tool_contribution_margin_faq_q7: "¿Es esto consejo de negocio?",
	tool_contribution_margin_faq_a7:
		"No. Solo aritmética educativa — no es consejo financiero, fiscal, contable ni de inversión.",

	tool_contribution_margin_disclaimer:
		"Solo margen de contribución educativo — no es consejo financiero, fiscal, contable, empresarial ni de inversión.",
	tool_contribution_margin_references:
		"Artículos de Investopedia sobre contribution margin y break-even como contexto educativo.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default es;
