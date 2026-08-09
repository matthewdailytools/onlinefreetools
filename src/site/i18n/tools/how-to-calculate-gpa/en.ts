/**
 * i18n tool shard (how-to-calculate-gpa / en).
 * English master locale — full UI, How/Formula/FAQ, and 4.0 scale notes.
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_gpa_title: "GPA Calculator — How to Calculate Weighted GPA",
	tool_gpa_description: "Calculate a credit-weighted GPA on a 4.0 scale from course grade points and credit hours. Example: A = 4.0 (3 credits) and B = 3.0 (3 credits) → GPA 3.5. Grading scales differ by school and region — educational illustration only; runs in your browser.",
	tool_gpa_article: "A weighted GPA multiplies each course grade point by its credits, sums those products, and divides by total credits. This page uses a common 4.0 scale (A=4.0, B=3.0). Your school may use plus/minus steps, a 5.0 weighted scale, or another system.",
	tool_gpa_calculate: "Calculate",
	tool_gpa_sample: "Load sample",
	tool_gpa_clear: "Clear",
	tool_gpa_courses_label: "Courses (grade points, credits per line)",
	tool_gpa_courses_ph: "e.g. 4.0, 3",
	tool_gpa_courses_hint: "One course per line: grade points then credits (comma or space). On a 4.0 scale, A≈4.0, B≈3.0.",
	tool_gpa_result_label: "Weighted GPA",
	tool_gpa_result_note: "Assumes a 4.0 scale. Schools and countries use different scales — verify against your transcript rules.",
	tool_gpa_err_parse: "Enter at least one line as grade points, credits (e.g. 4.0, 3).",
	tool_gpa_err_credits: "Each course needs credits greater than zero.",
	tool_gpa_how_title: "How it works",
	tool_gpa_how_body: "List each course as grade points and credit hours. The tool weights every grade by credits and divides by total credits. Calculations stay in your browser. Always check your school’s official scale.",
	tool_gpa_formula_title: "Formula and scale notes",
	tool_gpa_formula_body: "GPA = Σ (grade points × credits) / Σ credits. Keep these notes in mind:",
	tool_gpa_formula_item_1: "This demo uses a simple 4.0 mapping; plus/minus or honors weights are not auto-applied.",
	tool_gpa_formula_item_2: "Credits must be positive; grade points must be finite numbers.",
	tool_gpa_formula_item_3: "College, high school, and regional systems can differ — results are educational only.",
	tool_gpa_example_title: "Example",
	tool_gpa_example: "Example: course A = 4.0 with 3 credits, course B = 3.0 with 3 credits → GPA = (4.0×3 + 3.0×3) / (3+3) = 21 / 6 = 3.50.",
	tool_gpa_usecases_title: "When to use it",
	tool_gpa_usecase_1: "Rough semester GPA from grade points and credits before the official portal updates.",
	tool_gpa_usecase_2: "Homework: practice credit-weighted averages on a 4.0 scale.",
	tool_gpa_usecase_3: "Compare what-if grades for college or high school planning — not an admissions decision.",
	tool_gpa_faq_q1: "What GPA formula does this use?",
	tool_gpa_faq_a1: "Weighted GPA = Σ (grade points × credits) / Σ credits. Enter grade points already on your scale (e.g. 4.0 for A).",
	tool_gpa_faq_q2: "Is every school on a 4.0 scale?",
	tool_gpa_faq_a2: "No. Many U.S. schools use 4.0 with plus/minus; others use 5.0 weighted or percentage systems. Always follow your transcript rules.",
	tool_gpa_faq_q3: "Can I mix letter grades directly?",
	tool_gpa_faq_a3: "Convert letters to grade points first (A→4.0, B→3.0 on a basic 4.0 scale), then enter points and credits per line.",
	tool_gpa_faq_q4: "Does this guarantee college admission?",
	tool_gpa_faq_a4: "No. The number is an educational illustration only and is not an admissions or scholarship decision.",
	tool_gpa_references: "College Board student resources; overview of U.S. academic grading scales.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "Wikipedia — Academic grading in the United States",
};

export default en;
