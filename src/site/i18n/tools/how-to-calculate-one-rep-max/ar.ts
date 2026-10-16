/**
 * i18n tool shard (how-to-calculate-one-rep-max / ar).
 * 1RM 估算：Epley / Brzycki / Lombardi 公式对比与 %1RM 训练负荷表。
 */
import type { SiteLangDict } from '../../../types';

/** 阿拉伯语工具文案分片（一次最大重量 / 1RM）。 */
const ar: SiteLangDict = {
	tool_one_rep_max_title: "حاسبة التكرار الأقصى — تقدير 1RM من الوزن وعدد التكرارات",
	tool_one_rep_max_description: "قدّر أقصى تكرار واحد (1RM) من مجموعة دون الحد الأقصى بصيغة Epley ‏1RM ≈ w×(1+التكرارات/30)، وقارِن Brzycki و Lombardi. مثال: 100 لـ 5 تكرارات → نحو 116.7. يتضمن جدول أحمال ‎%1RM. تقدير تعليمي فقط — ليس تدريباً ولا نصيحة طبية.",
	tool_one_rep_max_article: "قدّر 1RM من الوزن والتكرارات بـ Epley، وقارِن Brzycki و Lombardi، واقرأ نسب التدريب من 1RM حسب Epley.",
	tool_one_rep_max_desc: "قدّر 1RM من مجموعة دون الحد الأقصى بـ Epley و Brzycki و Lombardi، مع جدول أحمال ‎%1RM.",

	tool_one_rep_max_safety_banner: "تقدير تعليمي فقط. لا تحاول رفعاً أقصى حقيقياً اعتماداً على هذا الرقم دون إحماء مناسب ومساعدين ومدرب. ليس نصيحة طبية أو تدريبية.",
	tool_one_rep_max_weight_label: "الوزن المرفوع",
	tool_one_rep_max_weight_ph: "مثال 100",
	tool_one_rep_max_reps_label: "التكرارات المنجزة",
	tool_one_rep_max_reps_ph: "مثال 5",
	tool_one_rep_max_hint: "استخدم وزناً أنهيت به عدة تكرارات نظيفة بشكل جيد. أعداد صحيحة من 1 إلى 12 تناسب هذه الصيغ. يمكن استخدام فاصلة عشرية للوزن.",
	tool_one_rep_max_calculate: "احسب",
	tool_one_rep_max_sample: "تحميل مثال",
	tool_one_rep_max_clear: "مسح",
	tool_one_rep_max_ormOut_label: "1RM المقدّر (Epley)",
	tool_one_rep_max_pct_title: "أحمال التدريب من 1RM حسب Epley",
	tool_one_rep_max_pct_col_pct: "‎% من 1RM",
	tool_one_rep_max_pct_col_load: "الحمل",
	tool_one_rep_max_steps_title: "الخطوات",
	tool_one_rep_max_row_epley: "Epley",
	tool_one_rep_max_row_brzycki: "Brzycki",
	tool_one_rep_max_row_lombardi: "Lombardi",
	tool_one_rep_max_row_spread_tpl: "فرق الصيغ: {lo} – {hi}",
	tool_one_rep_max_step_epley_tpl: "Epley: 1RM ≈ w × (1 + r/30) = {w} × (1 + {r}/30) = {orm}.",
	tool_one_rep_max_step_brzycki_tpl: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r) = {w} × 36 ÷ (37 − {r}) = {orm}.",
	tool_one_rep_max_step_lombardi_tpl: "Lombardi: 1RM ≈ w × r^0.1 = {w} × {r}^0.1 = {orm}.",
	tool_one_rep_max_step_pct_tpl: "عند 80‎% من 1RM حسب Epley ({orm}): الحمل ≈ 0.8 × {orm} = {p80}.",
	tool_one_rep_max_result_note: "تتباعد الصيغ أكثر مع ارتفاع التكرارات. فضّل مجموعات ≤10 للتقدير التعليمي. أحمِ نفسك؛ لا تجرب أقصى حقيقي من رقم حاسبة وحده.",
	tool_one_rep_max_err_generic: "أدخل وزناً موجباً وعدد تكرارات صحيحاً من 1 إلى 12 (مثلاً 100 و 5).",
	tool_one_rep_max_err_high_reps: "هذه الصيغ غير موثوقة فوق نحو 12 تكراراً. استخدم مجموعة أثقل بتكرارات أقل ونظيفة.",

	tool_one_rep_max_how_title: "كيف تقدّر أقصى تكرار واحد",
	tool_one_rep_max_how_body: "أدخل الوزن الذي رفعته وعدد التكرارات النظيفة، ثم اضغط احسب. ستحصل على 1RM حسب Epley ومقارنة Brzycki و Lombardi وجدول نسب تدريب شائعة.",
	tool_one_rep_max_how_item_1: "أدخل وزن البار أو الدمبل لمجموعة أنهيتها بشكل جيد.",
	tool_one_rep_max_how_item_2: "أدخل عدد التكرارات الناجحة (أعداد صحيحة 1–12 أفضل).",
	tool_one_rep_max_how_item_3: "اضغط احسب لرؤية 1RM حسب Epley مع Brzycki و Lombardi جنباً إلى جنب.",
	tool_one_rep_max_how_item_4: "اقرأ جدول ‎%1RM (50‎%–95‎%) لأوزان عمل تقريبية، واستخدم تحميل مثال للتبديل بين 100×5 و 60×8 و 80×3 وتكرار واحد حقيقي.",

	tool_one_rep_max_why_choose_title: "لماذا تستخدم حاسبة 1RM هذه",
	tool_one_rep_max_why_choose_item_1: "1RM حسب Epley كتقدير أساسي، مع عرض Brzycki و Lombardi للمقارنة.",
	tool_one_rep_max_why_choose_item_2: "سطر فرق الصيغ لترى مدى تباعد التقديرات الثلاثة.",
	tool_one_rep_max_why_choose_item_3: "جدول أحمال تدريب من 50‎% إلى 95‎% من 1RM حسب Epley.",
	tool_one_rep_max_why_choose_item_4: "خطوات واضحة تُدخل وزنك وتكراراتك في كل صيغة.",
	tool_one_rep_max_why_choose_item_5: "شريط أمان: تعليمي فقط — ليس توصية بمحاولة رفع أقصى.",

	tool_one_rep_max_formula_title: "صيغ أقصى تكرار واحد",
	tool_one_rep_max_formula_body: "أقصى تكرار واحد (1RM) هو أثقل حمل يمكنك رفعه مرة واحدة بشكل جيد. هذه المعادلات تقدّره من مجموعة دون الحد الأقصى.",
	tool_one_rep_max_formula_item_1: "Epley: 1RM ≈ w × (1 + r/30). مثال: w = 100، r = 5 → 100 × (1 + 5/30) = 116.67.",
	tool_one_rep_max_formula_item_2: "Brzycki: 1RM ≈ w × 36 ÷ (37 − r). نفس المثال → 100 × 36 ÷ 32 = 112.5. غير معرّف لـ r ≥ 37.",
	tool_one_rep_max_formula_item_3: "Lombardi: 1RM ≈ w × r^0.1. نفس المثال → 100 × 5^0.1 ≈ 117.46.",
	tool_one_rep_max_formula_item_4: "تتباعد التقديرات مع زيادة التكرارات؛ استخدم تكرارات أقل ونظيفة لتقدير تعليمي أدق.",
	tool_one_rep_max_formula_item_5: "نسب التدريب (مثل 80‎% من 1RM) للتخطيط فقط — عدّل حسب الإجهاد والتمرين والخبرة.",

	tool_one_rep_max_example_title: "أمثلة محسوبة",
	tool_one_rep_max_example: "يبدأ تحميل المثال عند 100 لـ 5 تكرارات: Epley ≈ 116.7، Brzycki 112.5، Lombardi ≈ 117.5. ثم 60 × 8، ثم 80 × 3، ثم تكرار واحد حقيقي (135 × 1) حيث تعيد كل الصيغ 135. حافظ على الشكل؛ توقف مبكراً إذا اختل التقنية.",

	tool_one_rep_max_usecases_title: "متى تستخدم حاسبة 1RM",
	tool_one_rep_max_usecase_1: "واجبات أو صف: أدخل الوزن والتكرارات في Epley وأظهر الخطوات.",
	tool_one_rep_max_usecase_2: "مسودة برنامج تقريبية: حوّل 1RM المقدّر إلى مجموعات عمل 70‎%–85‎%.",
	tool_one_rep_max_usecase_3: "مقارنة الصيغ: انظر كيف يختلف Epley و Brzycki و Lombardi على نفس المجموعة.",
	tool_one_rep_max_usecase_4: "تجنّب محاولة أقصى حقيقي عندما يكون لديك فقط مجموعة دون الحد الأقصى مسجّلة.",

	tool_one_rep_max_faq_q1: "كيف تحسب 1RM بصيغة Epley؟",
	tool_one_rep_max_faq_a1: "اضرب الوزن في (1 + التكرارات/30). مع 100 لـ 5 تكرارات: 100 × (1 + 5/30) = 116.67. هذه الصفحة تعرض أيضاً Brzycki و Lombardi للمقارنة.",
	tool_one_rep_max_faq_q2: "ما الفرق بين Epley و Brzycki؟",
	tool_one_rep_max_faq_a2: "Epley يضيف خطياً التكرارات/30. Brzycki يستخدم 36/(37−التكرارات). لنفس 100×5، Epley ≈116.7 و Brzycki 112.5. لا يغنيان عن اختبار أقصى بإشراف.",
	tool_one_rep_max_faq_q3: "كم تكراراً أستخدم لتقدير جيد؟",
	tool_one_rep_max_faq_a3: "عادة 1–10 تكرارات نظيفة. فوق نحو 12 تصبح الصيغ غير موثوقة، وتطلب هذه الصفحة مجموعة أثقل بتكرارات أقل.",
	tool_one_rep_max_faq_q4: "ماذا يعني 80‎% من 1RM؟",
	tool_one_rep_max_faq_a4: "شدة عمل شائعة: الحمل ≈ 0.8 × 1RM المقدّر. لـ 1RM حسب Epley 116.7، 80‎% نحو 93.3 بنفس الوحدات.",
	tool_one_rep_max_faq_q5: "هل من الآمن محاولة 1RM المحسوب؟",
	tool_one_rep_max_faq_a5: "ليس من هذه الصفحة وحدها. اعتبر الرقم تعليمياً. المحاولة الحقيقية تحتاج إحماء ومساعدة وتقنية جيدة ويفضل مدرباً — هذا ليس نصيحة للرفع الأقصى.",
	tool_one_rep_max_faq_q6: "هل الوحدات مهمة (كغ مقابل lb)؟",
	tool_one_rep_max_faq_a6: "استخدم أي وحدة متسقة. الصيغ نسب بلا وحدة؛ 1RM يخرج بنفس وحدة الوزن المدخل.",
	tool_one_rep_max_faq_q7: "هل هذا نصيحة طبية أو تدريبية؟",
	tool_one_rep_max_faq_a7: "لا. حاسبة تعليمية لفهم معادلات 1RM الشائعة. لقرارات التدريب أو الصحة، استشر مدرباً أو مختصاً مؤهلاً.",

	tool_one_rep_max_disclaimer: "تقدير 1RM تعليمي فقط — ليس تدريباً ولا طباً ولا نصيحة مهنية. لا تحاول رفعاً أقصى اعتماداً على هذه الحاسبة وحدها.",
	tool_one_rep_max_references: "وصف شائع في الكتب المدرسية وويكيبيديا لمعادلات التنبؤ بـ 1RM.",
	tool_one_rep_max_ref_a_label: "ويكيبيديا — أقصى تكرار واحد",
	tool_one_rep_max_ref_b_label: "ويكيبيديا — تدريب القوة",
};

export default ar;
