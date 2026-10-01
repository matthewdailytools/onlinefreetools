import type { SiteLangDict } from '../../../types';

/**
 * العربية: استخراج الصوت من ملف MKV محلي فقط.
 * حدود D1 الصادقة: مسار احتياطي MediaElement ~500 MiB / 4 ساعات.
 * MKV متعدد الجيجابايت أو DDP/Atmos → ffmpeg على الحاسوب إلى MP4 بـ AAC ستيريو، ثم صفحة استخراج MP4.
 * المفاتيح مطابقة للنسخة الإنجليزية en.ts.
 */
const ar: SiteLangDict = {
  tool_extract_audio_from_an_mkv_file_title: 'استخراج الصوت من ملف MKV',
  tool_extract_audio_from_an_mkv_file_desc:
    'استخرج الصوت من MKV محلي واحد إلى WAV أو MP3 في المتصفح إذا كان الملف ضمن مسار الاحتياط ~500 MiB / 4 ساعات. MKV متعدد الجيجابايت أو DDP/Atmos: حوّله أولاً إلى MP4 بـ AAC على حاسوبك، ثم استخدم أداة استخراج MP4.',
  tool_extract_audio_from_an_mkv_file_description:
    'استخرج مسار الصوت من MKV محلي واحد في المتصفح، ثم نزّل WAV أو MP3. الخطوات: اختر MKV → استخراج → استمع → تنزيل. مثال: «تحميل العينة» يبني بديلاً قصيراً اصطناعياً عندما يعمل MediaRecorder—يفضّل .mkv حقيقي دون ~500 MiB. هذه الصفحة تستخدم مسار MediaElement الاحتياطي (~500 MiB / 4 ساعات)؛ الملفات الأكبر تفشل فوراً مع err_container. MKV متعدد الجيجابايت أو Dolby Digital Plus / Atmos (E-AC-3) غير مدعوم هنا—على حاسوبك شغّل ffmpeg لإنشاء MP4 بـ AAC ستيريو (يمكن نسخ الفيديو)، ثم افتح «استخراج الصوت من ملف MP4» لمسار demux الكبير. محلي فقط—ليس تنزيل YouTube. لا يُرفع الملف. عدة MKV؟ استخدم «استخراج الصوت من ملفات MKV دفعة واحدة».',
  tool_extract_audio_from_an_mkv_file_article:
    'تسجيلات الشاشة والالتقاطات غالباً تصل بصيغة MKV. هذه الصفحة تقبل .mkv فقط، تستخدم مسار الاستخراج الاحتياطي المشترك، وتكتب WAV أو MP3 دون رفع. لا تدّعي demux ISOBMFF ولا بث OPFS متعدد الجيجابايت—ذلك لـ MP4/MOV مع AAC. لا تفك E-AC-3 / DTS في المتصفح. لنسخة متعددة الجيجابايت أو مسار Atmos، حوّل على الجهاز بـ ffmpeg إلى MP4 بـ AAC، ثم صفحة استخراج MP4. المجلدات المختلطة تذهب إلى مركز الفيديو أو الدفعة المركزية.',
  tool_extract_audio_from_an_mkv_file_choose: 'اختر ملف MKV',
  tool_extract_audio_from_an_mkv_file_hint:
    'أفلت .mkv محلياً ضمن ~500 MiB / 4 ساعات. MKV أكبر أو DDP/Atmos: على حاسوبك، ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4، ثم «استخراج الصوت من ملف MP4».',
  tool_extract_audio_from_an_mkv_file_convert: 'استخراج',
  tool_extract_audio_from_an_mkv_file_download: 'تنزيل',
  tool_extract_audio_from_an_mkv_file_download_wav: 'تنزيل WAV',
  tool_extract_audio_from_an_mkv_file_download_mp3: 'تنزيل MP3',
  tool_extract_audio_from_an_mkv_file_sample: 'تحميل العينة',
  tool_extract_audio_from_an_mkv_file_clear: 'مسح',
  tool_extract_audio_from_an_mkv_file_advanced: 'صيغة التصدير',
  tool_extract_audio_from_an_mkv_file_format_label: 'صيغة الإخراج',
  tool_extract_audio_from_an_mkv_file_format_wav: 'WAV (16 بت)',
  tool_extract_audio_from_an_mkv_file_format_mp3: 'MP3',
  tool_extract_audio_from_an_mkv_file_bitrate: 'معدل بت MP3',
  tool_extract_audio_from_an_mkv_file_settings_hint:
    'WAV الافتراضي يناسب MKV قصيرة. المقاطع الأطول قد تستخدم MP3 متدفقاً. السقف هو المسار الاحتياطي (~500 MiB)، وليس demux MP4. لا جلب URL.',
  tool_extract_audio_from_an_mkv_file_progress: 'تقدّم الاستخراج',
  tool_extract_audio_from_an_mkv_file_read: 'قراءة',
  tool_extract_audio_from_an_mkv_file_decode: 'فك الترميز',
  tool_extract_audio_from_an_mkv_file_extract: 'استخراج',
  tool_extract_audio_from_an_mkv_file_write: 'كتابة',
  tool_extract_audio_from_an_mkv_file_done: 'جاهز. استمع للصوت، ثم نزّل WAV أو MP3.',
  tool_extract_audio_from_an_mkv_file_failed: 'فشل الاستخراج. جرّب MKV أصغر، أو حوّل أولاً إلى MP4 بـ AAC عبر ffmpeg.',
  tool_extract_audio_from_an_mkv_file_elapsed: 'مرّ {s} ث',
  tool_extract_audio_from_an_mkv_file_preview: 'استمع للصوت المستخرج',
  tool_extract_audio_from_an_mkv_file_result: '{seconds} ث · {channels} ق · {rate} Hz · {format} {output} KiB',
  tool_extract_audio_from_an_mkv_file_sample_name: 'عرض-mkv-قصير',
  tool_extract_audio_from_an_mkv_file_empty: 'اختر ملف MKV أو حمّل العينة أولاً.',
  tool_extract_audio_from_an_mkv_file_empty_state:
    'لا ملف بعد. أفلت .mkv محلياً ضمن ~500 MiB، أو «تحميل العينة». متعدد GB / DDP: حوّل أولاً إلى MP4 بـ AAC عبر ffmpeg. ليس YouTube.',
  tool_extract_audio_from_an_mkv_file_err_file: 'أفلت ملف MKV واحداً بالضبط.',
  tool_extract_audio_from_an_mkv_file_err_format: 'ملف غير مدعوم. في هذه الصفحة .mkv فقط.',
  tool_extract_audio_from_an_mkv_file_err_limit: 'هذا MKV يتجاوز حد المدة أو الحجم في المسار الاحتياطي.',
  tool_extract_audio_from_an_mkv_file_err_container:
    'هذا MKV فوق سقف الاحتياط (~500 MiB / 4 ساعات) أو لا يُفك هنا. على حاسوبك: ffmpeg إلى MP4 بـ AAC ستيريو (نسخ الفيديو)، ثم «استخراج الصوت من ملف MP4»—أو MKV أصغر.',
  tool_extract_audio_from_an_mkv_file_err_codec:
    'ترميز صوت هذا MKV غير مدعوم في المتصفح (غالباً E-AC-3 / DDP / Atmos). حوّل إلى AAC داخل MP4 بـ ffmpeg، ثم صفحة استخراج MP4.',
  tool_extract_audio_from_an_mkv_file_err_channels: 'المسار يستخدم تخطيط قنوات لا يتعامل معه المستخرج. اخلط إلى AAC ستيريو داخل MP4 أولاً.',
  tool_extract_audio_from_an_mkv_file_err_decode: 'تعذّر على المتصفح فك صوت هذا MKV.',
  tool_extract_audio_from_an_mkv_file_err_encoder: 'تعذّر كتابة ملف الصوت. جرّب «استخراج» مرة أخرى.',
  tool_extract_audio_from_an_mkv_file_err_sample: 'تعذّر بناء عينة MKV. أفلت .mkv خاصاً بك.',
  tool_extract_audio_from_an_mkv_file_err_unsupported: 'هذا المتصفح يفتقد Web Audio اللازم للاستخراج.',
  tool_extract_audio_from_an_mkv_file_err_empty: 'لم تُلتقط عينات صوت قابلة للاستخدام.',
  tool_extract_audio_from_an_mkv_file_stop: 'إيقاف',
  tool_extract_audio_from_an_mkv_file_status_stopped: 'متوقف. لا يُحفظ ملف صوت جزئي.',
  tool_extract_audio_from_an_mkv_file_forced_mp3: 'مدخل طويل/كبير استخدم MP3 متدفقاً في المسار الاحتياطي.',
  tool_extract_audio_from_an_mkv_file_how_title: 'كيف تستخرج الصوت من ملف MKV',
  tool_extract_audio_from_an_mkv_file_how_body:
    'MKV محلي صغير: أفلت، استخراج، تنزيل. متعدد GB أو DDP/Atmos: حوّل أولاً إلى MP4 بـ AAC عبر ffmpeg على جهازك، ثم أداة استخراج MP4.',
  tool_extract_audio_from_an_mkv_file_how_item_1:
    'اختر .mkv محلياً ضمن ~500 MiB، أو «تحميل العينة» عندما يعمل MediaRecorder. إن كان الملف متعدد GB أو DDP/Atmos، توقف هنا وحوّل بـ ffmpeg أولاً.',
  tool_extract_audio_from_an_mkv_file_how_item_2: 'افتح «صيغة التصدير» واختر WAV أو MP3؛ اضبط معدل البت إن لزم.',
  tool_extract_audio_from_an_mkv_file_how_item_3: 'انقر «استخراج» وانتظر قراءة → فك الترميز → استخراج → كتابة (أو «إيقاف»).',
  tool_extract_audio_from_an_mkv_file_how_item_4: 'استمع، ثم «تنزيل WAV» أو «تنزيل MP3».',
  tool_extract_audio_from_an_mkv_file_why_choose_title: 'لماذا تستخدم «استخراج الصوت من ملف MKV» لدينا',
  tool_extract_audio_from_an_mkv_file_why_choose_item_1: 'قبول MKV فقط حتى لا تختلط ملفات Matroska مع صفحات MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_2: 'سقوف احتياطية صادقة—لا تسويق demux وهمي 5 GiB لـ MKV.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_3: 'مسار واضح للملفات الكبيرة/DDP: ffmpeg على الحاسوب → MP4 بـ AAC → صفحة استخراج MP4.',
  tool_extract_audio_from_an_mkv_file_why_choose_item_4: 'المعالجة على جهازك؛ «إيقاف» يلغي أثناء التشغيل.',
  tool_extract_audio_from_an_mkv_file_rules_title: 'MKV فقط وحدود الاحتياط',
  tool_extract_audio_from_an_mkv_file_rules_body:
    'MKV محلي واحد لكل تشغيل على مسار MediaElement الاحتياطي. ليس YouTube إلى MP3. ليس تصدير فيديو صامت. MKV كبير أو ترميز نادر يحتاج MP4 بـ AAC على الجهاز أولاً.',
  tool_extract_audio_from_an_mkv_file_rules_item_1:
    'احتياط ~500 MiB / 4 ساعات. تجاوز السقف → err_container. demux الكبير لـ MP4/MOV فقط اليوم.',
  tool_extract_audio_from_an_mkv_file_rules_item_2: 'لا URL ولا تنزيل YouTube.',
  tool_extract_audio_from_an_mkv_file_rules_item_3:
    'E-AC-3 / DDP / Atmos / DTS يفشل عادةً بـ err_codec. مثال على حاسوبك: ffmpeg -i in.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k out.mp4 ثم «استخراج الصوت من ملف MP4».',
  tool_extract_audio_from_an_mkv_file_rules_item_4: 'MKV الأصلي لا يُستبدل أبداً. الدفعات: أداة MKV الدفعية.',
  tool_extract_audio_from_an_mkv_file_example_title: 'جرّب استخراج MKV حقيقي',
  tool_extract_audio_from_an_mkv_file_example:
    '«تحميل العينة» يبني بديلاً قصيراً اصطناعياً عندما يعمل MediaRecorder، ثم يُشغَّل الاستخراج. يفضّل .mkv خاصاً بك ضمن سقف الاحتياط. نسخ متعددة GB: حوّل إلى MP4 بـ AAC عبر ffmpeg، ثم صفحة MP4.',
  tool_extract_audio_from_an_mkv_file_usecases_title: 'متى ينفع',
  tool_extract_audio_from_an_mkv_file_usecase_1: 'MKV تسجيل شاشة في المتصفح دون ~500 MiB → MP3 للمشاركة دون رفع.',
  tool_extract_audio_from_an_mkv_file_usecase_2: 'مقطع MKV مقابلة قصير يحتاج مسار الصوت فقط كـ WAV.',
  tool_extract_audio_from_an_mkv_file_usecase_3:
    'تعلم أن الملف MKV ضخم أو DDP—حوّل محلياً إلى MP4 بـ AAC، ثم أداة استخراج MP4 بدلاً من هذه الصفحة.',
  tool_extract_audio_from_an_mkv_file_faq_q1: 'هل ألصق رابط YouTube؟',
  tool_extract_audio_from_an_mkv_file_faq_a1: 'لا. .mkv محلي فقط.',
  tool_extract_audio_from_an_mkv_file_faq_q2: 'لماذا ليس 5 GiB مثل صفحة MP4؟',
  tool_extract_audio_from_an_mkv_file_faq_a2:
    'demux الكبير اليوم هو ISOBMFF (MP4/MOV). MKV يستخدم احتياط MediaElement ~500 MiB حتى يتوفر demux Matroska.',
  tool_extract_audio_from_an_mkv_file_faq_q3: 'MKV متعدد GB أو Dolby Atmos / DDP—ماذا أفعل؟',
  tool_extract_audio_from_an_mkv_file_faq_a3:
    'هذه الصفحة سترفضه (err_container و/أو err_codec). على حاسوبك، حوّل إلى MP4 بـ AAC ستيريو، مثلاً: ffmpeg -i input.mkv -map 0:v:0 -map 0:a:0 -c:v copy -c:a aac -ac 2 -b:a 192k output.mp4. ثم افتح «استخراج الصوت من ملف MP4» لمسار demux الكبير. remux فقط دون AAC يفشل إن بقي المسار E-AC-3.',
  tool_extract_audio_from_an_mkv_file_faq_q4: 'هل يكتم MKV (فيديو بلا صوت)؟',
  tool_extract_audio_from_an_mkv_file_faq_a4: 'لا. يستخرج الصوت إلى WAV/MP3 فقط.',
  tool_extract_audio_from_an_mkv_file_faq_q5: 'هل يُرفع ملفي؟',
  tool_extract_audio_from_an_mkv_file_faq_a5: 'لا. فك الترميز والكتابة في متصفحك. خطوة ffmpeg (إن لزمت) أيضاً على حاسوبك.',
  tool_extract_audio_from_an_mkv_file_faq_q6: 'لدي عدة MKV—أي صفحة؟',
  tool_extract_audio_from_an_mkv_file_faq_a6:
    'مجلدات MKV صغيرة: «استخراج الصوت من ملفات MKV دفعة واحدة». ضخمة أو DDP: حوّل كل واحد إلى MP4 بـ AAC أولاً، ثم «استخراج الصوت من ملفات MP4 دفعة واحدة» أو صفحة MP4 المفردة.',
  tool_extract_audio_from_an_mkv_file_faq_q7: 'هل أقصّ بعد الاستخراج؟',
  tool_extract_audio_from_an_mkv_file_faq_a7: 'ليس هنا. نزّل، ثم استخدم «قص مقطع صوت وتصديره».',
};
export default ar;
