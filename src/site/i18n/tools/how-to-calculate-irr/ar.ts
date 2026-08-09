/**
 * i18n tool shard (how-to-calculate-irr / ar).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_irr_title: "حاسبة معدل العائد الداخلي IRR",
	tool_irr_description: "قدّر IRR لتدفقات نقدية بسيطة بطريقة نيوتن. مثال: −1000، 300، 420، 680 → IRR تقريبي. تعليمي. حساب تعليمي في المتصفح وليس نصيحة مهنية.",
	tool_irr_calculate: "احسب",
	tool_irr_sample: "تحميل مثال",
	tool_irr_clear: "مسح",
	tool_irr_cf_label: "التدفقات (مفصولة؛ CF0 أولاً)",
	tool_irr_cf_ph: "مثال -1000, 300, 420, 680",
	tool_irr_irrOut_label: "IRR تقريبي",
	tool_irr_result_note: "تعليمي.",
	tool_irr_err_generic: "تحقق من المدخلات.",
	tool_irr_how_title: "طريقة الاستخدام",
	tool_irr_how_body: "الصق CF0…CFn. نبحث عن r حيث NPV(r)=0 بطريقة نيوتن.",
	tool_irr_formula_title: "الصيغة",
	tool_irr_formula_body: "الصق CF0…CFn. نبحث عن r حيث NPV(r)=0 بطريقة نيوتن.",
	tool_irr_formula_item_1: "See formula notes.",
	tool_irr_formula_item_2: "Check inputs.",
	tool_irr_formula_item_3: "Educational only.",
	tool_irr_example_title: "مثال",
	tool_irr_example: "مثال: −1000، 300، 420، 680 → IRR ≈ 18.9٪.",
	tool_irr_usecases_title: "متى تستخدمه",
	tool_irr_usecase_1: "Homework.",
	tool_irr_usecase_2: "Quick sketch.",
	tool_irr_usecase_3: "Compare related tools.",
	tool_irr_faq_q1: "المثال؟",
	tool_irr_faq_a1: "مثال: −1000، 300، 420، 680 → IRR ≈ 18.9٪.",
	tool_irr_faq_q2: "Formula?",
	tool_irr_faq_a2: "See Formula section.",
	tool_irr_faq_q3: "Advice?",
	tool_irr_faq_a3: "Educational only.",
	tool_irr_faq_q4: "Related?",
	tool_irr_faq_a4: "See related tools.",
	tool_irr_article: "حاسبة معدل العائد الداخلي IRR",
	tool_irr_disclaimer: "توضيح تعليمي فقط (IRR) وليس نصيحة مالية.",
	tool_irr_references: "Investopedia وصيغ دراسية.",
	tool_irr_ref_a_label: "Investopedia",
	tool_irr_ref_b_label: "Wikipedia",
};

export default ar;
