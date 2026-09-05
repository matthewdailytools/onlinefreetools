/**
 * i18n tool shard (prompt-template-builder / ru).
 * Поисковый H1: конструктор шаблонов промптов; страница только оформляет текст и не вызывает
 * API чатов. ChatGPT / Gemini / Claude / DeepSeek упомянуты в description и на первом экране.
 * «Расширить»/«Отшлифовать» — опция через Cloudflare Workers AI (Turnstile + квота).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Превратите черновик prompt в переиспользуемый шаблон Role / Task / Constraints / Output на этой странице. Вставьте свободный текст или заполните поля, затем скопируйте Markdown или JSON в ChatGPT, Gemini, Claude или DeepSeek. По умолчанию шаблон собирается прямо в браузере, и мы не вызываем за вас API чатов; только при нажатии «Расширить» или «Отшлифовать» текущий черновик уходит в Cloudflare Workers AI (нужен Turnstile, есть ограничения по частоте и квоте).',
	tool_prompt_template_builder_build: 'Собрать шаблон',
	tool_prompt_template_builder_clear: 'Очистить',
	tool_prompt_template_builder_constraints_label: 'Ограничения',
	tool_prompt_template_builder_constraints_ph: 'Тон, область, чего избегать…',
	tool_prompt_template_builder_copy: 'Копировать',
	tool_prompt_template_builder_desc:
		'Конструктор шаблонов промптов — сборка идёт локально в браузере, «Расширить/Отшлифовать» через Cloudflare AI по желанию (нужен Turnstile).',
	tool_prompt_template_builder_description:
		'Конструктор шаблонов промптов: разложите черновик по четырём шагам — Role, Task, Constraints, Output — и скопируйте в ChatGPT, Gemini, Claude или DeepSeek. При открытии уже отрабатывает пример код-ревью; по умолчанию экспорт в Markdown, для пайплайнов есть JSON. Сборка идёт в браузере, а ИИ Cloudflare («Расширить/Отшлифовать») подключается по желанию и ограничен квотой.',
	tool_prompt_template_builder_download: 'Скачать',
	tool_prompt_template_builder_empty: 'Добавьте свободный текст или хотя бы одно поле перед сборкой.',
	tool_prompt_template_builder_example:
		'Ввод (Загрузить пример, чип Code): Role = senior code reviewer (безопасность и читаемость); Task = ревью diff PR; Constraints = до 12 пунктов. Вывод (Markdown): ## Роль / ## Задача / ## Ограничения / ## Формат вывода — четыре секции для ChatGPT или Claude.',
	tool_prompt_template_builder_example_title: 'Пример',
	tool_prompt_template_builder_faq_a1:
		'По умолчанию шаблон собирается в этой вкладке и никуда не уходит. Только «Расширить/Отшлифовать» отправляет текст этого нажатия в Cloudflare Workers AI; с наших серверов ничего не идёт в OpenAI, Google, Anthropic или DeepSeek.',
	tool_prompt_template_builder_faq_a2:
		'Локальный режим просто оформляет ваши поля в этой вкладке. «Расширить/Отшлифовать» после Turnstile обращается к Cloudflare Workers AI — мы не открываем за вас ChatGPT, Gemini, Claude или DeepSeek.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown превращает экспорт чатов в читаемые файлы. Здесь вы структурируете переиспользуемый system prompt — используйте оба после архивации чатов.',
	tool_prompt_template_builder_faq_a4:
		'Да. Пройдите виджет Turnstile в панели ИИ перед «Расширить» или «Отшлифовать»; без валидного токена кнопка вернёт ошибку, а локальная сборка продолжит работать.',
	tool_prompt_template_builder_faq_a5:
		'Строки, начинающиеся с Role:, Task:, Constraints: или Output: в свободном поле, делятся на секции. Явные поля важнее.',
	tool_prompt_template_builder_faq_a6:
		'Да. Скопируйте собранный шаблон в ChatGPT, Gemini, Claude или DeepSeek — структура из четырёх полей одинаково работает в любом из этих чатов. Страница только готовит текст: она никуда не логинится и не вызывает API.',
	tool_prompt_template_builder_faq_q1: 'Загружается ли мой prompt?',
	tool_prompt_template_builder_faq_q2: 'Вызывается ли LLM?',
	tool_prompt_template_builder_faq_q3: 'Чем отличается от экспорта ChatGPT в Markdown?',
	tool_prompt_template_builder_faq_q4:
		'Зачем опциональному ИИ нужен Turnstile?',
	tool_prompt_template_builder_faq_q5: 'Как работает разбор свободного текста?',
	tool_prompt_template_builder_faq_q6: 'Можно использовать с ChatGPT, Gemini, Claude или DeepSeek?',
	tool_prompt_template_builder_faq_q7:
		'Чем локальный режим отличается от опционального ИИ Cloudflare?',
	tool_prompt_template_builder_faq_a7:
		'Локально: всё собирается в этой вкладке, без отправки. «Расширить/Отшлифовать» передаёт черновик в Cloudflare Workers AI (Turnstile и дневная квота), а ответ целиком заменяет блок результата. При ошибке или исчерпанной квоте остаётся локальный режим.',
	tool_prompt_template_builder_ai_expand:
		'Расширить через ИИ',
	tool_prompt_template_builder_ai_polish:
		'Отшлифовать через ИИ',
	tool_prompt_template_builder_ai_panel_label:
		'Опциональный ИИ Cloudflare (Turnstile)',
	tool_prompt_template_builder_ai_consent_title:
		'Отправить текст в Cloudflare Workers AI?',
	tool_prompt_template_builder_ai_consent_body:
		'Этот необязательный шаг отправляет ваш текущий черновик в Cloudflare Workers AI. С наших серверов он не уходит в OpenAI, Google, Anthropic или DeepSeek. Без ИИ локальная сборка работает как обычно.',
	tool_prompt_template_builder_ai_consent_ok:
		'Продолжить',
	tool_prompt_template_builder_ai_consent_cancel:
		'Отмена',
	tool_prompt_template_builder_ai_working:
		'ИИ Cloudflare обрабатывает…',
	tool_prompt_template_builder_ai_done:
		'Текст ИИ полностью записан в результат. Проверьте его перед копированием.',
	tool_prompt_template_builder_ai_err_generic:
		'ИИ не ответил. Ваш локальный prompt не изменился.',
	tool_prompt_template_builder_ai_err_rate:
		'Квота ИИ исчерпана. Работайте локально или попробуйте завтра (UTC).',
	tool_prompt_template_builder_ai_err_turnstile:
		'Пройдите Turnstile перед использованием ИИ.',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Формат вывода',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Свободный prompt (необяз.)',
	tool_prompt_template_builder_free_ph: 'Вставьте черновик или строки Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Выберите чип сцены или напишите черновик, заполните Role / Task / Constraints / Output, соберите шаблон и вставьте в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_prompt_template_builder_how_item_1:
		'Выберите Code review, Фильм, Короткая драма, Android или iOS — или вставьте черновик в свободное поле.',
	tool_prompt_template_builder_how_item_2: 'Нажмите «Собрать шаблон» (нажмите «Загрузить пример» для пресета code review).',
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
		'Переиспользуемому шаблону нужны ясные блоки, понятный приоритет полей и прямой ответ на вопрос, чего эта страница не делает.',
	tool_prompt_template_builder_rules_item_1:
		'Четыре блока: Role, Task, Constraints, Output. Пустые не попадают в Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Явные поля важнее строк, разобранных из свободного текста.',
	tool_prompt_template_builder_rules_item_3: 'По умолчанию Markdown с ##. JSON — чип на той же странице.',
	tool_prompt_template_builder_rules_item_4:
		'Чипы сцен заранее заполняют привычные поля для кино, короткой драмы и мобильного кода — после этого всё можно править вручную.',
	tool_prompt_template_builder_rules_title: 'Ожидаемые правила',
	tool_prompt_template_builder_scene_android: 'Код Android',
	tool_prompt_template_builder_scene_code: 'Code review',
	tool_prompt_template_builder_scene_ios: 'Код iOS',
	tool_prompt_template_builder_scene_label: 'Preset сцены',
	tool_prompt_template_builder_scene_movie: 'Полнометражный фильм',
	tool_prompt_template_builder_scene_short_drama: 'Короткая драма',
	tool_prompt_template_builder_sec_constraints: 'Ограничения',
	tool_prompt_template_builder_sec_output: 'Формат вывода',
	tool_prompt_template_builder_sec_role: 'Роль',
	tool_prompt_template_builder_sec_task: 'Задача',
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
		'Загрузите Android или iOS для шаблонов coding-agent с соглашениями Kotlin/Swift и добавьте правила своей команды.',
	tool_prompt_template_builder_usecases_title: 'Подходящие случаи',
};

export default ru;
