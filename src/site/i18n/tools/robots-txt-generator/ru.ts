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
		'Правила robots.txt — это префиксы путей, а не шаблоны; краулер применяет последнюю совпавшую группу в файле. Вот правила, которым следует этот генератор.',
	tool_robots_rules_item_1: 'Порядок групп: строка User-agent начинает группу для этого краулера; пустая строка её заканчивает. Действует последняя совпавшая группа.',
	tool_robots_rules_item_2: 'Префиксное совпадение: Allow и Disallow совпадают с префиксами путей, а не подстроками и не регулярными выражениями. Специальны только * и $ (RFC 9309).',
	tool_robots_rules_item_3: 'Disallow: / блокирует этого агента на всём сайте; Disallow с пустым значением разрешает агенту всё.',
	tool_robots_rules_item_4: 'Sitemap — это расширение, а не часть RFC 9309. Оно не зависит от регистра и может стоять в любом месте, хотя обычно его размещают в конце.',
	tool_robots_example_title: 'Пример',
	tool_robots_example:
		'Пример: Googlebot с Allow: / (полностью разрешён), GPTBot с Disallow: / (заблокирован) и строка Sitemap, указывающая на /sitemap.xml. Вывод повторяет этот формат: группа на краулера, пустая строка между группами, sitemap в конце.',
	tool_robots_usecases_title: 'Когда пригодится',
	tool_robots_usecase_1: 'Новые сайты: создайте стартовый robots.txt, который оставляет поисковики включёнными и скрывает приватные staging-пути.',
	tool_robots_usecase_2: 'Контроль ИИ-краулеров: блокируйте GPTBot, ClaudeBot, Google-Extended, CCBot или PerplexityBot для обучения или извлечения сводок, не трогая Googlebot.',
	tool_robots_usecase_3: 'Обнаружение: свяжите robots.txt со строкой Sitemap, чтобы краулеры находили вашу карту сайта.',
	tool_robots_faq_q1: 'Что будет, если написать Disallow: / ?',
	tool_robots_faq_a1: 'Это запрещает краулеру получать любой URL в корне сайта. Если Googlebot получит Disallow: /, ваши страницы могут исчезнуть из Google Search. Для staging-пути вместо этого используйте Disallow: /private/.',
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
