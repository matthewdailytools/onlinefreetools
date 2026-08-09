/**
 * i18n tool shard (how-to-calculate-standard-deviation / ar).
 * صياغة عربية مستقلة (ليست ترجمة حرفية للقالب الإنجليزي).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_std_dev_title: 'حاسبة الانحراف المعياري — الانحراف والتباين',
	tool_std_dev_description:
		'الصق قائمة أرقام لتحسب الانحراف المعياري والتباين بوضع العينة (n−1) أو المجتمع (n). المجموعة الكلاسيكية 2، 4، 4، 4، 5، 5، 7، 9 → انحراف المجتمع = 2 (العينة ≈ 2.14). الحساب داخل المتصفح؛ تبقى الأرقام على جهازك دون رفع إلى خادم.',
	tool_std_dev_article:
		'الانحراف المعياري يصف تشتت القيم حول المتوسط. اختر العينة (تصحيح بيسل، القسمة على n−1) إن كانت القائمة عينة، أو المجتمع (القسمة على n) إن كانت المجموعة كاملة. التباين هو مربع ذلك الانحراف.',
	tool_std_dev_calculate: 'احسب',
	tool_std_dev_sample: 'تحميل مثال',
	tool_std_dev_clear: 'مسح',
	tool_std_dev_numbers_label: 'الأرقام',
	tool_std_dev_numbers_ph: 'مثال: 2, 4, 4, 4, 5, 5, 7, 9',
	tool_std_dev_numbers_hint: 'افصل بفواصل أو مسافات أو أسطر جديدة.',
	tool_std_dev_mode_label: 'الوضع',
	tool_std_dev_mode_sample: 'عينة (n−1)',
	tool_std_dev_mode_population: 'مجتمع (n)',
	tool_std_dev_result_count: 'العدد',
	tool_std_dev_result_mean: 'المتوسط',
	tool_std_dev_result_variance: 'التباين',
	tool_std_dev_result_sd: 'الانحراف المعياري',
	tool_std_dev_result_note_sample: 'وضع العينة يستخدم تصحيح بيسل (القسمة على n−1).',
	tool_std_dev_result_note_population: 'وضع المجتمع يقسم على n (المجموعة كاملة).',
	tool_std_dev_err_empty: 'أدخل رقمًا صالحًا واحدًا على الأقل.',
	tool_std_dev_err_sample_n: 'انحراف العينة يحتاج رقمين على الأقل.',
	tool_std_dev_how_title: 'طريقة العمل',
	tool_std_dev_how_body:
		'الصق الأرقام، اختر العينة أو المجتمع، ثم احسب. تُحسب المتوسط ومجموع مربعات الانحرافات ثم التباين (÷ n−1 أو ÷ n) والجذر للانحراف. يبقى كل شيء في علامة تبويب المتصفح دون رفع إلى خادم.',
	tool_std_dev_formula_title: 'الصيغ',
	tool_std_dev_formula_body:
		'ليكن x̄ المتوسط. التباين متوسط مربعات الانحرافات؛ والانحراف المعياري جذره التربيعي:',
	tool_std_dev_formula_item_1: 'المتوسط: x̄ = (Σ xᵢ) / n',
	tool_std_dev_formula_item_2: 'تباين العينة: s² = Σ(xᵢ − x̄)² / (n − 1)؛ s = √s²',
	tool_std_dev_formula_item_3: 'تباين المجتمع: σ² = Σ(xᵢ − x̄)² / n؛ σ = √σ²',
	tool_std_dev_example_title: 'مثال',
	tool_std_dev_example:
		'للمجموعة 2، 4، 4، 4، 5، 5، 7، 9 المتوسط 5 ومجموع المربعات 32. المجتمع: σ² = 4 → σ = 2. العينة: s² ≈ 4.571 → s ≈ 2.138. الرقم الشهير «الانحراف = 2» هو قيمة المجتمع.',
	tool_std_dev_usecases_title: 'متى تستخدمها',
	tool_std_dev_usecase_1: 'واجب مدرسي: التحقق من انحراف العينة مقابل المجتمع لقائمة قصيرة.',
	tool_std_dev_usecase_2: 'فحص سريع لتشتت عمود صغير قبل الرسم البياني.',
	tool_std_dev_usecase_3: 'مقارنة تقلب سلسلتين قصيرتين بنفس الوضع.',
	tool_std_dev_faq_q1: 'ما الفرق بين العينة والمجتمع؟',
	tool_std_dev_faq_a1:
		'انحراف العينة يقسم على n−1 (بيسل) لتقدير مجتمع أكبر. انحراف المجتمع يقسم على n عندما تكون القائمة المجموعة كاملة.',
	tool_std_dev_faq_q2: 'ما علاقة التباين بالانحراف المعياري؟',
	tool_std_dev_faq_a2:
		'التباين متوسط مربعات الانحراف عن المتوسط. الانحراف المعياري جذره، وبوحدات البيانات نفسها.',
	tool_std_dev_faq_q3: 'لماذا المثال الكلاسيكي يساوي 2؟',
	tool_std_dev_faq_a3:
		'لهذه الأرقام الثمانية انحراف المجتمع تمامًا 2؛ وانحراف العينة حوالي 2.14. الكتب غالبًا تعرض رقم المجتمع.',
	tool_std_dev_faq_q4: 'هل تُرفع أرقامي إلى خادم؟',
	tool_std_dev_faq_a4:
		'لا. التحليل يعمل داخل علامة تبويب المتصفح. تبقى القيم على جهازك ولا تُرفع إلى خادم.',
	tool_std_dev_references:
		'مقالات ويكيبيديا عن الانحراف المعياري والتباين؛ صيغ تمهيدية للعينة والمجتمع.',
	tool_std_dev_ref_sd_label: 'ويكيبيديا — الانحراف المعياري',
	tool_std_dev_ref_var_label: 'ويكيبيديا — التباين',
};

export default ar;
