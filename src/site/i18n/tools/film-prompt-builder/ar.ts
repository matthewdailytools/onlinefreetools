/**
 * i18n tool shard (film-prompt-builder / ar).
 * إعادة كتابة وفق ما يبحث عنه المستخدم العربي: «منشئ برومبت سيناريو سينمائي»، «البنية الثلاثية»،
 * «قائمة المشاهد»، «تصدير البرومبت بصيغة JSON». المصطلح الرئيسي في العنوان الأول، والبقية في الوصف والأسئلة وحالات الاستخدام.
 * الحدود الواقعية: الترتيب يجري داخل المتصفح افتراضياً، ولا يُرسل المسوّد إلى Cloudflare Workers AI إلا عند الضغط على
 * «توسيع» أو «تنقيح» (بعد Turnstile وبحدود استخدام). ولا تكتب هذه الصفحة السيناريو عنك.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_film_prompt_builder_article:
		'اكتب الفكرة في سطر، والفصول الثلاثة، وقائمة المشاهد، ومسار تحوّل الشخصية: ترتّبها الصفحة داخل المتصفح وتعيد لك برومبتاً واضح البنية بصيغة Markdown أو JSON، جاهزاً للّصق في ChatGPT أو Gemini أو Claude أو DeepSeek لتكمل السيناريو هناك. افتراضياً لا يُرسل شيء؛ ولا يذهب المسوّد إلى Cloudflare Workers AI إلا إن ضغطت «توسيع» أو «تنقيح» بعد فحص Turnstile.',
	tool_film_prompt_builder_build:
		'أنشئ البرومبت',
	tool_film_prompt_builder_clear:
		'تفريغ',
	tool_film_prompt_builder_copy:
		'نسخ',
	tool_film_prompt_builder_desc:
		'منشئ برومبت سيناريو سينمائي: الفكرة في سطر والفصول الثلاثة وقائمة المشاهد مرتَّبة في Markdown أو JSON داخل المتصفح؛ ذكاء Cloudflare اختياري مع Turnstile.',
	tool_film_prompt_builder_description:
		'منشئ برومبت سيناريو سينمائي: تكتب الفكرة في سطر، والفصول من الأول إلى الثالث، وقائمة المشاهد، ومسار تحوّل الشخصية، فتوزّعها الصفحة على أقسام Role وTask وConstraints وOutput حتى يعرف ChatGPT أو Gemini أو Claude أو DeepSeek من أين يكمل. الصيغة الافتراضية Markdown، وهناك JSON لمتابعة المسوّدات، ومثال شاحنتَي الطعام التي تتقاسمان مطبخاً واحداً ثلاثين يوماً يعمل بمجرد فتح الصفحة. وإن جاء فصل شحيحاً أرسل «توسيع» أو «تنقيح» المسوّد إلى Cloudflare Workers AI (يلزم Turnstile وهناك حدود).',
	tool_film_prompt_builder_download:
		'تنزيل',
	tool_film_prompt_builder_empty:
		'املأ حقلاً واحداً على الأقل قبل إنشاء البرومبت.',
	tool_film_prompt_builder_example:
		'المُدخل: الفكرة في سطر = خطأ في ورقة الترخيص يُلزم صاحبَي شاحنتَي طعام متنافستين بتقاسم مطبخ واحد ثلاثين يوماً؛ الفصل الثاني = نجاح المهرجان ينقلب حين ينسب مدوّن الوصفة إلى الطرف الخطأ فيتحول خلاف عائلي قديم على البهارات إلى مادة على الشبكات؛ قائمة المشاهد = ست متتاليات مرقّمة؛ مسار التحوّل = كبرياء ← تعاون على مضض ← شريكان يتفاوضان. المُخرج (Markdown): يسرد قسم ## Task عناصر Logline وAct1–3 وScene / List وCharacter / Arc، وهو النص نفسه الذي يحمّله المثال عند فتح الصفحة.',
	tool_film_prompt_builder_example_title:
		'مثال',
	tool_film_prompt_builder_faq_a1:
		'الترتيب يجري داخل هذا التبويب، فلا يُرسل شيء افتراضياً. الإرسال يحدث فقط عند الضغط على «توسيع» أو «تنقيح»، ووجهته Cloudflare Workers AI وحدها؛ ولا نمرّر النص من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek.',
	tool_film_prompt_builder_faq_a2:
		'في الوضع المحلي لا يُستدعى أي نموذج: تُوزَّع الفكرة والفصول وقائمة المشاهد ومسار التحوّل على أقسام Role وTask وConstraints وOutput فقط. أما «توسيع» و«تنقيح» فيعملان عبر Cloudflare Workers AI بعد فحص Turnstile، ولا يستدعيان واجهات ChatGPT أو Gemini أو Claude أو DeepSeek من خوادمنا.',
	tool_film_prompt_builder_faq_a3:
		'منشئ قوالب البرومبت يعطي هيكلاً عاماً من أربعة أقسام يصلح لأي موضوع. أما الحقول هنا فهي حقول الفيلم الطويل — الفكرة في سطر والفصول الثلاثة وقائمة المشاهد ومسار التحوّل — مع مثال كامل عند الفتح وقواعد تخص العقبات المعتادة في هذا النوع من الأوراق.',
	tool_film_prompt_builder_faq_a4:
		'يمنع Turnstile السكربتات الآلية حتى تبقى الحصة المجانية للمستخدمين الحقيقيين. أكمل الفحص في لوحة الذكاء الاصطناعي قبل الضغط على «توسيع» أو «تنقيح»؛ فبدون رمز صالح تُظهر هذه الأزرار خطأً، ويبقى الترتيب داخل المتصفح متاحاً كما هو.',
	tool_film_prompt_builder_faq_a5:
		'نعم. عند التبديل إلى JSON يعرض حقل المُخرج نفسه البيانات في حقول مع نص البرومبت المجمَّع، وهو مريح لحفظ كل نسخة من الفصول وقائمة المشاهد في جدول أو في مستودعك ثم مقارنتها.',
	tool_film_prompt_builder_faq_a6:
		'نعم. انسخ الناتج والصقه في أي محادثة تستخدمها. الصفحة ترتّب البنية فحسب ولا تستدعي أي واجهة، ولذلك لا يوجد عنوان منفصل لكل منصة.',
	tool_film_prompt_builder_faq_q1:
		'هل تُرسل مادة السيناريو التي أكتبها إلى أي خادم؟',
	tool_film_prompt_builder_faq_q2:
		'هل تستدعي هذه الصفحة واجهة ChatGPT أو نماذج أخرى؟',
	tool_film_prompt_builder_faq_q3:
		'ما الفرق بينها وبين منشئ قوالب البرومبت؟',
	tool_film_prompt_builder_faq_q4:
		'لماذا يلزم Turnstile لاستخدام الذكاء الاصطناعي؟',
	tool_film_prompt_builder_faq_q5:
		'هل أحصل على المُخرج بصيغة JSON؟',
	tool_film_prompt_builder_faq_q6:
		'هل تعمل مع ChatGPT وGemini وClaude وDeepSeek؟',
	tool_film_prompt_builder_faq_q7:
		'ما الفرق بين الوضع المحلي وذكاء Cloudflare الاختياري؟',
	tool_film_prompt_builder_faq_a7:
		'في الوضع المحلي يُرتَّب كل شيء داخل هذا التبويب ولا يخرج من المتصفح. أما «توسيع» أو «تنقيح» فيرسل المسوّد الحالي إلى Cloudflare Workers AI (يلزم Turnstile، وهناك حد للتكرار وحصة يومية)، والنص العائد يُكتب كاملاً في حقل المُخرج فوق المسوّد الذي كنت تراه — فاقرأه قبل النسخ حتى لا تحلّ صياغة معادة مكان نسختك من الفصول. وعند الفشل أو نفاد الحصة تابع بالوضع المحلي.',
	tool_film_prompt_builder_ai_expand:
		'توسيع بالذكاء الاصطناعي',
	tool_film_prompt_builder_ai_polish:
		'تنقيح بالذكاء الاصطناعي',
	tool_film_prompt_builder_ai_panel_label:
		'اختياري: Cloudflare AI (يلزم Turnstile)',
	tool_film_prompt_builder_ai_consent_title:
		'هل تريد إرسال المسوّد إلى Cloudflare Workers AI؟',
	tool_film_prompt_builder_ai_consent_body:
		'هذه الخطوة اختيارية: ترسل المسوّد الموجود الآن في الحقول إلى Cloudflare Workers AI لتشغيل واحد. ولا نمرّره من خوادمنا إلى OpenAI أو Google أو Anthropic أو DeepSeek. وبدون الذكاء الاصطناعي يبقى البرومبت يُجمَّع في متصفحك.',
	tool_film_prompt_builder_ai_consent_ok:
		'متابعة',
	tool_film_prompt_builder_ai_consent_cancel:
		'إلغاء',
	tool_film_prompt_builder_ai_working:
		'يعمل Cloudflare AI الآن…',
	tool_film_prompt_builder_ai_done:
		'كُتب نص الذكاء الاصطناعي كاملاً في حقل المُخرج. راجعه قبل النسخ.',
	tool_film_prompt_builder_ai_err_generic:
		'لم يستجب الذكاء الاصطناعي هذه المرة؛ ومحتوى المُخرج كما هو.',
	tool_film_prompt_builder_ai_err_rate:
		'نفدت حصة الذكاء الاصطناعي. تابع التركيب هنا أو جرّب غداً بتوقيت UTC.',
	tool_film_prompt_builder_ai_err_turnstile:
		'أكمل فحص Turnstile قبل استخدام الذكاء الاصطناعي.',
	tool_film_prompt_builder_fmt_json:
		'JSON',
	tool_film_prompt_builder_fmt_label:
		'صيغة المُخرج',
	tool_film_prompt_builder_fmt_md:
		'Markdown',
	tool_film_prompt_builder_logline_label:
		'الفكرة في سطر',
	tool_film_prompt_builder_logline_ph:
		'مثلاً: شاحنتا طعام متنافستان تتقاسمان مطبخاً واحداً…',
	tool_film_prompt_builder_act1_label:
		'الفصل الأول',
	tool_film_prompt_builder_act1_ph:
		'مثلاً: منشأ الخلاف وما يجبرهما على القبول…',
	tool_film_prompt_builder_act2_label:
		'الفصل الثاني',
	tool_film_prompt_builder_act2_ph:
		'مثلاً: نجاح قصير ثم انفلات الأمور…',
	tool_film_prompt_builder_act3_label:
		'الفصل الثالث',
	tool_film_prompt_builder_act3_ph:
		'مثلاً: مواجهة مباشرة وتسوية لها ثمن…',
	tool_film_prompt_builder_scene_list_label:
		'قائمة المشاهد',
	tool_film_prompt_builder_scene_list_ph:
		'مثلاً: 1. خلاف على موقف السيارة 2. تفتيش مزدوج…',
	tool_film_prompt_builder_character_arc_label:
		'مسار تحوّل الشخصية',
	tool_film_prompt_builder_character_arc_ph:
		'مثلاً: كبرياء ← تعاون على مضض ← شريكان…',

	tool_film_prompt_builder_how_body:
		'املأ الفكرة والفصول وقائمة المشاهد، وأنشئ البرومبت، ثم الصقه في ChatGPT أو Gemini أو Claude أو DeepSeek لتكمل الكتابة؛ وإن جاء فصل جافاً استعن بـ «توسيع» أو «تنقيح» عبر ذكاء Cloudflare الاختياري.',
	tool_film_prompt_builder_how_item_1:
		'انقر «تحميل عيّنة» لإدخال الإعداد الافتراضي.',
	tool_film_prompt_builder_how_item_2:
		'عدّل الفكرة والفصول وقائمة المشاهد ومسار التحوّل واضغط «أنشئ البرومبت»؛ وبدّل إلى JSON إن أردت تصديراً في حقول.',
	tool_film_prompt_builder_how_item_3:
		'اختياري: أكمل Turnstile في لوحة الذكاء الاصطناعي ثم اضغط «توسيع» أو «تنقيح»، فيُكتب النص العائد في حقل المُخرج.',
	tool_film_prompt_builder_how_item_4:
		'انسخ أو نزّل، ثم الصق في ChatGPT أو Gemini أو Claude أو DeepSeek ليكمل النموذج على هذه البنية.',
	tool_film_prompt_builder_how_title:
		'طريقة الاستخدام',
	tool_film_prompt_builder_load_sample:
		'تحميل المثال',
	tool_film_prompt_builder_platforms_lead:
		'المُخرج يُلصق كما هو في محادثة ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_film_prompt_builder_result_label:
		'البرومبت الناتج',
	tool_film_prompt_builder_rules_body:
		'الترتيب يحاكي طريقة العمل على فيلم طويل: الفكرة في سطر تحدد الاتجاه، والفصول الثلاثة ترسم المسار، وقائمة المشاهد ترقّم المتتاليات، ومسار التحوّل يوضح ما يتغير في الشخصية. التركيب داخل المتصفح هو السلوك الافتراضي، أما الذكاء الاصطناعي الاختياري فمحدود الاستخدام ويطلب Turnstile.',
	tool_film_prompt_builder_rules_item_1:
		'كل حقل في النموذج يستقرّ في أحد أقسام Markdown: Role أو Task أو Constraints أو Output.',
	tool_film_prompt_builder_rules_item_2:
		'التصدير الافتراضي Markdown، وJSON زرّ فوق حقل المُخرج نفسه.',
	tool_film_prompt_builder_rules_item_3:
		'الذكاء الاصطناعي الاختياري خطوة إضافية لا بديل: الوضع المحلي متاح دائماً، ونص الذكاء الاصطناعي يستبدل محتوى المُخرج بالكامل، فراجعه قبل النسخ.',
	tool_film_prompt_builder_rules_item_4:
		'هذه الصفحة تجمع نصاً فقط: لا تكتب السيناريو عنك ولا تشغّل أي نموذج أو واجهة محادثة في متصفحك.',
	tool_film_prompt_builder_rules_title:
		'ما تفعله وما لا تفعله',
	tool_film_prompt_builder_sec_constraints:
		'Constraints',
	tool_film_prompt_builder_sec_output:
		'Output',
	tool_film_prompt_builder_sec_role:
		'Role',
	tool_film_prompt_builder_sec_task:
		'Task',
	tool_film_prompt_builder_status_copied:
		'تم النسخ إلى الحافظة.',
	tool_film_prompt_builder_status_done:
		'البرومبت جاهز.',
	tool_film_prompt_builder_status_working:
		'جارٍ التركيب…',
	tool_film_prompt_builder_title:
		'منشئ برومبت سيناريو سينمائي — الفصول الثلاثة وقائمة المشاهد داخل المتصفح',
	tool_film_prompt_builder_usecase_1:
		'قبل الاجتماع، جمع الفصول الثلاثة وقائمة المشاهد في برومبت واحد يُلصق مباشرة في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_film_prompt_builder_usecase_2:
		'تصدير JSON وحفظ الفكرة والفصول ومسار التحوّل في كل نسخة كحقول في جدول أو مستودع للمقارنة لاحقاً.',
	tool_film_prompt_builder_usecase_3:
		'إن كان المطلوب الهيكل العام من أربعة أقسام لا بنية فيلم طويل، فاستخدم منشئ قوالب البرومبت.',
	tool_film_prompt_builder_usecase_4:
		'مع مشروع لم يُوقَّع عقده بعد، ابقَ في الوضع المحلي: لن يخرج النص من المتصفح إلا بموافقتك في نافذة الذكاء الاصطناعي.',
	tool_film_prompt_builder_usecases_title:
		'متى تفيدك',
};

export default ar;
