/**
 * i18n tool shard (how-to-calculate-irr / es).
 */
import type { SiteLangDict } from '../../../types';

const es: SiteLangDict = {
	tool_irr_title: "Calculadora TIR (IRR)",
	tool_irr_description: "Estima la TIR de una lista de flujos con el método de Newton. Ejemplo: −1000, 300, 420, 680 → TIR aproximada. Educativo.",
	tool_irr_calculate: "Calcular",
	tool_irr_sample: "Cargar ejemplo",
	tool_irr_clear: "Limpiar",
	tool_irr_cf_label: "Flujos (coma/línea; CF0 primero)",
	tool_irr_cf_ph: "p. ej. -1000, 300, 420, 680",
	tool_irr_irrOut_label: "TIR aprox.",
	tool_irr_result_note: "Educativo.",
	tool_irr_err_generic: "Revisa los datos.",
	tool_irr_how_title: "Cómo funciona",
	tool_irr_how_body: "Pega CF0…CFn. Se busca r con NPV(r)=0 por Newton.",
	tool_irr_formula_title: "Fórmula",
	tool_irr_formula_body: "Pega CF0…CFn. Se busca r con NPV(r)=0 por Newton.",
	tool_irr_formula_item_1: "See formula notes.",
	tool_irr_formula_item_2: "Check inputs.",
	tool_irr_formula_item_3: "Educational only.",
	tool_irr_example_title: "Ejemplo",
	tool_irr_example: "Ejemplo: −1000, 300, 420, 680 → TIR ≈ 18,9%.",
	tool_irr_usecases_title: "Cuándo usarlo",
	tool_irr_usecase_1: "Homework.",
	tool_irr_usecase_2: "Quick sketch.",
	tool_irr_usecase_3: 'Sketch before talking to an advisor — not a substitute.',
	tool_irr_faq_q1: "¿Ejemplo?",
	tool_irr_faq_a1: "Ejemplo: −1000, 300, 420, 680 → TIR ≈ 18,9%.",
	tool_irr_faq_q2: "Formula?",
	tool_irr_faq_a2: "See Formula section.",
	tool_irr_faq_q3: "Advice?",
	tool_irr_faq_a3: "Educational only.",
	tool_irr_faq_q4: "Related?",
	tool_irr_faq_a4: 'Educational only.',
	tool_irr_article: "Calculadora TIR (IRR)",
	tool_irr_disclaimer: "Solo ilustración educativa (IRR); no es consejo financiero.",
	tool_irr_references: "Investopedia y fórmulas de libro.",
	tool_irr_ref_a_label: "Investopedia",
	tool_irr_ref_b_label: "Wikipedia",
};

export default es;
