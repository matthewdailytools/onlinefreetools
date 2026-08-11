/**
 * i18n tool shard (hreflang-generator / ar).
 * العربية — إعادة كتابة مستقلة موجهة للبحث المحلي.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_hreflang_home_title: 'مولّد hreflang',
	tool_hreflang_home_desc:
		'أخبر جوجل بأي نسخة لغة من الصفحة يجب عرضها لمن — حوّل عناوين URL الخاصة باللغات إلى وسوم hreflang ورؤوس HTTP Link وترميز sitemap من متصفحك.',
	tool_hreflang_title: 'مولّد hreflang — أنشئ وسوم اللغة للمواقع متعددة اللغات',
	tool_hreflang_description:
		'بدون hreflang قد يعتبر Google الترجمات مكررة. حوّل روابط اللغات إلى link أو HTTP Link أو خريطة موقع—محلي. مثال: en وes وja.',
	tool_hreflang_input_label: 'قائمة عناوين URL حسب اللغة',
	tool_hreflang_input_ph:
		'زوج واحد في كل سطر: رمز اللغة + عنوان URL. مثال:\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'كل سطر بصيغة «رمز-اللغة URL» أو «URL رمز-اللغة». تستخدم الرموز صيغة BCP 47 مثل en أو en-US أو zh-Hans.',
	tool_hreflang_xdefault_label: 'عنوان x-default الاحتياطي',
	tool_hreflang_xdefault_none: '— دون إضافة x-default —',
	tool_hreflang_xdefault_hint:
		'اختياري. يخبر x-default جوجل بالنسخة التي تُعرض عندما لا يتطابق أي لغة، وهو مفيد للصفحة الرئيسية أو الجذر بالإنكليزية.',
	tool_hreflang_generate: 'إنشاء',
	tool_hreflang_sample: 'تحميل مثال',
	tool_hreflang_clear: 'مسح',
	tool_hreflang_copy: 'نسخ',
	tool_hreflang_copied: 'تم النسخ',
	tool_hreflang_error_prefix: 'خطأ: ',
	tool_hreflang_url_protocol: 'أحد العناوين بلا بروتوكول — أُضيف https:// تلقائيًا.',
	tool_hreflang_lang_invalid: 'رمز لغة غير صالح: {lang}. استخدم صيغة BCP 47 مثل en أو en-US أو zh-Hans.',
	tool_hreflang_no_valid_rows: 'لا توجد أسطر صالحة. أضف رمز لغة وعنوان URL واحدًا على الأقل.',
	tool_hreflang_output_label: 'الترميز المولّد',
	tool_hreflang_tab_link: 'وسوم <link>',
	tool_hreflang_tab_http: 'رأس HTTP Link',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: 'كيف يعمل',
	tool_hreflang_how_body:
		'يحلل المولّد كل سطر إلى رمز لغة وعنوان URL، ثم يعرض مجموعة العلاقات نفسها بثلاث صيغ. صيغة <link> توضع داخل <head> لكل صفحة. صيغة رأس HTTP Link تُرسل مع استجابة الخادم. صيغة sitemap تدمج <xhtml:link> داخل كل كتلة <url>. يحصل كل عنوان على وسم hreflang ذاتي المرجع كي تشير كل نسخة إلى نفسها، وتغطي إضافة x-default الاختيارية الزوار الذين لا تظهر لغتهم.',
	tool_hreflang_rules_title: 'القواعد التي يتبعها المولّد',
	tool_hreflang_rules_body: 'تأتي هذه القواعد من Google Search Central ومعيار BCP 47 لوسوم اللغة.',
	tool_hreflang_rules_item_1:
		'يجب أن تتضمن كل نسخة لغة وسم hreflang ذاتي المرجع يشير إلى عنوانها الخاص. حذفه يضعف الإشارة.',
	tool_hreflang_rules_item_2:
		'يجب أن يُدرج كل عنوان من جميع نسخ اللغة: المجموعة الكاملة من البدائل تظهر في كل صفحة، وليس باتجاه واحد.',
	tool_hreflang_rules_item_3:
		'رموز اللغة بصيغة BCP 47: لغة من حرفين، مع منطقة اختيارية (en-US) ونظام كتابة اختياري (zh-Hans). وx-default رمز احتياطي خاص.',
	tool_hreflang_rules_item_4:
		'يشير x-default إلى الصفحة المعروضة عندما لا يتطابق أي لغة مدرجة، مثل الصفحة الجذرية الإنكليزية. قد تستخدمه جوجل كاحتياط لجميع اللغات غير المكتشفة.',
	tool_hreflang_rules_item_5:
		'اختر صيغة تقديم واحدة للمجموعة: وسوم <link> في HTML أو رأس HTTP Link أو xhtml:link في sitemap. لا تخلط الصيغ لنفس المجموعة وإلا تعارضت الإشارات.',
	tool_hreflang_example_title: 'مثال',
	tool_hreflang_example:
		'يذكر المثال ثلاث نسخ من صفحة واحدة: https://example.com/ (en) وhttps://example.com/es/ (es) وhttps://example.com/ja/ (ja). تتضمن وسوم <link> المولّدة إحالات ذاتية لكل لغة بالإضافة إلى x-default اختياري يشير إلى الجذر الإنكليزي.',
	tool_hreflang_usecases_title: 'حالات استخدام مناسبة',
	tool_hreflang_usecase_1:
		'إطلاق موقع متعدد اللغات: ولّد وسوم <link> مرة واحدة لكل قالب وتحقق من أن كل نسخة لغة تسرد المجموعة الكاملة.',
	tool_hreflang_usecase_2:
		'بعد إعادة هيكلة الموقع، أعد توليد الترميز كي يبقى تطابق العناوين متناسقًا بين اللغات بدلًا من الانحراف.',
	tool_hreflang_usecase_3:
		'عند ظهور لغة خاطئة في نتائج البحث، تحقق من وجود الإحالات الذاتية وx-default ومن أن العناوين تشير إلى الصفحات الأساسية.',
	tool_hreflang_faq_q1: 'أي صيغة من الثلاث يجب أن أستخدم؟',
	tool_hreflang_faq_a1:
		'استخدم وسوم <link> إذا كنت تستطيع تعديل HTML. استخدم رأس HTTP Link عندما تخدم الصفحات على خادم تسيطر عليه ويصعب تغيير HTML. واستخدم صيغة sitemap إذا فضلت إبقاءها في خريطة الموقع XML.',
	tool_hreflang_faq_q2: 'متى أضيف x-default؟',
	tool_hreflang_faq_a2:
		'يخبر x-default جوجل بالنسخة التي تُعرض عندما لا تطابق لغة الزائر أي رمز مدرج. أضفه عندما تكون لديك صفحة جذرية أو احتياطية، غالبًا بالإنكليزية.',
	tool_hreflang_faq_q3: 'هل يحتاج كل عنوان إلى وسم ذاتي المرجع؟',
	tool_hreflang_faq_a3:
		'نعم. يجب أن تتضمن كل نسخة لغة عنوانها الخاص ضمن المجموعة، مع وسم hreflang ذاتي المرجع يشير إليها. تستخدم جوجل المجموعة الكاملة لاختيار الصفحة الصحيحة لكل لغة.',
	tool_hreflang_faq_q4: 'ما صيغة رمز اللغة الصالحة؟',
	tool_hreflang_faq_a4:
		'رموز BCP 47: لغة من حرفين أو ثلاثة، مع منطقة اختيارية (en-US) ونظام كتابة اختياري (zh-Hans). اكتب اللغة بأحرف صغيرة ولا تختلق رموزًا مثل «en-us-en».',
	tool_hreflang_faq_q5: 'هل يوضع hreflang في <head> أم في sitemap؟',
	tool_hreflang_faq_a5:
		'كلاهما يعمل، لكن استخدم صيغة واحدة متناسقة لكل مجموعة صفحات. وسوم <link> توضع في <head>، ورأس HTTP Link يُرسل مع الاستجابة، وsitemap يستخدم كتل xhtml:link.',
	tool_hreflang_faq_q6: 'هل تُرفع عناوين URL الخاصة بي إلى أي مكان؟',
	tool_hreflang_faq_a6: 'لا. يعمل المولّد بالكامل في متصفحك ولا يُرفع شيء.',
	tool_hreflang_references: 'Google Search Central — النسخ المترجمة (hreflang)؛ وسوم اللغة BCP 47.',
	tool_hreflang_ref_searchcentral_label: 'Search Central — النسخ المترجمة (hreflang)',
	tool_hreflang_ref_bcp47_label: 'BCP 47 — وسوم تعريف اللغات',
};

export default ar;
