/**
 * i18n tool shard (how-to-calculate-age / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_age_title: "Age Calculator — Chronological Age from Birthdate",
	tool_age_description: "Calculate calendar age from a birth date and an as-of date (UTC YYYY-MM-DD). Sample: born 2000-01-01 as of 2026-08-09 → 26 years, 7 months, 8 days. Browser-only.",
	tool_age_calculate: "Calculate",
	tool_age_sample: "Load sample",
	tool_age_clear: "Clear",
	tool_age_birth_label: "Birth date",
	tool_age_asof_label: "As-of date",
	tool_age_yearsOut_label: "Years",
	tool_age_monthsOut_label: "Months",
	tool_age_daysOut_label: "Days",
	tool_age_totalDaysOut_label: "Total days",
	tool_age_result_note: "Calendar age in years / months / days using UTC calendar dates (not clock time).",
	tool_age_err_generic: "Enter valid YYYY-MM-DD dates; as-of must be on or after birth.",
	tool_age_how_title: "How it works",
	tool_age_how_body: "Pick a birth date and an as-of date. Age is the calendar difference (years, then leftover months and days), plus total whole days between the dates.",
	tool_age_formula_title: "Formula",
	tool_age_formula_body: "Parse YYYY-MM-DD as UTC midnight. Subtract calendar components with month/day borrow; totalDays = (asof−birth)/86400000. Notes:",
	tool_age_formula_item_1: "Uses calendar months, not a fixed 30-day month.",
	tool_age_formula_item_2: "Ignores local timezone offsets by using UTC date parts.",
	tool_age_formula_item_3: "Leap days affect day totals when they fall in the interval.",
	tool_age_example_title: "Example",
	tool_age_example: "Example: birth 2000-01-01, as-of 2026-08-09 → 26 years, 7 months, 8 days.",
	tool_age_usecases_title: "When to use it",
	tool_age_usecase_1: "Forms that need age in Y/M/D.",
	tool_age_usecase_2: "Homework on calendar differences.",
	tool_age_usecase_3: "Pair with date-difference for span drills.",
	tool_age_faq_q1: "Sample?",
	tool_age_faq_a1: "2000-01-01 to 2026-08-09 → 26y 7m 8d.",
	tool_age_faq_q2: "Timezone?",
	tool_age_faq_a2: "Dates are treated as UTC calendar days.",
	tool_age_faq_q3: "Future birth?",
	tool_age_faq_a3: "As-of must be ≥ birth.",
	tool_age_faq_q4: "Advice?",
	tool_age_faq_a4: "Educational only.",
	tool_age_article: "Calendar age",
	tool_age_disclaimer: "Educational age only — not professional advice.",
	tool_age_references: "Standard textbook formulas.",
	tool_age_ref_a_label: "Wikipedia — Ageing",
	tool_age_ref_b_label: "Wikipedia — Calendar date",
};

export default en;
