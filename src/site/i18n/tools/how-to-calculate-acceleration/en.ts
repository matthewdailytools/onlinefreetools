/**
 * i18n tool shard (how-to-calculate-acceleration / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_acceleration_title: "Acceleration Calculator — Change in Velocity",
	tool_acceleration_description: "Calculate constant acceleration with a = (v − v0) / t for straight-line motion. Example: v0=0, v=10, t=2 → a=5. Browser-only; educational check of the formula assumptions.",
	tool_acceleration_calculate: "Calculate",
	tool_acceleration_sample: "Load sample",
	tool_acceleration_clear: "Clear",
	tool_acceleration_v0_label: "Initial velocity v0",
	tool_acceleration_v0_ph: "e.g. 0",
	tool_acceleration_v_label: "Final velocity v",
	tool_acceleration_v_ph: "e.g. 10",
	tool_acceleration_t_label: "Time t",
	tool_acceleration_t_ph: "e.g. 2",
	tool_acceleration_accOut_label: "Acceleration",
	tool_acceleration_result_note: "a = (v − v0) / t for constant acceleration.",
	tool_acceleration_err_generic: "Enter finite v0, v and t > 0.",
	tool_acceleration_how_title: "How it works",
	tool_acceleration_how_body: "Enter initial and final velocity and the elapsed time.",
	tool_acceleration_formula_title: "Formula",
	tool_acceleration_formula_body: "a=(v−v0)/t. Notes:",
	tool_acceleration_formula_item_1: "Assumes constant acceleration.",
	tool_acceleration_formula_item_2: "Signs follow your velocity convention.",
	tool_acceleration_formula_item_3: "Pair with velocity / Ohm tools.",
	tool_acceleration_example_title: "Example",
	tool_acceleration_example: "Example: v0=0, v=10, t=2 → a=5.",
	tool_acceleration_usecases_title: "When to use it",
	tool_acceleration_usecase_1: "Physics homework.",
	tool_acceleration_usecase_2: "Quick a check.",
	tool_acceleration_usecase_3: "Compare with velocity tool.",
	tool_acceleration_faq_q1: "Sample?",
	tool_acceleration_faq_a1: "(10−0)/2=5.",
	tool_acceleration_faq_q2: "Negative a?",
	tool_acceleration_faq_a2: "Allowed if v < v0.",
	tool_acceleration_faq_q3: "t=0?",
	tool_acceleration_faq_a3: "Rejected.",
	tool_acceleration_faq_q4: "Advice?",
	tool_acceleration_faq_a4: "Educational only.",
	tool_acceleration_article: "Acceleration",
	tool_acceleration_disclaimer: "Educational acceleration only — not professional advice.",
	tool_acceleration_references: "Standard textbook formulas.",
	tool_acceleration_ref_a_label: "Wikipedia — Acceleration",
	tool_acceleration_ref_b_label: "Wikipedia — Kinematics",
};

export default en;
