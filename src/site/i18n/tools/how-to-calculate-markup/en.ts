/**
 * i18n tool shard (how-to-calculate-markup / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_markup_title: "Markup Calculator — How to Calculate Markup Percentage",
	tool_markup_description: "Calculate markup % from cost and selling price. Example: cost 50, sell 80 → markup 60%. Distinct from profit margin (which divides by sales). Educational retail math in your browser — not business advice.",
	tool_markup_calculate: "Calculate",
	tool_markup_sample: "Load sample",
	tool_markup_clear: "Clear",
	tool_markup_cost_label: "Cost",
	tool_markup_cost_ph: "e.g. 50",
	tool_markup_sell_label: "Selling price",
	tool_markup_sell_ph: "e.g. 80",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_profitOut_label: "Dollar markup",
	tool_markup_result_note: "Markup = (price − cost) / cost × 100. Not the same as margin.",
	tool_markup_err_generic: "Enter cost > 0 and selling price ≥ 0.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — Profit margin",
	tool_markup_how_title: "How it works",
	tool_markup_how_body: "Enter cost and selling price. Markup divides the dollar mark-up by cost, not by sales. Compare with the margin page when you need the sales-based view.",
	tool_markup_formula_title: "Formula",
	tool_markup_formula_body: "Markup % = (price − cost) / cost × 100. Keep in mind:",
	tool_markup_formula_item_1: "Denominator is cost — that is what separates markup from margin.",
	tool_markup_formula_item_2: "Negative markup means selling below cost.",
	tool_markup_formula_item_3: "Taxes and discounts are not modeled unless baked into the inputs.",
	tool_markup_usecases_title: "When to use it",
	tool_markup_usecase_1: "Retail homework: convert cost and list price to markup %.",
	tool_markup_usecase_2: "Sanity-check a pricing sheet before talking to finance.",
	tool_markup_usecase_3: "Contrast with gross-margin when stakeholders mix the terms.",
	tool_markup_example_title: "Example",
	tool_markup_example: "Example: cost 50, sell 80 → markup = (80−50)/50 × 100 = 60%.",
	tool_markup_article: "Markup Calculator — How to Calculate Markup Percentage",
	tool_markup_disclaimer: "Educational markup illustration only — not financial, tax, or investment advice.",
	tool_markup_references: "Investopedia and standard textbook formulas for educational context.",
	tool_markup_faq_q1: "Markup vs Marge?",
	tool_markup_faq_a1: "Markup teilt durch Kosten; Marge durch Preis.",
	tool_markup_faq_q2: "Beispielergebnis?",
	tool_markup_faq_a2: "50 und 80 → 60%.",
	tool_markup_faq_q3: "Über 100% möglich?",
	tool_markup_faq_a3: "Ja, wenn Preis > 2× Kosten.",
	tool_markup_faq_q4: "Preisberatung?",
	tool_markup_faq_a4: "Nein, nur Bildungsarithmetik.",
};

export default en;
