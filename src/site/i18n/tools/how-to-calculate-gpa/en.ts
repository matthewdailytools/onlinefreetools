/**
 * i18n 工具分片（how-to-calculate-gpa / en）。
 * 学分加权 GPA（4.0 量表）；字母成绩芯片与步骤行；教育用途，非录取决定。
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_gpa_title: "GPA Calculator — Weighted GPA on a 4.0 Scale",
	tool_gpa_description: "Calculate credit-weighted GPA on a common 4.0 scale from course grade points and credit hours. Example: A = 4.0 (3 credits) and B = 3.0 (3 credits) → GPA 3.50. Letter chips insert points; steps show quality points. Educational only — not an admissions decision. Runs in your browser.",
	tool_gpa_article: "Enter grade points and credits per course, or tap letter chips for a basic 4.0 map. The page shows weighted GPA, quality points, total credits, and step lines.",
	tool_gpa_desc: "Credit-weighted GPA on a 4.0 scale with letter chips and step lines.",

	tool_gpa_safety_banner: "Educational illustration only. Scales differ by school and region. This is not an admissions, scholarship, or transcript decision.",
	tool_gpa_hint: "One course per line: grade points then credits (comma or space). Credits must be greater than zero. Letter chips insert a common 4.0 mapping (A=4.0, A−=3.7, B+=3.3, …).",
	tool_gpa_courses_label: "Courses (grade points, credits per line)",
	tool_gpa_courses_ph: "e.g. 4.0, 3",
	tool_gpa_chips_label: "Insert letter grade points (4.0 map)",
	tool_gpa_calculate: "Calculate",
	tool_gpa_sample: "Load sample",
	tool_gpa_clear: "Clear",
	tool_gpa_result_label: "Weighted GPA",
	tool_gpa_qp_label: "Quality points (Σ grade × credits)",
	tool_gpa_credits_label: "Total credits",
	tool_gpa_courses_count_label: "Courses counted",
	tool_gpa_steps_title: "Steps",
	tool_gpa_step_row_tpl: "Course {n}: {g} × {c} = {qc}.",
	tool_gpa_step_sum_tpl: "Quality points = {qp}; total credits = {credits}.",
	tool_gpa_step_gpa_tpl: "GPA = {qp} ÷ {credits} = {gpa}.",
	tool_gpa_result_note: "Assumes a simple 4.0 scale. Plus/minus and weighted (e.g. 5.0) scales are not auto-applied. Schools and countries differ — verify against your transcript rules. Educational only.",
	tool_gpa_err_parse: "Enter at least one line as grade points, credits (for example 4.0, 3).",
	tool_gpa_err_credits: "Each course needs credits greater than zero.",

	tool_gpa_how_title: "How to use the GPA calculator",
	tool_gpa_how_body: "List each course as grade points and credit hours, or tap a letter chip then add credits. Calculate shows weighted GPA, quality points, and step lines. Load sample cycles two equal courses, plus/minus points, and unequal credits.",
	tool_gpa_how_item_1: "Enter one course per line: grade points, then credits.",
	tool_gpa_how_item_2: "Optional: tap a letter chip to insert common 4.0 points, then type credits.",
	tool_gpa_how_item_3: "Click Calculate to see GPA, quality points, total credits, and steps.",
	tool_gpa_how_item_4: "Use Load sample to cycle equal credits, plus/minus, and unequal-credit cases.",

	tool_gpa_why_choose_title: "What this GPA calculator gives you",
	tool_gpa_why_choose_item_1: "Credit-weighted GPA = Σ(grade × credits) / Σ credits.",
	tool_gpa_why_choose_item_2: "Letter chips for a basic 4.0 map (A through F).",
	tool_gpa_why_choose_item_3: "Quality points and total credits beside the GPA.",
	tool_gpa_why_choose_item_4: "Step lines that plug your numbers into the formula.",
	tool_gpa_why_choose_item_5: "Clear boundary: educational only — not admissions advice.",

	tool_gpa_formula_title: "GPA formula and 4.0 scale notes",
	tool_gpa_formula_body: "A weighted GPA multiplies each course grade point by its credits, sums those products (quality points), and divides by total credits.",
	tool_gpa_formula_item_1: "GPA = Σ (grade points × credits) / Σ credits.",
	tool_gpa_formula_item_2: "Common 4.0 map used by chips: A=4.0, A−=3.7, B+=3.3, B=3.0, B−=2.7, C+=2.3, C=2.0, C−=1.7, D+=1.3, D=1.0, F=0.0.",
	tool_gpa_formula_item_3: "Plus/minus steps and honors/AP weights are not auto-applied beyond the chip map.",
	tool_gpa_formula_item_4: "Credits must be positive; grade points must be finite numbers.",
	tool_gpa_formula_item_5: "College, high school, and regional systems can differ — results are educational only.",

	tool_gpa_example_title: "Worked examples",
	tool_gpa_example: "Load sample starts with 4.0×3 and 3.0×3 → quality points 21, credits 6, GPA 3.50. Next uses plus/minus points (3.7 and 3.3). The last sample uses unequal credits (4.0×4 and 2.0×2) → GPA 3.33.",

	tool_gpa_usecases_title: "When to use a GPA calculator",
	tool_gpa_usecase_1: "Rough semester GPA from grade points and credits before the official portal updates.",
	tool_gpa_usecase_2: "Homework: practice credit-weighted averages on a 4.0 scale.",
	tool_gpa_usecase_3: "What-if grades for planning — not an admissions or scholarship decision.",
	tool_gpa_usecase_4: "Convert letter grades with the chip map, then adjust if your school uses a different scale.",

	tool_gpa_faq_q1: "What GPA formula does this use?",
	tool_gpa_faq_a1: "Weighted GPA = Σ (grade points × credits) / Σ credits. Enter points already on your scale, or use letter chips for a basic 4.0 map.",
	tool_gpa_faq_q2: "Is every school on a 4.0 scale?",
	tool_gpa_faq_a2: "No. Many U.S. schools use 4.0 with plus/minus; others use 5.0 weighted or percentage systems. Always follow your transcript rules.",
	tool_gpa_faq_q3: "Can I mix letter grades directly?",
	tool_gpa_faq_a3: "Tap a letter chip to insert points, then add credits on the same line. Or convert letters yourself if your scale differs.",
	tool_gpa_faq_q4: "What are quality points?",
	tool_gpa_faq_a4: "Quality points are Σ (grade × credits) — the numerator before dividing by total credits.",
	tool_gpa_faq_q5: "Does this include weighted (5.0) honors courses?",
	tool_gpa_faq_a5: "No automatic weighting. Enter the grade points your school assigns (for example 5.0) if that is your rule.",
	tool_gpa_faq_q6: "Does this guarantee college admission?",
	tool_gpa_faq_a6: "No. The number is an educational illustration only and is not an admissions or scholarship decision.",

	tool_gpa_disclaimer: "Educational GPA arithmetic only — not admissions, scholarship, or official transcript advice. Scales vary by school and region.",
	tool_gpa_references: "College Board student resources; overview of U.S. academic grading scales.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Academic grading in the United States",
};

export default en;
