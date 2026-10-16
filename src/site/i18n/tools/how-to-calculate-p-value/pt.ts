/**
 * Fragmento i18n (how-to-calculate-p-value / pt).
 * Valor-p normal uni- ou bilateral a partir de z com erfc; atalhos de z críticos.
 */
import type { SiteLangDict } from '../../../types';

/** Português: textos da calculadora de valor-p a partir de um escore z */
const pt: SiteLangDict = {
	tool_p_value_title: "Calculadora de valor-p — A partir de um escore z",
	tool_p_value_description: "Obtenha o valor-p normal unilateral ou bilateral a partir de um escore z com aproximação erfc. Exemplo: z = 1,96 → p bilateral ≈ 0,05. Assume normal padrão contínua — não é teste t, χ² nem exato. Apenas educacional.",
	tool_p_value_article: "Aproxima valores-p normal padrão uni- ou bilaterais a partir de z, com atalhos de z críticos e passos.",
	tool_p_value_desc: "Valor-p normal uni- ou bilateral a partir de z. Mostra ambas as caudas e |z|.",

	tool_p_value_mode_label: "Tipo de cauda",
	tool_p_value_mode_two: "Bilateral",
	tool_p_value_mode_one: "Unilateral",
	tool_p_value_hint: "Usa o modelo normal padrão. O p unilateral é a metade do bilateral numa normal simétrica (mesmo |z|).",
	tool_p_value_z_label: "Escore z",
	tool_p_value_z_ph: "ex.: 1,96",
	tool_p_value_chips_label: "Atalhos de z críticos comuns",
	tool_p_value_chip_1645: "z = 1,645",
	tool_p_value_chip_196: "z = 1,96",
	tool_p_value_chip_2576: "z = 2,576",
	tool_p_value_calculate: "Calcular",
	tool_p_value_sample: "Carregar exemplo",
	tool_p_value_clear: "Limpar",
	tool_p_value_pOut_label: "Valor-p bilateral",
	tool_p_value_pOneOut_label: "Valor-p unilateral",
	tool_p_value_altOut_label: "Outro tipo de cauda",
	tool_p_value_absOut_label: "|z|",
	tool_p_value_steps_title: "Passos",
	tool_p_value_step_abs_tpl: "Use o valor absoluto: |z| = |{z}| = {abs}.",
	tool_p_value_step_two_tpl: "p bilateral ≈ erfc(|z| / √2) = erfc({abs} / √2) ≈ {p}.",
	tool_p_value_step_one_tpl: "p unilateral ≈ bilateral / 2 = {two} / 2 ≈ {one}.",
	tool_p_value_result_note: "Aproximação normal padrão para estudo. Não é teste t, χ², binomial exato nem serviço de desenho de estudo. Um p pequeno não prova uma afirmação por si só.",
	tool_p_value_err_generic: "Digite um escore z finito (por exemplo 1,96).",

	tool_p_value_how_title: "Como usar a calculadora de valor-p",
	tool_p_value_how_body: "Escolha bilateral ou unilateral, digite z (ou toque num atalho), depois Calcular. Carregar exemplo alterna 1,96 bilateral, 1,96 unilateral, z=0 e z=2,576.",
	tool_p_value_how_item_1: "Escolha bilateral ou unilateral.",
	tool_p_value_how_item_2: "Digite um z finito, ou toque em 1,645 / 1,96 / 2,576.",
	tool_p_value_how_item_3: "Clique em Calcular para ver o p escolhido, o outro tipo de cauda e os passos.",
	tool_p_value_how_item_4: "Use Carregar exemplo para girar pontos clássicos de livro-texto.",

	tool_p_value_why_choose_title: "O que esta calculadora de valor-p oferece",
	tool_p_value_why_choose_item_1: "p normal unilateral e bilateral a partir do mesmo z.",
	tool_p_value_why_choose_item_2: "Atalhos de z críticos para os pontos 10% / 5% / 1% bilaterais.",
	tool_p_value_why_choose_item_3: "Passos que mostram erfc(|z|/√2) e a metade unilateral.",
	tool_p_value_why_choose_item_4: "Premissa clara: apenas normal padrão contínua.",
	tool_p_value_why_choose_item_5: "Limite honesto: não é suite completa de testes nem prova de uma hipótese.",

	tool_p_value_formula_title: "Fórmulas do valor-p normal",
	tool_p_value_formula_body: "Sob normal padrão contínua, p bilateral ≈ erfc(|z| / √2). O unilateral é a metade disso numa normal simétrica.",
	tool_p_value_formula_item_1: "p bilateral ≈ erfc(|z| / √2). Exemplo: |z|=1,96 → p ≈ 0,05.",
	tool_p_value_formula_item_2: "p unilateral ≈ bilateral / 2. Mesmo |z|=1,96 → unilateral ≈ 0,025.",
	tool_p_value_formula_item_3: "Usa aproximação numérica de erfc — precisão de estudo, não software certificado.",
	tool_p_value_formula_item_4: "Assume z normal padrão, não t, χ² nem testes exatos discretos.",
	tool_p_value_formula_item_5: "z = 0 → p bilateral = 1; |z| maior → p menor.",

	tool_p_value_example_title: "Exemplos resolvidos",
	tool_p_value_example: "Carregar exemplo começa com z=1,96 bilateral → p≈0,05. Depois mostra a metade unilateral ≈0,025. Em seguida z=0 → p=1. O último usa z=2,576 (cerca do crítico bilateral de 1%).",

	tool_p_value_usecases_title: "Quando usar uma calculadora de valor-p",
	tool_p_value_usecase_1: "Dever de casa: converter um z conhecido num p aproximado de cauda normal.",
	tool_p_value_usecase_2: "Checagem rápida depois de obter z na página relacionada de escore z.",
	tool_p_value_usecase_3: "Comparar a regra 1,96 ↔ 0,05 com um resultado numérico.",
	tool_p_value_usecase_4: "Ver unilateral e bilateral lado a lado para o mesmo |z|.",

	tool_p_value_faq_q1: "Isto é unilateral ou bilateral?",
	tool_p_value_faq_a1: "Ambos. Escolha o modo. Bilateral cobre ±|z|; unilateral é a metade sob normal simétrica.",
	tool_p_value_faq_q2: "Qual distribuição é assumida?",
	tool_p_value_faq_a2: "Normal padrão contínua para z. Não é calculadora de t, χ² ou binomial exato.",
	tool_p_value_faq_q3: "Por que z = 1,96 fica perto de 0,05?",
	tool_p_value_faq_a3: "Sob normal padrão, |z| ≈ 1,96 é o valor crítico clássico para teste bilateral de 5%; a aproximação erfc devolve cerca de 0,05.",
	tool_p_value_faq_q4: "Um p pequeno prova a hipótese alternativa?",
	tool_p_value_faq_a4: "Não. Um valor-p é probabilidade de cauda sob premissas declaradas, não prova automática.",
	tool_p_value_faq_q5: "Como unilateral se relaciona com bilateral aqui?",
	tool_p_value_faq_a5: "Para normal simétrica, p unilateral ≈ p bilateral ÷ 2 para o mesmo |z|.",
	tool_p_value_faq_q6: "Posso digitar z negativo?",
	tool_p_value_faq_a6: "Sim. A página usa |z|, então −1,96 e 1,96 dão o mesmo p bilateral.",
	tool_p_value_faq_q7: "Onde obtenho o escore z primeiro?",
	tool_p_value_faq_a7: "Use a calculadora relacionada de escore z se partir de nota bruta, média e DP.",

	tool_p_value_disclaimer: "Aproximação educacional sob modelo normal padrão — não substitui software estatístico, desenho de estudo ou análise profissional.",
	tool_p_value_references: "Wikipedia sobre valor-p e distribuição normal; função erro complementar para caudas normais.",
	tool_p_value_ref_pvalue_label: "Wikipedia — Valor-p",
	tool_p_value_ref_normal_label: "Wikipedia — Distribuição normal",
};

export default pt;
