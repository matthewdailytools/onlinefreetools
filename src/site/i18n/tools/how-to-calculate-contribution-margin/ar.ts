/**
 * i18n tool shard (how-to-calculate-contribution-margin / ar).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_contribution_margin_title: "حاسبة هامش المساهمة",
	tool_contribution_margin_description: "احسب هامش المساهمة ونسبته من السعر والتكلفة المتغيرة. مثال: سعر 50 وتكلفة 30 → 20 (40٪). تعليمي. حساب تعليمي في المتصفح وليس نصيحة مهنية.",
	tool_contribution_margin_calculate: "احسب",
	tool_contribution_margin_sample: "تحميل مثال",
	tool_contribution_margin_clear: "مسح",
	tool_contribution_margin_price_label: "سعر الوحدة",
	tool_contribution_margin_price_ph: "مثال 50",
	tool_contribution_margin_vc_label: "تكلفة متغيرة للوحدة",
	tool_contribution_margin_vc_ph: "مثال 30",
	tool_contribution_margin_cmOut_label: "هامش المساهمة",
	tool_contribution_margin_cmrOut_label: "نسبة الهامش",
	tool_contribution_margin_result_note: "تعليمي.",
	tool_contribution_margin_err_generic: "سعر > 0 وتكلفة ≥ 0.",
	tool_contribution_margin_how_title: "طريقة الاستخدام",
	tool_contribution_margin_how_body: "أدخل السعر والتكلفة المتغيرة.",
	tool_contribution_margin_formula_title: "الصيغة",
	tool_contribution_margin_formula_body: "CM = P − VC؛ النسبة = CM / P.",
	tool_contribution_margin_formula_item_1: "VC with units; fixed costs → break-even.",
	tool_contribution_margin_formula_item_2: "Price > 0.",
	tool_contribution_margin_formula_item_3: "Simplified.",
	tool_contribution_margin_example_title: "مثال",
	tool_contribution_margin_example: "مثال: 50 و30 → 20 (40٪).",
	tool_contribution_margin_usecases_title: "متى تستخدمه",
	tool_contribution_margin_usecase_1: "Unit CM homework.",
	tool_contribution_margin_usecase_2: "VC sensitivity.",
	tool_contribution_margin_usecase_3: "With break-even tool.",
	tool_contribution_margin_faq_q1: "المثال؟",
	tool_contribution_margin_faq_a1: "20 / 40%",
	tool_contribution_margin_faq_q2: "CM vs gross?",
	tool_contribution_margin_faq_a2: "VC vs COGS.",
	tool_contribution_margin_faq_q3: "Qty needed?",
	tool_contribution_margin_faq_a3: "Not for unit CM.",
	tool_contribution_margin_faq_q4: "Advice?",
	tool_contribution_margin_faq_a4: "No.",
	tool_contribution_margin_article: "حاسبة هامش المساهمة",
	tool_contribution_margin_disclaimer: "توضيح تعليمي فقط (contribution margin) وليس نصيحة مالية.",
	tool_contribution_margin_references: "Investopedia وصيغ دراسية.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even",
};

export default ar;
