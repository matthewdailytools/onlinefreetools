/**
 * i18n tool shard (unit-converter / pt).
 * Português: conversor de unidades — reescrita independente.
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_unit_converter_title: 'Conversor de unidades — Comprimento / Massa / Temperatura / Área / Volume / Velocidade',
	tool_unit_converter_description:
		'Converta comprimento, massa, temperatura, área, volume e velocidade numa página com fatores claros. Exemplo: 1 milha → 1,60934 km. No navegador; fatores educativos — não é instrumento de topografia nem dispositivo médico.',
	tool_unit_converter_article:
		'Um hub de conversão mantém categorias comuns numa URL para não criar página por cada par (cm↔polegada). Fluxos de área por comprimento×largura ficam na ferramenta square-feet.',
	tool_unit_converter_calculate: 'Converter',
	tool_unit_converter_sample: 'Carregar exemplo',
	tool_unit_converter_clear: 'Limpar',
	tool_unit_converter_value_label: 'Valor',
	tool_unit_converter_value_ph: 'ex.: 1',
	tool_unit_converter_from_label: 'Unidade de origem',
	tool_unit_converter_to_label: 'Unidade de destino',
	tool_unit_converter_category_label: 'Categoria',
	tool_unit_converter_cat_length: 'Comprimento',
	tool_unit_converter_cat_mass: 'Massa',
	tool_unit_converter_cat_temperature: 'Temperatura',
	tool_unit_converter_cat_area: 'Área',
	tool_unit_converter_cat_volume: 'Volume',
	tool_unit_converter_cat_speed: 'Velocidade',
	tool_unit_converter_result_label: 'Resultado',
	tool_unit_converter_result_note: 'Apenas conversão educativa — não é medição certificada.',
	tool_unit_converter_err_value: 'Introduza um número finito.',
	tool_unit_converter_err_temp: 'Temperatura abaixo do zero absoluto na escala escolhida.',
	tool_unit_converter_how_title: 'Como funciona',
	tool_unit_converter_how_body:
		'Escolha categoria, valor e unidades. As categorias ficam neste hub; área por C×L está em square-feet.',
	tool_unit_converter_formula_title: 'Fatores e fórmulas de temperatura',
	tool_unit_converter_formula_body:
		'Categorias lineares passam por uma unidade SI base. Temperatura usa fórmulas de escala. Premissas:',
	tool_unit_converter_formula_item_1: 'Fatores SI / usuais (ex.: 1 mi = 1609,344 m; galão US no volume).',
	tool_unit_converter_formula_item_2: '°C ↔ °F ↔ K: F = C×9/5+32; K = C+273,15; inversas correspondentes.',
	tool_unit_converter_formula_item_3: 'Resultados educativos, não medições de laboratório certificadas.',
	tool_unit_converter_example_title: 'Exemplo',
	tool_unit_converter_example: 'Exemplo (comprimento): 1 milha → 1,60934 km. Temperatura: 0 °C → 32 °F.',
	tool_unit_converter_usecases_title: 'Quando usar',
	tool_unit_converter_usecase_1: 'Trabalho de casa: km e milhas sem uma página por par.',
	tool_unit_converter_usecase_2: 'Checagens rápidas de massa ou volume ao cozinhar ou arrumar mala.',
	tool_unit_converter_usecase_3: 'Trocar escalas de temperatura em notas do tempo — não para doses médicas.',
	tool_unit_converter_faq_q1: 'Por que não uma página por cada par de unidades?',
	tool_unit_converter_faq_a1:
		'Centenas de URLs quase duplicadas parecem doorway. Este hub cobre pares comuns; square-feet para C×L.',
	tool_unit_converter_faq_q2: 'Quais definições de milha e galão?',
	tool_unit_converter_faq_a2: 'Milha internacional (1609,344 m) e galão líquido US (3,785411784 L).',
	tool_unit_converter_faq_q3: 'Como converter temperatura?',
	tool_unit_converter_faq_a3: 'Via °C: F = C×9/5+32 e K = C+273,15. Valores abaixo do zero absoluto são rejeitados.',
	tool_unit_converter_faq_q4: 'É o mesmo que o square-feet?',
	tool_unit_converter_faq_a4: 'Não. Aqui converte unidades de área; square-feet calcula área a partir de C×L.',
	tool_unit_converter_disclaimer:
		'Os resultados são ilustrações educativas com fatores padrão. Não são medições certificadas nem conselho de topografia, engenharia ou medicina.',
	tool_unit_converter_references: 'Relações SI do NIST; fatores usuais; fórmulas °C/°F/K.',
	tool_unit_converter_ref_nist_label: 'NIST — Unidades SI',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default pt;
