/**
 * i18n tool shard (convert-html-web-pages-to-word-document / ar).
 * H1: تحويل صفحات HTML إلى مستند وورد.
 * IG: عناوين/قوائم/جداول وورد قابلة للتحرير — ليست PDF مقاس A4 ولا لقطة شاشة ولا PDF→وورد ولا صور→وورد.
 */
import type { SiteLangDict } from '../../../types';

/** نصوص واجهة تحويل HTML إلى وورد (ar). */
const ar: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: 'إعدادات متقدمة (اختياري)',
	tool_convert_html_web_pages_to_word_document_article:
		'الصق HTML أو عنوانًا عامًا لتحصل على .docx يمكن تعديله: العناوين والقوائم والجداول والروابط تصبح أنماط وورد. ليست ملف PDF للطباعة على A4 وليست لقطة شاشة. الـ HTML الملصق يبقى في هذا التبويب دون رفع إلى خادم. العنوان يُجلب مرة واحدة ولا يُخزَّن. للطباعة استخدم «تحويل HTML إلى PDF». إن كان لديك PDF استخدم «تحويل PDF إلى مستند وورد».',
	tool_convert_html_web_pages_to_word_document_clear: 'مسح',
	tool_convert_html_web_pages_to_word_document_convert: 'تحويل',
	tool_convert_html_web_pages_to_word_document_desc:
		'الصق HTML أو اجلب عنوانًا لتحصل على وورد قابل للتحرير؛ ليس PDF ولا لقطة.',
	tool_convert_html_web_pages_to_word_document_description:
		'تحويل صفحات HTML إلى مستند وورد (تحويل HTML إلى وورد / HTML إلى DOCX): الصق أو اجلب عنوانًا لتحصل على .docx قابل للتحرير لا PDF مقاس A4. الخطوات: لصق أو جلب، تحويل، تنزيل. مثال: ملاحظات الإصدار بعناوين وجدول تصبح أنماط وورد. الـ HTML الملصق يبقى في هذا التبويب؛ العنوان يُجلب مرة ولا يُحفظ.',
	tool_convert_html_web_pages_to_word_document_download: 'تنزيل',
	tool_convert_html_web_pages_to_word_document_empty: 'الصق HTML أولًا أو أدخل عنوانًا عامًا.',
	tool_convert_html_web_pages_to_word_document_err_convert: 'تعذر بناء ملف وورد من هذا الـ HTML. راجع الوسوم ثم أعد المحاولة.',
	tool_convert_html_web_pages_to_word_document_err_load: 'فشل تحميل مكتبة وورد. حدّث الصفحة ثم أعد المحاولة.',
	tool_convert_html_web_pages_to_word_document_err_url: 'تعذر جلب هذا العنوان. تحقق من الرابط، أو أن الموقع يمنع الجلب.',
	tool_convert_html_web_pages_to_word_document_err_url_empty: 'أدخل أولًا عنوان http(s) صالحًا.',
	tool_convert_html_web_pages_to_word_document_example:
		'«تحميل مثال» يملأ HTML لملاحظات إصدار (H1 وقائمة وجدول عمودين ورابط)، يشغّل تحويل ويفعّل تنزيل. ملف .docx يستخدم أنماط عنوان وجدول يمكن تعديل نصها. في تبويب العنوان، تحويل يجلب عنوانًا حيًا.',
	tool_convert_html_web_pages_to_word_document_example_title: 'مثال',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'نعم. افتح تبويب العنوان، الصق https واحدًا ثم تحويل. تُزال النصوص البرمجية. جدران تسجيل الدخول وتطبيقات جافاسكربت غالبًا لا تطابق الموقع الحي. تخطيط CSS لا يُعاد بكسلًا بكسل.',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'التنزيل هو .docx (HTML إلى DOCX). افتحه في وورد أو محرر يقرأ Office Open XML. ليس .doc ثنائيًا ولا حفظ .mhtml من كروم.',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'«تحويل HTML إلى PDF» يقسم إلى أوراق A4 للطباعة. هنا يُحوَّل HTML إلى فقرات وعناوين وقوائم وجداول يمكن تعديلها. نفس الـ HTML، ناتج مختلف.',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'«تحويل PDF إلى مستند وورد» يبدأ من ملف PDF وطبقة النص. هنا تبدأ من HTML ملصق أو عنوان ويب. إن كان لديك PDF استخدم تلك الأداة.',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'لا. صدّر HTML أو انسخه. حزمة «صفحة كاملة» / MHTML في كروم صيغة أخرى ولا تُحلَّل هنا.',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'الـ HTML الملصق لا يغادر هذا التبويب ولا يُرفع إلى خادم. عند تحويل عنوان نرسله مرة لجلب HTML ولا نخزّنه. بناء .docx يتم في المتصفح.',
	tool_convert_html_web_pages_to_word_document_faq_q1: 'هل أحفظ صفحة كـ Word عبر عنوان URL؟',
	tool_convert_html_web_pages_to_word_document_faq_q2: 'هل الناتج تحويل HTML إلى وورد / ملف .docx؟',
	tool_convert_html_web_pages_to_word_document_faq_q3: 'ما الفرق عن «تحويل HTML إلى PDF»؟',
	tool_convert_html_web_pages_to_word_document_faq_q4: 'ما الفرق عن «تحويل PDF إلى مستند وورد»؟',
	tool_convert_html_web_pages_to_word_document_faq_q5: 'هل أحوّل ملف .mhtml من كروم؟',
	tool_convert_html_web_pages_to_word_document_faq_q6: 'هل يُرفع HTML أو العناوين ويُحفظان؟',
	tool_convert_html_web_pages_to_word_document_how_body:
		'لتحويل صفحة ويب إلى مستند وورد: الصق عنوانًا في تبويب URL أو الصق HTML، اضغط تحويل ثم نزّل .docx بعناوين وجداول يمكن تعديلها — ليست صورة للشاشة.',
	tool_convert_html_web_pages_to_word_document_how_item_1:
		'إن كان المصدر عندك ابقَ على لصق HTML. لتحويل عنوان https عام استخدم تبويب العنوان.',
	tool_convert_html_web_pages_to_word_document_how_item_2:
		'اضغط تحويل. تُزال السكربتات. العناوين والقوائم والجداول والروابط تُنقل إلى وورد. الصور الفاشلة تُتخطى.',
	tool_convert_html_web_pages_to_word_document_how_item_3:
		'صور <img> داخل HTML؟ افتح الإعدادات المتقدمة — تضمين الصور مفعّل افتراضيًا والصور المحجوبة تُتخطى.',
	tool_convert_html_web_pages_to_word_document_how_item_4:
		'طباعة A4: تحويل HTML إلى PDF. لقطة: تحويل عدة صفحات ويب إلى PNG أو JPG. لديك PDF: تحويل PDF إلى مستند وورد.',
	tool_convert_html_web_pages_to_word_document_how_item_5: 'بعد نجاح التحويل اضغط تنزيل. افتح .docx وعدّل النص.',
	tool_convert_html_web_pages_to_word_document_how_title: 'طريقة العمل',
	tool_convert_html_web_pages_to_word_document_html_hint:
		'الصق مقطعًا أو مستند HTML كاملًا. تُزال السكربتات قبل التحويل. تخطيط CSS لا يُعاد بكسلًا بكسل.',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>ملاحظات الإصدار</h1><p>الصق HTML هنا…</p>',
	tool_convert_html_web_pages_to_word_document_imgs_hint:
		'عند التفعيل نحاول تضمين <img> التي يقرأها المتصفح. الصور المعطوبة أو المحجوبة تُتخطى. عطّله لوورد نص فقط.',
	tool_convert_html_web_pages_to_word_document_imgs_label: 'تضمين الصور',
	tool_convert_html_web_pages_to_word_document_opts_hint:
		'تضمين الصور يحاول إدراج صور الـ HTML. موضع CSS لا يُنقل. الناتج دائمًا ملف .docx واحد.',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'تحويل واحد ينتج .docx واحدًا. تُنقل العناوين والفقرات والقوائم والجداول والروابط والصور الاختيارية. لا يُنقل CSS المطلق ولا الأشرطة الثابتة ولا السكربتات.',
	tool_convert_html_web_pages_to_word_document_rules_item_1:
		'الـ HTML الملصق يبقى في هذا التبويب دون رفع إلى خادم. العنوان يُجلب مرة ولا يُخزَّن.',
	tool_convert_html_web_pages_to_word_document_rules_item_2:
		'h1–h6 تصبح عناوين وورد. ul/ol قوائم. table جدول وورد. a رابطًا تشعبيًا.',
	tool_convert_html_web_pages_to_word_document_rules_item_3:
		'جدران الدخول وتطبيقات جافاسكربت وCSS الطباعة غالبًا لا تطابق الموقع الحي. هذه ليست شبكة لقطة شاشة.',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'مقابل تحويل HTML إلى PDF: وورد قابل للتحرير لا أوراق A4. مقابل تحويل PDF إلى مستند وورد: الدخل HTML أو عنوان لا ملف PDF. مقابل صور إلى وورد: الدخل ترميز لا كومة صور.',
	tool_convert_html_web_pages_to_word_document_rules_title: 'حدود متوقعة',
	tool_convert_html_web_pages_to_word_document_sample: 'تحميل مثال',
	tool_convert_html_web_pages_to_word_document_status_done: 'ملف وورد جاهز — نزّل .docx وعدّله.',
	tool_convert_html_web_pages_to_word_document_status_fetching: 'جلب HTML من العنوان…',
	tool_convert_html_web_pages_to_word_document_status_working: 'بناء مستند وورد…',
	tool_convert_html_web_pages_to_word_document_tab_html: 'لصق HTML',
	tool_convert_html_web_pages_to_word_document_tab_url: 'عنوان URL',
	tool_convert_html_web_pages_to_word_document_title: 'تحويل صفحات HTML إلى مستند وورد',
	tool_convert_html_web_pages_to_word_document_url_hint:
		'عنوان http(s) عام واحد. نجلب HTML مرة ونعيد كتابة عناوين CSS والصور. تُزال السكربتات قبل التحويل إلى وورد.',
	tool_convert_html_web_pages_to_word_document_url_label: 'عنوان URL',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1:
		'جلب عنوان عام لملاحظات إصدار والإبقاء على الجدول كجدول وورد حقيقي يمكن تعديله.',
	tool_convert_html_web_pages_to_word_document_usecase_2:
		'تحويل تصدير HTML من مركز المساعدة إلى مسودة يعلّق عليها القانوني — العناوين تبقى عناوين.',
	tool_convert_html_web_pages_to_word_document_usecase_3:
		'اترك طباعة A4 لـ«تحويل HTML إلى PDF» واللقطات للدفعات PNG؛ استخدم هذا عندما تحتاج .docx قابلًا للتحرير.',
	tool_convert_html_web_pages_to_word_document_usecases_title: 'متى يناسب',
};

export default ar;
