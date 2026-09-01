/**
 * i18n tool shard (prompt-template-builder / ar).
 * Master H1: منشئ قوالب Prompt; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_prompt_template_builder_article:
		'حوّل مسودة prompt إلى قالب قابل لإعادة الاستخدام Role / Task / Constraints / Output في هذه الصفحة. الصق نصًا حرًا أو املأ الحقول، ثم انسخ Markdown أو JSON إلى ChatGPT أو Gemini أو Claude أو DeepSeek. لا يتم استدعاء أي واجهة نموذج. يبقى النص على جهازك ولا يُرفع إلى خادم.',
	tool_prompt_template_builder_build: 'إنشاء القالب',
	tool_prompt_template_builder_clear: 'مسح',
	tool_prompt_template_builder_constraints_label: 'القيود',
	tool_prompt_template_builder_constraints_ph: 'حدود النبرة، النطاق، ما يجب تجنبه…',
	tool_prompt_template_builder_copy: 'نسخ',
	tool_prompt_template_builder_desc:
		'منشئ قوالب Prompt لـ ChatGPT وGemini وClaude وDeepSeek — Markdown/JSON؛ يبقى على الجهاز.',
	tool_prompt_template_builder_description:
		'منشئ قوالب Prompt لـ ChatGPT وGemini وClaude وDeepSeek: يدمج Role وTask وConstraints وOutput في قالب قابل لإعادة الاستخدام. شرائح المشهد تشمل مراجعة الكود والفيلم الروائي والدراما القصيرة وAndroid وiOS. مثال: preset وكيل مراجعة الكود يعمل عند فتح الصفحة. Markdown افتراضي؛ JSON يُخرج {role,task,constraints,output}. التحليل في هذا التبويب — ليس LLM. يبقى النص على جهازك ولا يُرفع إلى خادم.',
	tool_prompt_template_builder_download: 'تنزيل',
	tool_prompt_template_builder_empty: 'أضف نصًا حرًا أو حقلًا واحدًا على الأقل قبل الإنشاء.',
	tool_prompt_template_builder_example:
		'تحميل المثال يملأ preset وكيل مراجعة الكود، وينشئ Markdown بأربعة أقسام ## ويفعّل النسخ والتنزيل. جرّب شرائح فيلم أو دراما قصيرة أو Android أو iOS لقيم افتراضية أخرى.',
	tool_prompt_template_builder_example_title: 'مثال',
	tool_prompt_template_builder_faq_a1:
		'لا. تُبنى القوالب في تبويب المتصفح هذا. لا يُرفع شيء إلى OpenAI أو Google أو Anthropic أو DeepSeek أو خوادمنا.',
	tool_prompt_template_builder_faq_a2:
		'لا. هذه الصفحة تنسّق نصك فقط في كتل. لا تستدعي ChatGPT أو Gemini أو Claude أو DeepSeek ولا أي واجهة نموذج أخرى.',
	tool_prompt_template_builder_faq_a3:
		'تصدير ChatGPT إلى Markdown يحوّل ملفات المحادثة إلى ملفات مقروءة. هنا تنظم system prompt قابل لإعادة الاستخدام — استخدمهما معًا عند أرشفة المحادثات ثم refine القالب.',
	tool_prompt_template_builder_faq_a4:
		'نعم. شريحة JSON تُخرج {role,task,constraints,output} للإعدادات أو الاختبارات. ادمجها مع مدقق JSON Schema عند الحاجة.',
	tool_prompt_template_builder_faq_a5:
		'الأسطر التي تبدأ بـ Role: أو Task: أو Constraints: أو Output: في المربع الحر تُقسَّم إلى أقسام. الحقول الصريحة لها الأولوية.',
	tool_prompt_template_builder_faq_a6:
		'نعم. انسخ القالب المُنشأ إلى ChatGPT أو Gemini أو Claude أو DeepSeek — نفس هيكل الحقول الأربعة يعمل في كل واجهة دردشة. لا نحافظ على عناوين URL منفصلة لكل منصة لأن المهمة هي تنسيق النص، وليس استدعاء APIs.',
	tool_prompt_template_builder_faq_q1: 'هل يُرفع الـ prompt؟',
	tool_prompt_template_builder_faq_q2: 'هل يستدعي LLM؟',
	tool_prompt_template_builder_faq_q3: 'ما الفرق عن تصدير ChatGPT إلى Markdown؟',
	tool_prompt_template_builder_faq_q4: 'هل يمكن الحصول على JSON؟',
	tool_prompt_template_builder_faq_q5: 'كيف يعمل تحليل النص الحر؟',
	tool_prompt_template_builder_faq_q6: 'هل يمكن استخدامه مع ChatGPT أو Gemini أو Claude أو DeepSeek؟',
	tool_prompt_template_builder_faq_q7: 'ما الفرق بين الوضع المحلي وCloudflare AI الاختياري؟',
	tool_prompt_template_builder_faq_a7:
		'الوضع المحلي ينسّق في هذا التبويب فقط—لا رفع. التوسيع/الصقل الاختياري يرسل نص ذلك النقر إلى Cloudflare Workers AI (محدود، Turnstile). عند الفشل أو نفاد الحصة، استمر محلياً. لا نعد بذكاء اصطناعي غير محدود.',
	tool_prompt_template_builder_ai_expand: 'توسيع بالذكاء الاصطناعي',
	tool_prompt_template_builder_ai_polish: 'صقل بالذكاء الاصطناعي',
	tool_prompt_template_builder_ai_panel_label: 'Cloudflare AI اختياري',
	tool_prompt_template_builder_ai_consent_title: 'إرسال النص إلى Cloudflare Workers AI؟',
	tool_prompt_template_builder_ai_consent_body:
		'هذه الخطوة الاختيارية ترسل مسودتك إلى Cloudflare Workers AI. لا إلى OpenAI أو Google أو Anthropic أو DeepSeek من خوادمنا. التجميع المحلي يعمل بدون AI.',
	tool_prompt_template_builder_ai_consent_ok: 'متابعة',
	tool_prompt_template_builder_ai_consent_cancel: 'إلغاء',
	tool_prompt_template_builder_ai_working: 'Cloudflare AI يعمل…',
	tool_prompt_template_builder_ai_done: 'تم تطبيق اقتراح AI. راجع قبل النسخ.',
	tool_prompt_template_builder_ai_err_generic: 'فشل AI. القالب المحلي لم يتغير.',
	tool_prompt_template_builder_ai_err_rate: 'نفدت حصة AI. استخدم الوضع المحلي أو جرّب غداً (UTC).',
	tool_prompt_template_builder_ai_err_turnstile: 'أكمل Turnstile قبل استخدام AI.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'صيغة الإخراج',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Prompt حر (اختياري)',
	tool_prompt_template_builder_free_ph: 'الصق مسودة أو أسطر Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'اختر شريحة مشهد أو اكتب مسودتك، املأ Role / Task / Constraints / Output، أنشئ القالب، ثم الصقه في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'اختر مراجعة الكود أو فيلم أو دراما قصيرة أو Android أو iOS — أو الصق مسودتك في المربع الحر.',
	tool_prompt_template_builder_how_item_2: 'اضغط إنشاء القالب (تحميل المثال نفّذ preset مراجعة الكود عند فتح الصفحة).',
	tool_prompt_template_builder_how_item_3: 'انتقل إلى JSON إذا احتجت {role,task,constraints,output} للكود أو الإعداد.',
	tool_prompt_template_builder_how_item_4: 'انسخ أو نزّل، ثم الصق في ChatGPT أو Gemini أو Claude أو DeepSeek.',
	tool_prompt_template_builder_how_title: 'كيف يعمل',
	tool_prompt_template_builder_load_sample: 'تحميل مثال',
	tool_prompt_template_builder_output_fmt_label: 'صيغة الإخراج',
	tool_prompt_template_builder_output_fmt_ph: 'أقسام Markdown، شكل JSON، قائمة…',
	tool_prompt_template_builder_platforms_lead:
		'مُصمَّم لـ ChatGPT وGemini وClaude وDeepSeek — انسخ القالب النهائي إلى أي من واجهات الدردشة تلك.',
	tool_prompt_template_builder_result_label: 'القالب',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'من يجب أن يتصرف النموذج كـ…',
	tool_prompt_template_builder_rules_body:
		'القالب القابل لإعادة الاستخدام يحتاج كتلًا واضحة وأولوية للحقول وحدودًا صادقة — وليس منتج مولّد ثانيًا.',
	tool_prompt_template_builder_rules_item_1:
		'أربع كتل: Role وTask وConstraints وOutput. الفارغة لا تظهر في Markdown.',
	tool_prompt_template_builder_rules_item_2: 'الحقول الصريحة تتفوق على الأسطر الم parsed من النص الحر.',
	tool_prompt_template_builder_rules_item_3: 'الافتراضي Markdown بعناوين ##. JSON شريحة في نفس الصفحة.',
	tool_prompt_template_builder_rules_item_4:
		'شرائح المشهد preset الحقول للسينما والدراما القصيرة وكود الجوال — نفس المنشئ، بدون URLs منفصلة لكل منصة.',
	tool_prompt_template_builder_rules_title: 'قواعد متوقعة',
	tool_prompt_template_builder_scene_android: 'كود Android',
	tool_prompt_template_builder_scene_code: 'مراجعة الكود',
	tool_prompt_template_builder_scene_ios: 'كود iOS',
	tool_prompt_template_builder_scene_label: 'Preset المشهد',
	tool_prompt_template_builder_scene_movie: 'فيلم روائي',
	tool_prompt_template_builder_scene_short_drama: 'دراما قصيرة',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'نُسخ إلى الحافظة.',
	tool_prompt_template_builder_status_done: 'القالب جاهز.',
	tool_prompt_template_builder_status_working: 'جاري إنشاء القالب…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'ماذا تفعل خطوة بخطوة…',
	tool_prompt_template_builder_title: 'منشئ قوالب Prompt',
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
		'حمّل Android أو iOS لقوالب وكيل ترميز Kotlin/Swift دون فتح أربع صفحات خاصة بكل منصة.',
	tool_prompt_template_builder_usecases_title: 'حالات مناسبة',
};

export default ar;
