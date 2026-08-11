/**
 * i18n tool shard (open-graph-preview / ar).
 * العربية — إعادة كتابة مستقلة موجهة للبحث المحلي.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_og_home_title: 'معاينة Open Graph',
	tool_og_home_desc:
		'اجعل كل مشاركة لصفحتك تجلب النقرات — اعرض كيف ستبدو عند مشاركتها على فيسبوك وX وتطبيقات المراسلة، من المتصفح مباشرة.',
	tool_og_title: 'معاينة Open Graph — تحقق من بطاقات المشاركة الاجتماعية',
	tool_og_description:
		'غياب صورة OG أو العنوان يقلل نقرات المشاركة. الصق وسوم og/twitter أو رابطًا لمعاينة بطاقات Facebook وX والدردشة. اللصق محلي. مثال: 1200×630.',
	tool_og_tags_tab: 'لصق الوسوم',
	tool_og_url_tab: 'جلب URL',
	tool_og_tags_ph: 'الصق وسوم <meta property="og:*"> و <meta name="twitter:*"> هنا…',
	tool_og_url_ph: 'https://example.com/page',
	tool_og_url_fetch: 'جلب URL',
	tool_og_preview: 'معاينة',
	tool_og_sample: 'مثال',
	tool_og_clear: 'مسح',
	tool_og_copy: 'نسخ',
	tool_og_copied: 'تم النسخ',
	tool_og_running: 'جارٍ التحقق…',
	tool_og_error_prefix: 'خطأ: ',
	tool_og_url_error: 'أدخل عنوان URL صحيحًا (http أو https).',
	tool_og_fetch_failed: 'تعذّر جلب URL. قد تكون الصفحة غير متصلة، أو تحظر الروبوتات، أو لا تعيد HTML.',
	tool_og_no_tags: 'لم يتم العثور على وسوم OG',
	tool_og_no_tags_fallback:
		'بدون وسوم Open Graph، تبني فيسبوك وX وواتساب المعاينة من عنوان الصفحة ووصف meta وأول صورة فيها.',
	tool_og_required_label: 'إلزامي',
	tool_og_optional_label: 'اختياري',
	tool_og_missing_label: 'ناقص',
	tool_og_ok_label: 'موجود',
	tool_og_field_og_title: 'og:title',
	tool_og_field_og_description: 'og:description',
	tool_og_field_og_image: 'og:image',
	tool_og_field_og_url: 'og:url',
	tool_og_field_og_site_name: 'og:site_name',
	tool_og_field_og_type: 'og:type',
	tool_og_field_twitter_card: 'twitter:card',
	tool_og_field_twitter_title: 'twitter:title',
	tool_og_field_twitter_description: 'twitter:description',
	tool_og_field_twitter_image: 'twitter:image',
	tool_og_field_twitter_site: 'twitter:site',
	tool_og_table_title: 'حالة الوسوم',
	tool_og_ratio_warning: 'يُفضَّل أن تكون og:image حوالي 1200×630 بكسل (1.91:1).',
	tool_og_ratio_ok: 'og:image قريبة من 1200×630 بكسل (1.91:1).',
	tool_og_ratio_unknown: 'تعذّرت قراءة حجم الصورة من عنوان URL.',
	tool_og_dimensions: '{w}×{h} بكسل',
	tool_og_platform_facebook: 'فيسبوك',
	tool_og_platform_x: 'X',
	tool_og_platform_generic: 'تطبيقات المراسلة (بأسلوب واتساب)',
	tool_og_card_summary: 'summary',
	tool_og_card_large: 'summary_large_image',
	tool_og_twitter_inferred: 'لا يوجد twitter:card محدد — تستنتج المنصات بطاقة summary من وسوم og:.',
	tool_og_how_title: 'كيف يعمل',
	tool_og_how_body:
		'تحلل المعاينة وسوم og:/twitter: التي تلصقها (أو تستخرجها من HTML المجلوب من URL) وترسم ثلاث بطاقات مشاركة. تعرض فيسبوك الصورة بنسبة 1.91:1 على اليسار مع العنوان والوصف والنطاق أسفلها. تتبع X قيمة twitter:card: summary_large_image تعرض صورة كبيرة بالأعلى، وsummary صورة صغيرة بجانب النص. تطبيقات المراسلة مثل واتساب تعرض بطاقة كبيرة واحدة. يميز جدول الحقول og:title وog:description وog:image كإلزامية ويسرد الاختيارية.',
	tool_og_rules_title: 'القواعد التي تتبعها المعاينة',
	tool_og_rules_body: 'هذه أحجام الصور وآليات الاسترجاع التي تستخدمها المنصات، وفقًا لبروتوكول Open Graph ووثائق X Cards.',
	tool_og_rules_item_1: 'الحقول الإلزامية: og:title وog:description وog:image. تُعلَّم الناقصة حتى تصححها قبل النشر.',
	tool_og_rules_item_2: 'حجم og:image 1200×630 بكسل (1.91:1) يعمل على كل المنصات الرئيسية. تدعم فيسبوك الآن أيضًا قصّات 2:1 و1:1؛ الصور الصغيرة جدًا غالبًا تُكبَّر وتظهر ضبابية.',
	tool_og_rules_item_3: 'twitter:card بنوع summary_large_image يقتضي صورة كبيرة، وsummary صورة صغيرة. بدون twitter:card تستنتج المنصات بطاقة summary من وسوم og:.',
	tool_og_rules_item_4: 'عند غياب og:title أو og:image، تسترجع المنصات عنوان HTML ووصف meta وأول صورة في الصفحة.',
	tool_og_rules_item_5: 'يُقاس حجم الصورة بتحميلها في المتصفح؛ إذا تعذّر التحميل (محجوبة أو غير متصلة أو عنوان خاطئ) يبلّغ الفحص بـ«غير معروف».',
	tool_og_example_title: 'مثال',
	tool_og_example:
		'تصف وسوم المثال مقالة مدونة تحتوي og:image بحجم 1200×630 وtwitter:card بنوع summary_large_image. تعرض المعاينة بطاقة فيسبوك مع الصورة يسارًا، وبطاقة X كبيرة، وبطاقة بأسلوب واتساب، وجدول وسوم تكون فيه كل الحقول الإلزامية موجودة.',
	tool_og_usecases_title: 'حالات استخدام مناسبة',
	tool_og_usecase_1:
		'قبل نشر مقالة أو صفحة هبوط، الصق الوسوم مرة واحدة وتأكد من ظهور بطاقة المشاركة بشكل صحيح على فيسبوك وX وتطبيقات المراسلة.',
	tool_og_usecase_2:
		'عندما لا يظهر رابط مشترك بأي صورة أو تظهر مقطوعة، الصق وسوم og: لمعرفة ما إذا كانت og:image ناقصة أم نسبتها خاطئة.',
	tool_og_usecase_3:
		'بعد تحديث نظام إدارة المحتوى أو القالب، اجلب عنوان URL الحي وتحقق من أن وسوم og: ما تزال مطابقة للصفحة.',
	tool_og_faq_q1: 'ماذا يحدث إذا لم تحتوِ الصفحة على وسوم Open Graph؟',
	tool_og_faq_a1:
		'تبني فيسبوك وX وواتساب المعاينة من عنوان HTML ووصف meta وأول صورة في الصفحة. قد تكون البطاقة غير مكتملة أو تعرض صورة خاطئة، ولهذا توجد الحقول الإلزامية og:.',
	tool_og_faq_q2: 'ما الحجم المناسب لـ og:image؟',
	tool_og_faq_a2:
		'الحجم الآمن هو 1200×630 بكسل، بنسبة 1.91:1 تقبلها كل المنصات الرئيسية. تدعم فيسبوك الآن أيضًا قصّات 2:1 و1:1. الصور الصغيرة جدًا تُكبَّر غالبًا وتبدو ضبابية.',
	tool_og_faq_q3: 'كيف ترتبط twitter:card بوسوم og:؟',
	tool_og_faq_a3:
		'تحدد twitter:card التخطيط: summary_large_image تعرض صورة عريضة، وsummary صورة صغيرة. عند غياب twitter:title أو twitter:description أو twitter:image، تسترجع X الوسم og: المقابل.',
	tool_og_faq_q4: 'ماذا تفعل المنصة عند غياب og:image؟',
	tool_og_faq_a4:
		'تسترجع أول صورة في HTML الصفحة، أو تعرض البطاقة بدون صورة. غياب og:image هو السبب الأكثر شيوعًا لظهور رابط مشترك بدون صورة معاينة.',
	tool_og_faq_q5: 'لماذا يبلّغ فحص النسبة بـ«غير معروف»؟',
	tool_og_faq_a5:
		'تحاول المعاينة تحميل og:image عبر تحميل صورة في المتصفح لقراءة حجمها الفعلي. إذا كانت الصورة محجوبة أو غير متصلة أو بطيئة أو رفضها الخادم، يتعذّر قراءة الحجم فيُبلَّغ «غير معروف».',
	tool_og_faq_q6: 'هل تُرفع وسومي إلى أي مكان؟',
	tool_og_faq_a6:
		'لا. في وضع اللصق يتم التحليل والمعاينة على جهازك. وضع URL يجلب الصفحة مرة واحدة عبر عاملنا ولا يخزنها.',
	tool_og_references: 'ogp.me — بروتوكول Open Graph؛ X — ترميز البطاقات.',
	tool_og_ref_ogp_label: 'ogp.me — بروتوكول Open Graph',
	tool_og_ref_x_label: 'X — ترميز البطاقات',
};

export default ar;
