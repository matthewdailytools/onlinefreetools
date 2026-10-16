/**
 * i18n 工具分片（write-nested-if-formula-for-excel / ar）。
 * 有序条件 → 嵌套 IF 公式；浏览器试算；复制粘贴到 Excel。
 * 阿拉伯语检索向：صيغة IF متداخلة؛示例 West → A；自然口语。
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_write_nested_if_formula_for_excel_title: "منشئ صيغة IF متداخلة لإكسل — شروط مرتّبة جاهزة للنسخ",
	tool_write_nested_if_formula_for_excel_description: "ابنِ صيغة IF متداخلة لإكسل من اختبارات مرتّبة: يساوي أو يحتوي أو فارغ. مثال: West → A، وEast → B، وإلا Other → =IF(A1=\"West\",\"A\",IF(A1=\"East\",\"B\",\"Other\")). جرّب النتيجة في المتصفح ثم انسخ. أسماء الدوال بالإنجليزية وفواصل إنجليزية.",
	tool_write_nested_if_formula_for_excel_article: "أضف الشروط بالترتيب، حدّد نتيجة كل فرع والقيمة النهائية لـ«وإلا»، عاين قيمة تجريبية، ثم انسخ صيغة IF المتداخلة كاملة.",
	tool_write_nested_if_formula_for_excel_desc: "شروط مرتّبة → صيغة IF متداخلة مع تجربة في المتصفح ونسخ.",

	tool_write_nested_if_formula_for_excel_hint: "تُختبر الشروط من الأعلى إلى الأسفل. أول تطابق يفوز. «يحتوي» يُخرج ISNUMBER(SEARCH(...)). الصيغ بأسماء إنجليزية وفواصل.",
	tool_write_nested_if_formula_for_excel_cell_label: "الخلية المستهدفة",
	tool_write_nested_if_formula_for_excel_cell_ph: "مثل A1",
	tool_write_nested_if_formula_for_excel_trial_label: "قيمة التجربة",
	tool_write_nested_if_formula_for_excel_trial_ph: "مثل West",
	tool_write_nested_if_formula_for_excel_else_label: "وإلا (الفرع الأخير عند الخطأ)",
	tool_write_nested_if_formula_for_excel_else_ph: "مثل Other",
	tool_write_nested_if_formula_for_excel_col_op: "الاختبار",
	tool_write_nested_if_formula_for_excel_col_val: "القيمة / النص",
	tool_write_nested_if_formula_for_excel_col_then: "النتيجة عند التحقق",
	tool_write_nested_if_formula_for_excel_op_eq: "يساوي",
	tool_write_nested_if_formula_for_excel_op_contains: "يحتوي",
	tool_write_nested_if_formula_for_excel_op_blank: "فارغ",
	tool_write_nested_if_formula_for_excel_add: "إضافة شرط",
	tool_write_nested_if_formula_for_excel_write: "إنشاء الصيغة",
	tool_write_nested_if_formula_for_excel_sample: "تحميل مثال",
	tool_write_nested_if_formula_for_excel_clear: "مسح",
	tool_write_nested_if_formula_for_excel_copy: "نسخ الصيغة",
	tool_write_nested_if_formula_for_excel_copied: "تم النسخ.",
	tool_write_nested_if_formula_for_excel_formula_label: "صيغة IF المتداخلة",
	tool_write_nested_if_formula_for_excel_trial_result_label: "نتيجة التجربة",
	tool_write_nested_if_formula_for_excel_empty: "أضف شرطًا واحدًا على الأقل (أو حمّل المثال)، ثم أنشئ الصيغة.",
	tool_write_nested_if_formula_for_excel_copy_fail: "تعذّر النسخ. حدّد الصيغة وانسخها يدويًا.",

	tool_write_nested_if_formula_for_excel_how_title: "كيف تكتب صيغة IF متداخلة",
	tool_write_nested_if_formula_for_excel_how_body: "أدخل الخلية المستهدفة والشروط بالترتيب. «إنشاء الصيغة» يعرض IF المتداخلة ويحسب قيمة التجربة. النسخ يعطي صيغة إكسل إنجليزية بالفواصل.",
	tool_write_nested_if_formula_for_excel_how_item_1: "عيّن الخلية المستهدفة وقيمة تجربة اختيارية.",
	tool_write_nested_if_formula_for_excel_how_item_2: "أضف صفوف يساوي أو يحتوي أو فارغ بالترتيب الذي يجب أن يختبره إكسل.",
	tool_write_nested_if_formula_for_excel_how_item_3: "حدّد نتيجة «عند التحقق» لكل صف والقيمة النهائية لـ«وإلا».",
	tool_write_nested_if_formula_for_excel_how_item_4: "انقر «إنشاء الصيغة»، راجع نتيجة التجربة، ثم «نسخ الصيغة».",

	tool_write_nested_if_formula_for_excel_why_choose_title: "ما الذي يقدّمه منشئ IF المتداخلة هذا",
	tool_write_nested_if_formula_for_excel_why_choose_item_1: "شروط يساوي / يحتوي / فارغ في IF متداخلة واحدة وبالترتيب الذي تختاره.",
	tool_write_nested_if_formula_for_excel_why_choose_item_2: "تجربة في المتصفح تُظهر أي فرع يفوز قبل اللصق في المصنف.",
	tool_write_nested_if_formula_for_excel_why_choose_item_3: "تبديل أمثلة: مناطق، درجات، واختبار «يحتوي».",
	tool_write_nested_if_formula_for_excel_why_choose_item_4: "نسخ بنقرة واحدة لسلسلة الصيغة كاملة.",
	tool_write_nested_if_formula_for_excel_why_choose_item_5: "واضح: الصفحة تبني IF متداخلة وليس IFS (راجع صفحة IFS ذات الصلة).",

	tool_write_nested_if_formula_for_excel_rules_title: "قواعد يجدر توقعها",
	tool_write_nested_if_formula_for_excel_rules_body: "الأداة تُخرج IF(...) الكلاسيكية. علامات الاقتباس داخل نصوص إكسل تُضاعَف.",
	tool_write_nested_if_formula_for_excel_rules_item_1: "علامات الاقتباس داخل نصوص إكسل تُضاعَف.",
	tool_write_nested_if_formula_for_excel_rules_item_2: "«يحتوي» يُخرج ISNUMBER(SEARCH(...))؛ والفارغ يختبر نصًا فارغًا.",
	tool_write_nested_if_formula_for_excel_rules_item_3: "أول شرط مطابق يفوز (من الأعلى إلى الأسفل).",
	tool_write_nested_if_formula_for_excel_rules_item_4: "أسماء الدوال الإنجليزية والفواصل قد تحتاج تعريبًا أو فواصل منقوطة في نسختك من إكسل.",
	tool_write_nested_if_formula_for_excel_rules_item_5: "لصيغة IFS() استخدم صفحة كتابة IFS ذات الصلة.",

	tool_write_nested_if_formula_for_excel_example_title: "أمثلة مفصّلة",
	tool_write_nested_if_formula_for_excel_example: "«تحميل مثال» يبدأ بـ West → A وEast → B وإلا Other؛ تجربة West → A. التالي نطاقات درجات (≥90 / ≥80). آخر مثال يستخدم اختبار «يحتوي» لـ«promo».",

	tool_write_nested_if_formula_for_excel_usecases_title: "متى تستخدم منشئ صيغة IF متداخلة",
	tool_write_nested_if_formula_for_excel_usecase_1: "تعيين نطاقات درجات أو مخاطر بقواعد مرتّبة.",
	tool_write_nested_if_formula_for_excel_usecase_2: "تحويل رموز المناطق إلى تسميات للتقارير.",
	tool_write_nested_if_formula_for_excel_usecase_3: "التحقق من صيغة متعددة الفروع قبل لصقها في المصنف.",
	tool_write_nested_if_formula_for_excel_usecase_4: "تجربة فروع يحتوي/فارغ دون كتابة SEARCH يدويًا.",

	tool_write_nested_if_formula_for_excel_faq_q1: "هل تُرفع قيمي إلى خادم؟",
	tool_write_nested_if_formula_for_excel_faq_a1: "لا. البناء والتجربة يبقيان في المتصفح على جهازك دون رفع إلى خادم.",
	tool_write_nested_if_formula_for_excel_faq_q2: "هل هذا مثل IFS؟",
	tool_write_nested_if_formula_for_excel_faq_a2: "لا. هذه الصفحة تُخرج IF(...) متداخلة. لـ IFS() استخدم منشئ IFS ذا الصلة.",
	tool_write_nested_if_formula_for_excel_faq_q3: "كيف يعمل «يحتوي»؟",
	tool_write_nested_if_formula_for_excel_faq_a3: "يُدرج ISNUMBER(SEARCH(\"نص\", الخلية)) داخل اختبار IF.",
	tool_write_nested_if_formula_for_excel_faq_q4: "هل تلصق الصيغة في كل لغة لإكسل؟",
	tool_write_nested_if_formula_for_excel_faq_a4: "تستخدم أسماء دوال إنجليزية وفواصل. بعض التثبيتات تحتاج أسماء مترجمة أو فواصل منقوطة.",
	tool_write_nested_if_formula_for_excel_faq_q5: "ما فائدة قيمة التجربة؟",
	tool_write_nested_if_formula_for_excel_faq_a5: "تحسب نفس ترتيب الفروع في المتصفح لتتأكد أي «عند التحقق»/«وإلا» يفوز.",
	tool_write_nested_if_formula_for_excel_faq_q6: "هل أستطيع تداخل أكثر من شرطين؟",
	tool_write_nested_if_formula_for_excel_faq_a6: "نعم. أضف صفوفًا؛ كل صف يصبح طبقة IF إضافية حول «وإلا» النهائية.",

	tool_write_nested_if_formula_for_excel_references: "وثائق Microsoft لدالة IF.",
	tool_write_nested_if_formula_for_excel_ref_a_label: "Microsoft — دالة IF",
	tool_write_nested_if_formula_for_excel_ref_b_label: "Microsoft — دالة IFS",
};

export default ar;
