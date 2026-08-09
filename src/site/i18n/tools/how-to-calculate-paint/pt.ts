/**
 * i18n tool shard (how-to-calculate-paint / pt).
 * Portuguese rewrite for busca «calculadora de tinta / quanto de tinta».
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_paint_title: 'Calculadora de tinta — Como estimar a tinta necessária',
	tool_paint_description:
		'Estime litros de tinta a partir da área da parede em m² (ou comprimento × altura × paredes), demãos e rendimento em m²/L (padrão 10). Exemplo: 40 m², 2 demãos, 10 m²/L → 8 L. Contagem opcional de latas assume 3.78 L por lata. Roda no navegador; os números ficam no dispositivo e não são enviados ao servidor.',
	tool_paint_article:
		'Converte área e rendimento do produto em litros antes da compra. Informe a área ou monte com comprimento, altura e número de paredes.',
	tool_paint_calculate: 'Calcular',
	tool_paint_sample: 'Carregar exemplo',
	tool_paint_clear: 'Limpar',
	tool_paint_mode_label: 'Como informar a parede',
	tool_paint_mode_area: 'Área (m²)',
	tool_paint_mode_lhw: 'Comprimento × altura × paredes',
	tool_paint_area_label: 'Área da parede (m²)',
	tool_paint_area_ph: 'ex. 40',
	tool_paint_len_label: 'Comprimento (m)',
	tool_paint_height_label: 'Altura (m)',
	tool_paint_walls_label: 'Número de paredes',
	tool_paint_len_ph: 'ex. 5',
	tool_paint_height_ph: 'ex. 2.5',
	tool_paint_walls_ph: 'ex. 4',
	tool_paint_coats_label: 'Demãos',
	tool_paint_coats_ph: 'ex. 2',
	tool_paint_coverage_label: 'Rendimento (m²/L)',
	tool_paint_coverage_ph: 'ex. 10',
	tool_paint_coverage_hint: '10 m²/L é um ponto de partida; confira o rótulo da lata.',
	tool_paint_cans_label: 'Mostrar também latas (3.78 L cada)',
	tool_paint_result_liters: 'Tinta necessária',
	tool_paint_result_area: 'Área usada',
	tool_paint_result_cans: 'Latas (3.78 L)',
	tool_paint_err_input: 'Informe área positiva (ou comprimento, altura e paredes), demãos e rendimento positivos.',
	tool_paint_how_title: 'Como funciona',
	tool_paint_how_body:
		'Escolha área ou comprimento × altura × paredes, informe demãos e rendimento. Litros = área × demãos ÷ rendimento. Com latas ativas, divide por 3.78 e arredonda para cima. Tudo no navegador, sem envio ao servidor.',
	tool_paint_formula_title: 'Fórmula e premissas',
	tool_paint_formula_body: 'O volume usa área, demãos e rendimento do rótulo:',
	tool_paint_formula_item_1: 'Área A = m² direto, ou comprimento × altura × paredes (metros).',
	tool_paint_formula_item_2: 'Litros = A × demãos ÷ rendimento (m²/L). Padrão 10.',
	tool_paint_formula_item_3: 'Latas opcionais = ceil(litros ÷ 3.78). 3.78 L ≈ 1 galão EUA, só uma hipótese.',
	tool_paint_example_title: 'Exemplo',
	tool_paint_example:
		'Exemplo: 40 m², 2 demãos, 10 m²/L. Litros = 40 × 2 ÷ 10 = 8 L. Com latas de 3.78 L → ceil(8 ÷ 3.78) = 3.',
	tool_paint_usecases_title: 'Quando usar',
	tool_paint_usecase_1: 'Comprar tinta de parede interna sem faltar nem sobrar demais.',
	tool_paint_usecase_2: 'Comparar uma vs duas demãos alterando o campo de demãos.',
	tool_paint_usecase_3: 'Conferir um orçamento com cálculo simples de área e rendimento.',
	tool_paint_faq_q1: 'O que é rendimento m²/L?',
	tool_paint_faq_a1: 'Quantos metros quadrados um litro cobre por demão. O valor 10 é inicial; priorize o rótulo.',
	tool_paint_faq_q2: 'Posso usar comprimento × altura × paredes?',
	tool_paint_faq_a2: 'Sim. Se não souber o m², monte a área com dimensões e número de paredes na mesma página.',
	tool_paint_faq_q3: 'Por que lata de 3.78 L?',
	tool_paint_faq_a3: 'É uma aproximação de 1 galão americano. Serve para latas inteiras; não garante o embalagem de cada marca.',
	tool_paint_faq_q4: 'Meus números são enviados?',
	tool_paint_faq_a4: 'Não. O cálculo fica no navegador do seu dispositivo, sem envio ao servidor.',
	tool_paint_references: 'NIST SP 811 sobre conversões de comprimento e área.',
	tool_paint_ref_nist_label: 'NIST — Publicação especial 811 (conversões)',
};

export default pt;
