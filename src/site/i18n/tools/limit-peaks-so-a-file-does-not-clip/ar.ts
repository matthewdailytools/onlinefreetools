import type { SiteLangDict } from '../../../types';

/**
 * Arabic copy for limit-peaks-so-a-file-does-not-clip (S19).
 * ≠ compressor (S18), ≠ gain (S15), ≠ peak/LUFS (S16/S17).
 */
const ar: SiteLangDict = {
  tool_limit_peaks_so_a_file_does_not_clip_title: "تحديد القمم حتى لا يقص الملف",
  tool_limit_peaks_so_a_file_does_not_clip_desc:
    "حدد القمم الساخنة عند −0.1 أو −1 أو −3 dBFS بوضع soft أو brickwall ثم نزّل WAV بست عشرة بتة. على الجهاز فقط.",
  tool_limit_peaks_so_a_file_does_not_clip_description:
    "حدد القمم حتى لا يقص الملف: اختر سقفاً (−0.1 أو −1 أو −3 dBFS) ووضع soft أو brickwall. الخطوات: تحديد، معاينة، تنزيل WAV. مثال: حمّل عيّنة القمم الساخنة. تحديد قمم—وليس ضغط المدى الديناميكي، ولا كسب dB ثابت، ولا تطبيع قمة أو LUFS. يبقى الصوت على جهازك؛ ولا يُرفع أبداً.",
  tool_limit_peaks_so_a_file_does_not_clip_article:
    "التصديرات الساخنة غالباً تدفع عينات قليلة إلى القص الرقمي. هذه الصفحة تشغّل محدداً بجافاسكربت خالص: soft يقترب من السقف عبر tanh؛ وbrickwall يقطع بحدة عند السقف. الأسقف: −0.1 أو −1 (افتراضي) أو −3 dBFS. تُعاد صياغة العينات التي تتجاوز السقف فقط—الأجزاء الهادئة تبقى. ليس ضاغطاً (عتبة/نسبة/مكياج)، ولا تعزيزاً ثابتاً للملف كله، ولا تطبيع قمة مطلقة إلى هدف dBFS، ولا مطابقة LUFS للبودكاست. يبقى قناة واحدة أو اثنتان. احتفظ بالماستر؛ التنزيل WAV بست عشرة بتة جديد. العمل في المتصفح على جهازك.",
  tool_limit_peaks_so_a_file_does_not_clip_choose: "اختر ملف صوت",
  tool_limit_peaks_so_a_file_does_not_clip_hint: "أسقط ملفاً واحداً WAV أو MP3 أو M4A أو AAC أو OGG. بحد أقصى 40 ميبيبايت و10 دقائق؛ أحادي أو ستيريو.",
  tool_limit_peaks_so_a_file_does_not_clip_convert: "تحديد",
  tool_limit_peaks_so_a_file_does_not_clip_download: "تنزيل WAV",
  tool_limit_peaks_so_a_file_does_not_clip_sample: "تحميل العيّنة",
  tool_limit_peaks_so_a_file_does_not_clip_clear: "مسح",
  tool_limit_peaks_so_a_file_does_not_clip_advanced: "إعدادات المحدد",
  tool_limit_peaks_so_a_file_does_not_clip_ceiling_label: "السقف",
  tool_limit_peaks_so_a_file_does_not_clip_mode_label: "وضع المحدد",
  tool_limit_peaks_so_a_file_does_not_clip_mode_soft: "Soft",
  tool_limit_peaks_so_a_file_does_not_clip_mode_brickwall: "Brickwall",
  tool_limit_peaks_so_a_file_does_not_clip_settings_hint:
    "−1 dBFS Soft هو هامش الأمان الافتراضي. −0.1 يحافظ على مستوى أكبر؛ −3 يترك headroom إضافياً. Soft يقترب بسلاسة؛ Brickwall يقطع بحدة.",
  tool_limit_peaks_so_a_file_does_not_clip_progress: "تقدم التحديد",
  tool_limit_peaks_so_a_file_does_not_clip_read: "قراءة",
  tool_limit_peaks_so_a_file_does_not_clip_decode: "فك الترميز",
  tool_limit_peaks_so_a_file_does_not_clip_limit: "تحديد",
  tool_limit_peaks_so_a_file_does_not_clip_write: "كتابة",
  tool_limit_peaks_so_a_file_does_not_clip_done: "جاهز. عاين WAV المحدَّد ثم نزّل WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_failed: "فشل التحديد. جرّب ملفاً صوتياً صالحاً أصغر.",
  tool_limit_peaks_so_a_file_does_not_clip_elapsed: "مرّ {s} ث",
  tool_limit_peaks_so_a_file_does_not_clip_preview: "استمع إلى WAV المحدَّد",
  tool_limit_peaks_so_a_file_does_not_clip_result:
    "{seconds} ث · سقف {ceiling} dBFS · {mode} · قمة {peakBefore}→{peakAfter} · WAV {output} كيبيبايت",
  tool_limit_peaks_so_a_file_does_not_clip_sample_name: "عرض-ثانيتين-قمم-ساخنة",
  tool_limit_peaks_so_a_file_does_not_clip_empty: "اختر ملف صوت أو حمّل العيّنة أولاً.",
  tool_limit_peaks_so_a_file_does_not_clip_err_file: "أسقط ملف صوت واحداً بالضبط.",
  tool_limit_peaks_so_a_file_does_not_clip_err_format: "صوت غير مدعوم أو تالف. استخدم ملفاً يستطيع المتصفح فك ترميزه (WAV أو MP3 أو M4A أو AAC أو OGG).",
  tool_limit_peaks_so_a_file_does_not_clip_err_limit: "استخدم ملفاً لا يزيد عن 40 ميبيبايت أو 10 دقائق، بقناة واحدة أو اثنتين.",
  tool_limit_peaks_so_a_file_does_not_clip_err_decode: "تعذّر على المتصفح فك ترميز هذا الصوت. جرّب تسجيلاً صالحاً آخر.",
  tool_limit_peaks_so_a_file_does_not_clip_err_encoder: "تعذّرت كتابة WAV المحدَّد. راجع السقف والوضع ثم أعد تحديد.",
  tool_limit_peaks_so_a_file_does_not_clip_err_silence: "المستوى شبه صامت—لا شيء للتحديد. جرّب تسجيلاً بمستوى مسموع.",
  tool_limit_peaks_so_a_file_does_not_clip_how_title: "كيف تحدد القمم حتى لا يقص الملف",
  tool_limit_peaks_so_a_file_does_not_clip_how_body:
    "اختر سقفاً ووضع Soft أو Brickwall، حدد القمم الساخنة، استمع، ثم نزّل WAV بست عشرة بتة—دون رفع الملف.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_1: "اختر ملف صوت، أو حمّل العيّنة لعرض قمتين ساخنتين لمدة ثانيتين.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_2:
    "افتح إعدادات المحدد واختر −0.1 أو −1 (افتراضي) أو −3 dBFS؛ اترك Soft ما لم ترد Brickwall.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_3: "انقر تحديد وانتظر قراءة → فك ترميز → تحديد → كتابة.",
  tool_limit_peaks_so_a_file_does_not_clip_how_item_4: "عاين النتيجة، تحقق من السقف والوضع، ثم انقر تنزيل WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_title: "لماذا تختار أدواتنا لتحديد القمم حتى لا يقص الملف",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_1: "اطلع على السقف والوضع والقمة قبل/بعد وحجم الإخراج قبل الحفظ.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_2: "مهمة محدد واضحة—وليست جدار ضاغط / كسب / تطبيع مدفوناً.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_3:
    "فك الترميز والتحديد وكتابة WAV على جهازك؛ الصفحة لا ترفع تسجيلك للمعالجة.",
  tool_limit_peaks_so_a_file_does_not_clip_why_choose_item_4: "تغيير السقف أو الوضع أو الإدخال يمسح التنزيل القديم حتى لا تحفظ WAV قديماً بالخطأ.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_title: "السقف وSoft وBrickwall والحدود",
  tool_limit_peaks_so_a_file_does_not_clip_rules_body:
    "المحدد يعيد صياغة العينات التي تتجاوز السقف فقط. Soft يستخدم tanh؛ Brickwall يقطع بحدة. ليس ضغطاً ديناميكياً ولا كسباً ثابتاً ولا تطبيع قمة ولا LUFS.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_1:
    "−1 dBFS Soft هو الافتراضي. −0.1 يحافظ على مستوى أكبر؛ −3 يترك headroom أكبر قبل المقياس الكامل.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_2:
    "Soft يقترب من السقف بسلاسة. Brickwall لا يتجاوزه أبداً وقد يبدو أقسى على القمم القصوى.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_3: "التصدير يبقى بقناة واحدة أو اثنتين. لا تُنسخ الوسوم. لا يُستبدل الملف الأصلي أبداً.",
  tool_limit_peaks_so_a_file_does_not_clip_rules_item_4:
    "ملف واحد حتى 40 ميبيبايت وعشر دقائق. ليس ضاغطاً ولا تضخيماً بكسب ثابت ولا تطبيع قمة ولا مطابقة LUFS.",
  tool_limit_peaks_so_a_file_does_not_clip_example_title: "جرّب تحديد قمم حقيقياً",
  tool_limit_peaks_so_a_file_does_not_clip_example:
    "تحميل العيّنة يبني نغمة 440 هرتز لثانيتين مع دفعات ساخنة مقصودة ثم يطبّق تحديداً تلقائياً عند −1 dBFS Soft. التشغيل لا يبدأ وحده—اضغط تشغيل في المعاينة إن أردت سماع القمم المحدَّدة.",
  tool_limit_peaks_so_a_file_does_not_clip_usecases_title: "متى يساعد هذا",
  tool_limit_peaks_so_a_file_does_not_clip_usecase_1: "مزيج شبه جاهز لكن بعض القمم قد تقص عند التصدير—اختر −1 Soft وحدد ونزّل WAV.",
  tool_limit_peaks_so_a_file_does_not_clip_usecase_2: "تسجيل صوت مضغوط مسبقاً وتحتاج سقفاً نهائياً فقط قبل التسليم.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q1: "هل هذا مثل ضاغط المدى الديناميكي؟",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a1:
    "لا. الضاغط يستخدم عتبة/نسبة (وغالباً مكياجاً) للديناميك غير المتساو. هذه الصفحة تحدد القمم عند سقف فقط. لديناميك الصوت استخدم ضغط المدى الديناميكي لتسجيل صوتي.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q2: "هل هذا مثل رفع تسجيل هادئ بكسب dB ثابت؟",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a2:
    "لا. الكسب الثابت يضاعف المقطع كله. هنا الأجزاء الهادئة تبقى؛ فقط القمم فوق السقف تُحدَّد. للتعزيز الموحد استخدم جعل تسجيل هادئ أعلى.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q3: "هل هذا تطبيع قمة أو مطابقة LUFS للبودكاست؟",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a3:
    "لا. تطبيع القمة يقيّس حتى تصل القمة المطلقة إلى هدف dBFS. LUFS يستهدف الجهارة المدمجة. هذه الصفحة تحدد التجاوزات فقط. استخدم تطبيع ملف صوت إلى القمة أو مطابقة جهارة بودكاست إلى −16 LUFS.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q4: "ماذا يغيّر Soft وBrickwall؟",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a4:
    "Soft يمرّر القمم عبر tanh نحو السقف بصوت ألطف. Brickwall يقطع بحدة—أكثر أماناً ضد التجاوز وأقسى على الضربات القصوى.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q5: "أي سقف أختار؟",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a5:
    "−1 dBFS Soft يناسب معظم التسليمات. استخدم −0.1 لمزيد من المستوى بهامش صغير، أو −3 لمزيد من الأمان قبل المقياس الكامل.",
  tool_limit_peaks_so_a_file_does_not_clip_faq_q6: "هل يُرفع صوتي إلى خادم؟",
  tool_limit_peaks_so_a_file_does_not_clip_faq_a6:
    "لا. فك الترميز والتحديد وكتابة WAV في المتصفح على جهازك. الصفحة تحتاج شبكة عند التحميل الأول؛ الاستخدام دون اتصال غير مضمون. للديناميك أو التطبيع استخدم ضغط المدى الديناميكي لتسجيل صوتي أو تطبيع ملف صوت إلى القمة.",
};
export default ar;
