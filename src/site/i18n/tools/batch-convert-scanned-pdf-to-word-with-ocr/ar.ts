/**
 * i18n tool shard (batch-convert-scanned-pdf-to-word-with-ocr / ar).
 * الكلمة المحلية للعنوان: حوّل ملفات PDF الممسوحة إلى وورد بالتعرّف الضوئي دفعة واحدة.
 * مفاتيح القاموس تطابق en.ts؛ القيم إعادة كتابة مستقلة بالفصحى لا ترجمة حرفية.
 */
import type { SiteLangDict } from '../../../types';

/** نصوص الواجهة والعناوين والأسئلة لهذه الأداة بالعربية. */
const ar: SiteLangDict = {
	tool_batch_convert_scanned_pdf_to_word_with_ocr_advanced: 'إعدادات متقدمة (اختياري)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_article:
		'تحصل على وورد من طابور مسوحات: أضف ملفات PDF الممسوحة، اضغط «تحويل الكل»، ثم «تنزيل وورد». الافتراض مستند واحد للدفعة كلها؛ يمكنك التبديل إلى وورد لكل PDF (إن نجح أكثر من ملف يظهر «تنزيل ZIP»). اسم الملف يصير عنوانًا، وكل صفحة نجحت تصير فقرات قابلة للتحرير؛ صورة الصفحة فوق النص افتراضيًا للمراجعة. الصفحة الضبابية تُتخطى والباقي يبقى في المستند نفسه. الملفات تبقى على جهازك دون رفع إلى خادم. إن كان النص قابلًا للتحديد أصلًا فاستخدم «تحويل PDF إلى مستند وورد». أكوام الصور مكانها «حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي».',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_choose_files: 'اختر ملفات PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_clear: 'مسح',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_name: 'الملف',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_notes: 'ملاحظات',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_pages: 'الصفحات',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_col_status: 'الحالة',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_convert_all: 'تحويل الكل',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_count_tpl: '{n} ملفات (الحد 5، و20 صفحة)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_desc:
		'حوّل ملفات PDF الممسوحة إلى وورد بالتعرّف الضوئي دفعة واحدة: صفّها، حوّل الكل، نزّل وورد — تبقى على جهازك ولا تُرفع إلى خادم.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_description:
		'حوّل PDF ممسوحًا إلى وورد في هذا التبويب: الصفحات تُرسَم ثم تُقرأ، ثم تنزّل مستندًا واحدًا يمكن تعديله. الخطوات: أضف ملفات PDF، تحويل الكل، تنزيل وورد. مثال: مسح من صفحتين مطبوعين يصير مستندًا بعنوانين وصورة صفحة اختيارية. يُبحث عنه أيضًا باسم OCR من PDF إلى وورد أو عدة ملفات مسح إلى وورد. الملفات تبقى على جهازك دون رفع إلى خادم. طبقة النص الجاهزة مكانها «تحويل PDF إلى مستند وورد». الصور مكانها «حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي».',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_word: 'تنزيل وورد',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_download_zip: 'تنزيل ZIP',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_drop_hint: 'أسقط هنا ملفات PDF الممسوحة (حد أقصى 5 ملفات و20 صفحة). المعالجة تبقى في هذا التبويب.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_empty: 'أضف أولًا ملفات PDF ممسوحة.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_docx: 'تعذّر تجميع ملف وورد في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_fflate: 'تعذّر تجميع ملف ZIP في هذا المتصفح. جرّب متصفحًا أحدث.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_empty:
		'لم يُعثَر على نص مطبوع في تلك الصفحة. تُخطّيت. جرّب مسحًا أوضح، لا ملاحظات بخط اليد.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_encrypted: 'هذا الـ PDF محمي بكلمة مرور. لم يُضَف.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_engine:
		'فشل تحميل رسم الـ PDF أو محرك التعرّف. حدّث الصفحة ثم تحويل الكل. الصفحات المنتهية تبقى قابلة للتنزيل.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_image:
		'هنا ملفات PDF الممسوحة فقط، لا الصور. لـ JPG أو PNG أو WebP استخدم «حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي». لم يُضَف ذلك الملف.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_load: 'تعذّر قراءة ذلك الـ PDF. تُخطّي.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_pdfjs: 'تعذّر تحميل عارض الـ PDF في هذا التبويب. حدّث ثم أعد المحاولة.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_size: 'أكبر من 12 ميغابايت. اضغط الملف أولًا. لم يُضَف.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many: 'الحد خمسة ملفات PDF. الزائد لم يُضَف.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_err_too_many_pages: 'الدفعة كاملة تقرأ 20 صفحة كحد أقصى. الملفات الزائدة لم تُضَف.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example:
		'«تحميل مثال» يضع sample-scan.pdf (الصفحة 1: ONLINEFREETOOLS وThe quick brown fox؛ الصفحة 2: SAMPLE TWO وPrinted sample page)، يشغّل تحويل الكل، ويفعّل تنزيل وورد بعنوان واحد وصفحتين.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_example_title: 'مثال',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a1:
		'لا. ملفات PDF تبقى في تبويب المتصفح هذا. سكربتات الرسم والتعرّف وتجميع وورد تُحمَّل من هذا الموقع؛ الملفات لا تُرفع إلى خوادمنا.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a2:
		'«تحويل PDF إلى مستند وورد» ينسخ طبقة نص موجودة ولا يشغّل تعرّفًا ضوئيًا. هنا تُرسَم كل صفحة ثم تُقرأ الصورة، فيصير المسح بلا نص قابل للتحديد فقرات. إن كنت تظلل الكلمات أصلًا فاذهب إلى تلك الأداة.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a3:
		'«حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي» طابور صور. منطقة الإفلات هنا تقبل PDF فقط؛ إفلات JPG يُرفَض عمدًا.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a4:
		'لا. الصفحة الفاشلة تُتخطى؛ بقية الصفحات وبقية ملفات PDF تدخل ملف وورد نفسه.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a5:
		'في الوضع الافتراضي «وورد واحد للدفعة» كل PDF ناجح عنوان (اسم الملف). كل صفحة ناجحة: صورة اختيارية ثم فقرات التعرّف ثم فاصل صفحة. إن أردت مستندات منفصلة فاختر ووردًا لكل PDF. الجداول والأعمدة لن تطابق تخطيط الأصل.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a6:
		'لا. الصور مكانها «حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي». منطقة الإفلات هنا PDF فقط.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a7:
		'الحروف المطبوعة أوضح. الخط المتصل كثيرًا ما يفشل في تلك الصفحة. هذه ليست أداة للمخطوطات.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a8:
		'الناتج وورد (DOCX)، لا ملف TXT ولا PDF قابل للبحث يُعاد كتابته. من يبحث عن تحويل PDF ممسوح إلى وورد أو OCR من PDF إلى وورد لمسح ورقي يجد العمل هنا. تفريغ طبقة النص مكانه «استخراج نص من PDF».',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a9:
		'حتى خمسة ملفات PDF، كل منها 12 ميغابايت، و20 صفحة للدفعة كلها. ملف واحد أيضًا يمرّ بتحويل الكل ثم تنزيل وورد؛ لا يوجد عنوان منفصل للملف المفرد.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_a10:
		'نعم. اختر ووردًا لكل PDF ثم تحويل الكل. ملف ناجح واحد يبقى زرّه «تنزيل وورد». ملفان ناجحان أو أكثر يستخدمان «تنزيل ZIP»، وفيه .docx لكل ملف إدخال. الدمج في وورد واحد هو الافتراض.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q1: 'هل تُرفع ملفات PDF إلى خادم؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q2: 'إن كان النص في الـ PDF قابلًا للتحديد، هل أستخدم «تحويل PDF إلى مستند وورد»؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q3: 'عندي صور JPG لا PDF. أين أضعها؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q4: 'إن فشلت صفحة، هل يخرج وورد فارغ؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q5: 'كيف يبدو مستند وورد الناتج؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q6: 'هل أستطيع إفلات صور JPG هنا؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q7: 'هل يقرأ التعرّف الضوئي خط اليد؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q8: 'هل أحصل على TXT أو PDF قابل للبحث، أم وورد فقط؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q9: 'ما حدود الملفات والصفحات؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_faq_q10: 'هل أستطيع إخراج وورد مستقل لكل PDF بدل دمجها؟',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_body:
		'من مسح ورقي إلى وورد يمكن تعديله: أضف ملفات PDF، اضغط تحويل الكل (أول نقرة تحمّل الرسم ومحرك التعرّف في هذا التبويب ثم تقرأ صفحة بعد صفحة)، ثم تنزيل وورد.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_1: 'أسقط ملف PDF ممسوحًا أو أكثر (أو اختر الملفات).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_2: 'اختياري: اختر شريحة لغة للدفعة كلها (الصينية والإنجليزية هما الافتراض).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_3:
		'اختياري: أبقِ ووردًا واحدًا للدفعة، أو اختر ووردًا لكل PDF (عدة ملفات ناجحة ثم تنزيل ZIP).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_4:
		'اضغط تحويل الكل — أول تشغيل يحمّل رسم الـ PDF ومحرك التعرّف في هذا التبويب، ثم يقرأ صفحة تلو أخرى. الصفحة الفاشلة تُتخطى.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_item_5:
		'اضغط تنزيل وورد — أو تنزيل ZIP إن اخترت ووردًا لكل PDF ونجح أكثر من ملف.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_how_title: 'خطوات الاستخدام',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_elapsed_tpl: 'مرّ {s} ث',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_hint: 'حدّث الصفحة ثم تحويل الكل. الصفحات المقروءة تبقى قابلة للتنزيل.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_fail_title: 'توقف التحويل',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_api: "جارٍ تشغيل المُتعرّف…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_core: "التشغيل الأول: تحميل محرّك التعرّف (~4 مب). ابقَ في هذه الصفحة — قد يستغرق دقيقة.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_docx: "جارٍ تحميل مُجمّع وورد (~0.7 مب)…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_lang: "التشغيل الأول: تحميل حزمة اللغة (عدة مب). انتظر؛ المرات التالية تعيد الاستخدام.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_pdf: "التشغيل الأول: تحميل رسّام الـ PDF. ابقَ في هذه الصفحة.",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_load_script: "جارٍ تحميل سكربتات التعرّف…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_next: 'انتهى. الخطوة التالية: تنزيل وورد، أو تنزيل ZIP إن اخترت ووردًا لكل PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_pct_tpl: '{pct}%',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_load: 'تحميل',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_pack: 'تجميع',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_read: 'قراءة',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_step_render: 'رسم',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_title: 'تقدّم التحويل',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_hud_working: 'يبدأ…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ar: 'العربية',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_en: 'الإنجليزية',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_ja: 'اليابانية',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_legend: 'لغة التعرّف للدفعة كلها',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh: 'الصينية',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_lang_zh_en: 'الصينية + الإنجليزية',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge: 'أطول ضلع قبل القراءة (بكسل)',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_max_edge_hint: 'الافتراض 2048. الأصغر أخف على الهاتف.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_hint:
		'الافتراض وورد واحد. وورد لكل PDF: تنزيل وورد إن نجح ملف واحد، وتنزيل ZIP إن نجح أكثر من ملف.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_legend: 'تصدير وورد',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_merge: 'وورد واحد للدفعة كلها',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_output_split: 'وورد مستقل لكل PDF',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_hint:
		'مفعّل افتراضيًا. تظهر صورة المسح فوق فقرات التعرّف في وورد لتراجع بنفسك.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_page_label: 'إدراج صورة الصفحة فوق النص',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_pages_tpl: '{n}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_progress_tpl: '{file} · صفحة {page}/{pages}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_body:
		'طابور حتى خمسة ملفات و20 صفحة. تُرسَم كل صفحة، تُصغَّر إن تجاوز الضلع الأطول الحد، ثم تُقرأ بالترتيب البصري. عامل تعرّف واحد يعمل بالتتابع. الصفحة الفاشلة تُتخطى. التصدير إما وورد مدمج أو وورد لكل PDF.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_1:
		'الافتراض: وورد واحد، عنوان لكل PDF، صورة اختيارية وفقرات تعرّف لكل صفحة ثم فاصل. وورد لكل PDF: كل إدخال ناجح يصير .docx خاصًا به؛ عدة ملفات تُنزَّل في ZIP. ليس أرشيف TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_2:
		'الملفات تبقى على جهازك ولا تُرفع إلى خادم. السكربتات تُحمَّل من هذا الموقع.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_3:
		'خط اليد والضباب الشديد والمنظور الحاد كثيرًا ما تفشل في تلك الصفحة. الجداول تصير أسطر قراءة. الأعمدة لن تطابق المسح. الـ PDF الرقمي ذو طبقة النص يُرسَم هنا أيضًا؛ إن أردت الطبقة فقط فاستخدم «تحويل PDF إلى مستند وورد».',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_item_4:
		'لا إدخال للصور. أكوام JPG مكانها «حوّل عدة صور JPG إلى وورد قابل للتحرير بالتعرّف الضوئي». لا يُكتب PDF قابل للبحث ولا يُنزَّل TXT.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_rules_title: 'حدود يجدر توقعها',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_sample: 'تحميل مثال',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_done: 'تم',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_queued: 'في الطابور',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_reading: 'يقرأ',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_rendering: 'يرسم',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_skipped: 'متخطّى',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_st_working: 'يعمل',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_done: 'تم.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_loading: "التشغيل الأول يحمّل رسم الـ PDF ومحرّك التعرّف (~4 مب). ابقَ في هذه الصفحة…",
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_packing: 'تجميع ملف وورد…',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_title: 'حوّل ملفات PDF الممسوحة إلى وورد بالتعرّف الضوئي دفعة واحدة',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_1:
		'أسقط PDF محاضرة ممسوحة ونزّل ووردًا واحدًا لتعيد صياغة العناوين.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_2:
		'اجمع عقدين ممسوحين في مستند مراجعة واحد مع صورة كل صفحة فوق فقرات التعرّف.',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecase_3:
		'حوّل مسح فاتورة متعددة الصفحات إلى وورد ليعدّله زميل (لا تُستخرَج حقول الفاتورة هنا).',
	tool_batch_convert_scanned_pdf_to_word_with_ocr_usecases_title: 'متى يناسبك',
};

export default ar;
