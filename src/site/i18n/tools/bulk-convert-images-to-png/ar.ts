/**
 * شريحة i18n (bulk-convert-images-to-png / ar).
 * عنوان H1 يتبع بحث «تحويل الصور إلى PNG بالجملة».
 */
import type { SiteLangDict } from '../../../types';

/** العربية: لقطات وشعارات يجب أن تكون PNG مع الإبقاء على الشفافية؛ نبرة أداة يومية. */
const ar: SiteLangDict = {
	tool_bulk_convert_images_to_png_article:
		'إذا كان التسليم PNG فحوّل صور JPEG واللقطات والشعارات المثقوبة في هذا التبويب: الشفافية تُحفظ إن وُجدت في المصدر، وتُتخطى الملفات الفاشلة، ثم نزّل ZIP. JPEG إلى PNG غالبًا أكبر؛ الجدول يبيّن ذلك. تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_png_choose_files: 'اختيار الصور',
	tool_bulk_convert_images_to_png_clear: 'مسح',
	tool_bulk_convert_images_to_png_col_after: 'بعد',
	tool_bulk_convert_images_to_png_col_before: 'قبل',
	tool_bulk_convert_images_to_png_col_name: 'ملف',
	tool_bulk_convert_images_to_png_col_status: 'الحالة',
	tool_bulk_convert_images_to_png_convert: 'تحويل الكل',
	tool_bulk_convert_images_to_png_desc:
		'تحويل الصور إلى PNG بالجملة مع الإبقاء على الشفافية إن وُجدت في المصدر وتنزيل ZIP؛ تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_png_description:
		'تحويل الصور إلى PNG بالجملة: أضف صور JPEG أو لقطات، أعد ترميزها PNG في هذا التبويب بلا خلفية JPEG، تخطَّ الفاشل ونزّل ZIP. خطوات: اختر الدفعة، حوّل الكل، انظر الجدول إن كبر JPEG كـ PNG. مثال: صورة معتمة وشعار مثقوب يصبحان .png. تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_png_download_zip: 'تنزيل ZIP',
	tool_bulk_convert_images_to_png_drop_hint: 'أسقط JPEG أو PNG أو WebP أو GIF (حتى 20). التحويل يبقى في هذا التبويب.',
	tool_bulk_convert_images_to_png_empty: 'أضف صورًا أولًا.',
	tool_bulk_convert_images_to_png_err_decode: 'تعذر فك هذا الملف. تم التخطي.',
	tool_bulk_convert_images_to_png_err_encode: 'تعذر كتابة PNG لهذا الملف. تم التخطي.',
	tool_bulk_convert_images_to_png_err_fflate: 'تعذر بناء ZIP في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_bulk_convert_images_to_png_err_too_many: 'الحد 20 صورة. لم تُضف الملفات الزائدة.',
	tool_bulk_convert_images_to_png_example:
		'تحميل مثال يضع كتلة JPEG وشعارًا شفافًا، يكتب ملفين .png ويفعّل تنزيل ZIP. صف JPEG غالبًا يظهر PNG أكبر.',
	tool_bulk_convert_images_to_png_example_title: 'مثال',
	tool_bulk_convert_images_to_png_faq_a1:
		'لا. الفك والكتابة إلى PNG يجريان في هذا التبويب. تبقى على جهازك دون رفع إلى خادم. قد تُحمَّل أداة ZIP من هذا الموقع؛ صورك لا تغادر التبويب.',
	tool_bulk_convert_images_to_png_faq_a2:
		'لا. JPEG لم يخزّن ثقوبًا قط. jpg إلى png يعطيك غلاف PNG؛ الخلفية تبقى معتمة. الثقوب الحقيقية تبقى فقط إن كان المصدر يملك قناة شفافية.',
	tool_bulk_convert_images_to_png_faq_a3:
		'PNG بلا فقدان. صورة JPEG غالبًا تكبر. الجدول يعلّم «أكبر». قلّص البكسل في ضغط صور PNG بالجملة، أو ابقَ على JPEG إن لم تحتج PNG.',
	tool_bulk_convert_images_to_png_faq_a4:
		'ضغط PNG للملفات التي هي PNG أصلًا ويجب أن تبقى PNG لكن أصغر. هذه الصفحة تغيّر اللاحقة إلى PNG.',
	tool_bulk_convert_images_to_png_faq_a5:
		'لا. يُحفظ الإطار الأول فقط كـ PNG ثابت، ويُذكر ذلك الصف.',
	tool_bulk_convert_images_to_png_faq_q1: 'هل تُرفع الصور إلى خادم؟',
	tool_bulk_convert_images_to_png_faq_q2: 'هل jpg إلى png يعيد الشفافية؟',
	tool_bulk_convert_images_to_png_faq_q3: 'لماذا PNG أكبر من JPEG؟',
	tool_bulk_convert_images_to_png_faq_q4: 'ما الفرق عن ضغط PNG؟',
	tool_bulk_convert_images_to_png_faq_q5: 'هل تبقى ملفات GIF المتحركة متحركة؟',
	tool_bulk_convert_images_to_png_file_count_tpl: '{n} صور في الطابور',
	tool_bulk_convert_images_to_png_how_body:
		'اختر الصور التي يجب أن تصبح PNG، حوّلها هنا دون طلاء خلفية، ثم خذ ZIP للملفات الناجحة.',
	tool_bulk_convert_images_to_png_how_item_1: 'اختر اللقطات أو الشعارات التي يجب أن تكون PNG.',
	tool_bulk_convert_images_to_png_how_item_2: 'لا يوجد مفتاح خلفية بيضاء — الثقوب تبقى إن كان المصدر يملك شفافية.',
	tool_bulk_convert_images_to_png_how_item_3: 'اضغط تحويل الكل. مصدر JPEG يصبح PNG معتمًا؛ الجدول يحذّر إن كبر الملف.',
	tool_bulk_convert_images_to_png_how_item_4: 'تريد JPG؟ استخدم تحويل الصور إلى JPG بالجملة. تريد PNG أصغر؟ استخدم ضغط صور PNG بالجملة.',
	tool_bulk_convert_images_to_png_how_item_5: 'نزّل ZIP بعد نجاح ملف واحد على الأقل. تحميل المثال يعمل عند الفتح.',
	tool_bulk_convert_images_to_png_how_title: 'طريقة التحويل إلى PNG',
	tool_bulk_convert_images_to_png_max_edge_label: 'أطول ضلع',
	tool_bulk_convert_images_to_png_resize_on: 'تقييد أطول ضلع',
	tool_bulk_convert_images_to_png_rules_body:
		'المخرج دائمًا PNG. هذه الصفحة لا تسطح الشفافية على خلفية JPEG.',
	tool_bulk_convert_images_to_png_rules_item_1:
		'تُحفظ الشفافية إن وُجدت في المصدر. مصدر JPEG لا يملك شفافية للحفظ.',
	tool_bulk_convert_images_to_png_rules_item_2:
		'تصغير الضلع الأطول اختياري ومطفأ افتراضيًا حتى لا يُغيَّر الحجم سرًا أثناء التحويل.',
	tool_bulk_convert_images_to_png_rules_item_3:
		'إن كان PNG أكبر من الأصل يقول الصف ذلك. فشل الفك يتخطى. الأسماء المكررة في ZIP تصبح اسم (2).png.',
	tool_bulk_convert_images_to_png_rules_item_4:
		'تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_png_rules_title: 'ما تتوقعه',
	tool_bulk_convert_images_to_png_sample: 'تحميل مثال',
	tool_bulk_convert_images_to_png_status_compressing: 'جارٍ تحويل الدفعة إلى PNG…',
	tool_bulk_convert_images_to_png_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل ZIP.',
	tool_bulk_convert_images_to_png_status_larger: 'أكبر من المصدر',
	tool_bulk_convert_images_to_png_status_ok: 'PNG جاهز',
	tool_bulk_convert_images_to_png_status_skip: 'متخطى',
	tool_bulk_convert_images_to_png_summary_tpl: '{ok} جاهزة · {larger} أكبر · {skip} متخطاة',
	tool_bulk_convert_images_to_png_title: 'تحويل الصور إلى PNG بالجملة',
	tool_bulk_convert_images_to_png_usecase_1: 'أرشفة اللقطات كـ PNG لتسليم التصميم.',
	tool_bulk_convert_images_to_png_usecase_2: 'توحيد ملصقات PNG عندما يملك المصدر ثقوبًا أصلًا.',
	tool_bulk_convert_images_to_png_usecase_3: 'jpg إلى png عندما يقبل نظام المحتوى PNG فقط — توقّع ملف صورة أكبر.',
	tool_bulk_convert_images_to_png_usecases_title: 'متى يناسبك',
	tool_bulk_convert_images_to_png_warn_anim: 'الملفات المتحركة: يُحفظ الإطار الأول فقط كـ PNG ثابت.',
	tool_bulk_convert_images_to_png_warn_edge: 'ملف أعرض أو أطول من 8192 بكسل — توقّع بطئًا.',
	tool_bulk_convert_images_to_png_warn_large: 'ملف أكبر من 25 م.ب — قد تنفد ذاكرة هذا التبويب.',
	tool_bulk_convert_images_to_png_warn_larger: 'بعض ملفات PNG أكبر من الأصل. هذا متوقع لصور JPEG.',
};

export default ar;
