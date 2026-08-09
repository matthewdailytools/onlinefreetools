/**
 * i18n tool shard (how-to-calculate-contribution-margin / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_contribution_margin_title: "Contribution Margin Calculator — Price Minus Variable Cost",
	tool_contribution_margin_description: "Calculate contribution margin and ratio from price and variable cost. Example: price 50, VC 30 → CM 20 (40%). Links to break-even thinking. Educational — not business advice.",
	tool_contribution_margin_calculate: "Calculate",
	tool_contribution_margin_sample: "Load sample",
	tool_contribution_margin_clear: "Clear",
	tool_contribution_margin_price_label: "Price per unit",
	tool_contribution_margin_price_ph: "e.g. 50",
	tool_contribution_margin_vc_label: "Variable cost per unit",
	tool_contribution_margin_vc_ph: "e.g. 30",
	tool_contribution_margin_cmOut_label: "Contribution margin",
	tool_contribution_margin_cmrOut_label: "CM ratio",
	tool_contribution_margin_result_note: "CM = price − VC; ratio = CM / price. Educational only.",
	tool_contribution_margin_err_generic: "Enter price > 0 and variable cost ≥ 0.",
	tool_contribution_margin_how_title: "How it works",
	tool_contribution_margin_how_body: "Enter unit price and unit variable cost. Contribution margin is what remains to cover fixed costs and profit.",
	tool_contribution_margin_formula_title: "Formula",
	tool_contribution_margin_formula_body: "CM = P − VC; CM ratio = CM / P. Notes:",
	tool_contribution_margin_formula_item_1: "Variable cost should move with units; fixed costs belong in break-even analysis.",
	tool_contribution_margin_formula_item_2: "Price must be > 0.",
	tool_contribution_margin_formula_item_3: "Taxes and multi-product mixes are not modeled.",
	tool_contribution_margin_example_title: "Example",
	tool_contribution_margin_example: "Example: price 50, VC 30 → CM = 20; ratio = 20/50 = 40%.",
	tool_contribution_margin_usecases_title: "When to use it",
	tool_contribution_margin_usecase_1: "Homework: unit contribution before break-even.",
	tool_contribution_margin_usecase_2: "See how a VC change moves the ratio.",
	tool_contribution_margin_usecase_3: "Pair with the break-even calculator for fixed costs.",
	tool_contribution_margin_faq_q1: "Sample result?",
	tool_contribution_margin_faq_a1: "P=50, VC=30 → CM 20 and 40%.",
	tool_contribution_margin_faq_q2: "CM vs gross margin?",
	tool_contribution_margin_faq_a2: "CM uses variable cost; gross margin uses COGS which may include other items.",
	tool_contribution_margin_faq_q3: "Need quantity?",
	tool_contribution_margin_faq_a3: "Unit CM does not need quantity; total CM = CM × units.",
	tool_contribution_margin_faq_q4: "Advice?",
	tool_contribution_margin_faq_a4: "Educational only.",
	tool_contribution_margin_article: "Contribution Margin Calculator — Price Minus Variable Cost",
	tool_contribution_margin_disclaimer: "Educational contribution margin only — not financial, tax, or investment advice.",
	tool_contribution_margin_references: "Investopedia and standard textbook formulas.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even",
};

export default en;
