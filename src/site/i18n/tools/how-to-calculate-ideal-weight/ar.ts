/**
 * i18n tool shard (how-to-calculate-ideal-weight / ar).
 * إعادة كتابة مستقلة وفق موجز 03 (الوزن المثالي)؛ ليست ترجمة حرفية للإنجليزية.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_ideal_weight_title: 'حاسبة الوزن المثالي — تقدير نطاق الوزن',
	tool_ideal_weight_description:
		'قدّر الوزن المثالي (IBW) بصيغ Devine وRobinson وMiller وHamwi في صفحة واحدة. مثال: ذكر 178 سم → Devine حوالي 73.2 كغ (نطاق حوالي 70.4–75.2 كغ بين الصيغ). الحساب في المتصفح؛ للتعليم فقط — ليس نصيحة طبية ولا تشخيصًا.',
	tool_ideal_weight_article:
		'صيغ الوزن المثالي تقدّر وزنًا مرجعيًا من الطول والجنس. تجمع هذه الصفحة Devine وRobinson وMiller وHamwi للمقارنة، مع تنويه بأنها ليست توجيهًا سريريًا.',
	tool_ideal_weight_calculate: 'احسب',
	tool_ideal_weight_sample: 'تحميل مثال',
	tool_ideal_weight_clear: 'مسح',
	tool_ideal_weight_sex_label: 'الجنس (جداول الصيغة)',
	tool_ideal_weight_sex_male: 'ذكر',
	tool_ideal_weight_sex_female: 'أنثى',
	tool_ideal_weight_height_label: 'الطول (سم)',
	tool_ideal_weight_height_ph: 'مثلاً 178',
	tool_ideal_weight_formula_label: 'عرض الصيغة',
	tool_ideal_weight_formula_all: 'كل الصيغ (نطاق)',
	tool_ideal_weight_formula_devine: 'Devine',
	tool_ideal_weight_formula_robinson: 'Robinson',
	tool_ideal_weight_formula_miller: 'Miller',
	tool_ideal_weight_formula_hamwi: 'Hamwi',
	tool_ideal_weight_result_label: 'الوزن المثالي المقدّر',
	tool_ideal_weight_result_range: 'نطاق الصيغ',
	tool_ideal_weight_result_note: 'تقدير تعليمي فقط — ليس نصيحة طبية ولا تشخيصًا.',
	tool_ideal_weight_err_height: 'يجب أن يكون الطول أكبر من صفر.',
	tool_ideal_weight_err_short:
		'هذه صيغ IBW غير معرّفة جيدًا تحت حوالي 152 سم (5 أقدام). اعتبر النتيجة للتوضيح فقط.',
	tool_ideal_weight_how_title: 'طريقة الاستخدام',
	tool_ideal_weight_how_body:
		'أدخل الجنس والطول بالسنتيمتر. تحوّل الأداة الطول إلى بوصات للصيغ الكلاسيكية وتعرض الكيلوغرام. قارن الصيغ هنا؛ مؤشر كتلة الجسم ونسبة الدهون في أدوات أخرى.',
	tool_ideal_weight_formula_title: 'الصيغ والافتراضات',
	tool_ideal_weight_formula_body:
		'التحويل: 1 بوصة = 2.54 سم. فوق 60 بوصة (5 أقدام): Devine للذكور = 50 + 2.3×(بوصة−60)؛ للإناث = 45.5 + 2.3×(بوصة−60). Robinson وMiller وHamwi أشكال خطية مشابهة بمعاملات مختلفة. تنبيه:',
	tool_ideal_weight_formula_item_1: 'اشتُقّت لسياقات الجرعات/المرجع لدى البالغين — وليست أهدافًا شخصية.',
	tool_ideal_weight_formula_item_2: 'لا تُنمذج حجم الهيكل أو الكتلة العضلية أو الحمل.',
	tool_ideal_weight_formula_item_3: 'النتائج توضيحات تعليمية وليست أهدافًا سريرية أو نصيحة طبية.',
	tool_ideal_weight_example_title: 'مثال',
	tool_ideal_weight_example:
		'مثال: ذكر، 178 سم → Devine حوالي 73.2 كغ؛ Robinson ≈ 71.1، Miller ≈ 70.4، Hamwi ≈ 75.2 (حوالي 70.4–75.2 كغ).',
	tool_ideal_weight_usecases_title: 'متى تستخدمها',
	tool_ideal_weight_usecase_1: 'الدرس: مقارنة صيغ IBW الكلاسيكية بطول واحد.',
	tool_ideal_weight_usecase_2: 'مرجع تعليمي تقريبي قبل التحدث مع مختص (وليس خطة هدف).',
	tool_ideal_weight_usecase_3: 'رؤية Devine مقابل Robinson في صفحة واحدة دون روابط منفصلة.',
	tool_ideal_weight_faq_q1: 'أي صيغة وزن مثالي هي «الصحيحة»؟',
	tool_ideal_weight_faq_a1:
		'لا توجد صيغة صحيحة عالميًا. Devine شائعة في التدريس؛ Robinson وMiller وHamwi تختلف بالمعاملات. قارنها هنا.',
	tool_ideal_weight_faq_q2: 'هل هذا مثل مؤشر كتلة الجسم؟',
	tool_ideal_weight_faq_a2:
		'لا. مؤشر كتلة الجسم نسبة وزن إلى طول. IBW يقدّر وزنًا مرجعيًا من الطول والجنس فقط.',
	tool_ideal_weight_faq_q3: 'هل هذه نصيحة طبية؟',
	tool_ideal_weight_faq_a3:
		'لا. الأرقام تقديرات تعليمية فقط — ليست تشخيصًا ولا خطة علاج ولا وصفة تغذية.',
	tool_ideal_weight_faq_q4: 'لماذا التحويل إلى بوصات؟',
	tool_ideal_weight_faq_a4:
		'معادلات أسلوب Devine المنشورة مُعرّفة بالبوصات فوق 5 أقدام. تُحوَّل السنتيمترات قبل تطبيق الصيغ.',
	tool_ideal_weight_disclaimer:
		'نتائج الوزن المثالي توضيحات تعليمية فقط وليست نصيحة طبية أو تشخيصًا أو بديلاً عن التقييم السريري. استشر مختصًا مؤهلاً لقرارات الصحة.',
	tool_ideal_weight_references:
		'معادلات IBW الكلاسيكية Devine/Robinson/Miller/Hamwi؛ سياق تعليمي للجرعات/IBW في NCBI Bookshelf.',
	tool_ideal_weight_ref_ncbi_label: 'NCBI Bookshelf — سياق الوزن المثالي',
	tool_ideal_weight_ref_wiki_label: 'Wikipedia — Ideal body weight',
};

export default ar;
