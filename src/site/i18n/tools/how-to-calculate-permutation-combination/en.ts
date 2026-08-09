/**
 * i18n tool shard (how-to-calculate-permutation-combination / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_permutation_combination_title: "Permutation and Combination Calculator",
	tool_permutation_combination_description: "Calculate permutations P(n,r) and combinations C(n,r) for integers 0≤r≤n with factorial formulas. Example: n=5, r=2 → P=20, C=10. Browser-only counting process for order vs unordered picks.",
	tool_permutation_combination_calculate: "Calculate",
	tool_permutation_combination_sample: "Load sample",
	tool_permutation_combination_clear: "Clear",
	tool_permutation_combination_n_label: "n",
	tool_permutation_combination_n_ph: "e.g. 5",
	tool_permutation_combination_r_label: "r",
	tool_permutation_combination_r_ph: "e.g. 2",
	tool_permutation_combination_pOut_label: "P(n,r)",
	tool_permutation_combination_cOut_label: "C(n,r)",
	tool_permutation_combination_result_note: "P(n,r)=n!/(n−r)!; C(n,r)=n!/(r!(n−r)!). Requires integers 0≤r≤n.",
	tool_permutation_combination_err_generic: "Enter integers n≥0 and 0≤r≤n.",
	tool_permutation_combination_how_title: "How it works",
	tool_permutation_combination_how_body: "Enter n and r. Factorials are computed iteratively.",
	tool_permutation_combination_formula_title: "Formula",
	tool_permutation_combination_formula_body: "P = n×(n−1)×…×(n−r+1); C = P / r!. Notes:",
	tool_permutation_combination_formula_item_1: "r > n is rejected.",
	tool_permutation_combination_formula_item_2: "Non-integers are rejected.",
	tool_permutation_combination_formula_item_3: "Pair with quadratic / slope for algebra drills.",
	tool_permutation_combination_example_title: "Example",
	tool_permutation_combination_example: "Example: n=5, r=2 → P=20, C=10.",
	tool_permutation_combination_usecases_title: "When to use it",
	tool_permutation_combination_usecase_1: "Counting problems.",
	tool_permutation_combination_usecase_2: "Homework P/C.",
	tool_permutation_combination_usecase_3: "Compare related algebra tools.",
	tool_permutation_combination_faq_q1: "Sample?",
	tool_permutation_combination_faq_a1: "5P2=20, 5C2=10.",
	tool_permutation_combination_faq_q2: "r>n?",
	tool_permutation_combination_faq_a2: "Invalid.",
	tool_permutation_combination_faq_q3: "Large n?",
	tool_permutation_combination_faq_a3: "May lose precision in JS Number.",
	tool_permutation_combination_faq_q4: "Advice?",
	tool_permutation_combination_faq_a4: "Educational only.",
	tool_permutation_combination_article: "Permutations and combinations",
	tool_permutation_combination_disclaimer: "Educational permutations and combinations only — not professional advice.",
	tool_permutation_combination_references: "Standard textbook formulas.",
	tool_permutation_combination_ref_a_label: "Wikipedia — Permutation",
	tool_permutation_combination_ref_b_label: "Wikipedia — Combination",
};

export default en;
