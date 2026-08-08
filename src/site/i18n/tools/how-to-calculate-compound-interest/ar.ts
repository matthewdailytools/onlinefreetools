/**
 * i18n tool shard (how-to-calculate-compound-interest / ar).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_compound_interest_title: 'حاسبة الفائدة المركبة — حساب القيمة المستقبلية',
	tool_compound_interest_description:
		'احسب القيمة المستقبلية للفائدة المركبة من أصل المبلغ والمعدل السنوي وعدد السنوات وتكرار التركيب. الصيغة A = P(1 + r/n)^(nt)؛ وضع الفائدة البسيطة اختياري. مثال: 10000 بنسبة 5% لمدة 10 سنوات مع تركيب سنوي → نحو 16288.95. الحساب في المتصفح؛ للتعليم فقط وليس نصيحة استثمارية.',
	tool_compound_interest_article:
		'الفائدة المركبة تضيف فائدة على الفائدة السابقة. توضّح هذه الصفحة الصيغة المنفصلة القياسية، وتتيح مقارنة الفائدة البسيطة بنفس المدخلات، مع بيان الافتراضات لاستخدامات دراسية وتقديرات شخصية.',
	tool_compound_interest_calculate: 'احسب',
	tool_compound_interest_sample: 'تحميل مثال',
	tool_compound_interest_clear: 'مسح',
	tool_compound_interest_mode_label: 'نوع الفائدة',
	tool_compound_interest_mode_compound: 'فائدة مركبة',
	tool_compound_interest_mode_simple: 'فائدة بسيطة',
	tool_compound_interest_principal_label: 'أصل المبلغ (P)',
	tool_compound_interest_principal_placeholder: 'مثال 10000',
	tool_compound_interest_rate_label: 'المعدل السنوي (%)',
	tool_compound_interest_rate_placeholder: 'مثال 5',
	tool_compound_interest_years_label: 'المدة (سنوات)',
	tool_compound_interest_years_placeholder: 'مثال 10',
	tool_compound_interest_freq_label: 'مرات التركيب في السنة (n)',
	tool_compound_interest_freq_1: 'سنوي (1)',
	tool_compound_interest_freq_2: 'نصف سنوي (2)',
	tool_compound_interest_freq_4: 'ربع سنوي (4)',
	tool_compound_interest_freq_12: 'شهري (12)',
	tool_compound_interest_freq_365: 'يومي (365)',
	tool_compound_interest_result_future: 'القيمة المستقبلية (A)',
	tool_compound_interest_result_interest: 'الفائدة المكتسبة',
	tool_compound_interest_result_note: 'للتوضيح التعليمي فقط — وليس نصيحة استثمارية.',
	tool_compound_interest_err_principal: 'يجب أن يكون أصل المبلغ أكبر من صفر.',
	tool_compound_interest_err_years: 'يجب أن تكون المدة بالسنوات أكبر من صفر.',
	tool_compound_interest_err_rate: 'يجب أن يكون المعدل السنوي صفراً أو رقماً موجباً.',
	tool_compound_interest_err_overflow: 'النتيجة كبيرة جداً. جرّب مدة أقصر أو معدلاً أصغر.',
	tool_compound_interest_how_title: 'كيف يعمل',
	tool_compound_interest_how_body:
		'أدخل أصل المبلغ والمعدل السنوي الاسمي كنسبة مئوية وعدد السنوات. في وضع المركب، اختر عدد مرات تركيب الفائدة سنوياً. الأداة تحسب القيمة المستقبلية والفائدة. في الوضع البسيط تُستخدم A = P(1 + r t) ويُتجاهل التكرار.',
	tool_compound_interest_formula_title: 'الصيغة والافتراضات',
	tool_compound_interest_formula_body:
		'مركب: A = P (1 + r/n)^(n t)، حيث r المعدل السنوي الاسمي كعدد عشري و n مرات التركيب في السنة. بسيط: A = P (1 + r t). ضع في الاعتبار:',
	tool_compound_interest_formula_item_1:
		'المعدل اسمي سنوي تدخله أنت؛ لا تُخصم الضرائب أو الرسوم أو التضخم.',
	tool_compound_interest_formula_item_2:
		'لا إيداعات أو سحوبات خلال الفترة — ينمو أصل المبلغ الابتدائي فقط.',
	tool_compound_interest_formula_item_3:
		'تكرار التركيب يغيّر النمو الفعلي؛ تفاصيل APY مذكورة في الأسئلة الشائعة وليست أداة منفصلة.',
	tool_compound_interest_formula_item_4:
		'النتائج توضيح تعليمي وليست توقعات أو نصيحة استثمارية.',
	tool_compound_interest_example_title: 'مثال',
	tool_compound_interest_example:
		'مثال: أصل 10000، معدل 5% سنوياً، 10 سنوات، تركيب مرة واحدة في السنة → A ≈ 16288.95 والفائدة ≈ 6288.95. بنفس المدخلات في الوضع البسيط → A = 15000.',
	tool_compound_interest_usecases_title: 'متى تستخدمها',
	tool_compound_interest_usecase_1:
		'تقدير ادخار: رصيد مستقبلي تقريبي لمبلغ واحد يتركب بمعدل محدد (للتوضيح فقط).',
	tool_compound_interest_usecase_2:
		'واجبات دراسية: التدرب على صيغة الفائدة المركبة بقيم P و r و n و t ثابتة.',
	tool_compound_interest_usecase_3:
		'مقارنة الأنماط: انتقل إلى الفائدة البسيطة بنفس المدخلات لمعرفة أثر التركيب.',
	tool_compound_interest_faq_q1: 'ما صيغة الفائدة المركبة المستخدمة؟',
	tool_compound_interest_faq_a1:
		'A = P (1 + r/n)^(n t) حيث r المعدل السنوي كعدد عشري و n مرات التركيب في السنة. الفائدة = A − P.',
	tool_compound_interest_faq_q2: 'كيف تختلف الفائدة البسيطة؟',
	tool_compound_interest_faq_a2:
		'الفائدة البسيطة A = P (1 + r t) ولا تتركب. اختر «بسيطة» في القائمة؛ يُتجاهل التكرار.',
	tool_compound_interest_faq_q3: 'ماذا يعني تكرار التركيب؟',
	tool_compound_interest_faq_a3:
		'n عدد مرات إضافة الفائدة في السنة (1 سنوي، 12 شهري، 365 يومي). عادةً كلما زاد n نما الرصيد أسرع لنفس المعدل الاسمي.',
	tool_compound_interest_faq_q4: 'هل هذه نصيحة استثمارية؟',
	tool_compound_interest_faq_a4:
		'لا. الأرقام للتوضيح التعليمي فقط وليست نصيحة استثمارية أو ضريبية أو مالية.',
	tool_compound_interest_faq_q5: 'ماذا لو كان المعدل صفراً؟',
	tool_compound_interest_faq_a5: 'إذا كان المعدل السنوي 0%، تساوي القيمة المستقبلية أصل المبلغ والفائدة 0.',
	tool_compound_interest_disclaimer:
		'نتائج الفائدة المركبة والبسيطة للتوضيح التعليمي فقط وليست نصيحة استثمارية أو ضريبية أو مالية. النمو السابق أو الافتراضي لا يضمن نتائج مستقبلية.',
	tool_compound_interest_references:
		'تعريفات الفائدة المركبة والبسيطة في Investopedia؛ الصيغة المنفصلة القياسية A = P(1 + r/n)^(nt).',
	tool_compound_interest_ref_compound_label: 'Investopedia — الفائدة المركبة',
	tool_compound_interest_ref_simple_label: 'Investopedia — الفائدة البسيطة',
};

export default ar;
