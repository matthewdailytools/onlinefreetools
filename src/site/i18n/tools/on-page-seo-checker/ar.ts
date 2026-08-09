/**
 * i18n tool shard (on-page-seo-checker / ar).
 * العربية — إعادة كتابة مستقلة حسب عادات البحث المحلية.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_onpage_home_title: 'مدقق SEO داخل الصفحة',
	tool_onpage_home_desc:
		'اكتشف وسوم الصفحة التي تُضعف ترتيبك في البحث: افحص العنوان وH1 ووصف الميتا وcanonical وOpen Graph وJSON-LD من متصفحك.',
	tool_onpage_title: 'مدقق SEO داخل الصفحة — اكتشف مشاكل وسوم الصفحة وأصلحها',
	tool_onpage_description:
		'العنوان الضعيف أو وصف الميتا المفقود أو تكرار H1 أو canonical الخاطئ كلها تُضعف ترتيبك في البحث وتُكلفك نقرات بصمت. الصق رابطاً أو HTML لفحص العنوان وH1 ووصف الميتا وcanonical وOpen Graph وJSON-LD والمحتوى المختلط وحجب العرض، مع اقتراح إصلاح لكل بند. وضع اللصق يعمل على جهازك؛ ووضع الرابط يجلب الصفحة مرة واحدة دون تخزينها. مثال: صفحة فيها وسمي H1 وصورة بروتوكول http://.',
	tool_onpage_url_tab: 'جلب الرابط',
	tool_onpage_html_tab: 'لصق HTML',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: 'فحص الرابط',
	tool_onpage_html_ph: 'الصق هنا HTML الخاص بـ <head> (وجزء من body)…',
	tool_onpage_check: 'فحص الصفحة',
	tool_onpage_sample: 'مثال',
	tool_onpage_clear: 'مسح',
	tool_onpage_copy: 'نسخ',
	tool_onpage_copied: 'تم النسخ',
	tool_onpage_running: 'جارٍ الفحص…',
	tool_onpage_error_prefix: 'خطأ: ',
	tool_onpage_url_error: 'أدخل رابط http(s) صالحاً.',
	tool_onpage_fetch_failed: 'تعذّر جلب الرابط. قد تكون الصفحة غير متصلة، أو تمنع البوتات، أو لا تُرجع HTML.',
	tool_onpage_no_html: 'الصق بعض HTML أولاً أو اجلب رابطاً.',
	tool_onpage_no_results: 'لا توجد نتائج فحص بعد.',
	tool_onpage_summary_title: 'ملخص الفحص',
	tool_onpage_summary_n_ok: '{n} ناجح',
	tool_onpage_summary_n_warn: '{n} تحذير',
	tool_onpage_summary_n_err: '{n} مشكلة',
	tool_onpage_status_ok: 'ناجح',
	tool_onpage_status_warn: 'تحذير',
	tool_onpage_status_err: 'مشكلة',
	tool_onpage_title_check: 'العنوان',
	tool_onpage_title_missing: 'لم يُعثر على <title>. أضف واحداً داخل <head>.',
	tool_onpage_title_ok: 'العنوان {n} حرفاً. نطاق 50–60 حرفاً يعرض جيداً في نتائج البحث.',
	tool_onpage_title_long: 'العنوان {n} حرفاً ومن المرجح أن يُقتطع في نتائج البحث. استهدف نحو 50–60 حرفاً.',
	tool_onpage_title_short: 'العنوان {n} حرفاً فقط. أضف تركيز الصفحة المحدد ليكون أكثر إفادة.',
	tool_onpage_desc_check: 'وصف الميتا',
	tool_onpage_desc_missing: 'لا يوجد وصف ميتا. اكتب ملخصاً من 140–160 حرفاً يطابق محتوى الصفحة.',
	tool_onpage_desc_ok: 'الوصف {n} حرفاً. نطاق 140–160 حرفاً يظهر جيداً في معظم المقتطفات.',
	tool_onpage_desc_long: 'الوصف {n} حرفاً، وعادة ما تُقتطع المقتطفات عند نحو 160 حرفاً.',
	tool_onpage_desc_short: 'الوصف {n} حرفاً فقط. استغل المساحة لتلخيص ما تقدمه الصفحة.',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'لم يُعثر على H1. استخدم H1 واحداً يوضح موضوع الصفحة.',
	tool_onpage_h1_multiple: 'وُجد {n} من وسوم H1. أبقِ H1 واحداً في كل صفحة واستخدم H2–H6 للأقسام.',
	tool_onpage_h1_ok: 'يوجد H1 واحد وهو داخل <body>.',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'لا يوجد canonical. أضف <link rel="canonical"> عندما يكون المحتوى نفسه متاحاً عبر عدة روابط.',
	tool_onpage_canonical_ok: 'وُجد canonical ذاتي الإحالة.',
	tool_onpage_canonical_other: 'يشير canonical إلى رابط مختلف. استخدم canonical ذاتي الإحالة إلا إذا كانت الصفحة نسخة من الهدف.',
	tool_onpage_robots_check: 'وسم robots',
	tool_onpage_robots_missing: 'لا يوجد وسم robots. الافتراضي index,follow مناسب لمعظم الصفحات العامة.',
	tool_onpage_robots_noindex: 'الصفحة مضبوطة على noindex ولن تظهر في نتائج جوجل. أزل الإعداد عندما يجب فهرسة الصفحة.',
	tool_onpage_robots_ok: 'وسم robots يسمح بالفهرسة وتتبّع الروابط.',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: 'لا توجد وسوم og:. أضف og:title وog:description وog:image لمعاينات المشاركة.',
	tool_onpage_og_partial: 'ينقص {n} من حقول og: المطلوبة. تأكد من وجود og:title وog:description وog:image.',
	tool_onpage_og_ok: 'og:title وog:description وog:image موجودة.',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: 'لا توجد بيانات منظمة JSON-LD. فكّر في إضافة وسوم schema.org عندما تصف محتوى مرئياً.',
	tool_onpage_jsonld_invalid: 'تعذّر تحليل كتلة JSON-LD كـ JSON. تحقق من أخطاء البنية.',
	tool_onpage_jsonld_ok: 'وُجدت {n} كتلة JSON-LD. حافظ على اتساق البيانات المنظمة مع ما يراه الزائر.',
	tool_onpage_mixed_check: 'المحتوى المختلط',
	tool_onpage_mixed_none: 'لا توجد إشارات http:// في سياق https.',
	tool_onpage_mixed_found: 'وُجدت {n} إشارة http://. المتصفحات تحجب المحتوى المختلط؛ قدّم هذه الموارد عبر https.',
	tool_onpage_render_check: 'حجب العرض',
	tool_onpage_render_none: 'لا توجد أوراق أنماط أو سكربتات تحجب العرض بوضوح.',
	tool_onpage_render_found: 'وُجد {n} من <link rel="stylesheet"> بدون media في <head>. ادمج CSS الحرج أو أخّر التحميل لتحسين LCP.',
	tool_onpage_unknown: 'تعذّر التحديد: {label}',
	tool_onpage_how_title: 'كيف يعمل',
	tool_onpage_how_body:
		'يحلل المدقق الوسوم التي تلصقها (أو HTML المأخوذ من رابط) ويقيّم قائمة ثابتة من فحوصات SEO داخل الصفحة. يقرأ كل فحص نوعاً واحداً من الوسوم: العنوان ووصف الميتا ووسوم H1 ورابط canonical ووسم robots وحقول Open Graph وكتل JSON-LD والمحتوى المختلط وموارد حجب العرض. وضع اللصق يعمل بالكامل في متصفحك؛ ووضع الرابط يجلب الصفحة مرة واحدة عبر العامل لدينا ولا يخزنها.',
	tool_onpage_rules_title: 'القواعد التي تتبعها الفحوصات',
	tool_onpage_rules_body:
		'هذه هي المعايير التي يقارن بها كل فحص، ومصدرها Google Search Central ومواصفات HTML.',
	tool_onpage_rules_item_1:
		'العنوان: يجب أن تحتوي الصفحة على <title> وصفي واحد. قد تعيد جوجل كتابته، لكن العنوان المختصر قرب 50–60 حرفاً يعرض جيداً.',
	tool_onpage_rules_item_2:
		'H1: استخدم H1 واحداً يوضح الموضوع، والعناوين الباقية H2–H6 بشكل منطقي.',
	tool_onpage_rules_item_3:
		'Canonical: الإحالة الذاتية تخبر جوجل بالرابط المفضل عند وجود نسخ مكررة. يوضع Link rel="canonical" في <head>.',
	tool_onpage_rules_item_4:
		'المحتوى المختلط: صفحة https تشير إلى موارد http:// تحجبها المتصفحات. يدرج هذا الفحص هذه الإشارات كتحذيرات.',
	tool_onpage_rules_item_5:
		'حجب العرض: ورقة الأنماط في <head> بدون سمة media تحجب العرض. هذا الفحص استرشادي ولا يقيس زمن التحميل الفعلي.',
	tool_onpage_example_title: 'مثال',
	tool_onpage_example:
		'الإدخال التجريبي صفحة بعنوان 71 حرفاً، بلا وصف ميتا، ووسمي H1، وcanonical إلى رابط آخر، وog:image واحد، وكتلة JSON-LD صالحة، وصورة http:// واحدة. يقر المدقق العنوان كاحتمال اقتطاع، وH1 كتحذير، وcanonical كغير ذاتي الإحالة، والمحتوى المختلط كتحذير، بما يطابق ما تعرضه الأداة عند تحميل المثال.',
	tool_onpage_usecases_title: 'استخدامات مناسبة',
	tool_onpage_usecase_1:
		'قبل إعادة التصميم أو الإطلاق: مرّر الصفحة نفسها على المدقق وأصلح المشاكل المذكورة في جولة واحدة.',
	tool_onpage_usecase_2:
		'تسليم القوالب: عند استلام HTML من وكالة أو منشئ صفحات، تحقق من وسوم head بدلاً من الثقة في الملف المُصدَّر.',
	tool_onpage_usecase_3:
		'تحديث المحتوى: بعد التعديل في نظام إدارة المحتوى، تأكد من أن العنوان والوصف وcanonical ما زالت مطابقة للصفحة الجديدة.',
	tool_onpage_faq_q1: 'ماذا يفحص مدقق SEO داخل الصفحة؟',
	tool_onpage_faq_a1:
		'يفحص الوسوم التي تتحكم بها الصفحة نفسها: العنوان ووصف الميتا وH1 وcanonical ووسم robots وحقول Open Graph وبيانات JSON-LD والمحتوى المختلط وموارد حجب العرض. لا يقيس الترتيب أو الروابط الخلفية.',
	tool_onpage_faq_q2: 'لماذا يجب أن تحتوي الصفحة على H1 واحد فقط؟',
	tool_onpage_faq_a2:
		'H1 واحد يعبّر عن موضوع الصفحة بوضوح للقارئ ومحرك البحث. تعدد H1 يضعف الهيكل؛ استخدم H1 واحداً ونظّم الباقي بـ H2–H6.',
	tool_onpage_faq_q3: 'هل يجب أن يشير canonical إلى نفسه؟',
	tool_onpage_faq_a3:
		'للصفحة التي يجب أن تتصدر النتائج، نعم — الإحالة الذاتية أوضح إشارة. إحالة canonical إلى رابط آخر تخبر جوجل أن الصفحة مكررة، وهو مفيد فقط عندما يكون ذلك صحيحاً.',
	tool_onpage_faq_q4: 'لماذا يعلّم المدقق موارد http:// كمحتوى مختلط؟',
	tool_onpage_faq_a4:
		'عند تقديم صفحة عبر https مع إشارات إلى صور أو سكربتات أو أنماط http://، يحجب المتصفح الطلب افتراضياً. يدرج هذا الفحص هذه الإشارات كتحذيرات لتغييرها إلى https.',
	tool_onpage_faq_q5: 'هل يختبر فحص JSON-LD الصلاحية؟',
	tool_onpage_faq_a5:
		'يتحقق من أن الكتل تُحلل كـ JSON صالح ويذكّر بالحفاظ على اتساق البيانات المنظمة مع المحتوى المرئي. لا يشغّل مدقق schema.org كاملاً.',
	tool_onpage_faq_q6: 'هل يُرفع HTML الخاص بي إلى أي مكان؟',
	tool_onpage_faq_a6:
		'لا. عند لصق HTML، يتم التحليل على جهازك ولا يُرسل شيء إلى خادم. وضع الرابط يجلب الصفحة مرة واحدة عبر العامل ولا يخزنها.',
	tool_onpage_references: 'Google Search Central — وسوم الميتا؛ Google Search Central — canonical؛ MDN — عنصر <meta>.',
	tool_onpage_ref_tags_label: 'Search Central — وسوم الميتا التي تفهمها جوجل',
	tool_onpage_ref_canonical_label: 'Search Central — روابط canonical',
	tool_onpage_ref_mdn_label: 'MDN — <meta>: عنصر البيانات الوصفية',
};

export default ar;
