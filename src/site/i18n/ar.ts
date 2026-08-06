import type { SiteLangDict } from './types';
const ar: SiteLangDict = {
  brand: 'Online Free Tools',
  nav_home: 'الرئيسية',
  nav_devlogs: 'سجلات التطوير',
  nav_tools: 'الأدوات',
  footer_text: 'Online Free Tools · مشروع تعليمي · قيد التحديث',
  tool_headers_title: 'الحصول على رؤوس استجابة الموقع',
  tool_headers_description:
    "جلب رؤوس استجابة HTTP لعنوان URL على الخادم (HEAD، وإذا لزم fallback إلى GET). العملية: إرسال HEAD، اتباع إعادة التوجيه، جمع الرؤوس، حظر المضيفات الداخلية. مثال: فحص CORS وCache-Control وHSTS لتصحيح إعادة التوجيه وإعدادات CDN.",
  tool_headers_article:
    'ما هو: احصل على فحص رؤوس استجابة HTTP لموقع ويب. مفيد في تصحيح أخطاء CORS، والتخزين المؤقت، وإعادة التوجيه، والتحقق من رؤوس الأمان أو CDN. سيناريوهات: تصحيح المطورين، والتحقق من تحسين محركات البحث، والتحقق من تكوين الخادم.',
  url_label: 'الرابط',
  url_placeholder: 'مثال: https://example.com',
  fetch_button: 'جلب الرؤوس',
  result_title: 'النتيجة',
  status_label: 'الحالة',
  final_url_label: 'الرابط النهائي',
  headers_label: 'الرؤوس',
  error_prefix: 'خطأ: ',
  note_title: 'ملاحظات',
  note_1: 'بعض المواقع لا تدعم HEAD ؛ سنعود إلى GET.',
  note_2: 'لحماية الأمان، يتم حظر الطلبات إلى localhost/الشبكات الخاصة.',
  tool_markdown_title: 'من Markdown إلى HTML الآمن — وبالعكس',
  tool_markdown_description:
    'تحتاج HTMLًا نظيفًا من Markdown، أو Markdown من HTML لوحة التحكم؟ اختر الاتجاه؛ marked وTurndown وDOMPurify داخل المتصفح. مثال: README إلى .html، أو HTML المحرر إلى .md للمستودع.',
  tool_markdown_article:
    'اتجاهان في رابط واحد، مع حدود التنظيف والفقدان. اللصق محلي؛ CDN للمكتبات فقط.',
  tool_markdown_dir_label: 'اتجاه التحويل',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_copy: 'نسخ HTML',
  tool_markdown_copy_md: 'نسخ Markdown',
  tool_markdown_copy_done: 'تم النسخ',
  tool_markdown_download: 'تنزيل HTML',
  tool_markdown_download_md: 'تنزيل Markdown',
  tool_markdown_clear: 'مسح',
  tool_markdown_full_doc: 'إنشاء مستند HTML كامل',
  tool_markdown_input_label: 'إدخال Markdown',
  tool_markdown_preview_label: 'معاينة HTML',
  tool_markdown_html_input_label: 'إدخال HTML',
  tool_markdown_md_output_label: 'مخرجات Markdown',
  tool_markdown_placeholder:
    "# العنوان\n\nMarkdown أساسي: **عريض**، قوائم، وكتل شيفرة.\n\n- بند 1\n- بند 2\n\n```js\nconsole.log('مرحبا Markdown');\n```",
  tool_markdown_html_placeholder: '<h1>العنوان</h1>\n<p>مرحبا <strong>بالعالم</strong></p>',
  tool_markdown_sample_md:
    "# العنوان\n\nMarkdown أساسي: **عريض**، قوائم، وكتل شيفرة.\n\n- بند 1\n- بند 2\n\n```js\nconsole.log('مرحبا Markdown');\n```",
  tool_markdown_sample_html: '<h1>العنوان</h1>\n<p>مرحبا <strong>بالعالم</strong></p>',
  tool_markdown_export_title: 'تصدير Markdown إلى HTML',
  tool_markdown_export_description:
    'إنشاء مستند HTML كامل من Markdown مع قالب وبيانات وصفية. الخطوات: تصيير، إدراج في القالب، إضافة meta، تنزيل. مثال: تصدير مقال كملف .html مستقل.',
  tool_markdown_large_warn:
    'لصق كبير جدًا (أكثر من 200 ألف حرف). قد يبطئ التحويل — جرّب مقتطفًا أقصر.',
  tool_markdown_need_lib: 'تعذّر تحميل مكتبة التحويل. تحقق من الاتصال ثم أعد التحميل.',
  tool_markdown_loss_hint:
    'قليل أو لا Markdown — ربما أُزيلت سكربتات أو وسوم فارغة أو ترميز غير مدعوم. راجع القواعد والأسئلة.',
  tool_markdown_how_title: 'خطوات سريعة',
  tool_markdown_how_body:
    'التبويب يحدد الاتجاه. أدخل يسارًا والنتيجة يمينًا محليًا. HTML: جزء أو مستند بسيط؛ Markdown: نص للمحرر أو النموذج.',
  tool_markdown_rules_title: 'قواعد حسب الاتجاه',
  tool_markdown_rules_intro:
    'لا صفحة رقيقة ثانية فقط لكلمة «HTML إلى Markdown».',
  tool_markdown_rules_item_md_html:
    'إلى HTML: تحليل ثم تنظيف قبل العرض/الحفظ.',
  tool_markdown_rules_item_html_md:
    'إلى Markdown: تنظيف ثم Turndown (عناوين ATX وكتل محاطة).',
  tool_markdown_rules_item_loss:
    'الأنماط والسكربتات والجداول المعقدة غالبًا تُبسَّط. الذهاب والإياب ≠ الأصل.',
  tool_markdown_rules_privacy:
    'النص يبقى في تبويبك؛ CDN لا يرفع مقالك.',
  tool_markdown_example_title: 'مثال',
  tool_markdown_example:
    '`# العنوان` و `مرحبا **بالعالم**` ↔ HTML منظّف وMarkdown بخط عريض.',
  tool_markdown_usecases_title: 'متى يفيد',
  tool_markdown_usecase_1:
    'تسليم HTML آمن لنظام المحتوى.',
  tool_markdown_usecase_2:
    'استعادة مسودة من HTML بريد أو لوحة.',
  tool_markdown_usecase_3:
    'تنظيف نص غني قبل المطالبة.',
  tool_markdown_faq_q1: 'هل يُزال السكربت من HTML؟',
  tool_markdown_faq_a1:
    'في Markdown → HTML نعم؛ DOMPurify قبل المعاينة والتنزيل.',
  tool_markdown_faq_q2: 'هل يبقى التنسيق في Markdown؟',
  tool_markdown_faq_a2:
    'نادرًا. اعتبره مسودة قابلة للتحرير.',
  tool_markdown_faq_q3: 'هل يُرسل اللصق إلى خادم؟',
  tool_markdown_faq_a3:
    'التحويل محلي. CDN يوصل ملفات المكتبة فقط.',
  tool_markdown_faq_q4: 'هل الذهاب والإياب بلا فرق؟',
  tool_markdown_faq_a4:
    'غير مضمون — قارن بـ Diff إن لزم.',
  tool_markdown_faq_q5: 'ما الصيغ وخيارات التصدير؟',
  tool_markdown_faq_a5:
    'أساسيات CommonMark؛ ومستند HTML كامل اختياري للمشاركة دون اتصال.',
  tool_text_diff_description:
    'قارن نصين أونلاين واعرف ماذا تغيّر. العملية: الصق النص الأصلي والمعدَّل، اختر المقارنة حسب السطر أو الكلمة أو الحرف، ويمكن تجاهل المسافات أو توحيد أسطر Windows (CRLF→LF)، ثم أبرز الإضافات والحذف في المتصفح. مثال: غيّر «مرحبا بالعالم» إلى «مرحبا صديقي» — وضع الكلمات يُظهر استبدالاً واحداً.',
  tool_text_diff_article:
    'أداة مجانية لمقارنة نصين جنباً إلى جنب. وضع الأسطر للإعدادات والشيفرة؛ وضع الكلمات للنصوص والمطالبات؛ وضع الأحرف للأخطاء الدقيقة. كل شيء في المتصفح — لا نرفع نصك.',
  tool_text_diff_example:
    'مثال (وضع الكلمة): A = «مرحبا بالعالم»، B = «مرحبا صديقي» — تغيير واحد (بالعالم → صديقي). إذا تغيّر السطر الأوسط فقط من ثلاثة أسطر، وضع السطر يعلّم ذلك السطر.',
  tool_text_diff_sample_a: 'مرحبا بالعالم\nالسطر الثاني\nالسطر الثالث',
  tool_text_diff_sample_b: 'مرحبا صديقي\nالسطر الثاني\nالسطر الثالث',
  tool_text_diff_label_a: 'النص الأصلي',
  tool_text_diff_label_b: 'النص المعدَّل',
  tool_text_diff_placeholder_a: 'الصق النص الأصلي…',
  tool_text_diff_placeholder_b: 'الصق النص المعدَّل…',
  tool_text_diff_mode_label: 'قارن حسب',
  tool_text_diff_mode_lines: 'سطر',
  tool_text_diff_mode_words: 'كلمة',
  tool_text_diff_mode_chars: 'حرف',
  tool_text_diff_ignore_ws: 'تجاهل المسافات',
  tool_text_diff_normalize_eol: 'اعتبار CRLF و LF متساويين',
  tool_text_diff_compare: 'قارن',
  tool_text_diff_swap: 'تبديل الجانبين',
  tool_text_diff_clear: 'مسح',
  tool_text_diff_result_label: 'الفروقات',
  tool_text_diff_legend: 'أخضر = مضاف · أحمر = محذوف',
  tool_text_diff_summary: 'أُضيف {added}، حُذف {removed}',
  tool_text_diff_no_diff: 'لا فروق — النصان متطابقان.',
  tool_text_diff_empty_hint: 'الصق نصاً في جانب أو جانبين ثم اضغط قارن.',
  tool_text_diff_large_warn: 'لصق كبير جداً (>100 ألف حرف). قد يبطئ — جرّب مقطعاً أقصر.',
  tool_text_diff_need_lib: 'تعذّر تحميل أداة المقارنة. تحقق من الاتصال وحدّث الصفحة.',
  tool_text_diff_how_title: 'طريقة الاستخدام',
  tool_text_diff_how_body:
    'الصق نسختين، اختر دقة المقارنة (سطر أو كلمة أو حرف)، ثم راجع الإضافات الخضراء والحذف الأحمر. النص الذي تلصقه لا يُرفع ولا يُحفظ لدينا. قد تحمّل الصفحة مكتبة jsdiff مفتوحة المصدر من CDN لتعمل المقارنة في المتصفح.',
  tool_text_diff_rules_title: 'كيف تُحسب الفروقات',
  tool_text_diff_rules_body:
    'تبحث الأداة عن قائمة قصيرة من التعديلات لنقل النص A إلى B (diff تقليدي / أسلوب Myers عبر jsdiff). وضع الأسطر للإعدادات والشيفرة. وضع الكلمات للجمل والمطالبات. وضع الأحرف للأخطاء الدقيقة لكنه أكثر ضوضاء. تجاهل المسافات يخفي تغيّر المسافة البادئة فقط. توحيد CRLF و LF يمنع احمرار السطر كله بسبب نوع السطر الجديد فقط.',
  tool_text_diff_rules_intro:
    'تبحث الأداة عن قائمة قصيرة من التعديلات لتحويل النص A إلى B (diff كلاسيكي / أسلوب Myers عبر jsdiff). اختر الوضع حسب المهمة:',
  tool_text_diff_rules_item_lines:
    'سطر — مناسب لـ .env وYAML والكود؛ السطر المتغيّر يُعلَّم بالكامل. سهل المسح، لكن تغيير كلمة واحدة يلوّن السطر كله.',
  tool_text_diff_rules_item_words:
    'كلمة — مناسب للجمل والبريد والـ prompts؛ يبرز كلمات مفردة. أوضح للنثر؛ علامات الترقيم قد تقطع النتيجة.',
  tool_text_diff_rules_item_chars:
    'حرف — مناسب للأخطاء الصغيرة؛ الأدق، لكنه مزعج في التعديلات الطويلة.',
  tool_text_diff_rules_options:
    'تجاهل المسافات يخفي تغييرات المسافة البادئة فقط. معاملة CRLF وLF بالمثل تمنع احمرار سطر كامل بسبب أسلوب السطر الجديد فقط (ويندوز مقابل يونكس).',
  tool_text_diff_example_title: 'مثال',
  tool_text_diff_usecases_title: 'متى تستخدمها',
  tool_text_diff_usecase_1: 'مراجعة إعدادات: قارن مقطعي .env أو YAML سطراً بسطر.',
  tool_text_diff_usecase_2: 'تعديل مطالبة: وضع الكلمات لرؤية الصياغات المضافة أو المحذوفة.',
  tool_text_diff_usecase_3: 'تدقيق نص أو ترجمة: تأكد أن الجمل المقصودة فقط تغيّرت.',
  tool_text_diff_faq_q1: 'أقارن بالسطر أم بالكلمة؟',
  tool_text_diff_faq_a1: 'السطر للشيفرة والإعدادات. الكلمة للجمل والرسائل والمطالبات — تُبرز الكلمات المتغيّرة فقط.',
  tool_text_diff_faq_q2: 'هل يُرفع نصي إلى خادم؟',
  tool_text_diff_faq_a2:
    'النص الذي تلصقه لا يُرفع ولا يُحفظ لدينا — المقارنة تتم في متصفحك. قد تحمّل الصفحة jsdiff (مفتوحة المصدر) من CDN؛ ذلك لا يرسل نصك إلى خوادمنا.',
  tool_text_diff_faq_q3: 'لماذا يجعل اختلاف نهاية السطر السطر كله أحمر؟',
  tool_text_diff_faq_a3: 'Windows غالباً CRLF و Mac/Linux غالباً LF. فعّل «اعتبار CRLF و LF متساويين» ثم قارن مجدداً.',
  tool_text_diff_faq_q4: 'هل أقارن صوراً أو ملفات ثنائية؟',
  tool_text_diff_faq_a4: 'لا. النص العادي فقط.',

};
export default ar;