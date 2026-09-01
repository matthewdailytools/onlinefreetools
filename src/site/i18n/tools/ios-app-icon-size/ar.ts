/**
 * شريحة i18n (ios-app-icon-size / ar).
 * عنوان البحث المحلي: حجم أيقونة تطبيق iOS؛ المهمة الافتراضية PNG 1024 غير شفاف لمتجر التطبيقات.
 */
import type { SiteLangDict } from '../../../types';

/** نصوص عربية: تصدير 1024، أرشيف المقاسات، الملفات تبقى على الجهاز. */
const ar: SiteLangDict = {
	tool_ios_app_icon_size_article:
		'حوّل الشعار إلى PNG مربع 1024×1024 غير شفاف لمتجر التطبيقات. إن احتجت، يضم الأرشيف 180 للآيفون و167 للآيباد و512 لـ Play. الملفات تبقى على جهازك ولا تُرفع إلى خادم.',
	tool_ios_app_icon_size_bg_label: 'خلفية غير شفافة',
	tool_ios_app_icon_size_choose_image: 'اختر شعارًا',
	tool_ios_app_icon_size_clear: 'مسح',
	tool_ios_app_icon_size_desc:
		'صدّر حجم أيقونة تطبيق iOS 1024×1024 غير شفاف؛ يبقى على الجهاز دون رفع إلى الخادم.',
	tool_ios_app_icon_size_description:
		'حجم أيقونة تطبيق iOS: اختر شعارًا، ضعه على مربع غير شفاف 1024×1024 لـ App Store Connect، ثم نزّل PNG. مثال: شعار العينة يُضبط على 1024×1024 عند الفتح. الشرائح الاختيارية تصدّر 180 و167 وPlay 512 في ZIP. الملفات تبقى على الجهاز ولا تُرفع إلى خادم.',
	tool_ios_app_icon_size_download: 'نزّل PNG',
	tool_ios_app_icon_size_download_zip: 'نزّل أرشيف المقاسات',
	tool_ios_app_icon_size_drop_hint: 'أفلت شعارًا مربعًا. يُوسَّط على خلفية غير شفافة دون قص زوايا مسبقة.',
	tool_ios_app_icon_size_empty: 'اختر شعارًا أولًا.',
	tool_ios_app_icon_size_err_decode: 'تعذّر قراءة الصورة. جرّب PNG أو JPEG.',
	tool_ios_app_icon_size_err_fflate: 'فشل تحميل محرك ZIP. تحقق من الشبكة ثم أعد المحاولة.',
	tool_ios_app_icon_size_example:
		'«حمّل مثالًا» يرسم علامة ويضعها في مربع 1024×1024 غير شفاف ويفعّل التنزيل. الأرشيف يضيف 180 و167 وPlay 512 ومقاسات أصغر.',
	tool_ios_app_icon_size_example_title: 'مثال',
	tool_ios_app_icon_size_faq_a1:
		'لا. يُفك الشعار في هذا التبويب. لا شيء يُرفع إلى خوادمنا.',
	tool_ios_app_icon_size_faq_a2:
		'ما زال App Store Connect يطلب PNG 1024×1024 بلا شفافية. هذا هو حجم أيقونة تطبيق iOS الافتراضي هنا.',
	tool_ios_app_icon_size_faq_a3:
		'النظام يطبق الشكل المستدير. صدّر المربع كاملًا ولا تقص الزوايا بنفسك.',
	tool_ios_app_icon_size_faq_a4:
		'180 لآيفون 60 نقطة @3x. 167 لآيباد برو 83.5 @2x. شرائح وليست عنوانًا ثانيًا.',
	tool_ios_app_icon_size_faq_a5:
		'أيقونة Play عالية الدقة 512 داخل الأرشيف. لا XML للأيقونة التكيفية ولا صفحة حزمة منفصلة.',
	tool_ios_app_icon_size_faq_q1: 'هل يُرفع شعاري؟',
	tool_ios_app_icon_size_faq_q2: 'لماذا 1024×1024؟',
	tool_ios_app_icon_size_faq_q3: 'هل أقص الزوايا؟',
	tool_ios_app_icon_size_faq_q4: 'ما 180 و167؟',
	tool_ios_app_icon_size_faq_q5: 'أين أيقونة Google Play؟',
	tool_ios_app_icon_size_how_body:
		'اختر شعار المتجر، صدّر PNG 1024×1024 غير شفاف، ثم إن شئت اضغط مقاسات الآيفون والآيباد وPlay.',
	tool_ios_app_icon_size_how_item_1: 'اختر الشعار لحجم أيقونة تطبيق iOS — المهمة PNG 1024 للمتجر.',
	tool_ios_app_icon_size_how_item_2: 'أبقِ 1024 ما لم تحتج شرائح 180 / 167 / Play 512.',
	tool_ios_app_icon_size_how_item_3: 'أبقِ الخلفية غير شفافة حتى لا يرفض Connect الشفافية.',
	tool_ios_app_icon_size_how_item_4: 'نزّل PNG أو الأرشيف. المثال يعمل عند أول رسم.',
	tool_ios_app_icon_size_how_title: 'طريقة العمل',
	tool_ios_app_icon_size_load_sample: 'حمّل مثالًا',
	tool_ios_app_icon_size_out_size_label: 'مقاس الإخراج',
	tool_ios_app_icon_size_rules_body:
		'أيقونة المتجر مربع بخلفية مصمتة، منفصلة عن صفحات أيقونة اللمس للمواقع.',
	tool_ios_app_icon_size_rules_item_1:
		'اللوحة الافتراضية PNG 1024×1024. الشعار يُحتوى ويُوسَّط دون شد.',
	tool_ios_app_icon_size_rules_item_2:
		'الخلفية غير شفافة (أبيض افتراضيًا). تُسطَّح قناة ألفا عمدًا.',
	tool_ios_app_icon_size_rules_item_3:
		'180 / 167 / Play 512 داخل الأرشيف ولا تغيّر العنوان.',
	tool_ios_app_icon_size_rules_item_4:
		'ليست مشروع Assets.xcassets ولا حزمة أيقونة تكيفية.',
	tool_ios_app_icon_size_rules_title: 'قواعد متوقعة',
	tool_ios_app_icon_size_size_1024: '1024×1024',
	tool_ios_app_icon_size_size_167: '167×167',
	tool_ios_app_icon_size_size_180: '180×180',
	tool_ios_app_icon_size_size_512: 'Play 512',
	tool_ios_app_icon_size_status_done: 'الأيقونة جاهزة — نزّل أو استبدل الشعار.',
	tool_ios_app_icon_size_status_working: 'جارٍ رسم المربع…',
	tool_ios_app_icon_size_title: 'حجم أيقونة تطبيق iOS',
	tool_ios_app_icon_size_usecase_1:
		'App Store Connect: صدّر أيقونة 1024×1024 قبل إرفاق اللقطات.',
	tool_ios_app_icon_size_usecase_2:
		'شاشة الآيفون: خذ 180 من الأرشيف لمعاينة 60 نقطة @3x.',
	tool_ios_app_icon_size_usecase_3:
		'بطاقة Play: خذ شريحة 512 دون فتح عنوان حزمة آخر.',
	tool_ios_app_icon_size_usecases_title: 'حالات مناسبة',
};

export default ar;
