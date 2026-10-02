import type { SiteLangDict } from '../../../types';

/**
 * العربية: استخراج الصوت من ملف WebM.
 * فقط ‎.webm‎؛ مسار احتياطي MediaElement (~500 ميبيبايت / 4 ساعات)—لا ادّعاء demux بمقدار 5 جيبيبايت.
 * معالجة محلية؛ المخرج WAV أو MP3؛ بلا رابط YouTube.
 */
const ar: SiteLangDict = {
  tool_extract_audio_from_a_webm_file_title: 'استخراج الصوت من ملف WebM',
  tool_extract_audio_from_a_webm_file_desc:
    'استخرج صوت Opus/Vorbis من WebM محلي واحد إلى WAV أو MP3 على الجهاز. المسار الاحتياطي للمتصفح حوالي 500 ميبيبايت / 4 ساعات—وليس demux بمقدار 5 جيبيبايت.',
  tool_extract_audio_from_a_webm_file_description:
    'استخرج مسار الصوت من WebM محلي واحد في المتصفح ثم نزّل WAV أو MP3. الخطوات: اختر WebM ← استخراج ← معاينة ← تنزيل. مثال: تحميل عيّنة يبني WebM اصطناعيًا قصيرًا عندما يتوفر MediaRecorder. صفحة WebM هذه تستخدم المسار الاحتياطي MediaElement المشترك (حوالي 500 ميبيبايت / 4 ساعات)—الملفات الأكبر تفشل سريعًا بـ err_container. demux الكبير لـ MP4/MOV على صفحات تلك الصيغ أو مركز الفيديو. محلي فقط—لا تنزيل YouTube ولا رابط. لا يُرفع أبدًا. عدة ملفات WebM؟ استخدم استخراج الصوت من ملفات WebM دفعةً واحدة.',
  tool_extract_audio_from_a_webm_file_article:
    'تسجيلات الشاشة ولقطات المتصفح غالبًا ما تكون WebM بصوت Opus. هذه الصفحة تقبل ‎.webm‎ فقط، وتمر عبر المسار الاحتياطي لجدول قدرات الاستخراج، وتكتب WAV أو MP3 دون رفع. لا تدّعي demux بصيغة ISOBMFF ولا بث OPFS متعدد الجيجابايت—ذلك لـ MP4/MOV. لا تجلب روابط YouTube. المجلدات المختلطة إلى المركز أو دفعة المركز.',
  tool_extract_audio_from_a_webm_file_choose: 'اختر ملف WebM',
  tool_extract_audio_from_a_webm_file_hint:
    'أسقط ملف ‎.webm‎ محليًا واحدًا. سقف المسار الاحتياطي حوالي 500 ميبيبايت / 4 ساعات. ملفات WebM الأكبر تفشل برسالة حاوية واضحة—أعد الحاوية إلى MP4 لمسار demux الكبير، أو صغّر الملف.',
  tool_extract_audio_from_a_webm_file_convert: 'استخراج',
  tool_extract_audio_from_a_webm_file_download: 'تنزيل',
  tool_extract_audio_from_a_webm_file_download_wav: 'تنزيل WAV',
  tool_extract_audio_from_a_webm_file_download_mp3: 'تنزيل MP3',
  tool_extract_audio_from_a_webm_file_sample: 'تحميل عيّنة',
  tool_extract_audio_from_a_webm_file_clear: 'مسح',
  tool_extract_audio_from_a_webm_file_advanced: 'صيغة التصدير',
  tool_extract_audio_from_a_webm_file_format_label: 'صيغة الإخراج',
  tool_extract_audio_from_a_webm_file_format_wav: 'WAV (16 بت)',
  tool_extract_audio_from_a_webm_file_format_mp3: 'MP3',
  tool_extract_audio_from_a_webm_file_bitrate: 'معدل بتات MP3',
  tool_extract_audio_from_a_webm_file_settings_hint:
    'WAV الافتراضي يناسب ملفات WebM القصيرة. المقاطع الأطول قد تبث MP3. السقف هو المسار الاحتياطي (~500 ميبيبايت)، وليس demux لـ MP4. بلا جلب رابط.',
  tool_extract_audio_from_a_webm_file_progress: 'تقدّم الاستخراج',
  tool_extract_audio_from_a_webm_file_read: 'قراءة',
  tool_extract_audio_from_a_webm_file_decode: 'فك الترميز',
  tool_extract_audio_from_a_webm_file_extract: 'استخراج',
  tool_extract_audio_from_a_webm_file_write: 'كتابة',
  tool_extract_audio_from_a_webm_file_done: 'جاهز. عاين الصوت ثم نزّل WAV أو MP3.',
  tool_extract_audio_from_a_webm_file_failed:
    'فشل الاستخراج. جرّب WebM أصغر يمكن للمتصفح فك ترميزه.',
  tool_extract_audio_from_a_webm_file_elapsed: 'مرّ {s} ث',
  tool_extract_audio_from_a_webm_file_preview: 'استمع إلى الصوت المستخرج',
  tool_extract_audio_from_a_webm_file_result: '{seconds} ث · {channels} قن. · {rate} هرتز · {format} {output} كيبيبايت',
  tool_extract_audio_from_a_webm_file_sample_name: 'short-webm-audio-demo',
  tool_extract_audio_from_a_webm_file_empty: 'اختر ملف WebM أو حمّل العيّنة أولًا.',
  tool_extract_audio_from_a_webm_file_empty_state:
    'لا ملف بعد. أسقط ‎.webm‎ محليًا ضمن حوالي 500 ميبيبايت، أو تحميل عيّنة. ليس YouTube.',
  tool_extract_audio_from_a_webm_file_err_file: 'أسقط ملف WebM واحدًا بالضبط.',
  tool_extract_audio_from_a_webm_file_err_format:
    'ملف غير مدعوم. استخدم ‎.webm‎ (video/webm) فقط في هذه الصفحة.',
  tool_extract_audio_from_a_webm_file_err_limit:
    'يتجاوز هذا الـ WebM حد المدة أو الحجم في المسار الاحتياطي.',
  tool_extract_audio_from_a_webm_file_err_container:
    'يتجاوز هذا الـ WebM سقف المسار الاحتياطي (حوالي 500 ميبيبايت / 4 ساعات) أو لا يمكن فك ترميزه هنا. أعد الحاوية إلى MP4 للـ demux الكبير، أو استخدم WebM أصغر.',
  tool_extract_audio_from_a_webm_file_err_codec:
    'ترميز صوت هذا الـ WebM غير مدعوم في المسار الاحتياطي للمتصفح.',
  tool_extract_audio_from_a_webm_file_err_channels:
    'يستخدم هذا المسار تخطيط قنوات لا يستطيع المستخرج معالجته.',
  tool_extract_audio_from_a_webm_file_err_decode: 'تعذّر على المتصفح فك ترميز الصوت من هذا الـ WebM.',
  tool_extract_audio_from_a_webm_file_err_encoder: 'تعذّر كتابة ملف الصوت. حاول «استخراج» مرة أخرى.',
  tool_extract_audio_from_a_webm_file_err_sample:
    'تعذّر بناء عيّنة WebM. أسقط ملف ‎.webm‎ الخاص بك.',
  tool_extract_audio_from_a_webm_file_err_unsupported:
    'هذا المتصفح يفتقر إلى Web Audio اللازم للاستخراج.',
  tool_extract_audio_from_a_webm_file_err_empty: 'لم تُلتقط عيّنات صوت صالحة.',
  tool_extract_audio_from_a_webm_file_stop: 'إيقاف',
  tool_extract_audio_from_a_webm_file_status_stopped: 'توقف. لا يُحتفظ بأي ملف صوت جزئي.',
  tool_extract_audio_from_a_webm_file_forced_mp3:
    'مدخل طويل/كبير استخدم بث MP3 على المسار الاحتياطي.',
  tool_extract_audio_from_a_webm_file_how_title: 'كيف تستخرج الصوت من ملف WebM',
  tool_extract_audio_from_a_webm_file_how_body:
    'أسقط WebM محليًا، اختر WAV أو MP3، استخراج، عاين، نزّل—دون رفع.',
  tool_extract_audio_from_a_webm_file_how_item_1:
    'اختر ‎.webm‎ محليًا (ضمن حوالي 500 ميبيبايت)، أو تحميل عيّنة عندما يعمل MediaRecorder.',
  tool_extract_audio_from_a_webm_file_how_item_2:
    'افتح صيغة التصدير واختر WAV أو MP3؛ اضبط معدل البتات عند الحاجة.',
  tool_extract_audio_from_a_webm_file_how_item_3:
    'انقر استخراج وانتظر قراءة ← فك الترميز ← استخراج ← كتابة (أو إيقاف).',
  tool_extract_audio_from_a_webm_file_how_item_4: 'عاين، ثم تنزيل WAV أو تنزيل MP3.',
  tool_extract_audio_from_a_webm_file_why_choose_title: 'لماذا تستخدم استخراج الصوت من ملف WebM',
  tool_extract_audio_from_a_webm_file_why_choose_item_1:
    'قبول WebM فقط حتى لا تختلط لقطات الشاشة بصفحات هبوط MP4.',
  tool_extract_audio_from_a_webm_file_why_choose_item_2:
    'سقوف احتياطية صادقة—بلا تسويق demux وهمي بمقدار 5 جيبيبايت لـ WebM.',
  tool_extract_audio_from_a_webm_file_why_choose_item_3:
    'المعالجة على جهازك؛ «إيقاف» يلغي أثناء التشغيل.',
  tool_extract_audio_from_a_webm_file_why_choose_item_4:
    'المركز وصفحات الملفات الكبيرة لـ MP4/MOV قريبة عندما تحتاج demux.',
  tool_extract_audio_from_a_webm_file_rules_title: 'WebM فقط وحدود المسار الاحتياطي',
  tool_extract_audio_from_a_webm_file_rules_body:
    'WebM محلي واحد لكل تشغيل على المسار الاحتياطي MediaElement. ليس YouTube إلى MP3. ليس تصدير فيديو صامت.',
  tool_extract_audio_from_a_webm_file_rules_item_1:
    'حوالي 500 ميبيبايت / 4 ساعات احتياطي. أكبر → err_container. demux الكبير اليوم لـ MP4/MOV فقط.',
  tool_extract_audio_from_a_webm_file_rules_item_2: 'بلا رابط أو تنزيل YouTube.',
  tool_extract_audio_from_a_webm_file_rules_item_3: 'النجاح يعتمد على دعم المتصفح لـ WebM/Opus.',
  tool_extract_audio_from_a_webm_file_rules_item_4:
    'ملف WebM الأصلي لا يُستبدل أبدًا. عدة WebM تستخدم أداة دفعة WebM.',
  tool_extract_audio_from_a_webm_file_example_title: 'جرّب استخراج WebM حقيقيًا',
  tool_extract_audio_from_a_webm_file_example:
    'تحميل عيّنة يبني WebM اصطناعيًا قصيرًا عندما يتوفر MediaRecorder، ثم يعمل الاستخراج. فضّل ‎.webm‎ الخاص بك إن تعذّر بناء العيّنة.',
  tool_extract_audio_from_a_webm_file_usecases_title: 'متى يفيد ذلك',
  tool_extract_audio_from_a_webm_file_usecase_1:
    'لقطة شاشة WebM من المتصفح ← MP3 قابل للمشاركة دون رفع.',
  tool_extract_audio_from_a_webm_file_usecase_2:
    'مقطع مقابلة WebM يحتاج مسار Opus فقط كـ WAV.',
  tool_extract_audio_from_a_webm_file_usecase_3:
    'تعرف مسبقًا أن الملف WebM وتريد صفحة خاصة بالصيغة—لا المركز المختلط.',
  tool_extract_audio_from_a_webm_file_faq_q1: 'هل يمكن لصق رابط YouTube؟',
  tool_extract_audio_from_a_webm_file_faq_a1: 'لا. ‎.webm‎ محلي فقط.',
  tool_extract_audio_from_a_webm_file_faq_q2: 'لماذا ليس 5 جيبيبايت مثل صفحة MP4؟',
  tool_extract_audio_from_a_webm_file_faq_a2:
    'demux الكبير اليوم هو ISOBMFF (MP4/MOV). WebM يستخدم المسار الاحتياطي MediaElement حوالي 500 ميبيبايت حتى يتوفر demux لـ WebM.',
  tool_extract_audio_from_a_webm_file_faq_q3: 'هل يُكتم صوت WebM (فيديو صامت)؟',
  tool_extract_audio_from_a_webm_file_faq_a3: 'لا. يستخرج الصوت فقط إلى WAV/MP3.',
  tool_extract_audio_from_a_webm_file_faq_q4: 'هل يُرفع ملفي؟',
  tool_extract_audio_from_a_webm_file_faq_a4: 'لا. فك الترميز والكتابة في متصفحك.',
  tool_extract_audio_from_a_webm_file_faq_q5: 'لدي عدة ملفات WebM—أي صفحة؟',
  tool_extract_audio_from_a_webm_file_faq_a5:
    'استخدم استخراج الصوت من ملفات WebM دفعةً واحدة للحصول على ZIP للنجاحات.',
  tool_extract_audio_from_a_webm_file_faq_q6: 'هل يمكن القص بعد الاستخراج؟',
  tool_extract_audio_from_a_webm_file_faq_a6:
    'ليس هنا. نزّل ثم استخدم قص مقطع صوتي وتصديره.',
};
export default ar;
