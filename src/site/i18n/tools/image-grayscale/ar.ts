/**
 * i18n tool shard (image-grayscale / ar).
 * Native Arabic rewrite (2026-10-14): search-oriented copy for أبيض وأسود / تدرج رمادي /
 * إزالة التشبع, matching the English master’s key set, formulas, sample values, and UI.
 */
import type { SiteLangDict } from '../../../types';

/** Arabic strings for the image grayscale converter. */
const ar: SiteLangDict = {
	tool_image_grayscale_title: 'تحويل الصورة إلى أبيض وأسود — تدرج رمادي بطريقة تختارها',
	tool_image_grayscale_desc: 'حوّل صورة ملوّنة إلى أبيض وأسود في المتصفح، اختر الطريقة ثم نزّل.',
	tool_image_grayscale_description:
		'حوّل صورة ملوّنة إلى أبيض وأسود أو تدرج رمادي في المتصفح. الخطوات: اختر صورة، انتقِ طريقة — إضاءة أو متوسط أو إشراق أو قناة لون واحدة — اضبط الشدة، انقر «حوّل إلى أبيض وأسود» ثم نزّل JPEG أو WebP أو PNG. يتضمن صيغة حساب وأمثلة لألوان نقية. يمكن خفض الشدة لإزالة التشبع جزئياً. المعالجة في علامة التبويب هذه دون رفع إلى خادم.',
	tool_image_grayscale_choose_file: 'اختر صورة',
	tool_image_grayscale_drop_hint: 'أو أسقط هنا ملفاً بصيغة JPEG أو PNG أو WebP أو GIF.',
	tool_image_grayscale_convert: 'حوّل إلى أبيض وأسود',
	tool_image_grayscale_download: 'تنزيل',
	tool_image_grayscale_sample: 'تحميل مثال',
	tool_image_grayscale_clear: 'مسح',
	tool_image_grayscale_method_label: 'طريقة التدرج الرمادي',
	tool_image_grayscale_method_luma601: 'الإضاءة — Rec.601 (موصى بها)',
	tool_image_grayscale_method_luma709: 'الإضاءة — Rec.709 / sRGB',
	tool_image_grayscale_method_average: 'متوسط R و G و B',
	tool_image_grayscale_method_lightness: 'الإشراق (الأكبر + الأصغر) ÷ 2',
	tool_image_grayscale_method_red: 'قناة الأحمر فقط (مظهر مرشح أحمر)',
	tool_image_grayscale_method_green: 'قناة الأخضر فقط',
	tool_image_grayscale_method_blue: 'قناة الأزرق فقط',
	tool_image_grayscale_method_hint: 'الإضاءة تحافظ على السطوع كما تراه العين. تتحدّث المعاينة عند التبديل.',
	tool_image_grayscale_amount_label: 'الشدة',
	tool_image_grayscale_amount_hint: '100% = أبيض وأسود كامل؛ القيم الأقل تُبقي بعض اللون (إزالة تشبع جزئية).',
	tool_image_grayscale_show_original: 'عرض الأصل',
	tool_image_grayscale_advanced: 'إعدادات متقدمة (اختياري)',
	tool_image_grayscale_format_label: 'صيغة الإخراج',
	tool_image_grayscale_format_jpeg: 'JPEG',
	tool_image_grayscale_format_png: 'PNG',
	tool_image_grayscale_format_webp: 'WebP',
	tool_image_grayscale_format_hint: 'WebP صغير ويحافظ على الشفافية. PNG بلا فقدان. JPEG يحتاج لون خلفية.',
	tool_image_grayscale_quality_label: 'الجودة',
	tool_image_grayscale_quality_hint: 'لـ JPEG و WebP فقط؛ PNG يتجاهلها.',
	tool_image_grayscale_jpeg_bg_label: 'خلفية JPEG',
	tool_image_grayscale_jpeg_bg_hint: 'تملأ المناطق الشفافة قبل تصدير JPEG. الافتراضي أبيض.',
	tool_image_grayscale_preview_label: 'معاينة',
	tool_image_grayscale_progress: 'جارٍ التحويل إلى أبيض وأسود…',
	tool_image_grayscale_step_decode: 'فك الترميز',
	tool_image_grayscale_step_gray: 'تحويل البكسلات',
	tool_image_grayscale_step_encode: 'الترميز',
	tool_image_grayscale_decode_step: 'جارٍ قراءة الصورة…',
	tool_image_grayscale_gray_step: 'جارٍ إعادة حساب كل بكسل…',
	tool_image_grayscale_encode_step: 'جارٍ الحفظ بصيغة {fmt}…',
	tool_image_grayscale_elapsed: 'مرّ {s} ث',
	tool_image_grayscale_empty: 'اختر صورة أولاً.',
	tool_image_grayscale_err_decode: 'تعذّر فتح هذا الملف كصورة. جرّب JPEG أو PNG أو WebP.',
	tool_image_grayscale_err_encode: 'تعذّر حفظ الصورة. جرّب صورة أصغر أو صيغة أخرى.',
	tool_image_grayscale_warn_large: 'ملف كبير (أكثر من 25 MB) — قد يكون التحويل بطيئاً.',
	tool_image_grayscale_warn_edge: 'أحد الجانبين أطول من نحو 8,192 بكسل — قد تفشل بعض المتصفحات في المعالجة.',
	tool_image_grayscale_warn_animation: 'GIF متحرّك: يُحوَّل الإطار الأول فقط.',
	tool_image_grayscale_status_working: 'جارٍ العمل…',
	tool_image_grayscale_status_done: 'تم — انقر «تنزيل» للحفظ.',
	tool_image_grayscale_stats_tpl: '{w}×{h} بكسل · {method} → {fmt} ({bytes})',
	tool_image_grayscale_how_title: 'كيف تحوّل صورة إلى أبيض وأسود',
	tool_image_grayscale_how_body:
		'تُستبدل قيم الأحمر والأخضر والأزرق لكل بكسل بقيمة رمادية واحدة بحيث R = G = B. الطريقة تحدّد كيف تُحسب تلك القيمة، ولذلك قد تبدو الصورة نفسها أفتح أو أغمق أو أكثر تسطّحاً.',
	tool_image_grayscale_how_item_1: 'اختر صورة أو أسقطها في المربع.',
	tool_image_grayscale_how_item_2: 'اختر طريقة التدرج الرمادي والشدة؛ فعّل «عرض الأصل» للمقارنة.',
	tool_image_grayscale_how_item_3: 'انقر «حوّل إلى أبيض وأسود» وانتظر شريط التقدّم.',
	tool_image_grayscale_how_item_4: 'انقر «تنزيل». افتح الإعدادات المتقدمة أولاً إن احتجت PNG أو JPEG أو جودة مختلفة.',
	tool_image_grayscale_why_choose_title: 'لماذا تستخدم أداة تحويل الصورة إلى أبيض وأسود هذه',
	tool_image_grayscale_why_choose_item_1:
		'تُعاد كتابة البكسلات نفسها، فيبقى الملف المنزَّل أبيض وأسود في أي تطبيق — بخلاف مرشّح CSS أو إعداد العرض.',
	tool_image_grayscale_why_choose_item_2:
		'سبع طرق بدل مرشّح واحد ثابت. في المثال يصبح الأحمر النقي 76 بإضاءة Rec.601 و 85 بالمتوسط العادي — وطريقة الإشراق تحوّل الأحمر والأخضر والأزرق والأصفر إلى الرمادي نفسه 128.',
	tool_image_grayscale_why_choose_item_3:
		'أوضاع القناة الواحدة تعيد تأثير مرشّحات أبيض وأسود: القناة الحمراء تُعتّم السماء الزرقاء وتنعّم البشرة، والزرقاء تفتح السماء وتُبرز النمش.',
	tool_image_grayscale_why_choose_item_4: 'شريط الشدة يعطي مظهراً باهتاً بإزالة تشبع جزئية، إضافة إلى أبيض وأسود كامل.',
	tool_image_grayscale_why_choose_item_5: 'تُحفظ الشفافية في PNG و WebP، وتُعالج الصورة في علامة تبويب المتصفح هذه دون رفع إلى خادم.',
	tool_image_grayscale_rules_title: 'صيغ التدرج الرمادي المستخدمة',
	tool_image_grayscale_rules_body: 'R و G و B قيم البكسل من 0 إلى 255؛ تُكتب النتيجة Y في القنوات الثلاث.',
	tool_image_grayscale_rules_item_1: 'إضاءة Rec.601: Y = 0.299 R + 0.587 G + 0.114 B — أوزان التلفزيون و JPEG الكلاسيكية، الأقرب لسطوع كل لون كما يُرى.',
	tool_image_grayscale_rules_item_2: 'إضاءة Rec.709: Y = 0.2126 R + 0.7152 G + 0.0722 B — أوزان فيديو HD، وتستخدمها أيضاً مرشّحة CSS grayscale(). كما في معظم المحرّرات، تُطبَّق على قيم sRGB المخزّنة دون تحويل غاما خطي.',
	tool_image_grayscale_rules_item_3: 'المتوسط: Y = (R + G + B) ÷ 3. الإشراق: Y = (الأكبر + الأصغر) ÷ 2. أوضاع القناة تنسخ R أو G أو B وحدها.',
	tool_image_grayscale_rules_item_4: 'الشدة s: القيمة الجديدة = الأصلية + (Y − الأصلية) × s. عند 100% كل بكسل رمادي؛ عند 50% الألوان في منتصف الطريق إلى الرمادي.',
	tool_image_grayscale_rules_item_5: 'قناة ألفا (الشفافية) لا تتغيّر؛ JPEG يملؤها بلون الخلفية. GIF المتحرّك يستخدم الإطار الأول. الحفظ يعيد ترميز الصورة.',
	tool_image_grayscale_example_title: 'مثال',
	tool_image_grayscale_example:
		'المثال فيه أشرطة أحمر وأخضر وأزرق وأصفر نقية فوق شريط قوس قزح. بإضاءة Rec.601 تصبح 76 و 150 و 29 و 226 — أربعة رماديات متمايزة بوضوح. Rec.709 تعطي 54 و 182 و 18 و 237؛ المتوسط يعطي 85 و 85 و 85 و 170 فيندمج الأحمر والأخضر والأزرق؛ الإشراق يحوّل الأربعة إلى 128. بدّل الطرق لمشاهدة المعاينة ثم حوّل ونزّل.',
	tool_image_grayscale_usecases_title: 'متى تستخدمها',
	tool_image_grayscale_usecase_1: 'صور أبيض وأسود للبورتريه أو المنشورات أو مظهر قديم — جرّب القناة الحمراء لإحساس مرشّح أفلام كلاسيكي.',
	tool_image_grayscale_usecase_2: 'قبل الطباعة على طابعة ليزر أحادية أو لجريدة: حوّل أولاً لترى كيف تنفصل الألوان إلى رمادي.',
	tool_image_grayscale_usecase_3: 'فحص مخطط أو شعار أو لوحة ألوان واجهة: إن صار لونان نفس الرمادي، قد يصعب على ذوي اختلاف رؤية الألوان التمييز بينهما.',
	tool_image_grayscale_usecase_4: 'تحضير المسح والمستندات: التدرج الرمادي يزيل اصطباغ الورق ويبقي الملف بسيطاً.',
	tool_image_grayscale_faq_q1: 'لماذا تبدو صورتي بالأبيض والأسود مسطّحة؟',
	tool_image_grayscale_faq_a1:
		'الألوان التي تختلف في الصبغة فقط قد تنتهي بنفس الرمادي. الزهرة الحمراء على أوراق خضراء مثال كلاسيكي: بطريقة المتوسط كلاهما 85. انتقل إلى الإضاءة أو جرّب قناة الأحمر أو الأخضر لفصلها.',
	tool_image_grayscale_faq_q2: 'هل تُرفع صورتي؟',
	tool_image_grayscale_faq_a2:
		'لا. فك الترميز والتحويل والحفظ تعمل في علامة تبويب المتصفح هذه. احتفظ بالملف الأصلي إن قد تحتاج النسخة الملوّنة — لا يمكن إعادة اللون من التنزيل الرمادي.',
	tool_image_grayscale_faq_q3: 'أي طريقة تدرج رمادي أختار؟',
	tool_image_grayscale_faq_a3:
		'للصور ابدأ بإضاءة Rec.601: توزّن الأخضر أكثر والأزرق أقل، بما يطابق سطوع الألوان كما تُرى. Rec.709 أسطع قليلاً في الأخضر. المتوسط والإشراق أبسط لكنهما قد يسطّحان الصور الغنية بالألوان. استخدم قناة واحدة حين تريد تأثيراً مرشّحاً متعمّداً.',
	tool_image_grayscale_faq_q4: 'هل الملف المنزَّل صورة تدرج رمادي حقيقية، وهل يصغر حجمها؟',
	tool_image_grayscale_faq_a4:
		'لكل بكسل قيم R و G و B متساوية، فيُعرض ويُطبع رمادياً خالصاً. المتصفحات تحفظه كملف RGB عادي لا كقناة واحدة، فانخفاض الحجم متواضع — وغالباً أوضح لـ PNG. استخدم محرّر صور إن احتجت وضع لون تدرج رمادي 8 بت.',
	tool_image_grayscale_faq_q5: 'هل هذا مثل مرشّح CSS grayscale() أو مرشّح الهاتف الأحادي؟',
	tool_image_grayscale_faq_a5:
		'CSS grayscale(100%) يستخدم نفس أوزان خيار Rec.709، لكنه يغيّر عرض الصفحة فقط؛ الملف يبقى ملوّناً. مرشّحات الهاتف غالباً تضيف تبايناً أو نغمة. هذه الأداة تكتب بكسلات رمادية صريحة في ملف جديد.',
	tool_image_grayscale_faq_q6: 'ماذا يحدث لصور PNG الشفافة؟',
	tool_image_grayscale_faq_a6:
		'تُحفظ الشفافية عند تنزيل PNG أو WebP. JPEG لا يخزّن الشفافية، فتُملأ تلك المناطق بلون خلفية JPEG من الإعدادات المتقدمة.',
	tool_image_grayscale_faq_q7: 'هل يمكنني الإبقاء على قليل من اللون؟',
	tool_image_grayscale_faq_a7:
		'نعم. اخفض الشدة: 70–80% يعطي مظهراً باهتاً بإزالة تشبع جزئية، و 0% يترك الصورة كما هي. إبقاء لون واحد فقط (تلوين انتقائي) يحتاج قناعاً، وهذه الصفحة لا تفعله.',
	tool_image_grayscale_article: 'تحويل الصورة إلى تدرج رمادي',
	tool_image_grayscale_ref_a_label: 'Wikipedia — التدرج الرمادي (تحويل اللون إلى رمادي)',
	tool_image_grayscale_ref_b_label: 'W3C Filter Effects — مصفوفة grayscale()',
};

export default ar;
