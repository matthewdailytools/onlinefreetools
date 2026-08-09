/**
 * i18n tool shard (how-to-calculate-markup / es).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_markup_title: "Calculadora de markup — Porcentaje de margen sobre costo",
	tool_markup_description: "Calcula el % de markup con costo y precio de venta. Ejemplo: costo 50, venta 80 → markup 60%. Distinto del margen de beneficio (divide por ventas). Matemáticas educativas en el navegador.",
	tool_markup_calculate: "Calcular",
	tool_markup_sample: "Cargar ejemplo",
	tool_markup_clear: "Limpiar",
	tool_markup_cost_label: "Costo",
	tool_markup_cost_ph: "p. ej. 50",
	tool_markup_sell_label: "Precio de venta",
	tool_markup_sell_ph: "p. ej. 80",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_profitOut_label: "Markup en dinero",
	tool_markup_result_note: "Markup = (precio − costo) / costo × 100. No es margen.",
	tool_markup_err_generic: "Costo > 0 y precio ≥ 0.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Margen",
	tool_markup_how_title: "Cómo funciona",
	tool_markup_how_body: "Introduce costo y precio. El markup divide por el costo, no por las ventas.",
	tool_markup_formula_title: "Fórmula",
	tool_markup_formula_body: "Markup % = (precio − costo) / costo × 100. Notas:",
	tool_markup_formula_item_1: "El denominador es el costo — ahí se diferencia del margen.",
	tool_markup_formula_item_2: "Markup negativo = vender bajo costo.",
	tool_markup_formula_item_3: "Impuestos y descuentos no se modelan solos.",
	tool_markup_usecases_title: "Cuándo usarlo",
	tool_markup_usecase_1: "Deberes de retail: pasar de costo y precio a %.",
	tool_markup_usecase_2: "Revisar una lista de precios antes de finanzas.",
	tool_markup_usecase_3: "Contrastar con margen bruto cuando se mezclan términos.",
	tool_markup_example_title: "Ejemplo",
	tool_markup_example: "Example / Ejemplo: cost 50, sell 80 → 60% markup.",
	tool_markup_article: "Calculadora de markup — Porcentaje de margen sobre costo",
	tool_markup_disclaimer: "Solo ilustración educativa de markup; no es consejo financiero ni fiscal.",
	tool_markup_references: "Investopedia y fórmulas de libro de texto con fines educativos.",
	tool_markup_faq_q1: "¿Markup vs margen?",
	tool_markup_faq_a1: "Markup divide por costo; margen por precio/ventas.",
	tool_markup_faq_q2: "¿Resultado del ejemplo?",
	tool_markup_faq_a2: "Costo 50, venta 80 → 60%.",
	tool_markup_faq_q3: "¿Puede superar 100%?",
	tool_markup_faq_a3: "Sí, si el precio supera el doble del costo.",
	tool_markup_faq_q4: "¿Es consejo de precios?",
	tool_markup_faq_a4: "No, solo aritmética educativa.",
};

export default es;
