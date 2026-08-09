/**
 * i18n tool shard (how-to-calculate-tile / pt).
 * Português independente: calculadora de azulejos / quantidade de piso.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_tile_title: 'Calculadora de azulejos — Como estimar a quantidade',
	tool_tile_description:
		'Estime quantos azulejos ou pisos precisa a partir da área do cômodo em m² (ou comprimento × largura), do tamanho da peça em cm e da perda percentual (padrão 10%). Exemplo: cômodo de 12 m², peças 30×30 cm e 10% de perda → 147 unidades (arredondamento para cima). Roda no navegador; os números ficam no dispositivo e não são enviados ao servidor.',
	tool_tile_article:
		'Transforma área e tamanho da peça numa quantidade de compra. Informe a área ou as medidas em metros, o azulejo em centímetros e a margem de perda. O resultado arredonda para cima por causa de cortes e quebras.',
	tool_tile_calculate: 'Calcular',
	tool_tile_sample: 'Carregar exemplo',
	tool_tile_clear: 'Limpar',
	tool_tile_mode_label: 'Como informar o cômodo',
	tool_tile_mode_area: 'Área (m²)',
	tool_tile_mode_lw: 'Comprimento × largura',
	tool_tile_area_label: 'Área do cômodo (m²)',
	tool_tile_area_ph: 'ex.: 12',
	tool_tile_room_l_label: 'Comprimento do cômodo (m)',
	tool_tile_room_w_label: 'Largura do cômodo (m)',
	tool_tile_room_l_ph: 'ex.: 4',
	tool_tile_room_w_ph: 'ex.: 3',
	tool_tile_tile_l_label: 'Comprimento da peça (cm)',
	tool_tile_tile_w_label: 'Largura da peça (cm)',
	tool_tile_tile_l_ph: 'ex.: 30',
	tool_tile_tile_w_ph: 'ex.: 30',
	tool_tile_waste_label: 'Perda (%)',
	tool_tile_waste_ph: 'ex.: 10',
	tool_tile_waste_hint: 'O padrão 10% cobre cortes e algumas peças quebradas; aumente em assentamento diagonal.',
	tool_tile_result_tiles: 'Peças necessárias',
	tool_tile_result_area: 'Área usada',
	tool_tile_result_tile_area: 'Área por peça',
	tool_tile_err_input: 'Informe área positiva (ou comprimento e largura), tamanhos positivos e perda ≥ 0.',
	tool_tile_how_title: 'Como usar',
	tool_tile_how_body:
		'Escolha área ou comprimento × largura, digite o tamanho em cm e a perda. A ferramenta converte a peça para m², multiplica a área por (1 + perda/100), divide e arredonda para cima. Tudo fica na aba do navegador, sem envio ao servidor.',
	tool_tile_formula_title: 'Fórmula e premissas',
	tool_tile_formula_body: 'A quantidade usa a área do cômodo, a área de uma peça e a perda:',
	tool_tile_formula_item_1: 'Área A = m² direto, ou comprimento × largura em metros.',
	tool_tile_formula_item_2: 'Área da peça a = (comp_cm ÷ 100) × (larg_cm ÷ 100) em m².',
	tool_tile_formula_item_3: 'Peças = ceil(A × (1 + perda% ÷ 100) ÷ a). Perda padrão: 10%.',
	tool_tile_example_title: 'Exemplo',
	tool_tile_example:
		'Exemplo: 12 m², peças 30×30 cm, perda 10%. Uma peça tem 0,09 m². Área com perda = 12 × 1,10 = 13,2 m². Peças = ceil(13,2 ÷ 0,09) = 147.',
	tool_tile_usecases_title: 'Quando usar',
	tool_tile_usecase_1: 'Comprar piso de banheiro ou cozinha antes de ir à loja.',
	tool_tile_usecase_2: 'Conferir um orçamento de revestimento com área e perda simples.',
	tool_tile_usecase_3: 'Comparar 30×30 cm com formatos maiores só mudando o tamanho da peça.',
	tool_tile_faq_q1: 'Por que arredondar para cima?',
	tool_tile_faq_a1: 'Não se compra fração de peça. O arredondamento para cima reflete a compra real após cortes e quebras.',
	tool_tile_faq_q2: 'O que é o percentual de perda?',
	tool_tile_faq_a2: 'É a margem extra para cortes, encaixe de padrão e peças quebradas. O padrão é 10%; em diagonal costuma ser maior.',
	tool_tile_faq_q3: 'Área ou comprimento × largura?',
	tool_tile_faq_a3: 'Os dois servem. Use área se já souber os m²; use comprimento × largura se tiver as medidas em metros.',
	tool_tile_faq_q4: 'Meus números são enviados?',
	tool_tile_faq_a4: 'Não. O cálculo fica no navegador, no seu dispositivo, sem envio ao servidor.',
	tool_tile_references:
		'Fatores de conversão NIST SP 811; orientação TCNA sobre instalação e perda.',
	tool_tile_ref_nist_label: 'NIST — Special Publication 811 (conversões)',
	tool_tile_ref_tcna_label: 'TCNA — Tile Council of North America',
};

export default pt;
