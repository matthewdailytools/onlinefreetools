/**
 * i18n tool shard (how-to-calculate-exponent / en).
 */
import type { SiteLangDict } from '../../../types';

const en: SiteLangDict = {
	tool_exponent_title: "Exponent Calculator — How to Calculate Powers",
	tool_exponent_description: "Calculate powers a^b with a clear example 2^10 = 1024. Notes overflow to Infinity for huge magnitudes and NaN cases for some negative bases with non-integer exponents. Browser learning tool paired with logs and scientific notation.",
	tool_exponent_calculate: "Calculate",
	tool_exponent_sample: "Load sample",
	tool_exponent_clear: "Clear",
	tool_exponent_base_label: "Base a",
	tool_exponent_base_ph: "e.g. 2",
	tool_exponent_exp_label: "Exponent b",
	tool_exponent_exp_ph: "e.g. 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "Computes a^b with JavaScript Math.pow for learning. Very large |b| may overflow to Infinity.",
	tool_exponent_err_generic: "Enter finite base and exponent values.",
	tool_exponent_how_title: "How it works",
	tool_exponent_how_body: "Enter base a and exponent b. The page returns a^b. Negative bases with non-integer exponents may yield NaN in real arithmetic and are treated as errors.",
	tool_exponent_formula_title: "Formula",
	tool_exponent_formula_body: "Exponentiation a^b:",
	tool_exponent_formula_item_1: "a^b means multiply a by itself b times when b is a non-negative integer.",
	tool_exponent_formula_item_2: "Fractional and negative exponents follow real-power rules via Math.pow.",
	tool_exponent_formula_item_3: "0^0 is treated as 1 here (common programming convention) — note the debate.",
	tool_exponent_formula_item_4: "Pair with the logarithm page to check that log_a(a^b)=b when defined.",
	tool_exponent_example_title: "Example",
	tool_exponent_example: "Example: 2^10 = 1024.",
	tool_exponent_usecases_title: "When to use it",
	tool_exponent_usecase_1: "Homework: evaluate simple powers like 2^10.",
	tool_exponent_usecase_2: "Check scientific-notation scale factors.",
	tool_exponent_usecase_3: "Cross-check logs with inverse powers.",
	tool_exponent_disclaimer: "Educational real powers only; overflow/NaN edge cases are not a CAS.",
	tool_exponent_references: "Wikipedia exponentiation.",
	tool_exponent_ref_exp_label: "Wikipedia — Exponentiation",
	tool_exponent_ref_pow_label: "Wikipedia — Exponent",
	tool_exponent_article: "Calculate a^b powers in your browser with clear domain notes.",
	tool_exponent_faq_q1: "What is 0^0 on this page?",
	tool_exponent_faq_a1: "Treated as 1 (common JS convention); mathematics debates the value.",
	tool_exponent_faq_q2: "Why can negative bases fail?",
	tool_exponent_faq_a2: "Non-integer real powers of negatives are often NaN in JS.",
	tool_exponent_faq_q3: "Can results be Infinity?",
	tool_exponent_faq_a3: "Yes for very large magnitudes — this is not arbitrary-precision math.",
	tool_exponent_faq_q4: "How to check with logs?",
	tool_exponent_faq_a4: "When defined, log_a(a^b) should return about b.",
};

export default en;
