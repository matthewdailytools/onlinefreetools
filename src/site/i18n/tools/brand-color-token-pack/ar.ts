/**
 * i18n tool shard (brand-color-token-pack / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_brand_color_token_pack_article:
    'لون أساس واحد للعلامة يتحول إلى حزمة رموز كاملة: HEX وRGB وHSL وOKLCH، ومقياس 50–950، وأزواج نص أسود/أبيض لكل درجة، ومتغيرات CSS أو JSON قابلة للنسخ — كل ذلك محليًا في المتصفح.',
  tool_brand_color_token_pack_bad_hex: 'أدخل HEX صالحًا من 3 أو 6 أرقام (مثل #2563EB).',
  tool_brand_color_token_pack_base_label: 'اللون الأساسي',
  tool_brand_color_token_pack_clear: 'مسح',
  tool_brand_color_token_pack_contrast_col: 'النص',
  tool_brand_color_token_pack_copy_css: 'نسخ CSS',
  tool_brand_color_token_pack_copy_done: 'تم النسخ',
  tool_brand_color_token_pack_copy_json: 'نسخ JSON',
  tool_brand_color_token_pack_desc:
    'لون أساس واحد → HEX/RGB/HSL/OKLCH، مقياس 50–950، أزواج تباين، متغيرات CSS — محلي.',
  tool_brand_color_token_pack_description:
    'ابنِ حزمة رموز ألوان العلامة من لون أساس واحد في المتصفح. الخطوات: اختر الأساس (HEX أو منتقي الألوان)، اعرض HEX/RGB/HSL/OKLCH، أنشئ مقياس 50–950 مع أزواج نص أسود/أبيض لكل درجة، ثم انسخ متغيرات CSS أو JSON. يُحمَّل عند الفتح اللون الأزرق النموذجي #2563eb — لا يُرفع أي شيء.',
  tool_brand_color_token_pack_empty: 'أنشئ الرموز أولًا ثم انسخ CSS أو JSON.',
  tool_brand_color_token_pack_example:
    'حمّل النموذج (#2563EB). يعرض قسم المساحات HEX وRGB وHSL وOKLCH للأساس؛ وتُظهر الشبكة 50–950 مع نص أسود أو أبيض موصى به ونسبة تباين. نسخ CSS يعطي :root { --color-50: …; … --color-950: …; } جاهزًا لورقة الأنماط.',
  tool_brand_color_token_pack_example_title: 'مثال',
  tool_brand_color_token_pack_faq_a1: 'لا. حساب الألوان والتصدير يتم بالكامل في هذا التبويب — لا تُرسل ألوانك إلى خادم.',
  tool_brand_color_token_pack_faq_a2:
    'الدرجة 500 تطابق لونك الأساسي. الدرجات الأفتح (50–400) تمزج مع الأبيض؛ والأغمق (600–950) مع الأسود. المزج خطي في sRGB للحفاظ على ثبات اللون.',
  tool_brand_color_token_pack_faq_a3:
    'كل عينة تقارن النص الأسود والأبيض على ذلك الخلفية وتختار الأعلى تباين WCAG. تُظهر التسميات النسبة وما إذا كان النص العادي يلبي AA (4.5:1) أو AA للنص الكبير (3:1).',
  tool_brand_color_token_pack_faq_a4:
    'نسخ CSS يُخرج خصائص :root (--color-50 إلى --color-950). نسخ JSON يقدم نفس المقياس مع مساحات الأساس كبيانات منظمة لرموز التصميم.',
  tool_brand_color_token_pack_faq_a5:
    'هذه اقتراحات سريعة أسود/أبيض لكل درجة. لأزواج مخصصة أو مستويات WCAG دقيقة، افتح فاحص تباين WCAG والصق HEX أي عينة.',
  tool_brand_color_token_pack_faq_q1: 'هل يغادر لوني المتصفح؟',
  tool_brand_color_token_pack_faq_q2: 'كيف يُبنى مقياس 50–950؟',
  tool_brand_color_token_pack_faq_q3: 'ماذا تعني أعمدة التباين؟',
  tool_brand_color_token_pack_faq_q4: 'ماذا يتضمن نسخ CSS وJSON؟',
  tool_brand_color_token_pack_faq_q5: 'متى أستخدم فاحص التباين؟',
  tool_brand_color_token_pack_generate: 'إنشاء',
  tool_brand_color_token_pack_how_body:
    'أدخل أو اختر لونًا أساسيًا للعلامة. تعرض الصفحة HEX وRGB وHSL وOKLCH، ثم تبني مقياسًا من 11 درجة (50–950) مع معاينة واجهة. كل عينة توصي بنص أسود أو أبيض ونسبة تباين. انسخ متغيرات CSS أو JSON عندما يناسبك المقياس — كل المعالجة محلية.',
  tool_brand_color_token_pack_how_title: 'كيف يعمل',
  tool_brand_color_token_pack_preview_label: 'معاينة الواجهة',
  tool_brand_color_token_pack_rules_body: 'ما يمكن توقعه من المقياس ومساحات اللون وتلميحات التباين والخصوصية.',
  tool_brand_color_token_pack_rules_item_1:
    'الدرجة 500 هي أساسك. ما دونها يُفتح بالمزج مع الأبيض؛ وما فوقها يُغمق بالمزج مع الأسود (مزج خطي في sRGB).',
  tool_brand_color_token_pack_rules_item_2:
    'يعرض قسم الأساس HEX وRGB وHSL وOKLCH لنفس اللون. OKLCH يستخدم تحويل sRGB → خطي → OKLab لمقارنته بصيغة CSS الحديثة.',
  tool_brand_color_token_pack_rules_item_3:
    'كل عينة توصي بنص أسود أو أبيض — أيهما أعلى تباينًا على ذلك الخلفية. النسب تتبع السطوع النسبي WCAG؛ تسميات AA إرشادية فقط.',
  tool_brand_color_token_pack_rules_item_4: 'الخصوصية: الإنشاء والمعاينة والنسخ محليًا في هذا التبويب — لا رفع لألوان العلامة.',
  tool_brand_color_token_pack_rules_title: 'قواعد يجب أن تعرفها',
  tool_brand_color_token_pack_sample: 'نموذج',
  tool_brand_color_token_pack_scale_label: 'مقياس اللون (50–950)',
  tool_brand_color_token_pack_spaces_label: 'مساحات اللون (الأساس)',
  tool_brand_color_token_pack_text_on: 'نص على الأساس',
  tool_brand_color_token_pack_title: 'حزمة رموز ألوان العلامة — مقياس HEX HSL OKLCH',
  tool_brand_color_token_pack_ui_body: 'نص معاينة على لون العلامة الأساسي مع لون نص مقترح.',
  tool_brand_color_token_pack_ui_btn: 'إجراء رئيسي',
  tool_brand_color_token_pack_ui_title: 'عنوان المعاينة',
  tool_brand_color_token_pack_usecase_1:
    'أنظمة التصميم: ابدأ من HEX علامة واحد وأخرج مقياس 50–950 متسقًا مع متغيرات CSS للمكوّنات.',
  tool_brand_color_token_pack_usecase_2:
    'الوضع الداكن: راجع درجات فاتحة (50–300) للأسطح ودرجات عميقة (700–950) لقرارات النص على اللون.',
  tool_brand_color_token_pack_usecase_3:
    'التسليم للمطور: انسخ رموز JSON أو خصائص CSS بدل إعادة كتابة HEX من لقطة شاشة.',
  tool_brand_color_token_pack_usecases_title: 'متى يناسب',
};
export default ar;
