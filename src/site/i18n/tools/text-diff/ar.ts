/**
 * i18n tool shard (text-diff / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_text_diff_article:
    'أداة مجانية لمقارنة نصين جنباً إلى جنب. وضع الأسطر للإعدادات والشيفرة؛ وضع الكلمات للنصوص والمطالبات؛ وضع الأحرف للأخطاء الدقيقة. كل شيء في المتصفح — لا نرفع نصك.',
  tool_text_diff_clear: 'مسح',
  tool_text_diff_compare: 'قارن',
  tool_text_diff_description:
    'قارن نصين أونلاين واعرف ماذا تغيّر. العملية: الصق النص الأصلي والمعدَّل، اختر المقارنة حسب السطر أو الكلمة أو الحرف، ويمكن تجاهل المسافات أو توحيد أسطر Windows (CRLF→LF)، ثم أبرز الإضافات والحذف في المتصفح. مثال: غيّر «مرحبا بالعالم» إلى «مرحبا صديقي» — وضع الكلمات يُظهر استبدالاً واحداً.',
  tool_text_diff_empty_hint: 'الصق نصاً في جانب أو جانبين ثم اضغط قارن.',
  tool_text_diff_example:
    'مثال (وضع الكلمة): A = «مرحبا بالعالم»، B = «مرحبا صديقي» — تغيير واحد (بالعالم → صديقي). إذا تغيّر السطر الأوسط فقط من ثلاثة أسطر، وضع السطر يعلّم ذلك السطر.',
  tool_text_diff_example_title: 'مثال',
  tool_text_diff_faq_a1: 'السطر للشيفرة والإعدادات. الكلمة للجمل والرسائل والمطالبات — تُبرز الكلمات المتغيّرة فقط.',
  tool_text_diff_faq_a2:
    'النص الذي تلصقه لا يُرفع ولا يُحفظ لدينا — المقارنة تتم في متصفحك. قد تحمّل الصفحة jsdiff (مفتوحة المصدر) من CDN؛ ذلك لا يرسل نصك إلى خوادمنا.',
  tool_text_diff_faq_a3: 'Windows غالباً CRLF و Mac/Linux غالباً LF. فعّل «اعتبار CRLF و LF متساويين» ثم قارن مجدداً.',
  tool_text_diff_faq_a4: 'لا. النص العادي فقط.',
  tool_text_diff_faq_q1: 'أقارن بالسطر أم بالكلمة؟',
  tool_text_diff_faq_q2: 'هل يُرفع نصي إلى خادم؟',
  tool_text_diff_faq_q3: 'لماذا يجعل اختلاف نهاية السطر السطر كله أحمر؟',
  tool_text_diff_faq_q4: 'هل أقارن صوراً أو ملفات ثنائية؟',
  tool_text_diff_how_body:
    'الصق نسختين، اختر دقة المقارنة (سطر أو كلمة أو حرف)، ثم راجع الإضافات الخضراء والحذف الأحمر. النص الذي تلصقه لا يُرفع ولا يُحفظ لدينا. قد تحمّل الصفحة مكتبة jsdiff مفتوحة المصدر من CDN لتعمل المقارنة في المتصفح.',
  tool_text_diff_how_title: 'طريقة الاستخدام',
  tool_text_diff_ignore_ws: 'تجاهل المسافات',
  tool_text_diff_label_a: 'النص الأصلي',
  tool_text_diff_label_b: 'النص المعدَّل',
  tool_text_diff_large_warn: 'لصق كبير جداً (>100 ألف حرف). قد يبطئ — جرّب مقطعاً أقصر.',
  tool_text_diff_legend: 'أخضر = مضاف · أحمر = محذوف',
  tool_text_diff_mode_chars: 'حرف',
  tool_text_diff_mode_label: 'قارن حسب',
  tool_text_diff_mode_lines: 'سطر',
  tool_text_diff_mode_words: 'كلمة',
  tool_text_diff_need_lib: 'تعذّر تحميل أداة المقارنة. تحقق من الاتصال وحدّث الصفحة.',
  tool_text_diff_no_diff: 'لا فروق — النصان متطابقان.',
  tool_text_diff_normalize_eol: 'اعتبار CRLF و LF متساويين',
  tool_text_diff_placeholder_a: 'الصق النص الأصلي…',
  tool_text_diff_placeholder_b: 'الصق النص المعدَّل…',
  tool_text_diff_result_label: 'الفروقات',
  tool_text_diff_rules_body:
    'تبحث الأداة عن قائمة قصيرة من التعديلات لنقل النص A إلى B (diff تقليدي / أسلوب Myers عبر jsdiff). وضع الأسطر للإعدادات والشيفرة. وضع الكلمات للجمل والمطالبات. وضع الأحرف للأخطاء الدقيقة لكنه أكثر ضوضاء. تجاهل المسافات يخفي تغيّر المسافة البادئة فقط. توحيد CRLF و LF يمنع احمرار السطر كله بسبب نوع السطر الجديد فقط.',
  tool_text_diff_rules_intro:
    'تبحث الأداة عن قائمة قصيرة من التعديلات لتحويل النص A إلى B (diff كلاسيكي / أسلوب Myers عبر jsdiff). اختر الوضع حسب المهمة:',
  tool_text_diff_rules_item_chars: 'حرف — مناسب للأخطاء الصغيرة؛ الأدق، لكنه مزعج في التعديلات الطويلة.',
  tool_text_diff_rules_item_lines:
    'سطر — مناسب لـ .env وYAML والكود؛ السطر المتغيّر يُعلَّم بالكامل. سهل المسح، لكن تغيير كلمة واحدة يلوّن السطر كله.',
  tool_text_diff_rules_item_words:
    'كلمة — مناسب للجمل والبريد والـ prompts؛ يبرز كلمات مفردة. أوضح للنثر؛ علامات الترقيم قد تقطع النتيجة.',
  tool_text_diff_rules_options:
    'تجاهل المسافات يخفي تغييرات المسافة البادئة فقط. معاملة CRLF وLF بالمثل تمنع احمرار سطر كامل بسبب أسلوب السطر الجديد فقط (ويندوز مقابل يونكس).',
  tool_text_diff_rules_title: 'كيف تُحسب الفروقات',
  tool_text_diff_sample_a: 'مرحبا بالعالم\nالسطر الثاني\nالسطر الثالث',
  tool_text_diff_sample_b: 'مرحبا صديقي\nالسطر الثاني\nالسطر الثالث',
  tool_text_diff_summary: 'أُضيف {added}، حُذف {removed}',
  tool_text_diff_swap: 'تبديل الجانبين',
  tool_text_diff_usecase_1: 'مراجعة إعدادات: قارن مقطعي .env أو YAML سطراً بسطر.',
  tool_text_diff_usecase_2: 'تعديل مطالبة: وضع الكلمات لرؤية الصياغات المضافة أو المحذوفة.',
  tool_text_diff_usecase_3: 'تدقيق نص أو ترجمة: تأكد أن الجمل المقصودة فقط تغيّرت.',
  tool_text_diff_usecases_title: 'متى تستخدمها',
};
export default ar;
