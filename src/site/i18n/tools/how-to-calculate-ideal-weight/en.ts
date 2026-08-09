/**
 * i18n tool shard (how-to-calculate-ideal-weight / en).
 * English master — IBW formulas, UI, FAQ, YMYL disclaimer.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_ideal_weight_title: 'Ideal Weight Calculator — How to Estimate Ideal Body Weight',
	tool_ideal_weight_description:
		'Estimate ideal body weight with Devine, Robinson, Miller, and Hamwi formulas on one page. Example: male 178 cm → Devine about 73.2 kg (range about 70.4–75.2 kg across formulas). Runs in your browser; educational only — not medical advice or a diagnosis.',
	tool_ideal_weight_article:
		'Ideal body weight (IBW) formulas estimate a reference weight from height and sex. This page keeps Devine, Robinson, Miller, and Hamwi together so you can compare — not four doorway URLs.',
	tool_ideal_weight_calculate: 'Calculate',
	tool_ideal_weight_sample: 'Load sample',
	tool_ideal_weight_clear: 'Clear',
	tool_ideal_weight_sex_label: 'Sex (formula tables)',
	tool_ideal_weight_sex_male: 'Male',
	tool_ideal_weight_sex_female: 'Female',
	tool_ideal_weight_height_label: 'Height (cm)',
	tool_ideal_weight_height_ph: 'e.g. 178',
	tool_ideal_weight_formula_label: 'Formula view',
	tool_ideal_weight_formula_all: 'All formulas (range)',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: 'Estimated ideal weight',
	tool_ideal_weight_result_range: 'Formula range',
	tool_ideal_weight_result_note: 'Educational estimate only — not medical advice or a diagnosis.',
	tool_ideal_weight_err_height: 'Height must be greater than zero.',
	tool_ideal_weight_err_short: 'These IBW formulas are poorly defined below about 152 cm (5 ft). Treat results as illustration only.',
	tool_ideal_weight_how_title: 'How it works',
	tool_ideal_weight_how_body:
		'Enter sex and height in centimetres. The tool converts height to inches for classic IBW formulas and shows kilograms. Compare formulas on this page; BMI and body-fat tools stay separate.',
	tool_ideal_weight_formula_title: 'Formulas and assumptions',
	tool_ideal_weight_formula_body:
		'Height is converted with 1 in = 2.54 cm. For inches above 60 (5 ft), male Devine = 50 + 2.3×(in−60); female Devine = 45.5 + 2.3×(in−60). Robinson, Miller, and Hamwi use similar linear forms with different coefficients. Assumptions:',
	tool_ideal_weight_formula_item_1: 'Formulas were derived for adult dosing / reference contexts — not personal goals.',
	tool_ideal_weight_formula_item_2: 'Frame size, muscle mass, and pregnancy are not modeled.',
	tool_ideal_weight_formula_item_3: 'Results are educational illustrations, not clinical targets or medical advice.',
	tool_ideal_weight_example_title: 'Example',
	tool_ideal_weight_example:
		'Example: male, 178 cm → Devine about 73.2 kg; Robinson ~71.1, Miller ~70.4, Hamwi ~75.2 (about 70.4–75.2 kg).',
	tool_ideal_weight_usecases_title: 'When to use it',
	tool_ideal_weight_usecase_1: 'Classwork: compare classic IBW formulas with one height.',
	tool_ideal_weight_usecase_2: 'Rough educational reference before talking to a clinician (not a goal plan).',
	tool_ideal_weight_usecase_3: 'See Devine vs Robinson on one page without separate tool URLs.',
	tool_ideal_weight_faq_q1: 'Which ideal weight formula is “correct”?',
	tool_ideal_weight_faq_a1:
		'None is universally correct. Devine is common in teaching; Robinson, Miller, and Hamwi differ by coefficients. Compare them here.',
	tool_ideal_weight_faq_q2: 'Is this the same as BMI?',
	tool_ideal_weight_faq_a2:
		'No. BMI uses weight and height as a ratio. IBW estimates a reference weight from height and sex only.',
	tool_ideal_weight_faq_q3: 'Is this medical advice?',
	tool_ideal_weight_faq_a3:
		'No. Numbers are educational estimates only and are not a diagnosis, treatment plan, or nutrition prescription.',
	tool_ideal_weight_faq_q4: 'Why convert to inches?',
	tool_ideal_weight_faq_a4:
		'Published Devine-style equations are defined in inches above 5 feet. Centimetre inputs are converted before applying the formulas.',
	tool_ideal_weight_disclaimer:
		'Ideal weight results are educational illustrations only and are not medical advice, diagnosis, or a substitute for clinical assessment. Talk to a qualified clinician for health decisions.',
	tool_ideal_weight_references:
		'Classic Devine/Robinson/Miller/Hamwi IBW equations; NCBI Bookshelf dosing/IBW educational context.',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — Ideal body weight context',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default en;
