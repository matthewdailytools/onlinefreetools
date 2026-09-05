/**
 * i18n tool shard (midjourney-prompt-builder / ar).
 * إعادة كتابة وفق ما يبحث عنه المستخدم العربي: «منشئ برومبت Midjourney»، «كيف أكتب برومبت ميدجورني»،
 * «معامل --ar»، «تصدير البرومبت بصيغة JSON». المصطلح الرئيسي في العنوان الأول، والبقية في الوصف والأسئلة وحالات الاستخدام.
 * الحدود الواقعية: التركيب يجري داخل المتصفح افتراضياً، ولا يُرسل المسوّد إلى Cloudflare Workers AI إلا عند الضغط على
 * «توسيع» أو «تنقيح» (بعد Turnstile وبحدود استخدام). لا تُنتج هذه الصفحة صوراً ولا تستدعي Midjourney.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_midjourney_prompt_builder_article:
		'ركّب هنا برومبت Midjourney قبل أن تشغّله: اكتب الموضوع والأسلوب والإضاءة ونسبة الأبعاد ومعاملات MJ، فتجمعها الصفحة داخل المتصفح في صيغة Markdown أو JSON جاهزة للّصق في ChatGPT أو Gemini أو Claude أو DeepSeek. ما تنتجه هذه الصفحة نصٌّ فقط: لا تولّد صوراً ولا تستدعي Midjourney. افتراضياً لا يُرسل شيء؛ وعند الضغط على «توسيع» أو «تنقيح» يذهب المسوّد إلى Cloudflare Workers AI بعد فحص Turnstile.',
	tool_midjourney_prompt_builder_build:
		'أنشئ البرومبت',
	tool_midjourney_prompt_builder_clear:
		'تفريغ',
	tool_midjourney_prompt_builder_copy:
		'نسخ',
	tool_midjourney_prompt_builder_desc:
		'منشئ برومبت Midjourney: اكتب الموضوع والأسلوب والإضاءة ونسبة الأبعاد فتجمعها الصفحة في Markdown أو JSON؛ ذكاء Cloudflare اختياري مع Turnstile.',
	tool_midjourney_prompt_builder_description:
		'منشئ برومبت Midjourney: تكتب الموضوع والأسلوب والإضاءة ونسبة الأبعاد ومعاملات MJ، فتجمعها الصفحة في سطر واحد جاهز للّصق؛ تتحول نسبة الأبعاد إلى --ar، وإن لم تُحدَّد الإصدارة يُضاف --v 6.1. الصيغة الافتراضية Markdown، وهناك JSON لسكربتاتك، ومثال الساموراي على الجسر يعمل بمجرد فتح الصفحة. وإن أردت وصفاً أدقّ يرسل «توسيع» أو «تنقيح» المسوّد إلى Cloudflare Workers AI (يلزم Turnstile وهناك حدود). نصٌّ فقط: لا صور تُولَّد هنا.',
	tool_midjourney_prompt_builder_download:
		'تنزيل',
	tool_midjourney_prompt_builder_empty:
		'املأ حقلاً واحداً على الأقل قبل إنشاء البرومبت.',
	tool_midjourney_prompt_builder_example:
		'المُدخل: الموضوع = ساموراي يستلّ سيفه على جسر مغطى بالطحلب، رذاذ مطر، بوابة تُوري في الخلفية؛ الأسلوب = حبر سينمائي بدرجات فيروزية وفحمية وحُبيبات ناعمة؛ الإضاءة = ضوء خلفي عند الشروق مع ضباب حجمي؛ نسبة الأبعاد = 16:9؛ المعاملات = --v 6.1 --style raw --stylize 120 --chaos 8. المُخرج (Markdown): يضم قسم ## Task سطر Midjourney الذي يجمع الموضوع والأسلوب والإضاءة وينتهي بـ --ar 16:9. وبالتبديل إلى JSON تصل البيانات نفسها في حقول.',
	tool_midjourney_prompt_builder_example_title:
		'مثال',
	tool_midjourney_prompt_builder_faq_a1:
		'التركيب يجري داخل هذا التبويب، فلا يُرسل شيء افتراضياً. الإرسال يحدث فقط عند الضغط على «توسيع» أو «تنقيح»، ووجهته Cloudflare Workers AI وحدها؛ ولا نمرّر النص من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek.',
	tool_midjourney_prompt_builder_faq_a2:
		'في الوضع المحلي لا يُستدعى أي نموذج، فالصفحة ترتّب حقولك في أقسام Role وTask وConstraints وOutput. أما «توسيع» و«تنقيح» فيعملان عبر Cloudflare Workers AI بعد فحص Turnstile، ولا يستدعيان واجهات ChatGPT أو Gemini أو Claude أو DeepSeek من خوادمنا.',
	tool_midjourney_prompt_builder_faq_a3:
		'منشئ قوالب البرومبت يعطي هيكلاً عاماً من أربعة أقسام يصلح لأي موضوع. أما هنا فالحقول مخصّصة لـ Midjourney — الموضوع والأسلوب والإضاءة ونسبة الأبعاد والمعاملات — مع مثال جاهز عند الفتح وجدول مقابلات خاص بهذه الحالة.',
	tool_midjourney_prompt_builder_faq_a4:
		'يمنع Turnstile السكربتات الآلية حتى تبقى الحصة المجانية للمستخدمين الحقيقيين. أكمل الفحص في لوحة الذكاء الاصطناعي قبل الضغط على «توسيع» أو «تنقيح»؛ فبدون رمز صالح تُظهر هذه الأزرار خطأً، ويبقى التركيب داخل المتصفح متاحاً كما هو.',
	tool_midjourney_prompt_builder_faq_a5:
		'نعم. عند التبديل إلى JSON يعرض حقل المُخرج نفسه البيانات في حقول مع نص البرومبت المجمَّع، فتستخدمه في سكربت لسلسلة صور أو في اختبار أو في ملف إعدادات.',
	tool_midjourney_prompt_builder_faq_a6:
		'نعم. انسخ الناتج والصقه في أي محادثة تستخدمها، أو في Midjourney مباشرة. الصفحة تنسّق النص فحسب ولا تستدعي أي واجهة، ولذلك لا يوجد عنوان منفصل لكل منصة.',
	tool_midjourney_prompt_builder_faq_q1:
		'هل يُرسل ما أكتبه إلى أي خادم؟',
	tool_midjourney_prompt_builder_faq_q2:
		'هل تستدعي هذه الصفحة واجهة ChatGPT أو نماذج أخرى؟',
	tool_midjourney_prompt_builder_faq_q3:
		'ما الفرق بينها وبين منشئ قوالب البرومبت؟',
	tool_midjourney_prompt_builder_faq_q4:
		'لماذا يلزم Turnstile لاستخدام الذكاء الاصطناعي؟',
	tool_midjourney_prompt_builder_faq_q5:
		'هل أحصل على المُخرج بصيغة JSON؟',
	tool_midjourney_prompt_builder_faq_q6:
		'هل تعمل مع ChatGPT وGemini وClaude وDeepSeek؟',
	tool_midjourney_prompt_builder_faq_q7:
		'ما الفرق بين الوضع المحلي وذكاء Cloudflare الاختياري؟',
	tool_midjourney_prompt_builder_faq_a7:
		'في الوضع المحلي يُجمَّع كل شيء داخل هذا التبويب ولا يخرج من المتصفح. أما «توسيع» أو «تنقيح» فيرسل المسوّد الحالي إلى Cloudflare Workers AI (يلزم Turnstile، وهناك حد للتكرار وحصة يومية)، والنص العائد يُكتب كاملاً في حقل المُخرج فوق المسوّد الذي كنت تراه — فراجعه قبل النسخ. وعند الفشل أو نفاد الحصة تابع بالوضع المحلي.',
	tool_midjourney_prompt_builder_ai_expand:
		'توسيع بالذكاء الاصطناعي',
	tool_midjourney_prompt_builder_ai_polish:
		'تنقيح بالذكاء الاصطناعي',
	tool_midjourney_prompt_builder_ai_panel_label:
		'اختياري: Cloudflare AI (يلزم Turnstile)',
	tool_midjourney_prompt_builder_ai_consent_title:
		'هل تريد إرسال المسوّد إلى Cloudflare Workers AI؟',
	tool_midjourney_prompt_builder_ai_consent_body:
		'هذه الخطوة اختيارية: ترسل المسوّد الموجود الآن في الحقول إلى Cloudflare Workers AI لتشغيل واحد. ولا نمرّره من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek. وبدون الذكاء الاصطناعي يبقى البرومبت يُجمَّع في متصفحك.',
	tool_midjourney_prompt_builder_ai_consent_ok:
		'متابعة',
	tool_midjourney_prompt_builder_ai_consent_cancel:
		'إلغاء',
	tool_midjourney_prompt_builder_ai_working:
		'يعمل Cloudflare AI الآن…',
	tool_midjourney_prompt_builder_ai_done:
		'كُتب نص الذكاء الاصطناعي كاملاً في حقل المُخرج. راجعه قبل النسخ.',
	tool_midjourney_prompt_builder_ai_err_generic:
		'لم يستجب الذكاء الاصطناعي هذه المرة؛ ومحتوى المُخرج كما هو.',
	tool_midjourney_prompt_builder_ai_err_rate:
		'نفدت حصة الذكاء الاصطناعي. تابع التركيب هنا أو جرّب غداً بتوقيت UTC.',
	tool_midjourney_prompt_builder_ai_err_turnstile:
		'أكمل فحص Turnstile قبل استخدام الذكاء الاصطناعي.',
	tool_midjourney_prompt_builder_fmt_json:
		'JSON',
	tool_midjourney_prompt_builder_fmt_label:
		'صيغة المُخرج',
	tool_midjourney_prompt_builder_fmt_md:
		'Markdown',
	tool_midjourney_prompt_builder_subject_label:
		'الموضوع',
	tool_midjourney_prompt_builder_subject_ph:
		'مثلاً: ساموراي يستلّ سيفه على جسر…',
	tool_midjourney_prompt_builder_style_label:
		'الأسلوب',
	tool_midjourney_prompt_builder_style_ph:
		'مثلاً: حبر سينمائي بدرجات فحمية…',
	tool_midjourney_prompt_builder_lighting_label:
		'الإضاءة',
	tool_midjourney_prompt_builder_lighting_ph:
		'مثلاً: ضوء خلفي عند الشروق مع ضباب…',
	tool_midjourney_prompt_builder_aspect_label:
		'نسبة الأبعاد',
	tool_midjourney_prompt_builder_aspect_ph:
		'مثلاً 16:9 أو 9:16 أو 1:1…',
	tool_midjourney_prompt_builder_mj_flags_label:
		'معاملات MJ',
	tool_midjourney_prompt_builder_mj_flags_ph:
		'مثلاً --v 6.1 --style raw --stylize 120…',
	tool_midjourney_prompt_builder_rules_table_title:
		'جدول مقابلات معاملات Midjourney',
	tool_midjourney_prompt_builder_rules_table_ar:
		'نسبة الأبعاد → --ar',
	tool_midjourney_prompt_builder_rules_table_v:
		'الإصدارة → --v',
	tool_midjourney_prompt_builder_rules_table_note:
		'إذا كتبت نسبة أبعاد تحولت إلى --ar في آخر السطر؛ وإن لم تحتوِ المعاملات على إصدارة يُضاف --v 6.1.',
	tool_midjourney_prompt_builder_rules_map_1_label:
		'1:1 مربّع',
	tool_midjourney_prompt_builder_rules_map_1_flag:
		'--ar 1:1',
	tool_midjourney_prompt_builder_rules_map_2_label:
		'16:9 أفقي',
	tool_midjourney_prompt_builder_rules_map_2_flag:
		'--ar 16:9',
	tool_midjourney_prompt_builder_rules_map_3_label:
		'9:16 رأسي',
	tool_midjourney_prompt_builder_rules_map_3_flag:
		'--ar 9:16',
	tool_midjourney_prompt_builder_rules_map_4_label:
		'إصدارة MJ v6 الافتراضية',
	tool_midjourney_prompt_builder_rules_map_4_flag:
		'--v 6.1',
	tool_midjourney_prompt_builder_how_body:
		'املأ الحقول وأنشئ البرومبت ثم الصقه في ChatGPT أو Gemini أو Claude أو DeepSeek؛ وإن احتجت وصفاً أدقّ استعن بـ «توسيع» أو «تنقيح» عبر ذكاء Cloudflare الاختياري.',
	tool_midjourney_prompt_builder_how_item_1:
		'انقر «تحميل عيّنة» لإدخال الإعداد الافتراضي.',
	tool_midjourney_prompt_builder_how_item_2:
		'عدّل الموضوع والأسلوب والإضاءة ونسبة الأبعاد والمعاملات واضغط «أنشئ البرومبت»؛ وبدّل إلى JSON إن أردت تصديراً في حقول.',
	tool_midjourney_prompt_builder_how_item_3:
		'اختياري: أكمل Turnstile في لوحة الذكاء الاصطناعي ثم اضغط «توسيع» أو «تنقيح»، فيُكتب النص العائد في حقل المُخرج.',
	tool_midjourney_prompt_builder_how_item_4:
		'انسخ أو نزّل، ثم الصق في ChatGPT أو Gemini أو Claude أو DeepSeek لمواصلة الضبط، أو في Midjourney مباشرة.',
	tool_midjourney_prompt_builder_how_title:
		'طريقة الاستخدام',
	tool_midjourney_prompt_builder_load_sample:
		'تحميل المثال',
	tool_midjourney_prompt_builder_platforms_lead:
		'المُخرج يُلصق كما هو في محادثة ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_midjourney_prompt_builder_result_label:
		'البرومبت الناتج',
	tool_midjourney_prompt_builder_rules_body:
		'كيف تُترجم المعاملات: نسبة الأبعاد تصبح --ar، وبدون إصدارة مذكورة يُضاف --v 6.1. التركيب داخل المتصفح هو السلوك الافتراضي، أما الذكاء الاصطناعي الاختياري فمحدود الاستخدام ويطلب Turnstile.',
	tool_midjourney_prompt_builder_rules_item_1:
		'كل حقل في النموذج يستقرّ في أحد أقسام Markdown: Role أو Task أو Constraints أو Output.',
	tool_midjourney_prompt_builder_rules_item_2:
		'التصدير الافتراضي Markdown، وJSON زرّ فوق حقل المُخرج نفسه.',
	tool_midjourney_prompt_builder_rules_item_3:
		'الذكاء الاصطناعي الاختياري خطوة إضافية لا بديل: الوضع المحلي متاح دائماً، ونص الذكاء الاصطناعي يستبدل محتوى المُخرج بالكامل، فراجعه قبل النسخ.',
	tool_midjourney_prompt_builder_rules_item_4:
		'هذه الصفحة تجمع نصاً فقط: لا تولّد صوراً ولا تستدعي Midjourney ولا أي واجهة محادثة.',
	tool_midjourney_prompt_builder_rules_title:
		'ما تفعله وما لا تفعله',
	tool_midjourney_prompt_builder_sec_constraints:
		'Constraints',
	tool_midjourney_prompt_builder_sec_output:
		'Output',
	tool_midjourney_prompt_builder_sec_role:
		'Role',
	tool_midjourney_prompt_builder_sec_task:
		'Task',
	tool_midjourney_prompt_builder_status_copied:
		'تم النسخ إلى الحافظة.',
	tool_midjourney_prompt_builder_status_done:
		'البرومبت جاهز.',
	tool_midjourney_prompt_builder_status_working:
		'جارٍ التركيب…',
	tool_midjourney_prompt_builder_title:
		'منشئ برومبت Midjourney — تركيب داخل المتصفح والذكاء الاصطناعي اختياري',
	tool_midjourney_prompt_builder_usecase_1:
		'تسليم فريقك برومبت Midjourney جاهزاً للّصق في المحادثة، بدل إملاء المعاملات رسالة بعد رسالة.',
	tool_midjourney_prompt_builder_usecase_2:
		'تصدير JSON قبل جلسة توليد متعددة، والاحتفاظ بالموضوع والأسلوب ونسبة الأبعاد كحقول في سكربتك أو جدولك.',
	tool_midjourney_prompt_builder_usecase_3:
		'إن كان المطلوب الهيكل العام من أربعة أقسام لا صورة، فاستخدم منشئ قوالب البرومبت.',
	tool_midjourney_prompt_builder_usecase_4:
		'مع مسوّدات مشروع لم يُعلن بعد، ابقَ في الوضع المحلي: لن يخرج النص من المتصفح إلا بموافقتك في نافذة الذكاء الاصطناعي.',
	tool_midjourney_prompt_builder_usecases_title:
		'متى تفيدك',
};

export default ar;
