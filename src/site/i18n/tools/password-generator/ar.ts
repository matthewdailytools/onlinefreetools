/**
 * i18n tool shard (password-generator / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_password_generator_article:
    'أنشئ كلمات مرور عشوائية من مجموعات الأحرف التي تختارها باستخدام crypto.getRandomValues — للعروض السريعة أو حسابات مؤقتة أو تجربة قواعد الطول/charset. ليس مدير كلمات مرور ولا ضمان قوة.',
  tool_password_generator_charset_label: 'مجموعات الأحرف',
  tool_password_generator_clear: 'مسح',
  tool_password_generator_copy: 'نسخ',
  tool_password_generator_copy_done: 'تم النسخ',
  tool_password_generator_count_label: 'العدد (1–100)',
  tool_password_generator_desc:
    'كلمات مرور عشوائية مع خيارات الطول و charset — تُولَّد محليًا عبر crypto.getRandomValues.',
  tool_password_generator_description:
    'ولّد كلمات مرور عشوائية في متصفحك. خطوات: حدّد الطول (8–128)، فعّل أحرف كبيرة/صغيرة/أرقام/رموز، اختياري استبعاد الملتبسة، اضغط توليد، انسخ. مثال: 16 حرفًا بمزيج أحجام وأرقام ورموز. crypto.getRandomValues فقط — لا تخزين ولا رفع.',
  tool_password_generator_digits: 'أرقام',
  tool_password_generator_disclaimer:
    'مولّد للعرض والراحة — ليس خزنة كلمات مرور. للبنوك أو الحسابات الرئيسية استخدم مديرًا مخصصًا ومولّده. كلمات المرور تُنشأ محليًا ولا تُحفظ على خوادمنا.',
  tool_password_generator_empty_charset: 'فعّل مجموعة أحرف واحدة على الأقل (بعد الاستبعاد).',
  tool_password_generator_example:
    'طول 16 مع كل المجموعات قد يبدو `Xk9#mP2$vL4@nQ8!` — أحجام وأرقام ورموز. كل نقرة سلسلة جديدة؛ تحميل مثال = طول 16 وكل الخيارات.',
  tool_password_generator_example_title: 'مثال',
  tool_password_generator_exclude_ambiguous: 'استبعاد الملتبسة (0 O I l 1)',
  tool_password_generator_faq_a1:
    'لا. التوليد بالكامل في متصفحك. لا نسجّل ولا نخزّن ولا ننقل كلمات المرور التي تنشئها هنا.',
  tool_password_generator_faq_a2:
    'العشوائية من crypto.getRandomValues (CSPRNG) وليس Math.random. كلمات أطول بفئات أكثر تقاوم التخمين، لكن لا تبويب يعد «غير قابل للكسر» — اتبع سياسة مؤسستك واستخدم مديرًا للأسرار الإنتاجية.',
  tool_password_generator_faq_a3:
    'لا. هذه الصفحة تنشئ سلاسل عشوائية جديدة فقط. لا تستطيع تدقيق أو كسر أو استرجاع كلمات مرور موجودة.',
  tool_password_generator_faq_a4:
    'يزيل أحرفًا متشابهة بصريًا (0/O، 1/l/I) لتسهيل القراءة أو الكتابة — على حساب charset أصغر قليلًا.',
  tool_password_generator_faq_a5:
    'حتى 100 كلمة مرور لكل نقرة، واحدة لكل سطر. اضغط توليد مرة أخرى للدفعة التالية.',
  tool_password_generator_faq_q1: 'هل تُخزَّن كلمات المرور أو تُرسل للخادم؟',
  tool_password_generator_faq_q2: 'ما مدى قوة هذه الكلمات؟',
  tool_password_generator_faq_q3: 'هل يمكن للأداة كسر كلمة مروري الحالية؟',
  tool_password_generator_faq_q4: 'ماذا يفعل «استبعاد الملتبسة»؟',
  tool_password_generator_faq_q5: 'كم كلمة مرور يمكن توليدها دفعة واحدة؟',
  tool_password_generator_generate: 'توليد',
  tool_password_generator_how_body:
    'اضبط الطول، اختر فئات الأحرف، اختياري استبعد الرموز الملتبسة، حدّد العدد ثم توليد. كل حرف يُختار بـ crypto.getRandomValues من المجموعة المدمجة. انسخ القائمة — لا شيء يبقى بعد مغادرة الصفحة.',
  tool_password_generator_how_item_1: 'اضبط الطول بالشريط.',
  tool_password_generator_how_item_2: 'حدّد فئات الأحرف؛ اختياريًا استبعد الأحرف المتشابهة.',
  tool_password_generator_how_item_3: 'حدد عدد كلمات المرور ثم انقر «توليد».',
  tool_password_generator_how_item_4: 'انسخ صفًا واحدًا أو الكل واحفظها في مدير كلمات مرور.',
  tool_password_generator_how_title: 'كيف يعمل',
  tool_password_generator_length_label: 'الطول',
  tool_password_generator_lower: 'أحرف صغيرة',
  tool_password_generator_output_label: 'كلمات المرور',
  tool_password_generator_rules_body:
    'قواعد charset ومصدر العشوائية وحدود صريحة — اقرأ قبل استخدام المخرجات لحساب حقيقي.',
  tool_password_generator_rules_item_1:
    'مجموعات: A–Z، a–z، 0–9 ورموز افتراضية. يجب أن تبقى مجموعة واحدة على الأقل بعد التبديل والاستبعاد.',
  tool_password_generator_rules_item_2:
    'الفهرس العشوائي يعتمد على بايتات crypto.getRandomValues لا على Math.random، ويجري تجاهل البايتات التي تُحدث انحيازًا في باقي القسمة، فتبقى احتمالية كل حرف في المجموعة متساوية.',
  tool_password_generator_rules_item_3:
    'ليس فرض تركيب NIST (بلا قاعدة «واحد من كل فئة»). فعّل المجموعات يدويًا.',
  tool_password_generator_rules_item_4:
    'الخصوصية: توليد محلي فقط؛ امسح المخرجات على أجهزة مشتركة.',
  tool_password_generator_rules_title: 'قواعد يجب أن تتوقعها',
  tool_password_generator_sample: 'تحميل مثال',
  tool_password_generator_symbols: 'رموز',
  tool_password_generator_title: 'مولّد كلمات مرور عشوائية — إنشاء كلمات مرور محليًا',
  tool_password_generator_upper: 'أحرف كبيرة',
  tool_password_generator_usecase_1: 'إنشاء credential لمرة واحدة لتسجيل staging ستدوره قريبًا.',
  tool_password_generator_usecase_2: 'نمذجة نماذج تسجيل تحتاج كلمات مرور قوية للاختبار في QA.',
  tool_password_generator_usecase_3: 'مقارنة تأثير الطول والرموز على القراءة قبل تحديث سياسة الفريق.',
  tool_password_generator_usecases_title: 'حالات مناسبة',
};
export default ar;
