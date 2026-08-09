/**
 * i18n tool shard (how-to-calculate-rule-of-72 / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_rule_of_72_title: "Rule of 72 Calculator — Years to Double",
	tool_rule_of_72_description: "Estimate years to double with the Rule of 72: years ≈ 72 ÷ annual rate%. Sample: 6% → about 12 years. A quick teaching approximation — not investment advice Calculate approximate doubling years with the Rule of 72 formula; example 6% → 12 years.",
	tool_rule_of_72_calculate: "Calculate",
	tool_rule_of_72_sample: "Load sample",
	tool_rule_of_72_clear: "Clear",
	tool_rule_of_72_rate_label: "Annual rate %",
	tool_rule_of_72_rate_ph: "e.g. 6",
	tool_rule_of_72_yearsOut_label: "Approx. years to double",
	tool_rule_of_72_result_note: "Years ≈ 72 / rate%. Rule-of-thumb only — not a precise compound forecast.",
	tool_rule_of_72_err_generic: "Enter a rate > 0.",
	tool_rule_of_72_how_title: "How it works",
	tool_rule_of_72_how_body: "Enter an annual percentage rate. The classic Rule of 72 divides 72 by that rate to sketch doubling time.",
	tool_rule_of_72_formula_title: "Formula",
	tool_rule_of_72_formula_body: "Years ≈ 72 / r_percent. Notes:",
	tool_rule_of_72_formula_item_1: "Works best for moderate rates; very high/low rates are less accurate.",
	tool_rule_of_72_formula_item_2: "Assumes annual compounding style intuition, not a full schedule.",
	tool_rule_of_72_formula_item_3: "Compare with compound-interest / CAGR tools for precise math.",
	tool_rule_of_72_example_title: "Example",
	tool_rule_of_72_example: "Example: rate 6% → 72/6 = 12 years.",
	tool_rule_of_72_usecases_title: "When to use it",
	tool_rule_of_72_usecase_1: "Classroom doubling-time intuition.",
	tool_rule_of_72_usecase_2: "Quick sketch before precise FV math.",
	tool_rule_of_72_usecase_3: "Pair with CAGR and compound interest.",
	tool_rule_of_72_faq_q1: "Sample?",
	tool_rule_of_72_faq_a1: "6% → 12 years.",
	tool_rule_of_72_faq_q2: "Exact?",
	tool_rule_of_72_faq_a2: "No — a teaching approximation.",
	tool_rule_of_72_faq_q3: "Why 72?",
	tool_rule_of_72_faq_a3: "A convenient number near the natural-log doubling math.",
	tool_rule_of_72_faq_q4: "Advice?",
	tool_rule_of_72_faq_a4: "Educational only.",
	tool_rule_of_72_article: "Rule of 72",
	tool_rule_of_72_disclaimer: "Educational rule of 72 only — not financial, tax, or investment advice.",
	tool_rule_of_72_references: "Investopedia and standard textbook formulas.",
	tool_rule_of_72_ref_a_label: "Investopedia — Rule of 72",
	tool_rule_of_72_ref_b_label: "Investopedia — Compound interest",
};

export default en;
