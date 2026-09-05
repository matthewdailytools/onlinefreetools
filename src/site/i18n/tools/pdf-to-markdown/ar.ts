/**
 * i18n tool shard (pdf-to-markdown / ar). إعادة صياغة مستقلة.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_pdf_to_markdown_article:
    'استخرج نصًا قابلًا للتحديد من طبقة نص PDF في المتصفح وحمّل Markdown — الملف يبقى على جهازك دون رفع إلى خادم. بلا OCR.',
  tool_pdf_to_markdown_choose_file: 'اختر PDF',
  tool_pdf_to_markdown_clear: 'مسح',
  tool_pdf_to_markdown_convert: 'تحويل',
  tool_pdf_to_markdown_desc:
    'حوّل نص PDF إلى Markdown على جهازك للملاحظات — دون رفع إلى خادم؛ يبقى في المتصفح.',
  tool_pdf_to_markdown_description:
    'استخرج نص PDF إلى Markdown في المتصفح للملاحظات أو LLM — الملف يبقى على جهازك ولا يُرفع إلى خادم. الخطوات: اختر PDF بطبقة نص، تحويل، معاينة، ثم تنزيل .md. مثال: عينة صفحة واحدة تنتج .md يحتوي «Hello PDF to Markdown sample.» الممسوح ضوئيًا بدون OCR يفشل. الملفات المشفرة تظهر خطأ واضح.',
  tool_pdf_to_markdown_download: 'تنزيل .md',
  tool_pdf_to_markdown_drop_hint: 'أو اسحب PDF هنا. المعالجة داخل هذا التبويب.',
  tool_pdf_to_markdown_empty: 'اختر ملف PDF أولًا.',
  tool_pdf_to_markdown_err_convert: 'فشل التحويل. تحقق من الملف وأعد المحاولة.',
  tool_pdf_to_markdown_err_encrypted: 'يبدو أن PDF محمي بكلمة مرور. أزل الحماية ثم أعد المحاولة.',
  tool_pdf_to_markdown_err_load: 'تعذر قراءة PDF (تالف أو غير مدعوم). جرّب ملفًا آخر.',
  tool_pdf_to_markdown_err_notext:
    'لا يوجد نص قابل للتحديد. نقرأ طبقة النص فقط — بلا OCR. جرّب PDF رقميًا أو PDF إلى JPG للصور.',
  tool_pdf_to_markdown_err_pdfjs: 'فشل تحميل عارض PDF. تحقق من الشبكة وأعد المحاولة.',
  tool_pdf_to_markdown_example:
    'العينة تنشئ PDF صفحة واحدة بخط Helvetica، تحوّله، تعرض الجملة في المعاينة، وتفعّل تنزيل .md.',
  tool_pdf_to_markdown_example_title: 'مثال',
  tool_pdf_to_markdown_faq_a1:
    'لا. مُصيّر الصفحات يعمل في تبويبك (قد تُحمّل السكربتات من CDN). PDF لا يُرفع إلى خوادمنا.',
  tool_pdf_to_markdown_faq_a2:
    'الممسوح غالبًا صور بلا طبقة نص. بلا OCR يبقى الاستخراج فارغًا مع رسالة واضحة.',
  tool_pdf_to_markdown_faq_a3: 'لا يعيد بناء العناوين أو الجداول — نص عادي مجمّع حسب الموضع.',
  tool_pdf_to_markdown_faq_a4:
    'Markdown إلى HTML يحوّل صيغة Markdown لمعاينة ويب. هذه الأداة تصدّر نص PDF إلى .md.',
  tool_pdf_to_markdown_faq_a5:
    'PDF إلى JPG يعرض كل صفحة كصورة. استخدم هذه الأداة عند الحاجة لنص قابل للتحرير.',
  tool_pdf_to_markdown_faq_q1: 'هل يُرفع PDF؟',
  tool_pdf_to_markdown_faq_q2: 'لماذا يفشل PDF الممسوح؟',
  tool_pdf_to_markdown_faq_q3: 'هل يحافظ على العناوين أو الجداول؟',
  tool_pdf_to_markdown_faq_q4: 'ما الفرق عن Markdown إلى HTML؟',
  tool_pdf_to_markdown_faq_q5: 'متى أستخدم PDF إلى JPG؟',
  tool_pdf_to_markdown_how_body:
    'اختر PDF، تحويل، راجع المعاينة، ثم تنزيل .md. تُجمّع الأسطر حسب الموضع الرأسي؛ الصفحات تفصل بـ ---. كل شيء محلي بعد تحميل المكتبات.',
  tool_pdf_to_markdown_how_item_1: "اختر الإدخال عبر «اختر PDF»",
  tool_pdf_to_markdown_how_item_2: "اضبط الخيارات ثم اضغط «تحويل»",
  tool_pdf_to_markdown_how_item_3: "راجع المعاينة أو عدد الصفحات أو رسالة الحالة",
  tool_pdf_to_markdown_how_item_4: "اضغط «تنزيل .md» لحفظ النتيجة",
  tool_pdf_to_markdown_how_title: 'كيف يعمل',
  tool_pdf_to_markdown_pages_label: 'الصفحات',
  tool_pdf_to_markdown_preview_label: 'معاينة Markdown',
  tool_pdf_to_markdown_rules_body: 'استخراج طبقة النص، فاصل الصفحات، بلا OCR، الخصوصية والفشل.',
  tool_pdf_to_markdown_rules_item_1: 'المحرك: getTextContent لكل صفحة؛ عناصر y متقاربة → سطر بمسافات.',
  tool_pdf_to_markdown_rules_item_2: 'الصفحات: فارغ + --- + فارغ بين الصفحات.',
  tool_pdf_to_markdown_rules_item_3: 'بلا OCR: إن كان النص بعد trim فارغًا → فشل واضح.',
  tool_pdf_to_markdown_rules_item_4: 'الحدود: البايتات في التبويب؛ مشفر/تالف يفشل بوضوح؛ >~25 MB قد يبطئ.',
  tool_pdf_to_markdown_rules_title: 'قواعد متوقعة',
  tool_pdf_to_markdown_sample: 'تحميل عينة',
  tool_pdf_to_markdown_stats_tpl: '{n} صفحة · {chars} حرف',
  tool_pdf_to_markdown_status_converting: 'جارٍ استخراج النص…',
  tool_pdf_to_markdown_status_done: 'تم — انقر تنزيل .md للحفظ.',
  tool_pdf_to_markdown_title: 'PDF إلى Markdown — استخرج النص للملاحظات في المتصفح',
  tool_pdf_to_markdown_usecase_1: 'مكتب: انسخ بنود العقود للملاحظات دون إعادة كتابة.',
  tool_pdf_to_markdown_usecase_2: 'كتّاب وذكاء اصطناعي: صدّر تقارير Markdown للتحرير أو المطالبات.',
  tool_pdf_to_markdown_usecase_3: 'طلاب: نص محاضرات من PDF بطبقة نص — للمراجعة.',
  tool_pdf_to_markdown_usecases_title: 'حالات مناسبة',
  tool_pdf_to_markdown_warn_large: 'ملف أكبر من ~25 MB — قد يبطئ الاستخراج أو يفشل.',
  tool_pdf_to_markdown_warn_pdflib: 'فشل تحميل مكتبة PDF. تحقق من الشبكة وأعد المحاولة.',
};
export default ar;
