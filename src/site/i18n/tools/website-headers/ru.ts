/**
 * i18n tool shard (website-headers / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_headers_article:
    'Смотрите заголовки, которые edge получает для публичного URL — кэш, CORS, редиректы и security-заголовки. Запрос проксируется; тело страницы мы не храним.',
  tool_headers_description:
    'Проверьте HTTP-заголовки ответа URL онлайн с нашего edge. Шаги: вставьте https, отправьте HEAD (GET при необходимости), следуйте редиректам, покажите статус и карту заголовков; блокируйте частные хосты. Пример: читайте Cache-Control, CORS и HSTS при отладке CDN или редиректов.',
  tool_headers_example:
    'example.com → статус 200, финальный URL без изменений; заголовки с content-type: text/html и, по origin, cache-control или security-заголовки.',
  tool_headers_example_title: 'Пример',
  tool_headers_faq_a1:
    'Метаданные ответа сервера: тип контента, правила кэша, редиректы и политики вроде HSTS, CSP или CORS.',
  tool_headers_faq_a2: 'Сначала HEAD, GET при необходимости. Цель — заголовки, а не scraping или хранение body.',
  tool_headers_faq_a3: 'Частные сети блокируются, чтобы worker нельзя было использовать для сканирования внутренних хостов.',
  tool_headers_faq_a4:
    'Не всегда. Вы видите ответ с нашего edge; CDN, гео-маршрутизация или anti-bot могут отличаться от локального браузера.',
  tool_headers_faq_a5: 'Короткий edge-запрос без истории URL. Не вставляйте секреты в query string.',
  tool_headers_faq_q1: 'Что показывают HTTP-заголовки ответа?',
  tool_headers_faq_q2: 'Скачивается ли весь HTML страницы?',
  tool_headers_faq_q3: 'Почему localhost и частные IP запрещены?',
  tool_headers_faq_q4: 'Это то же самое, что DevTools браузера?',
  tool_headers_faq_q5: 'Сохраняете ли вы проверенные URL?',
  tool_headers_how_body:
    'Вставьте публичный http(s) URL и нажмите проверить. Edge-worker шлёт HEAD (GET при нужде), следует редиректам и возвращает статус, финальный URL и увиденные заголовки. Частные цели отклоняются. Это взгляд с edge — может отличаться от локального браузера из‑за CDN или гео-маршрутизации.',
  tool_headers_how_title: 'Как это работает',
  tool_headers_ref_mdn_label: 'MDN — HTTP-заголовки',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Семантика HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP-кэширование',
  tool_headers_rules_body:
    'Краткоживущий прокси только для инспекции заголовков; содержимое страницы не сохраняется. Имена следуют семантике HTTP (см. Ссылки).',
  tool_headers_rules_item_1: 'Сначала HEAD; GET, если origin не поддерживает HEAD.',
  tool_headers_rules_item_2: 'Следует редиректам и сообщает финальный URL.',
  tool_headers_rules_item_3: 'Блокирует localhost и IP частных сетей.',
  tool_headers_rules_item_4: 'Показывает частые заголовки: Cache-Control, CORS, CSP и др.',
  tool_headers_rules_title: 'Что делает проверка',
  tool_headers_title: 'Проверить HTTP-заголовки сайта — Посмотреть response headers',
  tool_headers_usecase_1: 'Перед релизом проверить Cache-Control или кэш CDN.',
  tool_headers_usecase_2: 'Разобрать CORS preflight по Access-Control-* в ответе.',
  tool_headers_usecase_3: 'Убедиться, что CSP, HSTS и другие security-заголовки реально отдаются.',
  tool_headers_usecases_title: 'Когда пригодится',
};
export default ru;
