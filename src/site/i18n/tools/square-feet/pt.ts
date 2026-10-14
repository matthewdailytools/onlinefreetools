/**
 * i18n tool shard (square-feet / pt).
 * Português: pés quadrados ↔ metros quadrados; comprimento × largura ou área conhecida;
 * processo visível e fator NIST; exemplos com vírgula decimal (78,97 / 11,15 / 92,90).
 */
import type { SiteLangDict } from '../../../types';

const pt: SiteLangDict = {
	tool_squarefeet_title: "Pés quadrados para metros quadrados — converta a área do cômodo",
	tool_squarefeet_description:
		"Calcular pés quadrados para metros quadrados, ou a área do cômodo com comprimento × largura. Fator exato: 1 ft² = 0,09290304 m² (NIST). Exemplo: 850 sq ft ≈ 78,97 m²; cômodo 10×12 ft = 120 ft² ≈ 11,15 m². O processo e os passos ficam no navegador; nada é enviado ao servidor.",
	tool_squarefeet_calculate: "Calcular",
	tool_squarefeet_sample: "Carregar exemplo",
	tool_squarefeet_clear: "Limpar",
	tool_squarefeet_mode_label: "O que você tem?",
	tool_squarefeet_mode_dims: "Comprimento e largura do cômodo",
	tool_squarefeet_mode_area: "Já sei a área",
	tool_squarefeet_dim_unit_label: "Unidade de comprimento",
	tool_squarefeet_unit_ft: "Pés (ft)",
	tool_squarefeet_unit_m: "Metros (m)",
	tool_squarefeet_unit_in: "Polegadas (in)",
	tool_squarefeet_length_label: "Comprimento",
	tool_squarefeet_length_placeholder: "ex.: 10",
	tool_squarefeet_width_label: "Largura",
	tool_squarefeet_width_placeholder: "ex.: 12",
	tool_squarefeet_area_label: "Área",
	tool_squarefeet_area_placeholder: "ex.: 850",
	tool_squarefeet_area_unit_label: "Unidade de área",
	tool_squarefeet_unit_sqft: "Pés quadrados (ft²)",
	tool_squarefeet_unit_sqm: "Metros quadrados (m²)",
	tool_squarefeet_sqft_label: "Pés quadrados",
	tool_squarefeet_sqm_label: "Metros quadrados",
	tool_squarefeet_work_label: "Processo",
	tool_squarefeet_result_note:
		"Arredondado a 2 casas decimais na tela. Fator exato: 1 ft² = 0,09290304 m² (NIST / SI). Só área plana retangular — não define área útil vs. construída e não estima preço.",
	tool_squarefeet_invalid_input: "Digite apenas números positivos.",
	tool_squarefeet_how_title: "Como funciona",
	tool_squarefeet_how_body:
		"Multiplique comprimento × largura depois de passar os dois lados para pés, ou converta uma área conhecida com o fator SI exato. Você sempre recebe ft² e m², mais a linha de processo.",
	tool_squarefeet_how_item_1:
		"Escolha Comprimento e largura do cômodo se estiver medindo um espaço, ou Já sei a área se o anúncio já cita sq ft ou m².",
	tool_squarefeet_how_item_2:
		"Nas dimensões, escolha pés, metros ou polegadas e digite os dois lados na mesma unidade. Na área conhecida, digite o número e se é ft² ou m².",
	tool_squarefeet_how_item_3: "Clique em Calcular.",
	tool_squarefeet_how_item_4:
		"Leia as duas unidades e o processo, por exemplo 10 × 12 = 120 ft², ou 850 ft² × 0,09290304 = 78,97 m².",
	tool_squarefeet_why_choose_title: "Por que usar Pés quadrados para metros quadrados — converta a área do cômodo",
	tool_squarefeet_why_choose_item_1:
		"Tudo fica no navegador; nada é enviado ao servidor.",
	tool_squarefeet_why_choose_item_2:
		"Limite explícito: não define área útil vs. construída e não é modelo de preço de imóvel.",
	tool_squarefeet_why_choose_item_3:
		"Dois modos cobrem as buscas reais: medidas do cômodo e área de anúncio (850 ou 1000 sq ft).",
	tool_squarefeet_why_choose_item_4:
		"O processo aparece na tela, para ver se polegadas foram ÷ 12 ou se o fator NIST foi aplicado.",
	tool_squarefeet_why_choose_item_5:
		"Usa o fator SI exato 1 ft² = 0,09290304 m² (não 0,09 nem 0,093), alinhado ao NIST SP 811.",
	tool_squarefeet_formula_title: "Fórmulas e fator de conversão",
	tool_squarefeet_formula_body:
		"A área em pés quadrados é comprimento × largura quando os dois lados estão em pés. Os metros quadrados saem do fator exato abaixo.",
	tool_squarefeet_formula_item_1: "Pés: A_ft² = L × W. Exemplo: 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_2: "Metros: A_ft² = (L × W) ÷ 0,09290304. Exemplo: 3 m × 4 m = 12 m² ≈ 129,17 ft².",
	tool_squarefeet_formula_item_3: "Polegadas: converta cada lado ÷ 12 primeiro. Exemplo: 120 in × 144 in → 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_4: "Exato: 1 ft² = 0,09290304 m², logo m² = ft² × 0,09290304 e ft² = m² ÷ 0,09290304.",
	tool_squarefeet_example_title: "Exemplo",
	tool_squarefeet_example:
		"Cômodo de amostra: 10 ft × 12 ft. Processo: 10 × 12 = 120 ft² → 120 × 0,09290304 ≈ 11,15 m². Área conhecida: 850 sq ft × 0,09290304 ≈ 78,97 m² — útil para comparar um anúncio dos EUA com listagens locais em m².",
	tool_squarefeet_usecases_title: "Quando ajuda",
	tool_squarefeet_usecase_1: "Converter um valor como 1000 sq ft (≈ 92,90 m²) ao comprar no exterior ou ler uma planta.",
	tool_squarefeet_usecase_2: "Comparar um anúncio em sq ft com listagens locais em m².",
	tool_squarefeet_usecase_3: "Estimar piso ou carpete de um cômodo retangular antes de pedir material (desperdício à parte).",
	tool_squarefeet_usecase_4: "Checagens rápidas de pintura ou reforma quando a planta mistura pés e metros.",
	tool_squarefeet_faq_q1: "Posso usar para estimar o preço de um imóvel?",
	tool_squarefeet_faq_a1:
		"Não. Conversão de área não é avaliação, perícia nem modelo de preço por pé quadrado.",
	tool_squarefeet_faq_q2: "Como converto pés quadrados em metros quadrados?",
	tool_squarefeet_faq_a2:
		"Multiplique por 0,09290304. Escolha Já sei a área, digite o valor em sq ft e o processo mostra a multiplicação.",
	tool_squarefeet_faq_q3: "Quantos metros quadrados tem 1 pé quadrado?",
	tool_squarefeet_faq_a3:
		"Exatamente 0,09290304 m² (NIST / SI). Assim 100 sq ft ≈ 9,29 m², 850 sq ft ≈ 78,97 m² e 1000 sq ft ≈ 92,90 m².",
	tool_squarefeet_faq_q4: "Como acho a metragem em pés quadrados de um cômodo?",
	tool_squarefeet_faq_a4:
		"Meça comprimento e largura na mesma unidade e multiplique. Em pés: 10 × 12 = 120 sq ft. Em polegadas, divida cada lado por 12 primeiro.",
	tool_squarefeet_faq_q5: "E cômodos em L?",
	tool_squarefeet_faq_a5:
		"Divida a forma em retângulos, converta cada um e some. Polígonos irregulares não são modelados aqui.",
	tool_squarefeet_faq_q6: "Quanto de desperdício de piso devo acrescentar?",
	tool_squarefeet_faq_a6:
		"A calculadora dá só a área do piso. Muitos instaladores acrescentam cerca de 5–10 % para cortes e erros; confira o guia do material.",
	tool_squarefeet_faq_q7: "Isso distingue área útil de área construída?",
	tool_squarefeet_faq_a7:
		"Não. Só converte área plana retangular entre unidades. Definições de anúncio (útil/construída) ficam fora desta ferramenta.",
	tool_squarefeet_article: "Pés quadrados",
	tool_squarefeet_disclaimer:
		"Para anúncios e planejamento de reforma. Não é ferramenta de avaliação nem definição de área útil vs. construída.",
	tool_squarefeet_references: "NIST SP 811 — Guide for the Use of the International System of Units (SI); Wikipedia — Square foot.",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — Guia para o uso do Sistema Internacional de Unidades (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipedia — Square foot",
};

export default pt;
