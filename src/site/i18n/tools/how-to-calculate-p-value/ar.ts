/**
 * i18n tool shard (how-to-calculate-p-value / ar).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_p_value_title: "حاسبة قيمة p — كيفية حساب القيمة الاحتمالية",
	tool_p_value_description: "قيمة p طبيعية ثنائية الطرف من درجة z بتقريب erfc. مثال: z = 1.96 → p ≈ 0.05. يوضح فرضيات الطبيعي المعياري والطرفيْن. في المتصفح للتعلّم والتحقق السريع.",
	tool_p_value_calculate: "احسب",
	tool_p_value_sample: "تحميل مثال",
	tool_p_value_clear: "مسح",
	tool_p_value_z_label: "درجة z",
	tool_p_value_z_ph: "مثال 1.96",
	tool_p_value_pOut_label: "قيمة p ثنائية الطرف",
	tool_p_value_result_note: "تقريب طبيعي معياري ثنائي الطرف للتعلّم — ليست حزمة اختبار فرضيات كاملة.",
	tool_p_value_err_generic: "أدخل درجة z محدودة.",
	tool_p_value_how_title: "طريقة الاستخدام",
	tool_p_value_how_body: "أدخل درجة z من اختبار طبيعي معياري. تحسب الأداة قيمة p ثنائية الطرف بتقريب erfc مع فرضيات واضحة: نموذج طبيعي معياري وطرفان. في المتصفح للتعلّم والتحقق السريع.",
	tool_p_value_formula_title: "الصيغة والافتراضات",
	tool_p_value_formula_body: "p ثنائية ≈ erfc(|z| / √2) تحت الطبيعي المعياري. حدود:",
	tool_p_value_formula_item_1: "يفترض z طبيعي معياري مستمر، لا t أو χ² أو اختبار دقيق متقطع.",
	tool_p_value_formula_item_2: "ثنائي الطرف فقط في هذه الصفحة.",
	tool_p_value_formula_item_3: "يستخدم تقريب erfc عدديًا للتعلّم لا كبرنامج معتمد.",
	tool_p_value_formula_item_4: "قيمة p الصغيرة لا تثبت وحدها ادعاءً علميًا.",
	tool_p_value_example_title: "مثال",
	tool_p_value_example: "مثال: z = 1.96 → p ثنائية ≈ 0.05 (حوالي 0.049996 بهذا التقريب).",
	tool_p_value_usecases_title: "متى تستخدمه",
	tool_p_value_usecase_1: "واجبات: تحويل z معروف إلى p تقريبية ثنائية.",
	tool_p_value_usecase_2: "تحقق سريع بعد حساب z من متوسط وانحراف.",
	tool_p_value_usecase_3: "مقارنة قاعدة 1.96 ↔ 0.05 مع ناتج رقمي.",
	tool_p_value_faq_q1: "أحادي أم ثنائي الطرف؟",
	tool_p_value_faq_a1: "ثنائي الطرف؛ يشمل الجانبين خارج ±|z|.",
	tool_p_value_faq_q2: "ما التوزيع المفترض؟",
	tool_p_value_faq_a2: "طبيعي معياري مستمر. ليست حاسبة t أو χ².",
	tool_p_value_faq_q3: "لماذا z=1.96 قريبة من 0.05؟",
	tool_p_value_faq_a3: "قيمة حرجة شائعة لاختبار 5% ثنائي؛ تقريب erfc يعطي نحو 0.05.",
	tool_p_value_faq_q4: "هل p الصغيرة تثبت الفرض البديل؟",
	tool_p_value_faq_a4: "لا. إنها احتمال ذيل تحت افتراضات، وليست إثباتًا تلقائيًا.",
	tool_p_value_disclaimer: "نتائج تعليمية تحت نموذج طبيعي معياري ثنائي الطرف ولا تغني عن برمجيات إحصائية أو تحليل متخصص.",
	tool_p_value_references: "مقالات ويكيبيديا عن قيمة p والتوزيع الطبيعي؛ دالة الخطأ التكميلية.",
	tool_p_value_ref_pvalue_label: "ويكيبيديا — قيمة p",
	tool_p_value_ref_normal_label: "ويكيبيديا — التوزيع الطبيعي",
	tool_p_value_article: "احسب قيمة p طبيعية ثنائية الطرف من درجة z بتقريب erfc مع فرضيات واضحة للتعلّم.",
};

export default ar;
