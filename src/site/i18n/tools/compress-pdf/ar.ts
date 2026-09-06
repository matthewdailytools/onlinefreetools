/**
 * i18n 工具分片（compress-pdf / ar）。按当地检索习惯独立重写。
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_compress_pdf_article:
    'صغّر حجم PDF في المتصفح بإعادة رسم كل صفحة كـ JPEG ثم إعادة بناء الملف—يبقى على جهازك دون رفع إلى خادم. ضغط محدود وصريح، وليس إعادة ترميز سحابية.',
  tool_compress_pdf_choose_file: 'اختر PDF',
  tool_compress_pdf_clear: 'مسح',
  tool_compress_pdf_compress: 'ضغط',
  tool_compress_pdf_desc:
    'اضغط PDF في المتصفح لتقليل الحجم—الملف يبقى على جهازك دون رفعه إلى خادم.',
  tool_compress_pdf_description:
    'اضغط حجم PDF في المتصفح وقارن البايتات قبل وبعد—لا يُرفع شيء إلى خادم. الخطوات: افتح PDF، اختر متوسط أو منخفض، اضغط ثم نزّل. مثال: عيّنة من صفحتين بصور تنخفض من ~180 KB إلى ~90 KB على المتوسط. PDF نصي فقط قد لا يتغير كثيراً. الملفات المشفرة تفشل برسالة واضحة. يختلف عن تنظيم الصفحات أو دمج الملفات.',
  tool_compress_pdf_download: 'تنزيل',
  tool_compress_pdf_drop_hint: 'أو اسحب PDF هنا. المعالجة داخل هذا التبويب.',
  tool_compress_pdf_empty: 'أضف PDF للضغط.',
  tool_compress_pdf_err_compress: 'فشل الضغط. تحقق من الملف وأعد المحاولة.',
  tool_compress_pdf_err_encrypted: 'يبدو أن PDF محمي بكلمة مرور. أزل الحماية أولاً.',
  tool_compress_pdf_err_load: 'تعذر قراءة PDF (تالف أو غير مدعوم). جرّب ملفاً آخر.',
  tool_compress_pdf_example:
    'العيّنة تحمّل PDF من صفحتين بكتل لونية وJPEG مضمّن، تضغط بجودة متوسطة، تعرض الحجم قبل/بعد مع نسبة التوفير، وتفعّل تنزيل compressed.pdf.',
  tool_compress_pdf_example_title: 'تصغير حجم ملف PDF',
  tool_compress_pdf_faq_a1:
    'لا. pdf.js و مكتبة PDF يعملان في تبويبك (قد تُحمّل المكتبات من هذا الموقع). PDF لا يُرفع إلى خوادمنا.',
  tool_compress_pdf_faq_a2:
    'الأداة تحوّل كل صفحة إلى JPEG وتعيد بناء PDF. الملفات النصية أو المضغوطة مسبقاً قد لا تتقلص كثيراً. ليست إعادة ضغط سحابية للتدفقات المضمّنة.',
  tool_compress_pdf_faq_a3:
    'لا. الصفحات تُعاد رسمها كصور في المتصفح—لا خطوة سحابية وبياناتك لا تغادر الجهاز.',
  tool_compress_pdf_faq_a4: 'PDF المحمي بكلمة مرور يفشل عادة هنا. أزل كلمة المرور ثم اضغط.',
  tool_compress_pdf_faq_a5:
    'المتوسط يحافظ على تفاصيل أكثر (مقياس 1.2، JPEG ~72%). المنخفض أصغر لكن أنعم (مقياس 1.0، JPEG ~55%). اختر حسب حدود البريد مقابل الوضوح.',
  tool_compress_pdf_faq_q1: 'هل يُرفع PDF؟',
  tool_compress_pdf_faq_q2: 'لماذا لم يتقلص تقريباً؟',
  tool_compress_pdf_faq_q3: 'هل هذا ترميز سحابي؟',
  tool_compress_pdf_faq_q4: 'ماذا عن PDF المشفر؟',
  tool_compress_pdf_faq_q5: 'أي جودة أختار؟',
  tool_compress_pdf_how_body:
    'اختر PDF، حدّد متوسط أو منخفض، اضغط «ضغط» ثم «تنزيل». كل صفحة تُحفظ كـ JPEG في PDF جديد. الإحصائيات تعرض الحجم الأصلي والجديد ونسبة التغيير. المكتبات تُحمّل عند أول استخدام.',
  tool_compress_pdf_how_item_1: "اختر الإدخال عبر «اختر PDF»",
  tool_compress_pdf_how_item_2: "اضبط الخيارات ثم اضغط «ضغط»",
  tool_compress_pdf_how_item_3: "راجع المعاينة أو عدد الصفحات أو رسالة الحالة",
  tool_compress_pdf_how_item_4: "اضغط «تنزيل» لحفظ النتيجة",
  tool_compress_pdf_how_title: 'كيف يعمل',
  tool_compress_pdf_pages_label: 'صفحات',
  tool_compress_pdf_quality_label: 'الجودة',
  tool_compress_pdf_quality_low: 'منخفض — ملف أصغر',
  tool_compress_pdf_quality_med: 'متوسط — متوازن',
  tool_compress_pdf_rules_body:
    'كيف تعمل إعدادات JPEG والإحصائيات والخصوصية وحالات الفشل عند الضغط محلياً.',
  tool_compress_pdf_rules_item_1:
    'المحرك: pdf.js يرسم كل صفحة على canvas؛ مكتبة PDF يضمّن JPEG في PDF جديد—ملفك لا يمر عبر الخادم.',
  tool_compress_pdf_rules_item_2:
    'الإعدادات: متوسط (مقياس 1.2، JPEG ~72%) مقابل منخفض (مقياس 1.0، JPEG ~55%). الأقل = أصغر لكن أقل حدة.',
  tool_compress_pdf_rules_item_3:
    'الإحصائيات: بايتات أصلية ومضغوطة ونسبة التغيير. توفير أقل من 5% يظهر تنبيهاً «تغيير طفيف».',
  tool_compress_pdf_rules_item_4:
    'حدود: PDF مشفر/تالف يفشل برسالة؛ ملفات ضخمة (>~25 MB) بطيئة؛ PDF نصي فقط قد لا ينفع كثيراً.',
  tool_compress_pdf_rules_title: 'قواعد متوقعة',
  tool_compress_pdf_sample: 'تحميل عيّنة',
  tool_compress_pdf_stats_tpl: '{from} → {to} · وفّرت {pct}%',
  tool_compress_pdf_status_done: 'تم — انقر تنزيل لحفظ compressed.pdf.',
  tool_compress_pdf_status_working: 'جارٍ ضغط PDF…',
  tool_compress_pdf_title: 'تقليل حجم ملف PDF',
  tool_compress_pdf_usecase_1: 'مكتب: صغّر مسحاً قبل حد مرفق البريد.',
  tool_compress_pdf_usecase_2: 'طلاب: قلّص PDF فيه صور لحد رفع النموذج.',
  tool_compress_pdf_usecase_3: 'أصحاب مواقع: خفّف PDF تسويقي للمشاركة عندما تكفي جودة الصورة.',
  tool_compress_pdf_usecases_title: 'حالات مناسبة',
  tool_compress_pdf_warn_large: 'الملف أكبر من ~25 MB—الضغط قد يكون بطيئاً أو يفشل في بعض المتصفحات.',
  tool_compress_pdf_warn_little: 'تغيير طفيف—PDF نصي أو مضغوط مسبقاً قد لا يستفيد من JPEG.',
  tool_compress_pdf_warn_pdflib: 'فشل تحميل مكتبة PDF. تحقق من الشبكة وأعد المحاولة.',
  tool_compress_pdf_warn_pdfjs: 'فشل تحميل عارض PDF. تحقق من الشبكة وأعد المحاولة.',
};
export default ar;
