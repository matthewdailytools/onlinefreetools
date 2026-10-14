/**
 * i18n tool shard (image-to-base64 / ar).
 * تحويل صورة إلى Base64 (data URL) وفك Base64 إلى صورة في الصفحة نفسها؛ المعالجة في المتصفح دون رفع إلى خادم.
 * Key set must match en.ts exactly. Button words: ترميز / فك الترميز / نسخ / تنزيل / تحميل مثال / مسح.
 * Placeholders kept verbatim: {mime} {chars} {bytes} {s}.
 */
import type { SiteLangDict } from '../../../types';

/** قاموس النصوص العربية (أُعيدت كتابته وفق عبارات البحث المحلية مثل «تحويل صورة إلى Base64»). */
const ar: SiteLangDict = {
	tool_image_to_base64_title: 'تحويل صورة إلى Base64 — ترميز وفك ترميز على جهازك',
	tool_image_to_base64_desc: 'حوّل الصورة إلى Base64 أو data URL، أو أعد Base64 إلى صورة؛ دون رفع إلى خادم.',
	tool_image_to_base64_description:
		'حوّل صورة إلى Base64 أو رابط data URL، أو أعد نص Base64 إلى صورة، داخل المتصفح دون رفع إلى خادم؛ تبقى الملفات على جهازك. الخطوات: اختر صورة ثم «ترميز» ثم «نسخ» أو «تنزيل»، أو الصق النص واضغط «فك الترميز». مثال: صورة PNG تجريبية → data:image/png;base64,… تُلصق في HTML.',
	tool_image_to_base64_mode_label: 'الوضع',
	tool_image_to_base64_tab_encode: 'ترميز',
	tool_image_to_base64_tab_decode: 'فك الترميز',
	tool_image_to_base64_choose_file: 'اختر صورة',
	tool_image_to_base64_drop_hint: 'أو اسحب ملف JPEG أو PNG أو WebP أو GIF إلى هنا. تتم المعالجة داخل هذا التبويب فقط.',
	tool_image_to_base64_encode: 'ترميز',
	tool_image_to_base64_decode_btn: 'فك الترميز',
	tool_image_to_base64_copy: 'نسخ',
	tool_image_to_base64_copy_done: 'تم النسخ',
	tool_image_to_base64_download: 'تنزيل',
	tool_image_to_base64_sample: 'تحميل مثال',
	tool_image_to_base64_clear: 'مسح',
	tool_image_to_base64_advanced: 'إعدادات متقدمة (اختيارية)',
	tool_image_to_base64_strip_prefix: 'إزالة البادئة data: (نص Base64 فقط)',
	tool_image_to_base64_strip_hint: 'عند الإيقاف (الافتراضي) تبقى البادئة data:image/…;base64, فيمكن لصق النص في HTML مباشرة. عند التشغيل يُنسخ نص Base64 وحده بعد الفاصلة.',
	tool_image_to_base64_decode_mime_label: 'نوع MIME الافتراضي لنص Base64 المجرد',
	tool_image_to_base64_decode_mime_hint: 'يُستخدم فقط إذا لم يبدأ النص الملصق بـ data:. أما رابط data URL الكامل فيحتفظ بنوعه.',
	tool_image_to_base64_decode_input_label: 'Base64 / data URL',
	tool_image_to_base64_decode_placeholder: 'الصق data:image/…;base64,… أو نص Base64 مجردًا',
	tool_image_to_base64_output_label: 'الناتج',
	tool_image_to_base64_preview_label: 'معاينة',
	tool_image_to_base64_progress: 'جارٍ المعالجة…',
	tool_image_to_base64_step_read: 'قراءة الملف',
	tool_image_to_base64_step_encode: 'ترميز',
	tool_image_to_base64_step_ready: 'جاهز',
	tool_image_to_base64_read_step: 'جارٍ قراءة الملف…',
	tool_image_to_base64_encode_step: 'جارٍ إنشاء رابط data URL…',
	tool_image_to_base64_ready_step: 'الناتج جاهز',
	tool_image_to_base64_decode_step_parse: 'تحليل',
	tool_image_to_base64_decode_step_blob: 'استعادة الصورة',
	tool_image_to_base64_decode_step_ready: 'جاهز',
	tool_image_to_base64_parse_step: 'جارٍ تحليل Base64…',
	tool_image_to_base64_blob_step: 'جارٍ إعادة بناء بيانات الصورة…',
	tool_image_to_base64_elapsed: 'مضى {s} ث',
	tool_image_to_base64_empty: 'اختر صورة أولًا.',
	tool_image_to_base64_empty_decode: 'الصق رابط data URL أو نص Base64 أولًا.',
	tool_image_to_base64_err_decode: 'تعذّر فك الترميز. تأكد أن النص رابط data URL لصورة أو Base64 صالح.',
	tool_image_to_base64_err_encode: 'تعذّر ترميز هذا الملف. جرّب JPEG أو PNG أو WebP.',
	tool_image_to_base64_err_invalid: 'نص Base64 أو رابط data URL غير صالح.',
	tool_image_to_base64_warn_large: 'الملف كبير (أكثر من 25 ميغابايت) — قد يبطئ التحويل ويستهلك ذاكرة كثيرة.',
	tool_image_to_base64_status_working: 'جارٍ المعالجة…',
	tool_image_to_base64_status_done: 'تم — انسخ النص أو اضغط «تنزيل».',
	tool_image_to_base64_status_decoded: 'تم — المعاينة جاهزة؛ اضغط «تنزيل» لحفظ الصورة.',
	tool_image_to_base64_stats_tpl: '{mime} · {chars} حرفًا · {bytes}',
	tool_image_to_base64_how_title: 'كيفية تحويل صورة إلى Base64',
	tool_image_to_base64_how_body:
		'الترميز يقرأ ملف الصورة كاملًا ويحوّله إلى نص data URL. فك الترميز يقبل رابط data URL كاملًا أو نص Base64 مجردًا، ويعامل الأخير بنوع MIME الافتراضي من «إعدادات متقدمة». كل ذلك يجري في المتصفح دون رفع الملف إلى خادم.',
	tool_image_to_base64_how_item_1: 'ابقَ في تبويب «ترميز»، واضغط «اختر صورة» أو اسحب الملف، ثم اضغط «ترميز».',
	tool_image_to_base64_how_item_2: 'إن كانت الواجهة البرمجية تقبل Base64 فقط، افتح «إعدادات متقدمة» وفعّل إزالة البادئة data:.',
	tool_image_to_base64_how_item_3: 'اضغط «نسخ» لوضع النص في الحافظة، أو «تنزيل» لحفظ الصورة الأصلية.',
	tool_image_to_base64_how_item_4: 'لتحويل Base64 إلى صورة: انتقل إلى «فك الترميز»، الصق النص، اضغط «فك الترميز» ثم «تنزيل».',
	tool_image_to_base64_why_choose_title: 'لماذا تستخدم أداة تحويل صورة إلى Base64 هذه',
	tool_image_to_base64_why_choose_item_1: 'تعمل في الاتجاهين: صورة إلى Base64 وBase64 إلى صورة بتبويبين في الصفحة نفسها.',
	tool_image_to_base64_why_choose_item_2: 'خيار إزالة البادئة data: يعطيك Base64 مجردًا لحقول الواجهات البرمجية التي ترفض البادئة.',
	tool_image_to_base64_why_choose_item_3: 'معاينة فورية بعد الترميز أو فك الترميز لترى الصورة نفسها لا سلسلة الأحرف فقط.',
	tool_image_to_base64_why_choose_item_4: 'تنبيه مسبق عند الملفات الأكبر من 25 ميغابايت قبل أن يثقل المتصفح.',
	tool_image_to_base64_why_choose_item_5: 'تبقى الملفات على جهازك داخل هذا التبويب ولا تُرفع إلى خوادمنا.',
	tool_image_to_base64_rules_title: 'قواعد التحويل',
	tool_image_to_base64_rules_body: 'الترميز يحوّل بايتات الملف الأصلية إلى data URL دون إعادة ضغط. فك الترميز يعيد بناء ملف الصورة من النص لتنزيله.',
	tool_image_to_base64_rules_item_1: 'الناتج الافتراضي نص كامل بصيغة data:image/…;base64,… يصلح مباشرة لخاصية src في وسم img.',
	tool_image_to_base64_rules_item_2: 'إزالة البادئة تحذف كل ما قبل أول فاصلة، فيبقى نص Base64 وحده كما تطلبه بعض الواجهات البرمجية.',
	tool_image_to_base64_rules_item_3: 'نص Base64 بلا بادئة يُعامل بنوع MIME الافتراضي في «إعدادات متقدمة» (image/png افتراضيًا).',
	tool_image_to_base64_rules_item_4: 'النص الذي يحوي أحرفًا غير صالحة أو المقطوع يُظهر رسالة خطأ؛ ولا يُرفع أي شيء.',
	tool_image_to_base64_rules_item_5: 'صور GIF المتحركة تُرمَّز كملف كامل؛ هذه الصفحة لا تقسّم الإطارات ولا تعدّلها.',
	tool_image_to_base64_example_title: 'مثال',
	tool_image_to_base64_example:
		'يُنشئ زر «تحميل مثال» صورة PNG بحجم 320×200 مكتوبًا عليها «Base64»، وينفّذ «ترميز» تلقائيًا فيظهر في الناتج data:image/png;base64,…. الصق النص في وسم <img src="…"> داخل HTML لعرضها. ثم انتقل إلى «فك الترميز» والصق النص نفسه واضغط «فك الترميز»، وبعدها «تنزيل» للحصول على decoded.png.',
	tool_image_to_base64_usecases_title: 'متى تحتاجها',
	tool_image_to_base64_usecase_1: 'تضمين أيقونة صغيرة أو شعار داخل HTML أو CSS دون طلب صورة منفصل.',
	tool_image_to_base64_usecase_2: 'فحص صورة مضمّنة بصيغة data URL في قالب بريد إلكتروني أو ملف Markdown لا تظهر كما ينبغي.',
	tool_image_to_base64_usecase_3: 'استعادة صورة من نص Base64 ورد في استجابة واجهة برمجية لمعرفة محتواها.',
	tool_image_to_base64_usecase_4: 'تسليم نص Base64 مجرد لحقل نموذج يرفض البادئة data:.',
	tool_image_to_base64_faq_q1: 'هل تُرفع الصور إلى خادم؟',
	tool_image_to_base64_faq_a1:
		'لا. القراءة والترميز وفك الترميز تتم كلها داخل تبويب المتصفح؛ تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_image_to_base64_faq_q2: 'ما الفرق بين data URL ونص Base64 المجرد؟',
	tool_image_to_base64_faq_a2:
		'رابط data URL يبدأ بـ data:image/png;base64, ثم يليه النص، وهو جاهز للاستخدام في HTML. أما Base64 المجرد فهو النص وحده؛ للحصول عليه فعّل إزالة البادئة data: في «إعدادات متقدمة» قبل النسخ.',
	tool_image_to_base64_faq_q3: 'هل يمكن تحويل صور كبيرة جدًا؟',
	tool_image_to_base64_faq_a3:
		'نعم، لكنها تستهلك ذاكرة كثيرة؛ إذ يزيد Base64 الحجم بنحو 33%. إذا تجاوز الملف نحو 25 ميغابايت فاضغطه أو صغّر أبعاده أولًا.',
	tool_image_to_base64_faq_q4: 'كيف يُحدَّد نوع الصورة عند فك الترميز؟',
	tool_image_to_base64_faq_a4:
		'يؤخذ من رابط data URL إن وُجد. أما نص Base64 المجرد فيُعامل بنوع MIME الافتراضي في «إعدادات متقدمة» (image/png افتراضيًا).',
	tool_image_to_base64_faq_q5: 'هل تعمل مع صور GIF المتحركة؟',
	tool_image_to_base64_faq_a5:
		'نعم، يُرمَّز الملف كاملًا إلى data URL فتبقى الحركة كما هي. لا تقسّم هذه الصفحة الإطارات ولا تعدّلها.',
	tool_image_to_base64_faq_q6: 'ما الفرق بينها وبين أداة تحويل صيغ الصور؟',
	tool_image_to_base64_faq_a6:
		'هذه الأداة تُخرج نصًا (أو تستعيد صورة من نص). إن أردت تحويل ملف بين JPEG وPNG وWebP دون Base64 فاستخدم أداة تحويل صيغ الصور.',
	tool_image_to_base64_faq_q7: 'لماذا زر «نسخ» معطّل أو ينسخ نصًا فارغًا؟',
	tool_image_to_base64_faq_a7:
		'يحتاج «نسخ» إلى ناتج ترميز: اختر صورة واضغط «ترميز» ثم انسخ. في وضع فك الترميز استخدم «تنزيل» لحفظ الصورة.',
	tool_image_to_base64_article:
		'الترميز يقرأ الصورة كرابط data URL؛ وفك الترميز يقبل data URL أو Base64 مجردًا مع نوع MIME افتراضي قابل للتغيير.',
	tool_image_to_base64_ref_a_label: 'MDN — FileReader.readAsDataURL()',
	tool_image_to_base64_ref_b_label: 'MDN — روابط Data URL',
};

/** التصدير الافتراضي: يُدمج في حزمة اللغة العربية للموقع عبر merge:tools. */
export default ar;
