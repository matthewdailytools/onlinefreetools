/**
 * i18n tool shard (pdf-to-jpg / ar). إعادة كتابة مستقلة لنية البحث العربية.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_pdf_to_jpg_article:
    'يعرض مُصيّر الصفحات كل صفحة كـ JPEG في المتصفح. الصفحات المتعددة تُحمَّل كـ ZIP عبر مكتبة ZIP؛ الملف يبقى على جهازك.',
  tool_pdf_to_jpg_choose_file: 'اختر PDF',
  tool_pdf_to_jpg_clear: 'مسح',
  tool_pdf_to_jpg_convert: 'تحويل',
  tool_pdf_to_jpg_desc: 'حوّل صفحات PDF إلى JPG على جهازك—ZIP عند تعدد الصفحات؛ دون رفع إلى خادم.',
  tool_pdf_to_jpg_description:
    'حوّل صفحات PDF إلى صور JPG في المتصفح—الملف يبقى على جهازك ولا يُرفع إلى خادم. الخطوات: اختر PDF، اضغط تحويل ثم تنزيل. مثال: عيّنة من صفحتين تُنتج page-1.jpg و page-2.jpg داخل ZIP. صفحة واحدة تُنزَّل كـ JPG مباشرة. الملفات المشفّرة أو التالفة تعرض خطأً واضحاً.',
  tool_pdf_to_jpg_download: 'تنزيل',
  tool_pdf_to_jpg_drop_hint: 'أو أسقط PDF هنا. المعالجة في هذا التبويب.',
  tool_pdf_to_jpg_empty: 'اختر ملف PDF أولاً.',
  tool_pdf_to_jpg_err_convert: 'فشل التحويل. تحقق من الملف وأعد المحاولة.',
  tool_pdf_to_jpg_err_encrypted: 'يبدو أن PDF محمي بكلمة مرور. أزل الحماية ثم أعد المحاولة.',
  tool_pdf_to_jpg_err_fflate: 'تعذّر تحميل مكتبة ZIP. تحقق من الشبكة وأعد المحاولة.',
  tool_pdf_to_jpg_err_load: 'تعذّر قراءة PDF (تالف أو غير مدعوم). جرّب ملفاً آخر.',
  tool_pdf_to_jpg_err_pdfjs: 'تعذّر تحميل عارض PDF. تحقق من الشبكة وأعد المحاولة.',
  tool_pdf_to_jpg_example:
    'العيّنة تنشئ PDF من صفحتين، تحوّل كل صفحة، وتفعّل التنزيل كـ ZIP يحتوي page-1.jpg و page-2.jpg.',
  tool_pdf_to_jpg_example_title: 'تحويل صفحات PDF إلى JPG',
  tool_pdf_to_jpg_faq_a1:
    'لا. يعمل مُصيّر الصفحات و مكتبة ZIP في تبويبك (قد تُحمَّل السكربتات من CDN). PDF لا يُرفع إلى خوادمنا.',
  tool_pdf_to_jpg_faq_a2:
    'أكثر من صفحة → ZIP باسم pdf-pages.zip مع page-1.jpg و page-2.jpg… صفحة واحدة → JPG واحد.',
  tool_pdf_to_jpg_faq_a3:
    'صور إلى PDF يدمج الصور في PDF متعدد الصفحات. هذه الأداة تصدّر كل صفحة PDF كصورة JPG منفصلة.',
  tool_pdf_to_jpg_faq_a4:
    'تُعرض الصفحات بمقياس 2× لنص أوضح على الشاشة. ملفات PDF كبيرة جداً قد تستغرق وقتاً أطول.',
  tool_pdf_to_jpg_faq_a5:
    'هذه الصفحة تُخرج JPG فقط. استخدم محوّل صيغ الصور إذا احتجت PNG أو WebP من صورة موجودة.',
  tool_pdf_to_jpg_faq_q1: 'هل يُرفع PDF؟',
  tool_pdf_to_jpg_faq_q2: 'متى أحصل على ZIP مقابل JPG واحد؟',
  tool_pdf_to_jpg_faq_q3: 'ما الفرق عن صور إلى PDF؟',
  tool_pdf_to_jpg_faq_q4: 'لماذا يبدو JPG واضحاً أو ضبابياً؟',
  tool_pdf_to_jpg_faq_q5: 'هل يمكن PNG؟',
  tool_pdf_to_jpg_how_body:
    'اختر PDF، اضغط تحويل ثم تنزيل. كل صفحة تصبح JPG؛ الصفحات المتعددة في ZIP. كل شيء محلياً بعد تحميل المكتبات.',
  tool_pdf_to_jpg_how_title: 'كيف يعمل',
  tool_pdf_to_jpg_pages_label: 'الصفحات',
  tool_pdf_to_jpg_rules_body: 'مقياس العرض، مخرجات JPG، ZIP مقابل ملف واحد، الخصوصية والأخطاء.',
  tool_pdf_to_jpg_rules_item_1:
    'كل صفحة تُصدَّر JPEG بمقياس 2× وجودة 0.92—مناسب للعروض والمسح الضوئي.',
  tool_pdf_to_jpg_rules_item_2: 'التسمية: page-N.jpg للصفحة N. مهام متعددة → pdf-pages.zip.',
  tool_pdf_to_jpg_rules_item_3: 'المخرج: صفحة واحدة → JPG؛ صفحتان أو أكثر → ZIP عبر مكتبة ZIP.',
  tool_pdf_to_jpg_rules_item_4:
    'الخصوصية والحدود: البيانات في التبويب؛ PDF مشفّر/تالف يفشل بوضوح؛ >25 MB قد يكون بطيئاً.',
  tool_pdf_to_jpg_rules_title: 'قواعد متوقعة',
  tool_pdf_to_jpg_sample: 'تحميل عيّنة',
  tool_pdf_to_jpg_stats_tpl: '{n} صفحة · {bytes}',
  tool_pdf_to_jpg_status_converting: 'جارٍ تحويل الصفحات إلى JPG…',
  tool_pdf_to_jpg_status_done: 'تم — اضغط تنزيل للحفظ.',
  tool_pdf_to_jpg_title: 'تحويل صفحات PDF إلى JPG',
  tool_pdf_to_jpg_usecase_1: 'مكتب: صدّر شريحة أو صفحة موقّعة للصقها في الدردشة.',
  tool_pdf_to_jpg_usecase_2: 'تسويق: استخرج صور مصغّرة JPG من كatalog PDF.',
  tool_pdf_to_jpg_usecase_3: 'طلاب: احفظ صفحات PDF كصور للملاحظات.',
  tool_pdf_to_jpg_usecases_title: 'حالات مناسبة',
  tool_pdf_to_jpg_warn_large: 'ملف أكبر من ~25 MB — قد يكون التحويل بطيئاً أو يفشل في بعض المتصفحات.',
  tool_pdf_to_jpg_warn_pdflib: 'تعذّر تحميل مكتبة PDF. تحقق من الشبكة وأعد المحاولة.',
};
export default ar;
