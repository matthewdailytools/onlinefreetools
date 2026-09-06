/**
 * i18n tool shard (pdf-page-numbers / ar). إعادة صياغة مستقلة للبحث المحلي.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_pdf_page_numbers_add: 'ترقيم',
  tool_pdf_page_numbers_article:
    'أضف أرقام صفحات لكل صفحة في PDF داخل المتصفح في المتصفح. اختر الزاوية أو الوسط، رقم البداية والهامش—الملف يبقى على جهازك دون رفع إلى خادم.',
  tool_pdf_page_numbers_choose_file: 'اختر PDF',
  tool_pdf_page_numbers_clear: 'مسح',
  tool_pdf_page_numbers_desc:
    'ترقيم PDF في المتصفح—موضع ورقم البداية حسب رغبتك؛ دون رفع إلى خادم، يبقى على جهازك.',
  tool_pdf_page_numbers_description:
    'أضف أرقام صفحات إلى PDF في المتصفح—دون رفع إلى خادم. الخطوات: افتح PDF، اختر أسفل الوسط أو زاوية، حدّد الرقم الأول (افتراضي 1) والهامش وحجم الخط، اختياريًا «صفحة N»، ثم نزّل numbered.pdf. مثال: عيّنة من 3 صفحات بأرقام أسفل الوسط من 1. ملفات مشفّرة تفشل برسالة واضحة.',
  tool_pdf_page_numbers_download: 'تنزيل',
  tool_pdf_page_numbers_drop_hint: 'أو اسحب PDF هنا. المعالجة داخل هذا التبويب.',
  tool_pdf_page_numbers_empty: 'اختر ملف PDF أولًا.',
  tool_pdf_page_numbers_err_encrypted: 'يبدو أن PDF محمي بكلمة مرور. أزل الحماية ثم أعد المحاولة.',
  tool_pdf_page_numbers_err_load: 'تعذّر قراءة PDF (تالف أو غير مدعوم). جرّب ملفًا آخر.',
  tool_pdf_page_numbers_err_number: 'فشل الترقيم. تحقق من الملف والإعدادات ثم أعد المحاولة.',
  tool_pdf_page_numbers_example:
    'العيّنة تنشئ PDF من 3 صفحات، ترقم أسفل الوسط من 1، وتفعّل تنزيل numbered.pdf.',
  tool_pdf_page_numbers_example_title: 'مثال',
  tool_pdf_page_numbers_faq_a1:
    'لا. مكتبة PDF يعمل في تبويبك (قد تُحمَّل السكربتات من هذا الموقع). PDF لا يُرفع إلى خوادمنا.',
  tool_pdf_page_numbers_faq_a2:
    'نعم—«ابدأ من» هو الرقم على الصفحة 1 (مثل 0 للغلاف، أو 5 بعد حذف صفحات). كل صفحة تزيد 1.',
  tool_pdf_page_numbers_faq_a3:
    'أرقام بسيطة (1، 2، 3…) أو «صفحة N». الموضع والهامش (pt) والحجم يُطبَّقان على كل الصفحات.',
  tool_pdf_page_numbers_faq_a4:
    'PDF المحمي بكلمة مرور غالبًا لا يُفتح هنا. أزل كلمة المرور بأداة موثوقة ثم رقّم.',
  tool_pdf_page_numbers_faq_q1: 'هل يُرفع PDF؟',
  tool_pdf_page_numbers_faq_q2: 'هل أبدأ بعد صفحة الغلاف؟',
  tool_pdf_page_numbers_faq_q3: 'ما الصيغ والمواضع المدعومة؟',
  tool_pdf_page_numbers_faq_q4: 'ماذا عن PDF المشفّر؟',
  tool_pdf_page_numbers_font_size_label: 'حجم الخط (pt)',
  tool_pdf_page_numbers_format_label: 'الصيغة',
  tool_pdf_page_numbers_format_number: 'رقم فقط',
  tool_pdf_page_numbers_format_page_n: 'صفحة N',
  tool_pdf_page_numbers_format_page_n_tpl: 'صفحة {n}',
  tool_pdf_page_numbers_how_body:
    'اختر PDF، الموضع (أسفل الوسط افتراضيًا)، رقم البداية، الهامش والحجم، اضغط ترقيم ثم تنزيل. الأرقام تُرسم على كل صفحة. تُحمَّل المكتبة عند أول استخدام.',
  tool_pdf_page_numbers_how_item_1: "اختر الإدخال عبر «اختر PDF»",
  tool_pdf_page_numbers_how_item_2: "اضبط الخيارات ثم اضغط «ترقيم»",
  tool_pdf_page_numbers_how_item_3: "راجع المعاينة أو عدد الصفحات أو رسالة الحالة",
  tool_pdf_page_numbers_how_item_4: "اضغط «تنزيل» لحفظ النتيجة",
  tool_pdf_page_numbers_how_title: 'كيف يعمل',
  tool_pdf_page_numbers_margin_label: 'الهامش (pt)',
  tool_pdf_page_numbers_pages_label: 'عدد الصفحات',
  tool_pdf_page_numbers_position_bc: 'أسفل الوسط',
  tool_pdf_page_numbers_position_bl: 'أسفل يسار',
  tool_pdf_page_numbers_position_br: 'أسفل يمين',
  tool_pdf_page_numbers_position_label: 'الموضع',
  tool_pdf_page_numbers_position_tc: 'أعلى الوسط',
  tool_pdf_page_numbers_position_tl: 'أعلى يسار',
  tool_pdf_page_numbers_position_tr: 'أعلى يمين',
  tool_pdf_page_numbers_rules_body: 'مواضع الترقيم، البداية، الصيغة، الخصوصية وحدود الفشل.',
  tool_pdf_page_numbers_rules_item_1:
    'الموضع: أسفل الوسط (افتراضي)، وسط أعلى/أسفل، أو الزوايا. الهامش بنقاط PDF (24 pt افتراضيًا).',
  tool_pdf_page_numbers_rules_item_2:
    'ابدأ من: الرقم على الصفحة 1 (1 افتراضيًا). كل صفحة +1—مفيد بعد حذف صفحات في Organize PDF.',
  tool_pdf_page_numbers_rules_item_3:
    'الصيغة: رقم أو «صفحة N». حجم 12 pt افتراضيًا. ملف جديد؛ الأصل لا يُرسل إلى خادم.',
  tool_pdf_page_numbers_rules_item_4:
    'حدود: PDF مشفّر/تالف يفشل بوضوح؛ >~25 MB قد يكون بطيئًا؛ الأرقام محفورة—تحتاج الأصل لإزالتها.',
  tool_pdf_page_numbers_rules_title: 'قواعد متوقعة',
  tool_pdf_page_numbers_sample: 'تحميل مثال',
  tool_pdf_page_numbers_start_at_label: 'ابدأ من',
  tool_pdf_page_numbers_stats_tpl: '{n} صفحة مرقّمة · {bytes}',
  tool_pdf_page_numbers_status_done: 'تم — اضغط تنزيل لحفظ numbered.pdf.',
  tool_pdf_page_numbers_status_working: 'جارٍ إضافة أرقام الصفحات…',
  tool_pdf_page_numbers_title: 'ترقيم صفحات PDF — أضف الأرقام في المتصفح',
  tool_pdf_page_numbers_usecase_1: 'مكتب: ترقيم تقرير قبل الطباعة للإشارة إلى «صفحة 12».',
  tool_pdf_page_numbers_usecase_2: 'طلاب: تذييل 1–N لأطروحة بعد دمج الفصول.',
  tool_pdf_page_numbers_usecase_3: 'أصحاب مواقع: ترقيم مواد بعد إعادة الترتيب أو العلامة المائية.',
  tool_pdf_page_numbers_usecases_title: 'حالات مناسبة',
  tool_pdf_page_numbers_warn_large: 'ملف أكبر من ~25 MB — قد يكون الترقيم بطيئًا أو يفشل.',
  tool_pdf_page_numbers_warn_pdflib: 'فشل تحميل مكتبة PDF. تحقق من الشبكة وأعد المحاولة.',
};
export default ar;
