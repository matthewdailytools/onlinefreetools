/**
 * i18n 工具分片（how-to-calculate-ohms-law / ar）。
 * 欧姆定律三模式：求 R / V / I，并显示功率；理想直流教学用途。按阿拉伯语检索习惯独立重写；数字用拉丁数字。
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_ohms_law_title: 'حاسبة قانون أوم — أوجد الجهد أو التيار أو المقاومة مع القدرة',
	tool_ohms_law_description:
		'طبّق قانون أوم لإيجاد الجهد أو التيار أو المقاومة، واطّلع على القدرة P=VI. مثال: V=12، I=2 → R=6 Ω وP=24 W. صيغ تيار مستمر مثالية فقط — حساب تعليمي في المتصفح، وليس تعليمات توصيل أو نصائح سلامة كهربائية.',
	tool_ohms_law_article:
		'اختر ما تريد إيجاده، أدخل القيمتين المعروفتين، واحصل على المجهول مع القدرة وخطوات الحل.',
	tool_ohms_law_desc:
		'قانون أوم V=IR بأوضاع لـ V أو I أو R مع القدرة. تيار مستمر مثالي للتعليم فقط.',

	tool_ohms_law_safety_banner:
		'للتعليم فقط. حساب مثالي لقانون أوم على التيار المستمر — ليست تعليمات توصيل ولا تصنيفات منتجات ولا نصائح سلامة كهربائية.',
	tool_ohms_law_hint:
		'اختر وضع الحل ثم أدخل القيمتين المعروفتين. التيار يجب ألا يكون صفراً عند إيجاد R. المقاومة يجب أن تكون أكبر من صفر عند إيجاد I أو V من R.',
	tool_ohms_law_mode_label: 'أوجد',
	tool_ohms_law_mode_r: 'المقاومة R (من V وI)',
	tool_ohms_law_mode_v: 'الجهد V (من I وR)',
	tool_ohms_law_mode_i: 'التيار I (من V وR)',
	tool_ohms_law_V_label: 'الجهد V (فولت)',
	tool_ohms_law_V_ph: 'مثال: 12',
	tool_ohms_law_I_label: 'التيار I (أمبير)',
	tool_ohms_law_I_ph: 'مثال: 2',
	tool_ohms_law_R_label: 'المقاومة R (أوم)',
	tool_ohms_law_R_ph: 'مثال: 6',
	tool_ohms_law_calculate: 'احسب',
	tool_ohms_law_sample: 'حمّل مثالاً',
	tool_ohms_law_clear: 'امسح',
	tool_ohms_law_primary_label: 'النتيجة',
	tool_ohms_law_rOut_label: 'المقاومة R',
	tool_ohms_law_vOut_label: 'الجهد V',
	tool_ohms_law_iOut_label: 'التيار I',
	tool_ohms_law_pOut_label: 'القدرة P',
	tool_ohms_law_steps_title: 'الخطوات',
	tool_ohms_law_step_r_tpl: 'R = V ÷ I = {v} ÷ {i} = {r} Ω.',
	tool_ohms_law_step_v_tpl: 'V = I × R = {i} × {r} = {v} V.',
	tool_ohms_law_step_i_tpl: 'I = V ÷ R = {v} ÷ {r} = {i} A.',
	tool_ohms_law_step_p_tpl: 'P = V × I = {v} × {i} = {p} W.',
	tool_ohms_law_result_note:
		'صيغة تيار مستمر مثالية فقط. حافظ على اتساق الوحدات (V، A → Ω وW). ممانعة التيار المتردد والأجهزة غير الأومية غير ممثَّلة.',
	tool_ohms_law_err_generic:
		'أدخل قيماً موجبة منتهية في الحقول المعروفة. التيار ≠ 0 عند إيجاد R؛ المقاومة > 0 عند إيجاد V أو I.',

	tool_ohms_law_how_title: 'كيف تستخدم حاسبة قانون أوم',
	tool_ohms_law_how_body:
		'اختر إن كنت تبحث عن R أو V أو I. أدخل الكميتين الأخريين ثم احسب لترى المجهول والقدرة مع الخطوات. «حمّل مثالاً» يمرّ على الأوضاع.',
	tool_ohms_law_how_item_1: 'اختر وضع الحل: R من V وI، أو V من I وR، أو I من V وR.',
	tool_ohms_law_how_item_2: 'أدخل القيمتين المعروفتين بوحدات متسقة.',
	tool_ohms_law_how_item_3: 'اضغط «احسب» لرؤية المجهول والقدرة والخطوات.',
	tool_ohms_law_how_item_4: 'استخدم «حمّل مثالاً» للتنقل بين V=12/I=2 وI=2/R=6 وV=12/R=6.',

	tool_ohms_law_why_choose_title: 'ماذا تقدّم لك هذه الحاسبة لقانون أوم',
	tool_ohms_law_why_choose_item_1: 'ثلاثة أوضاع تغطي إعادة ترتيب V = I·R.',
	tool_ohms_law_why_choose_item_2: 'القدرة P = V·I تظهر بجانب المجهول.',
	tool_ohms_law_why_choose_item_3: 'خطوات تُدخل أرقامك في الصيغ.',
	tool_ohms_law_why_choose_item_4: 'تدوير أمثلة لكل وضع.',
	tool_ohms_law_why_choose_item_5: 'حد تعليمي واضح: تيار مستمر مثالي فقط — ليست نصائح توصيل.',

	tool_ohms_law_formula_title: 'صيغ قانون أوم',
	tool_ohms_law_formula_body:
		'لمقاومة مثالية في ظروف التيار المستمر، يرتبط الجهد والتيار والمقاومة بـ V = I·R. القدرة تأتي من P = V·I.',
	tool_ohms_law_formula_item_1: 'R = V ÷ I عندما لا يكون التيار صفراً.',
	tool_ohms_law_formula_item_2: 'V = I × R.',
	tool_ohms_law_formula_item_3: 'I = V ÷ R عندما تكون المقاومة أكبر من صفر.',
	tool_ohms_law_formula_item_4: 'P = V × I (وكذلك P = I²R أو P = V²/R في الحالة المثالية).',
	tool_ohms_law_formula_item_5: 'هذه الصفحة تستخدم التيار المستمر المثالي فقط — بلا ممانعة AC ولا تصميم سلامة.',

	tool_ohms_law_example_title: 'أمثلة محلولة',
	tool_ohms_law_example:
		'مثال وضع R: V=12، I=2 → R=6 Ω، P=24 W. وضع V يستخدم I=2، R=6 → V=12. وضع I يستخدم V=12، R=6 → I=2.',

	tool_ohms_law_usecases_title: 'متى تستخدم حاسبة قانون أوم',
	tool_ohms_law_usecase_1: 'واجبات إلكترونيات: أعد ترتيب V = I·R للمقدار الناقص.',
	tool_ohms_law_usecase_2: 'تحقق سريع مثالي للتيار المستمر من المقاومة أو القدرة من قراءات العداد.',
	tool_ohms_law_usecase_3: 'قارن صفحات فيزياء ذات صلة (كثافة، سرعة) للتدرّب على اتساق الوحدات.',
	tool_ohms_law_usecase_4: 'انظر القدرة بجانب المتغير المحلول دون أداة قدرة منفصلة.',

	tool_ohms_law_faq_q1: 'ماذا يقول قانون أوم؟',
	tool_ohms_law_faq_a1: 'لمقاومة مثالية على التيار المستمر: V = I·R. تعرض هذه الصفحة أيضاً P = V·I.',
	tool_ohms_law_faq_q2: 'هل يمكنني إيجاد الجهد أو التيار؟',
	tool_ohms_law_faq_a2: 'نعم. استخدم عنصر التحكم «أوجد» لاختيار V أو I أو R.',
	tool_ohms_law_faq_q3: 'هل تُنمذَج دوائر التيار المتردد؟',
	tool_ohms_law_faq_a3: 'لا. صيغ تيار مستمر مثالية فقط — بلا ممانعة ولا طور.',
	tool_ohms_law_faq_q4: 'ماذا لو كان التيار صفراً عند إيجاد R؟',
	tool_ohms_law_faq_a4: 'R = V/I غير معرّف عند I = 0. الصفحة ترفض هذه الحالة.',
	tool_ohms_law_faq_q5: 'هل هذا نصيحة توصيل أو سلامة؟',
	tool_ohms_law_faq_a5: 'لا. حساب تعليمي فقط — ليست تصنيفات منتجات ولا إرشادات سلامة كهربائية.',

	tool_ohms_law_disclaimer:
		'قانون أوم للتعليم فقط — ليست استشارة مهنية ولا تعليمات توصيل ولا نصائح سلامة كهربائية.',
	tool_ohms_law_references: 'مراجع مدرسية قياسية لقانون أوم والقدرة الكهربائية.',
	tool_ohms_law_ref_a_label: 'ويكيبيديا — قانون أوم',
	tool_ohms_law_ref_b_label: 'ويكيبيديا — القدرة الكهربائية',
};

export default ar;
