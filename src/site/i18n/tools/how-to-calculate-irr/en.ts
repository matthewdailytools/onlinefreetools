/**
 * i18n tool shard (how-to-calculate-irr / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_irr_title: "IRR Calculator — Internal Rate of Return",
	tool_irr_description: "Estimate IRR for a simple cash-flow list with Newton’s method. Sample: −1000, 300, 420, 680 → approximate IRR%. Educational project math — not investment advice Calculate approximate IRR with Newton’s method; example cash flows −1000, 300, 420, 680 → IRR%.",
	tool_irr_calculate: "Calculate",
	tool_irr_sample: "Load sample",
	tool_irr_clear: "Clear",
	tool_irr_cf_label: "Cash flows (comma/newline; CF0 first)",
	tool_irr_cf_ph: "e.g. -1000, 300, 420, 680",
	tool_irr_irrOut_label: "Approx. IRR",
	tool_irr_result_note: "Newton IRR on annual periods. May fail to converge for odd sign patterns. Educational only.",
	tool_irr_err_generic: "Enter at least two finite cash flows (CF0 usually negative).",
	tool_irr_how_title: "How it works",
	tool_irr_how_body: "Paste CF0…CFn. The tool searches for r where NPV(r)=0 via Newton iterations.",
	tool_irr_formula_title: "Formula",
	tool_irr_formula_body: "Find r such that Σ CFt/(1+r)^t = 0. Notes:",
	tool_irr_formula_item_1: "CF0 is usually the initial outflow (negative).",
	tool_irr_formula_item_2: "Multiple IRRs can exist with multiple sign changes — this page returns one Newton root if it converges.",
	tool_irr_formula_item_3: "Not MIRR; modified IRR is out of scope here.",
	tool_irr_example_title: "Example",
	tool_irr_example: "Example: −1000, 300, 420, 680 → IRR ≈ 18.9% (approx).",
	tool_irr_usecases_title: "When to use it",
	tool_irr_usecase_1: "Homework: solve a short project IRR.",
	tool_irr_usecase_2: "Compare with NPV at a hurdle rate.",
	tool_irr_usecase_3: "Sketch before talking to an advisor — not a substitute.",
	tool_irr_faq_q1: "Sample IRR?",
	tool_irr_faq_a1: "About 18.9% for −1000, 300, 420, 680.",
	tool_irr_faq_q2: "Why Newton?",
	tool_irr_faq_a2: "Fast local root-finding for the NPV polynomial.",
	tool_irr_faq_q3: "Multiple IRRs?",
	tool_irr_faq_a3: "Possible with many sign changes; results may not be unique.",
	tool_irr_faq_q4: "Advice?",
	tool_irr_faq_a4: "Educational only.",
	tool_irr_article: "IRR via Newton",
	tool_irr_disclaimer: "Educational IRR only — not financial, tax, or investment advice.",
	tool_irr_references: "Investopedia and standard textbook formulas.",
	tool_irr_ref_a_label: "Investopedia — IRR",
	tool_irr_ref_b_label: "Investopedia — NPV",
};

export default en;
