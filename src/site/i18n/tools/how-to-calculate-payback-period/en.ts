/**
 * i18n tool shard (how-to-calculate-payback-period / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_payback_period_title: "Payback Period Calculator — Years to Recover Investment",
	tool_payback_period_description: "Estimate simple payback years from initial investment and constant annual cash inflow. Sample: invest 10,000 with 2,500 per year → 4 years. Educational — not investment advice Calculate simple payback years with investment ÷ annual cash flow; example 10,000 / 2,500 → 4 years.",
	tool_payback_period_calculate: "Calculate",
	tool_payback_period_sample: "Load sample",
	tool_payback_period_clear: "Clear",
	tool_payback_period_invest_label: "Initial investment",
	tool_payback_period_invest_ph: "e.g. 10000",
	tool_payback_period_cf_label: "Annual cash inflow",
	tool_payback_period_cf_ph: "e.g. 2500",
	tool_payback_period_yearsOut_label: "Payback years",
	tool_payback_period_result_note: "Simple payback = investment / annual CF (no discounting). Educational only.",
	tool_payback_period_err_generic: "Enter investment > 0 and annual cash inflow > 0.",
	tool_payback_period_how_title: "How it works",
	tool_payback_period_how_body: "Enter the upfront investment and a constant annual inflow. Years = investment ÷ annual CF. For discounted payback use NPV-style tools.",
	tool_payback_period_formula_title: "Formula",
	tool_payback_period_formula_body: "Payback years = I0 / CF_annual. Notes:",
	tool_payback_period_formula_item_1: "Ignores time value of money and uneven cash flows.",
	tool_payback_period_formula_item_2: "Both inputs must be positive.",
	tool_payback_period_formula_item_3: "Not a profitability measure by itself.",
	tool_payback_period_example_title: "Example",
	tool_payback_period_example: "Example: I0=10000, CF=2500 → 10000/2500 = 4 years.",
	tool_payback_period_usecases_title: "When to use it",
	tool_payback_period_usecase_1: "Homework: simple payback drills.",
	tool_payback_period_usecase_2: "Rough screen before NPV/IRR.",
	tool_payback_period_usecase_3: "Contrast with discounted methods.",
	tool_payback_period_faq_q1: "Sample?",
	tool_payback_period_faq_a1: "4 years for 10000 / 2500.",
	tool_payback_period_faq_q2: "Discounted?",
	tool_payback_period_faq_a2: "Not on this page — simple payback only.",
	tool_payback_period_faq_q3: "Uneven CF?",
	tool_payback_period_faq_a3: "Use a spreadsheet or NPV-style schedule.",
	tool_payback_period_faq_q4: "Advice?",
	tool_payback_period_faq_a4: "Educational only.",
	tool_payback_period_article: "Simple payback",
	tool_payback_period_disclaimer: "Educational payback period only — not financial, tax, or investment advice.",
	tool_payback_period_references: "Investopedia and standard textbook formulas.",
	tool_payback_period_ref_a_label: "Investopedia — Payback period",
	tool_payback_period_ref_b_label: "Investopedia — NPV",
};

export default en;
