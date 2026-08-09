/**
 * i18n tool shard (how-to-calculate-mean / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_mean_title: "Mean Calculator — Average of a Number List",
	tool_mean_description: "Calculate arithmetic, geometric, or harmonic mean from a number list with a clear formula path. Example: 1,2,3,4,5 arithmetic → 3. Browser-only; pick the mean type that matches your process.",
	tool_mean_calculate: "Calculate",
	tool_mean_sample: "Load sample",
	tool_mean_clear: "Clear",
	tool_mean_nums_label: "Numbers",
	tool_mean_nums_ph: "e.g. 1,2,3,4,5",
	tool_mean_type_label: "Mean type",
	tool_mean_type_arithmetic: "Arithmetic",
	tool_mean_type_geometric: "Geometric",
	tool_mean_type_harmonic: "Harmonic",
	tool_mean_meanOut_label: "Mean",
	tool_mean_result_note: "Arithmetic: sum/n. Geometric: (Πxi)^(1/n) (all > 0). Harmonic: n / Σ(1/xi) (none zero).",
	tool_mean_err_generic: "Enter a non-empty number list; check type constraints.",
	tool_mean_how_title: "How it works",
	tool_mean_how_body: "Paste numbers separated by commas or spaces, choose arithmetic / geometric / harmonic, then calculate.",
	tool_mean_formula_title: "Formula",
	tool_mean_formula_body: "Ā = (Σx)/n; G = (Πx)^(1/n); H = n / Σ(1/x). Notes:",
	tool_mean_formula_item_1: "Geometric mean needs every value > 0.",
	tool_mean_formula_item_2: "Harmonic mean rejects zeros.",
	tool_mean_formula_item_3: "Pair with median / SD tools for distribution drills.",
	tool_mean_example_title: "Example",
	tool_mean_example: "Example: 1,2,3,4,5 arithmetic → 3.",
	tool_mean_usecases_title: "When to use it",
	tool_mean_usecase_1: "Homework averages.",
	tool_mean_usecase_2: "Quick dataset center.",
	tool_mean_usecase_3: "Compare with median.",
	tool_mean_faq_q1: "Sample?",
	tool_mean_faq_a1: "1–5 arithmetic → 3.",
	tool_mean_faq_q2: "Geometric of negatives?",
	tool_mean_faq_a2: "Not defined here.",
	tool_mean_faq_q3: "Empty list?",
	tool_mean_faq_a3: "Rejected.",
	tool_mean_faq_q4: "Advice?",
	tool_mean_faq_a4: "Educational only.",
	tool_mean_article: "Means",
	tool_mean_disclaimer: "Educational mean only — not professional advice.",
	tool_mean_references: "Standard textbook formulas.",
	tool_mean_ref_a_label: "Wikipedia — Mean",
	tool_mean_ref_b_label: "Wikipedia — Average",
};

export default en;
