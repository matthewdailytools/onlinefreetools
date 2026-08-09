/**
 * i18n tool shard (how-to-calculate-tile / ar).
 * إعادة كتابة عربية مستقلة: حاسبة البلاط / كمية البلاط.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_tile_title: 'حاسبة البلاط — تقدير كمية البلاط',
	tool_tile_description:
		'احسب عدد قطع البلاط من مساحة الغرفة بالمتر المربع (أو الطول × العرض) وحجم القطعة بالسنتيمتر ونسبة الهدر (الافتراضي 10%). مثال: غرفة 12 م² وبلاط 30×30 سم وهدر 10% → 147 قطعة (تقريب لأعلى). يعمل في المتصفح؛ تبقى الأرقام على جهازك ولا تُرفع إلى خادم.',
	tool_tile_article:
		'تحوّل المساحة وحجم القطعة إلى كمية شراء. أدخل المساحة أو الأبعاد بالمتر، ثم أبعاد البلاط بالسنتيمتر ونسبة الهدر. تُقرَّب النتيجة لأعلى لتغطية القص والكسر.',
	tool_tile_calculate: 'احسب',
	tool_tile_sample: 'مثال',
	tool_tile_clear: 'مسح',
	tool_tile_mode_label: 'طريقة إدخال حجم الغرفة',
	tool_tile_mode_area: 'المساحة (م²)',
	tool_tile_mode_lw: 'الطول × العرض',
	tool_tile_area_label: 'مساحة الغرفة (م²)',
	tool_tile_area_ph: 'مثال 12',
	tool_tile_room_l_label: 'طول الغرفة (م)',
	tool_tile_room_w_label: 'عرض الغرفة (م)',
	tool_tile_room_l_ph: 'مثال 4',
	tool_tile_room_w_ph: 'مثال 3',
	tool_tile_tile_l_label: 'طول البلاطة (سم)',
	tool_tile_tile_w_label: 'عرض البلاطة (سم)',
	tool_tile_tile_l_ph: 'مثال 30',
	tool_tile_tile_w_ph: 'مثال 30',
	tool_tile_waste_label: 'الهدر (%)',
	tool_tile_waste_ph: 'مثال 10',
	tool_tile_waste_hint: 'الافتراضي 10% يغطي القص وبعض القطع المكسورة؛ زد النسبة للتركيب القطري.',
	tool_tile_result_tiles: 'عدد القطع المطلوب',
	tool_tile_result_area: 'مساحة الغرفة المستخدمة',
	tool_tile_result_tile_area: 'مساحة القطعة الواحدة',
	tool_tile_err_input: 'أدخل مساحة موجبة (أو طولاً وعرضاً) وأبعاد بلاط موجبة ونسبة هدر ≥ 0.',
	tool_tile_how_title: 'طريقة الاستخدام',
	tool_tile_how_body:
		'اختر المساحة أو الطول × العرض، ثم أدخل أبعاد البلاط بالسنتيمتر ونسبة الهدر. تُحوَّل القطعة إلى م² وتُضرب المساحة في (1 + الهدر/100) ثم تُقسَّم وتُقرَّب لأعلى. الحساب في تبويب المتصفح ولا يُرفع إلى خادم.',
	tool_tile_formula_title: 'الصيغة والافتراضات',
	tool_tile_formula_body: 'يعتمد العدد على مساحة الغرفة ومساحة القطعة والهدر:',
	tool_tile_formula_item_1: 'مساحة الغرفة A = م² مباشرة، أو طول × عرض بالأمتار.',
	tool_tile_formula_item_2: 'مساحة القطعة a = (الطول سم ÷ 100) × (العرض سم ÷ 100) بالمتر المربع.',
	tool_tile_formula_item_3: 'القطع = ceil(A × (1 + الهدر% ÷ 100) ÷ a). الهدر الافتراضي 10%.',
	tool_tile_example_title: 'مثال',
	tool_tile_example:
		'مثال: غرفة 12 م²، بلاط 30×30 سم، هدر 10%. القطعة 0.09 م². المساحة مع الهدر = 12 × 1.10 = 13.2 م². القطع = ceil(13.2 ÷ 0.09) = 147.',
	tool_tile_usecases_title: 'متى تستخدمها',
	tool_tile_usecase_1: 'طلب بلاط أرضية للحمام أو المطبخ قبل زيارة المتجر.',
	tool_tile_usecase_2: 'مراجعة عرض سعر لتكسية الجدران بمساحة وهدر بسيطين.',
	tool_tile_usecase_3: 'مقارنة مقاس 30×30 مع مقاسات أكبر بتغيير أبعاد القطعة فقط.',
	tool_tile_faq_q1: 'لماذا التقريب لأعلى؟',
	tool_tile_faq_a1: 'لا تُشترى كسور القطع. التقريب لأعلى يناسب الشراء الفعلي بعد القص والكسر.',
	tool_tile_faq_q2: 'ماذا تعني نسبة الهدر؟',
	tool_tile_faq_a2: 'هامش إضافي للقص ومطابقة النمط والقطع المكسورة. الافتراضي 10%، وغالباً أكثر للتركيب القطري.',
	tool_tile_faq_q3: 'مساحة أم طول × عرض؟',
	tool_tile_faq_a3: 'كلاهما صحيح. استخدم المساحة إن عرفتها بالمتر المربع، أو الطول × العرض إن كانت لديك الأبعاد بالأمتار.',
	tool_tile_faq_q4: 'هل تُرفع أرقامي؟',
	tool_tile_faq_a4: 'لا. الحساب يتم في متصفحك على جهازك ولا يُرفع إلى خادم.',
	tool_tile_references: 'عوامل التحويل NIST SP 811؛ إرشادات TCNA للتركيب والهدر.',
	tool_tile_ref_nist_label: 'NIST — Special Publication 811 (تحويل الوحدات)',
	tool_tile_ref_tcna_label: 'TCNA — Tile Council of North America',
};

export default ar;
