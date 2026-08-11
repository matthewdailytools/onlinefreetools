/**
 * i18n tool shard (on-page-seo-checker / ru).
 * Русский — независимая переработка под местные поисковые привычки.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_onpage_home_title: 'Проверка SEO страницы',
	tool_onpage_home_desc:
		'Найдите теги, которые мешают странице в поиске: проверьте title, H1, meta description, canonical, Open Graph и JSON-LD прямо в браузере.',
	tool_onpage_title: 'Проверка SEO страницы — найдите и исправьте проблемы тегов',
	tool_onpage_description:
		'Слабые title, нет meta, дубли H1 или неверный canonical бьют по позициям. Вставьте URL или HTML. Вставка локально. Пример: два H1.',
	tool_onpage_url_tab: 'Загрузить URL',
	tool_onpage_html_tab: 'Вставить HTML',
	tool_onpage_url_ph: 'https://example.com/page',
	tool_onpage_url_fetch: 'Проверить URL',
	tool_onpage_html_ph: 'Вставьте сюда HTML из <head> (и фрагмент body)…',
	tool_onpage_check: 'Проверить страницу',
	tool_onpage_sample: 'Пример',
	tool_onpage_clear: 'Очистить',
	tool_onpage_copy: 'Копировать',
	tool_onpage_copied: 'Скопировано',
	tool_onpage_running: 'Проверка…',
	tool_onpage_error_prefix: 'Ошибка: ',
	tool_onpage_url_error: 'Введите корректный http(s) URL.',
	tool_onpage_fetch_failed: 'Не удалось загрузить URL. Страница может быть офлайн, блокировать ботов или не возвращать HTML.',
	tool_onpage_no_html: 'Сначала вставьте HTML или загрузите URL.',
	tool_onpage_no_results: 'Пока нет результатов проверки.',
	tool_onpage_summary_title: 'Итог проверки',
	tool_onpage_summary_n_ok: '{n} в порядке',
	tool_onpage_summary_n_warn: '{n} предупреждений',
	tool_onpage_summary_n_err: '{n} проблем',
	tool_onpage_status_ok: 'OK',
	tool_onpage_status_warn: 'Предупреждение',
	tool_onpage_status_err: 'Проблема',
	tool_onpage_title_check: 'Title',
	tool_onpage_title_missing: 'Тег <title> не найден. Добавьте его внутрь <head>.',
	tool_onpage_title_ok: 'Title из {n} символов. Близко к 50–60 символам — хорошо отображается в выдаче.',
	tool_onpage_title_long: 'Title из {n} символов, вероятно, обрежется в выдаче. Стремитесь к 50–60 символам.',
	tool_onpage_title_short: 'Title всего {n} символов. Добавьте конкретный фокус страницы, чтобы было информативнее.',
	tool_onpage_desc_check: 'Meta description',
	tool_onpage_desc_missing: 'Meta description не найден. Напишите резюме на 140–160 символов, соответствующее содержанию.',
	tool_onpage_desc_ok: 'Описание из {n} символов. Диапазон 140–160 символов хорошо показывается в сниппетах.',
	tool_onpage_desc_long: 'Описание из {n} символов — сниппеты обычно обрезаются около 160 символов.',
	tool_onpage_desc_short: 'Описание всего {n} символов. Используйте место, чтобы кратко описать пользу страницы.',
	tool_onpage_h1_check: 'H1',
	tool_onpage_h1_missing: 'H1 не найден. Используйте один H1, отражающий тему страницы.',
	tool_onpage_h1_multiple: 'Найдено {n} тегов H1. Оставьте один H1 на страницу, остальное — H2–H6.',
	tool_onpage_h1_ok: 'Найден один H1, и он внутри <body>.',
	tool_onpage_canonical_check: 'Canonical',
	tool_onpage_canonical_missing: 'Canonical не задан. Добавьте <link rel="canonical">, когда один и тот же контент доступен по нескольким URL.',
	tool_onpage_canonical_ok: 'Найден самоуказывающий canonical.',
	tool_onpage_canonical_other: 'Canonical указывает на другой URL. Используйте самоуказывающий canonical, если эта страница не является копией цели.',
	tool_onpage_robots_check: 'Мета-тег robots',
	tool_onpage_robots_missing: 'Мета-тег robots отсутствует. По умолчанию index,follow подходит большинству публичных страниц.',
	tool_onpage_robots_noindex: 'На странице задан noindex, поэтому она не появится в поиске Google. Уберите его, если страницу нужно индексировать.',
	tool_onpage_robots_ok: 'Мета-тег robots разрешает индексацию и переход по ссылкам.',
	tool_onpage_og_check: 'Open Graph',
	tool_onpage_og_missing: 'Теги og: не найдены. Добавьте og:title, og:description и og:image для превью при публикации.',
	tool_onpage_og_partial: 'Не хватает {n} обязательных полей og:. Убедитесь, что og:title, og:description и og:image присутствуют.',
	tool_onpage_og_ok: 'og:title, og:description и og:image присутствуют.',
	tool_onpage_jsonld_check: 'JSON-LD',
	tool_onpage_jsonld_missing: 'Структурированные данные JSON-LD не найдены. Рассмотрите разметку schema.org, если она описывает видимый контент.',
	tool_onpage_jsonld_invalid: 'Блок JSON-LD не удалось разобрать как JSON. Проверьте синтаксис.',
	tool_onpage_jsonld_ok: 'Найдено блоков JSON-LD: {n}. Держите структурированные данные согласованными с тем, что видят посетители.',
	tool_onpage_mixed_check: 'Смешанный контент',
	tool_onpage_mixed_none: 'Ссылок на http:// в https-контексте не найдено.',
	tool_onpage_mixed_found: 'Найдено ссылок на http://: {n}. Браузеры блокируют смешанный контент; отдавайте эти ресурсы по https.',
	tool_onpage_render_check: 'Блокировка рендеринга',
	tool_onpage_render_none: 'Очевидных блокирующих рендеринг таблиц стилей или скриптов не обнаружено.',
	tool_onpage_render_found: 'В <head> найдено {n} <link rel="stylesheet"> без media. Встраивайте критический CSS или отложите загрузку для улучшения LCP.',
	tool_onpage_unknown: 'Не удалось определить: {label}',
	tool_onpage_how_title: 'Как это работает',
	tool_onpage_how_body:
		'Проверка разбирает вставленную разметку (или HTML, загруженный по URL) и оценивает фиксированный список проверок SEO на странице. Каждая проверка читает один тип тега: title, meta description, H1, canonical, мета-тег robots, поля Open Graph, блоки JSON-LD, смешанный контент и ресурсы, блокирующие рендеринг. Режим вставки полностью работает в вашем браузере; режим URL один раз загружает страницу через наш worker и не сохраняет её.',
	tool_onpage_rules_title: 'Правила проверок',
	tool_onpage_rules_body:
		'Вот критерии, с которыми сверяет каждая проверка. Источники — Google Search Central и спецификация HTML.',
	tool_onpage_rules_item_1:
		'Title: на странице должен быть один описательный <title>. Google может переписать его, но лаконичный title около 50–60 символов обычно отображается хорошо.',
	tool_onpage_rules_item_2:
		'H1: используйте ровно один H1 с темой страницы. Остальные заголовки — H2–H6, образующие логичную структуру.',
	tool_onpage_rules_item_3:
		'Canonical: самоуказывающий canonical сообщает Google предпочтительный URL при дублях. Link rel="canonical" размещается в <head>.',
	tool_onpage_rules_item_4:
		'Смешанный контент: https-страница со ссылками на http://-ресурсы блокируется браузерами. Проверка помечает такие ссылки как предупреждения.',
	tool_onpage_rules_item_5:
		'Блокировка рендеринга: таблица стилей в <head> без атрибута media блокирует рендеринг. Проверка эвристическая и не измеряет реальное время загрузки.',
	tool_onpage_example_title: 'Пример',
	tool_onpage_example:
		'Пример ввода — страница с title из 71 символа, без meta description, двумя H1, canonical на другой URL, одним og:image, валидным блоком JSON-LD и одной http://-картинкой. Проверка отмечает title как вероятно обрезанный, H1 — предупреждением, canonical — не самоуказывающим, а смешанный контент — предупреждением, что совпадает с результатом при загрузке примера.',
	tool_onpage_usecases_title: 'Подходящие сценарии',
	tool_onpage_usecase_1:
		'Перед редизайном или перезапуском: прогоните одну и ту же страницу через проверку и исправьте все замечания за один проход.',
	tool_onpage_usecase_2:
		'Приёмка шаблона: получив HTML от подрядчика или конструктора страниц, проверьте теги head, а не доверяйте экспорту.',
	tool_onpage_usecase_3:
		'Обновление контента: после правок в CMS убедитесь, что title, description и canonical соответствуют новой странице.',
	tool_onpage_faq_q1: 'Что проверяет инструмент SEO на странице?',
	tool_onpage_faq_a1:
		'Он проверяет теги, которые контролирует сама страница: title, meta description, H1, canonical, мета-тег robots, поля Open Graph, структурированные данные JSON-LD, смешанный контент и ресурсы, блокирующие рендеринг. Ранжирование и внешние ссылки он не измеряет.',
	tool_onpage_faq_q2: 'Почему на странице должен быть ровно один H1?',
	tool_onpage_faq_a2:
		'Один H1 чётко передаёт тему страницы и читателям, и поисковикам. Несколько H1 размывают структуру; используйте один H1, а остальное стройте на H2–H6.',
	tool_onpage_faq_q3: 'Должен ли canonical указывать на сам себя?',
	tool_onpage_faq_a3:
		'Для страницы, которую нужно ранжировать, — да: самоуказывающий canonical самый понятный сигнал. Указание на другой URL говорит Google, что страница — дубль, что полезно только если это действительно так.',
	tool_onpage_faq_q4: 'Почему проверка помечает http://-ресурсы как смешанный контент?',
	tool_onpage_faq_a4:
		'Когда страница отдаётся по https и ссылается на картинки, скрипты или стили по http://, браузер по умолчанию блокирует запрос. Проверка помечает такие ссылки, чтобы вы перевели их на https.',
	tool_onpage_faq_q5: 'Проверка JSON-LD тестирует валидность?',
	tool_onpage_faq_a5:
		'Она проверяет, что блоки разбираются как валидный JSON, и напоминает держать структурированные данные согласованными с видимым контентом. Полный валидатор schema.org не запускается.',
	tool_onpage_faq_q6: 'Мой HTML куда-то загружается?',
	tool_onpage_faq_a6:
		'Нет. При вставке HTML разбор происходит на вашем устройстве, и на сервер ничего не отправляется. Режим URL один раз загружает страницу через наш worker и не сохраняет её.',
	tool_onpage_references: 'Google Search Central — мета-теги; Google Search Central — canonical; MDN — элемент <meta>.',
	tool_onpage_ref_tags_label: 'Search Central — Мета-теги, которые понимает Google',
	tool_onpage_ref_canonical_label: 'Search Central — Канонические URL',
	tool_onpage_ref_mdn_label: 'MDN — <meta>: элемент метаданных',
};

export default ru;
