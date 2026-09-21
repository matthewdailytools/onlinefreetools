import type { SiteLangDict } from '../../../types';

/**
 * Arabic copy for join-audio-files-in-order (F7 A2).
 * دمج ملفات الصوت بالترتيب؛ ليس مزجًا متراكبًا؛ ليس تقاطع تلاشي.
 */
const ar: SiteLangDict = {
  tool_join_audio_files_in_order_title: 'دمج ملفات الصوت بالترتيب',
  tool_join_audio_files_in_order_desc:
    'ادمج عدة مقاطع محلية طرفًا بطرف حسب ترتيب القائمة ثم نزّل ملف WAV بعمق 16 بت. على الجهاز فقط—ليس مزجًا متراكبًا.',
  tool_join_audio_files_in_order_description:
    'ادمج عدة ملفات صوت محلية طرفًا بطرف حسب ترتيب القائمة في المتصفح ثم نزّل ملف WAV بعمق 16 بت. الخطوات: أضف المقاطع، أعد الترتيب إن لزم، ادمج، استمع، نزّل. مثال: حمّل نغمتين قصيرتين للعينة. دمج متتابع فقط—ليس مزجًا متراكبًا ولا تقاطع تلاشي. لا يُرفع أبدًا.',
  tool_join_audio_files_in_order_article:
    'مقاطع البودكاست والمذكرات الصوتية وأجزاء الأغاني تحتاج غالبًا إلى ملف متصل واحد. تتيح هذه الصفحة إسقاط عدة ملفات محلية وإعادة ترتيبها في قائمة وفك ترميز كل مقطع في المتصفح ومحاذاة معدّل العيّنات والقنوات ثم لصق العيّنات بذلك الترتيب في WAV PCM بعمق 16 بت. لا تكدّس المسارات معًا في الوقت نفسه (مزج متراكب) ولا تطبّق تقاطع تلاشي بين الأغاني ولا تستخرج صوتًا من فيديو. يعتمد النجاح على قدرة المتصفح على فك ترميز كل حاوية. تبقى القنوات واحدة أو اثنتين. احتفظ بالأصول؛ التنزيل ملف جديد. يعمل على جهازك.',
  tool_join_audio_files_in_order_choose: 'إضافة ملفات صوت',
  tool_join_audio_files_in_order_hint:
    'أسقط أو اختر عدة WAV أو MP3 أو M4A أو AAC أو OGG. يمكنك الإضافة لاحقًا. حتى 20 مقطعًا، 40 ميبيبايت لكل ملف، 20 دقيقة إجماليًا بعد الدمج؛ أحادي أو ستيريو.',
  tool_join_audio_files_in_order_list_label: 'ترتيب الدمج',
  tool_join_audio_files_in_order_move_up: 'أعلى',
  tool_join_audio_files_in_order_move_down: 'أسفل',
  tool_join_audio_files_in_order_remove: 'إزالة',
  tool_join_audio_files_in_order_convert: 'دمج',
  tool_join_audio_files_in_order_download: 'تنزيل WAV',
  tool_join_audio_files_in_order_sample: 'تحميل عيّنة',
  tool_join_audio_files_in_order_clear: 'مسح',
  tool_join_audio_files_in_order_advanced: 'ملاحظات الدمج',
  tool_join_audio_files_in_order_settings_hint:
    'تُدمج المقاطع طرفًا بطرف حسب ترتيب القائمة. تُحاذى معدّلات العيّنات المختلفة إلى المقطع الأول. دمج متتابع فقط—ليس مزجًا متراكبًا ولا تقاطع تلاشي.',
  tool_join_audio_files_in_order_progress: 'تقدّم الدمج',
  tool_join_audio_files_in_order_read: 'قراءة',
  tool_join_audio_files_in_order_decode: 'فك ترميز',
  tool_join_audio_files_in_order_join: 'دمج',
  tool_join_audio_files_in_order_write: 'كتابة',
  tool_join_audio_files_in_order_done: 'جاهز. استمع إلى WAV المدمج ثم نزّله.',
  tool_join_audio_files_in_order_failed: 'فشل الدمج. جرّب ملفات أقل وأقصر وصحيحة.',
  tool_join_audio_files_in_order_elapsed: 'مضى {s} ث',
  tool_join_audio_files_in_order_preview: 'الاستماع إلى WAV المدمج',
  tool_join_audio_files_in_order_result:
    '{files} ملفات · {seconds} ث · {channels} قناة · {rate} هرتز · WAV {output} كيبيبايت',
  tool_join_audio_files_in_order_sample_name: 'نغمة-دمج',
  tool_join_audio_files_in_order_empty: 'أضف ملفّي صوت على الأقل أو حمّل العيّنة أولًا.',
  tool_join_audio_files_in_order_empty_state:
    'لا مقاطع بعد. أسقط عدة ملفات محلية أو انقر تحميل عيّنة لنغمتين قصيرتين. هذه الأداة تلصق حسب ترتيب القائمة—ولا تمزج المسارات فوق بعضها.',
  tool_join_audio_files_in_order_queue_count: '{n} ملف في الطابور',
  tool_join_audio_files_in_order_err_file: 'أضف على الأقل ملفّي صوت مدعومين.',
  tool_join_audio_files_in_order_err_format:
    'صوت غير مدعوم أو تالف. استخدم WAV أو MP3 أو M4A أو AAC أو OGG يمكن للمتصفح فك ترميزها.',
  tool_join_audio_files_in_order_err_limit:
    'حتى 20 ملفًا، 40 ميبيبايت لكل منها، أحادي أو ستيريو، والمدة الإجمالية بعد الدمج أقل من 20 دقيقة.',
  tool_join_audio_files_in_order_err_decode:
    'تعذّر على المتصفح فك ترميز أحد الملفات. أزله أو جرّب ترميزًا آخر.',
  tool_join_audio_files_in_order_err_encoder: 'تعذّرت كتابة WAV المدمج. حاول الدمج مجددًا.',
  tool_join_audio_files_in_order_how_title: 'كيفية دمج ملفات الصوت بالترتيب',
  tool_join_audio_files_in_order_how_body:
    'أضف عدة مقاطع محلية، حدّد الترتيب، شغّل الدمج، استمع، ثم نزّل WAV بعمق 16 بت—دون رفع الملفات.',
  tool_join_audio_files_in_order_how_item_1:
    'أضف ملفّي صوت أو أكثر (أو حمّل العيّنة لنغمتين قصيرتين). أسقط مجددًا للإضافة.',
  tool_join_audio_files_in_order_how_item_2:
    'استخدم أعلى / أسفل / إزالة في القائمة ليطابق الترتيب ما تريد سماعه.',
  tool_join_audio_files_in_order_how_item_3:
    'انقر دمج وانتظر قراءة → فك ترميز → دمج → كتابة.',
  tool_join_audio_files_in_order_how_item_4:
    'استمع إلى المسار المتصل، راجع سطر النتيجة، ثم انقر تنزيل WAV.',
  tool_join_audio_files_in_order_why_choose_title: 'لماذا تختار أدوات دمج ملفات الصوت بالترتيب لدينا',
  tool_join_audio_files_in_order_why_choose_item_1:
    'اطّلع على عدد الملفات والمدة والقنوات ومعدّل العيّنات وحجم الخرج قبل الحفظ.',
  tool_join_audio_files_in_order_why_choose_item_2:
    'مهمة لصق واضحة—ترتيب القائمة طرفًا بطرف—مع حدود صادقة إن تعذّر فك ترميز مقطع.',
  tool_join_audio_files_in_order_why_choose_item_3:
    'القراءة وفك الترميز والكتابة تجري على جهازك؛ الصفحة لا ترفع مقاطعك للمعالجة.',
  tool_join_audio_files_in_order_why_choose_item_4:
    'تغيير الطابور يمسح التنزيل القديم حتى لا تحفظ WAV قديمًا بالخطأ.',
  tool_join_audio_files_in_order_rules_title: 'قواعد اللصق وحدود المتصفح الصادقة',
  tool_join_audio_files_in_order_rules_body:
    'كل تشغيل يلصق المقاطع طرفًا بطرف حسب ترتيب القائمة. تُحاذى معدّلات العيّنات إلى المقطع الأول. التصدير WAV بعمق 16 بت. ليس مزجًا متراكبًا ولا تقاطع تلاشي ولا استخراجًا من فيديو.',
  tool_join_audio_files_in_order_rules_item_1:
    'من ملفّين إلى عشرين ملف صوت محلي، كل منها حتى 40 ميبيبايت. المدة المدمجة أقل من عشرين دقيقة. القنوات واحدة أو اثنتان.',
  tool_join_audio_files_in_order_rules_item_2:
    'هذه الصفحة تلصق. لا تكدّس الصوت فوق الموسيقى في الوقت نفسه ولا تطبّق تقاطع تلاشي بين الأغاني.',
  tool_join_audio_files_in_order_rules_item_3:
    'لا تُنسخ الوسوم. لا تُستبدل الأصول. يعتمد النجاح على دعم فك الترميز في المتصفح لكل ملف.',
  tool_join_audio_files_in_order_rules_item_4:
    'بعد الدمج استخدم قص مقطع صوت وتصديره للقص. لمصادر الفيديو استخرج الصوت أولًا.',
  tool_join_audio_files_in_order_example_title: 'جرّب نغمتين قصيرتين',
  tool_join_audio_files_in_order_example:
    'تحميل العيّنة يضيف نغمتي WAV قصيرتين (طبقة مختلفة) إلى الطابور ثم يشغّل الدمج. يجب أن تسمع النغمة أ ثم ب بلا تداخل. التشغيل لا يبدأ تلقائيًا—اضغط تشغيل في المعاينة إن أردت الاستماع.',
  tool_join_audio_files_in_order_usecases_title: 'متى يساعد هذا',
  tool_join_audio_files_in_order_usecase_1:
    'عدة مذكرات صوتية يجب أن تصبح مسارًا متصلًا—أضف بالترتيب، ادمج، نزّل WAV.',
  tool_join_audio_files_in_order_usecase_2:
    'أجزاء أغنية أو فصول بودكاست محفوظة كملفات منفصلة تحتاج تصديرًا واحدًا دون رفعها إلى موقع دمج.',
  tool_join_audio_files_in_order_usecase_3: 'عدة ملفات WAV للفصول يجب أن تصبح ملفًا واحدًا متتابعًا.',
  tool_join_audio_files_in_order_faq_q1: 'هل هذا مثل مزج مسارين فوق بعضهما؟',
  tool_join_audio_files_in_order_faq_a1:
    'لا. المزج المتراكب يشغّل المقاطع معًا (مثل صوت فوق موسيقى). هذه الصفحة تضعها واحدًا بعد الآخر حسب ترتيب القائمة فقط.',
  tool_join_audio_files_in_order_faq_q2: 'هل يوجد تقاطع تلاشي بين الأغاني؟',
  tool_join_audio_files_in_order_faq_a2:
    'لا. لا تقاطع تلاشي ولا انتقال دي جي. تلتقي المقاطع طرفًا بطرف. تقاطع التلاشي عمل مختلف.',
  tool_join_audio_files_in_order_faq_q3: 'هل يمكنني تغيير ترتيب الدمج؟',
  tool_join_audio_files_in_order_faq_a3:
    'نعم. استخدم أعلى وأسفل في كل صف، أو أزل مقطعًا وأضفه مجددًا. الدمج يتبع القائمة دائمًا من الأعلى إلى الأسفل.',
  tool_join_audio_files_in_order_faq_q4: 'ماذا لو اختلفت معدّلات العيّنات؟',
  tool_join_audio_files_in_order_faq_a4:
    'تُحاذى المقاطع اللاحقة إلى معدّل عيّنات المقطع الأول قبل اللصق. تبقى القنوات أحادية أو ستيريو.',
  tool_join_audio_files_in_order_faq_q5: 'هل يُرفع الصوت إلى خادم؟',
  tool_join_audio_files_in_order_faq_a5:
    'لا. القراءة وفك الترميز والكتابة تجري في متصفحك على الجهاز. تحتاج الصفحة شبكة عند التحميل الأول؛ الاستخدام دون اتصال غير مضمون.',
  tool_join_audio_files_in_order_faq_q6: 'هل يمكن دمج صوت مستخرج من فيديو؟',
  tool_join_audio_files_in_order_faq_a6:
    'استخرج المسار أولًا بأداة استخراج الصوت من ملف فيديو ثم أضف الصوت المُصدَّر هنا. هذه الصفحة لا تقبل حاويات الفيديو كمدخلات دمج.',
};
export default ar;
