/**
 * i18n tool shard (how-to-calculate-concrete / pt).
 * Português: calculadora de concreto / volume — reescrita independente.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_concrete_title: 'Calculadora de concreto — Como estimar o volume',
	tool_concrete_description:
		'Estime o volume de concreto para laje, coluna ou cilindro a partir do comprimento, largura e espessura (ou diâmetro e altura). Exemplo: laje 5 m × 4 m × 0.1 m → 2.0 m³. Contagem de sacos opcional com 0.015 m³ (ou 0.45 ft³) por saco — hipótese mostrada na página. Roda no navegador; os números ficam no dispositivo e não são enviados a um servidor.',
	tool_concrete_article:
		'Esta calculadora estima o volume de vazamento com geometria simples. Escolha laje, coluna retangular ou cilindro, entre medidas positivas em metros ou pés e leia m³ ou ft³. Sacos são opcionais e dependem do volume por saco documentado abaixo do resultado.',
	tool_concrete_calculate: 'Calcular',
	tool_concrete_sample: 'Carregar exemplo',
	tool_concrete_clear: 'Limpar',
	tool_concrete_shape_label: 'Forma',
	tool_concrete_shape_slab: 'Laje',
	tool_concrete_shape_column: 'Coluna',
	tool_concrete_shape_cylinder: 'Cilindro',
	tool_concrete_unit_label: 'Unidades',
	tool_concrete_unit_m: 'Metros (m)',
	tool_concrete_unit_ft: 'Pés (ft)',
	tool_concrete_length_label: 'Comprimento',
	tool_concrete_width_label: 'Largura',
	tool_concrete_thickness_label: 'Espessura',
	tool_concrete_height_label: 'Altura',
	tool_concrete_diameter_label: 'Diâmetro',
	tool_concrete_length_ph: 'ex.: 5',
	tool_concrete_width_ph: 'ex.: 4',
	tool_concrete_thickness_ph: 'ex.: 0.1',
	tool_concrete_height_ph: 'ex.: 2.4',
	tool_concrete_diameter_ph: 'ex.: 0.3',
	tool_concrete_bags_check: 'Estimar sacos (opcional)',
	tool_concrete_result_volume: 'Volume',
	tool_concrete_result_bags: 'Sacos (aprox.)',
	tool_concrete_bags_note:
		'Hipótese de saco: 0.015 m³ por saco no modo métrico, ou 0.45 ft³ em pés. Tamanhos reais variam por marca e traço — arredonde para cima e confirme com o fornecedor.',
	tool_concrete_err_dims: 'Informe números positivos em todas as dimensões.',
	tool_concrete_how_title: 'Como funciona',
	tool_concrete_how_body:
		'Escolha a forma e o sistema de unidades e preencha as medidas. Laje e coluna retangular usam comprimento × largura × espessura (ou altura); cilindro usa π × (diâmetro/2)² × altura. Com sacos ativos, divide-se o volume pelo tamanho documentado e arredonda-se para cima. Tudo no navegador; nada é enviado a um servidor.',
	tool_concrete_formula_title: 'Fórmulas e premissas',
	tool_concrete_formula_body: 'Os volumes usam sólidos geométricos fechados:',
	tool_concrete_formula_item_1: 'Laje: V = comprimento × largura × espessura.',
	tool_concrete_formula_item_2: 'Coluna retangular: V = comprimento × largura × altura.',
	tool_concrete_formula_item_3:
		'Cilindro: V = π × (diâmetro ÷ 2)² × altura. Sacos = ceil(V ÷ volume do saco) com 0.015 m³ ou 0.45 ft³.',
	tool_concrete_example_title: 'Exemplo',
	tool_concrete_example:
		'Exemplo (laje, metros): 5 m × 4 m × 0.1 m → V = 2.0 m³. Com 0.015 m³/saco → ≈ 134 sacos.',
	tool_concrete_usecases_title: 'Quando usar',
	tool_concrete_usecase_1: 'Pedir ordem de grandeza de laje de pátio ou garagem antes da usina.',
	tool_concrete_usecase_2: 'Dimensionar concreto ensacado para postes ou bases cilíndricas pequenas.',
	tool_concrete_usecase_3: 'Conferir orçamento com geometria C×L×E simples.',
	tool_concrete_faq_q1: 'Qual fórmula o modo laje usa?',
	tool_concrete_faq_a1: 'Volume da laje = comprimento × largura × espessura. O exemplo 5 × 4 × 0.1 m dá 2.0 m³.',
	tool_concrete_faq_q2: 'Como os sacos são calculados?',
	tool_concrete_faq_a2:
		'Sacos = ceil(volume ÷ volume do saco). Métrico: 0.015 m³; pés: 0.45 ft³. Hipótese de planejamento, não rótulo de marca.',
	tool_concrete_faq_q3: 'Cilindro pede raio ou diâmetro?',
	tool_concrete_faq_a3: 'Informe o diâmetro externo; o raio é diâmetro ÷ 2 em V = π r² h.',
	tool_concrete_faq_q4: 'Meus números são enviados?',
	tool_concrete_faq_a4: 'Não. O cálculo ocorre no navegador no seu dispositivo e não é enviado a um servidor.',
	tool_concrete_references: 'Fatores NIST SP 811; orientação introdutória da Portland Cement Association.',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811 (conversões)',
	tool_concrete_ref_pca_label: 'Portland Cement Association — Saiba mais sobre concreto',
};

export default pt;
