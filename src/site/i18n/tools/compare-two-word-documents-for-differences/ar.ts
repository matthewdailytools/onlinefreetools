/**
 * i18n（compare-two-word-documents-for-differences / ar）。
 * H1: مقارنة مستندي وورد لمعرفة الاختلافات.
 * ليست مراجعة ← مقارنة من مايكروسوفت.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_compare_two_word_documents_for_differences_article:
		'اختر ملفين .docx وقارن النص الظاهر فقط. لا نعيد الأنماط ولا الرؤوس ولا جزء المراجعة في وورد. تبقى الملفات على جهازك دون رفع إلى خادم.',
	tool_compare_two_word_documents_for_differences_clear: 'مسح',
	tool_compare_two_word_documents_for_differences_compare: 'قارن',
	tool_compare_two_word_documents_for_differences_desc:
		'مقارنة مستندي وورد لمعرفة الاختلافات: استخراج النص الظاهر من ملفين .docx في المتصفح دون رفع إلى خادم.',
	tool_compare_two_word_documents_for_differences_description:
		'مقارنة مستندي وورد لمعرفة الاختلافات داخل المتصفح. العملية: اختر ملفين .docx، استخرج نص الفقرات الظاهر، ثم ميّز الإضافات والحذف. تبقى الملفات على جهازك دون رفع إلى خادم. مثال: مذكرتان قصيرتان تتغير فيهما جملة واحدة. هذه ليست «مراجعة ← مقارنة» من مايكروسوفت؛ تُستبعد الرؤوس والأنماط. ملف PDF خارج النطاق.',
	tool_compare_two_word_documents_for_differences_empty: 'اختر أولاً ملفي وورد، أو حمّل المثال.',
	tool_compare_two_word_documents_for_differences_err_extract:
		'تعذّر قراءة النص. قد يكون الملف تالفاً أو مشفّراً أو ليس .docx.',
	tool_compare_two_word_documents_for_differences_err_no_text: 'لا نص يمكن استخراجه من أي ملف (فارغ أو صور فقط).',
	tool_compare_two_word_documents_for_differences_err_not_docx: 'استخدم .docx (Office Open XML). صيغة .doc القديمة غير مدعومة هنا.',
	tool_compare_two_word_documents_for_differences_example:
		'تحميل المثال ينشئ ملفين .docx صغيرين. المذكرة الثانية تبدّل “meet at noon” إلى “meet at 3pm”. يظهر فرق الصياغة من أول عرض.',
	tool_compare_two_word_documents_for_differences_example_title: 'مثال',
	tool_compare_two_word_documents_for_differences_faq_a1:
		'لا. تُقرأ الملفات في هذا التبويب. قد يصل mammoth وjsdiff كمكتبات من شبكة توصيل محتوى؛ مستنداتك لا تُرفع إلى خوادمنا.',
	tool_compare_two_word_documents_for_differences_faq_a2:
		'لا. يستطيع وورد مقارنة التنسيق والتغييرات المتعقّبة. هذه الصفحة تستخرج النص الظاهر فقط ثم تفرّق تلك الصياغة. تُستبعد الرؤوس والتذييلات والأنماط.',
	tool_compare_two_word_documents_for_differences_faq_a3:
		'إن فشل الاستخراج فغالباً الملف محمي بكلمة مرور أو تالف أو ليس OOXML. الصفحات ذات الصور فقط تعطي نصاً فارغاً.',
	tool_compare_two_word_documents_for_differences_faq_a4:
		"تقبل المقارنة ملفي .docx وتفحص النص المستخرج. لا تُحلل ملفات PDF أو .doc القديمة، ولا تشمل النتيجة التنسيق أو سجل مراجعات وورد.",
	tool_compare_two_word_documents_for_differences_faq_q1: 'هل تُرفع ملفات وورد الخاصة بي؟',
	tool_compare_two_word_documents_for_differences_faq_q2: 'هل هذا مطابق لـ «مراجعة ← مقارنة» في وورد؟',
	tool_compare_two_word_documents_for_differences_faq_q3: 'لماذا يفشل الاستخراج أو تختفي الرؤوس؟',
	tool_compare_two_word_documents_for_differences_faq_q4: 'هل أقارن PDF أو أي مستندين؟',
	tool_compare_two_word_documents_for_differences_how_body:
		'اختر ملفي وورد واقرأ فرق الصياغة. هذه الصفحة لا تفتح جزء المراجعة.',
	tool_compare_two_word_documents_for_differences_how_item_1: 'اختر أول .docx (الأصل).',
	tool_compare_two_word_documents_for_differences_how_item_2: 'اختر ثاني .docx (المعدَّل).',
	tool_compare_two_word_documents_for_differences_how_item_3:
		"اضغط «قارن» لاستخراج النص الظاهر وتشغيل مقارنة الصياغة.",
	tool_compare_two_word_documents_for_differences_how_item_4: 'اقرأ الأخضر للإضافة والأحمر للحذف.',
	tool_compare_two_word_documents_for_differences_how_title: 'طريقة الاستخدام',
	tool_compare_two_word_documents_for_differences_label_a: 'مستند وورد الأول',
	tool_compare_two_word_documents_for_differences_label_b: 'مستند وورد الثاني',
	tool_compare_two_word_documents_for_differences_legend: 'أخضر = مضاف · أحمر = محذوف',
	tool_compare_two_word_documents_for_differences_load_sample: 'تحميل المثال',
	tool_compare_two_word_documents_for_differences_need_lib: 'تعذّر تحميل مكتبة. تحقق من الشبكة ثم حدّث الصفحة.',
	tool_compare_two_word_documents_for_differences_no_diff: 'لا اختلاف في الصياغة ضمن النص المستخرج.',
	tool_compare_two_word_documents_for_differences_result_label: 'اختلافات الصياغة',
	tool_compare_two_word_documents_for_differences_rules_body:
		'المقارنة فرق نص بعد الاستخراج. التنسيق ليس مسار مراجعة.',
	tool_compare_two_word_documents_for_differences_rules_item_1:
		'يقرأ mammoth فقرات ظاهرة من OOXML. ثم يُفرَّق ذلك النص سطراً بسطر عبر jsdiff.',
	tool_compare_two_word_documents_for_differences_rules_item_2:
		'تُستبعد الرؤوس والتذييلات والتعليقات ومعظم الأنماط. ملفان تغيّر فيهما الشكل فقط قد يبدوان متطابقين.',
	tool_compare_two_word_documents_for_differences_rules_item_3: 'يفشل .docx المشفّر أو التالف. لا يُحلَّل .doc القديم.',
	tool_compare_two_word_documents_for_differences_rules_item_4:
		'هذه ليست «مقارنة المستندات» من مايكروسوفت. إن احتجت تنسيقاً متعقّباً فاستخدم وورد نفسه.',
	tool_compare_two_word_documents_for_differences_rules_title: 'قواعد تتوقعها',
	tool_compare_two_word_documents_for_differences_sample_a: 'Team memo\nPlease meet at noon.',
	tool_compare_two_word_documents_for_differences_sample_a_name: 'memo-a.docx',
	tool_compare_two_word_documents_for_differences_sample_b: 'Team memo\nPlease meet at 3pm.',
	tool_compare_two_word_documents_for_differences_sample_b_name: 'memo-b.docx',
	tool_compare_two_word_documents_for_differences_summary: '{added} مضاف، {removed} محذوف',
	tool_compare_two_word_documents_for_differences_title: 'مقارنة مستندي وورد لمعرفة الاختلافات',
	tool_compare_two_word_documents_for_differences_usecase_1:
		'مسودات عقد: انظر أي جمل تغيّرت بين تصديرين .docx.',
	tool_compare_two_word_documents_for_differences_usecase_2: 'محاضر اجتماع: ملف الأسبوع الماضي مقابل ملف هذا الأسبوع.',
	tool_compare_two_word_documents_for_differences_usecase_3: 'واجبات: تسليما وورد عندما تهم الصياغة لا التخطيط.',
	tool_compare_two_word_documents_for_differences_usecases_title: 'متى يناسب',
};

export default ar;
