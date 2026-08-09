/**
 * i18n tool shard (how-to-calculate-ohms-law / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_ohms_law_title: "Ohm’s Law Calculator — Resistance and Power",
	tool_ohms_law_description: "Calculate resistance R=V/I and power P=VI from voltage and current with Ohm’s-law formulas. Example: V=12, I=2 → R=6 Ω, P=24 W. Browser-only circuit math for a quick process check.",
	tool_ohms_law_calculate: "Calculate",
	tool_ohms_law_sample: "Load sample",
	tool_ohms_law_clear: "Clear",
	tool_ohms_law_V_label: "Voltage V",
	tool_ohms_law_V_ph: "e.g. 12",
	tool_ohms_law_I_label: "Current I",
	tool_ohms_law_I_ph: "e.g. 2",
	tool_ohms_law_rOut_label: "Resistance R",
	tool_ohms_law_pOut_label: "Power P",
	tool_ohms_law_result_note: "R = V/I; P = V×I (solve R from V and I).",
	tool_ohms_law_err_generic: "Enter finite V and I with I ≠ 0.",
	tool_ohms_law_how_title: "How it works",
	tool_ohms_law_how_body: "Enter voltage and current. This mode solves resistance and also shows power.",
	tool_ohms_law_formula_title: "Formula",
	tool_ohms_law_formula_body: "R=V/I; P=VI. Notes:",
	tool_ohms_law_formula_item_1: "Units must be consistent (e.g., volts and amperes → ohms, watts).",
	tool_ohms_law_formula_item_2: "Ideal DC form only.",
	tool_ohms_law_formula_item_3: "Pair with density / velocity tools.",
	tool_ohms_law_example_title: "Example",
	tool_ohms_law_example: "Example: V=12, I=2 → R=6, P=24.",
	tool_ohms_law_usecases_title: "When to use it",
	tool_ohms_law_usecase_1: "Electronics homework.",
	tool_ohms_law_usecase_2: "Quick bench check.",
	tool_ohms_law_usecase_3: "Compare related physics tools.",
	tool_ohms_law_faq_q1: "Sample?",
	tool_ohms_law_faq_a1: "12 V / 2 A → 6 Ω, 24 W.",
	tool_ohms_law_faq_q2: "AC?",
	tool_ohms_law_faq_a2: "Not modeled.",
	tool_ohms_law_faq_q3: "I=0?",
	tool_ohms_law_faq_a3: "Rejected.",
	tool_ohms_law_faq_q4: "Advice?",
	tool_ohms_law_faq_a4: "Educational only.",
	tool_ohms_law_article: "Ohm's law",
	tool_ohms_law_disclaimer: "Educational Ohm's law only — not professional advice.",
	tool_ohms_law_references: "Standard textbook formulas.",
	tool_ohms_law_ref_a_label: "Wikipedia — Ohm's law",
	tool_ohms_law_ref_b_label: "Wikipedia — Electric power",
};

export default en;
