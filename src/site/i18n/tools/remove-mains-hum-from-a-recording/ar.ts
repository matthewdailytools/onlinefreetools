import type { SiteLangDict } from '../../../types';

/**
 * Arabic copy for remove-mains-hum-from-a-recording (S26).
 * How≥4, Why≥4, Rules≥4, FAQ≥6; ≠ denoise / declick / EQ.
 */
const ar: SiteLangDict = {
  tool_remove_mains_hum_from_a_recording_title: "إزالة همهمة التيار الكهربائي من تسجيل",
  tool_remove_mains_hum_from_a_recording_desc:
    "اقطع همهمة 50 أو 60 هرتز بمرشحات notch وتوافقيات اختيارية ثم نزّل WAV بـ 16 بت. على الجهاز فقط.",
  tool_remove_mains_hum_from_a_recording_description:
    "أزل همهمة التيار من تسجيل بمرشحات notch عند 50 أو 60 هرتز وتوافقيات اختيارية من الثاني إلى الخامس. الخطوات: إزالة الهمهمة، المعاينة، تنزيل WAV. مثال: حمّل العينة ذات الهمهمة. notch ضيقة للهمهمة الكهربائية—وليست تقليل ضوضاء واسع النطاق، ولا إزالة نقرات، ولا معادلة صوت مكتوم. يبقى الصوت على جهازك؛ ولا يُرفع أبدًا.",
  tool_remove_mains_hum_from_a_recording_article:
    "التسجيلات قرب مصادر الطاقة أو المخفتات أو معدات ضعيفة التأريض غالبًا تلتقط همهمة مستقرة عند 50 أو 60 هرتز، وأحيانًا بتوافقيات. هذه الصفحة تسلسل مراحل notch من BiquadFilter في OfflineAudioContext عند الأساسي المختار، واختياريًا التوافقيات من الثاني إلى الخامس تحت نيكويست. تستهدف نغمات كهربائية ضيقة—وليس تقليل هسهسة المروحة واسع النطاق، ولا إصلاح النقرات، ولا معادلة ثلاثية النطاق للصوت المكتوم. قد يخفّ الباس قرب الـ notch قليلًا. عدد القنوات يبقى 1 أو 2. احتفظ بالملف الأصلي؛ التنزيل WAV جديد بـ 16 بت. يعمل كل شيء في المتصفح على جهازك.",
  tool_remove_mains_hum_from_a_recording_choose: "اختر ملف صوت",
  tool_remove_mains_hum_from_a_recording_hint: "أسقط ملف WAV أو MP3 أو M4A أو AAC أو OGG واحدًا. الحد الأقصى 40 ميبيبايت و10 دقائق؛ أحادي أو ستيريو.",
  tool_remove_mains_hum_from_a_recording_convert: "إزالة الهمهمة",
  tool_remove_mains_hum_from_a_recording_download: "تنزيل WAV",
  tool_remove_mains_hum_from_a_recording_sample: "تحميل عينة",
  tool_remove_mains_hum_from_a_recording_clear: "مسح",
  tool_remove_mains_hum_from_a_recording_advanced: "تردد التيار والتوافقيات",
  tool_remove_mains_hum_from_a_recording_hz_label: "تردد التيار",
  tool_remove_mains_hum_from_a_recording_hz_50: "50 هرتز",
  tool_remove_mains_hum_from_a_recording_hz_60: "60 هرتز",
  tool_remove_mains_hum_from_a_recording_harmonics_label: "التوافقيات",
  tool_remove_mains_hum_from_a_recording_harmonics_off: "الأساسي فقط",
  tool_remove_mains_hum_from_a_recording_harmonics_on: "تضمين التوافقيات",
  tool_remove_mains_hum_from_a_recording_settings_hint:
    "الافتراضي 50 هرتز مع التوافقيات يطبّق notch على الأساسي وعلى الثاني إلى الخامس تحت نيكويست. اختر 60 هرتز لأمريكا الشمالية والشبكات المشابهة. الأساسي فقط ألطف على الباس القريب.",
  tool_remove_mains_hum_from_a_recording_progress: "تقدم إزالة الهمهمة",
  tool_remove_mains_hum_from_a_recording_read: "قراءة",
  tool_remove_mains_hum_from_a_recording_decode: "فك الترميز",
  tool_remove_mains_hum_from_a_recording_dehum: "إزالة الهمهمة",
  tool_remove_mains_hum_from_a_recording_write: "كتابة",
  tool_remove_mains_hum_from_a_recording_done: "جاهز. عاين WAV بعد إزالة الهمهمة ثم نزّل WAV.",
  tool_remove_mains_hum_from_a_recording_failed: "فشلت إزالة الهمهمة. جرّب ملف صوت صالحًا أصغر.",
  tool_remove_mains_hum_from_a_recording_elapsed: "مرّ {s} ث",
  tool_remove_mains_hum_from_a_recording_preview: "استمع إلى WAV بعد إزالة الهمهمة",
  tool_remove_mains_hum_from_a_recording_result: "{seconds} ث · {hz} هرتز · {harmonics} · {notches} notch · WAV {output} كيبيبايت",
  tool_remove_mains_hum_from_a_recording_sample_name: "عرض-همهمة-تيار-ثلاث-ثوان",
  tool_remove_mains_hum_from_a_recording_empty: "اختر ملف صوت أو حمّل العينة أولًا.",
  tool_remove_mains_hum_from_a_recording_err_file: "أسقط ملف صوت واحدًا فقط.",
  tool_remove_mains_hum_from_a_recording_err_format: "صوت غير مدعوم أو تالف. استخدم ملفًا يمكن للمتصفح فك ترميزه (WAV أو MP3 أو M4A أو AAC أو OGG).",
  tool_remove_mains_hum_from_a_recording_err_limit: "استخدم ملفًا لا يتجاوز 40 ميبيبايت أو 10 دقائق، بقناة أو اثنتين.",
  tool_remove_mains_hum_from_a_recording_err_decode: "تعذّر على المتصفح فك ترميز هذا الصوت. جرّب تسجيلًا صالحًا آخر.",
  tool_remove_mains_hum_from_a_recording_err_encoder: "تعذّرت كتابة WAV بعد إزالة الهمهمة. راجع التردد والتوافقيات ثم أعد المحاولة.",
  tool_remove_mains_hum_from_a_recording_err_silence: "المستوى صمت تقريبًا—لا شيء لإزالته. جرّب تسجيلًا بمستوى مسموع.",
  tool_remove_mains_hum_from_a_recording_how_title: "كيف تزيل همهمة التيار الكهربائي من تسجيل",
  tool_remove_mains_hum_from_a_recording_how_body:
    "اختر 50 أو 60 هرتز، قرّر التوافقيات، شغّل الـ notch، استمع، ثم نزّل WAV بـ 16 بت—دون رفع الملف.",
  tool_remove_mains_hum_from_a_recording_how_item_1: "اختر ملف صوت، أو اختر تحميل عينة لعرض همهمة مدته ثلاث ثوانٍ.",
  tool_remove_mains_hum_from_a_recording_how_item_2: "افتح تردد التيار والتوافقيات: اختر 50 أو 60 هرتز، ثم الأساسي فقط أو تضمين التوافقيات.",
  tool_remove_mains_hum_from_a_recording_how_item_3: "انقر إزالة الهمهمة وانتظر قراءة ← فك الترميز ← إزالة الهمهمة ← كتابة.",
  tool_remove_mains_hum_from_a_recording_how_item_4: "عاين الخلفية الكهربائية الأهدأ، راجع سطر النتيجة، ثم نزّل WAV.",
  tool_remove_mains_hum_from_a_recording_why_choose_title: "لماذا تختار أدواتنا لإزالة همهمة التيار الكهربائي من تسجيل",
  tool_remove_mains_hum_from_a_recording_why_choose_item_1: "اطّلع على هرتز التيار ووضع التوافقيات وعدد الـ notch وحجم الإخراج قبل الحفظ.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_2: "مهمة إزالة همهمة واضحة—notch عند 50/60 هرتز مع توافقيات اختيارية، وليست رف DAW مدفونًا.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_3: "فك الترميز وترشيح notch وكتابة WAV تجري على جهازك؛ الصفحة لا ترفع التسجيل للمعالجة.",
  tool_remove_mains_hum_from_a_recording_why_choose_item_4: "تغيير التردد أو التوافقيات أو الإدخال يمسح التنزيل القديم حتى لا تحفظ WAV قديمًا بالخطأ.",
  tool_remove_mains_hum_from_a_recording_rules_title: "تردد الـ notch والتوافقيات وحدود المتصفح الصادقة",
  tool_remove_mains_hum_from_a_recording_rules_body:
    "كل تشغيل يسلسل مرشحات notch ضيقة عند الأساسي المختار، وإن فُعّلت، التوافقيات 2–5 تحت نيكويست. نغمات التيار الحقيقية تتحسّن أكثر؛ الهسهسة واسعة النطاق تحتاج تقليل ضوضاء في مكان آخر. حماية الذروة اللينة تُبقي WAV تحت المقياس الكامل.",
  tool_remove_mains_hum_from_a_recording_rules_item_1: "50 أو 60 هرتز يحددان الأساسي. تضمين التوافقيات يضيف notch عند 2×–5× تحت نيكويست. الافتراضي: 50 هرتز مع التوافقيات.",
  tool_remove_mains_hum_from_a_recording_rules_item_2: "هذه سلسلة notch في المتصفح. ليست تقليل ضوضاء واسع النطاق، ولا إصلاح نقرات، ولا معادلة صوت مكتوم.",
  tool_remove_mains_hum_from_a_recording_rules_item_3: "التصدير يحتفظ بقناة أو اثنتين. لا تُنسخ الوسوم. الملف الأصلي لا يُستبدل أبدًا.",
  tool_remove_mains_hum_from_a_recording_rules_item_4: "ملف واحد حتى 40 ميبيبايت وعشر دقائق. قد يخفّ الباس قرب الـ notch؛ إن بدا أجوفًا جرّب الأساسي فقط.",
  tool_remove_mains_hum_from_a_recording_example_title: "جرّب مقطعًا ذا همهمة حقيقية",
  tool_remove_mains_hum_from_a_recording_example:
    "تحميل عينة يبني نغمة شبيهة بالكلام لثلاث ثوانٍ تحت همهمة 50 هرتز مع توافقيات، ثم يزيل الهمهمة تلقائيًا عند 50 هرتز مع التوافقيات. التشغيل لا يبدأ وحده—اضغط تشغيل في المعاينة إن أردت سماع الخلفية الأهدأ.",
  tool_remove_mains_hum_from_a_recording_usecases_title: "متى يساعد هذا",
  tool_remove_mains_hum_from_a_recording_usecase_1: "مذكرة صوتية بهمهمة كهربائية مستقرة من شاحن أو مخفت—اختر هرتز شبكتك، أزل الهمهمة، نزّل WAV.",
  tool_remove_mains_hum_from_a_recording_usecase_2: "تسجيل ميداني يحتاج إزالة نغمة التيار قبل تقليل هسهسة واسعة النطاق أو معادلة صوت مكتوم في مكان آخر.",
  tool_remove_mains_hum_from_a_recording_faq_q1: "هل هذا مثل تقليل ضوضاء الخلفية في مذكرة صوتية؟",
  tool_remove_mains_hum_from_a_recording_faq_a1:
    "لا. تلك الصفحة تمرّر بتمرير عالٍ وتطبّق بوابة على هسهسة مروحة أو مكيّف مستقرة. هذه الصفحة تطبّق notch على نغمات كهربائية ضيقة عند 50/60 هرتز. استخدم تقليل ضوضاء الخلفية في مذكرة صوتية للهسهسة واسعة النطاق.",
  tool_remove_mains_hum_from_a_recording_faq_q2: "هل يزيل النقرات والفرقعات؟",
  tool_remove_mains_hum_from_a_recording_faq_a2:
    "لا. النقرات وفرقعات الفم وطقطقة الأسطوانات تحتاج مهمة إزالة نقرات. هذه الصفحة تطبّق notch فقط على أساسي التيار والتوافقيات الاختيارية.",
  tool_remove_mains_hum_from_a_recording_faq_q3: "هل هذا مثل معادلة تسجيل صوت مكتوم؟",
  tool_remove_mains_hum_from_a_recording_faq_a3:
    "لا. تلك الصفحة تعيد تشكيل النبرة بـ Clarity أو Warmth أو Presence. هذه الصفحة تزيل الهمهمة الكهربائية. للنبرة المكتومة بعد إزالة الهمهمة استخدم معادلة تسجيل صوت مكتوم.",
  tool_remove_mains_hum_from_a_recording_faq_q4: "أختار 50 هرتز أم 60 هرتز؟",
  tool_remove_mains_hum_from_a_recording_faq_a4:
    "طابق شبكة الكهرباء لديك. معظم أوروبا وآسيا وأفريقيا وأستراليا تستخدم 50 هرتز. أمريكا الشمالية وأجزاء من اليابان وأمريكا الجنوبية تستخدم 60 هرتز. الهرتز الخاطئ يترك الهمهمة شبه دون مساس.",
  tool_remove_mains_hum_from_a_recording_faq_q5: "ماذا يفعل تضمين التوافقيات؟",
  tool_remove_mains_hum_from_a_recording_faq_a5:
    "يضيف notch عند ضعفي إلى خمسة أضعاف الأساسي عندما تكون تلك الترددات تحت نيكويست. الهمهمة غالبًا لها توافقيات؛ الأساسي فقط ألطف على الباس القريب.",
  tool_remove_mains_hum_from_a_recording_faq_q6: "هل يُرفع الصوت إلى خادم؟",
  tool_remove_mains_hum_from_a_recording_faq_a6:
    "لا. فك الترميز وترشيح notch وكتابة WAV تجري في المتصفح على جهازك. الصفحة تحتاج شبكة عند التحميل الأول؛ التوفر دون اتصال غير مضمون. للهسهسة واسعة النطاق استخدم تقليل ضوضاء الخلفية في مذكرة صوتية؛ للنبرة المكتومة استخدم معادلة تسجيل صوت مكتوم.",
};
export default ar;
