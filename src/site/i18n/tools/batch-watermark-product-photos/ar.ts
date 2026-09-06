/**
 * شريحة i18n (batch-watermark-product-photos / ar).
 * عنوان H1 يتبع بحث «وضع علامة مائية على صور المنتجات دفعة واحدة».
 */
import type { SiteLangDict } from '../../../types';

/** العربية: ختم حقوق واحد على دفعة صور عرض. */
const ar: SiteLangDict = {
	tool_batch_watermark_product_photos_anchor_bc: 'أسفل',
	tool_batch_watermark_product_photos_anchor_bl: 'أسفل يسار',
	tool_batch_watermark_product_photos_anchor_br: 'أسفل يمين',
	tool_batch_watermark_product_photos_anchor_label: 'المرساة',
	tool_batch_watermark_product_photos_anchor_mc: 'وسط',
	tool_batch_watermark_product_photos_anchor_ml: 'وسط يسار',
	tool_batch_watermark_product_photos_anchor_mr: 'وسط يمين',
	tool_batch_watermark_product_photos_anchor_tc: 'أعلى',
	tool_batch_watermark_product_photos_anchor_tl: 'أعلى يسار',
	tool_batch_watermark_product_photos_anchor_tr: 'أعلى يمين',
	tool_batch_watermark_product_photos_apply: 'تطبيق على الكل',
	tool_batch_watermark_product_photos_article:
		'اختم سطر حقوق واحدًا على دفعة صور عرض في هذا التبويب. حجم الخط يتبع الضلع القصير لكل صورة حتى تسقط الأفقية والعمودية في الركن النسبي نفسه. عاين إطارًا، طبّق على الكل، تخطَّ اللوحات الصغيرة، نزّل ZIP. تبقى على جهازك دون رفع إلى خادم.',
	tool_batch_watermark_product_photos_chip_draft: 'DRAFT مائل',
	tool_batch_watermark_product_photos_choose_files: 'اختيار الصور',
	tool_batch_watermark_product_photos_clear: 'مسح',
	tool_batch_watermark_product_photos_col_after: 'بعد',
	tool_batch_watermark_product_photos_col_before: 'قبل',
	tool_batch_watermark_product_photos_col_name: 'ملف',
	tool_batch_watermark_product_photos_col_status: 'الحالة',
	tool_batch_watermark_product_photos_color_label: 'اللون',
	tool_batch_watermark_product_photos_desc:
		'وضع علامة مائية على صور المنتجات دفعة واحدة بحجم الضلع القصير ومعاينة ثم تطبيق على الكل وZIP؛ تبقى على جهازك دون رفع إلى خادم.',
	tool_batch_watermark_product_photos_description:
		'وضع علامة مائية على صور المنتجات دفعة واحدة: أضف دفعة صور عرض، حدّد ختمًا بحجم الضلع القصير، عاين إطارًا، طبّق على الكل، تخطَّ اللوحات الصغيرة، نزّل ZIP. خطوات: اختر الدفعة، أبقِ علامة الركن، عاين واحدة، طبّق على الكل. مثال: أفقية وعمودية تشتركان في SAMPLE نسبي. تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_batch_watermark_product_photos_download_zip: 'تنزيل ZIP',
	tool_batch_watermark_product_photos_drop_hint: 'أسقط JPEG أو PNG أو WebP للعرض (حتى 20). الختم يبقى في هذا التبويب.',
	tool_batch_watermark_product_photos_empty: 'أضف صورًا أولًا.',
	tool_batch_watermark_product_photos_empty_text: 'اكتب نص الختم قبل التطبيق.',
	tool_batch_watermark_product_photos_err_decode: 'تعذر فك هذا الملف. تم التخطي.',
	tool_batch_watermark_product_photos_err_encode: 'تعذر كتابة هذا الملف. تم التخطي.',
	tool_batch_watermark_product_photos_err_fflate: 'تعذر بناء ZIP في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_batch_watermark_product_photos_err_tiny: 'الضلع القصير أقل من 64 بكسل — تُتخطى تلك الصف.',
	tool_batch_watermark_product_photos_err_too_many: 'الحد 20 صورة. لم تُضف الملفات الزائدة.',
	tool_batch_watermark_product_photos_example:
		'تحميل مثال يضع كتلة أفقية وعمودية، يضبط SAMPLE، يعاين الأولى، يطبّق العلامة النسبية نفسها على الاثنتين ويفعّل تنزيل ZIP.',
	tool_batch_watermark_product_photos_example_title: 'مثال',
	tool_batch_watermark_product_photos_faq_a1:
		'لا. الفك والختم على Canvas يجريان في هذا التبويب. تبقى على جهازك دون رفع إلى خادم. قد تُحمَّل أداة ZIP من هذا الموقع؛ صورك لا تغادر التبويب.',
	tool_batch_watermark_product_photos_faq_a2:
		'لا. الحجم نسبة من الضلع القصير والمراسي التسعة كسور من تلك اللوحة. العمودية والأفقية تبقيان الركن النسبي نفسه.',
	tool_batch_watermark_product_photos_faq_a3:
		'لا. هذه الصفحة تختم الصور. ختم PDF عمل آخر — استخدم أداة PDF عندما تحتاج صفحات لا JPEG عرض.',
	tool_batch_watermark_product_photos_faq_a4:
		'إضافة علامة مائية صورة واحدة مع ضبط بالبكسل. هذه الصفحة تشارك ختمًا على دفعة، تعاين واحدة ثم تطبّق الكل في ZIP.',
	tool_batch_watermark_product_photos_faq_a5:
		'يُبحث أيضًا عن وسم الصور بالجملة. في هذا الموقع تلك المهمة هنا؛ لا يوجد عنوان bulk-watermark ثانٍ.',
	tool_batch_watermark_product_photos_faq_q1: 'هل تُرفع الصور إلى خادم؟',
	tool_batch_watermark_product_photos_faq_q2: 'هل تنزاح الأفقية عن العمودية؟',
	tool_batch_watermark_product_photos_faq_q3: 'هل يمكن ختم PDF هنا؟',
	tool_batch_watermark_product_photos_faq_q4: 'ما الفرق عن إضافة علامة مائية؟',
	tool_batch_watermark_product_photos_faq_q5: 'بحثت عن وسم الصور بالجملة — أهذه الصفحة؟',
	tool_batch_watermark_product_photos_file_count_tpl: '{n} صور في الطابور',
	tool_batch_watermark_product_photos_format_jpeg: 'JPEG',
	tool_batch_watermark_product_photos_format_label: 'المخرج',
	tool_batch_watermark_product_photos_format_png: 'PNG',
	tool_batch_watermark_product_photos_how_body:
		'ضع الدفعة في الطابور، حدّد ختمًا، عاين إطارًا، ثم طبّق العلامة النسبية نفسها على كل الصور وخذ ZIP.',
	tool_batch_watermark_product_photos_how_item_1: 'اختر صور العرض التي تحتاج سطر الحقوق نفسه.',
	tool_batch_watermark_product_photos_how_item_2: 'اضبط النص والركن ونسبة الضلع القصير. الافتراضي SAMPLE أسفل اليمين 8%.',
	tool_batch_watermark_product_photos_how_item_3: 'اضغط معاينة واحدة. تحقق أن الأفقية والعمودية في الركن النسبي نفسه.',
	tool_batch_watermark_product_photos_how_item_4: 'اضغط تطبيق على الكل. اللوحات الأقصر من 64 بكسل تُتخطى. JPEG يدهن خلفية بيضاء أولًا.',
	tool_batch_watermark_product_photos_how_item_5: 'نزّل ZIP بعد نجاح ملف واحد على الأقل. لتعديل صورة واحدة استخدم إضافة علامة مائية.',
	tool_batch_watermark_product_photos_how_title: 'طريقة الختم على الدفعة',
	tool_batch_watermark_product_photos_opacity_label: 'العتامة',
	tool_batch_watermark_product_photos_pct_label: 'الحجم مقابل الضلع القصير',
	tool_batch_watermark_product_photos_preview: 'معاينة واحدة',
	tool_batch_watermark_product_photos_rotation_label: 'الزاوية',
	tool_batch_watermark_product_photos_rules_body:
		'حجم الخط بالبكسل هو الضلع القصير مضروبًا في النسبة. المراسي كسور من تلك اللوحة لا بكسل ثابت.',
	tool_batch_watermark_product_photos_rules_item_1:
		'الختم الافتراضي: SAMPLE، أسفل يمين، 8% من min(العرض، الارتفاع)، عتامة 45%. JPEG بخلفية بيضاء.',
	tool_batch_watermark_product_photos_rules_item_2:
		'ضلع قصير أقل من 64 بكسل يفشل ذلك الصف. النص الفارغ يعطّل التطبيق. فشل الفك يتخطى.',
	tool_batch_watermark_product_photos_rules_item_3:
		'DRAFT المائل يرصف الكلمة على الإطار. الأسماء المكررة في ZIP تصبح اسم (2).jpg أو .png.',
	tool_batch_watermark_product_photos_rules_item_4:
		'تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_batch_watermark_product_photos_rules_title: 'ما تتوقعه',
	tool_batch_watermark_product_photos_sample: 'تحميل مثال',
	tool_batch_watermark_product_photos_status_applying: 'جارٍ ختم الدفعة…',
	tool_batch_watermark_product_photos_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل ZIP.',
	tool_batch_watermark_product_photos_status_ok: 'مختوم',
	tool_batch_watermark_product_photos_status_preview: 'المعاينة هي أول صورة في الطابور.',
	tool_batch_watermark_product_photos_status_skip: 'متخطى',
	tool_batch_watermark_product_photos_status_tiny: 'صغير جدًا',
	tool_batch_watermark_product_photos_summary_tpl: '{ok} مختومة · {skip} متخطاة',
	tool_batch_watermark_product_photos_text_label: 'نص الختم',
	tool_batch_watermark_product_photos_title: 'وضع علامة مائية على صور المنتجات دفعة واحدة',
	tool_batch_watermark_product_photos_usecase_1: 'ختم اسم المتجر على مجلد صور عرض قبل النشر.',
	tool_batch_watermark_product_photos_usecase_2: 'وسم العينات SAMPLE حتى لا يستخدم المشتري المعاينة كعرض.',
	tool_batch_watermark_product_photos_usecase_3: 'إضافة سطر حقوق لعدة صور دون فتح كل ملف في إضافة علامة مائية.',
	tool_batch_watermark_product_photos_usecases_title: 'متى يناسبك',
	tool_batch_watermark_product_photos_warn_anim: 'الملفات المتحركة: يُختم الإطار الأول فقط.',
	tool_batch_watermark_product_photos_warn_edge: 'ملف أعرض أو أطول من 8192 بكسل — توقّع بطئًا.',
	tool_batch_watermark_product_photos_warn_large: 'ملف أكبر من 25 م.ب — قد تنفد ذاكرة هذا التبويب.',
};

export default ar;
