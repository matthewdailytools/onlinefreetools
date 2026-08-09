/**
 * i18n tool shard (how-to-calculate-exponent / ar).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_exponent_title: "حاسبة الأس — كيفية حساب القوى",
	tool_exponent_description: "احسب القوى a^b مع مثال 2^10=1024. يوضح Infinity للمقادير الضخمة وNaN لبعض القواعد السالبة بأس غير صحيح. في المتصفح مع اللوغاريتم والترميز العلمي.",
	tool_exponent_calculate: "احسب",
	tool_exponent_sample: "تحميل مثال",
	tool_exponent_clear: "مسح",
	tool_exponent_base_label: "الأساس a",
	tool_exponent_base_ph: "مثال 2",
	tool_exponent_exp_label: "الأس b",
	tool_exponent_exp_ph: "مثال 10",
	tool_exponent_powerOut_label: "a^b",
	tool_exponent_result_note: "يحسب a^b عبر Math.pow للتعلّم. |b| الكبير قد يفيض إلى Infinity.",
	tool_exponent_err_generic: "أدخل أساسًا وأسًا محدودين.",
	tool_exponent_how_title: "طريقة الاستخدام",
	tool_exponent_how_body: "أدخل a وb. تُرجع a^b. الأساس السالب بأس غير صحيح قد يعطي NaN ويُعد خطأ.",
	tool_exponent_formula_title: "الصيغة",
	tool_exponent_formula_body: "الرفع إلى أس a^b:",
	tool_exponent_formula_item_1: "إذا كان b عددًا صحيحًا غير سالب فـ a^b ضرب متكرر.",
	tool_exponent_formula_item_2: "الأسس الكسرية/السالبة تتبع Math.pow الحقيقي.",
	tool_exponent_formula_item_3: "0^0 تُؤخذ 1 هنا (عرف برمجي) مع وجود جدل.",
	tool_exponent_formula_item_4: "اربطها بصفحة اللوغاريتم للتحقق log_a(a^b)=b.",
	tool_exponent_example_title: "مثال",
	tool_exponent_example: "مثال: 2^10 = 1024.",
	tool_exponent_usecases_title: "متى تستخدمه",
	tool_exponent_usecase_1: "واجب: قوى بسيطة مثل 2^10.",
	tool_exponent_usecase_2: "التحقق من عوامل الترميز العلمي.",
	tool_exponent_usecase_3: "مضاهاة اللوغاريتمات العكسية.",
	tool_exponent_disclaimer: "قوى حقيقية تعليمية فقط وليست CAS.",
	tool_exponent_references: "ويكيبيديا الرفع إلى أس.",
	tool_exponent_ref_exp_label: "ويكيبيديا — الرفع إلى أس",
	tool_exponent_ref_pow_label: "ويكيبيديا — الأس",
	tool_exponent_article: "احسب a^b في المتصفح مع ملاحظات المجال.",
	tool_exponent_faq_q1: "ما قيمة 0^0 هنا؟",
	tool_exponent_faq_a1: "تُؤخذ 1 (عرف JS) مع جدل رياضي.",
	tool_exponent_faq_q2: "هل قد تظهر Infinity؟",
	tool_exponent_faq_a2: "نعم عند المقادير الضخمة.",
	tool_exponent_faq_q3: "متى تفشل القواعد السالبة؟",
	tool_exponent_faq_a3: "القوى غير الصحيحة غالبًا NaN في JS.",
	tool_exponent_faq_q4: "التحقق باللوغاريتم؟",
	tool_exponent_faq_a4: "إن عُرّف فإن log_a(a^b)≈b.",
};

export default ar;
