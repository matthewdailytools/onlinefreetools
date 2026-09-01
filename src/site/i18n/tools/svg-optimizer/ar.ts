/**
 * i18n tool shard (svg-optimizer / ar).
 * H1: محسّن SVG.
 */
import type { SiteLangDict } from '../../../types';

/** نصوص العربية. */
const ar: SiteLangDict = {
	tool_svg_optimizer_article:
		'الصق SVG أو أسقط ملفًا، فعّل خيارات التنظيف وشاهد توفير البايتات مع معاينة. مستوحى من SVGOMG؛ يعمل في المتصفح — الملف يبقى على جهازك دون رفع إلى خادم.',
	tool_svg_optimizer_choose_file: 'اختر ملف SVG',
	tool_svg_optimizer_clear: 'مسح',
	tool_svg_optimizer_copy: 'نسخ',
	tool_svg_optimizer_desc:
		'حسّن SVG في المتصفح مع توفير بايتات ومعاينة؛ دون رفع إلى خادم.',
	tool_svg_optimizer_description:
		'محسّن SVG: الصق أو أسقط SVG، اختر خيارات التنظيف وقارن البايتات قبل/بعد مع معاينة. مثال: أيقونة نموذجية تُحمّل عند الفتح ويظهر التوفير بعد حذف التعليقات وبيانات المحرر. انسخ أو نزّل النتيجة. الملف يبقى على جهازك ولا يُرفع إلى خادم. هذه معالجة خفيفة في المتصفح وليست SVGO كاملًا.',
	tool_svg_optimizer_download: 'تنزيل',
	tool_svg_optimizer_drop_hint: 'أو أسقط .svg هنا. التحسين داخل هذا التبويب.',
	tool_svg_optimizer_empty: 'الصق SVG أو اختر ملفًا أولًا.',
	tool_svg_optimizer_err_not_svg: 'لا يبدو SVG. الصق markup يحتوي عنصر <svg> جذري.',
	tool_svg_optimizer_example:
		'تحميل المثال يدرج أيقونة بتعليقات XML ومساحات Inkscape وفراغات زائدة. مع كل الخيارات ينخفض الحجم وتبقى المعاينة كما هي.',
	tool_svg_optimizer_example_title: 'مثال',
	tool_svg_optimizer_faq_a1:
		'لا. يُقرأ SVG ويُحسَّن في هذا التبويب. لا يُرسل إلى خوادمنا.',
	tool_svg_optimizer_faq_a2:
		'خط أنابيب خفيف (تعليقات، بيانات وصفية، فراغات، تقريب، مجموعات فارغة). SVGO الكامل أعمق — استخدمه عند الحاجة.',
	tool_svg_optimizer_faq_a3:
		'حذف التعليقات يزيل <!-- … -->. بيانات المحرر تزيل xmlns/سمات Inkscape/Sketch و<metadata>. طي الفراغات يلصق الوسوم. تقريب الأرقام إلى منزلتين. المجموعات الفارغة تحذف <g></g> الفارغة.',
	tool_svg_optimizer_faq_a4:
		'المعاينة تعرض SVG المحسّن كصورة فقط؛ لا تُحقن markup في DOM الصفحة.',
	tool_svg_optimizer_faq_q1: 'هل يُرفع SVG؟',
	tool_svg_optimizer_faq_q2: 'ما الفرق عن SVGO أو SVGOMG؟',
	tool_svg_optimizer_faq_q3: 'ماذا تفعل الخيارات؟',
	tool_svg_optimizer_faq_q4: 'هل المعاينة آمنة؟',
	tool_svg_optimizer_how_body:
		'الصق أو أسقط SVG، اضبط خيارات التنظيف، راجع البايتات والمعاينة، ثم انسخ أو نزّل. كله محليًا في المتصفح.',
	tool_svg_optimizer_how_item_1: 'الصق markup SVG أو أسقط ملف .svg.',
	tool_svg_optimizer_how_item_2: 'فعّل: تعليقات، بيانات محرر، فراغات، تقريب، مجموعات فارغة.',
	tool_svg_optimizer_how_item_3: 'اقرأ البايت الأصلي والمحسّن ونسبة التوفير.',
	tool_svg_optimizer_how_item_4: 'تحقق من المعاينة ثم انسخ أو نزّل optimized.svg.',
	tool_svg_optimizer_how_title: 'كيف يعمل',
	tool_svg_optimizer_input_label: 'إدخال SVG',
	tool_svg_optimizer_input_ph: 'الصق <svg>…</svg> هنا…',
	tool_svg_optimizer_load_sample: 'تحميل مثال',
	tool_svg_optimizer_opt_collapse_whitespace: 'طي الفراغات بين الوسوم',
	tool_svg_optimizer_opt_round_numbers: 'تقريب أرقام المسار إلى منزلتين',
	tool_svg_optimizer_opt_strip_comments: 'إزالة تعليقات XML/HTML',
	tool_svg_optimizer_opt_strip_empty: 'حذف <g> الفارغة وفراغات السمات',
	tool_svg_optimizer_opt_strip_metadata: 'حذف بيانات المحرر (Inkscape، Sketch…)',
	tool_svg_optimizer_optimize: 'تحسين',
	tool_svg_optimizer_options_label: 'خيارات',
	tool_svg_optimizer_output_label: 'SVG محسّن',
	tool_svg_optimizer_preview_label: 'معاينة',
	tool_svg_optimizer_rules_body:
		'تنظيف SVG في المتصفح يفضّل ردود فعل فورية. راجع قبل النشر.',
	tool_svg_optimizer_rules_item_1:
		'التعليقات وxmlns المحرر آمنة للحذف في أيقونات الإنتاج غالبًا.',
	tool_svg_optimizer_rules_item_2:
		'تقريب الإحداثيات يصغّر الملف وقد يحرّك ضربات دقيقة — راجع المعاينة.',
	tool_svg_optimizer_rules_item_3:
		'حذف المجموعات الفارغة يساعد تصدير Sketch/Figma؛ تُحفظ المجموعات ذات id/transform.',
	tool_svg_optimizer_rules_item_4:
		'لضغط صور raster أيضًا استخدم محسّن الصور — هنا المتجهات فقط.',
	tool_svg_optimizer_rules_title: 'قواعد متوقعة',
	tool_svg_optimizer_sample_svg:
		'<!-- Sample icon with editor cruft -->\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"\n     width="48" height="48" viewBox="0 0 48 48"\n     inkscape:version="1.2">\n  <!-- background -->\n  <rect x="4"   y="4"\n        width="40.12345" height="40.67890"\n        rx="8.99999" fill="#6366f1"/>\n  <circle cx="24.555555" cy="18.333333" r="6.666666" fill="#fff"/>\n  <path d="M 12.123456 34.987654 L 24.111111 22.222222 L 35.999999 34.888888"\n        fill="none" stroke="#fff" stroke-width="2.555555"/>\n  <g></g>\n</svg>',
	tool_svg_optimizer_size_optimized: 'بعد التحسين',
	tool_svg_optimizer_size_original: 'أصلي',
	tool_svg_optimizer_size_saved: 'موفَّر',
	tool_svg_optimizer_stats_tpl: 'أصلي {orig} B → محسّن {opt} B ({pct}% توفير)',
	tool_svg_optimizer_status_copied: 'نُسخ إلى الحافظة.',
	tool_svg_optimizer_status_done: 'تم التحسين — راجع البايتات والمعاينة.',
	tool_svg_optimizer_title: 'محسّن SVG',
	tool_svg_optimizer_usecase_1: 'تصغير أيقونة من Sketch قبل إضافتها للمستودع.',
	tool_svg_optimizer_usecase_2: 'تنظيف SVG مضمّن في صفحة هبوط ورؤية التوفير دون SVGO.',
	tool_svg_optimizer_usecase_3: 'إزالة تعليقات وبيانات وصفية من تسليم تصميم مع معاينة مطابقة.',
	tool_svg_optimizer_usecases_title: 'حالات مناسبة',
};

export default ar;
