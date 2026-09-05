/**
 * i18n tool shard（merge-pdf / ar）. إعادة كتابة مستقلة موجّهة للبحث.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_merge_pdf_article:
    'ادمج عدة ملفات PDF حسب ترتيب القائمة باستخدام pdf-lib في المتصفح دون رفع. أعد الترتيب، وافهم أخطاء التشفير، ثم نزّل مستنداً واحداً.',
  tool_merge_pdf_choose_files: 'اختر ملفات PDF',
  tool_merge_pdf_clear: 'مسح',
  tool_merge_pdf_desc: 'اجمع عدة ملفات PDF في ملف واحد داخل المتصفح — دون رفع إلى خادم؛ تبقى الملفات على جهازك.',
  tool_merge_pdf_description:
    'ادمج ملفات PDF في المتصفح ونزّل مستنداً واحداً — دون رفع. الخطوات: أضف ملفين على الأقل، رتّب القائمة، ادمج، ثم نزّل. مثال: عينتان من صفحة واحدة تصبحان PDF من صفحتين. الملفات المشفرة أو التالفة تفشل برسالة واضحة. يختلف عن «صور إلى PDF» الذي يبدأ من الصور لا من ملفات PDF جاهزة.',
  tool_merge_pdf_download: 'تنزيل',
  tool_merge_pdf_drop_hint: 'أو أسقط ملفات PDF هنا. المعالجة تبقى في هذا التبويب.',
  tool_merge_pdf_empty: 'أضف ملفين PDF على الأقل للدمج.',
  tool_merge_pdf_err_encrypted: 'يبدو أن ملفاً محمياً بكلمة مرور. أزل الحماية ثم أعد المحاولة.',
  tool_merge_pdf_err_load: 'تعذّر قراءة ملف PDF (تالف أو غير مدعوم). جرّب ملفاً آخر.',
  tool_merge_pdf_err_merge: 'فشل الدمج. تحقق من الملفات وأعد المحاولة.',
  tool_merge_pdf_example:
    'يُحمّل المثال ملفين من صفحة واحدة (A وB)، يدمجهما حسب ترتيب القائمة، ويفعّل التنزيل لملف merged.pdf من صفحتين.',
  tool_merge_pdf_example_title: 'دمج ملفات PDF في ملف واحد',
  tool_merge_pdf_faq_a1:
    'لا. يعمل pdf-lib في تبويبك (قد تُحمَّل المكتبة من CDN). لا نرفع ملفاتك إلى خوادمنا.',
  tool_merge_pdf_faq_a2:
    '«صور إلى PDF» ينشئ PDF من الصور. هذه الأداة تجمع ملفات PDF موجودة في مستند واحد.',
  tool_merge_pdf_faq_a3:
    'نعم — استخدم أعلى/أسفل لكل صف. ترتيب القائمة من الأعلى للأسفل هو ترتيب الصفحات.',
  tool_merge_pdf_faq_a4:
    'ملفات PDF المحمية غالباً لا تُفتح هنا. أزل كلمة المرور بأداة موثوقة ثم ادمج.',
  tool_merge_pdf_faq_a5: 'معظم قارئات PDF على الحاسوب والجوال تفتح النتيجة.',
  tool_merge_pdf_faq_q1: 'هل تُرفع ملفات PDF؟',
  tool_merge_pdf_faq_q2: 'ما الفرق عن «صور إلى PDF»؟',
  tool_merge_pdf_faq_q3: 'هل يمكن تغيير ترتيب الدمج؟',
  tool_merge_pdf_faq_q4: 'ماذا عن PDF المشفّر؟',
  tool_merge_pdf_faq_q5: 'هل تُفتح النتيجة في Acrobat أو المعاينة؟',
  tool_merge_pdf_how_body:
    'أضف ملفين أو أكثر، رتّب إن لزم، اضغط دمج ثم تنزيل. ترتيب الصفحات يتبع القائمة. كل شيء محلي بعد تحميل المكتبة.',
  tool_merge_pdf_how_item_1: "اختر الإدخال عبر «اختر ملفات PDF»",
  tool_merge_pdf_how_item_2: "اضبط الخيارات ثم اضغط «دمج»",
  tool_merge_pdf_how_item_3: "راجع المعاينة أو عدد الصفحات أو رسالة الحالة",
  tool_merge_pdf_how_item_4: "اضغط «تنزيل» لحفظ النتيجة",
  tool_merge_pdf_how_title: 'طريقة العمل',
  tool_merge_pdf_merge: 'دمج',
  tool_merge_pdf_move_down: 'أسفل',
  tool_merge_pdf_move_up: 'أعلى',
  tool_merge_pdf_remove: 'إزالة',
  tool_merge_pdf_rules_body: 'ترتيب القائمة وcopyPages والخصوصية وحالات الفشل عند الدمج محلياً.',
  tool_merge_pdf_rules_item_1: 'الترتيب: تُنسخ الصفحات حسب القائمة (الملف الأعلى أولاً). رتّب قبل الدمج.',
  tool_merge_pdf_rules_item_2: 'المحرك: يحمّل pdf-lib كل PDF ويستخدم copyPages في مستند جديد — دون إرسال ملفاتك.',
  tool_merge_pdf_rules_item_3: 'الخصوصية: تبقى البايتات في تبويب المتصفح. قد تُحمَّل المكتبة من CDN.',
  tool_merge_pdf_rules_item_4: 'الحدود: يلزم ملفان على الأقل؛ المشفّر/التالف يفشل برسالة مقروءة؛ المجموعات الضخمة قد تبطئ الذاكرة.',
  tool_merge_pdf_rules_title: 'قواعد متوقعة',
  tool_merge_pdf_sample: 'تحميل مثال',
  tool_merge_pdf_stats_tpl: '{n} ملفات → {pages} صفحات · {bytes}',
  tool_merge_pdf_status_done: 'تم — اضغط تنزيل لحفظ merged.pdf.',
  tool_merge_pdf_status_merging: 'جارٍ دمج PDF…',
  tool_merge_pdf_title: 'دمج ملفات PDF في ملف واحد',
  tool_merge_pdf_usecase_1: 'مكتبي: جمع صفحات التوقيع والمرفقات في حزمة واحدة.',
  tool_merge_pdf_usecase_2: 'طلابي: ضم فصول الواجب قبل التسليم.',
  tool_merge_pdf_usecase_3: 'تشغيلي: تسليم الملخصات والمواصفات في PDF واحد.',
  tool_merge_pdf_usecases_title: 'مناسب لـ',
  tool_merge_pdf_warn_large: 'ملف أكبر من نحو 25 ميغابايت — قد يبطئ الدمج أو يفشل في بعض المتصفحات.',
  tool_merge_pdf_warn_pdflib: 'فشل تحميل مكتبة PDF. تحقق من الشبكة وأعد المحاولة.',
};
export default ar;
