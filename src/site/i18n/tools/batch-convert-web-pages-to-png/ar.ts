/**
 * i18n tool shard (batch-convert-web-pages-to-png / ar).
 * H1: تحويل عدة صفحات ويب إلى PNG دفعة واحدة. IG vs JPG: PNG بلا فقدان، حواف واجهة حادة 1px، خلفية شفافة اختيارية، 1×/2× — ليست جودة JPEG وليست A4.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: 'إعدادات متقدمة (اختياري)',
	tool_batch_convert_web_pages_to_png_article:
		'كل رابط عام يتحول إلى PNG بلا فقدان بالعرض الذي تختاره (سطح مكتب 1280 أو جهاز لوحي 768 أو هاتف 390). خلفية بيضاء أو شفافة، مقياس 1× أو 2×، ثم ZIP للصفوف الناجحة. مناسب للقطة واجهة حادة، لا لـ JPEG الدردشة ولا لطباعة A4. نجلب كل عنوان مرة واحدة لجلب HTML ولا نخزّنه. التحويل إلى PNG يتم في هذا التبويب. ملف أصغر للدردشة: تحويل عدة صفحات ويب إلى JPG دفعة واحدة.',
	tool_batch_convert_web_pages_to_png_bg_label: 'الخلفية',
	tool_batch_convert_web_pages_to_png_bg_transparent: 'شفاف',
	tool_batch_convert_web_pages_to_png_bg_white: 'أبيض',
	tool_batch_convert_web_pages_to_png_capture_first: 'الشاشة الأولى',
	tool_batch_convert_web_pages_to_png_capture_frame_title: 'إطار التقاط مخفي',
	tool_batch_convert_web_pages_to_png_capture_full: 'الصفحة كاملة',
	tool_batch_convert_web_pages_to_png_capture_label: 'نطاق الالتقاط',
	tool_batch_convert_web_pages_to_png_clear: 'مسح',
	tool_batch_convert_web_pages_to_png_col_file: 'الملف',
	tool_batch_convert_web_pages_to_png_col_status: 'الحالة',
	tool_batch_convert_web_pages_to_png_col_url: 'الرابط',
	tool_batch_convert_web_pages_to_png_convert: 'تحويل الكل',
	tool_batch_convert_web_pages_to_png_desc:
		'قائمة روابط إلى PNG بلا فقدان، خلفية شفافة و2× اختياريان، ثم ZIP. ليس JPEG وليس A4.',
	tool_batch_convert_web_pages_to_png_description:
		'تحويل عدة صفحات ويب إلى PNG دفعة واحدة: لقطات بلا فقدان وZIP من قائمة روابط. أبيض أو شفاف، 1× أو 2×. الخطوات: الصق الروابط، تحويل الكل، تنزيل ZIP. مثال: واجهتان حادتان في PNG. سطر واحد يكفي لرابط إلى PNG. الجلب مرة واحدة دون تخزين؛ التحويل في هذا التبويب.',
	tool_batch_convert_web_pages_to_png_download_zip: 'تنزيل ZIP',
	tool_batch_convert_web_pages_to_png_empty: 'الصق أولاً رابطاً عاماً واحداً على الأقل.',
	tool_batch_convert_web_pages_to_png_err_convert: 'تعذّر تحويل هذا العنوان إلى PNG. تم التخطي.',
	tool_batch_convert_web_pages_to_png_err_fflate: 'تعذّر بناء ZIP في هذا المتصفح. جرّب متصفحاً أحدث.',
	tool_batch_convert_web_pages_to_png_err_load: 'فشل تحميل مكتبة التحويل. حدّث الصفحة وأعد المحاولة.',
	tool_batch_convert_web_pages_to_png_err_too_many: 'الحد الأقصى 10 روابط. لم تُضف الأسطر الزائدة.',
	tool_batch_convert_web_pages_to_png_err_url: 'تعذّر تحميل هذا الرابط. راجع العنوان أو الموقع يمنع الجلب.',
	tool_batch_convert_web_pages_to_png_err_url_empty: 'هذا السطر ليس رابط http(s) صالحاً. تم التخطي.',
	tool_batch_convert_web_pages_to_png_example:
		'تحميل مثال يملأ طقم مكوّنات وطبقة شفافة، وينشئ PNGين في التبويب (حدود حادة 1px؛ مع الخلفية الشفافة تبقى طبقة الألفا) دون جلب الموقع الحي، ويفعّل تنزيل ZIP. تحويل الكل يجلب العناوين التي لصقتها. العرض والخلفية والمقياس والصفحة كاملة مقابل الشاشة الأولى تغيّر البكسلات.',
	tool_batch_convert_web_pages_to_png_example_title: 'مثال',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'نعم. سطر واحد يعمل (رابط إلى PNG / لقطة صفحة ويب بدون فقدان). الصفوف الناجحة ملفات PNG منفصلة داخل ZIP واحد. لا ندمج عدة صور في ملف واحد.',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'أداة JPG تكتب JPEG بفقدان (شريط جودة) للدردشة والتذاكر. هنا PNG بلا فقدان حتى تبقى حواف الواجهة والنص حادة، مع PNG شفاف اختياري ومقياس 1×/2×. نفس قائمة الروابط، ناتج مختلف — بلا شريط جودة JPEG.',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'التحويل يجري في هذا التبويب. إن حوّلت قائمة روابط نرسل كل عنوان مرة واحدة إلى خادمنا لجلب HTML؛ لا نخزّن الصفحات. تُبنى ملفات PNG في متصفحك ويُحزم ZIP هنا، دون رفع الناتج إلى خادم للحفظ.',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'الشفافية تظهر فقط حيث للصفحة نفسها ألفا أو لا تملأ الجسم بلون مصمت. الصفحة الرئيسية البيضاء تبقى بيضاء. 2× يضاعف البكسلات (مراجعة شبكية) ويكبّر الملف. اللون المصمت لا يُثقب حتى رقعة الشطرنج.',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'أداة PDF تقسّم إلى صفحات A4 للقراءة والطباعة. هنا PNG نقطي واحد لكل رابط. للطباعة استخدم تحويل عدة صفحات ويب إلى PDF دفعة واحدة.',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'لا. تُزال النصوص البرمجية. جدران تسجيل الدخول والتطبيقات المرسومة بـ JavaScript غالباً لا تطابق الموقع بعد الدخول. يتبع تخطيط CSS العرض الذي اخترته.',
	tool_batch_convert_web_pages_to_png_faq_q1: 'هل النتيجة PNG واحد أم ZIP؟ هل يكفي رابط واحد؟',
	tool_batch_convert_web_pages_to_png_faq_q2: 'ما الفرق عن تحويل عدة صفحات ويب إلى JPG دفعة واحدة؟',
	tool_batch_convert_web_pages_to_png_faq_q3: 'هل تُرفع صفحاتي وتُحفظ على خادم؟',
	tool_batch_convert_web_pages_to_png_faq_q4: 'متى تظهر الخلفية الشفافة وماذا يغيّر 2×؟',
	tool_batch_convert_web_pages_to_png_faq_q5: 'ما الفرق عن تحويل عدة صفحات ويب إلى PDF دفعة واحدة؟',
	tool_batch_convert_web_pages_to_png_faq_q6: 'هل يطابق موقع تسجيل الدخول أو كثيف JavaScript النسخة الحية؟',
	tool_batch_convert_web_pages_to_png_file_count_tpl: '{n} روابط في القائمة',
	tool_batch_convert_web_pages_to_png_how_body:
		'إن أردت لقطة واجهة حادة بلا ضغط JPEG: الصق الروابط، اضغط تحويل الكل (الافتراضي سطح مكتب 1280 وخلفية بيضاء و1× والصفحة كاملة)، ثم نزّل ZIP لملفات PNG الناجحة.',
	tool_batch_convert_web_pages_to_png_how_item_1:
		'الصق رابط https واحد في كل سطر (أطقم المكوّنات ووثائق الواجهة العامة مناسبة). سطر واحد يكفي لرابط إلى PNG.',
	tool_batch_convert_web_pages_to_png_how_item_2:
		'اضغط تحويل الكل. الافتراضي: سطح مكتب 1280، أبيض، 1×، الصفحة كاملة. يُجلب كل رابط عام مرة؛ تُتخطى الصفوف الفاشلة.',
	tool_batch_convert_web_pages_to_png_how_item_3:
		'تحتاج خلفية شفافة أو 2× أو عرض هاتف أو الشاشة الأولى فقط؟ افتح الإعدادات المتقدمة للعرض والخلفية والمقياس والنطاق وانتظار التحميل.',
	tool_batch_convert_web_pages_to_png_how_item_4:
		'JPEG أصغر للدردشة: تحويل عدة صفحات ويب إلى JPG دفعة واحدة. ملفات A4: تحويل عدة صفحات ويب إلى PDF دفعة واحدة. صور على الجهاز: تحويل الصور إلى PNG بالجملة.',
	tool_batch_convert_web_pages_to_png_how_item_5: 'عندما تنجح صف واحد على الأقل اضغط تنزيل ZIP.',
	tool_batch_convert_web_pages_to_png_how_item_6:
		'تحميل مثال يجرّب واجهتين محليتين؛ يظهر شريط التقدم أثناء التحويل.',
	tool_batch_convert_web_pages_to_png_how_title: 'كيف تعمل',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: 'مرّ {s} ث',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: 'جلب',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: 'صور',
	tool_batch_convert_web_pages_to_png_hud_title: 'تقدّم الدفعة',
	tool_batch_convert_web_pages_to_png_opts_hint:
		'عرض الإطلالة يغيّر التخطيط. الخلفية الشفافة تحفظ الألفا. 2× يضاعف البكسلات. الصفحة كاملة لقطة طويلة؛ الشاشة الأولى تقريباً ارتفاع إطار واحد.',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'رابط http(s) واحد لكل سطر، حتى 10. التحويل متسلسل. الفاشل يُتخطى. PNG الناجح يدخل ZIP. الخلفية والمقياس يغيّران البكسلات — ليس JPEG بإعادة تسمية ولا تصدير PDF.',
	tool_batch_convert_web_pages_to_png_rules_item_1:
		'يُرسل كل رابط مرة إلى خادمنا لجلب HTML ولا يُخزَّن. يُبنى PNG في هذا التبويب.',
	tool_batch_convert_web_pages_to_png_rules_item_2:
		'الشبكات الخاصة وتسجيل الدخول والعناوين المفقودة تفشل ذلك الصف. بقية الدفعة تستمر.',
	tool_batch_convert_web_pages_to_png_rules_item_3:
		'الأسماء المكررة في ZIP تصبح name (2).png. تُزال النصوص البرمجية وفخاخ noscript لإعادة التحميل. اللقطات الشديدة الطول تُحدّ حتى لا ينهار التبويب.',
	tool_batch_convert_web_pages_to_png_rules_item_4: 'ليست زاحفاً لموقع كامل. الصق الروابط التي لديك.',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'مقابل دفعة JPG: PNG بلا فقدان، بلا شريط JPEG، خلفية شفافة اختيارية. مقابل دفعة PDF: بلا ترقيم A4. مقابل تحويل الصور إلى PNG بالجملة: المدخل رابط ويب لا صورة على الجهاز.',
	tool_batch_convert_web_pages_to_png_rules_title: 'ما المتوقع',
	tool_batch_convert_web_pages_to_png_sample: 'تحميل مثال',
	tool_batch_convert_web_pages_to_png_scale_1x: '1×',
	tool_batch_convert_web_pages_to_png_scale_2x: '2× (شبكية)',
	tool_batch_convert_web_pages_to_png_scale_label: 'مقياس البكسل',
	tool_batch_convert_web_pages_to_png_status_converting: 'جارٍ رسم PNG… قد يتوقف التبويب ثوانياً',
	tool_batch_convert_web_pages_to_png_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل ZIP.',
	tool_batch_convert_web_pages_to_png_status_fetching: 'جارٍ جلب HTML…',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG جاهز',
	tool_batch_convert_web_pages_to_png_status_queued: 'في الانتظار',
	tool_batch_convert_web_pages_to_png_status_skip: 'متخطى',
	tool_batch_convert_web_pages_to_png_status_waiting: 'انتظار اكتمال الصور…',
	tool_batch_convert_web_pages_to_png_status_working: 'جارٍ تحويل الدفعة…',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} جاهز · {skip} متخطى',
	tool_batch_convert_web_pages_to_png_title: 'تحويل عدة صفحات ويب إلى PNG دفعة واحدة',
	tool_batch_convert_web_pages_to_png_url_hint:
		'رابط http(s) عام واحد لكل سطر، حتى 10. نجلب مرة ونعيد كتابة عناوين CSS والصور. تُزال النصوص البرمجية قبل الالتقاط. التخطيط يتبع العرض المختار.',
	tool_batch_convert_web_pages_to_png_url_label: 'الروابط (واحد في كل سطر)',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1:
		'أرشفة طقم مكوّنات كـ PNG حاد حتى تبقى حدود 1px والتسميات مقروءة. JPEG يموّه الحواف.',
	tool_batch_convert_web_pages_to_png_usecase_2:
		'تصدير لوحة عائمة بخلفية شفافة وإسقاط PNG على إطار فيغما. الصفحة الرئيسية المصمتة البيضاء تبقى بيضاء.',
	tool_batch_convert_web_pages_to_png_usecase_3:
		'اترك JPEG الدردشة لأداة JPG وملفات A4 لأداة PDF؛ استخدم هذه الأداة عندما تحتاج شبكة واجهة بلا فقدان.',
	tool_batch_convert_web_pages_to_png_usecases_title: 'متى يناسبك',
	tool_batch_convert_web_pages_to_png_viewport_desktop: 'سطح مكتب 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: 'عرض الإطلالة',
	tool_batch_convert_web_pages_to_png_viewport_mobile: 'هاتف 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: 'لوحي 768',
	tool_batch_convert_web_pages_to_png_wait_hint:
		'ثوانٍ إضافية بعد بدء تحميل الصور البعيدة. الافتراضي 1. ارفعه إن ظهر PNG بإطارات صور فارغة.',
	tool_batch_convert_web_pages_to_png_wait_label: 'انتظار التحميل (ث)',
};

export default ar;
