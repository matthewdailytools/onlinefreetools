/**
 * i18n tool shard (how-to-calculate-one-rep-max / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_one_rep_max_title: "One-Rep Max Calculator (Epley)",
	tool_one_rep_max_description: "Estimate one-rep max with the Epley formula: 1RM ≈ w×(1+reps/30). Sample: 100 for 5 reps → ≈116.67. Educational estimate with a safety note — not coaching advice.",
	tool_one_rep_max_calculate: "Calculate",
	tool_one_rep_max_sample: "Load sample",
	tool_one_rep_max_clear: "Clear",
	tool_one_rep_max_weight_label: "Weight",
	tool_one_rep_max_weight_ph: "e.g. 100",
	tool_one_rep_max_reps_label: "Reps",
	tool_one_rep_max_reps_ph: "e.g. 5",
	tool_one_rep_max_ormOut_label: "Estimated 1RM",
	tool_one_rep_max_result_note: "Epley: 1RM ≈ weight × (1 + reps/30). Warm up; do not max on a rough estimate.",
	tool_one_rep_max_err_generic: "Enter weight > 0 and integer reps ≥ 1 (typically ≤ 10 for this estimate).",
	tool_one_rep_max_how_title: "How it works",
	tool_one_rep_max_how_body: "Enter a submaximal weight and successful reps. Treat the result as a classroom estimate, not a prescription.",
	tool_one_rep_max_formula_title: "Formula",
	tool_one_rep_max_formula_body: "1RM ≈ w(1+r/30). Notes:",
	tool_one_rep_max_formula_item_1: "Accuracy falls as reps get high.",
	tool_one_rep_max_formula_item_2: "Stop if form breaks — safety first.",
	tool_one_rep_max_formula_item_3: "Pair with pace / body-fat educational tools.",
	tool_one_rep_max_example_title: "Example",
	tool_one_rep_max_example: "Example: w=100, reps=5 → 100×(1+5/30)=116.67.",
	tool_one_rep_max_usecases_title: "When to use it",
	tool_one_rep_max_usecase_1: "Classroom strength math.",
	tool_one_rep_max_usecase_2: "Rough program sketch.",
	tool_one_rep_max_usecase_3: "Compare related fitness tools.",
	tool_one_rep_max_faq_q1: "Sample?",
	tool_one_rep_max_faq_a1: "100×5 → ≈116.67.",
	tool_one_rep_max_faq_q2: "Safe to test 1RM?",
	tool_one_rep_max_faq_a2: "Not advice — use care and coaching.",
	tool_one_rep_max_faq_q3: "Other formulas?",
	tool_one_rep_max_faq_a3: "This page uses Epley only.",
	tool_one_rep_max_faq_q4: "Advice?",
	tool_one_rep_max_faq_a4: "Educational only.",
	tool_one_rep_max_article: "One-rep max (Epley)",
	tool_one_rep_max_disclaimer: "Educational one-rep max safety estimate only — not professional advice.",
	tool_one_rep_max_references: "Standard textbook formulas.",
	tool_one_rep_max_ref_a_label: "Wikipedia — One-repetition maximum",
	tool_one_rep_max_ref_b_label: "Wikipedia — Strength training",
};

export default en;
