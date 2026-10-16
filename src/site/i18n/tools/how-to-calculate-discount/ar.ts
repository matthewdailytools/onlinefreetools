/**
 * شريحة i18n للأداة (how-to-calculate-discount / ar).
 * سعر بعد الخصم من نسبة التخفيض، نسبة بين سعرين، أو استرجاع السعر الأصلي؛
 * خصم ثانٍ اختياري متراكب. حساب تعليمي فقط — ليس صندوق متجر ولا ضرائب.
 */
import type { SiteLangDict } from '../../../types';

/** العربية: حاسبة الخصم / السعر بعد التخفيض */
const ar: SiteLangDict = {
	tool_discount_title: "حاسبة الخصم — السعر بعد التخفيض أو نسبة الخصم",
	tool_discount_description:
		"احسب سعر البيع بعد التخفيض من المبلغ الأصلي ونسبة الخصم، أو استرجع السعر الأصلي من إيصال مخفّض، أو قِس نسبة الخصم بين سعرين. مثال: 100 بخصم 20% → 80. خصم ثانٍ اختياري يُطبَّق على السعر المخفّض بالفعل. حساب تسوق تعليمي — ليس صندوق دفع في المتجر.",
	tool_discount_article:
		"سعر بعد نسبة خصم، أو نسبة التخفيض بين سعرين، أو السعر الأصلي من إجمالي مخفّض، مع خصم ثانٍ اختياري متراكب وخطوات واضحة.",
	tool_discount_desc:
		"سعر بعد الخصم أو نسبة التخفيض أو السعر الأصلي. أضِف خصمًا ثانيًا متراكبًا واطّلع على النسبة الفعلية للتوفير.",

	tool_discount_mode_label: "ماذا تريد أن تحسب؟",
	tool_discount_mode_sale: "سعر البيع من نسبة الخصم",
	tool_discount_mode_pct: "نسبة الخصم بين سعرين",
	tool_discount_mode_original: "السعر الأصلي من البيع + نسبة الخصم",
	tool_discount_hint:
		"اختر الوضع الذي يطابق القيمتين اللتين تعرفهما مسبقًا. الخصم الثاني، إن وُجد، يُضرب في السعر المخفّض بالفعل (تراكم)، وليس في الأصلي.",
	tool_discount_original_label: "السعر الأصلي",
	tool_discount_original_ph: "مثال: 100",
	tool_discount_sale_label: "سعر البيع / النهائي",
	tool_discount_sale_ph: "مثال: 80",
	tool_discount_pct_label: "الخصم (% تخفيض)",
	tool_discount_pct_ph: "مثال: 20",
	tool_discount_pct2_label: "خصم ثانٍ % (اختياري)",
	tool_discount_pct2_ph: "مثال: 10",
	tool_discount_chips_label: "اختصارات نسب خصم شائعة",
	tool_discount_chip_10: "خصم 10%",
	tool_discount_chip_15: "خصم 15%",
	tool_discount_chip_20: "خصم 20%",
	tool_discount_chip_25: "خصم 25%",
	tool_discount_chip_50: "خصم 50%",
	tool_discount_calculate: "احسب",
	tool_discount_sample: "تحميل مثال",
	tool_discount_clear: "مسح",
	tool_discount_finalOut_label: "سعر البيع",
	tool_discount_savedOut_label: "المبلغ الموفر",
	tool_discount_pctOut_label: "نسبة الخصم",
	tool_discount_originalOut_label: "السعر الأصلي",
	tool_discount_effectiveOut_label: "نسبة الخصم الفعلية",
	tool_discount_steps_title: "الخطوات",
	tool_discount_step_sale_tpl: "بعد الخصم الأول: {original} × (1 − {pct}/100) = {mid}.",
	tool_discount_step_sale2_tpl: "تراكم الخصم الثاني: {mid} × (1 − {pct2}/100) = {final}.",
	tool_discount_step_saved_tpl: "التوفير = الأصلي − البيع = {original} − {final} = {saved}.",
	tool_discount_step_pct_tpl:
		"نسبة الخصم = (الأصلي − البيع) ÷ الأصلي × 100 = ({original} − {sale}) ÷ {original} × 100 = {pct}%.",
	tool_discount_step_original_tpl:
		"الأصلي = البيع ÷ (1 − النسبة/100) = {sale} ÷ (1 − {pct}/100) = {original}.",
	tool_discount_step_effective_tpl:
		"نسبة الخصم الفعلية = (الأصلي − النهائي) ÷ الأصلي × 100 = ({original} − {final}) ÷ {original} × 100 = {eff}%.",
	tool_discount_result_note:
		"الخصم الثاني، إن وُجد، يُطبَّق على السعر المخفّض بالفعل (تراكم). الضرائب والقسائم بمبلغ ثابت وتقريب المتجر غير مُنمذَجة. تعليمي فقط — ليس صندوق دفع.",
	tool_discount_err_generic:
		"أدخل مبالغًا موجبة تطابق الوضع (مثل أصلي 100 وخصم 20%، أو أصلي 100 وبيع 80). نسب الخصم من 0 إلى 100؛ لاسترجاع الأصلي يجب أن تكون النسبة أقل من 100.",

	tool_discount_how_title: "كيفية استخدام حاسبة الخصم",
	tool_discount_how_body:
		"اختر سعر البيع أو نسبة الخصم أو السعر الأصلي. أدخل القيم المعروفة، ويمكنك الضغط على شريحة نسبة، ثم احسب. «تحميل مثال» يمرّ على 100 بخصم 20% → 80، ثم نسبة من 100→80، ثم عكس 80 بعد 20%، ثم تراكم 20%+10%.",
	tool_discount_how_item_1: "اختر الوضع الذي يطابق الرقمين اللذين تعرفهما مسبقًا.",
	tool_discount_how_item_2: "أدخل السعر الأصلي و/أو سعر البيع ونسبة الخصم (أو اضغط شريحة).",
	tool_discount_how_item_3: "اختياري: أضِف نسبة ثانية متراكبة في وضع سعر البيع.",
	tool_discount_how_item_4: "انقر «احسب» لعرض الناتج والتوفير وخطوات الحساب.",

	tool_discount_why_choose_title: "ماذا تقدّم لك حاسبة الخصم هذه",
	tool_discount_why_choose_item_1:
		"ثلاثة اتجاهات: سعر البيع من نسبة الخصم، نسبة بين سعرين، أو الأصلي من إجمالي مخفّض.",
	tool_discount_why_choose_item_2: "خصم ثانٍ متراكب اختياري مع نسبة خصم فعلية مجمّعة.",
	tool_discount_why_choose_item_3: "خطوات تضع أرقامك داخل الصيغ مباشرة.",
	tool_discount_why_choose_item_4: "شرائح نسب (10 / 15 / 20 / 25 / 50%) كاختصارات إدخال.",
	tool_discount_why_choose_item_5:
		"حدود واضحة: حساب نسبة الخصم فقط — بلا ضريبة ولا قسائم ثابتة ولا تقريب صندوق.",

	tool_discount_formula_title: "صيغ الخصم",
	tool_discount_formula_body:
		"لتكن d = نسبة الخصم ÷ 100. سعر البيع واسترجاع الأصلي يستخدمان العامل (1 − d). الخصومات المتراكبة تضرب العوامل المتتالية.",
	tool_discount_formula_item_1: "سعر البيع = الأصلي × (1 − d). مثال: 100 × 0.80 = 80 عند خصم 20%.",
	tool_discount_formula_item_2: "التوفير = الأصلي − البيع. نفس المثال → توفير 20.",
	tool_discount_formula_item_3:
		"نسبة الخصم = (الأصلي − البيع) ÷ الأصلي × 100. مثال: (100 − 80) ÷ 100 × 100 = 20%.",
	tool_discount_formula_item_4:
		"الأصلي من البيع = البيع ÷ (1 − d). مثال: 80 ÷ 0.80 = 100 عند خصم 20%.",
	tool_discount_formula_item_5:
		"التراكم: النهائي = الأصلي × (1 − d₁) × (1 − d₂). 20% ثم 10% على 100 → 72 (خصم فعلي 28%)، وليس 30%.",

	tool_discount_example_title: "أمثلة محلولة",
	tool_discount_example:
		"يبدأ «تحميل مثال» بأصلي 100 وخصم 20% → بيع 80 وتوفير 20. التالي يقيس نسبة الخصم من 100→80 (=20%). ثم يعكس بيع 80 بعد 20% إلى أصلي 100. المثال الأخير يراكم 20% ثم 10% على 100 → 72 (خصم فعلي 28%).",

	tool_discount_usecases_title: "متى تستخدم حاسبة الخصم",
	tool_discount_usecase_1: "التسوق: حوّل نسبة خصم معلَنة إلى السعر المتوقع قبل الضريبة.",
	tool_discount_usecase_2: "الواجبات: تدرب على خصم نسبة واحدة ومتتالية بخطوات ظاهرة.",
	tool_discount_usecase_3: "مراجعة الإيصال: استرجع سعر القائمة الأصلي من إجمالي مخفّض ونسبة معروفة.",
	tool_discount_usecase_4: "مقارنة عروض متراكبة: تأكد أن 20% ثم 10% ليستا كخصم 30%.",

	tool_discount_faq_q1: "كيف تحسب سعر البيع من نسبة الخصم؟",
	tool_discount_faq_a1:
		"اضرب في (1 − النسبة/100). أصلي 100 بخصم 20% → 100 × 0.80 = 80؛ التوفير = 20.",
	tool_discount_faq_q2: "كيف يُطبَّق الخصم المزدوج؟",
	tool_discount_faq_a2:
		"النسبة الثانية تُضرب في السعر المخفّض بالفعل، لا في الأصلي. 20% ثم 10% على 100 → 72، أي خصم فعلي 28% — وليس 30%.",
	tool_discount_faq_q3: "كيف تجد نسبة الخصم بين سعرين؟",
	tool_discount_faq_a3:
		"نسبة الخصم = (الأصلي − البيع) ÷ الأصلي × 100. من 100 إلى 80 → خصم 20%.",
	tool_discount_faq_q4: "كيف تجد السعر الأصلي بعد الخصم؟",
	tool_discount_faq_a4:
		"اقسم سعر البيع على (1 − النسبة/100). بيع 80 بعد خصم 20% → 80 ÷ 0.80 = 100.",
	tool_discount_faq_q5: "هل خصم 20% يعني أنك تدفع 20%؟",
	tool_discount_faq_a5: "لا. خصم 20% يعني أنك تدفع 80% من الأصلي (اضرب في 0.8).",
	tool_discount_faq_q6: "هل يشمل ذلك ضريبة المبيعات؟",
	tool_discount_faq_a6:
		"لا. أدخل مبالغًا قبل الضريبة. استخدم صفحة ضريبة منفصلة إن احتجت ضريبة القيمة المضافة أو ضريبة المبيعات فوق ذلك.",
	tool_discount_faq_q7: "هل يمكن إدخال قسيمة بمبلغ ثابت؟",
	tool_discount_faq_a7:
		"هذه الصفحة لنسب الخصم فقط. اطرح القسيمة الثابتة بنفسك قبل أو بعد حساب النسبة.",

	tool_discount_disclaimer:
		"توضيح سعري تعليمي فقط — ليس صندوق متجر ولا محرك ضرائب ولا استشارة مالية.",
	tool_discount_references:
		"نظرة Investopedia على الخصم؛ حسابات OpenStax لخصومات التجزئة كسياق تعليمي.",
	tool_discount_ref_a_label: "Investopedia — الخصم (Discount)",
	tool_discount_ref_b_label: "OpenStax — الخصومات والهوامش وضريبة المبيعات",
};

export default ar;
