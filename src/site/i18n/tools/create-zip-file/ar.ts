/**
 * i18n tool shard (create-zip-file / ar).
 * عنوان البحث المحلي: إنشاء ملف zip.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_create_zip_file_article:
		'اختر ملفات في هذا التبويب، اجمعها في ZIP ثم نزّلها. تبقى الملفات على جهازك ولا تُرفع إلى خادم. Gzip وضع ثانوي لملف واحد.',
	tool_create_zip_file_choose_files: 'اختر ملفات',
	tool_create_zip_file_clear: 'مسح',
	tool_create_zip_file_desc:
		'أنشئ ملف zip في المتصفح من عدة ملفات أو مجلد بمسار، ثم نزّله دون رفع.',
	tool_create_zip_file_description:
		'إنشاء ملف zip: اختر الملفات (تُحفظ أسماء المجلدات إن وفّر المتصفح مسارًا نسبيًا)، اترك ZIP ثم نزّل. تبقى الملفات على جهازك ولا تُرفع إلى خادم. المثال يضع notes.txt وphoto.png وdocs/readme.md في sample.zip. Gzip لملف واحد فقط. الـ zip بكلمة مرور حدّ في الأسئلة الشائعة لا وعد في الشاشة الأولى.',
	tool_create_zip_file_download: 'نزّل ZIP',
	tool_create_zip_file_drop_hint: 'أسقط الملفات هنا. عند إسقاط مجلد تُحفظ المسارات النسبية إن وفّرها المتصفح.',
	tool_create_zip_file_empty: 'اختر ملفًا واحدًا على الأقل أولًا.',
	tool_create_zip_file_err_fflate: 'فشل تحميل محرك ZIP. تحقق من الشبكة ثم أعد المحاولة.',
	tool_create_zip_file_err_gzip_many: 'Gzip يضغط ملفًا واحدًا. انتقل إلى ZIP لعدة ملفات أو أبقِ ملفًا واحدًا.',
	tool_create_zip_file_err_too_large: 'هذه المجموعة أكبر من أن تُحزم بأمان في المتصفح. احذف بعض الملفات ثم أعد المحاولة.',
	tool_create_zip_file_example:
		'تحميل المثال يضع notes.txt وصورة photo.png صغيرة وdocs/readme.md ثم يبني sample.zip. زر التنزيل جاهز من الشاشة الأولى.',
	tool_create_zip_file_example_title: 'مثال',
	tool_create_zip_file_faq_a1:
		'لا. تُقرأ البايتات في هذا التبويب. قد يُحمَّل سكربت المحرك من هذا الموقع، لكن ملفاتك لا تُرفع إلى خوادمنا.',
	tool_create_zip_file_faq_a2:
		'إن أبلغ المتصفح عن webkitRelativePath (إسقاط مجلد أو اختيار مجلد)، تُحفظ تلك المسارات كمدخلات ZIP بعد حذف ../. هذه مهمة ضغط المجلد هنا.',
	tool_create_zip_file_faq_a3:
		'لا نبني ولا نفك ZIP بتشفير AES في الشاشة الأولى. الـ zip بكلمة مرور حدّ في الأسئلة فقط.',
	tool_create_zip_file_faq_a4:
		'استخدم Gzip لملف واحد عندما تحتاج .gz. عدة ملفات تكون في ZIP. Gzip ليس ضاغط PDF.',
	tool_create_zip_file_faq_a5:
		'المجموعات الضخمة قد تنفد ذاكرة التبويب. الصفحة تحذّر وتتوقف. لفك الضغط استخدم صفحة فك ZIP ذات الصلة.',
	tool_create_zip_file_faq_q1: 'هل تُرفع ملفاتي؟',
	tool_create_zip_file_faq_q2: 'هل أستطيع ضغط مجلد إلى zip؟',
	tool_create_zip_file_faq_q3: 'هل يُنشئ zip بكلمة مرور؟',
	tool_create_zip_file_faq_q4: 'متى أستخدم Gzip بدل ZIP؟',
	tool_create_zip_file_faq_q5: 'ماذا عن الملفات الضخمة؟ أين أفك الضغط؟',
	tool_create_zip_file_file_count_label: 'الملفات',
	tool_create_zip_file_how_body:
		'اختر ما تريد إرساله كأرشيف واحد، احتفظ بأسماء المجلدات إن أعطاها المتصفح، ثم نزّل ZIP. Gzip مسار آخر لملف واحد.',
	tool_create_zip_file_how_item_1: 'اختر الملفات التي تريد إرسالها كـ zip واحد — هذه المهمة، وليست أداة فك ثانية.',
	tool_create_zip_file_how_item_2: 'أسقط مجلدًا إن حفظ المتصفح المسارات النسبية؛ تُحذف مقاطع ../ قبل الحزم.',
	tool_create_zip_file_how_item_3: 'اترك ZIP الافتراضي ثم نزّل. المثال يحزم ثلاثة ملفات عند الفتح.',
	tool_create_zip_file_how_item_4: 'انتقل إلى Gzip فقط بملف واحد وإن أردت .gz. عدة ملفات تبقى على ZIP.',
	tool_create_zip_file_how_title: 'طريقة العمل',
	tool_create_zip_file_level_label: 'مستوى الضغط',
	tool_create_zip_file_load_sample: 'حمّل مثالًا',
	tool_create_zip_file_mode_gzip: 'Gzip (ملف واحد)',
	tool_create_zip_file_mode_zip: 'ZIP',
	tool_create_zip_file_packed_size_label: 'الحجم بعد الحزم',
	tool_create_zip_file_rules_body:
		'الحزم في المتصفح يحتاج تنظيف المسارات، فصل ZIP عن Gzip، حد حجم، وحد كلمة مرور واضح.',
	tool_create_zip_file_rules_item_1:
		'ZIP يستخدم DEFLATE عبر zipSync من fflate. المستوى 0–9 اختياري؛ المثال يستخدم مستوى خفيف ليظهر سريعًا.',
	tool_create_zip_file_rules_item_2:
		'الأسماء من اسم الملف أو webkitRelativePath. تُحذف الشرطات الأولى و../.',
	tool_create_zip_file_rules_item_3:
		'وضع Gzip يستدعي gzipSync على ملف واحد تمامًا. أكثر من ملف يجب أن يكون ZIP.',
	tool_create_zip_file_rules_item_4:
		'ZIP بكلمة مرور ليس مخرج الشاشة الأولى. الصفحة لا تسترجع ولا تفك الأرشيفات المشفّرة.',
	tool_create_zip_file_rules_title: 'قواعد متوقعة',
	tool_create_zip_file_status_done: 'الأرشيف جاهز — نزّله أو استبدل الملفات.',
	tool_create_zip_file_status_packing: 'جارٍ الحزم…',
	tool_create_zip_file_title: 'إنشاء ملف zip',
	tool_create_zip_file_usecase_1:
		'البريد: اجمع عدة مرفقات في zip قبل الإرسال دون رفعها إلى موقع حزم.',
	tool_create_zip_file_usecase_2:
		'واجب: اضغط مجلد ملاحظات ولقطة شاشة عندما يُطلب أرشيف واحد.',
	tool_create_zip_file_usecase_3:
		'حزمة مصدر صغيرة: اقرأني مع ملفين ثم تحقق من الـ zip في أداة التجزئة ذات الصلة.',
	tool_create_zip_file_usecases_title: 'حالات مناسبة',
};

export default ar;
