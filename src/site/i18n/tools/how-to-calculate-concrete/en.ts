/**
 * i18n tool shard (how-to-calculate-concrete / en).
 * English master locale — full UI, How/Formula/FAQ for concrete volume estimator.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_concrete_title: 'Concrete Calculator — How to Estimate Concrete Volume',
	tool_concrete_description:
		'Estimate concrete volume for a slab, column, or cylinder from length, width, and thickness (or diameter and height). Example: a 5 m × 4 m × 0.1 m slab → 2.0 m³. Optional bag count uses 0.015 m³ (or 0.45 ft³) per bag — that bag size is an assumption shown on the page. Runs in your browser; numbers stay on your device and are not uploaded to a server.',
	tool_concrete_article:
		'This calculator estimates pour volume from simple geometry. Pick a slab, rectangular column, or cylinder, enter positive dimensions in metres or feet, and read cubic metres or cubic feet. Bag counts are optional and depend on the bag volume assumption you see below the result.',
	tool_concrete_calculate: 'Calculate',
	tool_concrete_sample: 'Load sample',
	tool_concrete_clear: 'Clear',
	tool_concrete_shape_label: 'Shape',
	tool_concrete_shape_slab: 'Slab',
	tool_concrete_shape_column: 'Column',
	tool_concrete_shape_cylinder: 'Cylinder',
	tool_concrete_unit_label: 'Units',
	tool_concrete_unit_m: 'Metres (m)',
	tool_concrete_unit_ft: 'Feet (ft)',
	tool_concrete_length_label: 'Length',
	tool_concrete_width_label: 'Width',
	tool_concrete_thickness_label: 'Thickness',
	tool_concrete_height_label: 'Height',
	tool_concrete_diameter_label: 'Diameter',
	tool_concrete_length_ph: 'e.g. 5',
	tool_concrete_width_ph: 'e.g. 4',
	tool_concrete_thickness_ph: 'e.g. 0.1',
	tool_concrete_height_ph: 'e.g. 2.4',
	tool_concrete_diameter_ph: 'e.g. 0.3',
	tool_concrete_bags_check: 'Estimate bag count (optional)',
	tool_concrete_result_volume: 'Volume',
	tool_concrete_result_bags: 'Bags (approx.)',
	tool_concrete_bags_note:
		'Bag assumption: 0.015 m³ per bag in metric mode, or 0.45 ft³ per bag in feet mode. Real bag sizes vary by brand and mix — round up and confirm with your supplier.',
	tool_concrete_err_dims: 'Enter positive numbers for every dimension.',
	tool_concrete_how_title: 'How it works',
	tool_concrete_how_body:
		'Choose a shape and unit system, then enter the dimensions shown for that shape. The tool multiplies length × width × thickness for slabs and rectangular columns, or uses π × (diameter/2)² × height for cylinders. Optionally divide volume by the documented bag size and round up. All math runs in your browser tab; your numbers are not uploaded to a server.',
	tool_concrete_formula_title: 'Formula and assumptions',
	tool_concrete_formula_body:
		'Volumes use closed geometric solids. Keep these rules in mind:',
	tool_concrete_formula_item_1: 'Slab: V = length × width × thickness.',
	tool_concrete_formula_item_2: 'Rectangular column: V = length × width × height.',
	tool_concrete_formula_item_3:
		'Cylinder: V = π × (diameter ÷ 2)² × height. Bag estimate = ceil(V ÷ bag volume) with bag volume 0.015 m³ or 0.45 ft³.',
	tool_concrete_example_title: 'Example',
	tool_concrete_example:
		'Example (slab, metres): length 5 m, width 4 m, thickness 0.1 m → V = 5 × 4 × 0.1 = 2.0 m³. With the 0.015 m³ bag assumption, bags ≈ ceil(2.0 ÷ 0.015) = 134.',
	tool_concrete_usecases_title: 'When to use it',
	tool_concrete_usecase_1: 'Rough-order a patio or garage slab before calling a ready-mix plant.',
	tool_concrete_usecase_2: 'Size bagged concrete for fence posts or small cylindrical footings.',
	tool_concrete_usecase_3: 'Cross-check a contractor quote against simple L×W×T geometry.',
	tool_concrete_faq_q1: 'What formula does the slab mode use?',
	tool_concrete_faq_a1:
		'Slab volume is length × width × thickness in the units you select. The default sample 5 × 4 × 0.1 m equals 2.0 m³.',
	tool_concrete_faq_q2: 'How are bag counts calculated?',
	tool_concrete_faq_a2:
		'When you enable bag estimate, bags = ceil(volume ÷ bag volume). Metric mode uses 0.015 m³ per bag; feet mode uses 0.45 ft³ per bag. That is a planning assumption, not a branded bag label.',
	tool_concrete_faq_q3: 'Does cylinder mode need radius or diameter?',
	tool_concrete_faq_a3:
		'Enter the outside diameter. The calculator converts to radius as diameter ÷ 2 inside V = π r² h.',
	tool_concrete_faq_q4: 'Are my numbers uploaded?',
	tool_concrete_faq_a4:
		'No. Dimensions are calculated in your browser on your device and are not uploaded to a server.',
	tool_concrete_references:
		'NIST SP 811 unit conversion factors; Portland Cement Association introductory concrete guidance.',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811 (unit conversions)',
	tool_concrete_ref_pca_label: 'Portland Cement Association — Learn about concrete',
};

export default en;
