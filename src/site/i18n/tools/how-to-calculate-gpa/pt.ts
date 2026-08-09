/**
 * i18n tool shard (how-to-calculate-gpa / pt).
 * Português reescrito de forma independente.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_gpa_title: "Calculadora GPA — Média ponderada",
	tool_gpa_description: "Calcule o GPA ponderado por créditos na escala 4.0 com pontos e créditos por disciplina. Exemplo: A=4.0 (3 cr) e B=3.0 (3 cr) → GPA 3.5. Escalas variam por escola e país; uso educativo no navegador.",
	tool_gpa_article: "O GPA ponderado multiplica os pontos de cada disciplina pelos créditos e divide pelo total. Esta página usa escala 4.0 simples; sua escola pode usar +/- ou outro sistema.",
	tool_gpa_calculate: "Calcular",
	tool_gpa_sample: "Carregar exemplo",
	tool_gpa_clear: "Limpar",
	tool_gpa_courses_label: "Disciplinas (pontos, créditos por linha)",
	tool_gpa_courses_ph: "ex. 4.0, 3",
	tool_gpa_courses_hint: "Uma disciplina por linha: pontos e depois créditos. Na 4.0, A≈4.0, B≈3.0.",
	tool_gpa_result_label: "GPA ponderado",
	tool_gpa_result_note: "Assume escala 4.0. Confira as regras oficiais do seu histórico.",
	tool_gpa_err_parse: "Informe ao menos uma linha: pontos, créditos (ex. 4.0, 3).",
	tool_gpa_err_credits: "Cada disciplina precisa de créditos maiores que zero.",
	tool_gpa_how_title: "Como funciona",
	tool_gpa_how_body: "Liste pontos e créditos por disciplina. A ferramenta pondera e divide pelos créditos totais no navegador. Confirme a escala da sua escola.",
	tool_gpa_formula_title: "Fórmula e notas de escala",
	tool_gpa_formula_body: "GPA = Σ (pontos × créditos) / Σ créditos. Lembre-se:",
	tool_gpa_formula_item_1: "Demo com mapeamento 4.0 simples; não aplica +/- automático.",
	tool_gpa_formula_item_2: "Créditos positivos; pontos finitos.",
	tool_gpa_formula_item_3: "Universidade e ensino médio podem diferir — só uso educativo.",
	tool_gpa_example_title: "Exemplo",
	tool_gpa_example: "Exemplo: disciplina A = 4.0 com 3 créditos, B = 3.0 com 3 créditos → GPA = (12 + 9) / 6 = 3.50.",
	tool_gpa_usecases_title: "Quando usar",
	tool_gpa_usecase_1: "Estimar o GPA do semestre antes do portal oficial.",
	tool_gpa_usecase_2: "Praticar média ponderada por créditos na escala 4.0.",
	tool_gpa_usecase_3: "Cenários de notas — não decide admissão.",
	tool_gpa_faq_q1: "Qual fórmula é usada?",
	tool_gpa_faq_a1: "GPA ponderado = Σ (pontos × créditos) / Σ créditos.",
	tool_gpa_faq_q2: "Toda escola usa 4.0?",
	tool_gpa_faq_a2: "Não. Há +/- , 5.0 ponderada ou percentuais.",
	tool_gpa_faq_q3: "Posso digitar letras?",
	tool_gpa_faq_a3: "Converta primeiro (A→4.0, B→3.0) e informe pontos e créditos.",
	tool_gpa_faq_q4: "Garante admissão?",
	tool_gpa_faq_a4: "Não. É apenas ilustração educativa.",
	tool_gpa_references: "Recursos College Board; visão geral das escalas nos EUA.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Notas acadêmicas nos EUA",
};

export default pt;
