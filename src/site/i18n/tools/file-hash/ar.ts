/**
 * i18n tool shard (file-hash / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_file_hash_algo_label: 'الخوارزميات',
  tool_file_hash_article:
    'احسب تجزئات hex من MD5 و SHA للنص الملصق أو ملف محلي. قارن checksums للإصدارات، بصمات الإعدادات، أو تحقق من التحميلات — التجزئة في متصفحك إلا تنزيل مرة واحدة من هذا الموقع عند اختيار MD5.',
  tool_file_hash_clear: 'مسح',
  tool_file_hash_copy: 'نسخ الكل',
  tool_file_hash_copy_done: 'تم النسخ',
  tool_file_hash_desc:
    'تجزئة النص أو الملفات محليًا — تجزئات hex من MD5 و SHA-1 و SHA-256 و SHA-384 و SHA-512.',
  tool_file_hash_description:
    'احسب hash للنص الملصق أو ملف محلي في متصفحك. خطوات: اختر نصًا أو ملفًا، حدّد MD5/SHA، اضغط تجزئة، انسخ hex بأحرف صغيرة. مثال: النص `hello` → SHA-256 `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. الملفات تُقرأ محليًا؛ MD5 فقط يحمّل crypto-js من هذا الموقع عند التحديد.',
  tool_file_hash_empty: 'الصق نصًا أو اختر ملفًا أولًا.',
  tool_file_hash_example:
    'نص `hello` مع SHA-256 → `2cf24dba5fb0a30e26e83b2ac5b9e29e1b161e5c1fa7425e73043362938b0184`. MD5 لنفس النص → `5d41402abc4b2a76b9719d911017c592`. النص ببايتات UTF-8؛ الملفات بالبايتات الخام.',
  tool_file_hash_example_title: 'مثال',
  tool_file_hash_faq_a1:
    'MD5 سريع وما زال يُستخدم في checksums قديمة (قوائم `md5sum`، بعض ETag في CDN). للأمان (توقيعات، كلمات مرور، إثبات التلاعب) فضّل SHA-256 أو SHA-512. SHA-1 مهجور للشهادات لكن قد يظهر في artefacts قديمة.',
  tool_file_hash_faq_a2:
    'الملفات الكبيرة تُقرأ على دفعات مع شريط تقدم. فوق ~100 MB يظهر تحذير لكننا نحاول. الملفات الضخمة قد تكون بطيئة أو تستهلك ذاكرة — للأرشيفات multi-GB استخدم أداة سطح مكتب.',
  tool_file_hash_faq_a3:
    'النص يُجزّأ كبايتات UTF-8. الملف يُجزّأ كتدفق بايتات خام. نفس الحروف في `.txt` قد تختلف عن النص الملصق إذا اختلفت الترميز أو نهايات السطر.',
  tool_file_hash_faq_a4:
    'لا رفع. النص والملفات يبقيان على جهازك. SHA-* يستخدم Web Crypto. MD5 فقط يحمّل crypto-js من هذا الموقع — المحتوى لا يُرسل إلى جهة خارجية.',
  tool_file_hash_faq_a5:
    'نخرج hex بأحرف صغيرة بلا بادئة `0x`، سطر لكل خوارزمية. يطابق `md5sum` / `sha256sum` الشائع على Linux و macOS.',
  tool_file_hash_faq_q1: 'متى أستخدم MD5 ومتى SHA-256؟',
  tool_file_hash_faq_q2: 'كيف تُعالَج الملفات الكبيرة؟',
  tool_file_hash_faq_q3: 'هل النص الملصق يُجزّأ مثل الملف؟',
  tool_file_hash_faq_q4: 'هل يُرفع ملفي أو نصي؟',
  tool_file_hash_faq_q5: 'ما تنسيق hex الذي تُخرجونه؟',
  tool_file_hash_file_bytes: 'بايت',
  tool_file_hash_file_label: 'اختر ملفًا',
  tool_file_hash_hash: 'تجزئة',
  tool_file_hash_how_body:
    'اختر نصًا لتجزئة لصق (بايتات UTF-8) أو ملفًا لملف محلي (بايتات خام). حدّد خوارزمية أو أكثر ثم تجزئة. SHA عبر Web Crypto؛ MD5 يحمّل مكتبة صغيرة عند أول استخدام. النتائج hex صغيرة، صف لكل خوارزمية.',
  tool_file_hash_how_title: 'كيف يعمل',
  tool_file_hash_input_mode_label: 'وضع الإدخال',
  tool_file_hash_large_warn:
    'الملف أكبر من 100 MB. قد تكون التجزئة بطيئة أو تستهلك ذاكرة كبيرة — فكّر في أداة سطح مكتب للأرشيفات الضخمة.',
  tool_file_hash_md5_fail: 'تعذّر تحميل مكتبة MD5 من هذا الموقع. جرّب SHA-256 أو تحقق من الشبكة.',
  tool_file_hash_no_algo: 'اختر خوارزمية واحدة على الأقل.',
  tool_file_hash_output_label: 'تجزئات hex',
  tool_file_hash_progress_label: 'جارٍ قراءة الملف…',
  tool_file_hash_rules_body:
    'اختيار الخوارزمية ودلالات البايتات وتنسيق الإخراج — ما تتوقعه قبل مقارنة digest في مكان آخر.',
  tool_file_hash_rules_item_1:
    'MD5 → 32 hex (128 بت). SHA-1 → 40 hex. SHA-256 → 64 hex. SHA-384 → 96 hex. SHA-512 → 128 hex. كلها صغيرة بلا بادئة.',
  tool_file_hash_rules_item_2:
    'وضع النص: UTF-8 عبر `TextEncoder`. وضع الملف: تدفق البايتات كاملًا. BOM UTF-8 أو CRLF في الملف يغيّر digest عن اللصق العادي.',
  tool_file_hash_rules_item_3:
    'نص فارغ أو ملف صفر بايت يعطي digest الإدخال الفارغ القياسي لكل خوارزمية (hex صالح).',
  tool_file_hash_rules_item_4:
    'الخصوصية: لا رفع. MD5 فقط يجلب crypto-js من هذا الموقع؛ SHA-* يستخدم Web Crypto المدمج فقط.',
  tool_file_hash_rules_title: 'قواعد يجب أن تتوقعها',
  tool_file_hash_sample: 'تحميل مثال',
  tool_file_hash_sample_text: 'hello',
  tool_file_hash_tab_file: 'ملف',
  tool_file_hash_tab_text: 'نص',
  tool_file_hash_text_label: 'إدخال نص',
  tool_file_hash_text_placeholder: 'الصق نصًا للتجزئة كـ UTF-8…',
  tool_file_hash_title: 'مدقق تجزئة الملف — التحقق من الملخصات في المتصفح',
  tool_file_hash_usecase_1:
    'إصدار: قارن SHA-256 للمثبّت مع القيمة المنشورة في صفحة التحميل.',
  tool_file_hash_usecase_2:
    'إعدادات: بصمة JSON أو جزء `.env` قبل وبعد النشر.',
  tool_file_hash_usecase_3:
    'QA قديم: تحقق أن manifest MD5 قديم ما زال يطابق المُعاد بناؤه.',
  tool_file_hash_usecases_title: 'حالات مناسبة',
};
export default ar;
