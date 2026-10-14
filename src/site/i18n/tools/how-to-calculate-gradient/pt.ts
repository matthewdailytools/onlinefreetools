/**
 * i18n tool shard (how-to-calculate-gradient / pt-BR).
 * Gradiente multivariável em português brasileiro: ∇f em um ponto, processo, módulo e direção unitária; não inclinação entre dois pontos.
 */
import type { SiteLangDict } from '../../../types';

/** Dicionário de copy em português (pt-BR). */
const pt: SiteLangDict = {
	tool_gradient_title: "Calculadora de gradiente — ∇f multivariável em um ponto",
	tool_gradient_desc: "Avalia o gradiente ∇f de uma função escalar demo em um ponto (x, y).",
	tool_gradient_description:
		"Calcular o gradiente multivariável ∇f como vetor de derivadas parciais, com processo, passos e módulo. Exemplo: para f(x,y)=x²y+3y em (1,2), ∂f/∂x=4 e ∂f/∂y=4 logo ∇f=(4,4) com |∇f|≈5,6569. Inclui a fórmula simbólica. Não é uma calculadora de inclinação entre dois pontos.",
	tool_gradient_calculate: "Avaliar ∇f",
	tool_gradient_sample: "Carregar exemplo",
	tool_gradient_clear: "Limpar",
	tool_gradient_fn_label: "Função demo",
	tool_gradient_fn_xy3y: "f(x,y) = x²y + 3y",
	tool_gradient_fn_x2y2: "f(x,y) = x² + y²",
	tool_gradient_fn_xy: "f(x,y) = x·y",
	tool_gradient_fn_sincos: "f(x,y) = sin(x) + cos(y)",
	tool_gradient_box_xy3y: "f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)",
	tool_gradient_box_x2y2: "f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)",
	tool_gradient_box_xy: "f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)",
	tool_gradient_box_sincos: "f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))",
	tool_gradient_x_label: "x",
	tool_gradient_x_placeholder: "ex.: 1",
	tool_gradient_y_label: "y",
	tool_gradient_y_placeholder: "ex.: 2",
	tool_gradient_result_label: "Gradiente no seu ponto",
	tool_gradient_work_label: "Desenvolvimento",
	tool_gradient_mag_label: "Módulo |∇f|",
	tool_gradient_unit_label: "Direção unitária",
	tool_gradient_result_note: "Avaliado em ({x}, {y}). ∇f aponta para o maior aumento local de f.",
	tool_gradient_zero_mag: "∇f = 0 (ponto crítico — sem direção única)",
	tool_gradient_invalid_input: "Informe valores numéricos finitos para x e y.",
	tool_gradient_how_title: "Como calcular um gradiente multivariável",
	tool_gradient_how_body:
		"Para um escalar f(x,y), diferencie em relação a cada variável mantendo a outra fixa, empilhe as parciais em ∇f e substitua o seu ponto. A caixa usa funções demo fixas para você conferir a aritmética.",
	tool_gradient_how_item_1: "Escolha uma função demo e leia o ∇f simbólico mostrado abaixo.",
	tool_gradient_how_item_2: "Digite as coordenadas (x, y) onde você quer o vetor.",
	tool_gradient_how_item_3: "Clique em Avaliar ∇f.",
	tool_gradient_how_item_4: "Leia ∇f, o desenvolvimento de cada parcial, o módulo |∇f| e a direção unitária.",
	tool_gradient_why_choose_title: "Por que usar nossa Calculadora de gradiente — ∇f multivariável em um ponto",
	tool_gradient_why_choose_item_1: "Quatro funções demo com parciais simbólicas prontas — não é um CAS simbólico em branco.",
	tool_gradient_why_choose_item_2: "O desenvolvimento de cada componente fica visível, útil para revisar trabalhos.",
	tool_gradient_why_choose_item_3: "Módulo e vetor unitário ligam ∇f à direção de máximo crescimento.",
	tool_gradient_why_choose_item_4: "Modelo explícito: ∇f do cálculo multivariável, não inclinação entre dois pontos.",
	tool_gradient_why_choose_item_5: "Roda no seu navegador; nada é enviado ao servidor.",
	tool_gradient_formula_title: "Fórmula do gradiente multivariável",
	tool_gradient_formula_body:
		"∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). Em duas variáveis: ∇f(x,y) = (∂f/∂x, ∂f/∂y). A direção de ∇f é o máximo crescimento; −∇f entra na descida do gradiente.",
	tool_gradient_formula_item_1: "Calcule ∂f/∂xᵢ para cada variável, mantendo as outras constantes.",
	tool_gradient_formula_item_2: "Monte os componentes no vetor ∇f.",
	tool_gradient_formula_item_3: "Avalie no ponto. Exemplo: f=x²y+3y em (1,2) → (4, 4).",
	tool_gradient_formula_item_4: "Módulo |∇f| = √(gx² + gy²). Exemplo: √(16+16) = √32 ≈ 5,6569.",
	tool_gradient_example_title: "Exemplo",
	tool_gradient_example:
		"Para f(x,y)=x²y+3y, as parciais são ∂f/∂x=2xy e ∂f/∂y=x²+3. Em (1,2): ∂f/∂x=2·1·2=4, ∂f/∂y=1+3=4, logo ∇f=(4,4). O módulo é √32≈5,6569 e a direção unitária (4/√32, 4/√32)≈(0,7071, 0,7071). Troque para f=x²+y² no mesmo ponto e obtenha ∇f=(2,4).",
	tool_gradient_usecases_title: "Quando usar",
	tool_gradient_usecase_1: "Conferir parciais de trabalho antes de um passo de otimização.",
	tool_gradient_usecase_2: "Explicar a descida do gradiente: cada passo anda no sentido oposto a ∇loss nos parâmetros atuais.",
	tool_gradient_usecase_3: "Intuição de física ou campos: ∇f aponta onde o campo escalar cresce mais rápido.",
	tool_gradient_usecase_4: "Ver se um ponto é crítico (|∇f|=0) em uma superfície demo simples.",
	tool_gradient_faq_q1: "O que é um gradiente no cálculo multivariável?",
	tool_gradient_faq_a1:
		"O gradiente ∇f é o vetor das derivadas parciais de primeira ordem. Aponta para o maior aumento local de f, e o comprimento |∇f| mede quão íngreme é esse aumento.",
	tool_gradient_faq_q2: "Como calcular ∇f à mão?",
	tool_gradient_faq_a2:
		"Diferencie em relação a cada variável mantendo as outras constantes, forme o vetor e avalie no seu ponto. Para f=x²y+3y fica (2xy, x²+3).",
	tool_gradient_faq_q3: "É o mesmo “gradiente” da descida do gradiente em ML?",
	tool_gradient_faq_a3:
		"O mesmo objeto matemático: ∇ de uma loss escalar. Os passos de descida vão em −∇loss. Esta página ensina a definição de cálculo com demos — não treina um modelo.",
	tool_gradient_faq_q4: "Isto é uma calculadora de inclinação entre dois pontos?",
	tool_gradient_faq_a4:
		"Não. A inclinação entre dois pontos fica na ferramenta de inclinação. Aqui ∇f é o vetor de derivadas parciais de um campo escalar multivariável.",
	tool_gradient_faq_q5: "O que significa |∇f| = 0?",
	tool_gradient_faq_a5:
		"Um gradiente nulo é um ponto crítico: não há direção única de máximo crescimento. Experimente f=x²+y² em (0,0): ∇f=(0,0).",
	tool_gradient_faq_q6: "Por que só funções demo?",
	tool_gradient_faq_a6:
		"Diferenciar expressões arbitrárias exige um CAS. Demos fixas deixam a aritmética conferível e mantêm a página focada na definição de ∇f.",
	tool_gradient_faq_q7: "Radianos ou graus para sin e cos?",
	tool_gradient_faq_a7:
		"A demo sin(x)+cos(y) usa radianos, como no cálculo padrão. cos(1)≈0,5403, não cos(1°).",
	tool_gradient_article:
		"O gradiente de uma função escalar multivariável é o vetor das suas derivadas parciais de primeira ordem. Aponta para o maior aumento local e fundamenta a otimização baseada em gradiente.",
	tool_gradient_references: "Referências da Wikipedia e da Khan Academy sobre o gradiente multivariável.",
	tool_gradient_ref_wiki_label: "Wikipedia — Gradiente",
	tool_gradient_ref_khan_label: "Khan Academy — The gradient",
};

export default pt;
