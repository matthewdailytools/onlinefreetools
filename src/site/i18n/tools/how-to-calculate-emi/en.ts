/**
 * i18n tool shard (how-to-calculate-emi / en).
 * 母版文案：EMI / 等额本息贷款月供计算器。
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_emi_title: 'EMI Calculator — How to Calculate Loan Payments',
	tool_emi_description:
		'Calculate equated monthly installment (EMI) loan payments from principal, annual rate, and tenure. Standard reducing-balance formula with an amortization schedule. Optional home price and down payment, plus monthly or biweekly payments. Example: 100,000 at 6% for 5 years, monthly → EMI about 1,933.28. Runs in your browser; educational only — not lending or credit advice.',
	tool_emi_article:
		'EMI spreads a fixed loan into equal periodic payments of principal plus interest. This page uses the standard reducing-balance formula, shows early schedule rows, and keeps mortgage, auto, and personal-loan scenarios on one URL.',
	tool_emi_calculate: 'Calculate',
	tool_emi_sample: 'Load sample',
	tool_emi_clear: 'Clear',
	tool_emi_input_mode_label: 'Amount input',
	tool_emi_input_mode_loan: 'Loan amount',
	tool_emi_input_mode_home: 'Home price and down payment',
	tool_emi_principal_label: 'Loan amount (P)',
	tool_emi_principal_placeholder: 'e.g. 100000',
	tool_emi_price_label: 'Home / asset price',
	tool_emi_price_placeholder: 'e.g. 120000',
	tool_emi_down_label: 'Down payment',
	tool_emi_down_placeholder: 'e.g. 20000',
	tool_emi_rate_label: 'Annual interest rate (%)',
	tool_emi_rate_placeholder: 'e.g. 6',
	tool_emi_years_label: 'Tenure (years)',
	tool_emi_years_placeholder: 'e.g. 5',
	tool_emi_freq_label: 'Payment frequency',
	tool_emi_freq_monthly: 'Monthly (12 / year)',
	tool_emi_freq_biweekly: 'Biweekly (26 / year)',
	tool_emi_result_emi: 'Payment per period (EMI)',
	tool_emi_result_periods: 'Number of payments',
	tool_emi_result_total: 'Total amount paid',
	tool_emi_result_interest: 'Total interest',
	tool_emi_result_note: 'Educational illustration only — not lending, mortgage, or credit advice.',
	tool_emi_schedule_title: 'Amortization schedule (first year)',
	tool_emi_schedule_show_all: 'Show full schedule',
	tool_emi_schedule_show_year: 'Show first 12 periods',
	tool_emi_col_period: 'Period',
	tool_emi_col_payment: 'Payment',
	tool_emi_col_interest: 'Interest',
	tool_emi_col_principal: 'Principal',
	tool_emi_col_balance: 'Balance',
	tool_emi_err_principal: 'Loan amount must be greater than zero.',
	tool_emi_err_years: 'Tenure in years must be greater than zero.',
	tool_emi_err_rate: 'Annual rate must be zero or a positive number.',
	tool_emi_err_periods: 'Payment count is invalid. Check tenure and frequency.',
	tool_emi_err_overflow: 'Result is not finite. Check rate and tenure.',
	tool_emi_how_title: 'How it works',
	tool_emi_how_body:
		'Enter the loan amount (or price minus down payment), nominal annual rate as a percent, and years. Choose monthly or biweekly payments. The tool computes the fixed payment, totals, and a reducing-balance schedule. Home, auto, and personal loans share this page — only the numbers change.',
	tool_emi_formula_title: 'Formula and assumptions',
	tool_emi_formula_body:
		'With period rate r = annual_rate / m and n periods: E = P × r(1+r)^n / ((1+r)^n − 1) when r > 0. If r = 0, E = P / n. Keep these assumptions in mind:',
	tool_emi_formula_item_1:
		'Rate is a nominal annual percentage; taxes, insurance, fees, and variable rates are not included.',
	tool_emi_formula_item_2:
		'Payments are equal reducing-balance installments; there are no extra principal payments in this model.',
	tool_emi_formula_item_3:
		'Biweekly uses 26 periods per year as an educational frequency option — not a separate mortgage product page.',
	tool_emi_formula_item_4:
		'Results are educational illustrations, not loan offers, underwriting, or financial advice.',
	tool_emi_example_title: 'Example',
	tool_emi_example:
		'Example: loan 100,000, annual rate 6%, 5 years, monthly payments → EMI ≈ 1,933.28, total interest ≈ 15,996.81, total paid ≈ 115,996.81. Period 1 interest ≈ 500.00 and principal ≈ 1,433.28.',
	tool_emi_usecases_title: 'When to use it',
	tool_emi_usecase_1:
		'Mortgage sketch: rough monthly payment before talking to a lender (illustration only).',
	tool_emi_usecase_2:
		'Auto or personal loan classwork: practice EMI and amortization with fixed P, r, and n.',
	tool_emi_usecase_3:
		'See interest vs principal early in the schedule without opening a separate amortization site.',
	tool_emi_faq_q1: 'What EMI formula does this use?',
	tool_emi_faq_a1:
		'E = P × r(1+r)^n / ((1+r)^n − 1), where r is the period rate (annual rate ÷ 12 or ÷ 26) and n is the number of payments. Total interest is n×E − P.',
	tool_emi_faq_q2: 'What is an amortization schedule?',
	tool_emi_faq_a2:
		'Each row splits one payment into interest on the remaining balance and principal reduction. Early periods are usually interest-heavy.',
	tool_emi_faq_q3: 'Monthly vs biweekly payments?',
	tool_emi_faq_a3:
		'Monthly uses 12 periods per year; biweekly uses 26. Same loan inputs, different period rate and count — not a separate tool URL.',
	tool_emi_faq_q4: 'Is this lending or mortgage advice?',
	tool_emi_faq_a4:
		'No. Numbers are educational illustrations only and are not loan offers, credit decisions, or financial advice.',
	tool_emi_faq_q5: 'What if the rate is zero?',
	tool_emi_faq_a5: 'If the annual rate is 0%, each payment is P divided by the number of periods and total interest is 0.',
	tool_emi_disclaimer:
		'EMI and amortization results are educational illustrations only and are not lending, mortgage, tax, or financial advice. Real loans may include fees, insurance, taxes, and underwriting rules this page does not model.',
	tool_emi_references:
		'Investopedia equated monthly installment (EMI); Consumer Financial Protection Bureau owning-a-home rate exploration materials; standard reducing-balance installment formula.',
	tool_emi_ref_emi_label: 'Investopedia — Equated Monthly Installment (EMI)',
	tool_emi_ref_cfpb_label: 'CFPB — Explore rates (owning a home)',
};

export default en;
