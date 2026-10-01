import type { SiteLangDict } from '../../../types';

/**
 * Arabic locale for make-srt-subtitles-from-an-audio-file.
 * On-device Whisper tiny (q8) via same-origin /vendor/whisper; optional Web Speech mic.
 * Local search: صوت إلى srt؛ ترجمات من الصوت؛ whisper في المتصفح.
 * Privacy: دون رفع إلى خادم؛ تبقى على جهازك.
 */
const ar: SiteLangDict = {
  tool_make_srt_subtitles_from_an_audio_file_title: 'إنشاء ترجمات SRT من ملف صوت',
  tool_make_srt_subtitles_from_an_audio_file_desc:
    'حوّل تسجيلاً كلامياً محلياً إلى إشارات .srt مؤقّتة بنموذج Whisper على الجهاز—تبقى الملفات على جهازك ودون رفع إلى خادم.',
  tool_make_srt_subtitles_from_an_audio_file_description:
    'أنشئ ترجمات SRT مؤقّتة من ملف صوت أو فيديو محلي في المتصفح بنموذج Whisper على الجهاز—تبقى الملفات على جهازك ودون رفع إلى خادم. الخطوات: اختر ملف كلام، اختر اللغة (أو تلقائي)، إنشاء SRT، عدّل الإشارات، تنزيل SRT. مثال: عيّنة تشغّل مقطعاً كلامياً قصيراً عبر Whisper وتعرض SRT. التشغيل الأول يحمّل حوالي 45 ميجابايت من ملفات النموذج مرة واحدة (ثم تُخزَّن مؤقتاً). ليست واجهة سحابية؛ الأوقات من مقاطع Whisper.',
  tool_make_srt_subtitles_from_an_audio_file_article:
    'من يبحث عن صوت إلى srt أو ترجمات من الصوت يريد ملف تسميات زمنية قابلاً للتنزيل من تسجيل محلي. هذه الصفحة تشغّل Whisper tiny على الجهاز من سكربتات البائع على نفس الأصل: تفكّ الملف في التبويب، تأخذ أزمنة المقاطع، تُنسّق SRT قياسياً قابلاً للتحرير، ثم تُنزّل. يُقبل فيديو بمسار صوت عندما يستطيع المتصفح فكّه. مسار إملاء بالميكروفون يستخدم Web Speech فقط إن وفّره المتصفح—غياب واجهات الكلام لا يمنع إنشاء SRT. التشغيل الأول يحمّل نحو 45 ميجابايت من أصول النموذج مرة واحدة ويخزّنها. أوقات الإشارات حدود مقاطع Whisper وليست محاذاة إجبارية لكل إطار، والصفحة لا تدمج الترجمات داخل الفيديو.',
  tool_make_srt_subtitles_from_an_audio_file_choose: 'اختر ملف كلام',
  tool_make_srt_subtitles_from_an_audio_file_hint:
    'WAV أو MP3 أو M4A محلي أو صوت آخر يستطيع المتصفح فكّه—حتى نحو 120 ميبيبايت ونحو ساعتين بعد الفك. الملفات الطويلة تُعرَّف بنوافذ منزلقة (النافذة n من N؛ الإيقاف يحتفظ بـ SRT جزئي إن أمكن). فيديو بمسار صوت مقبول عند نجاح الفك؛ وإلا تظهر رسالة فك واضحة.',
  tool_make_srt_subtitles_from_an_audio_file_lang_label: 'لغة الكلام',
  tool_make_srt_subtitles_from_an_audio_file_lang_hint:
    'الاكتشاف التلقائي يترك Whisper يكتشف اللغة. اختر لغة تعرفها لإشارات أكثر استقراراً. إملاء الميكروفون يستخدم الاختيار نفسه عند توفر Web Speech.',
  tool_make_srt_subtitles_from_an_audio_file_lang_auto: 'اكتشاف تلقائي',
  tool_make_srt_subtitles_from_an_audio_file_lang_en: 'الإنجليزية',
  tool_make_srt_subtitles_from_an_audio_file_lang_zh: 'الصينية',
  tool_make_srt_subtitles_from_an_audio_file_lang_es: 'الإسبانية',
  tool_make_srt_subtitles_from_an_audio_file_lang_ja: 'اليابانية',
  tool_make_srt_subtitles_from_an_audio_file_lang_de: 'الألمانية',
  tool_make_srt_subtitles_from_an_audio_file_lang_fr: 'الفرنسية',
  tool_make_srt_subtitles_from_an_audio_file_lang_pt: 'البرتغالية',
  tool_make_srt_subtitles_from_an_audio_file_lang_id: 'الإندونيسية',
  tool_make_srt_subtitles_from_an_audio_file_lang_ar: 'العربية',
  tool_make_srt_subtitles_from_an_audio_file_lang_ru: 'الروسية',
  tool_make_srt_subtitles_from_an_audio_file_convert: 'إنشاء SRT',
  tool_make_srt_subtitles_from_an_audio_file_mic: 'إملاء بالميكروفون',
  tool_make_srt_subtitles_from_an_audio_file_stop: 'إيقاف',
  tool_make_srt_subtitles_from_an_audio_file_download: 'تنزيل SRT',
  tool_make_srt_subtitles_from_an_audio_file_sample: 'عيّنة',
  tool_make_srt_subtitles_from_an_audio_file_clear: 'مسح',
  tool_make_srt_subtitles_from_an_audio_file_source_play: 'تشغيل الصوت الأصلي',
  tool_make_srt_subtitles_from_an_audio_file_advanced: 'حدود صريحة',
  tool_make_srt_subtitles_from_an_audio_file_settings_hint:
    'يعمل Whisper tiny في هذا التبويب من ملفات /vendor/whisper على نفس الأصل. أول إنشاء SRT يحمّل نحو 45 ميجابايت مرة واحدة ثم يعيد استخدام التخزين المؤقت. أوقات الإشارات تتبع مقاطع Whisper—وليست محاذاة إجبارية على مستوى الإطار. إملاء الميكروفون اختياري عبر Web Speech وقد يستخدم خدمة كلام من مزوّد المتصفح. هذه الصفحة لا تدمج الترجمات داخل الفيديو.',
  tool_make_srt_subtitles_from_an_audio_file_progress: 'تقدّم الترجمة',
  tool_make_srt_subtitles_from_an_audio_file_hud_title: 'تقدّم الترجمة',
  tool_make_srt_subtitles_from_an_audio_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_next: 'اكتمل. الخطوة التالية: عدّل الإشارات إن لزم، ثم تنزيل SRT.',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_title: 'تعذّر إكمال SRT',
  tool_make_srt_subtitles_from_an_audio_file_hud_fail_hint: 'جرّب ملفاً آخر أو مقطعاً أقصر أو عيّنة. الملفات تبقى على جهازك.',
  tool_make_srt_subtitles_from_an_audio_file_hud_model_progress: 'جارٍ تنزيل {file} — {pct}%',
  tool_make_srt_subtitles_from_an_audio_file_hud_working: 'بدء…',
  tool_make_srt_subtitles_from_an_audio_file_model: 'النموذج',
  tool_make_srt_subtitles_from_an_audio_file_decode: 'فكّ',
  tool_make_srt_subtitles_from_an_audio_file_transcribe: 'تفريغ',
  tool_make_srt_subtitles_from_an_audio_file_write: 'كتابة SRT',
  tool_make_srt_subtitles_from_an_audio_file_done: 'جاهز. عدّل SRT إن لزم، ثم تنزيل SRT.',
  tool_make_srt_subtitles_from_an_audio_file_failed:
    'تعذّر بناء SRT. جرّب عيّنة أو ملفاً كلامياً أوضح أو مقطعاً أقصر من نحو ساعتين.',
  tool_make_srt_subtitles_from_an_audio_file_elapsed: 'مرّ {s} ث',
  tool_make_srt_subtitles_from_an_audio_file_preview: 'معاينة SRT',
  tool_make_srt_subtitles_from_an_audio_file_interim_label: 'مؤقت (ميكروفون)',
  tool_make_srt_subtitles_from_an_audio_file_result: '{cues} إشارة · {chars} حرفاً',
  tool_make_srt_subtitles_from_an_audio_file_sample_name: 'make-srt-subtitles-from-an-audio-file',
  tool_make_srt_subtitles_from_an_audio_file_empty: 'اختر ملف كلام محلي، أو استخدم إملاء بالميكروفون عند التوفر.',
  tool_make_srt_subtitles_from_an_audio_file_empty_state:
    'لا يوجد SRT بعد. أسقط ملف كلام وانقر إنشاء SRT. عيّنة تشغّل مقطعاً كلامياً قصيراً عبر Whisper على الجهاز. الملفات تبقى على جهازك.',
  tool_make_srt_subtitles_from_an_audio_file_file_label: 'الوسائط: {name}',
  tool_make_srt_subtitles_from_an_audio_file_status_mic_unsupported:
    'إملاء بالميكروفون غير متاح في هذا المتصفح (لا توجد Web Speech API). إنشاء SRT بـ Whisper ما زال يعمل للملفات المحلية.',
  tool_make_srt_subtitles_from_an_audio_file_status_listening:
    'أعاد Whisper نصاً قليلاً أو بلا نص. جرّب تسجيلاً أوضح أو اختر لغة الكلام.',
  tool_make_srt_subtitles_from_an_audio_file_status_mic: 'جارٍ الاستماع إلى الميكروفون… تكلّم بوضوح ثم إيقاف. أوقات الإشارات تستخدم زمن الجلسة.',
  tool_make_srt_subtitles_from_an_audio_file_status_model: 'جارٍ تحميل نموذج Whisper على الجهاز (التشغيل الأول قد ينزّل ~45 ميجابايت)…',
  tool_make_srt_subtitles_from_an_audio_file_status_decode: 'جارٍ فكّ الصوت في هذا التبويب…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe: 'جارٍ التفريغ بـ Whisper…',
  tool_make_srt_subtitles_from_an_audio_file_status_transcribe_window: 'جارٍ تفريغ النافذة {n} من {total}…',
  tool_make_srt_subtitles_from_an_audio_file_status_stopped: 'تم الإيقاف. يُحتفظ بـ SRT جزئي إن وُجدت إشارات مسبقاً.',
  tool_make_srt_subtitles_from_an_audio_file_status_write: 'جارٍ كتابة إشارات SRT المؤقّتة…',
  tool_make_srt_subtitles_from_an_audio_file_err_file: 'اختر ملفاً صوتياً أو مرئياً محلياً واحداً، أو استخدم عيّنة.',
  tool_make_srt_subtitles_from_an_audio_file_err_format:
    'نوع وسائط غير مدعوم. استخدم صوتاً شائعاً، أو فيديو بمسار صوت يستطيع المتصفح فكّه.',
  tool_make_srt_subtitles_from_an_audio_file_err_limit: 'استخدم وسائط حتى نحو 120 ميبيبايت ونحو ساعتين بعد الفك. على الهواتف ضعيفة الذاكرة قد تفشل التسجيلات الطويلة جداً—قصّ أو اضغط أولاً.',
  tool_make_srt_subtitles_from_an_audio_file_err_decode:
    'تعذّر على المتصفح فكّ هذا الملف كصوت. فيديو بلا مسار صوت صالح، أو ترميز غير مدعوم، يفشل هنا.',
  tool_make_srt_subtitles_from_an_audio_file_err_unsupported: 'Web Audio أو واجهات الكلام اللازمة لهذا المسار غير متاحة في هذا المتصفح.',
  tool_make_srt_subtitles_from_an_audio_file_err_permission:
    'رُفض إذن الميكروفون. اسمح بالوصول لإملاء بالميكروفون، أو استخدم إنشاء SRT على ملف.',
  tool_make_srt_subtitles_from_an_audio_file_err_empty_srt: 'لم يُنتج Whisper نصاً كلامياً صالحاً. جرّب مقطعاً آخر أو إعداد اللغة.',
  tool_make_srt_subtitles_from_an_audio_file_err_model:
    'تعذّر تحميل نموذج Whisper على الجهاز من هذا الموقع. ابقَ متصلاً للتنزيل الأول ثم أعد المحاولة.',
  tool_make_srt_subtitles_from_an_audio_file_how_title: 'كيفية إنشاء ترجمات SRT من ملف صوت',
  tool_make_srt_subtitles_from_an_audio_file_how_body:
    'اختر ملف كلام محلي، شغّل Whisper على الجهاز لإشارات مؤقّتة، عدّل المعاينة، ثم نزّل .srt.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_1: 'اختر ملف كلام محلي (أو عيّنة)، واختر اكتشاف تلقائي أو لغة الكلام.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_2: 'انقر إنشاء SRT. راقب بطاقة التقدّم: النموذج، فكّ، تفريغ، ثم كتابة SRT.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_3: 'اختياري: انقر إملاء بالميكروفون إن دعم المتصفح Web Speech، تكلّم، ثم إيقاف.',
  tool_make_srt_subtitles_from_an_audio_file_how_item_4: 'عدّل معاينة SRT إن لزم، ثم تنزيل SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_title: 'لماذا تستخدم إنشاء ترجمات SRT من ملف صوت هنا',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_1:
    'معاينة .srt قياسية قابلة للتحرير قبل التنزيل—وليست TXT فقط، ولا مدمجة داخل الفيديو.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_2:
    'Whisper tiny على الجهاز من ملفات بائع على نفس الأصل—تسجيلك دون رفع إلى خوادمنا للتعرّف.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_3:
    'تكلفة التشغيل الأول صريحة: تنزيل نموذج بنحو 45 ميجابايت مرة واحدة، مع بطاقة تقدّم للنموذج / فكّ / تفريغ / كتابة SRT.',
  tool_make_srt_subtitles_from_an_audio_file_why_choose_item_4:
    'أدوات قريبة تغطي التفريغ النصي الصريح وفيديو الموجة دون فرض محرّر مركزي.',
  tool_make_srt_subtitles_from_an_audio_file_rules_title: 'قواعد SRT وحدود Whisper على الجهاز',
  tool_make_srt_subtitles_from_an_audio_file_rules_body:
    'تشغّل هذه الصفحة Whisper tiny في المتصفح من أصول على نفس الأصل. أوقات الإشارات من مقاطع النموذج. حدود الحجم والمدة تبقي التبويب مستجيباً.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_1:
    'المسار الأساسي يحتاج فكّ Web Audio مع مكدس Whisper على الجهاز تحت /vendor/whisper. إملاء الميكروفون يحتاج Web Speech وهو اختياري.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_2:
    'نحو 120 ميبيبايت لحجم الملف ونحو ساعتين بعد الفك، بنوافذ منزلقة. الملفات الأطول أو الأكبر تظهر خطأ حد واضح؛ الهواتف ضعيفة الذاكرة قد تحتاج مقطعاً أقصر.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_3:
    'الطوابع الزمنية حدود مقاطع Whisper—مفيدة للمشغّلات—وليست محاذاة إجبارية لكل إطار.',
  tool_make_srt_subtitles_from_an_audio_file_rules_item_4:
    'ملفك يبقى على جهازك لـ Whisper. إملاء الميكروفون الاختياري قد يستخدم خدمة كلام من مزوّد المتصفح—راجع إعدادات خصوصية المتصفح.',
  tool_make_srt_subtitles_from_an_audio_file_example_title: 'جرّب مقطع الكلام العيّنة',
  tool_make_srt_subtitles_from_an_audio_file_example:
    'عيّنة تجلب WAV كلامياً قصيراً، وتشغّل إنشاء SRT عبر Whisper على الجهاز، وتملأ معاينة SRT. الصفحة لا تشغّل العيّنة تلقائياً عند الفتح حتى لا يصيب تنزيل النموذج الأول ~45 ميجابايت كل زائر.',
  tool_make_srt_subtitles_from_an_audio_file_usecases_title: 'متى يفيد هذا',
  tool_make_srt_subtitles_from_an_audio_file_usecase_1:
    'لديك ملاحظة صوتية أو مقابلة WAV/MP3 محلية وتحتاج .srt قابلاً للتنزيل لمشغّل أو محرّر.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_2:
    'لديك فيديو قصير بمسار صوت وتريد ترجمات مؤقّتة دون رفع الملف إلى موقع ASR سحابي.',
  tool_make_srt_subtitles_from_an_audio_file_usecase_3:
    'تحتاج SRT أولياً من Whisper على الجهاز لتحريره قبل النشر، أو تلجأ إلى إملاء بالميكروفون عند غياب ملف.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q1: 'ما دقة طوابع زمن SRT؟',
  tool_make_srt_subtitles_from_an_audio_file_faq_a1:
    'تتبع أوقات بداية ونهاية مقاطع Whisper—مناسبة لمعظم المشغّلات والمحرّرات، وليست محاذاة إجبارية لكل إطار من مسار استوديو سطح المكتب.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q2: 'هل يُرفع صوتي إلى خادم؟',
  tool_make_srt_subtitles_from_an_audio_file_faq_a2:
    'لا لمسار ملف Whisper: الفكّ والتفريغ يحدثان في تبويبك؛ الملفات تبقى على جهازك ودون رفع إلى خوادمنا. ابقَ متصلاً فقط لجلب سكربتات النموذج على نفس الأصل عند أول استخدام.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q3: 'هل هذا Whisper محلي أم رفع سحابي؟',
  tool_make_srt_subtitles_from_an_audio_file_faq_a3:
    'إنشاء SRT يشغّل Whisper tiny على الجهاز من ملفات بائع على نفس الأصل. ملف الصوت أو الفيديو يبقى على جهازك ودون رفع إلى خوادمنا للتعرّف. إملاء بالميكروفون الاختياري يستخدم Web Speech API للمتصفح، وقد يشمل خدمة كلام من المزوّد.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q4: 'لماذا يكون أول إنشاء SRT بطيئاً أو كبيراً؟',
  tool_make_srt_subtitles_from_an_audio_file_faq_a4:
    'التشغيل الأول ينزّل نحو 45 ميجابايت من نموذج Whisper tiny وأصول WASM من هذا الموقع إلى ذاكرة المتصفح المؤقتة. التشغيلات اللاحقة تعيد استخدام ذلك التخزين. يظهر التقدّم تحت خطوة النموذج.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q5: 'ما الفرق عن تفريغ ملف صوت إلى نص؟',
  tool_make_srt_subtitles_from_an_audio_file_faq_a5:
    'الأداة ذات الصلة تركّز على نص التفريغ الصريح. هذه الصفحة تُنسّق إشارات SRT مرقّمة ببداية ونهاية للمشغّلات والمحرّرات التي تتوقع .srt.',
  tool_make_srt_subtitles_from_an_audio_file_faq_q6: 'هل يمكن دمج الترجمات داخل ملف فيديو؟',
  tool_make_srt_subtitles_from_an_audio_file_faq_a6:
    'لا. تنزّل فقط ملفاً جانبياً .srt. لفيديو بأسلوب الموجة من الصوت، انظر أداة فيديو الموجة ذات الصلة—وليست تسميات مدمجة.',
};
export default ar;
