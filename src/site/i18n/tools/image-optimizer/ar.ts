/**
 * i18n tool shard (image-optimizer / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_image_optimizer_article:
    'محسّن صور محلي بـ WASM: اختيار الترميز، الجودة/الجهد، حد اختياري لأطول ضلع، مقارنة منزلقة، وتنبيه صادق لبطء AVIF.',
  tool_image_optimizer_avif_slow: 'قد يستغرق AVIF وقتًا على الصور الكبيرة — يمكنك الإلغاء.',
  tool_image_optimizer_cancel: 'إلغاء',
  tool_image_optimizer_cancelled: 'تم الإلغاء.',
  tool_image_optimizer_choose_file: 'اختر صورة',
  tool_image_optimizer_clear: 'مسح',
  tool_image_optimizer_codec_avif: 'AVIF',
  tool_image_optimizer_codec_label: 'الترميز / الإخراج',
  tool_image_optimizer_codec_mozjpeg: 'MozJPEG (JPEG)',
  tool_image_optimizer_codec_oxipng: 'OxiPNG (PNG)',
  tool_image_optimizer_codec_webp: 'WebP',
  tool_image_optimizer_description:
    'حسّن صور الويب في المتصفح باستخدام MozJPEG أو WebP أو AVIF أو OxiPNG. الخطوات: اختر صورة، حمّل المحرك، اختر الترميز والإعدادات، قارن قبل/بعد بالمنزلق، ثم نزّل. مثال: حوّل JPEG كبيرًا لصورة رئيسية إلى WebP أخف — الملفات تبقى على جهازك بعد تحميل المحرك.',
  tool_image_optimizer_download: 'تنزيل',
  tool_image_optimizer_drop_hint: 'أو أفلت JPEG أو PNG أو WebP هنا. بعد تحميل المحرك يبقى التحسين في هذه الصفحة.',
  tool_image_optimizer_effort_label: 'الجهد / السرعة',
  tool_image_optimizer_empty: 'اختر صورة أولًا.',
  tool_image_optimizer_engine_failed: 'فشل تحميل المحرك. تحقق من الاتصال وأعد المحاولة.',
  tool_image_optimizer_engine_loading: 'جاري تحميل المحرك…',
  tool_image_optimizer_engine_needed: 'حمّل محرك التحسين قبل الترميز.',
  tool_image_optimizer_engine_ready: 'المحرك جاهز — اختر الترميز وابدأ التحسين.',
  tool_image_optimizer_err_decode: 'تعذّر فك الترميز. جرّب JPEG أو PNG أو WebP.',
  tool_image_optimizer_err_encode: 'فشل الترميز. جرّب ترميزًا آخر أو جهدًا أقل أو صورة أصغر.',
  tool_image_optimizer_example:
    'نفس JPEG هاتف (~3–4 MB): MozJPEG غالبًا أصغر من JPEG متصفح عادي؛ WebP يقلّص أكثر بمظهر قريب؛ AVIF قد يصغّر أكثر لكنه قد يستغرق ثوانٍ على إطار كبير. الأرقام تقريبية — اعتمد المنزلق على ملفك.',
  tool_image_optimizer_example_title: 'مثال',
  tool_image_optimizer_faq_a1:
    'لا. بعد تحميل المحرك يبقى فك الترميز والترميز في هذه الصفحة. تحقق من Network أن الصورة لا تُرسل بـ POST.',
  tool_image_optimizer_faq_a2: 'ترميز AVIF يستهلك المعالج، خاصة للصور الكبيرة. نعرض التقدم ونسمح بالإلغاء بدل الادعاء أنه فوري.',
  tool_image_optimizer_faq_a3:
    'الضاغط مرور سريع للحجم/الجودة (مناسب لهدف بالكيلوبايت). هنا تحمّل محركًا لاختيار MozJPEG أو WebP أو AVIF أو OxiPNG والمقارنة بالمنزلق.',
  tool_image_optimizer_faq_a4:
    'ملفات الترميز كبيرة. ننتظر نقرة حتى تبقى الصفحة خفيفة — تُحمَّل فقط عند الحاجة لتحسين بمستوى الترميز.',
  tool_image_optimizer_faq_a5: 'المتحركات تصبح إطارًا ثابتًا. إعادة الترميز تزيل EXIF عادة؛ افحص الوسوم بأداة EXIF إن احتجتها.',
  tool_image_optimizer_faq_a6:
    'عندما يكون الهدف تغيير النوع (بما فيه خلفية JPEG للشفافية). استخدم هذا المحسّن عندما يهمك الحجم والتحكم بالترميز أكثر من تبديل سريع للصيغة.',
  tool_image_optimizer_faq_q1: 'هل تغادر ملفاتي المتصفح؟',
  tool_image_optimizer_faq_q2: 'لماذا AVIF بطيء؟',
  tool_image_optimizer_faq_q3: 'ما الفرق عن ضاغط الصور؟',
  tool_image_optimizer_faq_q4: 'لماذا يجب تحميل محرك أولًا؟',
  tool_image_optimizer_faq_q5: 'ماذا عن الحركة وEXIF؟',
  tool_image_optimizer_faq_q6: 'متى أستخدم محول الصيغ؟',
  tool_image_optimizer_how_body:
    'اختر صورة، حمّل المحرك مرة، اختر MozJPEG أو WebP أو AVIF أو OxiPNG، اضبط الجودة أو الجهد، ويمكنك تقييد أطول ضلع، ثم حرّك المنزلق للمقارنة. الترميز محلي. إن أردت تصغيرًا سريعًا بلا اختيار ترميز، استخدم ضاغط الصور الخفيف.',
  tool_image_optimizer_how_title: 'طريقة العمل',
  tool_image_optimizer_load_engine: 'تحميل المحرك',
  tool_image_optimizer_max_edge_label: 'أقصى ضلع',
  tool_image_optimizer_optimize: 'تحسين',
  tool_image_optimizer_optimizing: 'جاري التحسين…',
  tool_image_optimizer_preview_after: 'بعد',
  tool_image_optimizer_preview_before: 'قبل',
  tool_image_optimizer_quality_label: 'الجودة',
  tool_image_optimizer_ratio_tpl: '{from} → {to} (أصغر بنسبة {pct}%)',
  tool_image_optimizer_resize_on: 'تقييد أطول ضلع',
  tool_image_optimizer_rules_body: 'كل ترميز يوازن الحجم والمظهر والشفافية والوقت. اقرأ هذا قبل السعي لأصغر ملف ممكن.',
  tool_image_optimizer_rules_item_1: 'MozJPEG: JPEG بفقدان، غالبًا أصغر من تصدير JPEG العادي في المتصفح — مناسب إن احتجت توافق .jpg.',
  tool_image_optimizer_rules_item_2: 'WebP: صور أصغر بمظهر مشابه؛ يدعم الشفافية. خيار افتراضي جيد لكثير من المواقع.',
  tool_image_optimizer_rules_item_3: 'AVIF: غالبًا الأصغر بفقدان، لكنه أبطأ — التقدم والإلغاء جزء أساسي من التجربة.',
  tool_image_optimizer_rules_item_4:
    'OxiPNG: تصغير PNG بلا فقدان. الصور تبقى كبيرة؛ أنسب لواجهات حادة بشفافية. إعادة الترميز تزيل EXIF عادة؛ والبايتات لا تغادر الصفحة.',
  tool_image_optimizer_rules_title: 'ما الذي تتوقعه',
  tool_image_optimizer_sample: 'تحميل مثال',
  tool_image_optimizer_stats_tpl: '{codec} · {w}×{h} · {bytes} · {ms} ms',
  tool_image_optimizer_status_done: 'تم — راجع المنزلق والحجم ثم نزّل.',
  tool_image_optimizer_title: 'تحسين الصور — WebP وAVIF وMozJPEG محليًا',
  tool_image_optimizer_usecase_1: 'نشر صورة رئيسية أو منتج بصيغة WebP/AVIF بعد مراجعة المظهر بالمنزلق.',
  tool_image_optimizer_usecase_2: 'الإبقاء على JPEG مع MozJPEG عندما يبقى JPEG المتصفح ثقيلًا.',
  tool_image_optimizer_usecase_3: 'تصغير PNG للواجهة بشفافية عبر OxiPNG أو WebP شبه بلا فقدان قبل التسليم.',
  tool_image_optimizer_usecases_title: 'متى يناسبك',
  tool_image_optimizer_warn_animation: 'الملفات المتحركة: يُحسَّن الإطار الأول فقط.',
  tool_image_optimizer_warn_edge: 'أبعاد كبيرة جدًا (>8192 px) — توقّع بطئًا؛ فكّر بتقييد أطول ضلع.',
  tool_image_optimizer_warn_large: 'ملف كبير (>25 MB) — قد يبطئ أو ينفد الذاكرة.',
};
export default ar;
