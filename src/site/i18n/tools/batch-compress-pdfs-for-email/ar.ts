/**
 * i18n tool shard (batch-compress-pdfs-for-email / ar).
 * H1 يتبع بحث «ضغط ملفات PDF للبريد دفعة واحدة».
 */
import type { SiteLangDict } from '../../../types';

/** العربية: عدة مرفقات تُصغَّر كلٌّ على حدة داخل ZIP. */
const ar: SiteLangDict = {
	tool_batch_compress_pdfs_for_email_article:
		'قبل إرسال البريد صغّر عدة عروض أو عمليات مسح في هذا التبويب. داخل ZIP تبقى ملفات PDF منفصلة، وليست كتيّباً واحداً. الملف المشفّر أو الثقيل يُتخطى والباقي يُنزَّل. الملفات تبقى على الجهاز ولا تُرفع إلى خادم.',
	tool_batch_compress_pdfs_for_email_choose_files: 'اختر ملفات PDF',
	tool_batch_compress_pdfs_for_email_chip_email: 'إعداد البريد',
	tool_batch_compress_pdfs_for_email_chip_max: 'أقصى تصغير',
	tool_batch_compress_pdfs_for_email_chip_print: 'إعداد الطباعة',
	tool_batch_compress_pdfs_for_email_clear: 'مسح',
	tool_batch_compress_pdfs_for_email_col_after: 'بعد',
	tool_batch_compress_pdfs_for_email_col_before: 'قبل',
	tool_batch_compress_pdfs_for_email_col_name: 'الملف',
	tool_batch_compress_pdfs_for_email_col_status: 'الحالة',
	tool_batch_compress_pdfs_for_email_compress: 'ضغط الكل',
	tool_batch_compress_pdfs_for_email_desc:
		'ضغط ملفات PDF للبريد دفعة واحدة: كل ملف يُصغَّر وحده ويخرج ZIP بعدة ملفات؛ تبقى على الجهاز ولا تُرفع إلى خادم.',
	tool_batch_compress_pdfs_for_email_description:
		'ضغط ملفات PDF للبريد دفعة واحدة: أضف عدة عروض أو عمليات مسح، طبّق إعداد البريد على كل ملف، تخطَّ المشفّر أو الثقيل، ثم نزّل ZIP لملفات PDF منفصلة وليس كتيّباً مدموجاً. خطوات: اختر الرزمة، أبقِ إعداد البريد، اضغط الكل، انظر البايتات الموفَّرة. مثال: ملفان تجريبيان قصيران يبقيان ملفين داخل ZIP. الملفات تبقى على الجهاز ولا تُرفع إلى خادم.',
	tool_batch_compress_pdfs_for_email_download_zip: 'تنزيل ZIP',
	tool_batch_compress_pdfs_for_email_drop_hint: 'أسقط ملفات PDF (حتى 20). كل ملف يُضغط وحده. العمل يبقى في هذا التبويب.',
	tool_batch_compress_pdfs_for_email_empty: 'أضف ملفات PDF أولاً.',
	tool_batch_compress_pdfs_for_email_err_encrypted: 'محمي بكلمة مرور. تم التخطي.',
	tool_batch_compress_pdfs_for_email_err_fflate: 'تعذّر بناء ZIP في هذا المتصفح. جرّب متصفحاً أحدث.',
	tool_batch_compress_pdfs_for_email_err_load: 'تعذّر قراءة هذا PDF. تم التخطي.',
	tool_batch_compress_pdfs_for_email_err_pdflib: 'لم تُحمَّل مكتبة PDF. جرّب متصفحاً أحدث.',
	tool_batch_compress_pdfs_for_email_err_pdfjs: 'لم يُحمَّل pdf.js. جرّب متصفحاً أحدث.',
	tool_batch_compress_pdfs_for_email_err_too_many: 'الحد 20 ملفاً. الزائد لم يُضَف.',
	tool_batch_compress_pdfs_for_email_example:
		'تحميل مثال ينشئ ملفي PDF قصيرين بصورة، يطبّق إعداد البريد على كل منهما، يبقي ملفين في ZIP ويعرض البايتات الموفَّرة.',
	tool_batch_compress_pdfs_for_email_example_title: 'مثال',
	tool_batch_compress_pdfs_for_email_faq_a1:
		'لا. التحويل الشبكي وإعادة البناء يجريان في هذا التبويب. الملفات تبقى على الجهاز ولا تُرفع إلى خادم. قد تُحمَّل pdf.js وpdf-lib ومساعد ZIP من CDN؛ ملفاتك لا تغادر التبويب.',
	tool_batch_compress_pdfs_for_email_faq_a2:
		'لا. تحصل على ZIP فيه N من ملفات PDF. الدمج في كتيّب واحد هو دمج PDF — مهمة أخرى، ليست هذه الصفحة.',
	tool_batch_compress_pdfs_for_email_faq_a3:
		'المسوحات بالصور غالباً تصغر. ملف النص فقط قد لا يتحرك تقريباً. الجدول يعرض الحجم قبل وبعد.',
	tool_batch_compress_pdfs_for_email_faq_a4:
		'ضغط PDF يعالج ملفاً واحداً. هذه الصفحة تشارك إعداد بريد على رزمة وتعبئ الناجح في ZIP.',
	tool_batch_compress_pdfs_for_email_faq_a5:
		'يُتخطى ذلك الصف ويكمل الباقي. أزل القفل في موضع آخر ثم أضفه مجدداً.',
	tool_batch_compress_pdfs_for_email_faq_q1: 'هل تُرفع ملفات PDF إلى خادم؟',
	tool_batch_compress_pdfs_for_email_faq_q2: 'هل يُدمج كل شيء في PDF واحد؟',
	tool_batch_compress_pdfs_for_email_faq_q3: 'هل المسوحات تصغر أكثر من ملفات النص؟',
	tool_batch_compress_pdfs_for_email_faq_q4: 'ما الفرق عن ضغط PDF؟',
	tool_batch_compress_pdfs_for_email_faq_q5: 'ماذا لو كان أحد الملفات مشفّراً؟',
	tool_batch_compress_pdfs_for_email_file_count_tpl: '{n} ملفات PDF في الصف',
	tool_batch_compress_pdfs_for_email_how_body:
		'ضع عدة مرفقات في الصف، اختر إعداد البريد، اضغط كل ملف على حدة، ثم خذ ZIP للملفات التي نجحت.',
	tool_batch_compress_pdfs_for_email_how_item_1: 'اختر العروض أو المسوحات التي يجب أن تمر بحد المرفق.',
	tool_batch_compress_pdfs_for_email_how_item_2: 'أبقِ إعداد البريد إلا إذا احتجت الطباعة (أوضح) أو أقصى تصغير.',
	tool_batch_compress_pdfs_for_email_how_item_3: 'اضغط «ضغط الكل». الملفات تبقى منفصلة. لا شيء يُلصق في كتيّب واحد.',
	tool_batch_compress_pdfs_for_email_how_item_4: 'المشفّر أو التالف يُتخطى. الملخص يجمع البايتات الموفَّرة من النجاحات.',
	tool_batch_compress_pdfs_for_email_how_item_5: 'نزّل ZIP عندما ينجح ملف واحد على الأقل. لملف واحد فقط استخدم ضغط PDF.',
	tool_batch_compress_pdfs_for_email_how_title: 'كيف تضغط الرزمة للبريد',
	tool_batch_compress_pdfs_for_email_preset_label: 'إعداد مشترك',
	tool_batch_compress_pdfs_for_email_rules_body:
		'كل PDF يُحوَّل إلى صفحات JPEG ثم يُعاد بناؤه. الخرج دائماً ZIP لملفات PDF منفصلة.',
	tool_batch_compress_pdfs_for_email_rules_item_1:
		'البريد هو الافتراضي: مقياس حوالي 1.0 وجودة JPEG حوالي 0.55. الطباعة ألطف. الأقصى يصغّر أكثر.',
	tool_batch_compress_pdfs_for_email_rules_item_2:
		'التشفير أو التلف أو نفاد الذاكرة يتخطى ذلك الصف فقط. الأسماء المكررة في ZIP تصبح اسم (2).pdf.',
	tool_batch_compress_pdfs_for_email_rules_item_3:
		'ملف النص فقط قد لا يصغر تقريباً. هذا متوقع؛ الجدول ما زال يعرض الأحجام.',
	tool_batch_compress_pdfs_for_email_rules_item_4:
		'الملفات تبقى على الجهاز ولا تُرفع إلى خادم.',
	tool_batch_compress_pdfs_for_email_rules_title: 'ما الذي تتوقعه',
	tool_batch_compress_pdfs_for_email_sample: 'تحميل مثال',
	tool_batch_compress_pdfs_for_email_status_compressing: 'جارٍ ضغط كل PDF للبريد…',
	tool_batch_compress_pdfs_for_email_status_done: 'انتهت الدفعة — راجع الجدول ثم نزّل ZIP.',
	tool_batch_compress_pdfs_for_email_status_ok: 'مضغوط',
	tool_batch_compress_pdfs_for_email_status_skip: 'متخطى',
	tool_batch_compress_pdfs_for_email_summary_tpl: '{ok} جاهز · {skip} متخطى · وُفّر {saved}',
	tool_batch_compress_pdfs_for_email_title: 'ضغط ملفات PDF للبريد دفعة واحدة',
	tool_batch_compress_pdfs_for_email_usecase_1: 'رزمة عروض تتجاوز معاً حد الصندوق 25 ميغابايت.',
	tool_batch_compress_pdfs_for_email_usecase_2: 'إرسال إيصالات ممسوحة كمرفقات منفصلة، لا ككتيّب واحد.',
	tool_batch_compress_pdfs_for_email_usecase_3: 'تصغير عدة PDF قبل البريد دون دمجها.',
	tool_batch_compress_pdfs_for_email_usecases_title: 'متى يناسبك',
	tool_batch_compress_pdfs_for_email_warn_large: 'هناك ملف أكبر من 40 ميغابايت — قد تنفد ذاكرة هذا التبويب في ذلك الصف.',
};

export default ar;
