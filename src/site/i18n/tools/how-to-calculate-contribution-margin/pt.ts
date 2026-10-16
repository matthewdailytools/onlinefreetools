/**
 * i18n 工具分片（how-to-calculate-contribution-margin / pt）。
 * 葡萄牙语检索向重写：margem de contribuição、índice、ponto de equilíbrio。YMYL 仅教育用途。
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_contribution_margin_title: "Calculadora de margem de contribuição — Índice e ponto de equilíbrio",
	tool_contribution_margin_description: "Calcule a margem de contribuição e o índice a partir do preço e do custo variável. Exemplo: preço 50, CV 30 → MC 20 (40%). Quantidade opcional gera a MC total; custos fixos opcionais geram o ponto de equilíbrio em unidades. Apenas educativo — não é aconselhamento empresarial nem de investimento.",
	tool_contribution_margin_article: "Obtenha a MC unitária e o índice, a MC total se informar unidades, e o ponto de equilíbrio em unidades quando houver custos fixos.",
	tool_contribution_margin_desc: "MC e índice a partir de preço e CV. Totais e equilíbrio em unidades opcionais.",

	tool_contribution_margin_safety_banner: "Apenas educativo. Esta página faz a aritmética didática da margem de contribuição. Não é aconselhamento empresarial, fiscal, contabilístico nem de investimento.",
	tool_contribution_margin_hint: "O preço deve ser maior que zero. O custo variável deve ser ≥ 0 e não superior ao preço. Unidades e custos fixos são opcionais.",
	tool_contribution_margin_price_label: "Preço por unidade",
	tool_contribution_margin_price_ph: "ex. 50",
	tool_contribution_margin_vc_label: "Custo variável por unidade",
	tool_contribution_margin_vc_ph: "ex. 30",
	tool_contribution_margin_units_label: "Unidades (opcional)",
	tool_contribution_margin_units_ph: "ex. 100",
	tool_contribution_margin_fixed_label: "Custos fixos (opcional)",
	tool_contribution_margin_fixed_ph: "ex. 10000",
	tool_contribution_margin_calculate: "Calcular",
	tool_contribution_margin_sample: "Carregar exemplo",
	tool_contribution_margin_clear: "Limpar",
	tool_contribution_margin_cmOut_label: "Margem de contribuição (por unidade)",
	tool_contribution_margin_cmrOut_label: "Índice de MC",
	tool_contribution_margin_totalOut_label: "Margem de contribuição total",
	tool_contribution_margin_beOut_label: "Ponto de equilíbrio (unidades)",
	tool_contribution_margin_steps_title: "Passos",
	tool_contribution_margin_step_cm_tpl: "MC = preço − CV = {price} − {vc} = {cm}.",
	tool_contribution_margin_step_ratio_tpl: "Índice de MC = MC ÷ preço × 100 = {cm} ÷ {price} × 100 = {ratio}%.",
	tool_contribution_margin_step_total_tpl: "MC total = MC unitária × unidades = {cm} × {units} = {total}.",
	tool_contribution_margin_step_be_tpl: "Equilíbrio (unidades) = fixos ÷ MC = {fixed} ÷ {cm} = {be}.",
	tool_contribution_margin_result_note: "A MC cobre custos fixos e lucro depois dos variáveis. Misturas multiproduto e impostos não estão no modelo. Apenas educativo — não é aconselhamento empresarial.",
	tool_contribution_margin_err_generic: "Informe preço > 0 e custo variável ≥ 0 não acima do preço (por exemplo 50 e 30). Unidades opcionais devem ser > 0; custos fixos opcionais ≥ 0.",

	tool_contribution_margin_how_title: "Como usar a calculadora de margem de contribuição",
	tool_contribution_margin_how_body: "Digite preço e custo variável unitários. Se quiser, acrescente unidades para a MC total e custos fixos para o equilíbrio em unidades. «Carregar exemplo» cicla unitário, com unidades, com fixos e o caso combinado.",
	tool_contribution_margin_how_item_1: "Informe o preço por unidade e o custo variável por unidade.",
	tool_contribution_margin_how_item_2: "Opcional: informe unidades para ver a margem de contribuição total.",
	tool_contribution_margin_how_item_3: "Opcional: informe custos fixos para ver o equilíbrio em unidades (exige MC > 0).",
	tool_contribution_margin_how_item_4: "Clique em Calcular para ver MC, índice e linhas de passos.",

	tool_contribution_margin_why_choose_title: "O que esta calculadora de margem de contribuição oferece",
	tool_contribution_margin_why_choose_item_1: "MC unitária e índice a partir de preço e custo variável.",
	tool_contribution_margin_why_choose_item_2: "MC total quando você informa unidades.",
	tool_contribution_margin_why_choose_item_3: "Ponto de equilíbrio em unidades quando você informa custos fixos.",
	tool_contribution_margin_why_choose_item_4: "Linhas de passos que encaixam os seus números nas fórmulas.",
	tool_contribution_margin_why_choose_item_5: "Limite YMYL explícito: só aritmética educativa — não é aconselhamento empresarial.",

	tool_contribution_margin_formula_title: "Fórmulas da margem de contribuição",
	tool_contribution_margin_formula_body: "A margem de contribuição é o que resta do preço após o custo variável — o valor disponível para cobrir custos fixos e lucro.",
	tool_contribution_margin_formula_item_1: "MC = preço − CV. Exemplo: 50 − 30 = 20.",
	tool_contribution_margin_formula_item_2: "Índice de MC = MC ÷ preço. Exemplo: 20 ÷ 50 = 40%.",
	tool_contribution_margin_formula_item_3: "MC total = MC unitária × unidades.",
	tool_contribution_margin_formula_item_4: "Equilíbrio (unidades) = custos fixos ÷ MC unitária (quando MC > 0).",
	tool_contribution_margin_formula_item_5: "A margem bruta usa COGS; a MC usa só o custo variável — podem diferir.",

	tool_contribution_margin_example_title: "Exemplos resolvidos",
	tool_contribution_margin_example: "«Carregar exemplo» começa com preço 50 e CV 30 → MC 20 (40%). Depois multiplica por 100 unidades → MC total 2.000. Em seguida custos fixos 10.000 → equilíbrio em 500 unidades. O último exemplo combina unidades e custos fixos.",

	tool_contribution_margin_usecases_title: "Quando usar uma calculadora de margem de contribuição",
	tool_contribution_margin_usecase_1: "Trabalho escolar: contribuição unitária antes de um problema de ponto de equilíbrio.",
	tool_contribution_margin_usecase_2: "Ver como uma mudança no custo variável move o índice de MC.",
	tool_contribution_margin_usecase_3: "Estimar quantas unidades cobrem um total de custos fixos informado (só ilustração).",
	tool_contribution_margin_usecase_4: "Comparar com a margem bruta na página relacionada quando COGS ≠ custo variável.",

	tool_contribution_margin_faq_q1: "Como se calcula a margem de contribuição?",
	tool_contribution_margin_faq_a1: "MC = preço − custo variável. Exemplo: 50 − 30 = 20; índice = 20 ÷ 50 = 40%.",
	tool_contribution_margin_faq_q2: "Em que a MC difere da margem bruta?",
	tool_contribution_margin_faq_a2: "A MC usa o custo variável. A margem bruta usa o COGS, que pode incluir itens que não são puramente variáveis.",
	tool_contribution_margin_faq_q3: "Preciso da quantidade?",
	tool_contribution_margin_faq_a3: "Não para a MC unitária. Informe unidades só se quiser a MC total.",
	tool_contribution_margin_faq_q4: "Como o equilíbrio em unidades é calculado aqui?",
	tool_contribution_margin_faq_a4: "Equilíbrio (unidades) = custos fixos ÷ MC unitária quando MC > 0. Para uma UI de equilíbrio mais completa, use a calculadora de ponto de equilíbrio relacionada.",
	tool_contribution_margin_faq_q5: "O custo variável pode ultrapassar o preço?",
	tool_contribution_margin_faq_a5: "Esta página rejeita esse caso para a MC unitária (MC negativa). Reveja as entradas.",
	tool_contribution_margin_faq_q6: "Misturas multiproduto são modeladas?",
	tool_contribution_margin_faq_a6: "Não. Calcule cada produto à parte ou use uma planilha para MC ponderada.",
	tool_contribution_margin_faq_q7: "Isto é aconselhamento empresarial?",
	tool_contribution_margin_faq_a7: "Não. Só aritmética educativa — não é aconselhamento financeiro, fiscal, contabilístico nem de investimento.",

	tool_contribution_margin_disclaimer: "Margem de contribuição apenas educativa — não é aconselhamento financeiro, fiscal, contabilístico, empresarial nem de investimento.",
	tool_contribution_margin_references: "Artigos da Investopedia sobre contribution margin e break-even, para contexto educativo.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default pt;
