import type { SiteLangDict } from '../../../types';

/**
 * Arabic copy for reduce-background-noise-on-a-voice-memo (S24).
 * How≥4, Why≥4, Rules≥4, FAQ≥6；≠ Enhance / dehum / EQ.
 */
const ar: SiteLangDict = {
  tool_reduce_background_noise_on_a_voice_memo_title: "تقليل ضوضاء الخلفية في مذكرة صوتية",
  tool_reduce_background_noise_on_a_voice_memo_desc:
    "اخفض هسيس المروحة أو المكيّف الثابت في مذكرة بدرجات خفيف ومتوسط وقوي (تمرير عالٍ + بوابة أرضية الضوضاء) ثم نزّل WAV بـ 16 بت. تقريب على الجهاز فقط.",
  tool_reduce_background_noise_on_a_voice_memo_description:
    "قلّل ضوضاء الخلفية في مذكرة صوتية بإعدادات خفيف ومتوسط وقوي: تمرير عالٍ مع بوابة على أرضية الضوضاء. الخطوات: تقليل الضوضاء، معاينة، تنزيل WAV. مثال: حمّل عيّنة بهسيس. تقريب المتصفح—ليس Adobe Enhance Speech، وليس إزالة طنين 50/60 هرتز، وليس معادل صوت مكتوم. يبقى الصوت على جهازك؛ لا يُرفع أبدًا.",
  tool_reduce_background_noise_on_a_voice_memo_article:
    "غالبًا ما تحمل المذكرات الصوتية هسيسًا ثابتًا من مروحة أو مكيّف أو غرفة يغطي الكلام. تطبق هذه الصفحة تمريرًا عاليًا، وتقدّر أرضية الضوضاء من الإطارات الهادئة، ثم تخفّض بلطف قرب تلك الأرضية. خفيف ومتوسط وقوي تغيّر شدة التخميد. هذا تقريب صادق في المتصفح—ليس Enhance سحابيًا، ولا شق طنين كهربائي ضيق، ولا معادل ثلاثي النطاقات. قد يبهت الموسيقى. القنوات 1 أو 2. احتفظ بالأصل؛ التنزيل WAV جديد 16 بت. المعالجة على جهازك.",
  tool_reduce_background_noise_on_a_voice_memo_choose: "اختر ملفًا صوتيًا",
  tool_reduce_background_noise_on_a_voice_memo_hint: "أسقط ملف WAV أو MP3 أو M4A أو AAC أو OGG واحدًا. الحد الأقصى 40 ميبيبايت و10 دقائق؛ أحادي أو ستيريو.",
  tool_reduce_background_noise_on_a_voice_memo_convert: "تقليل الضوضاء",
  tool_reduce_background_noise_on_a_voice_memo_download: "تنزيل WAV",
  tool_reduce_background_noise_on_a_voice_memo_sample: "تحميل عيّنة",
  tool_reduce_background_noise_on_a_voice_memo_clear: "مسح",
  tool_reduce_background_noise_on_a_voice_memo_advanced: "شدة تقليل الضوضاء",
  tool_reduce_background_noise_on_a_voice_memo_preset_label: "شدة تقليل الضوضاء",
  tool_reduce_background_noise_on_a_voice_memo_preset_light: "خفيف",
  tool_reduce_background_noise_on_a_voice_memo_preset_medium: "متوسط",
  tool_reduce_background_noise_on_a_voice_memo_preset_strong: "قوي",
  tool_reduce_background_noise_on_a_voice_memo_settings_hint:
    "المتوسط يوازن الكلام والهسيس. الخفيف ألطف. القوي يخفّض الإطارات الهادئة أكثر وقد يرقّق الحروف الساكنة. تمرير عالٍ وبوابة—ليس Enhance بالتعلم الآلي.",
  tool_reduce_background_noise_on_a_voice_memo_progress: "تقدّم تقليل الضوضاء",
  tool_reduce_background_noise_on_a_voice_memo_read: "قراءة",
  tool_reduce_background_noise_on_a_voice_memo_decode: "فك الترميز",
  tool_reduce_background_noise_on_a_voice_memo_denoise: "تقليل الضوضاء",
  tool_reduce_background_noise_on_a_voice_memo_write: "كتابة",
  tool_reduce_background_noise_on_a_voice_memo_done: "جاهز. عاين WAV ثم نزّله.",
  tool_reduce_background_noise_on_a_voice_memo_failed: "فشل تقليل الضوضاء. جرّب ملفًا صالحًا أصغر.",
  tool_reduce_background_noise_on_a_voice_memo_elapsed: "مرّ {s} ث",
  tool_reduce_background_noise_on_a_voice_memo_preview: "استمع إلى WAV بعد تقليل الضوضاء",
  tool_reduce_background_noise_on_a_voice_memo_result: "{seconds} ث · {preset} · أرضية {floor} · WAV {output} كيبيبايت",
  tool_reduce_background_noise_on_a_voice_memo_sample_name: "عرض-مذكرة-بهسيس-ثلاث-ثوان",
  tool_reduce_background_noise_on_a_voice_memo_empty: "اختر ملفًا صوتيًا أو حمّل العيّنة أولًا.",
  tool_reduce_background_noise_on_a_voice_memo_err_file: "أسقط ملفًا صوتيًا واحدًا فقط.",
  tool_reduce_background_noise_on_a_voice_memo_err_format: "صوت غير مدعوم أو تالف. استخدم WAV أو MP3 أو M4A أو AAC أو OGG.",
  tool_reduce_background_noise_on_a_voice_memo_err_limit: "حد أقصى 40 ميبيبايت أو 10 دقائق، بقناة أو اثنتين.",
  tool_reduce_background_noise_on_a_voice_memo_err_decode: "تعذّر على المتصفح فك ترميز هذا الصوت.",
  tool_reduce_background_noise_on_a_voice_memo_err_encoder: "تعذّرت كتابة WAV. راجع الشدة ثم أعد المحاولة.",
  tool_reduce_background_noise_on_a_voice_memo_err_silence: "المستوى صمت تقريبًا—لا شيء لتقليله. استخدم تسجيلًا مسموعًا.",
  tool_reduce_background_noise_on_a_voice_memo_how_title: "كيف تقلّل ضوضاء الخلفية في مذكرة صوتية",
  tool_reduce_background_noise_on_a_voice_memo_how_body: "اختر الشدة، شغّل التمرير العالي والبوابة، استمع، نزّل WAV بـ 16 بت—دون رفع الملف.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_1: "اختر ملفًا أو حمّل العيّنة (عرض ثلاث ثوانٍ بهسيس).",
  tool_reduce_background_noise_on_a_voice_memo_how_item_2: "افتح الشدة واختر خفيف أو متوسط (الافتراضي) أو قوي.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_3: "انقر تقليل الضوضاء وانتظر قراءة → فك الترميز → تقليل الضوضاء → كتابة.",
  tool_reduce_background_noise_on_a_voice_memo_how_item_4: "عاين القاع الأهدأ، راجع سطر النتيجة، ثم نزّل WAV.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_title: "لماذا تختار أدوات تقليل ضوضاء الخلفية في مذكرة صوتية لدينا",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_1: "ترى اسم الشدة وأرضية الضوضاء المقدّرة وكيبيبايت الإخراج قبل الحفظ.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_2: "ثلاث شدات واضحة—مهمة تقليل ضوضاء واحدة، لا رف DAW ولا عرض Enhance سحابي.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_3: "فك الترميز والتمرير العالي والبوابة وWAV تعمل على جهازك؛ الصفحة لا ترفع التسجيل.",
  tool_reduce_background_noise_on_a_voice_memo_why_choose_item_4: "تغيير الشدة أو الإدخال يمسح التنزيل القديم.",
  tool_reduce_background_noise_on_a_voice_memo_rules_title: "الشدة وأرضية الضوضاء وحدود المتصفح الصادقة",
  tool_reduce_background_noise_on_a_voice_memo_rules_body:
    "كل شدة: تمرير عالٍ، تقدير الأرضية من الإطارات الهادئة، بوابة لطيفة. الهسيس الثابت يتحسن أكثر؛ قد ترقّ الحروف الساكنة والموسيقى.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_1: "خفيف ومتوسط وقوي تغيّر قطع التمرير العالي والكسب المتبقي. الافتراضي: متوسط.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_2: "تقريب متصفح. ليس Adobe Enhance Speech، ولا إزالة طنين 50/60 هرتز، ولا معادل صوت مكتوم.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_3: "القنوات 1 أو 2. لا تُنسخ الوسوم. لا يُستبدل الملف الأصلي أبدًا.",
  tool_reduce_background_noise_on_a_voice_memo_rules_item_4: "ملف واحد حتى 40 ميبيبايت وعشر دقائق. القوي قد يترك آثارًا؛ إن بدا أجوفًا فارجع إلى خفيف أو متوسط.",
  tool_reduce_background_noise_on_a_voice_memo_example_title: "جرّب مذكرة بهسيس حقيقي",
  tool_reduce_background_noise_on_a_voice_memo_example:
    "تحميل العيّنة يبني ثلاث ثوانٍ من نغمة شبيهة بالكلام تحت هسيس ثابت ثم يقلّل الضوضاء بمتوسط تلقائيًا. التشغيل لا يبدأ وحده—اضغط تشغيل في المعاينة.",
  tool_reduce_background_noise_on_a_voice_memo_usecases_title: "متى يساعد ذلك",
  tool_reduce_background_noise_on_a_voice_memo_usecase_1: "مذكرة هاتف تحتها هسيس مروحة أو مكيّف—اختر متوسط، قلّل الضوضاء، نزّل WAV.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_2: "ملاحظة ميدانية تحتاج أقل هسيس قبل التلاشي أو المعادلة في مكان آخر.",
  tool_reduce_background_noise_on_a_voice_memo_usecase_3: "ضوضاء مروحة/تكييف ثابتة تحت الكلام؛ بوابة ناعمة تهدئ الفجوات.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q1: "هل هذا مثل Adobe Enhance Speech؟",
  tool_reduce_background_noise_on_a_voice_memo_faq_a1:
    "لا. أدوات Enhance السحابية تعيد بناء الكلام بنماذج كبيرة. هنا تمرير عالٍ وبوابة أرضية في المتصفح فقط—نتيجة متواضعة وصادقة.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q2: "هل يزيل طنين الشبكة 50/60 هرتز؟",
  tool_reduce_background_noise_on_a_voice_memo_faq_a2:
    "ليس كمهمة إزالة طنين مخصّصة. يتحسن الهسيس عريض النطاق أكثر. لشق 50/60 هرتز الضيق استخدم إزالة همهمة التيار الكهربائي من تسجيل.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q3: "هل هو نفسه EQ a muffled voice recording؟",
  tool_reduce_background_noise_on_a_voice_memo_faq_a3:
    "لا. تلك الصفحة تشكّل النبرة. هذه تقلّل ضوضاء الخلفية الثابتة. بعد التقليل استخدم EQ a muffled voice recording للنبرة.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q4: "هل قد يفسد القوي الكلام أو الموسيقى؟",
  tool_reduce_background_noise_on_a_voice_memo_faq_a4:
    "نعم. القوي يخفّض الإطارات الهادئة بقوة أكبر وقد يرقّق الحروف الساكنة. فضّل المتوسط؛ استخدم الخفيف إن كان الكلام ضعيفًا أصلًا.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q5: "ماذا يغيّر خفيف ومتوسط وقوي؟",
  tool_reduce_background_noise_on_a_voice_memo_faq_a5:
    "يرفعان قطع التمرير العالي قليلًا ويخفضان الكسب المتبقي قرب الأرضية المقدّرة. الافتراضي: متوسط.",
  tool_reduce_background_noise_on_a_voice_memo_faq_q6: "هل يُرفع صوتي إلى خادم؟",
  tool_reduce_background_noise_on_a_voice_memo_faq_a6:
    "لا. فك الترميز وتقليل الضوضاء وكتابة WAV تعمل في المتصفح على جهازك. يلزم اتصال عند التحميل الأول؛ لا يُضمن العمل دون اتصال. لحواف ناعمة استخدم Fade in and fade out an audio clip؛ للنبرة المكتومة استخدم EQ a muffled voice recording.",
};
export default ar;
