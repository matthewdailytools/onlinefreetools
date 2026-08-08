/**
 * i18n tool shard (pdf-watermark / ar). إعادة كتابة مستقلة للبحث المحلي.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_pdf_watermark_apply: 'تطبيق',
  tool_pdf_watermark_article:
    'اطبع DRAFT أو CONFIDENTIAL أو نصًا مخصصًا على كل صفحة PDF في متصفحك في المتصفح. شعار PNG/JPG اختياري — الملف يبقى على جهازك دون رفع إلى خادم.',
  tool_pdf_watermark_choose_file: 'اختر PDF',
  tool_pdf_watermark_clear: 'مسح',
  tool_pdf_watermark_desc:
    'أضف علامة مائية نصية على كل صفحة PDF في المتصفح — دون رفع إلى خادم؛ تبقى على جهازك.',
  tool_pdf_watermark_description:
    'أضف علامة مائية نصية على كل صفحة من PDF في المتصفح دون رفع إلى خادم. الخطوات: افتح PDF، أدخل النص (مثل DRAFT)، اضبط الشفافية والزاوية، أضف شعار PNG/JPG اختياريًا، طبّق ثم نزّل. مثال: عيّنة من صفحتين مع DRAFT في الوسط بزاوية −45° وشفافية 35%؛ تنزيل watermarked.pdf. الملفات المشفّرة تفشل برسالة واضحة. يختلف عن إضافة علامة مائية للصور وتدوير PDF.',
  tool_pdf_watermark_download: 'تنزيل',
  tool_pdf_watermark_drop_hint: 'أو اسحب PDF هنا. المعالجة في هذا التبويب.',
  tool_pdf_watermark_empty: 'أضف PDF لوضع العلامة المائية.',
  tool_pdf_watermark_err_apply: 'فشل وضع العلامة. تحقق من الملف والإعدادات.',
  tool_pdf_watermark_err_encrypted: 'يبدو أن PDF محمي بكلمة مرور. أزل الحماية أولًا.',
  tool_pdf_watermark_err_image: 'تعذّر قراءة الصورة. استخدم PNG أو JPG.',
  tool_pdf_watermark_err_load: 'تعذّر قراءة PDF (تالف أو غير مدعوم). جرّب ملفًا آخر.',
  tool_pdf_watermark_example:
    'العيّنة تنشئ PDF من صفحتين، تطبّق DRAFT في الوسط بشفافية 35% وزاوية −45° على كل صفحة، وتفعّل تنزيل watermarked.pdf.',
  tool_pdf_watermark_example_title: 'مثال',
  tool_pdf_watermark_faq_a1:
    'لا. مكتبة PDF يعمل في تبويبك (قد تُحمّل المكتبات من CDN). PDF لا يُرفع إلى خوادمنا.',
  tool_pdf_watermark_faq_a2:
    'إضافة علامة مائية للصور تضع نصًا أو شعارًا على الصور. هذه الأداة تختم كل صفحة في مستند PDF.',
  tool_pdf_watermark_faq_a3:
    'لا. بعد التنزيل تُدمج العلامة في الصفحة. إزالتها تحتاج الملف الأصلي أو تحريرًا كبيرًا.',
  tool_pdf_watermark_faq_a4:
    'PDF المحمي بكلمة مرور غالبًا لا يُفتح هنا. أزل كلمة المرور بأداة موثوقة.',
  tool_pdf_watermark_faq_a5:
    'نعم — اختر PNG أو JPG. يُصغَّر إلى ~ثلث الصفحة بنفس الموضع والشفافية والدوران.',
  tool_pdf_watermark_faq_q1: 'هل يُرفع PDF؟',
  tool_pdf_watermark_faq_q2: 'ما الفرق عن علامة مائية الصور؟',
  tool_pdf_watermark_faq_q3: 'هل يمكن إزالة العلامة لاحقًا؟',
  tool_pdf_watermark_faq_q4: 'ماذا عن PDF المشفّر؟',
  tool_pdf_watermark_faq_q5: 'هل يمكن إضافة شعار؟',
  tool_pdf_watermark_how_body:
    'اختر PDF، أدخل النص، اضبط الشفافية والدوران والموضع، أرفق شعار PNG/JPG اختياريًا، اضغط تطبيق ثم تنزيل. كل صفحة تحصل على نفس الطبقة.',
  tool_pdf_watermark_how_title: 'كيف يعمل',
  tool_pdf_watermark_image_hint: 'شعار PNG/JPG اختياري (نفس موضع النص).',
  tool_pdf_watermark_image_label: 'علامة صورة (اختياري)',
  tool_pdf_watermark_opacity_label: 'الشفافية',
  tool_pdf_watermark_pages_label: 'الصفحات',
  tool_pdf_watermark_position_bl: 'أسفل يسار',
  tool_pdf_watermark_position_br: 'أسفل يمين',
  tool_pdf_watermark_position_center: 'وسط',
  tool_pdf_watermark_position_label: 'الموضع',
  tool_pdf_watermark_position_tl: 'أعلى يسار',
  tool_pdf_watermark_position_tr: 'أعلى يمين',
  tool_pdf_watermark_rotation_label: 'الدوران (درجات)',
  tool_pdf_watermark_rules_body:
    'قواعد النص/الصورة والموضع والشفافية والخصوصية وحالات الفشل.',
  tool_pdf_watermark_rules_item_1:
    'النص: Helvetica على كل صفحة؛ العيّنة تستخدم DRAFT في الوسط، 35% شفافية، −45°.',
  tool_pdf_watermark_rules_item_2:
    'الصورة: PNG/JPG اختياري ~35% من الصفحة، نفس الموضع/الشفافية/الدوران.',
  tool_pdf_watermark_rules_item_3:
    'المواضع: الوسط أو الزوايا؛ شفافية 0.1–1؛ دوران −180° إلى 180°. مخرجات PDF جديد دون إرسال للخادم.',
  tool_pdf_watermark_rules_item_4:
    'حدود: PDF مشفّر/تالف يفشل؛ >~25 MB قد يكون بطيئًا؛ لا إزالة للعلامة.',
  tool_pdf_watermark_rules_title: 'قواعد متوقعة',
  tool_pdf_watermark_sample: 'تحميل عيّنة',
  tool_pdf_watermark_stats_tpl: '{pages} صفحة(صفحات) · {bytes}',
  tool_pdf_watermark_status_done: 'تم — انقر تنزيل لحفظ watermarked.pdf.',
  tool_pdf_watermark_status_working: 'جارٍ تطبيق العلامة…',
  tool_pdf_watermark_text_label: 'نص العلامة',
  tool_pdf_watermark_title: 'علامة مائية لـ PDF — اطبع نصًا على كل صفحة في المتصفح',
  tool_pdf_watermark_usecase_1: 'قانون/عمليات: CONFIDENTIAL على مسودات العقود قبل الإرسال.',
  tool_pdf_watermark_usecase_2: 'طلاب: DRAFT على فصول المذكرة للمراجعة.',
  tool_pdf_watermark_usecase_3: 'أصحاب مواقع: شعار شفاف على كل صفحة من PDF المعاينة.',
  tool_pdf_watermark_usecases_title: 'حالات مناسبة',
  tool_pdf_watermark_warn_large: 'الملف >~25 MB — قد يكون بطيئًا أو يفشل.',
  tool_pdf_watermark_warn_pdflib: 'فشل تحميل مكتبة PDF. تحقق من الشبكة.',
};
export default ar;
