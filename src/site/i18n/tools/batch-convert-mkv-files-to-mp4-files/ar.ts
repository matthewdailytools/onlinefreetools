import type { SiteLangDict } from '../../../types';

/**
 * العربية (D3 دفعة): عدة MKV محلية → MP4 بصوت AAC ستريو، تنزيل ZIP.
 * نية البحث: تحويل عدة mkv إلى mp4، دفعة، دون رفع إلى خادم.
 */
const ar: SiteLangDict = {
  tool_batch_convert_mkv_files_to_mp4_files_title: 'تحويل ملفات MKV إلى MP4 دفعة واحدة',
  tool_batch_convert_mkv_files_to_mp4_files_desc:
    'حوّل عدة ملفات MKV محلية إلى MP4 بصوت AAC ستريو في المتصفح، ثم نزّل ZIP واحد. نحو 20 ملفًا، ~5 GiB with OPFS لكل ملف. دون رفع إلى خادم.',
  tool_batch_convert_mkv_files_to_mp4_files_description:
    'حوّل دفعة من MKV المحلية إلى MP4 بصوت AAC ستريو على جهازك، ثم نزّل ZIP واحد. الخطوات: أضف MKV → تحويل الكل → تنزيل ZIP. مثال: تحميل العينة يضع مقطعين Matroska قصيرين في الطابور ويحزم MP4ين. حوالي 5 GiB مع OPFS لكل ملف، حتى ~20 في الطابور. الصف الفاشل يُتخطى؛ الناجح يبقى في ZIP جزئي. ملفات محلية فقط، لا روابط YouTube؛ تبقى على جهازك دون رفع إلى خادم. ملف واحد فقط؟ حوّل ملف MKV واحدًا إلى MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_article:
    'مجلدات التسجيل بصيغة Matroska تحتاج MP4 لكثير من برامج المونتاج. هذه الصفحة تستخدم نفس تحويل AAC لأداة الملف الواحد، لكنها تُصفّ عدة MKV، تعرض حالة كل صف، وتحزم MP4 الناجحة في ZIP. ليست استخراج صوت دفعة فقط، ولا تنزيل روابط — مقطع واحد → صفحة الملف الواحد.',
  tool_batch_convert_mkv_files_to_mp4_files_choose: 'اختر ملفات MKV',
  tool_batch_convert_mkv_files_to_mp4_files_hint:
    'أسقط عدة .mkv محلية (حوالي 5 GiB مع OPFS لكل ملف، حتى ~20). الصوت يصبح AAC ستريو. ليس YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_list_label: 'الطابور',
  tool_batch_convert_mkv_files_to_mp4_files_queue_count: '{n} ملف(ات) في الطابور',
  tool_batch_convert_mkv_files_to_mp4_files_convert: 'تحويل الكل',
  tool_batch_convert_mkv_files_to_mp4_files_download: 'تنزيل ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_sample: 'تحميل العينة',
  tool_batch_convert_mkv_files_to_mp4_files_clear: 'مسح',
  tool_batch_convert_mkv_files_to_mp4_files_stop: 'إيقاف',
  tool_batch_convert_mkv_files_to_mp4_files_remove: 'إزالة',
  tool_batch_convert_mkv_files_to_mp4_files_advanced: 'إعدادات الصوت (اختياري)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_label: 'قنوات الصوت',
  tool_batch_convert_mkv_files_to_mp4_files_channels_stereo: 'ستريو (افتراضي)',
  tool_batch_convert_mkv_files_to_mp4_files_channels_mono: 'Mono',
  tool_batch_convert_mkv_files_to_mp4_files_quality_label: 'جودة AAC',
  tool_batch_convert_mkv_files_to_mp4_files_quality_low: 'حجم أصغر',
  tool_batch_convert_mkv_files_to_mp4_files_quality_medium: 'متوازن',
  tool_batch_convert_mkv_files_to_mp4_files_quality_high: 'جودة أعلى (افتراضي)',
  tool_batch_convert_mkv_files_to_mp4_files_settings_hint:
    'الافتراضيات تُطبَّق على كل ملف في الطابور. تغيير الإعدادات يمسح ZIP جاهز.',
  tool_batch_convert_mkv_files_to_mp4_files_progress: 'تقدّم التحويل الدفعي',
  tool_batch_convert_mkv_files_to_mp4_files_load: 'تحميل المحرك',
  tool_batch_convert_mkv_files_to_mp4_files_read: 'قراءة',
  tool_batch_convert_mkv_files_to_mp4_files_decode: 'فك ترميز',
  tool_batch_convert_mkv_files_to_mp4_files_encode: 'ترميز',
  tool_batch_convert_mkv_files_to_mp4_files_pack: 'حزم ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_done:
    'جاهز. نزّل ZIP — أو افتح صفحة MKV→MP4 لملف واحد إن كان لديك مقطع واحد فقط.',
  tool_batch_convert_mkv_files_to_mp4_files_failed:
    'فشل التحويل الدفعي. راجع أخطاء الصفوف أو جرّب MKV أصغر أو أقل.',
  tool_batch_convert_mkv_files_to_mp4_files_elapsed: 'مرّ {s} ث',
  tool_batch_convert_mkv_files_to_mp4_files_preview: 'نتيجة ZIP',
  tool_batch_convert_mkv_files_to_mp4_files_result: '{n} MP4 محزوم · ZIP {output} KiB',
  tool_batch_convert_mkv_files_to_mp4_files_partial:
    '{ok} نجح، {fail} فشل · ZIP {output} KiB (جزئي). التنزيل يشمل الناجح.',
  tool_batch_convert_mkv_files_to_mp4_files_sample_name: 'short-batch-mkv-mp4',
  tool_batch_convert_mkv_files_to_mp4_files_empty: 'أضف MKV أو حمّل العينة أولًا.',
  tool_batch_convert_mkv_files_to_mp4_files_empty_state:
    'لا ملفات بعد. أسقط .mkv محلية (~5 GiB with OPFS لكل ملف) أو حمّل العينة. ليس YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_status_pending: 'في الانتظار',
  tool_batch_convert_mkv_files_to_mp4_files_status_running: 'جاري التحويل…',
  tool_batch_convert_mkv_files_to_mp4_files_status_ok: 'MP4 جاهز',
  tool_batch_convert_mkv_files_to_mp4_files_status_fail: 'فشل',
  tool_batch_convert_mkv_files_to_mp4_files_status_stopped: 'متوقف',
  tool_batch_convert_mkv_files_to_mp4_files_err_file: 'أسقط ملف MKV واحدًا أو أكثر.',
  tool_batch_convert_mkv_files_to_mp4_files_err_format: 'ملف غير مدعوم. هذه الصفحة لـ .mkv فقط.',
  tool_batch_convert_mkv_files_to_mp4_files_err_limit:
    'ملف يتجاوز حوالي 5 GiB مع OPFS أو الطابور كبير جدًا لهذا المتصفح.',
  tool_batch_convert_mkv_files_to_mp4_files_err_too_many: 'ملفات كثيرة. اجعل الدفعة ~20 MKV أو أقل.',
  tool_batch_convert_mkv_files_to_mp4_files_err_container:
    'تعذّر فتح ملف كـ Matroska أو لا يوجد مسار فيديو/صوت صالح.',
  tool_batch_convert_mkv_files_to_mp4_files_err_codec:
    'تعذّر فك/ترميز codec هنا. ذلك الصف يفشل؛ قد تُحزم صفوف أخرى.',
  tool_batch_convert_mkv_files_to_mp4_files_err_encoder: 'تعذّر كتابة MP4 لصف. أعد المحاولة أو أزله.',
  tool_batch_convert_mkv_files_to_mp4_files_err_zip: 'تعذّر إنشاء ZIP. اضغط تحويل الكل مرة أخرى.',
  tool_batch_convert_mkv_files_to_mp4_files_err_sample: 'تعذّر تحميل MKV العينة. استخدم ملفاتك.',
  tool_batch_convert_mkv_files_to_mp4_files_err_engine: 'تعذّر تحميل محرك التحويل في هذا المتصفح.',
  tool_batch_convert_mkv_files_to_mp4_files_err_aborted: 'تم إيقاف التحويل.',
  tool_batch_convert_mkv_files_to_mp4_files_how_title: 'كيف تحوّل عدة MKV إلى MP4',
  tool_batch_convert_mkv_files_to_mp4_files_how_body:
    'صفّ MKV محلية، تحويل الكل، ثم تنزيل ZIP — كل نجاح MP4 بصوت AAC ستريو.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_1:
    'اختر عدة .mkv محلية (~5 GiB with OPFS لكل ملف) أو حمّل العينة.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_2:
    'اختياري: افتح إعدادات الصوت لـ mono أو AAC أخف (يُطبَّق على الدفعة كلها).',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_3:
    'اضغط تحويل الكل وراقب كل صف (أو إيقاف). الصف الفاشل يُتخطى؛ الباقي يكمل.',
  tool_batch_convert_mkv_files_to_mp4_files_how_item_4:
    'عند انتهاء التقدّم، تنزيل ZIP. مقطع واحد → صفحة MKV→MP4 لملف واحد.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_title: 'لماذا هذا التحويل الدفعي MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_1:
    'ZIP واحد من MP4 بـ AAC دون رفع مجلد Matroska كاملًا إلى السحابة.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_2:
    'حالة لكل صف وتخطّي الفشل — مسار واحد معطوب لا يوقف الدفعة.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_3:
    'نفس محرك AAC لصفحة الملف الواحد، بحدود واضحة — ليس remux صامتًا.',
  tool_batch_convert_mkv_files_to_mp4_files_why_choose_item_4:
    'مسار واضح للتحويل أحادي الملف ولاستخراج الصوت بعد MP4.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_title: 'حدود الدفعة MKV→MP4',
  tool_batch_convert_mkv_files_to_mp4_files_rules_body:
    '.mkv محلية فقط. الصوت يُعاد ترميزه إلى AAC. الحدود وفشل الصفوف مذكورة مسبقًا — rips ضخمة ما زالت لـ ffmpeg على سطح المكتب.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_1:
    'حوالي 5 GiB مع OPFS لكل ملف، ~20 لكل دفعة. عند التجاوز تظهر رسالة واضحة.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_2: 'لا تنزيل عبر URL أو YouTube.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_3:
    'AAC ستريو (أو mono) عمدًا. E-AC-3 قد يُفك عبر مساعد مشترك؛ فيديو غريب قد يفشل صفًا.',
  tool_batch_convert_mkv_files_to_mp4_files_rules_item_4:
    'MKV الأصلية لا تُستبدل. ليست استخراج صوت دفعة — راجع الصفحات ذات الصلة.',
  tool_batch_convert_mkv_files_to_mp4_files_example_title: 'جرّب دفعة حقيقية',
  tool_batch_convert_mkv_files_to_mp4_files_example:
    'تحميل العينة يضع MKVين قصيرين من الموقع؛ تحويل الكل يحزمهما. للاختبار الحقيقي استخدم ملفاتك ضمن الحد.',
  tool_batch_convert_mkv_files_to_mp4_files_usecases_title: 'متى ينفع',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_1:
    'مجلد تسجيلات MKV يجب أن يصبح MP4 لأن المونتاج يرفض Matroska.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_2:
    'عدة MKV بـ DDP/Atmos تحتاج AAC قبل استخراج الصوت من MP4 الناتجة.',
  tool_batch_convert_mkv_files_to_mp4_files_usecase_3:
    'تريد تنزيل ZIP دفعة واحدة دون إرسال الدفعة إلى محوّل سحابي.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q1: 'هل ألصق روابط YouTube؟',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a1: 'لا. ملفات .mkv محلية فقط.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q2: 'ما الفرق عن تحويل MKV واحد إلى MP4؟',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a2:
    'تلك الصفحة ملف واحد وتنزيل MP4 مباشر. هنا طابور لعدة ملفات وتنزيل ZIP. نفس محرك AAC.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q3: 'ماذا إذا فشل MKV واحد؟',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a3:
    'الصف يظهر فشل ويُتخطى. MP4 الناجحة تبقى في ZIP جزئي للتنزيل.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q4: 'هل remux فقط (نفس codec الصوت)؟',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a4:
    'لا. الصوت يُعاد ترميزه دائمًا إلى AAC. الفيديو يُنسخ عند الإمكان.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q5: 'أريد WAV/MP3 من عدة MKV — صفحة خاطئة؟',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a5:
    'للصوت فقط: استخدم استخراج الصوت الدفعي من MKV. هنا مخرجات MP4 فيديو في ZIP.',
  tool_batch_convert_mkv_files_to_mp4_files_faq_q6: 'هل يُرفع مجلدي؟',
  tool_batch_convert_mkv_files_to_mp4_files_faq_a6:
    'لا. التحويل في المتصفح؛ الملفات تبقى على جهازك دون رفع إلى خادم. سكربتات المحرك تُحمَّل مرة من هذا الموقع.',
};

export default ar;
