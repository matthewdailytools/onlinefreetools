/**
 * i18n 工具分片（how-to-calculate-contribution-margin / ar）。
 * 检索向：هامش المساهمة / نسبة الهامش / وحدات التعادل。
 * YMYL：仅教材算术，非经营或投资建议。占位符 {price}{vc}{cm}{ratio}{units}{total}{fixed}{be} 勿改。
 * 示例数字保持拉丁写法以便对照。
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_contribution_margin_title: "حاسبة هامش المساهمة — للوحدة والنسبة ووحدات التعادل",
	tool_contribution_margin_description: "احسب هامش المساهمة ونسبته من سعر الوحدة والتكلفة المتغيرة. مثال: السعر 50 والتكلفة المتغيرة 30 → هامش 20 (40%). أدخل الكمية اختياريًا لمجموع الهامش، والتكاليف الثابتة لوحدات التعادل. للتعليم فقط — ليست نصيحة أعمال أو استثمار.",
	tool_contribution_margin_article: "احسب هامش المساهمة للوحدة ونسبته، ومجموع الهامش عند إدخال الكمية، ووحدات التعادل عند إدخال التكاليف الثابتة.",
	tool_contribution_margin_desc: "هامش الوحدة ونسبته من السعر والتكلفة المتغيرة. اختياريًا المجموع ووحدات التعادل.",

	tool_contribution_margin_safety_banner: "للتعليم فقط. تحسب هذه الصفحة هامش المساهمة بأسلوب الكتاب الدراسي. ليست نصيحة أعمال أو ضرائب أو محاسبة أو استثمار.",
	tool_contribution_margin_hint: "يجب أن يكون السعر أكبر من صفر. التكلفة المتغيرة ≥ 0 ولا تتجاوز السعر. الكمية والتكاليف الثابتة اختيارية.",
	tool_contribution_margin_price_label: "سعر الوحدة",
	tool_contribution_margin_price_ph: "مثال: 50",
	tool_contribution_margin_vc_label: "التكلفة المتغيرة للوحدة",
	tool_contribution_margin_vc_ph: "مثال: 30",
	tool_contribution_margin_units_label: "الكمية (اختياري)",
	tool_contribution_margin_units_ph: "مثال: 100",
	tool_contribution_margin_fixed_label: "التكاليف الثابتة (اختياري)",
	tool_contribution_margin_fixed_ph: "مثال: 10000",
	tool_contribution_margin_calculate: "احسب",
	tool_contribution_margin_sample: "تحميل مثال",
	tool_contribution_margin_clear: "مسح",
	tool_contribution_margin_cmOut_label: "هامش المساهمة (للوحدة)",
	tool_contribution_margin_cmrOut_label: "نسبة هامش المساهمة",
	tool_contribution_margin_totalOut_label: "إجمالي هامش المساهمة",
	tool_contribution_margin_beOut_label: "وحدات التعادل",
	tool_contribution_margin_steps_title: "خطوات الحل",
	tool_contribution_margin_step_cm_tpl: "الهامش = السعر − المتغيرة = {price} − {vc} = {cm}.",
	tool_contribution_margin_step_ratio_tpl: "النسبة = الهامش ÷ السعر × 100 = {cm} ÷ {price} × 100 = {ratio}%.",
	tool_contribution_margin_step_total_tpl: "إجمالي الهامش = هامش الوحدة × الكمية = {cm} × {units} = {total}.",
	tool_contribution_margin_step_be_tpl: "وحدات التعادل = الثابتة ÷ الهامش = {fixed} ÷ {cm} = {be}.",
	tool_contribution_margin_result_note: "يُستخدم هامش المساهمة بعد التكاليف المتغيرة لتغطية الثابتة ثم الربح. لا يُنمذج مزيج منتجات متعددة ولا الضرائب. للتعليم فقط — ليست نصيحة أعمال.",
	tool_contribution_margin_err_generic: "أدخل سعرًا > 0 وتكلفة متغيرة ≥ 0 ولا تتجاوز السعر (مثل 50 و 30). الكمية الاختيارية يجب أن تكون > 0؛ والتكاليف الثابتة الاختيارية ≥ 0.",

	tool_contribution_margin_how_title: "كيف تستخدم حاسبة هامش المساهمة",
	tool_contribution_margin_how_body: "أدخل سعر الوحدة والتكلفة المتغيرة. أضف الكمية اختياريًا لمجموع الهامش والتكاليف الثابتة لوحدات التعادل. يمرّ «تحميل مثال» بين حالة الوحدة فقط، ثم مع الكمية، ثم مع الثابتة، ثم الحالة المشتركة.",
	tool_contribution_margin_how_item_1: "أدخل سعر الوحدة والتكلفة المتغيرة للوحدة.",
	tool_contribution_margin_how_item_2: "اختياري: أدخل الكمية لرؤية إجمالي هامش المساهمة.",
	tool_contribution_margin_how_item_3: "اختياري: أدخل التكاليف الثابتة لرؤية وحدات التعادل (يحتاج هامشًا > 0).",
	tool_contribution_margin_how_item_4: "انقر «احسب» لعرض الهامش والنسبة وخطوات الحل.",

	tool_contribution_margin_why_choose_title: "ماذا تقدّم لك حاسبة هامش المساهمة هذه",
	tool_contribution_margin_why_choose_item_1: "هامش الوحدة ونسبته من السعر والتكلفة المتغيرة.",
	tool_contribution_margin_why_choose_item_2: "إجمالي الهامش عند إدخال الكمية.",
	tool_contribution_margin_why_choose_item_3: "وحدات التعادل عند إدخال التكاليف الثابتة.",
	tool_contribution_margin_why_choose_item_4: "أسطر خطوات تضع أرقامك داخل الصيغ.",
	tool_contribution_margin_why_choose_item_5: "حدود YMYL واضحة: حساب تعليمي فقط — ليست نصيحة أعمال.",

	tool_contribution_margin_formula_title: "صيغ هامش المساهمة",
	tool_contribution_margin_formula_body: "هامش المساهمة ما يتبقى من السعر بعد التكلفة المتغيرة — المبلغ المتاح لتغطية التكاليف الثابتة ثم الربح.",
	tool_contribution_margin_formula_item_1: "الهامش = السعر − المتغيرة. مثال: 50 − 30 = 20.",
	tool_contribution_margin_formula_item_2: "النسبة = الهامش ÷ السعر. مثال: 20 ÷ 50 = 40%.",
	tool_contribution_margin_formula_item_3: "إجمالي الهامش = هامش الوحدة × الكمية.",
	tool_contribution_margin_formula_item_4: "وحدات التعادل = التكاليف الثابتة ÷ هامش الوحدة (عندما يكون الهامش > 0).",
	tool_contribution_margin_formula_item_5: "هامش الربح الإجمالي يعتمد على تكلفة البضاعة المباعة (COGS)؛ هامش المساهمة على المتغيرة فقط — قد يختلفان.",

	tool_contribution_margin_example_title: "أمثلة محلولة",
	tool_contribution_margin_example: "يبدأ «تحميل مثال» بالسعر 50 والمتغيرة 30 → هامش 20 (40%). ثم × 100 وحدة → إجمالي هامش 2,000. ثم تكاليف ثابتة 10,000 → تعادل 500 وحدة. المثال الأخير يجمع الكمية والثابتة معًا.",

	tool_contribution_margin_usecases_title: "متى تستخدم حاسبة هامش المساهمة",
	tool_contribution_margin_usecase_1: "واجب دراسي: هامش الوحدة قبل مسألة نقطة التعادل.",
	tool_contribution_margin_usecase_2: "رؤية أثر تغيير التكلفة المتغيرة على نسبة الهامش.",
	tool_contribution_margin_usecase_3: "تقدير كم وحدة تغطي مبلغًا ثابتًا مذكورًا (للتوضيح فقط).",
	tool_contribution_margin_usecase_4: "المقارنة مع صفحة هامش الربح الإجمالي عندما تختلف COGS عن التكلفة المتغيرة.",

	tool_contribution_margin_faq_q1: "هل أحتاج إلى إدخال الكمية؟",
	tool_contribution_margin_faq_a1: "لا لحساب هامش الوحدة. أدخل الكمية فقط إذا أردت إجمالي الهامش.",
	tool_contribution_margin_faq_q2: "كيف يُحسب هامش المساهمة؟",
	tool_contribution_margin_faq_a2: "الهامش = السعر − التكلفة المتغيرة. مثال: 50 − 30 = 20؛ النسبة = 20 ÷ 50 = 40%.",
	tool_contribution_margin_faq_q3: "ما الفرق بين هامش المساهمة وهامش الربح الإجمالي؟",
	tool_contribution_margin_faq_a3: "هامش المساهمة يستخدم التكلفة المتغيرة. هامش الربح الإجمالي يستخدم COGS وقد تضم بنودًا ليست متغيرة بالكامل.",
	tool_contribution_margin_faq_q4: "كيف تُحسب وحدات التعادل هنا؟",
	tool_contribution_margin_faq_a4: "وحدات التعادل = التكاليف الثابتة ÷ هامش الوحدة عندما يكون الهامش > 0. لواجهة تعادل أشمل استخدم حاسبة التعادل ذات الصلة.",
	tool_contribution_margin_faq_q5: "هل يمكن أن تتجاوز التكلفة المتغيرة السعر؟",
	tool_contribution_margin_faq_a5: "ترفض هذه الصفحة تلك الحالة لهامش الوحدة (هامش سالب). راجع المدخلات.",
	tool_contribution_margin_faq_q6: "هل يُنمذج مزيج منتجات متعددة؟",
	tool_contribution_margin_faq_a6: "لا. احسب كل منتج على حدة أو استخدم جدولة لهامش مرجّح.",
	tool_contribution_margin_faq_q7: "هل هذه نصيحة أعمال؟",
	tool_contribution_margin_faq_a7: "لا. حساب تعليمي فقط — ليست نصيحة مالية أو ضريبية أو محاسبية أو استثمارية.",

	tool_contribution_margin_disclaimer: "هامش مساهمة تعليمي فقط — ليست نصيحة مالية أو ضريبية أو محاسبية أو أعمال أو استثمار.",
	tool_contribution_margin_references: "مقالات Investopedia عن contribution margin و break-even للسياق التعليمي.",
	tool_contribution_margin_ref_a_label: "Investopedia — Contribution margin",
	tool_contribution_margin_ref_b_label: "Investopedia — Break-even analysis",
};

export default ar;
