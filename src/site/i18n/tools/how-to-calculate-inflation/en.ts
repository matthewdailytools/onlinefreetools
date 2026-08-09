/**
 * i18n tool shard (how-to-calculate-inflation / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_inflation_title: "Inflation Calculator — Future Purchasing Power",
	tool_inflation_description: "Project a present amount forward with a constant annual inflation rate. Sample: 1,000 over 5 years at 3% → future ≈ 1,159.27. Educational — not economic advice Calculate a future amount with the compound inflation formula; example 1,000 over 5 years at 3% → ≈ 1,159.27.",
	tool_inflation_calculate: "Calculate",
	tool_inflation_sample: "Load sample",
	tool_inflation_clear: "Clear",
	tool_inflation_amount_label: "Present amount",
	tool_inflation_amount_ph: "e.g. 1000",
	tool_inflation_rate_label: "Inflation % / year",
	tool_inflation_rate_ph: "e.g. 3",
	tool_inflation_n_label: "Years",
	tool_inflation_n_ph: "e.g. 5",
	tool_inflation_futOut_label: "Future nominal amount",
	tool_inflation_result_note: "Future = present × (1+i)^n. Educational illustration of purchasing-power erosion.",
	tool_inflation_err_generic: "Enter amount > 0, finite inflation rate, and n > 0.",
	tool_inflation_how_title: "How it works",
	tool_inflation_how_body: "Enter today’s amount, an annual inflation rate, and years. The page compounds forward. Not a CPI country matrix.",
	tool_inflation_formula_title: "Formula",
	tool_inflation_formula_body: "F = P × (1 + i)^n. Notes:",
	tool_inflation_formula_item_1: "Assumes a constant rate each year.",
	tool_inflation_formula_item_2: "Does not load official CPI tables by country.",
	tool_inflation_formula_item_3: "Real vs nominal wages need more context than this sketch.",
	tool_inflation_example_title: "Example",
	tool_inflation_example: "Example: P=1000, i=3%, n=5 → F = 1000×1.03^5 ≈ 1159.27.",
	tool_inflation_usecases_title: "When to use it",
	tool_inflation_usecase_1: "Homework compounding with inflation.",
	tool_inflation_usecase_2: "Rough future sticker-price sketch.",
	tool_inflation_usecase_3: "Pair with CAGR/compound-interest pages.",
	tool_inflation_faq_q1: "Sample?",
	tool_inflation_faq_a1: "≈1159.27.",
	tool_inflation_faq_q2: "Official CPI?",
	tool_inflation_faq_a2: "Enter your own rate; no country matrix.",
	tool_inflation_faq_q3: "Real wages?",
	tool_inflation_faq_a3: "Out of scope — educational compounding only.",
	tool_inflation_faq_q4: "Advice?",
	tool_inflation_faq_a4: "Educational only.",
	tool_inflation_article: "Inflation forward",
	tool_inflation_disclaimer: "Educational inflation only — not financial, tax, or investment advice.",
	tool_inflation_references: "Investopedia and standard textbook formulas.",
	tool_inflation_ref_a_label: "Investopedia — Inflation",
	tool_inflation_ref_b_label: "Investopedia — Purchasing power",
};

export default en;
