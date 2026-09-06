import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
  tool_unzip_file_article:
    'افتح ملف ZIP داخل المتصفح، راجع شجرة الملفات، عاين النصوص أو الصور، ونزّل الملفات المطلوبة. يبقى الأرشيف على جهازك ولا يُرفع إلى خادم.',
  tool_unzip_file_choose_file: 'اختر ZIP',
  tool_unzip_file_clear: 'مسح',
  tool_unzip_file_desc:
    'فك ضغط ZIP أونلاين داخل المتصفح مع معاينة المحتوى وتنزيل الملفات، دون رفع إلى خادم.',
  tool_unzip_file_description:
    'فك ضغط ملف ZIP أونلاين داخل المتصفح: اختر الملف أو اسحبه، راجع شجرة الملفات، عاين النصوص أو الصور، ثم نزّل ملفًا واحدًا أو صدّر الكل. تبقى الملفات على جهازك ولا تُرفع إلى خادم. يوضح مثال project-files.zip ملفات readme.txt و assets/logo.png و docs/notes.md مع مسارات آمنة.',
  tool_unzip_file_download_all: 'تصدير الكل',
  tool_unzip_file_download_file: 'تنزيل ملف',
  tool_unzip_file_drop_hint: 'أسقط ملف .zip واحدًا هنا. المعالجة تبقى في هذه الصفحة.',
  tool_unzip_file_empty: 'اختر ملف ZIP أولًا.',
  tool_unzip_file_err_archive: 'تعذر قراءة ملف ZIP. قد يكون تالفًا أو مشفرًا أو ليس ملف ZIP.',
  tool_unzip_file_err_fflate: 'تعذر تحميل محرك ZIP. تحقق من الشبكة وحاول مجددًا.',
  tool_unzip_file_err_no_file: 'لا يوجد ملف مستخرج محدد.',
  tool_unzip_file_example:
    'يفك المثال project-files.zip ثلاثة عناصر آمنة: readme.txt و assets/logo.png و docs/notes.md. تعرض الصفحة الشجرة، وتعاين readme.txt، وتفعّل تنزيل ملف وتصدير الكل.',
  tool_unzip_file_example_title: 'مثال',
  tool_unzip_file_exported_all: 'تم تجميع الملفات في ZIP جديد بمسارات آمنة.',
  tool_unzip_file_faq_a1:
    'لا. يُقرأ ملف ZIP داخل تبويب المتصفح وتبقى البيانات المستخرجة على جهازك. قد يُحمّل محرك ZIP من هذا الموقع، لكن الأرشيف نفسه لا يُرفع إلى خوادمنا.',
  tool_unzip_file_faq_a2:
    'هذه الصفحة مخصصة أولًا لملفات ZIP. صيغ RAR و7Z وISO وTAR.GZ تحتاج محرك أرشيف أثقل، ومن الأفضل دعمها في أداة منفصلة لاستخراج الأرشيفات.',
  tool_unzip_file_faq_a3:
    'قد تفشل ملفات ZIP المحمية بكلمة مرور ما لم يُضف دعم متوافق. هذه الأداة لا تكسر كلمات المرور ولا تستعيدها.',
  tool_unzip_file_faq_a4:
    'المسارات المطلقة، ومقاطع ../، والأسماء الفارغة أو المكررة تُعاد تسميتها أو تُحظر قبل التصدير. تعرض القائمة متى تم تغيير المسار.',
  tool_unzip_file_faq_a5:
    'قد تكون ملفات ZIP الكبيرة بطيئة أو تستهلك الذاكرة في المتصفح، خصوصًا على الهاتف. تعرض الصفحة تحذيرًا عند كثرة الملفات أو كبر الحجم بعد الاستخراج أو ارتفاع نسبة التوسع.',
  tool_unzip_file_faq_q1: 'هل يتم رفع ملف ZIP؟',
  tool_unzip_file_faq_q2: 'هل يستخرج RAR أو 7Z أو TAR.GZ؟',
  tool_unzip_file_faq_q3: 'هل يفتح ZIP محميًا بكلمة مرور؟',
  tool_unzip_file_faq_q4: 'ماذا يحدث للمسارات غير الآمنة؟',
  tool_unzip_file_faq_q5: 'كيف يتعامل مع ملفات ZIP كبيرة جدًا؟',
  tool_unzip_file_file_count_label: 'الملفات',
  tool_unzip_file_how_body:
    'اختر أو أسقط ملف ZIP واحدًا. تقرأ الصفحة الأرشيف، تنظف المسارات، تبني قائمة الملفات، وتعرض معاينات آمنة للنصوص والصور. اختر أي صف للمعاينة والتنزيل، أو صدّر كل الملفات كملف ZIP جديد بمسارات منقحة.',
  tool_unzip_file_how_title: 'طريقة العمل',
  tool_unzip_file_load_sample: 'تحميل مثال',
  tool_unzip_file_no_preview:
    'المعاينة غير متاحة لهذا النوع من الملفات. ما زال بإمكانك تنزيل الملف.',
  tool_unzip_file_preview_title: 'معاينة',
  tool_unzip_file_rules_body:
    'فك ZIP داخل المتصفح يحتاج قواعد واضحة للمسارات والمعاينة والتنزيل وحالات الفشل.',
  tool_unzip_file_rules_item_1:
    'أمان المسارات: الشرطات الأولى، وأحرف الأقراص، ومقاطع ../، والأسماء المكررة تُنظف قبل التصدير.',
  tool_unzip_file_rules_item_2:
    'المعاينة: يمكن عرض النصوص الصغيرة وMarkdown وJSON وCSV وPNG وJPEG وGIF وWebP وSVG؛ أما البقية فتعرض بياناتها فقط.',
  tool_unzip_file_rules_item_3:
    'التنزيل: الملف المحدد ينزل مباشرة؛ تصدير الكل ينشئ ZIP جديدًا من الملفات ذات المسارات الآمنة.',
  tool_unzip_file_rules_item_4:
    'الحدود: الأرشيفات المشفرة أو المقسمة أو التالفة أو ذات التوسع غير العادي قد تفشل أو تحتاج تأكيدًا في إصدارات لاحقة.',
  tool_unzip_file_rules_title: 'قواعد متوقعة',
  tool_unzip_file_selected_label: 'المحدد',
  tool_unzip_file_size_label: 'الحجم بعد الاستخراج',
  tool_unzip_file_status_done: 'تم فك ZIP — اختر ملفًا أو صدّر الكل.',
  tool_unzip_file_status_reading: 'جارٍ قراءة ZIP...',
  tool_unzip_file_title: 'فك ضغط ZIP أونلاين — عرض الملفات واستخراجها داخل المتصفح',
  tool_unzip_file_total_size_label: 'الحجم المستخرج',
  tool_unzip_file_usecase_1:
    'المكتب: افتح مرفق ZIP من مورد ونزّل الفاتورة أو الصورة المطلوبة فقط.',
  tool_unzip_file_usecase_2:
    'الدراسة: راجع مواد دورة على جهاز مُدار أو جهاز لوحي دون تثبيت برنامج سطح مكتب.',
  tool_unzip_file_usecase_3:
    'التطوير: افحص شجرة إصدار مصدر ثم سجّل checksum لملف ZIP الأصلي.',
  tool_unzip_file_usecases_title: 'استخدامات مناسبة',
  tool_unzip_file_warn_dangerous:
    'تمت إعادة تسمية بعض المسارات لأسباب أمنية قبل التصدير.',
  tool_unzip_file_warn_large:
    'تحذير أرشيف كبير: قد يكون هذا ZIP بطيئًا أو كثيف الذاكرة في المتصفح.',
};

export default ar;
