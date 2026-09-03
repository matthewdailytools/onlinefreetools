/**
 * شريحة i18n (bulk-convert-images-to-jpg / ar).
 * عنوان H1 يتبع بحث «تحويل الصور إلى JPG بالجملة».
 */
import type { SiteLangDict } from '../../../types';

/** العربية: عندما يقبل النموذج JPG فقط؛ نبرة أداة يومية. */
const ar: SiteLangDict = {
	tool_bulk_convert_images_to_jpg_article:
		'إذا كان المرفق يجب أن يكون .jpg فحوّل دفعة من الصور وشعارات PNG ولقطات HEIC في هذا التبويب: خلفية واحدة للشفافية، وتُتخطى الملفات الفاشلة، ثم نزّل ZIP. تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_jpg_chip_png: 'PNG → JPG',
	tool_bulk_convert_images_to_jpg_chip_white: 'خلفية بيضاء',
	tool_bulk_convert_images_to_jpg_choose_files: 'اختيار الصور',
	tool_bulk_convert_images_to_jpg_clear: 'مسح',
	tool_bulk_convert_images_to_jpg_col_after: 'بعد',
	tool_bulk_convert_images_to_jpg_col_before: 'قبل',
	tool_bulk_convert_images_to_jpg_col_name: 'ملف',
	tool_bulk_convert_images_to_jpg_col_status: 'الحالة',
	tool_bulk_convert_images_to_jpg_convert: 'تحويل الكل',
	tool_bulk_convert_images_to_jpg_desc:
		'تحويل الصور إلى JPG بالجملة بخلفية مشتركة وتنزيل ZIP؛ تبقى على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_jpg_description:
		'تحويل الصور إلى JPG بالجملة: أضف صورًا أو شعارات PNG أو لقطات HEIC، ادهن خلفية واحدة خلف الشفافية، اكتب .jpg هنا، تخطَّ الفاشل ونزّل ZIP. خطوات: اختر الدفعة، أبقِ الخلفية البيضاء ما لم يُطلب أسود، حوّل الكل. مثال: صورة مع شعار مثقوب على أبيض تصبح ملفين .jpg. تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_jpg_download_zip: 'تنزيل ZIP',
	tool_bulk_convert_images_to_jpg_drop_hint:
		'أسقط PNG أو JPEG أو WebP أو GIF أو HEIC (حتى 20). التحويل يبقى في هذا التبويب.',
	tool_bulk_convert_images_to_jpg_empty: 'أضف صورًا أولًا.',
	tool_bulk_convert_images_to_jpg_err_decode: 'تعذر فك هذا الملف (قد يحتاج HEIC متصفحًا آخر). تم التخطي.',
	tool_bulk_convert_images_to_jpg_err_encode: 'تعذر كتابة .jpg لهذا الملف. تم التخطي.',
	tool_bulk_convert_images_to_jpg_err_fflate: 'تعذر بناء ZIP في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_bulk_convert_images_to_jpg_err_too_many: 'الحد 20 صورة. لم تُضف الملفات الزائدة.',
	tool_bulk_convert_images_to_jpg_example:
		'تحميل مثال يضع كتلة معتمة وشعارًا شفافًا، يرسمهما على أبيض، يُظهر اسمي .jpg ويفعّل تنزيل ZIP.',
	tool_bulk_convert_images_to_jpg_example_title: 'مثال',
	tool_bulk_convert_images_to_jpg_faq_a1:
		'لا. الفك والكتابة إلى .jpg يجريان في هذا التبويب. تبقى على جهازك دون رفع إلى خادم. قد تُحمَّل أداة ZIP من CDN؛ صورك لا تغادر التبويب.',
	tool_bulk_convert_images_to_jpg_faq_a2:
		'نعم. تحويل PNG إلى JPG هنا: اختر الملفات، أبقِ الخلفية البيضاء حتى لا تصبح الثقوب كتلًا سوداء، ثم حوّل الكل.',
	tool_bulk_convert_images_to_jpg_faq_a3:
		'إن تعذر فك HEIC تُتخطى تلك الصف وتُعبَّأ البقية. جرّب سفاري أو حوّل الملف على الهاتف أولًا.',
	tool_bulk_convert_images_to_jpg_faq_a4:
		'لا. JPEG وJPG ناتج واحد. الأسماء تنتهي بـ .jpg.',
	tool_bulk_convert_images_to_jpg_faq_a5:
		'هذه الأداة تغيّر اللاحقة إلى JPG. تصغير صور العرض نحو 200 ك.ب هو ضغط صور المنتجات بالجملة.',
	tool_bulk_convert_images_to_jpg_faq_q1: 'هل تُرفع الصور إلى خادم؟',
	tool_bulk_convert_images_to_jpg_faq_q2: 'كيف أحوّل PNG إلى JPG هنا؟',
	tool_bulk_convert_images_to_jpg_faq_q3: 'ماذا لو فشل تحويل HEIC إلى JPG؟',
	tool_bulk_convert_images_to_jpg_faq_q4: 'هل أحتاج أداة JPEG منفصلة عن JPG؟',
	tool_bulk_convert_images_to_jpg_faq_q5: 'هل هذا ضغط للصور؟',
	tool_bulk_convert_images_to_jpg_file_count_tpl: '{n} صور في الطابور',
	tool_bulk_convert_images_to_jpg_how_body:
		'عندما يطلب النموذج JPG ضع الصور في الطابور، شارك خلفية للبكسل الشفاف، حوّلها هنا ثم خذ ZIP للملفات الناجحة.',
	tool_bulk_convert_images_to_jpg_how_item_1: 'اختر الصور أو ملفات PNG أو لقطات HEIC التي يقبلها النموذج كـ JPG فقط.',
	tool_bulk_convert_images_to_jpg_how_item_2: 'أبقِ الخلفية البيضاء ما لم يُطلب أسود. JPG لا يحفظ الثقوب.',
	tool_bulk_convert_images_to_jpg_how_item_3: 'اخفض الجودة قليلًا إن كان مرفق البريد يجب أن يبقى صغيرًا — المهمة تحويل لا مطاردة 200 ك.ب.',
	tool_bulk_convert_images_to_jpg_how_item_4: 'اضغط تحويل الكل. يُتخطى HEIC غير المقروء وتبقى البقية .jpg.',
	tool_bulk_convert_images_to_jpg_how_item_5: 'نزّل ZIP بعد نجاح ملف واحد على الأقل. تحميل المثال يعمل عند الفتح.',
	tool_bulk_convert_images_to_jpg_how_title: 'طريقة التحويل إلى JPG',
	tool_bulk_convert_images_to_jpg_jpeg_bg_black: 'أسود',
	tool_bulk_convert_images_to_jpg_jpeg_bg_custom: 'مخصص',
	tool_bulk_convert_images_to_jpg_jpeg_bg_label: 'الخلفية خلف الشفافية',
	tool_bulk_convert_images_to_jpg_jpeg_bg_white: 'أبيض',
	tool_bulk_convert_images_to_jpg_quality_label: 'جودة JPG',
	tool_bulk_convert_images_to_jpg_rules_body:
		'JPG بلا قناة شفافية. تُرسم كل الملفات على الخلفية نفسها ثم تُحفظ .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_1:
		'أسماء الإخراج تنتهي دائمًا بـ .jpg.',
	tool_bulk_convert_images_to_jpg_rules_item_2:
		'تُملأ البكسلات الشفافة بالخلفية المشتركة قبل الحفظ. لا يوجد وضع بلا خلفية يترك كتلًا سوداء بلا تفسير.',
	tool_bulk_convert_images_to_jpg_rules_item_3:
		'فشل الفك أو الكتابة يتخطى ذلك الصف. الأسماء المكررة في ZIP تصبح اسم (2).jpg. المتحرك يأخذ الإطار الأول.',
	tool_bulk_convert_images_to_jpg_rules_item_4:
		'تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_bulk_convert_images_to_jpg_rules_title: 'ما تتوقعه',
	tool_bulk_convert_images_to_jpg_sample: 'تحميل مثال',
	tool_bulk_convert_images_to_jpg_status_compressing: 'جارٍ تحويل الدفعة إلى JPG…',
	tool_bulk_convert_images_to_jpg_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل ZIP.',
	tool_bulk_convert_images_to_jpg_status_ok: 'JPG جاهز',
	tool_bulk_convert_images_to_jpg_status_skip: 'متخطى',
	tool_bulk_convert_images_to_jpg_summary_tpl: '{ok} جاهزة · {skip} متخطاة',
	tool_bulk_convert_images_to_jpg_title: 'تحويل الصور إلى JPG بالجملة',
	tool_bulk_convert_images_to_jpg_usecase_1: 'نموذج تسجيل يرفض PNG ولا يقبل إلا مرفقات JPG.',
	tool_bulk_convert_images_to_jpg_usecase_2: 'إرسال حزمة صور منتجات للمطبعة بشرط أن تكون .jpg.',
	tool_bulk_convert_images_to_jpg_usecase_3: 'صور HEIC من الهاتف لا يفتحها ويندوز — حوّل ما يستطيع هذا المتصفح فكّه.',
	tool_bulk_convert_images_to_jpg_usecases_title: 'متى يناسبك',
	tool_bulk_convert_images_to_jpg_warn_anim: 'الملفات المتحركة: يُحوَّل الإطار الأول فقط.',
	tool_bulk_convert_images_to_jpg_warn_edge: 'ملف أعرض أو أطول من 8192 بكسل — توقّع بطئًا.',
	tool_bulk_convert_images_to_jpg_warn_large: 'ملف أكبر من 25 م.ب — قد تنفد ذاكرة هذا التبويب.',
};

export default ar;
