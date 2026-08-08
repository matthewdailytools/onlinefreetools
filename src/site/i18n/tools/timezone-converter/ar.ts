/**
 * i18n tool shard (timezone-converter / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_timezone_converter_article:
    'اختر لحظة في منطقة IANA مصدر، ثم اعرض الوقت نفسه في UTC ونيويورك ولندن وTokyo ومناطق أخرى. للفرق عن بُعد ومطابقة السجلات وساعة العالم — عبر Intl محليًا دون رفع.',
  tool_timezone_converter_clear: 'مسح',
  tool_timezone_converter_col_local: 'التاريخ والوقت المحلي',
  tool_timezone_converter_col_offset: 'إزاحة UTC',
  tool_timezone_converter_col_zone: 'المنطقة الزمنية',
  tool_timezone_converter_compare_zones: 'قارِن في هذه المناطق',
  tool_timezone_converter_convert: 'تحويل',
  tool_timezone_converter_desc:
    'قارِن لحظة واحدة بين مناطق IANA مع توضيح التوقيت الصيفي — محلي في المتصفح.',
  tool_timezone_converter_description:
    'حوّل تاريخًا ووقتًا من منطقة IANA إلى عدة مناطق في متصفحك. العملية: أدخل الوقت المحلي، اختر المنطقة المصدر، حدّد مناطق المقارنة، ثم تحويل. مثال: 2026-06-15 14:30 Los Angeles → صفوف New York ولندن وTokyo وUTC مع الإزاحة. يوضح فجوات DST؛ ليس حزمة اجتماع للتصدير.',
  tool_timezone_converter_error_dst_gap:
    'هذا الوقت المحلي غير موجود في المنطقة المصدر (ساعة مُحذوفة عند بداية التوقيت الصيفي). اختر الساعة المجاورة.',
  tool_timezone_converter_error_empty: 'أدخل التاريخ والوقت وحدّد منطقة مقارنة واحدة على الأقل.',
  tool_timezone_converter_error_invalid: 'تنسيق غير صالح. استخدم المُنتقي أو YYYY-MM-DDTHH:MM.',
  tool_timezone_converter_example:
    'عينة ثابتة عند التحميل: 2026-06-15 14:30 America/Los_Angeles → UTC وNew York ولندن وTokyo مع الساعة المحلية وإزاحة UTC حسب قواعد IANA لذلك التاريخ.',
  tool_timezone_converter_example_title: 'مثال',
  tool_timezone_converter_faq_a1:
    'نستخدم معرّفات IANA مثل America/New_York وAsia/Tokyo — كما في المتصفحات والخوادم. اختصارات EST وJST غامضة؛ في الجدولة استخدم الاسم الكامل.',
  tool_timezone_converter_faq_a2:
    'في بداية التوقيت الصيفي تُحذف ساعات محلية — تظهر رسالة خطأ. في نهايته قد يتكرر الوقت نفسه؛ Intl يختار إزاحة واحدة — راجع الاجتماعات الحساسة يدويًا.',
  tool_timezone_converter_faq_a3:
    'أدوات Unix timestamp تحوّل epoch ↔ ساعة غالبًا UTC. هنا تبقى المنطقة المصدر بالاسم وتعرض عدة مناطق في جدول — لسؤال «كم الساعة عندهم؟».',
  tool_timezone_converter_faq_a4:
    'لا. جدول فوري للمراجعة الشخصية. لا يُنشئ حزمة اجتماع قابلة للمشاركة أو قائمة حضور أو تصدير ICS.',
  tool_timezone_converter_faq_a5:
    'نعم، محلي بالكامل: Intl.DateTimeFormat فقط؛ لا يُرفع التاريخ/الوقت.',
  tool_timezone_converter_faq_q1: 'لماذا أسماء IANA وليس EST أو PST؟',
  tool_timezone_converter_faq_q2: 'ماذا يحدث في أيام تغيير التوقيت الصيفي؟',
  tool_timezone_converter_faq_q3: 'ما الفرق عن محوّل Unix timestamp؟',
  tool_timezone_converter_faq_q4: 'هل أصدّر حزمة مناطق لاجتماع الفريق هنا؟',
  tool_timezone_converter_faq_q5: 'هل يُرسل التاريخ/الوقت إلى خادم؟',
  tool_timezone_converter_how_body:
    'أدخل وقتًا محليًا ومنطقة IANA مصدر. حدّد مناطق المقارنة ثم تحويل. يعرض الجدول الساعة المحلية وإزاحة UTC لنفس اللحظة، محسوبة بـ Intl في متصفحك.',
  tool_timezone_converter_how_title: 'كيف يعمل',
  tool_timezone_converter_local_tz: 'متصفحك',
  tool_timezone_converter_now: 'الآن',
  tool_timezone_converter_rules_body:
    'قواعد IANA وسلوك DST وحدود هذه الأداة مقارنةً بـ epoch أو تصدير الاجتماعات.',
  tool_timezone_converter_rules_item_1:
    'المناطق تتبع قاعدة IANA (tzdata). الإزاحات تتغير مع DST — الجدول يعكس التاريخ المُدخل وليس فرق GMT ثابت.',
  tool_timezone_converter_rules_item_2:
    'فجوات الربيع: ساعة غير موجودة → خطأ. تداخل الخريف: وقت مكرر → Intl يختار إزاحة؛ تحقق من الحالات الحدّية.',
  tool_timezone_converter_rules_item_3:
    'CST وIST قد تعني مناطق مختلفة. في API وcron استخدم اسم IANA كاملًا.',
  tool_timezone_converter_rules_item_4:
    'الخصوصية: بلا رفع. مقارنة للقراءة فقط — ليست جدولة اجتماعات ولا تحديد موقع IP.',
  tool_timezone_converter_rules_title: 'قواعد متوقعة',
  tool_timezone_converter_sample: 'تحميل مثال',
  tool_timezone_converter_source_time: 'التاريخ والوقت المصدر',
  tool_timezone_converter_source_tz: 'المنطقة الزمنية المصدر',
  tool_timezone_converter_title: 'محول المناطق الزمنية — مقارنة لحظة واحدة عالميًا',
  tool_timezone_converter_usecase_1:
    'فرق عن بُعد: «3:30 مساءً بتوقيت المحيط الهادئ» — اعرض New York ولندن وTokyo دفعة واحدة.',
  tool_timezone_converter_usecase_2:
    'عمليات/سجلات: طابع بوقت Chicago — قارِن UTC ومنطقتك دون حساب ذهني.',
  tool_timezone_converter_usecase_3:
    'سفر: هبوط في Dubai — اقرأ Sydney وLos Angeles معًا للمكالمات.',
  tool_timezone_converter_usecases_title: 'متى يناسب',
};
export default ar;
