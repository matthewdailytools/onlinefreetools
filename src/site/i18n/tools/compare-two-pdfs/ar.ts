/**
 * i18n tool shard (compare-two-pdfs / ar).
 * مقارنة طبقة النص في ملفي PDF: إبراز الإضافة والحذف، عدد الصفحات، خيارات تجاهل حالة الأحرف/المسافات؛ بلا OCR.
 */
import type { SiteLangDict } from '../../../types';

/** قاموس النصوص العربية (أُعيدت كتابته وفق عبارات البحث «مقارنة ملفي PDF / فروقات نص PDF»). */
const ar: SiteLangDict = {
	tool_compare_two_pdfs_title: "مقارنة ملفي PDF — إبراز اختلافات النص",
	tool_compare_two_pdfs_desc: "قارن نص ملفي PDF وأبرز الفروقات ثم نزّلها بصيغة HTML، دون رفع الملفات إلى خادم.",
	tool_compare_two_pdfs_description:
		"مقارنة ملفي PDF لمعرفة ما تغيّر في الصياغة: تستخرج الأداة النص القابل للتحديد من كل ملف، ثم تبرز بالأخضر الكلمات المضافة في B وبالأحمر الكلمات المحذوفة من A. الخطوات: اختر PDF A وPDF B، اضغط «قارن»، راجع الألوان وعدد الإضافات والحذف، ثم اضغط «تنزيل فرق HTML» إن احتجت ملفًا. مثال: «الدفع خلال ثلاثين يومًا» مقابل «الدفع خلال ستين يومًا». تعمل على طبقة النص فقط ولا تُجري OCR.",
	tool_compare_two_pdfs_file_a: "PDF A (النسخة القديمة / الأصلية)",
	tool_compare_two_pdfs_file_b: "PDF B (النسخة الجديدة / المعدّلة)",
	tool_compare_two_pdfs_choose_file: "اختر ملف PDF أو أفلته في هذا المربع",
	tool_compare_two_pdfs_choose_files: "اختيار ملفات",
	tool_compare_two_pdfs_drop_hint: "أو أفلت ملف PDF هنا. تتم المعالجة داخل هذا التبويب.",
	tool_compare_two_pdfs_compare: "قارن",
	tool_compare_two_pdfs_download: "تنزيل فرق HTML",
	tool_compare_two_pdfs_sample: "تحميل مثال",
	tool_compare_two_pdfs_clear: "مسح",
	tool_compare_two_pdfs_advanced: "إعدادات متقدمة (اختيارية)",
	tool_compare_two_pdfs_ignore_case: "تجاهل حالة الأحرف اللاتينية",
	tool_compare_two_pdfs_ignore_space: "دمج المسافات وفواصل الأسطر المتكررة",
	tool_compare_two_pdfs_advanced_hint: "مفيد عندما تختلف مواضع التفاف الأسطر بين نسختين بينما الصياغة واحدة.",
	tool_compare_two_pdfs_result_label: "فرق النص (A → B)",
	tool_compare_two_pdfs_legend_added: "مضاف في B",
	tool_compare_two_pdfs_legend_removed: "محذوف من A",
	tool_compare_two_pdfs_empty: "اختر الملفين PDF A وPDF B أولًا.",
	tool_compare_two_pdfs_err_convert: "تعذّر إنشاء المقارنة. حدّث الصفحة وحاول مرة أخرى.",
	tool_compare_two_pdfs_err_encrypted: "يبدو أن ملف PDF هذا محمي بكلمة مرور. أزل الحماية ثم أعد المقارنة.",
	tool_compare_two_pdfs_err_load: "تعذّرت قراءة أحد ملفي PDF.",
	tool_compare_two_pdfs_err_notext: "لم يُعثر على طبقة نص قابلة للتحديد. ملفات PDF الممسوحة ضوئيًا التي تحتوي على صور فقط تحتاج إلى OCR قبل أن تقارنها هذه الأداة.",
	tool_compare_two_pdfs_err_pdfjs: "تعذّر تحميل أداة عرض PDF.",
	tool_compare_two_pdfs_status_working: "جارٍ استخراج النص والمقارنة…",
	tool_compare_two_pdfs_status_done: "اكتملت المقارنة: الأخضر مضاف في B والأحمر محذوف من A. زر التنزيل يحفظ ملف HTML.",
	tool_compare_two_pdfs_status_identical: "لا توجد فروق في النص وفق الخيارات الحالية.",
	tool_compare_two_pdfs_summary_tpl: "إضافات: {added} · حذف: {removed}",
	tool_compare_two_pdfs_pages_tpl: "عدد الصفحات A={a}، B={b}",
	tool_compare_two_pdfs_warn_large: "الملف كبير، وقد تستغرق المقارنة وقتًا أطول.",
	tool_compare_two_pdfs_how_title: "كيف تقارن ملفي PDF",
	tool_compare_two_pdfs_how_body:
		"تقرأ الأداة طبقة النص في كل ملف PDF عبر PDF.js، ثم تقارن الكلمات كلمةً بكلمة. لا تنظر إلى التنسيق أو الخطوط أو الصور، بل إلى النص القابل للتحديد فقط.",
	tool_compare_two_pdfs_how_item_1: "اختر PDF A (الأصلي) وPDF B (المعدّل)، أو أفلت كل ملف في مربعه.",
	tool_compare_two_pdfs_how_item_2: "افتح «إعدادات متقدمة» عند الحاجة لتجاهل حالة الأحرف أو دمج المسافات.",
	tool_compare_two_pdfs_how_item_3: "اضغط «قارن» وانتظر شريط التقدم حتى تظهر معاينة الملفين ويُستخرج نصهما.",
	tool_compare_two_pdfs_how_item_4: "راجع التمييز بالأخضر والأحمر وعدد الإضافات والحذف، ثم اضغط «تنزيل فرق HTML» إذا احتجت ملفًا.",
	tool_compare_two_pdfs_why_choose_title: "لماذا تستخدم أداة «مقارنة ملفي PDF» هنا",
	tool_compare_two_pdfs_why_choose_item_1: "رسالة واضحة تشرح السبب عند الملفات المحمية بكلمة مرور أو الممسوحة ضوئيًا بلا طبقة نص، بدل نتيجة فارغة.",
	tool_compare_two_pdfs_why_choose_item_2: "معاينة الملفين جنبًا إلى جنب مع فرق نصي واحد على مستوى الكلمات في خطوة واحدة.",
	tool_compare_two_pdfs_why_choose_item_3: "عدّ منفصل للإضافات وللحذف، مع عدد صفحات كل ملف.",
	tool_compare_two_pdfs_why_choose_item_4: "خيارا تجاهل حالة الأحرف ودمج المسافات يناسبان النسخ التي لم يتغيّر فيها إلا التفاف الأسطر.",
	tool_compare_two_pdfs_why_choose_item_5: "تعمل في متصفحك، فتبقى ملفات PDF على جهازك ولا تُرفع إلى خوادمنا.",
	tool_compare_two_pdfs_rules_title: "قواعد المقارنة",
	tool_compare_two_pdfs_rules_body: "المقارنة على طبقة النص فقط، وليست مقارنة بصرية أو على مستوى البكسل.",
	tool_compare_two_pdfs_rules_item_1: "يُستخرج النص القابل للتحديد من A وB عبر PDF.js، ثم تُبرز الفروق عبر jsdiff.",
	tool_compare_two_pdfs_rules_item_2: "تبقى المعالجة كلها في هذا التبويب؛ اختيار الملف لا يرفعه إلى أي خادم.",
	tool_compare_two_pdfs_rules_item_3: "لا يوجد OCR. يجب تحويل الصفحات الممسوحة التي تحتوي على صور فقط إلى نص بأداة أخرى أولًا.",
	tool_compare_two_pdfs_rules_item_4: "ملفات PDF المحمية بكلمة مرور أو التالفة تتوقف برسالة خطأ مفهومة.",
	tool_compare_two_pdfs_rules_item_5: "التنزيل يصدّر النص المميَّز بصيغة HTML، وليس ملف PDF يحمل تعليقات.",
	tool_compare_two_pdfs_example_title: "مثال",
	tool_compare_two_pdfs_example:
		"يُنشئ «تحميل مثال» عقدين من صفحة واحدة: في A «الدفع مستحق خلال ثلاثين يومًا.» وفي B «الدفع مستحق خلال ستين يومًا.». عند الضغط على «قارن» تُميَّز «ثلاثين» كمحذوفة و«ستين» كمضافة. وعند تفعيل «تجاهل حالة الأحرف اللاتينية» تُعامَل الكلمتان Days وdays على أنهما واحدة.",
	tool_compare_two_pdfs_usecases_title: "متى تستخدمها",
	tool_compare_two_pdfs_usecase_1: "مطابقة عقد PDF معدّل مع النسخة التي أرسلتها الأسبوع الماضي.",
	tool_compare_two_pdfs_usecase_2: "اكتشاف تغييرات الصياغة في ملف سياسة أو شروط استخدام قبل التوقيع.",
	tool_compare_two_pdfs_usecase_3: "مقارنة نسختين مُصدَّرتين حين يهمك الكلام لا الخطوط أو الهوامش.",
	tool_compare_two_pdfs_usecase_4: "إبقاء المسودات الحساسة على جهازك؛ لا يُرفع أي شيء إلى خادم لإجراء المقارنة.",
	tool_compare_two_pdfs_faq_q1: "هل تُرفع ملفات PDF الخاصة بي؟",
	tool_compare_two_pdfs_faq_a1:
		"لا. يتم العرض واستخراج النص داخل تبويب المتصفح. تُحمَّل المكتبات من مجلد vendor في هذا الموقع، أما محتوى ملفاتك فيبقى على جهازك ولا يُرفع إلى خادم.",
	tool_compare_two_pdfs_faq_q2: "لماذا تظهر رسالة «لا يوجد نص قابل للتحديد» مع ملفات PDF الممسوحة؟",
	tool_compare_two_pdfs_faq_a2:
		"الملفات الممسوحة ضوئيًا صور بلا طبقة نص، وهذه الصفحة لا تُجري OCR. استخدم أداة OCR أخرى وصدّر ملف PDF قابلًا للبحث، ثم قارن هنا.",
	tool_compare_two_pdfs_faq_q3: "ماذا عن ملفات PDF المحمية بكلمة مرور؟",
	tool_compare_two_pdfs_faq_a3:
		"لا يمكن فتح الملفات المشفّرة هنا. أزل الحماية في قارئ PDF أولًا، واحفظ نسخة غير محمية، ثم اختر تلك النسخة.",
	tool_compare_two_pdfs_faq_q4: "ما الفرق بينها وبين مقارنة النصوص العادية؟",
	tool_compare_two_pdfs_faq_a4:
		"هنا تُفلت ملفات PDF مباشرة، وترى معاينة الصفحات وعددها. أما أداة مقارنة النصوص في الموقع فمخصصة للنصوص الملصوقة أو ملفات .txt دون تحليل PDF.",
	tool_compare_two_pdfs_faq_q5: "هل تقارن التنسيق أو الصور أو التوقيعات؟",
	tool_compare_two_pdfs_faq_a5:
		"لا. تُقارن الكلمات القابلة للتحديد فقط. نقل الشعار أو تغيير الخط مع بقاء الصياغة نفسها لن يظهر كفرق هنا.",
	tool_compare_two_pdfs_faq_q6: "ماذا يحفظ زر التنزيل؟",
	tool_compare_two_pdfs_faq_a6:
		"ملف HTML يحمل التمييز الأخضر والأحمر نفسه الظاهر في الصفحة، وهو مناسب للإرسال بالبريد أو الأرشفة، وليس ملف PDF عليه تعليقات.",
	tool_compare_two_pdfs_faq_q7: "متى أتجاهل حالة الأحرف أو المسافات؟",
	tool_compare_two_pdfs_faq_a7:
		"عندما يقتصر الاختلاف بين النسختين على الأحرف الكبيرة والصغيرة أو التفاف الأسطر. فعّل الخيارين إذا كانت الصياغة واحدة لكن طبقة النص الخام مختلفة.",
	tool_compare_two_pdfs_article: "قارن النص القابل للتحديد في ملفي PDF ونزّل فرقًا على مستوى الكلمات بصيغة HTML.",
	tool_compare_two_pdfs_references: "PDF.js لاستخراج النص؛ jsdiff لإبراز الفروق على مستوى الكلمات.",
	tool_compare_two_pdfs_ref_a_label: "PDF.js — عارض PDF من Mozilla",
	tool_compare_two_pdfs_ref_b_label: "jsdiff — مكتبة مقارنة النصوص",
};

export default ar;
