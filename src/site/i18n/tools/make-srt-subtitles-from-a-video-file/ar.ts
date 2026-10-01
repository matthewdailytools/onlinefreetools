import type { SiteLangDict } from '../../../types';

/**
 * Arabic (ar) copy for make-srt-subtitles-from-a-video-file.
 * Local search: فيديو إلى srt / ترجمات من فيديو / إنشاء srt من فيديو.
 * Video-only on-device Whisper tiny; ~45 MB first download; preview; no mic.
 * Privacy: دون رفع إلى خادم؛ تبقى على جهازك.
 */
const ar: SiteLangDict = {
  tool_make_srt_subtitles_from_a_video_file_title: 'إنشاء ترجمات SRT من ملف فيديو',
  tool_make_srt_subtitles_from_a_video_file_desc:
    'حوّل فيديوًا محليًا فيه حوار إلى إشارات .srt موقوتة باستخدام Whisper على الجهاز—تبقى الملفات على جهازك ولا تُرفع إلى خادم.',
  tool_make_srt_subtitles_from_a_video_file_description:
    'أنشئ ترجمات SRT موقوتة من ملف فيديو محلي في المتصفح باستخدام Whisper على الجهاز: تبقى الملفات على جهازك ولا تُرفع إلى خادم. الخطوات: اختر فيديوًا بحوار، شغّله لمراجعة المقطع، اللغة (أو تلقائي)، إنشاء SRT، عدّل الإشارات، نزّل .srt. مثال: عيّنة تمرّر MP4 قصيرًا منطوقًا عبر Whisper. التشغيل الأول يحمّل نحو 45 ميغابايت مرة واحدة (ثم التخزين المؤقت). WAV/MP3 للصوت فقط تذهب إلى إنشاء ترجمات SRT من ملف صوت. بلا حرق؛ الأوقات من مقاطع Whisper.',
  tool_make_srt_subtitles_from_a_video_file_article:
    'من يبحث عن «فيديو إلى srt» أو «إنشاء srt من فيديو» يريد ملف ترجمة موقوتًا قابلاً للتنزيل من لقطات محلية—لا صفحة مذكرات صوتية. تشغّل هذه الأداة Whisper tiny على الجهاز من سكربتات نفس المصدر /vendor/whisper: تفكّ شفرة مسار صوت الفيديو في التبويب، تعرض معاينة فيديو لمطابقة الحوار مع الصورة، تحصل على طوابع المقاطع، تصيغ SRT قياسيًا قابلاً للتحرير ثم تنزّل. تُرفض ملفات الصوت فقط مع رابط واضح إلى إنشاء ترجمات SRT من ملف صوت. لا مسار ميكروفون هنا. التشغيل الأول يحمّل نحو 45 ميغابايت مرة ويخزّنها. أوقات الإشارات حدود مقاطع Whisper وليست محاذاة إجبارية لكل إطار، والصفحة لا تحرق الترجمات في الفيديو.',
  tool_make_srt_subtitles_from_a_video_file_choose: 'اختر ملف فيديو',
  tool_make_srt_subtitles_from_a_video_file_hint:
    'MP4 أو WebM أو MOV محلي أو فيديو آخر يستطيع المتصفح فكّه—حتى نحو 120 ميبيبايت ونحو ساعتين بعد الفك. يجب أن يتضمن مسار صوت صالحًا. المقاطع الطويلة تستخدم نوافذ منزلقة (النافذة n من N؛ إيقاف يحتفظ بـ SRT جزئي إن أمكن). الصوت الخالص يخص أداة SRT الصوت المرتبطة.',
  tool_make_srt_subtitles_from_a_video_file_lang_label: 'لغة الكلام',
  tool_make_srt_subtitles_from_a_video_file_lang_hint:
    'تلقائي يترك Whisper يكتشف اللغة المنطوقة على المسار. اختر لغة عند معرفتها لإشارات أكثر ثباتًا.',
  tool_make_srt_subtitles_from_a_video_file_lang_auto: 'اكتشاف تلقائي',
  tool_make_srt_subtitles_from_a_video_file_lang_en: 'الإنجليزية',
  tool_make_srt_subtitles_from_a_video_file_lang_zh: 'الصينية',
  tool_make_srt_subtitles_from_a_video_file_lang_es: 'الإسبانية',
  tool_make_srt_subtitles_from_a_video_file_lang_ja: 'اليابانية',
  tool_make_srt_subtitles_from_a_video_file_lang_de: 'الألمانية',
  tool_make_srt_subtitles_from_a_video_file_lang_fr: 'الفرنسية',
  tool_make_srt_subtitles_from_a_video_file_lang_pt: 'البرتغالية',
  tool_make_srt_subtitles_from_a_video_file_lang_id: 'الإندونيسية',
  tool_make_srt_subtitles_from_a_video_file_lang_ar: 'العربية',
  tool_make_srt_subtitles_from_a_video_file_lang_ru: 'الروسية',
  tool_make_srt_subtitles_from_a_video_file_convert: 'إنشاء SRT',
  tool_make_srt_subtitles_from_a_video_file_stop: 'إيقاف',
  tool_make_srt_subtitles_from_a_video_file_download: 'تنزيل SRT',
  tool_make_srt_subtitles_from_a_video_file_sample: 'عيّنة',
  tool_make_srt_subtitles_from_a_video_file_clear: 'مسح',
  tool_make_srt_subtitles_from_a_video_file_source_play: 'تشغيل الفيديو الأصلي',
  tool_make_srt_subtitles_from_a_video_file_advanced: 'حدود صادقة',
  tool_make_srt_subtitles_from_a_video_file_settings_hint:
    'يعمل Whisper tiny في هذا التبويب من /vendor/whisper بنفس المصدر. أول إنشاء SRT يحمّل نحو 45 ميغابايت مرة ثم يعيد استخدام التخزين المؤقت. المقاطع الطويلة تستخدم نوافذ (~دقيقتان). أوقات الإشارات تتبع مقاطع Whisper—وليست محاذاة إجبارية لكل إطار. تقبل الصفحة الفيديو فقط ولا تحرق الترجمات. لمذكرات صوت بلا صورة استخدم أداة SRT الصوت المرتبطة.',
  tool_make_srt_subtitles_from_a_video_file_progress: 'تقدّم الترجمة',
  tool_make_srt_subtitles_from_a_video_file_hud_title: 'تقدّم الترجمة',
  tool_make_srt_subtitles_from_a_video_file_hud_pct: '{pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_next: 'انتهى. الخطوة التالية: عدّل الإشارات إن لزم، ثم تنزيل SRT.',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_title: 'تعذّر إكمال SRT',
  tool_make_srt_subtitles_from_a_video_file_hud_fail_hint:
    'جرّب فيديوًا آخر أو مقطعًا أقصر أو عيّنة. تبقى الملفات على جهازك.',
  tool_make_srt_subtitles_from_a_video_file_hud_model_progress: 'جارٍ تنزيل {file} — {pct}%',
  tool_make_srt_subtitles_from_a_video_file_hud_working: 'جارٍ البدء…',
  tool_make_srt_subtitles_from_a_video_file_model: 'النموذج',
  tool_make_srt_subtitles_from_a_video_file_decode: 'فكّ الشفرة',
  tool_make_srt_subtitles_from_a_video_file_transcribe: 'التفريغ',
  tool_make_srt_subtitles_from_a_video_file_write: 'كتابة SRT',
  tool_make_srt_subtitles_from_a_video_file_done: 'جاهز. عدّل SRT إن لزم، ثم تنزيل SRT.',
  tool_make_srt_subtitles_from_a_video_file_failed:
    'تعذّر إنشاء SRT. جرّب عيّنة أو فيديو منطوقًا أوضح أو مقطعًا أقصر دون نحو ساعتين.',
  tool_make_srt_subtitles_from_a_video_file_elapsed: 'مرّ {s} ث',
  tool_make_srt_subtitles_from_a_video_file_preview: 'معاينة SRT',
  tool_make_srt_subtitles_from_a_video_file_result: '{cues} إشارة · {chars} حرفًا',
  tool_make_srt_subtitles_from_a_video_file_sample_name: 'make-srt-subtitles-from-a-video-file',
  tool_make_srt_subtitles_from_a_video_file_empty: 'اختر ملف فيديو محليًا فيه كلام على مسار الصوت.',
  tool_make_srt_subtitles_from_a_video_file_empty_state:
    'لا SRT بعد. أسقط فيديوًا بحوار وانقر إنشاء SRT. عيّنة تمرّر MP4 قصيرًا منطوقًا عبر Whisper على الجهاز. شغّل المعاينة لمطابقة الصورة مع الإشارات. تبقى الملفات على جهازك.',
  tool_make_srt_subtitles_from_a_video_file_file_label: 'فيديو: {name}',
  tool_make_srt_subtitles_from_a_video_file_status_model: 'جارٍ تحميل نموذج Whisper على الجهاز (التشغيل الأول قد يحمّل ~45 ميغابايت)…',
  tool_make_srt_subtitles_from_a_video_file_status_decode: 'جارٍ فكّ مسار صوت الفيديو في هذا التبويب…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe: 'جارٍ التفريغ بـ Whisper…',
  tool_make_srt_subtitles_from_a_video_file_status_transcribe_window: 'جارٍ تفريغ النافذة {n} من {total}…',
  tool_make_srt_subtitles_from_a_video_file_status_write: 'جارٍ كتابة إشارات SRT موقوتة…',
  tool_make_srt_subtitles_from_a_video_file_status_stopped: 'توقف. احتُفظ بـ SRT جزئي عندما كانت الإشارات متاحة.',
  tool_make_srt_subtitles_from_a_video_file_err_file: 'اختر ملف فيديو محليًا واحدًا، أو استخدم عيّنة.',
  tool_make_srt_subtitles_from_a_video_file_err_format:
    'نوع غير مدعوم. استخدم حاوية فيديو شائعة يستطيع المتصفح فكّها (مثل MP4 أو WebM) مع مسار صوت.',
  tool_make_srt_subtitles_from_a_video_file_err_limit:
    'استخدم فيديوًا حتى نحو 120 ميبيبايت ونحو ساعتين بعد الفك. المقاطع الطويلة جدًا على هواتف ضعيفة الذاكرة قد تفشل—قصّ أو اضغط أولًا.',
  tool_make_srt_subtitles_from_a_video_file_err_decode:
    'تعذّر على المتصفح فكّ مسار صوت صالح من هذا الفيديو. الفيديو الصامت أو بلا صوت أو الترميز غير المدعوم يفشل هنا.',
  tool_make_srt_subtitles_from_a_video_file_err_unsupported: 'Web Audio اللازم لهذا المسار غير متاح في هذا المتصفح.',
  tool_make_srt_subtitles_from_a_video_file_err_empty_srt: 'لم يُنتج Whisper نص كلام صالحًا. جرّب مقطعًا أو إعداد لغة آخر.',
  tool_make_srt_subtitles_from_a_video_file_err_model:
    'تعذّر تحميل نموذج Whisper على الجهاز من هذا الموقع. ابقَ متصلًا للتنزيل الأول ثم أعد المحاولة.',
  tool_make_srt_subtitles_from_a_video_file_err_audio_only:
    'تقبل هذه الصفحة ملفات فيديو فقط. لـ WAV أو MP3 أو كلام صوت فقط، استخدم إنشاء ترجمات SRT من ملف صوت.',
  tool_make_srt_subtitles_from_a_video_file_how_title: 'كيفية إنشاء ترجمات SRT من ملف فيديو',
  tool_make_srt_subtitles_from_a_video_file_how_body:
    'اختر فيديوًا محليًا فيه كلام، عاين المقطع، شغّل Whisper على الجهاز لإشارات موقوتة، عدّل SRT ثم نزّل.',
  tool_make_srt_subtitles_from_a_video_file_how_item_1:
    'اختر ملف فيديو محليًا (أو عيّنة)، واختر اكتشاف تلقائي أو لغة كلام.',
  tool_make_srt_subtitles_from_a_video_file_how_item_2:
    'شغّل الفيديو الأصلي إن أردت مطابقة الحوار مع الصورة، ثم انقر إنشاء SRT.',
  tool_make_srt_subtitles_from_a_video_file_how_item_3:
    'راقب بطاقة التقدّم: النموذج، فكّ الشفرة، التفريغ (النافذة n من N للملفات الطويلة)، ثم كتابة SRT. إيقاف يلغي ويحتفظ بـ SRT جزئي إن أمكن.',
  tool_make_srt_subtitles_from_a_video_file_how_item_4: 'عدّل معاينة SRT إن لزم، ثم تنزيل SRT.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_title: 'لماذا تستخدم إنشاء ترجمات SRT من ملف فيديو هنا',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_1:
    'أولوية الفيديو: عاين المقطع في الصفحة ثم أنشئ .srt من المسار باستخدام Whisper على الجهاز—لا تُرفع اللقطات إلى خوادمنا للتعرّف.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_2:
    'فصل واضح عن أداة SRT الصوت: ترفض هذه الصفحة الصوت الخالص ولا مسار ميكروفون، فلا يسقط باحثو فيديو إلى srt في واجهة مذكرات صوتية.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_3:
    'تكلفة التشغيل الأول صريحة (~45 ميغابايت مرة) وواجهة تقدّم بنوافذ منزلقة على اللقطات الطويلة.',
  tool_make_srt_subtitles_from_a_video_file_why_choose_item_4:
    'ملف .srt جانبي قابل للتحرير فقط—بلا حرق في الفيديو. الأدوات المرتبطة تغطي SRT صوت فقط وفيديو الموجة.',
  tool_make_srt_subtitles_from_a_video_file_rules_title: 'قواعد SRT وحدود Whisper مع الفيديو',
  tool_make_srt_subtitles_from_a_video_file_rules_body:
    'يعمل Whisper tiny في المتصفح من أصول نفس المصدر. يجب أن يفكّ المتصفح مسار صوت صالحًا من فيديوك. سقوف الحجم والمدة تبقي التبويب قابلاً للاستخدام.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_1:
    'حاويات فيديو فقط (مثل MP4 وWebM وMOV). ملفات الصوت فقط يجب أن تستخدم صفحة SRT الصوت المرتبطة.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_2:
    'نحو 120 ميبيبايت ونحو ساعتين بعد الفك، يُفرَّغ في نوافذ منزلقة. الملفات الأطول أو الأكبر تعرض خطأ حد واضح.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_3:
    'الطوابع الزمنية حدود مقاطع Whisper—مفيدة للمشغّلات وليست محاذاة إجبارية لكل إطار مع قطع الصورة.',
  tool_make_srt_subtitles_from_a_video_file_rules_item_4:
    'يبقى فيديوك على الجهاز لـ Whisper. لا تحرق هذه الصفحة الترجمات في الملف ولا تنزّل ترجمات من منصات الفيديو.',
  tool_make_srt_subtitles_from_a_video_file_example_title: 'جرّب مقطع الفيديو العيّنة',
  tool_make_srt_subtitles_from_a_video_file_example:
    'عيّنة تجلب MP4 قصيرًا منطوقًا، وتشغّل إنشاء SRT عبر Whisper على الجهاز، وتملأ معاينة SRT. لا تشغّل الصفحة العيّنة عند الفتح حتى لا يصيب تنزيل النموذج الأول ~45 ميغابايت كل زائر.',
  tool_make_srt_subtitles_from_a_video_file_usecases_title: 'متى يفيد هذا',
  tool_make_srt_subtitles_from_a_video_file_usecase_1:
    'لديك مقابلة أو حديث أمام الكاميرا أو تسجيل شاشة MP4 محلي وتحتاج .srt قابلاً للتنزيل لمشغّل أو محرّر.',
  tool_make_srt_subtitles_from_a_video_file_usecase_2:
    'تريد ترجمة ملف فيديو دون رفع اللقطات إلى موقع ASR سحابي، وتحتاج معاينة الصورة أثناء مراجعة الإشارات.',
  tool_make_srt_subtitles_from_a_video_file_usecase_3:
    'صدّرت بالفعل MP4/WebM من كاميرا أو محرّر وتحتاج SRT ابتدائيًا للمراجعة قبل النشر.',
  tool_make_srt_subtitles_from_a_video_file_faq_q1: 'ما دقة طوابع زمن SRT؟',
  tool_make_srt_subtitles_from_a_video_file_faq_a1:
    'تتبع بداية ونهاية مقاطع Whisper على المسار—كافية لمعظم المشغّلات، وليست مزامنة إطار بإطار مع كل قطع صورة.',
  tool_make_srt_subtitles_from_a_video_file_faq_q2: 'هل هذا Whisper على الجهاز أم رفع إلى السحابة؟',
  tool_make_srt_subtitles_from_a_video_file_faq_a2:
    'إنشاء SRT يشغّل Whisper tiny على الجهاز من ملفات vendor بنفس المصدر. يبقى فيديوك على الجهاز ولا يُرفع إلى خوادمنا للتعرّف.',
  tool_make_srt_subtitles_from_a_video_file_faq_q3: 'لماذا أول إنشاء SRT بطيء أو كبير؟',
  tool_make_srt_subtitles_from_a_video_file_faq_a3:
    'التشغيل الأول يحمّل نحو 45 ميغابايت من نموذج Whisper tiny وWASM من هذا الموقع إلى تخزين المتصفح المؤقت. التشغيلات اللاحقة تعيد الاستخدام. الفيديوهات الطويلة تعرض التفريغ كنافذة n من N؛ إيقاف قد يلغي ويحتفظ بـ SRT جزئي.',
  tool_make_srt_subtitles_from_a_video_file_faq_q4: 'ما الفرق عن إنشاء ترجمات SRT من ملف صوت؟',
  tool_make_srt_subtitles_from_a_video_file_faq_a4:
    'تلك الأداة المرتبطة لمذكرات الصوت وملفات صوت أولًا (وإملاء ميكروفون اختياري). هذه الصفحة لملفات الفيديو: معاينة فيديو، قبول فيديو فقط، وصياغة فيديو إلى srt. محرّك Whisper على الجهاز نفسه في الأسفل.',
  tool_make_srt_subtitles_from_a_video_file_faq_q5: 'هل يمكن استخدام WAV أو MP3 هنا؟',
  tool_make_srt_subtitles_from_a_video_file_faq_a5:
    'لا. يُرفض الصوت الخالص حتى لا يختلط باحثو فيديو إلى srt بواجهة صوت. افتح إنشاء ترجمات SRT من ملف صوت لـ WAV/MP3/M4A.',
  tool_make_srt_subtitles_from_a_video_file_faq_q6: 'هل يمكن حرق الترجمات في الفيديو أو جلبها من YouTube؟',
  tool_make_srt_subtitles_from_a_video_file_faq_a6:
    'لا. تنزّل فقط .srt جانبيًا. ولا تجلب ترجمات تلقائية من YouTube أو منصات أخرى.',
};
export default ar;
