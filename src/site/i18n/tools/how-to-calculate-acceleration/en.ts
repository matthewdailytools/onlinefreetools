/**
 * i18n tool shard (how-to-calculate-acceleration / en).
 * English master: constant acceleration a=(v−v0)/t; solve for a, v, v0 or t with working.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_acceleration_title: "Acceleration Calculator — From Change in Velocity Over Time",
	tool_acceleration_description:
		"Calculate constant acceleration with a = (v − v0) ÷ t, or rearrange to find final velocity, initial velocity or time. Example: v0 = 0, v = 10, t = 2 → a = 5. Working is shown for each step.",
	tool_acceleration_calculate: "Calculate",
	tool_acceleration_sample: "Load sample",
	tool_acceleration_clear: "Clear",
	tool_acceleration_solve_label: "Solve for",
	tool_acceleration_solve_a: "Acceleration (a)",
	tool_acceleration_solve_v: "Final velocity (v)",
	tool_acceleration_solve_v0: "Initial velocity (v0)",
	tool_acceleration_solve_t: "Time (t)",
	tool_acceleration_v0_label: "Initial velocity v0",
	tool_acceleration_v0_ph: "e.g. 0",
	tool_acceleration_v_label: "Final velocity v",
	tool_acceleration_v_ph: "e.g. 10",
	tool_acceleration_t_label: "Time t",
	tool_acceleration_t_ph: "e.g. 2",
	tool_acceleration_a_label: "Acceleration a",
	tool_acceleration_a_ph: "e.g. 5",
	tool_acceleration_accOut_label: "Acceleration",
	tool_acceleration_vOut_label: "Final velocity",
	tool_acceleration_v0Out_label: "Initial velocity",
	tool_acceleration_tOut_label: "Time",
	tool_acceleration_work_label: "Working",
	tool_acceleration_result_note:
		"Assumes constant acceleration in a straight line. Keep velocity and time in matching units (e.g. m/s and s → m/s²). Negative a means slowing down if speeds are signed the same way.",
	tool_acceleration_err_finite: "Enter a finite number in every visible field.",
	tool_acceleration_err_time: "Time must be greater than 0.",
	tool_acceleration_err_zero_a: "Acceleration cannot be 0 when solving for time (division by zero).",
	tool_acceleration_how_title: "How it works",
	tool_acceleration_how_body:
		"For constant acceleration, a = (v − v0) ÷ t. Pick which quantity you need; enter the other three (or the matching pair when solving for a), and the calculator rearranges the same formula.",
	tool_acceleration_how_item_1: "Choose Solve for: acceleration, final velocity, initial velocity or time.",
	tool_acceleration_how_item_2: "Fill every visible field. Use one consistent unit system (SI is simplest).",
	tool_acceleration_how_item_3: "Click Calculate.",
	tool_acceleration_how_item_4: "Read the answer and the working line, for example a = (10 − 0) ÷ 2 = 5.",
	tool_acceleration_why_choose_title: "Why choose our Acceleration Calculator tools",
	tool_acceleration_why_choose_item_1:
		"One formula, four unknowns: you can start from the numbers homework actually gives, not only from a blank a box.",
	tool_acceleration_why_choose_item_2:
		"The working is shown, so you can copy (v − v0) ÷ t or v = v0 + a t into your notebook.",
	tool_acceleration_why_choose_item_3:
		"Impossible cases are named: t ≤ 0, or a = 0 when solving for time.",
	tool_acceleration_why_choose_item_4:
		"Clear about the model: constant acceleration on a straight line — not variable a, not circular motion.",
	tool_acceleration_why_choose_item_5: "Runs in your browser; nothing is uploaded.",
	tool_acceleration_formula_title: "Formula and rearrangements",
	tool_acceleration_formula_body:
		"Definition for constant acceleration: a = (v − v0) ÷ t. The same relation rearranges without changing the physics.",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t. Sample: (10 − 0) ÷ 2 = 5.",
	tool_acceleration_formula_item_2: "v = v0 + a t. Sample: 0 + 5 × 2 = 10.",
	tool_acceleration_formula_item_3: "v0 = v − a t. Sample: 10 − 5 × 2 = 0.",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a (a ≠ 0). Sample: (10 − 0) ÷ 5 = 2.",
	tool_acceleration_example_title: "Example",
	tool_acceleration_example:
		"Sample: from rest to 10 in 2 time units. Solving for a: a = (10 − 0) ÷ 2 = 5. Switch to Final velocity with v0 = 0, a = 5, t = 2 and you get v = 10 — the same motion read the other way.",
	tool_acceleration_usecases_title: "When to use it",
	tool_acceleration_usecase_1: "Physics homework on constant acceleration along a line.",
	tool_acceleration_usecase_2: "Checking whether a car that goes 0 → 20 m/s in 4 s really averages 5 m/s².",
	tool_acceleration_usecase_3: "Finding how long a constant deceleration takes to reach a stop.",
	tool_acceleration_usecase_4: "Comparing a textbook answer with the working line step by step.",
	tool_acceleration_faq_q1: "How do I calculate acceleration?",
	tool_acceleration_faq_a1:
		"Subtract the initial velocity from the final velocity, then divide by the time: a = (v − v0) ÷ t. From 0 to 10 in 2 seconds, a = 5.",
	tool_acceleration_faq_q2: "What if acceleration is negative?",
	tool_acceleration_faq_a2:
		"That is deceleration (or acceleration opposite your positive direction). If v0 = 20 and v = 10 over 2 s, a = (10 − 20) ÷ 2 = −5.",
	tool_acceleration_faq_q3: "What units should I use?",
	tool_acceleration_faq_a3:
		"Any consistent set. With metres and seconds you get m/s². Mixing km/h with seconds without converting will be wrong.",
	tool_acceleration_faq_q4: "Is free-fall acceleration 9.8 m/s²?",
	tool_acceleration_faq_a4:
		"Near Earth’s surface g ≈ 9.8 m/s² is a common constant-acceleration model if air resistance is ignored. Enter a = −9.8 (if up is positive) when solving for velocity or time in free fall.",
	tool_acceleration_faq_q5: "Can I use this for circular motion?",
	tool_acceleration_faq_a5:
		"No. This page is for constant acceleration along a straight line. Centripetal acceleration needs speed and radius, which is a different formula.",
	tool_acceleration_faq_q6: "Why is time rejected when a is zero?",
	tool_acceleration_faq_a6:
		"If a = 0, velocity never changes, so t = (v − v0) ÷ a is undefined. Either the velocities must already match, or acceleration is not zero.",
	tool_acceleration_faq_q7: "How is this different from average speed?",
	tool_acceleration_faq_a7:
		"Average speed is distance ÷ time. Acceleration is how quickly velocity itself changes. Use the velocity tool when you only need speed from distance and time.",
	tool_acceleration_article: "Acceleration",
	tool_acceleration_disclaimer:
		"For learning and homework checks. Assumes constant acceleration on a straight line; real motion may vary.",
	tool_acceleration_references: "Wikipedia — Acceleration; The Physics Hypertextbook — Equations of Motion.",
	tool_acceleration_ref_a_label: "Wikipedia — Acceleration",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion",
};

export default en;
