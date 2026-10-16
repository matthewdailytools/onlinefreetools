/**
 * i18n 工具分片（write-ifs-formula-in-excel / ar）。
 * 有序条件 → =IFS(...)；TRUE 兜底；需 Excel 2019 / Microsoft 365。
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_write_ifs_formula_in_excel_title: "منشئ صيغة IFS لإكسل — اختبارات مرتّبة مع TRUE كاحتياطي",
	tool_write_ifs_formula_in_excel_description: "ابنِ صيغة IFS لـ Excel 2019 أو Microsoft 365 من اختبارات مرتّبة (يساوي، يحتوي، فارغ). مثال: West → A، East → B، وإلا Other → =IFS(A1=\"West\",\"A\",A1=\"East\",\"B\",TRUE,\"Other\"). جرّب في المتصفح ثم انسخ. غير متاحة في Excel 2016 الدائم.",
	tool_write_ifs_formula_in_excel_article: "أضف اختبارات مرتّبة، عيّن كل نتيجة واحتياطي TRUE، عاين قيمة تجريبية، وانسخ صيغة IFS كاملة.",
	tool_write_ifs_formula_in_excel_desc: "اختبارات مرتّبة → صيغة IFS مع TRUE احتياطي، تجربة بالمتصفح ونسخ.",

	tool_write_ifs_formula_in_excel_hint: "تُختبر الشروط من الأعلى للأسفل. المنشئ يضيف TRUE,وإلا كاحتياطي. يتطلب Excel 2019 أو Microsoft 365 أو أحدث. أسماء إنجليزية وفواصل.",
	tool_write_ifs_formula_in_excel_note_2016: "IFS يحتاج Excel 2019 أو Microsoft 365 أو أحدث. لإكسل الأقدم استخدم منشئ IF المتداخل.",
	tool_write_ifs_formula_in_excel_cell_label: "الخلية الهدف",
	tool_write_ifs_formula_in_excel_cell_ph: "مثل A1",
	tool_write_ifs_formula_in_excel_trial_label: "قيمة تجريبية",
	tool_write_ifs_formula_in_excel_trial_ph: "مثل West",
	tool_write_ifs_formula_in_excel_else_label: "وإلا (TRUE احتياطي)",
	tool_write_ifs_formula_in_excel_else_ph: "مثل Other",
	tool_write_ifs_formula_in_excel_col_op: "الاختبار",
	tool_write_ifs_formula_in_excel_col_val: "قيمة / نص",
	tool_write_ifs_formula_in_excel_col_then: "النتيجة عندها",
	tool_write_ifs_formula_in_excel_op_eq: "يساوي",
	tool_write_ifs_formula_in_excel_op_contains: "يحتوي",
	tool_write_ifs_formula_in_excel_op_blank: "فارغ",
	tool_write_ifs_formula_in_excel_add: "إضافة شرط",
	tool_write_ifs_formula_in_excel_write: "إنشاء الصيغة",
	tool_write_ifs_formula_in_excel_sample: "تحميل مثال",
	tool_write_ifs_formula_in_excel_clear: "مسح",
	tool_write_ifs_formula_in_excel_copy: "نسخ الصيغة",
	tool_write_ifs_formula_in_excel_copied: "تم النسخ.",
	tool_write_ifs_formula_in_excel_formula_label: "صيغة IFS",
	tool_write_ifs_formula_in_excel_trial_result_label: "نتيجة التجربة",
	tool_write_ifs_formula_in_excel_empty: "أضف شرطًا واحدًا على الأقل (أو حمّل المثال)، ثم أنشئ الصيغة.",
	tool_write_ifs_formula_in_excel_copy_fail: "تعذّر النسخ. حدّد الصيغة وانسخها يدويًا.",

	tool_write_ifs_formula_in_excel_how_title: "كيف تكتب صيغة IFS",
	tool_write_ifs_formula_in_excel_how_body: "أدخل الخلية الهدف والاختبارات المرتّبة. «إنشاء الصيغة» يعرض IFS مع TRUE احتياطي ويقيّم قيمتك التجريبية. النسخ يعطي صيغة Excel الإنجليزية بفواصل.",
	tool_write_ifs_formula_in_excel_how_item_1: "عيّن الخلية الهدف وقيمة تجريبية اختيارية.",
	tool_write_ifs_formula_in_excel_how_item_2: "أضف صفوف يساوي أو يحتوي أو فارغ بترتيب التقييم.",
	tool_write_ifs_formula_in_excel_how_item_3: "عيّن كل نتيجة «عندها» وقيمة «وإلا» (مع TRUE).",
	tool_write_ifs_formula_in_excel_how_item_4: "انقر إنشاء الصيغة، راجع التجربة، ثم انسخ. على Excel 2016 استخدم IF المتداخل.",

	tool_write_ifs_formula_in_excel_why_choose_title: "ماذا يقدّم لك منشئ IFS هذا",
	tool_write_ifs_formula_in_excel_why_choose_item_1: "اختبارات مرتّبة يساوي / يحتوي / فارغ في استدعاء IFS واحد.",
	tool_write_ifs_formula_in_excel_why_choose_item_2: "زوج TRUE,وإلا تلقائي كاحتياطي.",
	tool_write_ifs_formula_in_excel_why_choose_item_3: "تجربة في المتصفح قبل اللصق في Excel.",
	tool_write_ifs_formula_in_excel_why_choose_item_4: "أمثلة دوّارة للمناطق والدرجات و«يحتوي».",
	tool_write_ifs_formula_in_excel_why_choose_item_5: "حد واضح لـ Excel 2016 مع مسار إلى IF المتداخل.",

	tool_write_ifs_formula_in_excel_rules_title: "قواعد تتوقعها",
	tool_write_ifs_formula_in_excel_rules_body: "المنشئ يُخرج IFS(اختبار,قيمة,...,TRUE,وإلا). تُضاعَف علامات الاقتباس داخل سلاسل Excel.",
	tool_write_ifs_formula_in_excel_rules_item_1: "تُضاعَف علامات الاقتباس داخل سلاسل Excel.",
	tool_write_ifs_formula_in_excel_rules_item_2: "«يحتوي» يُخرج ISNUMBER(SEARCH(...))؛ الفارغ يختبر نصًا فارغًا.",
	tool_write_ifs_formula_in_excel_rules_item_3: "أول اختبار مطابق يفوز؛ TRUE الاحتياطي يعمل أخيرًا.",
	tool_write_ifs_formula_in_excel_rules_item_4: "IFS يحتاج Excel 2019 أو Microsoft 365 أو أحدث — وليس Excel 2016 الدائم.",
	tool_write_ifs_formula_in_excel_rules_item_5: "أسماء الدوال الإنجليزية والفواصل قد تحتاج تعريبًا في تثبيت Excel لديك.",

	tool_write_ifs_formula_in_excel_example_title: "أمثلة عملية",
	tool_write_ifs_formula_in_excel_example: "تحميل المثال يبدأ بـ West → A و East → B، وإلا Other → =IFS(...,TRUE,\"Other\")، والتجربة West → A. التالي يبني درجات بسيطة بالمساواة. الأخير يستخدم «يحتوي» لـ promo.",

	tool_write_ifs_formula_in_excel_usecases_title: "متى تستخدم منشئ صيغة IFS",
	tool_write_ifs_formula_in_excel_usecase_1: "ربط رموز المناطق بتسميات دون أقواس IF متداخلة عميقة.",
	tool_write_ifs_formula_in_excel_usecase_2: "مسودة نطاقات درجات أو مخاطر لمصنفات Microsoft 365.",
	tool_write_ifs_formula_in_excel_usecase_3: "تجربة ترتيب الفروع قبل اللصق في ورقة مشتركة.",
	tool_write_ifs_formula_in_excel_usecase_4: "الانتقال لصفحة IF المتداخل عندما لا يزال الزملاء على Excel 2016.",

	tool_write_ifs_formula_in_excel_faq_q1: "هل يعمل IFS على Excel 2016؟",
	tool_write_ifs_formula_in_excel_faq_a1: "إصدار Excel 2016 الدائم لا. استخدم IF المتداخل، أو Excel 2019 فأحدَث، أو Microsoft 365.",
	tool_write_ifs_formula_in_excel_faq_q2: "ماذا لو لم يطابق أي اختبار؟",
	tool_write_ifs_formula_in_excel_faq_a2: "TRUE يقترن بقيمة «وإلا» كنتيجة احتياطية.",
	tool_write_ifs_formula_in_excel_faq_q3: "هل تُرفع القيم إلى خادم؟",
	tool_write_ifs_formula_in_excel_faq_a3: "لا. البناء والتجربة يبقيان في متصفحك.",
	tool_write_ifs_formula_in_excel_faq_q4: "هل يقبل Excel المعرّب الصيغة؟",
	tool_write_ifs_formula_in_excel_faq_a4: "بعض التثبيتات تحتاج أسماء دوال مترجمة أو فواصل منقوطة.",
	tool_write_ifs_formula_in_excel_faq_q5: "ما الفرق عن IF المتداخل؟",
	tool_write_ifs_formula_in_excel_faq_a5: "IFS قائمة مسطّحة من الاختبارات. IF المتداخل يلفّ IF داخل IF. لإكسل الأقدم استخدم صفحة IF المتداخل المرتبطة.",
	tool_write_ifs_formula_in_excel_faq_q6: "ماذا يُخرج «يحتوي»؟",
	tool_write_ifs_formula_in_excel_faq_a6: "ISNUMBER(SEARCH(\"text\", cell)) كوسيط اختبار داخل IFS.",

	tool_write_ifs_formula_in_excel_references: "وثائق Microsoft لدالة IFS.",
	tool_write_ifs_formula_in_excel_ref_a_label: "Microsoft — دالة IFS",
	tool_write_ifs_formula_in_excel_ref_b_label: "Microsoft — دالة IF",
};

export default ar;
