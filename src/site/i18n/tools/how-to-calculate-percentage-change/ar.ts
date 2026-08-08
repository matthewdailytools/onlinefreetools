/**
 * i18n tool shard (how-to-calculate-percentage-change / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_percentage_change_abs_note: 'التغير المطلق: {delta}',
  tool_percentage_change_article:
    'التغير النسبي يجيب: كم تحرّك المؤشر مقارنة بقاعدته؟ أدخل القيمة القديمة والجديدة. للتقارير التشغيلية، وليس بديلًا عن عائد الاستثمار.',
  tool_percentage_change_calculate: 'احسب',
  tool_percentage_change_decrease: 'نقصان',
  tool_percentage_change_description:
    'احسب نسبة الزيادة أو النقصان من قيمة قديمة إلى جديدة. الخطوات: أدخل القيمتين، طبّق (الجديد − القديم) / القديم × 100، ثم اقرأ الإشارة. مثال: 80 → 100 = +25%. مناسب لإيرادات شهرية وDAU والأسعار — وليس نقاط مئوية.',
  tool_percentage_change_example: 'مثال كامل: قديم 80، جديد 100 → Δ=20 → (20/80)×100 = زيادة 25%. هبوط: 100→80 = −20%.',
  tool_percentage_change_example_title: 'مثال',
  tool_percentage_change_faq_a1: 'نسبة التغير = (الجديد − القديم) / القديم × 100.',
  tool_percentage_change_faq_a2: 'القسمة على صفر غير معرّفة.',
  tool_percentage_change_faq_a3: 'لا. من 10% إلى 12% ارتفاع بنقطتين، لكن زيادة نسبية 20%.',
  tool_percentage_change_faq_a4: 'ROI يقارن الربح بتكلفة الاستثمار؛ التغير النسبي يقارن أي قيمة جديدة بقاعدة قديمة.',
  tool_percentage_change_faq_q1: 'ما صيغة التغير بالنسبة المئوية؟',
  tool_percentage_change_faq_q2: 'لماذا لا يجوز أن تكون القيمة القديمة صفرًا؟',
  tool_percentage_change_faq_q3: 'هل هي نفسها النقاط المئوية؟',
  tool_percentage_change_faq_q4: 'ما الفرق عن عائد الاستثمار ROI؟',
  tool_percentage_change_formula_body: 'نسبة التغير = (الجديد − القديم) / القديم × 100. نستخدم القديم بإشارته في المقام.',
  tool_percentage_change_formula_item_1: 'Δ = الجديد − القديم',
  tool_percentage_change_formula_item_2: 'النسبة = (Δ / القديم) × 100',
  tool_percentage_change_formula_item_3: 'القديم = 0 → غير معرّف (خطأ)',
  tool_percentage_change_formula_title: 'صيغة التغير النسبي',
  tool_percentage_change_how_body:
    'أدخل الأساس (القديم) ثم القيمة اللاحقة. نطرح ونقسم على القديم ونضرب في 100. الموجب زيادة والسالب نقصان.',
  tool_percentage_change_how_title: 'كيف يعمل',
  tool_percentage_change_increase: 'زيادة',
  tool_percentage_change_new_label: 'القيمة الجديدة',
  tool_percentage_change_no_change: 'بدون تغيير',
  tool_percentage_change_original_label: 'القيمة القديمة',
  tool_percentage_change_ref_wiki_label: 'ويكيبيديا — Relative change',
  tool_percentage_change_result_invalid: 'يجب أن تكون القيمة القديمة رقمًا غير صفري.',
  tool_percentage_change_result_label: 'التغير بالنسبة المئوية',
  tool_percentage_change_title: 'حاسبة التغير بالنسبة المئوية — من قيمة قديمة إلى جديدة',
  tool_percentage_change_usecase_1: 'إيراد شهري: GMV 80 الشهر الماضي مقابل 100 هذا الشهر → +25%.',
  tool_percentage_change_usecase_2: 'تحليل المنتج: المستخدمون اليوميون من 50 ألف إلى 55 ألف → +10%.',
  tool_percentage_change_usecase_3: 'تسعير: من 40 إلى 34 → −15% (وليس «6 نقاط مئوية»).',
  tool_percentage_change_usecases_title: 'سيناريوهات أعمال وبيانات',
};
export default ar;
