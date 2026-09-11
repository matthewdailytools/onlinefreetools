/**
 * i18n tool shard (make-a-seamless-audio-loop / ar).
 * H1: حلقة صوتية سلسة؛ اللوب / التداخل في الأسئلة.
 */
import type { SiteLangDict } from '../../../types';

/** العربية: صنع حلقة صوتية سلسة ثم التصدير. */
const ar: SiteLangDict = {
  tool_make_a_seamless_audio_loop_advanced: 'إعدادات متقدمة (اختياري)',
  tool_make_a_seamless_audio_loop_article:
    'اصنع حلقة صوتية سلسة في هذا التبويب: افتح ملفًا محليًا، حدّد البداية والنهاية، اضبط التداخل، اضغط اصنع الحلقة ثم تصدير WAV أو تصدير MP3. يُمزج الذيل في الرأس حتى لا يُسمع فرقعة عند الوصل. يبقى الملف على جهازك ولا يُرفع إلى خادم.',
  tool_make_a_seamless_audio_loop_bitrate: 'معدل بت MP3',
  tool_make_a_seamless_audio_loop_bitrate_hint: 'الافتراضي 128 كيلوبت/ث. يُستخدم فقط عند تصدير MP3.',
  tool_make_a_seamless_audio_loop_choose_file: 'اختر ملفًا صوتيًا',
  tool_make_a_seamless_audio_loop_clear: 'مسح',
  tool_make_a_seamless_audio_loop_crossfade: 'تداخل (مللي ثانية)',
  tool_make_a_seamless_audio_loop_crossfade_hint:
    'الافتراضي 50 مللي ثانية. 20 للطبل؛ 200–500 للوسادات والطنين والأجواء.',
  tool_make_a_seamless_audio_loop_desc:
    'اصنع حلقة صوتية سلسة على جهازك: أمزج نهاية المقطع المحلي ببدايته ثم صدّر WAV أو MP3 دون رفع إلى خادم.',
  tool_make_a_seamless_audio_loop_description:
    'اصنع حلقة صوتية سلسة على جهازك: تداخل نهاية مقطع محلي مع بدايته ثم نزّل WAV أو MP3 — الملف لا يُرفع إلى خادم. الخطوات: افتح الملف، حدّد البداية والنهاية، اضبط التداخل (50 مللي ثانية)، اصنع الحلقة، شغّل لسماع الوصل، تصدير WAV أو تصدير MP3. مثال: 1.00–3.00 ث من نغمة 5 ث مع 50 مللي ثانية بقوة متساوية يصبح نحو 1.95 ث. تكرار الصوت، لوب صوتي، حلقة صوتية أو تداخل تلاشي هو العمل نفسه. ليست محرر موجة كاملًا؛ لا تمزج أغنيتين ولا تجلب يوتيوب.',
  tool_make_a_seamless_audio_loop_disclaimer:
    'يجب أن تملك حق معالجة الملف. الصفحة لا تمنح تراخيص موسيقية ولا تجلب البث.',
  tool_make_a_seamless_audio_loop_drop_hint: 'أو أفلت WAV أو MP3 أو M4A أو OGG هنا. المعالجة تبقى في هذا التبويب.',
  tool_make_a_seamless_audio_loop_empty: 'اختر ملفًا صوتيًا أولًا.',
  tool_make_a_seamless_audio_loop_end: 'النهاية (ثوانٍ)',
  tool_make_a_seamless_audio_loop_equal_power: 'تداخل بقوة متساوية',
  tool_make_a_seamless_audio_loop_equal_power_hint:
    'مفعّل افتراضيًا حتى لا ينخفض علو الوصل. عطّله لمزج خطي.',
  tool_make_a_seamless_audio_loop_err_bake:
    'الناتج الملصوق سيتجاوز نحو 3 دقائق. خفّض التكرارات أو قصّر المقطع.',
  tool_make_a_seamless_audio_loop_err_caps:
    'الملف فوق حد هذا الجهاز (نحو 40 ميغابايت / 20 دقيقة على سطح المكتب، 20 ميغابايت / 8 دقائق على شاشة ضيقة). قصّه في مكان آخر أو استخدم ملفًا أقصر.',
  tool_make_a_seamless_audio_loop_err_decode:
    'لم يستطع هذا المتصفح فك الملف. جرّب WAV أو MP3 أو مقطعًا بلا DRM.',
  tool_make_a_seamless_audio_loop_err_empty: 'لا شيء للتكرار. حمّل ملفًا أو المثال.',
  tool_make_a_seamless_audio_loop_err_fade:
    'يجب أن يكون التداخل أقصر من المقطع. خفّض المللي ثانية أو أطِل البداية–النهاية.',
  tool_make_a_seamless_audio_loop_err_lame:
    'فشل تحميل مرمّز MP3. ابقَ في هذا التبويب واضغط تصدير MP3 مرة أخرى.',
  tool_make_a_seamless_audio_loop_err_range: 'يجب أن تأتي النهاية بعد البداية، داخل المدة بعد الفك.',
  tool_make_a_seamless_audio_loop_err_video:
    'هذه الصفحة لا تقبل الفيديو مدخلًا رئيسيًا. استخرج الصوت أولًا ثم اصنع الحلقة.',
  tool_make_a_seamless_audio_loop_example:
    'تحميل مثال يبني نغمة 5.00 ث، يضع البداية 1.00 والنهاية 3.00، يستخدم 50 مللي ثانية بقوة متساوية، ثم «اصنع الحلقة» يكتب نحو 1.95 ث (دورة واحدة). تصدير WAV يكتب PCM؛ تصدير MP3 يستخدم 128 كيلوبت/ث ما لم تغيّر الإعدادات المتقدمة.',
  tool_make_a_seamless_audio_loop_example_title: 'مثال',
  tool_make_a_seamless_audio_loop_export_mp3: 'تصدير MP3',
  tool_make_a_seamless_audio_loop_export_wav: 'تصدير WAV',
  tool_make_a_seamless_audio_loop_faq_a1:
    'لا. الفك واللف يجريان في هذا التبويب. تُحمَّل السكربتات من هذا الموقع. لا يُرسل الملف إلى خوادمنا.',
  tool_make_a_seamless_audio_loop_faq_a2:
    'لا. تكرار الصوت، لوب صوتي، حلقة صوتية، صانع لوب أو تداخل تلاشي هو هذه الأداة: حدّد مقطعًا، أمزج الوصل، ثم صدّر WAV أو MP3.',
  tool_make_a_seamless_audio_loop_faq_a3:
    'التداخل يمزج ذيل المقطع في رأسه. الافتراضي 50 مللي ثانية بقوة متساوية. نحو 20 للطبل؛ 200–500 للوسادات.',
  tool_make_a_seamless_audio_loop_faq_a4:
    'الدورة المصدَّرة أقصر من البداية–النهاية بمقدار التداخل لأن التراكب يُمزج مرة واحدة.',
  tool_make_a_seamless_audio_loop_faq_a5:
    'WAV لمحرك لعبة يعيد الملف. MP3 أصغر (128 كيلوبت/ث) إن لم يعرف تطبيق البث التكرار؛ يُحمَّل المرمّز فقط عند تصدير MP3.',
  tool_make_a_seamless_audio_loop_faq_a6:
    'التكرارات افتراضيًا 1. في الإعدادات المتقدمة الصق 4 أو 8 نسخ. ما يزيد على نحو 3 دقائق يُرفض. ليست مولّد عشر ساعات.',
  tool_make_a_seamless_audio_loop_faq_a7:
    'لا تمزج أغنيتين، ليست محرر صوت كاملًا على الويب، لا تكتب نغمة M4A، لا تبحث عن نقطة الحلقة وحدها ولا تجلب يوتيوب.',
  tool_make_a_seamless_audio_loop_faq_a8:
    'سطح المكتب: نحو 40 ميغابايت أو 20 دقيقة. الشاشة الضيقة: نحو 20 ميغابايت أو 8 دقائق. فوق الحد رفض، بلا قص صامت.',
  tool_make_a_seamless_audio_loop_faq_q1: 'هل يُرفع الصوت إلى خادم؟',
  tool_make_a_seamless_audio_loop_faq_q2: 'بحثت عن تكرار الصوت أو لوب صوتي أو صانع لوب. هل هذه أداة أخرى؟',
  tool_make_a_seamless_audio_loop_faq_q3: 'كيف يزيل التداخل الفرقعة عند الوصل؟',
  tool_make_a_seamless_audio_loop_faq_q4: 'لماذا التصدير أقصر من المقطع الذي حدّدته؟',
  tool_make_a_seamless_audio_loop_faq_q5: 'أصدّر WAV للعبة أم MP3 للبث؟',
  tool_make_a_seamless_audio_loop_faq_q6: 'تطبيق البث لا يكرر الملف. هل ألصق عدة دورات؟',
  tool_make_a_seamless_audio_loop_faq_q7: 'هل هذا مزج أغنيتين أو نغمة هاتف أو بحث ذكي عن نقطة الحلقة؟',
  tool_make_a_seamless_audio_loop_faq_q8: 'ما أكبر ملف يمكن معالجته؟',
  tool_make_a_seamless_audio_loop_how_body:
    'حدّد المقطع المراد تكراره، أمزج النهاية بالبداية بتداخل، ثم نزّل WAV أو MP3 دون رفع الملف.',
  tool_make_a_seamless_audio_loop_how_item_1: 'افتح ملفًا صوتيًا (أو اضغط تحميل مثال).',
  tool_make_a_seamless_audio_loop_how_item_2:
    'انقر أو اسحب الموجة (أو اكتب البداية والنهاية). غيّر التداخل إن لم تناسب 50 مللي ثانية (20 / 50 / 200 / 500).',
  tool_make_a_seamless_audio_loop_how_item_3: 'اضغط اصنع الحلقة.',
  tool_make_a_seamless_audio_loop_how_item_4: 'اضغط تشغيل لسماع الوصل، ثم تصدير WAV أو تصدير MP3.',
  tool_make_a_seamless_audio_loop_how_title: 'كيف يعمل',
  tool_make_a_seamless_audio_loop_hud_decode: 'جارٍ فك الملف في هذا التبويب…',
  tool_make_a_seamless_audio_loop_hud_decoded: 'تم الفك. اضبط البداية والنهاية والتداخل ثم اضغط اصنع الحلقة.',
  tool_make_a_seamless_audio_loop_hud_elapsed_tpl: 'مرت {s} ث',
  tool_make_a_seamless_audio_loop_hud_encode: 'جارٍ ترميز MP3…',
  tool_make_a_seamless_audio_loop_hud_fail_hint: 'أصلح الملف أو الأوقات أو التداخل ثم اصنع الحلقة مجددًا.',
  tool_make_a_seamless_audio_loop_hud_fail_title: 'توقف اصنع الحلقة',
  tool_make_a_seamless_audio_loop_hud_loop: 'جارٍ لفّ الذيل في الرأس…',
  tool_make_a_seamless_audio_loop_hud_next: 'انتهى. التالي: تشغيل الوصل ثم تصدير WAV أو تصدير MP3.',
  tool_make_a_seamless_audio_loop_hud_next_mp3: 'انتهى. يفترض أن يبدأ تنزيل MP3.',
  tool_make_a_seamless_audio_loop_hud_pct_tpl: '{pct}%',
  tool_make_a_seamless_audio_loop_hud_step_decode: 'فك',
  tool_make_a_seamless_audio_loop_hud_step_encode: 'ترميز',
  tool_make_a_seamless_audio_loop_hud_step_loop: 'حلقة',
  tool_make_a_seamless_audio_loop_hud_title: 'تقدم الحلقة',
  tool_make_a_seamless_audio_loop_hud_working: 'بدء…',
  tool_make_a_seamless_audio_loop_make: 'اصنع الحلقة',
  tool_make_a_seamless_audio_loop_meta_tpl: '{name} · {dur}ث · {rate} هرتز · {ch} قناة',
  tool_make_a_seamless_audio_loop_pause: 'إيقاف مؤقت',
  tool_make_a_seamless_audio_loop_play: 'تشغيل',
  tool_make_a_seamless_audio_loop_preview_hint:
    'انقر أو اسحب الموجة لتعيين البداية والنهاية. بعد اصنع الحلقة يكرر تشغيل الناتج لتسمع الوصل.',
  tool_make_a_seamless_audio_loop_repeats: 'التكرارات (نسخ ملصوقة)',
  tool_make_a_seamless_audio_loop_repeats_hint:
    'دورة واحدة افتراضيًا إن كان المشغّل يكرر الملف. استخدم 4 أو 8 إن لم يفعل. ما يزيد على نحو 3 دقائق يُرفض.',
  tool_make_a_seamless_audio_loop_result_tpl:
    'الحلقة {dur}ث من {start}–{end}ث بتداخل {fade} مللي ثانية ({n} تكرار). التصدير جاهز.',
  tool_make_a_seamless_audio_loop_rules_body:
    'يُنسخ المقطع ثم يمزج منحنى القوة المتساوية (أو الخطي) آخر عيّنات التلاشي مع الأولى. طول الناتج = المقطع ناقص التلاشي. التكرارات تلصق هذه الدورة. WAV هو PCM 16 بت. MP3 هو CBR.',
  tool_make_a_seamless_audio_loop_rules_item_1:
    'حد سطح المكتب نحو 40 ميغابايت أو 20 دقيقة؛ الشاشة الضيقة نحو 20 ميغابايت أو 8 دقائق. فوق ذلك رفض لا قص.',
  tool_make_a_seamless_audio_loop_rules_item_2:
    'تبقى الملفات على جهازك؛ لا تُرفع إلى خادم. يُحمَّل مرمّز MP3 من هذا الموقع فقط بعد تصدير MP3.',
  tool_make_a_seamless_audio_loop_rules_item_3:
    'يجب أن يكون التداخل أقصر من المقطع. الدورة المصدَّرة أقصر بمقدار هذا التراكب. القوة المتساوية هي المنحنى الافتراضي.',
  tool_make_a_seamless_audio_loop_rules_item_4:
    'الفك يعتمد على المتصفح. DRM وبعض الترميزات وحاويات الفيديو تفشل برسالة واضحة.',
  tool_make_a_seamless_audio_loop_rules_item_5:
    'لا تمزج أغنيتين، لا تكتب M4A، لا تقيس BPM، لا تبحث عن نقطة الحلقة ولا تجلب يوتيوب. ملف واحد، مقطع واحد، حلقة واحدة.',
  tool_make_a_seamless_audio_loop_rules_title: 'قواعد متوقعة',
  tool_make_a_seamless_audio_loop_sample: 'تحميل مثال',
  tool_make_a_seamless_audio_loop_start: 'البداية (ثوانٍ)',
  tool_make_a_seamless_audio_loop_status_done: 'تم.',
  tool_make_a_seamless_audio_loop_title: 'اصنع حلقة صوتية سلسة',
  tool_make_a_seamless_audio_loop_usecase_1:
    'حوّل فرشة لعبة لثانيتين إلى حلقة صوتية سلسة وصدّر WAV لمحرك يعيد الملف.',
  tool_make_a_seamless_audio_loop_usecase_2:
    'فرشة بث: حدّد الإيقاع، أبقِ تداخل 50 مللي ثانية، الصق 8 دورات في الإعدادات المتقدمة، صدّر MP3.',
  tool_make_a_seamless_audio_loop_usecase_3:
    'نعّم حلقة أجواء أو طنين بتداخل 200–500 مللي ثانية حتى يختفي الوصل.',
  tool_make_a_seamless_audio_loop_usecases_title: 'متى يناسب',
  tool_make_a_seamless_audio_loop_why_choose_body:
    'مبنية لعملية لفّ واحدة وتنزيل واحد، بتداخل تسمعه وحدود مكتوبة في الصفحة.',
  tool_make_a_seamless_audio_loop_why_choose_item_1:
    'الفك واللف يبقيان في هذا التبويب؛ تصدير MP3 أول تحميل لمرمّز.',
  tool_make_a_seamless_audio_loop_why_choose_item_2:
    'تداخل القوة المتساوية مفعّل؛ رقائق 20 / 50 / 200 / 500 مللي ثانية تغطي الطبل والوسادات.',
  tool_make_a_seamless_audio_loop_why_choose_item_3:
    'بعد اصنع الحلقة يكرر تشغيل الناتج حتى تقيّم الوصل قبل التنزيل.',
  tool_make_a_seamless_audio_loop_why_choose_item_4:
    'الملفات الأضخم من الحد والناتج الملصوق أطول من نحو 3 دقائق تُرفض بدل القص الصامت.',
  tool_make_a_seamless_audio_loop_why_choose_title: 'لماذا تستخدم اصنع حلقة صوتية سلسة',
  tool_make_a_seamless_audio_loop_zerocross: 'اطوِ البداية والنهاية إلى أقرب عبور صفري',
  tool_make_a_seamless_audio_loop_zerocross_hint:
    'مفعّل افتراضيًا. يثبّت الحواف قبل اللف. عطّله إن احتجت حوافًا دقيقة بالعيّنة.',
};
export default ar;
