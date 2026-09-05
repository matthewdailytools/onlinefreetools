/**
 * i18n tool shard (sketch-prompt-generator / ru).
 * H1: Генератор промптов Sketch.app (Mac-дизайн, не карандашный скетч).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_sketch_prompt_generator_article:
		'Соберите готовый к вставке промпт, который подскажет ChatGPT, Gemini, Claude или DeepSeek, как работать в Sketch.app — артборды, Symbols, Shared Styles и экспорт. Заполните поля, скопируйте Markdown или JSON. По умолчанию промпт собирается прямо в браузере; только по нажатию «Расширить» или «Отполировать» текущий черновик уходит в Cloudflare Workers AI (нужен Turnstile, есть ограничения по частоте и квоте), и ответ целиком заменяет блок результата.',
	tool_sketch_prompt_generator_build: 'Собрать промпт',
	tool_sketch_prompt_generator_clear: 'Очистить',
	tool_sketch_prompt_generator_copy: 'Копировать',
	tool_sketch_prompt_generator_desc:
		'Генератор промптов Sketch.app — собирайте артборды, Symbols и шаги экспорта в браузере; опционально «Расширить/Отполировать» через Cloudflare AI (Turnstile).',
	tool_sketch_prompt_generator_description:
		'Генератор промптов Sketch.app — Локально + опциональный ИИ для ChatGPT, Gemini, Claude и DeepSeek: заполните цель, артборды, Symbols и экспорт, и браузер соберёт структурированный промпт с шагами работы в Sketch.app. При открытии уже отрабатывает пример, который можно править; дальше по желанию «Расширить» или «Отполировать» через Cloudflare Workers AI (нужен Turnstile, есть квота). По умолчанию Markdown, для пайплайнов — JSON.',
	tool_sketch_prompt_generator_download: 'Скачать',
	tool_sketch_prompt_generator_empty: 'Заполните хотя бы одно поле перед сборкой.',
	tool_sketch_prompt_generator_example:
		'Ввод: Цель = экран входа в Sketch.app; Артборды = iPhone 14 390×844; Symbols = Button/Primary + Input; Экспорт = PNG 1x/2x/3x + PDF. Вывод (Markdown): ## Роль → ассистент Sketch.app; ## Задача → нумерованный чеклист.',
	tool_sketch_prompt_generator_example_title: 'Пример',
	tool_sketch_prompt_generator_faq_a1:
		'Локальная сборка идёт во вкладке — по умолчанию ничего не загружается. Опциональный Expand/Polish отправляет только текст этого клика в Cloudflare Workers AI, не в OpenAI, Google, Anthropic или DeepSeek с наших серверов.',
	tool_sketch_prompt_generator_faq_a2:
		'Локальный режим только форматирует поля. Expand/Polish использует Cloudflare Workers AI после Turnstile — без chat API и без удалённого управления Sketch.app.',
	tool_sketch_prompt_generator_faq_a3:
		'Конструктор шаблонов Prompt покрывает общие шаблоны. Эта страница про Sketch.app: цель, артборды, Symbols/стили, экспорт.',
	tool_sketch_prompt_generator_faq_a4:
		'Нет. Midjourney — про растровые стили изображений. Здесь промпт ведёт по Sketch.app (дизайн-ПО для Mac). Для карандашного скетча / line-art — страница Midjourney.',
	tool_sketch_prompt_generator_faq_a5:
		'Да. Пройдите Turnstile в панели ИИ перед Expand или Polish. Без токена кнопки ИИ ошибаются; локальный режим работает.',
	tool_sketch_prompt_generator_faq_a6: 'Да. JSON-чип отдаёт структурированные поля и собранный промпт.',
	tool_sketch_prompt_generator_faq_a7:
		'Да. Вставьте промпт в ChatGPT, Gemini, Claude или DeepSeek, чтобы чат провёл по меню Sketch.app. Мы только форматируем текст; Sketch здесь не запускается.',
	tool_sketch_prompt_generator_faq_a8:
		'Локально всё форматируется в этой вкладке и никуда не уходит. «Расширить/Отполировать» передаёт черновик в Cloudflare Workers AI (Turnstile и дневная квота), а ответ целиком заменяет блок результата. При сбое или исчерпанной квоте остаётся локальный режим.',
	tool_sketch_prompt_generator_faq_q1: 'Загружается ли мой промпт?',
	tool_sketch_prompt_generator_faq_q2: 'Вызываете ChatGPT или управляете Sketch.app удалённо?',
	tool_sketch_prompt_generator_faq_q3: 'Чем это отличается от конструктора шаблонов Prompt?',
	tool_sketch_prompt_generator_faq_q4: 'Это для карандашного скетча или промптов Midjourney?',
	tool_sketch_prompt_generator_faq_q5: 'Зачем Turnstile для опционального ИИ?',
	tool_sketch_prompt_generator_faq_q6: 'Можно ли получить JSON?',
	tool_sketch_prompt_generator_faq_q7: 'Работает ли с ChatGPT, Gemini, Claude или DeepSeek?',
	tool_sketch_prompt_generator_faq_q8: 'Чем локальный режим отличается от опционального Cloudflare AI?',
	tool_sketch_prompt_generator_ai_expand: 'Расширить с ИИ',
	tool_sketch_prompt_generator_ai_polish: 'Отполировать с ИИ',
	tool_sketch_prompt_generator_ai_panel_label: 'Опциональный Cloudflare AI (Turnstile)',
	tool_sketch_prompt_generator_ai_consent_title: 'Отправить текст в Cloudflare Workers AI?',
	tool_sketch_prompt_generator_ai_consent_body:
		'Этот опциональный шаг отправляет черновик в Cloudflare Workers AI. Не отправляется в OpenAI, Google, Anthropic или DeepSeek с наших серверов. Локальная сборка работает без ИИ.',
	tool_sketch_prompt_generator_ai_consent_ok: 'Продолжить',
	tool_sketch_prompt_generator_ai_consent_cancel: 'Отмена',
	tool_sketch_prompt_generator_ai_working: 'Cloudflare AI работает…',
	tool_sketch_prompt_generator_ai_done: 'Текст ИИ полностью записан в блок результата. Проверьте его перед копированием.',
	tool_sketch_prompt_generator_ai_err_generic: 'ИИ не удалось. Локальный промпт не изменён.',
	tool_sketch_prompt_generator_ai_err_rate: 'Квота ИИ исчерпана. Используйте локальный режим или попробуйте завтра (UTC).',
	tool_sketch_prompt_generator_ai_err_turnstile: 'Пройдите Turnstile перед использованием ИИ.',
	tool_sketch_prompt_generator_fmt_json: 'JSON',
	tool_sketch_prompt_generator_fmt_label: 'Формат вывода',
	tool_sketch_prompt_generator_fmt_md: 'Markdown',
	tool_sketch_prompt_generator_goal_label: 'Цель / результат',
	tool_sketch_prompt_generator_goal_ph: 'напр. экран входа в Sketch.app…',
	tool_sketch_prompt_generator_artboard_label: 'Артборды / страницы',
	tool_sketch_prompt_generator_artboard_ph: 'напр. iPhone 14 390×844, Page Auth…',
	tool_sketch_prompt_generator_symbols_label: 'Symbols / стили / библиотеки',
	tool_sketch_prompt_generator_symbols_ph: 'напр. Button/Primary, Shared Styles…',
	tool_sketch_prompt_generator_export_label: 'Экспорт / передача',
	tool_sketch_prompt_generator_export_ph: 'напр. PNG 1x/2x/3x, PDF-ревью…',
	tool_sketch_prompt_generator_how_body:
		'Заполните поля Sketch.app, соберите промпт локально, опционально Expand/Polish с Turnstile, затем вставьте в чат, чтобы ИИ вёл по шагам Sketch.app.',
	tool_sketch_prompt_generator_how_item_1: 'При открытии уже загружен пример экрана входа в Sketch.app.',
	tool_sketch_prompt_generator_how_item_2: 'Отредактируйте Цель, Артборды, Symbols и Экспорт, нажмите «Собрать промпт» или JSON.',
	tool_sketch_prompt_generator_how_item_3: 'Опционально: Turnstile, затем Expand или Polish через Cloudflare Workers AI.',
	tool_sketch_prompt_generator_how_item_4: 'Скопируйте или скачайте, вставьте в чат и следуйте чеклисту Sketch.app.',
	tool_sketch_prompt_generator_how_title: 'Как это работает',
	tool_sketch_prompt_generator_load_sample: 'Загрузить пример',
	tool_sketch_prompt_generator_platforms_lead:
		'Для ChatGPT, Gemini, Claude и DeepSeek — скопируйте промпт, чтобы чат вёл по операциям Sketch.app.',
	tool_sketch_prompt_generator_result_label: 'Вывод промпта',
	tool_sketch_prompt_generator_rules_body:
		'Поля отражают работу в Sketch.app. Локально по умолчанию; опциональный ИИ требует Turnstile и имеет лимит. Эта страница не запускает Sketch.app.',
	tool_sketch_prompt_generator_rules_item_1: 'Структурированные поля → Role/Task/Constraints/Output в Markdown.',
	tool_sketch_prompt_generator_rules_item_2: 'По умолчанию Markdown; JSON на том же холсте.',
	tool_sketch_prompt_generator_rules_item_3: 'Опциональный Cloudflare AI не заменяет локальный режим — проверьте перед копированием.',
	tool_sketch_prompt_generator_rules_item_4:
		'Только сборка текста; локально не запускаются Sketch.app, плагины, Midjourney или chat API.',
	tool_sketch_prompt_generator_rules_title: 'Ожидаемые правила',
	tool_sketch_prompt_generator_sec_constraints: 'Ограничения',
	tool_sketch_prompt_generator_sec_output: 'Формат вывода',
	tool_sketch_prompt_generator_sec_role: 'Роль',
	tool_sketch_prompt_generator_sec_task: 'Задача',
	tool_sketch_prompt_generator_status_copied: 'Скопировано в буфер обмена.',
	tool_sketch_prompt_generator_status_done: 'Промпт готов.',
	tool_sketch_prompt_generator_status_working: 'Сборка промпта…',
	tool_sketch_prompt_generator_title: 'Генератор промптов Sketch.app — Локально + опциональный ИИ',
	tool_sketch_prompt_generator_usecase_1:
		'Передайте размеры артбордов и имена Symbols чату команды, чтобы воссоздать экран в Sketch.app.',
	tool_sketch_prompt_generator_usecase_2: 'Подготовьте чеклисты экспорта (PNG, PDF) перед дизайн-QA.',
	tool_sketch_prompt_generator_usecase_3:
		'Сравните с Product design prompt builder, если нужны persona/wireframe, а не меню Sketch.app.',
	tool_sketch_prompt_generator_usecase_4: 'Держите чувствительные черновики локально — включайте ИИ только после согласия.',
	tool_sketch_prompt_generator_usecases_title: 'Хорошо подходит',
};

export default ru;
