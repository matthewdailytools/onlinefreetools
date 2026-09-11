/**
 * i18n tool shard (split-a-disc-image-with-a-cue-sheet / ar).
 * عنوان المهمة؛ تقسيم ألبوم cue في الوصف والأسئلة.
 */
import type { SiteLangDict } from '../../../types';

/** نصوص عربية موجّهة للبحث: قسّم صورة قرص بملف cue. */
const ar: SiteLangDict = {
  tool_split_a_disc_image_with_a_cue_sheet_advanced: 'إعدادات متقدمة (اختياري)',
  tool_split_a_disc_image_with_a_cue_sheet_article:
    'في هذا التبويب قسّم صورة قرص بملف cue: افتح الصورة وملف ‎.cue، اضغط «تقسيم المقاطع» ثم «تنزيل ZIP». القَطع يتبع INDEX 01 (75 إطارًا في الثانية). تبقى الملفات على جهازك ولا تُرفع إلى خادم.',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate: 'معدل بت MP3',
  tool_split_a_disc_image_with_a_cue_sheet_bitrate_hint: 'الافتراضي 128 كيلوبت/ث. يُستخدم فقط عندما يكون ZIP بصيغة MP3.',
  tool_split_a_disc_image_with_a_cue_sheet_choose_file: 'اختر صورة قرص وملف ‎.cue',
  tool_split_a_disc_image_with_a_cue_sheet_clear: 'مسح',
  tool_split_a_disc_image_with_a_cue_sheet_clip_download: 'تنزيل المقطع',
  tool_split_a_disc_image_with_a_cue_sheet_clip_play: 'تشغيل المقطع',
  tool_split_a_disc_image_with_a_cue_sheet_cue_file: 'ورقة cue',
  tool_split_a_disc_image_with_a_cue_sheet_desc:
    'اقطع صورة محلية عند INDEX 01 ونزّل مقاطع بأسماء في ZIP — تبقى على الجهاز، بلا رفع.',
  tool_split_a_disc_image_with_a_cue_sheet_description:
    'قسّم صورة قرص بملف cue على جهازك: قَطع INDEX 01، مقاطع بأسماء داخل ZIP، والملفات لا تُرفع. الخطوات: افتح الصورة و‎.cue (أو الصق الورقة)، «تقسيم المقاطع»، «تنزيل ZIP». مثال: عيّنة 6.00 ث بـ INDEX 01 عند 0 / 2 / 4 ث تعطي Intro / Middle / Outro بطول 2.00 ث. البحث عن فاصل cue أو تقسيم flac cue أو استخراج مقاطع من cue هو العمل نفسه. ليست تقطيعًا عند الصمت ولا أجزاء متساوية ولا فصول يوتيوب.',
  tool_split_a_disc_image_with_a_cue_sheet_download_zip: 'تنزيل ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_drop_hint:
    'أسقط الملفين معًا: WAV أو FLAC أو MP3 أو BIN مع ‎.cue. المعالجة تبقى في هذا التبويب.',
  tool_split_a_disc_image_with_a_cue_sheet_empty: 'أضف أولًا الصورة وورقة cue.',
  tool_split_a_disc_image_with_a_cue_sheet_empty_audio: 'أضف صورة القرص المطابقة (WAV أو FLAC أو MP3 أو BIN).',
  tool_split_a_disc_image_with_a_cue_sheet_empty_cue: 'أضف ملف ‎.cue أو الصق ورقة cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_ape:
    'هذا المتصفح لا يفك تشفير APE. حوّل الصورة إلى WAV أو FLAC، احتفظ بنفس ورقة cue، ثم «تقسيم المقاطع» مجددًا.',
  tool_split_a_disc_image_with_a_cue_sheet_err_caps:
    'الصورة تجاوزت حد هذا الجهاز (نحو 80 ميغابايت / 30 دقيقة على سطح المكتب، 30 ميغابايت / 10 دقائق على شاشة ضيقة). ملف ‎.bin لقرص 700 ميغابايت لا يتسع هنا.',
  tool_split_a_disc_image_with_a_cue_sheet_err_cue_parse:
    'هذا النص ليس ورقة cue صالحة. يلزم أسطر TRACK وINDEX 01 بصيغة MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_data:
    'هذه الورقة تصف قرص بيانات (مسارات MODE) لا صورة صوت. تُقطع مسارات AUDIO فقط.',
  tool_split_a_disc_image_with_a_cue_sheet_err_decode:
    'تعذّر على المتصفح فك هذه الصورة. جرّب WAV أو FLAC أو ملفًا بلا DRM. لا يُفك APE هنا.',
  tool_split_a_disc_image_with_a_cue_sheet_err_empty: 'لا شيء للمعالجة. حمّل ملفات أو المثال أولًا.',
  tool_split_a_disc_image_with_a_cue_sheet_err_lame: 'فشل تحميل مرمّز MP3. ابقَ في التبويب وأعد «تنزيل ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_err_multi_file:
    'هذه الورقة تسرد أكثر من FILE. هذا التخطيط ملف لكل مقطع أصلًا؛ لا شيء لتقسيمه هنا.',
  tool_split_a_disc_image_with_a_cue_sheet_err_no_index:
    'لا توجد أزمنة INDEX 01. فاصل cue يحتاج بدايات MM:SS:FF.',
  tool_split_a_disc_image_with_a_cue_sheet_err_too_many:
    'أكثر من 50 مقطعًا. الصفحة ترفض القص لا الاجتزاء. استخدم ورقة أقصر أو shnsplit على الحاسوب.',
  tool_split_a_disc_image_with_a_cue_sheet_err_video:
    'هذه الصفحة لا تقبل فيديو كمدخل رئيسي. تقسّم صورة صوت بملف cue.',
  tool_split_a_disc_image_with_a_cue_sheet_err_zip: 'فشل تحميل مكتبة ZIP. ابقَ في التبويب وأعد «تنزيل ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_example:
    'تحميل مثال يبني صورة 6.00 ث (440 / 550 / 660 هرتز، ثانيتان لكل نغمة) وورقة INDEX 01 عند 00:00:00 و00:02:00 و00:04:00 (Intro Tone وMiddle Tone وOutro Tone). «تقسيم المقاطع» يعطي ثلاثة ملفات بطول 2.00 ث. «تنزيل ZIP» يكتب 01 Intro Tone.wav ما لم تختر MP3 في الإعدادات المتقدمة.',
  tool_split_a_disc_image_with_a_cue_sheet_example_title: 'مثال',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a1:
    'لا. التحليل وفك التشفير والقَطع وZIP تجري في هذا التبويب. تُحمَّل السكربتات من هذا الموقع. الصورة والورقة لا تُرسلان إلى خوادمنا.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a2:
    'نعم. فاصل cue وتقسيم flac cue وsplit ape cue واستخراج مقاطع من cue هي هذه الأداة: اتبع INDEX 01 ونزّل ZIP بأسماء. بحث APE نفس المهمة، لكن ‎.ape لا يُفك — حوّل إلى WAV/FLAC وأبقِ الورقة.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a3:
    'INDEX 01 بداية المقطع (MM:SS:FF، 75 إطارًا/ث). INDEX 00 يعلّم فراغًا سابقًا؛ يُعرض والقَطع الافتراضي يبقى 01. آخر مقطع يمتد حتى نهاية الصورة.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a4:
    'لا. القَطع عند الصمت أو حسب المدة صفحتان أخريان. هنا ورقة cue فقط. فصول يوتيوب بلا FILE/INDEX خارج النطاق.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a5:
    'الصق النص تحت منطقة الإفلات إن لم يكن لديك ‎.cue. إسقاط ‎.cue يجري التحليل نفسه.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a6:
    'داخل ZIP الأسماء {nn} {title}.wav (أو ‎.mp3). يمكن تنزيل مقطع واحد من القائمة. السقف 50؛ فوقه رفض.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a7:
    'لا. لا إزالة ضوضاء ولا كتم فيديو ولا أجزاء متساوية ولا قص يدوي ولا سحب يوتيوب ولا ISO بيانات. استخدم صورة صوت تملك حق معالجتها.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_a8:
    'سطح المكتب: نحو 80 ميغابايت أو 30 دقيقة. الشاشة الضيقة: نحو 30 ميغابايت أو 10 دقائق. ‎.bin لقرص 700 ميغابايت يُرفض. التجاوز يتوقف قبل فك التشفير.',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q1: 'هل تُرفع صورة القرص وورقة cue؟',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q2: 'بحثت عن فاصل cue أو تقسيم flac cue. هل هذه أداة أخرى؟',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q3: 'ما الفرق بين INDEX 01 وINDEX 00؟',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q4: 'هل يقطع عند الصمت أو حسب المدة أو فصول يوتيوب؟',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q5: 'هل ألصق ورقة cue بدل ملف ‎.cue؟',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q6: 'كيف تُسمّى الملفات وكم مقطعًا كحد أقصى؟',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q7: 'فك APE أو تقسيم فيديو أو أجزاء متساوية أو سحب يوتيوب؟',
  tool_split_a_disc_image_with_a_cue_sheet_faq_q8: 'ما أكبر صورة يمكن معالجتها؟',
  tool_split_a_disc_image_with_a_cue_sheet_format: 'الصيغة داخل ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_format_hint:
    'WAV هو PCM بلا فقدان. مرمّز MP3 يُحمَّل فقط عند «تنزيل ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_format_mp3: 'MP3',
  tool_split_a_disc_image_with_a_cue_sheet_format_wav: 'WAV',
  tool_split_a_disc_image_with_a_cue_sheet_how_body:
    'اقرأ أزمنة INDEX 01 من ورقة cue، اقطع صورة القرص عندها، ونزّل ZIP بمقاطع مسماة دون رفع.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_1: 'افتح صورة قرص وملف ‎.cue (أو «تحميل مثال»).',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_2: 'أو الصق ورقة cue إن كان النص فقط متاحًا.',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_3: 'اضغط «تقسيم المقاطع».',
  tool_split_a_disc_image_with_a_cue_sheet_how_item_4: 'اضغط «تنزيل ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_how_title: 'طريقة العمل',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decode: 'فك تشفير الصورة في هذا التبويب…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_decoded:
    'قُرئت الورقة وفُكت الصورة. العلامات البيضاء بدايات INDEX 01. اضغط «تقسيم المقاطع» إن كانت القائمة صحيحة.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_elapsed_tpl: 'مرّ {s} ث',
  tool_split_a_disc_image_with_a_cue_sheet_hud_encode: 'ترميز مقاطع MP3…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_hint: 'أصلح الورقة أو الصورة ثم «تقسيم المقاطع» مجددًا.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_fail_title: 'توقف تقسيم cue',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next: 'انتهى. الخطوة التالية: تنزيل ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_next_zip: 'انتهى. يفترض أن يبدأ تنزيل ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pack: 'تعبئة المقاطع في ZIP…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_parse: 'قراءة ورقة cue…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_pct_tpl: '{pct}%',
  tool_split_a_disc_image_with_a_cue_sheet_hud_split: 'القَطع عند INDEX 01…',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_decode: 'فك',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_pack: 'تعبئة',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_parse: 'تحليل',
  tool_split_a_disc_image_with_a_cue_sheet_hud_step_split: 'تقسيم',
  tool_split_a_disc_image_with_a_cue_sheet_hud_title: 'تقدّم تقسيم cue',
  tool_split_a_disc_image_with_a_cue_sheet_hud_working: 'بدء…',
  tool_split_a_disc_image_with_a_cue_sheet_image_file: 'صورة القرص',
  tool_split_a_disc_image_with_a_cue_sheet_meta_tpl: '{name} · {dur}ث · {rate} هرتز · {ch} قناة · {tracks} INDEX 01',
  tool_split_a_disc_image_with_a_cue_sheet_paste_hint:
    'الصق ورقة cue كاملة (FILE وTRACK وINDEX 01). ليست قائمة فصول يوتيوب.',
  tool_split_a_disc_image_with_a_cue_sheet_paste_summary: 'أو الصق ورقة cue',
  tool_split_a_disc_image_with_a_cue_sheet_pause: 'إيقاف مؤقت',
  tool_split_a_disc_image_with_a_cue_sheet_play: 'تشغيل',
  tool_split_a_disc_image_with_a_cue_sheet_preview_hint: 'العلامات البيضاء بدايات INDEX 01. التشغيل يسمع الصورة كلها.',
  tool_split_a_disc_image_with_a_cue_sheet_result_tpl: '{orig}ث · {count} مقطع: {list}. يمكن تنزيل ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_body:
    'كل INDEX 01 هو mm:ss:ff عند 75 إطارًا/ث: t = mm×60 + ss + ff/75. المقطع n يمتد إلى INDEX 01 التالي، والأخير حتى النهاية. PCM ذو 16 بت لـ WAV/BIN يُقطع بإزاحة البايت. الصيغ الأخرى تستخدم فاك المتصفح. يُبنى ZIP هنا.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_1:
    'القَطع هو INDEX 01. INDEX 00 يظهر كفراغ سابق وليس القَطع الافتراضي. الأزمنة إطارات قرص مضغوط لا ملي ثوانٍ.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_2:
    'حد سطح المكتب نحو 80 ميغابايت أو 30 دقيقة؛ الشاشة الضيقة نحو 30 ميغابايت أو 10 دقائق. التجاوز يُرفض لا يُجتزأ. أكثر من 50 مقطعًا يُرفض. ‎.bin بحجم 700 ميغابايت لا يتسع.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_3:
    'تبقى الملفات على جهازك ولا تُرفع. JSZip ومرمّز MP3 يُحمَّلان من هذا الموقع فقط بعد «تنزيل ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_4:
    'WAVE وBINARY (‎.bin، قطاعات CDDA بطول 2352 بايت) يمكن قطعهما بلا ترميز كامل. MP3/FLAC/M4A تحتاج فاك المتصفح. APE/TTA/WavPack تفشل برسالة صريحة.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_item_5:
    'FILE واحد مع INDEX 01. لا صمت ولا مدة متساوية ولا فصول يوتيوب ولا حجم ولا كتم فيديو ولا سحب يوتيوب. عدة FILE يعني التقسيم تم مسبقًا.',
  tool_split_a_disc_image_with_a_cue_sheet_rules_title: 'قواعد متوقعة',
  tool_split_a_disc_image_with_a_cue_sheet_sample: 'تحميل مثال',
  tool_split_a_disc_image_with_a_cue_sheet_split: 'تقسيم المقاطع',
  tool_split_a_disc_image_with_a_cue_sheet_status_done: 'تم.',
  tool_split_a_disc_image_with_a_cue_sheet_title: 'قسّم صورة قرص بملف cue',
  tool_split_a_disc_image_with_a_cue_sheet_track_row_tpl: '{n} · {title} · {dur}ث ({start}s–{end}s)',
  tool_split_a_disc_image_with_a_cue_sheet_tracks_title: 'مقاطع جاهزة لـ ZIP',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_1:
    'قسّم نسخة FLAC+CUE من Exact Audio Copy أو XLD إلى مقاطع بأسماء دون تثبيت shnsplit.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_2:
    'اقطع صورة WAV أو BIN لوجه فينيل أو قرص مضغوط مع ورقة cue ثم خذ ZIP.',
  tool_split_a_disc_image_with_a_cue_sheet_usecase_3:
    'استخرج مقاطع من تسجيل DJ جاء بورقة cue عبر INDEX 01 بدل تخمين فجوات الصمت.',
  tool_split_a_disc_image_with_a_cue_sheet_usecases_title: 'حالات مناسبة',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_body:
    'مبني لقَطع INDEX 01 وZIP بأسماء، وواضح بشأن APE وملفات ‎.bin الضخمة.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_1:
    'يقطع عند INDEX 01 (75 إطارًا/ث) ويسمّي ZIP من TITLE، لا شرائح ثوانٍ متساوية ولا فجوات صمت.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_2:
    'منطقة واحدة للصورة و‎.cue مع لصق الورقة نفسها — ليست محرر فصول يوتيوب متنكرًا.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_3:
    'تبقى الملفات في تبويب المتصفح ولا تُرفع؛ JSZip وlamejs يُحمَّلان فقط عند «تنزيل ZIP».',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_item_4:
    'يُرفض فك APE وأوراق FILE المتعددة والصور الضخمة بلغة صريحة، لا وعد بـ 700 ميغابايت يُسقط التبويب.',
  tool_split_a_disc_image_with_a_cue_sheet_why_choose_title: 'لماذا تستخدم قسّم صورة قرص بملف cue',
};
export default ar;
