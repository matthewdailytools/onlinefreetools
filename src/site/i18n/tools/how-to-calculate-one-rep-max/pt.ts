/**
 * i18n 工具分片（how-to-calculate-one-rep-max / pt）。
 * 1RM 估算：Epley / Brzycki / Lombardi 对比与 %1RM 训练负荷表；含安全免责。
 */
import type { SiteLangDict } from '../../../types';

/** 葡萄牙语界面与 SEO 文案（SiteLangDict；占位符 {w}{r}{orm}{lo}{hi}{p80} 勿改）。 */
const pt: SiteLangDict = {
	tool_one_rep_max_title: "Calculadora de 1RM — estime o máximo de uma repetição a partir do peso e das reps",
	tool_one_rep_max_description: "Estime seu máximo de uma repetição (1RM) a partir de uma série submáxima com Epley 1RM ≈ w×(1+reps/30) e compare Brzycki e Lombardi. Exemplo: 100 por 5 reps → cerca de 116,7. Inclui tabela de cargas em %1RM. Apenas estimativa educativa — não é orientação de treino ou médica.",
	tool_one_rep_max_article: "Estime o 1RM a partir do peso e das repetições com Epley, compare Brzycki e Lombardi e leia percentuais de treino do 1RM Epley.",
	tool_one_rep_max_desc: "Estime o 1RM de uma série submáxima com Epley, Brzycki e Lombardi, mais tabela de cargas em %1RM.",

	tool_one_rep_max_safety_banner: "Apenas estimativa educativa. Não tente um max real só com este número — sem aquecimento, parceiros e orientação. Não é conselho médico nem de treino.",
	tool_one_rep_max_weight_label: "Peso levantado",
	tool_one_rep_max_weight_ph: "ex. 100",
	tool_one_rep_max_reps_label: "Repetições feitas",
	tool_one_rep_max_reps_ph: "ex. 5",
	tool_one_rep_max_hint: "Use um peso que você levantou por várias reps limpas com boa forma. Reps inteiras de 1 a 12 funcionam melhor. Vírgula decimal no peso é aceita.",
	tool_one_rep_max_calculate: "Calcular",
	tool_one_rep_max_sample: "Carregar exemplo",
	tool_one_rep_max_clear: "Limpar",
	tool_one_rep_max_ormOut_label: "1RM estimado (Epley)",
	tool_one_rep_max_pct_title: "Cargas de treino a partir do 1RM Epley",
	tool_one_rep_max_pct_col_pct: "% do 1RM",
	tool_one_rep_max_pct_col_load: "Carga",
	tool_one_rep_max_steps_title: "Passos",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "Faixa entre fórmulas: {lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley: 1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}.",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}.",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi: 1RM ≈ w × r^0,1 = {w} × {r}^0,1 = {orm}.",
	tool_one_rep_max_step_pct_tpl: "A 80 % do 1RM Epley ({orm}): carga ≈ 0,8 × {orm} = {p80}.",
	tool_one_rep_max_result_note: "As fórmulas divergem mais conforme as reps sobem. Prefira séries com ≤10 reps para uma estimativa didática. Aqueça; nunca maxe só por um número bruto do calculador.",
	tool_one_rep_max_err_generic: "Digite um peso positivo e um número inteiro de reps de 1 a 12 (por exemplo 100 e 5).",
	tool_one_rep_max_err_high_reps: "Acima de cerca de 12 reps, estas fórmulas ficam pouco confiáveis. Use uma série mais pesada com menos reps limpas.",

	tool_one_rep_max_how_title: "Como estimar seu máximo de uma repetição",
	tool_one_rep_max_how_body: "Informe o peso levantado e quantas reps limpas você fez, depois Calcular. Você vê o 1RM Epley, comparações Brzycki e Lombardi e uma tabela de percentuais comuns de treino.",
	tool_one_rep_max_how_item_1: "Informe o peso da barra ou halteres de uma série concluída com boa forma.",
	tool_one_rep_max_how_item_2: "Digite o número de reps bem-sucedidas (números inteiros 1–12 funcionam melhor).",
	tool_one_rep_max_how_item_3: "Clique em Calcular para ver o 1RM Epley com Brzycki e Lombardi lado a lado.",
	tool_one_rep_max_how_item_4: "Leia a tabela %1RM (50 %–95 %) para cargas de trabalho aproximadas; Carregar exemplo alterna 100×5, 60×8, 80×3 e uma single real.",

	tool_one_rep_max_why_choose_title: "O que esta calculadora de 1RM oferece",
	tool_one_rep_max_why_choose_item_1: "1RM Epley como estimativa principal, com Brzycki e Lombardi para comparar.",
	tool_one_rep_max_why_choose_item_2: "Uma linha de faixa entre fórmulas para ver o quanto as três estimativas divergem.",
	tool_one_rep_max_why_choose_item_3: "Tabela de cargas de 50 % a 95 % do 1RM Epley.",
	tool_one_rep_max_why_choose_item_4: "Passos claros que inserem seu peso e reps em cada fórmula.",
	tool_one_rep_max_why_choose_item_5: "Faixa de segurança: só educativo — não é ordem para tentar um max.",

	tool_one_rep_max_formula_title: "Fórmulas do máximo de uma repetição",
	tool_one_rep_max_formula_body: "O máximo de uma repetição (1RM) é a carga mais pesada que você levantaria uma vez com boa forma. Estas equações estimam a partir de uma série submáxima.",
	tool_one_rep_max_formula_item_1: "Epley: 1RM ≈ w × (1 + r/30). Exemplo: w = 100, r = 5 → 100 × (1 + 5/30) = 116,67.",
	tool_one_rep_max_formula_item_2: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r). Mesmo exemplo → 100 × 36 ÷ 32 = 112,5. Indefinido para r ≥ 37.",
	tool_one_rep_max_formula_item_3: "Lombardi: 1RM ≈ w × r^0,1. Mesmo exemplo → 100 × 5^0,1 ≈ 117,46.",
	tool_one_rep_max_formula_item_4: "Estimativas se afastam com mais reps; use menos reps limpas para uma estimativa didática mais apertada.",
	tool_one_rep_max_formula_item_5: "Percentuais de treino (por ex. 80 % do 1RM) são só planejamento — ajuste por fadiga, exercício e experiência.",

	tool_one_rep_max_example_title: "Exemplos resolvidos",
	tool_one_rep_max_example: "Carregar exemplo começa em 100 por 5 reps: Epley ≈ 116,7, Brzycki 112,5, Lombardi ≈ 117,5. Depois 60 × 8, depois 80 × 3, depois uma single real (135 × 1) onde todas as fórmulas retornam 135. Mantenha a forma rígida; pare cedo se a técnica quebrar.",

	tool_one_rep_max_usecases_title: "Quando usar uma calculadora de 1RM",
	tool_one_rep_max_usecase_1: "Lição de casa ou sala: inserir peso e reps em Epley e mostrar os passos.",
	tool_one_rep_max_usecase_2: "Esboço de programa: converter 1RM estimado em séries de trabalho a 70 %–85 %.",
	tool_one_rep_max_usecase_3: "Comparar fórmulas: ver como Epley, Brzycki e Lombardi divergem na mesma série.",
	tool_one_rep_max_usecase_4: "Evitar tentativa max real quando só há uma série submáxima registrada.",

	tool_one_rep_max_faq_q1: "Como calcular o 1RM com a fórmula de Epley?",
	tool_one_rep_max_faq_a1: "Multiplique o peso por (1 + reps/30). Com 100 por 5 reps: 100 × (1 + 5/30) = 116,67. Esta página também mostra Brzycki e Lombardi para comparar.",
	tool_one_rep_max_faq_q2: "Qual a diferença entre Epley e Brzycki?",
	tool_one_rep_max_faq_a2: "Epley usa um acréscimo linear de reps/30. Brzycki usa 36/(37−reps). Para 100×5, Epley dá ≈116,7 e Brzycki 112,5. Nenhum substitui teste max supervisionado.",
	tool_one_rep_max_faq_q3: "Quantas reps usar para uma boa estimativa?",
	tool_one_rep_max_faq_a3: "Em geral 1–10 reps limpas. Acima de cerca de 12, estas fórmulas ficam pouco confiáveis; esta página pede série mais pesada com menos reps.",
	tool_one_rep_max_faq_q4: "O que significa 80 % do 1RM?",
	tool_one_rep_max_faq_a4: "Intensidade de trabalho comum: carga ≈ 0,8 × 1RM estimado. Para 1RM Epley de 116,7, 80 % é cerca de 93,3 na mesma unidade.",
	tool_one_rep_max_faq_q5: "É seguro tentar meu 1RM calculado?",
	tool_one_rep_max_faq_a5: "Não só com esta página. Trate o número como educativo. Tentativa max real exige aquecimento, spotting, técnica e idealmente orientação — não é conselho para maxar.",
	tool_one_rep_max_faq_q6: "As unidades importam (kg vs lb)?",
	tool_one_rep_max_faq_a6: "Use uma unidade consistente. As fórmulas são razões adimensionais; o 1RM sai na mesma unidade do peso informado.",
	tool_one_rep_max_faq_q7: "Isto é conselho médico ou de treino?",
	tool_one_rep_max_faq_a7: "Não. Calculadora educativa para entender equações comuns de 1RM. Para treino ou saúde, consulte treinador ou profissional de saúde qualificado.",

	tool_one_rep_max_disclaimer: "Apenas estimativa educativa de 1RM — não é coaching, conselho médico ou profissional. Não tente levantamento máximo baseado só neste calculador.",
	tool_one_rep_max_references: "Descrições comuns de equações de predição de 1RM em livros-texto e Wikipedia.",
	tool_one_rep_max_ref_a_label: "Wikipedia — One-repetition maximum",
	tool_one_rep_max_ref_b_label: "Wikipedia — Treinamento de força",
};

export default pt;
