/**
 * i18n tool shard (flip-image / ar).
 * قلب صورة محليًا عبر Canvas أفقيًا/عموديًا؛ إعدادات متقدمة للتنسيق؛ شريط تقدم ذهبي.
 * يجب أن تطابق المفاتيح en.ts تمامًا؛ إعادة كتابة قريبة من العربية وليست ترجمة آلية.
 */
import type { SiteLangDict } from '../../../types';

/** قاموس النصوص العربية لصفحة أداة قلب الصورة (واجهة وشرح وأسئلة شائعة). */
const ar: SiteLangDict = {
	tool_flip_image_title: 'قلب الصورة — أفقي أو عمودي',
	tool_flip_image_desc: 'اعكس صورة يمينًا/يسارًا أو أعلى/أسفل على جهازك ثم نزّل JPEG أو WebP أو PNG دون رفع إلى خادم.',
	tool_flip_image_description:
		'اقلب صورة أفقيًا أو عموديًا داخل المتصفح—مرآة لصور السيلفي أو تبديل جانبي التخطيط دون رفع. الخطوات: اختر صورة، فعّل القلب الأفقي و/أو العمودي، اضغط «اقلب»، ثم «تنزيل» JPEG/WebP/PNG. مثال: كتل ألوان A/B/C/D يحرّك القلب الأفقي الحرف A إلى اليمين. تبقى الملفات على جهازك.',
	tool_flip_image_choose_file: 'اختر صورة',
	tool_flip_image_drop_hint: 'أو أسقط JPEG أو PNG أو WebP أو GIF هنا. المعالجة تبقى في هذا التبويب.',
	tool_flip_image_flip: 'اقلب',
	tool_flip_image_download: 'تنزيل',
	tool_flip_image_sample: 'تحميل مثال',
	tool_flip_image_clear: 'مسح',
	tool_flip_image_flip_h: 'قلب أفقي',
	tool_flip_image_flip_v: 'قلب عمودي',
	tool_flip_image_advanced: 'إعدادات متقدمة (اختياري)',
	tool_flip_image_format_label: 'تنسيق الإخراج',
	tool_flip_image_format_jpeg: 'JPEG',
	tool_flip_image_format_png: 'PNG',
	tool_flip_image_format_webp: 'WebP',
	tool_flip_image_format_hint: 'WebP يحافظ على حجم صغير مع الشفافية. PNG بلا فقدان. JPEG يحتاج لون خلفية.',
	tool_flip_image_quality_label: 'الجودة',
	tool_flip_image_quality_hint: 'ينطبق على JPEG وWebP فقط. PNG يتجاهل هذا المنزلق.',
	tool_flip_image_jpeg_bg_label: 'خلفية JPEG',
	tool_flip_image_jpeg_bg_hint: 'يملأ البكسلات الشفافة قبل تصدير JPEG. الافتراضي أبيض.',
	tool_flip_image_preview_label: 'معاينة',
	tool_flip_image_progress: 'جارٍ قلب الصورة…',
	tool_flip_image_step_decode: 'فك الترميز',
	tool_flip_image_step_flip: 'قلب البكسلات',
	tool_flip_image_step_encode: 'ترميز',
	tool_flip_image_decode_step: 'جارٍ فك ترميز الصورة…',
	tool_flip_image_flip_step: 'جارٍ تطبيق تحويل المقياس…',
	tool_flip_image_encode_step: 'جارٍ ترميز {fmt}…',
	tool_flip_image_elapsed: 'مرّ {s} ث',
	tool_flip_image_empty: 'اختر صورة أولًا.',
	tool_flip_image_no_flip: 'فعّل «قلب أفقي» و/أو «قلب عمودي».',
	tool_flip_image_err_decode: 'تعذّر فك ترميز الصورة. جرّب JPEG أو PNG أو WebP.',
	tool_flip_image_err_encode: 'تعذّر التصدير. جرّب صورة أصغر أو تنسيقًا آخر.',
	tool_flip_image_warn_large: 'ملف كبير (>25 ميجابايت) — قد يكون بطيئًا.',
	tool_flip_image_warn_edge: 'الحافة تتجاوز نحو 8192 بكسل — قد تفشل بعض المتصفحات.',
	tool_flip_image_warn_animation: 'GIF متحرّك: تُستخدم الإطار الأول فقط.',
	tool_flip_image_status_working: 'جارٍ العمل…',
	tool_flip_image_status_done: 'تم — اضغط «تنزيل» للحفظ.',
	tool_flip_image_stats_tpl: 'قُلب {w}×{h} → {fmt} ({bytes})',
	tool_flip_image_how_title: 'كيف تقلب صورة',
	tool_flip_image_how_body:
		'الأداة تعيد رسم البكسلات كمرآة حقيقية على اللوحة، وليست معاينة CSS فقط. التصدير يعيد الترميز بالتنسيق الذي تختاره في الإعدادات المتقدمة.',
	tool_flip_image_how_item_1: 'اختر صورة أو أسقط JPEG أو PNG أو WebP أو GIF في المربع.',
	tool_flip_image_how_item_2: 'فعّل «قلب أفقي» و/أو «قلب عمودي». تتحدّث المعاينة فورًا.',
	tool_flip_image_how_item_3: 'اختياريًا افتح الإعدادات المتقدمة لاختيار JPEG أو WebP أو PNG والجودة ولون خلفية JPEG.',
	tool_flip_image_how_item_4: 'اضغط «اقلب»، انتظر شريط التقدم، ثم اضغط «تنزيل».',
	tool_flip_image_why_choose_title: 'لماذا تستخدم قلب الصورة في موقعنا',
	tool_flip_image_why_choose_item_1: 'مرآة أفقية وعمودية في تمريرة واحدة — تفعيل الاثنين يعادل 180° على الصور المستطيلة.',
	tool_flip_image_why_choose_item_2: 'معاينة حية قبل التصدير لترى إلى أي جانب ينتقل العلامة.',
	tool_flip_image_why_choose_item_3: 'تصدير JPEG / WebP / PNG مع ضبط الجودة وخلفية JPEG في الإعدادات المتقدمة.',
	tool_flip_image_why_choose_item_4: 'تحذيرات لطيفة للملفات الضخمة والحواف الطويلة وGIF المتحرّك (الإطار الأول فقط).',
	tool_flip_image_why_choose_item_5: 'يعمل بالكامل في هذا التبويب — لا تُرفع الصورة إلى خوادمنا.',
	tool_flip_image_rules_title: 'القواعد',
	tool_flip_image_rules_body: 'القلب يعكس الصورة على لوحة بحجم المصدر ثم يصدّر ملفًا قابلًا للتنزيل.',
	tool_flip_image_rules_item_1: 'أفقي: انعكاس عبر المحور العمودي (يسار↔يمين).',
	tool_flip_image_rules_item_2: 'عمودي: انعكاس عبر المحور الأفقي (أعلى↔أسفل).',
	tool_flip_image_rules_item_3: 'تفعيل الاثنين = مكافئ دوران 180° للصور المستطيلة (تتبادل الزوايا).',
	tool_flip_image_rules_item_4: 'GIF المتحرّك يستخدم الإطار الأول فقط؛ PNG/WebP يحفظان الشفافية؛ JPEG يملأ بلون الخلفية.',
	tool_flip_image_rules_item_5: 'القلب نفسه يعيد ترتيب البكسلات؛ الحفظ كـ JPEG/WebP يعيد الترميز وقد يغيّر الحجم بالبايت.',
	tool_flip_image_example_title: 'مثال',
	tool_flip_image_example:
		'«تحميل مثال» يبني شبكة 480×320 معلَّمة A B / C D. القلب الأفقي (الافتراضي) ينقل A إلى الجانب الأيمن. اضغط «اقلب» ثم «تنزيل». فعّل أيضًا القلب العمودي واضغط «اقلب» مجددًا لترى مكافئ 180°.',
	tool_flip_image_usecases_title: 'متى تستخدمه',
	tool_flip_image_usecase_1: 'تصحيح سيلفي معكوس قبل النشر حتى تُقرأ الكتابة على القميص بشكل صحيح.',
	tool_flip_image_usecase_2: 'تبديل يسار/يمين في نموذج منتج ليجلس زر الدعوة في الجانب المفضّل.',
	tool_flip_image_usecase_3: 'قلب صفحة ممسوحة صُوّرت مقلوبة رأسًا على عقب (استخدم القلب العمودي).',
	tool_flip_image_usecase_4: 'تجهيز نسخة تخطيط معكوسة للطباعة دون فتح محرّر سطح مكتب.',
	tool_flip_image_faq_q1: 'هل تُرفع الصور؟',
	tool_flip_image_faq_a1:
		'لا. فك الترميز والقلب والتصدير تعمل في تبويب متصفحك. تُحمَّل مكتبات الموقع من مجلد vendor على نفس النطاق عند الحاجة؛ تبقى بايتات ملفك محلية ولا تُرفع إلى خادمنا.',
	tool_flip_image_faq_q2: 'هل تُفقد الجودة؟',
	tool_flip_image_faq_a2:
		'القلب نفسه يعيد ترتيب البكسلات فقط. الحفظ كـ JPEG أو WebP يعيد الترميز وقد يغيّر البايتات. اختر PNG في الإعدادات المتقدمة لتنزيل بلا فقدان.',
	tool_flip_image_faq_q3: 'ما الفرق بين القلب والتدوير؟',
	tool_flip_image_faq_a3:
		'القلب مرآة عبر محور. التدوير يدور بزاوية. هذه الصفحة للمرآة فقط — استخدم أداة تدوير عندما تحتاج خطوات 90°.',
	tool_flip_image_faq_q4: 'هل يمكن القلب بالاتجاهين معًا؟',
	tool_flip_image_faq_a4:
		'نعم. فعّل «قلب أفقي» و«قلب عمودي» معًا. على صورة مستطيلة ذلك يكافئ دوران 180°.',
	tool_flip_image_faq_q5: 'ماذا عن GIF المتحرّك؟',
	tool_flip_image_faq_a5:
		'يُفكّ ترميز الإطار الأول فقط ويُقلب. لا تُحفظ الرسوم متعددة الإطارات في التنزيل.',
	tool_flip_image_faq_q6: 'لماذا يبدو JPEG مختلفًا عن المعاينة؟',
	tool_flip_image_faq_a6:
		'JPEG بلا شفافية. تُملأ البكسلات الشفافة بلون خلفية JPEG قبل الترميز. المعاينة هنا تستخدم رقعة شطرنج للشفافية.',
	tool_flip_image_faq_q7: 'قلب الصورة مقابل القص أو التدرج الرمادي؟',
	tool_flip_image_faq_a7:
		'هذه الصفحة للمرآة فقط. القص يقص الحواف؛ التدرج الرمادي يزيل اللون. استخدم أدوات القص أو التدرج الرمادي ذات الصلة لتلك المهام.',
	tool_flip_image_article:
		'قلب محلي على اللوحة بمرآة أفقية وعمودية؛ تُعاد رسم البكسلات وليس CSS فقط.',
	tool_flip_image_ref_a_label: 'MDN — CanvasRenderingContext2D.scale()',
	tool_flip_image_ref_b_label: 'MDN — HTMLCanvasElement.toBlob()',
};

export default ar;
