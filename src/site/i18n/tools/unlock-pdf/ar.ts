/**
 * i18n tool shard (unlock-pdf / ar). RTL locale; known password only, not cracking.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_unlock_pdf_article:
    'أزل كلمة مرور فتح PDF عندما تعرفها مسبقًا—في المتصفح، وليس أداة كسر. الملف يبقى على جهازك.',
  tool_unlock_pdf_choose_file: 'اختر PDF مشفرًا',
  tool_unlock_pdf_clear: 'مسح',
  tool_unlock_pdf_desc: 'أزل كلمة مرور فتح تعرفها—على جهازك دون رفع إلى خادم.',
  tool_unlock_pdf_description:
    'افتح PDF محميًا في المتصفح إذا كنت تعرف كلمة مرور الفتح—دون رفع إلى خادم. الخطوات: اختر PDF مشفرًا، أدخل كلمة المرور (يُرفض الفراغ إن لزم)، اضغط إلغاء القفل ثم نزّل unlocked.pdf. مثال: صفحة واحدة مشفرة بكلمة sample تُملأ تلقائيًا وتُفتح. ليس كسرًا ولا brute force ولا استرجاعًا لكلمات منسية. فوق ~25 MB قد يبطئ.',
  tool_unlock_pdf_download: 'تنزيل',
  tool_unlock_pdf_drop_hint: 'أو أسقط PDF مشفرًا هنا. المعالجة في هذا التبويب.',
  tool_unlock_pdf_empty: 'اختر PDF مشفرًا أولًا.',
  tool_unlock_pdf_encrypted_label: 'محمي بكلمة مرور',
  tool_unlock_pdf_err_load: 'تعذّر قراءة PDF (تالف أو غير مدعوم). جرّب ملفًا آخر.',
  tool_unlock_pdf_err_not_encrypted: 'يبدو أن PDF غير محمي بكلمة فتح. استخدم دمج PDF أو أدوات أخرى.',
  tool_unlock_pdf_err_password_empty: 'أدخل كلمة مرور الفتح—يُرفض الفراغ إن كان الملف يحتاجها.',
  tool_unlock_pdf_err_password_wrong: 'كلمة مرور خاطئة. أعد إدخال ما وضعته عند الحماية.',
  tool_unlock_pdf_err_unlock: 'فشل إلغاء القفل. تحقق من الملف وكلمة المرور ثم أعد المحاولة.',
  tool_unlock_pdf_example:
    'المثال ينشئ PDF صفحة واحدة مشفرًا بكلمة sample، يملأ كلمة المرور، يفتحه ويُمكّن تنزيل unlocked.pdf.',
  tool_unlock_pdf_example_title: 'إلغاء قفل PDF',
  tool_unlock_pdf_faq_a1:
    'لا. يزيل الحماية فقط عند إدخال كلمة الفتح الصحيحة. لا كسر ولا brute force ولا استرجاع كلمات مجهولة.',
  tool_unlock_pdf_faq_a2:
    'لا. مكتبة PDF يعمل في تبويبك (تُحمَّل السكربتات من هذا الموقع). PDF لا يُرفع إلى خوادمنا.',
  tool_unlock_pdf_faq_a3:
    'ستظهر رسالة واضحة بكلمة مرور خاطئة. استخدم نفس كلمة حماية PDF أو تطبيق آخر—لا نخمّنها.',
  tool_unlock_pdf_faq_a4:
    'حماية PDF تضيف كلمة فتح؛ دمج PDF بعد الفتح هنا. إلغاء القفل للملفات التي تطلب كلمة عند الفتح فقط.',
  tool_unlock_pdf_faq_q1: 'هل يكسر أو يسترجع كلمات منسية؟',
  tool_unlock_pdf_faq_q2: 'هل يُرفع PDF؟',
  tool_unlock_pdf_faq_q3: 'ماذا إن كانت كلمة المرور خاطئة؟',
  tool_unlock_pdf_faq_q4: 'ما علاقته بـ حماية PDF؟',
  tool_unlock_pdf_how_body:
    'اختر PDF محميًا، أدخل كلمة الفتح المعروفة، اضغط إلغاء القفل ثم تنزيل. فك التشفير محليًا بعد تحميل مكتبة PDF. يُرفض الفراغ إن لزم.',
  tool_unlock_pdf_how_item_1: "اختر الإدخال عبر «اختر PDF مشفرًا»",
  tool_unlock_pdf_how_item_2: "اضبط الخيارات ثم اضغط «إلغاء القفل»",
  tool_unlock_pdf_how_item_3: "راجع المعاينة أو عدد الصفحات أو رسالة الحالة",
  tool_unlock_pdf_how_item_4: "اضغط «تنزيل» لحفظ النتيجة",
  tool_unlock_pdf_how_title: 'كيف يعمل',
  tool_unlock_pdf_pages_label: 'الصفحات',
  tool_unlock_pdf_password_label: 'كلمة مرور الفتح',
  tool_unlock_pdf_rules_body: 'قواعد كلمة المرور، النطاق، الخصوصية وحالات الفشل.',
  tool_unlock_pdf_rules_item_1: 'النطاق: يجب أن تعرف كلمة الفتح. لا كسر ولا brute force ولا استرجاع مجهول.',
  tool_unlock_pdf_rules_item_2: 'المدخل: PDF مشفر فقط. غير المحمي يُرفض برسالة واضحة.',
  tool_unlock_pdf_rules_item_3: 'المخرج: PDF غير مشفر (unlocked.pdf). كلمة خاطئة = خطأ صريح.',
  tool_unlock_pdf_rules_item_4: 'الخصوصية: البيانات في التبويب؛ دون رفع؛ تحذير ~25 MB؛ ملفات ضخمة قد تفشل.',
  tool_unlock_pdf_rules_title: 'قواعد متوقعة',
  tool_unlock_pdf_sample: 'تحميل مثال',
  tool_unlock_pdf_stats_tpl: '{pages} ص · مفتوح · {bytes}',
  tool_unlock_pdf_status_done: 'تم — اضغط تنزيل لحفظ unlocked.pdf.',
  tool_unlock_pdf_status_sample_pwd: 'المثال جاهز — كلمة المرور «{pwd}». نزّل unlocked.pdf للتجربة.',
  tool_unlock_pdf_status_working: 'جارٍ فتح PDF…',
  tool_unlock_pdf_title: 'إلغاء قفل ملف PDF',
  tool_unlock_pdf_unlock: 'إلغاء القفل',
  tool_unlock_pdf_usecase_1: 'مكتب: أزل كلمة الفتح الخاصة بك لدمج أو طباعة في تطبيق آخر.',
  tool_unlock_pdf_usecase_2: 'عمليات: افتح تصديرًا شفّرته سابقًا قبل رفعه لبوابة.',
  tool_unlock_pdf_usecase_3: 'طلاب: أزل الحماية من مسح بعد التصحيح بكلمة المرور التي وضعتها.',
  tool_unlock_pdf_usecases_title: 'حالات مناسبة',
  tool_unlock_pdf_warn_large: 'ملف أكبر من ~25 MB — قد يبطئ أو يفشل في بعض المتصفحات.',
  tool_unlock_pdf_warn_pdflib: 'فشل تحميل مكتبة PDF. تحقق من الشبكة وأعد المحاولة.',
};
export default ar;
