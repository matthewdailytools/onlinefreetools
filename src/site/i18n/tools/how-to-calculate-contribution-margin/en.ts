/**
 * i18n tool shard (how-to-calculate-contribution-margin / en).
 * Unit CM, optional total CM and break-even units. YMYL educational only.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_contribution_margin_title: "Contribution Margin Calculator — Unit CM Ratio and Break-Even Units",
	tool_contribution_margin_description: "Find contribution margin and CM ratio from unit price and variable cost. Example: price 50, VC 30 → CM 20 (40%). Optional units give total CM; optional fixed costs give break-even units. Educational only — not business or investment advice.",
	tool_contribution_margin_article: "Compute unit contribution margin and ratio, optional total CM from units, and break-even units when fixed costs are entered.",
	tool_contribution_margin_desc: "Unit CM and ratio from price and VC. Optional totals and break-even units.",

	tool_contribution_margin_safety_banner: "Educational only. This page does textbook contribution-margin arithmetic. It is not business, tax, accounting or investment advice.",
	tool_contribution_margin_hint: "Price must be greater than zero. Variable cost must be ≥ 0 and not above price. Units and fixed costs are optional.",
	tool_contribution_margin_price_label: "Price per unit",
	tool_contribution_margin_price_ph: "e.g. 50",
	tool_contribution_margin_vc_label: "Variable cost per unit",
	tool_contribution_margin_vc_ph: "e.g. 30",
	tool_contribution_margin_units_label: "Units (optional)",
	tool_contribution_margin_units_ph: "e.g. 100",
	tool_contribution_margin_fixed_label: "Fixed costs (optional)",
	tool_contribution_margin_fixed_ph: "e.g. 10000",
	tool_contribution_margin_calculate: "Calculate",
	tool_contribution_margin_sample: "Load sample",
	tool_contribution_margin_clear: "Clear",
	tool_contribution_margin_cmOut_label: "Contribution margin (per unit)",
	tool_contribution_margin_cmrOut_label: "CM ratio",
	tool_contribution_margin_totalOut_label: "Total contribution margin",
	tool_contribution_margin_beOut_label: "Break-even units",
	tool_contribution_margin_steps_title: "Steps",
	tool_contribution_margin_step_cm_tpl: "CM = price − VC = {price} − {vc} = {cm}.",
	tool_contribution_margin_step_ratio_tpl: "CM ratio = CM ÷ price × 100 = {cm} ÷ {price} × 100 = {ratio}%.",
	tool_contribution_margin_step_total_tpl: "Total CM = unit CM × units = {cm} × {units} = {total}.",
	tool_contribution_margin_step_be_tpl: "Break-even units = fixed ÷ CM = {fixed} ÷ {cm} = {be}.",
	tool_contribution_margin_result_note: "CM covers fixed costs and profit after variable costs. Multi-product mixes and taxes are not modeled. Educational only — not business advice.",
	tool_contribution_margin_err_generic: "Enter price > 0 and variable cost ≥ 0 not above price (for example 50 and 30). Optional units must be > 0; optional fixed costs must be ≥ 0.",

	tool_contribution_margin_how_title: "How to use the contribution margin calculator",
	tool_contribution_margin_how_body: "Enter unit price and variable cost. Optionally add units for total CM and fixed costs for break-even units. Load sample cycles unit-only, with units, with fixed costs, and a combined case.",
	tool_contribution_margin_how_item_1: "Enter price per unit and variable cost per unit.",
	tool_contribution_margin_how_item_2: "Optional: enter units to see total contribution margin.",
	tool_contribution_margin_how_item_3: "Optional: enter fixed costs to see break-even units (needs CM > 0).",
	tool_contribution_margin_how_item_4: "Click Calculate to see CM, ratio and step lines.",

	tool_contribution_margin_why_choose_title: "What this contribution margin calculator gives you",
	tool_contribution_margin_why_choose_item_1: "Unit CM and CM ratio from price and variable cost.",
	tool_contribution_margin_why_choose_item_2: "Optional total CM when you enter units.",
	tool_contribution_margin_why_choose_item_3: "Optional break-even units when you enter fixed costs.",
	tool_contribution_margin_why_choose_item_4: "Step lines that plug your numbers into the formulas.",
	tool_contribution_margin_why_choose_item_5: "Clear YMYL boundary: educational arithmetic only — not business advice.",

	tool_contribution_margin_formula_title: "Contribution margin formulas",
	tool_contribution_margin_formula_body: "Contribution margin is what remains of price after variable cost — the amount available to cover fixed costs and profit.",
	tool_contribution_margin_formula_item_1: "CM = price − VC. Example: 50 − 30 = 20.",
	tool_contribution_margin_formula_item_2: "CM ratio = CM ÷ price. Example: 20 ÷ 50 = 40%.",
	tool_contribution_margin_formula_item_3: "Total CM = unit CM × units.",
	tool_contribution_margin_formula_item_4: "Break-even units = fixed costs ÷ unit CM (when CM > 0).",
	tool_contribution_margin_formula_item_5: "Gross margin uses COGS; CM uses variable cost only — they can differ.",

	tool_contribution_margin_example_title: "Worked examples",
	tool_contribution_margin_example: "Load sample starts with price 50 and VC 30 → CM 20 (40%). Next multiplies by 100 units → total CM 2,000. Then fixed costs 10,000 → break-even 500 units. The last sample combines units and fixed costs.",

	tool_contribution_margin_usecases_title: "When to use a contribution margin calculator",
	tool_contribution_margin_usecase_1: "Homework: unit contribution before a break-even problem.",
	tool_contribution_margin_usecase_2: "See how a variable-cost change moves the CM ratio.",
	tool_contribution_margin_usecase_3: "Estimate how many units cover a stated fixed-cost total (illustration only).",
	tool_contribution_margin_usecase_4: "Compare with gross margin on the related page when COGS ≠ variable cost.",

	tool_contribution_margin_faq_q1: "How do you calculate contribution margin?",
	tool_contribution_margin_faq_a1: "CM = price − variable cost. Example: 50 − 30 = 20; ratio = 20 ÷ 50 = 40%.",
	tool_contribution_margin_faq_q2: "How is CM different from gross margin?",
	tool_contribution_margin_faq_a2: "CM uses variable cost. Gross margin uses COGS, which may include items that are not purely variable.",
	tool_contribution_margin_faq_q3: "Do I need quantity?",
	tool_contribution_margin_faq_a3: "Not for unit CM. Enter units only if you want total CM.",
	tool_contribution_margin_faq_q4: "How are break-even units calculated here?",
	tool_contribution_margin_faq_a4: "Break-even units = fixed costs ÷ unit CM when CM > 0. For a fuller break-even UI use the related break-even calculator.",
	tool_contribution_margin_faq_q5: "Can variable cost exceed price?",
	tool_contribution_margin_faq_a5: "This page rejects that case for unit CM (negative CM). Re-check inputs.",
	tool_contribution_margin_faq_q6: "Are multi-product mixes modeled?",
	tool_contribution_margin_faq_a6: "No. Run each product separately or use a spreadsheet for weighted CM.",
	tool_contribution_margin_faq_q7: "Is this business advice?",
	tool_contribution_margin_faq_a7: "No. Educational arithmetic only — not financial, tax, accounting or investment advice.",

	tool_contribution_margin_disclaimer: "Educational contribution margin only — not financial, tax, accounting, business or investment advice.",
	tool_contribution_margin_references: "Investopedia contribution margin and break-even articles for educational context.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default en;
