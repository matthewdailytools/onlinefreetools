/**
 * i18n tool shard (how-to-calculate-pace / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_pace_title: "Pace Calculator — min/km and Speed",
	tool_pace_description: "Calculate running pace (mm:ss per km) and speed (km/h) from distance and time. Example: 5 km in 25 minutes → 5:00 /km and 12 km/h. Browser-only conversion process for training checks.",
	tool_pace_calculate: "Calculate",
	tool_pace_sample: "Load sample",
	tool_pace_clear: "Clear",
	tool_pace_distKm_label: "Distance (km)",
	tool_pace_distKm_ph: "e.g. 5",
	tool_pace_minutes_label: "Time (minutes)",
	tool_pace_minutes_ph: "e.g. 25",
	tool_pace_paceOut_label: "Pace",
	tool_pace_speedOut_label: "Speed (km/h)",
	tool_pace_result_note: "Pace = minutes/distance as mm:ss per km; speed = distance / (minutes/60).",
	tool_pace_err_generic: "Enter distance > 0 and minutes > 0.",
	tool_pace_how_title: "How it works",
	tool_pace_how_body: "Enter kilometers and total minutes. Pace is formatted as mm:ss /km.",
	tool_pace_formula_title: "Formula",
	tool_pace_formula_body: "min_per_km = minutes/dist; speed = dist/(minutes/60). Notes:",
	tool_pace_formula_item_1: "Does not model elevation or splits.",
	tool_pace_formula_item_2: "Seconds are rounded to nearest second.",
	tool_pace_formula_item_3: "Pair with one-rep-max / heart-rate tools.",
	tool_pace_example_title: "Example",
	tool_pace_example: "Example: 5 km in 25 min → 5:00 /km, 12 km/h.",
	tool_pace_usecases_title: "When to use it",
	tool_pace_usecase_1: "Run workout planning.",
	tool_pace_usecase_2: "Homework pace math.",
	tool_pace_usecase_3: "Compare with HR zones educationally.",
	tool_pace_faq_q1: "Sample?",
	tool_pace_faq_a1: "5 km / 25 min → 5:00 /km.",
	tool_pace_faq_q2: "Miles?",
	tool_pace_faq_a2: "Convert to km first.",
	tool_pace_faq_q3: "Seconds input?",
	tool_pace_faq_a3: "Enter decimal minutes if needed.",
	tool_pace_faq_q4: "Advice?",
	tool_pace_faq_a4: "Educational only.",
	tool_pace_article: "Running pace",
	tool_pace_disclaimer: "Educational running pace only — not professional advice.",
	tool_pace_references: "Standard textbook formulas.",
	tool_pace_ref_a_label: "Wikipedia — Pace",
	tool_pace_ref_b_label: "Wikipedia — Running",
};

export default en;
