/**
 * i18n tool shard (how-to-calculate-break-even / ar).
 * Independent locale rewrite per 03 brief — not English skeleton.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_break_even_title: "حاسبة نقطة التعادل — وحدات استرداد التكلفة",
	tool_break_even_description: "احسب نقطة التعادل بالوحدات والإيراد من التكاليف الثابتة وسعر الوحدة والتكلفة المتغيرة للوحدة، مع هامش المساهمة. مثال: ثابتة 10000 وسعر 50 ومتغيرة 30 → 500 وحدة وإيراد 25000. في المتصفح؛ للتعليم فقط وليس نصيحة أعمال أو استثمار.",
	tool_break_even_article: "التعادل حيث يغطي هامش المساهمة التكاليف الثابتة. الوحدات = FC / (P − V) مع الإيراد والهامش في نفس الصفحة التعليمية.",
	tool_break_even_calculate: "احسب",
	tool_break_even_sample: "تحميل مثال",
	tool_break_even_clear: "امسح",
	tool_break_even_fixed_label: "التكاليف الثابتة",
	tool_break_even_fixed_ph: "مثال 10000",
	tool_break_even_price_label: "سعر الوحدة",
	tool_break_even_price_ph: "مثال 50",
	tool_break_even_var_label: "التكلفة المتغيرة للوحدة",
	tool_break_even_var_ph: "مثال 30",
	tool_break_even_result_units: "وحدات التعادل",
	tool_break_even_result_revenue: "إيراد التعادل",
	tool_break_even_result_cm: "هامش المساهمة للوحدة",
	tool_break_even_result_note: "للتوضيح التعليمي فقط — ليست نصيحة أعمال أو استثمار.",
	tool_break_even_err_fixed: "يجب أن تكون التكاليف الثابتة > 0.",
	tool_break_even_err_price: "السعر > 0 والتكلفة المتغيرة ≥ 0.",
	tool_break_even_err_margin: "يجب أن يكون السعر أكبر من التكلفة المتغيرة.",
	tool_break_even_how_title: "طريقة العمل",
	tool_break_even_how_body: "أدخل الثابتة والسعر والمتغيرة. تحسب الأداة الهامش والوحدات والإيراد. القطاعات في حالات الاستخدام فقط بلا عناوين منفصلة.",
	tool_break_even_formula_title: "الصيغة والافتراضات",
	tool_break_even_formula_body: "الوحدات Q = FC / (P − V). الإيراد = Q × P. الهامش = P − V. الافتراضات:",
	tool_break_even_formula_item_1: "التكاليف والأسعار ثابتة؛ الضرائب/الخصومات غير ممثّلة.",
	tool_break_even_formula_item_2: "منظور منتج واحد.",
	tool_break_even_formula_item_3: "نتائج تعليمية وليست توقعات.",
	tool_break_even_example_title: "مثال",
	tool_break_even_example: "مثال: ثابتة 10000 وسعر 50 ومتغيرة 30 → هامش 20 → 500 وحدة وإيراد 25000.",
	tool_break_even_usecases_title: "متى تستخدمها",
	tool_break_even_usecase_1: "الصف: التدرب على الصيغة بـ FC و P و V ثابتة.",
	tool_break_even_usecase_2: "رسم تقريبي لعدد الوحدات لتغطية الثابتة (للتوضيح فقط).",
	tool_break_even_usecase_3: "رؤية الهامش وإيراد التعادل في صفحة واحدةحدة.",
	tool_break_even_faq_q1: "ما الصيغة؟",
	tool_break_even_faq_a1: "Q = FC / (P − V). الإيراد = Q × P. الهامش = P − V.",
	tool_break_even_faq_q2: "إذا ساوى السعر المتغيرة؟",
	tool_break_even_faq_a2: "لا يوجد حجم محدود. ارفع السعر أو اخفض المتغيرة.",
	tool_break_even_faq_q3: "هل نصيحة أعمال؟",
	tool_break_even_faq_a3: "لا. أرقام تعليمية فقط.",
	tool_break_even_faq_q4: "وحدات أم إيراد؟",
	tool_break_even_faq_a4: "كلاهما في النتائج؛ الإيراد = الوحدات × السعر.",
	tool_break_even_disclaimer: "النتائج تعليمية فقط وليست نصيحة أعمال أو ضرائب أو استثمار.",
	tool_break_even_references: "تعريفات Investopedia لنقطة التعادل وهامش المساهمة؛ صيغة FC/(P−V).",
	tool_break_even_ref_bep_label: "Investopedia — نقطة التعادل",
	tool_break_even_ref_cm_label: "Investopedia — هامش المساهمة",
};

export default ar;
