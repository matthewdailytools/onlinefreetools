/**
 * i18n tool shard (short-drama-prompt-generator / ru).
 * 检索向独立重写；title 含「本地 + 可选 AI」；description 含本地默认与 Cloudflare AI Expand/Polish + Turnstile。
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_short_drama_prompt_generator_article:
		'Генератор short drama prompt — Локально + опциональный ИИ для ChatGPT, Gemini, Claude и DeepSeek: локальная сборка по умолчанию, опционально Expand/Polish через Cloudflare Workers AI (Turnstile, лимиты). Пример на первом экране. Markdown по умолчанию; JSON для пайплайнов. Текст на устройстве, пока не включите ИИ.',
	tool_short_drama_prompt_generator_build:
		'Собрать prompt',
	tool_short_drama_prompt_generator_clear:
		'Очистить',
	tool_short_drama_prompt_generator_copy:
		'Копировать',
	tool_short_drama_prompt_generator_desc:
		'Генератор short drama prompt — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_short_drama_prompt_generator_description:
		'Процесс и пример: Генератор short drama prompt — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_short_drama_prompt_generator_download:
		'Скачать',
	tool_short_drama_prompt_generator_empty:
		'Заполните хотя бы одно поле перед сборкой.',
	tool_short_drama_prompt_generator_example:
		'Load sample fills the default preset, builds Markdown, and enables Copy. Optional AI sends only the text you submit for that click after Turnstile.',
	tool_short_drama_prompt_generator_example_title:
		'Пример',
	tool_short_drama_prompt_generator_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_short_drama_prompt_generator_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_short_drama_prompt_generator_faq_a3:
		'Генератор short drama prompt covers generic Role/Task/Constraints/Output templates. This page focuses on short drama prompt generator fields with a dedicated sample and rules for this scenario.',
	tool_short_drama_prompt_generator_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_short_drama_prompt_generator_faq_a5:
		'Yes. The JSON chip emits structured fields plus assembled prompt text for tests or config pipelines.',
	tool_short_drama_prompt_generator_faq_a6:
		'Yes. Copy the finished prompt into ChatGPT, Gemini, Claude, or DeepSeek. We do not split URLs per platform because the job is formatting text, not calling APIs.',
	tool_short_drama_prompt_generator_faq_q1:
		'Is my prompt uploaded?',
	tool_short_drama_prompt_generator_faq_q2:
		'Does this call ChatGPT or other LLM APIs?',
	tool_short_drama_prompt_generator_faq_q3:
		'How is this different from Генератор short drama prompt?',
	tool_short_drama_prompt_generator_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_short_drama_prompt_generator_faq_q5:
		'Can I get JSON output?',
	tool_short_drama_prompt_generator_faq_q6:
		'Can I use this with ChatGPT, Gemini, Claude, or DeepSeek?',
	tool_short_drama_prompt_generator_faq_q7:
		'¿Diferencia entre local y Cloudflare AI opcional?',
	tool_short_drama_prompt_generator_faq_a7:
		'Local: solo esta pestaña, sin subida. Expand/Polish opcional a Cloudflare Workers AI (Turnstile, límite).',
	tool_short_drama_prompt_generator_ai_expand:
		'Expandir con IA',
	tool_short_drama_prompt_generator_ai_polish:
		'Pulir con IA',
	tool_short_drama_prompt_generator_ai_panel_label:
		'Cloudflare AI opcional (Turnstile)',
	tool_short_drama_prompt_generator_ai_consent_title:
		'¿Enviar texto a Cloudflare Workers AI?',
	tool_short_drama_prompt_generator_ai_consent_body:
		'Este paso opcional envía tu borrador a Cloudflare Workers AI. No va a OpenAI, Google, Anthropic ni DeepSeek desde nuestros servidores.',
	tool_short_drama_prompt_generator_ai_consent_ok:
		'Continuar',
	tool_short_drama_prompt_generator_ai_consent_cancel:
		'Cancelar',
	tool_short_drama_prompt_generator_ai_working:
		'Cloudflare AI trabajando…',
	tool_short_drama_prompt_generator_ai_done:
		'Sugerencia de IA aplicada. Revisa antes de copiar.',
	tool_short_drama_prompt_generator_ai_err_generic:
		'La IA falló. Tu prompt local no cambió.',
	tool_short_drama_prompt_generator_ai_err_rate:
		'Cuota de IA agotada. Modo local o prueba mañana (UTC).',
	tool_short_drama_prompt_generator_ai_err_turnstile:
		'Completa Turnstile antes de usar IA.',
	tool_short_drama_prompt_generator_fmt_json:
		'JSON',
	tool_short_drama_prompt_generator_fmt_label:
		'Формат вывода',
	tool_short_drama_prompt_generator_fmt_md:
		'Markdown',
	tool_short_drama_prompt_generator_episodes_label:
		'Episodes',
	tool_short_drama_prompt_generator_episodes_ph:
		'Sample episodes…',
	tool_short_drama_prompt_generator_hook_label:
		'Hook',
	tool_short_drama_prompt_generator_hook_ph:
		'Sample hook…',
	tool_short_drama_prompt_generator_cliffhanger_label:
		'Cliffhanger',
	tool_short_drama_prompt_generator_cliffhanger_ph:
		'Sample cliffhanger…',
	tool_short_drama_prompt_generator_vertical_format_label:
		'Vertical / Format',
	tool_short_drama_prompt_generator_vertical_format_ph:
		'Sample vertical format…',
	tool_short_drama_prompt_generator_genre_label:
		'Genre',
	tool_short_drama_prompt_generator_genre_ph:
		'Sample genre…',
	tool_short_drama_prompt_generator_how_body:
		'Fill Генератор short drama prompt fields, build a prompt locally, optionally Expand/Polish with Turnstile, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_short_drama_prompt_generator_how_item_1:
		'Load sample already ran the default preset on first paint.',
	tool_short_drama_prompt_generator_how_item_2:
		'Edit fields, click Build prompt, or switch to JSON if you need structured export.',
	tool_short_drama_prompt_generator_how_item_3:
		'Optional: complete Turnstile, then Expand or Polish via Cloudflare Workers AI.',
	tool_short_drama_prompt_generator_how_item_4:
		'Copy or download, then paste into ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_short_drama_prompt_generator_how_title:
		'Как это работает',
	tool_short_drama_prompt_generator_load_sample:
		'Загрузить пример',
	tool_short_drama_prompt_generator_platforms_lead:
		'Для ChatGPT, Gemini, Claude, DeepSeek — копируйте готовый prompt в любой чат.',
	tool_short_drama_prompt_generator_result_label:
		'Вывод prompt',
	tool_short_drama_prompt_generator_rules_body:
		'Episodic hooks and cliffhangers for vertical binge. Local assembly is default; optional AI is rate-limited and requires Turnstile.',
	tool_short_drama_prompt_generator_rules_item_1:
		'Structured fields map to Role/Task/Constraints/Output blocks in Markdown export.',
	tool_short_drama_prompt_generator_rules_item_2:
		'Default export is Markdown. JSON is a chip on the same canvas.',
	tool_short_drama_prompt_generator_rules_item_3:
		'Optional Cloudflare AI never replaces local mode — review AI output before copying.',
	tool_short_drama_prompt_generator_rules_item_4:
		'This tool assembles text only; it does not run short drama prompt generator engines or call chat APIs locally.',
	tool_short_drama_prompt_generator_rules_title:
		'Ожидаемые правила',
	tool_short_drama_prompt_generator_sec_constraints:
		'Constraints',
	tool_short_drama_prompt_generator_sec_output:
		'Output format',
	tool_short_drama_prompt_generator_sec_role:
		'Role',
	tool_short_drama_prompt_generator_sec_task:
		'Task',
	tool_short_drama_prompt_generator_status_copied:
		'Скопировано.',
	tool_short_drama_prompt_generator_status_done:
		'Prompt готов.',
	tool_short_drama_prompt_generator_status_working:
		'Сборка prompt…',
	tool_short_drama_prompt_generator_title:
		'Генератор short drama prompt — Локально + опциональный ИИ',
	tool_short_drama_prompt_generator_usecase_1:
		'Ship a paste-ready short drama prompt generator brief for your team chat in ChatGPT, Gemini, Claude, or DeepSeek.',
	tool_short_drama_prompt_generator_usecase_2:
		'Export JSON for a pipeline test, then refine with optional Cloudflare AI after Turnstile.',
	tool_short_drama_prompt_generator_usecase_3:
		'Compare with Prompt template builder when you need generic four-field templates instead of this scenario.',
	tool_short_drama_prompt_generator_usecase_4:
		'Keep sensitive draft text local — only opt into AI when you accept the consent modal.',
	tool_short_drama_prompt_generator_usecases_title:
		'Хорошие сценарии',
};

export default ru;
