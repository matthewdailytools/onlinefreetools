/**
 * i18n tool shard (how-to-calculate-markup / en).
 * Markup % from cost/price, or solve for sell/cost; compares margin side by side.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_markup_title: "Markup Calculator — Find Markup %, Selling Price or Cost",
	tool_markup_description: "Calculate markup percentage from cost and selling price, or solve for the price or cost given a markup %. Example: cost 50, sell 80 → markup 60% (margin 37.5%). Markup divides by cost; margin divides by sales. Educational retail math — not business advice.",
	tool_markup_article: "Find markup %, selling price or cost, and see the matching gross margin so you do not confuse markup with margin.",
	tool_markup_desc: "Calculate markup % from cost and price, or reverse-solve for sell or cost. Shows margin for comparison.",

	tool_markup_mode_label: "What to find",
	tool_markup_mode_pct: "Markup %",
	tool_markup_mode_sell: "Selling price",
	tool_markup_mode_cost: "Cost",
	tool_markup_hint: "Pick what to solve for. Markup uses cost in the denominator; margin uses the selling price. A decimal comma works too. Educational only — not pricing advice.",
	tool_markup_cost_label: "Cost",
	tool_markup_cost_ph: "e.g. 50",
	tool_markup_sell_label: "Selling price",
	tool_markup_sell_ph: "e.g. 80",
	tool_markup_mk_label: "Markup %",
	tool_markup_mk_ph: "e.g. 60",
	tool_markup_calculate: "Calculate",
	tool_markup_sample: "Load sample",
	tool_markup_clear: "Clear",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_sellOut_label: "Selling price",
	tool_markup_costOut_label: "Cost",
	tool_markup_profitOut_label: "Dollar markup",
	tool_markup_marginOut_label: "Gross margin %",
	tool_markup_steps_title: "Steps",
	tool_markup_step_pct_tpl: "Markup % = (sell − cost) ÷ cost × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct}%.",
	tool_markup_step_sell_tpl: "Selling price = cost × (1 + markup%/100) = {cost} × (1 + {pct}/100) = {sell}.",
	tool_markup_step_cost_tpl: "Cost = sell ÷ (1 + markup%/100) = {sell} ÷ (1 + {pct}/100) = {cost}.",
	tool_markup_step_margin_tpl: "Gross margin % = (sell − cost) ÷ sell × 100 = {dollar} ÷ {sell} × 100 = {margin}%.",
	tool_markup_result_note: "Markup divides by cost; margin divides by selling price. Same dollar mark-up, different percentages. Educational only — not tax, pricing or investment advice.",
	tool_markup_err_generic: "Enter positive cost and a valid selling price or markup % for the selected mode (for example cost 50 and sell 80).",

	tool_markup_how_title: "How to use the markup calculator",
	tool_markup_how_body: "Choose whether you need markup %, selling price or cost. Fill the fields that appear, then Calculate. Load sample cycles cost/sell → %, cost/% → sell, and sell/% → cost.",
	tool_markup_how_item_1: "Pick Markup %, Selling price or Cost from What to find.",
	tool_markup_how_item_2: "Enter the known values (cost and sell, or cost and markup %, or sell and markup %).",
	tool_markup_how_item_3: "Click Calculate to see the missing value, dollar mark-up and the matching gross margin %.",
	tool_markup_how_item_4: "Use Load sample for 50/80 → 60%, 40 at 25% → 50, and 120 at 50% → cost 80.",

	tool_markup_why_choose_title: "What this markup calculator gives you",
	tool_markup_why_choose_item_1: "Three solve modes: markup % from cost and price, price from cost and %, or cost from price and %.",
	tool_markup_why_choose_item_2: "Dollar mark-up and gross margin % shown next to markup so the two terms stay distinct.",
	tool_markup_why_choose_item_3: "Step lines that plug your numbers into (P−C)/C and (P−C)/P.",
	tool_markup_why_choose_item_4: "Fields that hide when unused for the selected mode.",
	tool_markup_why_choose_item_5: "Clear educational disclaimer — not business, tax or investment advice.",

	tool_markup_formula_title: "Markup formulas",
	tool_markup_formula_body: "Markup measures the mark-up relative to cost. Margin measures the same dollar profit relative to selling price.",
	tool_markup_formula_item_1: "Markup % = (selling price − cost) ÷ cost × 100. Example: (80 − 50) ÷ 50 × 100 = 60%.",
	tool_markup_formula_item_2: "Selling price = cost × (1 + markup%/100). Example: 40 × 1.25 = 50 at 25% markup.",
	tool_markup_formula_item_3: "Cost = selling price ÷ (1 + markup%/100). Example: 120 ÷ 1.5 = 80 at 50% markup.",
	tool_markup_formula_item_4: "Gross margin % = (selling price − cost) ÷ selling price × 100. Same 50/80 example → 37.5%.",
	tool_markup_formula_item_5: "A 100% markup means price = 2 × cost (margin 50%). Markup above 100% is possible when price > 2 × cost.",

	tool_markup_example_title: "Worked examples",
	tool_markup_example: "Load sample starts with cost 50 and sell 80 → markup 60%, dollar mark-up 30, margin 37.5%. Next: cost 40 at 25% markup → sell 50. Then sell 120 at 50% markup → cost 80. A break-even sample (100/100) shows 0% markup and 0% margin.",

	tool_markup_usecases_title: "When to use a markup calculator",
	tool_markup_usecase_1: "Retail homework: convert cost and list price into markup % with visible steps.",
	tool_markup_usecase_2: "Pricing sheet checks: given a target markup %, find the sell price from cost.",
	tool_markup_usecase_3: "Reverse cost: from a known price and markup policy, recover the implied cost.",
	tool_markup_usecase_4: "Clarify mixed language: show why 60% markup is not the same as 60% margin.",

	tool_markup_faq_q1: "How do you calculate markup percentage?",
	tool_markup_faq_a1: "Subtract cost from selling price, divide by cost, multiply by 100. Example: cost 50, sell 80 → (80−50)/50 × 100 = 60%.",
	tool_markup_faq_q2: "What is the difference between markup and margin?",
	tool_markup_faq_a2: "Markup divides the dollar profit by cost; margin divides by selling price. The same 50/80 deal is 60% markup and 37.5% margin.",
	tool_markup_faq_q3: "How do I find selling price from cost and markup %?",
	tool_markup_faq_a3: "Sell = cost × (1 + markup%/100). At cost 40 and 25% markup, sell = 40 × 1.25 = 50.",
	tool_markup_faq_q4: "Can markup be over 100%?",
	tool_markup_faq_a4: "Yes. If price is more than twice cost, markup exceeds 100%. Example: cost 50, sell 150 → markup 200%.",
	tool_markup_faq_q5: "What if I sell below cost?",
	tool_markup_faq_a5: "Markup and margin become negative. That means a loss on the unit before other costs.",
	tool_markup_faq_q6: "Does this include tax or discounts?",
	tool_markup_faq_a6: "No. Enter the cost and price numbers you want to compare after you have already applied tax or discounts yourself.",
	tool_markup_faq_q7: "Is this financial advice?",
	tool_markup_faq_a7: "No. It is educational retail arithmetic only — not tax, pricing strategy or investment advice.",

	tool_markup_disclaimer: "Educational markup illustration only — not financial, tax, pricing or investment advice.",
	tool_markup_references: "Investopedia and standard textbook formulas for educational context.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Profit margin",
};

export default en;
