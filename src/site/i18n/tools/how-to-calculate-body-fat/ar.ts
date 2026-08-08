/**
 * i18n tool shard (how-to-calculate-body-fat / ar).
 * Independent rewrite in Arabic (not English skeleton); Navy/Army circumference, FAQ, YMYL.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_body_fat_title: 'حاسبة نسبة دهون الجسم — تقدير بالنسبة المئوية',
	tool_body_fat_description:
		'قدّر نسبة دهون الجسم بصيغ محيطات البحرية الأمريكية (خيار الجيش في نفس الصفحة). مثال: ذكر، طول 178 سم، رقبة 40 سم، خصر 86 سم → ~15.3%. الحساب في المتصفح؛ للتعليم فقط — ليس نصيحة طبية أو تشخيصًا.',
	tool_body_fat_article:
		'طرق المحيطات تقدّر الدهون من الطول وقياسات الشريط. Navy و Army (عائلة DoD) في عنوان تعليمي واحد؛ قياس طيات الجلد يُشرح في الأسئلة كطريقة مختلفة دون صفحة منفصلة.',
	tool_body_fat_calculate: 'احسب',
	tool_body_fat_sample: 'تحميل مثال',
	tool_body_fat_clear: 'امسح',
	tool_body_fat_method_label: 'الطريقة',
	tool_body_fat_method_navy: 'محيطات البحرية الأمريكية',
	tool_body_fat_method_army: 'محيطات الجيش / أسلوب DoD',
	tool_body_fat_sex_label: 'الجنس (جداول الصيغ)',
	tool_body_fat_sex_male: 'ذكر',
	tool_body_fat_sex_female: 'أنثى',
	tool_body_fat_height_label: 'الطول (سم)',
	tool_body_fat_height_ph: 'مثال 178',
	tool_body_fat_neck_label: 'محيط الرقبة (سم)',
	tool_body_fat_neck_ph: 'مثال 40',
	tool_body_fat_waist_label: 'محيط الخصر (سم)',
	tool_body_fat_waist_ph: 'مثال 86',
	tool_body_fat_hip_label: 'محيط الورك (سم، للإناث)',
	tool_body_fat_hip_ph: 'مثال 96',
	tool_body_fat_result_label: 'دهون الجسم المقدّرة',
	tool_body_fat_result_note: 'تقدير تعليمي فقط — ليس نصيحة طبية أو تشخيصًا.',
	tool_body_fat_err_input: 'يجب أن يكون الطول والرقبة والخصر أرقامًا موجبة.',
	tool_body_fat_err_hip: 'صيغ الإناث تحتاج محيط ورك موجب.',
	tool_body_fat_err_geom: 'يجب أن يكون الخصر أكبر من الرقبة (وللإناث الخصر+الورك > الرقبة).',
	tool_body_fat_how_title: 'طريقة العمل',
	tool_body_fat_how_body:
		'أدخل الجنس والطول والقياسات بالسنتimeters. الأداة تحوّل إلى بوصات لصيغ log10 المنشورة ثم تعرض نسبة الدهون المقدّرة. طيات الجلد في الأسئلة — نفس الصفحة.',
	tool_body_fat_formula_title: 'الصيغة وافتراضات القياس',
	tool_body_fat_formula_body:
		'ذكر: %دهون ≈ 86.010×log10(خصر−رقبة) − 70.041×log10(طول) + 36.387 (بوصات). أنثى: %دهون ≈ 163.205×log10(خصر+ورك−رقبة) − 97.684×log10(طول) + 78.387. افتراضات:',
	tool_body_fat_formula_item_1: 'الشريط عند نقاط Navy/DoD القياسية؛ الوضعية والملابس تغيّر النتيجة.',
	tool_body_fat_formula_item_2: 'الإدخال بالسنتimeters؛ تحويل 1 in = 2.54 cm قبل صيغ log10.',
	tool_body_fat_formula_item_3: 'التقديرات تعليمية، وليست نتائج DXA/Bod Pod سريرية أو نصيحة طبية.',
	tool_body_fat_example_title: 'مثال',
	tool_body_fat_example:
		'مثال: ذكر، طريقة Navy، طول 178 سم، رقبة 40 سم، خصر 86 سم → ~15.3% دهون.',
	tool_body_fat_usecases_title: 'متى تستخدمها',
	tool_body_fat_usecase_1: 'درس: تمرين صيغ Navy للدهون بأرقام ثابتة.',
	tool_body_fat_usecase_2: 'تقدير تقريبي لتتبّع اللياقة قبل استشارة طبيب (ليس تشخيصًا).',
	tool_body_fat_usecase_3: 'مقارنة تسميات Navy و Army في صفحة واحدة دون عنوان ثانٍ.',
	tool_body_fat_faq_q1: 'ما الصيغة المستخدمة؟',
	tool_body_fat_faq_a1:
		'صيغ log10 للمحيطات بأسلوب البحرية/DoD الأمريكية، بالبوصات بعد تحويل السنتimeters.',
	tool_body_fat_faq_q2: 'Navy مقابل Army في هذه الصفحة؟',
	tool_body_fat_faq_a2:
		'كلاهما مقدّر محيطات من نفس العائلة. التسميات للبحث؛ انضباط القياس أهم من الاسم.',
	tool_body_fat_faq_q3: 'هل هذه نصيحة طبية؟',
	tool_body_fat_faq_a3:
		'لا. النتائج تقديرات تعليمية وليست تشخيصًا أو خطة علاج أو فحص تركيب جسم سريري.',
	tool_body_fat_faq_q4: 'ماذا عن قياس طيات الجلد؟',
	tool_body_fat_faq_a4:
		'معادلات الطيات تحتاج عدة مواقع وتقنية مدربة. تُشرح هنا في الأسئلة، لا كرابط أداة منفصل.',
	tool_body_fat_disclaimer:
		'تقديرات دهون الجسم للتعليم فقط ولا تغني عن نصيحة طبية أو تشخيص أو فحص تركيب جسم سريري. استشر مختصًا مؤهلًا لقرارات الصحة.',
	tool_body_fat_references:
		'معادلات محيطات البحرية/DoD الأمريكية؛ ملاحظات ACE التعليمية عن حاسبات الدهون؛ أدبيات محكّمة عن طرق المحيطات.',
	tool_body_fat_ref_ace_label: 'ACE — حاسبة دهون الجسم (تعليمية)',
	tool_body_fat_ref_pmc_label: 'PMC — طرق دهون الجسم بالمحيطات',
};

export default ar;
