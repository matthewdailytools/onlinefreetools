/**
 * i18n tool shard (how-to-calculate-cagr / pt).
 * Reescrita independente em português: UI completa, How/Fórmula/FAQ e aviso YMYL.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_cagr_title: 'Calculadora CAGR — Taxa de crescimento anual composta',
	tool_cagr_description:
		'Calcule o CAGR com valor inicial, valor final e anos. Exemplo: 10.000 → 16.105,10 em 5 anos → cerca de 10,00%. Roda no navegador; apenas ilustração educativa — não é aconselhamento de investimento.',
	tool_cagr_article:
		'O CAGR é a taxa anual constante que leva um valor inicial a um valor final ao longo de vários anos, assumindo capitalização uma vez por ano. Serve para comparar crescimentos plurianuais de forma aproximada; não é previsão e ignora fluxos a meio do período.',
	tool_cagr_calculate: 'Calcular',
	tool_cagr_sample: 'Carregar exemplo',
	tool_cagr_clear: 'Limpar',
	tool_cagr_begin_label: 'Valor inicial',
	tool_cagr_begin_ph: 'ex.: 10000',
	tool_cagr_end_label: 'Valor final',
	tool_cagr_end_ph: 'ex.: 16105.10',
	tool_cagr_years_label: 'Número de anos',
	tool_cagr_years_ph: 'ex.: 5',
	tool_cagr_result_label: 'CAGR',
	tool_cagr_result_note: 'Apenas ilustração educativa — não é aconselhamento de investimento.',
	tool_cagr_err_begin: 'O valor inicial deve ser maior que zero.',
	tool_cagr_err_end: 'O valor final deve ser maior que zero.',
	tool_cagr_err_years: 'O número de anos deve ser maior que zero.',
	tool_cagr_how_title: 'Como usar',
	tool_cagr_how_body:
		'Informe valor inicial, valor final e anos, todos positivos. A ferramenta aplica a fórmula padrão do CAGR em %. Zeros ou negativos são rejeitados. O cálculo fica no navegador e serve só para aprender.',
	tool_cagr_formula_title: 'Fórmula e premissas',
	tool_cagr_formula_body:
		'CAGR = ((Valor final ÷ Valor inicial)^(1 ÷ Anos) − 1) × 100. Lembre-se:',
	tool_cagr_formula_item_1: 'A capitalização é tratada como uma vez por ano; o momento dentro do ano é ignorado.',
	tool_cagr_formula_item_2: 'Sem aportes ou retiradas no meio — só inicial, final e anos.',
	tool_cagr_formula_item_3: 'Os resultados são ilustrações educativas, não previsões nem aconselhamento de investimento.',
	tool_cagr_example_title: 'Exemplo',
	tool_cagr_example:
		'Exemplo: inicial 10.000, final 16.105,10, anos 5 → CAGR = ((16105.10 / 10000)^(1/5) − 1) × 100 ≈ 10,00%.',
	tool_cagr_usecases_title: 'Quando usar',
	tool_cagr_usecase_1: 'Comparar crescimento plurianual de investimento ou receita em base anualizada (só ilustração).',
	tool_cagr_usecase_2: 'Trabalho de curso: praticar o percentual CAGR com números fixos.',
	tool_cagr_usecase_3: 'Rascunho rápido de retorno anualizado antes de falar com um assessor — não substitui análise completa.',
	tool_cagr_faq_q1: 'Qual fórmula de CAGR esta página usa?',
	tool_cagr_faq_a1:
		'CAGR = ((Valor final ÷ Valor inicial)^(1 ÷ Anos) − 1) × 100. Inicial, final e anos devem ser maiores que zero.',
	tool_cagr_faq_q2: 'Como o CAGR difere do ROI simples?',
	tool_cagr_faq_a2:
		'O ROI simples é um percentual de um único período e ignora quantos anos a mudança durou. O CAGR anualiza o crescimento pelos anos que você informar.',
	tool_cagr_faq_q3: 'E se o valor inicial ou final for zero ou negativo?',
	tool_cagr_faq_a3:
		'A calculadora exige ambos maiores que zero. Zero ou negativo torna a fórmula padrão indefinida ou enganosa aqui.',
	tool_cagr_faq_q4: 'Isto é aconselhamento de investimento?',
	tool_cagr_faq_a4:
		'Não. Os números são apenas ilustrações educativas e não constituem aconselhamento de investimento, fiscal ou financeiro. Crescimento passado ou hipotético não garante resultados futuros.',
	tool_cagr_disclaimer:
		'Os resultados de CAGR são apenas ilustrações educativas e não constituem aconselhamento de investimento, fiscal ou financeiro. Retornos passados ou hipotéticos não garantem resultados futuros. Carteiras reais enfrentam taxas, impostos, fluxos de caixa e riscos que esta página não modela.',
	tool_cagr_references:
		'Definição e fórmulas de CAGR na Investopedia; taxa anualizada padrão ((EV/BV)^(1/n) − 1).',
	tool_cagr_ref_cagr_label: 'Investopedia — Compound Annual Growth Rate (CAGR)',
	tool_cagr_ref_formula_label: 'Investopedia — Fórmula para calcular o CAGR',
};

export default pt;
