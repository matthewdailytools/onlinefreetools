/**
 * i18n tool shard (how-to-calculate-gpa / ar).
 * إعادة كتابة عربية مستقلة لواجهة وآلة حاسبة GPA.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_gpa_title: "حاسبة GPA — المعدل التراكمي الموزون",
	tool_gpa_description: "احسب المعدل التراكمي الموزون حسب الساعات على مقياس 4.0 من نقاط المقرر وساعاته. مثال: A=4.0 (3 ساعات) و B=3.0 (3 ساعات) → GPA 3.5. تختلف المقاييس حسب المدرسة والمنطقة؛ للحساب التعليمي داخل المتصفح فقط.",
	tool_gpa_article: "يضرب GPA الموزون نقاط كل مقرر في ساعاته ثم يقسم على مجموع الساعات. تستخدم هذه الصفحة مقياس 4.0 الشائع؛ قد يستخدم معهدك درجات +/- أو مقاييس أخرى.",
	tool_gpa_calculate: "احسب",
	tool_gpa_sample: "مثال",
	tool_gpa_clear: "مسح",
	tool_gpa_courses_label: "المقررات (نقاط، ساعات في كل سطر)",
	tool_gpa_courses_ph: "مثال 4.0, 3",
	tool_gpa_courses_hint: "مقرر واحد في كل سطر: نقاط الدرجة ثم الساعات. على 4.0: A≈4.0 و B≈3.0.",
	tool_gpa_result_label: "GPA الموزون",
	tool_gpa_result_note: "يفترض مقياس 4.0. تحقق من قواعد كشف الدرجات الرسمية.",
	tool_gpa_err_parse: "أدخل سطراً واحداً على الأقل: نقاط، ساعات (مثل 4.0, 3).",
	tool_gpa_err_credits: "يجب أن تكون ساعات كل مقرر أكبر من صفر.",
	tool_gpa_how_title: "طريقة الاستخدام",
	tool_gpa_how_body: "اكتب كل مقرر بنقاطه وساعاته. تحسب الأداة المتوسط الموزون داخل المتصفح. راجع مقياس مدرستك دائماً.",
	tool_gpa_formula_title: "الصيغة وملاحظات المقياس",
	tool_gpa_formula_body: "GPA = Σ (النقاط × الساعات) / Σ الساعات. انتبه إلى:",
	tool_gpa_formula_item_1: "عرض توضيحي بمقياس 4.0 بسيط دون +/- تلقائي.",
	tool_gpa_formula_item_2: "الساعات موجبة والنقاط أرقام محدودة.",
	tool_gpa_formula_item_3: "أنظمة الجامعات والمدارس قد تختلف — للاستخدام التعليمي فقط.",
	tool_gpa_example_title: "مثال",
	tool_gpa_example: "مثال: مقرر A = 4.0 بثلاث ساعات، مقرر B = 3.0 بثلاث ساعات → GPA = (12 + 9) / 6 = 3.50.",
	tool_gpa_usecases_title: "متى تستخدمها",
	tool_gpa_usecase_1: "تقدير معدل الفصل قبل ظهور النتيجة الرسمية.",
	tool_gpa_usecase_2: "تمارين المتوسط الموزون على مقياس 4.0.",
	tool_gpa_usecase_3: "سيناريوهات درجات — ليست قرار قبول.",
	tool_gpa_faq_q1: "ما الصيغة المستخدمة؟",
	tool_gpa_faq_a1: "GPA الموزون = Σ (النقاط × الساعات) / Σ الساعات بعد تحويل الحروف إلى نقاط.",
	tool_gpa_faq_q2: "هل كل المدارس على 4.0؟",
	tool_gpa_faq_a2: "لا. قد توجد مقاييس +/- أو 5.0 أو نسب مئوية.",
	tool_gpa_faq_q3: "هل أدخل الحروف مباشرة؟",
	tool_gpa_faq_a3: "حوّل أولاً (A→4.0، B→3.0) ثم أدخل النقاط والساعات.",
	tool_gpa_faq_q4: "هل يضمن القبول؟",
	tool_gpa_faq_a4: "لا. الرقم توضيحي تعليمي فقط.",
	tool_gpa_references: "موارد College Board؛ نظرة على مقاييس الدرجات الأمريكية.",
	tool_gpa_ref_cb_label: "College Board",
	tool_gpa_ref_wiki_label: "ويكيبيديا — الدرجات الأكاديمية في الولايات المتحدة",
};

export default ar;
