/**
 * i18n tool shard (how-to-calculate-aspect-ratio / ar).
 * Arabic rewrite for بحث «نسبة العرض إلى الارتفاع».
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_aspect_ratio_title: 'حاسبة نسبة العرض إلى الارتفاع — حساب وتحجيم النسب',
	tool_aspect_ratio_description:
		'احسب النسبة المبسّطة من العرض × الارتفاع ثم حَجّم إلى عرض (أو ارتفاع) مستهدف. إعدادات 16:9 و4:3 و1:1 خيارات في الصفحة نفسها. مثال: 1920×1080 → 16:9؛ العرض 1280 → الارتفاع 720. يعمل في المتصفح؛ تبقى الأرقام على جهازك دون رفع إلى خادم.',
	tool_aspect_ratio_article:
		'تبسّط زوج الأبعاد بأقصى قاسم مشترك وتحافظ على النسبة عند اختيار حجم تصدير جديد. مناسبة للفيديو والتصميم وواجهات العرض.',
	tool_aspect_ratio_calculate: 'احسب',
	tool_aspect_ratio_sample: 'مثال',
	tool_aspect_ratio_clear: 'مسح',
	tool_aspect_ratio_preset_label: 'إعداد مسبق (اختياري)',
	tool_aspect_ratio_preset_custom: 'مخصص',
	tool_aspect_ratio_preset_16_9: '16:9',
	tool_aspect_ratio_preset_4_3: '4:3',
	tool_aspect_ratio_preset_1_1: '1:1',
	tool_aspect_ratio_w_label: 'العرض',
	tool_aspect_ratio_h_label: 'الارتفاع',
	tool_aspect_ratio_w_ph: 'مثال 1920',
	tool_aspect_ratio_h_ph: 'مثال 1080',
	tool_aspect_ratio_scale_mode_label: 'التحجيم حسب',
	tool_aspect_ratio_scale_by_w: 'العرض المستهدف',
	tool_aspect_ratio_scale_by_h: 'الارتفاع المستهدف',
	tool_aspect_ratio_target_w_label: 'العرض المستهدف',
	tool_aspect_ratio_target_h_label: 'الارتفاع المستهدف',
	tool_aspect_ratio_target_w_ph: 'مثال 1280',
	tool_aspect_ratio_target_h_ph: 'مثال 720',
	tool_aspect_ratio_result_ratio: 'نسبة العرض إلى الارتفاع',
	tool_aspect_ratio_result_scaled: 'الحجم بعد التحجيم',
	tool_aspect_ratio_err_input: 'أدخل عرضًا وارتفاعًا موجبين، وحجمًا مستهدفًا موجبًا للجانب الذي تحجّمه.',
	tool_aspect_ratio_how_title: 'طريقة الاستخدام',
	tool_aspect_ratio_how_body:
		'أدخل العرض والارتفاع أو اختر إعدادًا 16:9 أو 4:3 أو 1:1. تُبسَّط النسبة بأقصى قاسم مشترك ثم يُحسب الجانب الآخر عند تحديد هدف. الحساب داخل علامة تبويب المتصفح دون رفع إلى خادم.',
	tool_aspect_ratio_formula_title: 'الصيغة والافتراضات',
	tool_aspect_ratio_formula_body: 'التبسيط والتحجيم يعتمدان على القاسم المشترك الأكبر للزوج:',
	tool_aspect_ratio_formula_item_1: 'g = gcd(تقريب W، تقريب H). النسبة = (W÷g):(H÷g).',
	tool_aspect_ratio_formula_item_2: 'حسب العرض: H′ = هدف_العرض × H ÷ W. حسب الارتفاع: W′ = هدف_الارتفاع × W ÷ H.',
	tool_aspect_ratio_formula_item_3: 'الإعدادات المسبقة تملأ أحجامًا شائعة فقط وليست صفحات منفصلة.',
	tool_aspect_ratio_example_title: 'مثال',
	tool_aspect_ratio_example:
		'مثال: 1920×1080. gcd=120 → 16:9. عند عرض 1280 يصبح الارتفاع 1280 × 1080 ÷ 1920 = 720.',
	tool_aspect_ratio_usecases_title: 'متى تستخدمها',
	tool_aspect_ratio_usecase_1: 'اختيار حجم تصدير فيديو 16:9 دون تشويه.',
	tool_aspect_ratio_usecase_2: 'مواءمة لوحة تصميم مع نسبة هاتف أو شاشة.',
	tool_aspect_ratio_usecase_3: 'تحويل دقة معروفة إلى تسمية نسبة قصيرة للمواصفات.',
	tool_aspect_ratio_faq_q1: 'هل تُرفع أرقامي؟',
	tool_aspect_ratio_faq_a1: 'لا. تُحسب في متصفحك على جهازك ولا تُرفع إلى خادم.',
	tool_aspect_ratio_faq_q2: 'كيف تُبسَّط النسبة؟',
	tool_aspect_ratio_faq_a2: 'بقسمة العرض والارتفاع على قاسمهما المشترك الأكبر بعد التقريب؛ 1920×1080 تصبح 16:9.',
	tool_aspect_ratio_faq_q3: 'هل يمكن التحجيم بالارتفاع؟',
	tool_aspect_ratio_faq_a3: 'نعم. اختر الارتفاع المستهدف ليُحسب العرض مع الإبقاء على النسبة.',
	tool_aspect_ratio_faq_q4: 'لماذا 16:9 خيار وليس صفحة؟',
	tool_aspect_ratio_faq_a4: 'لأنه نقطة انطلاق شائعة؛ إبقاؤه خيارًا يتجنب حاسبات شبه مكررة.',
	tool_aspect_ratio_references: 'NIST SP 811 لإرشادات تحويل الوحدات والأطوال.',
	tool_aspect_ratio_ref_nist_label: 'NIST — المنشور الخاص 811 (تحويل الوحدات)',
};

export default ar;
