/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / ar).
 * الكلمة المحلية: حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: 'إعدادات متقدمة (اختياري)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'أسقط عدة صور مطبوعة أو لقطات، اضغط «تحويل الكل» ثم «تنزيل وورد». كل صورة قسم بعنوان اسم الملف ونص يمكن تعديله؛ الصورة الأصلية فوق النص افتراضيًا للمراجعة. الصورة الضبابية تُتخطى. الملفات تبقى على جهازك ولا تُرفع إلى خادم. إن أردت أرشيف TXT فاستخدم «حوّل عدة صور JPG إلى نص بالتعرّف الضوئي دفعة واحدة».',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: 'اختر ملفات JPG أو PNG أو WebP',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: 'مسح',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: 'ملاحظات',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: 'الملف',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: 'البكسل',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: 'الحالة',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: 'تحويل الكل',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n} ملفات (الحد 10)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي: صفّها، حوّل الكل، نزّل وورد — تبقى على جهازك ولا تُرفع إلى خادم.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'أسقط عدة صور JPG ونزّل ملف وورد واحد يمكن تعديله. التعرّف يعمل في هذا التبويب صورة بعد صورة، والملفات تبقى على جهازك ولا تُرفع إلى خادم. الخطوات: أضف الصور، تحويل الكل، تنزيل وورد. مثال: عيّنتان مطبوعتان تصبحان قسمين بعناوين وصورة اختيارية. يُبحث أيضًا كـ تحويل JPG إلى وورد بـ OCR. الصورة الفاشلة تُتخطى. أرشيف النص في صفحة التحويل الدفعي إلى نص.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: 'تنزيل وورد',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: 'أسقط عدة صور هنا (الحد 10). المعالجة تبقى في هذا التبويب.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: 'أضف صورًا أولًا.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: 'تعذّر بناء ملف الوورد في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty:
		'لم يُعثر على نص مطبوع. تُخطّيت. جرّب صفحة أوضح، لا خطًا يدويًا.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'تعذّر تحميل محرك التعرّف. حدّث الصفحة ثم تحويل الكل. الأقسام المكتملة تبقى قابلة للتنزيل.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: 'تعذّر قراءة الصورة. استخدم JPEG أو PNG أو WebP. تُخطّيت.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: 'هذه الصفحة تقرأ الصور لا ملفات PDF. لم تُضف هذا الملف.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: 'أكبر من 12 ميغابايت. اضغط أو قص أولًا. تُخطّيت.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: 'الحد عشر صور. الزائد لم يُضف.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'«تحميل مثال» يضيف sample-1.jpg (ONLINEFREETOOLS و The quick brown fox) و sample-2.jpg (SAMPLE TWO و 印刷体样例)، يشغّل تحويل الكل، ويفعّل تنزيل وورد بقسمين معنونيْن.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: 'مثال',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'لا. الصور تبقى في تبويب المتصفح هذا. المحرك ونصوص بناء الوورد تُحمَّل من هذا الموقع؛ الملفات لا تُرفع إلى خوادمنا.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'«حوّل عدة صور JPG إلى نص بالتعرّف الضوئي دفعة واحدة» ينزّل أرشيف TXT. هنا يُبنى مستند وورد واحد قابل للتحرير، قسم لكل صورة. المحرك نفسه والمهمة مختلفة.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'«صور إلى Word» يلصق الصور كرسوم فلا تُحدَّد الحروف. هنا يكتب التعرّف فقرات يمكن تعديلها. الصورة الأصلية اختيارية للمراجعة.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4:
		'لا. الصورة الفاشلة تُتخطى وباقي الصفوف تدخل المستند نفسه.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'كل صورة ناجحة قسم: العنوان اسم الملف، ثم الصورة الاختيارية، ثم فقرات التعرّف، ثم فاصل صفحة. الأعمدة والجداول لن تطابق التخطيط الأصلي.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'لا. هذه الصفحة لا تقبل PDF. تحويل PDF ممسوح إلى وورد أداة أخرى (ليست هذا العنوان). PDF رقمي بطبقة نص يذهب إلى «تحويل PDF إلى مستند وورد».',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'الحروف المطبوعة أنسب. الخط اليدوي المتصل غالبًا يفشل في ذلك الصف. هذا ليس منتج تعرّف خط يد.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'نعم. JPEG و PNG و WebP في الصف نفسه. حتى صورة واحدة تنزّل ووردًا لا TXT. لصورة واحدة إلى نص استخدم تحويل JPG واحد إلى نص بالتعرّف.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: 'هل تُرفع صوري؟',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: 'ما الفرق عن تحويل عدة JPG إلى نص دفعة واحدة؟',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: 'ما الفرق عن «صور إلى Word»؟',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: 'إن فشلت صورة، هل يبقى الوورد فارغًا؟',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: 'كيف يبدو كل قسم في وورد؟',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: 'هل أسقط PDF ممسوحًا للتعرّف إلى وورد؟',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: 'هل يعمل الخط اليدوي؟',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: 'هل أستخدم PNG أم JPG واحد فقط؟',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'حوّل رزمة صور مطبوعة إلى ملف وورد يمكن تعديله: أضف الصور، اضغط تحويل الكل (المحرك يُحمَّل عند أول نقرة ثم يقرأ صورة بعد صورة)، ثم تنزيل وورد.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: 'أسقط عدة ملفات JPG أو PNG أو WebP (أو اختر الملفات).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2:
		'اختياري: اختر شريحة لغة للدفعات كلها (الصينية والإنجليزية الافتراض).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'اضغط تحويل الكل — أول تشغيل يحمّل محرك التعرّف في هذا التبويب ثم يقرأ صورة بعد صورة. الصورة الفاشلة تُتخطى.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'اضغط تنزيل وورد — مستند واحد بقسم لكل صورة (عنوان، صورة اختيارية، نص قابل للتحرير).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: 'كيف يعمل',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: 'العربية',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: 'الإنجليزية',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: 'اليابانية',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: 'لغة التعرّف للدفعات كلها',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: 'الصينية',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: 'الصينية + الإنجليزية',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: 'أطول ضلع قبل القراءة (بكسل)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: 'الافتراضي 2048. الأصغر أخف على الهاتف.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'مفعّل افتراضيًا. يظهر كل قسم الصورة فوق فقرات التعرّف للمراجعة في وورد.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: 'أدرج الصورة الأصلية فوق النص',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'حتى عشر صور في الصف. إن تجاوز أطول ضلع الحد تُصغَّر ثم تُقرأ بالترتيب البصري. عامل تعرّف واحد يعمل بالتتابع. الصف الفاشل يُتخطى؛ الناجح يصبح أقسام وورد واحد.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'كل صورة ناجحة قسم في وورد: العنوان الأول اسم الملف، ثم الصورة الاختيارية، ثم فقرات التعرّف، ثم فاصل صفحة. هذا تحويل JPG إلى وورد بـ OCR لرزمة، لا أرشيف TXT.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2:
		'الملفات تبقى على جهازك ولا تُرفع إلى خادم. تُحمَّل النصوص البرمجية من هذا الموقع.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'الخط اليدوي والضباب الشديد والمنظور القوي غالبًا يفشل في ذلك الصف. الجداول تصبح أسطرًا بترتيب القراءة. الأعمدة لن تطابق الصفحة الأصلية.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'لا إدخال PDF. أرشيف TXT في «حوّل عدة صور JPG إلى نص بالتعرّف الضوئي دفعة واحدة». الصور بلا تعرّف في «صور إلى Word».',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: 'ما ينبغي توقعه',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: 'تحميل مثال',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: 'تم',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: 'في الصف',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: 'يقرأ',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: 'متخطّى',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: 'تم.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: 'جارٍ تحميل محرك التعرّف…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: 'جارٍ بناء ملف الوورد…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: 'حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1: 'صوّر عدة صفحات نشرة ونزّل ووردًا واحدًا لتعيد عنونته.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2: 'اجعل صور قائمة طعام مستندًا واحدًا بصورة فوق كل قسم تعرّف للمراجعة.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3: 'اجمع لقطات أخطاء في وورد قابل للتحرير وأرسله لزميل.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: 'أين يناسب',
};

export default ar;
