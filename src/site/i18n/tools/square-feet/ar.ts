/**
 * i18n tool shard (square-feet / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_squarefeet_article:
    'قدّر مساحة مستطيلة من الطول والعرض وحوّل بين القدم المربع والمتر المربع. مناسب لمقارنة الإعلانات وتقدير الأرضيات والطلاء — وليس تقييم عقار.',
  tool_squarefeet_calculate: 'حوّل المساحة',
  tool_squarefeet_description:
    'حوّل مساحة الغرفة بين القدم المربع والمتر المربع للإعلانات والتشطيب. الخطوات: اختر قدم/متر/بوصة، أدخل الطول × العرض، احسب المساحة، ثم اعرض ft² و m² بعامل NIST 1 ft² = 0.09290304 m². مثال: شقة 850 قدمًا مربعًا ≈ 78.97 م².',
  tool_squarefeet_example:
    'إعلان: شقة 850 قدمًا مربعًا → 850 × 0.09290304 ≈ 78.97 م². غرفة: 10 ft × 12 ft = 120 sq ft ≈ 11.15 م².',
  tool_squarefeet_example_title: 'مثال',
  tool_squarefeet_faq_a1: 'بالضبط 1 ft² = 0.09290304 m² (إرشاد SI / NIST).',
  tool_squarefeet_faq_a2: 'لا. الأداة تحوّل مساحة مستطيل مستوية فقط.',
  tool_squarefeet_faq_a3: 'لا. تحويل المساحة ليس تقييمًا.',
  tool_squarefeet_faq_a4: 'قسّمها إلى مستطيلات، حوّل كلًا منها ثم اجمع.',
  tool_squarefeet_faq_q1: 'ما عامل التحويل بين ft² و m²؟',
  tool_squarefeet_faq_q2: 'هل تميّز المساحة الصافية عن الإجمالية؟',
  tool_squarefeet_faq_q3: 'هل تقدّر سعر العقار؟',
  tool_squarefeet_faq_q4: 'ماذا عن الغرف على شكل L؟',
  tool_squarefeet_formula_body:
    'المساحة (ft²) = الطول (ft) × العرض (ft). بالمتر: ft² = (L×W) ÷ 0.09290304. بالبوصة: اقسم كل ضلع على 12. العامل: 1 ft² = 0.09290304 m².',
  tool_squarefeet_formula_item_1: 'إدخال بالأقدام: المساحة_ft² = L × W',
  tool_squarefeet_formula_item_2: 'إدخال بالمتر: المساحة_ft² = (L × W) / 0.09290304',
  tool_squarefeet_formula_item_3: 'إدخال بالبوصة: المساحة_ft² = (L/12) × (W/12)',
  tool_squarefeet_formula_item_4: 'm² = المساحة_ft² × 0.09290304 (NIST / SI)',
  tool_squarefeet_formula_title: 'صيغة المساحة وعامل التحويل',
  tool_squarefeet_how_body:
    'اختر وحدة القياس، اضرب الطول × العرض بعد التحويل إلى أقدام، ثم حوّل إلى م² بالعامل الدقيق. تُرفض القيم الفارغة أو السالبة.',
  tool_squarefeet_how_title: 'كيف يعمل',
  tool_squarefeet_invalid_input: 'أدخل طولًا وعرضًا موجبين.',
  tool_squarefeet_length_label: 'الطول',
  tool_squarefeet_length_placeholder: 'أدخل الطول',
  tool_squarefeet_ref_nist_label: 'NIST SP 811 — دليل نظام الوحدات الدولي (SI)',
  tool_squarefeet_result_note: 'تقريب إلى منزلتين. العامل: 1 ft² = 0.09290304 m².',
  tool_squarefeet_result_sqm: '≈ {sqm} م²',
  tool_squarefeet_title: 'تحويل القدم المربع إلى متر مربع — للمنازل والتشطيب',
  tool_squarefeet_unit_group_label: 'وحدات الإدخال',
  tool_squarefeet_usage: 'اختر الوحدة ثم أدخل الطول والعرض للحصول على القدم المربع وما يعادله بالمتر المربع.',
  tool_squarefeet_usage_title: 'الاستخدام',
  tool_squarefeet_usecase_1: 'مقارنة إعلان أمريكي بالقدم المربع مع إعلانات محلية بالمتر المربع.',
  tool_squarefeet_usecase_2: 'تقدير أرضيات غرفة مستطيلة قبل طلب المواد.',
  tool_squarefeet_usecase_3: 'تقدير تقريبي للطلاء عند اختلاط الوحدات في المخطط.',
  tool_squarefeet_usecases_title: 'متى يفيدك',
  tool_squarefeet_width_label: 'العرض',
  tool_squarefeet_width_placeholder: 'أدخل العرض',
};
export default ar;
