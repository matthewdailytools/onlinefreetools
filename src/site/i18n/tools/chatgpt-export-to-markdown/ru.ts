/**
 * Фрагмент i18n (chatgpt-export-to-markdown / ru).
 * Локальный H1: экспорт ChatGPT в Markdown.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_chatgpt_export_to_markdown_article:
		'Превратите экспорт ChatGPT в Markdown на этой странице. Вставьте или перетащите JSON, получите читаемые реплики и при желании переключитесь на JSON или CSV. Экспорт Claude — на том же холсте. Файлы остаются на устройстве и на сервер не отправляются.',
	tool_chatgpt_export_to_markdown_choose_file: 'Выбрать файл',
	tool_chatgpt_export_to_markdown_clear: 'Очистить',
	tool_chatgpt_export_to_markdown_convert: 'Преобразовать',
	tool_chatgpt_export_to_markdown_copy: 'Копировать',
	tool_chatgpt_export_to_markdown_desc:
		'Экспорт ChatGPT в Markdown (чипы JSON/CSV); остаётся на устройстве, на сервер не уходит.',
	tool_chatgpt_export_to_markdown_description:
		'Экспорт ChatGPT в Markdown: перетащите или вставьте JSON экспорта, сопоставьте реплики пользователя/ассистента и скачайте Markdown. Пример: образец диалога уже в Markdown при открытии. JSON и CSV — чипы вывода. chat_messages Claude распознаются на этой же странице. Файлы остаются на устройстве и на сервер не отправляются. Это не счётчик токенов и не облачная синхронизация.',
	tool_chatgpt_export_to_markdown_download: 'Скачать',
	tool_chatgpt_export_to_markdown_drop_hint: 'Перетащите JSON conversations или вставьте ниже. Разбор остаётся во вкладке.',
	tool_chatgpt_export_to_markdown_empty: 'Сначала вставьте экспорт или выберите файл.',
	tool_chatgpt_export_to_markdown_err_none: 'Реплик нет. Проверьте, что в JSON есть mapping, messages или chat_messages.',
	tool_chatgpt_export_to_markdown_err_parse: 'Не удалось прочитать JSON. Вставьте корректный экспорт ChatGPT или Claude.',
	tool_chatgpt_export_to_markdown_example:
		'«Загрузить пример» вставляет mapping JSON на два хода, превращает его в Markdown с заголовками User и Assistant и включает Копировать и Скачать.',
	tool_chatgpt_export_to_markdown_example_title: 'Пример',
	tool_chatgpt_export_to_markdown_faq_a1: 'Нет. Экспорт читается во вкладке. На OpenAI, Anthropic и наши серверы ничего не уходит.',
	tool_chatgpt_export_to_markdown_faq_a2: 'Основной путь — экспорт данных ChatGPT с деревом mapping. Плоские массивы role/content и chat_messages Claude тоже принимаются.',
	tool_chatgpt_export_to_markdown_faq_a3: 'Да. chat_messages Claude (sender + text) поглощаются здесь. Второго URL нет.',
	tool_chatgpt_export_to_markdown_faq_a4: 'Пустые system-узлы и оболочки tool без текста пропускаются. Вложения и картинки файлами не восстанавливаются.',
	tool_chatgpt_export_to_markdown_faq_a5: 'Подсчёт токенов — другая задача (отложена). Этот H1 про экспорт → Markdown.',
	tool_chatgpt_export_to_markdown_faq_q1: 'Чат загружается на сервер?',
	tool_chatgpt_export_to_markdown_faq_q2: 'Какие формы экспорта работают?',
	tool_chatgpt_export_to_markdown_faq_q3: 'Работает ли экспорт Claude?',
	tool_chatgpt_export_to_markdown_faq_q4: 'Какие поля теряются?',
	tool_chatgpt_export_to_markdown_faq_q5: 'Это счётчик токенов?',
	tool_chatgpt_export_to_markdown_fmt_csv: 'CSV',
	tool_chatgpt_export_to_markdown_fmt_json: 'JSON',
	tool_chatgpt_export_to_markdown_fmt_label: 'Формат выхода',
	tool_chatgpt_export_to_markdown_fmt_md: 'Markdown',
	tool_chatgpt_export_to_markdown_how_body:
		'Экспортируйте чат, вставьте или перетащите JSON, преобразуйте в Markdown, затем скопируйте или скачайте. JSON и CSV — чипы той же задачи.',
	tool_chatgpt_export_to_markdown_how_item_1: 'Возьмите экспорт данных ChatGPT (или JSON Claude) — задача экспорт ChatGPT в Markdown.',
	tool_chatgpt_export_to_markdown_how_item_2: 'Перетащите файл или вставьте JSON в поле.',
	tool_chatgpt_export_to_markdown_how_item_3: 'Оставьте Markdown, если не нужны чипы JSON или CSV.',
	tool_chatgpt_export_to_markdown_how_item_4: 'Скопируйте или скачайте. Пример уже отработал при открытии.',
	tool_chatgpt_export_to_markdown_how_title: 'Как это работает',
	tool_chatgpt_export_to_markdown_input_label: 'JSON экспорта',
	tool_chatgpt_export_to_markdown_input_ph: 'Вставьте JSON conversations сюда…',
	tool_chatgpt_export_to_markdown_load_sample: 'Загрузить пример',
	tool_chatgpt_export_to_markdown_output_label: 'Результат',
	tool_chatgpt_export_to_markdown_role_assistant: 'Ассистент',
	tool_chatgpt_export_to_markdown_role_system: 'Система',
	tool_chatgpt_export_to_markdown_role_tool: 'Инструмент',
	tool_chatgpt_export_to_markdown_role_user: 'Пользователь',
	tool_chatgpt_export_to_markdown_rules_body:
		'Конвертация экспорта требует карты полей, Markdown по умолчанию и явной приватности — не второй URL конвертера на вендора.',
	tool_chatgpt_export_to_markdown_rules_item_1: 'Выход по умолчанию — Markdown с секциями ## Пользователь / ## Ассистент и опциональным # заголовком.',
	tool_chatgpt_export_to_markdown_rules_item_2: 'Деревья mapping ChatGPT, плоские массивы и chat_messages Claude разбираются на одной странице.',
	tool_chatgpt_export_to_markdown_rules_item_3: 'Чипы JSON и CSV отдают те же реплики. H1 не меняется.',
	tool_chatgpt_export_to_markdown_rules_item_4: 'Форматы вендоров меняются. Если разбор не удался, вставьте сырой JSON и смотрите FAQ.',
	tool_chatgpt_export_to_markdown_rules_title: 'Какие правила ждать',
	tool_chatgpt_export_to_markdown_status_copied: 'Скопировано в буфер.',
	tool_chatgpt_export_to_markdown_status_done: 'Готово — {n} реплик ({source}).',
	tool_chatgpt_export_to_markdown_status_working: 'Разбираем экспорт…',
	tool_chatgpt_export_to_markdown_title: 'экспорт ChatGPT в Markdown',
	tool_chatgpt_export_to_markdown_usecase_1: 'Архивируйте сегодняшний экспорт ChatGPT в Markdown до удаления ветки.',
	tool_chatgpt_export_to_markdown_usecase_2: 'Переключитесь на CSV, когда нужны колонки role/content для таблицы.',
	tool_chatgpt_export_to_markdown_usecase_3: 'Перетащите JSON chat_messages Claude на эту же страницу — без второго инструмента.',
	tool_chatgpt_export_to_markdown_usecases_title: 'Когда это к месту',
};

export default ru;
