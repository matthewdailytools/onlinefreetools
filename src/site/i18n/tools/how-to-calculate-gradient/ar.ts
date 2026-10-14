/**
 * i18n tool shard (how-to-calculate-gradient / ar).
 * تدرج دوال متعددة المتغيرات: حساب ∇f لأمثلة ثابتة مع خطوات العمل والمعيار والاتجاه؛ ليس ميل نقطتين.
 */
import type { SiteLangDict } from '../../../types';

/** قاموس النصوص العربية. */
const ar: SiteLangDict = {
	tool_gradient_title: "حاسبة التدرج — ∇f متعدد المتغيرات عند نقطة",
	tool_gradient_desc: "احسب تدرج ∇f لدالة قياسية تجريبية عند النقطة (x, y).",
	tool_gradient_description:
		"احسب تدرج الدالة متعددة المتغيرات ∇f كمتجه المشتقات الجزئية، مع خطوات الحساب والمعيار. مثال: لـ f(x,y)=x²y+3y عند (1,2)، ∂f/∂x=4 و ∂f/∂y=4 فيكون ∇f=(4,4) و |∇f|≈5.6569. هذه ليست حاسبة ميل بين نقطتين.",
	tool_gradient_calculate: "احسب ∇f",
	tool_gradient_sample: "تحميل مثال",
	tool_gradient_clear: "مسح",
	tool_gradient_fn_label: "دالة تجريبية",
	tool_gradient_fn_xy3y: "f(x,y) = x²y + 3y",
	tool_gradient_fn_x2y2: "f(x,y) = x² + y²",
	tool_gradient_fn_xy: "f(x,y) = x·y",
	tool_gradient_fn_sincos: "f(x,y) = sin(x) + cos(y)",
	tool_gradient_box_xy3y: "f(x, y) = x²y + 3y\n∂f/∂x = 2xy\n∂f/∂y = x² + 3\n∇f = (2xy, x² + 3)",
	tool_gradient_box_x2y2: "f(x, y) = x² + y²\n∂f/∂x = 2x\n∂f/∂y = 2y\n∇f = (2x, 2y)",
	tool_gradient_box_xy: "f(x, y) = x·y\n∂f/∂x = y\n∂f/∂y = x\n∇f = (y, x)",
	tool_gradient_box_sincos: "f(x, y) = sin(x) + cos(y)\n∂f/∂x = cos(x)\n∂f/∂y = −sin(y)\n∇f = (cos(x), −sin(y))",
	tool_gradient_x_label: "x",
	tool_gradient_x_placeholder: "مثال: 1",
	tool_gradient_y_label: "y",
	tool_gradient_y_placeholder: "مثال: 2",
	tool_gradient_result_label: "التدرج عند نقطتك",
	tool_gradient_work_label: "خطوات الحساب",
	tool_gradient_mag_label: "المعيار |∇f|",
	tool_gradient_unit_label: "الاتجاه الوحدوي",
	tool_gradient_result_note: "قُيّم عند ({x}, {y}). يشير ∇f إلى أسرع زيادة محلية لـ f.",
	tool_gradient_zero_mag: "∇f = 0 (نقطة حرجة — لا اتجاه وحيد)",
	tool_gradient_invalid_input: "أدخل قيمًا عددية منتهية لـ x و y.",
	tool_gradient_how_title: "كيف تحسب تدرج دالة متعددة المتغيرات",
	tool_gradient_how_body:
		"لدالة قياسية f(x,y)، فرّق بالنسبة لكل متغير مع تثبيت الباقي، اجمع المشتقات الجزئية في ∇f، ثم عوّض بنقطتك. الصندوق يعرض دوالًا تجريبية ثابتة لتتحقق من الحساب.",
	tool_gradient_how_item_1: "اختر دالة تجريبية واقرأ ∇f الرمزي الظاهر تحتها.",
	tool_gradient_how_item_2: "أدخل الإحداثيات (x, y) حيث تريد المتجه.",
	tool_gradient_how_item_3: "انقر «احسب ∇f».",
	tool_gradient_how_item_4: "اقرأ ∇f وخط العمل لكل مشتقة جزئية والمعيار |∇f| والاتجاه الوحدوي.",
	tool_gradient_why_choose_title: "لماذا تستخدم حاسبة التدرج لدينا",
	tool_gradient_why_choose_item_1: "أربع دوال تجريبية بمشتقات جزئية رمزية جاهزة — وليست CAS رمزية فارغة.",
	tool_gradient_why_choose_item_2: "تُعرض خطوات العمل لكل مركّبة، فيسهل التحقق من الواجبات.",
	tool_gradient_why_choose_item_3: "المعيار والمتجه الوحدوي يربطان ∇f باتجاه أسرع صعود.",
	tool_gradient_why_choose_item_4: "النموذج واضح: ∇f من حساب التفاضل متعدد المتغيرات، وليس ميل نقطتين.",
	tool_gradient_why_choose_item_5: "يعمل في متصفحك؛ لا يُرفع شيء.",
	tool_gradient_formula_title: "صيغة التدرج متعدد المتغيرات",
	tool_gradient_formula_body:
		"∇f = (∂f/∂x₁, ∂f/∂x₂, …, ∂f/∂xₙ). لمتغيرين: ∇f(x,y) = (∂f/∂x, ∂f/∂y). اتجاه ∇f هو أسرع صعود؛ و −∇f يُستخدم في هبوط التدرج.",
	tool_gradient_formula_item_1: "خذ ∂f/∂xᵢ لكل متغير مع تثبيت الباقي.",
	tool_gradient_formula_item_2: "اجمع المركّبات في المتجه ∇f.",
	tool_gradient_formula_item_3: "قيّم عند النقطة. مثال: f=x²y+3y عند (1,2) → (4, 4).",
	tool_gradient_formula_item_4: "المعيار |∇f| = √(gx² + gy²). مثال: √(16+16) = √32 ≈ 5.6569.",
	tool_gradient_example_title: "مثال",
	tool_gradient_example:
		"لـ f(x,y)=x²y+3y المشتقات الجزئية ∂f/∂x=2xy و ∂f/∂y=x²+3. عند (1,2): ∂f/∂x=2·1·2=4، ∂f/∂y=1+3=4، لذا ∇f=(4,4). المعيار √32≈5.6569 والاتجاه الوحدوي (4/√32, 4/√32)≈(0.7071, 0.7071). بدّل إلى f=x²+y² عند نفس النقطة لتحصل على ∇f=(2,4).",
	tool_gradient_usecases_title: "متى تستخدمها",
	tool_gradient_usecase_1: "التحقق من المشتقات الجزئية في الواجب قبل إدخالها في خطوة تحسين.",
	tool_gradient_usecase_2: "شرح هبوط التدرج: كل خطوة تتحرك عكس ∇loss عند المعاملات الحالية.",
	tool_gradient_usecase_3: "حدس فيزيائي أو حقلي: ∇f يشير إلى حيث يزداد الحقل القياسي بأسرع ما يمكن.",
	tool_gradient_usecase_4: "معرفة إن كانت نقطة حرجة (|∇f|=0) على سطح تجريبي بسيط.",
	tool_gradient_faq_q1: "ما التدرج في حساب التفاضل متعدد المتغيرات؟",
	tool_gradient_faq_a1:
		"التدرج ∇f هو متجه المشتقات الجزئية الأولى. يشير إلى أسرع زيادة محلية لـ f، وطوله |∇f| هو مقدار ذلك الانحدار.",
	tool_gradient_faq_q2: "كيف أحسب ∇f يدويًا؟",
	tool_gradient_faq_a2:
		"فرّق بالنسبة لكل متغير مع تثبيت الباقي، اجمع المركّبات في متجه، ثم قيّم عند نقطتك. لـ f=x²y+3y الناتج (2xy, x²+3).",
	tool_gradient_faq_q3: "هل هذا نفس «التدرج» في هبوط التدرج في التعلم الآلي؟",
	tool_gradient_faq_a3:
		"نفس الكائن الرياضي: ∇ لخسارة قياسية. خطوات الهبوط تتحرك عكس ∇loss. هذه الصفحة تعلّم تعريف التفاضل على دوال تجريبية — ولا تدرب نموذجًا.",
	tool_gradient_faq_q4: "هل هذه حاسبة ميل بين نقطتين (ارتفاع/مسافة أفقية)؟",
	tool_gradient_faq_a4:
		"لا. ميل الخط بين نقطتين يخص أداة الميل. هنا ∇f هو متجه المشتقات الجزئية متعددة المتغيرات لحقل قياسي.",
	tool_gradient_faq_q5: "ماذا يعني |∇f| = 0؟",
	tool_gradient_faq_a5:
		"تدرج يتلاشى يعني نقطة حرجة: لا اتجاه وحيد لأسرع صعود. جرّب f=x²+y² عند (0,0): ∇f=(0,0).",
	tool_gradient_faq_q6: "لماذا دوال تجريبية فقط؟",
	tool_gradient_faq_a6:
		"التفاضل الرمزي لتعابير عشوائية يحتاج CAS. الدوال الثابتة تجعل الحساب قابلاً للتحقق وتبقي الصفحة مركّزة على تعريف ∇f.",
	tool_gradient_faq_q7: "راديان أم درجات لـ sin و cos؟",
	tool_gradient_faq_a7:
		"عرض sin(x)+cos(y) يستخدم الراديان كما في حساب التفاضل القياسي. cos(1)≈0.5403 وليس cos(1°).",
	tool_gradient_article:
		"تدرج دالة قياسية متعددة المتغيرات هو متجه مشتقاتها الجزئية الأولى. يشير إلى أسرع زيادة محلية ويؤسس للتحسين القائم على التدرج.",
	tool_gradient_references: "مراجع ويكيبيديا وأكاديمية خان حول التدرج متعدد المتغيرات.",
	tool_gradient_ref_wiki_label: "ويكيبيديا — التدرج",
	tool_gradient_ref_khan_label: "أكاديمية خان — التدرج",
};

export default ar;
