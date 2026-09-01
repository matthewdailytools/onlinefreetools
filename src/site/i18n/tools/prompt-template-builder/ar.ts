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
		'منشئ قوالب Prompt — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_prompt_template_builder_description:
		'عملية ومثال: منشئ قوالب Prompt — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_prompt_template_builder_download: 'تنزيل',
	tool_prompt_template_builder_empty: 'أضف نصًا حرًا أو حقلًا واحدًا على الأقل قبل الإنشاء.',
	tool_prompt_template_builder_example:
		'تحميل المثال يملأ preset وكيل مراجعة الكود، وينشئ Markdown بأربعة أقسام ## ويفعّل النسخ والتنزيل. جرّب شرائح فيلم أو دراما قصيرة أو Android أو iOS لقيم افتراضية أخرى.',
	tool_prompt_template_builder_example_title: 'مثال',
	tool_prompt_template_builder_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_prompt_template_builder_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_prompt_template_builder_faq_a3:
		'تصدير ChatGPT إلى Markdown يحوّل ملفات المحادثة إلى ملفات مقروءة. هنا تنظم system prompt قابل لإعادة الاستخدام — استخدمهما معًا عند أرشفة المحادثات ثم refine القالب.',
	tool_prompt_template_builder_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_prompt_template_builder_faq_a5:
		'الأسطر التي تبدأ بـ Role: أو Task: أو Constraints: أو Output: في المربع الحر تُقسَّم إلى أقسام. الحقول الصريحة لها الأولوية.',
	tool_prompt_template_builder_faq_a6:
		'نعم. انسخ القالب المُنشأ إلى ChatGPT أو Gemini أو Claude أو DeepSeek — نفس هيكل الحقول الأربعة يعمل في كل واجهة دردشة. لا نحافظ على عناوين URL منفصلة لكل منصة لأن المهمة هي تنسيق النص، وليس استدعاء APIs.',
	tool_prompt_template_builder_faq_q1: 'هل يُرفع الـ prompt؟',
	tool_prompt_template_builder_faq_q2: 'هل يستدعي LLM؟',
	tool_prompt_template_builder_faq_q3: 'ما الفرق عن تصدير ChatGPT إلى Markdown؟',
	tool_prompt_template_builder_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_prompt_template_builder_faq_q5: 'كيف يعمل تحليل النص الحر؟',
	tool_prompt_template_builder_faq_q6: 'هل يمكن استخدامه مع ChatGPT أو Gemini أو Claude أو DeepSeek؟',
	tool_prompt_template_builder_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_prompt_template_builder_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_prompt_template_builder_ai_expand:
		'Expandir con IA',
	tool_prompt_template_builder_ai_polish:
		'Pulir con IA',
	tool_prompt_template_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_prompt_template_builder_ai_consent_ok:
		'Continuar',
	tool_prompt_template_builder_ai_consent_cancel:
		'Cancelar',
	tool_prompt_template_builder_ai_working:
		'Cloudflare AI trabajando…',
	tool_prompt_template_builder_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_prompt_template_builder_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_prompt_template_builder_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
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
		'حمّل Android أو iOS لقوالب وكيل ترميز Kotlin/Swift دون فتح أربع صفحات خاصة بكل منصة.',
	tool_prompt_template_builder_usecases_title: 'حالات مناسبة',
};

export default ar;
