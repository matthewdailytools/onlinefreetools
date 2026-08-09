/**
 * i18n tool shard (sitemap-xml-generator / ru).
 * Russian independent rewrite — keeps sitemap.xml/lastmod/changefreq/priority as technical terms.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_sitemap_home_title: 'Генератор sitemap XML',
	tool_sitemap_home_desc:
		'Превратите список URL в корректный sitemap.xml с lastmod, changefreq и priority — прямо в браузере.',
	tool_sitemap_title: 'Генератор sitemap XML — создайте sitemap.xml из списка URL',
	tool_sitemap_description:
		'Создайте sitemap.xml в браузере. Шаги: вставьте по одному https-URL в строку с необязательными lastmod / changefreq / priority, посмотрите XML с корректным экранированием и скопируйте в корень сайта. Показаны правила и лимиты протокола. Ничего не отправляется. Пример: 3 URL → urlset с тремя элементами url.',
	tool_sitemap_generate: 'Сгенерировать',
	tool_sitemap_sample: 'Пример',
	tool_sitemap_clear: 'Очистить',
	tool_sitemap_copy: 'Копировать',
	tool_sitemap_copied: 'Скопировано',
	tool_sitemap_download: 'Скачать',
	tool_sitemap_urls_label: 'URL (по одному в строке)',
	tool_sitemap_urls_ph: 'https://example.com/page',
	tool_sitemap_format_hint:
		'Каждая строка: URL, или URL | lastmod (yyyy-MM-dd), или URL | lastmod | changefreq | priority. Пример: https://example.com/page | 2026-08-01 | weekly | 0.8',
	tool_sitemap_output_label: 'sitemap.xml',
	tool_sitemap_warn_invalid_url: 'Пропущен не-http URL: {url}',
	tool_sitemap_warn_bad_lastmod: 'Неверный lastmod (используйте yyyy-MM-dd или W3C datetime): {url}',
	tool_sitemap_warn_too_many: 'Более 50 000 URL — разбейте на несколько sitemap и свяжите их через sitemap index.',
	tool_sitemap_how_title: 'Как это работает',
	tool_sitemap_how_body:
		'Вставьте список URL, по одному в строку. Через вертикальную черту можно добавить lastmod (yyyy-MM-dd), changefreq и priority. Страница разбирает каждую строку, экранирует зарезервированные символы, проверяет, что URL начинается с http(s), и собирает urlset по протоколу. Скопируйте XML в корень сайта и укажите его в robots.txt или отправьте в Search Console.',
	tool_sitemap_rules_title: 'Правила и лимиты протокола',
	tool_sitemap_rules_body: 'Это правила протокола sitemap и Google, которым следует генератор.',
	tool_sitemap_rules_item_1: 'Обязательно: каждый <url> должен содержать <loc> с полным URL. lastmod, changefreq и priority необязательны.',
	tool_sitemap_rules_item_2: 'Формат lastmod: дата W3C (yyyy-MM-dd) или datetime вида 2026-08-01T12:00:00+00:00. Другие форматы игнорируются или отклоняются.',
	tool_sitemap_rules_item_3: 'changefreq — подсказка, а не сигнал. Google её игнорирует, поэтому заполнение не меняет частоту обхода.',
	tool_sitemap_rules_item_4: 'Лимиты: один sitemap вмещает не более 50 000 URL и 50 МБ после сжатия. Сверх этого разделите и используйте sitemap index.',
	tool_sitemap_example_title: 'Пример',
	tool_sitemap_example:
		'Пример ввода: https://example.com/ и https://example.com/products с lastmod 2026-08-01, плюс https://example.com/about — на выходе urlset с тремя элементами url, средний несёт lastmod.',
	tool_sitemap_usecases_title: 'Подходит для',
	tool_sitemap_usecase_1: 'Новые сайты: создайте первый sitemap.xml из списка URL и отправьте его в Search Console.',
	tool_sitemap_usecase_2: 'Обновлённый контент: добавьте lastmod недавно изменённым страницам, чтобы краулеры увидели сигнал свежести.',
	tool_sitemap_usecase_3: 'Обнаружение: укажите sitemap в robots.txt, чтобы краулеры нашли его без ожидания отправки.',
	tool_sitemap_faq_q1: 'Каков лимит URL в одном sitemap?',
	tool_sitemap_faq_a1: '50 000 URL или 50 МБ (без сжатия). Генератор предупреждает, когда список превышает 50 000, чтобы вы разделили его и использовали sitemap index.',
	tool_sitemap_faq_q2: 'Какой формат lastmod требуется?',
	tool_sitemap_faq_a2: 'Дата W3C (yyyy-MM-dd) или полный datetime вида 2026-08-01T12:00:00+00:00. Строки с неверным lastmod отмечаются, чтобы вы исправили их до сохранения.',
	tool_sitemap_faq_q3: 'Влияет ли changefreq на обход?',
	tool_sitemap_faq_a3: 'Нет. Google игнорирует changefreq; это подсказка для других потребителей. priority тоже игнорируется. Точной стоит держать только lastmod.',
	tool_sitemap_faq_q4: 'Чем это отличается от IndexNow?',
	tool_sitemap_faq_a4: 'IndexNow сразу уведомляет участвующие поисковики об изменении URL, а sitemap — постоянный список, который краулеры периодически читают. Используйте оба: IndexNow для мгновенного уведомления, sitemap для постоянного обнаружения.',
	tool_sitemap_references: 'sitemaps.org — протокол sitemap; Google Search Central — создание и отправка sitemap.',
	tool_sitemap_ref_sitemaps_label: 'sitemaps.org — протокол',
	tool_sitemap_ref_google_label: 'Search Central — создание и отправка sitemap',
};

export default ru;
