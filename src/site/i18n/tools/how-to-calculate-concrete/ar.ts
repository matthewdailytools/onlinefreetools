/**
 * i18n tool shard (how-to-calculate-concrete / ar).
 * العربية: حاسبة الخرسانة وتقدير الحجم — إعادة كتابة مستقلة.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_concrete_title: 'حاسبة الخرسانة — تقدير حجم الخرسانة',
	tool_concrete_description:
		'قدّر حجم الخرسانة لبلاطة أو عمود أو أسطوانة من الطول والعرض والسماكة (أو القطر والارتفاع). مثال: بلاطة 5 م × 4 م × 0.1 م → 2.0 م³. عدد الأكياس اختياري بافتراض 0.015 م³ (أو 0.45 قدم³) لكل كيس — موضّح في الصفحة. يعمل في المتصفح؛ تبقى الأرقام على جهازك ولا تُرفع إلى خادم.',
	tool_concrete_article:
		'تحسب الأداة حجم الصب بهندسة بسيطة. اختر بلاطة أو عمودًا مستطيلًا أو أسطوانة، وأدخل أبعادًا موجبة بالمتر أو القدم، واحصل على م³ أو قدم³. الأكياس اختيارية وتعتمد على حجم الكيس الموثّق تحت النتيجة.',
	tool_concrete_calculate: 'احسب',
	tool_concrete_sample: 'مثال',
	tool_concrete_clear: 'مسح',
	tool_concrete_shape_label: 'الشكل',
	tool_concrete_shape_slab: 'بلاطة',
	tool_concrete_shape_column: 'عمود',
	tool_concrete_shape_cylinder: 'أسطوانة',
	tool_concrete_unit_label: 'الوحدات',
	tool_concrete_unit_m: 'متر (م)',
	tool_concrete_unit_ft: 'قدم (ft)',
	tool_concrete_length_label: 'الطول',
	tool_concrete_width_label: 'العرض',
	tool_concrete_thickness_label: 'السماكة',
	tool_concrete_height_label: 'الارتفاع',
	tool_concrete_diameter_label: 'القطر',
	tool_concrete_length_ph: 'مثال 5',
	tool_concrete_width_ph: 'مثال 4',
	tool_concrete_thickness_ph: 'مثال 0.1',
	tool_concrete_height_ph: 'مثال 2.4',
	tool_concrete_diameter_ph: 'مثال 0.3',
	tool_concrete_bags_check: 'تقدير عدد الأكياس (اختياري)',
	tool_concrete_result_volume: 'الحجم',
	tool_concrete_result_bags: 'الأكياس (تقريبًا)',
	tool_concrete_bags_note:
		'افتراض الكيس: 0.015 م³ لكل كيس بالمتري، أو 0.45 قدم³ بالقدم. الأحجام الفعلية تختلف حسب العلامة والخلطة — قرّب للأعلى وتحقق من المورد.',
	tool_concrete_err_dims: 'أدخل أرقامًا موجبة لكل بُعد.',
	tool_concrete_how_title: 'طريقة الاستخدام',
	tool_concrete_how_body:
		'اختر الشكل ونظام الوحدات ثم أدخل الأبعاد. للبلاطة والعمود المستطيل: طول × عرض × سماكة (أو ارتفاع). للأسطوانة: π × (القطر/2)² × الارتفاع. عند تفعيل الأكياس يُقسَّم الحجم على حجم الكيس المذكور ويُقرَّب للأعلى. الحساب في تبويب المتصفح ولا يُرفع إلى خادم.',
	tool_concrete_formula_title: 'الصيغ والافتراضات',
	tool_concrete_formula_body: 'تُستخدم أجسام هندسية مغلقة:',
	tool_concrete_formula_item_1: 'بلاطة: V = الطول × العرض × السماكة.',
	tool_concrete_formula_item_2: 'عمود مستطيل: V = الطول × العرض × الارتفاع.',
	tool_concrete_formula_item_3:
		'أسطوانة: V = π × (القطر ÷ 2)² × الارتفاع. الأكياس = ceil(V ÷ حجم الكيس) بـ 0.015 م³ أو 0.45 قدم³.',
	tool_concrete_example_title: 'مثال',
	tool_concrete_example:
		'مثال (بلاطة، متر): 5 م × 4 م × 0.1 م → V = 2.0 م³. مع 0.015 م³/كيس ≈ 134 كيسًا.',
	tool_concrete_usecases_title: 'متى تستخدمها',
	tool_concrete_usecase_1: 'تقدير بلاطة فناء أو مرآب قبل طلب الخرسانة الجاهزة.',
	tool_concrete_usecase_2: 'حساب أكياس لأعمدة سياج أو قواعد أسطوانية صغيرة.',
	tool_concrete_usecase_3: 'مراجعة عرض مقاول بهندسة طول×عرض×سماكة بسيطة.',
	tool_concrete_faq_q1: 'ما صيغة وضع البلاطة؟',
	tool_concrete_faq_a1: 'حجم البلاطة = الطول × العرض × السماكة. المثال 5 × 4 × 0.1 م يعطي 2.0 م³.',
	tool_concrete_faq_q2: 'كيف يُحسب عدد الأكياس؟',
	tool_concrete_faq_a2:
		'الأكياس = ceil(الحجم ÷ حجم الكيس). المتري 0.015 م³؛ القدم 0.45 قدم³. افتراض تخطيط وليس ملصق علامة تجارية.',
	tool_concrete_faq_q3: 'هل الأسطوانة تحتاج نصف قطر أم قطر؟',
	tool_concrete_faq_a3: 'أدخل القطر الخارجي؛ نصف القطر = القطر ÷ 2 داخل V = π r² h.',
	tool_concrete_faq_q4: 'هل تُرفع أرقامي؟',
	tool_concrete_faq_a4: 'لا. تُحسب الأبعاد في المتصفح على جهازك ولا تُرفع إلى خادم.',
	tool_concrete_references: 'عوامل تحويل NIST SP 811؛ إرشادات Portland Cement Association.',
	tool_concrete_ref_nist_label: 'NIST — Special Publication 811 (تحويل الوحدات)',
	tool_concrete_ref_pca_label: 'Portland Cement Association — تعرّف على الخرسانة',
};

export default ar;
