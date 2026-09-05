/**
 * i18n tool shard (yaml-json / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_yaml_json_article:
    'اتجاهان في صفحة واحدة: تحويل YAML ↔ JSON بقواعد أنواع صريحة، سياسة multi-doc، وملاحظات صادقة عن المعالجة المحلية. مصمم لتبادل الإعدادات، لا لرابط فارغ ثانٍ.',
  tool_yaml_json_clear: 'مسح',
  tool_yaml_json_convert: 'تحويل',
  tool_yaml_json_copy_done: 'تم النسخ',
  tool_yaml_json_copy_json: 'نسخ JSON',
  tool_yaml_json_copy_yaml: 'نسخ YAML',
  tool_yaml_json_description:
    'حوّل YAML إلى JSON أو JSON إلى YAML داخل المتصفح. الخطوات: اختر الاتجاه، الصق الإعداد، وفعّل الأنواع الآمنة لـ JSON عند الحاجة، ثم انسخ أو نزّل. المستندات المتعددة المفصولة بـ --- تصبح مصفوفة JSON. مثال: خريطة خدمة قصيرة إلى JSON بمسافات بادئة لعميل API — اللصق يبقى محليًا.',
  tool_yaml_json_dir_label: 'اتجاه التحويل',
  tool_yaml_json_download_json: 'تنزيل JSON',
  tool_yaml_json_download_yaml: 'تنزيل YAML',
  tool_yaml_json_empty: 'الصق إدخالًا أولًا.',
  tool_yaml_json_example:
    'YAML `الاسم: تجريبي` مع قائمة `عناصر: [a, b]` يصبح JSON `{"الاسم":"تجريبي","عناصر":["a","b"]}`. JSON `{"title":"مرحبا","count":2}` يُفرَّغ إلى YAML بمسافات. حدّ: `flag: yes` غير المقتبس يصبح boolean true تحت DEFAULT؛ فعّل الأنواع الآمنة لـ JSON لإبقاء النص "yes".',
  tool_yaml_json_example_title: 'مثال',
  tool_yaml_json_faq_a1:
    'المستندات المفصولة بـ --- تُحلَّل بـ loadAll. مستند واحد → قيمة JSON؛ اثنان فأكثر → مصفوفة. لا نحذف ما بعد الأول.',
  tool_yaml_json_faq_a2: 'التحويل يبقى في التبويب. قد يخدم CDN مكتبة js-yaml؛ ذلك تنزيل كود فقط — ليس رفعًا لنص YAML أو JSON.',
  tool_yaml_json_faq_a3:
    'تحت مخطط js-yaml الافتراضي كثيرًا نعم — yes/no/on/off غير المقتبسة قد تصبح boolean. فعّل «أنواع آمنة لـ JSON» لإبقائها نصوصًا ما لم تُكتب بنوع صريح.',
  tool_yaml_json_faq_a4:
    'YAML غير الصالح يرفع علامة محلّل بالسطر والعمود عند توفرها. JSON غير الصالح يُبلَّغ عبر JSON.parse بلا علامات بأسلوب YAML.',
  tool_yaml_json_faq_a5:
    'لا. التعليقات لا تبقى في JSON. المراسي تتوسع إلى قيم مكررة. إعادة dump من JSON إلى YAML لا تستعيد التعليقات أو أسماء المراسي الأصلية.',
  tool_yaml_json_faq_q1: 'كيف تُعالَج مستندات YAML المتعددة؟',
  tool_yaml_json_faq_q2: 'هل يغادر اللصق المتصفح؟',
  tool_yaml_json_faq_q3: 'هل يصبح yes أو no غير المقتبس boolean؟',
  tool_yaml_json_faq_q4: 'من أين تأتي أرقام أسطر الأخطاء؟',
  tool_yaml_json_faq_q5: 'هل يمكن الذهاب والإياب بلا فقدان؟',
  tool_yaml_json_how_body:
    'اختر YAML → JSON أو العكس. يعمل التحويل عبر js-yaml في هذا التبويب. التيارات متعددة المستندات المفصولة بـ --- تصبح مصفوفة JSON؛ مستند واحد يبقى قيمة JSON واحدة. أخطاء YAML تعرض السطر والعمود عندما يوفّر المحلّل علامة.',
  tool_yaml_json_how_item_1: 'اختر YAML → JSON أو JSON → YAML.',
  tool_yaml_json_how_item_2: 'الصق المدخلات في المربع الأيسر (YAML متعدد المستندات قد يستخدم ---).',
  tool_yaml_json_how_item_3: 'اختياريًا فعّل الأنواع الآمنة أو غيّر مسافة JSON.',
  tool_yaml_json_how_item_4: 'انقر «تحويل»، ثم انسخ المخرجات أو حمّلها.',
  tool_yaml_json_how_title: 'مسار العمل',
  tool_yaml_json_indent_2: 'مسافتان',
  tool_yaml_json_indent_4: 'أربع مسافات',
  tool_yaml_json_indent_label: 'المسافة البادئة',
  tool_yaml_json_indent_minify: 'ضغط JSON',
  tool_yaml_json_json_input_label: 'إدخال JSON',
  tool_yaml_json_json_output_label: 'مخرجات JSON',
  tool_yaml_json_json_placeholder: '{\n  "title": "مرحبا",\n  "count": 2\n}',
  tool_yaml_json_json_safe: 'أنواع آمنة لـ JSON (إبقاء yes/no كنصوص)',
  tool_yaml_json_large_warn: 'لصق كبير جدًا (أكثر من نحو 200 ألف حرف). قد يبطؤ التحويل — جرّب مقتطفًا أقصر.',
  tool_yaml_json_need_lib: 'تعذّر تحميل js-yaml. تحقق من الاتصال ثم أعد التحميل.',
  tool_yaml_json_rules_body:
    'ما الذي تتوقعه عند التحويل: كيف تُحدَّد أنواع القيم غير المقتبسة، وكيف يُطابَق YAML متعدد المستندات مع JSON، وأين قد تفقد الرحلة ذهابًا وإيابًا التعليقات أو التنسيق.',
  tool_yaml_json_rules_item_1:
    'الأنواع: مع مخطط DEFAULT قد تتحول yes/no/on/off غير المقتبسة وبعض القيم الشبيهة بالتاريخ إلى boolean أو أنواع أخرى. المخطط الآمن لـ JSON يبقي القيم غير المقتبسة كنصوص ما لم تُكتب بنوع صريح.',
  tool_yaml_json_rules_item_2:
    'multi-doc: loadAll — مستند واحد → قيمة JSON؛ اثنان فأكثر → مصفوفة. لا نحتفظ بالمستند الأول بصمت ونتجاهل الباقي.',
  tool_yaml_json_rules_item_3:
    'فقدان عند الذهاب والإياب: التعليقات تختفي (JSON بلا تعليقات)؛ المراسي/الأسماء المستعارة تُوسَّع إلى قيم مكررة؛ ترتيب المفاتيح والأسلوب قد يتغير بعد dump.',
  tool_yaml_json_rules_item_4: 'الخصوصية: اللصق لا يُرفع. جلب js-yaml من CDN يحمّل كود المكتبة فقط، لا نص إعدادك.',
  tool_yaml_json_rules_title: 'ما تتوقعه من القواعد',
  tool_yaml_json_sample: 'تحميل مثال',
  tool_yaml_json_sample_json: '{\n  "title": "مرحبا",\n  "count": 2\n}',
  tool_yaml_json_sample_yaml: 'الاسم: تجريبي\nمفعّل: true\nعناصر:\n  - a\n  - b',
  tool_yaml_json_tab_json_yaml: 'JSON → YAML',
  tool_yaml_json_tab_yaml_json: 'YAML → JSON',
  tool_yaml_json_title: 'من YAML إلى JSON وبالعكس — قواعد الأنواع ومحليًا',
  tool_yaml_json_usecase_1: 'DevOps: حوّل YAML متعدد الموارد في Kubernetes (مفصول بـ ---) إلى مصفوفة JSON للسكربتات.',
  tool_yaml_json_usecase_2: 'مطوّرون: أعد تشكيل حمولة API بصيغة JSON إلى YAML مقروء قبل تعديل الإعداد يدويًا.',
  tool_yaml_json_usecase_3: 'خطوط بيانات / AI: اربط معاملات YAML المحرَّرة يدويًا بأدوات لا تقبل إلا JSON.',
  tool_yaml_json_usecases_title: 'متى يفيد',
  tool_yaml_json_yaml_input_label: 'إدخال YAML',
  tool_yaml_json_yaml_output_label: 'مخرجات YAML',
  tool_yaml_json_yaml_placeholder: 'الاسم: تجريبي\nمفعّل: true\nعناصر:\n  - a\n  - b',
};
export default ar;
