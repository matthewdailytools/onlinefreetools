/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / ar).
 * عنوان البحث المحلي: تحويل عدة صفحات ويب إلى PDF دفعة واحدة.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'الصق عنوان صفحة عامة في كل سطر، حوّل كل صفحة إلى PDF بحجم A4 في هذا التبويب، وتجاوز الصفوف الفاشلة ثم نزّل ZIP. يُجلب كل رابط مرة عبر الخادم دون تخزين؛ التحويل يبقى على جهازك.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'إطار التقاط مخفي للصفحة',
	tool_batch_convert_web_pages_to_pdf_clear: 'مسح',
	tool_batch_convert_web_pages_to_pdf_col_file: 'الملف',
	tool_batch_convert_web_pages_to_pdf_col_status: 'الحالة',
	tool_batch_convert_web_pages_to_pdf_col_url: 'الرابط',
	tool_batch_convert_web_pages_to_pdf_convert: 'تحويل الكل',
	tool_batch_convert_web_pages_to_pdf_desc:
		'حوّل عدة صفحات ويب إلى PDF من قائمة روابط ونزّل ZIP؛ يُجلب كل عنوان مرة ولا يُحفظ.',
	tool_batch_convert_web_pages_to_pdf_description:
		'تحويل عدة صفحات ويب إلى PDF دفعة واحدة: الصق رابط https في كل سطر (حتى 10)، أنشئ PDF بحجم A4 هنا، تجاوز الأخطاء، نزّل ZIP. الخطوات: الصق القائمة، اضغط تحويل الكل، راجع الجدول، نزّل. مثال: صفحتا مساعدة وسياسة نموذجيتان تصبحان ملفي PDF داخل ZIP. يُطلب كل رابط مرة عبر الخادم ولا يُخزَّن؛ التحويل يبقى على الجهاز. لمقتطف HTML واحد استخدم تحويل HTML إلى PDF.',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'تنزيل ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'الصق عنوان صفحة واحدًا على الأقل أولًا.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'تعذر تحويل هذه الصفحة إلى PDF. تم التجاوز.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'تعذر إنشاء ZIP في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'فشل تحميل مكتبة التحويل. حدّث الصفحة وأعد المحاولة.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'الحد الأقصى 10 روابط. لم تُضف الأسطر الزائدة.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'تعذر تحميل هذا الرابط. تحقق من العنوان أو أن الموقع يمنع الجلب.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'هذا السطر ليس رابط http(s) صالحًا. تم التجاوز.',
	tool_batch_convert_web_pages_to_pdf_example:
		'تحميل المثال يملأ رابطين من example.com ويبني ملفي PDF من HTML محلي دون زيارة الموقع الحي، ثم يفعّل تنزيل ZIP. تحويل الكل يجلب العناوين التي لصقتها.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'مثال',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'التحويل يتم في هذا التبويب. عند تحويل قائمة روابط نرسل كل عنوان إلى الخادم مرة لجلب HTML ولا نخزّن الصفحات. تُنشأ ملفات PDF على جهازك وتُحزم هنا في ZIP.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'هذه الصفحة لقائمة روابط (عدة صفحات إلى PDF ثم ZIP). لمقتطف HTML أو عنوان واحد مع معاينة استخدم تحويل HTML إلى PDF.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'لا. تُحذف النصوص البرمجية. جدران تسجيل الدخول والتطبيقات المرسومة بـ JavaScript غالبًا لا تطابق الموقع الحي. قد يختلف CSS الطباعة أيضًا.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'كل صف ناجح ملف PDF مستقل داخل ZIP واحد. لا ندمجها في ملف واحد — بعد التنزيل استخدم دمج الملفات في PDF واحد إن لزم.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'حتى 10 روابط http(s). تُتجاهل الأسطر الزائدة. تُتجاوز الصفوف الفاشلة ليكمل الباقي.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'هل تُرفع صفحاتي وتُحفظ على الخادم؟',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'ما الفرق عن تحويل HTML إلى PDF؟',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'هل تطابق صفحة بتسجيل دخول أو JavaScript كثيف الموقع الحي؟',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'هل النتيجة PDF واحد أم ZIP بعدة ملفات؟',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'كم رابطًا يمكن تحويله دفعة واحدة؟',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} روابط في القائمة',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'الصق قائمة صفحات عامة، حوّلها تباعًا، ثم خذ ZIP لملفات PDF التي نجحت.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'الصق رابط https في كل سطر (صفحات المساعدة أو السياسات مناسبة).',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'اترك انتظار التحميل قرب ثانية واحدة ما لم تبق الصور فارغة في PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'اضغط تحويل الكل. يُجلب كل رابط عام مرة؛ تُتجاوز الصفوف الفاشلة.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'مقتطف HTML بدل القائمة؟ استخدم تحويل HTML إلى PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'نزّل ZIP بعد نجاح صف واحد على الأقل. اضغط تحميل مثال لصفحتين محليتين؛ يظهر شريط التقدم أثناء التحويل.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'طريقة العمل',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'تقدم الدفعة',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}٪',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: 'مرّت {s} ث',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'جلب',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'الصور',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'رابط http(s) واحد في كل سطر، حتى 10. تحويل متسلسل. الفشل يُتجاوز. ملفات PDF الناجحة تدخل ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'يُرسل كل رابط مرة لجلب HTML ولا يُخزَّن. يُبنى PDF في هذا التبويب.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'الشبكات الخاصة وتسجيل الدخول والصفحات المفقودة تفشل ذلك الصف فقط ويكمل الباقي.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'الأسماء المكررة في ZIP تصبح name (2).pdf. تُحذف النصوص البرمجية قبل الالتقاط.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'ليست زاحفًا لموقع كامل. الصق الروابط التي لديك.',
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
		'رابط http(s) عام في كل سطر، حتى 10. نجلب كل صفحة مرة ونعيد كتابة عناوين CSS والصور. تُحذف النصوص البرمجية قبل PDF.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'روابط الصفحات (سطر لكل رابط)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'حفظ عدة صفحات مساعدة أو وثائق كـ PDF دون فتح كل واحدة.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'أرشفة قائمة روابط سياسات عامة في ZIP للقراءة لاحقًا.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'لصق HTML يبقى في تحويل HTML إلى PDF؛ استخدم هذه الصفحة عندما لديك روابط كثيرة.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'حالات مناسبة',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'ثوانٍ إضافية بعد بدء تحميل الصور. الافتراضي 1. ارفعه إن ظهر مربع صورة فارغ في PDF.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'انتظار التحميل (ث)',
};

export default ar;
