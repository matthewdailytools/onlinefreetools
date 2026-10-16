/**
 * i18n tool shard (markdown-to-html / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_markdown_article: 'اتجاهان في رابط واحد، مع حدود التنظيف والفقدان. اللصق محلي؛ هذا الموقع للمكتبات فقط.',
  tool_markdown_clear: 'مسح',
  tool_markdown_copy: 'نسخ HTML',
  tool_markdown_copy_done: 'تم النسخ',
  tool_markdown_copy_md: 'نسخ Markdown',
  tool_markdown_description:
    'تحتاج HTMLًا نظيفًا من Markdown، أو Markdown من HTML لوحة التحكم؟ اختر الاتجاه؛ marked وTurndown وDOMPurify داخل المتصفح. مثال: README إلى .html، أو HTML المحرر إلى .md للمستودع.',
  tool_markdown_dir_label: 'اتجاه التحويل',
  tool_markdown_download: 'تنزيل HTML',
  tool_markdown_download_md: 'تنزيل Markdown',
  tool_markdown_example: '`# العنوان` و `مرحبا **بالعالم**` ↔ HTML منظّف وMarkdown بخط عريض.',
  tool_markdown_example_title: 'مثال',
  tool_markdown_export_description:
    'إنشاء مستند HTML كامل من Markdown مع قالب وبيانات وصفية. الخطوات: تصيير، إدراج في القالب، إضافة meta، تنزيل. مثال: تصدير مقال كملف .html مستقل.',
  tool_markdown_export_title: 'تصدير Markdown إلى HTML',
  tool_markdown_faq_a1:
    'في Markdown → HTML نعم — يعمل DOMPurify قبل المعاينة والنسخ والتنزيل لتقليل السكربتات الشائعة والسمات الخطرة.',
  tool_markdown_faq_a2:
    'نادرًا بالكامل. اعتبره مسودة قابلة للتحرير: السكربتات والتنسيق الثقيل يختفي، والجداول المتداخلة تُبسَّط غالبًا.',
  tool_markdown_faq_a3:
    'التحويل داخل التبويب. جلب المكتبات من هذا الموقع يعني تنزيل الشيفرة فقط — لا رفع لنصك.',
  tool_markdown_faq_a4:
    'غير مضمون. قد تتغير المسافات والوسوم غير المدعومة. للمساواة بايت-بايت استخدم Diff خارجي.',
  tool_markdown_faq_a5:
    'أساس CommonMark: عناوين، قوائم، روابط، تأكيد، كتل شيفرة. يمكنك أيضًا لف مستند HTML كامل للمشاركة دون اتصال.',
  tool_markdown_faq_q1: 'هل يُزال السكربت من HTML؟',
  tool_markdown_faq_q2: 'هل يبقى التنسيق في Markdown؟',
  tool_markdown_faq_q3: 'هل يُرسل اللصق إلى خادم؟',
  tool_markdown_faq_q4: 'هل الذهاب والإياب بلا فرق؟',
  tool_markdown_faq_q5: 'ما الصيغ وخيارات التصدير؟',
  tool_markdown_faq_a6:
    'نعم في Markdown → HTML عند تفعيل «إنشاء مستند HTML كامل»: تحصل على html/head/body بسيط حول الجزء المنظَّف.',
  tool_markdown_faq_a7:
    'marked (Markdown) وDOMPurify (تنظيف) وTurndown (HTML → Markdown)، تُحمَّل من /vendor/ على هذا الموقع — لا CDN طرف ثالث.',
  tool_markdown_faq_q6: 'هل أستطيع تنزيل ملف HTML كامل؟',
  tool_markdown_faq_q7: 'ما المكتبات التي تشغّل التحويل؟',
  tool_markdown_why_choose_title: 'لماذا هذا المحوّل Markdown ↔ HTML',
  tool_markdown_why_choose_item_1:
    'اتجاهان في صفحة واحدة: Markdown → معاينة HTML منظَّفة، وHTML → Markdown قابل للتحرير.',
  tool_markdown_why_choose_item_2:
    'DOMPurify قبل المعاينة والنسخ والتنزيل في Markdown → HTML — حمولات سكربت شائعة لا تبقى في المخرجات.',
  tool_markdown_why_choose_item_3:
    'لف اختياري لمستند كامل عندما تحتاج .html للمشاركة، لا مجرد جزء.',
  tool_markdown_why_choose_item_4:
    'توضيح صادق للفقد في HTML → Markdown: التخطيط والسكربتات والجداول المعقدة تُسطَّح غالبًا.',
  tool_markdown_why_choose_item_5:
    'اللصق يبقى في التبويب؛ المكتبات من مجلد vendor هنا — ليس رفعًا لنصك.',
  tool_markdown_full_doc: 'إنشاء مستند HTML كامل',
  tool_markdown_how_body:
    'التبويب يحدد الاتجاه. أدخل يسارًا والنتيجة يمينًا محليًا. HTML: جزء أو مستند بسيط؛ Markdown: نص للمحرر أو النموذج.',
  tool_markdown_how_item_1: 'اختر تبويب Markdown → HTML أو HTML → Markdown.',
  tool_markdown_how_item_2: 'الصق المدخلات يسارًا (أو «تحميل مثال»).',
  tool_markdown_how_item_3: 'في Markdown → HTML يمكنك اختياريًا لف مستند HTML بسيط.',
  tool_markdown_how_item_4: 'انسخ أو حمّل المخرجات المحوّلة على اليمين.',
  tool_markdown_how_title: 'خطوات سريعة',
  tool_markdown_html_input_label: 'إدخال HTML',
  tool_markdown_html_placeholder: '<h1>العنوان</h1>\n<p>مرحبا <strong>بالعالم</strong></p>',
  tool_markdown_input_label: 'إدخال Markdown',
  tool_markdown_large_warn: 'لصق كبير جدًا (أكثر من 200 ألف حرف). قد يبطئ التحويل — جرّب مقتطفًا أقصر.',
  tool_markdown_loss_hint: 'قليل أو لا Markdown — ربما أُزيلت سكربتات أو وسوم فارغة أو ترميز غير مدعوم. راجع القواعد والأسئلة.',
  tool_markdown_md_output_label: 'مخرجات Markdown',
  tool_markdown_need_lib: 'تعذّر تحميل مكتبة التحويل. تحقق من الاتصال ثم أعد التحميل.',
  tool_markdown_placeholder:
    '# العنوان\n\nMarkdown أساسي: **عريض**، قوائم، وكتل شيفرة.\n\n- بند 1\n- بند 2\n\n```js\nconsole.log(\'مرحبا Markdown\');\n```',
  tool_markdown_preview_label: 'معاينة HTML',
  tool_markdown_rules_intro:
    'ما تغطيه القواعد التالية: أي صيغ Markdown مدعومة، وكيف يُنظَّف HTML، وكيف يُعالَج النص الملصوق محليًا.',
  tool_markdown_rules_item_html_md: 'إلى Markdown: تنظيف ثم Turndown (عناوين ATX وكتل محاطة).',
  tool_markdown_rules_item_loss: 'الأنماط والسكربتات والجداول المعقدة غالبًا تُبسَّط. الذهاب والإياب ≠ الأصل.',
  tool_markdown_rules_item_md_html: 'إلى HTML: تحليل ثم تنظيف قبل العرض/الحفظ.',
  tool_markdown_rules_privacy: 'النص يبقى في تبويبك؛ هذا الموقع لا يرفع مقالك.',
  tool_markdown_rules_title: 'قواعد حسب الاتجاه',
  tool_markdown_sample_html: '<h1>العنوان</h1>\n<p>مرحبا <strong>بالعالم</strong></p>',
  tool_markdown_sample_md:
    '# العنوان\n\nMarkdown أساسي: **عريض**، قوائم، وكتل شيفرة.\n\n- بند 1\n- بند 2\n\n```js\nconsole.log(\'مرحبا Markdown\');\n```',
  tool_markdown_tab_html_md: 'HTML → Markdown',
  tool_markdown_tab_md_html: 'Markdown → HTML',
  tool_markdown_title: 'من Markdown إلى HTML الآمن — وبالعكس',
  tool_markdown_usecase_1: 'تسليم HTML آمن لنظام المحتوى.',
  tool_markdown_usecase_2: 'استعادة مسودة من HTML بريد أو لوحة.',
  tool_markdown_usecase_3: 'تنظيف نص غني قبل المطالبة.',
  tool_markdown_usecase_4:
    'شرح أساسيات CommonMark: المعاينة الحية تُظهر ما يزيله التنظيف.',
  tool_markdown_usecases_title: 'متى يفيد',
};
export default ar;
