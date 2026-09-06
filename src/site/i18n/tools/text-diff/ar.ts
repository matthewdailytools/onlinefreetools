/**
 * i18n tool shard (text-diff / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_text_diff_article:
    'أداة مجانية لمقارنة نصين جنباً إلى جنب. وضع الأسطر للإعدادات والشيفرة؛ وضع الكلمات للنصوص والمطالبات؛ وضع الأحرف للأخطاء الدقيقة. كل شيء في المتصفح — لا نرفع نصك.',
  tool_text_diff_clear: 'مسح',
  tool_text_diff_compare: 'قارن',
  tool_text_diff_desc:
    'تحقق من الفرق بين نصين بلصق الجانبين في المتصفح — الملفات تبقى على جهازك ولا تُرفع.',
  tool_text_diff_description:
    'تحقق من الفرق بين نصين في المتصفح. العملية: الصق النص الأصلي والمعدَّل، اختر السطر أو الكلمة أو الحرف، وفي وضعي السطر أو الكلمة يمكن تجاهل المسافات أو توحيد CRLF و LF، ثم أبرز الإضافات والحذف. الملفات تبقى على جهازك ولا تُرفع. مثال: غيّر «مرحبا بالعالم» إلى «مرحبا صديقي» — وضع الكلمات يُظهر استبدالاً واحداً. تقبل الأداة نصاً ملصقاً، ولا تقرأ ملفات Word أو الجداول أو JSON المنظم.',
  tool_text_diff_empty_hint: 'الصق نصاً في جانب أو جانبين ثم اضغط قارن.',
  tool_text_diff_example:
    'مثال (وضع الكلمة): A = «مرحبا بالعالم»، B = «مرحبا صديقي» — تغيير واحد (بالعالم → صديقي). إذا تغيّر السطر الأوسط فقط من ثلاثة أسطر، وضع السطر يعلّم ذلك السطر.',
  tool_text_diff_example_title: 'مثال',
  tool_text_diff_faq_a1: 'السطر للشيفرة والإعدادات. الكلمة للجمل والرسائل والمطالبات — تُبرز الكلمات المتغيّرة فقط.',
  tool_text_diff_faq_a2:
    'النص الذي تلصقه لا يُرفع ولا يُحفظ لدينا — المقارنة تتم في متصفحك. قد تحمّل الصفحة jsdiff (مفتوحة المصدر) من هذا الموقع؛ ذلك لا يرسل نصك إلى خوادمنا.',
  tool_text_diff_faq_a3: 'Windows غالباً CRLF و Mac/Linux غالباً LF. فعّل «اعتبار CRLF و LF متساويين» ثم قارن مجدداً.',
  tool_text_diff_faq_a4:
    'لا. النص الملصق فقط — بلا صور أو ZIP أو Word أو Excel أو JSON منظّم. لفتح .txt أو .docx أو جداول استخدم صفحة ذلك التنسيق.',
  tool_text_diff_faq_a5:
    "لا. يقارن وضع الحروف كل حرف، لذلك يُعطّل الخيار. استخدم وضع الأسطر أو الكلمات لتجاهل تعديلات المسافات وحدها.",
  tool_text_diff_faq_q1: 'أقارن بالسطر أم بالكلمة؟',
  tool_text_diff_faq_q2: 'هل يُرفع نصي إلى خادم؟',
  tool_text_diff_faq_q3: 'لماذا يجعل اختلاف نهاية السطر السطر كله أحمر؟',
  tool_text_diff_faq_q4: 'هل أقارن صوراً أو Word أو ملفات ثنائية؟',
  tool_text_diff_faq_q5: "هل يعمل تجاهل المسافات في وضع الحروف؟",
  tool_text_diff_how_body:
    "الصق النص الأصلي في اليسار والنسخة المعدلة في اليمين، واختر المقارنة بالسطر أو الكلمة أو الحرف، ثم راجع الإضافات الخضراء والحذف الأحمر. يبقى النص على جهازك ولا يُرفع إلى خادم.",
  tool_text_diff_load_sample: "حمّل المثال",
  tool_text_diff_how_item_1: "الصق النص الأصلي في الجهة اليسرى.",
  tool_text_diff_how_item_2: "الصق النص المعدل في الجهة اليمنى.",
  tool_text_diff_how_item_3: "اختر السطر أو الكلمة أو الحرف واضبط خيارات المسافات والأسطر عند توفرها.",
  tool_text_diff_how_item_4: "اضغط «قارن» وراجع الإضافات والحذف الملوّن.",
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
    "يحدد الوضع المختار وحدة التغيير. يعطّل وضع الحروف خيار تجاهل المسافات لأن هذا الخيار يعمل فقط مع الأسطر والكلمات.",
  tool_text_diff_rules_intro:
    'تبحث الأداة عن قائمة قصيرة من التعديلات لتحويل النص A إلى B (diff كلاسيكي / أسلوب Myers عبر jsdiff). اختر الوضع حسب المهمة:',
  tool_text_diff_rules_item_3: 'حرف — مناسب للأخطاء الصغيرة؛ الأدق، لكنه مزعج في التعديلات الطويلة.',
  tool_text_diff_rules_item_1:
    'سطر — مناسب لـ .env وYAML والكود؛ السطر المتغيّر يُعلَّم بالكامل. سهل المسح، لكن تغيير كلمة واحدة يلوّن السطر كله.',
  tool_text_diff_rules_item_2:
    'كلمة — مناسب للجمل والبريد والـ prompts؛ يبرز كلمات مفردة. أوضح للنثر؛ علامات الترقيم قد تقطع النتيجة.',
  tool_text_diff_rules_item_4:
    "تجاهل المسافات يعمل مع وضعي الأسطر والكلمات فقط. توحيد CRLF وLF يساوي أسطر Windows وUnix في كل الأوضاع.",
  tool_text_diff_rules_title: 'كيف تُحسب الفروقات',
  tool_text_diff_sample_a: 'مرحبا بالعالم\nالسطر الثاني\nالسطر الثالث',
  tool_text_diff_sample_b: 'مرحبا صديقي\nالسطر الثاني\nالسطر الثالث',
  tool_text_diff_summary: 'أُضيف {added}، حُذف {removed}',
  tool_text_diff_swap: 'تبديل الجانبين',
  tool_text_diff_usecase_1: 'مراجعة إعدادات: قارن مقطعي .env أو YAML سطراً بسطر.',
  tool_text_diff_usecase_2: 'تعديل مطالبة: وضع الكلمات لرؤية الصياغات المضافة أو المحذوفة.',
  tool_text_diff_usecase_3: 'تدقيق نص أو ترجمة: تأكد أن الجمل المقصودة فقط تغيّرت.',
  tool_text_diff_usecases_title: 'متى تستخدمها',
  tool_text_diff_title: 'تحقق من الفرق بين نصين',
};
export default ar;
