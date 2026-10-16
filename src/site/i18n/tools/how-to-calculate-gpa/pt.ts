/**
 * i18n 工具分片（how-to-calculate-gpa / pt）。
 * 葡语检索向独立重写：calculadora GPA / média ponderada / créditos / pontos de qualidade；
 * 含字母芯片、步骤行、why_choose、faq_q5–q6；教育用途，非录取决定。
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_gpa_title: "Calculadora GPA — Média ponderada na escala 4.0",
	tool_gpa_description: "Calcule o GPA ponderado por créditos numa escala 4.0 comum a partir dos pontos de nota e das horas-crédito por disciplina. Exemplo: A = 4.0 (3 créditos) e B = 3.0 (3 créditos) → GPA 3.50. Os chips de letras inserem pontos; os passos mostram os pontos de qualidade. Só para fins educativos — não é decisão de admissão. Corre no seu navegador.",
	tool_gpa_article: "Introduza pontos e créditos por disciplina, ou toque num chip de letra para um mapa 4.0 básico. A página mostra o GPA ponderado, os pontos de qualidade, o total de créditos e as linhas de passos.",
	tool_gpa_desc: "GPA ponderado por créditos na escala 4.0, com chips de letras e linhas de passos.",

	tool_gpa_safety_banner: "Ilustração educativa apenas. As escalas diferem por escola e região. Isto não é uma decisão de admissão, bolsa ou histórico oficial.",
	tool_gpa_hint: "Uma disciplina por linha: pontos de nota e depois créditos (vírgula ou espaço). Os créditos devem ser maiores que zero. Os chips inserem um mapa 4.0 comum (A=4.0, A−=3.7, B+=3.3, …).",
	tool_gpa_courses_label: "Disciplinas (pontos de nota, créditos por linha)",
	tool_gpa_courses_ph: "ex. 4.0, 3",
	tool_gpa_chips_label: "Inserir pontos de letra (mapa 4.0)",
	tool_gpa_calculate: "Calcular",
	tool_gpa_sample: "Carregar exemplo",
	tool_gpa_clear: "Limpar",
	tool_gpa_result_label: "GPA ponderado",
	tool_gpa_qp_label: "Pontos de qualidade (Σ nota × créditos)",
	tool_gpa_credits_label: "Total de créditos",
	tool_gpa_courses_count_label: "Disciplinas contabilizadas",
	tool_gpa_steps_title: "Passos",
	tool_gpa_step_row_tpl: "Disciplina {n}: {g} × {c} = {qc}.",
	tool_gpa_step_sum_tpl: "Pontos de qualidade = {qp}; total de créditos = {credits}.",
	tool_gpa_step_gpa_tpl: "GPA = {qp} ÷ {credits} = {gpa}.",
	tool_gpa_result_note: "Assume uma escala 4.0 simples. Mais/menos e escalas ponderadas (ex. 5.0) não são aplicadas automaticamente. Escolas e países diferem — confirme as regras do seu histórico. Só educativo.",
	tool_gpa_err_parse: "Introduza pelo menos uma linha como pontos de nota, créditos (por exemplo 4.0, 3).",
	tool_gpa_err_credits: "Cada disciplina precisa de créditos maiores que zero.",

	tool_gpa_how_title: "Como usar a calculadora de GPA",
	tool_gpa_how_body: "Liste cada disciplina como pontos de nota e créditos, ou toque num chip de letra e depois acrescente os créditos. Calcular mostra o GPA ponderado, os pontos de qualidade e as linhas de passos. Carregar exemplo percorre duas disciplinas iguais, pontos +/- e créditos desiguais.",
	tool_gpa_how_item_1: "Introduza uma disciplina por linha: pontos de nota e depois créditos.",
	tool_gpa_how_item_2: "Opcional: toque num chip de letra para inserir pontos 4.0 comuns e depois escreva os créditos.",
	tool_gpa_how_item_3: "Clique em Calcular para ver o GPA, os pontos de qualidade, o total de créditos e os passos.",
	tool_gpa_how_item_4: "Use Carregar exemplo para percorrer créditos iguais, +/- e créditos desiguais.",

	tool_gpa_why_choose_title: "O que esta calculadora de GPA lhe dá",
	tool_gpa_why_choose_item_1: "GPA ponderado por créditos = Σ(nota × créditos) / Σ créditos.",
	tool_gpa_why_choose_item_2: "Chips de letras para um mapa 4.0 básico (A até F).",
	tool_gpa_why_choose_item_3: "Pontos de qualidade e total de créditos ao lado do GPA.",
	tool_gpa_why_choose_item_4: "Linhas de passos que encaixam os seus números na fórmula.",
	tool_gpa_why_choose_item_5: "Limite claro: só educativo — não é conselho de admissão.",

	tool_gpa_formula_title: "Fórmula do GPA e notas da escala 4.0",
	tool_gpa_formula_body: "Um GPA ponderado multiplica o ponto de cada disciplina pelos seus créditos, soma esses produtos (pontos de qualidade) e divide pelo total de créditos.",
	tool_gpa_formula_item_1: "GPA = Σ (pontos de nota × créditos) / Σ créditos.",
	tool_gpa_formula_item_2: "Mapa 4.0 comum dos chips: A=4.0, A−=3.7, B+=3.3, B=3.0, B−=2.7, C+=2.3, C=2.0, C−=1.7, D+=1.3, D=1.0, F=0.0.",
	tool_gpa_formula_item_3: "Passos +/- e pesos honors/AP não são aplicados automaticamente além do mapa dos chips.",
	tool_gpa_formula_item_4: "Os créditos devem ser positivos; os pontos de nota devem ser números finitos.",
	tool_gpa_formula_item_5: "Faculdade, ensino secundário e sistemas regionais podem diferir — resultados só educativos.",

	tool_gpa_example_title: "Exemplos resolvidos",
	tool_gpa_example: "Carregar exemplo começa com 4.0×3 e 3.0×3 → pontos de qualidade 21, créditos 6, GPA 3.50. Depois usa pontos +/- (3.7 e 3.3). O último exemplo usa créditos desiguais (4.0×4 e 2.0×2) → GPA 3.33.",

	tool_gpa_usecases_title: "Quando usar uma calculadora de GPA",
	tool_gpa_usecase_1: "GPA aproximado do semestre a partir de pontos e créditos antes do portal oficial atualizar.",
	tool_gpa_usecase_2: "Trabalho de casa: praticar médias ponderadas por créditos numa escala 4.0.",
	tool_gpa_usecase_3: "Cenários what-if para planear — não é decisão de admissão ou bolsa.",
	tool_gpa_usecase_4: "Converter letras com o mapa dos chips e ajustar se a sua escola usar outra escala.",

	tool_gpa_faq_q1: "Que fórmula de GPA esta página usa?",
	tool_gpa_faq_a1: "GPA ponderado = Σ (pontos de nota × créditos) / Σ créditos. Introduza pontos já na sua escala, ou use os chips de letras para um mapa 4.0 básico.",
	tool_gpa_faq_q2: "Todas as escolas usam a escala 4.0?",
	tool_gpa_faq_a2: "Não. Muitas escolas dos EUA usam 4.0 com +/-; outras usam 5.0 ponderado ou percentagens. Siga sempre as regras do seu histórico.",
	tool_gpa_faq_q3: "Posso misturar notas em letra diretamente?",
	tool_gpa_faq_a3: "Toque num chip de letra para inserir os pontos e depois acrescente os créditos na mesma linha. Ou converta as letras você mesmo se a escala for diferente.",
	tool_gpa_faq_q4: "O que são pontos de qualidade?",
	tool_gpa_faq_a4: "Pontos de qualidade são Σ (nota × créditos) — o numerador antes de dividir pelo total de créditos.",
	tool_gpa_faq_q5: "Isto inclui disciplinas honors ponderadas (5.0)?",
	tool_gpa_faq_a5: "Sem ponderação automática. Introduza os pontos que a sua escola atribui (por exemplo 5.0) se essa for a regra.",
	tool_gpa_faq_q6: "Isto garante admissão à universidade?",
	tool_gpa_faq_a6: "Não. O número é apenas uma ilustração educativa e não é uma decisão de admissão ou bolsa.",

	tool_gpa_disclaimer: "Aritmética de GPA educativa apenas — não é conselho de admissão, bolsa ou histórico oficial. As escalas variam por escola e região.",
	tool_gpa_references: "Recursos para estudantes do College Board; visão geral das escalas de classificação académica nos EUA.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipédia — Classificação académica nos Estados Unidos",
};

export default pt;
