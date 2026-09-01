/**
 * i18n tool shard (android-prompt-builder / ar).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_android_prompt_builder_article:
		'منشئ prompts لـ Android — محلي + ذكاء اصطناعي اختياري لـ ChatGPT وGemini وClaude وDeepSeek: تجميع محلي افتراضيًا ثم توسيع/صقل اختياري عبر Cloudflare Workers AI (Turnstile مطلوب، محدود المعدل). يعمل المثال عند الفتح. Markdown افتراضي؛ JSON للمسارات. النص يبقى على جهازك ما لم تستخدم الذكاء الاصطناعي.',
	tool_android_prompt_builder_build:
		'إنشاء prompt',
	tool_android_prompt_builder_clear:
		'مسح',
	tool_android_prompt_builder_copy:
		'نسخ',
	tool_android_prompt_builder_desc:
		'منشئ prompts لـ Android — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_android_prompt_builder_description:
		'عملية ومثال: منشئ prompts لـ Android — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_android_prompt_builder_download:
		'تنزيل',
	tool_android_prompt_builder_empty:
		'املأ حقلًا واحدًا على الأقل قبل الإنشاء.',
	tool_android_prompt_builder_example:
		'Load sample fills the default preset, builds Markdown, and enables Copy. Optional AI sends only the text you submit for that click after Turnstile.',
	tool_android_prompt_builder_example_title:
		'مثال',
	tool_android_prompt_builder_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_android_prompt_builder_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_android_prompt_builder_faq_a3:
		'منشئ prompts لـ Android covers generic Role/Task/Constraints/Output templates. This page focuses on android prompt builder fields with a dedicated sample and rules for this scenario.',
	tool_android_prompt_builder_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_android_prompt_builder_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_android_prompt_builder_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_android_prompt_builder_faq_q1:
		'Is my prompt uploaded?',
	tool_android_prompt_builder_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_android_prompt_builder_faq_q3:
		'How is this different from منشئ prompts لـ Android?',
	tool_android_prompt_builder_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_android_prompt_builder_faq_q5:
		'Can I get JSON output?',
	tool_android_prompt_builder_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_android_prompt_builder_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_android_prompt_builder_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_android_prompt_builder_ai_expand:
		'Expandir con IA',
	tool_android_prompt_builder_ai_polish:
		'Pulir con IA',
	tool_android_prompt_builder_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_android_prompt_builder_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_android_prompt_builder_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_android_prompt_builder_ai_consent_ok:
		'Continuar',
	tool_android_prompt_builder_ai_consent_cancel:
		'Cancelar',
	tool_android_prompt_builder_ai_working:
		'Cloudflare AI trabajando…',
	tool_android_prompt_builder_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_android_prompt_builder_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_android_prompt_builder_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_android_prompt_builder_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_android_prompt_builder_fmt_json:
		'JSON',
	tool_android_prompt_builder_fmt_label:
		'صيغة الإخراج',
	tool_android_prompt_builder_fmt_md:
		'Markdown',
	tool_android_prompt_builder_feature_spec_label:
		'Feature / Spec',
	tool_android_prompt_builder_feature_spec_ph:
		'Sample feature spec…',
	tool_android_prompt_builder_kotlin_stack_label:
		'Kotlin / Stack',
	tool_android_prompt_builder_kotlin_stack_ph:
		'Sample kotlin stack…',
	tool_android_prompt_builder_compose_ui_label:
		'Compose / Ui',
	tool_android_prompt_builder_compose_ui_ph:
		'Sample compose ui…',
	tool_android_prompt_builder_gradle_constraints_label:
		'Gradle / Constraints',
	tool_android_prompt_builder_gradle_constraints_ph:
		'Sample gradle constraints…',
	tool_android_prompt_builder_how_body:
		'Fill منشئ prompts لـ Android fields, build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_android_prompt_builder_how_item_1:
		'Load sample already ran the default preset on first paint.',
	tool_android_prompt_builder_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_android_prompt_builder_how_item_3:
		'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
	tool_android_prompt_builder_how_item_4:
		'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_android_prompt_builder_how_title:
		'كيف يعمل',
	tool_android_prompt_builder_load_sample:
		'تحميل مثال',
	tool_android_prompt_builder_platforms_lead:
		'لـ ChatGPT وGemini وClaude وDeepSeek — انسخ الـ prompt إلى أي واجهة دردشة.',
	tool_android_prompt_builder_result_label:
		'مخرجات Prompt',
	tool_android_prompt_builder_rules_body:
		'Kotlin/Compose/Gradle fields for mobile agent prompts. Local assembly is default; optional AI is rate-limited and requires Turnstile.',
	tool_android_prompt_builder_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_android_prompt_builder_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_android_prompt_builder_rules_item_3:
		'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
	tool_android_prompt_builder_rules_item_4:
		'This tool assembles text only; it does not run android prompt builder engines or call chat APIs locally.',
	tool_android_prompt_builder_rules_title:
		'قواعد يجب أن تعرفها',
	tool_android_prompt_builder_sec_constraints:
		'Constraints',
	tool_android_prompt_builder_sec_output:
		'Output format',
	tool_android_prompt_builder_sec_role:
		'Role',
	tool_android_prompt_builder_sec_task:
		'Task',
	tool_android_prompt_builder_status_copied:
		'تم النسخ.',
	tool_android_prompt_builder_status_done:
		'Prompt جاهز.',
	tool_android_prompt_builder_status_working:
		'جاري الإنشاء…',
	tool_android_prompt_builder_title:
		'منشئ prompts لـ Android — محلي + ذكاء اصطناعي اختياري',
	tool_android_prompt_builder_usecase_1:
		'Ship a paste-ready android prompt builder brief for your team chat in ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_android_prompt_builder_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_android_prompt_builder_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_android_prompt_builder_usecase_4:
		'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
	tool_android_prompt_builder_usecases_title:
		'حالات مناسبة',
};

export default ar;
