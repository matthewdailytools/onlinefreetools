/**
 * i18n tool shard (pdf-page-to-image-sizes / ar). إعادة كتابة مستقلة للبحث العربي.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_pdf_page_to_image_sizes_article:
    'اختر صفحة PDF واحدة وصدّرها كحزمة JPEG جاهزة للمنصات — مربع 1080، OG 1200×630، HD 1280×720، وعمودي 1080×1920. مُصيّر الصفحات يرسم مرة واحدة؛ Canvas يضبط كل حجم مع هوامش بيضاء عند الحاجة.',
  tool_pdf_page_to_image_sizes_choose_file: 'اختر PDF',
  tool_pdf_page_to_image_sizes_clear: 'مسح',
  tool_pdf_page_to_image_sizes_desc:
    'صدّر صفحة PDF واحدة كحزمة JPEG بأحجام متعددة على جهازك — ZIP؛ دون رفع إلى خادم.',
  tool_pdf_page_to_image_sizes_description:
    'حوّل صفحة PDF واحدة إلى حزمة JPEG بأحجام متعددة في المتصفح — الملف يبقى على جهازك ولا يُرفع إلى خادم. اختر PDF، حدّد رقم الصفحة (افتراضي 1)، اضغط تصدير ثم تنزيل ZIP يحتوي page-N-WxH.jpg. مثال: غلاف العينة يصدّر أربعة أحجام (1080²، 1200×630، 1280×720، 1080×1920). PDFs المحمية أو التالفة تعرض خطأ واضح.',
  tool_pdf_page_to_image_sizes_download: 'تنزيل',
  tool_pdf_page_to_image_sizes_drop_hint: 'أو أسقط PDF هنا. المعالجة داخل هذا التبويب.',
  tool_pdf_page_to_image_sizes_empty: 'اختر ملف PDF أولاً.',
  tool_pdf_page_to_image_sizes_err_bad_page: 'رقم الصفحة خارج النطاق. تحقق من العدد الكلي وحاول مجدداً.',
  tool_pdf_page_to_image_sizes_err_encrypted: 'يبدو أن PDF محمي بكلمة مرور. أزل الحماية ثم أعد المحاولة.',
  tool_pdf_page_to_image_sizes_err_export: 'فشل التصدير. تحقق من الملف ورقم الصفحة.',
  tool_pdf_page_to_image_sizes_err_fflate: 'تعذّر تحميل مكتبة ZIP. تحقق من الشبكة.',
  tool_pdf_page_to_image_sizes_err_load: 'تعذّر قراءة PDF (تالف أو غير مدعوم). جرّب ملفاً آخر.',
  tool_pdf_page_to_image_sizes_err_pdfjs: 'تعذّر تحميل عارض PDF. تحقق من الشبكة.',
  tool_pdf_page_to_image_sizes_example:
    'العينة تنشئ PDF بصفحة واحدة، تصدّر الصفحة 1 بأربعة أحجام JPEG، وتفعّل تنزيل page-1-sizes.zip.',
  tool_pdf_page_to_image_sizes_example_title: 'مثال',
  tool_pdf_page_to_image_sizes_export: 'تصدير',
  tool_pdf_page_to_image_sizes_faq_a1:
    'لا. مُصيّر الصفحات ومكتبة PDF ومكتبة ZIP يعملان في تبويبك (قد تُحمَّل السكربتات من هذا الموقع). PDF لا يُرفع إلى خوادمنا.',
  tool_pdf_page_to_image_sizes_faq_a2:
    'PDF إلى JPG يصدّر كل صفحة بنسبتها الأصلية. هذه الأداة تختار صفحة واحدة وتضبطها في أحجام منصات ثابتة (contain، مركز، هوامش بيضاء).',
  tool_pdf_page_to_image_sizes_faq_a3:
    '1080×1080 (مربع Instagram)، 1200×630 (معاينة Open Graph / Facebook)، 1280×720 (أفقي HD)، 1080×1920 (قصة / عمودي).',
  tool_pdf_page_to_image_sizes_faq_a4:
    'تُصغَّر أو تُكبَّر الصفحة لتدخل كاملة دون قص. الفراغ يُملأ بالأبيض لJPEG نظيف.',
  tool_pdf_page_to_image_sizes_faq_a5:
    'ملفات فوق ~25 MB قد تكون بطيئة أو تفشل في بعض المتصفحات. الصفحات المعقدة تستهلك ذاكرة أكثر.',
  tool_pdf_page_to_image_sizes_faq_q1: 'هل يُرفع PDF؟',
  tool_pdf_page_to_image_sizes_faq_q2: 'ما الفرق عن PDF إلى JPG؟',
  tool_pdf_page_to_image_sizes_faq_q3: 'ما الأحجام المضمّنة؟',
  tool_pdf_page_to_image_sizes_faq_q4: 'لماذا يوجد فراغ أبيض حول الصورة؟',
  tool_pdf_page_to_image_sizes_faq_q5: 'هل هناك حد لحجم الملف؟',
  tool_pdf_page_to_image_sizes_how_body:
    'اختر PDF، أدخل رقم الصفحة (يبدأ من 1)، اضغط تصدير ثم تنزيل. رسم مرة واحدة ثم ضبط لكل حجم preset وتعبئة ZIP.',
  tool_pdf_page_to_image_sizes_how_title: 'كيف يعمل',
  tool_pdf_page_to_image_sizes_page_label: 'رقم الصفحة',
  tool_pdf_page_to_image_sizes_pages_label: 'الصفحات',
  tool_pdf_page_to_image_sizes_rules_body:
    'أحجام preset، سلوك contain، JPEG، تسمية ZIP، الخصوصية والفشل.',
  tool_pdf_page_to_image_sizes_rules_item_1:
    'Presets: 1080×1080 (instagram-square)، 1200×630 (og-facebook)، 1280×720 (hd-landscape)، 1080×1920 (story-portrait).',
  tool_pdf_page_to_image_sizes_rules_item_2:
    'ارسم الصفحة المختارة مرة بscale 2×، ثم drawImage contain في المركز؛ JPEG جودة 0.9.',
  tool_pdf_page_to_image_sizes_rules_item_3:
    'أسماء ZIP: page-{N}-{W}x{H}.jpg. الأرشيف: page-{N}-sizes.zip.',
  tool_pdf_page_to_image_sizes_rules_item_4:
    'الخصوصية والحدود: البيانات في التبويب؛ PDF مشفر/تالف يفشل بوضوح؛ >~25 MB قد يبطئ.',
  tool_pdf_page_to_image_sizes_rules_title: 'قواعد يجب أن تعرفها',
  tool_pdf_page_to_image_sizes_sample: 'تحميل عينة',
  tool_pdf_page_to_image_sizes_stats_tpl: 'صفحة {page} · {n} أحجام · {bytes}',
  tool_pdf_page_to_image_sizes_status_done: 'تم — اضغط تنزيل لحفظ ZIP.',
  tool_pdf_page_to_image_sizes_status_exporting: 'جارٍ رسم الصفحة وبناء حزمة الأحجام…',
  tool_pdf_page_to_image_sizes_title: 'صفحة PDF بأحجام متعددة — حزمة تصدير للمنصات',
  tool_pdf_page_to_image_sizes_usecase_1: 'سوشيال: حوّل ملصق PDF إلى مربع IG وOG وعمودي في ZIP واحد.',
  tool_pdf_page_to_image_sizes_usecase_2: 'أصحاب المواقع: صدّر غلافاً 1200×630 لمعاينة الروابط دون قص يدوي.',
  tool_pdf_page_to_image_sizes_usecase_3: 'طلاب: احفظ شريحة محاضرة بأحجام مناسبة للهاتف.',
  tool_pdf_page_to_image_sizes_usecases_title: 'حالات مناسبة',
  tool_pdf_page_to_image_sizes_warn_large: 'ملف أكبر من ~25 MB — التصدير قد يبطئ أو يفشل.',
  tool_pdf_page_to_image_sizes_warn_pdflib: 'تعذّر تحميل مكتبة PDF. تحقق من الشبكة.',
};
export default ar;
