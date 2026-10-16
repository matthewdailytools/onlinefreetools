/**
 * Fragmento i18n da ferramenta (how-to-calculate-age / pt).
 * Idade cronológica A/M/D + dias totais entre nascimento e data de referência (calendário UTC).
 * Reescrita PT independente — sem espelhar o esqueleto inglês.
 */
import type { SiteLangDict } from '../../../types';

/** Textos PT (UI + SEO) da calculadora de idade. */
const pt: SiteLangDict = {
	tool_age_title: "Calculadora de idade — Anos meses e dias entre duas datas",
	tool_age_description: "Calcule a idade cronológica em anos, meses e dias a partir da data de nascimento até uma data de referência (dias de calendário UTC). Exemplo: nascido em 2000-01-01, em 2026-08-09 → 26 anos, 7 meses, 8 dias. Também mostra o total de dias inteiros. Apenas matemática de calendário educativa — não é aconselhamento jurídico sobre idade.",
	tool_age_article: "Idade de calendário em anos, meses e dias restantes entre duas datas, mais o total de dias, com passos de empréstimo visíveis e atalho Usar hoje.",
	tool_age_desc: "Idade em anos/meses/dias do nascimento à data de referência. Inclui dias totais.",

	tool_age_hint: "Datas de calendário no formato AAAA-MM-DD (limites de dia UTC). A data de referência deve ser no dia do nascimento ou depois. Usar hoje preenche a referência com a data UTC de hoje.",
	tool_age_birth_label: "Data de nascimento",
	tool_age_asof_label: "Data de referência",
	tool_age_calculate: "Calcular",
	tool_age_today: "Usar hoje",
	tool_age_sample: "Carregar exemplo",
	tool_age_clear: "Limpar",
	tool_age_ymdOut_label: "Idade",
	tool_age_yearsOut_label: "anos",
	tool_age_monthsOut_label: "meses",
	tool_age_daysOut_label: "dias",
	tool_age_totalDaysOut_label: "Total de dias inteiros",
	tool_age_steps_title: "Passos",
	tool_age_step_ymd_tpl: "De {birth} a {asof}: {y} anos, {m} meses, {d} dias após empréstimo de calendário.",
	tool_age_step_borrow_tpl: "Empréstimo de dias: quando o dia de referência é anterior ao dia de nascimento no mês, emprestam-se dias do mês calendário anterior.",
	tool_age_step_total_tpl: "Dias inteiros = (referência − nascimento) em midnights UTC ÷ 86400000 = {total}.",
	tool_age_result_note: "Só datas de calendário UTC — sem hora do relógio nem fusos para corte legal. Dias bissextos contam quando caem no intervalo. Só educativo — não é aconselhamento de elegibilidade ou idade legal.",
	tool_age_err_generic: "Introduza datas válidas (AAAA-MM-DD). A data de referência deve ser no nascimento ou depois.",

	tool_age_how_title: "Como usar a calculadora de idade",
	tool_age_how_body: "Indique nascimento e data de referência, ou Usar hoje na referência, depois Calcular. Carregar exemplo alterna 2000-01-01→2026-08-09, um caso de 29 de fevereiro, idade 0 no mesmo dia, e um empréstimo na virada do ano.",
	tool_age_how_item_1: "Introduza a data de nascimento.",
	tool_age_how_item_2: "Introduza a data de referência, ou clique Usar hoje.",
	tool_age_how_item_3: "Clique Calcular para ver anos, meses, dias e o total de dias inteiros.",
	tool_age_how_item_4: "Carregar exemplo percorre casos tipográficos de calendário.",

	tool_age_why_choose_title: "O que esta calculadora de idade oferece",
	tool_age_why_choose_item_1: "Total de dias inteiros entre as duas datas de calendário UTC.",
	tool_age_why_choose_item_2: "Idade cronológica completa em anos, meses e dias restantes.",
	tool_age_why_choose_item_3: "Atalho Usar hoje para o campo de referência.",
	tool_age_why_choose_item_4: "Passos de empréstimo visíveis quando o dia do mês precisa do mês anterior.",
	tool_age_why_choose_item_5: "Limite claro: só matemática de calendário — sem aconselhamento jurídico ou de elegibilidade.",

	tool_age_formula_title: "Fórmulas de idade",
	tool_age_formula_body: "Ler ambas as datas como meia-noite UTC. Subtrair anos, depois meses, depois dias com empréstimo de calendário. Os dias totais usam a diferença em milissegundos dividida por 86400000.",
	tool_age_formula_item_1: "anos = ano de referência − ano de nascimento (ajustar se mês/dia ainda não chegaram).",
	tool_age_formula_item_2: "Se o dia de referência < dia de nascimento, emprestar o comprimento do mês calendário anterior.",
	tool_age_formula_item_3: "Se os meses ficarem negativos, emprestar 12 meses dos anos.",
	tool_age_formula_item_4: "diasTotais = arredondar((referência − nascimento) / 86400000) em UTC.",
	tool_age_formula_item_5: "Dias bissextos afetam o total quando caem dentro do intervalo.",

	tool_age_example_title: "Exemplos resolvidos",
	tool_age_example: "Carregar exemplo começa com nascimento 2000-01-01 e referência 2026-08-09 → 26 anos, 7 meses, 8 dias. Depois um 29 de fevereiro contra 28 de fevereiro de 2024. Em seguida idade 0 no mesmo dia. Por fim a virada 1985-12-31 → 2026-01-01.",

	tool_age_usecases_title: "Quando usar uma calculadora de idade",
	tool_age_usecase_1: "Verificação rápida do total de dias inteiros entre duas datas de calendário.",
	tool_age_usecase_2: "Formulários que pedem idade em anos, meses e dias.",
	tool_age_usecase_3: "Trabalho de casa sobre diferenças de calendário e empréstimo de mês.",
	tool_age_usecase_4: "Juntar à ferramenta de diferença de datas quando o intervalo não é formulado como idade.",

	tool_age_faq_q1: "E se o nascimento for depois da data de referência?",
	tool_age_faq_a1: "A página rejeita esse caso. A referência deve ser no nascimento ou depois.",
	tool_age_faq_q2: "Como se calcula a idade cronológica?",
	tool_age_faq_a2: "Subtraem-se anos, meses e dias com empréstimo. Exemplo: 2000-01-01 a 2026-08-09 → 26a 7m 8d.",
	tool_age_faq_q3: "Os fusos horários entram no cálculo?",
	tool_age_faq_a3: "Não. As datas são dias de calendário UTC, não horas do relógio local.",
	tool_age_faq_q4: "O que faz Usar hoje?",
	tool_age_faq_a4: "Preenche a data de referência com o dia de calendário UTC de hoje e recalcula.",
	tool_age_faq_q5: "Como os dias bissextos afetam o resultado?",
	tool_age_faq_a5: "Contam no total de dias quando estão no intervalo; os comprimentos de mês seguem o calendário no empréstimo.",
	tool_age_faq_q6: "Isto é aconselhamento de idade legal ou elegibilidade?",
	tool_age_faq_a6: "Não. Só matemática de calendário educativa — sem aconselhamento jurídico, médico ou de elegibilidade.",
	tool_age_faq_q7: "Em que difere da diferença entre datas?",
	tool_age_faq_a7: "Esta página formula o intervalo como idade cronológica (A/M/D). Para outras formulações, use a ferramenta relacionada de diferença de datas.",

	tool_age_disclaimer: "Idade de calendário educativa apenas — não é aconselhamento jurídico, de elegibilidade, médico ou de identidade oficial.",
	tool_age_references: "Wikipédia sobre idade cronológica e data de calendário, para contexto educativo.",
	tool_age_ref_a_label: "Wikipédia — Idade cronológica",
	tool_age_ref_b_label: "Wikipédia — Data de calendário",
};

export default pt;
