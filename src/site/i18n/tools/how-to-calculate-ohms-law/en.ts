/**
 * i18n 工具分片（how-to-calculate-ohms-law / en）。
 * 欧姆定律三模式：求 R / V / I，并显示功率；理想直流教学用途。
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_ohms_law_title: "Ohm's Law Calculator — Find Resistance Voltage Current and Power",
	tool_ohms_law_description: "Apply Ohm's law to solve for voltage, current, or resistance, and see power P=VI. Example: V=12 I=2 → R=6 Ω and P=24 W. Ideal DC forms only — educational circuit math in your browser, not wiring or safety advice.",
	tool_ohms_law_article: "Pick what to solve for, enter the other two values, and get the unknown plus power with step lines.",
	tool_ohms_law_desc: "Ohm's law V=IR with modes for V, I, or R, plus power. Ideal DC educational only.",

	tool_ohms_law_safety_banner: "Educational only. Ideal DC Ohm's law arithmetic — not wiring instructions, product ratings, or electrical safety advice.",
	tool_ohms_law_hint: "Choose solve mode, then enter the two known values. Current must not be zero when solving for R. Resistance must be greater than zero when solving for I or V from R.",
	tool_ohms_law_mode_label: "Solve for",
	tool_ohms_law_mode_r: "Resistance R (from V and I)",
	tool_ohms_law_mode_v: "Voltage V (from I and R)",
	tool_ohms_law_mode_i: "Current I (from V and R)",
	tool_ohms_law_V_label: "Voltage V (volts)",
	tool_ohms_law_V_ph: "e.g. 12",
	tool_ohms_law_I_label: "Current I (amperes)",
	tool_ohms_law_I_ph: "e.g. 2",
	tool_ohms_law_R_label: "Resistance R (ohms)",
	tool_ohms_law_R_ph: "e.g. 6",
	tool_ohms_law_calculate: "Calculate",
	tool_ohms_law_sample: "Load sample",
	tool_ohms_law_clear: "Clear",
	tool_ohms_law_primary_label: "Result",
	tool_ohms_law_rOut_label: "Resistance R",
	tool_ohms_law_vOut_label: "Voltage V",
	tool_ohms_law_iOut_label: "Current I",
	tool_ohms_law_pOut_label: "Power P",
	tool_ohms_law_steps_title: "Steps",
	tool_ohms_law_step_r_tpl: "R = V ÷ I = {v} ÷ {i} = {r} Ω.",
	tool_ohms_law_step_v_tpl: "V = I × R = {i} × {r} = {v} V.",
	tool_ohms_law_step_i_tpl: "I = V ÷ R = {v} ÷ {r} = {i} A.",
	tool_ohms_law_step_p_tpl: "P = V × I = {v} × {i} = {p} W.",
	tool_ohms_law_result_note: "Ideal DC form only. Keep units consistent (V, A → Ω and W). AC impedance and non-ohmic devices are not modeled.",
	tool_ohms_law_err_generic: "Enter finite positive values for the known fields. Current ≠ 0 when solving for R; resistance > 0 when solving for V or I.",

	tool_ohms_law_how_title: "How to use the Ohm's law calculator",
	tool_ohms_law_how_body: "Choose whether to solve for R, V, or I. Enter the other two quantities, then calculate to see the unknown and power with step lines. Load sample cycles each mode.",
	tool_ohms_law_how_item_1: "Select solve mode: R from V&I, V from I&R, or I from V&R.",
	tool_ohms_law_how_item_2: "Enter the two known values with consistent units.",
	tool_ohms_law_how_item_3: "Click Calculate to see the unknown, power, and steps.",
	tool_ohms_law_how_item_4: "Use Load sample to cycle V=12/I=2, I=2/R=6, and V=12/R=6.",

	tool_ohms_law_why_choose_title: "What this Ohm's law calculator gives you",
	tool_ohms_law_why_choose_item_1: "Three solve modes covering V = I·R rearrangements.",
	tool_ohms_law_why_choose_item_2: "Power P = V·I shown beside the unknown.",
	tool_ohms_law_why_choose_item_3: "Step lines that plug your numbers into the formulas.",
	tool_ohms_law_why_choose_item_4: "Sample rotation for each mode.",
	tool_ohms_law_why_choose_item_5: "Clear educational boundary: ideal DC only — not wiring advice.",

	tool_ohms_law_formula_title: "Ohm's law formulas",
	tool_ohms_law_formula_body: "For an ideal resistor under DC conditions, voltage, current, and resistance are linked by V = I·R. Power follows from P = V·I.",
	tool_ohms_law_formula_item_1: "R = V ÷ I when current is not zero.",
	tool_ohms_law_formula_item_2: "V = I × R.",
	tool_ohms_law_formula_item_3: "I = V ÷ R when resistance is greater than zero.",
	tool_ohms_law_formula_item_4: "P = V × I (also P = I²R or P = V²/R for ideal cases).",
	tool_ohms_law_formula_item_5: "This page uses ideal DC only — not AC impedance or safety design.",

	tool_ohms_law_example_title: "Worked examples",
	tool_ohms_law_example: "Load sample in R mode: V=12, I=2 → R=6 Ω, P=24 W. V mode uses I=2, R=6 → V=12. I mode uses V=12, R=6 → I=2.",

	tool_ohms_law_usecases_title: "When to use an Ohm's law calculator",
	tool_ohms_law_usecase_1: "Electronics homework: rearrange V = I·R for the missing quantity.",
	tool_ohms_law_usecase_2: "Quick ideal DC check of resistance or power from meter readings.",
	tool_ohms_law_usecase_3: "Compare related physics pages (density, velocity) for unit-discipline practice.",
	tool_ohms_law_usecase_4: "See power next to the solved variable without a separate power tool.",

	tool_ohms_law_faq_q1: "What does Ohm's law state?",
	tool_ohms_law_faq_a1: "For an ideal resistor under DC, V = I·R. This page also shows P = V·I.",
	tool_ohms_law_faq_q2: "Can I solve for voltage or current?",
	tool_ohms_law_faq_a2: "Yes. Use the Solve for control to pick V, I, or R.",
	tool_ohms_law_faq_q3: "Does this model AC circuits?",
	tool_ohms_law_faq_a3: "No. Ideal DC forms only — impedance and phase are not included.",
	tool_ohms_law_faq_q4: "What if current is zero when solving for R?",
	tool_ohms_law_faq_a4: "R = V/I is undefined at I = 0. The page rejects that case.",
	tool_ohms_law_faq_q5: "Is this wiring or safety advice?",
	tool_ohms_law_faq_a5: "No. Educational arithmetic only — not product ratings or electrical safety guidance.",

	tool_ohms_law_disclaimer: "Educational Ohm's law only — not professional, wiring, or electrical safety advice.",
	tool_ohms_law_references: "Standard textbook Ohm's law and electric power references.",
	tool_ohms_law_ref_a_label: "Wikipedia — Ohm's law",
	tool_ohms_law_ref_b_label: "Wikipedia — Electric power",
};

export default en;
