/**
 * i18n tool shard (robots-txt-generator / ar).
 * Arabic locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_robots_home_title: 'مولّد robots.txt',
	tool_robots_home_desc: 'تحكم في زحف محركات البحث إلى موقعك عبر robots.txt صالح — السماح والمنع وروبوتات الذكاء الاصطناعي داخل متصفحك.',
	tool_robots_title: 'مولّد robots.txt — إدارة السماح والمنع وروبوتات الذكاء الاصطناعي',
	tool_robots_description:
		'ملف robots.txt الخاطئ قد يخفي موقعك. ابنِ Allow وDisallow وقواعد زواحف الذكاء الاصطناعي ثم انسخ. مثال: حظر GPTBot وإبقاء Googlebot.',
	tool_robots_generate: 'توليد',
	tool_robots_sample: 'مثال',
	tool_robots_clear: 'مسح',
	tool_robots_copy: 'نسخ',
	tool_robots_copied: 'تم النسخ',
	tool_robots_agents_label: 'User-agent',
	tool_robots_agents_hint: 'حدد الروبوتات التي تريد تضمينها، ثم أضف المسارات لكل مجموعة.',
	tool_robots_include: 'تضمين هذا User-agent',
	tool_robots_agent_add: 'إضافة وكيل مخصص',
	tool_robots_agent_remove: 'إزالة الوكيل',
	tool_robots_allow_label: 'مسارات Allow (سطر لكل مسار)',
	tool_robots_disallow_label: 'مسارات Disallow (سطر لكل مسار)',
	tool_robots_sitemap_label: 'رابط Sitemap (اختياري)',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: 'تنزيل',
	tool_robots_empty_agent: 'اختر أو أضف User-agent أولًا.',
	tool_robots_owner_of: 'المالك: {owner}',
	tool_robots_how_title: 'كيف يعمل',
	tool_robots_how_body:
		'اختر الزاحف المستهدف، أضف مسارات Allow و Disallow لكل مجموعة، واختياريًا سطر Sitemap، ثم اضغط «توليد». تجمع الصفحة الملف النصي وفق تخطيط RFC 9309: سطر User-agent لكل مجموعة، أسفله سطور Allow/Disallow، سطر فارغ بين المجموعات، وسطر Sitemap في النهاية. انسخ النتيجة إلى جذر موقعك /robots.txt.',
	tool_robots_how_item_1: 'حدّد أو أضف user-agents التي تريد التحكم بها.',
	tool_robots_how_item_2: 'أدخل مسارات Allow وDisallow لكل مجموعة (مسار واحد في كل سطر).',
	tool_robots_how_item_3: 'يمكنك إضافة URL لـ Sitemap.',
	tool_robots_how_item_4: 'انقر «إنشاء»، ثم انسخ robots.txt أو نزّله.',
	tool_robots_rules_title: 'قواعد صياغة مهمة',
	tool_robots_rules_body:
		'قواعد robots.txt بادئات مسار وليست أنماطًا، والزاحف يتبع مجموعة واحدة فقط: المجموعة التي يطابق سطر User-agent فيها اسمه بأكبر قدر من التحديد. هذه القواعد التي يتبعها المولّد.',
	tool_robots_rules_item_1: 'اختيار المجموعة: يلتزم الزاحف بالمجموعة الأكثر تحديدًا في مطابقة User-agent، فاسمه الصريح يتقدم على *، وترتيب المجموعات في الملف لا يحسم شيئًا. وإذا تكررت سطور User-agent لاسم الزاحف نفسه دُمجت في مجموعة واحدة (RFC 9309).',
	tool_robots_rules_item_2: 'مطابقة البادئة: Allow و Disallow يطابقان بادئات مسار، لا نصوصًا جزئية ولا تعابير نمطية؛ * و $ فقط حرفان خاصان (RFC 9309).',
	tool_robots_rules_item_3: 'أولوية القواعد داخل المجموعة: يفوز أطول مسار مطابق، وعند تساوي طول المطابقة بين Allow وDisallow يفوز Allow. لذلك Disallow: /admin/ مع Allow: /admin/public/ يترك المجلد الفرعي العام قابلًا للزحف.',
	tool_robots_rules_item_4: 'الموقع بالكامل وسطر Sitemap: يمنع Disallow: / الوكيل من كل الروابط، أما Disallow بقيمة فارغة فيسمح بكل شيء. وSitemap: امتداد خارج RFC 9309، لا يفرّق في حالة الأحرف ويجوز وضعه في أي مكان؛ ويضعه هذا المولّد في النهاية.',
	tool_robots_example_title: 'مثال',
	tool_robots_example:
		'مثال: Googlebot بإعداد Allow: / (مفعّل بالكامل)، GPTBot بإعداد Disallow: / (محظور)، وسطر Sitemap يشير إلى /sitemap.xml. الناتج يعكس هذا التخطيط: مجموعة لكل زاحف، سطر فارغ بين المجموعات، وsitemap أخيرًا.',
	tool_robots_usecases_title: 'مناسب لـ',
	tool_robots_usecase_1: 'المواقع الجديدة: أنشئ robots.txt أوليًا يبقي محركات البحث مفعّلة ويخفي مسارات تجريب خاصة.',
	tool_robots_usecase_2: 'التحكم بزواحف الذكاء الاصطناعي: أعطِ GPTBot أو ClaudeBot أو Google-Extended أو CCBot أو PerplexityBot مجموعة Disallow خاصة بها مع إبقاء زحف Googlebot. ولاحظ أن Google-Extended يشمل Gemini وربط الإجابات في Vertex AI، أما «نظرة عامة من الذكاء الاصطناعي» في بحث جوجل فما زالت تعتمد على Googlebot.',
	tool_robots_usecase_3: 'الاكتشاف: اربط robots.txt بسطر Sitemap ليجد الزاحف خريطة موقعك.',
	tool_robots_faq_q1: 'ماذا يحدث عند كتابة Disallow: / ؟',
	tool_robots_faq_a1: 'يخبر ذلك الزاحف بعدم جلب أي رابط تحت جذر الموقع. وإذا حصل Googlebot على Disallow: / فقد تختفي صفحاتك من نتائج جوجل. لكن Disallow يمنع الزحف لا الفهرسة: الرابط المحجوب الذي تشير إليه مواقع أخرى قد يظل مدرجًا في النتائج بدون مقتطف، ولإخراجه نهائيًا اجعل الصفحة قابلة للزحف وأضف إليها noindex. ولمسار تجريبي استخدم Disallow: /private/ بدلًا منه.',
	tool_robots_faq_q2: 'كيف أحظر روبوتات الذكاء الاصطناعي مثل GPTBot؟',
	tool_robots_faq_a2: 'أنشئ مجموعة بسطر User-agent للزاحف (مثل GPTBot أو ClaudeBot أو Google-Extended أو CCBot أو PerplexityBot) وأضف Disallow: /. راجع وثائق الزاحف الرسمية، فروبوتات الذكاء الاصطناعي تحدّث أسماء المستخدمين ونطاقات IP بين الحين والآخر.',
	tool_robots_faq_q3: 'أين يجب وضع سطر Sitemap؟',
	tool_robots_faq_a3: 'الموضع لا يؤثر في قراءة محركات البحث له، لكن جرت العادة وضعه في نهاية الملف. يلحقه المولّد في النهاية عند تزويده برابط.',
	tool_robots_faq_q4: 'هل يُرفع ملف robots.txt إلى أي مكان؟',
	tool_robots_faq_a4: 'لا. الملف يُولَّد في متصفحك ولا يُرسل إلى خادم أبدًا. أغلق التبويب فلن يُحفظ شيء.',
	tool_robots_references: 'RFC 9309 بروتوكول استبعاد الروبوتات؛ Google Search Central — robots.txt؛ Google Search Central — إدارة روبوتات الذكاء الاصطناعي.',
	tool_robots_ref_rfc_label: 'RFC 9309 — بروتوكول استبعاد الروبوتات',
	tool_robots_ref_google_label: 'Search Central — robots.txt',
	tool_robots_ref_ai_label: 'Search Central — روبوتات الذكاء الاصطناعي',
};

export default ar;
