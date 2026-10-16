/**
 * i18n 工具分片（how-to-calculate-body-fat / en）。
 * 海军/陆军系围度体脂估算；厘米输入、英寸公式；YMYL 教育用途。
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_body_fat_title: "Body Fat Calculator — Navy Circumference Estimate with Army Label",
	tool_body_fat_description: "Estimate body fat % with U.S. Navy circumference formulas (Army/DoD-style label on the same page). Example: male 178 cm height, neck 40 cm, waist 86 cm → about 15.3%. cm in, inches in the log10 formulas. Educational only — not medical advice or a diagnosis.",
	tool_body_fat_article: "Enter sex, height, and tape measures in centimetres. The page converts to inches for published log10 circumference formulas and shows estimated body fat % with step lines.",
	tool_body_fat_desc: "Navy circumference body-fat estimate; Army label; cm→inches; educational only.",

	tool_body_fat_safety_banner: "Educational estimate only. Circumference formulas are not DXA, Bod Pod, or a medical diagnosis. Not medical advice.",
	tool_body_fat_hint: "Use centimetres. Female formulas need hip. Waist must be greater than neck (and waist+hip greater than neck for females). Army label uses the same educational circumference equations as Navy on this page.",
	tool_body_fat_method_label: "Method label",
	tool_body_fat_method_navy: "U.S. Navy circumference",
	tool_body_fat_method_army: "U.S. Army / DoD-style circumference",
	tool_body_fat_sex_label: "Sex (formula tables)",
	tool_body_fat_sex_male: "Male",
	tool_body_fat_sex_female: "Female",
	tool_body_fat_height_label: "Height (cm)",
	tool_body_fat_height_ph: "e.g. 178",
	tool_body_fat_neck_label: "Neck circumference (cm)",
	tool_body_fat_neck_ph: "e.g. 40",
	tool_body_fat_waist_label: "Waist circumference (cm)",
	tool_body_fat_waist_ph: "e.g. 86",
	tool_body_fat_hip_label: "Hip circumference (cm, female)",
	tool_body_fat_hip_ph: "e.g. 96",
	tool_body_fat_calculate: "Calculate",
	tool_body_fat_sample: "Load sample",
	tool_body_fat_clear: "Clear",
	tool_body_fat_result_label: "Estimated body fat",
	tool_body_fat_steps_title: "Steps",
	tool_body_fat_step_convert_tpl: "Convert cm to inches (÷ 2.54): height {hIn} in, neck {nIn} in, waist {wIn} in{hipPart}.",
	tool_body_fat_step_hip_part_tpl: ", hip {hipIn} in",
	tool_body_fat_step_male_tpl: "Male %BF ≈ 86.010×log10(waist−neck) − 70.041×log10(height) + 36.387 = {pct}%.",
	tool_body_fat_step_female_tpl: "Female %BF ≈ 163.205×log10(waist+hip−neck) − 97.684×log10(height) − 78.387 = {pct}%.",
	tool_body_fat_result_note: "Educational estimate only — not medical advice or a diagnosis. Tape placement and posture change results.",
	tool_body_fat_err_input: "Height, neck, and waist must be positive numbers.",
	tool_body_fat_err_hip: "Female formulas need a positive hip circumference.",
	tool_body_fat_err_geom: "Waist must be greater than neck (and waist+hip greater than neck for females).",

	tool_body_fat_how_title: "How to use the body fat calculator",
	tool_body_fat_how_body: "Choose Navy or Army label, enter sex and centimetre tape measures, then calculate. Load sample cycles a male Navy case and a female case.",
	tool_body_fat_how_item_1: "Select method label (same educational circumference equations) and sex.",
	tool_body_fat_how_item_2: "Enter height, neck, and waist in centimetres (plus hip if female).",
	tool_body_fat_how_item_3: "Click Calculate to see estimated % and step lines.",
	tool_body_fat_how_item_4: "Use Load sample to switch male ~15.3% and female ~26.7% demo numbers.",

	tool_body_fat_why_choose_title: "What this body fat calculator gives you",
	tool_body_fat_why_choose_item_1: "Navy circumference formulas with an Army/DoD-style label on one URL.",
	tool_body_fat_why_choose_item_2: "Centimetre inputs converted to inches before log10 formulas.",
	tool_body_fat_why_choose_item_3: "Step lines that show the conversion and equation plug-in.",
	tool_body_fat_why_choose_item_4: "Sample rotation for male and female cases.",
	tool_body_fat_why_choose_item_5: "Clear YMYL boundary: educational only — not a diagnosis.",

	tool_body_fat_formula_title: "Formula and measurement assumptions",
	tool_body_fat_formula_body: "Male: %BF ≈ 86.010×log10(waist−neck) − 70.041×log10(height) + 36.387 (inches). Female: %BF ≈ 163.205×log10(waist+hip−neck) − 97.684×log10(height) − 78.387.",
	tool_body_fat_formula_item_1: "Tape at standard Navy/DoD points; posture and clothing change results.",
	tool_body_fat_formula_item_2: "Inputs are centimetres converted with 1 in = 2.54 cm before the log10 formulas.",
	tool_body_fat_formula_item_3: "Army label here uses the same educational circumference equations as Navy.",
	tool_body_fat_formula_item_4: "Estimates are not DXA/Bod Pod clinical results or medical advice.",
	tool_body_fat_formula_item_5: "Skinfold calipers need multiple sites — explained in FAQ, not a separate URL.",

	tool_body_fat_example_title: "Worked examples",
	tool_body_fat_example: "Load sample starts male Navy: height 178 cm, neck 40 cm, waist 86 cm → about 15.3%. Next loads female 165/34/74/96 cm → about 26.7%.",

	tool_body_fat_usecases_title: "When to use a body fat calculator",
	tool_body_fat_usecase_1: "Classwork: practice Navy circumference formulas with fixed numbers.",
	tool_body_fat_usecase_2: "Rough fitness tracking illustration before talking to a clinician (not a diagnosis).",
	tool_body_fat_usecase_3: "Compare Navy vs Army labels on one page without a second URL.",
	tool_body_fat_usecase_4: "See centimetre-to-inch conversion steps beside the percentage.",

	tool_body_fat_faq_q1: "What formula does this use?",
	tool_body_fat_faq_a1: "U.S. Navy / DoD-style log10 circumference formulas in inches after converting centimetre inputs.",
	tool_body_fat_faq_q2: "Navy vs Army on this page?",
	tool_body_fat_faq_a2: "Both are circumference estimators in the same family. Labels differ for search clarity; measurement discipline still matters more than the label.",
	tool_body_fat_faq_q3: "Is this medical advice?",
	tool_body_fat_faq_a3: "No. Results are educational estimates only and are not a diagnosis, treatment plan, or clinical body-composition test.",
	tool_body_fat_faq_q4: "What about skinfold calipers?",
	tool_body_fat_faq_a4: "Skinfold equations need multiple site readings and trained technique. They are explained here in FAQ, not as a separate thin tool URL.",
	tool_body_fat_faq_q5: "Why convert to inches?",
	tool_body_fat_faq_a5: "The published log10 equations are in inches. This page accepts centimetres and converts with 2.54.",
	tool_body_fat_faq_q6: "Can waist equal neck?",
	tool_body_fat_faq_a6: "No. The geometry requires waist > neck (and waist+hip > neck for females).",

	tool_body_fat_disclaimer: "Body fat estimates are educational illustrations only and are not medical advice, diagnosis, or a substitute for clinical body-composition testing. Talk to a qualified clinician for health decisions.",
	tool_body_fat_references: "U.S. Navy / DoD circumference method equations; ACE educational body-fat calculator notes; peer-reviewed circumference method literature.",
	tool_body_fat_ref_ace_label: "ACE — Body Fat Calculator (educational)",
	tool_body_fat_ref_pmc_label: "PMC — Circumference-based body fat methods",
};

export default en;
