/**
 * i18n tool shard (meta-serp-preview / ar).
 * Arabic locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_serp_home_title: 'معاينة نتائج جوجل',
	tool_serp_home_desc: 'تحقق من اقتطاع العنوان والوصف قبل النشر.',
	tool_serp_title: 'معاينة نتائج جوجل — تحقق من اقتطاع العنوان والوصف',
	tool_serp_description:
		'الصق عنوانًا ووصفًا لمعاينة كيف تظهر نتيجة بحث جوجل على الحاسوب والهاتف، وأين يُقتطع النص. أدخل العنوان والوصف ورابطًا اختياريًا، وسترى عدد الأحرف والعرض التقريبي بالبكسل ونقطة القص؛ يمكنك أيضًا مقارنة عنوانين متجاورين. كل شيء يعمل داخل متصفحك دون رفع أي بيانات. مثال: عنوان من 60 حرفًا لاتينيًا وعنوان من 30 حرفًا CJK قد يبلغان حد البكسل بعدد مختلف من الأحرف.',
	tool_serp_preview: 'معاينة',
	tool_serp_sample: 'مثال',
	tool_serp_clear: 'مسح',
	tool_serp_copy: 'نسخ',
	tool_serp_copied: 'تم النسخ',
	tool_serp_title_label: 'العنوان',
	tool_serp_title_ph: 'عنوان الصفحة الظاهر في نتائج البحث',
	tool_serp_desc_label: 'وصف ميتا',
	tool_serp_desc_ph: 'نص الاقتطاع أسفل عنوان النتيجة',
	tool_serp_url_label: 'الرابط (اختياري)',
	tool_serp_url_ph: 'مثال https://example.com/page',
	tool_serp_compare_label: 'قارن مع عنوان ثانٍ',
	tool_serp_title_b_label: 'العنوان ب',
	tool_serp_title_b_ph: 'الصق عنوانًا بديلًا للمقارنة',
	tool_serp_desktop: 'عرض الحاسوب',
	tool_serp_mobile: 'عرض الهاتف',
	tool_serp_char_count: '{n} حرفًا',
	tool_serp_px_width: '~{n}px',
	tool_serp_cut_warning: 'اقتُطع — السطر يتجاوز العرض التقريبي {limit}px',
	tool_serp_fit: 'يناسب العرض',
	tool_serp_serp_url_display: 'example.com › page',
	tool_serp_err_title_empty: 'أدخل عنوانًا لبدء المعاينة.',
	tool_serp_how_title: 'كيف يعمل',
	tool_serp_how_body:
		'اكتب أو الصق العنوان والوصف ورابطًا اختياريًا. تقدر الأداة عدد الأحرف والبكسل التقريبي لكل سطر عبر تقريب لعرض الحروف (الحروف العربية والواسعة تُحسب أكثر من الحروف اللاتينية الضيقة)، ثم ترسم نتيجة بنمط جوجل للحاسوب وأخرى للهاتف. الأسطر الأوسع من العرض المقدر تُعلَّم بعلامة قص.',
	tool_serp_rules_title: 'ماذا تُظهر المعاينة',
	tool_serp_rules_body:
		'حدود البكسل تقريبية. جوجل يقيس العرض المقدَّم لا عدد الأحرف، لذا اللغات كثيفة الحروف والحروف الواسعة تُقتطع بعدد أحرف أقل.',
	tool_serp_rules_item_1: 'حد عنوان الحاسوب يُقدَّر بنحو 600px والهاتف بنحو 460px؛ أي سطر أوسع يُعرض مع علامة قص.',
	tool_serp_rules_item_2: 'الوصف يُقدَّر بسطرين تقريبًا (نحو 600px للحاسوب و460px للهاتف لكل سطر).',
	tool_serp_rules_item_3: 'عرض الحرف تقديري: الحروف اللاتينية نحو 0.5em والأحرف CJK قرب 1em والإيموجي أعرض.',
	tool_serp_rules_item_4: 'هذه تقديرات للتخطيط. قد تعيد جوجل كتابة العناوين أو الأوصاف، والظهور الفعلي يعتمد على خط المستخدم وعرض نافذته.',
	tool_serp_example_title: 'مثال',
	tool_serp_example:
		'مثال: عنوان «Meta SERP Preview — How to Preview Google Title & Description Truncation Online» ووصف من سطرين ورابط example.com/page → على الحاسوب يُقتطع العنوان قرب الحرف 57 مع «…» وعلى الهاتف قبل ذلك؛ الوصف يبقى ضمن سطرين.',
	tool_serp_usecases_title: 'مناسب لـ',
	tool_serp_usecase_1: 'قبل النشر: الصق العنوان والوصف النهائيين لترى هل تبقى الكلمات المفتاحية بعد القص.',
	tool_serp_usecase_2: 'قارن عنوانين مرشحين جنبًا إلى جنب واختر ما يُبقي الكلمة المفتاحية ظاهرة على الهاتف.',
	tool_serp_usecase_3: 'صفحات CJK: تحقق من عدد الأحرف الصينية التي تبقى قبل القص، فالأحرف الواسعة تبلغ الحد بعدد أقل.',
	tool_serp_faq_q1: 'لماذا يُقتطع عنوان من 30 حرفًا CJK قبل عنوان إنجليزي من 60 حرفًا؟',
	tool_serp_faq_a1: 'نتائج البحث تُقصّ حسب عرض البكسل المقدَّم لا عدد الأحرف. أحرف CJK عرضها نحو em واحد بينما متوسط الحروف اللاتينية نصف em، لذا يملأ عدد أقل نفس العرض.',
	tool_serp_faq_q2: 'هل حدود البكسل دقيقة؟',
	tool_serp_faq_a2: 'لا. تختلف عروض الحاسوب والهاتف حسب الجهاز والخط. تستخدم الأداة الحدين الشائعين ~600px للحاسوب و~460px للهاتف كتقدير للتخطيط، وليس ضمانًا لكيفية عرض جوجل لصفحتك.',
	tool_serp_faq_q3: 'هل يطابق معاينة الهاتف في Search Console؟',
	tool_serp_faq_a3: 'إنه تقدير محلي في الاتجاه نفسه. للمظهر النهائي، افتح صفحتك في فحص الروابط بـ Search Console أو اختبار النتائج المنسقة، اللذان يعرضان وفق بيئة جوجل الفعلية.',
	tool_serp_faq_q4: 'هل يُرفع عنواني إلى أي مكان؟',
	tool_serp_faq_a4: 'لا. كل النصوص تبقى في تبويب متصفحك ولا تُرسل إلى خادم. أغلق التبويب فسيختفي كل شيء.',
	tool_serp_references: 'Google Search Central — التحكم في روابط العناوين؛ Google Search Central — التحكم في المقتطفات.',
	tool_serp_ref_title_label: 'Search Central — التحكم في روابط العناوين',
	tool_serp_ref_snippet_label: 'Search Central — التحكم في المقتطفات',
};

export default ar;
