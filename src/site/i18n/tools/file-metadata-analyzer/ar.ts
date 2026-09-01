/**
 * i18n tool shard (file-metadata-analyzer / ar).
 */
import type { SiteLangDict } from '../../../types';

/** 阿拉伯语文案键表。 */
const ar: SiteLangDict = {
	tool_file_metadata_analyzer_analyzing: 'جارٍ التحليل…',
	tool_file_metadata_analyzer_article:
		'أسقط ملفًا محليًا أو اختره لعرض الاسم والحجم ونوع MIME ووقت التعديل. للصور: العرض×الارتفاع؛ للصوت/الفيديو: المدة عند نجاح فك الترميز. تلميحات magic-byte للحاويات الشائعة. دون رفع إلى خادم؛ تبقى على جهازك.',
	tool_file_metadata_analyzer_choose_file: 'اختر ملفًا',
	tool_file_metadata_analyzer_clear: 'مسح',
	tool_file_metadata_analyzer_decode_fail: 'تعذّر فك حقول الوسائط الإضافية — معلومات الملف الأساسية تظهر.',
	tool_file_metadata_analyzer_desc:
		'افحص بيانات الملف محليًا — الحجم والنوع والأبعاد والمدة. دون رفع إلى خادم؛ على جهازك.',
	tool_file_metadata_analyzer_description:
		'محلل بيانات الملفات: أسقط ملفًا لقراءة الاسم والحجم وMIME والتعديل. الصور → أبعاد؛ الصوت/الفيديو → مدة. تلميحات magic-byte: PNG وJPEG وGIF وWebP وPDF وZIP وMP4. مثال: PNG 16×16 عند التحميل. للـ EXIF العميق استخدم أداة EXIF. دون رفع إلى خادم.',
	tool_file_metadata_analyzer_dim_tpl: '{w} × {h} بكسل',
	tool_file_metadata_analyzer_drop_hint: 'أو أسقط ملفًا هنا. التحليل في هذا التبويب.',
	tool_file_metadata_analyzer_dur_tpl: '{t}',
	tool_file_metadata_analyzer_empty: 'اختر أو أسقط ملفًا أولًا.',
	tool_file_metadata_analyzer_example:
		'تحميل المثال ينشئ PNG 16×16 باسم sample-icon.png في الذاكرة. الجدول يعرض ~100+ بايت وimage/png وأبعاد 16×16 وتلميح PNG — دون رفع.',
	tool_file_metadata_analyzer_example_title: 'مثال',
	tool_file_metadata_analyzer_faq_a1: 'لا. يُقرأ الملف عبر File API في هذا التبويب. لا يُرسل إلى خوادمنا.',
	tool_file_metadata_analyzer_faq_a2:
		'هذه الصفحة للأساسيات + أبعاد/مدة عند الإمكان. أداة EXIF لقراءة/حذف علامات الكامera — استخدمها للـ GPS والغالق.',
	tool_file_metadata_analyzer_faq_a3: 'قد يبقى file.type فارغًا. ما زال الحجم والاسم يظهران؛ magic-byte قد يقترح PNG/JPEG/PDF.',
	tool_file_metadata_analyzer_faq_a4: 'بعض الترميزات تفشل في video/audio. حقول File API تبقى؛ صف الملاحظة يوضح.',
	tool_file_metadata_analyzer_faq_a5: 'نقرأ ~12 بايتًا أولى (PNG, JPEG, GIF, WebP, PDF, ZIP, MP4). تلميح وليس قاعدة كاملة.',
	tool_file_metadata_analyzer_faq_q1: 'هل يُرفع ملفي؟',
	tool_file_metadata_analyzer_faq_q2: 'ما الفرق عن أداة EXIF؟',
	tool_file_metadata_analyzer_faq_q3: 'لماذا MIME فارغ؟',
	tool_file_metadata_analyzer_faq_q4: 'لماذا تغيب الأبعاد أو المدة؟',
	tool_file_metadata_analyzer_faq_q5: 'ما تلميحات magic-byte؟',
	tool_file_metadata_analyzer_field_decode_note: 'ملاحظة فك',
	tool_file_metadata_analyzer_field_dimensions: 'الأبعاد',
	tool_file_metadata_analyzer_field_duration: 'المدة',
	tool_file_metadata_analyzer_field_magic: 'تلميح magic-byte',
	tool_file_metadata_analyzer_field_modified: 'آخر تعديل',
	tool_file_metadata_analyzer_field_name: 'اسم الملف',
	tool_file_metadata_analyzer_field_size: 'الحجم (بايت)',
	tool_file_metadata_analyzer_field_size_human: 'الحجم (مقروء)',
	tool_file_metadata_analyzer_field_type: 'MIME / النوع',
	tool_file_metadata_analyzer_how_body: 'اختر ملفًا محليًا. نعرض حقول File ثم نعمّق الصور والوسائط عند نجاح الفك.',
	tool_file_metadata_analyzer_how_item_1: 'أسقط ملفًا أو انقر اختر ملفًا.',
	tool_file_metadata_analyzer_how_item_2: 'اقرأ الاسم والبايتات والحجم المقروء وMIME والتعديل.',
	tool_file_metadata_analyzer_how_item_3: 'للصور: العرض×الارتفاع؛ للصوت/الفيديو: المدة.',
	tool_file_metadata_analyzer_how_item_4: 'حمّل المثال أو امسح لإعادة التعيين.',
	tool_file_metadata_analyzer_how_title: 'كيف يعمل',
	tool_file_metadata_analyzer_load_sample: 'حمّل مثالًا',
	tool_file_metadata_analyzer_na: '—',
	tool_file_metadata_analyzer_results_label: 'نتائج البيانات الوصفية',
	tool_file_metadata_analyzer_rules_body: 'مصادر الحقول وحدودها.',
	tool_file_metadata_analyzer_rules_item_1: 'الاسم والحجم والنوع وlastModified من كائن File.',
	tool_file_metadata_analyzer_rules_item_2: 'أبعاد الصورة عبر createImageBitmap أو Image — دون رفع.',
	tool_file_metadata_analyzer_rules_item_3: 'مدة الوسائط عبر عنصر media؛ ترميزات نادرة قد تفشل.',
	tool_file_metadata_analyzer_rules_item_4: 'magic-byte سطحي — لا يغني عن hash أو EXIF عميق.',
	tool_file_metadata_analyzer_rules_title: 'قواعد متوقعة',
	tool_file_metadata_analyzer_sample_name: 'sample-icon.png',
	tool_file_metadata_analyzer_status_done: 'اكتمل التحليل.',
	tool_file_metadata_analyzer_title: 'محلل بيانات الملفات الوصفية',
	tool_file_metadata_analyzer_usecase_1: 'تأكد أن التصدير 1920×1080 قبل الرفع لمنصة.',
	tool_file_metadata_analyzer_usecase_2: 'اعرف مدة تسجيل صوتي دون برنامج سطح مكتب.',
	tool_file_metadata_analyzer_usecase_3: 'قارن MIME مع magic-byte إذا كان الامتداد مشبوهًا.',
	tool_file_metadata_analyzer_usecases_title: 'حالات مناسبة',
	tool_file_metadata_analyzer_waiting: 'اختر ملفًا أو حمّل المثال.',
};

export default ar;
