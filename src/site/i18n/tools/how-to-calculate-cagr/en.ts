/**
 * i18n tool shard (how-to-calculate-cagr / en).
 * Find CAGR %, ending value, or years. YMYL educational — not investment advice.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_cagr_title: "CAGR Calculator — Annualized Growth Between Two Values",
	tool_cagr_description: "Find compound annual growth rate from beginning and ending values, or reverse to ending value or years. Example: 10,000 → 16,105.10 over 5 years → about 10.00% CAGR. Educational illustration only — not investment advice.",
	tool_cagr_article: "Compute CAGR, ending value or years with the standard ((EV/BV)^(1/n)−1) identities, step lines and a reverse check.",
	tool_cagr_desc: "CAGR %, ending value or years from beginning value. Educational only.",

	tool_cagr_safety_banner: "Educational only. This page does textbook CAGR arithmetic. It is not investment, tax or financial advice, and past or hypothetical growth does not guarantee future results.",
	tool_cagr_mode_label: "What do you want to find?",
	tool_cagr_mode_rate: "CAGR % from begin / end / years",
	tool_cagr_mode_end: "Ending value from begin / CAGR / years",
	tool_cagr_mode_years: "Years from begin / end / CAGR",
	tool_cagr_hint: "All active inputs must be greater than zero. CAGR ignores mid-period cash flows and treats compounding as once per year.",
	tool_cagr_begin_label: "Beginning value",
	tool_cagr_begin_ph: "e.g. 10000",
	tool_cagr_end_label: "Ending value",
	tool_cagr_end_ph: "e.g. 16105.10",
	tool_cagr_rate_label: "CAGR %",
	tool_cagr_rate_ph: "e.g. 10",
	tool_cagr_years_label: "Number of years",
	tool_cagr_years_ph: "e.g. 5",
	tool_cagr_calculate: "Calculate",
	tool_cagr_sample: "Load sample",
	tool_cagr_clear: "Clear",
	tool_cagr_result_label: "CAGR",
	tool_cagr_endOut_label: "Ending value",
	tool_cagr_yearsOut_label: "Years",
	tool_cagr_multOut_label: "Total growth multiple",
	tool_cagr_steps_title: "Steps",
	tool_cagr_step_rate_tpl: "CAGR = (({end} ÷ {begin})^(1 ÷ {years}) − 1) × 100 ≈ {rate}%.",
	tool_cagr_step_end_tpl: "Ending = {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_step_years_tpl: "Years = ln({end} ÷ {begin}) ÷ ln(1 + {rate}/100) ≈ {years}.",
	tool_cagr_step_check_tpl: "Check: {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_result_note: "Assumes annual compounding and no mid-period cash flows. Educational illustration only — not investment advice.",
	tool_cagr_err_generic: "Enter positive numbers for the active fields (for example begin 10000, end 16105.1, years 5).",

	tool_cagr_how_title: "How to use the CAGR calculator",
	tool_cagr_how_body: "Choose CAGR %, ending value or years. Enter the known values, then Calculate. Load sample cycles 10000→16105.1 over 5 years (10%), the reverse ending-value case, years from 10% CAGR, and a shorter 5000→8000 over 3 years case.",
	tool_cagr_how_item_1: "Pick what you want to find.",
	tool_cagr_how_item_2: "Enter the known positive values for that mode.",
	tool_cagr_how_item_3: "Click Calculate to see the answer, growth multiple and steps.",
	tool_cagr_how_item_4: "Use Load sample to rotate textbook checkpoints.",

	tool_cagr_why_choose_title: "What this CAGR calculator gives you",
	tool_cagr_why_choose_item_1: "Three directions: CAGR %, ending value, or years.",
	tool_cagr_why_choose_item_2: "A growth multiple (ending ÷ beginning) next to the main answer.",
	tool_cagr_why_choose_item_3: "Step lines that plug your numbers into the CAGR identities.",
	tool_cagr_why_choose_item_4: "A reverse check that multiplies begin × (1+r)^n back to end.",
	tool_cagr_why_choose_item_5: "Clear YMYL boundary: educational arithmetic only — not investment advice.",

	tool_cagr_formula_title: "CAGR formulas",
	tool_cagr_formula_body: "CAGR is the constant annual rate that grows a beginning value to an ending value over n years with once-per-year compounding.",
	tool_cagr_formula_item_1: "CAGR = ((EV ÷ BV)^(1 ÷ n) − 1) × 100. Example: ((16105.1/10000)^(1/5)−1)×100 ≈ 10%.",
	tool_cagr_formula_item_2: "EV = BV × (1 + CAGR/100)^n.",
	tool_cagr_formula_item_3: "n = ln(EV ÷ BV) ÷ ln(1 + CAGR/100).",
	tool_cagr_formula_item_4: "Requires BV > 0, EV > 0, n > 0 (and CAGR ≠ −100% when solving for years).",
	tool_cagr_formula_item_5: "Ignores fees, taxes and mid-period cash flows — unlike a full IRR.",

	tool_cagr_example_title: "Worked examples",
	tool_cagr_example: "Load sample starts with 10,000 → 16,105.10 over 5 years → CAGR ≈ 10%. Next grows 10,000 at 10% for 5 years back to ≈16,105. Then solves years from the same endpoints at 10%. The last sample uses 5,000 → 8,000 over 3 years.",

	tool_cagr_usecases_title: "When to use a CAGR calculator",
	tool_cagr_usecase_1: "Homework: annualize multi-year growth with the standard CAGR formula.",
	tool_cagr_usecase_2: "Compare revenue or portfolio endpoints on an annualized basis (illustration only).",
	tool_cagr_usecase_3: "Back-solve how many years a given CAGR needs to reach a target.",
	tool_cagr_usecase_4: "Contrast with simple ROI on the related ROI page when years matter.",

	tool_cagr_faq_q1: "What CAGR formula does this use?",
	tool_cagr_faq_a1: "CAGR = ((Ending ÷ Beginning)^(1 ÷ Years) − 1) × 100. All three must be greater than zero.",
	tool_cagr_faq_q2: "How is CAGR different from simple ROI?",
	tool_cagr_faq_a2: "Simple ROI ignores how many years the change took. CAGR annualizes growth across the years you enter.",
	tool_cagr_faq_q3: "What if beginning or ending value is zero or negative?",
	tool_cagr_faq_a3: "Both must be greater than zero. Zero or negative inputs make the standard CAGR formula undefined here.",
	tool_cagr_faq_q4: "Is this investment advice?",
	tool_cagr_faq_a4: "No. Numbers are educational illustrations only — not investment, tax or financial advice.",
	tool_cagr_faq_q5: "Does CAGR include deposits or withdrawals?",
	tool_cagr_faq_a5: "No. It uses only beginning, ending and years. For irregular cash flows use an IRR tool.",
	tool_cagr_faq_q6: "Can I solve for ending value or years?",
	tool_cagr_faq_a6: "Yes. Switch modes to grow a beginning value forward, or solve years from begin/end/CAGR.",
	tool_cagr_faq_q7: "Is compounding assumed annual?",
	tool_cagr_faq_a7: "Yes on this page. Intra-year timing is ignored.",

	tool_cagr_disclaimer: "CAGR results are educational illustrations only and are not investment, tax or financial advice. Past or hypothetical returns do not guarantee future results. Real portfolios face fees, taxes, cash flows and risk this page does not model.",
	tool_cagr_references: "Investopedia CAGR definition and formula guides; standard ((EV/BV)^(1/n) − 1) annualized growth rate.",
	tool_cagr_ref_cagr_label: "Investopedia — Compound Annual Growth Rate (CAGR)",
	tool_cagr_ref_formula_label: "Investopedia — Formula for calculating CAGR",
};

export default en;
