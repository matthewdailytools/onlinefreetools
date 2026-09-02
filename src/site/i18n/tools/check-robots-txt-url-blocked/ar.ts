/**
 * جزء i18n (check-robots-txt-url-blocked / ar).
 * المهمة: لصق رابط الصفحة والتحقق مما إذا كان robots.txt يحظره.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'فحص حظر رابط robots.txt',
	tool_check_robots_txt_url_blocked_home_desc:
		'الصق رابط الصفحة لمعرفة إن كان robots.txt يحظر المسار أمام Googlebot أو زواحف أخرى.',
	tool_check_robots_txt_url_blocked_desc:
		'الصق رابط الصفحة لمعرفة إن كان robots.txt يحظر المسار أمام Googlebot أو زواحف أخرى.',
	tool_check_robots_txt_url_blocked_title: 'تحقق مما إذا كان الرابط محظورًا بواسطة robots.txt',
	tool_check_robots_txt_url_blocked_description:
		'الصق رابط صفحة واختبر عبر الإنترنت إن كان robots.txt يحظر ذلك المسار لـ Googlebot أو * أو Bingbot أو GPTBot، مع إظهار القاعدة المطابقة. مثال: /admin.',
	tool_check_robots_txt_url_blocked_url_label: 'رابط الصفحة',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: 'وكيل',
	tool_check_robots_txt_url_blocked_check: 'فحص',
	tool_check_robots_txt_url_blocked_sample: 'مثال',
	tool_check_robots_txt_url_blocked_clear: 'مسح',
	tool_check_robots_txt_url_blocked_running: 'جاري جلب robots.txt…',
	tool_check_robots_txt_url_blocked_url_error: 'أدخل رابط http(s) صالحًا يتضمن المسار الذي تهتم به.',
	tool_check_robots_txt_url_blocked_error_prefix: 'خطأ: ',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'تعذّر جلب robots.txt. قد يكون المضيف غير متاح أو يمنع الروبوتات.',
	tool_check_robots_txt_url_blocked_privacy_note:
		'يُرسل الرابط واسم المضيف إلى عاملنا (Worker) لجلب /robots.txt دون تخزينهما كقاعدة بيانات للمنتج.',
	tool_check_robots_txt_url_blocked_result_allowed_yes: 'مسموح',
	tool_check_robots_txt_url_blocked_result_allowed_no: 'محظور',
	tool_check_robots_txt_url_blocked_result_matched: 'القاعدة المطابقة',
	tool_check_robots_txt_url_blocked_result_matched_none: 'لا يوجد Allow/Disallow مطابق (يُعامل كمسموح)',
	tool_check_robots_txt_url_blocked_result_http_status: 'حالة HTTP لـ robots.txt',
	tool_check_robots_txt_url_blocked_result_path: 'المسار المُقيَّم',
	tool_check_robots_txt_url_blocked_result_ua: 'وكيل المستخدم المستخدم',
	tool_check_robots_txt_url_blocked_result_robots_url: 'رابط robots.txt',
	tool_check_robots_txt_url_blocked_result_group: 'مجموعة User-agent',
	tool_check_robots_txt_url_blocked_result_preview_missing: 'لا يوجد محتوى robots.txt (مفقود أو صفحة HTML خطأ). يُعامل كسماح للجميع.',
	tool_check_robots_txt_url_blocked_result_preview: 'معاينة robots.txt',
	tool_check_robots_txt_url_blocked_how_title: 'طريقة العمل',
	tool_check_robots_txt_url_blocked_how_body:
		'يجيب الأداة إن كان robots.txt يسمح أو يحظر مسار الصفحة للزاحف المختار. تُجلب /robots.txt فقط وليس محتوى الصفحة.',
	tool_check_robots_txt_url_blocked_how_item_1: 'الصق رابط الصفحة كاملًا (المسار مهم وليس النطاق فقط).',
	tool_check_robots_txt_url_blocked_how_item_2: 'اختر الوكيل (افتراضيًا Googlebot؛ أيضًا * أو Bingbot أو GPTBot).',
	tool_check_robots_txt_url_blocked_how_item_3: 'اضغط فحص وانتظر حتى يجلب الـ Worker ملف /robots.txt.',
	tool_check_robots_txt_url_blocked_how_item_4: 'اقرأ مسموح/محظور والقاعدة المطابقة وحالة HTTP.',
	tool_check_robots_txt_url_blocked_how_item_5: 'راجع المعاينة عند الحاجة لتأكيد المجموعة المطبّقة.',
	tool_check_robots_txt_url_blocked_formula_title: 'قواعد المطابقة',
	tool_check_robots_txt_url_blocked_formula_body:
		'نتبع الممارسة الشائعة المتوافقة مع وثائق Google وRFC 9309: أطول تطابق؛ وعند التساوي يفوز Allow على Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_1: 'نختار مجموعة User-agent المطابقة؛ وإلا نعود إلى مجموعة *.',
	tool_check_robots_txt_url_blocked_formula_item_2: 'بين قواعد Allow/Disallow المطابقة للمسار تفوز أطول بادئة.',
	tool_check_robots_txt_url_blocked_formula_item_3: 'عند تساوي الطول يُفضَّل Allow على Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_4: 'غياب robots.txt أو المجموعات الفارغة يُعامل كسماح كامل مع إظهار حالة HTTP.',
	tool_check_robots_txt_url_blocked_formula_item_5: 'يُجلب /robots.txt فقط؛ تُرفض المضيفات الخاصة. ليس بديلاً عن مختبر Search Console الرسمي.',
	tool_check_robots_txt_url_blocked_example_title: 'مثال',
	tool_check_robots_txt_url_blocked_example:
		'المثال https://www.bing.com/search مع Googlebot. يجلب الـ Worker ملف https://www.bing.com/robots.txt ويقيّم /search ويعرض مسموح أو محظور مع سطر القاعدة إن وُجد.',
	tool_check_robots_txt_url_blocked_usecases_title: 'متى يفيدك',
	tool_check_robots_txt_url_blocked_usecase_1:
		'قبل الإطلاق: تأكد أن /admin أو /staging محظوران بينما تبقى الصفحات العامة قابلة للزحف.',
	tool_check_robots_txt_url_blocked_usecase_2:
		'اختبار/التحقق من robots.txt: بعد تعديل Disallow تأكد أن الرابط المقصود يطابق القاعدة فعلاً.',
	tool_check_robots_txt_url_blocked_usecase_3:
		'قواعد زواحف الذكاء الاصطناعي: اختر GPTBot (أو *) وافحص المسارات الحساسة دون إنشاء الملف.',
	tool_check_robots_txt_url_blocked_faq_q1: 'هل يُنشئ ملف robots.txt؟',
	tool_check_robots_txt_url_blocked_faq_a1:
		'لا. الصفحة تفحص الحظر فقط. لكتابة القواعد استخدم مولّد robots.txt.',
	tool_check_robots_txt_url_blocked_faq_q2: 'لماذا أختبر Googlebot و* بشكل منفصل؟',
	tool_check_robots_txt_url_blocked_faq_a2:
		'Googlebot يستخدم مجموعته إن وُجدت؛ كثير من الزواحف تعود إلى *. الفصل يمنحك رؤية أوضح.',
	tool_check_robots_txt_url_blocked_faq_q3: 'ماذا لو كان robots.txt مفقودًا أو 404؟',
	tool_check_robots_txt_url_blocked_faq_a3:
		'الممارسة الشائعة تعتبر ذلك سماحًا كاملاً. تُعرض حالة HTTP لترى 404 أو إعادة التوجيه.',
	tool_check_robots_txt_url_blocked_faq_q4: 'هل يمكن اختبار زواحف الذكاء الاصطناعي مثل GPTBot؟',
	tool_check_robots_txt_url_blocked_faq_a4:
		'نعم عبر قائمة الوكيل. المطابقة وفق RFC 9309 كتقييم طرفي وليست حكمًا رسميًا للزاحف.',
	tool_check_robots_txt_url_blocked_faq_q5: 'هل يُحفظ الرابط؟',
	tool_check_robots_txt_url_blocked_faq_a5:
		'يجب أن يصل الرابط/المضيف إلى الـ Worker لجلب /robots.txt. لا نخزّنه كقاعدة بيانات للمنتج. هذه أداة طرفية وليست «بدون رفع».',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt؛ RFC 9309 Robots Exclusion Protocol.',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default ar;
