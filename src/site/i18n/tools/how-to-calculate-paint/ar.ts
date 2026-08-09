/**
 * i18n tool shard (how-to-calculate-paint / ar).
 * Arabic rewrite for بحث «حاسبة الطلاء / كمية الطلاء».
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_paint_title: 'حاسبة الطلاء — تقدير كمية الطلاء المطلوبة',
	tool_paint_description:
		'قدّر لترات الطلاء من مساحة الجدار بالمتر المربع (أو الطول × الارتفاع × عدد الجدران) وعدد الطبقات والتغطية م²/لتر (الافتراضي 10). مثال: 40 م²، طبقتان، 10 م²/لتر → 8 لتر. عدّ العلب الاختياري يفترض 3.78 لتر لكل علبة. يعمل في المتصفح؛ تبقى الأرقام على جهازك دون رفع إلى خادم.',
	tool_paint_article:
		'تحوّل مساحة الجدار وتغطية المنتج إلى تقدير باللترات قبل الشراء. أدخل المساحة مباشرة أو ابنِها من الأبعاد وعدد الجدران.',
	tool_paint_calculate: 'احسب',
	tool_paint_sample: 'مثال',
	tool_paint_clear: 'مسح',
	tool_paint_mode_label: 'طريقة إدخال الجدار',
	tool_paint_mode_area: 'المساحة (م²)',
	tool_paint_mode_lhw: 'الطول × الارتفاع × الجدران',
	tool_paint_area_label: 'مساحة الجدار (م²)',
	tool_paint_area_ph: 'مثال 40',
	tool_paint_len_label: 'طول الجدار (م)',
	tool_paint_height_label: 'ارتفاع الجدار (م)',
	tool_paint_walls_label: 'عدد الجدران',
	tool_paint_len_ph: 'مثال 5',
	tool_paint_height_ph: 'مثال 2.5',
	tool_paint_walls_ph: 'مثال 4',
	tool_paint_coats_label: 'عدد الطبقات',
	tool_paint_coats_ph: 'مثال 2',
	tool_paint_coverage_label: 'التغطية (م²/لتر)',
	tool_paint_coverage_ph: 'مثال 10',
	tool_paint_coverage_hint: '10 م²/لتر نقطة بداية؛ راجع ملصق المنتج.',
	tool_paint_cans_label: 'إظهار العلب أيضًا (3.78 لتر لكل علبة)',
	tool_paint_result_liters: 'الطلاء المطلوب',
	tool_paint_result_area: 'مساحة الجدار المستخدمة',
	tool_paint_result_cans: 'عدد العلب (3.78 لتر)',
	tool_paint_err_input: 'أدخل مساحة موجبة (أو طولًا وارتفاعًا وعدد جدران) وطبقات وتغطية موجبة.',
	tool_paint_how_title: 'طريقة الاستخدام',
	tool_paint_how_body:
		'اختر المساحة أو الطول × الارتفاع × الجدران، ثم أدخل الطبقات والتغطية. اللترات = المساحة × الطبقات ÷ التغطية. عند تفعيل العلب يُقسم على 3.78 ويُقرَّب للأعلى. الحساب داخل المتصفح دون رفع إلى خادم.',
	tool_paint_formula_title: 'الصيغة والافتراضات',
	tool_paint_formula_body: 'حجم الطلاء يعتمد على المساحة والطبقات وتغطية الملصق:',
	tool_paint_formula_item_1: 'المساحة A = م² مباشرة، أو الطول × الارتفاع × عدد الجدران.',
	tool_paint_formula_item_2: 'اللترات = A × الطبقات ÷ التغطية (م²/لتر). الافتراضي 10.',
	tool_paint_formula_item_3: 'العلب الاختيارية = ceil(اللترات ÷ 3.78). الحجم 3.78 لتر تقريب لجالون أمريكي وليس ضمان علامة.',
	tool_paint_example_title: 'مثال',
	tool_paint_example:
		'مثال: 40 م²، طبقتان، 10 م²/لتر. اللترات = 40 × 2 ÷ 10 = 8 لتر. بعلب 3.78 لتر → ceil(8 ÷ 3.78) = 3.',
	tool_paint_usecases_title: 'متى تستخدمها',
	tool_paint_usecase_1: 'شراء طلاء جدران داخلية قبل زيارة المتجر.',
	tool_paint_usecase_2: 'مقارنة طبقة واحدة بطبقتين بتغيير عدد الطبقات.',
	tool_paint_usecase_3: 'مراجعة عرض مقاول بحساب مساحة وتغطية بسيط.',
	tool_paint_faq_q1: 'هل تُرفع أرقامي؟',
	tool_paint_faq_a1: 'لا. تُحسب في متصفحك على جهازك ولا تُرفع إلى خادم.',
	tool_paint_faq_q2: 'ماذا تعني التغطية م²/لتر؟',
	tool_paint_faq_a2: 'كم مترًا مربعًا يغطي لتر واحد في الطبقة الواحدة. القيمة 10 بداية فقط؛ اعتمد ملصق العلبة.',
	tool_paint_faq_q3: 'لماذا علبة 3.78 لتر؟',
	tool_paint_faq_a3: 'تقريب لجالون أمريكي واحد. يساعد على تقدير علب كاملة دون وعد بحجم كل علامة.',
	tool_paint_faq_q4: 'مساحة أم أبعاد؟',
	tool_paint_faq_a4: 'كلاهما. استخدم المساحة إن عرفتها، أو الطول × الارتفاع × الجدران إن كانت لديك الأبعاد.',
	tool_paint_references: 'NIST SP 811 لإرشادات تحويل الأطوال والمساحات.',
	tool_paint_ref_nist_label: 'NIST — المنشور الخاص 811 (تحويل الوحدات)',
};

export default ar;
