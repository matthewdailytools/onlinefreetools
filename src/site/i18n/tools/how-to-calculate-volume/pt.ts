/**
 * i18n 工具分片（how-to-calculate-volume / pt）。
 * 体积计算器：caixa/cubo/esfera/cilindro/cone；含公式与分步展开。
 */
import type { SiteLangDict } from '../../../types';

/** 葡萄牙语界面与 SEO 文案（SiteLangDict）。 */
const pt: SiteLangDict = {
	tool_volume_title: "Calculadora de volume — Descubra o volume de sólidos",
	tool_volume_description:
		"Calcule o volume de uma caixa retangular (C×L×A), cubo (a³), esfera (4/3 πr³), cilindro (πr²h) ou cone (⅓ πr²h). Exemplo: caixa 2×3×4 → volume 24. Fórmula e passo a passo no navegador — para trabalhos escolares e rascunhos de embalagem, sem enviar ao servidor.",
	tool_volume_article:
		"Escolha o sólido, introduza as medidas e obtenha o volume com a fórmula certa e uma linha de cálculo — caixa, cubo, esfera, cilindro ou cone.",
	tool_volume_desc: "Volume de sólidos comuns com a fórmula correspondente e um passo calculado.",

	tool_volume_shape_label: "Sólido",
	tool_volume_shape_box: "Caixa (paralelepípedo)",
	tool_volume_shape_cube: "Cubo",
	tool_volume_shape_sphere: "Esfera",
	tool_volume_shape_cylinder: "Cilindro",
	tool_volume_shape_cone: "Cone",
	tool_volume_hint:
		"Introduza comprimentos positivos na mesma unidade. Vírgula decimal também funciona. O resultado fica em unidades cúbicas (por exemplo cm³ se usar centímetros).",
	tool_volume_l_label: "Comprimento",
	tool_volume_l_ph: "p. ex. 2",
	tool_volume_w_label: "Largura",
	tool_volume_w_ph: "p. ex. 3",
	tool_volume_h_label: "Altura",
	tool_volume_h_ph: "p. ex. 4",
	tool_volume_radius_label: "Raio",
	tool_volume_radius_ph: "p. ex. 3",
	tool_volume_cube_side: "Aresta",
	tool_volume_calculate: "Calcular",
	tool_volume_sample: "Carregar exemplo",
	tool_volume_clear: "Limpar",
	tool_volume_volOut_label: "Volume",
	tool_volume_steps_title: "Passos",
	tool_volume_row_formula: "Fórmula usada",
	tool_volume_row_unit: "Unidades",
	tool_volume_result_note:
		"Mantenha a mesma unidade em todas as medidas; o volume fica nessa unidade ao cubo. Geometria escolar — não é ferramenta de CAD nem dimensionamento de tanques.",
	tool_volume_err_generic:
		"Introduza dimensões positivas para o sólido escolhido (por exemplo 2, 3 e 4 para uma caixa).",
	tool_volume_formula_box: "V = C × L × A",
	tool_volume_formula_cube: "V = a³",
	tool_volume_formula_sphere: "V = (4/3) π r³",
	tool_volume_formula_cylinder: "V = π r² h",
	tool_volume_formula_cone: "V = (1/3) π r² h",
	tool_volume_step_box_tpl: "Caixa: V = C × L × A = {L} × {W} × {H} = {V}.",
	tool_volume_step_cube_tpl: "Cubo: V = a³ = {a} × {a} × {a} = {V}.",
	tool_volume_step_sphere_tpl: "Esfera: V = (4/3) π r³ = (4/3) × π × {r}³ = (4/3) × π × {r3} = {V}.",
	tool_volume_step_cyl_tpl: "Cilindro: V = π r² h = π × {r}² × {H} = π × {r2} × {H} = {V}.",
	tool_volume_step_cone_tpl: "Cone: V = (1/3) π r² h = (1/3) × π × {r}² × {H} = (1/3) × π × {r2} × {H} = {V}.",

	tool_volume_how_title: "Como usar a calculadora de volume",
	tool_volume_how_body:
		"Escolha o sólido, preencha só os campos visíveis e clique em Calcular. Carregar exemplo percorre caixa, cubo, esfera, cilindro e cone com respostas conhecidas.",
	tool_volume_how_item_1: "Selecione Caixa, Cubo, Esfera, Cilindro ou Cone na lista.",
	tool_volume_how_item_2:
		"Introduza as dimensões positivas mostradas (comprimento/largura/altura e/ou raio).",
	tool_volume_how_item_3: "Clique em Calcular para ver o volume, a fórmula e uma linha de cálculo.",
	tool_volume_how_item_4:
		"Use Carregar exemplo: 2×3×4=24, cubo aresta 5, esfera r=3, cilindro r=2 h=10, cone r=3 h=9.",

	tool_volume_why_choose_title: "Por que esta calculadora de volume",
	tool_volume_why_choose_item_1:
		"Cinco sólidos comuns numa página: caixa retangular, cubo, esfera, cilindro e cone.",
	tool_volume_why_choose_item_2:
		"A fórmula exata aparece junto ao resultado para copiar o cálculo no trabalho escolar.",
	tool_volume_why_choose_item_3:
		"Uma linha de passo substitui os seus números em C×L×A, a³, (4/3)πr³, πr²h ou (1/3)πr²h.",
	tool_volume_why_choose_item_4:
		"Campos que não se aplicam ficam ocultos — sem raio numa caixa, sem aresta numa esfera.",
	tool_volume_why_choose_item_5:
		"Lembrete de unidades: mesma unidade de entrada → saída cúbica (cm → cm³).",

	tool_volume_formula_title: "Fórmulas de volume",
	tool_volume_formula_body:
		"Volume mede quanto espaço um sólido ocupa. Use a fórmula que corresponde à forma escolhida.",
	tool_volume_formula_item_1: "Caixa retangular: V = C × L × A. Exemplo: 2 × 3 × 4 = 24.",
	tool_volume_formula_item_2: "Cubo: V = a³. Exemplo: aresta 5 → 125.",
	tool_volume_formula_item_3: "Esfera: V = (4/3) π r³. Exemplo: r = 3 → (4/3)π×27 ≈ 113,097.",
	tool_volume_formula_item_4: "Cilindro: V = π r² h. Exemplo: r = 2, h = 10 → π×4×10 ≈ 125,664.",
	tool_volume_formula_item_5:
		"Cone: V = (1/3) π r² h. Exemplo: r = 3, h = 9 → (1/3)π×9×9 ≈ 84,823. Um cone tem um terço do cilindro com a mesma base e altura.",

	tool_volume_example_title: "Exemplos resolvidos",
	tool_volume_example:
		"Carregar exemplo começa com caixa 2×3×4 → V = 24. Depois cubo aresta 5 → 125. Esfera r=3 → cerca de 113,1. Cilindro r=2, h=10 → cerca de 125,7. Cone r=3, h=9 → cerca de 84,8. Use uma só unidade em todas as medidas.",

	tool_volume_usecases_title: "Quando usar uma calculadora de volume",
	tool_volume_usecase_1:
		"Trabalhos escolares: encontrar o volume de caixa, esfera ou cilindro e copiar a linha da fórmula.",
	tool_volume_usecase_2:
		"Rascunhos de embalagem: estimar o espaço de uma caixa ou cilindro antes de encomendar material.",
	tool_volume_usecase_3:
		"Comparar sólidos: ver que um cone guarda um terço do volume de um cilindro com a mesma base e altura.",
	tool_volume_usecase_4:
		"Verificação rápida: confirmar a resposta do manual para a³ ou (4/3)πr³ sem folha de cálculo.",

	tool_volume_faq_q1: "Como calcular o volume de uma caixa?",
	tool_volume_faq_a1:
		"Multiplique comprimento × largura × altura: V = C × L × A. Com C = 2, L = 3 e A = 4, V = 24 na unidade cúbica das suas medidas.",
	tool_volume_faq_q2: "Qual é o volume de uma esfera?",
	tool_volume_faq_a2:
		"Use V = (4/3) π r³. Para raio 3, r³ = 27 logo V = (4/3) × π × 27 ≈ 113,097. A página usa Math.PI.",
	tool_volume_faq_q3: "Como se relacionam cone e cilindro?",
	tool_volume_faq_a3:
		"Um cone com o mesmo raio de base e altura que um cilindro tem exatamente um terço desse volume: V_cone = (1/3) π r² h.",
	tool_volume_faq_q4: "Preciso de unidades iguais?",
	tool_volume_faq_a4:
		"Sim. Introduza todas as dimensões na mesma unidade (tudo em centímetros, tudo em polegadas, etc.). O volume sai na unidade cúbica (cm³, in³, …).",
	tool_volume_faq_q5: "O cubo é diferente da caixa?",
	tool_volume_faq_a5:
		"O cubo é uma caixa com três arestas iguais, logo V = a³. A opção cubo mostra um campo de aresta; a caixa pede comprimento, largura e altura separados.",
	tool_volume_faq_q6: "Posso usar vírgula decimal?",
	tool_volume_faq_a6: "Sim. Valores como 2,5 são lidos como 2,5. Comprimentos zero ou negativos são rejeitados.",
	tool_volume_faq_q7: "Serve para capacidade de tanque ou engenharia?",
	tool_volume_faq_a7:
		"Não. Apenas geometria escolar. Tanques reais, níveis de enchimento e modelos CAD exigem ferramentas dedicadas.",

	tool_volume_disclaimer: "Volume educativo apenas — não é aconselhamento de engenharia, tanques ou CAD.",
	tool_volume_references: "Fórmulas clássicas de geometria sólida.",
	tool_volume_ref_a_label: "Wikipédia — Volume",
	tool_volume_ref_b_label: "Wikipédia — Esfera",
	tool_volume_ref_c_label: "Wikipédia — Cilindro",
};

export default pt;
