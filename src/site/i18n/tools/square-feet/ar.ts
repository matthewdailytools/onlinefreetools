/**
 * i18n tool shard (square-feet / ar).
 * إعادة كتابة عربية مبسطة: تحويل القدم المربع ↔ المتر المربع، وحساب مساحة الغرفة مع خطوات وعامل NIST.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_squarefeet_title: "تحويل القدم المربع إلى المتر المربع — مساحة الغرفة مع خطوات الحساب",
	tool_squarefeet_description:
		"حوّل القدم المربع إلى متر مربع، أو احسب مساحة الغرفة من الطول × العرض. العامل: 1 ft² = 0.09290304 m² (NIST). مثال: 850 قدمًا مربعًا ≈ 78.97 م²؛ غرفة 10×12 قدم = 120 ft² ≈ 11.15 م². العملية تتم في المتصفح دون رفع إلى خادم.",
	tool_squarefeet_calculate: "احسب",
	tool_squarefeet_sample: "تحميل مثال",
	tool_squarefeet_clear: "مسح",
	tool_squarefeet_mode_label: "ماذا لديك؟",
	tool_squarefeet_mode_dims: "طول الغرفة وعرضها",
	tool_squarefeet_mode_area: "أعرف المساحة مسبقًا",
	tool_squarefeet_dim_unit_label: "وحدة الطول",
	tool_squarefeet_unit_ft: "قدم (ft)",
	tool_squarefeet_unit_m: "متر (m)",
	tool_squarefeet_unit_in: "بوصة (in)",
	tool_squarefeet_length_label: "الطول",
	tool_squarefeet_length_placeholder: "مثل 10",
	tool_squarefeet_width_label: "العرض",
	tool_squarefeet_width_placeholder: "مثل 12",
	tool_squarefeet_area_label: "المساحة",
	tool_squarefeet_area_placeholder: "مثل 850",
	tool_squarefeet_area_unit_label: "وحدة المساحة",
	tool_squarefeet_unit_sqft: "قدم مربع (ft²)",
	tool_squarefeet_unit_sqm: "متر مربع (m²)",
	tool_squarefeet_sqft_label: "قدم مربع",
	tool_squarefeet_sqm_label: "متر مربع",
	tool_squarefeet_work_label: "خطوات الحساب",
	tool_squarefeet_result_note:
		"العرض مقرب إلى منزلتين عشريتين. العامل الدقيق: 1 ft² = 0.09290304 m² (NIST / SI). هذه مساحة مستطيل مستوية فقط — وليست تعريف مساحة صافية مقابل إجمالية، وليست تقدير سعر.",
	tool_squarefeet_invalid_input: "أدخل أرقامًا موجبة فقط.",
	tool_squarefeet_how_title: "طريقة الاستخدام",
	tool_squarefeet_how_body:
		"إما اضرب الطول × العرض بعد توحيد وحدة الجانبين بالقدم، أو حوّل مساحة معروفة بالعامل الدقيق. تظهر دائمًا الوحدتان مع سطر الخطوات.",
	tool_squarefeet_how_item_1:
		"اختر «طول الغرفة وعرضها» إن كنت تقيس، أو «أعرف المساحة مسبقًا» إن كان الإعلان يذكر ft² أو m².",
	tool_squarefeet_how_item_2:
		"للأبعاد: اختر قدمًا أو مترًا أو بوصة وأدخل الجانبين بنفس الوحدة. لمساحة معروفة: أدخل الرقم وحدّد إن كان ft² أو m².",
	tool_squarefeet_how_item_3: "انقر «احسب».",
	tool_squarefeet_how_item_4:
		"اقرأ الوحدتين والخطوات، مثل 10 × 12 = 120 ft²، أو 850 ft² × 0.09290304 = 78.97 m².",
	tool_squarefeet_why_choose_title: "لماذا تستخدم تحويل القدم المربع إلى المتر المربع هنا",
	tool_squarefeet_why_choose_item_1:
		"حدود واضحة: لا يعرّف المساحة الصافية مقابل الإجمالية، وليس نموذجًا لأسعار المنازل.",
	tool_squarefeet_why_choose_item_2:
		"وضعان يغطيان البحث الشائع: أبعاد الغرفة، ومساحة إعلان مثل 850 أو 1000 قدم مربع.",
	tool_squarefeet_why_choose_item_3:
		"سطر الخطوات يظهر هل قُسمت البوصات على 12 أو حُوّلت الأمتار بعامل NIST.",
	tool_squarefeet_why_choose_item_4:
		"يستخدم العامل الدقيق 1 ft² = 0.09290304 m² وفق NIST SP 811، لا تقريبًا عشوائيًا مثل 0.09.",
	tool_squarefeet_why_choose_item_5: "كل شيء يبقى في متصفحك؛ لا يُرفع شيء إلى خادم.",
	tool_squarefeet_formula_title: "الصيغ وعامل التحويل",
	tool_squarefeet_formula_body:
		"المساحة بالقدم المربع = الطول × العرض بعد تحويل الجانبين إلى قدم. المتر المربع يأتي من العامل أدناه.",
	tool_squarefeet_formula_item_1: "بالقدم: A_ft² = L × W. مثال: 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_2: "بالمتر: A_ft² = (L × W) ÷ 0.09290304. مثال: 3 m × 4 m = 12 m² ≈ 129.17 ft².",
	tool_squarefeet_formula_item_3: "بالبوصة: اقسم كل جانب ÷ 12 أولًا. مثال: 120 in × 144 in → 10 ft × 12 ft = 120 ft².",
	tool_squarefeet_formula_item_4: "دقيق: 1 ft² = 0.09290304 m²، إذن m² = ft² × 0.09290304 و ft² = m² ÷ 0.09290304.",
	tool_squarefeet_example_title: "مثال",
	tool_squarefeet_example:
		"غرفة نموذجية: 10 ft × 12 ft. الخطوات: 10 × 12 = 120 ft² → 120 × 0.09290304 ≈ 11.15 m². مثال مساحة معروفة: 850 قدمًا مربعًا × 0.09290304 ≈ 78.97 m² — مفيد عند مقارنة إعلان أمريكي بإعلانات محلية بالمتر المربع.",
	tool_squarefeet_usecases_title: "متى يفيدك",
	tool_squarefeet_usecase_1: "مقارنة إعلان أمريكي بالقدم المربع مع إعلانات محلية بالمتر المربع.",
	tool_squarefeet_usecase_2: "تقدير أرضيات أو سجاد لغرفة مستطيلة قبل الطلب (أضف الهدر لاحقًا).",
	tool_squarefeet_usecase_3: "تحويل رقم معروف مثل 1000 قدم مربع عند التسوق أو قراءة مخطط.",
	tool_squarefeet_usecase_4: "فحوصات طلاء أو تجديد تقريبية عندما تختلط الأقدام بالأمتار في الرسومات.",
	tool_squarefeet_faq_q1: "هل يفرّق بين مساحة المعيشة والمساحة الإجمالية؟",
	tool_squarefeet_faq_a1:
		"لا. يحوّل فقط مساحة مستطيل مستوية بين الوحدات. تعريفات الإعلان (صافي/إجمالي) خارج نطاق هذه الأداة.",
	tool_squarefeet_faq_q2: "كم مترًا مربعًا في القدم المربع الواحد؟",
	tool_squarefeet_faq_a2:
		"بالضبط 0.09290304 m² (NIST / SI). إذن 100 قدم مربع ≈ 9.29 m²، و850 ≈ 78.97 m²، و1000 ≈ 92.90 m².",
	tool_squarefeet_faq_q3: "كيف أحسب مساحة الغرفة بالقدم المربع؟",
	tool_squarefeet_faq_a3:
		"قِس الطول والعرض بنفس الوحدة ثم اضرب. بالقدم: 10 × 12 = 120 قدمًا مربعًا. بالبوصة اقسم كل جانب على 12 أولًا.",
	tool_squarefeet_faq_q4: "هل يمكن استخدامه لتقدير أسعار المنازل؟",
	tool_squarefeet_faq_a4:
		"لا. تحويل المساحة ليس تقييمًا عقاريًا ولا نموذج سعر لكل قدم مربع.",
	tool_squarefeet_faq_q5: "كيف أحول القدم المربع إلى متر مربع؟",
	tool_squarefeet_faq_a5:
		"اضرب في 0.09290304. اختر «أعرف المساحة مسبقًا»، أدخل قيمة القدم المربع، وستظهر خطوات الضرب.",
	tool_squarefeet_faq_q6: "ماذا عن الغرف على شكل L؟",
	tool_squarefeet_faq_a6:
		"قسّم الشكل إلى مستطيلات، حوّل كل جزء، ثم اجمع. المضلعات غير المنتظمة غير مُنمذجة هنا.",
	tool_squarefeet_faq_q7: "كم هدر أرضيات أضيف؟",
	tool_squarefeet_faq_a7:
		"الحاسبة تعطي مساحة الأرض فقط. كثير من المركّبين يضيفون نحو 5–10% للقص والأخطاء؛ راجع دليل المنتج.",
	tool_squarefeet_article: "القدم المربع",
	tool_squarefeet_disclaimer:
		"للإعلانات وتخطيط التجديد. ليست أداة تقييم عقاري، وليست تعريف مساحة معيشة مقابل مساحة إجمالية.",
	tool_squarefeet_references: "NIST SP 811 — Guide for the Use of the International System of Units (SI); Wikipedia — Square foot.",
	tool_squarefeet_ref_nist_label: "NIST SP 811 — Guide for the Use of the International System of Units (SI)",
	tool_squarefeet_ref_wiki_label: "Wikipedia — Square foot",
};

export default ar;
