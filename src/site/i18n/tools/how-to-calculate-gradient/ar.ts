/**
 * i18n tool shard (how-to-calculate-gradient / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_gradient_article:
    'تدرج دالة قياسية متعددة المتغيرات هو متجه مشتقاتها الجزئية من الرتبة الأولى. هذه الصفحة ليست حاسبة ميل بين نقطتين.',
  tool_gradient_calculate: 'احسب ∇f',
  tool_gradient_desc:
    'احسب تدرج ∇f لحقل قياسي كمتجه المشتقات الجزئية. الخطوات: اشتق لكل متغير، شكّل ∇f، ثم قيّم عند نقطة. دالة العرض f(x,y)=x²y+3y → ∇f=(2xy, x²+3)؛ عند (1,2) → (4,4). يُستخدم في التحسين وتفسير الانحدار التدرجي في التعلم الآلي.',
  tool_gradient_description:
    'احسب تدرج ∇f لحقل قياسي كمتجه المشتقات الجزئية. الخطوات: اشتق لكل متغير، شكّل ∇f، ثم قيّم عند نقطة. دالة العرض f(x,y)=x²y+3y → ∇f=(2xy, x²+3)؛ عند (1,2) → (4,4). يُستخدم في التحسين وتفسير الانحدار التدرجي في التعلم الآلي.',
  tool_gradient_example: 'f(x,y)=x²y+3y. الجزئيات: ∂f/∂x=2xy، ∂f/∂y=x²+3. عند (1,2): ∇f=(4,4).',
  tool_gradient_example_title: 'مثال',
  tool_gradient_faq_a1: '∇f متجه المشتقات الجزئية ويشير إلى أسرع ارتفاع محلي.',
  tool_gradient_faq_a2: 'اشتق لكل متغير مع تثبيت الباقي، شكّل المتجه، ثم عوّض عند نقطة.',
  tool_gradient_faq_a3: 'نعم كائن رياضي واحد: ∇ لخسارة قياسية. الصفحة تشرح التعريف ولا تدرّب نموذجًا.',
  tool_gradient_faq_a4: 'لا. ميل الخط أداة أخرى؛ هنا ∇f متجه مشتقات جزئية.',
  tool_gradient_faq_q1: 'ما التدرج في التفاضل متعدد المتغيرات؟',
  tool_gradient_faq_q2: 'كيف أحسبه يدويًا؟',
  tool_gradient_faq_q3: 'هل هو نفسه «التدرج» في تعلم الآلة؟',
  tool_gradient_faq_q4: 'هل هذه حاسبة ميل بين نقطتين؟',
  tool_gradient_fn_hint: 'دالة العرض (ثابتة في الصندوق التفاعلي):',
  tool_gradient_formula_body: '∇f = (∂f/∂x₁, …, ∂f/∂xₙ). لمتغيرين: ∇f(x,y)=(∂f/∂x, ∂f/∂y).',
  tool_gradient_formula_item_1: 'احسب ∂f/∂xᵢ لكل متغير',
  tool_gradient_formula_item_2: 'شكّل المتجه ∇f',
  tool_gradient_formula_item_3: 'قيّم المكونات عند النقطة',
  tool_gradient_formula_item_4: 'عرض: f=x²y+3y → ∇f=(2xy, x²+3)',
  tool_gradient_formula_title: 'صيغة التدرج متعدد المتغيرات',
  tool_gradient_how_body: 'لدالة قياسية f، احسب كل مشتقة جزئية مع تثبيت الباقي، رتبها في ∇f، ثم عوّض الإحداثيات.',
  tool_gradient_how_title: 'كيف يعمل',
  tool_gradient_invalid_input: 'أدخل قيمًا عددية منتهية لـ x و y.',
  tool_gradient_ref_khan_label: 'Khan Academy — التدرج',
  tool_gradient_ref_wiki_label: 'ويكيبيديا — Gradient',
  tool_gradient_result_label: 'التدرج عند نقطتك',
  tool_gradient_result_note: 'تم تقييم f(x,y)=x²y+3y عند ({x}, {y}).',
  tool_gradient_title: 'حاسبة التدرج — ∇f متعدد المتغيرات (مشتقات جزئية)',
  tool_gradient_usecase_1: 'التحقق من مشتقات الواجب قبل خطوة التحسين.',
  tool_gradient_usecase_2: 'شرح الانحدار التدرجي: كل خطوة عكس ∇loss.',
  tool_gradient_usecase_3: 'حدس فيزيائي: ∇f يشير حيث يزداد الحقل القياسي بأسرع ما يمكن.',
  tool_gradient_usecases_title: 'تحسين وتعلم آلي',
  tool_gradient_x_label: 'x',
  tool_gradient_x_placeholder: 'مثل 1',
  tool_gradient_y_label: 'y',
  tool_gradient_y_placeholder: 'مثل 2',
};
export default ar;
