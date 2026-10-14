/**
 * i18n tool shard (how-to-calculate-acceleration / pt).
 * Reescrita independente para quem pesquisa «calculadora de aceleração» / «como calcular aceleração»:
 * aceleração constante a = (v − v0) ÷ t; isola a, v, v0 ou t mostrando o processo. Vírgula decimal (9,8).
 */
import type { SiteLangDict } from '../../../types';

/** Dicionário em português da calculadora de aceleração; mesmas chaves do mestre en.ts. */
const pt: SiteLangDict = {
	tool_acceleration_title: "Calculadora de aceleração — a partir da variação da velocidade",
	tool_acceleration_description:
		"Use a fórmula a = (v − v0) ÷ t para calcular a aceleração constante ou isolar a velocidade final, a inicial ou o tempo. Exemplo: de 0 a 10 m/s em 2 s, a = 5 m/s². O processo aparece em passos, pronto para conferir.",
	tool_acceleration_calculate: "Calcular",
	tool_acceleration_sample: "Carregar exemplo",
	tool_acceleration_clear: "Limpar",
	tool_acceleration_solve_label: "Incógnita",
	tool_acceleration_solve_a: "Aceleração (a)",
	tool_acceleration_solve_v: "Velocidade final (v)",
	tool_acceleration_solve_v0: "Velocidade inicial (v0)",
	tool_acceleration_solve_t: "Tempo (t)",
	tool_acceleration_v0_label: "Velocidade inicial v0",
	tool_acceleration_v0_ph: "ex.: 0",
	tool_acceleration_v_label: "Velocidade final v",
	tool_acceleration_v_ph: "ex.: 10",
	tool_acceleration_t_label: "Tempo t",
	tool_acceleration_t_ph: "ex.: 2",
	tool_acceleration_a_label: "Aceleração a",
	tool_acceleration_a_ph: "ex.: 5",
	tool_acceleration_accOut_label: "Aceleração",
	tool_acceleration_vOut_label: "Velocidade final",
	tool_acceleration_v0Out_label: "Velocidade inicial",
	tool_acceleration_tOut_label: "Tempo",
	tool_acceleration_work_label: "Resolução",
	tool_acceleration_result_note:
		"Considera aceleração constante em linha reta. Mantenha velocidade e tempo em unidades compatíveis (m/s e s resultam em m/s²). Com velocidades de mesmo sinal, a negativa indica que o corpo está freando.",
	tool_acceleration_err_finite: "Digite um número válido em todos os campos visíveis.",
	tool_acceleration_err_time: "O tempo precisa ser maior que 0.",
	tool_acceleration_err_zero_a: "Para calcular o tempo, a aceleração não pode ser 0 (haveria divisão por zero).",
	tool_acceleration_how_title: "Como calcular a aceleração aqui",
	tool_acceleration_how_body:
		"No movimento uniformemente variado, a aceleração é a variação da velocidade dividida pelo tempo: a = (v − v0) ÷ t. Escolha o que falta descobrir, preencha o resto e a calculadora reorganiza a mesma fórmula.",
	tool_acceleration_how_item_1: "Em Incógnita, escolha aceleração, velocidade final, velocidade inicial ou tempo.",
	tool_acceleration_how_item_2: "Preencha os campos visíveis usando um único sistema de unidades (o SI é o mais simples).",
	tool_acceleration_how_item_3: "Clique em Calcular.",
	tool_acceleration_how_item_4: "Confira o resultado e a linha de resolução, por exemplo a = (10 − 0) ÷ 2 = 5.",
	tool_acceleration_why_choose_title: "Por que usar esta Calculadora de aceleração",
	tool_acceleration_why_choose_item_1:
		"Casos impossíveis recebem aviso claro: tempo zero ou negativo, ou a = 0 quando você quer achar o tempo.",
	tool_acceleration_why_choose_item_2:
		"Uma fórmula, quatro incógnitas: você parte dos dados que o exercício dá, e não só de um campo vazio para a.",
	tool_acceleration_why_choose_item_3:
		"A resolução fica à vista, então dá para copiar (v − v0) ÷ t ou v = v0 + a·t direto para o caderno.",
	tool_acceleration_why_choose_item_4: "O cálculo roda no navegador; nada é enviado ao servidor.",
	tool_acceleration_why_choose_item_5:
		"O modelo é explícito: movimento retilíneo uniformemente variado (MRUV), sem aceleração variável nem movimento circular.",
	tool_acceleration_formula_title: "Fórmula da aceleração e como isolar cada termo",
	tool_acceleration_formula_body:
		"Para aceleração constante vale a = (v − v0) ÷ t. Reorganizando a mesma relação você encontra v, v0 ou t sem mudar a física.",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t. No exemplo: (10 − 0) ÷ 2 = 5.",
	tool_acceleration_formula_item_2: "v = v0 + a·t. No exemplo: 0 + 5 × 2 = 10.",
	tool_acceleration_formula_item_3: "v0 = v − a·t. No exemplo: 10 − 5 × 2 = 0.",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a, com a ≠ 0. No exemplo: (10 − 0) ÷ 5 = 2.",
	tool_acceleration_example_title: "Exemplo passo a passo",
	tool_acceleration_example:
		"Um carrinho sai do repouso e chega a 10 m/s em 2 s. Isolando a: a = (10 − 0) ÷ 2 = 5 m/s². Troque para Velocidade final com v0 = 0, a = 5 e t = 2 e o resultado é v = 10 — o mesmo movimento visto pelo outro lado.",
	tool_acceleration_usecases_title: "Quando usar",
	tool_acceleration_usecase_1: "Conferir a aceleração média de um carro que vai de 0 a 20 m/s em 4 s (deve dar 5 m/s²).",
	tool_acceleration_usecase_2: "Lista de exercícios de MRUV no ensino médio ou no cursinho.",
	tool_acceleration_usecase_3: "Comparar o gabarito do livro com a resolução passo a passo.",
	tool_acceleration_usecase_4: "Descobrir quanto tempo um veículo leva para parar freando com desaceleração constante.",
	tool_acceleration_faq_q1: "Como calcular a aceleração?",
	tool_acceleration_faq_a1:
		"Subtraia a velocidade inicial da final e divida pelo tempo: a = (v − v0) ÷ t. Indo de 0 a 10 m/s em 2 segundos, a = 5 m/s².",
	tool_acceleration_faq_q2: "A aceleração da gravidade é 9,8 m/s²?",
	tool_acceleration_faq_a2:
		"Perto da superfície da Terra costuma-se usar g ≈ 9,8 m/s² como aceleração constante, desprezando a resistência do ar. Em queda livre, informe a = −9,8 (com o sentido para cima positivo) para achar a velocidade ou o tempo.",
	tool_acceleration_faq_q3: "O que quer dizer aceleração negativa?",
	tool_acceleration_faq_a3:
		"Que o corpo está freando (ou acelerando no sentido oposto ao que você adotou como positivo). Se v0 = 20 e v = 10 em 2 s, a = (10 − 20) ÷ 2 = −5.",
	tool_acceleration_faq_q4: "Por que não dá para calcular o tempo com a = 0?",
	tool_acceleration_faq_a4:
		"Com a = 0 a velocidade não muda, então t = (v − v0) ÷ a fica indefinido. Ou as duas velocidades já são iguais, ou a aceleração não é zero.",
	tool_acceleration_faq_q5: "Quais unidades devo usar?",
	tool_acceleration_faq_a5:
		"Qualquer conjunto coerente. Com metros e segundos, a resposta sai em m/s². Misturar km/h com segundos sem converter dá resultado errado.",
	tool_acceleration_faq_q6: "Qual a diferença entre aceleração média e velocidade média?",
	tool_acceleration_faq_a6:
		"Velocidade média é distância ÷ tempo. Aceleração média é quanto a própria velocidade muda por unidade de tempo, (v − v0) ÷ t. Se você só precisa da velocidade a partir de distância e tempo, use a calculadora de velocidade.",
	tool_acceleration_faq_q7: "Serve para movimento circular?",
	tool_acceleration_faq_a7:
		"Não. Esta página trata de aceleração constante em linha reta. A aceleração centrípeta depende da velocidade e do raio e usa outra fórmula.",
	tool_acceleration_article: "Aceleração",
	tool_acceleration_disclaimer:
		"Para estudo e conferência de exercícios. Considera aceleração constante em linha reta; movimentos reais podem variar.",
	tool_acceleration_references: "Wikipédia — Aceleração; The Physics Hypertextbook — Equations of Motion.",
	tool_acceleration_ref_a_label: "Wikipédia — Aceleração",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion (em inglês)",
};

export default pt;
