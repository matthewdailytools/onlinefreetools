/**
 * i18n tool shard (how-to-calculate-z-score / pt).
 * Nota bruta ↔ escore z com z = (x − média) / DP; passos e guarda DP > 0.
 */
import type { SiteLangDict } from '../../../types';

/** Textos em português da calculadora de escore z (nota bruta ↔ escore padrão). */
const pt: SiteLangDict = {
	tool_z_score_title: "Calculadora de escore z — Nota bruta ↔ escore padrão",
	tool_z_score_description: "Converta uma nota bruta em escore z com z = (x − média) / DP, ou recupere a nota a partir de z. Exemplo: x = 85, média = 70, DP = 10 → z = 1,5. Exige DP > 0. Apenas escala linear educacional — não é teste de normalidade nem valor-p.",
	tool_z_score_article: "Calcule um escore padrão a partir da nota, da média e do DP, ou recupere a nota bruta a partir de z, com os passos mostrados.",
	tool_z_score_desc: "Nota bruta ↔ escore z com z = (x − média) / DP. Mostra passos e |z|.",

	tool_z_score_mode_label: "O que você quer obter?",
	tool_z_score_mode_z: "Escore z a partir da nota bruta",
	tool_z_score_mode_x: "Nota bruta a partir do escore z",
	tool_z_score_hint: "Informe a média e um desvio padrão positivo. Escolha se começa pela nota ou por z.",
	tool_z_score_x_label: "Nota bruta (x)",
	tool_z_score_x_ph: "ex.: 85",
	tool_z_score_z_label: "Escore z (z)",
	tool_z_score_z_ph: "ex.: 1,5",
	tool_z_score_mean_label: "Média (μ)",
	tool_z_score_mean_ph: "ex.: 70",
	tool_z_score_sd_label: "Desvio padrão (σ)",
	tool_z_score_sd_ph: "ex.: 10",
	tool_z_score_calculate: "Calcular",
	tool_z_score_sample: "Carregar exemplo",
	tool_z_score_clear: "Limpar",
	tool_z_score_zOut_label: "Escore z",
	tool_z_score_xOut_label: "Nota bruta",
	tool_z_score_diffOut_label: "x − média",
	tool_z_score_absOut_label: "|z| (DPs em relação à média)",
	tool_z_score_steps_title: "Passos",
	tool_z_score_step_z_tpl: "z = (x − média) / DP = ({x} − {mean}) / {sd} = {z}.",
	tool_z_score_step_x_tpl: "x = média + z × DP = {mean} + {z} × {sd} = {x}.",
	tool_z_score_step_diff_tpl: "Diferença em relação à média: x − média = {x} − {mean} = {diff}.",
	tool_z_score_step_abs_tpl: "Distância em DPs: |z| = |{z}| = {abs}.",
	tool_z_score_result_note: "A álgebra de z não exige normalidade; muitos usos seguintes (valores-p normais) exigem. Só para estudo — não substitui software estatístico nem desenho de pesquisa.",
	tool_z_score_err_generic: "Digite números finitos nos campos ativos e um desvio padrão maior que 0 (por exemplo x=85, média=70, DP=10).",

	tool_z_score_how_title: "Como usar a calculadora de escore z",
	tool_z_score_how_body: "Escolha nota→z ou z→nota, informe média e DP > 0 e clique em Calcular. Carregar exemplo percorre 85/70/10 → 1,5, a inversão 1,5 → 85, x=média → 0 e uma nota abaixo da média.",
	tool_z_score_how_item_1: "Escolha Escore z a partir da nota bruta ou Nota bruta a partir do escore z.",
	tool_z_score_how_item_2: "Informe a média e um desvio padrão positivo.",
	tool_z_score_how_item_3: "Digite a nota bruta ou o escore z, conforme o modo.",
	tool_z_score_how_item_4: "Clique em Calcular para ver a resposta, x−média, |z| e as linhas de passos.",

	tool_z_score_why_choose_title: "O que esta calculadora de escore z oferece",
	tool_z_score_why_choose_item_1: "Os dois sentidos: nota bruta → z, ou z → nota bruta.",
	tool_z_score_why_choose_item_2: "Linhas de passos que inserem seus números em z = (x − μ) / σ.",
	tool_z_score_why_choose_item_3: "Proteção clara DP > 0, para a divisão por zero nunca rodar.",
	tool_z_score_why_choose_item_4: "|z| mostrado como quantos desvios padrão em relação à média.",
	tool_z_score_why_choose_item_5: "Limite honesto: só escala linear — não é teste de normalidade nem valor-p.",

	tool_z_score_formula_title: "Fórmulas do escore z",
	tool_z_score_formula_body: "Um escore z (escore padrão) reescala um valor em relação a uma média e um desvio padrão informados. As unidades se cancelam; z é adimensional.",
	tool_z_score_formula_item_1: "z = (x − μ) / σ. Exemplo: (85 − 70) / 10 = 1,5.",
	tool_z_score_formula_item_2: "x = μ + z × σ. Exemplo: 70 + 1,5 × 10 = 85.",
	tool_z_score_formula_item_3: "σ precisa ser positivo; DP zero ou negativo é rejeitado.",
	tool_z_score_formula_item_4: "z = 0 quando x é igual à média; z negativo significa abaixo da média.",
	tool_z_score_formula_item_5: "A álgebra não exige normalidade; valores-p de cauda normal exigem — use a página de valor-p relacionada.",

	tool_z_score_example_title: "Exemplos resolvidos",
	tool_z_score_example: "Carregar exemplo começa com x=85, média=70, DP=10 → z=1,5. Em seguida inverte z=1,5 para x=85. Depois x=média → z=0. O último exemplo usa x=55 → z=−1,5 (um DP e meio abaixo da média).",

	tool_z_score_usecases_title: "Quando usar uma calculadora de escore z",
	tool_z_score_usecase_1: "Tarefa: converter uma nota de prova em escore padrão com passos visíveis.",
	tool_z_score_usecase_2: "Comparar notas de distribuições com médias ou dispersões diferentes.",
	tool_z_score_usecase_3: "Recuperar a nota bruta quando você já conhece z, média e DP.",
	tool_z_score_usecase_4: "Preparar um z para depois checar o valor-p de cauda normal em outra página.",

	tool_z_score_faq_q1: "O que significa z = 1,5?",
	tool_z_score_faq_a1: "A nota bruta está 1,5 desvio padrão acima da média indicada.",
	tool_z_score_faq_q2: "O DP pode ser zero?",
	tool_z_score_faq_a2: "Não. Divisão por zero é indefinida; informe DP > 0.",
	tool_z_score_faq_q3: "Como converter um escore z de volta em nota bruta?",
	tool_z_score_faq_a3: "Use x = média + z × DP. Exemplo: 70 + 1,5 × 10 = 85.",
	tool_z_score_faq_q4: "Isso assume distribuição normal?",
	tool_z_score_faq_a4: "A álgebra de z não exige normalidade, mas muitos usos seguintes (como valores-p normais) exigem.",
	tool_z_score_faq_q5: "Um |z| grande já é estatisticamente significativo?",
	tool_z_score_faq_a5: "Não por si só. Significância precisa de modelo e valor-p ou valor crítico — não só do número z.",
	tool_z_score_faq_q6: "E se x for igual à média?",
	tool_z_score_faq_a6: "Então z = 0. A nota fica exatamente no centro da distribuição indicada.",
	tool_z_score_faq_q7: "Onde obter um valor-p a partir de z?",
	tool_z_score_faq_a7: "Use a calculadora de valor-p relacionada depois de ter z. Esta página só faz a transformação linear em z.",

	tool_z_score_disclaimer: "Apenas z educacional = (x − média) / DP. Não substitui software estatístico, testes de normalidade nem desenho de estudo.",
	tool_z_score_references: "Wikipedia sobre escore padrão e desvio padrão para contexto educacional.",
	tool_z_score_ref_z_label: "Wikipedia — Escore padrão",
	tool_z_score_ref_sd_label: "Wikipedia — Desvio padrão",
};

export default pt;
