/**
 * i18n tool shard (how-to-calculate-p-value / en).
 * One- or two-tailed normal p from z via erfc; critical-z chips.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_p_value_title: "P-Value Calculator — From a Z-Score (Normal Tail)",
	tool_p_value_description: "Get a one-tailed or two-tailed normal p-value from a z-score using an erfc approximation. Example: z = 1.96 → two-tailed p ≈ 0.05. Assumes a continuous standard normal — not a t, χ² or exact test. Educational only.",
	tool_p_value_article: "Approximate one- or two-tailed standard-normal p-values from a z-score with erfc, critical-z shortcuts and step-by-step working.",
	tool_p_value_desc: "One- or two-tailed normal p from z. Shows both tails and |z|.",

	tool_p_value_mode_label: "Tail type",
	tool_p_value_mode_two: "Two-tailed",
	tool_p_value_mode_one: "One-tailed",
	tool_p_value_hint: "Uses a standard normal model. One-tailed p is half of the two-tailed p for a symmetric normal (same |z|).",
	tool_p_value_z_label: "Z-score",
	tool_p_value_z_ph: "e.g. 1.96",
	tool_p_value_chips_label: "Common critical z shortcuts",
	tool_p_value_chip_1645: "z = 1.645",
	tool_p_value_chip_196: "z = 1.96",
	tool_p_value_chip_2576: "z = 2.576",
	tool_p_value_calculate: "Calculate",
	tool_p_value_sample: "Load sample",
	tool_p_value_clear: "Clear",
	tool_p_value_pOut_label: "Two-tailed p-value",
	tool_p_value_pOneOut_label: "One-tailed p-value",
	tool_p_value_altOut_label: "Other tail type",
	tool_p_value_absOut_label: "|z|",
	tool_p_value_steps_title: "Steps",
	tool_p_value_step_abs_tpl: "Use absolute value: |z| = |{z}| = {abs}.",
	tool_p_value_step_two_tpl: "Two-tailed p ≈ erfc(|z| / √2) = erfc({abs} / √2) ≈ {p}.",
	tool_p_value_step_one_tpl: "One-tailed p ≈ two-tailed / 2 = {two} / 2 ≈ {one}.",
	tool_p_value_result_note: "Standard normal approximation for learning. Not a t-test, χ², exact binomial, or study-design service. A small p does not by itself prove a claim.",
	tool_p_value_err_generic: "Enter a finite z-score (for example 1.96).",

	tool_p_value_how_title: "How to use the p-value calculator",
	tool_p_value_how_body: "Choose two-tailed or one-tailed, enter z (or tap a critical-z chip), then Calculate. Load sample cycles 1.96 two-tailed, 1.96 one-tailed, z=0 and z=2.576.",
	tool_p_value_how_item_1: "Pick two-tailed or one-tailed.",
	tool_p_value_how_item_2: "Enter a finite z-score, or tap 1.645 / 1.96 / 2.576.",
	tool_p_value_how_item_3: "Click Calculate to see the chosen p, the other tail type and steps.",
	tool_p_value_how_item_4: "Use Load sample to rotate common textbook checkpoints.",

	tool_p_value_why_choose_title: "What this p-value calculator gives you",
	tool_p_value_why_choose_item_1: "Both one-tailed and two-tailed normal p from the same z.",
	tool_p_value_why_choose_item_2: "Critical-z chips for the familiar 10% / 5% / 1% two-tailed checkpoints.",
	tool_p_value_why_choose_item_3: "Step lines that show erfc(|z|/√2) and the one-tailed half.",
	tool_p_value_why_choose_item_4: "Clear assumption: continuous standard normal only.",
	tool_p_value_why_choose_item_5: "Honest boundary: not a full hypothesis-test suite or proof of a claim.",

	tool_p_value_formula_title: "Normal p-value formulas",
	tool_p_value_formula_body: "Under a continuous standard normal, two-tailed p ≈ erfc(|z| / √2). One-tailed p is half of that for a symmetric normal.",
	tool_p_value_formula_item_1: "Two-tailed p ≈ erfc(|z| / √2). Example: |z|=1.96 → p ≈ 0.05.",
	tool_p_value_formula_item_2: "One-tailed p ≈ two-tailed / 2. Same |z|=1.96 → one-tailed ≈ 0.025.",
	tool_p_value_formula_item_3: "Uses a numerical erfc approximation — learning accuracy, not certified software.",
	tool_p_value_formula_item_4: "Assumes standard normal z, not t, χ² or discrete exact tests.",
	tool_p_value_formula_item_5: "z = 0 → two-tailed p = 1; larger |z| → smaller p.",

	tool_p_value_example_title: "Worked examples",
	tool_p_value_example: "Load sample starts with z=1.96 two-tailed → p≈0.05. Next shows the one-tailed half ≈0.025. Then z=0 → p=1. The last sample uses z=2.576 (about the 1% two-tailed critical value).",

	tool_p_value_usecases_title: "When to use a p-value calculator",
	tool_p_value_usecase_1: "Homework: convert a known z to an approximate normal-tail p.",
	tool_p_value_usecase_2: "Quick check after computing z from a mean and SD on the related z-score page.",
	tool_p_value_usecase_3: "Compare the familiar 1.96 ↔ 0.05 rule of thumb with a numeric output.",
	tool_p_value_usecase_4: "See one-tailed vs two-tailed side by side for the same |z|.",

	tool_p_value_faq_q1: "Is this one-tailed or two-tailed?",
	tool_p_value_faq_a1: "Both. Choose the mode. Two-tailed covers ±|z|; one-tailed is half of that under a symmetric normal.",
	tool_p_value_faq_q2: "What distribution is assumed?",
	tool_p_value_faq_a2: "A continuous standard normal for z. It is not a t-test, χ², or exact binomial calculator.",
	tool_p_value_faq_q3: "Why is z = 1.96 close to 0.05?",
	tool_p_value_faq_a3: "Under a standard normal, |z| ≈ 1.96 is the familiar critical value for a two-tailed 5% test; the erfc approximation returns about 0.05.",
	tool_p_value_faq_q4: "Does a small p prove the alternative hypothesis?",
	tool_p_value_faq_a4: "No. A p-value is a tail probability under stated assumptions, not automatic proof of a claim.",
	tool_p_value_faq_q5: "How is one-tailed related to two-tailed here?",
	tool_p_value_faq_a5: "For a symmetric normal, one-tailed p ≈ two-tailed p ÷ 2 for the same |z|.",
	tool_p_value_faq_q6: "Can I enter a negative z?",
	tool_p_value_faq_a6: "Yes. The page uses |z|, so −1.96 and 1.96 give the same two-tailed p.",
	tool_p_value_faq_q7: "Where do I get the z-score first?",
	tool_p_value_faq_a7: "Use the related z-score calculator if you start from a raw score, mean and SD.",

	tool_p_value_disclaimer: "Educational approximation under a standard-normal model only — not a substitute for statistical software, study design or professional analysis.",
	tool_p_value_references: "Wikipedia p-value and normal distribution; complementary error function for normal tails.",
	tool_p_value_ref_pvalue_label: "Wikipedia — P-value",
	tool_p_value_ref_normal_label: "Wikipedia — Normal distribution",
};

export default en;
