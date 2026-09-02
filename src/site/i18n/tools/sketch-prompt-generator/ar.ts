/**
 * i18n tool shard (sketch-prompt-generator / ar).
 * H1: مولّد prompts لـ Sketch.app (تطبيق تصميم Mac، وليس رسمًا بالقلم).
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'أنشئ prompts جاهزة للصق تُرشد ChatGPT أو Gemini أو Claude أو DeepSeek لتشغيل Sketch.app — اللوحات والرموز والأنماط المشتركة والتصدير. املأ الحقول وانسخ Markdown أو JSON. التجميع المحلي يبقى في المتصفح؛ Expand/Polish الاختياري يستخدم Cloudflare Workers AI مع Turnstile. يبقى النص على جهازك ما لم تفعّل الذكاء الاصطناعي.',
	tool_sketch_prompt_generator_build: 'إنشاء الـ Prompt',
	tool_sketch_prompt_generator_clear: 'مسح',
	tool_sketch_prompt_generator_copy: 'نسخ',
	tool_sketch_prompt_generator_desc:
		'مولّد prompts لـ Sketch.app — محلي افتراضيًا + Expand/Polish اختياري عبر Cloudflare AI (Turnstile)؛ Markdown/JSON على الجهاز.',
	tool_sketch_prompt_generator_description:
		'مولّد prompts لـ Sketch.app — محلي + ذكاء اصطناعي اختياري لـ ChatGPT وGemini وClaude وDeepSeek: جمّع prompts منظمة لخطوات التصميم في Sketch.app (لوحات، رموز، تصدير) في المتصفح؛ Expand/Polish اختياري عبر Cloudflare Workers AI (Turnstile وحدّ استخدام). مثال عند الفتح. Markdown افتراضي؛ JSON للأنابيب. النص يبقى على الجهاز دون الذكاء الاصطناعي.',
	tool_sketch_prompt_generator_download: 'تنزيل',
	tool_sketch_prompt_generator_empty: 'املأ حقلًا واحدًا على الأقل قبل الإنشاء.',
	tool_sketch_prompt_generator_example:
		'المدخل: الهدف = شاشة تسجيل دخول في Sketch.app؛ اللوحات = iPhone 14 390×844؛ الرموز = Button/Primary + Input؛ التصدير = PNG 1x/2x/3x + PDF. المخرج (Markdown): ## Role → مساعد Sketch.app؛ ## Task → قائمة مرقّمة.',
	tool_sketch_prompt_generator_example_title: 'مثال',
	tool_sketch_prompt_generator_faq_a1:
		'التجميع المحلي يعمل في هذا التبويب — لا يُرفع شيء افتراضيًا. Expand/Polish الاختياري يرسل فقط نص تلك النقرة إلى Cloudflare Workers AI، وليس إلى OpenAI أو Google أو Anthropic أو DeepSeek من خوادمنا.',
	tool_sketch_prompt_generator_faq_a2:
		'الوضع المحلي ينسّق الحقول فقط. Expand/Polish يستخدم Cloudflare Workers AI بعد Turnstile — بلا واجهات دردشة وبلا تحكم عن بُعد في Sketch.app.',
	tool_sketch_prompt_generator_faq_a3:
		'منشئ قوالب Prompt يغطي قوالب عامة. هذه الصفحة تركز على Sketch.app: الهدف، اللوحات، الرموز/الأنماط، والتصدير.',
	tool_sketch_prompt_generator_faq_a4:
		'لا. Midjourney يستهدف أنماط صور نقطية. هنا الـ prompt يوجّه Sketch.app (برنامج تصميم على Mac). للرسم بالقلم أو line-art استخدم صفحة Midjourney.',
	tool_sketch_prompt_generator_faq_a5:
		'نعم. أكمل Turnstile في لوحة الذكاء الاصطناعي قبل Expand أو Polish. بلا رمز صالح تفشل أزرار الذكاء الاصطناعي ويبقى المحلي متاحًا.',
	tool_sketch_prompt_generator_faq_a6: 'نعم. شريحة JSON تُخرج الحقول المنظمة مع الـ prompt المجمّع.',
	tool_sketch_prompt_generator_faq_a7:
		'نعم. الصق الـ prompt في ChatGPT أو Gemini أو Claude أو DeepSeek ليرشدك عبر قوائم Sketch.app. ننسّق النص فقط؛ لا نشغّل Sketch هنا.',
	tool_sketch_prompt_generator_faq_a8:
		'المحلي ينسّق في التبويب دون رفع. Expand/Polish يذهب إلى Cloudflare Workers AI (حدّ + Turnstile). عند الفشل واصل محليًا.',
	tool_sketch_prompt_generator_faq_q1: 'هل يُرفع الـ prompt؟',
	tool_sketch_prompt_generator_faq_q2: 'هل يستدعي ChatGPT أو يتحكم في Sketch.app عن بُعد؟',
	tool_sketch_prompt_generator_faq_q3: 'ما الفرق عن منشئ قوالب Prompt؟',
	tool_sketch_prompt_generator_faq_q4: 'هل هذا لرسم بالقلم أو prompts Midjourney؟',
	tool_sketch_prompt_generator_faq_q5: 'لماذا Turnstile للذكاء الاصطناعي الاختياري؟',
	tool_sketch_prompt_generator_faq_q6: 'هل يمكن الحصول على JSON؟',
	tool_sketch_prompt_generator_faq_q7: 'هل يعمل مع ChatGPT وGemini وClaude وDeepSeek؟',
	tool_sketch_prompt_generator_faq_q8: 'ما الفرق بين المحلي وCloudflare AI الاختياري؟',
	tool_sketch_prompt_generator_ai_expand: 'توسيع بالذكاء الاصطناعي',
	tool_sketch_prompt_generator_ai_polish: 'صقل بالذكاء الاصطناعي',
	tool_sketch_prompt_generator_ai_panel_label: 'Cloudflare AI اختياري (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title: 'إرسال النص إلى Cloudflare Workers AI؟',
	tool_sketch_prompt_generator_ai_consent_body:
		'هذه الخطوة الاختيارية ترسل المسودة إلى Cloudflare Workers AI. لا تُرسل إلى OpenAI أو Google أو Anthropic أو DeepSeek من خوادمنا. التجميع المحلي يعمل دون ذكاء اصطناعي.',
	tool_sketch_prompt_generator_ai_consent_ok: 'متابعة',
	tool_sketch_prompt_generator_ai_consent_cancel: 'إلغاء',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI يعمل…',
	tool_sketch_prompt_generator_ai_done: 'طُبّقت اقتراحات الذكاء الاصطناعي. راجع قبل النسخ.',
	tool_sketch_prompt_generator_ai_err_generic: 'فشل الذكاء الاصطناعي. الـ prompt المحلي لم يتغيّر.',
	tool_sketch_prompt_generator_ai_err_rate: 'اكتملت حصة الذكاء الاصطناعي. استخدم المحلي أو حاول غدًا (UTC).',
	tool_sketch_prompt_generator_ai_err_turnstile: 'أكمل Turnstile قبل استخدام الذكاء الاصطناعي.',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: 'تنسيق الإخراج',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: 'الهدف / المُخرج',
	tool_sketch_prompt_generator_goal_ph: 'مثال: شاشة تسجيل دخول في Sketch.app…',
	tool_sketch_prompt_generator_artboard_label: 'اللوحات / الصفحات',
	tool_sketch_prompt_generator_artboard_ph: 'مثال: iPhone 14 390×844، Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'الرموز / الأنماط / المكتبات',
	tool_sketch_prompt_generator_symbols_ph: 'مثال: Button/Primary، Shared Styles…',
	tool_sketch_prompt_generator_export_label: 'التصدير / التسليم',
	tool_sketch_prompt_generator_export_ph: 'مثال: PNG 1x/2x/3x، مراجعة PDF…',
	tool_sketch_prompt_generator_how_body:
		'املأ حقول Sketch.app، أنشئ الـ prompt محليًا، واختياريًا وسّع/صقل بعد Turnstile، ثم الصق في الدردشة لترشد خطوات Sketch.app.',
	tool_sketch_prompt_generator_how_item_1: 'عند الفتح شُغّل مثال شاشة تسجيل الدخول في Sketch.app.',
	tool_sketch_prompt_generator_how_item_2: 'عدّل الهدف واللوحات والرموز والتصدير، ثم أنشئ الـ prompt أو بدّل إلى JSON.',
	tool_sketch_prompt_generator_how_item_3: 'اختياري: أكمل Turnstile ثم وسّع أو اصقل عبر Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4: 'انسخ أو نزّل، الصق في الدردشة واتبع قائمة Sketch.app.',
	tool_sketch_prompt_generator_how_title: 'طريقة العمل',
	tool_sketch_prompt_generator_load_sample: 'تحميل المثال',
	tool_sketch_prompt_generator_platforms_lead:
		'مخصّص لـ ChatGPT وGemini وClaude وDeepSeek — انسخ الـ prompt ليقود الدردشة تشغيل Sketch.app.',
	tool_sketch_prompt_generator_result_label: 'مخرج الـ Prompt',
	tool_sketch_prompt_generator_rules_body:
		'الحقول تعكس عمل Sketch.app. المحلي افتراضي؛ الذكاء الاصطناعي الاختياري يتطلب Turnstile وله حدّ. هذه الصفحة لا تفتح Sketch.app.',
	tool_sketch_prompt_generator_rules_item_1: 'الحقول المنظمة تُترجم إلى Role/Task/Constraints/Output في Markdown.',
	tool_sketch_prompt_generator_rules_item_2: 'Markdown افتراضي؛ JSON على نفس اللوحة.',
	tool_sketch_prompt_generator_rules_item_3: 'Cloudflare AI الاختياري لا يستبدل المحلي — راجع قبل النسخ.',
	tool_sketch_prompt_generator_rules_item_4:
		'تجميع نص فقط؛ لا يشغّل Sketch.app أو الإضافات أو Midjourney أو واجهات الدردشة محليًا.',
	tool_sketch_prompt_generator_rules_title: 'القواعد المتوقعة',
	tool_sketch_prompt_generator_sec_constraints: 'القيود',
	tool_sketch_prompt_generator_sec_output: 'تنسيق الإخراج',
	tool_sketch_prompt_generator_sec_role: 'الدور',
	tool_sketch_prompt_generator_sec_task: 'المهمة',
	tool_sketch_prompt_generator_status_copied: 'نُسخ إلى الحافظة.',
	tool_sketch_prompt_generator_status_done: 'الـ Prompt جاهز.',
	tool_sketch_prompt_generator_status_working: 'جارٍ إنشاء الـ Prompt…',
	tool_sketch_prompt_generator_title: 'مولّد prompts لـ Sketch.app — محلي + ذكاء اصطناعي اختياري',
	tool_sketch_prompt_generator_usecase_1:
		'مرّر أحجام اللوحات وأسماء الرموز لدردشة الفريق لإعادة بناء شاشة في Sketch.app.',
	tool_sketch_prompt_generator_usecase_2: 'أعد قوائم تصدير (PNG وPDF) قبل مراجعة التصميم.',
	tool_sketch_prompt_generator_usecase_3:
		'قارن مع Product design prompt builder عندما تحتاج شخصية/إطارًا سلكيًا بدل قوائم Sketch.app.',
	tool_sketch_prompt_generator_usecase_4: 'أبقِ المسودات الحساسة محليًا — فعّل الذكاء الاصطناعي فقط بعد الموافقة.',
	tool_sketch_prompt_generator_usecases_title: 'حالات مناسبة',
};

export default ar;
