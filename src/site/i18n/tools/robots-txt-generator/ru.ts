/**
 * i18n tool shard (robots-txt-generator / ru).
 * Russian locale — 检索向独立重写。
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_robots_home_title: 'Генератор robots.txt',
	tool_robots_home_desc:
		'Управляйте тем, как поисковики обходят ваш сайт, с помощью корректного robots.txt: разрешения, блокировки и ИИ-краулеры в браузере.',
	tool_robots_title: 'Генератор robots.txt — управляйте разрешениями и блокировками ИИ-краулеров',
	tool_robots_description:
		'Ошибочный robots.txt может скрыть сайт. Соберите Allow, Disallow и правила ИИ-краулеров в браузере и скопируйте. Пример: запретить GPTBot, оставить Googlebot.',
	tool_robots_generate: 'Сгенерировать',
	tool_robots_sample: 'Пример',
	tool_robots_clear: 'Очистить',
	tool_robots_copy: 'Копировать',
	tool_robots_copied: 'Скопировано',
	tool_robots_agents_label: 'User-agents',
	tool_robots_agents_hint: 'Отметьте роботов, которых хотите включить, затем добавьте пути для каждой группы.',
	tool_robots_include: 'Включить этого user-agent',
	tool_robots_agent_add: 'Добавить своего агента',
	tool_robots_agent_remove: 'Удалить агента',
	tool_robots_allow_label: 'Пути Allow (по одному в строке)',
	tool_robots_disallow_label: 'Пути Disallow (по одному в строке)',
	tool_robots_sitemap_label: 'URL Sitemap (необязательно)',
	tool_robots_sitemap_ph: 'https://example.com/sitemap.xml',
	tool_robots_output_label: 'robots.txt',
	tool_robots_download: 'Скачать',
	tool_robots_empty_agent: 'Сначала выберите или добавьте user-agent.',
	tool_robots_owner_of: 'Владелец: {owner}',
	tool_robots_how_title: 'Как это работает',
	tool_robots_how_body:
		'Выберите целевых краулеров, добавьте пути Allow и Disallow для каждой группы, при необходимости строку Sitemap и нажмите «Сгенерировать». Страница собирает файл в виде обычного текста по формату RFC 9309: строка User-agent для каждой группы, под ней строки Allow/Disallow, пустая строка между группами и строка Sitemap в конце. Скопируйте результат в корень сайта по адресу /robots.txt.',
	tool_robots_rules_title: 'Важные правила синтаксиса',
	tool_robots_rules_body:
		'Правила robots.txt — это префиксы путей, а не шаблоны, и краулер выполняет ровно одну группу: ту, чей User-agent совпадает с ним наиболее точно. Вот правила, которым следует этот генератор.',
	tool_robots_rules_item_1: 'Выбор группы: краулер слушается группу с самым точным совпадением User-agent — собственное имя важнее *, а порядок групп в файле ничего не решает. Несколько строк User-agent с одним и тем же именем объединяются в одну группу (RFC 9309).',
	tool_robots_rules_item_2: 'Префиксное совпадение: Allow и Disallow совпадают с префиксами путей, а не подстроками и не регулярными выражениями. Специальны только * и $ (RFC 9309).',
	tool_robots_rules_item_3: 'Приоритет правил внутри группы: побеждает самый длинный совпавший путь, а при равной длине совпадения Allow и Disallow верх берёт Allow. Поэтому Disallow: /admin/ вместе с Allow: /admin/public/ оставляет публичную подпапку доступной для обхода.',
	tool_robots_rules_item_4: 'Весь сайт и строка Sitemap: Disallow: / закрывает агенту все URL, а Disallow с пустым значением разрешает всё. Sitemap: — расширение за пределами RFC 9309, регистр не важен, и строка может стоять где угодно; этот генератор ставит её последней.',
	tool_robots_example_title: 'Пример',
	tool_robots_example:
		'Пример: Googlebot с Allow: / (полностью разрешён), GPTBot с Disallow: / (заблокирован) и строка Sitemap, указывающая на /sitemap.xml. Вывод повторяет этот формат: группа на краулера, пустая строка между группами, sitemap в конце.',
	tool_robots_usecases_title: 'Когда пригодится',
	tool_robots_usecase_1: 'Новые сайты: создайте стартовый robots.txt, который оставляет поисковики включёнными и скрывает приватные staging-пути.',
	tool_robots_usecase_2: 'Контроль ИИ-краулеров: выделите GPTBot, ClaudeBot, Google-Extended, CCBot или PerplexityBot в отдельную группу с Disallow, оставив Googlebot обход. Учтите: Google-Extended относится к Gemini и к grounding в Vertex AI, а «Обзоры от ИИ» в поиске по-прежнему получают контент через Googlebot.',
	tool_robots_usecase_3: 'Обнаружение: свяжите robots.txt со строкой Sitemap, чтобы краулеры находили вашу карту сайта.',
	tool_robots_faq_q1: 'Что будет, если написать Disallow: / ?',
	tool_robots_faq_a1: 'Это запрещает краулеру получать любой URL в корне сайта. Если Googlebot получит Disallow: /, ваши страницы могут исчезнуть из Google Search. Но Disallow закрывает обход, а не индексацию: закрытый URL, на который ссылаются с других сайтов, всё равно может попасть в выдачу — без сниппета. Чтобы убрать его совсем, откройте страницу для обхода и поставьте на неё noindex. Для staging-пути вместо этого используйте Disallow: /private/.',
	tool_robots_faq_q2: 'Как заблокировать ИИ-краулеры вроде GPTBot?',
	tool_robots_faq_a2: 'Создайте группу с User-agent краулера (например GPTBot, ClaudeBot, Google-Extended, CCBot, PerplexityBot) и добавьте Disallow: /. Сверяйтесь с официальной документацией краулера: ИИ-краулеры периодически обновляют свои user-agents и диапазоны IP.',
	tool_robots_faq_q3: 'Где должна стоять строка Sitemap?',
	tool_robots_faq_a3: 'Положение не влияет на чтение поисковиками, но по соглашению её ставят в конце файла. Генератор добавляет её последней, если вы указали URL.',
	tool_robots_faq_q4: 'Загружается ли мой robots.txt куда-нибудь?',
	tool_robots_faq_a4: 'Нет. Файл создаётся в вашем браузере и никогда не отправляется на сервер. Закройте вкладку — и ничего не сохранится.',
	tool_robots_references: 'RFC 9309 Протокол исключения роботов; Google Search Central — robots.txt; Google Search Central — Управление ИИ-краулерами.',
	tool_robots_ref_rfc_label: 'RFC 9309 — Протокол исключения роботов',
	tool_robots_ref_google_label: 'Search Central — robots.txt',
	tool_robots_ref_ai_label: 'Search Central — ИИ-краулеры',
};

export default ru;
