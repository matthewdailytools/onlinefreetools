/**
 * i18n（json-diff-checker-online / ar）。
 * H1: فاحص اختلاف JSON عبر الإنترنت.
 * ترتيب المفاتيح يُتجاهل افتراضياً؛ ليس YAML/XML.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_json_diff_checker_online_article:
		'الصق قيمتي JSON واعرض الإضافات والحذف والتغييرات حسب المسار. يُتجاهل ترتيب المفاتيح افتراضياً. يبقى اللصق على جهازك دون رفع. لا يُحلَّل YAML ولا XML هنا.',
	tool_json_diff_checker_online_array_as_set: "تجاهل ترتيب المصفوفة (تُحسب العناصر المكررة)",
	tool_json_diff_checker_online_clear: 'مسح',
	tool_json_diff_checker_online_compare: 'قارن',
	tool_json_diff_checker_online_desc:
		'فاحص اختلاف JSON عبر الإنترنت: قارن قيمتي JSON حسب المسار، تجاهل ترتيب المفاتيح افتراضياً — يبقى اللصق على الجهاز.',
	tool_json_diff_checker_online_description:
		'فاحص اختلاف JSON عبر الإنترنت داخل المتصفح. العملية: الصق قيمتي JSON، حلّلهما، وتجاهل ترتيب مفاتيح الكائن (مفعّل افتراضياً)، ثم اعرض الإضافات والحذف والتغييرات حسب المسار. يبقى اللصق على جهازك دون رفع إلى خادم. مثال: {"b":1,"a":2} مقابل {"a":2,"b":1} يتطابقان؛ تغيير price يظهر /price. ليس فاحص YAML أو XML.',
	tool_json_diff_checker_online_empty: 'الصق JSON على الجانبين، أو حمّل المثال.',
	tool_json_diff_checker_online_err_bad_a: 'الجانب الأيسر ليس JSON صالحاً.',
	tool_json_diff_checker_online_err_bad_b: 'الجانب الأيمن ليس JSON صالحاً.',
	tool_json_diff_checker_online_example:
		'مثال اليسار يكتب sku ثم price؛ اليمين يضع price أولاً ويغيّر 9.5 إلى 10. مع تجاهل ترتيب المفاتيح يُبلَّغ عن /price فقط. يظهر ذلك المسار من أول عرض.',
	tool_json_diff_checker_online_example_title: 'مثال',
	tool_json_diff_checker_online_faq_a1:
		'لا. يُحلَّل النص في هذا التبويب بـ JSON.parse. لا يُرفع شيء إلى خوادمنا.',
	tool_json_diff_checker_online_faq_a2:
		'افتراضياً يُعدّ {"a":1,"b":2} و{"b":2,"a":1} الكائن نفسه. أوقف «تجاهل ترتيب المفاتيح» إن كان ترتيب الكتابة مهماً.',
	tool_json_diff_checker_online_faq_a3:
		"تُقارن المصفوفات بالفهرس افتراضياً. عند تجاهل الترتيب تُرتب العناصر الموحّدة مع إبقاء التكرارات، وتشير الفهارس الناتجة إلى الترتيب المرتب؛ ولا تتم مطابقة الكائنات بحقل id.",
	tool_json_diff_checker_online_faq_a4:
		"تُحلل صيغة JSON الصالحة فقط، ولا تُقبل بنية YAML أو XML. حوّل YAML إلى JSON أولاً أو استخدم أداة مقارنة خاصة بالتنسيق.",
	tool_json_diff_checker_online_faq_q1: 'هل يُرفع JSON الخاص بي؟',
	tool_json_diff_checker_online_faq_q2: 'هل يُحسب ترتيب المفاتيح فرقاً؟',
	tool_json_diff_checker_online_faq_q3: 'كيف تُقارن المصفوفات؟',
	tool_json_diff_checker_online_faq_q4: 'هل هذا نفس JSON Diff Checker أو فرق YAML/XML؟',
	tool_json_diff_checker_online_how_body:
		'الصق مستندي JSON واقرأ التغييرات حسب المسار. يُتجاهل ترتيب المفاتيح ما لم توقفه.',
	tool_json_diff_checker_online_how_item_1: 'الصق JSON الأصلي يساراً.',
	tool_json_diff_checker_online_how_item_2: 'الصق JSON المعدَّل يميناً.',
	tool_json_diff_checker_online_how_item_3: 'أبقِ تجاهل ترتيب المفاتيح مفعّلاً إلا إن احتجت ترتيب الكتابة.',
	tool_json_diff_checker_online_how_item_4: "اضغط «قارن» لسرد المسارات المضافة والمحذوفة والمتغيرة وفق الخيارات الحالية.",
	tool_json_diff_checker_online_how_title: 'طريقة الاستخدام',
	tool_json_diff_checker_online_ignore_keys: 'تجاهل ترتيب مفاتيح الكائن',
	tool_json_diff_checker_online_label_a: 'JSON الأصلي',
	tool_json_diff_checker_online_label_b: 'JSON المعدَّل',
	tool_json_diff_checker_online_load_sample: 'تحميل المثال',
	tool_json_diff_checker_online_no_diff: 'لا اختلاف دلالي بالخيارات الحالية.',
	tool_json_diff_checker_online_op_added: 'مضاف',
	tool_json_diff_checker_online_op_changed: 'مغيَّر',
	tool_json_diff_checker_online_op_removed: 'محذوف',
	tool_json_diff_checker_online_result_label: 'اختلافات المسار',
	tool_json_diff_checker_online_rules_body:
		'بعد JSON.parse يمكن ترتيب مفاتيح الكائن حتى لا يوهم ترتيب الكتابة بوجود تغيير.',
	tool_json_diff_checker_online_rules_item_1:
		'يُبلَّغ عن JSON غير الصالح لكل جانب. المفاتيح المكررة تتبع JSON.parse (الأخير يفوز إن سمح المحرك).',
	tool_json_diff_checker_online_rules_item_2:
		'تجاهل ترتيب المفاتيح (مفعّل افتراضياً) يرتّب مفاتيح الكائن قبل السير على المسارات.',
	tool_json_diff_checker_online_rules_item_3:
		"تجاهل ترتيب المصفوفة يرتب العناصر الموحّدة مع إبقاء التكرارات؛ وتشير الفهارس إلى ترتيب المقارنة لا المواضع الأصلية.",
	tool_json_diff_checker_online_rules_item_4:
		'لا يُحلَّل YAML ولا XML. إن لزم فحوّل YAML أولاً في صفحة YAML ↔ JSON المرتبطة.',
	tool_json_diff_checker_online_rules_title: 'قواعد تتوقعها',
	tool_json_diff_checker_online_sample_a: '{\n  "sku": "A-1",\n  "price": 9.5\n}',
	tool_json_diff_checker_online_sample_b: '{\n  "price": 10,\n  "sku": "A-1"\n}',
	tool_json_diff_checker_online_summary: '{added} مضاف، {removed} محذوف، {changed} مغيَّر',
	tool_json_diff_checker_online_title: 'فاحص اختلاف JSON عبر الإنترنت',
	tool_json_diff_checker_online_usecase_1:
		'عيّنات واجهة برمجة: جسمان للإجابة يعيد pretty-print ترتيب المفاتيح فيهما.',
	tool_json_diff_checker_online_usecase_2: 'لقطات إعداد: أي المسارات تغيّر فعلاً بين النشرات.',
	tool_json_diff_checker_online_usecase_3: 'JSON نموذج: قارن الخرج المنظَّم قبل إرساله إلى المرحلة التالية.',
	tool_json_diff_checker_online_usecases_title: 'متى يناسب',
};

export default ar;
