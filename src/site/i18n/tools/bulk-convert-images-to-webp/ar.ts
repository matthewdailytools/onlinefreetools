/**
 * شريحة i18n (bulk-convert-images-to-webp / ar).
 * عنوان H1 يتبع بحث «تحويل الصور إلى WebP بالجملة».
 */
import type { SiteLangDict } from '../../../types';

/** العربية: موارد الموقع إلى WebP مع فقدان مع الإبقاء على الشفافية. */
const ar: SiteLangDict = {
	tool_bulk_convert_images_to_webp_article:
		'إذا كان الموقع يطلب WebP فحوّل شعارات PNG والصور في هذا التبويب إلى .webp مع فقدان: الشفافية تُحفظ إن وُجدت، وتُتخطى الملفات التي لا يكتبها هذا المتصفح، ثم نزّل ZIP. بعض البريد يرفض WebP فاستخدم JPG. تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_webp_chip_q80: 'جودة 0.8',
	tool_bulk_convert_images_to_webp_choose_files: 'اختيار الصور',
	tool_bulk_convert_images_to_webp_clear: 'مسح',
	tool_bulk_convert_images_to_webp_col_after: 'بعد',
	tool_bulk_convert_images_to_webp_col_before: 'قبل',
	tool_bulk_convert_images_to_webp_col_name: 'ملف',
	tool_bulk_convert_images_to_webp_col_status: 'الحالة',
	tool_bulk_convert_images_to_webp_convert: 'تحويل الكل',
	tool_bulk_convert_images_to_webp_desc:
		'تحويل الصور إلى WebP بالجملة بجودة مع فقدان وشفافية إن وُجدت في المصدر وتنزيل ZIP؛ تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_webp_description:
		'تحويل الصور إلى WebP بالجملة: أضف شعارات PNG أو صورًا، رمّز WebP مع فقدان في هذا التبويب بلا خلفية JPEG، تخطَّ ما لا يكتبه هذا المتصفح ونزّل ZIP. خطوات: اختر الدفعة، أبقِ الجودة قرب 0.8، حوّل الكل. مثال: صورة مع شعار مثقوب يصبحان .webp. تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_webp_download_zip: 'تنزيل ZIP',
	tool_bulk_convert_images_to_webp_drop_hint: 'أسقط JPEG أو PNG أو WebP أو GIF (حتى 20). التحويل يبقى في هذا التبويب.',
	tool_bulk_convert_images_to_webp_empty: 'أضف صورًا أولًا.',
	tool_bulk_convert_images_to_webp_err_decode: 'تعذر فك هذا الملف. تم التخطي.',
	tool_bulk_convert_images_to_webp_err_encode: 'تعذر كتابة WebP لهذا الملف. تم التخطي.',
	tool_bulk_convert_images_to_webp_err_fflate: 'تعذر بناء ZIP في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_bulk_convert_images_to_webp_err_too_many: 'الحد 20 صورة. لم تُضف الملفات الزائدة.',
	tool_bulk_convert_images_to_webp_err_unsupported:
		'لم يُرجع هذا المتصفح كائن WebP. يُتخطى الصف بدل كتابة JPEG.',
	tool_bulk_convert_images_to_webp_example:
		'تحميل مثال يضع كتلة معتمة وشعارًا شفافًا، يكتب ملفين .webp ويفعّل تنزيل ZIP. يبقى ثقب الشعار.',
	tool_bulk_convert_images_to_webp_example_title: 'مثال',
	tool_bulk_convert_images_to_webp_faq_a1:
		'لا. الفك والكتابة إلى WebP يجريان في هذا التبويب. تبقى على جهازك دون رفع إلى خادم. قد تُحمَّل أداة ZIP من CDN؛ صورك لا تغادر التبويب.',
	tool_bulk_convert_images_to_webp_faq_a2:
		'نعم. png إلى webp هنا: اختر الملفات، أبقِ الجودة قرب 0.8، حوّل الكل. الثقوب تبقى إن كان PNG يملك شفافية.',
	tool_bulk_convert_images_to_webp_faq_a3:
		'بعض تطبيقات البريد وأنظمة المحتوى ترفض WebP. لتلك المرفقات استخدم تحويل الصور إلى JPG بالجملة.',
	tool_bulk_convert_images_to_webp_faq_a4:
		'يُتخطى ذلك الصف. هذه الصفحة لا تكتب JPEG سرًا. جرّب كروم أو إيدج أو فايرفوكس حديثًا.',
	tool_bulk_convert_images_to_webp_faq_a5:
		'لا. يُحفظ الإطار الأول فقط كـ WebP ثابت، ويُذكر ذلك الصف.',
	tool_bulk_convert_images_to_webp_faq_q1: 'هل تُرفع الصور إلى خادم؟',
	tool_bulk_convert_images_to_webp_faq_q2: 'كيف أحوّل PNG إلى WebP هنا؟',
	tool_bulk_convert_images_to_webp_faq_q3: 'هل يقبل البريد ملفات WebP هذه؟',
	tool_bulk_convert_images_to_webp_faq_q4: 'ماذا لو تعذر على المتصفح كتابة WebP؟',
	tool_bulk_convert_images_to_webp_faq_q5: 'هل تبقى ملفات GIF المتحركة متحركة؟',
	tool_bulk_convert_images_to_webp_file_count_tpl: '{n} صور في الطابور',
	tool_bulk_convert_images_to_webp_how_body:
		'اختر الصور التي يجب أن تصبح WebP للموقع، حوّلها هنا دون خلفية JPEG، ثم خذ ZIP للملفات الناجحة.',
	tool_bulk_convert_images_to_webp_how_item_1: 'اختر الصور أو ملصقات PNG التي يجب أن تكون WebP على الموقع.',
	tool_bulk_convert_images_to_webp_how_item_2: 'أبقِ الجودة قرب 0.8 ما لم تحتج ملفًا أصغر. لا توجد خلفية JPEG.',
	tool_bulk_convert_images_to_webp_how_item_3: 'اضغط تحويل الكل. إن لم يكن toBlob من نوع WebP يفشل الصف بدل كتابة JPEG.',
	tool_bulk_convert_images_to_webp_how_item_4: 'تحتاج JPG للبريد؟ استخدم تحويل الصور إلى JPG بالجملة. تريد PNG بلا فقدان؟ تحويل الصور إلى PNG بالجملة.',
	tool_bulk_convert_images_to_webp_how_item_5: 'نزّل ZIP بعد نجاح ملف واحد على الأقل. تحميل المثال يعمل عند الفتح.',
	tool_bulk_convert_images_to_webp_how_title: 'طريقة التحويل إلى WebP',
	tool_bulk_convert_images_to_webp_quality_label: 'جودة WebP',
	tool_bulk_convert_images_to_webp_rules_body:
		'المخرج دائمًا WebP. هذه الصفحة لا تسطح الشفافية على خلفية JPEG ولا تتراجع إلى JPEG.',
	tool_bulk_convert_images_to_webp_rules_item_1:
		'تُحفظ الشفافية إن وُجدت في المصدر. مصدر JPEG لا يملك شفافية للحفظ.',
	tool_bulk_convert_images_to_webp_rules_item_2:
		'الجودة الافتراضية 0.8. اخفضها فقط إن احتاج ميزانية الموقع ملفًا أصغر.',
	tool_bulk_convert_images_to_webp_rules_item_3:
		'إن تعذر كتابة WebP يُتخطى الصف. فشل الفك يتخطى. الأسماء المكررة في ZIP تصبح اسم (2).webp.',
	tool_bulk_convert_images_to_webp_rules_item_4:
		'تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_webp_rules_title: 'ما تتوقعه',
	tool_bulk_convert_images_to_webp_sample: 'تحميل مثال',
	tool_bulk_convert_images_to_webp_status_compressing: 'جارٍ تحويل الدفعة إلى WebP…',
	tool_bulk_convert_images_to_webp_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل ZIP.',
	tool_bulk_convert_images_to_webp_status_ok: 'WebP جاهز',
	tool_bulk_convert_images_to_webp_status_skip: 'متخطى',
	tool_bulk_convert_images_to_webp_summary_tpl: '{ok} جاهزة · {skip} متخطاة',
	tool_bulk_convert_images_to_webp_title: 'تحويل الصور إلى WebP بالجملة',
	tool_bulk_convert_images_to_webp_usecase_1: 'تصغير صور الموقع المصغّرة إلى WebP دون قائمة تنسيقات.',
	tool_bulk_convert_images_to_webp_usecase_2: 'png إلى webp للملصقات التي تملك ثقوبًا أصلًا.',
	tool_bulk_convert_images_to_webp_usecase_3: 'أبقِ JPEG للبريد إن كان العميل يرفض WebP.',
	tool_bulk_convert_images_to_webp_usecases_title: 'متى يناسبك',
	tool_bulk_convert_images_to_webp_warn_anim: 'الملفات المتحركة: يُحفظ الإطار الأول فقط كـ WebP ثابت.',
	tool_bulk_convert_images_to_webp_warn_edge: 'ملف أعرض أو أطول من 8192 بكسل — توقّع بطئًا.',
	tool_bulk_convert_images_to_webp_warn_large: 'ملف أكبر من 25 م.ب — قد تنفد ذاكرة هذا التبويب.',
};

export default ar;
