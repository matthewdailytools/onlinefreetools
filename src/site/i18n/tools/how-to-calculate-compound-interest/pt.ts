/**
 * i18n tool shard (how-to-calculate-compound-interest / pt).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_compound_interest_title: 'Calculadora de juros compostos — Valor futuro',
	tool_compound_interest_description:
		'Calcule o valor futuro com juros compostos a partir do principal, taxa anual, anos e frequência de capitalização. Fórmula A = P(1 + r/n)^(nt); modo juros simples opcional. Exemplo: 10.000 a 5% por 10 anos, capitalização anual → cerca de 16.288,95. Cálculo no navegador; apenas educativo, não é aconselhamento de investimento.',
	tool_compound_interest_article:
		'Juros compostos somam juros sobre juros já acumulados. Esta página mostra a fórmula discreta padrão, permite comparar juros simples com os mesmos dados e deixa claras as premissas para aulas e estimativas pessoais.',
	tool_compound_interest_calculate: 'Calcular',
	tool_compound_interest_sample: 'Carregar exemplo',
	tool_compound_interest_clear: 'Limpar',
	tool_compound_interest_mode_label: 'Modo de juros',
	tool_compound_interest_mode_compound: 'Juros compostos',
	tool_compound_interest_mode_simple: 'Juros simples',
	tool_compound_interest_principal_label: 'Principal (P)',
	tool_compound_interest_principal_placeholder: 'ex.: 10000',
	tool_compound_interest_rate_label: 'Taxa anual (%)',
	tool_compound_interest_rate_placeholder: 'ex.: 5',
	tool_compound_interest_years_label: 'Prazo (anos)',
	tool_compound_interest_years_placeholder: 'ex.: 10',
	tool_compound_interest_freq_label: 'Capitalizações por ano (n)',
	tool_compound_interest_freq_1: 'Anual (1)',
	tool_compound_interest_freq_2: 'Semestral (2)',
	tool_compound_interest_freq_4: 'Trimestral (4)',
	tool_compound_interest_freq_12: 'Mensal (12)',
	tool_compound_interest_freq_365: 'Diária (365)',
	tool_compound_interest_result_future: 'Valor futuro (A)',
	tool_compound_interest_result_interest: 'Juros acumulados',
	tool_compound_interest_result_note: 'Apenas ilustração educativa — não é aconselhamento de investimento.',
	tool_compound_interest_err_principal: 'O principal deve ser maior que zero.',
	tool_compound_interest_err_years: 'O prazo em anos deve ser maior que zero.',
	tool_compound_interest_err_rate: 'A taxa anual deve ser zero ou um número positivo.',
	tool_compound_interest_err_overflow: 'O resultado é grande demais. Tente um prazo menor ou taxa mais baixa.',
	tool_compound_interest_how_title: 'Como funciona',
	tool_compound_interest_how_body:
		'Informe principal, taxa anual nominal em percentual e anos. No modo composto, escolha quantas vezes os juros capitalizam por ano. A ferramenta calcula valor futuro e juros. No modo simples usa A = P(1 + r t) e ignora a frequência.',
	tool_compound_interest_formula_title: 'Fórmula e premissas',
	tool_compound_interest_formula_body:
		'Composto: A = P (1 + r/n)^(n t), com r taxa anual nominal em decimal e n capitalizações por ano. Simples: A = P (1 + r t). Lembre:',
	tool_compound_interest_formula_item_1:
		'A taxa é nominal anual que você informa; impostos, taxas e inflação não são descontados.',
	tool_compound_interest_formula_item_2:
		'Sem depósitos ou saques no período — só o principal inicial cresce.',
	tool_compound_interest_formula_item_3:
		'A frequência de capitalização altera o crescimento efetivo; detalhes de taxa efetiva estão nas FAQ, não como ferramenta separada.',
	tool_compound_interest_formula_item_4:
		'Os resultados são ilustrações educativas, não previsões nem aconselhamento de investimento.',
	tool_compound_interest_example_title: 'Exemplo',
	tool_compound_interest_example:
		'Exemplo: principal 10.000, taxa 5% ao ano, 10 anos, capitalização anual → A ≈ 16.288,95 e juros ≈ 6.288,95. Mesmos dados em juros simples → A = 15.000.',
	tool_compound_interest_usecases_title: 'Quando usar',
	tool_compound_interest_usecase_1:
		'Poupança: estimar saldo futuro se um montante único capitaliza a uma taxa informada (só ilustração).',
	tool_compound_interest_usecase_2:
		'Aula: praticar a fórmula de juros compostos com P, r, n e t fixos.',
	tool_compound_interest_usecase_3:
		'Comparar modos: mude para juros simples com os mesmos dados e veja a diferença.',
	tool_compound_interest_faq_q1: 'Qual fórmula de juros compostos esta calculadora usa?',
	tool_compound_interest_faq_a1:
		'A = P (1 + r/n)^(n t), com r taxa anual em decimal e n capitalizações por ano. Juros = A − P.',
	tool_compound_interest_faq_q2: 'Como os juros simples são diferentes?',
	tool_compound_interest_faq_a2:
		'Juros simples usam A = P (1 + r t) sem capitalização. Escolha Simples no modo; a frequência é ignorada.',
	tool_compound_interest_faq_q3: 'O que é frequência de capitalização?',
	tool_compound_interest_faq_a3:
		'n é quantas vezes por ano os juros são somados (1 anual, 12 mensal, 365 diária). Com a mesma taxa nominal, n maior costuma gerar saldo maior.',
	tool_compound_interest_faq_q4: 'Isto é aconselhamento de investimento?',
	tool_compound_interest_faq_a4:
		'Não. Os números são só ilustrações educativas e não constituem aconselhamento de investimento, fiscal ou financeiro.',
	tool_compound_interest_faq_q5: 'E se a taxa for zero?',
	tool_compound_interest_faq_a5: 'Com taxa anual 0%, o valor futuro iguala o principal e os juros são 0.',
	tool_compound_interest_disclaimer:
		'Resultados de juros compostos e simples são apenas ilustrações educativas e não constituem aconselhamento de investimento, fiscal ou financeiro. Crescimento passado ou hipotético não garante resultados futuros.',
	tool_compound_interest_references:
		'Definições de juros compostos e simples na Investopedia; fórmula discreta padrão A = P(1 + r/n)^(nt).',
	tool_compound_interest_ref_compound_label: 'Investopedia — Juros compostos',
	tool_compound_interest_ref_simple_label: 'Investopedia — Juros simples',
};

export default pt;
