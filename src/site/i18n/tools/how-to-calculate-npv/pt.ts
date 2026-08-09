/**
 * i18n tool shard (how-to-calculate-npv / pt).
 * Português reescrito de forma independente (não calco do inglês).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_npv_title: 'Calculadora VPL (NPV) — Valor presente líquido',
	tool_npv_description:
		'Calcule o VPL (NPV) com taxa de desconto anual, investimento inicial e fluxos de caixa ano a ano. Exemplo: investir 10.000 a 10% com fluxos 3.000 / 4.200 / 6.800 → VPL ≈ 1.307,29. Roda no navegador; ilustração educativa — não é aconselhamento de investimento.',
	tool_npv_article:
		'O valor presente líquido desconta fluxos futuros à taxa anual escolhida e subtrai o investimento inicial. Um VPL positivo só indica que, sob as suas hipóteses, as entradas descontadas superam a saída; não é previsão nem recomendação de compra.',
	tool_npv_calculate: 'Calcular',
	tool_npv_sample: 'Carregar exemplo',
	tool_npv_clear: 'Limpar',
	tool_npv_rate_label: 'Taxa de desconto (% ao ano)',
	tool_npv_rate_ph: 'ex. 10',
	tool_npv_invest_label: 'Investimento inicial (saída)',
	tool_npv_invest_ph: 'ex. 10000',
	tool_npv_cf_label: 'Fluxos por ano (vírgula ou nova linha)',
	tool_npv_cf_ph: 'ex. 3000, 4200, 6800',
	tool_npv_cf_hint: 'Introduza CF1…CFn para os anos 1…n. Positivo = entrada; negativos permitidos.',
	tool_npv_result_label: 'VPL (NPV)',
	tool_npv_result_note: 'Apenas ilustração educativa — não é aconselhamento de investimento.',
	tool_npv_err_rate: 'Indique uma taxa de desconto finita (% ao ano). −100% ou menos não é permitido.',
	tool_npv_err_invest: 'O investimento inicial deve ser maior que zero.',
	tool_npv_err_cf: 'Introduza pelo menos um número de fluxo válido (separado por vírgulas ou linhas).',
	tool_npv_how_title: 'Como funciona',
	tool_npv_how_body:
		'Introduza a taxa anual, um investimento inicial positivo (saída em t=0) e a lista de fluxos dos anos 1…n. A ferramenta desconta cada fluxo e subtrai o desembolso inicial. O cálculo fica no navegador e serve só para aprender.',
	tool_npv_formula_title: 'Fórmula e pressupostos',
	tool_npv_formula_body:
		'VPL = −I₀ + Σ (CFₜ / (1 + r)ᵗ) para t = 1…n, em que r é a taxa anual em decimal. Tenha em mente:',
	tool_npv_formula_item_1: 'Os fluxos são tratados no fim de cada ano; o momento intra-anual é ignorado.',
	tool_npv_formula_item_2: 'A taxa é constante; impostos, taxas e inflação não são modelados salvo se os incluir.',
	tool_npv_formula_item_3: 'O resultado é uma ilustração educativa, não uma previsão nem aconselhamento.',
	tool_npv_example_title: 'Exemplo',
	tool_npv_example:
		'Exemplo: investimento 10.000, taxa 10%/ano, fluxos 3.000 / 4.200 / 6.800 → VPL = −10000 + 3000/1,1 + 4200/1,1² + 6800/1,1³ ≈ 1.307,29.',
	tool_npv_usecases_title: 'Quando usar',
	tool_npv_usecase_1: 'Triagem rápida de projetos: comparar entradas descontadas com o custo inicial (só ilustração).',
	tool_npv_usecase_2: 'Exercícios: praticar a soma do VPL com taxa fixa e lista curta de fluxos.',
	tool_npv_usecase_3: 'Rascunho antes de falar com um consultor — não substitui uma análise completa.',
	tool_npv_faq_q1: 'Que fórmula de VPL usa esta página?',
	tool_npv_faq_a1:
		'VPL = −I₀ + Σ (CFₜ / (1 + r)ᵗ). I₀ é o investimento inicial, r a taxa anual em decimal e CFₜ os fluxos dos anos 1…n.',
	tool_npv_faq_q2: 'Em que difere do ROI simples ou do CAGR?',
	tool_npv_faq_a2:
		'O ROI simples é uma percentagem de um só período. O CAGR anualiza o crescimento entre dois valores. O VPL desconta uma sequência de fluxos e devolve um montante, não uma taxa de crescimento.',
	tool_npv_faq_q3: 'Como introduzir os fluxos?',
	tool_npv_faq_a3:
		'Liste os valores do ano 1 ao n separados por vírgulas ou novas linhas. Positivos = entradas; negativos = saídas posteriores. É preciso pelo menos um número válido.',
	tool_npv_faq_q4: 'Isto é aconselhamento de investimento?',
	tool_npv_faq_a4:
		'Não. Os números são apenas ilustrações educativas e não constituem aconselhamento de investimento, fiscal ou financeiro. Um VPL positivo com os seus dados não garante lucro real.',
	tool_npv_disclaimer:
		'Os resultados de VPL são apenas ilustrações educativas e não constituem aconselhamento de investimento, fiscal ou financeiro. Taxa, calendário dos fluxos, comissões, impostos e risco estão simplificados. Números hipotéticos não garantem resultados futuros.',
	tool_npv_references:
		'Definição de NPV na Investopedia e guia valor presente vs valor presente líquido; fórmula padrão de fluxos descontados.',
	tool_npv_ref_npv_label: 'Investopedia — Net Present Value (NPV)',
	tool_npv_ref_pv_label: 'Investopedia — Valor presente vs VPL',
};

export default pt;
