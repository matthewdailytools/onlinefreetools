/**
 * i18n tool shard (how-to-calculate-markup / pt).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_markup_title: "Calculadora de markup — Percentual sobre o custo",
	tool_markup_description: "Calcule o % de markup com custo e preço de venda. Exemplo: custo 50, venda 80 → markup 60%. Diferente da margem de lucro. Matemática educativa no navegador.",
	tool_markup_calculate: "Calcular",
	tool_markup_sample: "Carregar exemplo",
	tool_markup_clear: "Limpar",
	tool_markup_cost_label: "Custo",
	tool_markup_cost_ph: "ex. 50",
	tool_markup_sell_label: "Preço de venda",
	tool_markup_sell_ph: "ex. 80",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_profitOut_label: "Markup em valor",
	tool_markup_result_note: "Markup = (preço − custo) / custo × 100. Não é margem.",
	tool_markup_err_generic: "Custo > 0 e preço ≥ 0.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Margem",
	tool_markup_how_title: "Como funciona",
	tool_markup_how_body: "Informe custo e preço. Markup divide pelo custo, não pelas vendas.",
	tool_markup_formula_title: "Fórmula",
	tool_markup_formula_body: "Markup % = (preço − custo) / custo × 100. Notas:",
	tool_markup_formula_item_1: "Denominador é o custo — diferença frente à margem.",
	tool_markup_formula_item_2: "Markup negativo = vender abaixo do custo.",
	tool_markup_formula_item_3: "Impostos e descontos não entram sozinhos.",
	tool_markup_usecases_title: "Quando usar",
	tool_markup_usecase_1: "Tarefa de varejo: custo e preço → %.",
	tool_markup_usecase_2: "Checar tabela de preços antes do financeiro.",
	tool_markup_usecase_3: "Contrastar com margem bruta.",
	tool_markup_example_title: "Exemplo",
	tool_markup_example: "Example / Ejemplo: cost 50, sell 80 → 60% markup.",
	tool_markup_article: "Calculadora de markup — Percentual sobre o custo",
	tool_markup_disclaimer: "Apenas ilustração educativa de markup; não é conselho financeiro ou fiscal.",
	tool_markup_references: "Investopedia e fórmulas de livro didático para contexto educativo.",
	tool_markup_faq_q1: "Markup vs margem?",
	tool_markup_faq_a1: "Markup divide pelo custo; margem pelo preço.",
	tool_markup_faq_q2: "Resultado do exemplo?",
	tool_markup_faq_a2: "50 e 80 → 60%.",
	tool_markup_faq_q3: "Pode passar de 100%?",
	tool_markup_faq_a3: "Sim, se o preço for mais que o dobro do custo.",
	tool_markup_faq_q4: "É conselho de preço?",
	tool_markup_faq_a4: "Não, só aritmética educativa.",
};

export default pt;
