/**
 * i18n tool shard (csv-json / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_csv_json_article:
    'تحويل CSV ↔ JSON في الاتجاهين مع قواعد واضحة للأنواع والفاصل والاقتباس، وكيف تُسطَّح JSON المتداخلة إلى أعمدة. مُعدّ لتبادل الجداول ↔ واجهات API، لا لصفحة فارغة إضافية.',
  tool_csv_json_clear: 'مسح',
  tool_csv_json_convert: 'تحويل',
  tool_csv_json_copy_csv: 'نسخ CSV',
  tool_csv_json_copy_done: 'تم النسخ',
  tool_csv_json_copy_json: 'نسخ JSON',
  tool_csv_json_csv_input_label: 'إدخال CSV',
  tool_csv_json_csv_output_label: 'إخراج CSV',
  tool_csv_json_csv_placeholder: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_delimiter_auto: 'كشف تلقائي',
  tool_csv_json_delimiter_comma: 'فاصلة ,',
  tool_csv_json_delimiter_label: 'الفاصل',
  tool_csv_json_delimiter_semicolon: 'فاصلة منقوطة ;',
  tool_csv_json_delimiter_tab: 'جدولة',
  tool_csv_json_description:
    'حوّل CSV إلى JSON أو JSON إلى CSV في متصفحك. الخطوات: اختر الاتجاه، الصق أو ارفع، حدّد الفاصل والرأس ثم انسخ أو نزّل. يتعامل مع الحقول المقتبسة التي تحوي فواصل وفواصل منقوطة وعلامات جدولة؛ ومن JSON إلى CSV تُسطَّح الكائنات المتداخلة إلى أعمدة. مثال: حوّل جدول منتجات (sku، العنوان، السعر) إلى مصفوفة JSON — وتبقى البيانات محليًا.',
  tool_csv_json_dir_label: 'اتجاه التحويل',
  tool_csv_json_download_csv: 'تنزيل CSV',
  tool_csv_json_download_json: 'تنزيل JSON',
  tool_csv_json_empty: 'الصق بعض المحتوى أولًا.',
  tool_csv_json_example:
    'CSV `sku,title,price` مع الصف `A-001,"Chair, oak",129.9` يصبح JSON `{"sku":"A-001","title":"Chair, oak","price":"129.9"}` (بدون الأنواع يبقى price نصًا؛ فعّلها للحصول على الرقم 129.9). والعكس: `[{"sku":"A-001","dim":{"w":40,"h":90}}]` ينتج الرأس `sku,dim.w,dim.h` مع الصف `A-001,40,90`.',
  tool_csv_json_example_title: 'مثال',
  tool_csv_json_faq_a1:
    'افتراضيًا تبقى كل خلية نصًا، لذا يُحفظ 007 والمعرّفات الطويلة. عند تفعيل «استنتاج الأنواع» تتحول القيم الرقمية إلى أرقام: 007 يصبح 7 وقد تفقد السلاسل الطويلة الدقة. اتركه متوقفًا لأكواد SKU والرموز البريدية والهواتف.',
  tool_csv_json_faq_a2:
    'نعم. اختر فاصلة أو فاصلة منقوطة أو جدولة، أو اترك الكشف التلقائي ويخمّن Papa Parse من النص. الفاصلة المنقوطة شائعة في تصديرات Excel الأوروبية؛ والجدولة تعني TSV.',
  tool_csv_json_faq_a3:
    'تُحاط بعلامات اقتباس مزدوجة وتُضاعَف الاقتباسات الداخلية وفق RFC 4180. هكذا يبقى عنوان مثل Chair, oak في حقل واحد بدل أن ينقسم إلى عمودين.',
  tool_csv_json_faq_a4:
    'تُسطَّح الكائنات إلى أعمدة بمسار نقطي (dim.w، dim.h). وتُكتب المصفوفات كسلسلة JSON في خلية واحدة. والأعمدة اتحاد مفاتيح كل السجلات، والسجل الذي يفتقد مفتاحًا يُترك فارغًا.',
  tool_csv_json_faq_a5:
    'لا. يبقى التحليل في هذه اللسان، وتُقرأ الملفات المختارة محليًا. قد يقدّم CDN مكتبة Papa Parse؛ لكن ذلك الطلب ينزّل شيفرة فقط، وليس رفعًا لـ CSV أو JSON.',
  tool_csv_json_faq_q1: 'هل تبقى الأرقام والأصفار البادئة والمعرّفات كما هي؟',
  tool_csv_json_faq_q2: 'هل يدعم الفاصلة المنقوطة أو الجدولة، لا الفاصلة فقط؟',
  tool_csv_json_faq_q3: 'كيف تُعالَج الحقول التي تحوي فواصل أو اقتباسات أو أسطرًا جديدة؟',
  tool_csv_json_faq_q4: 'كيف تصبح JSON المتداخلة أعمدة CSV؟',
  tool_csv_json_faq_q5: 'هل تغادر بياناتي المتصفح؟',
  tool_csv_json_header: 'الصف الأول رؤوس',
  tool_csv_json_how_body:
    'اختر CSV → JSON أو JSON → CSV؛ يتم التحليل والإنشاء هنا عبر Papa Parse. في CSV تختار الفاصل (أو الكشف التلقائي)، وهل الصف الأول رؤوس، وهل تُستنتج الأرقام/القيم المنطقية. في JSON تُسطَّح الكائنات المتداخلة إلى أعمدة بمسار نقطي، والأعمدة هي اتحاد كل المفاتيح.',
  tool_csv_json_how_title: 'كيف يعمل',
  tool_csv_json_indent_2: 'مسافتان',
  tool_csv_json_indent_4: '4 مسافات',
  tool_csv_json_indent_label: 'الإزاحة',
  tool_csv_json_indent_minify: 'تصغير JSON',
  tool_csv_json_json_input_label: 'إدخال JSON',
  tool_csv_json_json_output_label: 'إخراج JSON',
  tool_csv_json_json_placeholder: '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9}\n]',
  tool_csv_json_large_warn: 'إدخال كبير جدًا (أكثر من مليوني حرف). قد يكون التحويل بطيئًا؛ جرّب ملفًا أصغر.',
  tool_csv_json_need_lib: 'تعذّر تحميل Papa Parse. تحقق من الاتصال وأعد التحميل.',
  tool_csv_json_rules_body:
    'ما الذي تتوقعه عند التحويل: كيف تُعالَج أنواع الخلايا، وأي الفواصل وقواعد الاقتباس تُطبَّق، وكيف يُطابَق JSON المتداخل مع الأعمدة.',
  tool_csv_json_rules_item_1:
    'الأنواع: خلايا CSV نص افتراضيًا. فعّل «استنتاج الأنواع» للحصول على أرقام/قيم منطقية، لكن 007 يصبح 7 وقد تفقد سلاسل الأرقام الطويلة الدقة؛ اتركه متوقفًا لأكواد SKU والرموز البريدية وأرقام الهاتف.',
  tool_csv_json_rules_item_2:
    'الفواصل: الفاصلة والفاصلة المنقوطة (شائعة في Excel الأوروبي) وعلامة الجدولة (TSV)؛ يخمّن الكشف التلقائي من النص. الحقول التي تحوي الفاصل أو الاقتباس أو أسطرًا جديدة تُحاط بعلامات اقتباس مزدوجة وفق RFC 4180.',
  tool_csv_json_rules_item_3:
    'JSON → CSV: تُسطَّح الكائنات بمسارات نقطية (dim.w، dim.h)؛ وتُكتب المصفوفات كسلسلة JSON في خلية واحدة؛ والأعمدة اتحاد كل المفاتيح، والناقص يُترك فارغًا.',
  tool_csv_json_rules_item_4: 'الخصوصية: لا يُرفع نصك أو ملفاتك. جلب Papa Parse من CDN ينزّل شيفرة المكتبة فقط، لا بياناتك.',
  tool_csv_json_rules_title: 'قواعد ينبغي توقّعها',
  tool_csv_json_sample: 'تحميل مثال',
  tool_csv_json_sample_csv: 'sku,title,price\nA-001,"Chair, oak",129.9\nA-002,Desk,89',
  tool_csv_json_sample_json:
    '[\n  {"sku":"A-001","title":"Chair, oak","price":129.9},\n  {"sku":"A-002","title":"Desk","price":89}\n]',
  tool_csv_json_tab_csv_json: 'CSV → JSON',
  tool_csv_json_tab_json_csv: 'JSON → CSV',
  tool_csv_json_title: 'محول CSV ↔ JSON — الأنواع والفواصل ومحليًا',
  tool_csv_json_typing: 'استنتاج الأنواع (أرقام/قيم منطقية)',
  tool_csv_json_usecase_1:
    'التجارة الإلكترونية: حوّل جدول منتجات مُصدَّر (sku، العنوان، السعر) إلى مصفوفة JSON لواجهة متجر أو سوق.',
  tool_csv_json_usecase_2: 'المطورون: أعد تشكيل استجابة JSON إلى CSV للجداول أو المطابقة أو التسليم.',
  tool_csv_json_usecase_3:
    'البيانات/التشغيل: انقل CSV لتقارير أو أحداث (فاصلة أو فاصلة منقوطة أو TSV) إلى JSON لخط معالجة، مع تهريب الفواصل والأسطر الجديدة بأمان.',
  tool_csv_json_usecases_title: 'استخدامات مناسبة',
};
export default ar;
