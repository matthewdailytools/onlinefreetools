import type { SiteLangDict } from '../../../types';

/**
 * العربية: عدة ملفات MOV محلية → أرشيف ZIP صوتي (‎.mov فقط، بالتسلسل، بلا YouTube).
 * اتجاه البحث: «استخراج صوت من mov دفعة»، «عدة mov إلى mp3».
 */
const ar: SiteLangDict = {
	tool_batch_extract_audio_from_mov_files_title: 'استخراج الصوت من عدة ملفات MOV دفعة واحدة',
	tool_batch_extract_audio_from_mov_files_desc:
		'قائمة انتظار MOV محلية فقط: ملفًا تلو الآخر، تخطّي الإخفاقات، ZIP بصيغة WAV/MP3. بلا رفع إلى الخادم.',
	tool_batch_extract_audio_from_mov_files_description:
		'يستخرج الصوت من عدة ملفات MOV محلية بالتسلسل في المتصفح ويحفظ أرشيف ZIP بصيغة WAV أو MP3. الخطوات: أضف ملفات ‎.mov ← استخراج ← تنزيل ZIP. مثال: «تحميل مثال» ينشئ ملفي MOV اصطناعيين قصيرين ويحزم الصوت. لكل ملف نفس حدود demux+OPFS لأداة MOV المفردة (مع OPFS نحو 5 جيغابايت / 6 ساعات، وبدونها نحو 1 جيغابايت). تُتخطى الصفوف الفاشلة ويُحزم الناجح. على الجهاز — بلا رفع. بلا YouTube. ملف واحد ← «استخراج الصوت من ملف MOV». MP4/WebM/MKV مختلطة ← «استخراج الصوت من ملفات فيديو (دفعة)».',
	tool_batch_extract_audio_from_mov_files_article:
		'مجلدات MOV من الهاتف غالبًا تحتاج مسار AAC فقط. هذه الصفحة تضيف ‎.mov فقط، ترفض الامتدادات الأخرى، تستخرج بالتسلسل لاستقرار الذاكرة، وتضع النجاحات في ZIP. ليست أداة تنزيل YouTube ولا محور حاويات مختلطة.',
	tool_batch_extract_audio_from_mov_files_choose: 'اختر ملفات MOV',
	tool_batch_extract_audio_from_mov_files_hint:
		'حتى 30 ملف ‎.mov محلي. تُرفض الصيغ الأخرى — راجع الدفعة المختلطة. حد الملف = أداة MOV المفردة.',
	tool_batch_extract_audio_from_mov_files_list_label: 'قائمة انتظار MOV',
	tool_batch_extract_audio_from_mov_files_convert: 'استخراج',
	tool_batch_extract_audio_from_mov_files_stop: 'إيقاف',
	tool_batch_extract_audio_from_mov_files_download: 'تنزيل ZIP',
	tool_batch_extract_audio_from_mov_files_sample: 'تحميل مثال',
	tool_batch_extract_audio_from_mov_files_clear: 'مسح',
	tool_batch_extract_audio_from_mov_files_advanced: 'صيغة التصدير (اختياري)',
	tool_batch_extract_audio_from_mov_files_format_label: 'صيغة الإخراج',
	tool_batch_extract_audio_from_mov_files_format_wav: 'WAV (16 بت)',
	tool_batch_extract_audio_from_mov_files_format_mp3: 'MP3',
	tool_batch_extract_audio_from_mov_files_bitrate: 'معدل بت MP3',
	tool_batch_extract_audio_from_mov_files_settings_hint:
		'ملفات MOV قصيرة: WAV افتراضيًا. الملفات الكبيرة قد تفرض MP3 متدفقًا لكل صف. بلا URL/YouTube.',
	tool_batch_extract_audio_from_mov_files_progress: 'تقدّم استخراج MOV الدفعي',
	tool_batch_extract_audio_from_mov_files_read: 'قراءة',
	tool_batch_extract_audio_from_mov_files_decode: 'Demux',
	tool_batch_extract_audio_from_mov_files_extract: 'استخراج',
	tool_batch_extract_audio_from_mov_files_write: 'كتابة',
	tool_batch_extract_audio_from_mov_files_pack: 'تعبئة ZIP',
	tool_batch_extract_audio_from_mov_files_done: 'تم. نزّل ZIP بالصوت المستخرج.',
	tool_batch_extract_audio_from_mov_files_failed: 'فشل الدفعة. أزل ملفات MOV التالفة أو قلّل العدد.',
	tool_batch_extract_audio_from_mov_files_elapsed: 'مرّ {s} ث',
	tool_batch_extract_audio_from_mov_files_preview: 'نتيجة الدفعة',
	tool_batch_extract_audio_from_mov_files_result: '{n} ملفات صوت معبأة · ZIP {output} كيبيبايت',
	tool_batch_extract_audio_from_mov_files_partial: '{ok} ناجح، {fail} فاشل · ZIP للنجاح فقط ({output} كيبيبايت)',
	tool_batch_extract_audio_from_mov_files_sample_name: 'batch-mov-audio-demo',
	tool_batch_extract_audio_from_mov_files_empty: 'أضف MOV واحدًا على الأقل أو حمّل مثالًا.',
	tool_batch_extract_audio_from_mov_files_empty_state:
		'لا توجد ملفات MOV بعد. أسقط ‎.mov محلية أو حمّل مثالًا. بلا YouTube وبلا غير MOV.',
	tool_batch_extract_audio_from_mov_files_remove: 'إزالة',
	tool_batch_extract_audio_from_mov_files_queue_count: '{n} ملفات MOV في الانتظار',
	tool_batch_extract_audio_from_mov_files_status_pending: 'قيد الانتظار',
	tool_batch_extract_audio_from_mov_files_status_running: 'جارٍ الاستخراج…',
	tool_batch_extract_audio_from_mov_files_status_ok: 'تم',
	tool_batch_extract_audio_from_mov_files_status_fail: 'فشل',
	tool_batch_extract_audio_from_mov_files_status_stopped: 'متوقف',
	tool_batch_extract_audio_from_mov_files_err_file: 'أضف ملفات ‎.mov فقط.',
	tool_batch_extract_audio_from_mov_files_err_format:
		'‎.mov فقط. لـ MP4 أو WebM أو MKV: دفعة فيديو مختلطة.',
	tool_batch_extract_audio_from_mov_files_err_limit:
		'ملف MOV يتجاوز حد demux (مع OPFS نحو 5 جيغابايت / 6 ساعات، وبدونها نحو 1 جيغابايت). تُتخطى الصف.',
	tool_batch_extract_audio_from_mov_files_err_container:
		'ملف MOV بصيغة ISOBMFF غير قابل للـ demux. تُتخطى الصف.',
	tool_batch_extract_audio_from_mov_files_err_codec:
		'ملف MOV بترميز صوت لا يفكّه هذا المسار. تُتخطى الصف.',
	tool_batch_extract_audio_from_mov_files_err_channels:
		'ملف MOV بتخطيط قنوات غير مدعوم. تُتخطى الصف.',
	tool_batch_extract_audio_from_mov_files_err_decode: 'تعذّر على المتصفح فك ترميز صوت الـ MOV. تُتخطى الصف.',
	tool_batch_extract_audio_from_mov_files_err_encoder: 'فشل تصدير الصوت. تحقق من الصيغة واستخرج مجددًا.',
	tool_batch_extract_audio_from_mov_files_err_zip: 'تعذّر إنشاء ZIP. قلّل عدد ملفات MOV.',
	tool_batch_extract_audio_from_mov_files_err_too_many: 'الحد الأقصى 30 ملف MOV في الانتظار.',
	tool_batch_extract_audio_from_mov_files_err_sample:
		'لا يمكن إنشاء MOV تجريبي في هذا المتصفح. أسقط ملفات ‎.mov الخاصة بك.',
	tool_batch_extract_audio_from_mov_files_err_unsupported: 'Web Audio المطلوب للاستخراج غير متوفر.',
	tool_batch_extract_audio_from_mov_files_err_empty: 'لا يوجد صوت صالح في قائمة انتظار MOV.',
	tool_batch_extract_audio_from_mov_files_forced_mp3: 'ملف MOV طويل/كبير في هذا الصف فرض MP3 متدفقًا.',
	tool_batch_extract_audio_from_mov_files_how_title: 'كيفية استخراج الصوت من عدة ملفات MOV',
	tool_batch_extract_audio_from_mov_files_how_body:
		'ضع ملفات MOV محلية في الانتظار، استخرج ملفًا تلو الآخر، نزّل ZIP — بلا رفع وبلا لصق رابط.',
	tool_batch_extract_audio_from_mov_files_how_item_1:
		'اختر عدة ملفات ‎.mov محلية أو «تحميل مثال» لملفي MOV اصطناعيين قصيرين.',
	tool_batch_extract_audio_from_mov_files_how_item_2: 'إن احتجت MP3، افتح «صيغة التصدير» واضبط معدل البت.',
	tool_batch_extract_audio_from_mov_files_how_item_3:
		'انقر «استخراج»: قراءة ← Demux ← استخراج ← كتابة لكل ملف. «إيقاف» يلغي الباقي.',
	tool_batch_extract_audio_from_mov_files_how_item_4:
		'بعد اكتمال لوحة التقدّم: «تنزيل ZIP». تُتخطى الإخفاقات؛ ≥1 نجاح → تعبئة.',
	tool_batch_extract_audio_from_mov_files_why_choose_title: 'لماذا هذه الدفعة لـ MOV؟',
	tool_batch_extract_audio_from_mov_files_why_choose_item_1:
		'MOV فقط — بلا خلط صامت لـ MP4/WebM/MKV في مجلد «عدة mov إلى mp3».',
	tool_batch_extract_audio_from_mov_files_why_choose_item_2:
		'الاستخراج المتسلسل يُبقي الذاكرة مستقرة لملفات MOV هاتفية بمقاس جيغابايت (AAC داخل ISOBMFF).',
	tool_batch_extract_audio_from_mov_files_why_choose_item_3:
		'حالة لكل صف: انتظار/استخراج/تم/فشل — ملف MOV تالف واحد لا يفسد ZIP بالكامل.',
	tool_batch_extract_audio_from_mov_files_why_choose_item_4:
		'«إيقاف» يقطع الباقي. يبقى تنزيل ZIP معطّلًا حتى يوجد أرشيف حقيقي.',
	tool_batch_extract_audio_from_mov_files_rules_title: 'قائمة انتظار MOV، تسلسلي، ZIP',
	tool_batch_extract_audio_from_mov_files_rules_body:
		'صنّف كل MOV، استخرج منفردًا، ضعه في ZIP. النجاحات الجزئية تُحفظ. ليس YouTube→MP3 ولا إعادة ترميز فيديو صامت.',
	tool_batch_extract_audio_from_mov_files_rules_item_1:
		'حتى 30 ملف ‎.mov؛ حد demux لكل ملف (مع OPFS نحو 5 جيغابايت / 6 ساعات).',
	tool_batch_extract_audio_from_mov_files_rules_item_2:
		'يُرفض غير MOV عند الإضافة — MP4/WebM/MKV ← المحور المختلط.',
	tool_batch_extract_audio_from_mov_files_rules_item_3:
		'فشل الصف = ذلك الصف فقط؛ ≥1 نجاح → تعبئة.',
	tool_batch_extract_audio_from_mov_files_rules_item_4:
		'كل شيء في المتصفح على الجهاز — بلا رفع إلى الخادم.',
	tool_batch_extract_audio_from_mov_files_example_title: 'جرّب دفعة MOV حقيقية',
	tool_batch_extract_audio_from_mov_files_example:
		'«تحميل مثال» ينشئ ملفي MOV قصيرين بصوت (إن دعم MediaRecorder H.264+AAC)، يستخرج، ويضع ملفين صوتيين في ZIP.',
	tool_batch_extract_audio_from_mov_files_usecases_title: 'حالات الاستخدام',
	tool_batch_extract_audio_from_mov_files_usecase_1:
		'مجلد MOV من الهاتف إلى ZIP صوتي بأسلوب «mov إلى mp3 دفعة» بلا سحابة.',
	tool_batch_extract_audio_from_mov_files_usecase_2:
		'تسجيلات شاشة MOV لأسبوع إلى أصوات قابلة للمشاركة — محليًا وليس من YouTube.',
	tool_batch_extract_audio_from_mov_files_usecase_3:
		'جمع AAC من لقطات الكاميرا وترك ملفات MOV الأصلية كما هي.',
	tool_batch_extract_audio_from_mov_files_faq_q1: 'هل يمكن لصق روابط أو قوائم تشغيل YouTube؟',
	tool_batch_extract_audio_from_mov_files_faq_a1:
		'لا. فقط ملفات ‎.mov محلية بالإسقاط أو الاختيار. احفظها أولًا على الجهاز.',
	tool_batch_extract_audio_from_mov_files_faq_q2: 'لدي ملف MOV واحد — هل هذه الصفحة؟',
	tool_batch_extract_audio_from_mov_files_faq_a2:
		'ملف واحد ← أداة MOV المفردة. هذه الصفحة لعدة MOV وأرشيف ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q3: 'مجلد فيه ‎.mov و‎.mp4 مختلطة؟',
	tool_batch_extract_audio_from_mov_files_faq_a3:
		'هنا ‎.mov فقط. الحاويات المختلطة: «استخراج الصوت من ملفات فيديو (دفعة)».',
	tool_batch_extract_audio_from_mov_files_faq_q4: 'هل هذا «mov إلى mp3 دفعة» عبر الإنترنت؟',
	tool_batch_extract_audio_from_mov_files_faq_a4:
		'نفس القصد لملفات MOV المحلية: demux لـ AAC، ZIP بصيغة MP3/WAV على الجهاز — بلا جلب رابط.',
	tool_batch_extract_audio_from_mov_files_faq_q5: 'لماذا بالتسلسل وليس بالتوازي؟',
	tool_batch_extract_audio_from_mov_files_faq_a5:
		'فك الترميز المتوازي يفجّر الذاكرة. بالتسلسل يبقى صوت الملف الحالي فقط للـ ZIP.',
	tool_batch_extract_audio_from_mov_files_faq_q6: 'هل تُرفع مقاطع الفيديو إلى خادم؟',
	tool_batch_extract_audio_from_mov_files_faq_a6:
		'لا. القراءة والـ demux وإنشاء ZIP تبقى في المتصفح على جهازك.',
};
export default ar;
