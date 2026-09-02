/**
 * i18n-фрагмент (check-robots-txt-url-blocked / ru).
 * Задача: вставить URL → Worker забирает /robots.txt → показать, блокируется ли путь.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_check_robots_txt_url_blocked_home_title: 'Проверка URL в robots.txt',
	tool_check_robots_txt_url_blocked_home_desc:
		'Вставьте URL страницы и узнайте, блокирует ли robots.txt этот путь для Googlebot и других ботов.',
	tool_check_robots_txt_url_blocked_desc:
		'Вставьте URL страницы и узнайте, блокирует ли robots.txt этот путь для Googlebot и других ботов.',
	tool_check_robots_txt_url_blocked_title: 'Проверить, блокирует ли robots.txt URL',
	tool_check_robots_txt_url_blocked_description:
		'Вставьте URL и онлайн проверьте, блокирует ли robots.txt путь для Googlebot, *, Bingbot или GPTBot. Запрос с края + совпавшее правило. Пример: /admin.',
	tool_check_robots_txt_url_blocked_url_label: 'URL страницы',
	tool_check_robots_txt_url_blocked_url_ph: 'https://www.bing.com/search',
	tool_check_robots_txt_url_blocked_ua_label: 'UA',
	tool_check_robots_txt_url_blocked_check: 'Проверить',
	tool_check_robots_txt_url_blocked_sample: 'Пример',
	tool_check_robots_txt_url_blocked_clear: 'Очистить',
	tool_check_robots_txt_url_blocked_running: 'Загрузка robots.txt…',
	tool_check_robots_txt_url_blocked_url_error: 'Введите корректный http(s) URL с нужным путём.',
	tool_check_robots_txt_url_blocked_error_prefix: 'Ошибка: ',
	tool_check_robots_txt_url_blocked_fetch_failed:
		'Не удалось получить robots.txt. Хост может быть недоступен или отклонять ботов.',
	tool_check_robots_txt_url_blocked_privacy_note:
		'URL и имя хоста отправляются нашему Worker, чтобы запросить /robots.txt. Мы не храним их как продуктовую БД.',
	tool_check_robots_txt_url_blocked_result_allowed_yes: 'Разрешено',
	tool_check_robots_txt_url_blocked_result_allowed_no: 'Заблокировано',
	tool_check_robots_txt_url_blocked_result_matched: 'Совпавшее правило',
	tool_check_robots_txt_url_blocked_result_matched_none: 'Нет Allow/Disallow (считается разрешённым)',
	tool_check_robots_txt_url_blocked_result_http_status: 'HTTP-статус robots.txt',
	tool_check_robots_txt_url_blocked_result_path: 'Проверенный путь',
	tool_check_robots_txt_url_blocked_result_ua: 'Использованный UA',
	tool_check_robots_txt_url_blocked_result_robots_url: 'URL robots.txt',
	tool_check_robots_txt_url_blocked_result_group: 'Группа User-agent',
	tool_check_robots_txt_url_blocked_result_preview_missing: 'Нет тела robots.txt (нет файла или HTML-ошибка). Считается allow-all.',
	tool_check_robots_txt_url_blocked_result_preview: 'Превью robots.txt',
	tool_check_robots_txt_url_blocked_how_title: 'Как это работает',
	tool_check_robots_txt_url_blocked_how_body:
		'Отвечает, разрещает или блокирует ли robots.txt путь для выбранного краулера. Запрашивается только /robots.txt, не тело страницы.',
	tool_check_robots_txt_url_blocked_how_item_1: 'Вставьте полный URL страницы (важен путь, не только домен).',
	tool_check_robots_txt_url_blocked_how_item_2: 'Выберите UA (по умолчанию Googlebot; также *, Bingbot или GPTBot).',
	tool_check_robots_txt_url_blocked_how_item_3: 'Нажмите «Проверить» и дождитесь загрузки /robots.txt через Worker.',
	tool_check_robots_txt_url_blocked_how_item_4: 'Смотрите Разрешено/Заблокировано, строку правила и HTTP-статус.',
	tool_check_robots_txt_url_blocked_how_item_5: 'При необходимости сверьте группу в превью.',
	tool_check_robots_txt_url_blocked_formula_title: 'Правила сопоставления',
	tool_check_robots_txt_url_blocked_formula_body:
		'Обычная практика по документации Google и RFC 9309: самое длинное совпадение; при равной длине Allow важнее Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_1: 'Берём группу User-agent под выбранного бота; иначе — группу *.',
	tool_check_robots_txt_url_blocked_formula_item_2: 'Среди Allow/Disallow, подходящих к пути, побеждает самый длинный префикс.',
	tool_check_robots_txt_url_blocked_formula_item_3: 'При равной длине Allow имеет приоритет над Disallow.',
	tool_check_robots_txt_url_blocked_formula_item_4: 'Нет robots.txt или пустые группы = разрешить всё; HTTP-статус всё равно показывается.',
	tool_check_robots_txt_url_blocked_formula_item_5: 'Запрашивается только /robots.txt; частные хосты отклоняются. Это не официальный тестер Search Console.',
	tool_check_robots_txt_url_blocked_example_title: 'Пример',
	tool_check_robots_txt_url_blocked_example:
		'Пример https://www.bing.com/search с Googlebot. Worker загружает https://www.bing.com/robots.txt, оценивает /search и показывает Разрешено или Заблокировано с совпавшей строкой.',
	tool_check_robots_txt_url_blocked_usecases_title: 'Когда полезно',
	tool_check_robots_txt_url_blocked_usecase_1:
		'Перед запуском: убедиться, что /admin или /staging закрыты, а публичные страницы остаются доступны краулерам.',
	tool_check_robots_txt_url_blocked_usecase_2:
		'Тестер / валидатор robots.txt: после Disallow проверить, что целевой URL реально попадает под правило.',
	tool_check_robots_txt_url_blocked_usecase_3:
		'Правила ИИ-краулеров: выбрать GPTBot (или *) и проверить чувствительные пути без генерации файла.',
	tool_check_robots_txt_url_blocked_faq_q1: 'Этот инструмент создаёт robots.txt?',
	tool_check_robots_txt_url_blocked_faq_a1:
		'Нет. Только проверка блокировки. Чтобы писать правила, используйте генератор robots.txt.',
	tool_check_robots_txt_url_blocked_faq_q2: 'Зачем отдельно проверять Googlebot и *?',
	tool_check_robots_txt_url_blocked_faq_a2:
		'У Googlebot может быть своя группа; многие другие боты падают на *. Раздельная проверка снимает ложное ощущение «одна правило на всех».',
	tool_check_robots_txt_url_blocked_faq_q3: 'Что если robots.txt нет или 404?',
	tool_check_robots_txt_url_blocked_faq_a3:
		'Обычная практика краулеров — считать это полным разрешением. Инструмент показывает HTTP-статус, чтобы видеть 404 или редирект.',
	tool_check_robots_txt_url_blocked_faq_q4: 'Можно ли проверить ИИ-краулеры вроде GPTBot?',
	tool_check_robots_txt_url_blocked_faq_a4:
		'Да — выберите GPTBot в списке. Сопоставление по RFC 9309 как edge-оценка, не официальный вердикт краулера.',
	tool_check_robots_txt_url_blocked_faq_q5: 'Сохраняется ли мой URL?',
	tool_check_robots_txt_url_blocked_faq_a5:
		'URL/хост должен дойти до Worker, чтобы запросить /robots.txt. Мы не храним проверки как продуктовую БД. Это edge-инструмент, не «без загрузки».',
	tool_check_robots_txt_url_blocked_references:
		'Google Search Central — robots.txt; RFC 9309 Robots Exclusion Protocol.',
	tool_check_robots_txt_url_blocked_ref_google_label: 'Google Search Central — robots.txt',
	tool_check_robots_txt_url_blocked_ref_rfc_label: 'RFC 9309 — Robots Exclusion Protocol',
};

export default ru;
