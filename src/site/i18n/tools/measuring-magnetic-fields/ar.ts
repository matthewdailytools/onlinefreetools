/**
 * i18n tool shard (measuring-magnetic-fields / ar).
 * بحث محلي: قياس المجال المغناطيسي / شدة المجال؛ لا تخلط مع رابط مغناطيسي للتحميل.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_measuring_magnetic_fields_title: 'قياس المجال المغناطيسي — حاسبة شدة المجال',
	tool_measuring_magnetic_fields_description:
		'قياس المجال المغناطيسي: أدخل قراءة مسبار هول أو مقياس غاوس وحوّل الشدة. مثال: 200 غاوس → 0.02 تسلا. قارن غاوس المغناطيس بجدول أوامر المقدار، أو قدّر المجال المحوري لمغناطيس شريطي. الحساب يتم في المتصفح ولا تُرفع الأرقام إلى خادم.',
	tool_measuring_magnetic_fields_article:
		'اختر الجهاز ومدى القياس أولاً، ثم حوّل الوحدة. التقدير الهندسي ليس قياساً معايرة ولا قوة جذب بالكيلوغرام.',
	tool_measuring_magnetic_fields_calculate: 'تحويل',
	tool_measuring_magnetic_fields_sample: 'مثال',
	tool_measuring_magnetic_fields_clear: 'مسح',
	tool_measuring_magnetic_fields_estimate: 'تقدير المجال',
	tool_measuring_magnetic_fields_convert_heading: 'تحويل قراءة الجهاز',
	tool_measuring_magnetic_fields_estimate_heading: 'اختياري: تقدير مجال مغناطيس',
	tool_measuring_magnetic_fields_value_label: 'القراءة',
	tool_measuring_magnetic_fields_value_ph: 'مثال 200',
	tool_measuring_magnetic_fields_unit_label: 'الوحدة على الجهاز',
	tool_measuring_magnetic_fields_vacuum_label: 'إظهار H أيضاً في الفراغ/الهواء (A/m وأورستد)',
	tool_measuring_magnetic_fields_result_t: 'تسلا (T)',
	tool_measuring_magnetic_fields_result_mt: 'ميليتسلا (mT)',
	tool_measuring_magnetic_fields_result_ut: 'ميكروتسلا (µT)',
	tool_measuring_magnetic_fields_result_nt: 'نانوتسلا (nT)',
	tool_measuring_magnetic_fields_result_g: 'غاوس (G)',
	tool_measuring_magnetic_fields_result_mg: 'ميليغاوس (mG)',
	tool_measuring_magnetic_fields_result_kg: 'كيلوغاوس (kG)',
	tool_measuring_magnetic_fields_earth_line: 'نحو {n} ضعف مجال الأرض (~50 µT كنقطة وسط تعليمية).',
	tool_measuring_magnetic_fields_result_h: 'H (A/m)، فراغ/هواء',
	tool_measuring_magnetic_fields_result_oe: 'أورستد (Oe)، فراغ/هواء',
	tool_measuring_magnetic_fields_result_note:
		'صيغة المجال: 1 T = 10⁴ G. يظهر H الاختياري من B = μ₀H في الفراغ/الهواء فقط؛ B وH ليسا نفس الكمية.',
	tool_measuring_magnetic_fields_err_generic: 'أدخل قراءة منتهية وغير سالبة.',
	tool_measuring_magnetic_fields_err_negative: 'تعالج هذه الصفحة المقدار؛ تُرفض القيم السالبة.',
	tool_measuring_magnetic_fields_err_z: 'المسافة المحورية z يجب أن تكون ≥ 0 (مم من الوجه).',
	tool_measuring_magnetic_fields_err_grade: 'اختر درجة N من القائمة (N35–N52).',
	tool_measuring_magnetic_fields_err_dims: 'أدخل أبعاداً منتهية وموجبة بالمليمتر.',
	tool_measuring_magnetic_fields_grade_label: 'درجة NdFeB (منتصف Br)',
	tool_measuring_magnetic_fields_shape_label: 'الشكل',
	tool_measuring_magnetic_fields_shape_disc: 'قرص / أسطوانة',
	tool_measuring_magnetic_fields_shape_block: 'مكعب / مغناطيس شريطي',
	tool_measuring_magnetic_fields_diam_label: 'القطر (مم)',
	tool_measuring_magnetic_fields_thick_label: 'السُمك على المحور (مم)',
	tool_measuring_magnetic_fields_len_label: 'طول الوجه (مم)',
	tool_measuring_magnetic_fields_width_label: 'عرض الوجه (مم)',
	tool_measuring_magnetic_fields_z_label: 'المسافة عن الوجه z (مم)',
	tool_measuring_magnetic_fields_estimate_out_t: 'B المحوري (T)',
	tool_measuring_magnetic_fields_estimate_out_g: 'B المحوري (G)',
	tool_measuring_magnetic_fields_estimate_note:
		'تمغنط محوري منتظم وصيغة القرص (المكعب يستخدم نصف قطر مكافئ). التدرج قرب الوجه حاد: ليست قياساً معايرة ولا قوة سحب بالكيلوغرام.',
	tool_measuring_magnetic_fields_chart_title: 'جدول شدة المغناطيس (أوامر المقدار)',
	tool_measuring_magnetic_fields_chart_col_source: 'المصدر',
	tool_measuring_magnetic_fields_chart_col_b: 'B النموذجي',
	tool_measuring_magnetic_fields_chart_earth: 'مجال الأرض (تحقق من الحقل الضعيف)',
	tool_measuring_magnetic_fields_chart_earth_b: '~25–65 µT (هنا ~50 µT كنقطة وسط)',
	tool_measuring_magnetic_fields_chart_fridge: 'مغناطيس الثلاجة / مغناطيس ضعيف (غاوس)',
	tool_measuring_magnetic_fields_chart_fridge_b: '~5–50 mT (~50–500 G) قرب الوجه',
	tool_measuring_magnetic_fields_chart_ndfeb: 'سطح NdFeB (مجال المغناطيس)',
	tool_measuring_magnetic_fields_chart_ndfeb_b: '~0.2–0.6 T قرب الوجه عادة — ليست قوة سحب بالكغ',
	tool_measuring_magnetic_fields_chart_mri: 'التصوير بالرنين (أمر مقدار فقط)',
	tool_measuring_magnetic_fields_chart_mri_b: '~1.5–3 T — ليست مواصفات جهاز ولا نصيحة سلامة',
	tool_measuring_magnetic_fields_how_title: 'كيف تقيس مجالاً مغناطيسياً',
	tool_measuring_magnetic_fields_how_body:
		'اختر الجهاز، ضع المسبار، اقرأ الوحدة ثم حوّل. تقدير المغناطيس الشريطي اختياري ولا يغني عن المقياس.',
	tool_measuring_magnetic_fields_how_item_1:
		'اختر جهازاً يناسب المهمة: مقياس غاوس أو مسبار هول للمغناطيسات (mT–T)؛ مقياس هاتف فقط للحقول الضعيفة مثل ~50 µT للأرض.',
	tool_measuring_magnetic_fields_how_item_2:
		'ضع الحساس على المحور الذي يهمك، سجّل المسافة عن الوجه، وراقب التشبع (الحساسات الرخيصة تمتلئ قرب النيوديميوم).',
	tool_measuring_magnetic_fields_how_item_3: 'اقرأ الرقم والوحدة على الجهاز (غاوس أو تسلا).',
	tool_measuring_magnetic_fields_how_item_4:
		'اضغط تحويل وقارن بالجدول. زر المثال يملأ 200 G → 0.02 T.',
	tool_measuring_magnetic_fields_how_item_5:
		'إن لم يكن لديك مقياس بعد، افتح تقدير المجال وقرّب مجال قرص أو شريط من الدرجة والحجم — تقدير وليس معايرة.',
	tool_measuring_magnetic_fields_formula_title: 'صيغة المجال المغناطيسي',
	tool_measuring_magnetic_fields_formula_body:
		'التحويل يتم عبر تسلا في نظام SI. يظهر H فقط عند تفعيل الفراغ/الهواء.',
	tool_measuring_magnetic_fields_formula_item_1:
		'الصيغة: 1 T = 10⁴ G = 10³ mT = 10⁶ µT = 10⁹ nT؛ 1 G = 10⁻⁴ T؛ 1 kG = 0.1 T؛ 1 mG = 10⁻⁷ T.',
	tool_measuring_magnetic_fields_formula_item_2:
		'شدة المجال H (فراغ/هواء): B(T) = μ₀ H(A/m)، μ₀ = 4π×10⁻⁷ N·A⁻². 1 Oe ≈ 79.577 A/m؛ 1 G يقابل 1 Oe في هذا التقريب فقط. B وH ليسا نفس الكمية الفيزيائية.',
	tool_measuring_magnetic_fields_formula_item_3:
		'القرص (تمغنط محوري منتظم): B_z(z) = (Br/2)·[(L+z)/√(R²+(L+z)²) − z/√(R²+z²)] بالمتر. المكعب/الشريط يستخدم R = √(طول×عرض الوجه / π)؛ ليس نموذجاً بالعناصر المحدودة.',
	tool_measuring_magnetic_fields_formula_item_4:
		'التدفق Φ = B A يصح لمجال منتظم عمودي على المساحة — هذه الأداة تخرج B لا Φ. التقدير يستخدم Br المتبقي وليس حلاً كاملاً للعزم المغناطيسي. قيم Br للدرجات نقاط وسط لنطاقات.',
	tool_measuring_magnetic_fields_example_title: 'مثال',
	tool_measuring_magnetic_fields_example:
		'مثال: مسبار هول يقرأ 200 غاوس. التحويل → 0.02 T = 20 mT = 2×10⁴ µT = 200 G، نحو 400 ضعف ~50 µT للأرض. تقع هذه الشدة بين مغناطيس ثلاجة ووجه نيوديميوم قوي.',
	tool_measuring_magnetic_fields_usecases_title: 'متى يفيد',
	tool_measuring_magnetic_fields_usecase_1:
		'دفتر المختبر: المقياس يظهر 200 غاوس والتقرير يطلب تسلا (قياس المجال / شدة المجال).',
	tool_measuring_magnetic_fields_usecase_2:
		'غاوس المغناطيس: قارن القراءة بالجدول حتى لا تُحسب قراءة هاتف مشبعة حقلاً سطحياً.',
	tool_measuring_magnetic_fields_usecase_3:
		'مجال المغناطيس الشريطي: قدّر B المحوري من الدرجة والحجم — ليست قوة بين مغناطيسين.',
	tool_measuring_magnetic_fields_faq_q1: 'كيف أقيس مجالاً مغناطيسياً؟',
	tool_measuring_magnetic_fields_faq_a1:
		'للمغناطيسات استخدم مسبار هول أو مقياس غاوس (mT–T). ضع المسبار على المحور، سجّل المسافة، وابقَ ضمن المدى — مغناطيس الهاتف يتشبع قرب النيوديميوم. اقرأ الوحدة ثم حوّل هنا (مثال: 200 G → 0.02 T). مقياس قوة السحب بالنيوتن عمل آخر.',
	tool_measuring_magnetic_fields_faq_q2: 'ما صيغة المجال / شدة المجال؟',
	tool_measuring_magnetic_fields_faq_a2:
		'تحويل B: 1 T = 10⁴ G. في الفراغ أو الهواء يتبع H العلاقة B = μ₀H؛ 1 G ≈ 1 Oe في هذا التقريب فقط. التدفق Φ = BA لا يُحسب هنا.',
	tool_measuring_magnetic_fields_faq_q3: 'ما الفرق بين غاوس المغناطيس وجدول الشدة؟',
	tool_measuring_magnetic_fields_faq_a3:
		'غاوس هو B بهذه الوحدة. الجدول أوامر مقدار (الأرض، الثلاجة، NdFeB) وليس جدول قوة سحب بالكغ في المتجر.',
	tool_measuring_magnetic_fields_faq_q4: 'هل القوة المغناطيسية هي المجال نفسه؟',
	tool_measuring_magnetic_fields_faq_a4:
		'لا. هذه الصفحة تحوّل وتقدّر B. القوة (بين مغناطيسين أو F = qvB) حساب آخر ولا يُحل هنا.',
	tool_measuring_magnetic_fields_faq_q5: 'هل يمكن رسم خطوط المجال أو مجالاً منتظماً؟',
	tool_measuring_magnetic_fields_faq_a5:
		'لا يوجد مخطط تفاعلي. نوعياً ينخفض B المحوري لمغناطيس شريطي مع البعد عن الوجه. المجال المنتظم مثالية؛ مغناطيس الثلاجة والقرص غير منتظمين بشدة.',
	tool_measuring_magnetic_fields_disclaimer:
		'النتائج تحويلات وتقديرات تعليمية، ليست قياساً معايرة ولا نصيحة طبية أو لزراعة أو للرنين المغناطيسي.',
	tool_measuring_magnetic_fields_references:
		'كتيب SI من BIPM (تسلا)؛ NIST CODATA μ₀؛ أسئلة NOAA عن المغناطيسية الأرضية لسياق المقدار.',
	tool_measuring_magnetic_fields_ref_bipm_label: 'BIPM — كتيب SI (تسلا)',
	tool_measuring_magnetic_fields_ref_nist_label: 'NIST — النفاذية المغناطيسية للفراغ μ₀',
	tool_measuring_magnetic_fields_ref_noaa_label: 'NOAA — أسئلة المغناطيسية الأرضية',
};

export default ar;
