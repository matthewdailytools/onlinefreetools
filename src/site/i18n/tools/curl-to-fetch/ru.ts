/**
 * i18n tool shard (curl-to-fetch / ru).
 * H1: curl в fetch — конвертер curl в JavaScript fetch локально.
 */
import type { SiteLangDict } from '../../../types';

/** Русские тексты. */
const ru: SiteLangDict = {
	tool_curl_to_fetch_article:
		'Вставьте команду cURL из документации или терминала — получите фрагмент fetch на JavaScript: метод, заголовки, JSON-тело, Basic auth и -G. Разбор в браузере, без загрузки на сервер.',
	tool_curl_to_fetch_clear: 'Очистить',
	tool_curl_to_fetch_convert: 'Конвертировать',
	tool_curl_to_fetch_copy: 'Копировать',
	tool_curl_to_fetch_copy_done: 'Скопировано',
	tool_curl_to_fetch_copy_empty: 'Нечего копировать — сначала конвертируйте cURL.',
	tool_curl_to_fetch_desc:
		'Преобразуйте cURL в fetch в браузере — остаётся на устройстве, без загрузки на сервер.',
	tool_curl_to_fetch_description:
		'Вставьте cURL и получите fetch на JavaScript — метод, заголовки, JSON, Basic auth (-u) и -G. Пример POST JSON загружается при открытии. Команда остаётся на устройстве и не загружается на сервер.',
	tool_curl_to_fetch_error_empty: 'Сначала вставьте команду cURL.',
	tool_curl_to_fetch_error_no_url: 'URL не найден. Добавьте https://… или --url.',
	tool_curl_to_fetch_error_parse: 'Не удалось разобрать cURL. Проверьте кавычки и переносы строк.',
	tool_curl_to_fetch_error_unclosed_quote: 'Кавычка не закрыта — исправьте и повторите.',
	tool_curl_to_fetch_example: 'Ввод: curl -X POST … → Вывод: fetch с method, headers и body.',
	tool_curl_to_fetch_example_title: 'Пример',
	tool_curl_to_fetch_faq_a1: 'Нет. Разбор только в этой вкладке; мы не отправляем cURL на сервер.',
	tool_curl_to_fetch_faq_a2: 'URL, -X, -H, -d, -u, -G, строки в кавычках и \\ в конце строки. Редкие флаги пропускаются с предупреждением.',
	tool_curl_to_fetch_faq_a3: '-G переносит --data в query URL, а не в body.',
	tool_curl_to_fetch_faq_a4: '-u user:pass → Authorization Basic в base64.',
	tool_curl_to_fetch_faq_a5: 'Страница для fetch в браузере. axios или Python — адаптируйте вручную.',
	tool_curl_to_fetch_faq_q1: 'Загружается ли cURL на сервер?',
	tool_curl_to_fetch_faq_q2: 'Какие флаги curl поддерживаются?',
	tool_curl_to_fetch_faq_q3: 'Что делает -G здесь?',
	tool_curl_to_fetch_faq_q4: 'Как обрабатывается -u?',
	tool_curl_to_fetch_faq_q5: 'Можно axios или Python?',
	tool_curl_to_fetch_how_body: 'Скопируйте cURL из docs — разбираем типичные флаги локально и показываем готовый fetch.',
	tool_curl_to_fetch_how_item_1: 'Вставьте cURL целиком (с \\ для переноса строк).',
	tool_curl_to_fetch_how_item_2: 'Выберите fetch или async/await и нажмите Конвертировать.',
	tool_curl_to_fetch_how_item_3: 'Проверьте method, headers и body.',
	tool_curl_to_fetch_how_item_4: 'Скопируйте в проект; после правок конвертируйте снова.',
	tool_curl_to_fetch_how_title: 'Как это работает',
	tool_curl_to_fetch_input_label: 'Команда cURL',
	tool_curl_to_fetch_input_placeholder: 'curl -X POST https://api.example.com/…',
	tool_curl_to_fetch_large_warn: 'Большая команда (>50 KB) — разбор может замедлиться.',
	tool_curl_to_fetch_load_sample: 'Загрузить пример',
	tool_curl_to_fetch_output_label: 'Вывод fetch JavaScript',
	tool_curl_to_fetch_output_style_async: 'async/await',
	tool_curl_to_fetch_output_style_fetch: 'fetch',
	tool_curl_to_fetch_output_style_label: 'Формат вывода',
	tool_curl_to_fetch_rules_body: 'Соответствие флагов curl опциям fetch и ограничения браузера.',
	tool_curl_to_fetch_rules_item_1: '-X POST → method POST; только -d → POST, кроме -G.',
	tool_curl_to_fetch_rules_item_2: 'Каждый -H в headers; Content-Type сохраняется.',
	tool_curl_to_fetch_rules_item_3: '-d в body; -G добавляется к URL.',
	tool_curl_to_fetch_rules_item_4: 'Cookie, сертификаты, proxy fetch в браузере не повторяет.',
	tool_curl_to_fetch_rules_title: 'Ожидаемые правила',
	tool_curl_to_fetch_sample_curl:
		"curl -X POST 'https://api.example.com/users' \\\n  -H 'Content-Type: application/json' \\\n  -H 'Authorization: Bearer eyJhbGciOiJIUzI1NiJ9' \\\n  -d '{\"name\":\"Ada\",\"role\":\"admin\"}'",
	tool_curl_to_fetch_status_done: 'Готово — проверьте fetch ниже.',
	tool_curl_to_fetch_title: 'curl в fetch',
	tool_curl_to_fetch_usecase_1: 'Примеры curl в OpenAPI — вставьте для быстрого fetch во фронте.',
	tool_curl_to_fetch_usecase_2: 'Отладка Bearer — сохраните Authorization при переносе в JS.',
	tool_curl_to_fetch_usecase_3: 'Конвертер curl в fetch при миграции shell-скриптов.',
	tool_curl_to_fetch_usecases_title: 'Подходит для',
	tool_curl_to_fetch_warn_unknown_flags: 'Пропущены неподдерживаемые флаги: {flags}',
};

export default ru;
