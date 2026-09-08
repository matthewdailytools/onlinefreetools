/**
 * i18n tool shard (convert-a-jpg-to-text-with-ocr / ar).
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_convert_a_jpg_to_text_with_ocr_advanced: 'إعدادات متقدمة (اختياري)',
  tool_convert_a_jpg_to_text_with_ocr_article:
    'أفلت صورة مطبوعة أو لقطة شاشة، اضغط تحويلاً في هذا التبويب، ثم انسخ النص أو نزّل TXT. الصينية والإنجليزية افتراضيتان؛ العربية واليابانية تحمّلان حزمة عند اختيار الشريحة. الملف يبقى على جهازك ولا يُرفع إلى خادم.',
  tool_convert_a_jpg_to_text_with_ocr_choose_file: 'اختر JPG أو PNG أو WebP',
  tool_convert_a_jpg_to_text_with_ocr_clear: 'مسح',
  tool_convert_a_jpg_to_text_with_ocr_confidence_tpl: 'متوسط الثقة: {n}%',
  tool_convert_a_jpg_to_text_with_ocr_convert: 'تحويل',
  tool_convert_a_jpg_to_text_with_ocr_copied: 'تم النسخ.',
  tool_convert_a_jpg_to_text_with_ocr_copy: 'نسخ النص',
  tool_convert_a_jpg_to_text_with_ocr_desc:
    'حوّل JPG إلى نص بالتعرّف الضوئي على جهازك دون رفع إلى خادم.',
  tool_convert_a_jpg_to_text_with_ocr_description:
    'حوّل صورة JPG أو لقطة شاشة إلى نص يمكن نسخه: التعرّف يجري في هذا التبويب ولا يُرفع الملف إلى خادم. PNG وWebP يعملان كذلك. الخطوات: أفلت الصورة، تحويل، نسخ النص أو تنزيل TXT. المثال: تحميل مثال يرسم ONLINEFREETOOLS وThe quick brown fox. يُبحث أيضاً استخراج نص من صورة وOCR عربي للصورة. الصينية والإنجليزية افتراضياً؛ العربية شريحة لغة.',
  tool_convert_a_jpg_to_text_with_ocr_download: 'تنزيل TXT',
  tool_convert_a_jpg_to_text_with_ocr_drop_hint: 'أو أفلت الصورة هنا. المعالجة تبقى في التبويب.',
  tool_convert_a_jpg_to_text_with_ocr_empty: 'اختر صورة أولاً.',
  tool_convert_a_jpg_to_text_with_ocr_err_empty: 'لا نص مطبوع. جرّب صورة أوضح، لا مخطوطة بخط اليد.',
  tool_convert_a_jpg_to_text_with_ocr_err_engine: 'تعذّر تحميل المحرّك. حدّث الصفحة ثم اضغط تحويلاً.',
  tool_convert_a_jpg_to_text_with_ocr_err_load: 'تعذّر قراءة الصورة. استخدم JPEG أو PNG أو WebP.',
  tool_convert_a_jpg_to_text_with_ocr_err_pdf:
    'هذه الصفحة للصور لا لملفات PDF. إن كان للـ PDF طبقة نص فاستخدم استخراج النص من PDF.',
  tool_convert_a_jpg_to_text_with_ocr_err_size: 'الملف أكبر من 12 ميغابايت. اضغطه أو اقتصه أولاً.',
  tool_convert_a_jpg_to_text_with_ocr_example:
    'تحميل مثال يرسم JPEG فيه ONLINEFREETOOLS وThe quick brown fox و印刷体样例 ثم يملأ التحويل المربع (الصينية تحتاج شريحة الصينية+الإنجليزية).',
  tool_convert_a_jpg_to_text_with_ocr_example_title: 'مثال',
  tool_convert_a_jpg_to_text_with_ocr_faq_a1:
    'لا. تبقى الصورة على جهازك. تُحمَّل السكربتات من هذا الموقع ولا نرفع ملفك إلى خادم.',
  tool_convert_a_jpg_to_text_with_ocr_faq_a2:
    'استخراج نص PDF يقرأ طبقة موجودة. هنا نتعرّف على صورة. لا نقبل PDF الماسح.',
  tool_convert_a_jpg_to_text_with_ocr_faq_a3:
    'نعم. لقطة PNG تمرّ عبر زر التحويل نفسه. لا عنوان منفصل لـ«صورة إلى نص».',
  tool_convert_a_jpg_to_text_with_ocr_faq_a4:
    'الحروف المطبوعة أوضح. خط اليد المتصل يفشل كثيراً؛ ليست أداة خط عربي يدوي.',
  tool_convert_a_jpg_to_text_with_ocr_faq_a5:
    'الصينية والإنجليزية محددتان سلفاً. اختر العربية لصور عربية. اليابانية تحمّل حزمة أكبر. لا مسار منفصل لـ OCR عربي.',
  tool_convert_a_jpg_to_text_with_ocr_faq_a6:
    '«OCR أونلاين» بحث عام. هنا TXT فقط: لا وورد ولا PDF قابل للبحث ولا جدول ولا برنامج تثبيت.',
  tool_convert_a_jpg_to_text_with_ocr_faq_a7:
    'التعرّف على النص يعني تحويل البكسل المطبوع إلى أسطر قابلة للنسخ. صورة واحدة لكل تحويل. كومة الصور على «حوّل عدة صور JPG إلى نص بالتعرّف الضوئي دفعة واحدة».',
  tool_convert_a_jpg_to_text_with_ocr_faq_a8:
    'هذه الصفحة صورة واحدة ونسخ نص وملف TXT. للتحويل دفعة واحدة وتخطي صف فاشل وأرشيف ZIP استخدم «حوّل عدة صور JPG إلى نص بالتعرّف الضوئي دفعة واحدة».',
  tool_convert_a_jpg_to_text_with_ocr_faq_q1: 'هل تُرفع صورتي إلى خادم؟',
  tool_convert_a_jpg_to_text_with_ocr_faq_q2: 'ما الفرق عن استخراج نص من PDF؟',
  tool_convert_a_jpg_to_text_with_ocr_faq_q3: 'هل تعمل لقطة الشاشة أو PNG؟',
  tool_convert_a_jpg_to_text_with_ocr_faq_q4: 'هل يُقرأ خط اليد؟',
  tool_convert_a_jpg_to_text_with_ocr_faq_q5: 'كيف أختار العربية أو الصينية؟',
  tool_convert_a_jpg_to_text_with_ocr_faq_q6: 'هل هذا OCR أونلاين يصدّر وورد؟',
  tool_convert_a_jpg_to_text_with_ocr_faq_q7: 'ماذا يعني استخراج النص من الصورة هنا؟',
  tool_convert_a_jpg_to_text_with_ocr_faq_q8: 'هل يمكن تحويل عدة صور JPG دفعة واحدة؟',
  tool_convert_a_jpg_to_text_with_ocr_how_body:
    'حوّل الحروف المطبوعة في صورة إلى نص يُنسخ: أفلت JPG، اضغط تحويلاً (يُحمَّل المحرّك أول مرة) ثم نسخ النص أو تنزيل TXT.',
  tool_convert_a_jpg_to_text_with_ocr_how_item_1: 'أفلت JPG أو PNG أو WebP (أو اختر ملفاً).',
  tool_convert_a_jpg_to_text_with_ocr_how_item_2: 'اختياري: اختر شريحة اللغة (الصينية والإنجليزية افتراضياً).',
  tool_convert_a_jpg_to_text_with_ocr_how_item_3: 'اضغط تحويلاً — أول تشغيل يحمّل المحرّك في هذا التبويب ثم يقرأ الصورة.',
  tool_convert_a_jpg_to_text_with_ocr_how_item_4: 'اضغط نسخ النص أو تنزيل TXT.',
  tool_convert_a_jpg_to_text_with_ocr_how_title: 'طريقة الاستخدام',
  tool_convert_a_jpg_to_text_with_ocr_lang_ar: 'العربية',
  tool_convert_a_jpg_to_text_with_ocr_lang_en: 'الإنجليزية',
  tool_convert_a_jpg_to_text_with_ocr_lang_ja: 'اليابانية',
  tool_convert_a_jpg_to_text_with_ocr_lang_legend: 'لغة التعرّف',
  tool_convert_a_jpg_to_text_with_ocr_lang_zh: 'الصينية',
  tool_convert_a_jpg_to_text_with_ocr_lang_zh_en: 'الصينية + الإنجليزية',
  tool_convert_a_jpg_to_text_with_ocr_low_conf: 'عرض كلمات دون 50٪ ثقة (النص الكامل يبقى أعلاه)',
  tool_convert_a_jpg_to_text_with_ocr_low_conf_label: 'كلمات بثقة منخفضة',
  tool_convert_a_jpg_to_text_with_ocr_max_edge: 'أطول ضلع قبل القراءة (بكسل)',
  tool_convert_a_jpg_to_text_with_ocr_max_edge_hint: 'الافتراضي 2048. صغّره على الهاتف.',
  tool_convert_a_jpg_to_text_with_ocr_meta_tpl: '{name} · {w}×{h}px',
  tool_convert_a_jpg_to_text_with_ocr_preview_label: 'النص المتعرَّف عليه',
  tool_convert_a_jpg_to_text_with_ocr_rules_body:
    'إن تجاوز الضلع الأطول الحد نُصغّر الصورة ثم نقرأ المناطق المطبوعة بترتيب بصري. نسبة الثقة تلميح وليست تدقيقاً.',
  tool_convert_a_jpg_to_text_with_ocr_rules_item_1: 'الناتج نص عادي (.txt). الجدول يصبح أسطر قراءة لا خلايا CSV.',
  tool_convert_a_jpg_to_text_with_ocr_rules_item_2: 'يبقى الملف على جهازك ولا يُرفع إلى خادم. السكربتات من هذا الموقع.',
  tool_convert_a_jpg_to_text_with_ocr_rules_item_3: 'خط اليد والضباب والمنظور الحاد تفشل غالباً. الأعمدة المتعددة قد تختلط.',
  tool_convert_a_jpg_to_text_with_ocr_rules_item_4: 'صورة واحدة لكل تحويل. خارج النطاق: PDF ووورد وPDF قابل للبحث والجداول.',
  tool_convert_a_jpg_to_text_with_ocr_rules_title: 'ما يمكن توقعه',
  tool_convert_a_jpg_to_text_with_ocr_sample: 'تحميل مثال',
  tool_convert_a_jpg_to_text_with_ocr_status_done: 'تم.',
  tool_convert_a_jpg_to_text_with_ocr_status_loading: 'جارٍ تحميل محرّك التعرّف…',
  tool_convert_a_jpg_to_text_with_ocr_status_reading: 'جارٍ القراءة…',
  tool_convert_a_jpg_to_text_with_ocr_title: 'حوّل صورة JPG إلى نص بالتعرّف الضوئي',
  tool_convert_a_jpg_to_text_with_ocr_usecase_1: 'صوّر ورقة مطبوعة والصق الأسطر في ملاحظاتك.',
  tool_convert_a_jpg_to_text_with_ocr_usecase_2: 'استخرج نص لقطة محادثة أو رسالة خطأ حين يتعذّر التحديد.',
  tool_convert_a_jpg_to_text_with_ocr_usecase_3: 'انسخ حروفاً مطبوعة صينية أو إنجليزية من قائمة أو دليل (لا قائمة مكتوبة يدوياً).',
  tool_convert_a_jpg_to_text_with_ocr_usecases_title: 'متى يناسبك',
};
export default ar;
