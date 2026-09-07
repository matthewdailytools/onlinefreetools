/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / ar).
 * عنوان البحث المحلي: تحويل عدة صفحات ويب إلى PDF دفعة واحدة.
 * الفرق عن JPG: صفحات A4 طولية للطباعة، وليست لقطة عرض الشاشة.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'الصق روابط عامة ليتحوّل كل منها إلى PDF بحجم A4 عمودي، مقسّم للطباعة والقراءة صفحة بصفحة — لا صورة JPEG لا نهائية. تُتجاوز الصفوف الفاشلة وتدخل الناجحة في ZIP. يُجلب كل عنوان مرة دون تخزين. للقطات الدردشة أو مقارنة الهاتف بالحاسوب استخدم تحويل عدة صفحات ويب إلى JPG دفعة واحدة.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'إطار التقاط مخفي للصفحة',
	tool_batch_convert_web_pages_to_pdf_clear: 'مسح',
	tool_batch_convert_web_pages_to_pdf_col_file: 'الملف',
	tool_batch_convert_web_pages_to_pdf_col_status: 'الحالة',
	tool_batch_convert_web_pages_to_pdf_col_url: 'الرابط',
	tool_batch_convert_web_pages_to_pdf_convert: 'تحويل الكل',
	tool_batch_convert_web_pages_to_pdf_desc:
		'احفظ قائمة روابط كملفات PDF بحجم A4 عمودي للطباعة — ZIP؛ ليست لقطة صفحة ويب.',
	tool_batch_convert_web_pages_to_pdf_description:
		'تحويل عدة صفحات ويب إلى PDF دفعة واحدة: القائمة تخرج صفحات A4 عمودية للطباعة والقراءة، لا JPEG طويل. الخطوات: الصق القائمة، تحويل الكل، تنزيل ZIP. مثال: صفحتا سياسة تصبحان ملفي PDF. يُجلب كل رابط مرة ولا يُحفظ. لمقتطف HTML استخدم تحويل HTML إلى PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'تنزيل ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'الصق عنوان صفحة واحدًا على الأقل أولًا.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'تعذر تحويل هذه الصفحة إلى PDF. تم التجاوز.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'تعذر إنشاء ZIP في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'فشل تحميل مكتبة التحويل. حدّث الصفحة وأعد المحاولة.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'الحد الأقصى 10 روابط. لم تُضف الأسطر الزائدة.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'تعذر تحميل هذا الرابط. تحقق من العنوان أو أن الموقع يمنع الجلب.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'هذا السطر ليس رابط http(s) صالحًا. تم التجاوز.',
	tool_batch_convert_web_pages_to_pdf_example:
		'تحميل المثال يملأ صفحتي مساعدة وسياسة من example.com ويبني ملفي PDF محليين بحجم A4 مع فاصل CSS (دون زيارة الموقع الحي) ثم يفعّل تنزيل ZIP. تحويل الكل يجلب العناوين التي لصقتها. CSS الطباعة يغيّر موضع القطع.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'مثال',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'الورق دائمًا A4 عمودي. الصفحات الطويلة تُقطع بقواعد فاصل CSS (مع احتياطي تقليدي). ليست صفحة بلا نهاية. للقطة طويلة استخدم تحويل عدة صفحات ويب إلى JPG دفعة واحدة.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'أداة JPG تلتقط JPEG واحدًا لكل رابط بعرض 1280 أو 768 أو 390، مع الجودة والصفحة كاملة أو الشاشة الأولى. هنا يُقسَّم كل رابط إلى أوراق A4 للطباعة. القائمة نفسها، الناتج مختلف.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'هذه الصفحة لقائمة روابط: صفحات عامة متعددة → ملفات A4 منفصلة → ZIP. لمقتطف HTML مع معاينة استخدم تحويل HTML إلى PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'التحويل في هذا التبويب. نرسل كل عنوان مرة لجلب HTML ولا نخزّن الصفحات. يُنشأ PDF على جهازك ويُحزم ZIP هنا.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'كل صف ناجح ملف PDF مستقل داخل ZIP. لا ندمجها — بعد التنزيل استخدم دمج ملفات في PDF واحد.',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'لا. تُحذف النصوص البرمجية. جدران الدخول والتطبيقات بـ JavaScript غالبًا لا تطابق الموقع الحي. CSS الطباعة قد يحرّك الفواصل.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'ما مقاس الورق؟ هل تصبح صفحة فائقة الطول؟',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'ما الفرق عن تحويل عدة صفحات ويب إلى JPG دفعة واحدة؟',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'ما الفرق عن تحويل HTML إلى PDF؟',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'هل تُرفع صفحاتي وتُحفظ على الخادم؟',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'هل النتيجة PDF واحد أم ZIP بعدة ملفات؟',
	tool_batch_convert_web_pages_to_pdf_faq_q6: 'هل تطابق صفحة بتسجيل دخول أو JavaScript كثيف الموقع الحي؟',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} روابط في القائمة',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'الصق الروابط العامة التي تريد أرشفتها أو طباعتها، حوّلها إلى PDF بحجم A4 عمودي، ثم خذ ZIP للملفات الناجحة.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'الصق رابط https في كل سطر. السياسات وصفحات المساعدة والمستندات العامة المراد طباعتها مناسبة.',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'اترك انتظار التحميل قرب ثانية إلا إذا بقيت الصور فارغة في ورقة A4.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'اضغط تحويل الكل. يُجلب كل رابط عام مرة ويُقسَّم إلى A4 عمودي (فواصل CSS قد تقطع الأقسام). تُتجاوز الصفوف الفاشلة.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'مقتطف HTML مع معاينة؟ تحويل HTML إلى PDF. لقطة بعرض الشاشة بدل الورق؟ تحويل عدة صفحات ويب إلى JPG دفعة واحدة.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'نزّل ZIP بعد نجاح صف واحد على الأقل. تحميل مثال يجرب صفحتي A4 محليتين بفاصل CSS.',
	tool_batch_convert_web_pages_to_pdf_how_item_6: 'لجمع عدة PDF في كتيّب واحد نزّل أولًا ثم استخدم دمج ملفات في PDF واحد.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'طريقة العمل',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'تقدم الدفعة',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}٪',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: 'مرّت {s} ث',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'جلب',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'الصور',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'رابط http(s) واحد في كل سطر، حتى 10. الناتج A4 عمودي بفواصل CSS، لا JPEG لصفحة كاملة. تحويل متسلسل. الفشل يُتجاوز. ملفات PDF الناجحة تدخل ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'يُرسل كل رابط مرة لجلب HTML ولا يُخزَّن. يُبنى PDF في هذا التبويب على ورق A4 عمودي.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'التقسيم يتبع فواصل CSS (مع احتياطي تقليدي). أنماط الطباعة قد تختلف عن الشاشة. الصفحات العالية جدًا تُحدّ كي لا ينهار التبويب.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'الشبكات الخاصة وتسجيل الدخول والصفحات المفقودة تفشل ذلك الصف فقط. الأسماء المكررة في ZIP تصبح name (2).pdf. تُحذف النصوص البرمجية قبل الالتقاط.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'ليست زاحفًا لموقع كامل ولا أداة لقطات. الصق الروابط العامة التي لديك.',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'مقابل تحويل عدة صفحات ويب إلى JPG: هناك JPEG بعرض تختاره. مقابل تحويل HTML إلى PDF: هناك لصق HTML. مقابل دمج ملفات في PDF واحد: هنا لا دمج للمخرجات.',
	tool_batch_convert_web_pages_to_pdf_rules_title: 'قواعد متوقعة',
	tool_batch_convert_web_pages_to_pdf_sample: 'تحميل مثال',
	tool_batch_convert_web_pages_to_pdf_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل ZIP.',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'جاري جلب HTML…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF جاهز',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'تم التجاوز',
	tool_batch_convert_web_pages_to_pdf_status_waiting: 'انتظار اكتمال الصور…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'جارٍ إنشاء PDF… قد تتوقف هذه الصفحة ثوانٍ',
	tool_batch_convert_web_pages_to_pdf_status_queued: 'في الانتظار',
	tool_batch_convert_web_pages_to_pdf_status_working: 'جاري تحويل الدفعة…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} جاهز · {skip} متجاوز',
	tool_batch_convert_web_pages_to_pdf_title: 'تحويل عدة صفحات ويب إلى PDF دفعة واحدة',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'رابط http(s) عام في كل سطر، حتى 10. نجلب كل صفحة مرة ونعيد كتابة عناوين CSS والصور. تُحذف النصوص البرمجية؛ الناتج A4 عمودي بفواصل CSS.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'روابط الصفحات (سطر لكل رابط)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'قبل اجتماع احفظ عدة صفحات مساعدة أو مستندات عامة كملفات A4 قابلة للطباعة دون فتح طباعة في كل تبويب.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'أرشف سياسات أو شروط أو إعلانات في ZIP للقراءة لاحقًا أو كمرفق بريد.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'لصق HTML يبقى في تحويل HTML إلى PDF. لقطات الدردشة ومقارنة الهاتف/الحاسوب في JPG. هنا أرشيف الطباعة من قائمة الروابط.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'حالات مناسبة',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'ثوانٍ إضافية بعد بدء تحميل الصور في كل ورقة A4. الافتراضي 1. ارفعه إن ظهر مربع صورة فارغ في PDF.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'انتظار التحميل (ث)',
};

export default ar;
