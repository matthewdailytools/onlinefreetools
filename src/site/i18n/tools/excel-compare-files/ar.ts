/**
 * i18n（excel-compare-files / ar）。
 * H1: مقارنة ملفات إكسل（دون «عبر الإنترنت» في العنوان）。
 * الورقة الأولى افتراضياً؛ الخلايا الفارغة سلسلة فارغة.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_excel_compare_files_article:
		'اختر جدولين وقارن الورقة الحالية خلية بخلية. الخلايا الفارغة تُعدّ سلسلة فارغة. تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_excel_compare_files_clear: 'مسح',
	tool_excel_compare_files_col_addr: 'خلية',
	tool_excel_compare_files_col_left: 'الملف الأول',
	tool_excel_compare_files_col_right: 'الملف الثاني',
	tool_excel_compare_files_compare: 'قارن',
	tool_excel_compare_files_desc:
		'مقارنة ملفات إكسل: اختر جدولين وقارن الورقة الحالية خلية بخلية — تبقى على الجهاز دون رفع إلى خادم.',
	tool_excel_compare_files_description:
		'مقارنة ملفات إكسل داخل المتصفح. العملية: اختر ملفين xlsx أو csv، استخدم الورقة الحالية (الأولى افتراضياً)، ثم اسرد الخلايا ذات القيمة المختلفة. تبقى الملفات على جهازك دون رفع إلى خادم. مثال: جدولان من 3 صفوف تتغيّر فيهما B3 من 2 إلى 9. إزاحة الأعمدة تُقارن بالعنوان لا باسم الترويسة.',
	tool_excel_compare_files_empty: 'اختر أولاً ملفي جداول، أو حمّل المثال.',
	tool_excel_compare_files_err_read:
		'تعذّر قراءة الجدول. جرّب xlsx أو csv، وأزل حماية المصنف أولاً.',
	tool_excel_compare_files_example:
		'تحميل المثال يقارن جدولي CSV. ترويستا Name/Qty متطابقتان؛ كمية Gadget 2 مقابل 9 لذا تُدرج B3. تظهر تلك الخلية من أول عرض.',
	tool_excel_compare_files_example_title: 'مثال',
	tool_excel_compare_files_faq_a1:
		'لا. تُقرأ البايتات في هذا التبويب عبر SheetJS. قد تصل المكتبة من شبكة توصيل محتوى؛ ملفاتك لا تُرفع إلى خوادمنا.',
	tool_excel_compare_files_faq_a2:
		'نعم: تُختار الورقة الأولى افتراضياً. استخدم قوائم الأوراق إن احتجت تبويباً آخر في الملف نفسه. لا تُقارن الأوراق الأخرى حتى تختارها.',
	tool_excel_compare_files_faq_a3:
		"نعم. يُقرأ CSV كورقة واحدة، لذا يمكن مقارنة ملفي CSV أو مقارنة تصدير CSV بورقة Excel حسب عنوان الخلية.",
	tool_excel_compare_files_faq_a4:
		'الخلايا الناقصة والفارغة كلتاهما سلسلة فارغة. العمود المزاح ما زال يقارن A1 مع A1، لا «عمود Name» حسب الترويسة، حتى لا يحدث اقتران صامت إذا تحركت العناوين.',
	tool_excel_compare_files_faq_q5: "هل تقارن الصيغ والتنسيق أم القيم المعروضة فقط؟",
	tool_excel_compare_files_faq_a5: "تُقارن الكتابة المعروضة المقروءة من كل خلية. لا تُقارن تعبيرات الصيغ أو الأنماط أو التعليقات أو عرض الأعمدة أو بنية المصنف منفصلة؛ وقد لا يظهر تغيير صيغة إذا بقيت القيمة المخزنة نفسها.",
	tool_excel_compare_files_faq_q1: 'هل تُرفع ملفات إكسل الخاصة بي؟',
	tool_excel_compare_files_faq_q2: 'هل تُقارن الورقة الأولى فقط؟',
	tool_excel_compare_files_faq_q3: 'هل أقارن ملفي CSV هنا؟',
	tool_excel_compare_files_faq_q4: 'كيف تُعامل الخلايا الفارغة والأعمدة المزاحَة؟',
	tool_excel_compare_files_how_body:
		'اختر جدولين واقرأ أي عناوين خلايا تختلف في الورقتين الحاليتين.',
	tool_excel_compare_files_how_item_1: 'اختر الجدول الأول (xlsx أو xls أو csv).',
	tool_excel_compare_files_how_item_2: 'اختر الجدول الثاني.',
	tool_excel_compare_files_how_item_3: 'أبقِ الورقة الأولى ما لم تحتج تبويباً آخر.',
	tool_excel_compare_files_how_item_4: "اضغط «قارن» لسرد الخلايا التي يختلف نصها المعروض بين الورقتين المختارتين.",
	tool_excel_compare_files_how_title: 'طريقة الاستخدام',
	tool_excel_compare_files_label_a: 'الجدول الأول',
	tool_excel_compare_files_label_b: 'الجدول الثاني',
	tool_excel_compare_files_load_sample: 'تحميل المثال',
	tool_excel_compare_files_need_lib: 'تعذّر تحميل SheetJS. تحقق من الشبكة ثم حدّث الصفحة.',
	tool_excel_compare_files_no_diff: 'لا اختلاف خلايا في الورقتين الحاليتين.',
	tool_excel_compare_files_result_label: 'اختلافات الخلايا',
	tool_excel_compare_files_rules_body: 'تُقارن القيم بعنوان الشبكة في الورقة المختارة فقط.',
	tool_excel_compare_files_rules_item_1: 'يقرأ SheetJS المصنف. الورقة الافتراضية هي أول اسم في الملف.',
	tool_excel_compare_files_rules_item_2:
		'تُقارن كل خلية كنص بعد تحويل SheetJS. الفارغة والناقصة "".',
	tool_excel_compare_files_rules_item_3:
		'عمود مُدرج في جانب ما يزال يُحاذى بـ A1/B1 لا بتسميات الترويسة.',
	tool_excel_compare_files_rules_item_4:
		'تُتجاهل الأوراق الأخرى في المصنف حتى تختارها. لا يوجد مسح افتراضي للمصنف كله.',
	tool_excel_compare_files_rules_title: 'قواعد تتوقعها',
	tool_excel_compare_files_sample_a: 'Name,Qty\nWidget,1\nGadget,2',
	tool_excel_compare_files_sample_a_name: 'stock-a.csv',
	tool_excel_compare_files_sample_b: 'Name,Qty\nWidget,1\nGadget,9',
	tool_excel_compare_files_sample_b_name: 'stock-b.csv',
	tool_excel_compare_files_sheet_a: 'ورقة في الملف الأول',
	tool_excel_compare_files_sheet_b: 'ورقة في الملف الثاني',
	tool_excel_compare_files_summary: '{n} خلايا تختلف',
	tool_excel_compare_files_title: 'مقارنة ملفات إكسل',
	tool_excel_compare_files_usecase_1: 'عروض أسعار: قائمتا أسعار مصدَّرتان تحركت فيهما بضع خلايا.',
	tool_excel_compare_files_usecase_2: 'حضور أو مخزون CSV أسبوع مقابل أسبوع.',
	tool_excel_compare_files_usecase_3: 'جداول واجبات محفوظة كـ xlsx من طالبين.',
	tool_excel_compare_files_usecases_title: 'متى يناسب',
};

export default ar;
