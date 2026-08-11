/**
 * i18n tool shard (sitemap-xml-generator / ar).
 * Arabic independent rewrite — keeps sitemap.xml/lastmod/changefreq/priority as technical terms.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_sitemap_home_title: 'مولّد خريطة الموقع XML',
	tool_sitemap_home_desc:
		'ساعد جوجل على اكتشاف صفحاتك وفهرستها بشكل أسرع — حوّل قائمة عناوين URL إلى sitemap.xml صالحة مع lastmod وchangefreq وpriority، داخل المتصفح دون رفع أي شيء.',
	tool_sitemap_title: 'مولّد خريطة الموقع XML — أنشئ sitemap.xml من الروابط',
	tool_sitemap_description:
		'خريطة الموقع تساعد Google على الاكتشاف والفهرسة أسرع. الصق روابط https، عاين sitemap.xml صالحًا وانسخه للجذر. مثال: 3 روابط → 3 إدخالات.',
	tool_sitemap_generate: 'توليد',
	tool_sitemap_sample: 'مثال',
	tool_sitemap_clear: 'مسح',
	tool_sitemap_copy: 'نسخ',
	tool_sitemap_copied: 'نُسخ',
	tool_sitemap_download: 'تنزيل',
	tool_sitemap_urls_label: 'عناوين URL (واحد في كل سطر)',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
		'كل سطر: URL، أو URL | lastmod (yyyy-MM-dd)، أو URL | lastmod | changefreq | priority. مثال: https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: 'تم تجاهل رابط غير http: {url}',
	tool_sitemap_warn_bad_lastmod: 'صيغة lastmod غير صالحة (استخدم yyyy-MM-dd أو تاريخ-وقت W3C): {url}',
	tool_sitemap_warn_too_many: 'أكثر من 50,000 رابط: قسّمها إلى عدة خرائط موقع واربطها عبر sitemap index.',
	tool_sitemap_how_title: 'كيف يعمل',
	tool_sitemap_how_body:
		'الصق قائمتك، رابطًا في كل سطر. بعد رمز الفاصلة العمودية يمكن إضافة lastmod (yyyy-MM-dd) وchangefreq وpriority. تحلل الصفحة كل سطر، تهرب الرموز المحجوزة، تتحقق أن الرابط يبدأ بـ http(s)، وتبني urlset وفق البروتوكول. انسخ XML إلى جذر الموقع، واربطه من robots.txt أو أرسله في Search Console.',
	tool_sitemap_rules_title: 'قواعد البروتوكول وحدوده',
	tool_sitemap_rules_body: 'هذه قواعد بروتوكول sitemap وGoogle التي يتبعها هذا المولّد.',
	tool_sitemap_rules_item_1: 'إلزامي: كل <url> يجب أن يحتوي على <loc> بالعنوان الكامل. lastmod وchangefreq وpriority اختيارية.',
	tool_sitemap_rules_item_2: 'صيغة lastmod: تاريخ W3C (yyyy-MM-dd) أو تاريخ-وقت مثل 2026-08-01T12:00:00+00:00. الصيغ الأخرى تُهمل أو تُرفض.',
	tool_sitemap_rules_item_3: 'changefreq مجرد تلميح وليست إشارة. Google يتجاهلها، فملؤها لا يغيّر وتيرة الزحف.',
	tool_sitemap_rules_item_4: 'الحدود: خريطة الموقع الواحدة تتسع لـ 50,000 رابط و50MB بعد الضغط. فوق ذلك قسّم واستخدم sitemap index.',
	tool_sitemap_example_title: 'مثال',
	tool_sitemap_example:
		'إدخال نموذجي: https://example.com/ وhttps://example.com/products مع lastmod 2026-08-01، بالإضافة إلى https://example.com/about — المخرجات urlset بثلاثة عناصر url، والوسط منها يحمل lastmod.',
	tool_sitemap_usecases_title: 'حالات مناسبة',
	tool_sitemap_usecase_1: 'مواقع جديدة: أنشئ أول sitemap.xml من قائمتك وأرسله في Search Console.',
	tool_sitemap_usecase_2: 'محتوى محدّث: أضف lastmod للصفحات التي تغيّرت مؤخرًا ليلتقط الزاحف إشارة الحداثة.',
	tool_sitemap_usecase_3: 'الاكتشاف: أشر من robots.txt إلى عنوان sitemap ليجدها الزاحف دون انتظار الإرسال.',
	tool_sitemap_faq_q1: 'ما حد عدد الروابط في خريطة موقع واحدة؟',
	tool_sitemap_faq_a1: '50,000 رابط أو 50MB (قبل الضغط). يحذرك المولّد عندما تتجاوز القائمة 50,000 لتقسيمها واستخدام sitemap index يضم كل جزء.',
	tool_sitemap_faq_q2: 'ما الصيغة المطلوبة لـ lastmod؟',
	tool_sitemap_faq_a2: 'تاريخ W3C (yyyy-MM-dd) أو تاريخ-وقت كامل مثل 2026-08-01T12:00:00+00:00. يعلّم المولّد على الأسطر غير المطابقة لتصححها قبل الحفظ.',
	tool_sitemap_faq_q3: 'هل تؤثر changefreq على الزحف؟',
	tool_sitemap_faq_a3: 'لا. Google يتجاهل changefreq، وكذلك priority؛ كلاهما تلميح لمستهلكين آخرين. القيمة التي تستحق الدقة هي lastmod.',
	tool_sitemap_faq_q4: 'ما الفرق عن IndexNow؟',
	tool_sitemap_faq_a4: 'IndexNow يخطر المحركات المشاركة فور تغيّر رابط، بينما sitemap قائمة دائمة يزورها الزاحف باستمرار. استخدمهما معًا: IndexNow للإشعار الفوري، وsitemap للاكتشاف المستمر.',
	tool_sitemap_references: 'sitemaps.org — بروتوكول sitemap؛ Google Search Central — إنشاء خريطة الموقع وإرسالها.',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org — البروتوكول',
	tool_sitemap_ref_google_label: 'Search Central — إنشاء وإرسال sitemap',
};

export default ar;
