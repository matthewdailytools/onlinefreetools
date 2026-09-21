import type { SiteLangDict } from '../../../types';

/**
 * العربية (ar) لـ mix-binaural-beats-for-focus（F9 G7）。
 * Locale rewrite for local search habits—not a verbatim machine translation of en.
 * WAV ستيريو يسار/يمين؛ ترفيه/أجواء فقط؛ بلا ادّعاءات طبية أو علاجية أو شفاء.
 */
const ar: SiteLangDict = {
  tool_mix_binaural_beats_for_focus_title: 'مزج نبضات ثنائية الأذن للتركيز',
  tool_mix_binaural_beats_for_focus_desc:
    'امزج نبضات ثنائية الأذن للتركيز من حامل وفرق نبض ثم نزّل WAV ستيريو. على الجهاز فقط—أجواء ترفيهية، وليست علاجاً.',
  tool_mix_binaural_beats_for_focus_description:
    'امزج نبضات ثنائية الأذن للتركيز في المتصفح من حامل وفرق نبض ثم نزّل WAV ستيريو بطول 16 بت. الخطوات: عيّن هرتز الحامل والنبض أو المس إعداداً مسبقاً، اختر المدة، مزج، استمع بسماعات رأس، نزّل. مثال: حامل 200 هرتز بفرق 10 هرتز لمدة 10 ثوانٍ. ترفيه وصوت أجواء للتركيز فقط—ليس علاجاً طبياً. لا يُرفع أبداً.',
  tool_mix_binaural_beats_for_focus_article:
    'من يبحث عن نبضات ثنائية الأذن لجلسة تركيز غالباً يريد ملفاً ستيريو بسيطاً يحفظه. تتيح هذه الصفحة تعيين تردد حامل للأذن اليسرى وآخر أعلى قليلاً لليمنى ليكون الفرق معدل النبض، واختيار المدة، وتوليف PCM ستيريو عند 44.1 كيلوهرتز في المتصفح، ثم تنزيل WAV بطول 16 بت. استخدم سماعات رأس—الفرق يسار/يمين هو الجوهر. الإعدادات المسبقة تغيّر قيم الهرتز فقط؛ اختصارات أجواء وليست بروتوكولات طبية. الصفحة لا تدّعي فعالية علاجية، ولا تشخّص ولا تعالج أي حالة، وهي للترفيه أو الاستماع الشخصي للأجهزة فقط. ليست مولّد جيب أحادي ولا صانع صوت إشعار واجهة. يعمل على جهازك.',
  tool_mix_binaural_beats_for_focus_carrier_label: 'الحامل (الأذن اليسرى، هرتز)',
  tool_mix_binaural_beats_for_focus_carrier_hint: 'تردد القناة اليسرى، شائع 80–500 هرتز. الافتراضي 200 هرتز.',
  tool_mix_binaural_beats_for_focus_beat_label: 'فرق النبض (هرتز)',
  tool_mix_binaural_beats_for_focus_beat_hint: 'الأذن اليمنى تشغّل الحامل + هذه القيمة. أبقِ الفرق بين 1 و40 هرتز.',
  tool_mix_binaural_beats_for_focus_preset_label: 'إعدادات نبض الأجواء المسبقة',
  tool_mix_binaural_beats_for_focus_dur_label: 'المدة',
  tool_mix_binaural_beats_for_focus_convert: 'مزج',
  tool_mix_binaural_beats_for_focus_download: 'تنزيل WAV',
  tool_mix_binaural_beats_for_focus_sample: 'تحميل عيّنة',
  tool_mix_binaural_beats_for_focus_clear: 'مسح',
  tool_mix_binaural_beats_for_focus_advanced: 'ملاحظات ثنائية الأذن',
  tool_mix_binaural_beats_for_focus_settings_hint:
    'الإخراج WAV ستيريو بطول 16 بت عند 44.1 كيلوهرتز مع تداخلات قصيرة. سماعات الرأس مطلوبة لفرق يسار/يمين. ترفيه وأجواء تركيز فقط—ليس علاجاً طبياً ولا علاجاً.',
  tool_mix_binaural_beats_for_focus_progress: 'تقدّم المزج',
  tool_mix_binaural_beats_for_focus_synth: 'توليف',
  tool_mix_binaural_beats_for_focus_write: 'كتابة',
  tool_mix_binaural_beats_for_focus_done: 'جاهز. استمع بسماعات رأس ثم نزّل WAV.',
  tool_mix_binaural_beats_for_focus_failed: 'فشل المزج. تحقق من الحامل وفرق النبض والمدة.',
  tool_mix_binaural_beats_for_focus_elapsed: 'مرّ {s} ث',
  tool_mix_binaural_beats_for_focus_preview: 'استمع إلى WAV ثنائي الأذن',
  tool_mix_binaural_beats_for_focus_result:
    'يسار {left} هرتز · يمين {right} هرتز · نبض {beat} هرتز · {seconds} ث · ستيريو · {rate} هرتز · WAV {output} كيبيبايت',
  tool_mix_binaural_beats_for_focus_sample_name: 'binaural-focus',
  tool_mix_binaural_beats_for_focus_empty: 'عيّن أولاً الحامل ونبض الهرتز، أو حمّل العيّنة.',
  tool_mix_binaural_beats_for_focus_empty_state:
    'عيّن الحامل وفرق النبض (أو المس إعداداً مسبقاً)، اختر المدة، ثم مزج—أو حمّل عيّنة (200 هرتز / 10 هرتز / 10 ث). استخدم سماعات رأس. أجواء ترفيه فقط—ليس علاجاً طبياً.',
  tool_mix_binaural_beats_for_focus_err_carrier: 'أدخل حاملاً بين 80 و1000 هرتز.',
  tool_mix_binaural_beats_for_focus_err_beat: 'أدخل فرق نبض بين 1 و40 هرتز (اليمين = الحامل + النبض).',
  tool_mix_binaural_beats_for_focus_err_limit: 'يجب أن تكون المدة بين 0 و120 ثانية.',
  tool_mix_binaural_beats_for_focus_err_encoder: 'تعذّرت كتابة WAV الستيريو. أعد المزج.',
  tool_mix_binaural_beats_for_focus_how_title: 'كيفية مزج نبضات ثنائية الأذن للتركيز',
  tool_mix_binaural_beats_for_focus_how_body:
    'عيّن الحامل ونبض الهرتز، اختر المدة، مزج، استمع بسماعات رأس، نزّل WAV ستيريو واحداً—دون رفع ملفات ودون ادّعاءات علاجية.',
  tool_mix_binaural_beats_for_focus_how_item_1:
    'أدخل هرتز الحامل للأذن اليسرى (أو اترك 200 هرتز) وفرق النبض لليمنى.',
  tool_mix_binaural_beats_for_focus_how_item_2:
    'اختياري: المس إعداد أجواء مسبقاً (فرق 4 أو 10 أو 16 هرتز)—يغيّر الأرقام فقط، وليس بروتوكولات طبية.',
  tool_mix_binaural_beats_for_focus_how_item_3:
    'اختر رقاقة مدة، انقر مزج، وانتظر توليف ← كتابة.',
  tool_mix_binaural_beats_for_focus_how_item_4:
    'استمع مسبقاً بسماعات رأس، راجع سطر النتيجة، ثم انقر تنزيل WAV.',
  tool_mix_binaural_beats_for_focus_why_choose_title: 'لماذا تختار أدواتنا لمزج نبضات ثنائية الأذن للتركيز',
  tool_mix_binaural_beats_for_focus_why_choose_item_1:
    'ترى هرتز اليسار واليمين وفرق النبض والمدة وكيبيبايت الإخراج قبل الحفظ.',
  tool_mix_binaural_beats_for_focus_why_choose_item_2:
    'مهمة ثنائية الأذن ستيريو واحدة بحدود YMYL صادقة—أجواء ترفيه، وليست علاجاً.',
  tool_mix_binaural_beats_for_focus_why_choose_item_3:
    'التوليف والكتابة على جهازك؛ لا يُرفع شيء لمعالجة النغمات.',
  tool_mix_binaural_beats_for_focus_why_choose_item_4:
    'تغيير الحامل أو النبض أو المدة يمسح التنزيل القديم حتى لا تحفظ WAV قديماً بالخطأ.',
  tool_mix_binaural_beats_for_focus_rules_title: 'قواعد ثنائية الأذن وحدود صادقة',
  tool_mix_binaural_beats_for_focus_rules_body:
    'كل تشغيل يولّف اليسار = الحامل واليمين = الحامل + النبض عند 44.1 كيلوهرتز مع تداخلات حافة قصيرة. التصدير WAV ستيريو 16 بت. ترفيه/أجواء فقط—ليس علاجاً طبياً—وليست مولّد جيب أحادي ولا صفارة واجهة.',
  tool_mix_binaural_beats_for_focus_rules_item_1:
    'الحامل بين 80 و1000 هرتز. فرق النبض بين 1 و40 هرتز. المدة حتى 120 ثانية. الإخراج ستيريو.',
  tool_mix_binaural_beats_for_focus_rules_item_2:
    'سماعات الرأس مطلوبة لفرق يسار/يمين حقيقي. مكبرات الصوت تدمج القنوات وتخفي تأثير النبض.',
  tool_mix_binaural_beats_for_focus_rules_item_3:
    'هذه الصفحة لا تدّعي فعالية طبية أو للنوم أو علاجية. التسميات اختصارات أجواء فقط—وليست بروتوكولات علاج.',
  tool_mix_binaural_beats_for_focus_rules_item_4:
    'التداخلات القصيرة تقلّل النقرات. التنزيل ملف جديد؛ لا يُرفع شيء. ليست مولّد جيب أحادي ولا صوت إشعار واجهة.',
  tool_mix_binaural_beats_for_focus_example_title: 'جرّب حاملاً 200 هرتز بنبض 10 هرتز لمدة 10 ثوانٍ',
  tool_mix_binaural_beats_for_focus_example:
    'تحميل العيّنة يضبط حاملاً 200 هرتز وفرقاً 10 هرتز و10 ثوانٍ، ثم يعمل المزج تلقائياً. بسماعات الرأس يفترض أن تسمع زوجاً ستيريو ثابتاً. التشغيل لا يبدأ وحده—اضغط تشغيل إن أردت الاستماع.',
  tool_mix_binaural_beats_for_focus_usecases_title: 'متى يفيد هذا',
  tool_mix_binaural_beats_for_focus_usecase_1:
    'تريد WAV أجواء تركيز قابلاً لإعادة الاستخدام: عيّن الحامل والنبض، مزج، نزّل، واحفظ الملف لسماعات الرأس.',
  tool_mix_binaural_beats_for_focus_usecase_2:
    'تحتاج عرضاً سريعاً لنبض ستيريو دون تثبيت تطبيق نغمات سطح مكتب أو الثقة بادّعاءات علاجية.',
  tool_mix_binaural_beats_for_focus_usecase_3: 'تريد خلفية ستيريو قصيرة من حامل وفرق نبض للسماعات فقط.',
  tool_mix_binaural_beats_for_focus_faq_q1: 'هل هذا علاج طبي أو علاج؟',
  tool_mix_binaural_beats_for_focus_faq_a1:
    'لا. هذه الصفحة تصنع صوت ترفيه وأجواء تركيز شخصية فقط. لا تشخّص ولا تعالج ولا تشفي أي حالة ولا تدّعي فعالية علاجية.',
  tool_mix_binaural_beats_for_focus_faq_q2: 'هل أحتاج سماعات رأس؟',
  tool_mix_binaural_beats_for_focus_faq_a2:
    'نعم لفرق يسار/يمين المقصود. على مكبرات الصوت تمتزج القنوات ويضعف تأثير النبض أو يختفي.',
  tool_mix_binaural_beats_for_focus_faq_q3: 'هل هذا مثل مولّد نغمة جيب أحادي؟',
  tool_mix_binaural_beats_for_focus_faq_a3:
    'لا. صفحة الجيب تصنع تردداً واحداً أحادياً. هذه الصفحة تكتب دائماً ستيريو بترددين مختلفين قليلاً.',
  tool_mix_binaural_beats_for_focus_faq_q4: 'ماذا تعني إعدادات الأجواء المسبقة؟',
  tool_mix_binaural_beats_for_focus_faq_a4:
    'تضبط فقط فرق النبض بالهرتز (مثلاً 4 أو 10 أو 16 هرتز). ليست بروتوكولات طبية ولا تعد بنتائج نوم أو تركيز.',
  tool_mix_binaural_beats_for_focus_faq_q5: 'هل يُرفع شيء إلى خادم؟',
  tool_mix_binaural_beats_for_focus_faq_a5:
    'لا. التوليف والكتابة يجريان في متصفحك على جهازك. الصفحة تحتاج شبكة عند التحميل الأول؛ التوافر دون اتصال غير مضمون.',
  tool_mix_binaural_beats_for_focus_faq_q6: 'ما تنسيق التنزيل؟',
  tool_mix_binaural_beats_for_focus_faq_a6:
    'WAV PCM ستيريو بطول 16 بت عند 44.1 كيلوهرتز. ملف جديد يمكنك الاحتفاظ به كمقطع أجواء قابل لإعادة الاستخدام.',
};
export default ar;
