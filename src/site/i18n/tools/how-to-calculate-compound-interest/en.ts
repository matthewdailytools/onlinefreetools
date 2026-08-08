/**
 * i18n tool shard (how-to-calculate-compound-interest / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_compound_interest_title: 'Compound Interest Calculator — How to Calculate Future Value',
	tool_compound_interest_description:
		'Calculate compound interest future value from principal, annual rate, years, and compounding frequency. Formula A = P(1 + r/n)^(nt); optional simple-interest mode. Example: 10,000 at 5% for 10 years, compounded yearly → about 16,288.95. Runs in your browser; educational only — not investment advice.',
	tool_compound_interest_article:
		'Compound interest adds interest on prior interest. This page shows the standard discrete formula, lets you switch to simple interest for the same inputs, and states assumptions so classroom and personal estimates stay transparent.',
	tool_compound_interest_calculate: 'Calculate',
	tool_compound_interest_sample: 'Load sample',
	tool_compound_interest_clear: 'Clear',
	tool_compound_interest_mode_label: 'Interest mode',
	tool_compound_interest_mode_compound: 'Compound interest',
	tool_compound_interest_mode_simple: 'Simple interest',
	tool_compound_interest_principal_label: 'Principal (P)',
	tool_compound_interest_principal_placeholder: 'e.g. 10000',
	tool_compound_interest_rate_label: 'Annual interest rate (%)',
	tool_compound_interest_rate_placeholder: 'e.g. 5',
	tool_compound_interest_years_label: 'Time (years)',
	tool_compound_interest_years_placeholder: 'e.g. 10',
	tool_compound_interest_freq_label: 'Compounds per year (n)',
	tool_compound_interest_freq_1: 'Annually (1)',
	tool_compound_interest_freq_2: 'Semiannually (2)',
	tool_compound_interest_freq_4: 'Quarterly (4)',
	tool_compound_interest_freq_12: 'Monthly (12)',
	tool_compound_interest_freq_365: 'Daily (365)',
	tool_compound_interest_result_future: 'Future value (A)',
	tool_compound_interest_result_interest: 'Interest earned',
	tool_compound_interest_result_note: 'Educational illustration only — not investment advice.',
	tool_compound_interest_err_principal: 'Principal must be greater than zero.',
	tool_compound_interest_err_years: 'Time in years must be greater than zero.',
	tool_compound_interest_err_rate: 'Annual rate must be zero or a positive number.',
	tool_compound_interest_err_overflow: 'Result is too large. Try a shorter period or smaller rate.',
	tool_compound_interest_how_title: 'How it works',
	tool_compound_interest_how_body:
		'Enter principal, nominal annual rate as a percent, and years. For compound mode, pick how many times interest compounds each year. The tool computes future value and interest. Simple mode ignores compounding frequency and uses A = P(1 + r t).',
	tool_compound_interest_formula_title: 'Formula and assumptions',
	tool_compound_interest_formula_body:
		'Compound: A = P (1 + r/n)^(n t), where r is the nominal annual rate as a decimal and n is compounds per year. Simple: A = P (1 + r t). Keep these assumptions in mind:',
	tool_compound_interest_formula_item_1:
		'Rate is a nominal annual percentage you enter; taxes, fees, and inflation are not deducted.',
	tool_compound_interest_formula_item_2:
		'No extra deposits or withdrawals during the period — only the starting principal grows.',
	tool_compound_interest_formula_item_3:
		'Compounding frequency changes effective growth; APY details are summarized in the FAQ, not as a separate tool.',
	tool_compound_interest_formula_item_4:
		'Results are educational illustrations, not forecasts or investment advice.',
	tool_compound_interest_example_title: 'Example',
	tool_compound_interest_example:
		'Example: principal 10,000, annual rate 5%, 10 years, compounded once per year → A ≈ 16,288.95 and interest ≈ 6,288.95. The same inputs in simple mode → A = 15,000.',
	tool_compound_interest_usecases_title: 'When to use it',
	tool_compound_interest_usecase_1:
		'Savings estimate: rough future balance if a lump sum compounds at a stated rate (illustration only).',
	tool_compound_interest_usecase_2:
		'Coursework: practice the compound-interest formula with fixed P, r, n, and t.',
	tool_compound_interest_usecase_3:
		'Compare modes: switch to simple interest on the same inputs to see how compounding changes the result.',
	tool_compound_interest_faq_q1: 'What compound interest formula does this use?',
	tool_compound_interest_faq_a1:
		'A = P (1 + r/n)^(n t) with r as a decimal annual rate and n compounds per year. Interest earned is A − P.',
	tool_compound_interest_faq_q2: 'How is simple interest different?',
	tool_compound_interest_faq_a2:
		'Simple interest uses A = P (1 + r t) and does not compound. Choose Simple in the mode list; frequency is ignored.',
	tool_compound_interest_faq_q3: 'What does compounding frequency mean?',
	tool_compound_interest_faq_a3:
		'n is how many times per year interest is added (1 yearly, 12 monthly, 365 daily). Higher n usually grows the balance faster for the same nominal rate.',
	tool_compound_interest_faq_q4: 'Is this investment advice?',
	tool_compound_interest_faq_a4:
		'No. Numbers are educational illustrations only and are not investment, tax, or financial advice.',
	tool_compound_interest_faq_q5: 'What if the rate is zero?',
	tool_compound_interest_faq_a5: 'If the annual rate is 0%, future value equals principal and interest is 0.',
	tool_compound_interest_disclaimer:
		'Compound and simple interest results are educational illustrations only and are not investment, tax, or financial advice. Past or hypothetical growth does not guarantee future results.',
	tool_compound_interest_references:
		'Investopedia definitions of compound interest and simple interest; standard discrete compounding formula A = P(1 + r/n)^(nt).',
	tool_compound_interest_ref_compound_label: 'Investopedia — Compound Interest',
	tool_compound_interest_ref_simple_label: 'Investopedia — Simple Interest',
};

export default en;
