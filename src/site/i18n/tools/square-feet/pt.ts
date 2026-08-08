/**
 * i18n tool shard (square-feet / pt). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const pt: SiteLangDict = {
  tool_squarefeet_article:
    'Estime a área retangular a partir do comprimento e da largura e converta entre pés quadrados e metros quadrados. Feito para anúncios, piso e pintura — não é avaliação imobiliária nem distingue área útil e construída.',
  tool_squarefeet_calculate: 'Converter área',
  tool_squarefeet_description:
    'Converta a área do cômodo entre pés quadrados e metros quadrados para anúncios e reformas. Processo: escolha ft/m/in, informe comprimento × largura, calcule a área e mostre ft² e m² com o fator NIST 1 ft² = 0.09290304 m². Exemplo: apartamento de 850 sq ft ≈ 78,97 m².',
  tool_squarefeet_example:
    'Anúncio: apartamento de 850 sq ft → 850 × 0.09290304 ≈ 78,97 m². Cômodo: 10 ft × 12 ft = 120 sq ft ≈ 11,15 m².',
  tool_squarefeet_example_title: 'Exemplo',
  tool_squarefeet_faq_a1: 'Exatamente 1 ft² = 0.09290304 m² (orientação SI / NIST). Resultado com duas casas decimais.',
  tool_squarefeet_faq_a2: 'Não. Só converte a área plana de um retângulo.',
  tool_squarefeet_faq_a3: 'Não. Conversão de área não é avaliação nem modelo de preço.',
  tool_squarefeet_faq_a4: 'Divida em retângulos, converta cada um e some.',
  tool_squarefeet_faq_q1: 'Qual fator usam entre ft² e m²?',
  tool_squarefeet_faq_q2: 'Distingue área útil e construída?',
  tool_squarefeet_faq_q3: 'Serve para avaliar o preço do imóvel?',
  tool_squarefeet_faq_q4: 'E cômodos em L?',
  tool_squarefeet_formula_body:
    'Área (ft²) = comprimento (ft) × largura (ft). Em metros: ft² = (L×W) ÷ 0.09290304. Em polegadas: divida cada lado por 12. Fator: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Entrada em pés: área_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Entrada em metros: área_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Entrada em polegadas: área_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = área_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_formula_title: 'Fórmula de área e fator de conversão',
  tool_squarefeet_how_body:
    'Escolha se as medidas estão em pés, metros ou polegadas. Multiplique comprimento × largura após converter ambos para pés e passe para m² com o fator SI. Valores vazios ou negativos são rejeitados.',
  tool_squarefeet_how_title: 'Como funciona',
  tool_squarefeet_invalid_input: 'Informe comprimento e largura positivos.',
  tool_squarefeet_length_label: 'Comprimento',
  tool_squarefeet_length_placeholder: 'Informe o comprimento',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Guia do Sistema Internacional de Unidades (SI)',
  tool_squarefeet_result_note: 'Arredondado a duas casas. Fator: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_title: 'Pés quadrados para m² — Conversão para imóveis e reformas',
  tool_squarefeet_unit_group_label: 'Unidades de entrada',
  tool_squarefeet_usage: 'Escolha a unidade, informe comprimento e largura e obtenha pés quadrados mais o equivalente em m².',
  tool_squarefeet_usage_title: 'Uso',
  tool_squarefeet_usecase_1: 'Comparar anúncio em sq ft com listagens locais em m².',
  tool_squarefeet_usecase_2: 'Estimar piso ou carpete de um cômodo retangular antes de pedir material.',
  tool_squarefeet_usecase_3: 'Checagem rápida de tinta ou reforma quando o desenho mistura unidades.',
  tool_squarefeet_usecases_title: 'Para que serve',
  tool_squarefeet_width_label: 'Largura',
  tool_squarefeet_width_placeholder: 'Informe a largura',
};
export default pt;
