/**
 * i18n tool shard (split-a-recording-on-silence / ar).
 * Job: split a recording on silence into a ZIP of clips (قسّم تسجيلاً عند الصمت).
 */
import type { SiteLangDict } from '../../../types';

/** Arabic copy: قسّم تسجيلاً عند الصمت وحمّل ZIP فيه مقاطع. */
const ar: SiteLangDict = {
  tool_split_a_recording_on_silence_advanced: 'إعدادات متقدمة (اختياري)',
  tool_split_a_recording_on_silence_article:
    'في هذا التبويب تقطيع المقطع عند الصمت: افتح ملفاً من الجهاز، اضغط تقسيم عند الصمت ثم تنزيل ZIP. الوقفات الطويلة تُقطع عند منتصف الفجوة، وكل مقطع ملف مستقل. التسجيل يبقى على جهازك دون رفع إلى خادم.',
  tool_split_a_recording_on_silence_bitrate: 'معدل بت MP3',
  tool_split_a_recording_on_silence_bitrate_hint: 'البداية 128 kbps. يُستخدم فقط عندما يكون تنسيق ZIP هو MP3.',
  tool_split_a_recording_on_silence_choose_file: 'اختر ملف صوت',
  tool_split_a_recording_on_silence_clear: 'مسح',
  tool_split_a_recording_on_silence_clip_download: 'حفظ هذا المقطع',
  tool_split_a_recording_on_silence_clip_play: 'تشغيل المقطع',
  tool_split_a_recording_on_silence_clip_row_tpl: 'مقطع {n} · {dur}ث ({start}s–{end}s)',
  tool_split_a_recording_on_silence_clips_title: 'مقاطع جاهزة لـ ZIP',
  tool_split_a_recording_on_silence_desc:
    'فصل التسجيل عند الوقفات وتنزيل المقاطع في ZIP — يبقى على جهازك دون رفع إلى خادم.',
  tool_split_a_recording_on_silence_description:
    'قسّم تسجيلاً عند الصمت على الجهاز نفسه: الوقفات الطويلة نقاط قطع، وZIP يجمع المقاطع؛ الملف لا يُرفع إلى خادم. تقسيم الصوت عند الصمت، فصل التسجيل عند الوقفات، تقطيع المقطع عند الصمت، أو تنزيل المقاطع في ZIP كلها العمل متعدد الملفات نفسه. خطوات: افتح التسجيل، اضغط تقسيم عند الصمت (الافتراضي −40 dB / 1.0 s / 0.3 s أقل طول للمقطع) ثم تنزيل ZIP. مثال: عيّنة 5.00 ثوانٍ فيها فجوتان 1.20 ث تعطي ثلاثة مقاطع 1.40 / 2.00 / 1.60 ث. ليست إزالة صمت لملف واحد، وليست تقسيماً بمدد متساوية، وليست كتم فيديو.',
  tool_split_a_recording_on_silence_download_zip: 'تنزيل ZIP',
  tool_split_a_recording_on_silence_drop_hint: 'أو أفلت WAV أو MP3 أو M4A أو OGG هنا. المعالجة تبقى في هذا التبويب.',
  tool_split_a_recording_on_silence_empty: 'اختر ملف صوت أولاً.',
  tool_split_a_recording_on_silence_err_caps:
    'هذا الملف يتجاوز حد الحجم أو المدة لهذا الجهاز (نحو 40 MB / 20 دقيقة على سطح المكتب، 20 MB / 8 دقائق على شاشة ضيقة). قصّره في مكان آخر أو استخدم ملفاً أقصر.',
  tool_split_a_recording_on_silence_err_decode:
    'تعذّر على هذا المتصفح فك ترميز الملف. جرّب WAV أو MP3، أو مقطعاً بلا DRM.',
  tool_split_a_recording_on_silence_err_empty: 'لا شيء للمعالجة. حمّل ملفاً أو المثال أولاً.',
  tool_split_a_recording_on_silence_err_lame: 'فشل تحميل مرمّز MP3. ابقَ في التبويب وأعد تنزيل ZIP.',
  tool_split_a_recording_on_silence_err_no_clips:
    'لا مقطع بطول كافٍ للإبقاء. اخفض أقل طول للمقطع، أو ارفع أقل صمت حتى لا تُحسب أنفاس قصيرة نقاط قطع.',
  tool_split_a_recording_on_silence_err_too_many:
    'أكثر من 50 مقطعاً. ارفع أقل صمت أو اجعل العتبة أكثر سلبية لدمج الوقفات المتجاورة، ثم تقسيم عند الصمت مرة أخرى. الصفحة ترفض بدلاً من البتر.',
  tool_split_a_recording_on_silence_err_video:
    'الفيديو ليس المدخل الرئيسي. الصفحة تقسم ملف صوت عند الوقفات؛ لا تكتم فيديو ولا تقصّ اللقطات قفزاً.',
  tool_split_a_recording_on_silence_err_zip: 'فشل تحميل مكتبة ZIP. ابقَ في التبويب وأعد تنزيل ZIP.',
  tool_split_a_recording_on_silence_example:
    'تحميل مثال يبني نغمة 5.00 ث بفجوتين صامتين 1.20 ث (0.80 + 1.20 + 0.80 + 1.20 + 1.00). تقسيم عند الصمت عند −40 dB / 1.0 s / 0.3 s أقل طول يقطع عند 1.40 ث و 3.40 ث، فثلاثة مقاطع 1.40 / 2.00 / 1.60 ث. تنزيل ZIP يكتب ملفات WAV باسم sample-01.wav ما لم تختر MP3 في الإعدادات المتقدمة.',
  tool_split_a_recording_on_silence_example_title: 'مثال بالأرقام',
  tool_split_a_recording_on_silence_faq_a1:
    'لا. فك الترميز والكشف والتقسيم وتعبئة ZIP تجري في هذا التبويب. السكربتات من هذا الموقع. الملف لا يُرسل إلى خوادمنا.',
  tool_split_a_recording_on_silence_faq_a2:
    'هذه الصفحة نفسها. تقسيم الصوت عند الصمت، فصل التسجيل عند الوقفات، تقطيع المقطع عند الصمت، أو تنزيل المقاطع في ZIP يعني: قطع عند الوقفات الطويلة وملفات كثيرة داخل ZIP واحد.',
  tool_split_a_recording_on_silence_faq_a3:
    'عمل مختلف. إزالة الصمت من تسجيل تحذف الهواء الميت وتخيط ملفاً واحداً أقصر. هنا الوقفات نقاط قطع والمخرج مقاطع كثيرة. إن لم ترد ZIP فاستخدم أداة الملف الواحد.',
  tool_split_a_recording_on_silence_faq_a4:
    'لا. التقسيم بمدد متساوية (كل N ثانية) مهمة لاحقة أخرى. تقسيم الألبوم بورقة cue خارج النطاق أيضاً. القطع فقط حيث تدوم الفجوة الهادئة بما يكفي.',
  tool_split_a_recording_on_silence_faq_a5:
    'ابدأ بكلام (−40 dB / 1.0 s / 0.3 s أقل طول للمقطع). المحاضرات: محاضرة (−40 dB / 2.0 s). فجوات الألبوم: ألبوم (−45 dB / 1.5 s / 1.0 s أقل طول). إن صارت الأنفاس مقاطع فارفع أقل صمت.',
  tool_split_a_recording_on_silence_faq_a6:
    'داخل ZIP تُسمّى {stem}-01.wav (أو .mp3). يمكن تنزيل مقطع واحد من القائمة. الحد 50 مقطعاً؛ فوق ذلك يُرفض التقسيم.',
  tool_split_a_recording_on_silence_faq_a7:
    'لا. لا إزالة ضوضاء، ولا حذف أم/آه، ولا كتم فيديو، ولا cue/APE، ولا سحب YouTube. استخدم ملف صوت تملك حقوقه.',
  tool_split_a_recording_on_silence_faq_a8:
    'سطح المكتب: نحو 40 MB أو 20 دقيقة. الشاشة الضيقة: نحو 20 MB أو 8 دقائق. ما يتجاوز الحد يُرفض قبل فك الترميز. الموسيقى ذات المدى الديناميكي الواسع قد تبدو صمتاً — ارفع أقل فجوة أو تجاوز الأداة.',
  tool_split_a_recording_on_silence_faq_q1: 'هل يُرفع تسجيلي إلى خادم؟',
  tool_split_a_recording_on_silence_faq_q2: 'بحثت عن تقسيم الصوت عند الصمت أو تنزيل المقاطع في ZIP. هل هذه أداة أخرى؟',
  tool_split_a_recording_on_silence_faq_q3: 'أردت ملفاً واحداً أقصر بلا هواء ميت. هل هذه أداة إزالة الصمت؟',
  tool_split_a_recording_on_silence_faq_q4: 'هل يقسم أجزاء متساوية أو يتبع ورقة cue؟',
  tool_split_a_recording_on_silence_faq_q5: 'أي عتبة أستخدم؟ هل تُقطع الأنفاس؟',
  tool_split_a_recording_on_silence_faq_q6: 'كيف تُسمّى الملفات وكم مقطعاً أحصل؟',
  tool_split_a_recording_on_silence_faq_q7: 'هل تزيل الضوضاء أو تقسم فيديو أو تتبع cue أو تسحب YouTube؟',
  tool_split_a_recording_on_silence_faq_q8: 'ما أكبر ملف يمكن معالجته؟ وماذا عن الموسيقى الهادئة؟',
  tool_split_a_recording_on_silence_format: 'تنسيق الملفات داخل ZIP',
  tool_split_a_recording_on_silence_format_hint: 'WAV هو PCM بلا فقدان. مرمّز MP3 يُحمَّل فقط عند النقر على تنزيل ZIP.',
  tool_split_a_recording_on_silence_format_mp3: 'MP3',
  tool_split_a_recording_on_silence_format_wav: 'WAV',
  tool_split_a_recording_on_silence_how_body:
    'اعثر على فجوات هادئة طويلة بما يكفي، اقطع عند منتصف كل فجوة، ثم نزّل ZIP للمقاطع؛ الملف يبقى على جهازك دون رفع إلى خادم.',
  tool_split_a_recording_on_silence_how_item_1: 'افتح تسجيلاً (أو اضغط تحميل مثال).',
  tool_split_a_recording_on_silence_how_item_2: 'اترك الافتراضي، أو افتح إعدادات متقدمة (اختياري) لتغيير العتبة وأقل صمت.',
  tool_split_a_recording_on_silence_how_item_3: 'اضغط تقسيم عند الصمت.',
  tool_split_a_recording_on_silence_how_item_4: 'اضغط تنزيل ZIP.',
  tool_split_a_recording_on_silence_how_title: 'طريقة العمل',
  tool_split_a_recording_on_silence_hud_decode: 'فك ترميز الملف في هذا التبويب…',
  tool_split_a_recording_on_silence_hud_decoded: 'اكتمل الفك. العلامات الحمراء فجوات. اضغط تقسيم عند الصمت إن ناسبتك الإعدادات.',
  tool_split_a_recording_on_silence_hud_detect: 'قياس النوافذ الهادئة…',
  tool_split_a_recording_on_silence_hud_elapsed_tpl: '{s}ث مضت',
  tool_split_a_recording_on_silence_hud_encode: 'ترميز مقاطع MP3…',
  tool_split_a_recording_on_silence_hud_fail_hint: 'صحّح الملف أو الإعدادات ثم تقسيم عند الصمت مجدداً.',
  tool_split_a_recording_on_silence_hud_fail_title: 'توقف تقسيم عند الصمت',
  tool_split_a_recording_on_silence_hud_next: 'انتهى. الخطوة التالية: تنزيل ZIP.',
  tool_split_a_recording_on_silence_hud_next_zip: 'انتهى. يفترض أن يبدأ تنزيل ZIP.',
  tool_split_a_recording_on_silence_hud_pack: 'تعبئة المقاطع في ZIP…',
  tool_split_a_recording_on_silence_hud_pct_tpl: '{pct}%',
  tool_split_a_recording_on_silence_hud_split: 'القطع عند منتصف الصمت…',
  tool_split_a_recording_on_silence_hud_step_decode: 'فك الترميز',
  tool_split_a_recording_on_silence_hud_step_detect: 'كشف',
  tool_split_a_recording_on_silence_hud_step_pack: 'تعبئة',
  tool_split_a_recording_on_silence_hud_step_split: 'تقسيم',
  tool_split_a_recording_on_silence_hud_title: 'تقدّم تقسيم عند الصمت',
  tool_split_a_recording_on_silence_hud_working: 'بدء…',
  tool_split_a_recording_on_silence_meta_tpl: '{name} · {dur}ث · {rate} Hz · {ch} ch',
  tool_split_a_recording_on_silence_min_clip: 'أقل طول للمقطع (ثوانٍ)',
  tool_split_a_recording_on_silence_min_clip_hint: 'الافتراضي 0.3 s. الشرائح الأقصر بعد القطع تُهمل.',
  tool_split_a_recording_on_silence_min_silence: 'أقل صمت (ثوانٍ)',
  tool_split_a_recording_on_silence_min_silence_hint: 'الافتراضي 1.0 s حتى لا تصبح الأنفاس القصيرة نقاط قطع.',
  tool_split_a_recording_on_silence_pause: 'إيقاف مؤقت',
  tool_split_a_recording_on_silence_play: 'تشغيل',
  tool_split_a_recording_on_silence_preset_album: 'ألبوم',
  tool_split_a_recording_on_silence_preset_hint: 'كلام هو الافتراضي. محاضرة تنتظر وقفات فصول أطول. ألبوم يتوقع فجوات بين المقاطع.',
  tool_split_a_recording_on_silence_preset_lecture: 'محاضرة',
  tool_split_a_recording_on_silence_preset_speech: 'كلام',
  tool_split_a_recording_on_silence_preview_hint: 'الأشرطة الحمراء فجوات طويلة بما يكفي للتقسيم. التشغيل يستمع للملف الحالي.',
  tool_split_a_recording_on_silence_result_one:
    '{orig}ث · لا وقفة طويلة بما يكفي، لذا سيحتوي ZIP هذا الملف وحده. اخفض أقل صمت أو ارفع العتبة (أقرب إلى 0). تنزيل ZIP جاهز.',
  tool_split_a_recording_on_silence_result_tpl:
    '{orig}ث · {gaps} فجوة → {count} مقطع: {list}. تنزيل ZIP جاهز.',
  tool_split_a_recording_on_silence_rules_body:
    'كل نحو 50 ms تقيس الصفحة RMS وتحوّله إلى dB: levelDb = 20 × log10(rms). الامتداد تحت العتبة الذي يدوم على الأقل أقل صمت يُقطع عند منتصفه. المقاطع أقصر من الحد تُهمل. WAV هو PCM بـ 16 بت. MP3 هو CBR بالمعدل المختار. ZIP يُبنى في هذا التبويب.',
  tool_split_a_recording_on_silence_rules_item_1:
    'كلام: −40 dB، 1.0 s أقل صمت، 0.3 s أقل طول للمقطع. محاضرة: −40 dB / 2.0 s / 0.5 s. فجوات الألبوم: −45 dB / 1.5 s / 1.0 s.',
  tool_split_a_recording_on_silence_rules_item_2:
    'حد سطح المكتب نحو 40 MB أو 20 دقيقة؛ الشاشة الضيقة نحو 20 MB أو 8 دقائق. ما يتجاوز الحد يُرفض لا يُبتر. أكثر من 50 مقطعاً يُرفض.',
  tool_split_a_recording_on_silence_rules_item_3:
    'الملفات تبقى على جهازك؛ لا تُرفع إلى خادم. JSZip ومرمّز MP3 يُحمَّلان من هذا الموقع فقط بعد تنزيل ZIP.',
  tool_split_a_recording_on_silence_rules_item_4:
    'فك الترميز يعتمد على المتصفح. DRM وبعض الترميزات وحاويات الفيديو تفشل برسالة صريحة.',
  tool_split_a_recording_on_silence_rules_item_5:
    'تصدّر ملفات كثيرة في ZIP. لا تخيط ملفاً واحداً أقصر، ولا تقسم بمدة ثابتة، ولا تتبع cue، ولا تزيل ضوضاء، ولا تكتم فيديو، ولا تجلب YouTube.',
  tool_split_a_recording_on_silence_rules_title: 'قواعد تتوقعها',
  tool_split_a_recording_on_silence_sample: 'تحميل مثال',
  tool_split_a_recording_on_silence_split: 'تقسيم عند الصمت',
  tool_split_a_recording_on_silence_status_done: 'تم.',
  tool_split_a_recording_on_silence_threshold: 'عتبة الصمت (dB)',
  tool_split_a_recording_on_silence_threshold_hint: 'الافتراضي −40 dB. الأقرب إلى 0 يعامل قدراً أكبر من الملف كصمت.',
  tool_split_a_recording_on_silence_title: 'قسّم تسجيلاً عند الصمت',
  tool_split_a_recording_on_silence_usecase_1:
    'محاضرة بوقفات فصول: كل فصل ملف في ZIP دون تقطيع بمدة متساوية.',
  tool_split_a_recording_on_silence_usecase_2:
    'مقابلة: الإجابات مقاطع منفصلة يمكن وسمها لاحقاً.',
  tool_split_a_recording_on_silence_usecase_3:
    'شريط مختلط بفجوات بين المقاطع بلا ورقة cue: فصل التسجيل عند الوقفات يكفي.',
  tool_split_a_recording_on_silence_usecases_title: 'يناسبك إن كنت',
  tool_split_a_recording_on_silence_why_choose_body:
    'مبنية لـ ZIP من مقاطع مقطوعة عند منتصف الوقفة، مع إعدادات كلام / محاضرة / ألبوم ظاهرة في الصفحة.',
  tool_split_a_recording_on_silence_why_choose_item_1:
    'تقطع عند منتصف الفجوات الهادئة الطويلة وتعبئ ملفات كثيرة في ZIP؛ لا تخيط ملفاً واحداً أقصر.',
  tool_split_a_recording_on_silence_why_choose_item_2:
    'كلام (−40 dB / 1.0 s / 0.3 s أقل طول للمقطع) يتجنب تقطيع الأنفاس؛ محاضرة وألبوم مسمّيان في الصفحة.',
  tool_split_a_recording_on_silence_why_choose_item_3:
    'الملف يبقى في تبويب المتصفح هذا ولا يُرفع إلى خادم؛ JSZip و lamejs يُحمَّلان فقط عند النقر على تنزيل ZIP.',
  tool_split_a_recording_on_silence_why_choose_item_4:
    'الملفات الأكبر من الحد وأكثر من 50 مقطعاً تُرفض قبل ZIP مبتور، بدل وعد بـ 1 GB يُسقط التبويب.',
  tool_split_a_recording_on_silence_why_choose_title: 'لماذا تستخدم قسّم تسجيلاً عند الصمت هنا',
};
export default ar;
