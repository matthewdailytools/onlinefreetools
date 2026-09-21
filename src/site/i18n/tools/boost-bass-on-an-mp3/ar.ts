import type { SiteLangDict } from '../../../types';

/**
 * Arabic copy for boost-bass-on-an-mp3 (S21).
 * Low-shelf only; ≠ muffled EQ (S20), ≠ whole-file louder (S15).
 */
const ar: SiteLangDict = {
  tool_boost_bass_on_an_mp3_title: "تعزيز الباس في ملف MP3",
  tool_boost_bass_on_an_mp3_desc:
    "كثّف الباس الضعيف بإعدادات Mild أو Medium أو Strong (low-shelf) ثم نزّل WAV بـ 16 بت. على الجهاز فقط.",
  tool_boost_bass_on_an_mp3_description:
    "تعزيز الباس في ملف MP3 بإعدادات Mild وMedium وStrong بنمط low-shelf. الخطوات: تعزيز، معاينة، تنزيل WAV. مثال: حمّل عيّنة الباس الضعيف. باس low-shelf فقط—ليس معادلًا متعدد النطاقات كاملًا، وليس مضخّم مستوى لكل الملف. يبقى الصوت على جهازك؛ لا يُرفع أبدًا.",
  tool_boost_bass_on_an_mp3_article: "تصديرات الهاتف وسماعات الحاسوب المحمول غالبًا تترك الضربة والباس رفيعين: وسط كافٍ ووزن أقل تحت نحو 100 هرتز. تشغّل هذه الصفحة مرحلة lowshelf EQ واحدة في on-device audio processing. Mild لطيف؛ Medium (الافتراضي) رفع يومي؛ Strong أقوى. حماية الذروة الناعمة تقيس النتيجة إن كان التعزيز سيقطع. هذا تعزيز باس—ليس EQ ثلاثي النطاق Clarity/Warmth/Presence للصوت المكتوم، ولا كسب dB مسطح يرفع كل الترددات. يبقى عدد القنوات 1 أو 2. احتفظ بالنسخة الأصلية؛ التنزيل WAV جديد بـ 16 بت. العمل في المتصفح على جهازك.",
  tool_boost_bass_on_an_mp3_choose: "اختر ملف صوت",
  tool_boost_bass_on_an_mp3_hint: "أسقط ملف WAV أو MP3 أو M4A أو AAC أو OGG واحدًا. بحد أقصى 40 ميبيبايت و10 دقائق؛ أحادي أو استريو.",
  tool_boost_bass_on_an_mp3_convert: "تعزيز",
  tool_boost_bass_on_an_mp3_download: "تنزيل WAV",
  tool_boost_bass_on_an_mp3_sample: "تحميل عيّنة",
  tool_boost_bass_on_an_mp3_clear: "مسح",
  tool_boost_bass_on_an_mp3_advanced: "إعدادات الباس",
  tool_boost_bass_on_an_mp3_preset_label: "إعداد باس low-shelf",
  tool_boost_bass_on_an_mp3_preset_mild: "Mild",
  tool_boost_bass_on_an_mp3_preset_medium: "Medium",
  tool_boost_bass_on_an_mp3_preset_strong: "Strong",
  tool_boost_bass_on_an_mp3_settings_hint:
    "Medium الافتراضي يرفع المنخفضات حول 90 هرتز. Mild ألطف؛ Strong أثقل. حماية الذروة تمنع القطع بعد التعزيز.",
  tool_boost_bass_on_an_mp3_progress: "تقدّم تعزيز الباس",
  tool_boost_bass_on_an_mp3_read: "قراءة",
  tool_boost_bass_on_an_mp3_decode: "فك ترميز",
  tool_boost_bass_on_an_mp3_boost: "تعزيز",
  tool_boost_bass_on_an_mp3_write: "كتابة",
  tool_boost_bass_on_an_mp3_done: "جاهز. عاين WAV بعد تعزيز الباس ثم نزّل WAV.",
  tool_boost_bass_on_an_mp3_failed: "فشل تعزيز الباس. جرّب ملف صوت صالحًا أصغر.",
  tool_boost_bass_on_an_mp3_elapsed: "مرّ {s} ث",
  tool_boost_bass_on_an_mp3_preview: "استمع إلى WAV بعد تعزيز الباس",
  tool_boost_bass_on_an_mp3_result: "{seconds} ث · {preset} · ذروة {peakBefore} → {peakAfter} · WAV {output} KiB",
  tool_boost_bass_on_an_mp3_sample_name: "عرض-باس-ضعيف-ثانيتان",
  tool_boost_bass_on_an_mp3_empty: "اختر ملف صوت أو حمّل العيّنة أولًا.",
  tool_boost_bass_on_an_mp3_err_file: "أسقط ملف صوت واحدًا فقط.",
  tool_boost_bass_on_an_mp3_err_format: "صوت غير مدعوم أو تالف. استخدم ملفًا يستطيع المتصفح فك ترميزه (WAV أو MP3 أو M4A أو AAC أو OGG).",
  tool_boost_bass_on_an_mp3_err_limit: "استخدم ملفًا لا يتجاوز 40 ميبيبايت أو 10 دقائق، بقناة أو اثنتين.",
  tool_boost_bass_on_an_mp3_err_decode: "تعذّر على المتصفح فك ترميز هذا الصوت. جرّب تسجيلًا صالحًا آخر.",
  tool_boost_bass_on_an_mp3_err_encoder: "تعذّرت كتابة WAV المعزّز. راجع الإعداد ثم عزّز مجددًا.",
  tool_boost_bass_on_an_mp3_err_silence: "المستوى شبه صامت—لا شيء لتعزيزه. استخدم تسجيلًا مسموعًا.",
  tool_boost_bass_on_an_mp3_how_title: "كيف تعزّز الباس في ملف MP3",
  tool_boost_bass_on_an_mp3_how_body:
    "اختر إعداد low-shelf، ارفع الباس، استمع، ثم نزّل WAV بـ 16 بت—دون رفع الملف.",
  tool_boost_bass_on_an_mp3_how_item_1: "اختر ملف صوت، أو حمّل العيّنة لعرض باس ضعيف لمدة ثانيتين.",
  tool_boost_bass_on_an_mp3_how_item_2: "افتح إعدادات الباس واختر Mild أو Medium (افتراضي) أو Strong.",
  tool_boost_bass_on_an_mp3_how_item_3: "انقر تعزيز وانتظر قراءة → فك ترميز → تعزيز → كتابة.",
  tool_boost_bass_on_an_mp3_how_item_4: "عاين النتيجة، راجع الإعداد والذروات، ثم نزّل WAV.",
  tool_boost_bass_on_an_mp3_why_choose_title: "لماذا تختار أدواتنا لتعزيز الباس في MP3",
  tool_boost_bass_on_an_mp3_why_choose_item_1: "اطّلع على اسم الإعداد والذروة قبل/بعد وKiB الإخراج قبل الحفظ.",
  tool_boost_bass_on_an_mp3_why_choose_item_2: "ثلاثة إعدادات low-shelf واضحة—مهمة باس واحدة، لا EQ بعشرة نطاقات ولا جدار مستوى مسطح.",
  tool_boost_bass_on_an_mp3_why_choose_item_3:
    "فك الترميز وتعزيز lowshelf وكتابة WAV على جهازك؛ الصفحة لا ترفع الصوت للمعالجة.",
  tool_boost_bass_on_an_mp3_why_choose_item_4: "تغيير الإعداد أو الإدخال يمسح التنزيل القديم كي لا تحفظ WAV قديمًا بالخطأ.",
  tool_boost_bass_on_an_mp3_rules_title: "Mild وMedium وStrong والحدود",
  tool_boost_bass_on_an_mp3_rules_body:
    "كل إعداد مرحلة lowshelf EQ واحدة. Mild لطيف؛ Medium الرفع اليومي؛ Strong أثقل. حماية الذروة تقيس إن كان التعزيز سيقطع.",
  tool_boost_bass_on_an_mp3_rules_item_1:
    "Medium الافتراضي lowshelf قرب 90 هرتز بنحو +8 dB. Mild نحو +4؛ Strong نحو +12 مع رفّ أدنى قليلًا.",
  tool_boost_bass_on_an_mp3_rules_item_2:
    "باس low-shelf فقط. لا يعيد تشكيل الوسط/العلوي مثل EQ الصوت المكتوم، ولا يضخّم كل الترددات مثل مضخّم المستوى.",
  tool_boost_bass_on_an_mp3_rules_item_3: "يبقى عدد القنوات 1 أو 2 في التصدير. لا تُنسخ الوسوم. لا يُستبدل الملف الأصلي.",
  tool_boost_bass_on_an_mp3_rules_item_4:
    "ملف واحد حتى 40 ميبيبايت وعشر دقائق. بعد Strong قد تخفض حماية الذروة المستوى الكلي ليبقى WAV دون المدى الكامل.",
  tool_boost_bass_on_an_mp3_example_title: "جرّب تعزيز باس حقيقيًا",
  tool_boost_bass_on_an_mp3_example:
    "تحميل العيّنة يبني نغمة ثانيتين غنية بالوسط وضعيفة في الباس، ثم يعزّز تلقائيًا بـ Medium. التشغيل لا يبدأ وحده—اضغط تشغيل في المعاينة إن أردت سماع النتيجة الأثقل.",
  tool_boost_bass_on_an_mp3_usecases_title: "متى يفيد ذلك",
  tool_boost_bass_on_an_mp3_usecase_1: "تصدير MP3 يبدو رفيعًا على السماعات—اختر Medium، عزّز، نزّل WAV.",
  tool_boost_bass_on_an_mp3_usecase_2: "مقطع يحتاج وزن ضربة أعمق دون فتح EQ رسومي كامل أو رفع المزيج كله.",
  tool_boost_bass_on_an_mp3_usecase_3: "ملف MP3 من الهاتف يبدو نحيفًا على الحاسوب وتريد ضربات أوضح لا أوساط أعلى.",
  tool_boost_bass_on_an_mp3_faq_q1: "هل هذا مثل معادلة تسجيل صوت مكتوم؟",
  tool_boost_bass_on_an_mp3_faq_a1:
    "لا. تلك الصفحة تستخدم إعدادات Clarity/Warmth/Presence ثلاثية النطاق للكلام المكتوم. هذه ترفع الترددات المنخفضة فقط بـ lowshelf. لمعادلة الصوت المكتوم استخدم معادلة تسجيل صوت مكتوم.",
  tool_boost_bass_on_an_mp3_faq_q2: "هل هذا مثل جعل تسجيل هادئ أعلى صوتًا؟",
  tool_boost_bass_on_an_mp3_faq_a2:
    "لا. مضخّم المستوى يقيس كل عيّنة بنفس كسب dB. هذه الصفحة تضع رفًّا للباس فقط. لكسب الملف كله استخدم جعل تسجيل هادئ أعلى صوتًا.",
  tool_boost_bass_on_an_mp3_faq_q3: "ماذا تفعل Mild وMedium وStrong؟",
  tool_boost_bass_on_an_mp3_faq_a3:
    "Mild lowshelf لطيف. Medium (افتراضي) رفع باس يومي. Strong رفّ أثقل. حماية الذروة تمنع القطع بعد التعزيز.",
  tool_boost_bass_on_an_mp3_faq_q4: "ماذا إن جعل التعزيز الملف أسخن؟",
  tool_boost_bass_on_an_mp3_faq_a4:
    "بعد lowshelf، إن تجاوزت الذروات نحو −0.2 dBFS تقيس الحماية المخزن المؤقت. لتقييد ذروة مخصص استخدم تقييد الذروات كي لا يقطع الملف.",
  tool_boost_bass_on_an_mp3_faq_q5: "هل يُرفع صوتي إلى خادم؟",
  tool_boost_bass_on_an_mp3_faq_a5:
    "لا. فك الترميز وتعزيز الباس وكتابة WAV في متصفحك على الجهاز. يلزم اتصال عند التحميل الأول؛ لا يُضمن العمل دون اتصال.",
  tool_boost_bass_on_an_mp3_faq_q6: "MP3 فقط أم أيضًا WAV وM4A؟",
  tool_boost_bass_on_an_mp3_faq_a6:
    "أي تنسيق يستطيع المتصفح فك ترميزه—WAV أو MP3 أو M4A أو AAC أو OGG. العنوان يتبع بحث MP3 الشائع؛ التصدير دائمًا WAV جديد بـ 16 بت.",
};
export default ar;
