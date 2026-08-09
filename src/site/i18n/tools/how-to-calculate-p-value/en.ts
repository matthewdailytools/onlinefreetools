/**
 * i18n tool shard (how-to-calculate-p-value / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_p_value_title: "P-Value Calculator — How to Calculate a P-Value",
	tool_p_value_description: "Two-tailed normal p-value from a z-score via an erfc approximation. Example: z = 1.96 → two-tailed p ≈ 0.05. States standard-normal and two-tail assumptions clearly. Runs in your browser for coursework and quick learning checks.",
	tool_p_value_calculate: "Calculate",
	tool_p_value_sample: "Load sample",
	tool_p_value_clear: "Clear",
	tool_p_value_z_label: "Z-score",
	tool_p_value_z_ph: "e.g. 1.96",
	tool_p_value_pOut_label: "Two-tailed p-value",
	tool_p_value_result_note: "Standard normal, two-tailed approximation for learning — not a full hypothesis-test suite.",
	tool_p_value_err_generic: "Enter a finite z-score.",
	tool_p_value_how_title: "How it works",
	tool_p_value_how_body: "Enter a z-score from a standard normal test. The tool reports a two-tailed p-value using an erfc approximation of the normal tail. Assumptions stay visible: standard normal sampling model and both tails. Runs in your browser for coursework and quick checks.",
	tool_p_value_formula_title: "Formula and assumptions",
	tool_p_value_formula_body: "Two-tailed p ≈ erfc(|z| / √2) under a standard normal. Keep these limits in mind:",
	tool_p_value_formula_item_1: "Assumes a continuous standard normal z (mean 0, variance 1), not a t, χ², or discrete exact test.",
	tool_p_value_formula_item_2: "Two-tailed only on this page — both sides of ±|z| are counted.",
	tool_p_value_formula_item_3: "Uses a numerical erfc approximation; results are for learning, not certified statistical software.",
	tool_p_value_formula_item_4: "A small p-value does not by itself prove a scientific claim.",
	tool_p_value_example_title: "Example",
	tool_p_value_example: "Example: z = 1.96 → two-tailed p ≈ erfc(1.96 / √2) ≈ 0.05 (about 0.049996 with this approximation).",
	tool_p_value_usecases_title: "When to use it",
	tool_p_value_usecase_1: "Homework: convert a known z to an approximate two-tailed p.",
	tool_p_value_usecase_2: "Quick check after computing z from a mean and SD elsewhere.",
	tool_p_value_usecase_3: "Compare the familiar 1.96 ↔ 0.05 rule of thumb with a numeric output.",
	tool_p_value_faq_q1: "Is this one-tailed or two-tailed?",
	tool_p_value_faq_a1: "Two-tailed. The reported p covers both sides beyond ±|z| under a standard normal.",
	tool_p_value_faq_q2: "What distribution is assumed?",
	tool_p_value_faq_a2: "A continuous standard normal for z. It is not a t-test, χ², or exact binomial calculator.",
	tool_p_value_faq_q3: "Why is z = 1.96 close to 0.05?",
	tool_p_value_faq_a3: "Under a standard normal, |z| ≈ 1.96 is the familiar critical value for a two-tailed 5% test; the page’s erfc approximation returns about 0.05.",
	tool_p_value_faq_q4: "Does a small p prove the alternative hypothesis?",
	tool_p_value_faq_a4: "No. A p-value is a tail probability under stated assumptions, not automatic proof of a claim.",
	tool_p_value_disclaimer: "Results are educational approximations under a standard-normal two-tailed model and are not a substitute for statistical software, study design, or professional analysis.",
	tool_p_value_references: "Wikipedia p-value and normal distribution articles; complementary error function for normal tails.",
	tool_p_value_ref_pvalue_label: "Wikipedia — P-value",
	tool_p_value_ref_normal_label: "Wikipedia — Normal distribution",
	tool_p_value_article: "Compute a two-tailed normal p-value from a z-score with an erfc approximation. States standard-normal and two-tail assumptions for learning.",
};

export default en;
