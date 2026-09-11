/**
 * i18n tool shard (split-an-audio-file-by-duration / ar).
 * H1 جملة مهمة؛ أجزاء متساوية / كل 60 ثانية في الوصف والأسئلة.
 */
import type { SiteLangDict } from '../../../types';

/** النص العربي: قسّم ملفًا صوتيًا حسب المدة ثم نزّل ZIP. */
const ar: SiteLangDict = {
  tool_split_an_audio_file_by_duration_advanced: 'إعدادات متقدمة (اختياري)',
  tool_split_an_audio_file_by_duration_article:
    'قسّم ملفًا صوتيًا حسب المدة في هذا التبويب: افتح الملف، حدّد الثواني، اضغط تقسيم حسب المدة ثم تنزيل ZIP. كل مقطع N ثانية إلا الأخير الذي يحتفظ بالباقي. الملف يبقى على جهازك ولا يُرفع إلى خادم.',
  tool_split_an_audio_file_by_duration_bitrate: 'معدل MP3',
  tool_split_an_audio_file_by_duration_bitrate_hint: 'الافتراضي 128 كيلوبت/ث. يُستخدم فقط عندما يكون ZIP بصيغة MP3.',
  tool_split_an_audio_file_by_duration_chip_180: '3 دقائق',
  tool_split_an_audio_file_by_duration_chip_30: '30 ث',
  tool_split_an_audio_file_by_duration_chip_300: '5 دقائق',
  tool_split_an_audio_file_by_duration_chip_60: '60 ث',
  tool_split_an_audio_file_by_duration_choose_file: 'اختر ملفًا صوتيًا',
  tool_split_an_audio_file_by_duration_chunk: 'طول كل جزء (بالثواني)',
  tool_split_an_audio_file_by_duration_chunk_hint:
    'ثانيتان تناسب المثال. للمحاضرة جرّب 60 ث أو 3 دقائق. المقطع الأخير يحتفظ بالوقت المتبقي.',
  tool_split_an_audio_file_by_duration_clear: 'مسح',
  tool_split_an_audio_file_by_duration_clip_download: 'تنزيل هذا المقطع',
  tool_split_an_audio_file_by_duration_clip_play: 'تشغيل هذا المقطع',
  tool_split_an_audio_file_by_duration_clip_row_tpl: 'مقطع {n} · {dur}ث ({start}s–{end}s)',
  tool_split_an_audio_file_by_duration_clips_title: 'مقاطع جاهزة لأرشيف ZIP',
  tool_split_an_audio_file_by_duration_desc:
    'قطّع الملف إلى مقاطع متساوية الطول ونزّل ZIP؛ يبقى على الجهاز دون رفع إلى خادم.',
  tool_split_an_audio_file_by_duration_description:
    'قسّم ملفًا صوتيًا حسب المدة على جهازك: أجزاء متساوية، الأخير يحتفظ بالباقي، ثم ZIP — دون رفع إلى خادم. الخطوات: افتح الملف، حدّد الثواني (المثال ثانيتان؛ الأزرار 30 / 60 / 180 / 300 ث)، تقسيم حسب المدة، تنزيل ZIP. مثال: 5.00 ث كل ثانيتين تعطي 2.00 / 2.00 / 1.00 ث. البحث عن تقسيم الصوت حسب المدة أو تقسيم mp3 إلى أجزاء متساوية أو تقطيع المقطع كل 60 ثانية هو العمل نفسه. ليس تقسيمًا عند الصمت ولا cue ولا قصًا يدويًا ولا كتم فيديو.',
  tool_split_an_audio_file_by_duration_download_zip: 'تنزيل ZIP',
  tool_split_an_audio_file_by_duration_drop_hint: 'أو أفلت WAV أو MP3 أو M4A أو OGG هنا. المعالجة تبقى في هذا التبويب.',
  tool_split_an_audio_file_by_duration_empty: 'اختر ملفًا صوتيًا أولًا.',
  tool_split_an_audio_file_by_duration_equal_parts: 'أو قسّم إلى N أجزاء متساوية',
  tool_split_an_audio_file_by_duration_equal_parts_hint:
    'فارغ = حقل الثواني. من 2 إلى 50 يجعل طول الجزء = المدة الكلية ÷ N لهذه القسمة.',
  tool_split_an_audio_file_by_duration_err_caps:
    'الملف يتجاوز حد هذا الجهاز (حوالي 40 ميغابايت / 20 دقيقة على سطح المكتب، 20 ميغابايت / 8 دقائق على شاشة ضيقة). قصّره أولًا أو استخدم ملفًا أقصر.',
  tool_split_an_audio_file_by_duration_err_chunk:
    'يجب أن يكون طول الجزء بين 0.5 و1200 ثانية. ارفعه إن وصلت إلى سقف 50 مقطعًا.',
  tool_split_an_audio_file_by_duration_err_decode:
    'تعذّر على هذا المتصفح فك ترميز الملف. جرّب WAV أو MP3 أو مقطعًا بلا DRM.',
  tool_split_an_audio_file_by_duration_err_empty: 'لا شيء للمعالجة. حمّل ملفًا أو المثال أولًا.',
  tool_split_an_audio_file_by_duration_err_lame: 'فشل تحميل مرمّز MP3. ابقَ في التبويب وأعد تنزيل ZIP.',
  tool_split_an_audio_file_by_duration_err_too_many:
    'أكثر من 50 مقطعًا. زد الثواني (جرّب 60 ث أو 3 دقائق). الصفحة ترفض بدل الاقتصاص الصامت.',
  tool_split_an_audio_file_by_duration_err_video:
    'هذه الصفحة لا تقبل فيديو كمدخل أساسي. تقسّم ملف صوت حسب المدة؛ ولا تكتم صوت فيديو.',
  tool_split_an_audio_file_by_duration_err_zip: 'فشل تحميل مكتبة ZIP. ابقَ في التبويب وأعد تنزيل ZIP.',
  tool_split_an_audio_file_by_duration_example:
    'تحميل مثال يبني نغمة 5.00 ث بتردد 440 هرتز. التقسيم حسب المدة عند 2.00 ث يقطع عند 2.00 و4.00 ث: ثلاثة مقاطع 2.00 / 2.00 / 1.00 ث (الأخير يحتفظ بالباقي). تنزيل ZIP يكتب sample-01.wav ما لم تختر MP3 في الإعدادات المتقدمة.',
  tool_split_an_audio_file_by_duration_example_title: 'مثال',
  tool_split_an_audio_file_by_duration_faq_a1:
    'لا. الفك والتقسيم وتعبئة ZIP تجري في هذا التبويب. تُحمَّل النصوص البرمجية من هذا الموقع. لا يُرسل الملف إلى خوادمنا.',
  tool_split_an_audio_file_by_duration_faq_a2:
    'نعم. تقسيم الصوت حسب المدة، تقسيم mp3 إلى أجزاء متساوية، تقطيع المقطع كل 60 ثانية أو تنزيل المقاطع في ZIP هي هذه الأداة: قطع الملف المحلي كل N ثانية ثم أخذ ملفات كثيرة في ZIP واحد. الأجزاء المتساوية N في الإعدادات المتقدمة.',
  tool_split_an_audio_file_by_duration_faq_a3:
    'المقطع الأخير يحتفظ بالوقت المتبقي. ملف 5.00 ث كل ثانيتين يصبح 2.00 / 2.00 / 1.00 ث دون حشو صمت.',
  tool_split_an_audio_file_by_duration_faq_a4:
    'لا. تقسيم تسجيل عند الصمت يقطع عند الوقفات. هنا الساعة وحدها. جداول cue والقطع حسب حجم الملف خارج النطاق.',
  tool_split_an_audio_file_by_duration_faq_a5:
    'في المثال اترك ثانيتين. للشبكات 30 ث أو 60 ث؛ للمحاضرة 3 أو 5 دقائق. أربعة ملفات متساوية: اكتب 4 في المتقدم.',
  tool_split_an_audio_file_by_duration_faq_a6:
    'داخل ZIP الأسماء {stem}-01.wav (أو .mp3). يمكن تنزيل مقطع واحد من القائمة. السقف 50؛ فوق ذلك رفض.',
  tool_split_an_audio_file_by_duration_faq_a7:
    'لا. لا إزالة ضوضاء ولا كتم فيديو ولا cue/APE ولا قص يدوي ولا سحب يوتيوب. استخدم ملف صوت لديك حق معالجته.',
  tool_split_an_audio_file_by_duration_faq_a8:
    'سطح المكتب: حوالي 40 ميغابايت أو 20 دقيقة. الشاشة الضيقة: حوالي 20 ميغابايت أو 8 دقائق. الملفات فوق الحد تُرفض قبل الفك.',
  tool_split_an_audio_file_by_duration_faq_q1: 'هل يُرفع ملفي الصوتي إلى خادم؟',
  tool_split_an_audio_file_by_duration_faq_q2: 'بحثت عن تقسيم mp3 إلى أجزاء متساوية أو تقسيم الصوت حسب المدة. هل هذه أداة أخرى؟',
  tool_split_an_audio_file_by_duration_faq_q3: 'ماذا يحدث للوقت المتبقي في المقطع الأخير؟',
  tool_split_an_audio_file_by_duration_faq_q4: 'هل يقطع عند الصمت أو يتبع cue أو يقسم حسب الحجم؟',
  tool_split_an_audio_file_by_duration_faq_q5: 'كم ثانية أضع لكل جزء؟',
  tool_split_an_audio_file_by_duration_faq_q6: 'كيف تُسمّى الملفات وكم مقطعًا يمكنني الحصول عليه؟',
  tool_split_an_audio_file_by_duration_faq_q7: 'هل يزيل الضوضاء أو يقسم فيديو أو يقرأ cue أو يسحب يوتيوب؟',
  tool_split_an_audio_file_by_duration_faq_q8: 'ما أكبر ملف يمكن معالجته؟',
  tool_split_an_audio_file_by_duration_format: 'الصيغة داخل ZIP',
  tool_split_an_audio_file_by_duration_format_hint: 'WAV هو PCM بلا فقد. MP3 يحمّل المرمّز فقط عند تنزيل ZIP.',
  tool_split_an_audio_file_by_duration_format_mp3: 'MP3',
  tool_split_an_audio_file_by_duration_format_wav: 'WAV',
  tool_split_an_audio_file_by_duration_how_body:
    'اقطع كل N ثانية حسب الساعة، اترك الباقي في المقطع الأخير، ثم نزّل ZIP دون رفع الملف إلى خادم.',
  tool_split_an_audio_file_by_duration_how_item_1: 'افتح ملفًا صوتيًا (أو اضغط تحميل مثال).',
  tool_split_an_audio_file_by_duration_how_item_2: 'أبقِ ثانيتين، أو اضغط شريحة / اكتب المدة.',
  tool_split_an_audio_file_by_duration_how_item_3: 'اضغط تقسيم حسب المدة.',
  tool_split_an_audio_file_by_duration_how_item_4: 'اضغط تنزيل ZIP.',
  tool_split_an_audio_file_by_duration_how_title: 'طريقة الاستخدام',
  tool_split_an_audio_file_by_duration_hud_decode: 'جارٍ فك الملف في هذا التبويب…',
  tool_split_an_audio_file_by_duration_hud_decoded: 'تم الفك. العلامات البيضاء قطع مخطط لها. اضغط تقسيم حسب المدة إن ناسبك الطول.',
  tool_split_an_audio_file_by_duration_hud_elapsed_tpl: 'مرّ {s} ث',
  tool_split_an_audio_file_by_duration_hud_encode: 'جارٍ ترميز مقاطع MP3…',
  tool_split_an_audio_file_by_duration_hud_fail_hint: 'صحّح الملف أو الثواني ثم أعد تقسيم حسب المدة.',
  tool_split_an_audio_file_by_duration_hud_fail_title: 'توقف تقسيم حسب المدة',
  tool_split_an_audio_file_by_duration_hud_next: 'انتهى. الخطوة التالية: تنزيل ZIP.',
  tool_split_an_audio_file_by_duration_hud_next_zip: 'انتهى. يفترض أن يبدأ تنزيل ZIP.',
  tool_split_an_audio_file_by_duration_hud_pack: 'جارٍ تعبئة المقاطع في ZIP…',
  tool_split_an_audio_file_by_duration_hud_pct_tpl: '{pct}%',
  tool_split_an_audio_file_by_duration_hud_split: 'جارٍ قطع مقاطع متساوية الطول…',
  tool_split_an_audio_file_by_duration_hud_step_decode: 'فك',
  tool_split_an_audio_file_by_duration_hud_step_pack: 'تعبئة',
  tool_split_an_audio_file_by_duration_hud_step_split: 'تقسيم',
  tool_split_an_audio_file_by_duration_hud_title: 'تقدّم تقسيم حسب المدة',
  tool_split_an_audio_file_by_duration_hud_working: 'بدء…',
  tool_split_an_audio_file_by_duration_meta_tpl: '{name} · {dur}ث · {rate} هرتز · {ch} قناة',
  tool_split_an_audio_file_by_duration_pause: 'إيقاف مؤقت',
  tool_split_an_audio_file_by_duration_play: 'تشغيل',
  tool_split_an_audio_file_by_duration_preview_hint: 'العلامات البيضاء قطع كل N ثانية. التشغيل يستمع للملف الحالي.',
  tool_split_an_audio_file_by_duration_result_one:
    '{orig}ث · طول الجزء يغطي الملف كله، لذا سيحتوي ZIP على هذا الملف وحده. قصّر الثواني ثم تقسيم حسب المدة. تنزيل ZIP جاهز.',
  tool_split_an_audio_file_by_duration_result_tpl:
    '{orig}ث · كل {chunk}ث ← {count} مقطع: {list}. تنزيل ZIP جاهز.',
  tool_split_an_audio_file_by_duration_rules_body:
    'نقاط القطع عند k × D ثانية، D طول الجزء. المقطع الأخير [floor(T / D) × D, T] وقد يكون أقصر. إن عيّنت N أجزاء متساوية فـ D = T / N لهذه الجولة. WAV هو PCM بـ 16 بت. MP3 هو CBR بالمعدل المختار. يُبنى ZIP في هذا التبويب.',
  tool_split_an_audio_file_by_duration_rules_item_1:
    'المثال يستخدم ثانيتين. الشرائح تكتب 30 ث و60 ث و180 ث (3 دقائق) أو 300 ث (5 دقائق) في الحقل نفسه. N أجزاء متساوية (2–50) اختياري في المتقدم.',
  tool_split_an_audio_file_by_duration_rules_item_2:
    'حد سطح المكتب حوالي 40 ميغابايت أو 20 دقيقة؛ الشاشة الضيقة حوالي 20 ميغابايت أو 8 دقائق. فوق الحد رفض لا اقتصاص. أكثر من 50 مقطعًا كذلك.',
  tool_split_an_audio_file_by_duration_rules_item_3:
    'الملفات تبقى على جهازك؛ لا تُرفع إلى خادم. JSZip ومرمّز MP3 يُحمَّلان من هذا الموقع فقط بعد تنزيل ZIP.',
  tool_split_an_audio_file_by_duration_rules_item_4:
    'الفك يعتمد على المتصفح. DRM وبعض الترميزات وحاويات الفيديو تفشل برسالة واضحة.',
  tool_split_an_audio_file_by_duration_rules_item_5:
    'هذه الصفحة تصدّر ملفات كثيرة في ZIP حسب الساعة. لا تقطع عند الصمت ولا تتبع cue ولا تقسم بالميغابايت ولا تزيل ضوضاء ولا تكتم فيديو ولا تجلب يوتيوب.',
  tool_split_an_audio_file_by_duration_rules_title: 'قواعد يجدر توقعها',
  tool_split_an_audio_file_by_duration_sample: 'تحميل مثال',
  tool_split_an_audio_file_by_duration_split: 'تقسيم حسب المدة',
  tool_split_an_audio_file_by_duration_status_done: 'تم.',
  tool_split_an_audio_file_by_duration_title: 'قسّم ملفًا صوتيًا حسب المدة',
  tool_split_an_audio_file_by_duration_usecase_1:
    'قسّم محاضرة إلى شرائح 3 دقائق للطريق ونزّل ZIP دون انتظار الوقفات.',
  tool_split_an_audio_file_by_duration_usecase_2:
    'قسّم mp3 إلى أجزاء متساوية من 60 ثانية للمنصات من حلقة طويلة.',
  tool_split_an_audio_file_by_duration_usecase_3:
    'قطّع مذكرة صوتية طويلة لتناسب حد تطبيق الدردشة؛ المقطع الأخير يحتفظ بالباقي.',
  tool_split_an_audio_file_by_duration_usecases_title: 'متى يناسب الاستخدام',
  tool_split_an_audio_file_by_duration_why_choose_body:
    'مبنية لأرشيف ZIP يُقطع بالساعة، مع شرائح 30 ث / 60 ث / 3 دقائق / 5 دقائق ومقطع أخير أقصر بوضوح.',
  tool_split_an_audio_file_by_duration_why_choose_item_1:
    'تقطع كل N ثانية وتعبّئ ملفات كثيرة في ZIP؛ المقطع الأخير يحتفظ بالباقي بدل حشو صمت.',
  tool_split_an_audio_file_by_duration_why_choose_item_2:
    'شرائح 30 ث / 60 ث / 3 دقائق / 5 دقائق وN أجزاء متساوية اختيارية؛ ليست كاشف صمت يتظاهر بالقطع المتساوي.',
  tool_split_an_audio_file_by_duration_why_choose_item_3:
    'الملف يبقى في تبويب المتصفح هذا ولا يُرفع إلى خادم؛ JSZip وlamejs يُحمَّلان فقط عند تنزيل ZIP.',
  tool_split_an_audio_file_by_duration_why_choose_item_4:
    'الملفات الكبيرة جدًا وأكثر من 50 مقطعًا تُرفض قبل ZIP ناقص — بلا وعد 1 غيغابايت يعطّل التبويب.',
  tool_split_an_audio_file_by_duration_why_choose_title: 'لماذا تستخدم قسّم ملفًا صوتيًا حسب المدة',
};
export default ar;
