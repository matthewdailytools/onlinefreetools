/**
 * i18n tool shard (how-to-calculate-cagr / pt).
 * CAGR %, valor final ou anos; YMYL educativo — não é aconselhamento de investimento.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_cagr_title: "Calculadora de CAGR — Crescimento anualizado entre dois valores",
	tool_cagr_description: "Calcule a taxa composta de crescimento anual (CAGR) a partir dos valores inicial e final, ou resolva de trás o valor final ou o número de anos. Exemplo: 10.000 → 16.105,10 em 5 anos → cerca de 10,00% de CAGR. Apenas ilustração educativa — não é aconselhamento de investimento.",
	tool_cagr_article: "Obtenha CAGR, valor final ou anos com as identidades padrão ((VF/VI)^(1/n)−1), passos de cálculo e uma verificação inversa.",
	tool_cagr_desc: "CAGR %, valor final ou anos a partir do valor inicial. Apenas educativo.",

	tool_cagr_safety_banner: "Apenas educativo. Esta página faz aritmética de CAGR de manual. Não é aconselhamento de investimento, fiscal ou financeiro, e crescimento passado ou hipotético não garante resultados futuros.",
	tool_cagr_mode_label: "O que você quer encontrar?",
	tool_cagr_mode_rate: "CAGR % a partir de início / fim / anos",
	tool_cagr_mode_end: "Valor final a partir de início / CAGR / anos",
	tool_cagr_mode_years: "Anos a partir de início / fim / CAGR",
	tool_cagr_hint: "Todas as entradas ativas devem ser maiores que zero. O CAGR ignora fluxos de caixa no meio do período e trata a capitalização como uma vez por ano.",
	tool_cagr_begin_label: "Valor inicial",
	tool_cagr_begin_ph: "ex.: 10000",
	tool_cagr_end_label: "Valor final",
	tool_cagr_end_ph: "ex.: 16105.10",
	tool_cagr_rate_label: "CAGR %",
	tool_cagr_rate_ph: "ex.: 10",
	tool_cagr_years_label: "Número de anos",
	tool_cagr_years_ph: "ex.: 5",
	tool_cagr_calculate: "Calcular",
	tool_cagr_sample: "Carregar exemplo",
	tool_cagr_clear: "Limpar",
	tool_cagr_result_label: "CAGR",
	tool_cagr_endOut_label: "Valor final",
	tool_cagr_yearsOut_label: "Anos",
	tool_cagr_multOut_label: "Múltiplo total de crescimento",
	tool_cagr_steps_title: "Passos",
	tool_cagr_step_rate_tpl: "CAGR = (({end} ÷ {begin})^(1 ÷ {years}) − 1) × 100 ≈ {rate}%.",
	tool_cagr_step_end_tpl: "Final = {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_step_years_tpl: "Anos = ln({end} ÷ {begin}) ÷ ln(1 + {rate}/100) ≈ {years}.",
	tool_cagr_step_check_tpl: "Conferência: {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_result_note: "Assume capitalização anual e nenhum fluxo de caixa no meio do período. Apenas ilustração educativa — não é aconselhamento de investimento.",
	tool_cagr_err_generic: "Digite números positivos nos campos ativos (por exemplo início 10000, fim 16105.1, anos 5).",

	tool_cagr_how_title: "Como usar a calculadora de CAGR",
	tool_cagr_how_body: "Escolha CAGR %, valor final ou anos. Informe os valores conhecidos e clique em Calcular. Carregar exemplo alterna 10000→16105.1 em 5 anos (10%), o caso inverso de valor final, anos a 10% de CAGR e o caso mais curto 5000→8000 em 3 anos.",
	tool_cagr_how_item_1: "Escolha o que deseja encontrar.",
	tool_cagr_how_item_2: "Informe os valores positivos conhecidos para esse modo.",
	tool_cagr_how_item_3: "Clique em Calcular para ver a resposta, o múltiplo e os passos.",
	tool_cagr_how_item_4: "Use Carregar exemplo para percorrer os pontos de verificação do manual.",

	tool_cagr_why_choose_title: "O que esta calculadora de CAGR oferece",
	tool_cagr_why_choose_item_1: "Três direções: CAGR %, valor final ou anos.",
	tool_cagr_why_choose_item_2: "Um múltiplo de crescimento (fim ÷ início) ao lado da resposta principal.",
	tool_cagr_why_choose_item_3: "Passos que encaixam seus números nas identidades do CAGR.",
	tool_cagr_why_choose_item_4: "Uma conferência inversa que remultiplica início × (1+r)^n até o fim.",
	tool_cagr_why_choose_item_5: "Limite YMYL claro: só aritmética educativa — não é aconselhamento de investimento.",

	tool_cagr_formula_title: "Fórmulas de CAGR",
	tool_cagr_formula_body: "O CAGR é a taxa anual constante que leva um valor inicial a um valor final em n anos com capitalização uma vez por ano.",
	tool_cagr_formula_item_1: "CAGR = ((VF ÷ VI)^(1 ÷ n) − 1) × 100. Exemplo: ((16105.1/10000)^(1/5)−1)×100 ≈ 10%.",
	tool_cagr_formula_item_2: "VF = VI × (1 + CAGR/100)^n.",
	tool_cagr_formula_item_3: "n = ln(VF ÷ VI) ÷ ln(1 + CAGR/100).",
	tool_cagr_formula_item_4: "Exige VI > 0, VF > 0, n > 0 (e CAGR ≠ −100% ao resolver anos).",
	tool_cagr_formula_item_5: "Ignora taxas, impostos e fluxos no meio do período — ao contrário de um IRR completo.",

	tool_cagr_example_title: "Exemplos resolvidos",
	tool_cagr_example: "Carregar exemplo começa com 10.000 → 16.105,10 em 5 anos → CAGR ≈ 10%. Em seguida, 10.000 cresce a 10% por 5 anos de volta a ≈16.105. Depois resolve anos a partir dos mesmos extremos a 10%. O último exemplo usa 5.000 → 8.000 em 3 anos.",

	tool_cagr_usecases_title: "Quando usar uma calculadora de CAGR",
	tool_cagr_usecase_1: "Trabalho escolar: anualizar crescimento de vários anos com a fórmula padrão de CAGR.",
	tool_cagr_usecase_2: "Comparar extremos de receita ou carteira em base anualizada (só ilustração).",
	tool_cagr_usecase_3: "Descobrir quantos anos um CAGR dado precisa para atingir um alvo.",
	tool_cagr_usecase_4: "Contrastar com ROI simples na página de ROI relacionada quando os anos importam.",

	tool_cagr_faq_q1: "Posso resolver valor final ou anos?",
	tool_cagr_faq_a1: "Sim. Troque o modo para projetar um valor inicial à frente, ou resolver anos a partir de início/fim/CAGR.",
	tool_cagr_faq_q2: "Qual fórmula de CAGR esta página usa?",
	tool_cagr_faq_a2: "CAGR = ((Final ÷ Inicial)^(1 ÷ Anos) − 1) × 100. Os três devem ser maiores que zero.",
	tool_cagr_faq_q3: "Como o CAGR difere do ROI simples?",
	tool_cagr_faq_a3: "O ROI simples ignora quantos anos a mudança levou. O CAGR anualiza o crescimento pelos anos que você informa.",
	tool_cagr_faq_q4: "Isso é aconselhamento de investimento?",
	tool_cagr_faq_a4: "Não. Os números são apenas ilustrações educativas — não é aconselhamento de investimento, fiscal ou financeiro.",
	tool_cagr_faq_q5: "E se o valor inicial ou final for zero ou negativo?",
	tool_cagr_faq_a5: "Ambos devem ser maiores que zero. Entradas zero ou negativas tornam a fórmula padrão de CAGR indefinida aqui.",
	tool_cagr_faq_q6: "O CAGR inclui depósitos ou retiradas?",
	tool_cagr_faq_a6: "Não. Usa só início, fim e anos. Para fluxos irregulares, use uma ferramenta de IRR.",
	tool_cagr_faq_q7: "A capitalização é anual?",
	tool_cagr_faq_a7: "Sim nesta página. O timing dentro do ano é ignorado.",

	tool_cagr_disclaimer: "Resultados de CAGR são apenas ilustrações educativas e não constituem aconselhamento de investimento, fiscal ou financeiro. Retornos passados ou hipotéticos não garantem resultados futuros. Carteiras reais enfrentam taxas, impostos, fluxos de caixa e risco que esta página não modela.",
	tool_cagr_references: "Guias da Investopedia sobre definição e fórmula de CAGR; taxa anualizada padrão ((VF/VI)^(1/n) − 1).",
	tool_cagr_ref_cagr_label: "Investopedia — Compound Annual Growth Rate (CAGR)",
	tool_cagr_ref_formula_label: "Investopedia — Formula for calculating CAGR",
};

export default pt;
