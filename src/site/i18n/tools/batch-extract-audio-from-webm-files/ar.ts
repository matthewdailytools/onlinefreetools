import type { SiteLangDict } from '../../../types';

/**
 * العربية: استخراج الصوت من ملفات WebM دفعةً واحدة.
 * قائمة انتظار ‎.webm‎ فقط؛ استخراج متسلسل؛ ZIP جزئي يحتفظ بالنجاحات؛
 * سقف احتياطي ~500 ميبيبايت / 4 ساعات لكل ملف؛ حتى 30 ملفًا؛ بلا YouTube.
 */
const ar: SiteLangDict = {
  tool_batch_extract_audio_from_webm_files_title: 'استخراج الصوت من ملفات WebM دفعةً واحدة',
  tool_batch_extract_audio_from_webm_files_desc:
    'استخرج صوت WebM المحلي ملفًا تلو الآخر إلى ZIP بصيغة WAV/MP3. مسار احتياطي حوالي 500 ميبيبايت لكل ملف—ZIP الجزئي يحتفظ بالنجاحات.',
  tool_batch_extract_audio_from_webm_files_description:
    'ضع ملفات WebM المحلية في قائمة الانتظار، واستخرج بالتسلسل عبر المسار الاحتياطي للمحرك المشترك (حوالي 500 ميبيبايت / 4 ساعات لكل ملف)، وتجاوز الإخفاقات برموز واضحة، ونزّل ZIP. الخطوات: أضف WebM ← استخراج ← تنزيل ZIP. مثال: تحميل عيّنة يبني مقطعين قصيرين عندما يعمل MediaRecorder. ليس YouTube. لملف واحد استخدم استخراج الصوت من ملف WebM.',
  tool_batch_extract_audio_from_webm_files_article:
    'مجلدات لقطات WebM تحتاج حزم ZIP صوت فقط. هذه الصفحة تضع ‎.webm‎ فقط في الانتظار، وتستخرج واحدًا تلو الآخر، وتتجاوز الأكبر من اللازم بـ err_container، وتغلف النجاحات. بلا YouTube. بلا ادّعاء demux بمقدار 5 جيبيبايت.',
  tool_batch_extract_audio_from_webm_files_choose: 'اختر ملفات WebM',
  tool_batch_extract_audio_from_webm_files_hint:
    'حتى 30 ملف ‎.webm‎ محلي. مسار احتياطي لكل ملف حوالي 500 ميبيبايت / 4 ساعات. الإخفاقات تُتخطى؛ ZIP يحتفظ بالنجاحات.',
  tool_batch_extract_audio_from_webm_files_list_label: 'قائمة انتظار الملفات',
  tool_batch_extract_audio_from_webm_files_convert: 'استخراج',
  tool_batch_extract_audio_from_webm_files_stop: 'إيقاف',
  tool_batch_extract_audio_from_webm_files_download: 'تنزيل ZIP',
  tool_batch_extract_audio_from_webm_files_sample: 'تحميل عيّنة',
  tool_batch_extract_audio_from_webm_files_clear: 'مسح',
  tool_batch_extract_audio_from_webm_files_advanced: 'صيغة التصدير (اختياري)',
  tool_batch_extract_audio_from_webm_files_format_label: 'صيغة الإخراج',
  tool_batch_extract_audio_from_webm_files_format_wav: 'WAV (16 بت)',
  tool_batch_extract_audio_from_webm_files_format_mp3: 'MP3',
  tool_batch_extract_audio_from_webm_files_bitrate: 'معدل بتات MP3',
  tool_batch_extract_audio_from_webm_files_settings_hint:
    'WAV افتراضيًا للمقاطع القصيرة. السقوف تتبع المسار الاحتياطي. بلا جلب رابط.',
  tool_batch_extract_audio_from_webm_files_progress: 'تقدّم الاستخراج بالدفعة',
  tool_batch_extract_audio_from_webm_files_read: 'قراءة',
  tool_batch_extract_audio_from_webm_files_decode: 'فك الترميز',
  tool_batch_extract_audio_from_webm_files_extract: 'استخراج',
  tool_batch_extract_audio_from_webm_files_write: 'كتابة',
  tool_batch_extract_audio_from_webm_files_pack: 'تعبئة ZIP',
  tool_batch_extract_audio_from_webm_files_done: 'جاهز. نزّل ZIP لملفات الصوت المستخرجة.',
  tool_batch_extract_audio_from_webm_files_failed:
    'فشل الاستخراج بالدفعة. أزل الملفات التالفة أو جرّب عددًا أقل.',
  tool_batch_extract_audio_from_webm_files_elapsed: 'مرّ {s} ث',
  tool_batch_extract_audio_from_webm_files_preview: 'نتيجة الدفعة',
  tool_batch_extract_audio_from_webm_files_result: 'عُبئ {n} ملف صوت · ZIP {output} كيبيبايت',
  tool_batch_extract_audio_from_webm_files_partial:
    'نجاح {ok}، فشل {fail} · ZIP ما زال يتضمن النجاحات ({output} كيبيبايت)',
  tool_batch_extract_audio_from_webm_files_sample_name: 'batch-webm-audio-demo',
  tool_batch_extract_audio_from_webm_files_empty: 'أضف ملف WebM واحدًا على الأقل أو حمّل العيّنة أولًا.',
  tool_batch_extract_audio_from_webm_files_empty_state:
    'لا ملفات بعد. أسقط ملفات ‎.webm‎ محلية. ليس YouTube.',
  tool_batch_extract_audio_from_webm_files_remove: 'إزالة',
  tool_batch_extract_audio_from_webm_files_queue_count: '{n} ملف/ملفات في الانتظار',
  tool_batch_extract_audio_from_webm_files_status_pending: 'قيد الانتظار',
  tool_batch_extract_audio_from_webm_files_status_running: 'جارٍ الاستخراج…',
  tool_batch_extract_audio_from_webm_files_status_ok: 'تم',
  tool_batch_extract_audio_from_webm_files_status_fail: 'فشل',
  tool_batch_extract_audio_from_webm_files_status_stopped: 'توقف',
  tool_batch_extract_audio_from_webm_files_err_file: 'أضف ملفات WebM يمكن للمتصفح فك ترميزها.',
  tool_batch_extract_audio_from_webm_files_err_format:
    'ملف غير مدعوم. استخدم ‎.webm‎ فقط في هذه الصفحة.',
  tool_batch_extract_audio_from_webm_files_err_limit:
    'تجاوز ملف حد الحجم/المدة في المسار الاحتياطي.',
  tool_batch_extract_audio_from_webm_files_err_container:
    'يتجاوز ملف سقف المسار الاحتياطي ~500 ميبيبايت / 4 ساعات—أو ليس WebM صالحًا. تُتخطى الصف.',
  tool_batch_extract_audio_from_webm_files_err_codec:
    'يستخدم ملف ترميز صوت غير مدعوم. تُتخطى الصف.',
  tool_batch_extract_audio_from_webm_files_err_channels:
    'يستخدم ملف تخطيط قنوات غير مدعوم. تُتخطى الصف.',
  tool_batch_extract_audio_from_webm_files_err_decode: 'تعذّر على المتصفح فك ترميز الصوت من ملف.',
  tool_batch_extract_audio_from_webm_files_err_encoder: 'تعذّر كتابة ملف صوت.',
  tool_batch_extract_audio_from_webm_files_err_zip: 'تعذّر بناء ZIP.',
  tool_batch_extract_audio_from_webm_files_err_too_many: 'حد قائمة الانتظار 30 ملفًا.',
  tool_batch_extract_audio_from_webm_files_err_sample: 'تعذّر بناء العيّنات. أسقط ملفاتك.',
  tool_batch_extract_audio_from_webm_files_err_unsupported: 'هذا المتصفح يفتقر إلى Web Audio.',
  tool_batch_extract_audio_from_webm_files_err_empty: 'لا عيّنات صوت صالحة.',
  tool_batch_extract_audio_from_webm_files_forced_mp3: 'ملف طويل/كبير استخدم بث MP3.',
  tool_batch_extract_audio_from_webm_files_how_title: 'كيف تستخرج الصوت من ملفات WebM دفعةً واحدة',
  tool_batch_extract_audio_from_webm_files_how_body:
    'ضع WebM محليًا في الانتظار، استخرج واحدًا تلو الآخر، نزّل ZIP.',
  tool_batch_extract_audio_from_webm_files_how_item_1: 'اختر عدة ملفات ‎.webm‎ أو تحميل عيّنة.',
  tool_batch_extract_audio_from_webm_files_how_item_2: 'اختياريًا عيّن MP3 بدل WAV.',
  tool_batch_extract_audio_from_webm_files_how_item_3:
    'انقر استخراج؛ استخدم إيقاف لإلغاء الصفوف المتبقية.',
  tool_batch_extract_audio_from_webm_files_how_item_4: 'نزّل ZIP. تُتخطى صفوف الفشل.',
  tool_batch_extract_audio_from_webm_files_why_choose_title:
    'لماذا تستخدم استخراج الصوت من ملفات WebM دفعةً واحدة',
  tool_batch_extract_audio_from_webm_files_why_choose_item_1:
    'الاستخراج المتسلسل يبقي الذاكرة مستقرة.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_2:
    'حالة لكل صف؛ إخفاق واحد لا يمسح ZIP.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_3: 'سقوف احتياطية صادقة لـ WebM.',
  tool_batch_extract_audio_from_webm_files_why_choose_item_4:
    'معالجة على الجهاز؛ المركز قريب للصيغ المختلطة.',
  tool_batch_extract_audio_from_webm_files_rules_title: 'استخراج WebM متسلسل وصدق ZIP',
  tool_batch_extract_audio_from_webm_files_rules_body:
    'يُصنَّف كل WebM ثم يُستخرج وحده. ZIP الجزئي يحتفظ بالنجاحات.',
  tool_batch_extract_audio_from_webm_files_rules_item_1:
    'حتى 30 ملفًا؛ كل منها حوالي 500 ميبيبايت / 4 ساعات احتياطي.',
  tool_batch_extract_audio_from_webm_files_rules_item_2: 'بلا رابط أو تنزيل YouTube.',
  tool_batch_extract_audio_from_webm_files_rules_item_3:
    'تُتخطى الإخفاقات بـ err_container / err_codec عند الاقتضاء.',
  tool_batch_extract_audio_from_webm_files_rules_item_4: 'الملفات تبقى على جهازك.',
  tool_batch_extract_audio_from_webm_files_example_title: 'جرّب دفعة حقيقية',
  tool_batch_extract_audio_from_webm_files_example:
    'تحميل عيّنة يبني مقطعين قصيرين إن أمكن ثم يعبئ ZIP.',
  tool_batch_extract_audio_from_webm_files_usecases_title: 'متى يفيد ذلك',
  tool_batch_extract_audio_from_webm_files_usecase_1:
    'مجلد لقطات WebM يحتاج مسارات صوت في ZIP واحد.',
  tool_batch_extract_audio_from_webm_files_usecase_2: 'استخراج جماعي دون رفع كل ملف.',
  tool_batch_extract_audio_from_webm_files_usecase_3:
    'خلط مع ملفات أكبر من اللازم—ZIP الجزئي ما زال مفيدًا.',
  tool_batch_extract_audio_from_webm_files_faq_q1: 'قائمة تشغيل YouTube؟',
  tool_batch_extract_audio_from_webm_files_faq_a1: 'لا. ‎.webm‎ محلي فقط.',
  tool_batch_extract_audio_from_webm_files_faq_q2: 'ملف واحد فقط؟',
  tool_batch_extract_audio_from_webm_files_faq_a2: 'استخدم صفحة استخراج WebM المفرد.',
  tool_batch_extract_audio_from_webm_files_faq_q3: 'لماذا 500 ميبيبايت وليس 5 جيبيبايت؟',
  tool_batch_extract_audio_from_webm_files_faq_a3:
    'لا demux لـ WebM بعد؛ تُطبَّق سقوف المسار الاحتياطي. MP4/MOV لديهما demux كبير.',
  tool_batch_extract_audio_from_webm_files_faq_q4: 'يُرفع؟',
  tool_batch_extract_audio_from_webm_files_faq_a4: 'لا. المتصفح فقط.',
  tool_batch_extract_audio_from_webm_files_faq_q5: 'ملف ضخم واحد يفشل؟',
  tool_batch_extract_audio_from_webm_files_faq_a5:
    'تفشل تلك الصف بـ err_container؛ الباقي يُعبَّأ رغم ذلك.',
  tool_batch_extract_audio_from_webm_files_faq_q6: 'قص بعد ذلك؟',
  tool_batch_extract_audio_from_webm_files_faq_a6:
    'نزّل ZIP ثم استخدم أداة القص لكل ملف.',
};
export default ar;
