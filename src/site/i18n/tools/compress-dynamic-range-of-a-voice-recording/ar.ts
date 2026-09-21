import type { SiteLangDict } from '../../../types';

/**
 * Arabic copy for compress-dynamic-range-of-a-voice-recording (S18).
 */
const ar: SiteLangDict = {
  tool_compress_dynamic_range_of_a_voice_recording_title: "ضغط المدى الديناميكي لتسجيل صوتي",
  tool_compress_dynamic_range_of_a_voice_recording_desc:
    "سطّح ذروات الصوت بإعدادات خفيف/متوسط/قوي وmakeup اختياري ثم نزّل WAV بـ 16 بت. على الجهاز فقط.",
  tool_compress_dynamic_range_of_a_voice_recording_description:
    
    "اضغط المدى الديناميكي لتسجيل صوتي بإعدادات خفيف أو متوسط أو قوي مع makeup اختياري. الخطوات: ضغط، معاينة، تنزيل WAV. مثال: حمّل العينة غير المنتظمة. إعادة تشكيل الديناميك—وليس ضغط حجم MP3، ولا كسب dB ثابت، ولا تطبيع ذروة أو LUFS. يبقى الصوت على جهازك؛ لا يُرفع أبدًا.",
  tool_compress_dynamic_range_of_a_voice_recording_article:
    
    "تسجيلات الصوت كثيرًا ما تقفز من الهمس إلى الذروات. تستخدم هذه الصفحة ضاغط غلاف ذروة بجافا سكربت خالص: خفيف/متوسط بركبة ناعمة، قوي بركبة صلبة (خفيف ≈ −18 dB / 2:1، متوسط ≈ −24 / 3:1 افتراضي، قوي ≈ −30 / 6:1). الـ makeup الاختياري يعيد المستوى العام بعد ترويض الذروات، مع حماية ذروة ناعمة قبل WAV بـ 16 بت. هذا ضغط مدى ديناميكي، وليس تصغير MP3 للبايتات، ولا كسبًا ثابتًا، ولا تطبيع ذروة، ولا مطابقة LUFS. قناة أو قناتان. احتفظ بالماستر؛ التنزيل ملف جديد.",
  tool_compress_dynamic_range_of_a_voice_recording_choose: "اختر ملف صوت",
  tool_compress_dynamic_range_of_a_voice_recording_hint: "أسقط ملف WAV أو MP3 أو M4A أو AAC أو OGG واحدًا. بحد أقصى 40 MiB و10 دقائق؛ أحادي أو ستيريو.",
  tool_compress_dynamic_range_of_a_voice_recording_convert: "ضغط",
  tool_compress_dynamic_range_of_a_voice_recording_download: "تنزيل WAV",
  tool_compress_dynamic_range_of_a_voice_recording_sample: "تحميل عينة",
  tool_compress_dynamic_range_of_a_voice_recording_clear: "مسح",
  tool_compress_dynamic_range_of_a_voice_recording_advanced: "إعدادات الضاغط",
  tool_compress_dynamic_range_of_a_voice_recording_preset_label: "إعداد الشدة",
  tool_compress_dynamic_range_of_a_voice_recording_preset_light: "خفيف",
  tool_compress_dynamic_range_of_a_voice_recording_preset_medium: "متوسط",
  tool_compress_dynamic_range_of_a_voice_recording_preset_heavy: "قوي",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_label: "كسب Makeup",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_on: "تشغيل",
  tool_compress_dynamic_range_of_a_voice_recording_makeup_off: "إيقاف",
  tool_compress_dynamic_range_of_a_voice_recording_settings_hint:
    
    "خفيف (−18 dB، 2:1، ركبة ناعمة) لطيف. متوسط (−24 dB، 3:1) يناسب كثيرًا من التعليق. قوي (−30 dB، 6:1، ركبة صلبة) يضغط أكثر. Makeup (تشغيل افتراضيًا) يعيد المستوى بعد الضغط مع حماية ذروة.",
  tool_compress_dynamic_range_of_a_voice_recording_progress: "تقدم الضغط",
  tool_compress_dynamic_range_of_a_voice_recording_read: "قراءة",
  tool_compress_dynamic_range_of_a_voice_recording_decode: "فك الترميز",
  tool_compress_dynamic_range_of_a_voice_recording_compress: "ضغط",
  tool_compress_dynamic_range_of_a_voice_recording_write: "كتابة",
  tool_compress_dynamic_range_of_a_voice_recording_done: "جاهز. استمع إلى WAV المضغوط ثم نزّله.",
  tool_compress_dynamic_range_of_a_voice_recording_failed: "فشل الضغط. جرّب ملف صوت صالحًا أصغر.",
  tool_compress_dynamic_range_of_a_voice_recording_elapsed: "مرّ {s} ث",
  tool_compress_dynamic_range_of_a_voice_recording_preview: "استمع إلى WAV المضغوط",
  tool_compress_dynamic_range_of_a_voice_recording_result: "{seconds} ث · {preset} · makeup {makeup} · WAV {output} KiB",
  tool_compress_dynamic_range_of_a_voice_recording_sample_name: "عرض-صوت-ديناميكي-ثانيتين",
  tool_compress_dynamic_range_of_a_voice_recording_empty: "اختر ملف صوت أو حمّل العينة أولًا.",
  tool_compress_dynamic_range_of_a_voice_recording_err_file: "أسقط ملف صوت واحدًا فقط.",
  tool_compress_dynamic_range_of_a_voice_recording_err_format: "صوت غير مدعوم أو تالف. استخدم ملفًا يستطيع المتصفح فك ترميزه (WAV أو MP3 أو M4A أو AAC أو OGG).",
  tool_compress_dynamic_range_of_a_voice_recording_err_limit: "استخدم ملفًا لا يزيد عن 40 MiB أو 10 دقائق، بقناة أو قناتين.",
  tool_compress_dynamic_range_of_a_voice_recording_err_decode: "تعذّر على المتصفح فك ترميز هذا الصوت. جرّب تسجيلًا صالحًا آخر.",
  tool_compress_dynamic_range_of_a_voice_recording_err_encoder: "تعذّرت كتابة WAV المضغوط. راجع الإعداد والـ makeup ثم أعد الضغط.",
  tool_compress_dynamic_range_of_a_voice_recording_err_silence: "المستوى صامت تقريبًا—لا شيء للضغط.",
  tool_compress_dynamic_range_of_a_voice_recording_how_title: "كيف تضغط المدى الديناميكي لتسجيل صوتي",
  tool_compress_dynamic_range_of_a_voice_recording_how_body:
    "اختر إعداد شدة، فعّل الـ makeup إن شئت، اضغط الديناميك، استمع، ثم نزّل WAV بـ 16 بت—دون رفع الملف.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_1: "اختر تسجيلًا صوتيًا، أو حمّل العينة لنغمة ثانيتين عالية الديناميك.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_2:
    "افتح الإعدادات واختر خفيف أو متوسط (افتراضي) أو قوي؛ اترك Makeup على تشغيل إلا إذا أردت التحكم بالذروات فقط.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_3: "انقر ضغط وانتظر قراءة → فك الترميز → ضغط → كتابة.",
  tool_compress_dynamic_range_of_a_voice_recording_how_item_4: "عاين النتيجة، راجع الإعداد/العتبة/النسبة/الـ makeup والذروات، ثم نزّل WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_title: "لماذا تختار أدوات ضغط المدى الديناميكي لدينا",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_1: "اطلع على الإعداد والعتبة والنسبة والـ makeup والذروات وKiB قبل الحفظ.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_2: "ثلاثة إعدادات صوت واضحة—مهمة ديناميك واحدة، لا جدار حجم MP3/كسب/تطبيع.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_3: "فك الترميز والضغط وكتابة WAV على جهازك؛ الصفحة لا ترفع التسجيل للمعالجة.",
  tool_compress_dynamic_range_of_a_voice_recording_why_choose_item_4: "تغيير الإعداد أو الـ makeup أو الإدخال يمسح التنزيل القديم فلا تحفظ WAV قديمًا بالخطأ.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_title: "العتبة والنسبة والـ makeup والحدود",
  tool_compress_dynamic_range_of_a_voice_recording_rules_body:
    
    "ضاغط غلاف الذروة يخفّض الكسب فوق العتبة حسب النسبة (ركبة ناعمة للخفيف/المتوسط؛ صلبة للقوي). ثم يُضرب الـ makeup؛ الحماية الناعمة تُبقي العينات تحت ~0.99. يعيد تشكيل العالي مقابل الهادئ—بخلاف الكسب الثابت وتطبيع الذروة وLUFS وتقليل بتات MP3.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_1:
    "المتوسط (−24 dB، 3:1، ركبة ناعمة) هو الافتراضي. الخفيف ألطف؛ القوي عتبة أقل ونسبة أعلى وركبة صلبة.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_2: "Makeup افتراضيًا تشغيل يعيد المستوى بعد ترويض الذروات. أوقف إن أردت ذروات أهدأ فقط دون رفع.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_3: "التصدير يحافظ على قناة أو قناتين. لا تُنسخ الوسوم. لا يُستبدل الملف الأصلي.",
  tool_compress_dynamic_range_of_a_voice_recording_rules_item_4: "ملف واحد حتى 40 MiB وعشر دقائق. هذا ليس ضغط حجم MP3، ولا كسبًا ثابتًا، ولا تطبيع ذروة، ولا مطابقة LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_example_title: "جرّب ضغط مدى ديناميكي حقيقي",
  tool_compress_dynamic_range_of_a_voice_recording_example:
    
    "تحميل العينة يبني نغمة 440 هرتز لمدة ثانيتين باندفاعات عالية وهادئة، ثم يضغط تلقائيًا بالمتوسط وMakeup تشغيل. التشغيل لا يبدأ وحده—اضغط تشغيل في المعاينة.",
  tool_compress_dynamic_range_of_a_voice_recording_usecases_title: "متى يفيد ذلك",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_1: "تعليق صوتي يقفز من جمل هادئة إلى ذروات عالية—اختر بودكاست واضغط ونزّل WAV.",
  tool_compress_dynamic_range_of_a_voice_recording_usecase_2: "مقابلة تريدها أكثر انتظامًا قبل مطابقة الجهارة، دون تصغير MP3 للحجم.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q1: "هل هذا مثل ضغط / تصغير حجم ملف MP3؟",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a1:
    "لا. «ضغط» هنا يعني المدى الديناميكي (عتبة/نسبة)، لا معدل البت أو البايتات. لملفات MP3 أصغر استخدم Reduce an MP3 file size. بالصينية: 压缩人声动态 ≠ 压缩 MP3 体积.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q2: "هل هذا مثل رفع تسجيل هادئ بكسب dB ثابت؟",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a2:
    "لا. الكسب الثابت يضاعف المقطع كله. هنا تُخفَّض الأجزاء العالية أكثر. للرفع المنتظم استخدم Make a quiet recording louder.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q3: "هل هذا تطبيع ذروة أو مطابقة LUFS للبودكاست؟",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a3:
    "لا. تطبيع الذروة يستهدف dBFS؛ LUFS يستهدف الجهارة المتكاملة. هذه الصفحة تعيد تشكيل الديناميك بضاغط. استخدم Normalize an audio file to peak أو Match podcast loudness to −16 LUFS.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q4: "ماذا يغيّر خفيف ومتوسط وقوي؟",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a4: 
    "تحدد العتبة والنسبة والركبة. خفيف ≈ −18 / 2:1 ناعم؛ متوسط ≈ −24 / 3:1 ناعم؛ قوي ≈ −30 / 6:1 صلب. Makeup تشغيل/إيقاف منفصل.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q5: "هل أترك Makeup على تشغيل؟",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a5:
    "عادة نعم—الضغط قد يخفض المتوسط؛ الـ makeup يعيده مع حماية ذروة. اختر إيقاف لذروات أهدأ فقط.",
  tool_compress_dynamic_range_of_a_voice_recording_faq_q6: "هل يُرفع صوتي إلى خادم؟",
  tool_compress_dynamic_range_of_a_voice_recording_faq_a6:
    "لا. فك الترميز والضغط وكتابة WAV تعمل في المتصفح على جهازك. يلزم اتصال عند التحميل الأول؛ لا يُضمن العمل دون اتصال. للجهارة أو الكسب: Match podcast loudness to −16 LUFS أو Make a quiet recording louder.",
};
export default ar;
