/**
 * i18n tool shard (smart-website-color-scheme / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_smart_website_color_scheme_aa_fail: 'أقل من AA',
  tool_smart_website_color_scheme_aa_pass: 'AA ناجح',
  tool_smart_website_color_scheme_add_theme: 'إضافة سمة',
  tool_smart_website_color_scheme_article:
    'ابنِ نظام ألوان لموقعك من لون علامة واحد: محايدات مشتركة، رموز دلالية (روابط محايدة وحالات ثابتة)، معاينة واجهة فاتحة، فحص تباين ذاتي، وCSS لـ :root جاهز للنسخ — كل ذلك محليًا في المتصفح.',
  tool_smart_website_color_scheme_bad_hex: 'أدخل لون HEX صالحًا من 3 أو 6 خانات (مثل #0F6E8C).',
  tool_smart_website_color_scheme_bad_id:
    'معرّف السمة يجب أن يكون فريدًا، من 1–32 حرفًا: أحرف وأرقام و- أو _.',
  tool_smart_website_color_scheme_check_muted: 'نص ثانوي على السطح',
  tool_smart_website_color_scheme_check_on_action: 'نص على لون الإجراء (on-action)',
  tool_smart_website_color_scheme_check_text: 'نص أساسي على السطح',
  tool_smart_website_color_scheme_checks_label: 'فحص التباين الذاتي (السمة النشطة)',
  tool_smart_website_color_scheme_clear: 'مسح',
  tool_smart_website_color_scheme_col_role: 'الدور',
  tool_smart_website_color_scheme_col_token: 'الرمز',
  tool_smart_website_color_scheme_col_value: 'القيمة',
  tool_smart_website_color_scheme_copy_css: 'نسخ CSS',
  tool_smart_website_color_scheme_copy_done: 'تم النسخ',
  tool_smart_website_color_scheme_copy_json: 'نسخ JSON',
  tool_smart_website_color_scheme_cp_brand: 'العلامة',
  tool_smart_website_color_scheme_cp_btn: 'زر بحد',
  tool_smart_website_color_scheme_cp_card_body:
    'نص البطاقة يستخدم لونًا خافتًا. الروابط تبقى محايدة — وليست لون إجراء العلامة.',
  tool_smart_website_color_scheme_cp_card_title: 'عنوان البطاقة',
  tool_smart_website_color_scheme_cp_err: 'رسالة الخطأ تستخدم danger لا لون العلامة.',
  tool_smart_website_color_scheme_cp_link: 'رابط ذو صلة',
  tool_smart_website_color_scheme_cp_nav: 'عنصر تنقل',
  tool_smart_website_color_scheme_cp_side1: 'الشريط الجانبي',
  tool_smart_website_color_scheme_cp_side2: 'نشط',
  tool_smart_website_color_scheme_desc:
    'نظام ألوان الموقع: محايدات + رموز CSS دلالية، روابط محايدة وحالات ثابتة — محليًا.',
  tool_smart_website_color_scheme_description:
    'أنشئ نظام ألوان للموقع داخل المتصفح. اختر HEX للعلامة (مثال تركوازي #0F6E8C)، واحصل على محايدات مشتركة وaction/hover/soft/focus وروابط محايدة وألوان حالة ثابتة ومعاينة واجهة وفحوصات AA، ثم انسخ CSS لـ :root أو JSON. قائم على قواعد — ليس ذكاءً اصطناعيًا سحابيًا؛ لا يُرفع شيء.',
  tool_smart_website_color_scheme_empty: 'أنشئ النظام أولًا ثم انسخ CSS أو JSON.',
  tool_smart_website_color_scheme_example:
    'حمّل المثال (معرّف السمة teal و#0F6E8C). المعاينة تعرض سطحًا أبيض وتظليلاً تركوازيًا خفيفًا للعنصر النشط (بدون شريط أيسر) وروابط نص محايدة وسطر خطأ أحمر. الطبقة الدلالية تربط --link بلون النص (لا --action). نسخ CSS يعطي محايدات :root مع تجاوزات html[data-theme="teal"].',
  tool_smart_website_color_scheme_example_title: 'مثال',
  tool_smart_website_color_scheme_faq_a1:
    '«ذكي» هنا يعني قواعد حتمية: المحايدات ثابتة، العلامة تشتق action/hover/soft/focus، الروابط تبقى محايدة، وألوان الحالة لا تتبع العلامة. لا استدعاء لنموذج ولا رفع — الحساب يجري في هذا التبويب.',
  tool_smart_website_color_scheme_faq_a2:
    'الروابط الافتراضية تستخدم ألوان النص حتى لا تتحول الصفحة إلى جدار روابط بلون العلامة. لون العلامة مخصص للإجراءات والتحديد وحلقات التركيز والخلفيات soft الخفيفة.',
  tool_smart_website_color_scheme_faq_a3:
    'ألوان danger وsuccess وwarning وinfo تبقى ثابتة عبر السمات. علامة كهرمانية لا يجب أن تصبح لون الخطأ، وإلا تبدو الواجهة كتنبيه دائم.',
  tool_smart_website_color_scheme_faq_a4:
    'استخدم توليد مقياس ألوان العلامة عندما تحتاج سلّمًا 50–950 أو قوائم HEX/HSL/OKLCH. هذه الصفحة تقدّم نظامًا دلاليًا فاتحًا كاملًا (bg/surface/link/action/status) جاهزًا للصق.',
  tool_smart_website_color_scheme_faq_a5:
    'الفحص الذاتي يغطي بضعة أزواج مفتاحية في السمة النشطة. لأي زوج عشوائي أو مستوى AAA افتح فاحص تباين WCAG والصق HEX أي رمز.',
  tool_smart_website_color_scheme_faq_q1: 'هل «ذكي» يعني توليد ألوان بالذكاء الاصطناعي؟',
  tool_smart_website_color_scheme_faq_q2: 'لماذا الروابط ليست بلون العلامة؟',
  tool_smart_website_color_scheme_faq_q3: 'لماذا لا تتغير ألوان الحالة مع السمة؟',
  tool_smart_website_color_scheme_faq_q4: 'متى أستخدم توليد مقياس ألوان العلامة بدلًا من هذه؟',
  tool_smart_website_color_scheme_faq_q5: 'ما مدى اكتمال فحص التباين الذاتي؟',
  tool_smart_website_color_scheme_generate: 'إنشاء',
  tool_smart_website_color_scheme_how_body:
    'أدخل حتى أربع سمات علامة (معرّف + HEX). تُحفظ سلّم محايدات مشترك، وتُشتق رموز الإجراء من كل علامة، وتُربط الأدوار الدلالية (بما فيها الروابط المحايدة والحالات الثابتة)، وتُرسم معاينة واجهة فاتحة، وتُجرى فحوصات AA، ويمكنك نسخ متغيرات CSS أو JSON — كله محليًا.',
  tool_smart_website_color_scheme_how_title: 'طريقة العمل',
  tool_smart_website_color_scheme_max_themes: 'يمكنك إضافة حتى 4 سمات تشترك في نفس المحايدات.',
  tool_smart_website_color_scheme_preview_label: 'معاينة واجهة فاتحة',
  tool_smart_website_color_scheme_primitives_label: 'الأساسيات (السمة النشطة + محايدات مشتركة)',
  tool_smart_website_color_scheme_remove_theme: 'إزالة',
  tool_smart_website_color_scheme_role_action: 'إجراء / إبراز العلامة',
  tool_smart_website_color_scheme_role_bg: 'خلفية الصفحة / القسم',
  tool_smart_website_color_scheme_role_border: 'حدود وفواصل',
  tool_smart_website_color_scheme_role_focus: 'حلقة التركيز',
  tool_smart_website_color_scheme_role_link: 'روابط افتراضية (محايدة)',
  tool_smart_website_color_scheme_role_muted: 'نص ثانوي',
  tool_smart_website_color_scheme_role_on_action: 'نص على إجراء مصمت',
  tool_smart_website_color_scheme_role_status: 'حالة (منفصلة عن العلامة)',
  tool_smart_website_color_scheme_role_surface: 'سطح مرتفع / بطاقات',
  tool_smart_website_color_scheme_role_text: 'نص أساسي / قوي',
  tool_smart_website_color_scheme_rules_body:
    'طبقات الرموز، الرابط ≠ الإجراء، استقلال الحالة، تلميحات التباين، والخصوصية.',
  tool_smart_website_color_scheme_rules_item_1:
    'الأساسيات تحفظ المحايدات الخام ومشتقات العلامة. الدلالات تسمّي الغرض (bg وsurface وlink وaction…). يجب أن تشير المكوّنات إلى الدلالات فقط.',
  tool_smart_website_color_scheme_rules_item_2:
    'العلامة → --action؛ التمرير يغمّق حوالي 22٪؛ soft ≈ شفافية 10٪؛ focus-ring ≈ شفافية 40٪؛ --bg محايد ملوّن بلطف.',
  tool_smart_website_color_scheme_rules_item_3:
    'الروابط تُربط بـ text / text-strong (محايد). لا تربط --link الافتراضي بـ --action.',
  tool_smart_website_color_scheme_rules_item_4:
    'danger / success / warning / info تبقى ثابتة عبر السمات حتى لا تحل العلامة محل دلالة الخطأ.',
  tool_smart_website_color_scheme_rules_item_5:
    'الخصوصية: الإنشاء والمعاينة والنسخ للحافظة تجري في هذا التبويب. لا يُرفع لون العلامة.',
  tool_smart_website_color_scheme_rules_title: 'قواعد متوقعة',
  tool_smart_website_color_scheme_sample: 'تحميل مثال',
  tool_smart_website_color_scheme_semantics_label: 'الدلالات (السمة النشطة)',
  tool_smart_website_color_scheme_theme_hex_ph: '#0F6E8C',
  tool_smart_website_color_scheme_theme_id_ph: 'معرّف السمة',
  tool_smart_website_color_scheme_themes_hint:
    'محايدات وألوان حالة مشتركة؛ كل سمة تستبدل فقط رموز مشتقات العلامة. الحد الأقصى 4 سمات.',
  tool_smart_website_color_scheme_themes_label: 'سمات العلامة',
  tool_smart_website_color_scheme_title: 'نظام ألوان الموقع — رموز CSS دلالية',
  tool_smart_website_color_scheme_usecase_1:
    'واجهة أدوات أو SaaS: هيكل فاتح مقروء مع إبراز العلامة على التحديد والتركيز لا على كل رابط.',
  tool_smart_website_color_scheme_usecase_2:
    'إعادة تمييز صفحة هبوط: بدّل علامات html[data-theme] مع الإبقاء على الهيكل المحايد وألوان الحالة.',
  tool_smart_website_color_scheme_usecase_3:
    'تسليم تصميم→تطوير: الصق متغيرات CSS لـ :root بدل قوائم HEX من لقطات الشاشة.',
  tool_smart_website_color_scheme_usecases_title: 'مناسب لـ',
  tool_smart_website_color_scheme_warn_contrast:
    'تحذير: النص على لون الإجراء أقل من 4.5:1 — غمّق العلامة أو عدّل --on-action قبل نشر أزرار مصمتة.',
};
export default ar;
