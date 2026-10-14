/**
 * i18n tool shard (images-to-ppt / ar).
 * صور متعددة إلى PowerPoint بالعربية: شريحة لكل صورة، 16:9/4:3، احتواء/تغطية، لون الخلفية.
 */
import type { SiteLangDict } from '../../../types';

/** قاموس النصوص العربية. */
const ar: SiteLangDict = {
	tool_images_to_ppt_title: "الصور إلى PowerPoint — صور إلى شرائح PPTX",
	tool_images_to_ppt_desc: "حوّل صور جهازك إلى ملف .pptx بشريحة واحدة لكل صورة.",
	tool_images_to_ppt_description:
		"حوّل عدة صور إلى عرض PowerPoint (.pptx) في المتصفح—شريحة لكل صورة، 16:9 أو 4:3، احتواء أو تغطية. الخطوات: اختر الصور، تحويل إلى PowerPoint، تنزيل. مثال: ثلاث صور → ثلاث شرائح. الملفات لا تغادر هذا التبويب ولا تُرفع إلى خادم.",
	tool_images_to_ppt_choose_files: "اختر الصور",
	tool_images_to_ppt_drop_hint: "أو أسقط عدة ملفات JPEG أو PNG أو WebP أو GIF هنا. المعالجة تبقى في هذا التبويب.",
	tool_images_to_ppt_convert: "تحويل إلى PowerPoint",
	tool_images_to_ppt_download: "تنزيل",
	tool_images_to_ppt_sample: "تحميل مثال",
	tool_images_to_ppt_clear: "مسح",
	tool_images_to_ppt_advanced: "إعدادات متقدمة (اختياري)",
	tool_images_to_ppt_layout_label: "حجم الشريحة",
	tool_images_to_ppt_layout_16x9: "عريض 16:9",
	tool_images_to_ppt_layout_4x3: "قياسي 4:3",
	tool_images_to_ppt_layout_hint: "معظم أجهزة العرض الحديثة تستخدم 16:9. اختر 4:3 للفصول القديمة.",
	tool_images_to_ppt_fit_label: "كيف تملأ الصور الشريحة",
	tool_images_to_ppt_fit_contain: "إظهار الصورة كاملة (أشرطة letterbox)",
	tool_images_to_ppt_fit_cover: "ملء الشريحة (قد تُقص الحواف)",
	tool_images_to_ppt_fit_hint: "الاحتواء يُبقي كل بكسل ظاهرًا. التغطية تملأ الشريحة وقد تقص الصور الطويلة أو العريضة.",
	tool_images_to_ppt_bg_label: "خلفية الشريحة",
	tool_images_to_ppt_bg_hint: "تظهر في أشرطة الـ letterbox عند اختيار الاحتواء. الافتراضي أبيض.",
	tool_images_to_ppt_progress: "جارٍ بناء PowerPoint…",
	tool_images_to_ppt_step_encode: "ترميز الصور",
	tool_images_to_ppt_step_build: "بناء الشرائح",
	tool_images_to_ppt_step_pack: "تعبئة PPTX",
	tool_images_to_ppt_encode_step: "ترميز الصورة {i} من {n}…",
	tool_images_to_ppt_build_step: "إضافة الشرائح إلى العرض…",
	tool_images_to_ppt_pack_step: "تعبئة ملف .pptx…",
	tool_images_to_ppt_elapsed: "انقضى {s} ث",
	tool_images_to_ppt_move_up: "تحريك لأعلى",
	tool_images_to_ppt_move_down: "تحريك لأسفل",
	tool_images_to_ppt_remove: "إزالة",
	tool_images_to_ppt_empty: "أضف صورة واحدة على الأقل أولًا.",
	tool_images_to_ppt_err_decode: "تعذّر فك ترميز الصورة. جرّب JPEG أو PNG أو WebP.",
	tool_images_to_ppt_err_convert: "تعذّر بناء ملف PowerPoint. جرّب صورًا أقل أو أصغر.",
	tool_images_to_ppt_err_lib: "فشل تحميل مكتبة PPTX. حدّث الصفحة وأعد المحاولة.",
	tool_images_to_ppt_warn_large: "ملف كبير (>25 MB) — قد يكون التحويل بطيئًا.",
	tool_images_to_ppt_warn_edge: "حافة تتجاوز نحو 8192 بكسل — قد تفشل بعض المتصفحات.",
	tool_images_to_ppt_warn_animation: "GIF متحركة: تُستخدم الإطار الأول فقط على الشريحة.",
	tool_images_to_ppt_status_converting: "جارٍ التحويل إلى PowerPoint…",
	tool_images_to_ppt_status_done: "تم — انقر «تنزيل» لحفظ .pptx.",
	tool_images_to_ppt_stats_tpl: "{n} شرائح → PPTX جاهز ({bytes})",
	tool_images_to_ppt_how_title: "خطوات تحويل الصور إلى باوربوينت",
	tool_images_to_ppt_how_body:
		"كل ملف في القائمة يصبح شريحة واحدة. رتّب بالأسهم ثم حوّل. الإعدادات الاختيارية تغيّر الحجم وطريقة الملء ولون الأشرطة.",
	tool_images_to_ppt_how_item_1: "اختر الصور أو أسقط ملفات JPEG أو PNG أو WebP أو GIF في منطقة الإسقاط.",
	tool_images_to_ppt_how_item_2: "أعد الترتيب بـ «تحريك لأعلى / لأسفل» إن لزم، وأزل ما لا تحتاجه.",
	tool_images_to_ppt_how_item_3: "اختياريًا افتح الإعدادات المتقدمة لاختيار 16:9 أو 4:3، احتواء أو تغطية، ولون الخلفية.",
	tool_images_to_ppt_how_item_4: "انقر «تحويل إلى PowerPoint»، انتظر شريط التقدم، ثم انقر «تنزيل».",
	tool_images_to_ppt_why_choose_title: "لماذا تستخدم أداة الصور إلى PowerPoint — صور إلى شرائح PPTX",
	tool_images_to_ppt_why_choose_item_1: "شريحة لكل صورة بالترتيب الذي تحدده — بلا رفع سحابي وبلا حساب.",
	tool_images_to_ppt_why_choose_item_2: "عريض 16:9 أو كلاسيكي 4:3 ليطابق جهاز العرض في القاعة.",
	tool_images_to_ppt_why_choose_item_3: "الاحتواء يُبقي الصورة كاملة؛ التغطية تملأ الشريحة عندما تفضّل مظهرًا ممتلئًا.",
	tool_images_to_ppt_why_choose_item_4: "تحذيرات ناعمة للملفات الضخمة والحواف العملاقة وملفات GIF المتحركة (الإطار الأول فقط).",
	tool_images_to_ppt_why_choose_item_5: "واجهة تقدم مرئية أثناء ترميز كل صورة وتعبئتها في .pptx.",
	tool_images_to_ppt_rules_title: "القواعد",
	tool_images_to_ppt_rules_body: "يُبنى العرض بـ PptxGenJS بالكامل داخل تبويب المتصفح هذا.",
	tool_images_to_ppt_rules_item_1: "التخطيط الافتراضي عريض 16:9؛ بدّل إلى 4:3 في الإعدادات المتقدمة عند الحاجة.",
	tool_images_to_ppt_rules_item_2: "ترتيب الشرائح يتبع القائمة. استخدم «تحريك لأعلى / لأسفل» قبل التحويل.",
	tool_images_to_ppt_rules_item_3: "الاحتواء يضيف أشرطة بلون الخلفية؛ التغطية تقص لملء صندوق المحتوى.",
	tool_images_to_ppt_rules_item_4: "ملفات GIF المتحركة تساهم بالإطار الأول فقط. لا تُضاف عناوين أو انتقالات هنا — عدّلها في PowerPoint بعد التنزيل.",
	tool_images_to_ppt_rules_item_5: "تحميل مكتبة PPTX من هذا الموقع لا يرفع صورك إلى خوادمنا.",
	tool_images_to_ppt_example_title: "مثال",
	tool_images_to_ppt_example:
		"«تحميل مثال» يبني ثلاث شرائح بكتل لونية (sample-a وsample-b وsample-c) بحجم 16:9 ووضع احتواء. «تحويل إلى PowerPoint» يكتمل في المتصفح؛ «تنزيل» يحفظ images.pptx. بدّل إلى 4:3 أو تغطية وحوّل مجددًا لمقارنة القص.",
	tool_images_to_ppt_usecases_title: "متى تستخدمها",
	tool_images_to_ppt_usecase_1: "تحويل مجموعة صور من الهاتف إلى عرض سريع دون فتح PowerPoint على سطح المكتب أولًا.",
	tool_images_to_ppt_usecase_2: "جولات منتج تحتاج فيها كل لقطة شاشة إلى شريحة كاملة أو بأشرطة.",
	tool_images_to_ppt_usecase_3: "صور صف أو ميدان يجب أن تطابق جهاز عرض 4:3 ما زال قيد الاستخدام.",
	tool_images_to_ppt_usecase_4: "بناء مسودة عرض من الصور قبل إضافة عناوين وملاحظات وحركات في PowerPoint أو LibreOffice Impress.",
	tool_images_to_ppt_faq_q1: "هل تُرفع صوري؟",
	tool_images_to_ppt_faq_a1:
		"لا. فك الترميز وتخطيط الشرائح وتعبئة PPTX تجري كلها في تبويب المتصفح. الطلب الشبكي الوحيد هو تحميل سكربت PptxGenJS من مجلد vendor في هذا الموقع.",
	tool_images_to_ppt_faq_q2: "هل أحتاج تثبيت Microsoft PowerPoint؟",
	tool_images_to_ppt_faq_a2:
		"لا. أي تطبيق يفتح .pptx يكفي — PowerPoint، وعروض Google (ملف → استيراد)، وLibreOffice Impress، وKeynote وغيرها.",
	tool_images_to_ppt_faq_q3: "هل يمكنني إضافة عناوين أو حركات هنا؟",
	tool_images_to_ppt_faq_a3:
		"ليس في هذه الصفحة. صدّر شرائح الصور أولًا، ثم افتح الملف في PowerPoint (أو Impress) لإضافة نص وانتقالات وملاحظات المحاضر.",
	tool_images_to_ppt_faq_q4: "صور إلى باوربوينت مقابل صور إلى PDF؟",
	tool_images_to_ppt_faq_a4:
		"PPTX يبقى قابلًا للتحرير كشرائح. PDF ثابت للنشرات والطباعة. استخدم أداة الصور إلى PDF عندما تحتاج مستندًا لا عرضًا.",
	tool_images_to_ppt_faq_q5: "احتواء أم تغطية — أيهما أختار؟",
	tool_images_to_ppt_faq_a5:
		"الاحتواء (الافتراضي) يُظهر الصورة كاملة بأشرطة بلون الخلفية. التغطية تملأ الشريحة وقد تقص الحواف — مفيدة للقطات المنتج الممتلئة.",
	tool_images_to_ppt_faq_q6: "ماذا يحدث لملفات GIF المتحركة؟",
	tool_images_to_ppt_faq_a6:
		"يُوضع الإطار الأول فقط على الشريحة. PowerPoint لا يشغّل إطارات GIF المتعددة كحركة من هذا التصدير.",
	tool_images_to_ppt_faq_q7: "لماذا التحويل بطيء أو يفشل؟",
	tool_images_to_ppt_faq_a7:
		"الملفات الكبيرة جدًا (>25 MB) أو الحواف فوق نحو 8192 بكسل ترهق المتصفح. صغّر الصور أو اضغطها، ثم حوّل مجددًا بملفات أقل إن لزم.",
	tool_images_to_ppt_article: "حوّل الصور إلى عرض PowerPoint PPTX في المتصفح",
	tool_images_to_ppt_references: "مراجع PptxGenJS وMDN Blob لمسار التصدير من جهة العميل.",
	tool_images_to_ppt_ref_a_label: "PptxGenJS — مكتبة PowerPoint لـ JavaScript",
	tool_images_to_ppt_ref_b_label: "MDN — Blob",
};

export default ar;
