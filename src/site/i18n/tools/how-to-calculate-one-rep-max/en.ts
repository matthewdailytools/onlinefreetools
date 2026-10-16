/**
 * i18n tool shard (how-to-calculate-one-rep-max / en).
 * 1RM estimate with Epley / Brzycki / Lombardi comparison and %1RM loads.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_one_rep_max_title: "One-Rep Max Calculator — Estimate 1RM from Weight and Reps",
	tool_one_rep_max_description: "Estimate your one-rep max (1RM) from a submaximal set with the Epley formula 1RM ≈ w×(1+reps/30), and compare Brzycki and Lombardi. Example: 100 for 5 reps → about 116.7. Includes a %1RM load table. Educational estimate only — not coaching or medical advice.",
	tool_one_rep_max_article: "Estimate one-rep max from weight and reps with Epley, compare Brzycki and Lombardi, and read training percentages of the Epley 1RM.",
	tool_one_rep_max_desc: "Estimate 1RM from a submaximal set with Epley, Brzycki and Lombardi, plus a %1RM load table.",

	tool_one_rep_max_safety_banner: "Educational estimate only. Do not attempt a true max lift from this number without proper warm-up, spotters and coaching. Not medical or training advice.",
	tool_one_rep_max_weight_label: "Weight lifted",
	tool_one_rep_max_weight_ph: "e.g. 100",
	tool_one_rep_max_reps_label: "Reps completed",
	tool_one_rep_max_reps_ph: "e.g. 5",
	tool_one_rep_max_hint: "Use a weight you lifted for several clean reps with good form. Whole-number reps from 1 to 12 work best for these formulas. A decimal comma is fine for weight.",
	tool_one_rep_max_calculate: "Calculate",
	tool_one_rep_max_sample: "Load sample",
	tool_one_rep_max_clear: "Clear",
	tool_one_rep_max_ormOut_label: "Estimated 1RM (Epley)",
	tool_one_rep_max_pct_title: "Training loads from Epley 1RM",
	tool_one_rep_max_pct_col_pct: "% of 1RM",
	tool_one_rep_max_pct_col_load: "Load",
	tool_one_rep_max_steps_title: "Steps",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "Formula spread: {lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley: 1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}.",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}.",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi: 1RM ≈ w × r^0.1 = {w} × {r}^0.1 = {orm}.",
	tool_one_rep_max_step_pct_tpl: "At 80% of the Epley 1RM ({orm}): load ≈ 0.8 × {orm} = {p80}.",
	tool_one_rep_max_result_note: "Formulas diverge more as reps rise. Prefer sets of ≤10 for a teaching estimate. Warm up; never max on a rough calculator number alone.",
	tool_one_rep_max_err_generic: "Enter a positive weight and a whole-number rep count from 1 to 12 (for example 100 and 5).",
	tool_one_rep_max_err_high_reps: "These formulas are unreliable above about 12 reps. Use a heavier set with fewer clean reps.",

	tool_one_rep_max_how_title: "How to estimate your one-rep max",
	tool_one_rep_max_how_body: "Enter the weight you lifted and how many clean reps you completed, then Calculate. You get an Epley 1RM, Brzycki and Lombardi comparisons, and a table of common training percentages.",
	tool_one_rep_max_how_item_1: "Enter the barbell or dumbbell weight for a set you finished with good form.",
	tool_one_rep_max_how_item_2: "Enter the number of successful reps (whole numbers 1–12 work best).",
	tool_one_rep_max_how_item_3: "Click Calculate to see Epley 1RM plus Brzycki and Lombardi side by side.",
	tool_one_rep_max_how_item_4: "Read the %1RM table (50%–95%) for rough working weights, and Load sample to cycle 100×5, 60×8, 80×3 and a true single.",

	tool_one_rep_max_why_choose_title: "What this 1RM calculator gives you",
	tool_one_rep_max_why_choose_item_1: "Epley 1RM as the primary estimate, with Brzycki and Lombardi shown for comparison.",
	tool_one_rep_max_why_choose_item_2: "A formula-spread line so you see how far the three estimates disagree.",
	tool_one_rep_max_why_choose_item_3: "A training-load table from 50% to 95% of the Epley 1RM.",
	tool_one_rep_max_why_choose_item_4: "Clear steps that plug your weight and reps into each formula.",
	tool_one_rep_max_why_choose_item_5: "A safety banner: educational only — not a prescription to attempt a max lift.",

	tool_one_rep_max_formula_title: "One-rep max formulas",
	tool_one_rep_max_formula_body: "A one-rep max (1RM) is the heaviest load you could lift once with good form. These equations estimate it from a submaximal set.",
	tool_one_rep_max_formula_item_1: "Epley: 1RM ≈ w × (1 + r/30). Example: w = 100, r = 5 → 100 × (1 + 5/30) = 116.67.",
	tool_one_rep_max_formula_item_2: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r). Same sample → 100 × 36 ÷ 32 = 112.5. Undefined ideas for r ≥ 37.",
	tool_one_rep_max_formula_item_3: "Lombardi: 1RM ≈ w × r^0.1. Same sample → 100 × 5^0.1 ≈ 117.46.",
	tool_one_rep_max_formula_item_4: "Estimates drift apart as reps climb; use fewer clean reps for a tighter teaching estimate.",
	tool_one_rep_max_formula_item_5: "Training percentages (for example 80% of 1RM) are planning aids only — adjust for fatigue, exercise and experience.",

	tool_one_rep_max_example_title: "Worked examples",
	tool_one_rep_max_example: "Load sample starts at 100 for 5 reps: Epley ≈ 116.7, Brzycki 112.5, Lombardi ≈ 117.5. Next is 60 × 8, then 80 × 3, then a true single (135 × 1) where all formulas return 135. Always keep form strict; stop a set early if technique breaks.",

	tool_one_rep_max_usecases_title: "When to use a 1RM calculator",
	tool_one_rep_max_usecase_1: "Homework or classroom strength math: plug weight and reps into Epley and show the steps.",
	tool_one_rep_max_usecase_2: "Rough program sketching: convert an estimated 1RM into 70%–85% working sets.",
	tool_one_rep_max_usecase_3: "Comparing formulas: see how Epley, Brzycki and Lombardi disagree on the same set.",
	tool_one_rep_max_usecase_4: "Avoiding a true max attempt when you only have a submaximal set logged.",

	tool_one_rep_max_faq_q1: "How do you calculate one-rep max with the Epley formula?",
	tool_one_rep_max_faq_a1: "Multiply the weight by (1 + reps/30). With 100 for 5 reps: 100 × (1 + 5/30) = 116.67. This page also shows Brzycki and Lombardi for comparison.",
	tool_one_rep_max_faq_q2: "What is the difference between Epley and Brzycki?",
	tool_one_rep_max_faq_a2: "Epley uses a linear add-on of reps/30. Brzycki uses 36/(37−reps). For the same 100×5 set, Epley gives ≈116.7 and Brzycki 112.5. Neither replaces a supervised max test.",
	tool_one_rep_max_faq_q3: "How many reps should I use for a good estimate?",
	tool_one_rep_max_faq_a3: "Usually 1–10 clean reps. Above about 12, these formulas become unreliable, and this page asks for a heavier set with fewer reps.",
	tool_one_rep_max_faq_q4: "What does 80% of 1RM mean?",
	tool_one_rep_max_faq_a4: "It is a common working intensity: load ≈ 0.8 × estimated 1RM. For an Epley 1RM of 116.7, 80% is about 93.3 in the same units.",
	tool_one_rep_max_faq_q5: "Is it safe to attempt my calculated 1RM?",
	tool_one_rep_max_faq_a5: "Not from this page alone. Treat the number as educational. Attempting a true max needs warm-up, spotting, good technique and preferably coaching — this is not advice to max.",
	tool_one_rep_max_faq_q6: "Do units matter (kg vs lb)?",
	tool_one_rep_max_faq_a6: "Use any consistent unit. The formulas are unitless ratios; the 1RM comes out in the same unit as the weight you entered.",
	tool_one_rep_max_faq_q7: "Is this medical or coaching advice?",
	tool_one_rep_max_faq_a7: "No. It is an educational calculator for understanding common 1RM equations. For training or health decisions, consult a qualified coach or clinician.",

	tool_one_rep_max_disclaimer: "Educational one-rep max estimate only — not coaching, medical or professional advice. Do not attempt a maximal lift based solely on this calculator.",
	tool_one_rep_max_references: "Common textbook and Wikipedia descriptions of 1RM prediction equations.",
	tool_one_rep_max_ref_a_label: "Wikipedia — One-repetition maximum",
	tool_one_rep_max_ref_b_label: "Wikipedia — Strength training",
};

export default en;
