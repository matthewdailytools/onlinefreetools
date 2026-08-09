/**
 * i18n tool shard (how-to-calculate-median / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_median_title: "Median and Mode Calculator",
	tool_median_description: "Calculate the median and mode of a number list after sorting (middle value; most frequent). Example: 1,2,2,3,4 → median 2, mode 2. Browser-only statistics process for quick checks.",
	tool_median_calculate: "Calculate",
	tool_median_sample: "Load sample",
	tool_median_clear: "Clear",
	tool_median_nums_label: "Numbers",
	tool_median_nums_ph: "e.g. 1,2,2,3,4",
	tool_median_medianOut_label: "Median",
	tool_median_modeOut_label: "Mode",
	tool_median_result_note: "Sort values; median is middle (or average of two middles). Mode is the most frequent value (ties: smallest).",
	tool_median_err_generic: "Enter a non-empty number list.",
	tool_median_how_title: "How it works",
	tool_median_how_body: "Paste numbers separated by commas or spaces. The tool reports median and a single mode.",
	tool_median_formula_title: "Formula",
	tool_median_formula_body: "Sort x; odd n → x[(n+1)/2]; even → average of two central. Mode = argmax frequency. Notes:",
	tool_median_formula_item_1: "Even-length median uses the mean of the two central values.",
	tool_median_formula_item_2: "If all frequencies tie, mode is the smallest value.",
	tool_median_formula_item_3: "Pair with mean / SD tools.",
	tool_median_example_title: "Example",
	tool_median_example: "Example: 1,2,2,3,4 → median 2, mode 2.",
	tool_median_usecases_title: "When to use it",
	tool_median_usecase_1: "Homework median/mode.",
	tool_median_usecase_2: "Quick center vs peak.",
	tool_median_usecase_3: "Compare with mean.",
	tool_median_faq_q1: "Sample?",
	tool_median_faq_a1: "1,2,2,3,4 → 2 and 2.",
	tool_median_faq_q2: "Multimodal?",
	tool_median_faq_a2: "We return one mode (smallest among ties).",
	tool_median_faq_q3: "Empty?",
	tool_median_faq_a3: "Rejected.",
	tool_median_faq_q4: "Advice?",
	tool_median_faq_a4: "Educational only.",
	tool_median_article: "Median and mode",
	tool_median_disclaimer: "Educational median only — not professional advice.",
	tool_median_references: "Standard textbook formulas.",
	tool_median_ref_a_label: "Wikipedia — Median",
	tool_median_ref_b_label: "Wikipedia — Mode",
};

export default en;
