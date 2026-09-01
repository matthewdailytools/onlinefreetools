/**
 * i18n tool shard (prompt-template-builder / ru).
 * H1 local: конструктор шаблонов Prompt.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_prompt_template_builder_article:
		'Превратите черновик prompt в переиспользуемый шаблон Role / Task / Constraints / Output на этой странице. Вставьте свободный текст или заполните поля, затем скопируйте Markdown или JSON. API моделей не вызывается. Текст остаётся на устройстве и не загружается на сервер.',
	tool_prompt_template_builder_build: 'Собрать шаблон',
	tool_prompt_template_builder_clear: 'Очистить',
	tool_prompt_template_builder_constraints_label: 'Ограничения',
	tool_prompt_template_builder_constraints_ph: 'Тон, область, чего избегать…',
	tool_prompt_template_builder_copy: 'Копировать',
	tool_prompt_template_builder_desc:
		'Структурированный шаблон Prompt (Markdown/JSON) — на устройстве, без загрузки на сервер.',
	tool_prompt_template_builder_description:
		'Конструктор шаблонов Prompt: объединяет свободный текст с Role, Task, Constraints и Output в переиспользуемый шаблон. Пример: шаблон агента code review появляется при открытии. По умолчанию Markdown; JSON выдаёт {role,task,constraints,output}. Всё во вкладке — не LLM и не облачная библиотека. Текст остаётся на устройстве и не загружается на сервер.',
	tool_prompt_template_builder_download: 'Скачать',
	tool_prompt_template_builder_empty: 'Добавьте свободный текст или хотя бы одно поле перед сборкой.',
	tool_prompt_template_builder_example:
		'Загрузка примера заполняет Role, Task, Constraints и Output для агента code review, создаёт Markdown с четырьмя разделами ## и включает Копировать и Скачать.',
	tool_prompt_template_builder_example_title: 'Пример',
	tool_prompt_template_builder_faq_a1:
		'Нет. Шаблон собирается в этой вкладке браузера. Ничего не отправляется в OpenAI, Anthropic или на наши серверы.',
	tool_prompt_template_builder_faq_a2:
		'Нет. Страница только форматирует текст в блоки. Не вызывает модель и не придумывает новый текст.',
	tool_prompt_template_builder_faq_a3:
		'ChatGPT export to Markdown превращает экспорт чатов в читаемые файлы. Здесь вы структурируете переиспользуемый system prompt — используйте оба после архивации чатов.',
	tool_prompt_template_builder_faq_a4:
		'Да. Чип JSON выдаёт {role,task,constraints,output}. Сочетайте с JSON Schema validator при необходимости.',
	tool_prompt_template_builder_faq_a5:
		'Строки, начинающиеся с Role:, Task:, Constraints: или Output: в свободном поле, делятся на секции. Явные поля важнее.',
	tool_prompt_template_builder_faq_q1: 'Загружается ли мой prompt?',
	tool_prompt_template_builder_faq_q2: 'Вызывается ли LLM?',
	tool_prompt_template_builder_faq_q3: 'Чем отличается от экспорта ChatGPT в Markdown?',
	tool_prompt_template_builder_faq_q4: 'Можно получить JSON?',
	tool_prompt_template_builder_faq_q5: 'Как работает разбор свободного текста?',
	tool_prompt_template_builder_fmt_json: 'JSON',
	tool_prompt_template_builder_fmt_label: 'Формат вывода',
	tool_prompt_template_builder_fmt_md: 'Markdown',
	tool_prompt_template_builder_free_label: 'Свободный prompt (необяз.)',
	tool_prompt_template_builder_free_ph: 'Вставьте черновик или строки Role: … Task: …',
	tool_prompt_template_builder_how_body:
		'Напишите черновик, при желании разделите Role / Task / Constraints / Output, соберите шаблон и скопируйте или скачайте. Markdown и JSON — чипы одной задачи.',
	tool_prompt_template_builder_how_item_1:
		'Вставьте черновик или заполните Role, Task, Constraints и Output — цель структурированный prompt-шаблон.',
	tool_prompt_template_builder_how_item_2: 'Нажмите Собрать шаблон (пример уже выполнен при открытии).',
	tool_prompt_template_builder_how_item_3: 'Переключитесь на JSON, если нужен {role,task,constraints,output} для кода или конфига.',
	tool_prompt_template_builder_how_item_4: 'Копируйте или скачивайте. Редактируйте поля и пересобирайте.',
	tool_prompt_template_builder_how_title: 'Как это работает',
	tool_prompt_template_builder_load_sample: 'Загрузить пример',
	tool_prompt_template_builder_output_fmt_label: 'Формат вывода',
	tool_prompt_template_builder_output_fmt_ph: 'Разделы Markdown, форма JSON, список…',
	tool_prompt_template_builder_result_label: 'Шаблон',
	tool_prompt_template_builder_role_label: 'Role',
	tool_prompt_template_builder_role_ph: 'Кем должен выступать модель…',
	tool_prompt_template_builder_rules_body:
		'Переиспользуемый шаблон требует ясных блоков и честных границ — не второго генератора.',
	tool_prompt_template_builder_rules_item_1:
		'Четыре блока: Role, Task, Constraints, Output. Пустые не попадают в Markdown.',
	tool_prompt_template_builder_rules_item_2: 'Явные поля важнее строк, разобранных из свободного текста.',
	tool_prompt_template_builder_rules_item_3: 'По умолчанию Markdown с ##. JSON — чип на той же странице.',
	tool_prompt_template_builder_rules_item_4: 'Только форматирование. Не считает токены и не валидирует JSON по схеме.',
	tool_prompt_template_builder_rules_title: 'Ожидаемые правила',
	tool_prompt_template_builder_sec_constraints: 'Constraints',
	tool_prompt_template_builder_sec_output: 'Output format',
	tool_prompt_template_builder_sec_role: 'Role',
	tool_prompt_template_builder_sec_task: 'Task',
	tool_prompt_template_builder_status_copied: 'Скопировано в буфер обмена.',
	tool_prompt_template_builder_status_done: 'Шаблон готов.',
	tool_prompt_template_builder_status_working: 'Сборка шаблона…',
	tool_prompt_template_builder_task_label: 'Task',
	tool_prompt_template_builder_task_ph: 'Что делать по шагам…',
	tool_prompt_template_builder_title: 'конструктор шаблонов Prompt',
	tool_prompt_template_builder_usecase_1:
		'Опубликуйте system prompt для code review, который команда вставит в любой чат.',
	tool_prompt_template_builder_usecase_2:
		'Превратите заметки встречи в блоки Role/Task/Constraints перед подключением API.',
	tool_prompt_template_builder_usecase_3:
		'Экспортируйте JSON и откройте JSON Schema validator для проверки конфигов.',
	tool_prompt_template_builder_usecases_title: 'Подходящие случаи',
};

export default ru;
