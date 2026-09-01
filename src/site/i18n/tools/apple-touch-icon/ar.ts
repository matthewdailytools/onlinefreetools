/**
 * شريحة i18n (apple-touch-icon / ar).
 * إعادة كتابة حسب البحث: العنوان apple-touch-icon 180×180؛ الملفات على الجهاز دون رفع.
 */
import type { SiteLangDict } from '../../../types';

/** النصوص العربية الظاهرة: أيقونة الشاشة الرئيسية 180، ZIP اختياري، خلفية معتمة. */
const ar: SiteLangDict = {
	tool_apple_touch_icon_article:
		'حوّل الشعار إلى أيقونة لمس للشاشة الرئيسية: PNG معتم 180×180. إن احتجت أحجامًا أخرى، يضيف ZIP أيقونة favicon 32 وأيقونات PWA 192 و512. تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_apple_touch_icon_bg_label: 'خلفية معتمة',
	tool_apple_touch_icon_choose_image: 'اختر شعارًا',
	tool_apple_touch_icon_clear: 'مسح',
	tool_apple_touch_icon_desc:
		'صدّر apple-touch-icon 180×180 PNG معتمًا؛ يبقى على جهازك دون رفع إلى خادم.',
	tool_apple_touch_icon_description:
		'apple-touch-icon 180×180: اختر الشعار، ضعه على مربع معتم، ثم نزّل PNG. مثال: العينة عند الفتح تُلائم 180×180. الخطوات: اختيار → الإبقاء على 180 → تنزيل. ZIP اختياري فيه favicon 32 وPWA 192 / 512. تبقى الملفات على جهازك ولا تُرفع إلى خادم.',
	tool_apple_touch_icon_download: 'تنزيل PNG',
	tool_apple_touch_icon_download_zip: 'تنزيل ZIP للأحجام',
	tool_apple_touch_icon_drop_hint: 'أسقط شعارًا واحدًا. يُوسَّط على مربع معتم.',
	tool_apple_touch_icon_empty: 'اختر شعارًا أولًا.',
	tool_apple_touch_icon_err_decode:
		'تعذّر قراءة الصورة. جرّب PNG أو JPEG أو لقطة نقطية من SVG.',
	tool_apple_touch_icon_err_fflate: 'فشل تحميل محرك ZIP. تحقق من الشبكة ثم أعد المحاولة.',
	tool_apple_touch_icon_example:
		'«حمّل مثالًا» يرسم علامة تجريبية، يضعها في مربع معتم 180×180، ويفعّل تنزيل PNG. ZIP يضيف 32 و192 و512.',
	tool_apple_touch_icon_example_title: 'مثال',
	tool_apple_touch_icon_faq_a1:
		'الخلفية المعتمة (بأسلوب precomposed) تمنع iOS من وضع لمعة فوق الشفافية على الشاشة الرئيسية.',
	tool_apple_touch_icon_faq_a2:
		'لا. يُفك الترميز في هذا التبويب. لا يُرفع شيء إلى خوادمنا.',
	tool_apple_touch_icon_faq_a3:
		'32 أيقونة favicon صغيرة. 192 و512 شائعتان في PWA. تأتي مع ZIP؛ التصدير الافتراضي يبقى 180×180.',
	tool_apple_touch_icon_faq_a4:
		'نعم لشاشة iPhone الرئيسية الحديثة: 180×180 هو الحجم العملي لـ apple-touch-icon.png قبل وسم link.',
	tool_apple_touch_icon_faq_a5:
		'أحجام iPad الأقدم 167 / 152 / 120 اختيارية في مجموعة ZIP. الافتراضي يبقى 180×180.',
	tool_apple_touch_icon_faq_q1: 'لماذا الخلفية المعتمة؟',
	tool_apple_touch_icon_faq_q2: 'هل يُرفع شعاري؟',
	tool_apple_touch_icon_faq_q3: 'ما فائدة 32 و192/512؟',
	tool_apple_touch_icon_faq_q4: 'هل 180×180 كافٍ لأيقونة اللمس؟',
	tool_apple_touch_icon_faq_q5: 'هل ما زلتم تصدّرون 167 أو 152؟',
	tool_apple_touch_icon_how_body:
		'جهّز الشعار الذي يظهر عند إضافة الموقع للشاشة الرئيسية، صدّر PNG معتمًا 180×180، ثم أضف أحجامًا في ZIP إن لزم.',
	tool_apple_touch_icon_how_item_1: 'اختر الشعار لمهمة apple-touch-icon 180×180.',
	tool_apple_touch_icon_how_item_2: 'أبقِ 180 محددًا إلا إذا احتجت شرائح 32 / 192 / 512.',
	tool_apple_touch_icon_how_item_3: 'أبقِ الخلفية معتمة حتى لا تظهر الشاشة من خلال الأيقونة.',
	tool_apple_touch_icon_how_item_4: 'نزّل PNG أو ZIP الأحجام. المثال يعمل تلقائيًا عند الفتح.',
	tool_apple_touch_icon_how_title: 'طريقة الاستخدام',
	tool_apple_touch_icon_load_sample: 'حمّل مثالًا',
	tool_apple_touch_icon_out_size_label: 'حجم الإخراج',
	tool_apple_touch_icon_rules_body:
		'أيقونة الشاشة الرئيسية تحتاج مربعًا وملءًا معتمًا وPNG بمقاس 180، لا حزمة ICO كاملة.',
	tool_apple_touch_icon_rules_item_1:
		'اللوحة الافتراضية PNG 180×180. الشعار يُحتوى (دون شد) ويُوسَّط.',
	tool_apple_touch_icon_rules_item_2: 'الخلفية معتمة (أبيض افتراضيًا). الشفافية تُسطَّح عمدًا.',
	tool_apple_touch_icon_rules_item_3: '32 / 192 / 512 إدخالات ZIP إضافية لا تغيّر التصدير الافتراضي.',
	tool_apple_touch_icon_rules_item_4: 'لا حزمة ICO ولا ملف browserconfig.xml.',
	tool_apple_touch_icon_rules_title: 'قواعد تتوقعها',
	tool_apple_touch_icon_size_180: '180×180',
	tool_apple_touch_icon_size_192: '192×192',
	tool_apple_touch_icon_size_32: '32×32',
	tool_apple_touch_icon_size_512: '512×512',
	tool_apple_touch_icon_status_done: 'الأيقونة جاهزة — نزّل أو استبدل الشعار.',
	tool_apple_touch_icon_status_working: 'جارٍ رسم المربع…',
	tool_apple_touch_icon_title: 'apple-touch-icon 180×180',
	tool_apple_touch_icon_usecase_1:
		'قبل وسم link: صدّر apple-touch-icon.png بمقاس 180×180 لإضافة الموقع للشاشة الرئيسية.',
	tool_apple_touch_icon_usecase_2: 'لتطبيق ويب تقدمي: خذ 192 و512 من ZIP لملف البيان.',
	tool_apple_touch_icon_usecase_3:
		'إن طلب المتصفح PNG مربعًا صغيرًا، استخدم favicon 32 من ZIP دون تجميع ICO.',
	tool_apple_touch_icon_usecases_title: 'متى يناسب',
};

export default ar;
