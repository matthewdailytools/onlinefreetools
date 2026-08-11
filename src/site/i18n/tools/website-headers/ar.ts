/**
 * i18n tool shard (website-headers / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_headers_article:
    'اطّلع على الرؤوس التي يستقبلها الـ edge لرابط عام — مفيد للتخزين المؤقت وCORS وإعادة التوجيه ورؤوس الأمان. الطلب يمر عبر وكيل؛ لا نحفظ محتوى الصفحة.',
  tool_headers_description:
    'ترويسات HTTP توجّه الزحف والفهرسة—وسم X-Robots خاطئ قد يمنع الفهرسة. اجلب من الحافة؛ افحص Cache-Control وإعادة التوجيه. مثال: CDN.',
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
    'الصق رابط http(s) عامًا ثم اضغط فحص. يرسل worker على الـ edge طلب HEAD (GET عند الحاجة)، يتبع إعادة التوجيه خطوة بخطوة (حتى 5 قفزات)، ويعيد الحالة والرابط النهائي والرؤوس المرصودة وسلسلة إعادة التوجيه. الأهداف الخاصة مرفوضة. هذه رؤية من الـ edge وقد تختلف عن متصفحك بسبب CDN أو التوجيه الجغرافي.',
  tool_headers_how_title: 'كيف يعمل',
  tool_headers_faq_a6:
    'المفيد لـ SEO معرفة: هل تُخزَّن الاستجابة أصلًا (no-store مقابل max-age)، وكم تحتفظ بها المخازن المشتركة (s-maxage)، وهل تفرض إعادة التحقق (no-cache). الصفحات قليلة التغيير تستفيد من max-age أطول ليخدمها CDN دون الوصول للمصدر.',
  tool_headers_faq_a7:
    'x-robots-tag ينطبق على أي نوع استجابة — HTML وPDF وصور — بينما robots meta يعمل داخل HTML فقط. استخدمه لمنع فهرسة أصول غير HTML أو لتطبيق قواعد يصعب وضعها في الصفحة نفسها. عند التعارض يتغلب x-robots-tag.',
  tool_headers_faq_q6: 'ماذا أنظر في cache-control؟',
  tool_headers_faq_q7: 'لماذا تهم x-robots-tag إن وُجدت robots meta؟',
  tool_headers_ref_mdn_label: 'MDN — رؤوس HTTP',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — دلالات HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — التخزين المؤقت HTTP',
  tool_headers_rules_body:
    'وكيل قصير العمر لفحص الرؤوس فقط؛ لا يخزّن محتوى الصفحة. أسماء الرؤوس تتبع دلالات HTTP (انظر المراجع).',
  tool_headers_rules_item_1: 'HEAD أولًا؛ GET إذا لم يدعم المصدر HEAD.',
  tool_headers_rules_item_2: 'يتبع إعادة التوجيه ويعرض الرابط النهائي.',
  tool_headers_rules_item_3: 'يحظر localhost وعناوين IP للشبكة الخاصة.',
  tool_headers_rules_item_4: 'يبرز رؤوس شائعة: Cache-Control وCORS وCSP وغيرها.',
  tool_headers_rules_item_5: 'يجمع سلسلة إعادة التوجيه (حتى 5 قفزات) مع الحالة وLocation لكل خطوة.',
  tool_headers_rules_title: 'ما الذي يفعله الفاحص',
  tool_headers_seo_cache_absent: 'لا توجد ترويسة Cache-Control. المتصفحات وCDN تستخدم قواعد تخمينية، فالمحتوى المتغير حديثًا قد يُقدَّم قديمًا.',
  tool_headers_seo_cache_heading: 'Cache-Control',
  tool_headers_seo_cache_immutable: 'immutable: لا تعيد المخازن التحقق خلال عمر الصلاحية — نموذجي للأصول ذات البصمة.',
  tool_headers_seo_cache_maxage: 'max-age={n}: يمكن للمتصفحات والمخازن المشتركة إعادة استخدام هذه الاستجابة لمدة {n} ثانية دون سؤال المصدر.',
  tool_headers_seo_cache_mustrevalidate: 'must-revalidate: يجب إعادة التحقق من الاستجابات المنتهية قبل إعادة الاستخدام.',
  tool_headers_seo_cache_nocache: 'no-cache: يُسمح بالتخزين لكن مع إعادة التحقق قبل إعادة الاستخدام.',
  tool_headers_seo_cache_nostore: 'no-store: لا يُخزَّن شيء؛ كل طلب يصل للمصدر. مناسبة للصفحات الخاصة أو المتقلبة.',
  tool_headers_seo_cache_other: 'توجيه غير مشروح هنا: {d}',
  tool_headers_seo_cache_private: 'private: لا يحفظها إلا مخزن المتصفح؛ المخازن المشتركة ممنوعة.',
  tool_headers_seo_cache_public: 'public: لأي مخزن أن يحفظ الاستجابة.',
  tool_headers_seo_cache_smaxage: 's-maxage={n}: المخازن المشتركة (CDN/وكيل) قد تخدم لمدة {n} ثانية؛ تتجاوز max-age لها.',
  tool_headers_seo_intro: 'قراءة بلغة بسيطة لأهم الرؤوس في البحث والزحف.',
  tool_headers_seo_redirect_301: '301 دائم: محركات البحث تنقل إشارات الترتيب إلى الوجهة — مناسب للصفحات المنقولة وتغييرات www.',
  tool_headers_seo_redirect_302: '302/307 مؤقت: أبقِه للتغييرات قصيرة المدى — تبقى إشارات الترتيب على الرابط الأصلي.',
  tool_headers_seo_redirect_chain: 'تبع الطلب {n} إعادة توجيه قبل الاستجابة النهائية:',
  tool_headers_seo_redirect_cross_host: 'هذه القفزة تغادر المضيف الأصلي: {from} → {to}.',
  tool_headers_seo_redirect_heading: 'إعادة التوجيه',
  tool_headers_seo_redirect_ok: 'لا إعادة توجيه: الرابط النهائي هو ما فحصته.',
  tool_headers_robots_absent: 'لا توجد ترويسة X-Robots-Tag. قواعد الفهرسة تأتي من robots.txt ومن robots meta داخل الصفحة.',
  tool_headers_robots_blocked: 'تُستبعد هذه الصفحة من الفهرسة بموجب هذه الترويسة.',
  tool_headers_seo_robots_heading: 'X-Robots-Tag',
  tool_headers_robots_maxsnippet: 'max-snippet={n}: يحدّ طول المقتطف إلى {n} حرفًا.',
  tool_headers_robots_noarchive: 'noarchive: لن تعرض محركات البحث نسخة مخزنة لهذا الرابط.',
  tool_headers_robots_nofollow: 'nofollow: لن تتبع الزاحفات الروابط في هذه الاستجابة.',
  tool_headers_robots_noindex: 'noindex: يُستبعد هذا الرابط من نتائج البحث.',
  tool_headers_robots_none: 'none: يعادل noindex + nofollow.',
  tool_headers_seo_title: 'فحوصات SEO للرؤوس',
  tool_headers_title: 'فحص ترويسات HTTP للموقع — عرض رؤوس الاستجابة',
  tool_headers_usecase_1: 'قبل الإطلاق، تأكد من Cache-Control أو تخزين CDN.',
  tool_headers_usecase_2: 'تصحيح preflight لـ CORS بقراءة Access-Control-* في الاستجابة.',
  tool_headers_usecase_3: 'تحقق أن CSP وHSTS ورؤوس الأمان تُرسل فعلًا من الخادم.',
  tool_headers_usecases_title: 'متى يفيد',
};
export default ar;
