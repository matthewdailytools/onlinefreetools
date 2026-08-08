/**
 * i18n tool shard (how-to-calculate-gross-margin / ar).
 * العربية: هامش الربح الإجمالي — إعادة كتابة مستقلة عن القالب الإنجليزي.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_gross_margin_title: 'حاسبة هامش الربح الإجمالي — الربح والنسبة',
	tool_gross_margin_description:
		'احسب إجمالي الربح وهامش الربح الإجمالي (%) من الإيرادات وتكلفة البضاعة المباعة (COGS). مثال: إيرادات 10000 وتكلفة 6000 → ربح 4000 وهامش 40%. يعمل في المتصفح؛ للتعليم فقط — وليس نصيحة تجارية أو استثمارية.',
	tool_gross_margin_article:
		'يُظهر هامش الربح الإجمالي ما يتبقى من الإيرادات بعد تكلفة البضاعة. تجمع هذه الصفحة الربح والنسبة في عنوان تعليمي واحد؛ هوامش صافية أو تشغيلية في أدوات أخرى.',
	tool_gross_margin_calculate: 'احسب',
	tool_gross_margin_sample: 'تحميل مثال',
	tool_gross_margin_clear: 'مسح',
	tool_gross_margin_revenue_label: 'الإيرادات (المبيعات)',
	tool_gross_margin_revenue_ph: 'مثل 10000',
	tool_gross_margin_cogs_label: 'تكلفة البضاعة المباعة (COGS)',
	tool_gross_margin_cogs_ph: 'مثل 6000',
	tool_gross_margin_result_profit: 'إجمالي الربح',
	tool_gross_margin_result_margin: 'هامش الربح الإجمالي',
	tool_gross_margin_result_note: 'للتوضيح التعليمي فقط — ليست نصيحة تجارية أو استثمارية.',
	tool_gross_margin_err_revenue: 'يجب أن تكون الإيرادات أكبر من صفر.',
	tool_gross_margin_err_cogs: 'يجب أن تكون التكلفة صفرًا أو رقمًا موجبًا.',
	tool_gross_margin_how_title: 'طريقة الاستخدام',
	tool_gross_margin_how_body:
		'أدخل الإيرادات وتكلفة البضاعة. تحسب الأداة إجمالي الربح والهامش %. مقارنة الهامش بالـ markup وصافي الربح في الأسئلة الشائعة أو الأدوات ذات الصلة — دون عناوين وسيطة.',
	tool_gross_margin_formula_title: 'الصيغة والافتراضات',
	tool_gross_margin_formula_body:
		'إجمالي الربح = الإيرادات − تكلفة البضاعة. هامش الربح % = (إجمالي الربح ÷ الإيرادات) × 100. الافتراضات:',
	tool_gross_margin_formula_item_1: 'الإيرادات والتكلفة لنفس الفترة والعملة؛ الضرائب والمصروفات التشغيلية غير مُنمذَجة.',
	tool_gross_margin_formula_item_2: 'التكلفة هنا تكلفة المنتج فقط — دون مصروفات البيع والإدارة والفوائد.',
	tool_gross_margin_formula_item_3: 'النتائج توضيحات تعليمية وليست توقعات أو نصائح.',
	tool_gross_margin_example_title: 'مثال',
	tool_gross_margin_example:
		'مثال: إيرادات 10000 وتكلفة 6000 → إجمالي ربح 4000 → هامش 40%.',
	tool_gross_margin_usecases_title: 'متى تستخدمها',
	tool_gross_margin_usecase_1: 'الصف: تمرين صيغة هامش الربح بإيرادات وتكلفة ثابتة.',
	tool_gross_margin_usecase_2: 'تقدير تقريبي لهامش منتج قبل استشارة مختص (للتوضيح فقط).',
	tool_gross_margin_usecase_3: 'رؤية الربح والهامش معًا دون عنوان منفصل للـ markup.',
	tool_gross_margin_faq_q1: 'ما صيغة هامش الربح المستخدمة هنا؟',
	tool_gross_margin_faq_a1:
		'إجمالي الربح = الإيرادات − التكلفة. هامش الربح % = إجمالي الربح ÷ الإيرادات × 100.',
	tool_gross_margin_faq_q2: 'ماذا لو تجاوزت التكلفة الإيرادات؟',
	tool_gross_margin_faq_a2:
		'يصبح الربح والهامش سالبين. يسمح النموذج بحالات الخسارة — وما زال ذلك ليس نصيحة.',
	tool_gross_margin_faq_q3: 'هل هذه نصيحة تجارية؟',
	tool_gross_margin_faq_a3:
		'لا. الأرقام توضيحات تعليمية فقط وليست نصيحة ضريبية أو تجارية أو استثمارية.',
	tool_gross_margin_faq_q4: 'هامش الربح مقابل الـ markup؟',
	tool_gross_margin_faq_a4:
		'الهامش يقسم الربح على الإيرادات؛ الـ markup يقسمه على التكلفة. تركز الصفحة على الهامش؛ الـ markup في الأسئلة الشائعة فقط.',
	tool_gross_margin_disclaimer:
		'نتائج هامش الربح الإجمالي توضيحات تعليمية فقط وليست نصيحة تجارية أو مالية أو ضريبية أو استثمارية. الأعمال الحقيقية تواجه رسومًا وضرائب وتصنيفات تكلفة لا تُنمذَج هنا.',
	tool_gross_margin_references:
		'تعريفات Investopedia لهامش الربح الإجمالي وإجمالي الربح؛ الصيغة القياسية (الإيرادات − التكلفة) / الإيرادات.',
	tool_gross_margin_ref_gm_label: 'Investopedia — Gross Margin',
	tool_gross_margin_ref_gp_label: 'Investopedia — Gross Profit',
};

export default ar;
