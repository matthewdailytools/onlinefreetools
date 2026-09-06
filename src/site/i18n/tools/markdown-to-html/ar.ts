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
  tool_markdown_faq_a1: 'في Markdown → HTML نعم؛ DOMPurify قبل المعاينة والتنزيل.',
  tool_markdown_faq_a2: 'نادرًا. اعتبره مسودة قابلة للتحرير.',
  tool_markdown_faq_a3: 'التحويل محلي. هذا الموقع يوصل ملفات المكتبة فقط.',
  tool_markdown_faq_a4: 'غير مضمون — قارن بـ Diff إن لزم.',
  tool_markdown_faq_a5: 'أساسيات CommonMark؛ ومستند HTML كامل اختياري للمشاركة دون اتصال.',
  tool_markdown_faq_q1: 'هل يُزال السكربت من HTML؟',
  tool_markdown_faq_q2: 'هل يبقى التنسيق في Markdown؟',
  tool_markdown_faq_q3: 'هل يُرسل اللصق إلى خادم؟',
  tool_markdown_faq_q4: 'هل الذهاب والإياب بلا فرق؟',
  tool_markdown_faq_q5: 'ما الصيغ وخيارات التصدير؟',
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
  tool_markdown_usecases_title: 'متى يفيد',
};
export default ar;
