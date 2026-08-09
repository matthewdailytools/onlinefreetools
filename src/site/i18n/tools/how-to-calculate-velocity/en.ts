/**
 * i18n tool shard (how-to-calculate-velocity / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_velocity_title: "Velocity Calculator — Distance over Time",
	tool_velocity_description: "Calculate average velocity with v = d / t from distance and time. Example: distance 100, time 20 → velocity 5 (same unit system). Browser-only; educational check of the process and units.",
	tool_velocity_calculate: "Calculate",
	tool_velocity_sample: "Load sample",
	tool_velocity_clear: "Clear",
	tool_velocity_dist_label: "Distance",
	tool_velocity_dist_ph: "e.g. 100",
	tool_velocity_time_label: "Time",
	tool_velocity_time_ph: "e.g. 20",
	tool_velocity_velOut_label: "Velocity",
	tool_velocity_result_note: "v = distance / time (average speed along the path in 1D teaching form).",
	tool_velocity_err_generic: "Enter distance ≥ 0 and time > 0.",
	tool_velocity_how_title: "How it works",
	tool_velocity_how_body: "Enter distance and time in consistent units (e.g., m and s → m/s).",
	tool_velocity_formula_title: "Formula",
	tool_velocity_formula_body: "v=d/t. Notes:",
	tool_velocity_formula_item_1: "This is a scalar average-speed form for homework.",
	tool_velocity_formula_item_2: "Direction/vector velocity is not modeled.",
	tool_velocity_formula_item_3: "Pair with acceleration / density tools.",
	tool_velocity_example_title: "Example",
	tool_velocity_example: "Example: d=100, t=20 → v=5.",
	tool_velocity_usecases_title: "When to use it",
	tool_velocity_usecase_1: "Physics homework.",
	tool_velocity_usecase_2: "Quick v check.",
	tool_velocity_usecase_3: "Compare with acceleration.",
	tool_velocity_faq_q1: "Sample?",
	tool_velocity_faq_a1: "100/20=5.",
	tool_velocity_faq_q2: "Vectors?",
	tool_velocity_faq_a2: "Not here.",
	tool_velocity_faq_q3: "t=0?",
	tool_velocity_faq_a3: "Rejected.",
	tool_velocity_faq_q4: "Advice?",
	tool_velocity_faq_a4: "Educational only.",
	tool_velocity_article: "Velocity",
	tool_velocity_disclaimer: "Educational velocity only — not professional advice.",
	tool_velocity_references: "Standard textbook formulas.",
	tool_velocity_ref_a_label: "Wikipedia — Velocity",
	tool_velocity_ref_b_label: "Wikipedia — Speed",
};

export default en;
