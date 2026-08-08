/**
 * i18n tool shard (website-headers / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_headers_article:
    'اطّلع على الرؤوس التي يستقبلها الـ edge لرابط عام — مفيد للتخزين المؤقت وCORS وإعادة التوجيه ورؤوس الأمان. الطلب يمر عبر وكيل؛ لا نحفظ محتوى الصفحة.',
  tool_headers_description:
    'افحص ترويسات HTTP لاستجابة أي رابط من حافة شبكتنا. الخطوات: الصق https، أرسل HEAD (GET عند الحاجة)، اتبع إعادة التوجيه، اعرض الحالة وخريطة الرؤوس؛ احظر المضيفات الداخلية. مثال: اقرأ Cache-Control وCORS وHSTS أثناء تصحيح CDN أو إعادة التوجيه.',
  tool_headers_example:
    'example.com → حالة 200، الرابط النهائي دون تغيير؛ رؤوس تتضمن content-type: text/html وربما cache-control أو رؤوس أمان حسب المصدر.',
  tool_headers_example_title: 'مثال',
  tool_headers_faq_a1:
    'بيانات وصفية من الخادم: نوع المحتوى، قواعد التخزين المؤقت، إعادة التوجيه، وسياسات مثل HSTS وCSP وCORS.',
  tool_headers_faq_a2: 'تفضّل HEAD وتنتقل إلى GET عند الحاجة. الهدف فحص الرؤوس وليس حفظ أو كشط body الصفحة.',
  tool_headers_faq_a3: 'لمنع استخدام الـ worker كأداة مسح للمضيفات الداخلية.',
  tool_headers_faq_a4:
    'ليس دائمًا. ترى الاستجابة من الـ edge لدينا؛ CDN أو التوجيه الجغرافي أو فلاتر البوت قد تختلف عن جهازك.',
  tool_headers_faq_a5: 'طلب edge قصير بدون منتج سجل روابط. تجنّب لصق أسرار في query string.',
  tool_headers_faq_q1: 'ماذا تُظهر ترويسات استجابة HTTP؟',
  tool_headers_faq_q2: 'هل تُحمّل الأداة محتوى الصفحة كاملًا؟',
  tool_headers_faq_q3: 'لماذا يُحظر localhost والشبكات الخاصة؟',
  tool_headers_faq_q4: 'هل النتيجة مثل DevTools في المتصفح؟',
  tool_headers_faq_q5: 'هل تحفظون سجلًا للروابط التي أفحصها؟',
  tool_headers_how_body:
    'الصق رابط http(s) عامًا ثم اضغط فحص. يرسل worker على الـ edge طلب HEAD (GET عند الحاجة)، يتبع إعادة التوجيه، ويعيد الحالة والرابط النهائي والرؤوس المرصودة. الأهداف الخاصة مرفوضة. هذه رؤية من الـ edge وقد تختلف عن متصفحك بسبب CDN أو التوجيه الجغرافي.',
  tool_headers_how_title: 'كيف يعمل',
  tool_headers_ref_mdn_label: 'MDN — رؤوس HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — دلالات HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — التخزين المؤقت HTTP',
  tool_headers_rules_body:
    'وكيل قصير العمر لفحص الرؤوس فقط؛ لا يخزّن محتوى الصفحة. أسماء الرؤوس تتبع دلالات HTTP (انظر المراجع).',
  tool_headers_rules_item_1: 'HEAD أولًا؛ GET إذا لم يدعم المصدر HEAD.',
  tool_headers_rules_item_2: 'يتبع إعادة التوجيه ويعرض الرابط النهائي.',
  tool_headers_rules_item_3: 'يحظر localhost وعناوين IP للشبكة الخاصة.',
  tool_headers_rules_item_4: 'يبرز رؤوس شائعة: Cache-Control وCORS وCSP وغيرها.',
  tool_headers_rules_title: 'ما الذي يفعله الفاحص',
  tool_headers_title: 'فحص ترويسات HTTP للموقع — عرض رؤوس الاستجابة',
  tool_headers_usecase_1: 'قبل الإطلاق، تأكد من Cache-Control أو تخزين CDN.',
  tool_headers_usecase_2: 'تصحيح preflight لـ CORS بقراءة Access-Control-* في الاستجابة.',
  tool_headers_usecase_3: 'تحقق أن CSP وHSTS ورؤوس الأمان تُرسل فعلًا من الخادم.',
  tool_headers_usecases_title: 'متى يفيد',
};
export default ar;
