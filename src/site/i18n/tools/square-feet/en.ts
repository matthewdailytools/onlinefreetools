/**
 * i18n tool shard (square-feet / en). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const en: SiteLangDict = {
  tool_squarefeet_article:
    'Estimate rectangular floor area from length and width, then convert between square feet and square meters. Built for apartment listings, flooring take-offs, and paint estimates — not a property valuation tool. This page only converts planar area; it does not define living vs gross floor area.',
  tool_squarefeet_calculate: 'Convert area',
  tool_squarefeet_description:
    'Convert room area between square feet and square meters for listings and renovation. Process: pick ft/m/in, enter length × width, compute area, then show sq ft and m² with the NIST factor 1 ft² = 0.09290304 m². Example: 850 sq ft apartment ≈ 78.97 m².',
  tool_squarefeet_example:
    'Listing example: an 850 sq ft apartment → 850 × 0.09290304 ≈ 78.97 m². Room example: 10 ft × 12 ft = 120 sq ft ≈ 11.15 m² — useful when comparing a US listing to local m² ads.',
  tool_squarefeet_example_title: 'Example',
  tool_squarefeet_faq_a1: 'Exactly 1 ft² = 0.09290304 m² (SI / NIST guidance). Results are rounded to two decimals for display.',
  tool_squarefeet_faq_a2:
    'No. It only converts planar rectangle area between units. Listing definitions (套内/建筑, net/gross) are outside this tool.',
  tool_squarefeet_faq_a3: 'No. Area conversion is not a valuation, appraisal, or price-per-square-foot market model.',
  tool_squarefeet_faq_a4: 'Split into rectangles, convert each, then add. Irregular polygons are not modeled here.',
  tool_squarefeet_faq_q1: 'What conversion factor do you use for ft² ↔ m²?',
  tool_squarefeet_faq_q2: 'Does this distinguish living area vs gross building area?',
  tool_squarefeet_faq_q3: 'Can I use it to estimate home prices?',
  tool_squarefeet_faq_q4: 'What about L-shaped rooms?',
  tool_squarefeet_formula_body:
    'Area (ft²) = length (ft) × width (ft). When sides are in meters: ft² = (L×W) ÷ 0.09290304. When sides are in inches: convert each side ÷ 12 first. Exact factor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'Feet input: area_ft² = L × W',
  tool_squarefeet_formula_item_2: 'Meters input: area_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'Inches input: area_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = area_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_formula_title: 'Area formula and conversion factor',
  tool_squarefeet_how_body:
    'Choose whether your dimensions are in feet, meters, or inches. Multiply length × width after converting both sides to feet, then convert the area to square meters with the exact SI factor. Negative or empty inputs are rejected.',
  tool_squarefeet_how_title: 'How it works',
  tool_squarefeet_invalid_input: 'Enter positive length and width values.',
  tool_squarefeet_length_label: 'Length',
  tool_squarefeet_length_placeholder: 'Enter length',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — Guide for the Use of the International System of Units (SI)',
  tool_squarefeet_result_note: 'Rounded to two decimal places. Factor: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} m²',
  tool_squarefeet_title: 'Square Feet to Square Meters — Area Converter for Homes & Renovation',
  tool_squarefeet_unit_group_label: 'Input units',
  tool_squarefeet_usage:
    'Enter length and width in the selected unit to get square feet plus the square-meter equivalent for flooring or listing checks.',
  tool_squarefeet_usage_title: 'Usage',
  tool_squarefeet_usecase_1: 'Compare a US listing in sq ft with local ads that quote living area in m².',
  tool_squarefeet_usecase_2: 'Estimate flooring or carpet area for a rectangular room before ordering materials.',
  tool_squarefeet_usecase_3: 'Rough paint or renovation quantity checks when drawings use mixed units.',
  tool_squarefeet_usecases_title: 'When this helps',
  tool_squarefeet_width_label: 'Width',
  tool_squarefeet_width_placeholder: 'Enter width',
};
export default en;
