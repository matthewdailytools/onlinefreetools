/**
 * جزء i18n (find-and-validate-xml-sitemap / ar).
 * المشهد: إدخال الموقع → اكتشاف sitemap → التحقق من XML وعيّنات loc (دون توليد).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: 'العثور على خريطة موقع XML والتحقق',
	tool_find_and_validate_xml_sitemap_home_desc:
		'اكتشف خريطة الموقع من robots.txt أو /sitemap.xml وتحقق من البنية والنوع وعيّنات loc.',
	tool_find_and_validate_xml_sitemap_desc:
		'اكتشف خريطة الموقع من robots.txt أو /sitemap.xml وتحقق من البنية والنوع وعيّنات loc.',
	tool_find_and_validate_xml_sitemap_title: 'العثور على خريطة موقع XML والتحقق منها',
	tool_find_and_validate_xml_sitemap_description:
		'أدخل عنوان الموقع للعثور على خريطة موقع XML عبر أسطر Sitemap: في robots.txt أو /sitemap.xml، ثم تحقق من البنية وعدّ locs وميّز urlset عن sitemapindex. ليست أداة توليد. مثال: sitemaps.org.',
	tool_find_and_validate_xml_sitemap_url_label: 'عنوان الموقع',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: 'بحث وتحقق',
	tool_find_and_validate_xml_sitemap_sample: 'مثال',
	tool_find_and_validate_xml_sitemap_clear: 'مسح',
	tool_find_and_validate_xml_sitemap_running: 'جارٍ اكتشاف خرائط الموقع والتحقق منها…',
	tool_find_and_validate_xml_sitemap_url_error: 'أدخل عنوان http(s) صالحًا للموقع (الأصل أو الصفحة الرئيسية).',
	tool_find_and_validate_xml_sitemap_error_prefix: 'خطأ: ',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'تعذّر جلب مرشحي خريطة الموقع. قد يكون المضيف غير متصل أو يحظر الروبوتات.',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'يُرسل العنوان واسم المضيف إلى Worker لجلب robots.txt وملفات sitemap. لا نخزّنها كقاعدة منتج.',
	tool_find_and_validate_xml_sitemap_result_site: 'أصل الموقع',
	tool_find_and_validate_xml_sitemap_result_candidates: 'المرشحون المجرَّبون',
	tool_find_and_validate_xml_sitemap_result_primary: 'النتيجة الأساسية',
	tool_find_and_validate_xml_sitemap_result_none_primary: 'لم يُعثر على بنية sitemap صالحة بين المرشحين',
	tool_find_and_validate_xml_sitemap_col_url: 'العنوان',
	tool_find_and_validate_xml_sitemap_col_status: 'حالة HTTP',
	tool_find_and_validate_xml_sitemap_col_kind: 'النوع',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'عدد loc',
	tool_find_and_validate_xml_sitemap_col_valid: 'بنية صالحة',
	tool_find_and_validate_xml_sitemap_col_samples: 'عيّنات loc',
	tool_find_and_validate_xml_sitemap_valid_yes: 'نعم',
	tool_find_and_validate_xml_sitemap_valid_no: 'لا',
	tool_find_and_validate_xml_sitemap_empty_findings: 'لا نتائج لهذا الموقع.',
	tool_find_and_validate_xml_sitemap_how_title: 'كيف يعمل',
	tool_find_and_validate_xml_sitemap_how_body:
		'المهمة واحدة: العثور على خريطة موقع XML والتحقق مما إذا كانت urlset أو sitemapindex صالحة — دون إنشاء ملف جديد.',
	tool_find_and_validate_xml_sitemap_how_item_1: 'أدخل أصل الموقع أو عنوان الصفحة الرئيسية.',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'انقر «بحث وتحقق»؛ يقرأ Worker أسطر Sitemap: ثم يجرّب /sitemap.xml ومسارات الفهرس الشائعة.',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'راجع في الجدول نوع الجذر وعدد العناوين وعيّنات <loc>.',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'أصلِح مشاكل XML أو الاكتشاف قبل إرسال IndexNow أو Search Console.',
	tool_find_and_validate_xml_sitemap_formula_title: 'قواعد الاكتشاف والتحقق',
	tool_find_and_validate_xml_sitemap_formula_body:
		'وفق بروتوكول sitemaps.org: XML سليم بجذر urlset أو sitemapindex ووسوم <loc> قابلة للعد.',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'الترتيب: توجيهات Sitemap: في robots.txt ثم /sitemap.xml و /sitemap_index.xml و /sitemap-index.xml.',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'تُعد البنية صالحة عندما يبدو الرد XML لخريطة موقع وحالة HTTP ناجحة.',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'sitemapindex يسرد خرائط فرعية؛ urlset يسرد locs للصفحات — يُعرض كلاهما.',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'نعدّ <loc> ونعرض حتى 10 عيّنات؛ لا نزحف كل عنوان مدرج.',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'قد تفشل الاستجابات المضغوطة أو الضخمة أو غير XML. تُرفض المضيفات الخاصة.',
	tool_find_and_validate_xml_sitemap_example_title: 'مثال',
	tool_find_and_validate_xml_sitemap_example:
		'مثال الإدخال https://www.sitemaps.org/. يجرّب Worker أسطر Sitemap: والمسارات الشائعة ويعرض الحالة والنوع وعدد loc والعيّنات وvalidStructure.',
	tool_find_and_validate_xml_sitemap_usecases_title: 'متى يفيد',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'باحث خريطة موقع: بعد نقل CMS أو CDN تأكد أين تُنشر الخريطة.',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'فاحص / مدقق XML: قبل Search Console تحقق من سلامة الملف وهل هو فهرس أم urlset.',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'فحص سريع لـ loc: بعد إعادة توليد خريطة كبيرة اطّلع على عيّنات دون تنزيل الملف كاملًا.',
	tool_find_and_validate_xml_sitemap_faq_q1: 'هل هذه أداة توليد خريطة موقع؟',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'لا — تعثر وتتحقق فقط. لإنشاء ملف من قائمة عناوين استخدم مولّد XML Sitemap.',
	tool_find_and_validate_xml_sitemap_faq_q2: 'أين تبحثون عن الخريطة؟',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'أولًا أسطر Sitemap: في robots.txt، ثم /sitemap.xml ومسارات الفهرس على نفس المضيف.',
	tool_find_and_validate_xml_sitemap_faq_q3: 'ما الفرق بين sitemapindex و urlset؟',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'sitemapindex يسرد خرائط فرعية؛ urlset يسرد locs للصفحات. كلاهما جذر صالح؛ الجدول يبيّن النوع.',
	tool_find_and_validate_xml_sitemap_faq_q4: 'هل تزحفون كل عنوان في الخريطة؟',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'لا. نعدّ <loc> ونعرض عيّنة ونتحقق من البنية فقط دون حالة كل صفحة.',
	tool_find_and_validate_xml_sitemap_faq_q5: 'هل يُرفع عنواني أو يُخزَّن؟',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'يجب أن يصل العنوان/المضيف إلى Worker لجلب الملفات. لا نخزّن الفحوصات كقاعدة منتج دائمة. أداة طرفية وليست «بدون رفع».',
	tool_find_and_validate_xml_sitemap_references:
		'بروتوكول sitemaps.org؛ نظرة عامة على خرائط الموقع في Google Search Central.',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — البروتوكول',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — نظرة عامة على sitemaps',
};

export default ar;
