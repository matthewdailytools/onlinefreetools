/**
 * i18n tool shard (wcag-contrast-checker / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_wcag_contrast_checker_aa_large: 'AA نص كبير',
  tool_wcag_contrast_checker_aa_normal: 'AA نص عادي',
  tool_wcag_contrast_checker_aaa_large: 'AAA نص كبير',
  tool_wcag_contrast_checker_aaa_normal: 'AAA نص عادي',
  tool_wcag_contrast_checker_article:
    'حاسبة تباين WCAG بالاعتماد على اللمعان النسبي، شارات AA/AAA، معاينة مباشرة واقتراحات ألوان — كل ذلك محلياً في المتصفح.',
  tool_wcag_contrast_checker_bad_hex: 'أدخل ألوان HEX صالحة (#RGB أو #RRGGBB).',
  tool_wcag_contrast_checker_bg_label: 'الخلفية',
  tool_wcag_contrast_checker_check: 'تحقق',
  tool_wcag_contrast_checker_clear: 'مسح',
  tool_wcag_contrast_checker_copy: 'نسخ الملخص',
  tool_wcag_contrast_checker_copy_done: 'تم النسخ',
  tool_wcag_contrast_checker_desc: 'تحقق من نسبة التباين ومعايير AA/AAA — دون رفع الألوان.',
  tool_wcag_contrast_checker_description:
    'اختر لون النص والخلفية لرؤية نسبة تباين WCAG ونتيجة AA/AAA للنص العادي والكبير. الخطوات: اختر أو اكتب HEX، اضغط تحقق، اقرأ النسبة والشارات، بدّل الألوان أو جرّب الاقتراحات. مثال: #767676 على #ffffff ≈ 4.54:1 — ينجح AA للنص العادي ويفشل AAA للنص العادي. الألوان تبقى في متصفحك.',
  tool_wcag_contrast_checker_empty: 'نفّذ التحقق أولاً ثم انسخ.',
  tool_wcag_contrast_checker_example:
    'حمّل العينة: المقدمة #767676 على الخلفية #ffffff تعطي نحو 4.54:1. AA نص عادي ينجح (≥4.5:1)، AA نص كبير ينجح (≥3:1)، AAA نص عادي يفشل (≥7:1)، AAA نص كبير ينجح (≥4.5:1). بدّل الألوان لترى كيف تتغير النسبة.',
  tool_wcag_contrast_checker_example_title: 'مثال',
  tool_wcag_contrast_checker_fail: 'فشل',
  tool_wcag_contrast_checker_faq_a1:
    'AA للنص العادي يتطلب 4.5:1 على الأقل؛ AA للنص الكبير (18 pt عادي أو 14 pt عريض) 3:1؛ AAA للنص العادي 7:1؛ AAA للنص الكبير 4.5:1. هذه الصفحة تعرض الشارات الأربع دفعة واحدة.',
  tool_wcag_contrast_checker_faq_a2:
    'النص الكبير يُقرأ أسهل فيسمح بتباين أقل. WCAG يعتبره ≥18 pt عادي أو ≥14 pt عريض. المعاينة تعرض سطراً كبيراً وآخر عادياً للمقارنة.',
  tool_wcag_contrast_checker_faq_a3: 'لا. الحساب يتم بالكامل في متصفحك — قيم الألوان لا تُرفع.',
  tool_wcag_contrast_checker_faq_a4:
    'إذا انخفض التباين عن 4.5:1، قد يقترح أداة لون مقدمة أو خلفية أفتح أو أغمق يحقق AA للنص العادي. الاقتراحات نقطة بداية بمزج نحو الأبيض أو الأسود، وليست لوحة علامة تجارية نهائية.',
  tool_wcag_contrast_checker_faq_a5:
    'استخدم هذه الصفحة للتحقق من أي زوج نص/خلفية. للوحة علامة تجارية كاملة مع رموز دلالية، افتح أداة حزمة ألوان العلامة؛ يمكنك أيضاً أخذ عينات من صورة بأداة استخراج الألوان.',
  tool_wcag_contrast_checker_faq_q1: 'ما هي عتبات تباين WCAG؟',
  tool_wcag_contrast_checker_faq_q2: 'ما الذي يُعد نصاً كبيراً؟',
  tool_wcag_contrast_checker_faq_q3: 'هل تُرفع ألواني؟',
  tool_wcag_contrast_checker_faq_q4: 'كيف أستخدم اقتراحات الألوان؟',
  tool_wcag_contrast_checker_faq_q5: 'ما علاقتها برموز ألوان العلامة؟',
  tool_wcag_contrast_checker_fg_label: 'المقدمة',
  tool_wcag_contrast_checker_how_body:
    'حدّد لون النص والخلفية بالمنتقي أو بكتابة HEX. تحوّل الصفحة sRGB إلى لمعان نسبي، تحسب النسبة، وتعرض نجاح/فشل AA وAAA (نص عادي وكبير). بدّل الزوج، انسخ ملخصاً، أو طبّق اقتراحاً عند انخفاض التباين.',
  tool_wcag_contrast_checker_how_title: 'كيف يعمل',
  tool_wcag_contrast_checker_pass: 'نجاح',
  tool_wcag_contrast_checker_preview_label: 'معاينة مباشرة',
  tool_wcag_contrast_checker_preview_large: 'عينة نص كبير',
  tool_wcag_contrast_checker_preview_normal: 'عينة نص عادي',
  tool_wcag_contrast_checker_ratio_label: 'نسبة التباين',
  tool_wcag_contrast_checker_rules_body:
    'تباين WCAG يعتمد على اللمعان النسبي وليس درجة اللون وحدها. راجع هذه القواعد إذا بدت النسبة غير متوقعة.',
  tool_wcag_contrast_checker_rules_item_1:
    'اللمعان النسبي L يُستخرج من قنوات sRGB بعد منحنى linearization في WCAG. النسبة = (Lالأفتح + 0.05) / (Lالأغمق + 0.05).',
  tool_wcag_contrast_checker_rules_item_2:
    'العتبات: AA نص عادي 4.5:1، AA نص كبير 3:1، AAA نص عادي 7:1، AAA نص كبير 4.5:1. نسبة واحدة تغذي الشارات الأربع.',
  tool_wcag_contrast_checker_rules_item_3:
    'يدعم HEX sRGB معتم فقط (#RGB أو #RRGGBB). HEX غير صالح يظهر خطأ؛ مقدمة وخلفية متطابقتان تعطيان 1:1 وتفشلان كل المستويات.',
  tool_wcag_contrast_checker_rules_item_4: 'الخصوصية: تُعالج الألوان محلياً في هذا التبويب — لا شيء يُرسل للخادم.',
  tool_wcag_contrast_checker_rules_title: 'قواعد يجب معرفتها',
  tool_wcag_contrast_checker_sample: 'عينة',
  tool_wcag_contrast_checker_suggest_bg: 'جرّب خلفية {hex} مع هذا المقدمة لتحقيق AA للنص العادي.',
  tool_wcag_contrast_checker_suggest_fg: 'جرّب مقدمة {hex} على هذه الخلفية لتحقيق AA للنص العادي.',
  tool_wcag_contrast_checker_suggest_label: 'اقتراحات',
  tool_wcag_contrast_checker_suggest_none: 'يلبي AA للنص العادي بالفعل (4.5:1).',
  tool_wcag_contrast_checker_swap: 'تبديل',
  tool_wcag_contrast_checker_title: 'مدقق تباين WCAG — نسبة AA/AAA',
  tool_wcag_contrast_checker_usecase_1: 'تصميم واجهات: تحقق من النص والتسميات على خلفية العلامة قبل التسليم.',
  tool_wcag_contrast_checker_usecase_2: 'أزرار وشارات: راجع أبيض على لون أو العكس لـ AA عادي أو كبير.',
  tool_wcag_contrast_checker_usecase_3: 'الوضع الداكن: بدّل الأسطح الفاتحة/الداكنة وتأكد أن النص الثانوي يبقى ≥4.5:1 أو 3:1 للكبير.',
  tool_wcag_contrast_checker_usecases_title: 'متى يناسب',
};
export default ar;
