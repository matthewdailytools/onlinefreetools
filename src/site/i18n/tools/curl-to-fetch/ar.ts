/**
 * i18n tool shard (curl-to-fetch / ar).
 * H1: تحويل curl إلى fetch — تحليل محلي دون رفع إلى خادم.
 */
import type { SiteLangDict } from '../../../types';

/** نصوص العربية. */
const ar: SiteLangDict = {
	tool_curl_to_fetch_article:
		'الصق أمر cURL من الوثائق أو الطرفية واحصل على مقطع fetch في JavaScript — الطريقة والرؤوس والجسم وBasic auth و-G. يتم التحليل في المتصفح دون رفع إلى خادم.',
	tool_curl_to_fetch_clear: 'مسح',
	tool_curl_to_fetch_convert: 'تحويل',
	tool_curl_to_fetch_copy: 'نسخ',
	tool_curl_to_fetch_copy_done: 'تم النسخ',
	tool_curl_to_fetch_copy_empty: 'لا يوجد ما ينسخ — حوّل cURL أولاً.',
	tool_curl_to_fetch_desc: 'حوّل cURL إلى fetch في المتصفح — يبقى على جهازك دون رفع إلى خادم.',
	tool_curl_to_fetch_description:
		'الصق cURL واحصل على fetch في JavaScript — يدعم الطريقة والرؤوس وJSON وBasic auth (-u) و-G. مثال POST JSON يُحمّل تلقائياً. الأمر يبقى على جهازك ولا يُرفع إلى خادم.',
	tool_curl_to_fetch_error_empty: 'الصق أمر cURL أولاً.',
	tool_curl_to_fetch_error_no_url: 'لم نجد URL. أضف https://… أو --url.',
	tool_curl_to_fetch_error_parse: 'تعذّر تحليل cURL. تحقق من الاقتباسات واستمرار السطر.',
	tool_curl_to_fetch_error_unclosed_quote: 'اقتباس غير مغلق — أصلحه وأعد المحاولة.',
	tool_curl_to_fetch_example: 'مدخل: curl -X POST … → مخرج: fetch مع method وheaders وbody.',
	tool_curl_to_fetch_example_title: 'مثال',
	tool_curl_to_fetch_faq_a1: 'لا. التحليل في هذا التبويب فقط؛ لا نرسل cURL إلى خوادمنا.',
	tool_curl_to_fetch_faq_a2: 'URL و-X و-H و-d و-u و-G واقتباسات و\\ للاستمرار. أعلام غريبة تُتخطى مع تحذير.',
	tool_curl_to_fetch_faq_a3: '-G ينقل --data إلى query في URL بدلاً من body.',
	tool_curl_to_fetch_faq_a4: '-u user:pass → Authorization Basic مشفّر base64.',
	tool_curl_to_fetch_faq_a5: 'هذه الصفحة لـ fetch في المتصفح. axios أو Python — عدّل يدوياً؛ لا صفحات منفصلة.',
	tool_curl_to_fetch_faq_q1: 'هل يُرفع cURL؟',
	tool_curl_to_fetch_faq_q2: 'ما أعلام curl المدعومة؟',
	tool_curl_to_fetch_faq_q3: 'ماذا يفعل -G هنا؟',
	tool_curl_to_fetch_faq_q4: 'كيف يُعالَج -u؟',
	tool_curl_to_fetch_faq_q5: 'هل يمكن axios أو Python؟',
	tool_curl_to_fetch_how_body: 'انسخ cURL من الوثائق؛ نحلّل الأعلام الشائعة محلياً ونعرض fetch جاهزاً.',
	tool_curl_to_fetch_how_item_1: 'الصق cURL كاملاً (مع \\ لاستمرار السطر).',
	tool_curl_to_fetch_how_item_2: 'اختر fetch أو async/await ثم تحويل.',
	tool_curl_to_fetch_how_item_3: 'راجع method وheaders وbody.',
	tool_curl_to_fetch_how_item_4: 'انسخ إلى مشروعك؛ أعد التحويل بعد التعديل.',
	tool_curl_to_fetch_how_title: 'كيف يعمل',
	tool_curl_to_fetch_input_label: 'أمر cURL',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.example.com/…',
	tool_curl_to_fetch_large_warn: 'أمر كبير (>50 KB) — قد يبطئ التحليل.',
	tool_curl_to_fetch_load_sample: 'تحميل مثال',
	tool_curl_to_fetch_output_label: 'مخرجات fetch',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: 'نمط الإخراج',
	tool_curl_to_fetch_rules_body: 'ربط أعلام curl بخيارات fetch وما يحتاج تعديلاً يدوياً.',
	tool_curl_to_fetch_rules_item_1: '-X POST → method POST؛ -d وحده يستخدم POST إلا مع -G.',
	tool_curl_to_fetch_rules_item_2: 'كل -H في headers؛ Content-Type يُحفظ.',
	tool_curl_to_fetch_rules_item_3: '-d في body؛ -G يدمجه في URL.',
	tool_curl_to_fetch_rules_item_4: 'cookies وشهادات وبروكسي لا يدعمها fetch في المتصفح.',
	tool_curl_to_fetch_rules_title: 'قواعد متوقعة',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: 'تم التحويل — راجع fetch أدناه.',
	tool_curl_to_fetch_title: 'تحويل curl إلى fetch',
	tool_curl_to_fetch_usecase_1: 'أمثلة curl في OpenAPI — الصقها لبدء fetch في الواجهة.',
	tool_curl_to_fetch_usecase_2: 'تصحيح Bearer: احتفظ برأس Authorization.',
	tool_curl_to_fetch_usecase_3: 'تحويل curl إلى fetch عند نقل سكربتات shell.',
	tool_curl_to_fetch_usecases_title: 'حالات مناسبة',
	tool_curl_to_fetch_warn_unknown_flags: 'أعلام غير مدعومة تُتخطى: {flags}',
};

export default ar;
