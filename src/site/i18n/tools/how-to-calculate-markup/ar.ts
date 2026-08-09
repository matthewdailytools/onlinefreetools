/**
 * i18n tool shard (how-to-calculate-markup / ar).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_markup_title: "حاسبة Markup — نسبة الزيادة على التكلفة",
	tool_markup_description: "احسب نسبة Markup من التكلفة وسعر البيع. مثال: تكلفة 50 وبيع 80 → Markup 60%. يختلف عن هامش الربح. حساب تعليمي في المتصفح.",
	tool_markup_calculate: "احسب",
	tool_markup_sample: "تحميل مثال",
	tool_markup_clear: "مسح",
	tool_markup_cost_label: "التكلفة",
	tool_markup_cost_ph: "مثال 50",
	tool_markup_sell_label: "سعر البيع",
	tool_markup_sell_ph: "مثال 80",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_profitOut_label: "قيمة الزيادة",
	tool_markup_result_note: "Markup = (السعر − التكلفة) / التكلفة × 100.",
	tool_markup_err_generic: "تكلفة > 0 وسعر ≥ 0.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — الهامش",
	tool_markup_how_title: "طريقة الاستخدام",
	tool_markup_how_body: "أدخل التكلفة وسعر البيع. الـ Markup يقسم على التكلفة لا على المبيعات.",
	tool_markup_formula_title: "الصيغة",
	tool_markup_formula_body: "Markup % = (السعر − التكلفة) / التكلفة × 100. ملاحظات:",
	tool_markup_formula_item_1: "المقام هو التكلفة — فرق أساسي عن الهامش.",
	tool_markup_formula_item_2: "Markup سالب يعني البيع دون التكلفة.",
	tool_markup_formula_item_3: "الضرائب والخصومات غير مُنمذَجة تلقائياً.",
	tool_markup_usecases_title: "متى تستخدمه",
	tool_markup_usecase_1: "واجب تجزئة: من التكلفة والسعر إلى %.",
	tool_markup_usecase_2: "مراجعة قائمة أسعار قبل المالية.",
	tool_markup_usecase_3: "مقارنته بهامش الربح الإجمالي.",
	tool_markup_example_title: "مثال",
	tool_markup_example: "Example / Ejemplo: cost 50, sell 80 → 60% markup.",
	tool_markup_article: "حاسبة Markup — نسبة الزيادة على التكلفة",
	tool_markup_disclaimer: "توضيح تعليمي لـ markup فقط وليس نصيحة مالية أو ضريبية.",
	tool_markup_references: "Investopedia وصيغ دراسية للسياق التعليمي.",
	tool_markup_faq_q1: "ما الفرق عن الهامش؟",
	tool_markup_faq_a1: "Markup يقسم على التكلفة؛ الهامش على السعر.",
	tool_markup_faq_q2: "نتيجة المثال؟",
	tool_markup_faq_a2: "50 و80 → 60٪.",
	tool_markup_faq_q3: "هل يتجاوز 100٪؟",
	tool_markup_faq_a3: "نعم إذا تجاوز السعر ضعف التكلفة.",
	tool_markup_faq_q4: "هل هي نصيحة تسعير؟",
	tool_markup_faq_a4: "لا، حساب تعليمي فقط.",
};

export default ar;
