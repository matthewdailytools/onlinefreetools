import type { SiteLangDict } from '../../../types';

/**
 * Arabic copy for fade-in-and-fade-out-an-audio-clip (S22).
 * Edge fades; ≠ seamless loop wrap (S5), ≠ limiter/EQ.
 */
const ar: SiteLangDict = {
  tool_fade_in_and_fade_out_an_audio_clip_title: "إضافة تلاشي دخول وخروج لمقطع صوتي",
  tool_fade_in_and_fade_out_an_audio_clip_desc:
    "لطّف البدايات والنهايات الحادة برقاقات 0.5–3 ث ومنحنيات خطية أو equal-power ثم نزّل WAV بـ 16 بت. على الجهاز فقط.",
  tool_fade_in_and_fade_out_an_audio_clip_description:
    "إضافة تلاشي دخول وخروج لمقطع صوتي برقاقات 0.5 أو 1 أو 2 أو 3 ثوانٍ لكل طرف ومنحنى خطي أو equal-power. الخطوات: تلاشي، معاينة، تنزيل WAV. مثال: حمّل العينة الحادة. تلاشي الحواف فقط—ليس لفّ تقاطع لحلقة سلسة، وليس محدد مستوى أو معادل. يبقى الصوت على جهازك؛ لا يُرفع أبدًا.",
  tool_fade_in_and_fade_out_an_audio_clip_article:
    "القصّات الحادة في البداية أو النهاية تُحدث نقرة على السماعات وتبدو مفاجئة في الخط الزمني. تطبق هذه الصفحة غلاف تلاشي دخول في الرأس وتلاشي خروج في الذيل. اختر 0.5 أو 1 أو 2 أو 3 ث لكل طرف ثم خطي أو Equal-power. إذا تجاوز المجموع المدة تُختصر الجانبان بنسبة متناسبة. هذا تلاشي حواف لمقطع واحد—لا لفّ الذيل في الرأس لحلقة سلسة، ولا تحديد قمم ولا معادلة نغم. تبقى القنوات 1 أو 2. احتفظ بالأصل؛ التنزيل WAV جديد 16 بت. يعمل في المتصفح على جهازك.",
  tool_fade_in_and_fade_out_an_audio_clip_choose: "اختر ملفًا صوتيًا",
  tool_fade_in_and_fade_out_an_audio_clip_hint: "أسقط ملف WAV أو MP3 أو M4A أو AAC أو OGG واحدًا. بحد أقصى 40 ميبيبايت و10 دقائق؛ أحادي أو ستيريو.",
  tool_fade_in_and_fade_out_an_audio_clip_convert: "تلاشي",
  tool_fade_in_and_fade_out_an_audio_clip_download: "تنزيل WAV",
  tool_fade_in_and_fade_out_an_audio_clip_sample: "تحميل عينة",
  tool_fade_in_and_fade_out_an_audio_clip_clear: "مسح",
  tool_fade_in_and_fade_out_an_audio_clip_advanced: "إعدادات التلاشي",
  tool_fade_in_and_fade_out_an_audio_clip_fade_in_label: "تلاشي دخول",
  tool_fade_in_and_fade_out_an_audio_clip_fade_out_label: "تلاشي خروج",
  tool_fade_in_and_fade_out_an_audio_clip_curve_label: "المنحنى",
  tool_fade_in_and_fade_out_an_audio_clip_curve_linear: "خطي",
  tool_fade_in_and_fade_out_an_audio_clip_curve_equal: "Equal-power",
  tool_fade_in_and_fade_out_an_audio_clip_settings_hint:
    "الافتراضي دخول 1 ث وخروج 1 ث وEqual-power. الرقاقات القصيرة للطبول؛ الطويلة للوسائد والكلام. إن تجاوزتا المدة تُختصران معًا.",
  tool_fade_in_and_fade_out_an_audio_clip_progress: "تقدّم التلاشي",
  tool_fade_in_and_fade_out_an_audio_clip_read: "قراءة",
  tool_fade_in_and_fade_out_an_audio_clip_decode: "فك ترميز",
  tool_fade_in_and_fade_out_an_audio_clip_fade: "تلاشي",
  tool_fade_in_and_fade_out_an_audio_clip_write: "كتابة",
  tool_fade_in_and_fade_out_an_audio_clip_done: "جاهز. عاين WAV بعد التلاشي ثم نزّل WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_failed: "فشل التلاشي. جرّب ملفًا صوتيًا صالحًا أصغر.",
  tool_fade_in_and_fade_out_an_audio_clip_elapsed: "مضى {s} ث",
  tool_fade_in_and_fade_out_an_audio_clip_preview: "استمع إلى WAV بعد التلاشي",
  tool_fade_in_and_fade_out_an_audio_clip_result:
    "{seconds} ث · دخول {fadeIn}s · خروج {fadeOut}s · {curve} · WAV {output} KiB",
  tool_fade_in_and_fade_out_an_audio_clip_sample_name: "عرض-حاد-أربع-ثوان",
  tool_fade_in_and_fade_out_an_audio_clip_empty: "اختر ملفًا صوتيًا أو حمّل العينة أولًا.",
  tool_fade_in_and_fade_out_an_audio_clip_err_file: "أسقط ملفًا صوتيًا واحدًا فقط.",
  tool_fade_in_and_fade_out_an_audio_clip_err_format:
    "صوت غير مدعوم أو تالف. استخدم ملفًا يستطيع المتصفح فك ترميزه (WAV أو MP3 أو M4A أو AAC أو OGG).",
  tool_fade_in_and_fade_out_an_audio_clip_err_limit:
    "استخدم ملفًا لا يتجاوز 40 ميبيبايت أو 10 دقائق، بقناة أو قناتين.",
  tool_fade_in_and_fade_out_an_audio_clip_err_decode:
    "تعذّر على المتصفح فك ترميز هذا الصوت. جرّب تسجيلًا صالحًا آخر.",
  tool_fade_in_and_fade_out_an_audio_clip_err_encoder:
    "تعذّرت كتابة WAV بعد التلاشي. راجع الإعدادات ثم أعد تلاشي.",
  tool_fade_in_and_fade_out_an_audio_clip_err_silence:
    "المستوى شبه صامت—لا شيء للتلاشي. جرّب تسجيلًا بمستوى مسموع.",
  tool_fade_in_and_fade_out_an_audio_clip_err_short:
    "المقطع أقصر من أن يُفادى بشكل مفيد. استخدم ملفًا أطول من نحو 50 مللي ثانية.",
  tool_fade_in_and_fade_out_an_audio_clip_how_title: "كيف تضيف تلاشي دخول وخروج لمقطع صوتي",
  tool_fade_in_and_fade_out_an_audio_clip_how_body:
    "اختر المدد والمنحنى، طبّق، استمع، ثم نزّل WAV بـ 16 بت—دون رفع الملف.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_1:
    "اختر ملفًا صوتيًا، أو حمّل العينة لعرض حاد لأربع ثوانٍ.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_2:
    "افتح إعدادات التلاشي واختر رقاقات الدخول والخروج (0.5 / 1 / 2 / 3 ث). الافتراضي ثانية لكل طرف.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_3:
    "اختر خطي أو Equal-power (الافتراضي)، انقر تلاشي، وانتظر قراءة → فك ترميز → تلاشي → كتابة.",
  tool_fade_in_and_fade_out_an_audio_clip_how_item_4:
    "عاين البداية والنهاية الناعمتين، راجع سطر النتيجة، ثم نزّل WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_title: "لماذا تختار أدوات إضافة تلاشي دخول وخروج لمقطع صوتي لدينا",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_1:
    "اطّلع على ثواني الدخول/الخروج واسم المنحنى وKiB الناتج قبل الحفظ.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_2:
    "رقاقات واضحة ومنحنيان—مهمة حواف واحدة، لا لفّ حلقة سلسة ولا سلسلة محدد/معادل.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_3:
    "فك الترميز والغلافات وكتابة WAV تعمل على جهازك؛ الصفحة لا ترفع تسجيلك للمعالجة.",
  tool_fade_in_and_fade_out_an_audio_clip_why_choose_item_4:
    "تغيير الرقاقات أو المنحنى أو الإدخال يلغي التنزيل القديم حتى لا تحفظ WAVًا قديمًا.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_title: "المدد والمنحنيات والحدود",
  tool_fade_in_and_fade_out_an_audio_clip_rules_body:
    "تلاشي الدخول يرتفع من الصمت؛ تلاشي الخروج يهبط إلى الصمت. الخطي منحدر مستقيم؛ Equal-power يستخدم جيبًا/جيب تمام. الطلبات المتداخلة تُختصر بنسبة متناسبة.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_1:
    "كل طرف يقدّم 0.5 أو 1 أو 2 أو 3 ثوانٍ. الافتراضي: 1 ث / 1 ث وEqual-power.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_2:
    "يفادي حواف مقطع واحد فقط. لا يلفّ الذيل في الرأس لحلقة سلسة، ولا يحدد القمم ولا يعيد المعادلة.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_3:
    "يحتفظ التصدير بقناة أو قناتين. لا تُنسخ الوسوم. لا يُستبدل الملف الأصلي أبدًا.",
  tool_fade_in_and_fade_out_an_audio_clip_rules_item_4:
    "ملف واحد حتى 40 ميبيبايت وعشر دقائق. إذا تجاوز المجموع المدة يُصغَّر الجانبان معًا.",
  tool_fade_in_and_fade_out_an_audio_clip_example_title: "جرّب تلاشي حواف حقيقيًا",
  tool_fade_in_and_fade_out_an_audio_clip_example:
    "تحميل العينة يبني نغمة لأربع ثوانٍ تبدأ وتنتهي فجأة، ثم يطبّق تلاشيًا تلقائيًا بـ 1 ث / 1 ث Equal-power. لا يبدأ التشغيل وحده—اضغط تشغيل في المعاينة إن أردت سماع الحواف الناعمة.",
  tool_fade_in_and_fade_out_an_audio_clip_usecases_title: "متى يفيد هذا",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_1:
    "تعليق صوتي أو سرير موسيقي ينقر عند القصّات—اختر 1 ث / 1 ث، تلاشي، نزّل WAV.",
  tool_fade_in_and_fade_out_an_audio_clip_usecase_2:
    "مقطع يحتاج حوافًا ناعمة قبل القصّ في مكان آخر أو وضعه على خط زمني—دون بناء حلقة سلسة.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q1: "هل هذا مثل صنع حلقة صوتية سلسة؟",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a1:
    "لا. تلك الأداة تلفّ الذيل المحدد في الرأس بتقاطع ليكون الوصل نظيفًا عند التكرار. هذه الصفحة لطّف البداية والنهاية لمقطع واحد فقط. للحلقة السلسة استخدم صنع حلقة صوتية سلسة.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q2: "هل يحدد القمم أو يعادل النغم؟",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a2:
    "لا. يضاعف العينات بغلاف تلاشي فقط. لتحديد القمم أو تعزيز الباس أو معادلة الصوت المكتوم استخدم الأدوات المخصصة.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q3: "ما الفرق بين Equal-power والخطي؟",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a3:
    "الخطي يرفع الكسب بخط مستقيم. Equal-power يستخدم جيبًا للدخول وشكل جيب التمام المقابل للخروج لصوت أكثر سلاسة. الافتراضي Equal-power.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q4: "ماذا لو تجاوز 3 ث + 3 ث طول المقطع؟",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a4:
    "يُختصر الطرفان بنسبة متناسبة حتى لا يتجاوز المجموع المدة. يظهر سطر النتيجة الثواني الفعلية المطبّقة.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q5: "هل يمكن تلاشي طرف واحد فقط؟",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a5:
    "الرقاقات تضبط الطرفين؛ استخدم أقصر رقاقة (0.5 ث) للطرف الذي لا تريد لمسه تقريبًا، أو قصّ أولًا بأداة قص مقطع صوتي وتصديره.",
  tool_fade_in_and_fade_out_an_audio_clip_faq_q6: "هل يُرفع الصوت إلى خادم؟",
  tool_fade_in_and_fade_out_an_audio_clip_faq_a6:
    "لا. فك الترميز والتلاشي وكتابة WAV تعمل في المتصفح على جهازك. تحتاج الصفحة شبكة عند التحميل الأول؛ لا يُضمن العمل دون اتصال. للحلقة السلسة أو قص الطول استخدم الأدوات المخصصة.",
};
export default ar;
