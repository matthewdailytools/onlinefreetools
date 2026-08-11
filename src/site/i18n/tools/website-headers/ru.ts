/**
 * i18n tool shard (website-headers / ru). Edit only this tool's keys.
 */
import type { SiteLangDict } from '../../../types';
const ru: SiteLangDict = {
  tool_headers_article:
    'Смотрите заголовки, которые edge получает для публичного URL — кэш, CORS, редиректы и security-заголовки. Запрос проксируется; тело страницы мы не храним.',
  tool_headers_description:
    'HTTP-заголовки влияют на обход и индексацию: неверный X-Robots-Tag может заблокировать. Получите на edge; проверьте Cache-Control и редиректы. Пример: CDN.',
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
    'Вставьте публичный http(s) URL и нажмите проверить. Edge-worker шлёт HEAD (GET при нужде), следует редиректам по одному (до 5 переходов) и возвращает статус, финальный URL, увиденные заголовки и цепочку редиректов. Частные цели отклоняются. Это взгляд с edge — может отличаться от локального браузера из‑за CDN или гео-маршрутизации.',
  tool_headers_how_title: 'Как это работает',
  tool_headers_faq_a6:
    'Для SEO полезно знать: кэшируется ли ответ вообще (no-store против max-age), как долго его держат общие кэши (s-maxage) и нужна ли перевалидация (no-cache). Редко меняющимся страницам выгоден длинный max-age, чтобы CDN отдавал их без обращения к origin.',
  tool_headers_faq_a7:
    'x-robots-tag действует на любой тип ответа — HTML, PDF, картинки — а robots meta работает только внутри HTML. Используйте его, чтобы запретить индексацию не-HTML файлов или применить правила, которые сложно разместить в самой странице. При конфликте x-robots-tag побеждает.',
  tool_headers_faq_q6: 'На что смотреть в cache-control?',
  tool_headers_faq_q7: 'Зачем x-robots-tag, если есть robots meta?',
  tool_headers_ref_mdn_label: 'MDN — HTTP-заголовки',
  tool_headers_ref_rfc9110_label: 'RFC 9110 — Семантика HTTP',
  tool_headers_ref_rfc9111_label: 'RFC 9111 — HTTP-кэширование',
  tool_headers_rules_body:
    'Краткоживущий прокси только для инспекции заголовков; содержимое страницы не сохраняется. Имена следуют семантике HTTP (см. Ссылки).',
  tool_headers_rules_item_1: 'Сначала HEAD; GET, если origin не поддерживает HEAD.',
  tool_headers_rules_item_2: 'Следует редиректам и сообщает финальный URL.',
  tool_headers_rules_item_3: 'Блокирует localhost и IP частных сетей.',
  tool_headers_rules_item_4: 'Показывает частые заголовки: Cache-Control, CORS, CSP и др.',
  tool_headers_rules_item_5: 'Собирает цепочку редиректов (до 5 переходов) со статусом и Location каждого шага.',
  tool_headers_rules_title: 'Что делает проверка',
  tool_headers_seo_cache_absent: 'Заголовка Cache-Control нет. Браузеры и CDN используют эвристики, поэтому недавно изменённый контент может отдаваться устаревшим.',
  tool_headers_seo_cache_heading: 'Cache-Control',
  tool_headers_seo_cache_immutable: 'immutable: кэши не перевалидируют в течение срока свежести — типично для assets с отпечатком.',
  tool_headers_seo_cache_maxage: 'max-age={n}: браузеры и общие кэши могут повторно использовать ответ {n} секунд без запроса к origin.',
  tool_headers_seo_cache_mustrevalidate: 'must-revalidate: устаревшие ответы перед повторным использованием обязаны перевалидироваться.',
  tool_headers_seo_cache_nocache: 'no-cache: хранить можно, но перед использованием нужна перевалидация.',
  tool_headers_seo_cache_nostore: 'no-store: не кэшируется ничего; каждый запрос доходит до origin. Хорошо для приватных или изменчивых страниц.',
  tool_headers_seo_cache_other: 'Директива не объяснена здесь: {d}',
  tool_headers_seo_cache_private: 'private: хранить может только браузерный кэш; общие — нет.',
  tool_headers_seo_cache_public: 'public: любой кэш может хранить ответ.',
  tool_headers_seo_cache_smaxage: 's-maxage={n}: общие кэши (CDN/прокси) могут отдавать {n} секунд; для них отменяет max-age.',
  tool_headers_seo_intro: 'Понятное объяснение заголовков, важнее всего для поиска и обхода.',
  tool_headers_seo_redirect_301: '301 постоянный: поисковики передают сигналы ранжирования цели — правильно для перемещённых страниц и смены www.',
  tool_headers_seo_redirect_302: '302/307 временный: держите для коротких перемещений — сигналы остаются на исходном URL.',
  tool_headers_seo_redirect_chain: 'Запрос прошёл {n} редирект(ов) до финального ответа:',
  tool_headers_seo_redirect_cross_host: 'Этот переход покидает исходный хост: {from} → {to}.',
  tool_headers_seo_redirect_heading: 'Редирект',
  tool_headers_seo_redirect_ok: 'Без редиректа: финальный URL тот, что вы проверили.',
  tool_headers_robots_absent: 'Заголовка X-Robots-Tag нет. Правила индексации задают robots.txt и robots meta страницы.',
  tool_headers_robots_blocked: 'Эта страница исключена из индексации данным заголовком.',
  tool_headers_seo_robots_heading: 'X-Robots-Tag',
  tool_headers_robots_maxsnippet: 'max-snippet={n}: ограничивает сниппет {n} символами.',
  tool_headers_robots_noarchive: 'noarchive: поисковики не покажут кэшированную копию этого URL.',
  tool_headers_robots_nofollow: 'nofollow: краулеры не пройдут по ссылкам этого ответа.',
  tool_headers_robots_noindex: 'noindex: этот URL исключён из результатов поиска.',
  tool_headers_robots_none: 'none: эквивалент noindex + nofollow.',
  tool_headers_seo_title: 'SEO-проверки заголовков',
  tool_headers_title: 'Проверить HTTP-заголовки сайта — Посмотреть response headers',
  tool_headers_usecase_1: 'Перед релизом проверить Cache-Control или кэш CDN.',
  tool_headers_usecase_2: 'Разобрать CORS preflight по Access-Control-* в ответе.',
  tool_headers_usecase_3: 'Убедиться, что CSP, HSTS и другие security-заголовки реально отдаются.',
  tool_headers_usecases_title: 'Когда пригодится',
};
export default ru;
