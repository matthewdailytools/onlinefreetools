/**
 * i18n tool shard (how-to-calculate-acceleration / ar).
 * العربية: حاسبة التسارع المنتظم على خط مستقيم؛ تحل a أو v أو v0 أو t مع خطوات الحل.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_acceleration_title: "حاسبة التسارع — من تغير السرعة خلال الزمن مع خطوات الحل",
	tool_acceleration_description:
		"حساب التسارع المنتظم بالصيغة a = (v − v0) ÷ t، أو إعادة ترتيبها لإيجاد السرعة النهائية أو الابتدائية أو الزمن، مع عرض خطوات الحل. مثال: v0 = 0، v = 10، t = 2 ← a = 5. وحّد وحدات السرعة والزمن (مثل m/s و s ← m/s²).",
	tool_acceleration_calculate: "احسب",
	tool_acceleration_sample: "تحميل مثال",
	tool_acceleration_clear: "مسح",
	tool_acceleration_solve_label: "اطلب",
	tool_acceleration_solve_a: "التسارع (a)",
	tool_acceleration_solve_v: "السرعة النهائية (v)",
	tool_acceleration_solve_v0: "السرعة الابتدائية (v0)",
	tool_acceleration_solve_t: "الزمن (t)",
	tool_acceleration_v0_label: "السرعة الابتدائية v0",
	tool_acceleration_v0_ph: "مثل 0",
	tool_acceleration_v_label: "السرعة النهائية v",
	tool_acceleration_v_ph: "مثل 10",
	tool_acceleration_t_label: "الزمن t",
	tool_acceleration_t_ph: "مثل 2",
	tool_acceleration_a_label: "التسارع a",
	tool_acceleration_a_ph: "مثل 5",
	tool_acceleration_accOut_label: "التسارع",
	tool_acceleration_vOut_label: "السرعة النهائية",
	tool_acceleration_v0Out_label: "السرعة الابتدائية",
	tool_acceleration_tOut_label: "الزمن",
	tool_acceleration_work_label: "خطوات الحل",
	tool_acceleration_result_note:
		"يفترض تسارعًا ثابتًا على خط مستقيم. استخدم وحدات متوافقة للسرعة والزمن. القيمة السالبة لـ a تعني تباطؤًا إذا اتجهت الإشارات بنفس الاتجاه الموجب.",
	tool_acceleration_err_finite: "أدخل عددًا محدودًا في كل حقل ظاهر.",
	tool_acceleration_err_time: "يجب أن يكون الزمن أكبر من 0.",
	tool_acceleration_err_zero_a: "لا يمكن أن يكون التسارع 0 عند حل الزمن (قسمة على صفر).",
	tool_acceleration_how_title: "طريقة الاستخدام",
	tool_acceleration_how_body:
		"للتسارع المنتظم: a = (v − v0) ÷ t. اختر الكمية المطلوبة، أدخل الباقي، وتعيد الحاسبة ترتيب الصيغة نفسها.",
	tool_acceleration_how_item_1: "اختر ما تطلبه: التسارع أو السرعة النهائية أو الابتدائية أو الزمن.",
	tool_acceleration_how_item_2: "املأ كل الحقول الظاهرة بنظام وحدات واحد (النظام الدولي أبسط).",
	tool_acceleration_how_item_3: "انقر احسب.",
	tool_acceleration_how_item_4: "اقرأ الناتج وخطوات الحل، مثل a = (10 − 0) ÷ 2 = 5.",
	tool_acceleration_why_choose_title: "لماذا تستخدم حاسبة التسارع هذه",
	tool_acceleration_why_choose_item_1:
		"حدود النموذج واضحة: تسارع ثابت على خط مستقيم — لا تسارع متغير ولا حركة دائرية.",
	tool_acceleration_why_choose_item_2:
		"صيغة واحدة وأربعة مجاهيل: ابدأ بما تعطيه المسألة فعلًا، لا من خانة a فارغة فقط.",
	tool_acceleration_why_choose_item_3:
		"تظهر خطوات الحل لتنسخ (v − v0) ÷ t أو v = v0 + a t إلى دفترك.",
	tool_acceleration_why_choose_item_4:
		"تُسمّى الحالات المستحيلة: t ≤ 0، أو a = 0 عند طلب الزمن.",
	tool_acceleration_why_choose_item_5: "يعمل في متصفحك؛ لا يُرفع شيء إلى خادم.",
	tool_acceleration_formula_title: "الصيغة وإعادة ترتيبها",
	tool_acceleration_formula_body:
		"تعريف التسارع المنتظم: a = (v − v0) ÷ t. نفس العلاقة تُعاد ترتيبها دون تغيير الفيزياء.",
	tool_acceleration_formula_item_1: "a = (v − v0) ÷ t. مثال: (10 − 0) ÷ 2 = 5.",
	tool_acceleration_formula_item_2: "v = v0 + a t. مثال: 0 + 5 × 2 = 10.",
	tool_acceleration_formula_item_3: "v0 = v − a t. مثال: 10 − 5 × 2 = 0.",
	tool_acceleration_formula_item_4: "t = (v − v0) ÷ a (a ≠ 0). مثال: (10 − 0) ÷ 5 = 2.",
	tool_acceleration_example_title: "مثال",
	tool_acceleration_example:
		"مثال: من السكون إلى 10 خلال وحدتي زمن. لحل a: a = (10 − 0) ÷ 2 = 5. بدّل إلى السرعة النهائية بـ v0 = 0 و a = 5 و t = 2 فتحصل على v = 10 — نفس الحركة مقروءة بالمجهول الآخر.",
	tool_acceleration_usecases_title: "متى تستخدمها",
	tool_acceleration_usecase_1: "واجبات الفيزياء عن التسارع المنتظم على خط مستقيم.",
	tool_acceleration_usecase_2: "التحقق مما إذا كانت سيارة تذهب 0 → 20 m/s في 4 s بمتوسط تسارع 5 m/s² فعلًا.",
	tool_acceleration_usecase_3: "معرفة كم يستغرق تباطؤ منتظم حتى التوقف.",
	tool_acceleration_usecase_4: "مقارنة إجابة الكتاب مع خطوات الحل سطرًا بسطر.",
	tool_acceleration_faq_q1: "ما الوحدات المناسبة؟",
	tool_acceleration_faq_a1:
		"أي مجموعة متسقة. بالمتر والثانية تحصل على m/s². خلط km/h مع الثواني دون تحويل يعطي نتيجة خاطئة.",
	tool_acceleration_faq_q2: "كيف أحسب التسارع؟",
	tool_acceleration_faq_a2:
		"اطرح السرعة الابتدائية من النهائية ثم اقسم على الزمن: a = (v − v0) ÷ t. من 0 إلى 10 خلال ثانيتين، a = 5.",
	tool_acceleration_faq_q3: "هل يصلح للحركة الدائرية؟",
	tool_acceleration_faq_a3:
		"لا. هذه الصفحة للتسارع المنتظم على خط مستقيم. التسارع المركزي يحتاج السرعة ونصف القطر — صيغة مختلفة.",
	tool_acceleration_faq_q4: "ماذا يعني التسارع السالب؟",
	tool_acceleration_faq_a4:
		"ذلك تباطؤ (أو تسارع باتجاه معاكس لاتجاهك الموجب). إذا v0 = 20 و v = 10 خلال 2 s، فإن a = (10 − 20) ÷ 2 = −5.",
	tool_acceleration_faq_q5: "هل تسارع السقوط الحر 9.8 m/s²؟",
	tool_acceleration_faq_a5:
		"قرب سطح الأرض يُستخدم غالبًا g ≈ 9.8 m/s² كنموذج تسارع ثابت مع إهمال مقاومة الهواء. أدخل a = −9.8 (إن كان الأعلى موجبًا) عند حل السرعة أو الزمن في السقوط الحر.",
	tool_acceleration_faq_q6: "لماذا يُرفض الزمن عندما a = 0؟",
	tool_acceleration_faq_a6:
		"إذا a = 0 لا تتغير السرعة، فـ t = (v − v0) ÷ a غير معرّف. إما أن تتطابق السرعتان مسبقًا، أو أن التسارع ليس صفرًا.",
	tool_acceleration_faq_q7: "ما الفرق عن متوسط السرعة؟",
	tool_acceleration_faq_a7:
		"متوسط السرعة = المسافة ÷ الزمن. التسارع هو سرعة تغيّر السرعة نفسها. استخدم أداة السرعة عندما تحتاج السرعة من المسافة والزمن فقط.",
	tool_acceleration_article: "التسارع",
	tool_acceleration_disclaimer:
		"للتعلّم ومراجعة الواجبات. يفترض تسارعًا ثابتًا على خط مستقيم؛ قد يختلف الواقع.",
	tool_acceleration_references: "Wikipedia — Acceleration؛ The Physics Hypertextbook — Equations of Motion.",
	tool_acceleration_ref_a_label: "Wikipedia — Acceleration",
	tool_acceleration_ref_b_label: "The Physics Hypertextbook — Equations of Motion",
};

export default ar;
