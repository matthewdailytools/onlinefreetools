/**
 * i18n tool shard (unit-converter / ar).
 * العربية: محول الوحدات — إعادة كتابة مستقلة.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_unit_converter_title: 'محول الوحدات — طول / كتلة / درجة حرارة / مساحة / حجم / سرعة',
	tool_unit_converter_description:
		'حوّل الطول والكتلة ودرجة الحرارة والمساحة والحجم والسرعة في صفحة واحدة بعوامل واضحة. مثال: 1 ميل → 1.60934 كم. في المتصفح؛ عوامل تعليمية — وليس جهاز مساحة أو جهازًا طبيًا.',
	tool_unit_converter_article:
		'يجمع مركز التحويل الفئات الشائعة في عنوان واحد حتى لا تُنشأ صفحة لكل زوج (سم↔بوصة). مسارات المساحة من الطول×العرض تبقى في أداة square-feet.',
	tool_unit_converter_calculate: 'حوّل',
	tool_unit_converter_sample: 'تحميل مثال',
	tool_unit_converter_clear: 'مسح',
	tool_unit_converter_value_label: 'القيمة',
	tool_unit_converter_value_ph: 'مثل 1',
	tool_unit_converter_from_label: 'من وحدة',
	tool_unit_converter_to_label: 'إلى وحدة',
	tool_unit_converter_category_label: 'الفئة',
	tool_unit_converter_cat_length: 'طول',
	tool_unit_converter_cat_mass: 'كتلة',
	tool_unit_converter_cat_temperature: 'درجة حرارة',
	tool_unit_converter_cat_area: 'مساحة',
	tool_unit_converter_cat_volume: 'حجم',
	tool_unit_converter_cat_speed: 'سرعة',
	tool_unit_converter_result_label: 'النتيجة',
	tool_unit_converter_result_note: 'تحويل تعليمي فقط — وليس قياسًا معتمدًا.',
	tool_unit_converter_err_value: 'أدخل رقمًا محدودًا.',
	tool_unit_converter_err_temp: 'درجة الحرارة أقل من الصفر المطلق للمقياس المختار.',
	tool_unit_converter_how_title: 'طريقة الاستخدام',
	tool_unit_converter_how_body:
		'اختر الفئة والقيمة ووحدتي المصدر/الهدف. الفئات هنا؛ مساحة الطول×العرض في square-feet.',
	tool_unit_converter_formula_title: 'العوامل وصيغ درجة الحرارة',
	tool_unit_converter_formula_body:
		'الفئات الخطية تمر بوحدة SI أساسية. درجة الحرارة تستخدم صيغ المقاييس. الافتراضات:',
	tool_unit_converter_formula_item_1: 'عوامل SI / شائعة (مثل 1 mi = 1609.344 م؛ غالون أمريكي للحجم).',
	tool_unit_converter_formula_item_2: '°C ↔ °F ↔ K: F = C×9/5+32؛ K = C+273.15؛ والعكس وفق ذلك.',
	tool_unit_converter_formula_item_3: 'نتائج تعليمية وليست قياسات مختبرية معتمدة.',
	tool_unit_converter_example_title: 'مثال',
	tool_unit_converter_example: 'مثال (طول): 1 ميل → 1.60934 كم. درجة الحرارة: 0 °C → 32 °F.',
	tool_unit_converter_usecases_title: 'متى تستخدمه',
	tool_unit_converter_usecase_1: 'واجبات: كم وميل دون صفحة جديدة لكل زوج.',
	tool_unit_converter_usecase_2: 'فحوصات سريعة للكتلة أو الحجم أثناء الطبخ أو التعبئة.',
	tool_unit_converter_usecase_3: 'تبديل مقاييس الحرارة لملاحظات الطقس — وليس للجرعات الطبية.',
	tool_unit_converter_faq_q1: 'لماذا لا توجد صفحة لكل زوج وحدات؟',
	tool_unit_converter_faq_a1:
		'مئات العناوين شبه المكررة تشبه صفحات doorway. يغطي هذا المركز الأزواج الشائعة؛ square-feet للطول×العرض.',
	tool_unit_converter_faq_q2: 'أي تعريف للميل والغالون؟',
	tool_unit_converter_faq_a2: 'الميل الدولي (1609.344 م) والغالون السائل الأمريكي (3.785411784 لتر).',
	tool_unit_converter_faq_q3: 'كيف تُحوَّل درجة الحرارة؟',
	tool_unit_converter_faq_a3: 'عبر °C: F = C×9/5+32 و K = C+273.15. تُرفض القيم دون الصفر المطلق.',
	tool_unit_converter_faq_q4: 'هل هو نفس أداة square-feet؟',
	tool_unit_converter_faq_a4: 'لا. هنا تحويل وحدات المساحة؛ square-feet يحسب المساحة من الطول×العرض.',
	tool_unit_converter_disclaimer:
		'النتائج توضيحات تعليمية بعوامل قياسية. ليست قياسات معتمدة وليست نصيحة مساحة أو هندسة أو طب.',
	tool_unit_converter_references: 'علاقات SI من NIST؛ عوامل شائعة؛ صيغ °C/°F/K.',
	tool_unit_converter_ref_nist_label: 'NIST — وحدات SI',
	tool_unit_converter_ref_wiki_label: 'Wikipedia — Conversion of units',
};

export default ar;
