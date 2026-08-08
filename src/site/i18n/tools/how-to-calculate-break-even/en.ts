/**
 * i18n tool shard (how-to-calculate-break-even / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_break_even_title: 'Break-Even Calculator — How to Calculate Break-Even Point',
	tool_break_even_description:
		'Calculate the break-even point in units and revenue from fixed costs, price per unit, and variable cost per unit. Contribution margin is shown so the formula stays transparent. Example: fixed costs 10,000, price 50, variable cost 30 → 500 units and 25,000 revenue. Runs in your browser; educational only — not business or investment advice.',
	tool_break_even_article:
		'Break-even is where total contribution covers fixed costs. This page uses units = fixed costs ÷ (price − variable cost) and keeps revenue and contribution margin on the same educational URL.',
	tool_break_even_calculate: 'Calculate',
	tool_break_even_sample: 'Load sample',
	tool_break_even_clear: 'Clear',
	tool_break_even_fixed_label: 'Fixed costs',
	tool_break_even_fixed_ph: 'e.g. 10000',
	tool_break_even_price_label: 'Price per unit',
	tool_break_even_price_ph: 'e.g. 50',
	tool_break_even_var_label: 'Variable cost per unit',
	tool_break_even_var_ph: 'e.g. 30',
	tool_break_even_result_units: 'Break-even units',
	tool_break_even_result_revenue: 'Break-even revenue',
	tool_break_even_result_cm: 'Contribution margin per unit',
	tool_break_even_result_note: 'Educational illustration only — not business or investment advice.',
	tool_break_even_err_fixed: 'Fixed costs must be greater than zero.',
	tool_break_even_err_price: 'Price must be greater than zero and variable cost must be zero or positive.',
	tool_break_even_err_margin: 'Price must be greater than variable cost so contribution margin is positive.',
	tool_break_even_how_title: 'How it works',
	tool_break_even_how_body:
		'Enter fixed costs, selling price per unit, and variable cost per unit. The tool computes contribution margin, break-even units, and break-even revenue. Industry labels (retail, SaaS, etc.) stay as use-case text — not separate URLs.',
	tool_break_even_formula_title: 'Formula and assumptions',
	tool_break_even_formula_body:
		'Break-even units Q = FC / (P − V), where FC is fixed cost, P is price per unit, and V is variable cost per unit. Break-even revenue = Q × P. Contribution margin per unit = P − V. Assumptions:',
	tool_break_even_formula_item_1: 'Costs and prices are constant; taxes, discounts, and inventory are not modeled.',
	tool_break_even_formula_item_2: 'One product (or average unit) view — mix shifts are out of scope here.',
	tool_break_even_formula_item_3: 'Results are educational illustrations, not forecasts or business advice.',
	tool_break_even_example_title: 'Example',
	tool_break_even_example:
		'Example: fixed costs 10,000, price 50, variable cost 30 → contribution margin 20 → break-even 500 units and revenue 25,000.',
	tool_break_even_usecases_title: 'When to use it',
	tool_break_even_usecase_1: 'Classwork: practice the break-even units formula with fixed FC, P, and V.',
	tool_break_even_usecase_2: 'Rough sketch of how many units cover fixed costs before talking to an advisor (illustration only).',
	tool_break_even_usecase_3: 'See contribution margin and break-even revenue on one page without a separate tool URL.',
	tool_break_even_faq_q1: 'What break-even formula does this use?',
	tool_break_even_faq_a1: 'Q = FC / (P − V). Revenue at break-even is Q × P. Contribution margin per unit is P − V.',
	tool_break_even_faq_q2: 'What if price equals variable cost?',
	tool_break_even_faq_a2: 'Contribution margin is zero or negative, so there is no finite break-even volume. Raise price or lower variable cost in the model.',
	tool_break_even_faq_q3: 'Is this business advice?',
	tool_break_even_faq_a3: 'No. Numbers are educational illustrations only and are not business, tax, or investment advice.',
	tool_break_even_faq_q4: 'Units vs revenue break-even?',
	tool_break_even_faq_a4: 'Both appear in the results: units from the formula, revenue as units times price — same page, not two tools.',
	tool_break_even_disclaimer:
		'Break-even results are educational illustrations only and are not business, financial, tax, or investment advice. Real businesses face fees, taxes, and changing costs this page does not model.',
	tool_break_even_references:
		'Investopedia break-even point and contribution margin definitions; standard FC/(P−V) units formula.',
	tool_break_even_ref_bep_label: 'Investopedia — Break-Even Point',
	tool_break_even_ref_cm_label: 'Investopedia — Contribution Margin',
};

export default en;
