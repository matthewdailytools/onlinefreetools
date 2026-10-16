/**
 * شريحة i18n للأداة (how-to-calculate-cagr / ar).
 * إعادة كتابة عربية مستقلة: ثلاث وضعيات CAGR / قيمة نهائية / سنوات،
 * خطوات وتحقق عكسي وتنويه YMYL — ليس نصيحة استثمارية.
 */
import type { SiteLangDict } from '../../../types';

/** العربية: حاسبة CAGR بين قيمتين */
const ar: SiteLangDict = {
	tool_cagr_title: "حاسبة CAGR — نمو سنوي مركب بين قيمتين",
	tool_cagr_description:
		"احسب معدل النمو السنوي المركب (CAGR) من قيمة ابتدائية ونهائية، أو اعكس الاتجاه لإيجاد القيمة النهائية أو عدد السنوات. مثال: 10000 → 16105.10 خلال 5 سنوات ≈ نمو سنوي مركب نحو 10%. توضيح تعليمي فقط — ليس نصيحة استثمارية.",
	tool_cagr_article:
		"احسب نسبة CAGR أو القيمة النهائية أو السنوات بهويات ((EV/BV)^(1/n)−1) القياسية، مع أسطر خطوات وتحقق عكسي من البداية إلى النهاية.",
	tool_cagr_desc: "نسبة CAGR أو قيمة نهائية أو سنوات من قيمة ابتدائية. تعليمي فقط.",

	tool_cagr_safety_banner:
		"تعليمي فقط. هذه الصفحة تنفّذ حساب CAGR من الكتاب المدرسي. ليست نصيحة استثمارية أو ضريبية أو مالية، والنمو السابق أو الافتراضي لا يضمن نتائج مستقبلية.",
	tool_cagr_mode_label: "ماذا تريد أن تجد؟",
	tool_cagr_mode_rate: "نسبة CAGR من البداية / النهاية / السنوات",
	tool_cagr_mode_end: "القيمة النهائية من البداية / CAGR / السنوات",
	tool_cagr_mode_years: "عدد السنوات من البداية / النهاية / CAGR",
	tool_cagr_hint:
		"كل الحقول النشطة يجب أن تكون أكبر من صفر. يتجاهل CAGR التدفقات النقدية وسط الفترة ويعتبر المركّبة مرة واحدة في السنة.",
	tool_cagr_begin_label: "القيمة الابتدائية",
	tool_cagr_begin_ph: "مثال: 10000",
	tool_cagr_end_label: "القيمة النهائية",
	tool_cagr_end_ph: "مثال: 16105.10",
	tool_cagr_rate_label: "نسبة CAGR %",
	tool_cagr_rate_ph: "مثال: 10",
	tool_cagr_years_label: "عدد السنوات",
	tool_cagr_years_ph: "مثال: 5",
	tool_cagr_calculate: "احسب",
	tool_cagr_sample: "تحميل مثال",
	tool_cagr_clear: "مسح",
	tool_cagr_result_label: "CAGR",
	tool_cagr_endOut_label: "القيمة النهائية",
	tool_cagr_yearsOut_label: "السنوات",
	tool_cagr_multOut_label: "مضاعف النمو الإجمالي",
	tool_cagr_steps_title: "الخطوات",
	tool_cagr_step_rate_tpl: "CAGR = (({end} ÷ {begin})^(1 ÷ {years}) − 1) × 100 ≈ {rate}%.",
	tool_cagr_step_end_tpl: "النهائية = {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_step_years_tpl: "السنوات = ln({end} ÷ {begin}) ÷ ln(1 + {rate}/100) ≈ {years}.",
	tool_cagr_step_check_tpl: "تحقق: {begin} × (1 + {rate}/100)^{years} ≈ {end}.",
	tool_cagr_result_note:
		"يفترض مركّبة سنوية ولا تدفقات وسط الفترة. توضيح تعليمي فقط — ليس نصيحة استثمارية.",
	tool_cagr_err_generic:
		"أدخل أرقامًا موجبة للحقول النشطة (مثل بداية 10000، نهاية 16105.1، سنوات 5).",

	tool_cagr_how_title: "كيف تستخدم حاسبة CAGR",
	tool_cagr_how_body:
		"اختر نسبة CAGR أو القيمة النهائية أو السنوات. أدخل القيم المعروفة ثم اضغط احسب. «تحميل مثال» يدور بين 10000→16105.1 على 5 سنوات (10%)، وعكس القيمة النهائية، وسنوات من CAGR 10%، وحالة أقصر 5000→8000 على 3 سنوات.",
	tool_cagr_how_item_1: "حدد ما تريد إيجاده.",
	tool_cagr_how_item_2: "أدخل القيم الموجبة المعروفة لذلك الوضع.",
	tool_cagr_how_item_3: "اضغط احسب لترى الجواب ومضاعف النمو والخطوات.",
	tool_cagr_how_item_4: "استخدم تحميل مثال للتنقل بين نقاط التحقق الدراسية.",

	tool_cagr_why_choose_title: "ما الذي تقدّمه حاسبة CAGR هذه",
	tool_cagr_why_choose_item_1: "ثلاثة اتجاهات: نسبة CAGR، أو القيمة النهائية، أو السنوات.",
	tool_cagr_why_choose_item_2: "مضاعف نمو (النهاية ÷ البداية) بجانب الجواب الرئيسي.",
	tool_cagr_why_choose_item_3: "أسطر خطوات تضع أرقامك داخل هويات CAGR.",
	tool_cagr_why_choose_item_4: "تحقق عكسي يضرب البداية × (1+r)^n ليعود إلى النهاية.",
	tool_cagr_why_choose_item_5: "حدود YMYL واضحة: حساب تعليمي فقط — ليس نصيحة استثمارية.",

	tool_cagr_formula_title: "صيغ CAGR",
	tool_cagr_formula_body:
		"CAGR هو المعدل السنوي الثابت الذي ينقل قيمة ابتدائية إلى قيمة نهائية خلال n سنة بمركّبة مرة واحدة سنويًا.",
	tool_cagr_formula_item_1:
		"CAGR = ((EV ÷ BV)^(1 ÷ n) − 1) × 100. مثال: ((16105.1/10000)^(1/5)−1)×100 ≈ 10%.",
	tool_cagr_formula_item_2: "EV = BV × (1 + CAGR/100)^n.",
	tool_cagr_formula_item_3: "n = ln(EV ÷ BV) ÷ ln(1 + CAGR/100).",
	tool_cagr_formula_item_4:
		"يتطلب BV > 0 و EV > 0 و n > 0 (و CAGR ≠ −100% عند حل السنوات).",
	tool_cagr_formula_item_5: "يتجاهل الرسوم والضرائب والتدفقات وسط الفترة — بخلاف IRR الكامل.",

	tool_cagr_example_title: "أمثلة محلولة",
	tool_cagr_example:
		"يبدأ تحميل المثال بـ 10000 → 16105.10 خلال 5 سنوات → CAGR ≈ 10%. ثم ينمّي 10000 بمعدل 10% لخمس سنوات ليعود ≈16105. ثم يحل السنوات من نفس الطرفين عند 10%. آخر مثال: 5000 → 8000 خلال 3 سنوات.",

	tool_cagr_usecases_title: "متى تستخدم حاسبة CAGR",
	tool_cagr_usecase_1: "واجبات: حوّل نموًا متعدد السنوات إلى معدل سنوي بالصيغة القياسية.",
	tool_cagr_usecase_2: "قارن نهايتي إيرادات أو محفظة على أساس سنوي (للتوضيح فقط).",
	tool_cagr_usecase_3: "احسب عكسيًا كم سنة يلزم لـ CAGR معيّن ليصل إلى هدف.",
	tool_cagr_usecase_4: "قارن مع عائد الاستثمار البسيط في صفحة ROI عندما تهم السنوات.",

	tool_cagr_faq_q1: "هل يمكن إيجاد القيمة النهائية أو عدد السنوات؟",
	tool_cagr_faq_a1:
		"نعم. بدّل الوضع لتنمية قيمة ابتدائية للأمام، أو لحل السنوات من البداية/النهاية/CAGR.",
	tool_cagr_faq_q2: "ما صيغة CAGR المستخدمة هنا؟",
	tool_cagr_faq_a2:
		"CAGR = ((النهاية ÷ البداية)^(1 ÷ السنوات) − 1) × 100. يجب أن تكون الثلاثة أكبر من صفر.",
	tool_cagr_faq_q3: "كيف يختلف CAGR عن عائد الاستثمار البسيط؟",
	tool_cagr_faq_a3:
		"العائد البسيط يتجاهل عدد السنوات التي استغرقها التغيير. CAGR يحوّل النمو إلى معدل سنوي حسب السنوات التي تدخلها.",
	tool_cagr_faq_q4: "ماذا لو كانت البداية أو النهاية صفرًا أو سالبة؟",
	tool_cagr_faq_a4:
		"يجب أن تكون القيمتان أكبر من صفر. الصفر أو السالب يجعلان صيغة CAGR القياسية غير معرّفة هنا.",
	tool_cagr_faq_q5: "هل يشمل CAGR الإيداعات أو السحوبات؟",
	tool_cagr_faq_a5:
		"لا. يستخدم البداية والنهاية والسنوات فقط. للتدفقات غير المنتظمة استخدم أداة IRR.",
	tool_cagr_faq_q6: "هل هذا نصيحة استثمارية؟",
	tool_cagr_faq_a6:
		"لا. الأرقام توضيحات تعليمية فقط — ليست نصيحة استثمارية أو ضريبية أو مالية.",
	tool_cagr_faq_q7: "هل تُفترض المركّبة سنوية؟",
	tool_cagr_faq_a7: "نعم في هذه الصفحة. يُتجاهل التوقيت داخل السنة.",

	tool_cagr_disclaimer:
		"نتائج CAGR توضيحات تعليمية فقط وليست نصيحة استثمارية أو ضريبية أو مالية. العوائد السابقة أو الافتراضية لا تضمن نتائج مستقبلية. المحافظ الحقيقية تواجه رسومًا وضرائب وتدفقات نقدية ومخاطر لا نمذجها هذه الصفحة.",
	tool_cagr_references:
		"تعريف وصيغ CAGR في Investopedia؛ معدل النمو السنوي القياسي ((EV/BV)^(1/n) − 1).",
	tool_cagr_ref_cagr_label: "Investopedia — Compound Annual Growth Rate (CAGR)",
	tool_cagr_ref_formula_label: "Investopedia — صيغة حساب CAGR",
};

export default ar;
