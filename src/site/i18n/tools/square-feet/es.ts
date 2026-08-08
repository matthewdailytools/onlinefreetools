/**
 * i18n tool shard (square-feet / es). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const es: SiteLangDict = {
  tool_squarefeet_article:
    'Estima el área rectangular a partir del largo y el ancho y convierte entre pies cuadrados y metros cuadrados. Pensado para anuncios, suelo y pintura — no es una tasación ni distingue superficie útil y construida.',
  tool_squarefeet_calculate: 'Convertir área',
  tool_squarefeet_description:
    'Calculadora de pies cuadrados (sq ft): convierte el área entre pies cuadrados y metros cuadrados para anuncios y reformas. Proceso: elige ft/m/in, introduce largo × ancho y obtén ft² y m² con el factor NIST 1 ft² = 0.09290304 m². Ejemplo: piso de 850 sq ft ≈ 78,97 m².',
  tool_squarefeet_example:
    'Anuncio: piso de 850 sq ft → 850 × 0.09290304 ≈ 78,97 m². Habitación: 10 ft × 12 ft = 120 sq ft ≈ 11,15 m² para comparar con anuncios en m².',
  tool_squarefeet_example_title: 'Ejemplo',
  tool_squarefeet_faq_a1: 'Exactamente 1 ft² = 0.09290304 m² (orientación SI / NIST). El resultado se redondea a dos decimales.',
  tool_squarefeet_faq_a2: 'No. Solo convierte el área plana de un rectángulo. Las definiciones de los anuncios quedan fuera.',
  tool_squarefeet_faq_a3: 'No. La conversión de área no es valoración ni un modelo de precio por metro.',
  tool_squarefeet_faq_a4: 'Divide en rectángulos, convierte cada uno y suma. No modelamos polígonos irregulares.',
  tool_squarefeet_faq_q1: '¿Qué factor usáis entre ft² y m²?',
  tool_squarefeet_faq_q2: '¿Distingue superficie útil y construida?',
  tool_squarefeet_faq_q3: '¿Sirve para tasar una vivienda?',
  tool_squarefeet_faq_q4: '¿Y habitaciones en L?',
  tool_squarefeet_formula_body:
    'Área (ft²) = largo (ft) × ancho (ft). En metros: ft² = (L×W) ÷ 0.09290304. En pulgadas: divide cada lado entre 12. Factor exacto: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Entrada en pies: área_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Entrada en metros: área_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Entrada en pulgadas: área_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = área_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_formula_title: 'Fórmula de área y factor de conversión',
  tool_squarefeet_how_body:
    'Elige si las medidas están en pies, metros o pulgadas. Multiplica largo × ancho tras pasar ambos lados a pies y convierte a m² con el factor SI exacto. Se rechazan valores vacíos o negativos.',
  tool_squarefeet_how_title: 'Cómo funciona',
  tool_squarefeet_invalid_input: 'Introduce largo y ancho positivos.',
  tool_squarefeet_length_label: 'Largo',
  tool_squarefeet_length_placeholder: 'Introduce el largo',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Guía del Sistema Internacional de Unidades (SI)',
  tool_squarefeet_result_note: 'Redondeo a dos decimales. Factor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_title: 'Calculadora de pies cuadrados — sq ft a m² (conversor de área)',
  tool_squarefeet_unit_group_label: 'Unidades de entrada',
  tool_squarefeet_usage: 'Elige la unidad, introduce largo y ancho y obtén pies cuadrados más el equivalente en m².',
  tool_squarefeet_usage_title: 'Uso',
  tool_squarefeet_usecase_1: 'Comparar un listing en sq ft con anuncios locales en m².',
  tool_squarefeet_usecase_2: 'Estimar suelo o moqueta de una habitación rectangular antes de pedir material.',
  tool_squarefeet_usecase_3: 'Calcular a ojo pintura o reforma cuando el plano mezcla unidades.',
  tool_squarefeet_usecases_title: 'Para qué sirve',
  tool_squarefeet_width_label: 'Ancho',
  tool_squarefeet_width_placeholder: 'Introduce el ancho',
};
export default es;
