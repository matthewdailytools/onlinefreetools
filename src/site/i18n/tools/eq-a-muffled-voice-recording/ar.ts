import type { SiteLangDict } from '../../../types';

/**
 * Arabic copy for eq-a-muffled-voice-recording (S20).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ تعزيز الباس وحده / إزالة الضوضاء / إزالة الصفير.
 */
const ar: SiteLangDict = {
  tool_eq_a_muffled_voice_recording_title: "معادلة تسجيل صوت مكتوم",
  tool_eq_a_muffled_voice_recording_desc:
    "افتح صوتًا مكتومًا بإعدادات Clarity أو Warmth أو Presence ثلاثية النطاق ثم نزّل WAV بـ 16 بت. على الجهاز فقط.",
  tool_eq_a_muffled_voice_recording_description:
    "معادلة تسجيل صوت مكتوم بإعدادات Clarity وWarmth وPresence ثلاثية النطاق. الخطوات: معادلة، معاينة، تنزيل WAV. مثال: حمّل العينة المكتومة. تشكيل نغمة فقط—ليس تعزيز باس وحده، ولا إزالة ضوضاء، ولا إزالة صفير. يبقى الصوت على جهازك؛ لا يُرفع أبدًا.",
  tool_eq_a_muffled_voice_recording_article: "المكالمات والأقنعة والميكروفونات البعيدة غالبًا تبدو مكتومة: طين زائد تحت بضع مئات من الهرتز ووضوح ناقص في نطاق الكلام. هذه الصفحة تشغّل ثلاث مراحل EQ filter في on-device audio processing—lowshelf وpeaking وhighshelf—كإعدادات مسماة. Clarity يقطع الطين ويرفع حضور الكلام؛ Warmth يرفع الجسم ويليّن الحدة؛ Presence يركز حضور منتصف-عالي والهواء. هذا EQ نغمي لصوت مكتوم، لا معزز باس أحادي النطاق، ولا إزالة ضوضاء خلفية، ولا مزيل صفير فقط. القنوات 1 أو 2. احتفظ بالأصلي؛ التنزيل WAV جديد 16 بت. العمل في المتصفح على جهازك.",
  tool_eq_a_muffled_voice_recording_choose: "اختر ملف صوت",
  tool_eq_a_muffled_voice_recording_hint: "أسقط WAV أو MP3 أو M4A أو AAC أو OGG واحدًا. بحد أقصى 40 ميبيبايت و10 دقائق؛ أحادي أو ستيريو.",
  tool_eq_a_muffled_voice_recording_convert: "معادلة",
  tool_eq_a_muffled_voice_recording_download: "تنزيل WAV",
  tool_eq_a_muffled_voice_recording_sample: "تحميل عينة",
  tool_eq_a_muffled_voice_recording_clear: "مسح",
  tool_eq_a_muffled_voice_recording_advanced: "إعدادات المعادلة",
  tool_eq_a_muffled_voice_recording_preset_label: "إعداد معادلة صوت",
  tool_eq_a_muffled_voice_recording_preset_clarity: "Clarity",
  tool_eq_a_muffled_voice_recording_preset_warmth: "Warmth",
  tool_eq_a_muffled_voice_recording_preset_presence: "Presence",
  tool_eq_a_muffled_voice_recording_settings_hint:
    "Clarity الافتراضي يقطع الطين ويفتح الكلام. Warmth يضيف جسمًا بحدة أنعم. Presence يرفع حضور منتصف-عالي والهواء. حماية الذروة الناعمة تمنع القص بعد التعزيز.",
  tool_eq_a_muffled_voice_recording_progress: "تقدم المعادلة",
  tool_eq_a_muffled_voice_recording_read: "قراءة",
  tool_eq_a_muffled_voice_recording_decode: "فك الترميز",
  tool_eq_a_muffled_voice_recording_eq: "معادلة",
  tool_eq_a_muffled_voice_recording_write: "كتابة",
  tool_eq_a_muffled_voice_recording_done: "جاهز. عاين WAV المعادل ثم نزّل WAV.",
  tool_eq_a_muffled_voice_recording_failed: "فشلت المعادلة. جرّب ملف صوت أصغر وصالحًا.",
  tool_eq_a_muffled_voice_recording_elapsed: "مضى {s} ث",
  tool_eq_a_muffled_voice_recording_preview: "استمع إلى WAV المعادل",
  tool_eq_a_muffled_voice_recording_result: "{seconds} ث · {preset} · ذروة {peakBefore} → {peakAfter} · WAV {output} كيبيبايت",
  tool_eq_a_muffled_voice_recording_sample_name: "عرض-صوت-مكتوم-ثانيتان",
  tool_eq_a_muffled_voice_recording_empty: "اختر ملف صوت أو حمّل العينة أولًا.",
  tool_eq_a_muffled_voice_recording_err_file: "أسقط ملف صوت واحدًا بالضبط.",
  tool_eq_a_muffled_voice_recording_err_format: "صوت غير مدعوم أو تالف. استخدم ملفًا يستطيع متصفحك فك ترميزه (WAV أو MP3 أو M4A أو AAC أو OGG).",
  tool_eq_a_muffled_voice_recording_err_limit: "استخدم ملفًا لا يتجاوز 40 ميبيبايت أو 10 دقائق، بقناة أو قناتين.",
  tool_eq_a_muffled_voice_recording_err_decode: "تعذر على المتصفح فك ترميز هذا الصوت. جرّب تسجيلًا صالحًا آخر.",
  tool_eq_a_muffled_voice_recording_err_encoder: "تعذرت كتابة WAV المعادل. تحقق من الإعداد ثم أعد المعادلة.",
  tool_eq_a_muffled_voice_recording_err_silence: "المستوى شبه صمت—لا شيء لمعادلته. جرّب تسجيلًا بمستوى مسموع.",
  tool_eq_a_muffled_voice_recording_how_title: "كيف تعادل تسجيل صوت مكتوم",
  tool_eq_a_muffled_voice_recording_how_body:
    "اختر إعدادًا ثلاثي النطاق، أعد تشكيل النغمة، استمع، ثم نزّل WAV بـ 16 بت—دون رفع الملف.",
  tool_eq_a_muffled_voice_recording_how_item_1: "اختر ملف صوت، أو حمّل العينة لعرض مكتوم مدته ثانيتان.",
  tool_eq_a_muffled_voice_recording_how_item_2: "افتح إعدادات المعادلة واختر Clarity (افتراضي) أو Warmth أو Presence.",
  tool_eq_a_muffled_voice_recording_how_item_3: "انقر معادلة وانتظر قراءة → فك ترميز → معادلة → كتابة.",
  tool_eq_a_muffled_voice_recording_how_item_4: "عاين النتيجة، تحقق من الإعداد والذروات، ثم نزّل WAV.",
  tool_eq_a_muffled_voice_recording_why_choose_title: "لماذا تختار أدواتنا لمعادلة تسجيل صوت مكتوم",
  tool_eq_a_muffled_voice_recording_why_choose_item_1: "انظر اسم الإعداد والذروة قبل/بعد وكيبيبايت الخرج قبل الحفظ.",
  tool_eq_a_muffled_voice_recording_why_choose_item_2: "ثلاثة إعدادات صوت واضحة—مهمة معادلة مكتومة واحدة، لا لعبة عشر نطاقات ولا باس فقط.",
  tool_eq_a_muffled_voice_recording_why_choose_item_3:
    "فك الترميز والمعادلة وكتابة WAV تجري على جهازك؛ الصفحة لا ترفع تسجيلك للمعالجة.",
  tool_eq_a_muffled_voice_recording_why_choose_item_4: "تغيير الإعداد أو الإدخال يمسح التنزيل القديم حتى لا تحفظ WAV قديمًا بالخطأ.",
  tool_eq_a_muffled_voice_recording_rules_title: "Clarity وWarmth وPresence والحدود",
  tool_eq_a_muffled_voice_recording_rules_body:
    "كل إعداد ثلاث مراحل EQ (lowshelf وpeaking وhighshelf). Clarity يفتح الكلام المكتوم؛ Warmth يضيف جسمًا؛ Presence يرفع الحضور والهواء. حماية الذروة الناعمة تقيس النتيجة إن كان التعزيز سيسبب قصًا.",
  tool_eq_a_muffled_voice_recording_rules_item_1:
    "Clarity الافتراضي يقطع الباس الطيني ويرفع وضوح الكلام. Warmth يرفع جسم الباس ويليّن الحدة. Presence يركز حضور منتصف-عالي.",
  tool_eq_a_muffled_voice_recording_rules_item_2:
    "معادلة نغمية فقط. لا تزيل ضوضاء المروحة، ولا تعزز الباس وحده، ولا تستهدف الصفير كمزيل صفير.",
  tool_eq_a_muffled_voice_recording_rules_item_3: "التصدير يبقى بقناة أو قناتين. لا تُنسخ الوسوم. لا يُستبدل الملف الأصلي أبدًا.",
  tool_eq_a_muffled_voice_recording_rules_item_4:
    "ملف واحد حتى 40 ميبيبايت وعشر دقائق. حماية الذروة الناعمة قد تخفض المستوى الكلي بعد تعزيزات قوية ليبقى WAV تحت المقياس الرقمي الكامل.",
  tool_eq_a_muffled_voice_recording_example_title: "جرّب معادلة مكتومة حقيقية",
  tool_eq_a_muffled_voice_recording_example:
    "تحميل العينة يبني نغمة باهتة لثانيتين بباس قوي وحدة ضعيفة ثم يعادل تلقائيًا بـ Clarity. التشغيل لا يبدأ وحده—اضغط تشغيل في المعاينة إن أردت سماع النتيجة الأوضح.",
  tool_eq_a_muffled_voice_recording_usecases_title: "متى يساعد هذا",
  tool_eq_a_muffled_voice_recording_usecase_1: "مقطع هاتف أو قناع يبدو كأنه في صندوق—اختر Clarity، عادلة، نزّل WAV.",
  tool_eq_a_muffled_voice_recording_usecase_2: "صوت بودكاست يحتاج جسمًا أدفأ أو حضورًا أكثر دون فتح معادل DAW كامل.",
  tool_eq_a_muffled_voice_recording_usecase_3: "تسجيل بعيد أو بقناع يبدو مكتومًا وتحتاج حضورًا أوضح للصوت.",
  tool_eq_a_muffled_voice_recording_faq_q1: "هل هذا مثل معزز الباس؟",
  tool_eq_a_muffled_voice_recording_faq_a1:
    "لا. معزز الباس يرفع أساسًا الترددات المنخفضة. هذه الصفحة تقدم ثلاثة إعدادات صوت متعددة النطاقات للكلام المكتوم. تعزيز الباس وحده مهمة أخرى (عند توفر Boost bass on an MP3).",
  tool_eq_a_muffled_voice_recording_faq_q2: "هل يزيل الضوضاء الخلفية؟",
  tool_eq_a_muffled_voice_recording_faq_a2:
    "لا. المعادلة تعيد تشكيل النغمة؛ لا تكبح المراوح أو الهسيس أو ضوضاء الغرفة. لإزالة الضوضاء استخدم أداة مخصصة عند توفرها.",
  tool_eq_a_muffled_voice_recording_faq_q3: "هل هذا مزيل صفير؟",
  tool_eq_a_muffled_voice_recording_faq_a3:
    "لا. مزيل الصفير يستهدف الصفير القاسي (S/Sh). هذه الإعدادات تشكل النغمة المكتومة عبر الباس والمتوسط والحدة. استخدم أداة إزالة صفير عند توفرها.",
  tool_eq_a_muffled_voice_recording_faq_q4: "ماذا تفعل Clarity وWarmth وPresence؟",
  tool_eq_a_muffled_voice_recording_faq_a4:
    "Clarity يقطع الطين ويفتح الكلام. Warmth يضيف جسم باس ويليّن الحدة. Presence يرفع حضور منتصف-عالي والهواء. حماية الذروة الناعمة تمنع القص بعد التعزيز.",
  tool_eq_a_muffled_voice_recording_faq_q5: "ماذا لو جعلت المعادلة الملف أسخن؟",
  tool_eq_a_muffled_voice_recording_faq_a5:
    "بعد سلسلة المرشحات تقيس حماية الذروة الناعمة المخزن إن تجاوزت الذروات نحو −0.2 dBFS ليبقى WAV آمنًا. للتحديد المخصص للذروات استخدم تحديد القمم حتى لا يقص الملف.",
  tool_eq_a_muffled_voice_recording_faq_q6: "هل يُرفع صوتي إلى خادم؟",
  tool_eq_a_muffled_voice_recording_faq_a6:
    "لا. فك الترميز والمعادلة وكتابة WAV تجري في متصفحك على جهازك. الصفحة تحتاج شبكة عند التحميل الأول؛ لا يُضمن العمل دون اتصال. للديناميكيات بعد المعادلة استخدم ضغط المدى الديناميكي لتسجيل صوتي أو تحديد القمم حتى لا يقص الملف.",
};
export default ar;
