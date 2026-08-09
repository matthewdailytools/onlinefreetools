/**
 * i18n tool shard (how-to-calculate-circle / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_circle_title: "Circle Calculator — Area and Circumference",
	tool_circle_description: "Calculate circle area (πr²) and circumference (2πr) from the radius. Example: r=7 → area ≈ 153.94, circumference ≈ 43.98. Browser-only geometry with a clear formula check.",
	tool_circle_calculate: "Calculate",
	tool_circle_sample: "Load sample",
	tool_circle_clear: "Clear",
	tool_circle_r_label: "Radius",
	tool_circle_r_ph: "e.g. 7",
	tool_circle_areaOut_label: "Area",
	tool_circle_circOut_label: "Circumference",
	tool_circle_result_note: "Area = πr²; circumference = 2πr (JS Math.PI).",
	tool_circle_err_generic: "Enter radius > 0.",
	tool_circle_how_title: "How it works",
	tool_circle_how_body: "Enter the radius. Results use the browser Math.PI constant.",
	tool_circle_formula_title: "Formula",
	tool_circle_formula_body: "A=πr²; C=2πr. Notes:",
	tool_circle_formula_item_1: "Diameter is not a separate input — use r = d/2.",
	tool_circle_formula_item_2: "Units are those of r, squared for area.",
	tool_circle_formula_item_3: "Pair with triangle / volume tools.",
	tool_circle_example_title: "Example",
	tool_circle_example: "Example: r=7 → area ≈ 153.94, circumference ≈ 43.98.",
	tool_circle_usecases_title: "When to use it",
	tool_circle_usecase_1: "Geometry homework.",
	tool_circle_usecase_2: "Quick circle check.",
	tool_circle_usecase_3: "Compare related shape tools.",
	tool_circle_faq_q1: "Sample?",
	tool_circle_faq_a1: "r=7 → ≈153.94 and ≈43.98.",
	tool_circle_faq_q2: "Diameter?",
	tool_circle_faq_a2: "Halve it to get r.",
	tool_circle_faq_q3: "Exact π?",
	tool_circle_faq_a3: "Uses Math.PI.",
	tool_circle_faq_q4: "Advice?",
	tool_circle_faq_a4: "Educational only.",
	tool_circle_article: "Circle area and circumference",
	tool_circle_disclaimer: "Educational circle only — not professional advice.",
	tool_circle_references: "Standard textbook formulas.",
	tool_circle_ref_a_label: "Wikipedia — Circle",
	tool_circle_ref_b_label: "Wikipedia — Circumference",
};

export default en;
