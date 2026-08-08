/**
 * i18n tool shard (how-to-calculate-gross-margin / pt).
 * Português: margem bruta / lucro bruto — reescrita independente.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_gross_margin_title: 'Calculadora de margem bruta — Lucro bruto e percentual',
	tool_gross_margin_description:
		'Calcule o lucro bruto e a margem bruta (%) a partir da receita e do custo das mercadorias vendidas (CMV/COGS). Exemplo: receita 10.000, CMV 6.000 → lucro 4.000 e margem 40%. No navegador; apenas educativo — não é conselho empresarial nem de investimento.',
	tool_gross_margin_article:
		'A margem bruta mostra quanto da receita resta após o CMV. Esta página mantém lucro bruto e margem % na mesma URL educativa; margens líquida ou operacional ficam em outras ferramentas.',
	tool_gross_margin_calculate: 'Calcular',
	tool_gross_margin_sample: 'Carregar exemplo',
	tool_gross_margin_clear: 'Limpar',
	tool_gross_margin_revenue_label: 'Receita (vendas)',
	tool_gross_margin_revenue_ph: 'ex.: 10000',
	tool_gross_margin_cogs_label: 'Custo das mercadorias (CMV/COGS)',
	tool_gross_margin_cogs_ph: 'ex.: 6000',
	tool_gross_margin_result_profit: 'Lucro bruto',
	tool_gross_margin_result_margin: 'Margem bruta',
	tool_gross_margin_result_note: 'Apenas ilustração educativa — não é conselho empresarial nem de investimento.',
	tool_gross_margin_err_revenue: 'A receita deve ser maior que zero.',
	tool_gross_margin_err_cogs: 'O CMV deve ser zero ou um número positivo.',
	tool_gross_margin_how_title: 'Como funciona',
	tool_gross_margin_how_body:
		'Informe receita e CMV. A ferramenta calcula lucro bruto e margem %. Markup vs margem e lucro líquido ficam na FAQ ou ferramentas relacionadas — sem URLs de porta.',
	tool_gross_margin_formula_title: 'Fórmula e premissas',
	tool_gross_margin_formula_body:
		'Lucro bruto = Receita − CMV. Margem bruta % = (Lucro bruto ÷ Receita) × 100. Premissas:',
	tool_gross_margin_formula_item_1: 'Receita e CMV usam o mesmo período e moeda; impostos e despesas operacionais não são modelados.',
	tool_gross_margin_formula_item_2: 'CMV é só custo de produto — SG&A e juros ficam de fora.',
	tool_gross_margin_formula_item_3: 'Resultados são ilustrações educativas, não previsões nem conselhos.',
	tool_gross_margin_example_title: 'Exemplo',
	tool_gross_margin_example:
		'Exemplo: receita 10.000, CMV 6.000 → lucro bruto 4.000 → margem bruta 40%.',
	tool_gross_margin_usecases_title: 'Quando usar',
	tool_gross_margin_usecase_1: 'Aula: praticar a fórmula de margem bruta com receita e CMV fixos.',
	tool_gross_margin_usecase_2: 'Esboço de margem de produto antes de falar com um assessor (só ilustração).',
	tool_gross_margin_usecase_3: 'Ver lucro e margem % juntos sem URL só de markup.',
	tool_gross_margin_faq_q1: 'Qual fórmula de margem bruta esta página usa?',
	tool_gross_margin_faq_a1:
		'Lucro bruto = Receita − CMV. Margem bruta % = Lucro bruto ÷ Receita × 100.',
	tool_gross_margin_faq_q2: 'E se o CMV for maior que a receita?',
	tool_gross_margin_faq_a2:
		'Lucro e margem ficam negativos. O modelo permite ver prejuízos — ainda não é conselho.',
	tool_gross_margin_faq_q3: 'Isto é conselho empresarial?',
	tool_gross_margin_faq_a3:
		'Não. Os números são apenas ilustrações educativas e não são conselho fiscal, empresarial ou de investimento.',
	tool_gross_margin_faq_q4: 'Margem bruta vs markup?',
	tool_gross_margin_faq_a4:
		'A margem divide o lucro pela receita; o markup divide pelo custo. Esta página foca a margem; markup só na FAQ.',
	tool_gross_margin_disclaimer:
		'Os resultados de margem bruta são apenas ilustrações educativas e não constituem conselho empresarial, financeiro, fiscal ou de investimento. Negócios reais têm taxas, impostos e classificações de custo que esta página não modela.',
	tool_gross_margin_references:
		'Definições da Investopedia de gross margin e gross profit; fórmula padrão (Receita − CMV) / Receita.',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit',
};

export default pt;
