import type { SiteLangDict } from '../../../types';

/**
 * العربية: تحويل MKV محلي إلى MP4 في المتصفح (D2).
 * صوت AAC ستيريو (mediabunny + ac3 + aac-encoder)؛ ليس remux فقط؛ ليس YouTube؛ حوالي 5 GiB مع OPFS (حوالي 1 GiB بدون).
 * المفاتيح مطابقة للنسخة الإنجليزية en.ts.
 */
const ar: SiteLangDict = {
  tool_convert_an_mkv_file_to_an_mp4_file_title: 'تحويل ملف MKV إلى ملف MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_desc:
    'حوّل MKV محلياً واحداً إلى MP4 في المتصفح مع صوت AAC ستيريو. يُنسخ الفيديو عند الإمكان. حوالي 5 GiB مع OPFS (حوالي 1 GiB بدون). لا يُرفع الملف.',
  tool_convert_an_mkv_file_to_an_mp4_file_description:
    'حوّل MKV محلياً واحداً إلى MP4 على جهازك، مع صوت AAC ستيريو ليعمل في المشغّلات وأدوات الاستخراج. الخطوات: اختر MKV → تحويل → تنزيل. مثال: «تحميل العينة» يحوّل مقطع Matroska اصطناعياً قصيراً. حزم الفيديو تُنسخ عندما يسمح المتصفح بالإبقاء على الترميز؛ الصوت يُعاد ترميزه دائماً إلى AAC (E-AC-3 / DDP يمكن فكها عبر مساعد WASM في الصفحة). سقف هذه النسخة الأولى حوالي 5 GiB مع OPFS (حوالي 1 GiB بدون)—النسخ الأكبر ما زالت تناسب ffmpeg على الحاسوب. محلي فقط—ليس تنزيل رابط YouTube. لا يُرفع أبداً. تريد الصوت فقط لاحقاً؟ افتح «استخراج الصوت من ملف MP4».',
  tool_convert_an_mkv_file_to_an_mp4_file_article:
    'برامج المونتاج والهواتف غالباً تريد MP4 بينما التسجيلات تصل بصيغة MKV. هذه الصفحة تعيد التغليف عندما يكون آمناً وتكتب دائماً AAC ستيريو حتى لا يبقى E-AC-3 صامتاً بعد remux. لا تجلب روابط بعيدة، ولا دفعة ZIP (حتى الآن)، ولا تستبدل صفحات استخراج الصوت—تبقى مرتبطة بعد حصولك على MP4 بـ AAC.',
  tool_convert_an_mkv_file_to_an_mp4_file_choose: 'اختر ملف MKV',
  tool_convert_an_mkv_file_to_an_mp4_file_hint:
    'أفلت .mkv محلياً واحداً (حوالي 5 GiB مع OPFS (حوالي 1 GiB بدون)). يصبح الصوت AAC ستيريو. ليس YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_convert: 'تحويل',
  tool_convert_an_mkv_file_to_an_mp4_file_download: 'تنزيل',
  tool_convert_an_mkv_file_to_an_mp4_file_sample: 'تحميل العينة',
  tool_convert_an_mkv_file_to_an_mp4_file_clear: 'مسح',
  tool_convert_an_mkv_file_to_an_mp4_file_stop: 'إيقاف',
  tool_convert_an_mkv_file_to_an_mp4_file_advanced: 'إعدادات الصوت (اختياري)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_label: 'قنوات الصوت',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_stereo: 'ستيريو (افتراضي)',
  tool_convert_an_mkv_file_to_an_mp4_file_channels_mono: 'أحادي',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_label: 'جودة AAC',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_low: 'حجم أصغر',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_medium: 'متوازن',
  tool_convert_an_mkv_file_to_an_mp4_file_quality_high: 'جودة أعلى (افتراضي)',
  tool_convert_an_mkv_file_to_an_mp4_file_settings_hint:
    'الافتراضيات تناسب معظم الملفات: AAC ستيريو بجودة أعلى. تغيير الإعدادات يمسح تنزيلاً منتهياً.',
  tool_convert_an_mkv_file_to_an_mp4_file_progress: 'تقدّم التحويل',
  tool_convert_an_mkv_file_to_an_mp4_file_load: 'تحميل المحرّك',
  tool_convert_an_mkv_file_to_an_mp4_file_read: 'قراءة',
  tool_convert_an_mkv_file_to_an_mp4_file_decode: 'فك الترميز',
  tool_convert_an_mkv_file_to_an_mp4_file_encode: 'ترميز',
  tool_convert_an_mkv_file_to_an_mp4_file_write: 'كتابة',
  tool_convert_an_mkv_file_to_an_mp4_file_done: 'جاهز. نزّل MP4، أو افتح أداة استخراج MP4 للصوت فقط.',
  tool_convert_an_mkv_file_to_an_mp4_file_failed: 'فشل التحويل. جرّب MKV أصغر أو مسار صوت آخر.',
  tool_convert_an_mkv_file_to_an_mp4_file_elapsed: 'مرّ {s} ث',
  tool_convert_an_mkv_file_to_an_mp4_file_preview: 'معاينة MP4 المحوّل',
  tool_convert_an_mkv_file_to_an_mp4_file_result: 'المدخل {input} → MP4 {output}',
  tool_convert_an_mkv_file_to_an_mp4_file_sample_name: 'عرض-mkv-إلى-mp4-قصير',
  tool_convert_an_mkv_file_to_an_mp4_file_empty: 'اختر ملف MKV أو حمّل العينة أولاً.',
  tool_convert_an_mkv_file_to_an_mp4_file_empty_state:
    'لا ملف بعد. أفلت .mkv محلياً ضمن حوالي 5 GiB مع OPFS، أو «تحميل العينة». ليس YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_status_stopped: 'تم الإيقاف. لا يُحفظ MP4 جزئي.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_file: 'أفلت ملف MKV واحداً بالضبط.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_format: 'ملف غير مدعوم. في هذه الصفحة .mkv فقط.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_limit:
    'هذا MKV يتجاوز سقف حوالي 5 GiB مع OPFS (حوالي 1 GiB بدون) للتحويل في المتصفح. استخدم ffmpeg على الحاسوب للملفات الأكبر.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_container:
    'تعذّر فتح الملف كـ Matroska، أو لم يبقَ مسار فيديو/صوت صالح.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_codec:
    'تعذّر فك أو ترميز ترميز صوت أو فيديو هنا. جرّب مساراً آخر، أو حوّل على حاسوبك بـ ffmpeg.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_encoder: 'تعذّر كتابة MP4. جرّب «تحويل» مرة أخرى.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_sample: 'تعذّر تحميل MKV العينة. أفلت ملفك.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_engine: 'تعذّر تحميل محرّك التحويل في هذا المتصفح.',
  tool_convert_an_mkv_file_to_an_mp4_file_err_aborted: 'تم إيقاف التحويل.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_title: 'كيف تحوّل ملف MKV إلى ملف MP4',
  tool_convert_an_mkv_file_to_an_mp4_file_how_body:
    'أفلت MKV محلياً، شغّل «تحويل»، ثم «تنزيل» MP4—يصبح الصوت AAC ستيريو لتعمل أدوات الاستخراج لاحقاً.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_1: 'اختر .mkv محلياً ضمن حوالي 5 GiB مع OPFS، أو انقر «تحميل العينة».',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_2: 'اختياري: افتح «إعدادات الصوت» لأحادي أو جودة AAC أصغر.',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_3:
    'انقر «تحويل» وانتظر: تحميل المحرّك → قراءة → فك الترميز → ترميز → كتابة (أو «إيقاف»).',
  tool_convert_an_mkv_file_to_an_mp4_file_how_item_4:
    'عاين إن وُجدت المعاينة، ثم «تنزيل». للصوت فقط بعد ذلك استخدم «استخراج الصوت من ملف MP4».',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_title: 'لماذا «تحويل ملف MKV إلى ملف MP4» على موقعنا',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_1:
    'AAC ستيريو يُكتب عمداً—ليس remux يبقي E-AC-3 غير قابل للتشغيل في كثير من المتصفحات.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_2:
    'الفيديو يُنسخ عند الإمكان حتى تنتهي المقاطع الطويلة أسرع من إعادة ترميز كامل.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_3:
    'المعالجة على جهازك؛ تحميل المحرّك الأول من هذا الموقع فقط.',
  tool_convert_an_mkv_file_to_an_mp4_file_why_choose_item_4:
    'خطوة تالية واضحة لاستخراج الصوت: صفحة استخراج MP4 ذات الصلة بعد «تنزيل».',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_title: 'MKV إلى MP4 مع AAC بصدق',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_body:
    'MKV محلي واحد في كل مرة. الصوت يُعاد ترميزه إلى AAC. السقوف والترميزات صريحة—نسخ متعددة الجيجابايت قد تحتاج ffmpeg على الحاسوب.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_1:
    'حوالي 5 GiB مع OPFS (حوالي 1 GiB بدون) لمسار المتصفح هذا. تجاوز الحجم → err_limit.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_2: 'لا تنزيل URL أو YouTube.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_3:
    'E-AC-3 / DDP يمكن فكها عبر مساعد AC-3 المرفق، ثم ترميز AAC ستيريو. ترميزات فيديو نادرة قد تفشل مع err_codec.',
  tool_convert_an_mkv_file_to_an_mp4_file_rules_item_4:
    'لا يُستبدل ملف MKV الأصلي. لعدة ملفات استخدم تحويل ملفات MKV إلى MP4 دفعة واحدة (ZIP).',
  tool_convert_an_mkv_file_to_an_mp4_file_example_title: 'جرّب تحويلاً حقيقياً',
  tool_convert_an_mkv_file_to_an_mp4_file_example:
    '«تحميل العينة» يجلب MKV قصيراً من الموقع ثم يشغّل «تحويل». للاختبار الحقيقي فضّل .mkv خاصاً ضمن السقف.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecases_title: 'متى يفيد',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_1: 'MKV من تسجيل شاشة يجب أن يفتح في محرّر يقبل MP4 فقط.',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_2:
    'MKV بـ DDP/Atmos يحتاج AAC قبل «استخراج الصوت من ملف MP4».',
  tool_convert_an_mkv_file_to_an_mp4_file_usecase_3:
    'تريد MP4 للمشاركة دون رفع Matroska إلى محوّل سحابي.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q1: 'هل ألصق رابط YouTube؟',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a1: 'لا. .mkv محلي فقط.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q2: 'هل هذا remux فقط (نفس ترميز الصوت)؟',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a2:
    'لا. الصوت يُعاد ترميزه دائماً إلى AAC ليعمل demux المتصفح وكثير من المشغّلات. الفيديو قد يُنسخ دون إعادة ترميز.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q3: 'MKV فيه Dolby Atmos / DDP / E-AC-3—هل يعمل؟',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a3:
    'غالباً نعم للملفات ضمن سقف الحجم: الصفحة تحمّل فاكّ AC-3/E-AC-3، تخلط إلى AAC ستيريو، وتكتب MP4. نسخ ضخمة متعددة GB قد تفشل أو تكون بطيئة—استخدم ffmpeg على الحاسوب.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q4: 'هل يُرفع ملفي؟',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a4: 'لا. التحويل في متصفحك. سكربتات المحرّك تُحمّل من هذا الموقع مرة واحدة.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q5: 'أريد مسار الصوت فقط—هل أستخدم هذه الصفحة؟',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a5:
    'إن كان MKV يناسب مسار الاستخراج الاحتياطي وترميزاً متوافقاً مع المتصفح، استخدم «استخراج الصوت من ملف MKV». إن كان DDP أو كبيراً للاستخراج، حوّل هنا أولاً ثم «استخراج الصوت من ملف MP4».',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q6: 'WebM أو MOV بدلاً من MKV؟',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a6: 'هذه الصفحة تقبل .mkv فقط. حاويات أخرى لها صفحات تحويل لاحقاً.',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_q7: 'هل أحوّل عدة MKV دفعة واحدة؟',
  tool_convert_an_mkv_file_to_an_mp4_file_faq_a7: 'ليس كدفعة ZIP في هذه الصفحة بعد. حوّل ملفاً واحداً في كل مرة حالياً.',
};
export default ar;
