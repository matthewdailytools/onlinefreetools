/**
 * i18n tool shard (how-to-calculate-npv / en).
 * English master locale — full UI, How/Formula/FAQ, and YMYL disclaimer keys.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_npv_title: 'How to Calculate NPV — Net Present Value Calculator',
	tool_npv_description:
		'How to calculate NPV from an annual discount rate, initial investment, and year-by-year cash flows. Formula: NPV = −I₀ + Σ (CFₜ/(1+r)ᵗ). Example: invest 10,000 at 10% with cash flows 3,000 / 4,200 / 6,800 → NPV ≈ 1,307.29. Runs in your browser; educational illustration only — not investment advice.',
	tool_npv_article:
		'Net present value (NPV) discounts future cash flows back to today at a chosen annual rate, then subtracts the initial investment. A positive NPV means the discounted inflows exceed the outflow under your assumptions; it is not a forecast or a buy recommendation.',
	tool_npv_calculate: 'Calculate',
	tool_npv_sample: 'Load sample',
	tool_npv_clear: 'Clear',
	tool_npv_rate_label: 'Discount rate (% per year)',
	tool_npv_rate_ph: 'e.g. 10',
	tool_npv_invest_label: 'Initial investment (outflow)',
	tool_npv_invest_ph: 'e.g. 10000',
	tool_npv_cf_label: 'Cash flows by year (comma or newline)',
	tool_npv_cf_ph: 'e.g. 3000, 4200, 6800',
	tool_npv_cf_hint: 'Enter CF1…CFn for years 1…n. Positive = inflow; negative allowed for later outflows.',
	tool_npv_result_label: 'NPV',
	tool_npv_result_note: 'Educational illustration only — not investment advice.',
	tool_npv_err_rate: 'Enter a finite discount rate (percent per year). −100% is not allowed.',
	tool_npv_err_invest: 'Initial investment must be greater than zero.',
	tool_npv_err_cf: 'Enter at least one valid cash-flow number (comma or newline separated).',
	tool_npv_how_title: 'How it works',
	tool_npv_how_body:
		'Enter an annual discount rate, a positive initial investment treated as an outflow at time 0, and a list of cash flows for years 1…n. The tool discounts each cash flow and subtracts the initial outlay. Results stay in your browser and are educational only.',
	tool_npv_formula_title: 'Formula and assumptions',
	tool_npv_formula_body:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ) for t = 1…n, where r is the annual discount rate as a decimal. Keep these assumptions in mind:',
	tool_npv_formula_item_1: 'Cash flows are treated as end-of-year amounts; intra-year timing is ignored.',
	tool_npv_formula_item_2: 'The discount rate is constant across years; taxes, fees, and inflation are not modeled unless you bake them into r or the cash flows.',
	tool_npv_formula_item_3: 'Results are educational illustrations, not forecasts or investment advice.',
	tool_npv_example_title: 'Example',
	tool_npv_example:
		'Example: initial investment 10,000, discount rate 10% per year, cash flows 3,000 / 4,200 / 6,800 → NPV = −10000 + 3000/1.1 + 4200/1.1² + 6800/1.1³ ≈ 1,307.29.',
	tool_npv_usecases_title: 'When to use it',
	tool_npv_usecase_1: 'Rough project screening: compare discounted inflows to the upfront cost under a stated rate (illustration only).',
	tool_npv_usecase_2: 'Coursework: practice the NPV sum with a fixed discount rate and a short cash-flow list.',
	tool_npv_usecase_3: 'Sketch whether a multi-year cash plan clears a hurdle rate before talking to an advisor — not a substitute for full analysis.',
	tool_npv_faq_q1: 'What NPV formula does this use?',
	tool_npv_faq_a1:
		'NPV = −I₀ + Σ (CFₜ / (1 + r)ᵗ). I₀ is the initial investment (positive outflow), r is the annual discount rate as a decimal, and CFₜ are cash flows for years 1…n.',
	tool_npv_faq_q2: 'How is NPV different from simple ROI or CAGR?',
	tool_npv_faq_a2:
		'Simple ROI is a single-period percentage of gain over cost. CAGR annualizes growth between two values. NPV discounts a sequence of cash flows and reports a present-value money amount, not a growth rate.',
	tool_npv_faq_q3: 'How should I enter cash flows?',
	tool_npv_faq_a3:
		'List year-1 through year-n amounts separated by commas or new lines. Positive numbers are inflows; negatives are later outflows. At least one valid number is required.',
	tool_npv_faq_q4: 'Is this investment advice?',
	tool_npv_faq_a4:
		'No. Numbers are educational illustrations only and are not investment, tax, or financial advice. A positive NPV under your inputs does not guarantee a real-world profit.',
	tool_npv_disclaimer:
		'NPV results are educational illustrations only and are not investment, tax, or financial advice. Discount rates, cash-flow timing, fees, taxes, and risk are simplified on this page. Past or hypothetical figures do not guarantee future results.',
	tool_npv_references:
		'Investopedia NPV definition and present-value vs net present value guides; standard discounted cash-flow NPV formula.',
	tool_npv_ref_npv_label: 'Investopedia — Net Present Value (NPV)',
	tool_npv_ref_pv_label: 'Investopedia — Present value vs net present value',
};

export default en;
