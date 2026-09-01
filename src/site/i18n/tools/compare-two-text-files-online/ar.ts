/**
 * i18n shard for compare-two-text-files-online (Arabic).
 * H1 is the search task “مقارنة ملفين نصيين عبر الإنترنت”; written for AR searchers, not an English sentence clone.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_compare_two_text_files_online_article:
		'في هذا التبويب تختار ملفين نصيين وترى الإضافات والحذف سطراً بسطر. الملفات تبقى على جهازك ولا تُرفع إلى أي خادم. لا توجد صناديق لصق كبيرة هنا — اللصق فقط موجود في «تحقق من الفرق بين نصين».',
	tool_compare_two_text_files_online_clear: 'امسح',
	tool_compare_two_text_files_online_compare: 'قارن',
	tool_compare_two_text_files_online_desc:
		'مقارنة ملفين نصيين عبر الإنترنت: اختر ملفين txt وشاهد فرق الأسطر في المتصفح دون رفع.',
	tool_compare_two_text_files_online_description:
		'مقارنة ملفين نصيين عبر الإنترنت داخل المتصفح. العملية: اختر الملف الأصلي والنسخة المعدّلة، فك الترميز UTF-8 (يُزال BOM)، تُرفض البايتات الثنائية، ثم تُلوَّن إضافات الأسطر وحذفها. الملفات تبقى على جهازك ولا تُرفع. مثال: notes-a.txt مقابل notes-b.txt حيث يتغير السطر الأوسط فقط. وورد وإكسل وJSON لها صفحات أخرى؛ هذه الصفحة للملفات النصية فقط. مقارنة txt تدخل في المهمة نفسها.',
	tool_compare_two_text_files_online_empty: 'اختر ملفين نصيين أولاً، أو حمّل المثال.',
	tool_compare_two_text_files_online_err_binary:
		'أحد الملفين يبدو ثنائياً (بايتات فارغة). هذه الصفحة تقارن النص الصريح فقط مثل .txt.',
	tool_compare_two_text_files_online_err_too_large:
		'ملف أكبر من نحو 1 ميغابايت. جرّب مقطعاً أقصر حتى لا يتجمّد التبويب.',
	tool_compare_two_text_files_online_example:
		'تحميل المثال يقابل notes-a.txt (alpha / السطر الثاني / الثالث) مع notes-b.txt الذي وسطه «سطر مغيّر». وضع الأسطر يعلّم ذلك السطر فقط. تظهر هذه النتيجة منذ أول رسم للصفحة.',
	tool_compare_two_text_files_online_example_title: 'مثال',
	tool_compare_two_text_files_online_faq_a1:
		'لا. FileReader يقرأ البايتات داخل هذا التبويب. قد يُحمَّل jsdiff من شبكة توصيل كمكتبة؛ ملفاتك لا تُرسل إلى خوادمنا.',
	tool_compare_two_text_files_online_faq_a2:
		'يُفك الترميز كـ UTF-8. يُزال BOM في البداية حتى لا يُحسب السطر الأول متغيراً بسبب تلك العلامة وحدها. ترميزات أخرى قد تظهر مشوّهة — احفظ أولاً كـ UTF-8.',
	tool_compare_two_text_files_online_faq_a3:
		'وجود بايت فارغ يعني ملفاً ثنائياً فيُرفض. استخدم أداة سداسية أو أرشيف. وورد وإكسل لهما صفحات مقارنة خاصة.',
	tool_compare_two_text_files_online_faq_a4:
		'هذه الصفحة لـ .txt / .text. من يبحث عن مقارنة txt أو فرق ملفات أونلاين غالباً يريد هذا. إن كان «مقارنة ملفين» يعني وورد أو جدولاً فانتقل لتلك الصفحات. لصق نصين بلا ملفات في «تحقق من الفرق بين نصين».',
	tool_compare_two_text_files_online_faq_q1: 'هل تُرفع ملفاتي؟',
	tool_compare_two_text_files_online_faq_q2: 'ما قواعد الترميز وBOM؟',
	tool_compare_two_text_files_online_faq_q3: 'هل أقارن ملفات ثنائية أو وورد أو إكسل هنا؟',
	tool_compare_two_text_files_online_faq_q4: 'هل هذا مثل مقارنة txt أو مقارنة ملفين؟',
	tool_compare_two_text_files_online_how_body:
		'اختر ملفين نصيين موجودين على القرص ثم اقرأ الأسطر الملوّنة. الشاشة الأولى بلا صندوق لصق كبير.',
	tool_compare_two_text_files_online_how_item_1: 'اختر الملف النصي الأول (لقطة أصلية أو تصدير).',
	tool_compare_two_text_files_online_how_item_2: 'اختر الملف النصي الثاني (النسخة المعدّلة).',
	tool_compare_two_text_files_online_how_item_3:
		'المقارنة تعمل تلقائياً بعد اختيار الاثنين؛ حمّل مثالاً نفّذ ذلك مسبقاً عند أول رسم.',
	tool_compare_two_text_files_online_how_item_4: 'الأخضر إضافة والأحمر حذف. امسح يزيل الملفين من هذا التبويب.',
	tool_compare_two_text_files_online_how_title: 'طريقة الاستخدام',
	tool_compare_two_text_files_online_label_a: 'الملف النصي الأول',
	tool_compare_two_text_files_online_label_b: 'الملف النصي الثاني',
	tool_compare_two_text_files_online_legend: 'أخضر = مضاف · أحمر = محذوف',
	tool_compare_two_text_files_online_load_sample: 'حمّل مثالاً',
	tool_compare_two_text_files_online_need_lib: 'تعذّر تحميل أداة المقارنة. تحقق من الشبكة ثم حدّث الصفحة.',
	tool_compare_two_text_files_online_no_diff: 'لا فروق: الملفان متطابقان كنص.',
	tool_compare_two_text_files_online_result_label: 'فروق الأسطر',
	tool_compare_two_text_files_online_rules_body:
		'بعد فك UTF-8 يأتي فرق الأسطر. الترميز وBOM والتحقق الثنائي قبل التلوين.',
	tool_compare_two_text_files_online_rules_item_1:
		'يُقرأ كل ملف بـ FileReader / ArrayBuffer ويُفك كـ UTF-8. يُقطع BOM UTF-8 في البداية حتى لا يظهر تغيّر وهمي في السطر الأول.',
	tool_compare_two_text_files_online_rules_item_2:
		'البايت الفارغ يعني ملفاً ثنائياً فيُرفض. هذه ليست أداة عرض سداسي.',
	tool_compare_two_text_files_online_rules_item_3:
		'الفرق بوضع الأسطر (jsdiff diffLines). تغيير كلمة واحدة في السطر قد يلوّن السطر كله.',
	tool_compare_two_text_files_online_rules_item_4:
		'لا صندوق لصق في الشاشة الأولى. للصق نصين بلا ملفات استخدم «تحقق من الفرق بين نصين».',
	tool_compare_two_text_files_online_rules_title: 'قواعد تتوقعها',
	tool_compare_two_text_files_online_sample_a: 'alpha\nالسطر الثاني\nالثالث',
	tool_compare_two_text_files_online_sample_a_name: 'notes-a.txt',
	tool_compare_two_text_files_online_sample_b: 'alpha\nسطر مغيّر\nالثالث',
	tool_compare_two_text_files_online_sample_b_name: 'notes-b.txt',
	tool_compare_two_text_files_online_summary: '{added} مضاف، {removed} محذوف',
	tool_compare_two_text_files_online_title: 'مقارنة ملفين نصيين عبر الإنترنت',
	tool_compare_two_text_files_online_usecase_1:
		'التصدير: قارن log.txt أمس مع تصدير اليوم دون لصق عشرات آلاف الأسطر.',
	tool_compare_two_text_files_online_usecase_2:
		'نسخ الإعداد: لقطتان من .env أو .txt على القرص، سطراً بسطر.',
	tool_compare_two_text_files_online_usecase_3:
		'الواجب: ملفان txt للتسليم لمعرفة أي أسطر تغيّرت.',
	tool_compare_two_text_files_online_usecases_title: 'متى تستخدمها',
};

export default ar;
