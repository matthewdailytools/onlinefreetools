import type { SiteLangDict } from '../../../types';

/**
 * ar copy for add-an-audio-track-to-a-video (F7 V2).
 * How≥4 Why≥4 Rules≥4 FAQ≥5. دمج صوت محلي على فيديو محلي؛ بلا يوتيوب؛ ليس كتمًا فقط؛ ليس استخراجًا فقط.
 */
const ar: SiteLangDict = {
  tool_add_an_audio_track_to_a_video_title: 'إضافة مسار صوتي إلى فيديو',
  tool_add_an_audio_track_to_a_video_desc:
    'ادمج مقطعًا صوتيًا محليًا مع فيديو محلي ثم نزّل النتيجة. على الجهاز فقط—بلا تنزيل من يوتيوب.',
  tool_add_an_audio_track_to_a_video_description:
    'أضف مسارًا صوتيًا إلى فيديو محلي في المتصفح بدمج الصورة مع المقطع المختار ثم نزّل. الخطوات: اختر فيديوًا وصوتًا، أضف الصوت، عاين، نزّل. مثال: مقطع صامت مع WAV قصير. يستخدم captureStream وMediaRecorder—غالبًا WebM؛ ليس إعادة تغليف بلا خسارة. لا يُرفع أبدًا. بلا تنزيل من يوتيوب.',
  tool_add_an_audio_track_to_a_video_article:
    'المقاطع الصامتة أو ضعيفة الصوت تحتاج غالبًا مسارًا جديدًا قبل المشاركة. تفتح هذه الصفحة فيديوًا وصوتًا محليين، وتلتقط الإطارات دون المسارات الأصلية، وتفك شفرة الصوت في AudioContext، ثم تدمج وتعيد الترميز بـ MediaRecorder—غالبًا WebM حسب المتصفح. المدة تتبع الفيديو؛ الصوت الأطول يُقطع والأقصر ينتهي مبكرًا. لا تنزّل يوتيوب أو عناوين أخرى، وليست كتمًا فقط دون إضافة صوت، ولا تستخرج الصوت كملف مستقل. النجاح يعتمد على تشغيل الملفين ودعم MediaRecorder مع صوت. احتفظ بالأصلين. كل شيء يعمل على جهازك.',
  tool_add_an_audio_track_to_a_video_choose_video: 'اختر ملف فيديو',
  tool_add_an_audio_track_to_a_video_hint_video:
    'أسقط أو اختر MP4 أو WebM أو MOV أو M4V محليًا يمكن للمتصفح تشغيله. حتى 80 ميبيبايت وحوالي 3 دقائق. بلا يوتيوب أو لصق رابط.',
  tool_add_an_audio_track_to_a_video_choose_audio: 'اختر ملف صوت',
  tool_add_an_audio_track_to_a_video_hint_audio:
    'أسقط أو اختر WAV أو MP3 أو M4A أو مشابهًا محليًا يمكن للمتصفح فك شفرته. حتى 40 ميبيبايت.',
  tool_add_an_audio_track_to_a_video_convert: 'إضافة الصوت',
  tool_add_an_audio_track_to_a_video_download: 'تنزيل',
  tool_add_an_audio_track_to_a_video_sample: 'تحميل عيّنة',
  tool_add_an_audio_track_to_a_video_clear: 'مسح',
  tool_add_an_audio_track_to_a_video_advanced: 'ملاحظات الدمج',
  tool_add_an_audio_track_to_a_video_settings_hint:
    'عادةً يعيد المتصفح الترميز عبر MediaRecorder بعد إسقاط المسارات الأصلية وإرفاق مقطعك. المخرج غالبًا WebM وليس إعادة تغليف بلا خسارة. هذه الصفحة لا تنزّل يوتيوب أبدًا.',
  tool_add_an_audio_track_to_a_video_progress: 'تقدم إضافة الصوت',
  tool_add_an_audio_track_to_a_video_read: 'قراءة',
  tool_add_an_audio_track_to_a_video_decode: 'فك الشفرة',
  tool_add_an_audio_track_to_a_video_merge: 'دمج',
  tool_add_an_audio_track_to_a_video_write: 'كتابة',
  tool_add_an_audio_track_to_a_video_done: 'جاهز. عاين الفيديو المدمج ثم نزّل.',
  tool_add_an_audio_track_to_a_video_failed:
    'تعذّر دمج الصوت على هذا الفيديو. جرّب ملفات أقصر يمكن تشغيلها.',
  tool_add_an_audio_track_to_a_video_elapsed: 'مرّ {s} ث',
  tool_add_an_audio_track_to_a_video_preview: 'معاينة الفيديو المدمج',
  tool_add_an_audio_track_to_a_video_result: '{seconds} ث · مع صوت · {mime} · {output} كيبيبايت',
  tool_add_an_audio_track_to_a_video_sample_name: 'عيّنة-إضافة-صوت',
  tool_add_an_audio_track_to_a_video_empty: 'اختر فيديوًا وصوتًا محليين، أو حمّل العيّنة أولًا.',
  tool_add_an_audio_track_to_a_video_empty_state:
    'لا ملفات بعد. أسقط فيديوًا ومقطعًا محليين أو انقر تحميل عيّنة. هذه الأداة تدمج الصوت على الصورة—ليست كتمًا فقط ولا استخراجًا فقط ولا تنزيل يوتيوب.',
  tool_add_an_audio_track_to_a_video_video_label: 'فيديو: {name}',
  tool_add_an_audio_track_to_a_video_audio_label: 'صوت: {name}',
  tool_add_an_audio_track_to_a_video_err_file: 'اختر ملف فيديو وملف صوت محليين مدعومين.',
  tool_add_an_audio_track_to_a_video_err_format:
    'ملفات غير مدعومة أو غير قابلة للتشغيل. استخدم أنواع فيديو/صوت شائعة يمكن فك شفرتها. بلا روابط يوتيوب.',
  tool_add_an_audio_track_to_a_video_err_limit:
    'استخدم فيديوًا محليًا حتى 80 ميبيبايت / حوالي 3 دقائق، وصوتًا حتى 40 ميبيبايت.',
  tool_add_an_audio_track_to_a_video_err_decode:
    'تعذّر على المتصفح فك شفرة الفيديو أو الصوت. جرّب حاوية أخرى أو مقطعًا أقصر.',
  tool_add_an_audio_track_to_a_video_err_encoder:
    'تعذّر على MediaRecorder كتابة الفيديو المدمج. جرّب Chrome/Edge أو WebM/MP4 أقصر مع WAV/MP3.',
  tool_add_an_audio_track_to_a_video_how_title: 'كيفية إضافة مسار صوتي إلى فيديو',
  tool_add_an_audio_track_to_a_video_how_body:
    'اختر فيديوًا وصوتًا محليين، شغّل إضافة الصوت، عاين، ثم نزّل—بلا رفع وبلا يوتيوب.',
  tool_add_an_audio_track_to_a_video_how_item_1:
    'اختر فيديوًا وصوتًا محليين (أو حمّل العيّنة). لا تلصق روابط يوتيوب.',
  tool_add_an_audio_track_to_a_video_how_item_2:
    'انقر إضافة الصوت وانتظر قراءة ← فك الشفرة ← دمج ← كتابة.',
  tool_add_an_audio_track_to_a_video_how_item_3:
    'عاين النتيجة. يجب أن تسمع المسار الجديد مع الصورة.',
  tool_add_an_audio_track_to_a_video_how_item_4:
    'راجع سطر النتيجة ثم انقر تنزيل.',
  tool_add_an_audio_track_to_a_video_why_choose_title: 'لماذا تختار أدواتنا لإضافة مسار صوتي',
  tool_add_an_audio_track_to_a_video_why_choose_item_1:
    'اطّلع على المدة ونوع MIME وحجم المخرج بالكيبيبايت قبل الحفظ.',
  tool_add_an_audio_track_to_a_video_why_choose_item_2:
    'مهمة دمج واضحة بحدود MediaRecorder صادقة—بلا وعد زائف بإعادة تغليف بلا خسارة.',
  tool_add_an_audio_track_to_a_video_why_choose_item_3:
    'القراءة والتسجيل على جهازك؛ الصفحة لا ترفع ملفاتك للمعالجة.',
  tool_add_an_audio_track_to_a_video_why_choose_item_4:
    'تغيير أي ملف يمسح التنزيل القديم حتى لا تحفظ دمجًا قديمًا.',
  tool_add_an_audio_track_to_a_video_rules_title: 'قواعد الدمج وحدود المتصفح الصادقة',
  tool_add_an_audio_track_to_a_video_rules_body:
    'كل تشغيل يسقط المسارات الأصلية ويرفق مقطعك ويعيد الترميز بـ MediaRecorder. المخرج غالبًا WebM. ليس تنزيل يوتيوب ولا كتمًا فقط ولا استخراج صوت.',
  tool_add_an_audio_track_to_a_video_rules_item_1:
    'فيديو محلي واحد حتى 80 ميبيبايت وحوالي ثلاث دقائق، مع صوت محلي حتى 40 ميبيبايت. يجب نجاح التشغيل/فك الشفرة أولًا.',
  tool_add_an_audio_track_to_a_video_rules_item_2:
    'مدة المخرج تتبع الفيديو. الصوت الأطول يُقطع؛ الأقصر ينتهي قبل الصورة.',
  tool_add_an_audio_track_to_a_video_rules_item_3:
    'بلا يوتيوب أو رابط بودكاست أو تنزيل عن بُعد. اللصق غير مدعوم.',
  tool_add_an_audio_track_to_a_video_rules_item_4:
    'قد تتغير الحاويات والترميزات. احتفظ بالأصلين؛ التنزيل ملف معاد ترميزه جديد.',
  tool_add_an_audio_track_to_a_video_example_title: 'جرّب مقطعًا صامتًا قصيرًا مع نغمة',
  tool_add_an_audio_track_to_a_video_example:
    'تحميل العيّنة يبني فيديو لوحة قصيرًا ونغمة بسيطة ثم يشغّل إضافة الصوت تلقائيًا. ترى الصورة مع المسار الجديد. التشغيل لا يبدأ وحده—اضغط تشغيل إن أردت المشاهدة.',
  tool_add_an_audio_track_to_a_video_usecases_title: 'متى يفيد ذلك',
  tool_add_an_audio_track_to_a_video_usecase_1:
    'تسجيل شاشة صامت وقاعدة WAV—ادمجهما هنا ثم نزّل للمشاركة.',
  tool_add_an_audio_track_to_a_video_usecase_2:
    'استبدل مسارًا مدمجًا ضعيفًا بمقطع محلي أوضح دون تثبيت محرر سطح مكتب.',
  tool_add_an_audio_track_to_a_video_faq_q1: 'هل يمكنه تنزيل يوتيوب أو لصق رابط؟',
  tool_add_an_audio_track_to_a_video_faq_a1:
    'لا. فقط ملفات محلية لديك بالفعل. لا يوجد منزّل يوتيوب ولا جلب عن بُعد.',
  tool_add_an_audio_track_to_a_video_faq_q2: 'هل هذا مثل إزالة الصوت من فيديو؟',
  tool_add_an_audio_track_to_a_video_faq_a2:
    'لا. الكتم/الإزالة مهمة أخرى. هذه الصفحة ترفق مسارًا جديدًا بالصورة.',
  tool_add_an_audio_track_to_a_video_faq_q3: 'هل يستخرج الصوت كتنزيل منفصل؟',
  tool_add_an_audio_track_to_a_video_faq_a3:
    'لا. استخراج الصوت من فيديو أداة أخرى. هنا النتيجة ملف فيديو بصوت مدمج.',
  tool_add_an_audio_track_to_a_video_faq_q4: 'هل سيكون المخرج نفس MP4 المصدر؟',
  tool_add_an_audio_track_to_a_video_faq_a4:
    'عادة لا. المتصفحات تعيد الترميز عادةً بـ MediaRecorder، غالبًا إلى WebM. قد تتغير الجودة والحاوية.',
  tool_add_an_audio_track_to_a_video_faq_q5: 'هل يُرفع شيء إلى خادم؟',
  tool_add_an_audio_track_to_a_video_faq_a5:
    'لا. فك الشفرة والتسجيل يعملان في المتصفح على جهازك. تحتاج الصفحة شبكة عند أول تحميل؛ العمل دون اتصال غير مضمون.',
  tool_add_an_audio_track_to_a_video_faq_q6: 'ماذا لو كان الصوت أطول من الفيديو؟',
  tool_add_an_audio_track_to_a_video_faq_a6:
    'الدمج يتبع مدة الفيديو. الصوت بعد نهاية الصورة لا يُحفظ في التنزيل.',
};
export default ar;
