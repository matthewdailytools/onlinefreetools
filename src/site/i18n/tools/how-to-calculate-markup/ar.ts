/**
 * i18n 工具分片（how-to-calculate-markup / ar）。
 * 加价率：从成本/售价算百分比，或反推售价/成本；并排显示毛利率以便对照。
 */
import type { SiteLangDict } from '../../../types';

/** 阿拉伯语 markup 计算器文案分片（与 en 键一致）。 */
const ar: SiteLangDict = {
	tool_markup_title: "حاسبة نسبة الزيادة — Markup أو سعر البيع أو التكلفة",
	tool_markup_description: "احسب نسبة markup من التكلفة وسعر البيع، أو استنتج السعر أو التكلفة عند معرفة النسبة. مثال: تكلفة 50 وبيع 80 → markup 60٪ (هامش 37.5٪). Markup يقسم على التكلفة؛ الهامش على المبيعات. حساب تجزئة تعليمي — ليس نصيحة أعمال.",
	tool_markup_article: "اعثر على نسبة markup أو سعر البيع أو التكلفة، واطّلع على هامش الربح الإجمالي المطابق حتى لا تخلط بين markup والهامش.",
	tool_markup_desc: "احسب % markup من التكلفة والسعر، أو عكسياً للسعر أو التكلفة. يعرض الهامش للمقارنة.",

	tool_markup_mode_label: "ما الذي تريد إيجاده",
	tool_markup_mode_pct: "نسبة Markup",
	tool_markup_mode_sell: "سعر البيع",
	tool_markup_mode_cost: "التكلفة",
	tool_markup_hint: "اختر المجهول. Markup يستخدم التكلفة في المقام؛ الهامش يستخدم سعر البيع. يقبل الفاصلة العشرية. تعليمي فقط — ليس نصيحة تسعير.",
	tool_markup_cost_label: "التكلفة",
	tool_markup_cost_ph: "مثال 50",
	tool_markup_sell_label: "سعر البيع",
	tool_markup_sell_ph: "مثال 80",
	tool_markup_mk_label: "Markup %",
	tool_markup_mk_ph: "مثال 60",
	tool_markup_calculate: "احسب",
	tool_markup_sample: "تحميل مثال",
	tool_markup_clear: "مسح",
	tool_markup_markupOut_label: "Markup %",
	tool_markup_sellOut_label: "سعر البيع",
	tool_markup_costOut_label: "التكلفة",
	tool_markup_profitOut_label: "قيمة الزيادة",
	tool_markup_marginOut_label: "هامش ربح إجمالي %",
	tool_markup_steps_title: "الخطوات",
	tool_markup_step_pct_tpl: "Markup % = (البيع − التكلفة) ÷ التكلفة × 100 = ({sell} − {cost}) ÷ {cost} × 100 = {dollar} ÷ {cost} × 100 = {pct}%.",
	tool_markup_step_sell_tpl: "سعر البيع = التكلفة × (1 + markup%/100) = {cost} × (1 + {pct}/100) = {sell}.",
	tool_markup_step_cost_tpl: "التكلفة = البيع ÷ (1 + markup%/100) = {sell} ÷ (1 + {pct}/100) = {cost}.",
	tool_markup_step_margin_tpl: "هامش ربح إجمالي % = (البيع − التكلفة) ÷ البيع × 100 = {dollar} ÷ {sell} × 100 = {margin}%.",
	tool_markup_result_note: "Markup يقسم على التكلفة؛ الهامش على سعر البيع. نفس قيمة الزيادة بالعملة، نسب مختلفة. تعليمي فقط — ليس ضريبة أو تسعير أو استثمار.",
	tool_markup_err_generic: "أدخل تكلفة موجبة وسعر بيع أو % markup صالحاً للوضع المختار (مثلاً تكلفة 50 وبيع 80).",

	tool_markup_how_title: "كيفية استخدام حاسبة markup",
	tool_markup_how_body: "اختر إن كنت تحتاج % markup أو سعر البيع أو التكلفة. املأ الحقول الظاهرة ثم احسب. المثال يتناوب: تكلفة/بيع → %، تكلفة/% → بيع، بيع/% → تكلفة.",
	tool_markup_how_item_1: "من «ما الذي تريد إيجاده» اختر نسبة Markup أو سعر البيع أو التكلفة.",
	tool_markup_how_item_2: "أدخل القيم المعروفة (تكلفة وبيع، أو تكلفة و% markup، أو بيع و% markup).",
	tool_markup_how_item_3: "اضغط احسب لرؤية القيمة الناقصة وزيادة العملة وهامش الربح الإجمالي المطابق.",
	tool_markup_how_item_4: "استخدم تحميل مثال: 50/80 → 60٪، 40 بنسبة 25٪ → 50، و120 بنسبة 50٪ → تكلفة 80.",

	tool_markup_why_choose_title: "ماذا تقدم هذه الحاسبة",
	tool_markup_why_choose_item_1: "ثلاثة أوضاع: % markup من التكلفة والسعر، السعر من التكلفة والنسبة، أو التكلفة من السعر والنسبة.",
	tool_markup_why_choose_item_2: "قيمة الزيادة وهامش الربح الإجمالي بجانب markup لتمييز المصطلحين.",
	tool_markup_why_choose_item_3: "خطوات تُدخل أرقامك في (P−C)/C و(P−C)/P.",
	tool_markup_why_choose_item_4: "حقول تُخفى عندما لا تُستخدم في الوضع المختار.",
	tool_markup_why_choose_item_5: "إخلاء مسؤولية تعليمي واضح — ليس أعمالاً أو ضريبة أو استثماراً.",

	tool_markup_formula_title: "صيغ markup",
	tool_markup_formula_body: "Markup يقيس الزيادة بالنسبة للتكلفة. الهامش يقيس نفس الربح بالعملة بالنسبة لسعر البيع.",
	tool_markup_formula_item_1: "Markup % = (سعر البيع − التكلفة) ÷ التكلفة × 100. مثال: (80 − 50) ÷ 50 × 100 = 60%.",
	tool_markup_formula_item_2: "سعر البيع = التكلفة × (1 + markup%/100). مثال: 40 × 1.25 = 50 عند markup 25%.",
	tool_markup_formula_item_3: "التكلفة = سعر البيع ÷ (1 + markup%/100). مثال: 120 ÷ 1.5 = 80 عند markup 50%.",
	tool_markup_formula_item_4: "هامش ربح إجمالي % = (سعر البيع − التكلفة) ÷ سعر البيع × 100. نفس 50/80 → 37.5%.",
	tool_markup_formula_item_5: "markup 100% يعني السعر = 2 × التكلفة (هامش 50%). markup فوق 100% ممكن عندما السعر > 2 × التكلفة.",

	tool_markup_example_title: "أمثلة محلولة",
	tool_markup_example: "المثال يبدأ بتكلفة 50 وبيع 80 → markup 60%، زيادة 30، هامش 37.5%. ثم تكلفة 40 بـ 25% → بيع 50. ثم بيع 120 بـ 50% → تكلفة 80. عينة التعادل (100/100) تعرض 0% markup و0% هامش.",

	tool_markup_usecases_title: "متى تستخدم حاسبة markup",
	tool_markup_usecase_1: "واجب تجزئة: حوّل التكلفة وسعر القائمة إلى % markup مع خطوات ظاهرة.",
	tool_markup_usecase_2: "مراجعة قائمة أسعار: بـ % markup مستهدف، احسب سعر البيع من التكلفة.",
	tool_markup_usecase_3: "تكلفة عكسية: من سعر معروف وسياسة markup، استنتج التكلفة الضمنية.",
	tool_markup_usecase_4: "توضيح لغة مختلطة: لماذا markup 60% ليس هامش 60%.",

	tool_markup_faq_q1: "كيف تحسب نسبة markup؟",
	tool_markup_faq_a1: "اطرح التكلفة من سعر البيع، اقسم على التكلفة، اضرب في 100. مثال: تكلفة 50 وبيع 80 → (80−50)/50 × 100 = 60%.",
	tool_markup_faq_q2: "ما الفرق بين markup والهامش؟",
	tool_markup_faq_a2: "Markup يقسم الربح بالعملة على التكلفة؛ الهامش على سعر البيع. نفس صفقة 50/80 = 60% markup و37.5% هامش.",
	tool_markup_faq_q3: "كيف أجد سعر البيع من التكلفة و% markup؟",
	tool_markup_faq_a3: "البيع = التكلفة × (1 + markup%/100). بتكلفة 40 و markup 25%، البيع = 40 × 1.25 = 50.",
	tool_markup_faq_q4: "هل يمكن أن يتجاوز markup 100%؟",
	tool_markup_faq_a4: "نعم. إذا السعر أكثر من ضعف التكلفة، markup يتجاوز 100%. مثال: تكلفة 50 وبيع 150 → markup 200%.",
	tool_markup_faq_q5: "ماذا إذا بعت دون التكلفة؟",
	tool_markup_faq_a5: "يصبح markup والهامش سالبين. ذلك يعني خسارة على الوحدة قبل تكاليف أخرى.",
	tool_markup_faq_q6: "هل يشمل الضريبة أو الخصومات؟",
	tool_markup_faq_a6: "لا. أدخل أرقام التكلفة والسعر التي تريد مقارنتها بعد أن تطبّق الضريبة أو الخصم بنفسك.",
	tool_markup_faq_q7: "هل هذه نصيحة مالية؟",
	tool_markup_faq_a7: "لا. حساب تجزئة تعليمي فقط — ليس ضريبة أو استراتيجية تسعير أو استثمار.",

	tool_markup_disclaimer: "توضيح markup تعليمي فقط — ليس مالياً أو ضريبياً أو تسعيراً أو استثماراً.",
	tool_markup_references: "Investopedia وصيغ كتب دراسية للسياق التعليمي.",
	tool_markup_ref_a_label: "Investopedia — Markup",
	tool_markup_ref_b_label: "Investopedia — هامش الربح",
};

export default ar;
