/**
 * i18n tool shard (how-to-calculate-break-even / pt).
 * Independent locale rewrite per 03 brief — not English skeleton.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_break_even_title: "Calculadora de ponto de equilíbrio — Unidades para cobrir custos",
	tool_break_even_description: "Calcule o ponto de equilíbrio em unidades e receita a partir de custos fixos, preço unitário e custo variável unitário. A margem de contribuição é exibida. Exemplo: custos fixos 10.000, preço 50, variável 30 → 500 unidades e receita 25.000. No navegador; apenas educativo, não é aconselhamento empresarial nem de investimento.",
	tool_break_even_article: "O equilíbrio é onde a margem cobre os custos fixos. Unidades = FC / (P − V), com receita e margem na mesma URL educativa.",
	tool_break_even_calculate: "Calcular",
	tool_break_even_sample: "Carregar exemplo",
	tool_break_even_clear: "Limpar",
	tool_break_even_fixed_label: "Custos fixos",
	tool_break_even_fixed_ph: "ex.: 10000",
	tool_break_even_price_label: "Preço por unidade",
	tool_break_even_price_ph: "ex.: 50",
	tool_break_even_var_label: "Custo variável por unidade",
	tool_break_even_var_ph: "ex.: 30",
	tool_break_even_result_units: "Unidades de equilíbrio",
	tool_break_even_result_revenue: "Receita de equilíbrio",
	tool_break_even_result_cm: "Margem de contribuição por unidade",
	tool_break_even_result_note: "Apenas ilustração educativa — não é aconselhamento empresarial nem de investimento.",
	tool_break_even_err_fixed: "Os custos fixos devem ser > 0.",
	tool_break_even_err_price: "O preço deve ser > 0 e o variável ≥ 0.",
	tool_break_even_err_margin: "O preço deve ser maior que o custo variável.",
	tool_break_even_how_title: "Como funciona",
	tool_break_even_how_body: "Informe custos fixos, preço e variável unitário. A ferramenta calcula margem, unidades e receita. Setores ficam nos casos de uso, sem URLs separadas.",
	tool_break_even_formula_title: "Fórmula e premissas",
	tool_break_even_formula_body: "Unidades Q = FC / (P − V). Receita = Q × P. Margem = P − V. Premissas:",
	tool_break_even_formula_item_1: "Custos e preços constantes; impostos/descontos fora do modelo.",
	tool_break_even_formula_item_2: "Visão de um produto.",
	tool_break_even_formula_item_3: "Resultados educativos, não previsões.",
	tool_break_even_example_title: "Exemplo",
	tool_break_even_example: "Exemplo: FC 10.000, preço 50, variável 30 → margem 20 → 500 unidades e receita 25.000.",
	tool_break_even_usecases_title: "Quando usar",
	tool_break_even_usecase_1: "Aula: praticar a fórmula com FC, P e V fixos.",
	tool_break_even_usecase_2: "Esboço de quantas unidades cobrem os fixos (só ilustração).",
	tool_break_even_usecase_3: "Ver margem e receita de equilíbrio numa página.",
	tool_break_even_faq_q1: "Qual fórmula?",
	tool_break_even_faq_a1: "Q = FC / (P − V). Receita = Q × P. Margem = P − V.",
	tool_break_even_faq_q2: "Preço = variável?",
	tool_break_even_faq_a2: "Não há volume finito. Suba o preço ou baixe o variável.",
	tool_break_even_faq_q3: "Aconselhamento empresarial?",
	tool_break_even_faq_a3: "Não. Apenas ilustrações educativas.",
	tool_break_even_faq_q4: "Unidades ou receita?",
	tool_break_even_faq_a4: "Ambos nos resultados; receita = unidades × preço.",
	tool_break_even_disclaimer: "Resultados apenas educativos; não são aconselhamento empresarial, fiscal ou de investimento.",
	tool_break_even_references: "Definições Investopedia de ponto de equilíbrio e margem; fórmula FC/(P−V).",
	tool_break_even_ref_bep_label: "Investopedia — Ponto de equilíbrio",
	tool_break_even_ref_cm_label: "Investopedia — Margem de contribuição",
};

export default pt;
