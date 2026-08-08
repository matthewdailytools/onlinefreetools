/**
 * i18n tool shard (how-to-calculate-gross-margin / en).
 * English master locale — full UI, How/Formula/FAQ, and YMYL disclaimer keys.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_gross_margin_title: 'Gross Margin Calculator — How to Calculate Gross Margin',
	tool_gross_margin_description:
		'Calculate gross profit and gross margin percentage from revenue and cost of goods sold (COGS). Example: revenue 10,000, COGS 6,000 → gross profit 4,000 and margin 40%. Runs in your browser; educational only — not business or investment advice.',
	tool_gross_margin_article:
		'Gross margin shows how much of each revenue dollar remains after COGS. This page keeps gross profit and gross margin % on one educational URL and leaves net or operating margins to a separate tool when you need them.',
	tool_gross_margin_calculate: 'Calculate',
	tool_gross_margin_sample: 'Load sample',
	tool_gross_margin_clear: 'Clear',
	tool_gross_margin_revenue_label: 'Revenue (sales)',
	tool_gross_margin_revenue_ph: 'e.g. 10000',
	tool_gross_margin_cogs_label: 'Cost of goods sold (COGS)',
	tool_gross_margin_cogs_ph: 'e.g. 6000',
	tool_gross_margin_result_profit: 'Gross profit',
	tool_gross_margin_result_margin: 'Gross margin',
	tool_gross_margin_result_note: 'Educational illustration only — not business or investment advice.',
	tool_gross_margin_err_revenue: 'Revenue must be greater than zero.',
	tool_gross_margin_err_cogs: 'COGS must be zero or a positive number.',
	tool_gross_margin_how_title: 'How it works',
	tool_gross_margin_how_body:
		'Enter revenue and COGS. The tool computes gross profit and gross margin %. Markup vs margin and net profit stay in FAQ or related tools — not separate doorway URLs.',
	tool_gross_margin_formula_title: 'Formula and assumptions',
	tool_gross_margin_formula_body:
		'Gross profit = Revenue − COGS. Gross margin % = (Gross profit ÷ Revenue) × 100. Assumptions:',
	tool_gross_margin_formula_item_1: 'Revenue and COGS use the same period and currency; taxes and operating expenses are not modeled.',
	tool_gross_margin_formula_item_2: 'COGS is treated as product cost only — SG&A and interest stay out of this calculator.',
	tool_gross_margin_formula_item_3: 'Results are educational illustrations, not forecasts or business advice.',
	tool_gross_margin_example_title: 'Example',
	tool_gross_margin_example:
		'Example: revenue 10,000, COGS 6,000 → gross profit 4,000 → gross margin 40%.',
	tool_gross_margin_usecases_title: 'When to use it',
	tool_gross_margin_usecase_1: 'Classwork: practice the gross margin percentage formula with fixed revenue and COGS.',
	tool_gross_margin_usecase_2: 'Rough product-level margin sketch before talking to an advisor (illustration only).',
	tool_gross_margin_usecase_3: 'See gross profit and margin % together without a separate markup-only URL.',
	tool_gross_margin_faq_q1: 'What gross margin formula does this use?',
	tool_gross_margin_faq_a1:
		'Gross profit = Revenue − COGS. Gross margin % = Gross profit ÷ Revenue × 100.',
	tool_gross_margin_faq_q2: 'What if COGS is greater than revenue?',
	tool_gross_margin_faq_a2:
		'Gross profit and margin become negative. That is allowed in the model so you can see loss-making cases — still not business advice.',
	tool_gross_margin_faq_q3: 'Is this business advice?',
	tool_gross_margin_faq_a3:
		'No. Numbers are educational illustrations only and are not business, tax, or investment advice.',
	tool_gross_margin_faq_q4: 'Gross margin vs markup?',
	tool_gross_margin_faq_a4:
		'Margin divides profit by revenue; markup divides profit by cost. This page focuses on margin; markup is only explained in FAQ, not a second tool URL.',
	tool_gross_margin_disclaimer:
		'Gross margin results are educational illustrations only and are not business, financial, tax, or investment advice. Real businesses face fees, taxes, and cost classifications this page does not model.',
	tool_gross_margin_references:
		'Investopedia gross margin and gross profit definitions; standard (Revenue − COGS) / Revenue formula.',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit',
};

export default en;
