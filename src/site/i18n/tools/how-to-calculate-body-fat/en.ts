/**
 * i18n tool shard (how-to-calculate-body-fat / en).
 * English master — Navy/Army circumference UI, Formula/FAQ, YMYL disclaimer.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_body_fat_title: 'Body Fat Calculator — How to Estimate Body Fat Percentage',
	tool_body_fat_description:
		'Estimate body fat percentage with U.S. Navy circumference formulas (Army option on the same page). Example: male 178 cm height, neck 40 cm, waist 86 cm → about 15.3%. Runs in your browser; educational only — not medical advice or a diagnosis.',
	tool_body_fat_article:
		'Circumference methods estimate body fat from height and tape measures. Navy and Army (DoD-family) options stay on one educational URL; skinfold calipers are explained as a different method in FAQ — not a separate doorway page.',
	tool_body_fat_calculate: 'Calculate',
	tool_body_fat_sample: 'Load sample',
	tool_body_fat_clear: 'Clear',
	tool_body_fat_method_label: 'Method',
	tool_body_fat_method_navy: 'U.S. Navy circumference',
	tool_body_fat_method_army: 'U.S. Army / DoD-style circumference',
	tool_body_fat_sex_label: 'Sex (formula tables)',
	tool_body_fat_sex_male: 'Male',
	tool_body_fat_sex_female: 'Female',
	tool_body_fat_height_label: 'Height (cm)',
	tool_body_fat_height_ph: 'e.g. 178',
	tool_body_fat_neck_label: 'Neck circumference (cm)',
	tool_body_fat_neck_ph: 'e.g. 40',
	tool_body_fat_waist_label: 'Waist circumference (cm)',
	tool_body_fat_waist_ph: 'e.g. 86',
	tool_body_fat_hip_label: 'Hip circumference (cm, female)',
	tool_body_fat_hip_ph: 'e.g. 96',
	tool_body_fat_result_label: 'Estimated body fat',
	tool_body_fat_result_note: 'Educational estimate only — not medical advice or a diagnosis.',
	tool_body_fat_err_input: 'Height, neck, and waist must be positive numbers.',
	tool_body_fat_err_hip: 'Female formulas need a positive hip circumference.',
	tool_body_fat_err_geom: 'Waist must be greater than neck (and waist+hip greater than neck for females).',
	tool_body_fat_how_title: 'How it works',
	tool_body_fat_how_body:
		'Enter sex, height, and tape measurements in centimetres. The tool converts to inches for the published log10 circumference formulas, then shows estimated body fat %. Skinfold stays in FAQ — same page.',
	tool_body_fat_formula_title: 'Formula and measurement assumptions',
	tool_body_fat_formula_body:
		'Male: %BF ≈ 86.010×log10(waist−neck) − 70.041×log10(height) + 36.387 (inches). Female: %BF ≈ 163.205×log10(waist+hip−neck) − 97.684×log10(height) + 78.387. Assumptions:',
	tool_body_fat_formula_item_1: 'Tape at standard Navy/DoD points; posture and clothing change results.',
	tool_body_fat_formula_item_2: 'Inputs are centimetres converted with 1 in = 2.54 cm before the log10 formulas.',
	tool_body_fat_formula_item_3: 'Estimates are educational illustrations, not DXA/Bod Pod clinical results or medical advice.',
	tool_body_fat_example_title: 'Example',
	tool_body_fat_example:
		'Example: male, Navy method, height 178 cm, neck 40 cm, waist 86 cm → about 15.3% body fat.',
	tool_body_fat_usecases_title: 'When to use it',
	tool_body_fat_usecase_1: 'Classwork: practice the Navy circumference body-fat formulas with fixed numbers.',
	tool_body_fat_usecase_2: 'Rough fitness tracking illustration before talking to a clinician (not a diagnosis).',
	tool_body_fat_usecase_3: 'Compare Navy vs Army labels on one page without a second URL.',
	tool_body_fat_faq_q1: 'What formula does this use?',
	tool_body_fat_faq_a1:
		'U.S. Navy / DoD-style log10 circumference formulas in inches after converting centimetre inputs.',
	tool_body_fat_faq_q2: 'Navy vs Army on this page?',
	tool_body_fat_faq_a2:
		'Both are circumference estimators in the same family. Labels differ for search clarity; measurement discipline still matters more than the label.',
	tool_body_fat_faq_q3: 'Is this medical advice?',
	tool_body_fat_faq_a3:
		'No. Results are educational estimates only and are not a diagnosis, treatment plan, or body-composition clinical test.',
	tool_body_fat_faq_q4: 'What about skinfold calipers?',
	tool_body_fat_faq_a4:
		'Skinfold equations need multiple site readings and trained technique. They are explained here in FAQ, not as a separate thin tool URL.',
	tool_body_fat_disclaimer:
		'Body fat estimates are educational illustrations only and are not medical advice, diagnosis, or a substitute for clinical body-composition testing. Talk to a qualified clinician for health decisions.',
	tool_body_fat_references:
		'U.S. Navy / DoD circumference method equations; ACE educational body-fat calculator notes; peer-reviewed circumference method literature.',
	tool_body_fat_ref_ace_label: 'ACE — Body Fat Calculator (educational)',
	tool_body_fat_ref_pmc_label: 'PMC — Circumference-based body fat methods',
};

export default en;
