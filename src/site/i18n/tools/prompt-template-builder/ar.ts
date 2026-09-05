/**
 * i18n tool shard (prompt-template-builder / ar).
 * عنوان H1 بحثي: منشئ قوالب البرومبت؛ الصفحة تنسّق النص فقط ولا تستدعي واجهة أي دردشة.
 * ChatGPT / Gemini / Claude / DeepSeek تظهر في الوصف وفي الشاشة الأولى.
 * التوسيع/التحسين خيار إضافي عبر Cloudflare Workers AI (يتطلب Turnstile وله حصة).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_prompt_template_builder_article:
		'حوّل مسودة prompt إلى قالب قابل لإعادة الاستخدام Role / Task / Constraints / Output في هذه الصفحة. الصق نصًا حرًا أو املأ الحقول، ثم انسخ Markdown أو JSON إلى ChatGPT أو Gemini أو Claude أو DeepSeek. افتراضيًا يُبنى القالب داخل متصفحك ولا نستدعي واجهة أي دردشة نيابة عنك؛ وعند الضغط على «توسيع» أو «تحسين» فقط تُرسَل المسودة الحالية إلى Cloudflare Workers AI (يلزم Turnstile، وهناك حدود للمعدّل والحصة).',
	tool_prompt_template_builder_build: 'إنشاء القالب',
	tool_prompt_template_builder_clear: 'مسح',
	tool_prompt_template_builder_constraints_label: 'القيود',
	tool_prompt_template_builder_constraints_ph: 'حدود النبرة، النطاق، ما يجب تجنبه…',
	tool_prompt_template_builder_copy: 'نسخ',
	tool_prompt_template_builder_desc:
		'منشئ قوالب البرومبت — التركيب يتم داخل المتصفح، مع توسيع/تحسين اختياري عبر ذكاء Cloudflare (يتطلب Turnstile).',
	tool_prompt_template_builder_description:
		'منشئ قوالب البرومبت: رتّب مسودتك في أربع خطوات — Role وTask وConstraints وOutput — ثم انسخها إلى ChatGPT أو Gemini أو Claude أو DeepSeek. عند فتح الصفحة يعمل مثال لمراجعة كود؛ التصدير الافتراضي Markdown، ويمكن التحويل إلى JSON لخطوط المعالجة. التركيب داخل المتصفح، وذكاء Cloudflare (توسيع/تحسين) اختياري وبحصة محدودة.',
	tool_prompt_template_builder_download: 'تنزيل',
	tool_prompt_template_builder_empty: 'أضف نصًا حرًا أو حقلًا واحدًا على الأقل قبل الإنشاء.',
	tool_prompt_template_builder_example:
		'المدخلات (تحميل العينة، شريحة Code): Role = مراجع كود أول (أمان وقابلية قراءة)؛ Task = مراجعة diff الـ PR؛ Constraints = 12 نقطة كحد أقصى. المخرجات (Markdown): أقسام ## الدور و## المهمة و## القيود و## تنسيق الإخراج — جاهزة للنسخ إلى ChatGPT أو Claude.',
	tool_prompt_template_builder_example_title: 'مثال',
	tool_prompt_template_builder_faq_a1:
		'افتراضيًا يُبنى القالب داخل هذه التبويبة ولا يغادرها شيء. «توسيع/تحسين» وحده يرسل نص تلك الضغطة إلى Cloudflare Workers AI؛ ولا يذهب من خوادمنا شيء إلى OpenAI أو Google أو Anthropic أو DeepSeek.',
	tool_prompt_template_builder_faq_a2:
		'الوضع المحلي ينسّق حقولك داخل هذه التبويبة فقط. أما «توسيع/تحسين» فيستخدم Cloudflare Workers AI بعد اجتياز Turnstile — ولا نفتح ChatGPT أو Gemini أو Claude أو DeepSeek بالنيابة عنك.',
	tool_prompt_template_builder_faq_a3:
		'تصدير ChatGPT إلى Markdown يحوّل ملفات المحادثة إلى ملفات مقروءة. أما هنا فتبني system prompt قابلًا لإعادة الاستخدام — استخدم الاثنين معًا عند أرشفة المحادثات ثم صياغة القالب.',
	tool_prompt_template_builder_faq_a4:
		'نعم. أكمل أداة Turnstile في لوحة الذكاء الاصطناعي قبل «توسيع» أو «تحسين»؛ فبدون رمز صالح يعطي الزر خطأً، ويبقى البناء المحلي شغّالًا.',
	tool_prompt_template_builder_faq_a5:
		'الأسطر التي تبدأ بـ Role: أو Task: أو Constraints: أو Output: في المربع الحر تُقسَّم إلى أقسام. الحقول الصريحة لها الأولوية.',
	tool_prompt_template_builder_faq_a6:
		'نعم. انسخ القالب المُنشأ إلى ChatGPT أو Gemini أو Claude أو DeepSeek — نفس هيكل الحقول الأربعة يعمل في كل واحدة من هذه الدردشات. الصفحة تجهّز النص فقط، ولا تسجّل الدخول ولا تستدعي أي واجهة برمجية.',
	tool_prompt_template_builder_faq_q1: 'هل يُرفع الـ prompt؟',
	tool_prompt_template_builder_faq_q2: 'هل يستدعي LLM؟',
	tool_prompt_template_builder_faq_q3: 'ما الفرق عن تصدير ChatGPT إلى Markdown؟',
	tool_prompt_template_builder_faq_q4:
		'لماذا يطلب الذكاء الاختياري اجتياز Turnstile؟',
	tool_prompt_template_builder_faq_q5: 'كيف يعمل تحليل النص الحر؟',
	tool_prompt_template_builder_faq_q6: 'هل يمكن استخدامه مع ChatGPT أو Gemini أو Claude أو DeepSeek؟',
	tool_prompt_template_builder_faq_q7:
		'ما الفرق بين الوضع المحلي وذكاء Cloudflare الاختياري؟',
	tool_prompt_template_builder_faq_a7:
		'محليًا: كل شيء يُبنى في هذه التبويبة دون إرسال. أما «توسيع/تحسين» فيرسل المسودة إلى Cloudflare Workers AI (مع Turnstile وحصة يومية)، ويحلّ الرد محل صندوق النتيجة بالكامل. وعند الفشل أو نفاد الحصة تابع بالوضع المحلي.',
	tool_prompt_template_builder_ai_expand:
		'توسيع بالذكاء الاصطناعي',
	tool_prompt_template_builder_ai_polish:
		'تحسين بالذكاء الاصطناعي',
	tool_prompt_template_builder_ai_panel_label:
		'ذكاء Cloudflare اختياري (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'إرسال النص إلى Cloudflare Workers AI؟',
	tool_prompt_template_builder_ai_consent_body:
		'هذه الخطوة الاختيارية ترسل مسودتك الحالية إلى Cloudflare Workers AI للاستدلال. ولا يذهب من خوادمنا شيء إلى OpenAI أو Google أو Anthropic أو DeepSeek. وبدون الذكاء الاصطناعي يبقى البناء المحلي كما هو.',
	tool_prompt_template_builder_ai_consent_ok:
		'متابعة',
	tool_prompt_template_builder_ai_consent_cancel:
		'إلغاء',
	tool_prompt_template_builder_ai_working:
		'ذكاء Cloudflare قيد المعالجة…',
	tool_prompt_template_builder_ai_done:
		'كُتب نص الذكاء الاصطناعي كاملًا في صندوق النتيجة. راجعه قبل النسخ.',
	tool_prompt_template_builder_ai_err_generic:
		'تعذّر الذكاء الاصطناعي. برومبتك المحلي كما هو دون تغيير.',
	tool_prompt_template_builder_ai_err_rate:
		'نفدت حصة الذكاء الاصطناعي. استخدم الوضع المحلي أو جرّب غدًا (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'أكمل Turnstile قبل استخدام الذكاء الاصطناعي.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'تنسيق الإخراج',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt حر (اختياري)',
	tool_prompt_template_builder_free_ph: 'الصق مسودة أو أسطر Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'اختر شريحة مشهد أو اكتب مسودتك، املأ Role / Task / Constraints / Output، أنشئ القالب، ثم الصقه في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'اختر مراجعة الكود أو فيلم أو دراما قصيرة أو Android أو iOS — أو الصق مسودتك في المربع الحر.',
	tool_prompt_template_builder_how_item_2: 'اضغط «إنشاء القالب» (اضغط «تحميل مثال» لتحميل إعداد مراجعة الكود الافتراضي).',
	tool_prompt_template_builder_how_item_3: 'انتقل إلى JSON إذا احتجت {role,task,constraints,output} للكود أو الإعداد.',
	tool_prompt_template_builder_how_item_4: 'انسخ أو نزّل، ثم الصق في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_prompt_template_builder_how_title: 'كيف يعمل',
	tool_prompt_template_builder_load_sample: 'تحميل مثال',
	tool_prompt_template_builder_output_fmt_label: 'صيغة الإخراج',
	tool_prompt_template_builder_output_fmt_ph: 'أقسام Markdown، شكل JSON، قائمة…',
	tool_prompt_template_builder_platforms_lead:
		'مُصمَّم لـ ChatGPT وGemini وClaude وDeepSeek — انسخ القالب النهائي إلى أي من واجهات الدردشة تلك.',
	tool_prompt_template_builder_result_label: 'القالب',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'من يجب أن يتصرف النموذج كـ…',
	tool_prompt_template_builder_rules_body:
		'القالب القابل لإعادة الاستخدام يحتاج كتلًا واضحة، وترتيب أولوية بين الحقول، وقولًا صريحًا لما لا تفعله هذه الصفحة.',
	tool_prompt_template_builder_rules_item_1:
		'أربع كتل: Role وTask وConstraints وOutput. الفارغة لا تظهر في Markdown.',
	tool_prompt_template_builder_rules_item_2: 'الحقول الصريحة تتقدّم على الأسطر المستخرجة من النص الحر.',
	tool_prompt_template_builder_rules_item_3: 'الافتراضي Markdown بعناوين ##. JSON شريحة في نفس الصفحة.',
	tool_prompt_template_builder_rules_item_4:
		'شرائح المشهد تملأ مسبقًا الحقول المعتادة للسينما والدراما القصيرة وكود الجوال، ويظل بإمكانك تعديلها يدويًا بعد ذلك.',
	tool_prompt_template_builder_rules_title: 'قواعد متوقعة',
	tool_prompt_template_builder_scene_android: 'كود Android',
	tool_prompt_template_builder_scene_code: 'مراجعة الكود',
	tool_prompt_template_builder_scene_ios: 'كود iOS',
	tool_prompt_template_builder_scene_label: 'Preset المشهد',
	tool_prompt_template_builder_scene_movie: 'فيلم روائي',
	tool_prompt_template_builder_scene_short_drama: 'دراما قصيرة',
	tool_prompt_template_builder_sec_constraints: 'القيود',
	tool_prompt_template_builder_sec_output: 'تنسيق الإخراج',
	tool_prompt_template_builder_sec_role: 'الدور',
	tool_prompt_template_builder_sec_task: 'المهمة',
	tool_prompt_template_builder_status_copied: 'نُسخ إلى الحافظة.',
	tool_prompt_template_builder_status_done: 'القالب جاهز.',
	tool_prompt_template_builder_status_working: 'جاري إنشاء القالب…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'ماذا تفعل خطوة بخطوة…',
	tool_prompt_template_builder_title:
		'منشئ قوالب Prompt — محلي + ذكاء اصطناعي اختياري',
	tool_prompt_template_builder_usecase_1:
		'انشر system prompt لوكيل مراجعة الكود يمكن للفريق لصقه في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_prompt_template_builder_usecase_2:
		'حوّل ملاحظات الاجتماع إلى كتل Role/Task/Constraints قبل ربط API أي مزود دردشة.',
	tool_prompt_template_builder_usecase_3:
		'صدّر JSON ثم افتح مدقق JSON Schema للتحقق من ملفات الإعداد downstream.',
	tool_prompt_template_builder_usecase_4:
		'حمّل شريحة فيلم لورقة beats بثلاث فصول تلصقها في واجهة الدردشة المفضلة لديك.',
	tool_prompt_template_builder_usecase_5:
		'حمّل دراما قصيرة لخطافات وcliffhangers مسلسل عمودي — حلقات جوال binge-style.',
	tool_prompt_template_builder_usecase_6:
		'حمّل Android أو iOS لقوالب وكيل ترميز تراعي أعراف Kotlin/Swift، ثم أضف فوقها معايير فريقك.',
	tool_prompt_template_builder_usecases_title: 'حالات مناسبة',
};

export default ar;
