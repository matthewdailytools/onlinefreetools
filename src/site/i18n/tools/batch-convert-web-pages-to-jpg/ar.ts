/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / ar).
 * عنوان المهمة: تحويل عدة صفحات ويب إلى JPG دفعة واحدة.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: 'إعدادات متقدمة (اختياري)',
	tool_batch_convert_web_pages_to_jpg_article:
		'الصق عنوان صفحة عامة في كل سطر، والتقطها كصورة JPEG بالعرض الذي تختاره، وتجاوز الصفوف الفاشلة ثم نزّل ZIP. يُجلب كل رابط مرة عبر الخادم ولا يُحفظ؛ تُنشأ الصورة في هذا التبويب. هذه لقطة وليست PDF مقاس A4.',
	tool_batch_convert_web_pages_to_jpg_capture_first: 'الشاشة الأولى فقط',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: 'إطار التقاط مخفي',
	tool_batch_convert_web_pages_to_jpg_capture_full: 'الصفحة كاملة',
	tool_batch_convert_web_pages_to_jpg_capture_label: 'نطاق اللقطة',
	tool_batch_convert_web_pages_to_jpg_clear: 'مسح',
	tool_batch_convert_web_pages_to_jpg_col_file: 'الملف',
	tool_batch_convert_web_pages_to_jpg_col_status: 'الحالة',
	tool_batch_convert_web_pages_to_jpg_col_url: 'الرابط',
	tool_batch_convert_web_pages_to_jpg_convert: 'تحويل الكل',
	tool_batch_convert_web_pages_to_jpg_desc:
		'حوّل عدة صفحات ويب إلى JPG من قائمة روابط ثم نزّل ZIP. يُجلب كل عنوان مرة ولا يُخزَّن.',
	tool_batch_convert_web_pages_to_jpg_description:
		'تحويل عدة صفحات ويب إلى JPG من قائمة روابط (سطر واحد يكفي). اختر عرض الشاشة وجودة JPEG، الصفحة كاملة أو الشاشة الأولى، ثم نزّل ZIP. الخطوات: الصق الروابط، تحويل الكل، تنزيل ZIP. مثال: صفحتا مساعدة تصبحان صورتين JPEG. يُجلب كل رابط مرة ولا يُحفظ.',
	tool_batch_convert_web_pages_to_jpg_download_zip: 'تنزيل ZIP',
	tool_batch_convert_web_pages_to_jpg_empty: 'الصق عنوان صفحة واحداً على الأقل أولاً.',
	tool_batch_convert_web_pages_to_jpg_err_convert: 'تعذّر تحويل هذه الصفحة إلى JPEG. تم التجاوز.',
	tool_batch_convert_web_pages_to_jpg_err_fflate: 'تعذّر بناء ZIP في هذا المتصفح. جرّب متصفحاً أحدث.',
	tool_batch_convert_web_pages_to_jpg_err_load: 'فشل تحميل مكتبة التحويل. حدّث الصفحة وأعد المحاولة.',
	tool_batch_convert_web_pages_to_jpg_err_too_many: 'الحد الأقصى 10 روابط. لم تُضف الأسطر الزائدة.',
	tool_batch_convert_web_pages_to_jpg_err_url: 'تعذّر تحميل هذا الرابط. تحقق من العنوان أو أن الموقع يمنع الجلب.',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: 'هذا السطر ليس رابط http(s) صالحاً. تم التجاوز.',
	tool_batch_convert_web_pages_to_jpg_example:
		'تحميل المثال يملأ رابطين من example.com، ويبني صورتين من HTML محلي دون زيارة الموقع الحي، ويفعّل تنزيل ZIP. تحويل الكل يجلب العناوين التي لصقتها. العرض والجودة والصفحة كاملة مقابل الشاشة الأولى تغيّر البكسلات.',
	tool_batch_convert_web_pages_to_jpg_example_title: 'مثال',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'التحويل يجري في هذا التبويب. عند تحويل قائمة نرسل كل عنوان إلى الخادم مرة لجلب HTML ولا نخزّن الصفحات. تُنشأ صور JPEG على جهازك وتُحزم هنا في ZIP.',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'أداة PDF تقسّم إلى صفحات A4 للقراءة والطباعة. هذه الصفحة ترسم JPEG واحداً لكل رابط بالعرض الذي تختاره (سطح مكتب 1280 أو جهاز لوحي 768 أو هاتف 390) مع الجودة والصفحة كاملة أو الشاشة الأولى. نفس القائمة، ملف مختلف.',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'تحويل PDF إلى JPG يبدأ من ملف PDF ترفعه. هنا البداية روابط صفحات. إن كان لديك PDF استخدم تلك الأداة؛ وإن كانت لديك قائمة روابط فهذه الصفحة.',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'لا. تُحذف البرامج النصية. جدران تسجيل الدخول والدفع والتطبيقات المعتمدة على JavaScript غالباً لا تطابق الموقع الحي. يتبع CSS المتجاوب عرض الشاشة الذي اخترته.',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'كل صف ناجح صورة JPEG منفصلة داخل ZIP واحد. رابط واحد يعمل أيضاً. لا ندمج الصور في ملف واحد.',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'عرض الشاشة يغيّر التخطيط (هاتف مقابل سطح مكتب). جودة JPEG توازن الحجم وآثار الضغط. الصفحة الكاملة تلتقط ارتفاع التمرير (بسقف حتى لا ينهار التبويب)؛ الشاشة الأولى تقارب ارتفاع منفذ عرض واحد.',
	tool_batch_convert_web_pages_to_jpg_faq_q1: 'هل تُرفع صفحتي وتُحفظ على الخادم؟',
	tool_batch_convert_web_pages_to_jpg_faq_q2: 'ما الفرق عن تحويل عدة صفحات ويب إلى PDF؟',
	tool_batch_convert_web_pages_to_jpg_faq_q3: 'ما الفرق عن تحويل PDF إلى JPG؟',
	tool_batch_convert_web_pages_to_jpg_faq_q4: 'هل يطابق الموقع الذي يتطلب دخولاً أو يعتمد كثيراً على JavaScript الصفحة الحية؟',
	tool_batch_convert_web_pages_to_jpg_faq_q5: 'هل النتيجة صورة واحدة أم ZIP؟ هل يمكن تحويل رابط واحد؟',
	tool_batch_convert_web_pages_to_jpg_faq_q6: 'ماذا تغيّر عرض الشاشة وجودة JPEG والشاشة الأولى؟',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: '{n} روابط في القائمة',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'الصق قائمة صفحات عامة، اضغط تحويل الكل (الافتراضي سطح مكتب 1280 وجودة JPEG 85٪ والصفحة كاملة)، ثم خذ ZIP للصور التي نجحت.',
	tool_batch_convert_web_pages_to_jpg_how_item_1: 'الصق رابط https في كل سطر (صفحات المساعدة أو التذاكر مناسبة). سطر واحد يكفي لتحويل رابط إلى JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_2: 'اضغط تحويل الكل. الافتراضي سطح مكتب 1280 وجودة JPEG 85٪ والصفحة كاملة. يُجلب كل رابط عام مرة؛ تُتجاوز الصفوف الفاشلة.',
	tool_batch_convert_web_pages_to_jpg_how_item_3: 'تريد عرض هاتف أو الشاشة الأولى فقط أو انتظاراً أطول إن بقيت الصور فارغة؟ افتح الإعدادات المتقدمة لتغيير العرض وجودة JPEG ونطاق الالتقاط وانتظار التحميل.',
	tool_batch_convert_web_pages_to_jpg_how_item_4: 'تحتاج ملفات A4 للطباعة بدل اللقطات؟ استخدم تحويل عدة صفحات ويب إلى PDF. لديك ملف PDF؟ استخدم تحويل PDF إلى JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_5: 'نزّل ZIP عندما ينجح صف واحد على الأقل.',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'حمّل المثال لتجربة صفحتين محليتين؛ تظهر لوحة التقدم أثناء التحويل.',
	tool_batch_convert_web_pages_to_jpg_how_title: 'طريقة العمل',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: 'مضى {s} ث',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: 'جلب',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: 'صور',
	tool_batch_convert_web_pages_to_jpg_hud_title: 'تقدم الدفعة',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'عرض الشاشة يغيّر التخطيط. جودة JPEG تغيّر حجم الملف. الصفحة الكاملة لقطة طويلة؛ الشاشة الأولى بارتفاع منفذ عرض تقريباً.',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'جودة JPEG',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'رابط http(s) واحد في كل سطر، حتى 10. التحويل متسلسل. الصفوف الفاشلة تُتجاوز. صور JPEG الناجحة تدخل ZIP. العرض والجودة ونطاق اللقطة تغيّر البكسلات — ليست PDF بامتداد آخر.',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'يُرسل كل رابط إلى الخادم مرة لجلب HTML ولا يُحفظ. تُبنى صورة JPEG في هذا التبويب.',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'الشبكات الخاصة وتسجيل الدخول والصفحات المفقودة تفشل ذلك الصف. بقية الدفعة تستمر.',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'الأسماء المكررة في ZIP تصبح name (2).jpg. تُحذف البرامج النصية وفخاخ تحديث noscript. الصفحات شديدة الطول تُحدّ حتى لا ينهار التبويب.',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'هذه ليست زاحفاً لموقع كامل. الصق الروابط التي لديك.',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'مقارنة بتحويل عدة صفحات ويب إلى PDF: بلا تقسيم A4. مقارنة بتحويل PDF إلى JPG: المدخل قائمة روابط لا رفع PDF. مقارنة بتحويل الصور بالجملة: المدخل صفحة ويب لا صورة محلية.',
	tool_batch_convert_web_pages_to_jpg_rules_title: 'قواعد متوقعة',
	tool_batch_convert_web_pages_to_jpg_sample: 'تحميل مثال',
	tool_batch_convert_web_pages_to_jpg_status_converting: 'جارٍ رسم JPEG… قد يتوقف التبويب ثواني',
	tool_batch_convert_web_pages_to_jpg_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل ZIP.',
	tool_batch_convert_web_pages_to_jpg_status_fetching: 'جارٍ جلب HTML الصفحة…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG جاهز',
	tool_batch_convert_web_pages_to_jpg_status_queued: 'في الانتظار',
	tool_batch_convert_web_pages_to_jpg_status_skip: 'تم التجاوز',
	tool_batch_convert_web_pages_to_jpg_status_waiting: 'بانتظار اكتمال الصور…',
	tool_batch_convert_web_pages_to_jpg_status_working: 'جارٍ تحويل الدفعة…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} جاهز · {skip} متجاوز',
	tool_batch_convert_web_pages_to_jpg_title: 'تحويل عدة صفحات ويب إلى JPG دفعة واحدة',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'رابط http(s) عام في كل سطر، حتى 10. نجلب كل صفحة مرة ونعيد كتابة عناوين CSS والصور. تُحذف البرامج النصية قبل اللقطة.',
	tool_batch_convert_web_pages_to_jpg_url_label: 'روابط الصفحات (واحد في كل سطر)',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_jpg_usecase_1: 'أسقط عدة روابط مساعدة أو تذاكر واحصل على لقطات JPEG للصقها في الدردشة دون فتح كل تبويب.',
	tool_batch_convert_web_pages_to_jpg_usecase_2: 'التقط الصفحة العامة نفسها بعرض هاتف 390 وسطح مكتب 1280 لمقارنة الشاشة الأولى قبل المراجعة.',
	tool_batch_convert_web_pages_to_jpg_usecase_3: 'اترك أرشيف A4 على تحويل عدة صفحات ويب إلى PDF؛ استخدم هذه الصفحة حين تحتاج ملفات صور من قائمة روابط.',
	tool_batch_convert_web_pages_to_jpg_usecases_title: 'حالات مناسبة',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: 'سطح المكتب 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: 'عرض الشاشة',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: 'الهاتف 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: 'الجهاز اللوحي 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'ثوانٍ إضافية بعد بدء تحميل الصور حتى تكتمل الصور البعيدة. الافتراضي 1. ارفعه إن ظهرت مربعات فارغة في JPEG.',
	tool_batch_convert_web_pages_to_jpg_wait_label: 'انتظار التحميل (ث)',
};

export default ar;
