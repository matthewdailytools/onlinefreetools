/**
 * i18n 工具分片（how-to-calculate-vat / pt）。
 * 功能：VAT/GST 对净价加税或从含税价拆税；常用税率芯片；反算校验。
 */
import type { SiteLangDict } from '../../../types';

/** 葡萄牙语（pt）VAT/GST 计算器文案键表，与 en 分片键名一一对应。 */
const pt: SiteLangDict = {
	tool_vat_title: "Calculadora de IVA / GST — somar imposto ao líquido ou extrair do bruto",
	tool_vat_description: "Some IVA ou GST a um valor líquido ou extraia o imposto e o líquido de um preço bruto (com imposto incluído). Exemplo: líquido 100 a 20 % → bruto 120, imposto 20. Introduza a taxa — sem tabela por país. Aritmética educativa no navegador, não é aconselhamento de declaração fiscal.",
	tool_vat_article: "Some IVA/GST a um preço líquido ou decomponha um bruto em líquido e imposto, com passos detalhados e verificação inversa.",
	tool_vat_desc: "Some ou extraia IVA/GST com a sua taxa. Mostra líquido, bruto, imposto e verificação inversa.",

	tool_vat_safety_banner: "Apenas educativo. Introduza a taxa que se aplica ao seu caso — esta página não consulta barêmes oficiais nem substitui aconselhamento fiscal.",
	tool_vat_mode_label: "Modo",
	tool_vat_mode_add: "Somar imposto ao líquido",
	tool_vat_mode_extract: "Extrair imposto do bruto",
	tool_vat_amount_label: "Montante",
	tool_vat_amount_ph: "ex. 100",
	tool_vat_rate_label: "IVA / GST %",
	tool_vat_rate_ph: "ex. 20",
	tool_vat_hint: "Escolha somar (líquido → bruto) ou extrair (bruto → líquido). Qualquer percentagem ≥ 0. Os chips de taxa são atalhos — confirme a taxa legal na sua fatura.",
	tool_vat_chips_label: "Atalhos de taxas comuns",
	tool_vat_chip_5: "5 %",
	tool_vat_chip_10: "10 %",
	tool_vat_chip_20: "20 %",
	tool_vat_chip_21: "21 %",
	tool_vat_calculate: "Calcular",
	tool_vat_sample: "Carregar exemplo",
	tool_vat_clear: "Limpar",
	tool_vat_grossOut_label: "Bruto",
	tool_vat_netOut_label: "Líquido",
	tool_vat_taxOut_label: "Imposto",
	tool_vat_row_check: "Verificação inversa",
	tool_vat_steps_title: "Passos",
	tool_vat_step_add_tpl: "Somar: bruto = líquido × (1 + taxa/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_step_extract_tpl: "Extrair: líquido = bruto ÷ (1 + taxa/100) = {gross} ÷ (1 + {pct}/100) = {net}.",
	tool_vat_step_tax_tpl: "Imposto = bruto − líquido = {gross} − {net} = {tax}.",
	tool_vat_step_check_tpl: "Verificação: líquido × (1 + taxa/100) = {net} × (1 + {pct}/100) = {gross}.",
	tool_vat_result_note: "A percentagem vem de si. Várias taxas, isenções e regras de entrega não são modeladas. Apenas educativo — não é aconselhamento fiscal, contabilístico ou de investimento.",
	tool_vat_err_generic: "Introduza um montante positivo e uma taxa ≥ 0 (por ex. montante 100 e taxa 20).",

	tool_vat_how_title: "Como usar a calculadora de IVA / GST",
	tool_vat_how_body: "Escolha o modo, o montante e a taxa, depois Calcular. Carregar exemplo alterna: somar 100@20 %, extrair 120@20 %, somar 50@10 % e extrair 107,1@7 %.",
	tool_vat_how_item_1: "Escolher Somar imposto ao líquido ou Extrair imposto do bruto.",
	tool_vat_how_item_2: "Introduzir o montante e a percentagem de IVA/GST (ou tocar num chip de taxa).",
	tool_vat_how_item_3: "Clicar Calcular para ver bruto, líquido, imposto e a linha de verificação.",
	tool_vat_how_item_4: "Usar Carregar exemplo para percorrer casos típicos de somar/extrair.",

	tool_vat_why_choose_title: "Porquê usar esta calculadora de IVA / GST",
	tool_vat_why_choose_item_1: "Ambas as direções: imposto sobre líquido ou líquido e imposto a partir do bruto.",
	tool_vat_why_choose_item_2: "Verificação inversa: líquido × (1 + r) volta ao bruto.",
	tool_vat_why_choose_item_3: "Linhas de passos com os seus números nas fórmulas.",
	tool_vat_why_choose_item_4: "Chips 5 / 10 / 20 / 21 % como atalhos — não é barém legal.",
	tool_vat_why_choose_item_5: "Limite claro: introduz a taxa; sem matriz por país nem ajuda à declaração.",

	tool_vat_formula_title: "Fórmulas de IVA / GST",
	tool_vat_formula_body: "Seja r a taxa decimal (percentagem ÷ 100). As mesmas identidades valem para IVA, GST ou imposto sobre vendas quando há uma única percentagem sobre o líquido.",
	tool_vat_formula_item_1: "Somar: bruto = líquido × (1 + r). Ex.: 100 × 1,20 = 120 a 20 %.",
	tool_vat_formula_item_2: "Extrair: líquido = bruto ÷ (1 + r). Ex.: 120 ÷ 1,20 = 100 a 20 %.",
	tool_vat_formula_item_3: "Imposto = bruto − líquido. No exemplo → imposto 20.",
	tool_vat_formula_item_4: "Fração de imposto no bruto = r ÷ (1 + r). A 20 %, o imposto é um sexto do preço bruto.",
	tool_vat_formula_item_5: "GST vs IVA: a mesma matemática; rótulos e regras de entrega variam por país.",

	tool_vat_example_title: "Exemplos resolvidos",
	tool_vat_example: "Carregar exemplo começa com somar: líquido 100 a 20 % → bruto 120, imposto 20. Depois extrai 120 de volta para líquido 100. Segue líquido 50 a 10 % → 55. Último: bruto 107,1 a 7 % ≈ líquido 100. Confirme sempre a taxa da sua fatura.",

	tool_vat_usecases_title: "Quando usar uma calculadora de IVA / GST",
	tool_vat_usecase_1: "Trabalhos escolares: somar imposto ao líquido e mostrar os passos (1 + r).",
	tool_vat_usecase_2: "Recibos: partir de um total com imposto e recuperar líquido e imposto.",
	tool_vat_usecase_3: "Orçamento rápido: aplicar uma taxa conhecida sem folha de cálculo.",
	tool_vat_usecase_4: "Comparar termos GST e IVA com a mesma aritmética.",

	tool_vat_faq_q1: "Como somar IVA a um valor líquido?",
	tool_vat_faq_a1: "Multiplicar por (1 + taxa/100). Líquido 100 a 20 % → 100 × 1,20 = 120 bruto; imposto = 20.",
	tool_vat_faq_q2: "Como extrair IVA de um preço bruto?",
	tool_vat_faq_a2: "Dividir por (1 + taxa/100). Bruto 120 a 20 % → 120 ÷ 1,20 = 100 líquido; imposto = 20.",
	tool_vat_faq_q3: "Incluem taxas de IVA por país?",
	tool_vat_faq_a3: "Não. Introduza a percentagem. Os chips são só atalhos, não uma tabela legal.",
	tool_vat_faq_q4: "A GST calcula-se de forma diferente do IVA?",
	tool_vat_faq_a4: "Com uma única percentagem sobre o líquido, somar e extrair são iguais. Nomes e declaração diferem.",
	tool_vat_faq_q5: "A taxa pode ser 0 %?",
	tool_vat_faq_a5: "Sim. A 0 %, líquido = bruto e imposto = 0 — útil para exemplos pedagógicos.",
	tool_vat_faq_q6: "Várias taxas de IVA numa fatura?",
	tool_vat_faq_a6: "Não. Calcule linha a linha ou use software que trate taxas mistas e isenções.",
	tool_vat_faq_q7: "Isto é aconselhamento de declaração fiscal?",
	tool_vat_faq_a7: "Não. Apenas aritmética educativa — não é aconselhamento fiscal, contabilístico ou de investimento.",

	tool_vat_disclaimer: "Apenas aritmética educativa de IVA/GST — não é aconselhamento financeiro, fiscal, contabilístico ou de investimento.",
	tool_vat_references: "Investopedia e fórmulas de manual — contexto educativo.",
	tool_vat_ref_a_label: "Investopedia — VAT",
	tool_vat_ref_b_label: "Investopedia — imposto sobre vendas",
};

export default pt;
