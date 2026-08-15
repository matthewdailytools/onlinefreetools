/**
 * i18n tool shard (archive-extractor / ar).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
  tool_archive_extractor_article:
    'افتح أرشيفات ZIP و TAR و TAR.GZ داخل المتصفح، راجع شجرة الملفات، عاين النصوص أو الصور الشائعة، وصدّر المحتوى المدعوم كملف ZIP نظيف. يبقى الأرشيف على جهازك ولا يُرفع إلى خادم.',
  tool_archive_extractor_choose_file: 'اختر أرشيفًا',
  tool_archive_extractor_clear: 'مسح',
  tool_archive_extractor_desc:
    'استخراج الأرشيف أونلاين لفتح ZIP و TAR و TAR.GZ في المتصفح، مع معاينة الملفات وتصدير ZIP دون رفع إلى خادم.',
  tool_archive_extractor_description:
    'استخدم أداة استخراج الأرشيف أونلاين لفتح الملفات المضغوطة داخل المتصفح: اختر ZIP أو TAR أو TAR.GZ، راجع شجرة الملفات، عاين النصوص أو الصور، نزّل ملفًا واحدًا أو صدّر المحتوى المدعوم كملف ZIP نظيف. تبقى الملفات على جهازك ولا تُرفع إلى خادم. يوضح المثال sample-archive.tar.gz ملفات README.txt و src/index.js و assets/logo.png بمسارات آمنة.',
  tool_archive_extractor_download_all: 'تصدير ZIP',
  tool_archive_extractor_download_file: 'تنزيل ملف',
  tool_archive_extractor_drop_hint:
    'أسقط أرشيفًا واحدًا هنا. ZIP و TAR و TAR.GZ تعمل الآن؛ RAR و 7Z و ISO تعرض ملاحظات دعم.',
  tool_archive_extractor_empty: 'اختر أرشيفًا أولًا.',
  tool_archive_extractor_engine_badge: 'ملاحظات دعم',
  tool_archive_extractor_err_archive:
    'تعذر قراءة هذا الأرشيف. قد يكون تالفًا أو مشفرًا أو مقسمًا إلى أجزاء أو يستخدم طريقة ضغط غير مدعومة.',
  tool_archive_extractor_err_engine:
    'RAR و 7Z و ISO تحتاج إلى محرك صيغ أثقل غير مضمّن في هذا الإصدار. ZIP و TAR و TAR.GZ ما زالت تعمل داخل المتصفح.',
  tool_archive_extractor_err_fflate: 'تعذر تحميل محرك الأرشيف. تحقق من الشبكة وحاول مجددًا.',
  tool_archive_extractor_err_no_file: 'لا يوجد ملف مستخرج محدد.',
  tool_archive_extractor_err_unsupported:
    'هذا النوع غير مدعوم هنا بعد. جرّب ZIP أو TAR أو TAR.GZ، أو استخدم أداة سطح مكتب لهذا التنسيق.',
  tool_archive_extractor_example:
    'يفتح المثال sample-archive.tar.gz كأرشيف حقيقي بثلاثة عناصر: README.txt و src/index.js و assets/logo.png. تعرض الصفحة الشجرة، وتعاين README.txt، ويمكنها تصدير المحتوى المدعوم كملف extracted-archive.zip.',
  tool_archive_extractor_example_title: 'مثال',
  tool_archive_extractor_exported_all: 'تم تجميع الملفات في ZIP جديد بمسارات آمنة.',
  tool_archive_extractor_faq_a1:
    'لا. تتم قراءة الأرشيف في تبويب المتصفح وتبقى البايتات المستخرجة على جهازك. قد يتم تحميل سكربت مساعد من CDN، لكن ملفاتك لا تُرفع إلى خوادمنا.',
  tool_archive_extractor_faq_a2:
    'المسارات العاملة في هذا الإصدار هي ZIP و TAR و TAR.GZ و TGZ. تظهر RAR و 7Z و ISO كصيغ مع ملاحظات دعم إلى أن يتم تفعيل محرك متعدد الصيغ أثقل.',
  tool_archive_extractor_faq_a3:
    'الأرشيفات المحمية بكلمة مرور تتطلب إدخال الكلمة، وقد تفشل إذا كان التنسيق أو التشفير غير مدعوم. هذه الأداة لا تكسر كلمات المرور ولا تستعيدها أو تخمنها.',
  tool_archive_extractor_faq_a4:
    'المسارات المطلقة ومقاطع ../ والأسماء المكررة أو الأحرف غير الآمنة يُعاد تسميتها أو حظرها قبل التصدير. أهداف الروابط الرمزية لا تُكتب كروابط.',
  tool_archive_extractor_faq_a5:
    'الأرشيفات الكبيرة قد تكون بطيئة أو تستنفد الذاكرة في المتصفح، خصوصًا على الهواتف. تعرض الصفحة تحذيرًا عندما يبدو عدد الملفات أو الحجم بعد التوسيع أو نسبة التوسع خطرة.',
  tool_archive_extractor_faq_a6:
    'تصدير ZIP يعني إعادة تجميع الملفات المدعومة المستخرجة في ZIP جديد بمسارات نظيفة. لا يعني الحفاظ على كل ميزات تنسيق الأرشيف الأصلي.',
  tool_archive_extractor_faq_q1: 'هل يتم رفع الأرشيف؟',
  tool_archive_extractor_faq_q2: 'ما صيغ الأرشيف التي تعمل؟',
  tool_archive_extractor_faq_q3: 'هل يفتح RAR أو 7Z محميًا بكلمة مرور؟',
  tool_archive_extractor_faq_q4: 'ماذا يحدث للمسارات غير الآمنة أو الروابط الرمزية؟',
  tool_archive_extractor_faq_q5: 'كيف يتعامل مع الأرشيفات الكبيرة جدًا؟',
  tool_archive_extractor_faq_q6: 'هل RAR إلى ZIP أو 7Z إلى ZIP تحويل حقيقي؟',
  tool_archive_extractor_file_count_label: 'الملفات',
  tool_archive_extractor_format_label: 'الصيغة',
  tool_archive_extractor_how_body:
    'اختر أو أسقط أرشيفًا واحدًا. تكشف الصفحة ZIP أو TAR أو TAR.GZ، وتبني قائمة ملفات آمنة، وتعاين إدخالات النص أو الصور الصغيرة. اختر صفًا لتنزيل ملف واحد، أو صدّر الملفات المدعومة المستخرجة كملف ZIP جديد.',
  tool_archive_extractor_how_title: 'طريقة العمل',
  tool_archive_extractor_load_engine: 'تحميل محرك الصيغ',
  tool_archive_extractor_load_sample: 'تحميل مثال',
  tool_archive_extractor_no_preview:
    'المعاينة غير متاحة لهذا النوع من الملفات. لا يزال بإمكانك تنزيل الملف.',
  tool_archive_extractor_preview_title: 'معاينة',
  tool_archive_extractor_rules_body:
    'استخراج الأرشيف يحتاج قواعد واضحة لدعم الصيغ وسلامة المسارات والمعاينة وتصدير ZIP.',
  tool_archive_extractor_rules_item_1:
    'ZIP يقرأ الدليل المركزي. TAR.GZ يُفتح بخطوتين: فك GZIP ثم قراءة ترويسات TAR.',
  tool_archive_extractor_rules_item_2:
    'RAR و 7Z و ISO تحتاج إلى محرك متعدد الصيغ أثقل؛ لا تعرض الصفحة هذه المسارات كأنها نشطة قبل تحميله.',
  tool_archive_extractor_rules_item_3:
    'سلامة المسارات: الشرطات المائلة الأولى وحروف الأقراص و ../ والأسماء المكررة والأحرف غير الآمنة تُنظف قبل التصدير.',
  tool_archive_extractor_rules_item_4:
    'المعاينة: يمكن عرض النصوص الصغيرة و Markdown و JSON و CSV و PNG و JPEG و GIF و WebP و SVG؛ غير ذلك يعرض البيانات الوصفية فقط.',
  tool_archive_extractor_rules_item_5:
    'الحدود: الأرشيفات المشفرة أو المقسمة أو التالفة أو solid أو ذات التوسع غير المعتاد قد تفشل أو تحتاج أداة سطح مكتب.',
  tool_archive_extractor_rules_title: 'قواعد متوقعة',
  tool_archive_extractor_selected_label: 'المحدد',
  tool_archive_extractor_size_label: 'الحجم بعد الاستخراج',
  tool_archive_extractor_status_done: 'تم فتح الأرشيف — اختر ملفًا أو صدّر ZIP.',
  tool_archive_extractor_status_reading: 'جارٍ قراءة الأرشيف...',
  tool_archive_extractor_title:
    'استخراج الأرشيف أونلاين — افتح الملفات المضغوطة داخل المتصفح',
  tool_archive_extractor_total_size_label: 'الحجم بعد التوسيع',
  tool_archive_extractor_usecase_1:
    'التطوير: افتح إصدارًا برمجيًا .tar.gz، راجع README وملفات src، ثم نزّل ما تحتاجه فقط.',
  tool_archive_extractor_usecase_2:
    'التشغيل: راجع حزمة أصول ZIP أو RAR أو 7Z من مورد، وصدّر الملفات المدعومة كملف ZIP نظيف للفريق.',
  tool_archive_extractor_usecase_3:
    'الأجهزة المُدارة: افحص مواد دراسية أو مرفقات على Chromebook دون تثبيت برنامج سطح مكتب.',
  tool_archive_extractor_usecases_title: 'استخدامات مناسبة',
  tool_archive_extractor_warn_dangerous:
    'تمت إعادة تسمية بعض المسارات أو تخطيها لأسباب أمان قبل التصدير.',
  tool_archive_extractor_warn_large:
    'تحذير أرشيف كبير: قد يكون هذا الملف بطيئًا أو كثيف الذاكرة داخل المتصفح.',
};

export default ar;
