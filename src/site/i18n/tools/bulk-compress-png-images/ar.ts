/**
 * شريحة i18n للأداة (bulk-compress-png-images / ar).
 * عنوان H1 يتبع جملة البحث «ضغط صور PNG بالجملة».
 */
import type { SiteLangDict } from '../../../types';

/** العربية: شعارات PNG الشفافة تبقى PNG دون رفع إلى خادم. */
const ar: SiteLangDict = {
	tool_bulk_compress_png_images_article:
		'اضغط في هذا التبويب مجلد شعارات أو قصاصات PNG، أبقِ الشفافية، تجاوز الفاشل، ثم نزّل ZIP. الملفات تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_compress_png_images_chip_1024: '1024 بكسل',
	tool_bulk_compress_png_images_chip_reencode: 'إعادة ترميز فقط',
	tool_bulk_compress_png_images_choose_files: 'اختيار صور PNG',
	tool_bulk_compress_png_images_clear: 'مسح',
	tool_bulk_compress_png_images_col_after: 'بعد',
	tool_bulk_compress_png_images_col_before: 'قبل',
	tool_bulk_compress_png_images_col_name: 'الملف',
	tool_bulk_compress_png_images_col_status: 'الحالة',
	tool_bulk_compress_png_images_compress: 'ضغط الكل',
	tool_bulk_compress_png_images_desc:
		'ضغط PNG بالجملة مع الإبقاء على الشفافية وتنزيل ZIP — تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_compress_png_images_description:
		'ضغط صور PNG بالجملة: أضف شعارات أو قصاصات واجهة، أبقِ الشفافية، قلّص أطول ضلع إن لزم، أعد الحفظ PNG في هذا التبويب، تجاوز الفشل ونزّل ZIP. الخطوات: اختر الدفعة، اترك شريحة 1024 بكسل إن وجب تصغير الأيقونات، اضغط الكل ثم اقرأ الجدول. مثال: نموذجا رقعة الشطرنج يبقيان PNG بفتحات. الملفات تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_compress_png_images_download_zip: 'تنزيل ZIP',
	tool_bulk_compress_png_images_drop_hint: 'أسقط ملفات PNG (حتى 20). الصور الأخرى تُصدَّر PNG أيضًا. تبقى في هذا التبويب.',
	tool_bulk_compress_png_images_empty: 'أضف صور PNG أولًا.',
	tool_bulk_compress_png_images_err_decode: 'تعذّر فك هذه الصورة. تم تجاوزها.',
	tool_bulk_compress_png_images_err_encode: 'تعذّر حفظ هذه الصورة كـ PNG. تم تجاوزها.',
	tool_bulk_compress_png_images_err_fflate: 'تعذّر بناء ZIP في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_bulk_compress_png_images_err_too_many: 'الحد 20 ملفًا في المرة. الزائد لم يُضف.',
	tool_bulk_compress_png_images_example:
		'تحميل مثال يضع ملفي PNG برقعة شطرنج شفافة، يعيد ترميزهما PNG، يملأ الجدول ويفعّل تنزيل ZIP. الأسماء المكررة تصبح name (2).png.',
	tool_bulk_compress_png_images_example_title: 'مثال',
	tool_bulk_compress_png_images_faq_a1:
		'لا. الفك والكتابة PNG يجريان في هذا التبويب. الملفات تبقى على جهازك دون رفع إلى خادم. قد يُحمَّل مساعد ZIP من شبكة توصيل؛ صورك لا تغادر التبويب.',
	tool_bulk_compress_png_images_faq_a2:
		'لا. المخرج دائمًا PNG. لا توجد طبقة JPEG. إن قبلت JPEG لتصغير صور المنتجات فاستخدم ضغط صور المنتجات بالجملة.',
	tool_bulk_compress_png_images_faq_a3:
		'نعم. تُرسم البكسلات بلا خلفية مصمتة ثم تُحفظ PNG، فتبقى الفتحات فتحات.',
	tool_bulk_compress_png_images_faq_a4:
		'غالبًا إن لم تقلّص أطول ضلع. PNG هنا ليس محسّن لوحات ألوان. الألوان المفهرسة قد تُظهر أشرطة بعد إعادة الترميز.',
	tool_bulk_compress_png_images_faq_a5:
		'لا. يُحفظ الإطار الأول فقط كـ PNG ثابت.',
	tool_bulk_compress_png_images_faq_q1: 'هل ضغط png يرفع ملفاتي إلى خادم؟',
	tool_bulk_compress_png_images_faq_q2: 'هل تصغير png يحوّله إلى JPEG؟',
	tool_bulk_compress_png_images_faq_q3: 'هل يمكن ضغط png مع الشفافية دون فقدانها؟',
	tool_bulk_compress_png_images_faq_q4: 'لماذا يبقى الملف كبيرًا بعد الضغط؟',
	tool_bulk_compress_png_images_faq_q5: 'هل GIF المتحركة تبقى متحركة؟',
	tool_bulk_compress_png_images_file_count_tpl: '{n} ملفات في القائمة',
	tool_bulk_compress_png_images_how_body:
		'إذا كان المجلد يجب أن يبقى PNG، شارك سقفًا لأطول ضلع عند الحاجة، اضغط هنا، ثم خذ ZIP لما نجح.',
	tool_bulk_compress_png_images_how_item_1: 'اختر شعارات أو قصاصات PNG التي يجب أن تبقى شفافة.',
	tool_bulk_compress_png_images_how_item_2: 'استخدم شريحة 1024 بكسل عندما يجب تصغير الأيقونات؛ إعادة ترميز فقط عندما يجب ثبات المقاس بالبكسل.',
	tool_bulk_compress_png_images_how_item_3: 'اضغط ضغط الكل. كل صف يبقى PNG. الفاشل يُتجاوز والباقي يُعبَّأ.',
	tool_bulk_compress_png_images_how_item_4: 'إن بالكاد يصغر PNG شبيه بالصورة، يحذّرك الجدول — JPEG في صفحة صور المنتجات أصغر غالبًا.',
	tool_bulk_compress_png_images_how_item_5: 'نزّل ZIP بعد نجاح ملف واحد على الأقل. تحميل المثال سبق أن عمل عند الدخول.',
	tool_bulk_compress_png_images_how_title: 'طريقة الدفعة',
	tool_bulk_compress_png_images_max_edge_label: 'أطول ضلع',
	tool_bulk_compress_png_images_resize_on: 'تقييد أطول ضلع',
	tool_bulk_compress_png_images_rules_body:
		'لا تُرسم خلفية JPEG. الحجم ينخفض عادة عند تقليص أطول ضلع، لا عند إعادة الحفظ وحدها.',
	tool_bulk_compress_png_images_rules_item_1:
		'نوع المخرج PNG. الشفافية لا تُسوَّى. لا منزلق جودة لأن PNG هنا بلا فقد.',
	tool_bulk_compress_png_images_rules_item_2:
		'أطول ضلع يُصغَّر بنسبة ثابتة ولا يُكبَّر أبدًا. إعادة الترميز فقط تُبقي المقاس وقد لا تغيّر البايتات تقريبًا.',
	tool_bulk_compress_png_images_rules_item_3:
		'فشل الفك أو الكتابة يتجاوز ذلك الصف. الأسماء المكررة في ZIP تصبح name (2).png. اللوحات المفهرسة قد تُظهر أشرطة.',
	tool_bulk_compress_png_images_rules_item_4:
		'الملفات تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_compress_png_images_rules_title: 'حدود تتوقعها',
	tool_bulk_compress_png_images_sample: 'تحميل مثال',
	tool_bulk_compress_png_images_status_compressing: 'جاري ضغط دفعة PNG…',
	tool_bulk_compress_png_images_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل ZIP.',
	tool_bulk_compress_png_images_status_ok: 'PNG جاهز',
	tool_bulk_compress_png_images_status_same: 'ما زال كبيرًا',
	tool_bulk_compress_png_images_status_skip: 'تم التجاوز',
	tool_bulk_compress_png_images_summary_tpl: '{ok} جاهز · {same} بالكاد أصغر · {skip} متجاوز',
	tool_bulk_compress_png_images_title: 'ضغط صور PNG بالجملة',
	tool_bulk_compress_png_images_usecase_1: 'مجلد شعارات شفافة يجب أن تبقى PNG لواجهة المتجر.',
	tool_bulk_compress_png_images_usecase_2: 'قصاصات واجهة تحتاج أطول ضلع موحّد قبل تسليم التصميم.',
	tool_bulk_compress_png_images_usecase_3: 'ملصقات ترويجية بفتحات؛ JPEG سيملأ الفتحات بطبقة معتمة.',
	tool_bulk_compress_png_images_usecases_title: 'متى يناسبك',
	tool_bulk_compress_png_images_warn_anim: 'الملفات المتحركة: يُحفظ الإطار الأول فقط كـ PNG ثابت.',
	tool_bulk_compress_png_images_warn_edge: 'ملف أعرض أو أطول من 8192 بكسل — توقّع بطئًا.',
	tool_bulk_compress_png_images_warn_large: 'ملف أكبر من 25 ميغابايت — قد تنفد ذاكرة هذا التبويب.',
	tool_bulk_compress_png_images_warn_same: 'بعض ملفات PNG بالكاد صغرت. قلّص أطول ضلع، أو استخدم ضغط صور المنتجات إن قبلت JPEG.',
};

export default ar;
