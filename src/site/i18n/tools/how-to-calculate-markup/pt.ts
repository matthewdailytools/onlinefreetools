/**
 * i18n 工具分片（how-to-calculate-markup / pt）。
 * 加价率：从成本/售价算百分比，或反推售价/成本；并排显示毛利率以便对照。
 */
import type { SiteLangDict } from '../../../types';

/** 葡萄牙语 markup 计算器文案分片（与 en 键一致；占位符 {cost}{sell}{dollar}{pct}{margin} 勿改）。 */
const pt: SiteLangDict = {
	tool_markup_title: "Calculadora de markup — Percentual, preço de venda ou custo",
	tool_markup_description: "Calcule a percentagem de markup a partir do custo e do preço de venda, ou descubra o preço ou o custo para um markup dado. Exemplo: custo 50, venda 80 → markup 60 % (margem 37,5 %). Markup divide pelo custo; margem pelas vendas. Matemática de retalho educativa — não é aconselhamento comercial.",
	tool_markup_article: "Obtenha markup %, preço de venda ou custo e veja a margem bruta correspondente para não confundir markup com margem.",
	tool_markup_desc: "Calcule markup % a partir de custo e preço, ou resolva venda ou custo. Mostra a margem para comparar.",

	tool_markup_mode_label: "O que calcular",
	tool_markup_mode_pct: "Markup %",
	tool_markup_mode_sell: "Preço de venda",
	tool_markup_mode_cost: "Custo",
	tool_markup_hint: "Escolha o valor a encontrar. Markup usa o custo no denominador; margem, o preço de venda. Vírgula decimal também funciona. Só educativo — não é conselho de preços.",
	tool_markup_cost_label: "Custo",
	tool_markup_cost_ph: "ex.: 50",
	tool_markup_sell_label: "Preço de venda",
	tool_markup_sell_ph: "ex.: 80",
	tool_markup_mk_label: "Markup %",
	tool_markup_mk_ph: "ex.: 60",
	tool_markup_calculate: "Calcular",
	tool_markup_sample: "Carregar exemplo",
	tool_markup_clear: "Limpar",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_sellOut_label: "Preço de venda",
	tool_markup_costOut_label: "Custo",
	tool_markup_profitOut_label: "Markup em reais",
	tool_markup_marginOut_label: "Margem bruta %",
	tool_markup_steps_title: "Passos",
	tool_markup_step_pct_tpl: "Markup % = (venda − custo) ÷ custo × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct} %.",
	tool_markup_step_sell_tpl: "Preço de venda = custo × (1 + markup %/100) = {cost} × (1 + {pct}/100) = {sell}.",
	tool_markup_step_cost_tpl: "Custo = venda ÷ (1 + markup %/100) = {sell} ÷ (1 + {pct}/100) = {cost}.",
	tool_markup_step_margin_tpl: "Margem bruta % = (venda − custo) ÷ venda × 100 = {dollar} ÷ {sell} × 100 = {margin} %.",
	tool_markup_result_note: "Markup divide pelo custo; margem pelo preço de venda. Mesmo markup em dinheiro, percentagens diferentes. Só educativo — não é conselho fiscal, de preços ou investimento.",
	tool_markup_err_generic: "Introduza custo positivo e preço de venda ou markup % válido para o modo escolhido (por ex. custo 50 e venda 80).",

	tool_markup_how_title: "Como usar a calculadora de markup",
	tool_markup_how_body: "Escolha se precisa de markup %, preço de venda ou custo. Preencha os campos visíveis e clique em Calcular. Carregar exemplo alterna custo/venda → %, custo/% → venda e venda/% → custo.",
	tool_markup_how_item_1: "Em « O que calcular », escolha Markup %, Preço de venda ou Custo.",
	tool_markup_how_item_2: "Introduza os valores conhecidos (custo e venda, ou custo e markup %, ou venda e markup %).",
	tool_markup_how_item_3: "Clique em Calcular para ver o valor em falta, o markup em dinheiro e a margem bruta % correspondente.",
	tool_markup_how_item_4: "Exemplo: 50/80 → 60 %, custo 40 a 25 % → venda 50, venda 120 a 50 % → custo 80.",

	tool_markup_why_choose_title: "O que esta calculadora de markup oferece",
	tool_markup_why_choose_item_1: "Três modos: markup % a partir de custo e preço, preço a partir de custo e %, ou custo a partir de preço e %.",
	tool_markup_why_choose_item_2: "Markup em dinheiro e margem bruta % ao lado do markup para manter os termos distintos.",
	tool_markup_why_choose_item_3: "Linhas de passo com os seus números em (P−C)/C e (P−C)/P.",
	tool_markup_why_choose_item_4: "Campos ocultos quando não servem o modo selecionado.",
	tool_markup_why_choose_item_5: "Aviso educativo claro — não é aconselhamento comercial, fiscal ou de investimento.",

	tool_markup_formula_title: "Fórmulas de markup",
	tool_markup_formula_body: "Markup mede a majoração em relação ao custo. Margem mede o mesmo lucro em dinheiro em relação ao preço de venda.",
	tool_markup_formula_item_1: "Markup % = (preço de venda − custo) ÷ custo × 100. Exemplo: (80 − 50) ÷ 50 × 100 = 60 %.",
	tool_markup_formula_item_2: "Preço de venda = custo × (1 + markup %/100). Exemplo: 40 × 1,25 = 50 com 25 % de markup.",
	tool_markup_formula_item_3: "Custo = preço de venda ÷ (1 + markup %/100). Exemplo: 120 ÷ 1,5 = 80 com 50 % de markup.",
	tool_markup_formula_item_4: "Margem bruta % = (preço de venda − custo) ÷ preço de venda × 100. Mesmo exemplo 50/80 → 37,5 %.",
	tool_markup_formula_item_5: "Markup de 100 % significa preço = 2 × custo (margem 50 %). Acima de 100 % quando preço > 2 × custo.",

	tool_markup_example_title: "Exemplos resolvidos",
	tool_markup_example: "O exemplo começa com custo 50 e venda 80 → markup 60 %, majoração 30, margem 37,5 %. Depois custo 40 a 25 % → venda 50. Depois venda 120 a 50 % → custo 80. Amostra de equilíbrio (100/100) mostra 0 % markup e 0 % margem.",

	tool_markup_usecases_title: "Quando usar uma calculadora de markup",
	tool_markup_usecase_1: "Trabalhos de retalho: converter custo e preço de tabela em markup % com passos visíveis.",
	tool_markup_usecase_2: "Folhas de preços: com markup alvo, encontrar o preço de venda a partir do custo.",
	tool_markup_usecase_3: "Custo inverso: a partir de preço conhecido e política de markup, recuperar o custo implícito.",
	tool_markup_usecase_4: "Clarificar termos: mostrar por que 60 % de markup não é o mesmo que 60 % de margem.",

	tool_markup_faq_q1: "Como calcular a percentagem de markup?",
	tool_markup_faq_a1: "Subtraia o custo do preço de venda, divida pelo custo, multiplique por 100. Exemplo: custo 50, venda 80 → (80−50)/50 × 100 = 60 %.",
	tool_markup_faq_q2: "Qual a diferença entre markup e margem?",
	tool_markup_faq_a2: "Markup divide o lucro em dinheiro pelo custo; margem pelo preço de venda. O mesmo negócio 50/80: 60 % markup e 37,5 % margem.",
	tool_markup_faq_q3: "Como achar o preço de venda a partir do custo e do markup %?",
	tool_markup_faq_a3: "Venda = custo × (1 + markup %/100). Com custo 40 e 25 % markup, venda = 40 × 1,25 = 50.",
	tool_markup_faq_q4: "O markup pode passar de 100 %?",
	tool_markup_faq_a4: "Sim. Se o preço for mais que o dobro do custo, o markup excede 100 %. Exemplo: custo 50, venda 150 → markup 200 %.",
	tool_markup_faq_q5: "E se vender abaixo do custo?",
	tool_markup_faq_a5: "Markup e margem ficam negativos — perda por unidade antes de outros custos.",
	tool_markup_faq_q6: "Inclui impostos ou descontos?",
	tool_markup_faq_a6: "Não. Introduza os valores de custo e preço que quer comparar depois de aplicar impostos ou descontos por conta própria.",
	tool_markup_faq_q7: "Isto é aconselhamento financeiro?",
	tool_markup_faq_a7: "Não. Apenas aritmética de retalho educativa — não é conselho fiscal, de preços ou investimento.",

	tool_markup_disclaimer: "Apenas ilustração educativa de markup — não é aconselhamento financeiro, fiscal, de preços ou investimento.",
	tool_markup_references: "Investopedia e fórmulas de manual padrão para contexto educativo.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Margem de lucro",
};

export default pt;
