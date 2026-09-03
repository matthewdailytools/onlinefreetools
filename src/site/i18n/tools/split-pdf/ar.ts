/**
 * i18n tool shard（split-pdf / ar）. إعادة كتابة مستقلة.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_split_pdf_article:
    'قسّم ملف PDF إلى ملفات منفصلة حسب الصفحة أو النطاقات باستخدام pdf-lib في المتصفح. المخرجات المتعددة تُنزَّل كـ ZIP عبر fflate دون رفع.',
  tool_split_pdf_choose_file: 'اختر ملف PDF',
  tool_split_pdf_clear: 'مسح',
  tool_split_pdf_desc: 'استخرج صفحات من PDF على جهازك — كل صفحة أو نطاقات؛ ZIP عند الحاجة؛ دون رفع إلى خادم.',
  tool_split_pdf_description:
    'قسّم PDF في المتصفح ونزّل الصفحات أو النطاقات بشكل منفصل — دون رفع. الخطوات: اختر PDF، اختر كل صفحة أو أدخل نطاقاً مثل 1-3,5، قسّم ثم نزّل. مثال: عيّنة من ثلاث صفحات تصبح ZIP فيه page-1.pdf إلى page-3.pdf. مخرج واحد يُنزَّل كـ PDF. الملفات المشفرة تفشل برسالة واضحة.',
  tool_split_pdf_download: 'تنزيل',
  tool_split_pdf_drop_hint: 'أو أسقط ملف PDF واحداً هنا. المعالجة تبقى في هذا التبويب.',
  tool_split_pdf_empty: 'اختر ملف PDF أولاً.',
  tool_split_pdf_err_encrypted: 'يبدو أن هذا PDF محمي بكلمة مرور. أزل الحماية ثم أعد المحاولة.',
  tool_split_pdf_err_fflate: 'فشل تحميل مكتبة ZIP. تحقق من الشبكة وأعد المحاولة.',
  tool_split_pdf_err_load: 'تعذّر قراءة PDF (تالف أو غير مدعوم). جرّب ملفاً آخر.',
  tool_split_pdf_err_range: 'صفحات غير صالحة أو خارج النطاق. استخدم نطاقاً يبدأ من 1 مثل 1-3,5.',
  tool_split_pdf_err_split: 'فشل التقسيم. تحقق من الملف والنطاقات ثم أعد المحاولة.',
  tool_split_pdf_example:
    'المثال ينشئ PDF من ثلاث صفحات، يقسّمه صفحة بصفحة، ويفعّل التنزيل لـ ZIP يحوي page-1.pdf وpage-2.pdf وpage-3.pdf.',
  tool_split_pdf_example_title: 'تقسيم ملف PDF',
  tool_split_pdf_faq_a1:
    'لا. يعمل pdf-lib وfflate في تبويبك (قد تُحمَّل السكربتات من CDN). لا نرفع ملفك إلى خوادمنا.',
  tool_split_pdf_faq_a2:
    'الصفحات من 1: 1-3,5 تعني الصفحات 1–3 والصفحة 5. المسافات اختيارية. القيم الفارغة أو خارج النطاق تفشل.',
  tool_split_pdf_faq_a3:
    'إن كان الناتج أكثر من ملف تحصل على ZIP. مخرج واحد يُنزَّل كـ PDF.',
  tool_split_pdf_faq_a4:
    'ملفات PDF المحمية غالباً لا تُفتح هنا. أزل كلمة المرور بأداة موثوقة ثم قسّم.',
  tool_split_pdf_faq_a5:
    'دمج PDF يجمع عدة ملفات في واحد. هذه الأداة تستخرج صفحات من ملف واحد إلى ملفات منفصلة.',
  tool_split_pdf_faq_q1: 'هل يُرفع ملف PDF؟',
  tool_split_pdf_faq_q2: 'كيف تُكتب نطاقات الصفحات؟',
  tool_split_pdf_faq_q3: 'متى ZIP ومتى PDF؟',
  tool_split_pdf_faq_q4: 'ماذا عن PDF المشفّر؟',
  tool_split_pdf_faq_q5: 'ما الفرق عن دمج PDF؟',
  tool_split_pdf_how_body:
    'اختر PDF واحداً، اختر كل صفحة أو نطاقاً، اضغط تقسيم ثم تنزيل. مخرجات متعددة → ZIP؛ مخرج واحد → PDF. كل شيء محلي بعد تحميل المكتبات.',
  tool_split_pdf_how_title: 'طريقة العمل',
  tool_split_pdf_mode_every: 'كل صفحة (ملف لكل صفحة)',
  tool_split_pdf_mode_label: 'وضع التقسيم',
  tool_split_pdf_mode_ranges: 'نطاقات صفحات مخصصة',
  tool_split_pdf_pages_label: 'عدد الصفحات',
  tool_split_pdf_ranges_hint: 'مثال: 1-3,5 (من 1)',
  tool_split_pdf_ranges_label: 'نطاقات الصفحات',
  tool_split_pdf_rules_body: 'نطاقات من 1 والتسمية وZIP مقابل PDF والخصوصية وحالات الفشل محلياً.',
  tool_split_pdf_rules_item_1: 'الأوضاع: كل صفحة → PDF لكل صفحة؛ النطاقات → PDF لكل مقطع مفصول بفاصلة (مثل 1-3 و5).',
  tool_split_pdf_rules_item_2: 'الأسماء: page-N.pdf لصفحة واحدة؛ pages-A-B.pdf لنطاق متصل.',
  tool_split_pdf_rules_item_3: 'المخرج: أكثر من ملف → ZIP عبر fflate؛ ملف واحد → تنزيل ذلك PDF.',
  tool_split_pdf_rules_item_4: 'الخصوصية والحدود: البايتات في التبويب؛ المشفّر/التالف يفشل بوضوح؛ الملفات الضخمة قد تبطئ الذاكرة.',
  tool_split_pdf_rules_title: 'قواعد متوقعة',
  tool_split_pdf_sample: 'تحميل مثال',
  tool_split_pdf_split: 'تقسيم',
  tool_split_pdf_stats_tpl: '{n} ملف/ملفات · {bytes}',
  tool_split_pdf_status_done: 'تم — اضغط تنزيل للحفظ.',
  tool_split_pdf_status_splitting: 'جارٍ تقسيم PDF…',
  tool_split_pdf_title: 'تقسيم ملف PDF الخاص بي',
  tool_split_pdf_usecase_1: 'مكتبي: استخراج صفحة توقيع من عقد طويل.',
  tool_split_pdf_usecase_2: 'تعليمي: تقسيم PDF شرائح إلى منشورات لكل صفحة.',
  tool_split_pdf_usecase_3: 'تشغيلي: أرشفة كل صفحة ممسوحة كملف مستقل.',
  tool_split_pdf_usecases_title: 'مناسب لـ',
  tool_split_pdf_warn_large: 'الملف أكبر من نحو 25 ميغابايت — قد يبطئ التقسيم أو يفشل في بعض المتصفحات.',
  tool_split_pdf_warn_pdflib: 'فشل تحميل مكتبة PDF. تحقق من الشبكة وأعد المحاولة.',
};
export default ar;
