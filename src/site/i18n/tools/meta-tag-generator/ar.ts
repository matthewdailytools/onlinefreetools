/**
 * i18n tool shard (meta-tag-generator / ar).
 * العربية — إعادة كتابة مستقلة موجهة للبحث المحلي.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_meta_home_title: 'مولّد وسوم الميتا',
	tool_meta_home_desc:
		'أنشئ وسوم العنوان والوصف وcanonical وOpen Graph التي تجلب النقرات في البحث — ولّد وسوم الرأس كاملة لصفحتك من المتصفح.',
	tool_meta_title: 'مولّد وسوم الميتا — أنشئ وسوم الرأس كاملة لصفحتك',
	tool_meta_description:
		'العنوان ووصف الميتا يشكّلان مقتطف البحث، وcanonical يحدد الرابط المعتمد بين النسخ المكررة. املأ الحقول لتحصل على وسوم head جاهزة مع تلميحات الطول، وما تكتبه يبقى في متصفحك. مثال: canonical مع og.',
	tool_meta_title_label: 'عنوان الميتا',
	tool_meta_title_ph: 'مولّد وسوم الميتا — أنشئ وسوم الرأس كاملة لصفحتك',
	tool_meta_title_hint: 'اجعله قريبًا من 60 حرفًا. قد تعيد محركات البحث كتابة العناوين الأطول.',
	tool_meta_desc_label: 'وصف الميتا',
	tool_meta_desc_ph: 'أنشئ وسوم رأس جاهزة للصق مع تلميحات طول وقيم robots وحقول OG.',
	tool_meta_desc_hint: 'اجعله قريبًا من 155–160 حرفًا. قد يُقتطع النص الأطول في نتائج البحث.',
	tool_meta_canonical_label: 'عنوان canonical',
	tool_meta_canonical_ph: 'https://example.com/your-page',
	tool_meta_canonical_hint: 'العنوان المفضل لهذه الصفحة. أضف العنوان الكامل مع البروتوكول.',
	tool_meta_robots_label: 'وسم robots',
	tool_meta_robots_none: '— دون إضافة وسم robots —',
	tool_meta_robots_index_follow: 'index, follow (الافتراضي، يسمح لمحركات البحث بالفهرسة)',
	tool_meta_robots_noindex_follow: 'noindex, follow (إخفاء من النتائج، مع متابعة الروابط)',
	tool_meta_robots_index_nofollow: 'index, nofollow (السماح بالفهرسة دون متابعة الروابط)',
	tool_meta_robots_noindex_nofollow: 'noindex, nofollow (إخفاء الصفحة وعدم متابعة الروابط)',
	tool_meta_og_title_label: 'og:title',
	tool_meta_og_desc_label: 'og:description',
	tool_meta_og_image_label: 'og:image (عنوان كامل)',
	tool_meta_og_type_label: 'og:type',
	tool_meta_og_url_label: 'og:url',
	tool_meta_generate: 'إنشاء',
	tool_meta_sample: 'تحميل مثال',
	tool_meta_clear: 'مسح',
	tool_meta_copy: 'نسخ',
	tool_meta_copied: 'تم النسخ',
	tool_meta_error_prefix: 'خطأ: ',
	tool_meta_canonical_protocol: 'عنوان canonical بلا بروتوكول — أضف https:// أو http:// كي تتمكن محركات البحث من قراءته.',
	tool_meta_title_len: 'العنوان: {n} حرفًا',
	tool_meta_title_len_warn: 'العنوان: {n} حرفًا — تجاوز 60، يُنصح بالتقصير.',
	tool_meta_desc_len: 'الوصف: {n} حرفًا',
	tool_meta_desc_len_warn: 'الوصف: {n} حرفًا — تجاوز 160، قد يُقتطع.',
	tool_meta_output_label: 'مقطع الرأس المولّد',
	tool_meta_how_title: 'كيف يعمل',
	tool_meta_how_body:
		'يبني المولّد وسوم الرأس المقابلة من حقولك. تُتجاهل الحقول الاختيارية الفارغة، فيحتوي الناتج على ما ملأته فقط. يُرمَّز كل قيمة في HTML: تتحول & إلى &amp; و< إلى &lt;، فتبقى الوسوم سليمة داخل صفحتك. تحذرك تلميحات الطول عندما يتجاوز العنوان أو الوصف الحدود الشائعة، دون قطع نصك.',
	tool_meta_how_item_1: 'املأ العنوان والوصف وأي حقول اختيارية تحتاجها.',
	tool_meta_how_item_2: 'أضف canonical وrobots وقيم Open Graph عند الحاجة.',
	tool_meta_how_item_3: 'انقر «إنشاء» لبناء وسوم head مُهَرْبَة.',
	tool_meta_how_item_4: 'انسخ المخرجات والصقها داخل <head> في صفحتك.',
	tool_meta_rules_title: 'القواعد التي يتبعها المولّد',
	tool_meta_rules_body: 'تتبع هذه القواعد إرشادات Google Search Central حول وسوم الميتا وروابط العنوان وعناوين canonical.',
	tool_meta_rules_item_1:
		'عنوان الميتا والوصف اقتراحات لا أوامر: قد تعيد محركات البحث كتابتها أو اقتطاعها، لذا اجعل العنوان قريبًا من 60 حرفًا والوصف من 155–160.',
	tool_meta_rules_item_2:
		'تُرمَّز جميع القيم في HTML: & < > " و \' تتحول إلى كيانات، فلا تستطيع الحروف الموجودة في عنوانك أو وصفك كسر بنية الوسوم.',
	tool_meta_rules_item_3:
		'يجب أن يكون عنوان canonical عنوانًا مطلقًا كاملًا مع بروتوكول. العنوان النسبي أو بلا بروتوكول لا يصلح هدفًا للـcanonical.',
	tool_meta_rules_item_4:
		'يستخدم وسم robots القيم index/noindex وfollow/nofollow. عند غيابه تستخدم محركات البحث افتراضها الخاص وهو الفهرسة والمتابعة.',
	tool_meta_rules_item_5:
		'يمكن أن تتعايش وسوم canonical وOpen Graph في صفحة واحدة: يجب أن يطابق og:url عنوان canonical كي تشير مشاركات الشبكات إلى العنوان نفسه.',
	tool_meta_example_title: 'مثال',
	tool_meta_example:
		'يملأ المثال العنوان والوصف وcanonical وrobots وثلاثة حقول Open Graph. يخرج المقطع المولّد وسم <title> وmeta description ورابط canonical ووسم robots ووسوم og: المملوءة.',
	tool_meta_usecases_title: 'حالات استخدام مناسبة',
	tool_meta_usecase_1:
		'بناء قالب صفحة جديد: ولّد كتلة الرأس مرة واحدة، وراجع تلميحات الطول ثم ألصقها في القالب قبل النشر.',
	tool_meta_usecase_2:
		'تسليم عمل لعميل: ولّد مقطع الرأس الدقيق مع حقلي canonical وOG ثم ألصقه في نظام إدارة المحتوى.',
	tool_meta_usecase_3:
		'قبل النشر ولّد الوسوم وقارنها بمعاينة نتائج البحث ليتطابق العنوان والوصف مع الصفحة الظاهرة.',
	tool_meta_faq_q1: 'ماذا تعني قيم وسم robots؟',
	tool_meta_faq_a1:
		'index يسمح لمحركات البحث بإدراج الصفحة في النتائج، بينما noindex يمنع ذلك. follow يسمح بزحف روابط الصفحة وnofollow يمنعه. عند غياب الوسم يكون الافتراضي index, follow.',
	tool_meta_faq_q2: 'هل تُرمَّز الأحرف الخاصة في قيمي؟',
	tool_meta_faq_a2:
		'نعم. يرمِّز المولّد & < > " و \'، فتتحول & إلى &amp; و< إلى &lt;. تبقى وسومك سليمة حتى لو احتوت القيمة أحرفًا شبيهة بالترميز.',
	tool_meta_faq_q3: 'هل يمكن أن تتعايش وسوم canonical وOpen Graph؟',
	tool_meta_faq_a3:
		'نعم، فهما يخدمان أنظمة مختلفة. يخبر رابط canonical محركات البحث بالعنوان المفضل، بينما تصف وسوم og: الصفحة للمشاركة على الشبكات. اجعل og:url متوافقًا مع عنوان canonical.',
	tool_meta_faq_q4: 'كم يجب أن يكون طول العنوان والوصف؟',
	tool_meta_faq_a4:
		'الحدود الشائعة نحو 60 حرفًا للعنوان و155–160 للوصف. إنها اقتراحات: قد تعيد محركات البحث كتابة القيم الأطول أو اقتطاعها.',
	tool_meta_faq_q5: 'ماذا يحدث للحقول الفارغة؟',
	tool_meta_faq_a5:
		'تُتجاهل الحقول الاختيارية الفارغة، فيحتوي المقطع المولّد على وسوم الحقول التي ملأتها فقط.',
	tool_meta_faq_q6: 'هل تُرفع بياناتي إلى أي مكان؟',
	tool_meta_faq_a6: 'لا. يعمل المولّد بالكامل في متصفحك ولا يُرفع شيء.',
	tool_meta_references: 'Google Search Central — وسوم الميتا التي تفهمها جوجل؛ التحكم في روابط العنوان؛ عناوين canonical.',
	tool_meta_ref_searchcentral_tags_label: 'Search Central — وسوم الميتا التي تفهمها جوجل',
	tool_meta_ref_searchcentral_title_label: 'Search Central — التحكم في روابط العنوان',
	tool_meta_ref_searchcentral_canonical_label: 'Search Central — عناوين canonical',
};

export default ar;
