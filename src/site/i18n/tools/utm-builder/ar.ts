/**
 * i18n tool shard (utm-builder / ar).
 * العربية — إعادة كتابة مستقلة موجهة للبحث المحلي.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_utm_home_title: 'منشئ UTM',
	tool_utm_home_desc:
		'قيّس الحملات التي تجلب زياراتك فعلًا — أنشئ روابط تتبع نظيفة باستخدام utm_source وmedium وcampaign وterm وcontent من المتصفح.',
	tool_utm_title: 'منشئ UTM — أنشئ روابط تتبع الحملات',
	tool_utm_description:
		'وسوم UTM النظيفة هي الطريقة الوحيدة لإثبات الحملات أو الرسائل أو المنشورات التي تجلب زياراتك فعلًا؛ وبدونها تبقى جهودك في SEO والتسويق غير مرئية في التحليلات. أنشئ رابط تتبع من عنوان URL لصفحة الهبوط مع utm_source وutm_medium وutm_campaign وutm_term وutm_content. الخطوات: الصق عنوان URL الأساسي، واملأ المعاملات الخمسة، ثم انسخ الرابط المولّد بترميز URL صحيح. تُحفظ معاملات الاستعلام الموجودة وتُدمج دون استبدال. يعمل بالكامل على جهازك — لا يُرفع شيء. مثال: https://example.com/page مع source=newsletter وmedium=email وcampaign=summer_sale.',
	tool_utm_url_label: 'عنوان URL لصفحة الهبوط',
	tool_utm_url_ph: 'https://example.com/page',
	tool_utm_url_required: 'أدخل عنوان URL لصفحة الهبوط.',
	tool_utm_url_invalid: 'يبدو عنوان URL غير صالح. تحقق من العنوان وحاول مجددًا.',
	tool_utm_url_protocol: 'لم يُعثر على بروتوكول — تمت إضافة https:// تلقائيًا.',
	tool_utm_source_label: 'مصدر الحملة (utm_source)',
	tool_utm_source_ph: 'newsletter',
	tool_utm_source_hint: 'أين شوهد الرابط: newsletter أو facebook أو google.',
	tool_utm_medium_label: 'وسيط الحملة (utm_medium)',
	tool_utm_medium_ph: 'email',
	tool_utm_medium_hint: 'كيف وُصّل الرابط: email أو cpc أو social أو referral.',
	tool_utm_campaign_label: 'اسم الحملة (utm_campaign)',
	tool_utm_campaign_ph: 'summer_sale',
	tool_utm_campaign_hint: 'الترويج أو المنتج الذي ينتمي إليه الرابط.',
	tool_utm_campaign_required: 'اسم الحملة (utm_campaign) مطلوب.',
	tool_utm_term_label: 'مصطلح الحملة (utm_term)',
	tool_utm_term_ph: 'running_shoes',
	tool_utm_term_hint: 'اختياري. يحدد كلمات البحث المدفوعة.',
	tool_utm_content_label: 'محتوى الحملة (utm_content)',
	tool_utm_content_ph: 'header_banner',
	tool_utm_content_hint: 'اختياري. يميز الإعلانات أو الروابط التي تشير إلى نفس URL.',
	tool_utm_generate: 'إنشاء',
	tool_utm_sample: 'مثال',
	tool_utm_clear: 'مسح',
	tool_utm_copy: 'نسخ',
	tool_utm_copied: 'تم النسخ',
	tool_utm_error_prefix: 'خطأ: ',
	tool_utm_output_label: 'الرابط المولّد',
	tool_utm_table_title: 'تفصيل المعاملات',
	tool_utm_param_source: 'utm_source',
	tool_utm_param_medium: 'utm_medium',
	tool_utm_param_campaign: 'utm_campaign',
	tool_utm_param_term: 'utm_term',
	tool_utm_param_content: 'utm_content',
	tool_utm_param_value: 'القيمة',
	tool_utm_param_status: 'الحالة',
	tool_utm_param_required: 'مطلوب',
	tool_utm_param_optional: 'اختياري',
	tool_utm_param_empty: 'فارغ',
	tool_utm_encoding_note:
		'تُرمَّز القيم باستخدام encodeURIComponent: تتحول المسافات إلى %20 وتُرمَّز الأحرف غير ASCII.',
	tool_utm_case_note:
		'يميز Google Analytics بين الأحرف الكبيرة والصغيرة في القيم. استخدم نمطًا ثابتًا بالأحرف الصغيرة حتى تتجمع القناة نفسها.',
	tool_utm_how_title: 'كيف يعمل',
	tool_utm_how_body:
		'يحلل المنشئ عنوان URL الأساسي، ويحفظ معاملات الاستعلام الموجودة، ثم يضيف معاملات UTM بفاصل &. تُرمَّز كل قيمة بنسبة مئوية حتى تبقى المسافات والأحرف غير اللاتينية والرموز سليمة في الرابط. إذا كان للرابط تجزئة (hash)، تُنقل بعد كل المعاملات. هذه المعاملات الخمسة هي ما يقرؤه Google Analytics ليعزو الزيارة إلى مصدر ووسيط وحملة.',
	tool_utm_rules_title: 'قواعد المنشئ',
	tool_utm_rules_body: 'هذه تعريفات معاملات UTM وقواعد الترميز وفقًا لتوثيق Google Analytics.',
	tool_utm_rules_item_1: 'يحدد utm_source مكان ظهور الرابط، وutm_medium طريقة إيصاله. كلاهما مطلوب للإسناد.',
	tool_utm_rules_item_2: 'utm_campaign هو اسم الترويج وهو مطلوب هنا. utm_term وutm_content اختياريان: term للكلمات المدفوعة، وcontent للتمييز بين رابطين.',
	tool_utm_rules_item_3: 'إذا كان عنوان URL يحتوي معاملات استعلام، تُحفظ وتُضاف UTM بـ &؛ ويُستبدل أي معامل موجود يحمل الاسم نفسه.',
	tool_utm_rules_item_4: 'تُرمَّز القيم بنسبة مئوية: المسافات تتحول إلى %20 والأحرف غير ASCII تُرمَّز أيضًا. يبقى الجزء بعد علامة # بعد سلسلة الاستعلام دائمًا.',
	tool_utm_rules_item_5: 'استخدم نمطًا ثابتًا بالأحرف الصغيرة. يميز Google Analytics بين أحرف القيم، لذا سيكون facebook وFacebook مصدرين مختلفين.',
	tool_utm_example_title: 'مثال',
	tool_utm_example:
		'الإدخال المثال هو https://example.com/page مع utm_source=newsletter وutm_medium=email وutm_campaign=summer_sale. الرابط المولّد هو https://example.com/page?utm_source=newsletter&utm_medium=email&utm_campaign=summer_sale.',
	tool_utm_usecases_title: 'حالات استخدام مناسبة',
	tool_utm_usecase_1:
		'حملات التواصل: أنشئ رابطًا لكل منصة بنفس utm_campaign ليرصد GA4 الترويج كله في صف واحد.',
	tool_utm_usecase_2:
		'إرسال البريد: استخدم utm_source=newsletter وutm_medium=email وقيم content مختلفة لمقارنة لافتين تشيران إلى نفس الصفحة.',
	tool_utm_usecase_3:
		'رموز QR والروابط المطبوعة: رابط UTM الكامل طويل، لكن يمكنك تقصيره بعد الإنشاء مع الإبقاء على المعاملات.',
	tool_utm_faq_q1: 'ما الفرق بين utm_source وutm_medium؟',
	tool_utm_faq_a1:
		'يوضح utm_source أين شوهد الرابط (newsletter أو facebook أو google)، بينما يوضح utm_medium طريقة الإيصال (email أو cpc أو social أو referral). يدمجهما GA4 مع utm_campaign لتسمية مصدر الزيارات.',
	tool_utm_faq_q2: 'العنوان يحتوي معاملات استعلام. هل ستُفقد؟',
	tool_utm_faq_a2:
		'لا. تُحفظ المعاملات الموجودة وتُضاف UTM بـ &. إذا كان الرابط يحتوي معاملًا بنفس الاسم، يحلّ المكان القيمة الجديدة.',
	tool_utm_faq_q3: 'ماذا عن المسافات أو الأحرف غير اللاتينية أو الرموز في القيم؟',
	tool_utm_faq_a3:
		'تُرمَّز كل قيمة بنسبة مئوية: المسافات تتحول إلى %20 والأحرف غير ASCII تُرمَّز أيضًا. يبقى الرابط المولّد صالحًا في برامج البريد والمراسلات والمتصفحات.',
	tool_utm_faq_q4: 'هل تتأثر قيم UTM بأحرف الحالة؟',
	tool_utm_faq_a4:
		'نعم. يعامل Google Analytics utm_source=Facebook وutm_source=facebook كمصدرين مختلفين. استخدم نمطًا ثابتًا بالأحرف الصغيرة حتى تتجمع القناة نفسها.',
	tool_utm_faq_q5: 'متى أستخدم utm_term وutm_content؟',
	tool_utm_faq_a5:
		'يحدد utm_term كلمات البحث المدفوعة، وهو مفيد لإعلانات Google. يميز utm_content بين رابطين أو إعلانين يشيران إلى نفس URL، مثل لافتة الرأس ورابط التذييل.',
	tool_utm_faq_q6: 'هل يُرسل عنوان URL الخاص بي إلى أي مكان؟',
	tool_utm_faq_a6: 'لا. يعمل المنشئ بالكامل في متصفحك ولا يُرفع أي شيء.',
	tool_utm_references: 'Google Analytics — الحملات المخصصة (UTM)؛ Google Search Central — معاملات URL.',
	tool_utm_ref_ga_label: 'Google Analytics — الحملات المخصصة (UTM)',
	tool_utm_ref_searchcentral_label: 'Google Search Central — معاملات URL',
};

export default ar;
