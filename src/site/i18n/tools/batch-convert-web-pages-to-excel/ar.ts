/**
 * i18n tool shard (batch-convert-web-pages-to-excel / ar).
 * H1: تحويل صفحات الويب إلى إكسل على دفعات.
 * IG: خلايا جداول HTML في مصنف واحد — ليست لقطة ولا PDF مقاس A4 ولا فقرات وورد.
 */
import type { SiteLangDict } from '../../../types';

/** نصوص واجهة تحويل الويب إلى إكسل (ar). */
const ar: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: 'إعدادات متقدمة (اختياري)',
	tool_batch_convert_web_pages_to_excel_article:
		'اسحب جداول HTML من قائمة عناوين عامة إلى مصنف إكسل واحد: كل جدول يصبح ورقة بخلايا يمكن فرزها. النص المتتابع واللقطات لا تدخل. ليست ملف PDF للطباعة على A4 وليست مستند وورد. كل عنوان يُجلب مرة عبر الخادم ولا يُحفظ. الـ HTML الملصق يبقى في هذا التبويب. للطباعة استخدم تحويل صفحات الويب إلى PDF على دفعات. للعناوين القابلة للتحرير استخدم تحويل صفحات HTML إلى مستند وورد.',
	tool_batch_convert_web_pages_to_excel_clear: 'مسح',
	tool_batch_convert_web_pages_to_excel_col_file: 'أوراق',
	tool_batch_convert_web_pages_to_excel_col_status: 'الحالة',
	tool_batch_convert_web_pages_to_excel_col_url: 'العنوان',
	tool_batch_convert_web_pages_to_excel_convert: 'تحويل الكل',
	tool_batch_convert_web_pages_to_excel_desc:
		'استخرج جداول HTML من قائمة عناوين إلى مصنف إكسل؛ ليست لقطة ولا PDF ولا وورد.',
	tool_batch_convert_web_pages_to_excel_description:
		'تحويل صفحات الويب إلى إكسل على دفعات (جدول HTML إلى إكسل / تحويل HTML إلى إكسل): اسحب الجداول إلى ملف .xlsx واحد، ليست لقطة ولا PDF مقاس A4. الخطوات: الصق العناوين، تحويل الكل، تنزيل إكسل. مثال: قائمة أسعار ومخزون يصبحان ورقتين. يُجلب العنوان مرة ولا يُخزَّن.',
	tool_batch_convert_web_pages_to_excel_download: 'تنزيل إكسل',
	tool_batch_convert_web_pages_to_excel_empty: 'الصق عنوان صفحة واحدًا على الأقل، أو انتقل إلى لصق HTML.',
	tool_batch_convert_web_pages_to_excel_err_convert: 'لا يوجد جدول HTML صالح في تلك الصفحة. تم التخطي.',
	tool_batch_convert_web_pages_to_excel_err_html_empty: 'الصق أولًا HTML يحتوي على <table>.',
	tool_batch_convert_web_pages_to_excel_err_load: 'فشل تحميل مكتبة إكسل. حدّث الصفحة ثم أعد المحاولة.',
	tool_batch_convert_web_pages_to_excel_err_too_many: 'الحد 10 عناوين. لم تُضف الأسطر الزائدة.',
	tool_batch_convert_web_pages_to_excel_err_url: 'تعذر جلب هذا العنوان. تحقق من الرابط، أو أن الموقع يمنع الجلب.',
	tool_batch_convert_web_pages_to_excel_err_url_empty: 'هذا السطر ليس عنوان http(s) صالحًا. تم التخطي.',
	tool_batch_convert_web_pages_to_excel_example:
		'تحميل مثال يملأ عنوان قائمة أسعار وعنوان مخزون، ويبني مصنفًا محليًا من جدولين HTML دون زيارة الموقع الحي، ثم يفعّل تنزيل إكسل. تحويل الكل يجلب العناوين التي لصقتها. لصق HTML هو نفس تعيين الجداول بلا عنوان.',
	tool_batch_convert_web_pages_to_excel_example_title: 'مثال',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'الـ HTML الملصق لا يغادر هذا التبويب. إن حوّلت عناوين نرسل كل عنوان مرة لجلب HTML ولا نخزّنه. يُبنى ملف .xlsx في متصفحك.',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'أداة وورد تحول العناوين والقوائم والفقرات إلى .docx قابل للتحرير. هذه الصفحة تتجاهل النثر وتنسخ خلايا جداول HTML فقط إلى أوراق إكسل. نفس الجلب، ناتج مختلف.',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG لقطات عرض (ZIP صور). PDF صفحات طباعة A4. هنا أرقام ونصوص تصفّيها في إكسل: مصنف واحد لا حزمة صور.',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'نعم. سطر واحد يكفي لتحويل صفحة ويب إلى إكسل. العناوين الناجحة تشترك في .xlsx واحد بأوراق عدة.',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'لا. لا يوجد OCR ولا محلل PDF. حوّل صفحة HTML أو الصق ترميز الجدول. إن كان لديك CSV استخدم CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'استخدم تبويب لصق HTML (تحويل HTML إلى إكسل / جدول HTML إلى إكسل). صفحة كروم الكاملة / .mhtml خارج النطاق: صدّر HTML أو انسخ الجدول. هذه ليست إكسل للويب.',
	tool_batch_convert_web_pages_to_excel_faq_q1: 'هل تُرفع صفحاتي وتُحفظ؟',
	tool_batch_convert_web_pages_to_excel_faq_q2: 'ما الفرق عن تحويل صفحات HTML إلى مستند وورد؟',
	tool_batch_convert_web_pages_to_excel_faq_q3: 'وما الفرق عن JPG أو PNG أو PDF على دفعات؟',
	tool_batch_convert_web_pages_to_excel_faq_q4: 'هل يمكن تحويل عنوان واحد؟',
	tool_batch_convert_web_pages_to_excel_faq_q5: 'هل تستخرجون جداول من PDF؟',
	tool_batch_convert_web_pages_to_excel_faq_q6: 'لدي HTML أو جدول HTML لا عنوانًا. ماذا عن إكسل على الويب أو mhtml؟',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: '{n} عناوين في القائمة',
	tool_batch_convert_web_pages_to_excel_how_body:
		'الصق عناوين عامة فيها جداول HTML، اضغط تحويل الكل، ثم نزّل مصنف إكسل. يُتخطى النثر؛ خلايا <table> فقط تصبح أوراقًا.',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'عنوان https واحد في كل سطر (قوائم الأسعار والجداول العامة تناسب). سطر واحد يكفي لصفحة ويب إلى إكسل.',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'اضغط تحويل الكل. يُجلب كل عنوان عام مرة؛ الصفحات بلا جدول صالح تُتخطى والباقي يستمر.',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'لديك الترميز لا العنوان (HTML إلى إكسل / جدول HTML إلى إكسل)؟ افتح لصق HTML والصق المصدر ثم تحويل الكل.',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'تريد ورقة لكل عنوان بدل كل جدول، أو الإبقاء على الجداول الصغيرة؟ افتح الإعدادات المتقدمة.',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'لطباعة A4 استخدم تحويل صفحات الويب إلى PDF على دفعات. للعناوين استخدم تحويل صفحات HTML إلى مستند وورد. لديك CSV؟ CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_how_item_6: 'نزّل إكسل بعد تعيين جدول واحد على الأقل.',
	tool_batch_convert_web_pages_to_excel_how_title: 'طريقة العمل',
	tool_batch_convert_web_pages_to_excel_html_hint: 'الصق مقطعًا أو مستند HTML كاملًا فيه <table>. يبقى التعيين في هذا التبويب دون رفع.',
	tool_batch_convert_web_pages_to_excel_html_label: 'HTML فيه جداول',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>الكمية</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: 'الأوراق',
	tool_batch_convert_web_pages_to_excel_layout_table: 'ورقة لكل جدول HTML',
	tool_batch_convert_web_pages_to_excel_layout_url: 'ورقة لكل عنوان (تكديس الجداول)',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'الافتراضي ورقة لكل جدول HTML في مصنف واحد. التكديس يضع جداول العنوان في ورقة واحدة مع صف فارغ بينها. الجداول الصغيرة (أقل من صفين أو عمودين) تُتخطى حتى لا تملأ الملف شبكات تنقل.',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'تُنسخ خلايا <table> في HTML فقط. عنوان http(s) في كل سطر، حتى 10. الصفوف الفاشلة تُتخطى. الجداول الناجحة تشترك في .xlsx واحد. ليست لقطة مغيّرة الامتداد ولا تصدير PDF.',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'يُرسل كل عنوان مرة لجلب HTML ولا يُحفظ. الملصق لا يغادر التبويب. يُبنى المصنف هنا.',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'الشبكات الخاصة وجدران الدخول والصفحات بلا <table> تفشل ذلك الصف والباقي يستمر.',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan يدرج خلايا فارغة. rowspan يُسطَّح (كل صف مستقل). تُزال النصوص البرمجية فالجداول المرسومة بـ JS فقط تخرج فارغة.',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'ليست زاحف موقع كامل ولا إكسل للويب. الصق العناوين أو HTML الذي لديك. أسماء الأوراق حتى 31 حرفًا.',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'مقابل تحويل HTML إلى وورد: جداول فقط لا عناوين/قوائم. مقابل JPG/PNG/PDF: خلايا في مصنف لا ZIP صور ولا A4. مقابل CSV ↔ JSON: المدخل صفحة لا ملفًا لديك.',
	tool_batch_convert_web_pages_to_excel_rules_title: 'حدود متوقعة',
	tool_batch_convert_web_pages_to_excel_sample: 'تحميل مثال',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: 'تخطَّ الجداول الصغيرة (أقل من 2×2)',
	tool_batch_convert_web_pages_to_excel_status_converting: 'جارٍ تعيين جداول HTML…',
	tool_batch_convert_web_pages_to_excel_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل إكسل.',
	tool_batch_convert_web_pages_to_excel_status_fetching: 'جارٍ جلب HTML الصفحة…',
	tool_batch_convert_web_pages_to_excel_status_ok: 'تم تعيين الجداول',
	tool_batch_convert_web_pages_to_excel_status_queued: 'في الانتظار',
	tool_batch_convert_web_pages_to_excel_status_skip: 'متخطى',
	tool_batch_convert_web_pages_to_excel_status_working: 'جارٍ تحويل الدفعة…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} جاهز · {skip} متخطى',
	tool_batch_convert_web_pages_to_excel_tab_html: 'لصق HTML',
	tool_batch_convert_web_pages_to_excel_tab_urls: 'عناوين الصفحات',
	tool_batch_convert_web_pages_to_excel_title: 'تحويل صفحات الويب إلى إكسل على دفعات',
	tool_batch_convert_web_pages_to_excel_url_hint: 'عنوان http(s) عام في كل سطر، حتى 10. نجلب كل صفحة مرة. تُزال النصوص البرمجية. أوراق إكسل من جداول HTML فقط.',
	tool_batch_convert_web_pages_to_excel_url_label: 'عناوين الصفحات (سطر لكل عنوان)',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'أرشف قائمة أسعار أو SKU من HTML في إكسل لتبقى الكميات أرقامًا قابلة للتصفية — PNG مجرد نقاط.',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'اجمع جداول معاملات من صفحتي مساعدة في مصنف واحد ثم أضف عمود SUM. وورد يبقي العناوين فقرات.',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'اطبع A4 عبر تحويل صفحات الويب إلى PDF على دفعات، وCSV الجاهز عبر CSV ↔ JSON؛ استخدم هذه الصفحة عندما المصدر ما زال جدول صفحة.',
	tool_batch_convert_web_pages_to_excel_usecases_title: 'متى يناسب',
};

export default ar;
