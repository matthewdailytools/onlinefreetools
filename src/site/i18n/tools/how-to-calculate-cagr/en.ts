/**
 * i18n tool shard (how-to-calculate-cagr / en).
 * English master locale — full UI, How/Formula/FAQ, and YMYL disclaimer keys.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_cagr_title: 'CAGR Calculator — How to Calculate Compound Annual Growth Rate',
	tool_cagr_description:
		'Calculate CAGR from beginning value, ending value, and years. Example: 10,000 → 16,105.10 over 5 years → about 10.00%. Runs in your browser; educational illustration only — not investment advice.',
	tool_cagr_article:
		'CAGR is the constant annual rate that takes a beginning value to an ending value over a number of years, assuming compounding once per year. Use it for rough multi-year growth comparisons; it is not a forecast and ignores cash flows mid-period.',
	tool_cagr_calculate: 'Calculate',
	tool_cagr_sample: 'Load sample',
	tool_cagr_clear: 'Clear',
	tool_cagr_begin_label: 'Beginning value',
	tool_cagr_begin_ph: 'e.g. 10000',
	tool_cagr_end_label: 'Ending value',
	tool_cagr_end_ph: 'e.g. 16105.10',
	tool_cagr_years_label: 'Number of years',
	tool_cagr_years_ph: 'e.g. 5',
	tool_cagr_result_label: 'CAGR',
	tool_cagr_result_note: 'Educational illustration only — not investment advice.',
	tool_cagr_err_begin: 'Beginning value must be greater than zero.',
	tool_cagr_err_end: 'Ending value must be greater than zero.',
	tool_cagr_err_years: 'Number of years must be greater than zero.',
	tool_cagr_how_title: 'How it works',
	tool_cagr_how_body:
		'Enter a positive beginning value, ending value, and years. The tool computes CAGR % with the standard compound annual growth rate formula. Zero or negative inputs are rejected. Results stay in your browser and are educational only.',
	tool_cagr_formula_title: 'Formula and assumptions',
	tool_cagr_formula_body:
		'CAGR = ((Ending value ÷ Beginning value)^(1 ÷ Years) − 1) × 100. Keep these assumptions in mind:',
	tool_cagr_formula_item_1: 'Compounding is treated as once per year; intra-year timing is ignored.',
	tool_cagr_formula_item_2: 'No mid-period deposits or withdrawals — only beginning, ending, and years.',
	tool_cagr_formula_item_3: 'Results are educational illustrations, not forecasts or investment advice.',
	tool_cagr_example_title: 'Example',
	tool_cagr_example:
		'Example: beginning 10,000, ending 16,105.10, years 5 → CAGR = ((16105.10 / 10000)^(1/5) − 1) × 100 ≈ 10.00%.',
	tool_cagr_usecases_title: 'When to use it',
	tool_cagr_usecase_1: 'Compare multi-year investment or revenue growth on an annualized basis (illustration only).',
	tool_cagr_usecase_2: 'Coursework: practice the CAGR percentage with fixed beginning, ending, and years.',
	tool_cagr_usecase_3: 'Rough annualized return sketch before talking to an advisor — not a substitute for full analysis.',
	tool_cagr_faq_q1: 'What CAGR formula does this use?',
	tool_cagr_faq_a1:
		'CAGR = ((Ending value ÷ Beginning value)^(1 ÷ Years) − 1) × 100. Beginning, ending, and years must all be greater than zero.',
	tool_cagr_faq_q2: 'How is CAGR different from simple ROI?',
	tool_cagr_faq_a2:
		'Simple ROI is a single-period percentage and ignores how many years the change took. CAGR annualizes growth across the years you enter.',
	tool_cagr_faq_q3: 'What if beginning or ending value is zero or negative?',
	tool_cagr_faq_a3:
		'The calculator requires both values to be greater than zero. Zero or negative inputs make the standard CAGR formula undefined or misleading for this tool.',
	tool_cagr_faq_q4: 'Is this investment advice?',
	tool_cagr_faq_a4:
		'No. Numbers are educational illustrations only and are not investment, tax, or financial advice. Past or hypothetical growth does not guarantee future results.',
	tool_cagr_disclaimer:
		'CAGR results are educational illustrations only and are not investment, tax, or financial advice. Past or hypothetical returns do not guarantee future results. Real portfolios face fees, taxes, cash flows, and risk this page does not model.',
	tool_cagr_references:
		'Investopedia CAGR definition and formula guides; standard ((EV/BV)^(1/n) − 1) annualized growth rate.',
	tool_cagr_ref_cagr_label: 'Investopedia — Compound Annual Growth Rate (CAGR)',
	tool_cagr_ref_formula_label: 'Investopedia — Formula for calculating CAGR',
};

export default en;
