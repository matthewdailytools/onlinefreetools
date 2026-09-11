/**
 * i18n tool shard (remove-silence-from-a-recording / ar).
 * H1: إزالة الصمت من تسجيل.
 */
import type { SiteLangDict } from '../../../types';

/** العربية: إزالة الصمت / حذف الفجوات، ملف واحد. */
const ar: SiteLangDict = {
  tool_remove_silence_from_a_recording_advanced: 'إعدادات متقدمة (اختياري)',
  tool_remove_silence_from_a_recording_article:
    'أزل الصمت من تسجيل في هذا التبويب: افتح ملفًا محليًا، اضغط إزالة الصمت، ثم صدّر WAV أو MP3. تُقطع الوقفات الطويلة وتُخاط الكلام في ملف أقصر، دون رفع إلى خادم.',
  tool_remove_silence_from_a_recording_bitrate: 'معدل بت MP3',
  tool_remove_silence_from_a_recording_bitrate_hint: 'الافتراضي 128 kbps. يُستخدم فقط عند تصدير MP3.',
  tool_remove_silence_from_a_recording_choose_file: 'اختر ملف صوت',
  tool_remove_silence_from_a_recording_clear: 'مسح',
  tool_remove_silence_from_a_recording_desc:
    'احذف الفجوات الصامتة من تسجيل محلي ونزّل WAV أو MP3 أقصر؛ يبقى على جهازك دون رفع إلى خادم.',
  tool_remove_silence_from_a_recording_description:
    'إزالة الصمت من تسجيل على جهازك: اقطع الوقفات الطويلة، أبقِ ملفًا أقصر، ثم نزّل WAV أو MP3 دون رفع إلى خادم. الخطوات: افتح التسجيل، اضغط إزالة الصمت (−40 dB / 0.5 ث / إبقاء 0.15 ث)، ثم تصدير WAV أو MP3. مثال: عيّنة 5.00 ث فيها فجوتان 1.20 ث تصبح نحو 2.90 ث. قص الصمت وحذف الفجوات الصامتة نفس المهمة. لا ZIP ولا كتم فيديو.',
  tool_remove_silence_from_a_recording_drop_hint: 'أو أفلت WAV أو MP3 أو M4A أو OGG هنا. المعالجة تبقى في هذا التبويب.',
  tool_remove_silence_from_a_recording_empty: 'اختر ملف صوت أولًا.',
  tool_remove_silence_from_a_recording_err_caps:
    'الملف يتجاوز حد هذا الجهاز (نحو 40 MB / 20 دقيقة على سطح المكتب، 20 MB / 8 دقائق على شاشة ضيقة). قصّره أولًا أو استخدم ملفًا أقصر.',
  tool_remove_silence_from_a_recording_err_decode:
    'لم يستطع هذا المتصفح فك الملف. جرّب WAV أو MP3 أو مقطعًا بلا DRM.',
  tool_remove_silence_from_a_recording_err_empty: 'لا شيء للمعالجة. حمّل ملفًا أو المثال.',
  tool_remove_silence_from_a_recording_err_empty_keep:
    'لم يبقَ صوت. اخفض العتبة (أكثر سلبية) أو ارفع أدنى صمت حتى لا يُعامل الكلام كفجوة.',
  tool_remove_silence_from_a_recording_err_lame: 'فشل تحميل مرمّز MP3. ابقَ في هذا التبويب وأعد تصدير MP3.',
  tool_remove_silence_from_a_recording_err_video:
    'هذه الصفحة لا تقبل الفيديو إدخالًا رئيسيًا. تقصّر ملف صوت؛ لا تكتم فيديو ولا تقص لقطات.',
  tool_remove_silence_from_a_recording_example:
    'تحميل مثال يبني نغمة 5.00 ث بفجوتين 1.20 ث (0.80 + 1.20 + 0.80 + 1.20 + 1.00). إزالة الصمت عند −40 dB / 0.5 ث / 0.15 ث تعطي نحو 2.90 ث. WAV يكتب PCM وMP3 يستخدم 128 kbps ما لم تغيّر الإعدادات المتقدمة.',
  tool_remove_silence_from_a_recording_example_title: 'مثال',
  tool_remove_silence_from_a_recording_export_mp3: 'تصدير MP3',
  tool_remove_silence_from_a_recording_export_wav: 'تصدير WAV',
  tool_remove_silence_from_a_recording_faq_a1:
    'لا. الفك والقص يجريان في هذا التبويب. تُحمَّل السكربتات من هذا الموقع. الملف لا يُرفع إلى خوادمنا.',
  tool_remove_silence_from_a_recording_faq_a2:
    'نفس المهمة. إزالة الصمت من الصوت، حذف الفجوات الصامتة، قص الصمت أو إزالة الوقفات الطويلة تعني قطع الفجوات الهادئة وتصدير WAV أو MP3 أقصر واحد.',
  tool_remove_silence_from_a_recording_faq_a3:
    'ابدأ بـ كلام (−40 dB / 0.5 ث / 0.15 ث). غرفة صاخبة: عتبة نحو −30 dB وأدنى صمت نحو 0.8 ث. الاستوديو: لطيف (−50 dB). إن قُطعت نهايات الكلمات فاجعل العتبة أكثر سلبية أو ارفع الأدنى.',
  tool_remove_silence_from_a_recording_faq_a4:
    'القص اليدوي يحدد بداية ونهاية. هنا تُحذف فجوات الوسط أيضًا ثم يُخاط ملف واحد. إن أردت الطرفين يدويًا فاستخدم أداة القص.',
  tool_remove_silence_from_a_recording_faq_a5:
    'لا. التقسيم عند الصمت إلى ملفات كثيرة أو ZIP مهمة أخرى. هنا يُصدَّر ملف واحد دائمًا.',
  tool_remove_silence_from_a_recording_faq_a6:
    'لا. تقليل الضجيج لا يقصّر المدة. حذف «ام» يحتاج تفريغًا. كتم فيديو أو سحب يوتيوب خارج النطاق. استخدم صوتًا تملك حق معالجته.',
  tool_remove_silence_from_a_recording_faq_a7:
    'نفس المهمة ببرنامج مختلف. Truncate Silence في Audacity يقصّر المقاطع تحت عتبة لمدة كافية. هنا في المتصفح؛ ليست دليل تثبيت.',
  tool_remove_silence_from_a_recording_faq_a8:
    'سطح المكتب: نحو 40 MB أو 20 دقيقة. الشاشة الضيقة: نحو 20 MB أو 8 دقائق. ما فوق ذلك يُرفض قبل الفك. الموسيقى الهادئة قد تُقطع خطأ — ارفع أدنى صمت أو لا تستخدم هذه الأداة.',
  tool_remove_silence_from_a_recording_faq_q1: 'هل يُرفع تسجيلي إلى خادم؟',
  tool_remove_silence_from_a_recording_faq_q2: 'بحثت عن إزالة الصمت أو حذف الفجوات. هل هي أداة أخرى؟',
  tool_remove_silence_from_a_recording_faq_q3: 'أي عتبة أستخدم؟ هل تُقطع الأنفاس؟',
  tool_remove_silence_from_a_recording_faq_q4: 'أردت قص البداية والنهاية فقط. هل هذا قص الصوت؟',
  tool_remove_silence_from_a_recording_faq_q5: 'هل يُقسَّم التسجيل إلى ملفات كثيرة؟',
  tool_remove_silence_from_a_recording_faq_q6: 'إزالة ضجيج أو كلمات حشو أو كتم فيديو أو يوتيوب؟',
  tool_remove_silence_from_a_recording_faq_q7: 'هل يشبه Truncate Silence في Audacity؟',
  tool_remove_silence_from_a_recording_faq_q8: 'ما أكبر حجم؟ وماذا عن الموسيقى الهادئة؟',
  tool_remove_silence_from_a_recording_how_body:
    'اعثر على فجوات طويلة بما يكفي، قصّرها، خاط الكلام في ملف واحد، ثم نزّل WAV أو MP3 دون رفع إلى خادم.',
  tool_remove_silence_from_a_recording_how_item_1: 'افتح تسجيلًا (أو اضغط تحميل مثال).',
  tool_remove_silence_from_a_recording_how_item_2: 'اترك الافتراضي، أو افتح إعدادات متقدمة (اختياري) للعتبة وأدنى صمت.',
  tool_remove_silence_from_a_recording_how_item_3: 'اضغط إزالة الصمت.',
  tool_remove_silence_from_a_recording_how_item_4: 'اضغط تصدير WAV أو تصدير MP3.',
  tool_remove_silence_from_a_recording_how_title: 'كيف يعمل',
  tool_remove_silence_from_a_recording_hud_cut: 'قص الفجوات وربط ملف واحد…',
  tool_remove_silence_from_a_recording_hud_decode: 'فك الملف في هذا التبويب…',
  tool_remove_silence_from_a_recording_hud_decoded: 'تم الفك. الأحمر فجوات. اضغط إزالة الصمت.',
  tool_remove_silence_from_a_recording_hud_detect: 'قياس النوافذ الهادئة…',
  tool_remove_silence_from_a_recording_hud_elapsed_tpl: 'مضى {s} ث',
  tool_remove_silence_from_a_recording_hud_encode: 'ترميز MP3…',
  tool_remove_silence_from_a_recording_hud_fail_hint: 'صحّح الملف أو الإعدادات ثم أزل الصمت مجددًا.',
  tool_remove_silence_from_a_recording_hud_fail_title: 'توقفت إزالة الصمت',
  tool_remove_silence_from_a_recording_hud_next: 'انتهى. التالي: تصدير WAV أو تصدير MP3.',
  tool_remove_silence_from_a_recording_hud_next_mp3: 'انتهى. يفترض أن يبدأ تنزيل MP3.',
  tool_remove_silence_from_a_recording_hud_pct_tpl: '{pct}%',
  tool_remove_silence_from_a_recording_hud_step_cut: 'قص',
  tool_remove_silence_from_a_recording_hud_step_decode: 'فك',
  tool_remove_silence_from_a_recording_hud_step_detect: 'كشف',
  tool_remove_silence_from_a_recording_hud_step_encode: 'ترميز',
  tool_remove_silence_from_a_recording_hud_title: 'تقدم إزالة الصمت',
  tool_remove_silence_from_a_recording_hud_working: 'بدء…',
  tool_remove_silence_from_a_recording_keep: 'الإبقاء في كل فجوة (ثوانٍ)',
  tool_remove_silence_from_a_recording_keep_hint: 'الافتراضي 0.15 ث حتى لا يقفز القطع. 0 يحذف الفجوة كلها.',
  tool_remove_silence_from_a_recording_meta_tpl: '{name} · {dur}ث · {rate} Hz · {ch} قناة',
  tool_remove_silence_from_a_recording_min_silence: 'أدنى صمت (ثوانٍ)',
  tool_remove_silence_from_a_recording_min_silence_hint: 'الافتراضي 0.5 ث. الوقفات الأقصر بين الكلمات تبقى.',
  tool_remove_silence_from_a_recording_pause: 'إيقاف',
  tool_remove_silence_from_a_recording_play: 'تشغيل',
  tool_remove_silence_from_a_recording_preset_gentle: 'لطيف',
  tool_remove_silence_from_a_recording_preset_hint: 'كلام هو البداية. لطيف يبقي وقفات أكثر. مشدود يقطع أكثر.',
  tool_remove_silence_from_a_recording_preset_speech: 'كلام',
  tool_remove_silence_from_a_recording_preset_tight: 'مشدود',
  tool_remove_silence_from_a_recording_preview_hint: 'الأشرطة الحمراء فجوات طويلة بما يكفي للقص. التشغيل يسمع الملف الحالي (أو النتيجة).',
  tool_remove_silence_from_a_recording_remove: 'إزالة الصمت',
  tool_remove_silence_from_a_recording_result_tpl:
    '{orig}ث → {next}ث. أُزيل {removed}ث ({pct}%) في {gaps} فجوة. جاهز للتصدير.',
  tool_remove_silence_from_a_recording_rules_body:
    'كل نحو 50 مللي ثانية يُقاس RMS ثم levelDb = 20 × log10(rms). مقطع تحت العتبة أطول من أدنى صمت يُقصَّر إلى مدة الإبقاء ثم يُوصل الكلام. WAV هو PCM 16 بت. MP3 هو CBR بالمعدل المختار.',
  tool_remove_silence_from_a_recording_rules_item_1:
    'كلام: −40 dB، أدنى 0.5 ث، إبقاء 0.15 ث. غرفة صاخبة: −30 dB / 0.8 ث / 0.20 ث. استوديو: −50 dB / 0.4 ث / 0.15 ث.',
  tool_remove_silence_from_a_recording_rules_item_2:
    'حد سطح المكتب نحو 40 MB أو 20 دقيقة؛ الشاشة الضيقة نحو 20 MB أو 8 دقائق. ما فوق ذلك يُرفض دون قص صامت.',
  tool_remove_silence_from_a_recording_rules_item_3:
    'الملفات تبقى على جهازك دون رفع إلى خادم. مرمّز MP3 يُحمَّل من هذا الموقع فقط بعد تصدير MP3.',
  tool_remove_silence_from_a_recording_rules_item_4:
    'الفك يعتمد على المتصفح. DRM وبعض الترميزات وحاويات الفيديو تفشل برسالة واضحة.',
  tool_remove_silence_from_a_recording_rules_item_5:
    'ملف واحد. لا ZIP ولا تقليل ضجيج ولا حذف حشو ولا كتم فيديو ولا يوتيوب.',
  tool_remove_silence_from_a_recording_rules_title: 'قواعد متوقعة',
  tool_remove_silence_from_a_recording_sample: 'تحميل مثال',
  tool_remove_silence_from_a_recording_status_done: 'تم.',
  tool_remove_silence_from_a_recording_threshold: 'عتبة الصمت (dB)',
  tool_remove_silence_from_a_recording_threshold_hint: 'الافتراضي −40 dB. الأقرب إلى 0 يعامل مقاطع أكثر كصمت.',
  tool_remove_silence_from_a_recording_title: 'إزالة الصمت من تسجيل',
  tool_remove_silence_from_a_recording_usecase_1:
    'أزل الوقفات الطويلة من بودكاست بحوارين وأبقِ حلقة أقصر واحدة.',
  tool_remove_silence_from_a_recording_usecase_2:
    'قصّر تسجيل اجتماع بلا كلام ثم صدّر MP3 واحدًا.',
  tool_remove_silence_from_a_recording_usecase_3:
    'نظّف وقفات التفكير في مذكرة صوت وأرسل ملفًا واحدًا.',
  tool_remove_silence_from_a_recording_usecases_title: 'متى يناسب',
  tool_remove_silence_from_a_recording_why_choose_body:
    'مصممة لملف أقصر واحد، مع جدول عتبات وثوانٍ مُزالة ظاهرة في الصفحة.',
  tool_remove_silence_from_a_recording_why_choose_item_1:
    'تُقطع الفجوات ويُخاط الكلام في ملف واحد؛ لا ZIP لمقاطع.',
  tool_remove_silence_from_a_recording_why_choose_item_2:
    'قيم الكلام (−40 dB / 0.5 ث / 0.15 ث) تناسب الصوت؛ سطر النتيجة يعرض الثواني المُزالة.',
  tool_remove_silence_from_a_recording_why_choose_item_3:
    'الملف يبقى في هذا التبويب دون رفع إلى خادم؛ مرمّز MP3 يُحمَّل عند النقر فقط.',
  tool_remove_silence_from_a_recording_why_choose_item_4:
    'الملفات الأكبر أو الأطول تُرفض قبل الفك، بلا وعد 1 GB يسقط التبويب.',
  tool_remove_silence_from_a_recording_why_choose_title: 'لماذا تستخدم إزالة الصمت من تسجيل',
};
export default ar;
