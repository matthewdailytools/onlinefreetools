/**
 * i18n 工具分片（create-budget-spreadsheet / ar）。
 * 类别+金额 → 预览合计 → 下载含 SUM 公式的 xlsx；YMYL 仅规划数字，非理财/税务建议。
 * 当地检索向：إنشاء جدول ميزانية / ميزانية Excel；示例数字用拉丁数字。
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_create_budget_spreadsheet_title: "إنشاء جدول ميزانية — فئات ومبالغ إلى ملف Excel xlsx",
	tool_create_budget_spreadsheet_description: "ابنِ جدول ميزانية بسيطًا من صفوف الفئة والمبلغ، عاين المجموع، ثم نزّل ملف .xlsx بصيغة SUM حيّة. مثال: إيجار 1200 + طعام 400 ← المجموع 1600. يعمل في المتصفح — أرقام تخطيط فقط، وليست نصيحة مالية أو ضريبية.",
	tool_create_budget_spreadsheet_article: "أدخل أسطر فئة,مبلغ، عاين المجموع الجاري، ثم نزّل budget.xlsx حيث خلية المجموع تستخدم SUM.",
	tool_create_budget_spreadsheet_desc: "فئة + مبلغ ← عاين المجموع ← نزّل xlsx مع SUM. يبقى على جهازك دون رفع إلى خادم.",

	tool_create_budget_spreadsheet_safety_banner: "أرقام تخطيط فقط. الصفحة تبني قائمة فئات بسيطة مع مجموع SUM. ليست دفتر أستاذ ولا إقرارًا ضريبيًا ولا نصيحة استثمار.",
	tool_create_budget_spreadsheet_hint: "صف واحد في كل سطر: فئة,مبلغ (فاصلة أو تاب). المبالغ أرقام محدودة. الأسطر التالفة تُتخطى.",
	tool_create_budget_spreadsheet_input_label: "صفوف الميزانية (فئة، مبلغ)",
	tool_create_budget_spreadsheet_input_ph: "مثال: إيجار,1200",
	tool_create_budget_spreadsheet_write: "إنشاء الجدول",
	tool_create_budget_spreadsheet_download: "تنزيل xlsx",
	tool_create_budget_spreadsheet_sample: "تحميل مثال",
	tool_create_budget_spreadsheet_clear: "مسح",
	tool_create_budget_spreadsheet_preview_title: "معاينة",
	tool_create_budget_spreadsheet_col_category: "الفئة",
	tool_create_budget_spreadsheet_col_amount: "المبلغ",
	tool_create_budget_spreadsheet_total_label: "المجموع",
	tool_create_budget_spreadsheet_rows_label: "الصفوف المحسوبة",
	tool_create_budget_spreadsheet_ready_note: "المعاينة جاهزة. التنزيل يكتب budget.xlsx بصيغة SUM في خلية المجموع.",
	tool_create_budget_spreadsheet_empty: "أضف صفًا صالحًا واحدًا على الأقل بصيغة فئة,مبلغ (مثل إيجار,1200)، أو حمّل المثال.",
	tool_create_budget_spreadsheet_need_lib: "تعذّر تحميل مكتبة الجداول. تحقق من الشبكة ثم حدّث الصفحة.",
	tool_create_budget_spreadsheet_sheet_name: "ميزانية",

	tool_create_budget_spreadsheet_how_title: "كيف تنشئ جدول ميزانية",
	tool_create_budget_spreadsheet_how_body: "اذكر كل فئة إنفاق ومبلغها، أنشئ معاينة بالمجموع، ثم نزّل .xlsx. تغيير مبلغ في Excel يعيد حساب مجموع SUM.",
	tool_create_budget_spreadsheet_how_item_1: "أدخل سطرًا واحدًا لكل صف بصيغة فئة,مبلغ.",
	tool_create_budget_spreadsheet_how_item_2: "انقر «إنشاء الجدول» لمعاينة الصفوف والمجموع.",
	tool_create_budget_spreadsheet_how_item_3: "أصلح أو احذف الأسطر المتخطّاة إن بدا المجموع خاطئًا.",
	tool_create_budget_spreadsheet_how_item_4: "انقر «تنزيل xlsx» لحفظ budget.xlsx مع SUM حيّة.",

	tool_create_budget_spreadsheet_why_choose_title: "ماذا يقدّم لك منشئ جدول الميزانية هذا",
	tool_create_budget_spreadsheet_why_choose_item_1: "قائمة فئات سريعة مع معاينة للمجموع على الصفحة.",
	tool_create_budget_spreadsheet_why_choose_item_2: "خلية المجموع في الملف المنزّل تستخدم صيغة SUM حيّة في Excel.",
	tool_create_budget_spreadsheet_why_choose_item_3: "تدوير أمثلة لقوائم شهرية وسفر ونادٍ.",
	tool_create_budget_spreadsheet_why_choose_item_4: "يعمل في المتصفح — الصفوف تبقى على جهازك دون رفع إلى خادم.",
	tool_create_budget_spreadsheet_why_choose_item_5: "حدّ YMYL واضح: تخطيط فقط — ليس دفتر أستاذ ولا أداة ضرائب.",

	tool_create_budget_spreadsheet_rules_title: "قواعد متوقّعة",
	tool_create_budget_spreadsheet_rules_body: "الأداة تبني ورقة تخطيط واحدة من مبالغ الفئات. ليست برنامج محاسبة.",
	tool_create_budget_spreadsheet_rules_item_1: "المبالغ أرقام محدودة؛ الصفوف التالفة تُتخطى.",
	tool_create_budget_spreadsheet_rules_item_2: "خلية المجموع في الملف المنزّل تستخدم =SUM على عمود المبالغ.",
	tool_create_budget_spreadsheet_rules_item_3: "قائمة مصروفات فقط — بلا محرك فروقات دخل مقابل مصروف.",
	tool_create_budget_spreadsheet_rules_item_4: "القيم تبقى على جهازك ولا تُرفع إلى خادم.",
	tool_create_budget_spreadsheet_rules_item_5: "صيغة الملف تتبع ممارسة OOXML/xlsx الشائعة عبر SheetJS في المتصفح.",

	tool_create_budget_spreadsheet_example_title: "أمثلة محلولة",
	tool_create_budget_spreadsheet_example: "«تحميل مثال» يبدأ بإيجار 1200 وطعام 400 ← المجموع 1600. التالي يضيف مرافق 150 ونقل 200. المثال الأخير قائمة سفر قصيرة (فندق، رحلات، طعام).",

	tool_create_budget_spreadsheet_usecases_title: "متى تنشئ جدول ميزانية هنا",
	tool_create_budget_spreadsheet_usecase_1: "ارسم ميزانية مظاريف شهرية قصيرة قبل قالب أوفى.",
	tool_create_budget_spreadsheet_usecase_2: "اجمع تكاليف سفر أو فعالية متوقعة في ورقة واحدة قابلة للتنزيل.",
	tool_create_budget_spreadsheet_usecase_3: "جهّز خطة إنفاق نادٍ قبل مسك الدفاتر الرسمي.",
	tool_create_budget_spreadsheet_usecase_4: "سلّم شخصًا ملف .xlsx بمجموع SUM ما زال يعيد الحساب في Excel.",

	tool_create_budget_spreadsheet_faq_q1: "هل هذا دفتر أستاذ عام؟",
	tool_create_budget_spreadsheet_faq_a1: "لا. بلا حسابات أو معاملات أو تسوية أو سجل تدقيق.",
	tool_create_budget_spreadsheet_faq_q2: "هل تُرفع صفوفي؟",
	tool_create_budget_spreadsheet_faq_a2: "لا. التحليل وكتابة xlsx يعملان في المتصفح؛ البيانات تبقى على جهازك دون رفع إلى خادم.",
	tool_create_budget_spreadsheet_faq_q3: "هل يعيد ملف xlsx المنزّل الحساب؟",
	tool_create_budget_spreadsheet_faq_a3: "نعم. خلية المجموع تحتوي صيغة SUM على عمود المبالغ.",
	tool_create_budget_spreadsheet_faq_q4: "هل يتتبع الدخل مقابل المصروفات؟",
	tool_create_budget_spreadsheet_faq_a4: "لا. للدخل والأهداف والفروقات أو الرسوم البيانية استخدم قالب ميزانية أوفى.",
	tool_create_budget_spreadsheet_faq_q5: "ما تنسيق فئة,مبلغ؟",
	tool_create_budget_spreadsheet_faq_a5: "صف واحد في كل سطر: الفئة ثم المبلغ مفصولين بفاصلة أو تاب. مثال: إيجار,1200.",
	tool_create_budget_spreadsheet_faq_q6: "هل هذه نصيحة مالية؟",
	tool_create_budget_spreadsheet_faq_a6: "لا. حساب تخطيط فقط — وليست نصيحة مالية أو ضريبية أو استثمارية.",

	tool_create_budget_spreadsheet_disclaimer: "أرقام تخطيط فقط — ليست نصيحة مالية أو ضريبية أو محاسبية أو استثمارية.",
	tool_create_budget_spreadsheet_references: "ECMA-376 OOXML؛ وثائق SheetJS لكتابة xlsx في المتصفح.",
	tool_create_budget_spreadsheet_ref_a_label: "ECMA-376 OOXML",
	tool_create_budget_spreadsheet_ref_b_label: "وثائق SheetJS",
};

export default ar;
