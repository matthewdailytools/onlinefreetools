/**
 * i18n tool shard (how-to-calculate-age / en).
 * Chronological age Y/M/D + total days between birth and as-of (UTC calendar).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_age_title: "Age Calculator — Years Months and Days from Two Dates",
	tool_age_description: "Calculate chronological age in years, months and days from a birth date to an as-of date using UTC calendar days. Example: born 2000-01-01 as of 2026-08-09 → 26 years, 7 months, 8 days. Also shows total whole days. Educational calendar math — not legal age advice.",
	tool_age_article: "Find calendar age as years, months and days between two dates, plus total whole days, with borrow steps and a Today shortcut.",
	tool_age_desc: "Age in years/months/days from birth to as-of date. Shows total days.",

	tool_age_hint: "Use YYYY-MM-DD calendar dates (UTC day boundaries). As-of must be on or after birth. Today fills as-of with today's UTC date.",
	tool_age_birth_label: "Birth date",
	tool_age_asof_label: "As-of date",
	tool_age_calculate: "Calculate",
	tool_age_today: "Use today",
	tool_age_sample: "Load sample",
	tool_age_clear: "Clear",
	tool_age_ymdOut_label: "Age",
	tool_age_yearsOut_label: "years",
	tool_age_monthsOut_label: "months",
	tool_age_daysOut_label: "days",
	tool_age_totalDaysOut_label: "Total whole days",
	tool_age_steps_title: "Steps",
	tool_age_step_ymd_tpl: "From {birth} to {asof}: {y} years, {m} months, {d} days after calendar borrow.",
	tool_age_step_borrow_tpl: "Day borrow: when as-of day is before birth day in the month, borrow days from the previous calendar month.",
	tool_age_step_total_tpl: "Total whole days = (as-of − birth) in UTC midnights ÷ 86400000 = {total}.",
	tool_age_result_note: "UTC calendar dates only — not clock time or time zones for legal cutoff. Leap days count when they fall in the interval. Educational only — not eligibility or legal-age advice.",
	tool_age_err_generic: "Enter valid dates (YYYY-MM-DD). As-of must be on or after the birth date.",

	tool_age_how_title: "How to use the age calculator",
	tool_age_how_body: "Enter birth and as-of dates, or tap Use today for as-of, then Calculate. Load sample cycles 2000-01-01→2026-08-09, a leap-day case, same-day age 0, and a year-boundary borrow.",
	tool_age_how_item_1: "Enter the birth date.",
	tool_age_how_item_2: "Enter the as-of date, or click Use today.",
	tool_age_how_item_3: "Click Calculate to see years, months, days and total whole days.",
	tool_age_how_item_4: "Use Load sample to rotate textbook calendar cases.",

	tool_age_why_choose_title: "What this age calculator gives you",
	tool_age_why_choose_item_1: "Full chronological age as years, months and leftover days.",
	tool_age_why_choose_item_2: "Total whole days between the two UTC calendar dates.",
	tool_age_why_choose_item_3: "A Use today shortcut for the as-of field.",
	tool_age_why_choose_item_4: "Visible borrow steps when the day-of-month needs a previous-month loan.",
	tool_age_why_choose_item_5: "Clear boundary: calendar math only — not legal age or eligibility advice.",

	tool_age_formula_title: "Age formulas",
	tool_age_formula_body: "Parse both dates as UTC midnight. Subtract years, then months, then days with calendar borrow. Total days use the millisecond difference divided by 86400000.",
	tool_age_formula_item_1: "years = as-of year − birth year (then adjust if month/day not yet reached).",
	tool_age_formula_item_2: "If as-of day < birth day, borrow the length of the previous calendar month.",
	tool_age_formula_item_3: "If months go negative, borrow 12 months from years.",
	tool_age_formula_item_4: "totalDays = round((asof − birth) / 86400000) in UTC.",
	tool_age_formula_item_5: "Leap days affect totals when they fall inside the interval.",

	tool_age_example_title: "Worked examples",
	tool_age_example: "Load sample starts with birth 2000-01-01 and as-of 2026-08-09 → 26 years, 7 months, 8 days. Next checks a Feb 29 birth against Feb 28 2024. Then same-day age 0. The last sample crosses a year boundary from 1985-12-31 to 2026-01-01.",

	tool_age_usecases_title: "When to use an age calculator",
	tool_age_usecase_1: "Forms that ask for age in years, months and days.",
	tool_age_usecase_2: "Homework on calendar differences and month borrow.",
	tool_age_usecase_3: "Quick check of total whole days between two calendar dates.",
	tool_age_usecase_4: "Pair with the date-difference tool when you need a span that is not framed as age.",

	tool_age_faq_q1: "How is chronological age calculated?",
	tool_age_faq_a1: "Subtract calendar years, months and days with borrow. Example: 2000-01-01 to 2026-08-09 → 26y 7m 8d.",
	tool_age_faq_q2: "What does Use today do?",
	tool_age_faq_a2: "It fills the as-of field with today's UTC calendar date and recalculates.",
	tool_age_faq_q3: "Are time zones included?",
	tool_age_faq_a3: "No. Dates are treated as UTC calendar days, not local clock times.",
	tool_age_faq_q4: "What if birth is after as-of?",
	tool_age_faq_a4: "The page rejects that case. As-of must be on or after birth.",
	tool_age_faq_q5: "How do leap days affect the result?",
	tool_age_faq_a5: "They count in total days when they fall in the interval, and month lengths follow the calendar when borrowing.",
	tool_age_faq_q6: "Is this legal age or eligibility advice?",
	tool_age_faq_a6: "No. Educational calendar math only — not legal, medical or eligibility advice.",
	tool_age_faq_q7: "How is this different from date difference?",
	tool_age_faq_a7: "This page frames the span as chronological age (Y/M/D). Use the related date-difference tool for other span wordings.",

	tool_age_disclaimer: "Educational calendar age only — not legal age, eligibility, medical or official identity advice.",
	tool_age_references: "Wikipedia chronological age and calendar date for educational context.",
	tool_age_ref_a_label: "Wikipedia — Chronological age",
	tool_age_ref_b_label: "Wikipedia — Calendar date",
};

export default en;
