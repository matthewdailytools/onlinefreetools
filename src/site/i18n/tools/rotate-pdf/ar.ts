/**
 * i18n 工具分片（rotate-pdf / ar）。إعادة كتابة مستقلة للبحث المحلي.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_rotate_pdf_angle_180: '180°',
  tool_rotate_pdf_angle_90ccw: '90° عكس عقارب الساعة',
  tool_rotate_pdf_angle_90cw: '90° مع عقارب الساعة',
  tool_rotate_pdf_angle_label: 'الزاوية',
  tool_rotate_pdf_article:
    'صحّح صفحات PDF المقلوبة أو المائلة في المتصفح في المتصفح. دوّر الكل أو نطاقًا—الملف يبقى على جهازك دون رفع إلى خادم.',
  tool_rotate_pdf_choose_file: 'اختر PDF',
  tool_rotate_pdf_clear: 'مسح',
  tool_rotate_pdf_desc:
    'صحّح اتجاه صفحات PDF على جهازك—كل الصفحات أو نطاق؛ دون رفع إلى خادم.',
  tool_rotate_pdf_description:
    'دوّر صفحات PDF في المتصفح لإصلاح خلط أفقي/عمودي—لا يُرفع شيء إلى خادم. الخطوات: اختر PDF، كل الصفحات أو نطاقات مثل 1-3,5، اختر 90° مع عقارب الساعة أو 180° أو 90° عكسها، ثم التدوير والتنزيل. مثال: عيّنة من صفحتين تدوّر الكل 90° مع عقارب الساعة وتفعّل تنزيل rotated.pdf. الملفات المشفّرة تفشل برسالة واضحة.',
  tool_rotate_pdf_download: 'تنزيل',
  tool_rotate_pdf_drop_hint: 'أو اسحب PDF هنا. المعالجة داخل هذا التبويب.',
  tool_rotate_pdf_empty: 'اختر ملف PDF أولًا.',
  tool_rotate_pdf_err_encrypted: 'يبدو أن PDF محمي بكلمة مرور. أزل الحماية ثم أعد المحاولة.',
  tool_rotate_pdf_err_load: 'تعذّر قراءة PDF (تالف أو غير مدعوم). جرّب ملفًا آخر.',
  tool_rotate_pdf_err_range: 'صفحات غير صالحة أو خارج النطاق. استخدم نطاقات من 1 مثل 1-3,5.',
  tool_rotate_pdf_err_rotate: 'فشل التدوير. تحقق من الملف والنطاقات ثم أعد المحاولة.',
  tool_rotate_pdf_example:
    'العيّنة تنشئ PDF من صفحتين، تدوّر الكل 90° مع عقارب الساعة، وتفعّل تنزيل rotated.pdf.',
  tool_rotate_pdf_example_title: 'مثال',
  tool_rotate_pdf_faq_a1:
    'لا. مكتبة PDF يعمل في تبويبك (قد تُحمَّل السكربتات من CDN). PDF لا يُرفع إلى خوادمنا.',
  tool_rotate_pdf_faq_a2: 'نعم—الملف المنزّل يحفظ الاتجاه الجديد. افتحه في عارض قبل المشاركة.',
  tool_rotate_pdf_faq_a3: 'الصفحات من 1: 1-3,5 تعني 1–3 والصفحة 5. المسافات اختيارية. القيم الفارغة أو الخارجة تفشل.',
  tool_rotate_pdf_faq_a4: 'PDF المحمي بكلمة مرور غالبًا لا يُفتح هنا. أزل كلمة المرور بأداة موثوقة ثم دوّر.',
  tool_rotate_pdf_faq_q1: 'هل يُرفع PDF؟',
  tool_rotate_pdf_faq_q2: 'هل يغيّر التدوير الملف نهائيًا؟',
  tool_rotate_pdf_faq_q3: 'كيف تعمل نطاقات الصفحات؟',
  tool_rotate_pdf_faq_q4: 'ماذا عن PDF المشفّر؟',
  tool_rotate_pdf_how_body:
    'اختر PDF، كل الصفحات أو نطاقات، اختر زاوية، اضغط تدوير ثم تنزيل. يُضاف التدوير إلى زاوية الصفحة الحالية. كل شيء محلي بعد تحميل المكتبة.',
  tool_rotate_pdf_how_item_1: "اختر الإدخال عبر «اختر PDF»",
  tool_rotate_pdf_how_item_2: "اضبط الخيارات ثم اضغط «تدوير»",
  tool_rotate_pdf_how_item_3: "راجع المعاينة أو عدد الصفحات أو رسالة الحالة",
  tool_rotate_pdf_how_item_4: "اضغط «تنزيل» لحفظ النتيجة",
  tool_rotate_pdf_how_title: 'كيف يعمل',
  tool_rotate_pdf_mode_all: 'كل الصفحات',
  tool_rotate_pdf_mode_label: 'الصفحات للتدوير',
  tool_rotate_pdf_mode_ranges: 'نطاقات مخصّصة',
  tool_rotate_pdf_pages_label: 'عدد الصفحات',
  tool_rotate_pdf_ranges_hint: 'مثال: 1-3,5 (من 1)',
  tool_rotate_pdf_ranges_label: 'نطاقات الصفحات',
  tool_rotate_pdf_rotate: 'تدوير',
  tool_rotate_pdf_rules_body: 'الزوايا، التراكم، صيغة النطاق، الخصوصية، حالات الفشل.',
  tool_rotate_pdf_rules_item_1: 'زوايا: 90° مع عقارب الساعة، 180°، أو 90° عكسها (270°). تُضاف إلى زاوية الصفحة.',
  tool_rotate_pdf_rules_item_2: 'صفحات: الكل أو نطاقات من 1 مثل 1-3,5 (نفس صيغة تقسيم PDF).',
  tool_rotate_pdf_rules_item_3: 'مخرجات: PDF واحد بصفحات محدّدة مُعاد توجيهها؛ الباقي دون تغيير.',
  tool_rotate_pdf_rules_item_4: 'خصوصية وحدود: البايتات في التبويب؛ مشفّر/تالف يفشل بوضوح؛ الملفات الضخمة قد تبطئ.',
  tool_rotate_pdf_rules_title: 'قواعد متوقعة',
  tool_rotate_pdf_sample: 'تحميل عيّنة',
  tool_rotate_pdf_stats_tpl: '{n} صفحة/صفحات مُدوّرة · {bytes}',
  tool_rotate_pdf_status_done: 'تم — اضغط تنزيل لحفظ rotated.pdf.',
  tool_rotate_pdf_status_rotating: 'جاري تدوير PDF…',
  tool_rotate_pdf_title: 'تدوير PDF — صحّح اتجاه الصفحات في المتصفح',
  tool_rotate_pdf_usecase_1: 'مكتب: اقلب مسحًا جانبيًا قبل الطباعة أو الإرسال.',
  tool_rotate_pdf_usecase_2: 'طلاب: أصلح صور شرائح بالهاتف باتجاهات مختلطة.',
  tool_rotate_pdf_usecase_3: 'أصحاب مواقع: صحّح صفحة واحدة خاطئة دون إعادة مسح الكل.',
  tool_rotate_pdf_usecases_title: 'حالات مناسبة',
  tool_rotate_pdf_warn_large: 'ملف أكبر من ~25 MB — قد يبطئ التدوير أو يفشل في بعض المتصفحات.',
  tool_rotate_pdf_warn_pdflib: 'فشل تحميل مكتبة PDF. تحقق من الشبكة وأعد المحاولة.',
};
export default ar;
