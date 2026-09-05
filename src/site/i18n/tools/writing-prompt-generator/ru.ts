/**
 * i18n tool shard (writing-prompt-generator / ru).
 * Поисковый H1: генератор промптов для писателей — диалог, персонаж, сценарий, случайный.
 * Сборка идёт в браузере; «Расширить»/«Отшлифовать» — опция через Cloudflare Workers AI
 * (Turnstile + квота), её ответ целиком заменяет блок результата.
 * ChatGPT / Gemini / Claude / DeepSeek упомянуты в description и на первом экране.
 */
import type { SiteLangDict } from '../../../types';

/** Генератор промптов для писателей — русскоязычный текстовый шард */
const ru: SiteLangDict = {
	tool_writing_prompt_generator_article:
		'Соберите готовые к вставке writing prompts: сцены диалога, карточки персонажей, наброски сценария или случайные зацепки для истории. Выберите режим, заполните поля или бросьте случайность, затем скопируйте Markdown или JSON в ChatGPT, Gemini, Claude или DeepSeek. По умолчанию промпт собирается прямо в браузере, и мы не вызываем за вас API чатов; только при нажатии «Расширить» или «Отшлифовать» текущий черновик уходит в Cloudflare Workers AI (нужен Turnstile, есть ограничения по частоте и квоте).',
	tool_writing_prompt_generator_build: 'Собрать prompt',
	tool_writing_prompt_generator_char_flaw_label: 'Изъян / слабость',
	tool_writing_prompt_generator_char_flaw_ph: 'Что его сдерживает…',
	tool_writing_prompt_generator_char_goal_label: 'Цель',
	tool_writing_prompt_generator_char_goal_ph: 'Чего он хочет в этой истории…',
	tool_writing_prompt_generator_char_name_label: 'Имя персонажа',
	tool_writing_prompt_generator_char_name_ph: 'Имя или роль…',
	tool_writing_prompt_generator_char_traits_label: 'Черты',
	tool_writing_prompt_generator_char_traits_ph: 'Характер, привычки, противоречия…',
	tool_writing_prompt_generator_char_voice_label: 'Голос / речь',
	tool_writing_prompt_generator_char_voice_ph: 'Ритм фраз, словарь…',
	tool_writing_prompt_generator_clear: 'Очистить',
	tool_writing_prompt_generator_copy: 'Копировать',
	tool_writing_prompt_generator_desc:
		'Генератор промптов для писателей — режимы диалога, персонажа, сценария и случайный; сборка в браузере, ИИ Cloudflare по желанию.',
	tool_writing_prompt_generator_description:
		'Генератор промптов для писателей: выберите режим — диалог, персонаж, сценарий или случайный, — заполните поля и получите промпт, готовый к вставке в ChatGPT, Gemini, Claude или DeepSeek. При открытии уже отрабатывает пример диалога; в случайном режиме вы бросаете зацепку для истории, а seed повторяет тот же бросок. Экспорт в Markdown или JSON; сборка идёт в браузере, ИИ Cloudflare — по желанию.',
	tool_writing_prompt_generator_dlg_characters_label: 'Персонажи',
	tool_writing_prompt_generator_dlg_characters_ph: 'Имена + роль в одной строке…',
	tool_writing_prompt_generator_dlg_conflict_label: 'Конфликт',
	tool_writing_prompt_generator_dlg_conflict_ph: 'Какое напряжение движет сценой…',
	tool_writing_prompt_generator_dlg_genre_label: 'Жанр / тон',
	tool_writing_prompt_generator_dlg_genre_ph: 'Современная драма, ромком…',
	tool_writing_prompt_generator_dlg_setting_label: 'Место действия',
	tool_writing_prompt_generator_dlg_setting_ph: 'Место, время, атмосфера…',
	tool_writing_prompt_generator_dlg_tone_label: 'Стиль диалога',
	tool_writing_prompt_generator_dlg_tone_ph: 'Подтекст, перепалка, лаконично…',
	tool_writing_prompt_generator_download: 'Скачать',
	tool_writing_prompt_generator_empty: 'Заполните хотя бы одно поле в этом режиме перед сборкой.',
	tool_writing_prompt_generator_example:
		'Ввод (Диалог, Загрузить пример): Genre = современная драма; Characters = Майя (бариста) и Джона (музыкант); Conflict = Майя узнаёт в песне историю своего бывшего. Вывод (Markdown): ## Роль → наставник по письму; ## Задача → строки genre/characters/setting/conflict/tone. Режим сценария — загадка с факсом маяка, не food-truck из фильма.',
	tool_writing_prompt_generator_example_title: 'Пример',
	tool_writing_prompt_generator_faq_a1:
		'По умолчанию промпт собирается в этой вкладке и никуда не уходит. Только «Расширить/Отшлифовать» отправляет текст этого нажатия в Cloudflare Workers AI; с наших серверов ничего не идёт в OpenAI, Google, Anthropic или DeepSeek.',
	tool_writing_prompt_generator_faq_a2:
		'Локальный режим просто оформляет ваши писательские поля в этой вкладке. «Расширить/Отшлифовать» после Turnstile обращается к Cloudflare Workers AI — мы не открываем за вас ChatGPT, Gemini, Claude или DeepSeek.',
	tool_writing_prompt_generator_faq_a3:
		'Конструктор шаблонов Prompt структурирует общие шаблоны Role/Task/Constraints/Output. Эта страница ориентирована на письменные режимы — поля диалога, карточки персонажей, beats сценария и генератор случайных prompts на одном холсте.',
	tool_writing_prompt_generator_faq_a4:
		'Да. Случайный режим бросает жанр, место действия, предмет, эмоцию и конфликт. Числовой seed повторяет ровно тот же бросок. Результат — материал для вдохновения, качество не гарантируется.',
	tool_writing_prompt_generator_faq_a5:
		'Да. Пройдите виджет Turnstile в панели ИИ перед «Расширить» или «Отшлифовать»; без валидного токена кнопка вернёт ошибку, а локальная сборка продолжит работать.',
	tool_writing_prompt_generator_faq_a6:
		'Да. Чип JSON выдаёт {mode,fields,role,task,constraints,output} для тестов или конфигов. Markdown использует заголовки ## Роль / Задача / Ограничения / Формат вывода.',
	tool_writing_prompt_generator_faq_q1: 'Загружается ли мой writing prompt?',
	tool_writing_prompt_generator_faq_q2: 'Вызывает ли это LLM?',
	tool_writing_prompt_generator_faq_q3: 'Чем отличается от конструктора шаблонов Prompt?',
	tool_writing_prompt_generator_faq_q4:
		'Работает ли здесь генератор случайных промптов?',
	tool_writing_prompt_generator_faq_q5: 'Зачем опциональному ИИ нужен Turnstile?',
	tool_writing_prompt_generator_faq_q6: 'Можно получить JSON?',
	tool_writing_prompt_generator_fmt_json: 'JSON',
	tool_writing_prompt_generator_fmt_label: 'Формат вывода',
	tool_writing_prompt_generator_fmt_md: 'Markdown',
	tool_writing_prompt_generator_how_body:
		'Выберите режим письма, заполните поля или бросьте случайность, соберите блок prompt и вставьте в ChatGPT, Gemini, Claude или DeepSeek.',
	tool_writing_prompt_generator_how_item_1:
		'Выберите Диалог, Персонаж, Сценарий или Случайный — Загрузить пример уже запустил пресет диалога при открытии.',
	tool_writing_prompt_generator_how_item_2: 'Заполните поля режима (или введите seed и нажмите Случайный бросок).',
	tool_writing_prompt_generator_how_item_3: 'Нажмите Собрать prompt (скрыто в Случайном — используйте Случайный бросок).',
	tool_writing_prompt_generator_how_item_4: 'Скопируйте или скачайте Markdown/JSON и вставьте в чат.',
	tool_writing_prompt_generator_how_title: 'Как это работает',
	tool_writing_prompt_generator_load_sample: 'Загрузить пример',
	tool_writing_prompt_generator_mode_character: 'Персонаж',
	tool_writing_prompt_generator_mode_dialogue: 'Диалог',
	tool_writing_prompt_generator_mode_label: 'Режим письма',
	tool_writing_prompt_generator_mode_random: 'Случайный',
	tool_writing_prompt_generator_mode_script: 'Сценарий / план',
	tool_writing_prompt_generator_platforms_lead:
		'Для ChatGPT, Gemini, Claude и DeepSeek — скопируйте готовый writing prompt в любой из этих чатов.',
	tool_writing_prompt_generator_random_lead:
		'Бросьте зацепку истории из жанра, места, предмета, эмоции и конфликта. Необязательный seed повторяет тот же бросок.',
	tool_writing_prompt_generator_random_roll: 'Случайный бросок',
	tool_writing_prompt_generator_random_seed_label: 'Seed (необяз.)',
	tool_writing_prompt_generator_random_seed_ph: 'напр. 42',
	tool_writing_prompt_generator_result_label: 'Промпт для письма',
	tool_writing_prompt_generator_rules_body:
		'Писательским промптам нужны свои поля под каждый режим, честная оговорка о том, что даёт случайный бросок, и та же сборка в браузере, что и у остальных конструкторов.',
	tool_writing_prompt_generator_rules_item_1:
		'Четыре блока в выводе: Role, Task, Constraints, Output — в духе структурированных шаблонов.',
	tool_writing_prompt_generator_rules_item_2:
		'Случайный режим живёт на этом же холсте: бросает жанр, место, предмет, эмоцию и конфликт, а seed повторяет бросок.',
	tool_writing_prompt_generator_rules_item_3:
		'Экспорт по умолчанию — Markdown. JSON — чип на том же холсте.',
	tool_writing_prompt_generator_rules_item_4:
		'Опциональный ИИ Cloudflare никогда не заменяет локальный режим — проверьте его текст перед копированием. Инструмент собирает промпт, но не пишет готовую историю.',
	tool_writing_prompt_generator_rules_title: 'Чего ожидать',
	tool_writing_prompt_generator_scr_notes_label: 'Заметки по beats',
	tool_writing_prompt_generator_scr_notes_ph: 'Число сцен, темп, POV…',
	tool_writing_prompt_generator_scr_premise_label: 'Завязка / logline',
	tool_writing_prompt_generator_scr_premise_ph: 'Setup в одном абзаце…',
	tool_writing_prompt_generator_scr_structure_label: 'Структура',
	tool_writing_prompt_generator_scr_structure_ph: 'Три акта, save the cat, эпизодический…',
	tool_writing_prompt_generator_sec_constraints: 'Ограничения',
	tool_writing_prompt_generator_sec_output: 'Формат вывода',
	tool_writing_prompt_generator_sec_role: 'Роль',
	tool_writing_prompt_generator_sec_task: 'Задача',
	tool_writing_prompt_generator_status_copied: 'Скопировано в буфер обмена.',
	tool_writing_prompt_generator_status_done: 'Prompt готов.',
	tool_writing_prompt_generator_status_working: 'Сборка prompt…',
	tool_writing_prompt_generator_title:
		'Генератор writing prompt — Локально + опциональный ИИ',
	tool_writing_prompt_generator_usecase_1:
		'Набросайте prompt сцены диалога для писательской группы — вставьте в ChatGPT или Claude за идеями beats, не за полным текстом.',
	tool_writing_prompt_generator_usecase_2:
		'Бросьте случайность, когда нужна свежая зацепка без отдельного сайта-рандомайзера.',
	tool_writing_prompt_generator_usecase_3:
		'Экспортируйте JSON prompt карточки персонажа для теста pipeline, затем откройте конструктор шаблонов Prompt для API-шаблонов из четырёх полей.',
	tool_writing_prompt_generator_usecase_4:
		'Локально набросайте beats короткого сценария, прежде чем перенести prompt в Gemini для table read.',
	tool_writing_prompt_generator_usecases_title: 'Хорошие сценарии',
	tool_writing_prompt_generator_ai_expand:
		'Расширить через ИИ',
	tool_writing_prompt_generator_ai_polish:
		'Отшлифовать через ИИ',
	tool_writing_prompt_generator_ai_panel_label:
		'Опциональный ИИ Cloudflare (Turnstile)',
	tool_writing_prompt_generator_ai_consent_title:
		'Отправить текст в Cloudflare Workers AI?',
	tool_writing_prompt_generator_ai_consent_body:
		'Этот необязательный шаг отправляет ваш текущий черновик в Cloudflare Workers AI. С наших серверов он не уходит в OpenAI, Google, Anthropic или DeepSeek. Без ИИ локальная сборка работает как обычно.',
	tool_writing_prompt_generator_ai_consent_ok:
		'Продолжить',
	tool_writing_prompt_generator_ai_consent_cancel:
		'Отмена',
	tool_writing_prompt_generator_ai_working:
		'ИИ Cloudflare обрабатывает…',
	tool_writing_prompt_generator_ai_done:
		'Текст ИИ полностью записан в результат. Проверьте его перед копированием.',
	tool_writing_prompt_generator_ai_err_generic:
		'ИИ не ответил. Ваш локальный prompt не изменился.',
	tool_writing_prompt_generator_ai_err_rate:
		'Квота ИИ исчерпана. Работайте локально или попробуйте завтра (UTC).',
	tool_writing_prompt_generator_ai_err_turnstile:
		'Пройдите Turnstile перед использованием ИИ.',
	tool_writing_prompt_generator_faq_q7:
		'Можно использовать с ChatGPT, Gemini, Claude или DeepSeek?',
	tool_writing_prompt_generator_faq_a7:
		'Да. Скопируйте готовый prompt в ChatGPT, Gemini, Claude или DeepSeek. Страница только готовит текст: она никуда не логинится и не вызывает API.',
	tool_writing_prompt_generator_faq_q8:
		'Чем локальный режим отличается от опционального ИИ Cloudflare?',
	tool_writing_prompt_generator_faq_a8:
		'Локально: всё собирается в этой вкладке, без отправки. «Расширить/Отшлифовать» передаёт черновик в Cloudflare Workers AI (Turnstile и дневная квота), а ответ целиком заменяет блок результата. При ошибке или исчерпанной квоте остаётся локальный режим.',
};

export default ru;
