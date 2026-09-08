/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / ar).
 * 当地主词：حوّل عدة صور JPG إلى نص بالتعرّف الضوئي دفعة واحدة.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: 'إعدادات متقدمة (اختياري)',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'أسقط عدة صور مطبوعة أو لقطات، اضغط تحويل الكل، ثم نزّل ZIP. لكل صورة ملف TXT؛ الملف المدمج يفصلها بأسماء الملفات. الصورة الضبابية تُتخطى. الملفات تبقى على جهازك دون رفع إلى خادم. لصورة واحدة استخدم تحويل JPG إلى نص بالتعرّف الضوئي.',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: 'اختر ملفات JPG أو PNG أو WebP',
	tool_batch_convert_jpg_to_text_with_ocr_clear: 'مسح',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: 'ملاحظات',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: 'الملف',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: 'البكسل',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: 'الحالة',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint:
		'مفعّل افتراضيًا. يتضمّن الأرشيف combined.txt مع --- اسم الملف --- بين الصور.',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'تضمين combined.txt في ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: 'تحويل الكل',
	tool_batch_convert_jpg_to_text_with_ocr_copied: 'تم النسخ.',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: 'نسخ النص المدمج',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} ملفات (الحد 10)',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'حوّل عدة JPG إلى نص بالتعرّف الضوئي دفعة واحدة: طابور ثم ZIP — تبقى على جهازك دون رفع إلى خادم.',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'أسقط عدة صور JPG أو لقطات ونزّل أرشيف نصوص. التعرّف يجري في هذا التبويب صورة بعد صورة دون رفع إلى خادم. الخطوات: أضف الصور، تحويل الكل، تنزيل ZIP. مثال: صورتان مطبوعتان تصبحان ملفين TXT وملفًا مدمجًا. يُبحث أيضًا كتعرّف ضوئي على دفعة صور. لصورة واحدة استخدم صفحة الصورة الواحدة.',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: 'تنزيل ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint: 'أسقط عدة صور هنا (حتى 10). المعالجة تبقى في هذا التبويب.',
	tool_batch_convert_jpg_to_text_with_ocr_empty: 'أضف صورًا أولًا.',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty:
		'لا نص مطبوع. تم التخطي. جرّب صفحة أوضح، لا خط اليد.',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine:
		'تعذّر تحميل محرك التعرّف. حدّث الصفحة ثم تحويل الكل. الصفوف المكتملة تبقى قابلة للتنزيل.',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: 'تعذّر إنشاء ZIP في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: 'تعذّر قراءة الصورة. استخدم JPEG أو PNG أو WebP. تم التخطي.',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: 'هذه الصفحة تقرأ الصور لا ملفات PDF. لم يُضف الملف.',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: 'أكبر من 12 ميغابايت. اضغط أو قص. تم التخطي.',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: 'الحد 10 صور. لم تُضف البقية.',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'تحميل مثال يضيف sample-1.jpg و sample-2.jpg ثم تحويل الكل ويفعّل تنزيل ZIP بملفي TXT و combined.txt.',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: 'مثال',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1:
		'لا. الصور تبقى في تبويب المتصفح. سكربتات المحرك والأرشيف من هذا الموقع؛ لا رفع إلى خوادمنا.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'صفحة الصورة الواحدة تنسخ TXT واحدًا. هنا طابور: تحويل الكل، تخطي الصف الفاشل، تنزيل ZIP. نفس المحرك وعمل مختلف.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3: 'لا. تُتخطى تلك الصورة وتستمر البقية. الناجح يدخل الأرشيف.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'ملف TXT لكل صورة باسم الأصل. combined.txt افتراضي ويفصل --- اسم الملف --- بين الصفحات.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'لصورة واحدة استخدم تحويل JPG إلى نص بالتعرّف الضوئي. يمكنك إسقاط ملف واحد هنا لكن الأزرار هي تحويل الكل وتنزيل ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6: 'نعم. JPEG و PNG و WebP في الطابور نفسه دون عنوان منفصل.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7:
		'الحرف المطبوع أفضل. خط اليد غالبًا يفشل في ذلك الصف. ليست خدمة مسح ميداني ولا منتجًا للخط العربي اليدوي.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8:
		'لا PDF ولا جداول. وورد قابل للتحرير بالتعرّف في «حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي». PDF رقمي بطبقة نص يذهب إلى استخراج النص من PDF.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: 'هل تُرفع صوري؟',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: 'ما الفرق عن تحويل JPG واحد بالتعرّف الضوئي؟',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: 'إذا فشلت صورة هل تتوقف الدفعة كلها؟',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: 'ماذا داخل ZIP؟',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: 'لدي صورة واحدة فقط. هل أستخدم هذه الصفحة؟',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: 'هل أستطيع دفعة PNG أو لقطات WebP؟',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: 'هل يعمل خط اليد أو خدمة مسح المستندات؟',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: 'هل أسقط PDF ممسوحًا؟',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'حوّل رزمة صور مطبوعة إلى أرشيف نصوص: أضف الصور، اضغط تحويل الكل (يُحمَّل المحرك أول مرة ثم يقرأ صورة بعد أخرى)، ثم نزّل ZIP أو انسخ النص المدمج.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: 'أسقط عدة ملفات JPG أو PNG أو WebP (أو اختر الملفات).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2: 'اختياري: لغة التعرّف للدفعة كلها (الصينية والإنجليزية افتراضيًا).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3:
		'اضغط تحويل الكل — أول تشغيل يحمّل المحرك في هذا التبويب ثم يقرأ صورة بعد أخرى. الصورة الفاشلة تُتخطى.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4: 'اضغط تنزيل ZIP (TXT لكل صورة مع ملف مدمج) أو نسخ النص المدمج.',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: 'كيف تعمل',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: 'العربية',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: 'الإنجليزية',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: 'اليابانية',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: 'لغة التعرّف للدفعة كلها',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: 'الصينية',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: 'الصينية + الإنجليزية',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: 'أطول ضلع قبل القراءة (بكسل)',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: 'الافتراضي 2048. رقم أصغر أخف على الهاتف.',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: 'معاينة النص المدمج',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'حتى 10 صور. تُصغَّر إن تجاوز الضلع الطويل الحد، ثم تُقرأ بترتيب العرض. عامل تعرّف واحد بالتتابع. الصف الفاشل يُتخطى والنص الناجح يدخل ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'أسماء ZIP تتبع الأصل. combined.txt (افتراضي) يدرج --- اسم الملف --- بين الصور ككتيّب مصوَّر.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2:
		'الملفات تبقى على جهازك ولا تُرفع إلى خادم. السكربتات من هذا الموقع.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3:
		'خط اليد والضباب والمنظور القوي غالبًا تفشل في ذلك الصف. الجداول أسطر قراءة لا CSV.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'لا PDF ولا Word ولا PDF قابل للبحث. صورة واحدة مع نسخ النص تذهب إلى تحويل JPG إلى نص بالتعرّف الضوئي.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: 'ما الذي تتوقعه',
	tool_batch_convert_jpg_to_text_with_ocr_sample: 'تحميل مثال',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: 'تم',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: 'في الانتظار',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: 'يقرأ',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: 'متخطى',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: 'تم.',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: 'جاري تحميل محرك التعرّف…',
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: 'حوّل عدة صور JPG إلى نص بالتعرّف الضوئي دفعة واحدة',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1: 'صوّر عدة صفحات مطبوعة ونزّل أرشيف TXT للملاحظات.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2: 'حوّل رزمة لقطات دردشة أو أخطاء عندما لا يمكن تحديد البكسل.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3: 'اجمع صور قائمة طعام في combined.txt ثم انسخه للمراجعة.',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: 'متى يناسبك',
};

export default ar;
