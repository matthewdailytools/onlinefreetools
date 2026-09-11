/**
 * i18n tool shard (trim-an-audio-clip-and-export / ar).
 * عنوان المهمة: قص مقطع صوت وتصديره. محرر الصوت الكامل ليس H1.
 */
import type { SiteLangDict } from '../../../types';

/** نصوص عربية لقص مقطع صوت وتصديره. */
const ar: SiteLangDict = {
  tool_trim_an_audio_clip_and_export_advanced: 'إعدادات متقدمة (اختياري)',
  tool_trim_an_audio_clip_and_export_article:
    'افتح ملف صوت على جهازك، عيّن البداية والنهاية، اضغط قص ثم تصدير WAV أو تصدير MP3. يبقى الملف على جهازك دون رفع إلى خادم. هذه قصّة واحدة وليست استوديو موجة.',
  tool_trim_an_audio_clip_and_export_bitrate: 'معدل بت MP3',
  tool_trim_an_audio_clip_and_export_bitrate_hint: 'الافتراضي 128 kbps. يُستخدم فقط عند تصدير MP3.',
  tool_trim_an_audio_clip_and_export_choose_file: 'اختر ملف صوت',
  tool_trim_an_audio_clip_and_export_clear: 'مسح',
  tool_trim_an_audio_clip_and_export_desc:
    'قص صوت محلي بين البداية والنهاية ثم صدّر WAV أو MP3. يبقى على جهازك دون رفع إلى خادم.',
  tool_trim_an_audio_clip_and_export_description:
    'قص صوت على جهازك: عيّن البداية والنهاية ثم نزّل WAV أو MP3 دون رفع إلى خادم. الخطوات: افتح الملف، انقر أو اسحب الموجة (أو اكتب البداية والنهاية)، قص، تصدير WAV أو تصدير MP3. مثال: من نغمة 5 ثوانٍ أبقِ 1.00–3.00 ث كـ WAV (أو MP3 بـ 128 kbps). قص mp3 وتقطيع مقطع صوتي وقص أغنية وقص صوت هي نفس عملية التصدير. ليست محرر موجة كاملاً؛ لا نقبل فيديو كمدخل رئيسي.',
  tool_trim_an_audio_clip_and_export_drop_hint: 'أو أفلت WAV أو MP3 أو M4A أو OGG هنا. المعالجة تبقى في هذا التبويب.',
  tool_trim_an_audio_clip_and_export_empty: 'اختر ملف صوت أولاً.',
  tool_trim_an_audio_clip_and_export_end: 'النهاية (ثوانٍ)',
  tool_trim_an_audio_clip_and_export_err_caps:
    'هذا الملف يتجاوز حد الجهاز (حوالي 40 MB / 20 دقيقة على سطح المكتب، و20 MB / 8 دقائق على شاشة ضيقة). قصّه في مكان آخر أو استخدم ملفًا أقصر.',
  tool_trim_an_audio_clip_and_export_err_decode:
    'تعذّر على هذا المتصفح فك ترميز الملف. جرّب WAV أو MP3 أو مقطعًا بلا DRM.',
  tool_trim_an_audio_clip_and_export_err_empty: 'لا يوجد ما يُقص. حمّل ملفًا أو المثال أولاً.',
  tool_trim_an_audio_clip_and_export_err_lame: 'فشل تحميل مرمّز MP3. ابقَ في هذا التبويب وحاول تصدير MP3 مجددًا.',
  tool_trim_an_audio_clip_and_export_err_range: 'يجب أن تكون النهاية بعد البداية وضمن المدة بعد الفك.',
  tool_trim_an_audio_clip_and_export_err_video:
    'هذه الصفحة لا تقبل فيديو كمدخل رئيسي. استخرج الصوت أولاً ثم قص الملف الصوتي.',
  tool_trim_an_audio_clip_and_export_example:
    'تحميل مثال يبني نغمة 5.00 ثوانٍ في الذاكرة، يضع البداية 1.00 والنهاية 3.00، ثم قص يُبقي نحو 2.00 ث. تصدير WAV يكتب PCM؛ تصدير MP3 يستخدم 128 kbps ما لم تغيّر الإعدادات المتقدمة.',
  tool_trim_an_audio_clip_and_export_example_title: 'مثال',
  tool_trim_an_audio_clip_and_export_export_mp3: 'تصدير MP3',
  tool_trim_an_audio_clip_and_export_export_wav: 'تصدير WAV',
  tool_trim_an_audio_clip_and_export_faq_a1:
    'لا. الفك والقص يجريان في هذا التبويب. تُحمَّل السكربتات من هذا الموقع. لا يُرسل الملف إلى خوادمنا.',
  tool_trim_an_audio_clip_and_export_faq_a2:
    'لا. قص mp3 وقص صوت وتقطيع مقطع صوتي وقص أغنية هي هذه الأداة: أبقِ البداية–النهاية ثم تصدير WAV أو تصدير MP3.',
  tool_trim_an_audio_clip_and_export_faq_a3:
    'افتراضيًا يلتصق القص بأقرب عبور صفري حتى يقل النقر. يمكنك إيقاف ذلك من الإعدادات المتقدمة (اختياري).',
  tool_trim_an_audio_clip_and_export_faq_a4:
    'WAV يحفظ PCM المقصوص. MP3 أصغر (128 kbps افتراضيًا) ويُحمَّل المرمّز فقط عند تصدير MP3.',
  tool_trim_an_audio_clip_and_export_faq_a5:
    'لا. الصفحة تقص البداية والنهاية ثم تصدّر. محرر صوت كامل / محطة موجة أداة لاحقة منفصلة.',
  tool_trim_an_audio_clip_and_export_faq_a6:
    'يمكنك القص إلى نحو 30 ثانية، لكننا لا نكتب M4A ولا نضيف تضاؤلًا تلقائيًا. مواصفات نغمة الرنين عمل آخر.',
  tool_trim_an_audio_clip_and_export_faq_a7:
    'لا. استخراج الصوت من فيديو أو يوتيوب خارج النطاق. استخدم ملف صوت لديك حق معالجته.',
  tool_trim_an_audio_clip_and_export_faq_a8:
    'سطح المكتب: نحو 40 MB أو 20 دقيقة. الشاشات الضيقة: نحو 20 MB أو 8 دقائق. الملفات فوق الحد تُرفض ولا تُقص سرًا.',
  tool_trim_an_audio_clip_and_export_faq_q1: 'هل يُرفع الصوت؟',
  tool_trim_an_audio_clip_and_export_faq_q2: 'بحثت عن قص mp3 أو قص صوت أو تقطيع مقطع صوتي. هل هذه أداة أخرى؟',
  tool_trim_an_audio_clip_and_export_faq_q3: 'لماذا يتحرك موضع القص؟ في مواقع أخرى أسمع نقرة.',
  tool_trim_an_audio_clip_and_export_faq_q4: 'أصدّر WAV أم MP3؟',
  tool_trim_an_audio_clip_and_export_faq_q5: 'هل هذا محرر صوت أونلاين؟',
  tool_trim_an_audio_clip_and_export_faq_q6: 'هل أصنع نغمة iPhone بصيغة M4A؟',
  tool_trim_an_audio_clip_and_export_faq_q7: 'هل أستخرج الصوت من فيديو أو يوتيوب؟',
  tool_trim_an_audio_clip_and_export_faq_q8: 'ما أكبر ملف يمكن قصه؟',
  tool_trim_an_audio_clip_and_export_how_body:
    'أبقِ الجزء بين البداية والنهاية ثم نزّل WAV أو MP3 دون رفع الملف إلى خادم.',
  tool_trim_an_audio_clip_and_export_how_item_1: 'افتح ملف صوت (أو اضغط تحميل مثال).',
  tool_trim_an_audio_clip_and_export_how_item_2: 'انقر أو اسحب على الموجة (أو اكتب البداية والنهاية) لتحديد الجزء المراد إبقاؤه.',
  tool_trim_an_audio_clip_and_export_how_item_3: 'اضغط قص.',
  tool_trim_an_audio_clip_and_export_how_item_4: 'اضغط تصدير WAV أو تصدير MP3.',
  tool_trim_an_audio_clip_and_export_how_title: 'كيف يعمل',
  tool_trim_an_audio_clip_and_export_hud_decode: 'جارٍ فك ترميز الملف في هذا التبويب…',
  tool_trim_an_audio_clip_and_export_hud_decoded: 'تم الفك. عيّن البداية والنهاية ثم اضغط قص.',
  tool_trim_an_audio_clip_and_export_hud_elapsed_tpl: 'مرت {s} ث',
  tool_trim_an_audio_clip_and_export_hud_encode: 'جارٍ ترميز MP3…',
  tool_trim_an_audio_clip_and_export_hud_fail_hint: 'صحّح الملف أو الأوقات ثم قص مجددًا.',
  tool_trim_an_audio_clip_and_export_hud_fail_title: 'توقف القص',
  tool_trim_an_audio_clip_and_export_hud_next: 'انتهى. الخطوة التالية: تصدير WAV أو تصدير MP3.',
  tool_trim_an_audio_clip_and_export_hud_next_mp3: 'انتهى. يفترض أن يبدأ تنزيل MP3.',
  tool_trim_an_audio_clip_and_export_hud_pct_tpl: '{pct}%',
  tool_trim_an_audio_clip_and_export_hud_step_decode: 'فك',
  tool_trim_an_audio_clip_and_export_hud_step_encode: 'ترميز',
  tool_trim_an_audio_clip_and_export_hud_step_trim: 'قص',
  tool_trim_an_audio_clip_and_export_hud_title: 'تقدم القص',
  tool_trim_an_audio_clip_and_export_hud_trim: 'جارٍ قص نطاق البداية–النهاية…',
  tool_trim_an_audio_clip_and_export_hud_working: 'يبدأ…',
  tool_trim_an_audio_clip_and_export_meta_tpl: '{name} · {dur}ث · {rate} Hz · {ch} قناة',
  tool_trim_an_audio_clip_and_export_pause: 'إيقاف مؤقت',
  tool_trim_an_audio_clip_and_export_play: 'تشغيل',
  tool_trim_an_audio_clip_and_export_preview_hint: 'انقر أو اسحب على الموجة لتعيين البداية والنهاية. التشغيل يستمع إلى هذا النطاق.',
  tool_trim_an_audio_clip_and_export_result_tpl: 'أُبقي {dur}ث ({start}–{end}ث). التصدير جاهز.',
  tool_trim_an_audio_clip_and_export_rules_body:
    'تُنسخ العينات بين البداية والنهاية إلى مخزن جديد. الافتراضي يقرّب كل حد إلى عبور صفري قريب. WAV يكتب PCM بـ 16 بت. MP3 بثابت معدل البت المختار.',
  tool_trim_an_audio_clip_and_export_rules_item_1:
    'حد سطح المكتب نحو 40 MB أو 20 دقيقة؛ الشاشة الضيقة نحو 20 MB أو 8 دقائق. فوق الحد يُرفض لا يُقص سرًا.',
  tool_trim_an_audio_clip_and_export_rules_item_2:
    'الملفات تبقى على جهازك دون رفع إلى خادم. مرمّز MP3 يُحمَّل من هذا الموقع بعد تصدير MP3 فقط.',
  tool_trim_an_audio_clip_and_export_rules_item_3:
    'الفك يعتمد على المتصفح. DRM وبعض الترميزات وحاويات الفيديو تفشل برسالة واضحة.',
  tool_trim_an_audio_clip_and_export_rules_item_4:
    'لا نخلط مسارات ولا نضيف تضاؤلًا ولا نكتب M4A ولا نجلب يوتيوب. ملف واحد، نطاق واحد، تصدير واحد.',
  tool_trim_an_audio_clip_and_export_rules_title: 'قواعد متوقعة',
  tool_trim_an_audio_clip_and_export_sample: 'تحميل مثال',
  tool_trim_an_audio_clip_and_export_start: 'البداية (ثوانٍ)',
  tool_trim_an_audio_clip_and_export_status_done: 'تم.',
  tool_trim_an_audio_clip_and_export_title: 'قص مقطع صوت وتصديره',
  tool_trim_an_audio_clip_and_export_trim: 'قص',
  tool_trim_an_audio_clip_and_export_usecase_1: 'قص صوت حلقة بودكاست: تجاوز مقدمة 8 ثوانٍ، وصدّر MP3 للدردشة.',
  tool_trim_an_audio_clip_and_export_usecase_2: 'أبقِ اقتباس 12 ثانية من تسجيل اجتماع ونزّل WAV للأرشيف.',
  tool_trim_an_audio_clip_and_export_usecase_3: 'احذف الصمت من طرفي مذكرة صوت — نفس القصّ الذي يريده من يبحث قص mp3 أو قص أغنية.',
  tool_trim_an_audio_clip_and_export_usecases_title: 'حالات مناسبة',
  tool_trim_an_audio_clip_and_export_why_choose_body:
    'مصمم لقص واحد وتنزيل واحد، مع حدود وتقليل نقر يمكن التحقق منها في الصفحة.',
  tool_trim_an_audio_clip_and_export_why_choose_item_1:
    'الفك والقص يبقيان في هذا التبويب؛ أول تحميل للمرمّز عند تصدير MP3.',
  tool_trim_an_audio_clip_and_export_why_choose_item_2:
    'الملفات فوق الحجم أو المدة تُرفض بدل القص الصامت.',
  tool_trim_an_audio_clip_and_export_why_choose_item_3:
    'الالتصاق بالعبور الصفري مفعّل افتراضيًا ليقل النقر عند الوصل؛ يمكن إيقافه.',
  tool_trim_an_audio_clip_and_export_why_choose_item_4:
    'WAV وMP3 زرا تصدير منفصلان يطابقان الخطوات؛ معدل البت في المتقدم فقط.',
  tool_trim_an_audio_clip_and_export_why_choose_title: 'لماذا تختار أدواتنا قص مقطع صوت وتصديره',
  tool_trim_an_audio_clip_and_export_zerocross: 'ألصق البداية والنهاية بأقرب عبور صفري',
  tool_trim_an_audio_clip_and_export_zerocross_hint: 'مفعّل افتراضيًا. يقلل النقر عند الوصل. أوقفه للحواف الدقيقة لكل عينة.',
};
export default ar;
