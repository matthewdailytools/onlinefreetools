/**
 * i18n tool shard (color-from-image / ar). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ar: SiteLangDict = {
  tool_color_from_image_article: 'لوحة ألوان سائدة محلياً مع متوسط منطقة بالنقر ونسخ HEX/RGB/HSL.',
  tool_color_from_image_choose_file: 'اختر صورة',
  tool_color_from_image_clear: 'مسح',
  tool_color_from_image_copied: 'تم النسخ',
  tool_color_from_image_copy: 'نسخ HEX',
  tool_color_from_image_count_label: 'عدد الألوان',
  tool_color_from_image_description:
    'استخرج اللون السائد ولوحة ألوان كاملة من أي صورة — أو استخدم منتقي الألوان بالنقر على منطقة. الخطوات: اختر صورة، حدّد عدد الألوان (2–12)، اضغط استخراج، انسخ HEX/RGB/HSL، أو انقر المعاينة لمتوسط محلي. مثال: ستة ألوان من صورة علامة ثم نقرة على الشعار للون تمييز — الملف يبقى على جهازك.',
  tool_color_from_image_drop_hint: 'أو أسقط JPEG أو PNG أو WebP هنا. الاستخراج يتم في هذا التبويب.',
  tool_color_from_image_empty: 'اختر صورة أولاً.',
  tool_color_from_image_err_decode: 'تعذّر على المتصفح فك ترميز الملف. جرّب JPEG أو PNG أو WebP.',
  tool_color_from_image_err_no_pixels: 'لا توجد بكسلات معتمة للعينة — قد تكون الصورة شفافة بالكامل.',
  tool_color_from_image_example:
    'حمّل مثال المربعات الأربعة، اترك عدد الألوان 6، واستخرج — يفترض أن ترى فيروزي وكهرماني وأخضر وكريمي وأحمر. ثم انقر الدائرة الحمراء: بطاقة اللون المختار تعرض HEX أحمر من متوسط ~7×7 حول تلك النقطة، جاهز للنسخ.',
  tool_color_from_image_example_title: 'مثال',
  tool_color_from_image_extract: 'استخراج',
  tool_color_from_image_faq_a1: 'لا. حساب اللوحة والعيّن بالنقر يعملان محلياً. تحقق من Network — الصورة لا تُرسل POST.',
  tool_color_from_image_faq_a2:
    'الصفحة تصغّر الصورة، تزيل البكسل منخفض الشفافية، تقسّم فضاء اللون بـ median-cut، تُوسط كل مجموعة وترتّب حسب عدد العينات.',
  tool_color_from_image_faq_a3:
    'الأداة تعيد النقرة إلى بكسل المصدر وتُوسط الألوان المعتمة في مربع صغير (~7×7). تحصل على HEX/RGB/HSL لتلك المنطقة، منفصلة عن قائمة اللوحة.',
  tool_color_from_image_faq_a4: 'الصور ولقطات الواجهة صاخبة عند 1×1. متوسط منطقة صغيرة أكثر ثباتاً لألوان CSS مع بقاء موضع النقرة.',
  tool_color_from_image_faq_a5: 'يُرسم الإطار الأول فقط، يُستخدم للوحة ومتاح للاختيار بالنقر.',
  tool_color_from_image_faq_q1: 'هل تغادر صورتي المتصفح؟',
  tool_color_from_image_faq_q2: 'كيف تُختار الألوان الرئيسية؟',
  tool_color_from_image_faq_q3: 'ماذا يحدث عند النقر على الصورة؟',
  tool_color_from_image_faq_q4: 'لماذا النقر ليس بكسلاً واحداً؟',
  tool_color_from_image_faq_q5: 'هل تُحلّل ملفات GIF المتحركة بالكامل؟',
  tool_color_from_image_how_body:
    'اختر صورة واستخرج لوحة: الصفحة تصغّر نسخة عمل (أطول حافة ~256 px)، تتخطى البكسل شبه الشفاف، تجمع الألوان وترتّب حسب التكرار. بشكل منفصل، انقر المعاينة لمتوسط مربع صغير حول تلك النقطة بدقة المصدر ونسخ HEX أو RGB أو HSL — لا يُرفع شيء.',
  tool_color_from_image_how_title: 'كيف يعمل',
  tool_color_from_image_palette_label: 'اللوحة',
  tool_color_from_image_pct_tpl: '{pct}% من العينات',
  tool_color_from_image_pick_hint: 'انقر الصورة لمتوسط منطقة صغيرة حول النقطة (حوالي 7×7 بكسل مصدر).',
  tool_color_from_image_pick_label: 'اللون المختار',
  tool_color_from_image_pick_transparent: 'لا توجد بكسلات معتمة في هذا الموضع — انقر مكاناً آخر.',
  tool_color_from_image_pick_xy_tpl: 'حول ({x}, {y}) · متوسط {size}×{size}',
  tool_color_from_image_preview_label: 'المصدر — انقر للاختيار',
  tool_color_from_image_rules_body:
    'استخراج اللوحة والاختيار بالنقر يستخدمان صورة واحدة لكن يجيبان عن أسئلة مختلفة. راجع القائمة إذا بدا لون غير متوقع.',
  tool_color_from_image_rules_item_1:
    'عيّن اللوحة يستخدم bitmap مصغّر (أقصى حافة ~256 px) ليبقى سريعاً مع الصور الكبيرة. التفاصيل الدقيقة قد تندمج في درجات قريبة.',
  tool_color_from_image_rules_item_2:
    'يُتجاهل البكسل بشفافية أقل من 128 في اللوحة وفي متوسطات النقر. المواضع الشفافة بالكامل تعرض رسالة واضحة.',
  tool_color_from_image_rules_item_3: 'يمكن طلب 2–12 لوناً للوحة؛ الصور المسطحة قد تعيد أقل. الألوان مرتّبة حسب نسبة العينات.',
  tool_color_from_image_rules_item_4:
    'النقر يُوسط البكسل المعتم في نافذة ~7×7 حول النقرة بإحداثيات المصدر (ليس المعاينة المصغّرة وحدها). عيّن منطقة، وليس قطّارة بكسل واحد.',
  tool_color_from_image_rules_item_5: 'الخصوصية: فك الترميز وحساب اللوحة والعيّن بالنقر كلها محلياً في هذا التبويب.',
  tool_color_from_image_rules_title: 'ما يجب أن تتوقعه',
  tool_color_from_image_sample: 'تحميل مثال',
  tool_color_from_image_status_done: 'تم — انسخ لوناً أو انقر الصورة لاختيار منطقة.',
  tool_color_from_image_status_extracting: 'جارٍ استخراج اللوحة…',
  tool_color_from_image_status_picked: 'تم الاختيار — انقر HEX/RGB/HSL للنسخ.',
  tool_color_from_image_title: 'استخراج ألوان الصورة — لوحة واختيار بالنقر',
  tool_color_from_image_usecase_1: 'صور العلامة: اسحب لوحة ثم انقر شعاراً أو زراً للون تمييز محدد.',
  tool_color_from_image_usecase_2: 'لقطات واجهة: راجع ألوان الواجهة ثم انقر شريحة أو أيقونة للون تلك المنطقة.',
  tool_color_from_image_usecase_3: 'أفكار تدرّج: خذ لونين تمييز من اللوحة أو بالنقر ثم افتح حاسبة التدرّج.',
  tool_color_from_image_usecases_title: 'متى يناسب',
  tool_color_from_image_warn_animation: 'الملفات المتحركة: يُؤخذ الإطار الأول فقط.',
  tool_color_from_image_warn_large: 'ملف كبير (>25 MB) — قد يكون العيّن بطيئاً.',
};
export default ar;
