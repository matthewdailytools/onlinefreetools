/**
 * i18n tool shard (sketch-prompt-generator / ar).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const ar: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'مولّد prompts للرسم — محلي + ذكاء اصطناعي اختياري لـ ChatGPT وGemini وClaude وDeepSeek: تجميع محلي افتراضيًا ثم توسيع/صقل اختياري عبر Cloudflare Workers AI (Turnstile مطلوب، محدود المعدل). يعمل المثال عند الفتح. Markdown افتراضي؛ JSON للمسارات. النص يبقى على جهازك ما لم تستخدم الذكاء الاصطناعي.',
	tool_sketch_prompt_generator_build:
		'إنشاء prompt',
	tool_sketch_prompt_generator_clear:
		'مسح',
	tool_sketch_prompt_generator_copy:
		'نسخ',
	tool_sketch_prompt_generator_desc:
		'مولّد prompts للرسم — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_sketch_prompt_generator_description:
		'عملية ومثال: مولّد prompts للرسم — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_sketch_prompt_generator_download:
		'تنزيل',
	tool_sketch_prompt_generator_empty:
		'املأ حقلًا واحدًا على الأقل قبل الإنشاء.',
	tool_sketch_prompt_generator_example:
		'المدخلات: Medium = graphite؛ Stroke = cross-hatching؛ Composition = بورتريه؛ Ref = Kim Jung Gi. المخرجات (Markdown): ## Task مع Medium / Stroke / Composition / Artist.',
	tool_sketch_prompt_generator_example_title:
		'مثال',
	tool_sketch_prompt_generator_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_sketch_prompt_generator_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_sketch_prompt_generator_faq_a3:
		'مولّد prompts للرسم covers generic Role/Task/Constraints/Output templates. This page focuses on sketch prompt generator fields with a dedicated sample and rules for this scenario.',
	tool_sketch_prompt_generator_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_sketch_prompt_generator_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_sketch_prompt_generator_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_sketch_prompt_generator_faq_q1:
		'Is my prompt uploaded?',
	tool_sketch_prompt_generator_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_sketch_prompt_generator_faq_q3:
		'How is this different from مولّد prompts للرسم?',
	tool_sketch_prompt_generator_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_sketch_prompt_generator_faq_q5:
		'Can I get JSON output?',
	tool_sketch_prompt_generator_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_sketch_prompt_generator_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_sketch_prompt_generator_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_sketch_prompt_generator_ai_expand:
		'Expandir con IA',
	tool_sketch_prompt_generator_ai_polish:
		'Pulir con IA',
	tool_sketch_prompt_generator_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_sketch_prompt_generator_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_sketch_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_sketch_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_sketch_prompt_generator_ai_working:
		'Cloudflare AI trabajando…',
	tool_sketch_prompt_generator_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_sketch_prompt_generator_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_sketch_prompt_generator_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_sketch_prompt_generator_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_sketch_prompt_generator_fmt_json:
		'JSON',
	tool_sketch_prompt_generator_fmt_label:
		'صيغة الإخراج',
	tool_sketch_prompt_generator_fmt_md:
		'Markdown',
	tool_sketch_prompt_generator_medium_label:
		'Medium',
	tool_sketch_prompt_generator_medium_ph:
		'Sample medium…',
	tool_sketch_prompt_generator_stroke_label:
		'Stroke',
	tool_sketch_prompt_generator_stroke_ph:
		'Sample stroke…',
	tool_sketch_prompt_generator_composition_label:
		'Composition',
	tool_sketch_prompt_generator_composition_ph:
		'Sample composition…',
	tool_sketch_prompt_generator_artist_ref_label:
		'Artist / Ref',
	tool_sketch_prompt_generator_artist_ref_ph:
		'Sample artist ref…',
	tool_sketch_prompt_generator_how_body:
		'Fill مولّد prompts للرسم fields, build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_sketch_prompt_generator_how_item_1:
		'Load sample already ran the default preset on first paint.',
	tool_sketch_prompt_generator_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_sketch_prompt_generator_how_item_3:
		'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4:
		'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_sketch_prompt_generator_how_title:
		'كيف يعمل',
	tool_sketch_prompt_generator_load_sample:
		'تحميل مثال',
	tool_sketch_prompt_generator_platforms_lead:
		'لـ ChatGPT وGemini وClaude وDeepSeek — انسخ الـ prompt إلى أي واجهة دردشة.',
	tool_sketch_prompt_generator_result_label:
		'مخرجات Prompt',
	tool_sketch_prompt_generator_rules_body:
		'Medium/stroke/composition fields for hand-drawn look. Local assembly is default; optional AI is rate-limited and requires Turnstile.',
	tool_sketch_prompt_generator_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_sketch_prompt_generator_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_sketch_prompt_generator_rules_item_3:
		'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
	tool_sketch_prompt_generator_rules_item_4:
		'This tool assembles text only; it does not run sketch prompt generator engines or call chat APIs locally.',
	tool_sketch_prompt_generator_rules_title:
		'قواعد يجب أن تعرفها',
	tool_sketch_prompt_generator_sec_constraints:
		'Constraints',
	tool_sketch_prompt_generator_sec_output:
		'Output format',
	tool_sketch_prompt_generator_sec_role:
		'Role',
	tool_sketch_prompt_generator_sec_task:
		'Task',
	tool_sketch_prompt_generator_status_copied:
		'تم النسخ.',
	tool_sketch_prompt_generator_status_done:
		'Prompt جاهز.',
	tool_sketch_prompt_generator_status_working:
		'جاري الإنشاء…',
	tool_sketch_prompt_generator_title:
		'مولّد prompts للرسم — محلي + ذكاء اصطناعي اختياري',
	tool_sketch_prompt_generator_usecase_1:
		'Ship a paste-ready sketch prompt generator brief for your team chat in ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_sketch_prompt_generator_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_sketch_prompt_generator_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_sketch_prompt_generator_usecase_4:
		'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
	tool_sketch_prompt_generator_usecases_title:
		'حالات مناسبة',
};

export default ar;
