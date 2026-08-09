/**
 * i18n tool shard (how-to-calculate-paint / en).
 * English master locale — full UI, How/Formula/FAQ for paint volume estimator.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_paint_title: 'Paint Calculator — How to Estimate Paint Needed',
	tool_paint_description:
		'Estimate paint liters from wall area in m² (or length × height × number of walls), coats, and coverage in m²/L (default 10). Example: 40 m², 2 coats, 10 m²/L → 8 L. Optional can count assumes 3.78 L per can. Runs in your browser; numbers stay on your device and are not uploaded to a server.',
	tool_paint_article:
		'This calculator turns wall area and product coverage into a liters estimate before you buy paint. Enter area directly or build it from length, height, and wall count, then set coats and coverage. An optional can count uses a 3.78 L (≈1 US gallon) assumption shown on the page.',
	tool_paint_calculate: 'Calculate',
	tool_paint_sample: 'Load sample',
	tool_paint_clear: 'Clear',
	tool_paint_mode_label: 'Wall size input',
	tool_paint_mode_area: 'Area (m²)',
	tool_paint_mode_lhw: 'Length × height × walls',
	tool_paint_area_label: 'Wall area (m²)',
	tool_paint_area_ph: 'e.g. 40',
	tool_paint_len_label: 'Wall length (m)',
	tool_paint_height_label: 'Wall height (m)',
	tool_paint_walls_label: 'Number of walls',
	tool_paint_len_ph: 'e.g. 5',
	tool_paint_height_ph: 'e.g. 2.5',
	tool_paint_walls_ph: 'e.g. 4',
	tool_paint_coats_label: 'Coats',
	tool_paint_coats_ph: 'e.g. 2',
	tool_paint_coverage_label: 'Coverage (m²/L)',
	tool_paint_coverage_ph: 'e.g. 10',
	tool_paint_coverage_hint: 'Default 10 m² per liter is a planning starting point; check your can label.',
	tool_paint_cans_label: 'Also show cans (3.78 L each)',
	tool_paint_result_liters: 'Paint needed',
	tool_paint_result_area: 'Wall area used',
	tool_paint_result_cans: 'Cans needed (3.78 L)',
	tool_paint_err_input: 'Enter a positive wall area (or length, height, and walls), positive coats, and positive coverage.',
	tool_paint_how_title: 'How it works',
	tool_paint_how_body:
		'Choose area or length × height × walls, enter coats and coverage in m² per liter, then calculate. Liters = area × coats ÷ coverage. If you enable cans, the tool divides liters by 3.78 and rounds up. All math runs in your browser tab; your numbers are not uploaded to a server.',
	tool_paint_formula_title: 'Formula and assumptions',
	tool_paint_formula_body: 'Paint volume uses wall area, coats, and label coverage:',
	tool_paint_formula_item_1: 'Area A = direct m², or length × height × number of walls (metres).',
	tool_paint_formula_item_2: 'Liters = A × coats ÷ coverage (m²/L). Default coverage is 10.',
	tool_paint_formula_item_3: 'Optional cans = ceil(liters ÷ 3.78). The 3.78 L size is an assumption for ≈1 US gallon, not a brand pack guarantee.',
	tool_paint_example_title: 'Example',
	tool_paint_example:
		'Example: wall area 40 m², 2 coats, coverage 10 m²/L. Liters = 40 × 2 ÷ 10 = 8 L. With 3.78 L cans, cans = ceil(8 ÷ 3.78) = 3.',
	tool_paint_usecases_title: 'When to use it',
	tool_paint_usecase_1: 'Rough-buy interior wall paint before visiting the store.',
	tool_paint_usecase_2: 'Compare one-coat vs two-coat plans by changing the coats field.',
	tool_paint_usecase_3: 'Cross-check a contractor quote against simple area and coverage math.',
	tool_paint_faq_q1: 'What does coverage (m²/L) mean?',
	tool_paint_faq_a1:
		'Coverage is how many square metres one liter covers per coat according to the product. The default 10 is a planning start; always prefer the label on your can.',
	tool_paint_faq_q2: 'Why offer a 3.78 L can count?',
	tool_paint_faq_a2:
		'Many shops sell ≈1 US gallon cans (~3.78 L). The optional count rounds up so you see whole cans; it is not a promise that every brand packs exactly 3.78 L.',
	tool_paint_faq_q3: 'Should I enter area or length × height × walls?',
	tool_paint_faq_a3:
		'Either works. Use area if you already know the m²; use length × height × walls when you have room dimensions and a wall count.',
	tool_paint_faq_q4: 'Are my numbers uploaded?',
	tool_paint_faq_a4:
		'No. Dimensions are calculated in your browser on your device and are not uploaded to a server.',
	tool_paint_references: 'NIST SP 811 unit conversion factors for relating wall lengths and areas.',
	tool_paint_ref_nist_label: 'NIST — Special Publication 811 (unit conversions)',
};

export default en;
