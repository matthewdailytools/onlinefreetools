/**
 * i18n tool shard (how-to-calculate-irr / pt).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_irr_title: "Calculadora TIR (IRR)",
	tool_irr_description: "Estime a TIR de fluxos simples com o método de Newton. Exemplo: −1000, 300, 420, 680 → TIR aproximada. Educativo. Cálculo educativo no navegador; não é conselho profissional.",
	tool_irr_calculate: "Calcular",
	tool_irr_sample: "Carregar exemplo",
	tool_irr_clear: "Limpar",
	tool_irr_cf_label: "Fluxos (vírgula/linha; CF0 primeiro)",
	tool_irr_cf_ph: "ex. -1000, 300, 420, 680",
	tool_irr_irrOut_label: "TIR aprox.",
	tool_irr_result_note: "Educativo.",
	tool_irr_err_generic: "Verifique os dados.",
	tool_irr_how_title: "Como funciona",
	tool_irr_how_body: "Cole CF0…CFn. Busca-se r com NPV(r)=0 via Newton.",
	tool_irr_formula_title: "Fórmula",
	tool_irr_formula_body: "Cole CF0…CFn. Busca-se r com NPV(r)=0 via Newton.",
	tool_irr_formula_item_1: "See formula notes.",
	tool_irr_formula_item_2: "Check inputs.",
	tool_irr_formula_item_3: "Educational only.",
	tool_irr_example_title: "Exemplo",
	tool_irr_example: "Exemplo: −1000, 300, 420, 680 → TIR ≈ 18,9%.",
	tool_irr_usecases_title: "Quando usar",
	tool_irr_usecase_1: "Homework.",
	tool_irr_usecase_2: "Quick sketch.",
	tool_irr_usecase_3: "Compare related tools.",
	tool_irr_faq_q1: "Exemplo?",
	tool_irr_faq_a1: "Exemplo: −1000, 300, 420, 680 → TIR ≈ 18,9%.",
	tool_irr_faq_q2: "Formula?",
	tool_irr_faq_a2: "See Formula section.",
	tool_irr_faq_q3: "Advice?",
	tool_irr_faq_a3: "Educational only.",
	tool_irr_faq_q4: "Related?",
	tool_irr_faq_a4: "See related tools.",
	tool_irr_article: "Calculadora TIR (IRR)",
	tool_irr_disclaimer: "Apenas ilustração educativa (IRR); não é conselho financeiro.",
	tool_irr_references: "Investopedia e fórmulas didáticas.",
	tool_irr_ref_a_label: "Investopedia",
	tool_irr_ref_b_label: "Wikipedia",
};

export default pt;
