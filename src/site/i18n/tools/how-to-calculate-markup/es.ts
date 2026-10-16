/**
 * i18n tool shard (how-to-calculate-markup / es).
 * Markup: % sobre costo o precio de venta, o despeja venta/costo; muestra margen bruto al lado.
 */
import type { SiteLangDict } from '../../../types';

/** Textos en español: calculadora educativa de markup; no es asesoramiento de precios ni finanzas. */
const es: SiteLangDict = {
	tool_markup_title: "Calculadora de markup — Calcula el porcentaje o despeja venta y costo",
	tool_markup_description:
		"Calcula el porcentaje de markup a partir del costo y el precio de venta, o despeja el precio o el costo si conoces el markup. Ejemplo: costo 50, venta 80 → markup 60% (margen 37,5%). El markup divide por el costo; el margen, por las ventas. Aritmética minorista educativa — no es consejo empresarial.",
	tool_markup_article:
		"Obtén el % de markup, el precio de venta o el costo, y consulta el margen bruto equivalente para no confundir markup con margen.",
	tool_markup_desc:
		"Calcula el % de markup con costo y precio, o despeja venta o costo. Muestra el margen para comparar.",

	tool_markup_mode_label: "Qué quieres calcular",
	tool_markup_mode_pct: "Markup %",
	tool_markup_mode_sell: "Precio de venta",
	tool_markup_mode_cost: "Costo",
	tool_markup_hint:
		"Elige la incógnita. El markup usa el costo en el denominador; el margen, el precio de venta. Puedes usar coma decimal. Solo educativo — no es asesoramiento de precios.",
	tool_markup_cost_label: "Costo",
	tool_markup_cost_ph: "p. ej. 50",
	tool_markup_sell_label: "Precio de venta",
	tool_markup_sell_ph: "p. ej. 80",
	tool_markup_mk_label: "Markup %",
	tool_markup_mk_ph: "p. ej. 60",
	tool_markup_calculate: "Calcular",
	tool_markup_sample: "Cargar ejemplo",
	tool_markup_clear: "Limpiar",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_sellOut_label: "Precio de venta",
	tool_markup_costOut_label: "Costo",
	tool_markup_profitOut_label: "Markup en dinero",
	tool_markup_marginOut_label: "Margen bruto %",
	tool_markup_steps_title: "Pasos",
	tool_markup_step_pct_tpl:
		"Markup % = (venta − costo) ÷ costo × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct}%.",
	tool_markup_step_sell_tpl:
		"Precio de venta = costo × (1 + markup%/100) = {cost} × (1 + {pct}/100) = {sell}.",
	tool_markup_step_cost_tpl: "Costo = venta ÷ (1 + markup%/100) = {sell} ÷ (1 + {pct}/100) = {cost}.",
	tool_markup_step_margin_tpl:
		"Margen bruto % = (venta − costo) ÷ venta × 100 = {dollar} ÷ {sell} × 100 = {margin}%.",
	tool_markup_result_note:
		"El markup divide por el costo; el margen, por el precio de venta. Mismo markup en dinero, porcentajes distintos. Solo educativo — no es fiscal, precios ni inversión.",
	tool_markup_err_generic:
		"Introduce un costo positivo y un precio de venta o % de markup válido para el modo elegido (p. ej. costo 50 y venta 80).",

	tool_markup_how_title: "Cómo usar la calculadora de markup",
	tool_markup_how_body:
		"Elige si necesitas el % de markup, el precio de venta o el costo. Rellena los campos visibles y pulsa Calcular. Cargar ejemplo rota costo/venta → %, costo/% → venta y venta/% → costo.",
	tool_markup_how_item_1: "En «Qué quieres calcular», elige Markup %, Precio de venta o Costo.",
	tool_markup_how_item_2:
		"Introduce los valores conocidos (costo y venta, o costo y markup %, o venta y markup %).",
	tool_markup_how_item_3:
		"Pulsa Calcular para ver el valor faltante, el markup en dinero y el margen bruto % correspondiente.",
	tool_markup_how_item_4:
		"Usa Cargar ejemplo: 50/80 → 60%, costo 40 al 25% → 50, y venta 120 al 50% → costo 80.",

	tool_markup_why_choose_title: "Por qué usar esta calculadora de markup",
	tool_markup_why_choose_item_1:
		"Tres modos: markup % desde costo y precio, precio desde costo y %, o costo desde precio y %.",
	tool_markup_why_choose_item_2:
		"Markup en dinero y margen bruto % junto al markup para mantener separados ambos términos.",
	tool_markup_why_choose_item_3: "Líneas de paso que insertan tus cifras en (P−C)/C y (P−C)/P.",
	tool_markup_why_choose_item_4: "Campos que se ocultan cuando no aplican al modo seleccionado.",
	tool_markup_why_choose_item_5: "Aviso educativo claro — no es negocio, fiscal ni inversión.",

	tool_markup_formula_title: "Fórmulas de markup",
	tool_markup_formula_body:
		"El markup mide el incremento respecto al costo. El margen mide el mismo beneficio en dinero respecto al precio de venta.",
	tool_markup_formula_item_1:
		"Markup % = (precio de venta − costo) ÷ costo × 100. Ejemplo: (80 − 50) ÷ 50 × 100 = 60%.",
	tool_markup_formula_item_2:
		"Precio de venta = costo × (1 + markup%/100). Ejemplo: 40 × 1,25 = 50 con markup 25%.",
	tool_markup_formula_item_3:
		"Costo = precio de venta ÷ (1 + markup%/100). Ejemplo: 120 ÷ 1,5 = 80 con markup 50%.",
	tool_markup_formula_item_4:
		"Margen bruto % = (precio de venta − costo) ÷ precio de venta × 100. Mismo 50/80 → 37,5%.",
	tool_markup_formula_item_5:
		"Markup 100% implica precio = 2 × costo (margen 50%). Markup >100% es posible si el precio supera el doble del costo.",

	tool_markup_example_title: "Ejemplos resueltos",
	tool_markup_example:
		"Cargar ejemplo empieza con costo 50 y venta 80 → markup 60%, markup en dinero 30, margen 37,5%. Luego: costo 40 al 25% → venta 50. Después venta 120 al 50% → costo 80. Muestra de equilibrio (100/100): 0% markup y 0% margen.",

	tool_markup_usecases_title: "Cuándo usar una calculadora de markup",
	tool_markup_usecase_1: "Deberes de retail: pasar de costo y precio de lista a % de markup con pasos visibles.",
	tool_markup_usecase_2: "Revisar tarifas: con un markup % objetivo, obtén el precio de venta desde el costo.",
	tool_markup_usecase_3: "Costo inverso: desde un precio conocido y política de markup, recupera el costo implícito.",
	tool_markup_usecase_4: "Aclarar términos mezclados: por qué markup 60% no es lo mismo que margen 60%.",

	tool_markup_faq_q1: "¿Cómo se calcula el porcentaje de markup?",
	tool_markup_faq_a1:
		"Resta el costo del precio de venta, divide por el costo y multiplica por 100. Ejemplo: costo 50, venta 80 → (80−50)/50 × 100 = 60%.",
	tool_markup_faq_q2: "¿Cuál es la diferencia entre markup y margen?",
	tool_markup_faq_a2:
		"El markup divide el beneficio en dinero por el costo; el margen, por el precio de venta. La misma operación 50/80 es 60% markup y 37,5% margen.",
	tool_markup_faq_q3: "¿Cómo obtengo el precio de venta con costo y markup %?",
	tool_markup_faq_a3: "Venta = costo × (1 + markup%/100). Con costo 40 y markup 25%, venta = 40 × 1,25 = 50.",
	tool_markup_faq_q4: "¿Puede el markup superar el 100%?",
	tool_markup_faq_a4:
		"Sí. Si el precio es más del doble del costo, el markup supera 100%. Ejemplo: costo 50, venta 150 → markup 200%.",
	tool_markup_faq_q5: "¿Qué pasa si vendo por debajo del costo?",
	tool_markup_faq_a5: "Markup y margen pasan a ser negativos: pérdida por unidad antes de otros gastos.",
	tool_markup_faq_q6: "¿Incluye impuestos o descuentos?",
	tool_markup_faq_a6:
		"No. Introduce el costo y el precio que quieras comparar después de aplicar tú mismo impuestos o descuentos.",
	tool_markup_faq_q7: "¿Es asesoramiento financiero?",
	tool_markup_faq_a7:
		"No. Solo aritmética minorista educativa — no es fiscal, estrategia de precios ni inversión.",

	tool_markup_disclaimer:
		"Ilustración educativa de markup — no es asesoramiento financiero, fiscal, de precios ni de inversión.",
	tool_markup_references: "Investopedia y fórmulas de libro de texto para contexto educativo.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Margen de beneficio",
};

export default es;
