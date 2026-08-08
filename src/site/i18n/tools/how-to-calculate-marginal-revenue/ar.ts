/**
 * i18n tool shard (how-to-calculate-marginal-revenue / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_marginal_revenue_article: 'الإيراد الحدي هو تغيّر الإيراد الكلي عند تغيّر الكمية. تعرض هذه الحاسبة الاشتقاق المتقطع بين نقطتين.',
  tool_marginal_revenue_calculate: 'احسب MR',
  tool_marginal_revenue_description:
    'احسب الإيراد الحدي بالمعادلة MR = ΔTR / ΔQ. العملية: أدخل الكمية والإيراد الكلي عند نقطتين، احسب ΔTR وΔQ ثم اقسم. مثال: الكمية 10→11 والإيراد 1000→1080 → MR = 80. للتعليم فقط — ليست نصيحة تسعير.',
  tool_marginal_revenue_detail_tpl: 'ΔTR = {dTR}، ΔQ = {dQ} → MR = {mr}',
  tool_marginal_revenue_disclaimer: 'هذه الحاسبة لتعلّم مفاهيم الاقتصاد الجزئي. ليست نصيحة أعمال أو تسعير أو استثمار.',
  tool_marginal_revenue_example: 'مثال: Q₁ = 10، TR₁ = 1000؛ Q₂ = 11، TR₂ = 1080 → ΔTR = 80، ΔQ = 1 → MR = 80.',
  tool_marginal_revenue_example_title: 'مثال',
  tool_marginal_revenue_faq_a1: 'لا. هذه الأداة لا تقدّم نصيحة تسعير أو إنتاج؛ يلزم أيضًا التكلفة الحدية وقيود أخرى.',
  tool_marginal_revenue_faq_a2: 'MR = ΔTR / ΔQ حيث ΔTR = TR₂ − TR₁ وΔQ = Q₂ − Q₁. اشتقاق متقطع وليس مشتقة مستمرة.',
  tool_marginal_revenue_faq_a3: 'MR غير معرّف إن لم تتغير الكمية. اختر كميتين مختلفتين.',
  tool_marginal_revenue_faq_a4:
    'الإيراد المتوسط هو TR / Q عند مستوى إنتاج. الحدي هو تغيّر TR عند تغيّر Q؛ يتطابقان في حالات خاصة فقط.',
  tool_marginal_revenue_faq_q1: 'هل MR الموجب يعني زيادة الإنتاج؟',
  tool_marginal_revenue_faq_q2: 'كيف يُشتق الإيراد الحدي هنا؟',
  tool_marginal_revenue_faq_q3: 'ماذا لو كانت ΔQ صفرًا؟',
  tool_marginal_revenue_faq_q4: 'ما الفرق عن الإيراد المتوسط؟',
  tool_marginal_revenue_formula_body: 'حسب التعريف يقيس الإيراد الحدي تغيّر الإيراد الكلي عند تغيّر الكمية. لنقطتين ملاحظتين:',
  tool_marginal_revenue_formula_item_1: 'ΔTR = TR₂ − TR₁ (تغيّر الإيراد الكلي)',
  tool_marginal_revenue_formula_item_2: 'ΔQ = Q₂ − Q₁ (تغيّر الكمية)',
  tool_marginal_revenue_formula_item_3: 'MR = ΔTR / ΔQ عندما ΔQ ≠ 0',
  tool_marginal_revenue_formula_item_4:
    'الخطوة المتقطعة تقارب متوسط MR على الفترة؛ النماذج المستمرة تستخدم dTR/dQ. MR السالب يعني انخفاض الإيراد مع ارتفاع الكمية.',
  tool_marginal_revenue_formula_title: 'اشتقاق الصيغة',
  tool_marginal_revenue_how_body:
    'أدخل الكمية والإيراد الكلي للمستوى 1 ثم المستوى 2. تُحسب ΔTR = TR2 − TR1 وΔQ = Q2 − Q1 ثم MR = ΔTR / ΔQ في المتصفح.',
  tool_marginal_revenue_how_title: 'كيف يعمل',
  tool_marginal_revenue_q1_label: 'الكمية (Q₁)',
  tool_marginal_revenue_q1_placeholder: 'مثل 10',
  tool_marginal_revenue_q2_label: 'الكمية (Q₂)',
  tool_marginal_revenue_q2_placeholder: 'مثل 11',
  tool_marginal_revenue_quantity_label: 'الكمية',
  tool_marginal_revenue_ref_investopedia_label: 'Investopedia — الإيراد الحدي (MR)',
  tool_marginal_revenue_ref_openstax_label: 'OpenStax — مبادئ الاقتصاد الجزئي (المنافسة)',
  tool_marginal_revenue_references: 'مدخل Investopedia عن الإيراد الحدي؛ معالجة تمهيدية لـ MR = ΔTR/ΔQ (مثل OpenStax).',
  tool_marginal_revenue_result_label: 'الإيراد الحدي',
  tool_marginal_revenue_revenue_label: 'الإيراد الكلي',
  tool_marginal_revenue_title: 'حاسبة الإيراد الحدي — الصيغة ΔTR / ΔQ',
  tool_marginal_revenue_tr1_label: 'الإيراد الكلي (TR₁)',
  tool_marginal_revenue_tr1_placeholder: 'مثل 1000',
  tool_marginal_revenue_tr2_label: 'الإيراد الكلي (TR₂)',
  tool_marginal_revenue_tr2_placeholder: 'مثل 1080',
  tool_marginal_revenue_usecase_1: 'واجبات الاقتصاد: التحقق من جدول كمية/إيراد بمستويين.',
  tool_marginal_revenue_usecase_2: 'تقدير تقريبي: تغيّر الإيراد عند زيادة الإنتاج وحدة واحدة.',
  tool_marginal_revenue_usecase_3: 'مقارنة الإيراد الحدي بالمتوسط في الاقتصاد الجزئي التمهيدي.',
  tool_marginal_revenue_usecases_title: 'متى تستخدمه',
  tool_marginal_revenue_zero_dq: 'ΔQ = 0 — يجب أن تختلف الكمية بين النقطتين.',
};
export default ar;
