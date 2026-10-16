/**
 * i18n tool shard (how-to-calculate-z-score / en).
 * Convert raw score ↔ z-score with z = (x − mean) / SD; steps and SD > 0 guard.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_z_score_title: "Z-Score Calculator — Convert Raw Score ↔ Standard Score",
	tool_z_score_description: "Convert a raw score to a z-score with z = (x − mean) / SD, or reverse a z-score back to a raw value. Example: x = 85, mean = 70, SD = 10 → z = 1.5. Requires SD > 0. Educational linear scaling only — not a normality test or p-value.",
	tool_z_score_article: "Compute a standard score from a raw value, mean and SD, or recover the raw score from z, with step-by-step working.",
	tool_z_score_desc: "Raw score ↔ z-score with z = (x − mean) / SD. Shows steps and |z|.",

	tool_z_score_mode_label: "What do you want to find?",
	tool_z_score_mode_z: "Z-score from raw score",
	tool_z_score_mode_x: "Raw score from z-score",
	tool_z_score_hint: "Enter the mean and a positive standard deviation. Pick whether you start from a raw score or from z.",
	tool_z_score_x_label: "Raw score (x)",
	tool_z_score_x_ph: "e.g. 85",
	tool_z_score_z_label: "Z-score (z)",
	tool_z_score_z_ph: "e.g. 1.5",
	tool_z_score_mean_label: "Mean (μ)",
	tool_z_score_mean_ph: "e.g. 70",
	tool_z_score_sd_label: "Standard deviation (σ)",
	tool_z_score_sd_ph: "e.g. 10",
	tool_z_score_calculate: "Calculate",
	tool_z_score_sample: "Load sample",
	tool_z_score_clear: "Clear",
	tool_z_score_zOut_label: "Z-score",
	tool_z_score_xOut_label: "Raw score",
	tool_z_score_diffOut_label: "x − mean",
	tool_z_score_absOut_label: "|z| (SDs from mean)",
	tool_z_score_steps_title: "Steps",
	tool_z_score_step_z_tpl: "z = (x − mean) / SD = ({x} − {mean}) / {sd} = {z}.",
	tool_z_score_step_x_tpl: "x = mean + z × SD = {mean} + {z} × {sd} = {x}.",
	tool_z_score_step_diff_tpl: "Difference from mean: x − mean = {x} − {mean} = {diff}.",
	tool_z_score_step_abs_tpl: "Distance in SDs: |z| = |{z}| = {abs}.",
	tool_z_score_result_note: "Algebra of z does not require normality; many follow-on uses (normal p-values) do. Educational only — not statistical software or study design.",
	tool_z_score_err_generic: "Enter finite numbers for the active fields, and a standard deviation greater than 0 (for example x=85, mean=70, SD=10).",

	tool_z_score_how_title: "How to use the z-score calculator",
	tool_z_score_how_body: "Choose raw→z or z→raw, enter mean and SD > 0, then Calculate. Load sample cycles 85/70/10 → 1.5, reverse 1.5 → 85, mean-equals-x → 0, and a below-mean score.",
	tool_z_score_how_item_1: "Pick Z-score from raw score or Raw score from z-score.",
	tool_z_score_how_item_2: "Enter mean and a positive standard deviation.",
	tool_z_score_how_item_3: "Enter the raw score or the z-score, depending on the mode.",
	tool_z_score_how_item_4: "Click Calculate to see the answer, x−mean, |z| and step lines.",

	tool_z_score_why_choose_title: "What this z-score calculator gives you",
	tool_z_score_why_choose_item_1: "Both directions: raw score → z, or z → raw score.",
	tool_z_score_why_choose_item_2: "Step lines that plug your numbers into z = (x − μ) / σ.",
	tool_z_score_why_choose_item_3: "A clear SD > 0 guard so division by zero never runs.",
	tool_z_score_why_choose_item_4: "|z| shown as how many standard deviations from the mean.",
	tool_z_score_why_choose_item_5: "Honest boundary: linear scaling only — not a normality test or p-value.",

	tool_z_score_formula_title: "Z-score formulas",
	tool_z_score_formula_body: "A z-score (standard score) rescales a value relative to a stated mean and standard deviation. Units cancel; z is dimensionless.",
	tool_z_score_formula_item_1: "z = (x − μ) / σ. Example: (85 − 70) / 10 = 1.5.",
	tool_z_score_formula_item_2: "x = μ + z × σ. Example: 70 + 1.5 × 10 = 85.",
	tool_z_score_formula_item_3: "σ must be positive; zero or negative SD is rejected.",
	tool_z_score_formula_item_4: "z = 0 when x equals the mean; negative z means below the mean.",
	tool_z_score_formula_item_5: "Algebra does not require normality; normal-tail p-values do — use the related p-value page.",

	tool_z_score_example_title: "Worked examples",
	tool_z_score_example: "Load sample starts with x=85, mean=70, SD=10 → z=1.5. Next reverses z=1.5 to x=85. Then x=mean → z=0. The last sample uses x=55 → z=−1.5 (one and a half SDs below the mean).",

	tool_z_score_usecases_title: "When to use a z-score calculator",
	tool_z_score_usecase_1: "Homework: convert a test score to a standard score with visible steps.",
	tool_z_score_usecase_2: "Compare scores from distributions with different means or spreads.",
	tool_z_score_usecase_3: "Recover a raw score when you already know z, mean and SD.",
	tool_z_score_usecase_4: "Prepare a z to feed into a separate normal-tail p-value check.",

	tool_z_score_faq_q1: "What does z = 1.5 mean?",
	tool_z_score_faq_a1: "The raw score is 1.5 standard deviations above the stated mean.",
	tool_z_score_faq_q2: "Can SD be zero?",
	tool_z_score_faq_a2: "No. Division by zero is undefined; enter SD > 0.",
	tool_z_score_faq_q3: "How do you convert a z-score back to a raw score?",
	tool_z_score_faq_a3: "Use x = mean + z × SD. Example: 70 + 1.5 × 10 = 85.",
	tool_z_score_faq_q4: "Does this assume a normal distribution?",
	tool_z_score_faq_a4: "The algebra of z does not require normality, but many follow-on uses (like normal p-values) do.",
	tool_z_score_faq_q5: "Is a large |z| always statistically significant?",
	tool_z_score_faq_a5: "Not by itself. Significance needs a model and a p-value or critical value — not only the z number.",
	tool_z_score_faq_q6: "What if x equals the mean?",
	tool_z_score_faq_a6: "Then z = 0. The score sits exactly at the center of the stated distribution.",
	tool_z_score_faq_q7: "Where do I get a p-value from z?",
	tool_z_score_faq_a7: "Use the related p-value calculator after you have z. This page only does the linear z transform.",

	tool_z_score_disclaimer: "Educational z = (x − mean) / SD only. Not a substitute for statistical software, normality tests or study design.",
	tool_z_score_references: "Wikipedia standard score and standard deviation for educational context.",
	tool_z_score_ref_z_label: "Wikipedia — Standard score",
	tool_z_score_ref_sd_label: "Wikipedia — Standard deviation",
};

export default en;
