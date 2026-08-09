/**
 * i18n tool shard (how-to-calculate-heart-rate / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_heart_rate_title: "Heart Rate Zone Calculator",
	tool_heart_rate_description: "Calculate estimated max heart rate (220−age) and simple training zones as percent ranges of max. Example: age 30 → max 190; moderate often ~50–70% of max. Educational only — not medical advice.",
	tool_heart_rate_calculate: "Calculate",
	tool_heart_rate_sample: "Load sample",
	tool_heart_rate_clear: "Clear",
	tool_heart_rate_age_label: "Age (years)",
	tool_heart_rate_age_ph: "e.g. 30",
	tool_heart_rate_maxOut_label: "Estimated max HR",
	tool_heart_rate_z1Out_label: "Zone 1 (50–60%)",
	tool_heart_rate_z2Out_label: "Zone 2 (60–70%)",
	tool_heart_rate_z3Out_label: "Zone 3 (70–85%)",
	tool_heart_rate_result_note: "max ≈ 220−age. Zones shown as bpm ranges from percent of max (educational 50–60 / 60–70 / 70–85).",
	tool_heart_rate_err_generic: "Enter age between 1 and 120.",
	tool_heart_rate_how_title: "How it works",
	tool_heart_rate_how_body: "Enter age to sketch max HR and three percent-based zones. Formulas vary by lab — this is a classroom classic, not a clinical test.",
	tool_heart_rate_formula_title: "Formula",
	tool_heart_rate_formula_body: "max=220−age; zone = [lo%, hi%] × max. Notes:",
	tool_heart_rate_formula_item_1: "220−age is a rough teaching estimate.",
	tool_heart_rate_formula_item_2: "Stop exercise and seek care for symptoms — not advice.",
	tool_heart_rate_formula_item_3: "Pair with macros / BMR–TDEE for education.",
	tool_heart_rate_example_title: "Example",
	tool_heart_rate_example: "Example: age 30 → max 190; moderate band often cited near 50–70% of max.",
	tool_heart_rate_usecases_title: "When to use it",
	tool_heart_rate_usecase_1: "Classroom zone math.",
	tool_heart_rate_usecase_2: "Compare percent bands.",
	tool_heart_rate_usecase_3: "Educational pairing with macros.",
	tool_heart_rate_faq_q1: "Sample?",
	tool_heart_rate_faq_a1: "Age 30 → max 190.",
	tool_heart_rate_faq_q2: "Medical advice?",
	tool_heart_rate_faq_a2: "No.",
	tool_heart_rate_faq_q3: "Why these %?",
	tool_heart_rate_faq_a3: "Common teaching bands; protocols differ.",
	tool_heart_rate_faq_q4: "Symptoms?",
	tool_heart_rate_faq_a4: "Seek a clinician — not this tool.",
	tool_heart_rate_article: "Heart-rate zones",
	tool_heart_rate_disclaimer: "Educational heart rate zones only — not medical advice. Consult a qualified clinician.",
	tool_heart_rate_references: "CDC / ACSM-style educational references.",
	tool_heart_rate_ref_a_label: "Wikipedia — Heart rate",
	tool_heart_rate_ref_b_label: "CDC heart rate",
};

export default en;
