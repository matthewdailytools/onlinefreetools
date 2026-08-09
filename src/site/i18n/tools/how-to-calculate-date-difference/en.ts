/**
 * i18n tool shard (how-to-calculate-date-difference / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_date_difference_title: "Date Difference Calculator — Days and Weeks",
	tool_date_difference_description: "Calculate whole days and weeks between two UTC calendar dates for planning gaps. Example: 2024-01-01 to 2024-01-11 → 10 days (1 week + 3 days). Browser-only date arithmetic process.",
	tool_date_difference_calculate: "Calculate",
	tool_date_difference_sample: "Load sample",
	tool_date_difference_clear: "Clear",
	tool_date_difference_start_label: "Start date",
	tool_date_difference_end_label: "End date",
	tool_date_difference_daysOut_label: "Days",
	tool_date_difference_weeksOut_label: "Weeks",
	tool_date_difference_result_note: "Days = |end−start| in whole UTC days; weeks = days / 7.",
	tool_date_difference_err_generic: "Enter two valid YYYY-MM-DD dates.",
	tool_date_difference_how_title: "How it works",
	tool_date_difference_how_body: "Enter start and end dates. The tool reports absolute whole days between them and days/7 as weeks.",
	tool_date_difference_formula_title: "Formula",
	tool_date_difference_formula_body: "Parse UTC YYYY-MM-DD; days = round(|end−start|/86400000); weeks = days/7. Notes:",
	tool_date_difference_formula_item_1: "Order does not matter for the absolute span.",
	tool_date_difference_formula_item_2: "Clock time is ignored — calendar dates only.",
	tool_date_difference_formula_item_3: "Pair with the age tool for Y/M/D breakdowns.",
	tool_date_difference_example_title: "Example",
	tool_date_difference_example: "Example: 2024-01-01 to 2024-01-11 → 10 days.",
	tool_date_difference_usecases_title: "When to use it",
	tool_date_difference_usecase_1: "Project duration sketches.",
	tool_date_difference_usecase_2: "Homework on day counts.",
	tool_date_difference_usecase_3: "Compare with age for calendar age.",
	tool_date_difference_faq_q1: "Sample?",
	tool_date_difference_faq_a1: "2024-01-01 → 2024-01-11 = 10 days.",
	tool_date_difference_faq_q2: "Signed?",
	tool_date_difference_faq_a2: "We report absolute days.",
	tool_date_difference_faq_q3: "Timezones?",
	tool_date_difference_faq_a3: "UTC calendar days.",
	tool_date_difference_faq_q4: "Advice?",
	tool_date_difference_faq_a4: "Educational only.",
	tool_date_difference_article: "Date difference",
	tool_date_difference_disclaimer: "Educational date difference only — not professional advice.",
	tool_date_difference_references: "Standard textbook formulas.",
	tool_date_difference_ref_a_label: "Wikipedia — ISO 8601",
	tool_date_difference_ref_b_label: "Wikipedia — Calendar date",
};

export default en;
