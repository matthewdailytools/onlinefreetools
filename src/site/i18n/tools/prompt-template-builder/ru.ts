/**
 * i18n tool shard (prompt-template-builder / ru).
 * Master H1: конструктор шаблонов Prompt; not an LLM — structured Role/Task/Constraints/Output.
 * Platforms ChatGPT / Gemini / Claude / DeepSeek appear in description and first screen.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Превратите черновик prompt в переиспользуемый шаблон Role / Task / Constraints / Output на этой странице. Вставьте свободный текст или заполните поля, затем скопируйте Markdown или JSON в ChatGPT, Gemini, Claude или DeepSeek. API моделей не вызывается. Текст остаётся на устройстве и не загружается на сервер.',
	tool_prompt_template_builder_build: 'Собрать шаблон',
	tool_prompt_template_builder_clear: 'Очистить',
	tool_prompt_template_builder_constraints_label: 'Ограничения',
	tool_prompt_template_builder_constraints_ph: 'Тон, область, чего избегать…',
	tool_prompt_template_builder_copy: 'Копировать',
	tool_prompt_template_builder_desc:
		'Конструктор шаблонов Prompt — local por defecto + Expand/Polish opcional Cloudflare AI (Turnstile); Markdown/JSON en el dispositivo.',
	tool_prompt_template_builder_description:
		'Процесс и пример: Конструктор шаблонов Prompt — Local + IA opcional para ChatGPT, Gemini, Claude y DeepSeek: ensambla prompts localmente por defecto y opcionalmente Expand/Polish con Cloudflare Workers AI (Turnstile obligatorio, límite de uso). Ejemplo al abrir. Markdown por defecto; JSON para pipelines. Texto en el dispositivo salvo que uses IA.',
	tool_prompt_template_builder_download: 'Скачать',
	tool_prompt_template_builder_empty: 'Добавьте свободный текст или хотя бы одно поле перед сборкой.',
	tool_prompt_template_builder_example:
		'Загрузка примера заполняет preset Agent code review, создаёт Markdown с четырьмя разделами ## и включает Копировать и Скачать. Попробуйте чипы Фильм, Короткая драма, Android или iOS для других значений по умолчанию.',
	tool_prompt_template_builder_example_title: 'Пример',
	tool_prompt_template_builder_faq_a1:
		'Por defecto el ensamblaje es local en esta pestaña. Expand/Polish opcional envía solo el texto de ese clic a Cloudflare Workers AI.',
	tool_prompt_template_builder_faq_a2:
		'Modo local solo formatea aquí. Expand/Polish opcional usa Cloudflare Workers AI tras Turnstile — no llama APIs de chat.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown превращает экспорт чатов в читаемые файлы. Здесь вы структурируете переиспользуемый system prompt — используйте оба после архивации чатов.',
	tool_prompt_template_builder_faq_a4:
		'Sí. Completa Turnstile en el panel de IA antes de Expand o Polish.',
	tool_prompt_template_builder_faq_a5:
		'Строки, начинающиеся с Role:, Task:, Constraints: или Output: в свободном поле, делятся на секции. Явные поля важнее.',
	tool_prompt_template_builder_faq_a6:
		'Да. Скопируйте собранный шаблон в ChatGPT, Gemini, Claude или DeepSeek — та же структура из четырёх полей работает в каждом чат-UI. Отдельные URL по платформам не нужны: задача — форматировать текст, а не вызывать API.',
	tool_prompt_template_builder_faq_q1: 'Загружается ли мой prompt?',
	tool_prompt_template_builder_faq_q2: 'Вызывается ли LLM?',
	tool_prompt_template_builder_faq_q3: 'Чем отличается от экспорта ChatGPT в Markdown?',
	tool_prompt_template_builder_faq_q4:
		'¿Por qué Turnstile para IA opcional?',
	tool_prompt_template_builder_faq_q5: 'Как работает разбор свободного текста?',
	tool_prompt_template_builder_faq_q6: 'Можно использовать с ChatGPT, Gemini, Claude или DeepSeek?',
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
	tool_prompt_template_builder_fmt_label: 'Формат вывода',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Свободный prompt (необяз.)',
	tool_prompt_template_builder_free_ph: 'Вставьте черновик или строки Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Выберите чип сцены или напишите черновик, заполните Role / Task / Constraints / Output, соберите шаблон и вставьте в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Выберите Code review, Фильм, Короткая драма, Android или iOS — или вставьте черновик в свободное поле.',
	tool_prompt_template_builder_how_item_2: 'Нажмите Собрать шаблон (Загрузить пример уже выполнил preset code review при открытии).',
	tool_prompt_template_builder_how_item_3: 'Переключитесь на JSON, если нужен {role,task,constraints,output} для кода или конфига.',
	tool_prompt_template_builder_how_item_4: 'Скопируйте или скачайте, затем вставьте в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_prompt_template_builder_how_title: 'Как это работает',
	tool_prompt_template_builder_load_sample: 'Загрузить пример',
	tool_prompt_template_builder_output_fmt_label: 'Формат вывода',
	tool_prompt_template_builder_output_fmt_ph: 'Разделы Markdown, форма JSON, список…',
	tool_prompt_template_builder_platforms_lead:
		'Для ChatGPT, Gemini, Claude и DeepSeek — скопируйте готовый шаблон в любой из этих чат-UI.',
	tool_prompt_template_builder_result_label: 'Шаблон',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Кем должен выступать модель…',
	tool_prompt_template_builder_rules_body:
		'Переиспользуемый шаблон требует ясных блоков, приоритета полей и честных границ — не второго продукта-генератора.',
	tool_prompt_template_builder_rules_item_1:
		'Четыре блока: Role, Task, Constraints, Output. Пустые не попадают в Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Явные поля важнее строк, разобранных из свободного текста.',
	tool_prompt_template_builder_rules_item_3: 'По умолчанию Markdown с ##. JSON — чип на той же странице.',
	tool_prompt_template_builder_rules_item_4:
		'Чипы сцен preset-ят поля для кино, короткой драмы и мобильного кода — один конструктор, без отдельных URL по платформам.',
	tool_prompt_template_builder_rules_title: 'Ожидаемые правила',
	tool_prompt_template_builder_scene_android: 'Код Android',
	tool_prompt_template_builder_scene_code: 'Code review',
	tool_prompt_template_builder_scene_ios: 'Код iOS',
	tool_prompt_template_builder_scene_label: 'Preset сцены',
	tool_prompt_template_builder_scene_movie: 'Полнометражный фильм',
	tool_prompt_template_builder_scene_short_drama: 'Короткая драма',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'Скопировано в буфер обмена.',
	tool_prompt_template_builder_status_done: 'Шаблон готов.',
	tool_prompt_template_builder_status_working: 'Сборка шаблона…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Что делать по шагам…',
	tool_prompt_template_builder_title:
		'Конструктор шаблонов Prompt — Локально + опциональный ИИ',
	tool_prompt_template_builder_usecase_1:
		'Опубликуйте system prompt Agent code review, который команда вставит в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_prompt_template_builder_usecase_2:
		'Превратите заметки встречи в блоки Role/Task/Constraints перед подключением API любого чат-провайдера.',
	tool_prompt_template_builder_usecase_3:
		'Экспортируйте JSON и откройте JSON Schema validator для проверки downstream конфигов.',
	tool_prompt_template_builder_usecase_4:
		'Загрузите чип Фильм для beat sheet в трёх актах — вставьте в предпочитаемый чат-UI.',
	tool_prompt_template_builder_usecase_5:
		'Загрузите Короткая драма для хуков и cliffhanger вертикального сериала — мобильные эпизоды в стиле binge.',
	tool_prompt_template_builder_usecase_6:
		'Загрузите Android или iOS для шаблонов coding-agent Kotlin/Swift без четырёх отдельных страниц по платформам.',
	tool_prompt_template_builder_usecases_title: 'Подходящие случаи',
};

export default ru;
