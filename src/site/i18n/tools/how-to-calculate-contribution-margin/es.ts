/**
 * i18n tool shard (how-to-calculate-contribution-margin / es).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_contribution_margin_title: "Calculadora de margen de contribución",
	tool_contribution_margin_description: "Calcula el margen de contribución y su ratio con precio y costo variable. Ejemplo: precio 50, CV 30 → MC 20 (40%). Educativo.",
	tool_contribution_margin_calculate: "Calcular",
	tool_contribution_margin_sample: "Cargar ejemplo",
	tool_contribution_margin_clear: "Limpiar",
	tool_contribution_margin_price_label: "Precio unitario",
	tool_contribution_margin_price_ph: "p. ej. 50",
	tool_contribution_margin_vc_label: "Costo variable unitario",
	tool_contribution_margin_vc_ph: "p. ej. 30",
	tool_contribution_margin_cmOut_label: "Margen de contribución",
	tool_contribution_margin_cmrOut_label: "Ratio MC",
	tool_contribution_margin_result_note: "Educativo.",
	tool_contribution_margin_err_generic: "Precio > 0 y CV ≥ 0.",
	tool_contribution_margin_how_title: "Cómo funciona",
	tool_contribution_margin_how_body: "Introduce precio y costo variable unitario.",
	tool_contribution_margin_formula_title: "Fórmula",
	tool_contribution_margin_formula_body: "MC = P − CV; ratio = MC / P.",
	tool_contribution_margin_formula_item_1: "VC with units; fixed costs → break-even.",
	tool_contribution_margin_formula_item_2: "Price > 0.",
	tool_contribution_margin_formula_item_3: "Simplified.",
	tool_contribution_margin_example_title: "Ejemplo",
	tool_contribution_margin_example: "Ejemplo: 50 y 30 → MC 20 (40%).",
	tool_contribution_margin_usecases_title: "Cuándo usarlo",
	tool_contribution_margin_usecase_1: "Unit CM homework.",
	tool_contribution_margin_usecase_2: "VC sensitivity.",
	tool_contribution_margin_usecase_3: "With break-even tool.",
	tool_contribution_margin_faq_q1: "¿Ejemplo?",
	tool_contribution_margin_faq_a1: "20 / 40%",
	tool_contribution_margin_faq_q2: "CM vs gross?",
	tool_contribution_margin_faq_a2: "VC vs COGS.",
	tool_contribution_margin_faq_q3: "Qty needed?",
	tool_contribution_margin_faq_a3: "Not for unit CM.",
	tool_contribution_margin_faq_q4: "Advice?",
	tool_contribution_margin_faq_a4: "No.",
	tool_contribution_margin_article: "Calculadora de margen de contribución",
	tool_contribution_margin_disclaimer: "Solo ilustración educativa (contribution margin); no es consejo financiero.",
	tool_contribution_margin_references: "Investopedia y fórmulas de libro.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even",
};

export default es;
