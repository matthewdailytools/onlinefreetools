/**
 * i18n-фрагмент (find-and-validate-xml-sitemap / ru).
 * Сценарий: URL сайта → найти sitemap → проверить XML и выборки loc (не генератор).
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_find_and_validate_xml_sitemap_home_title: 'Найти и проверить XML-sitemap',
	tool_find_and_validate_xml_sitemap_home_desc:
		'Найдите sitemap через robots.txt или /sitemap.xml и проверьте структуру, тип и примеры loc.',
	tool_find_and_validate_xml_sitemap_desc:
		'Найдите sitemap через robots.txt или /sitemap.xml и проверьте структуру, тип и примеры loc.',
	tool_find_and_validate_xml_sitemap_title: 'Найти и проверить XML-sitemap',
	tool_find_and_validate_xml_sitemap_description:
		'Введите URL сайта, чтобы найти XML-sitemap по строкам Sitemap: в robots.txt или /sitemap.xml; проверьте структуру, посчитайте loc и отличите urlset от sitemapindex. Это не генератор. Пример: sitemaps.org.',
	tool_find_and_validate_xml_sitemap_url_label: 'URL сайта',
	tool_find_and_validate_xml_sitemap_url_ph: 'https://www.sitemaps.org/',
	tool_find_and_validate_xml_sitemap_check: 'Найти и проверить',
	tool_find_and_validate_xml_sitemap_sample: 'Пример',
	tool_find_and_validate_xml_sitemap_clear: 'Очистить',
	tool_find_and_validate_xml_sitemap_running: 'Ищем и проверяем sitemap…',
	tool_find_and_validate_xml_sitemap_url_error: 'Введите корректный http(s) URL сайта (origin или главная).',
	tool_find_and_validate_xml_sitemap_error_prefix: 'Ошибка: ',
	tool_find_and_validate_xml_sitemap_fetch_failed:
		'Не удалось получить кандидаты sitemap. Хост может быть недоступен или блокировать ботов.',
	tool_find_and_validate_xml_sitemap_privacy_note:
		'URL и имя хоста отправляются в Worker для запроса robots.txt и sitemap. Мы не храним их как продуктовую БД.',
	tool_find_and_validate_xml_sitemap_result_site: 'Origin сайта',
	tool_find_and_validate_xml_sitemap_result_candidates: 'Проверенные кандидаты',
	tool_find_and_validate_xml_sitemap_result_primary: 'Основной результат',
	tool_find_and_validate_xml_sitemap_result_none_primary: 'Среди кандидатов нет валидной структуры sitemap',
	tool_find_and_validate_xml_sitemap_col_url: 'URL',
	tool_find_and_validate_xml_sitemap_col_status: 'HTTP-статус',
	tool_find_and_validate_xml_sitemap_col_kind: 'Тип',
	tool_find_and_validate_xml_sitemap_col_loc_count: 'Число loc',
	tool_find_and_validate_xml_sitemap_col_valid: 'Структура валидна',
	tool_find_and_validate_xml_sitemap_col_samples: 'Примеры loc',
	tool_find_and_validate_xml_sitemap_valid_yes: 'Да',
	tool_find_and_validate_xml_sitemap_valid_no: 'Нет',
	tool_find_and_validate_xml_sitemap_empty_findings: 'Нет результатов для этого сайта.',
	tool_find_and_validate_xml_sitemap_how_title: 'Как это работает',
	tool_find_and_validate_xml_sitemap_how_body:
		'Одна задача: найти XML-sitemap сайта и понять, похож ли он на валидный urlset или sitemapindex — без создания нового файла.',
	tool_find_and_validate_xml_sitemap_how_item_1: 'Введите origin сайта или URL главной.',
	tool_find_and_validate_xml_sitemap_how_item_2:
		'Нажмите «Найти и проверить»; Worker читает Sitemap: в robots.txt, затем пробует /sitemap.xml и типичные индексные пути.',
	tool_find_and_validate_xml_sitemap_how_item_3:
		'В таблице смотрите тип корня, число URL и примеры <loc>.',
	tool_find_and_validate_xml_sitemap_how_item_4:
		'Исправьте XML или путь обнаружения до IndexNow или Search Console.',
	tool_find_and_validate_xml_sitemap_formula_title: 'Правила обнаружения и проверки',
	tool_find_and_validate_xml_sitemap_formula_body:
		'По протоколу sitemaps.org: корректный XML с корнем urlset или sitemapindex и учитываемыми <loc>.',
	tool_find_and_validate_xml_sitemap_formula_item_1:
		'Порядок: директивы Sitemap: в robots.txt, затем /sitemap.xml, /sitemap_index.xml, /sitemap-index.xml.',
	tool_find_and_validate_xml_sitemap_formula_item_2:
		'Структура валидна, если ответ похож на XML sitemap и HTTP успешен.',
	tool_find_and_validate_xml_sitemap_formula_item_3:
		'sitemapindex перечисляет дочерние sitemap; urlset — loc страниц; оба типа показываются.',
	tool_find_and_validate_xml_sitemap_formula_item_4:
		'Считаем <loc> и показываем до 10 примеров; не обходим каждый URL из списка.',
	tool_find_and_validate_xml_sitemap_formula_item_5:
		'Gzip, огромные тела, редиректы и не-XML могут провалить проверку. Частные хосты отклоняются.',
	tool_find_and_validate_xml_sitemap_example_title: 'Пример',
	tool_find_and_validate_xml_sitemap_example:
		'Пример ввода https://www.sitemaps.org/. Worker проверяет Sitemap: и обычные пути и показывает HTTP-статус, тип, число loc, примеры и validStructure.',
	tool_find_and_validate_xml_sitemap_usecases_title: 'Когда это помогает',
	tool_find_and_validate_xml_sitemap_usecase_1:
		'Поиск sitemap: после миграции CMS или CDN убедитесь, где публикуется карта сайта.',
	tool_find_and_validate_xml_sitemap_usecase_2:
		'Проверка / валидатор XML: перед Search Console убедитесь, что файл корректен и это индекс или urlset.',
	tool_find_and_validate_xml_sitemap_usecase_3:
		'Быстрая проверка loc: после пересборки большого sitemap посмотрите примеры <loc> без полной загрузки.',
	tool_find_and_validate_xml_sitemap_faq_q1: 'Это генератор sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a1:
		'Нет — только поиск и проверка. Чтобы собрать файл из списка URL, используйте генератор XML Sitemap.',
	tool_find_and_validate_xml_sitemap_faq_q2: 'Где вы ищете sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a2:
		'Сначала строки Sitemap: в robots.txt, затем /sitemap.xml и типичные индексные пути на том же хосте.',
	tool_find_and_validate_xml_sitemap_faq_q3: 'Чем sitemapindex отличается от urlset?',
	tool_find_and_validate_xml_sitemap_faq_a3:
		'sitemapindex перечисляет дочерние sitemap; urlset — loc страниц. Оба — валидные корни протокола; тип виден в таблице.',
	tool_find_and_validate_xml_sitemap_faq_q4: 'Вы обходите каждый URL из sitemap?',
	tool_find_and_validate_xml_sitemap_faq_a4:
		'Нет. Мы считаем <loc>, показываем выборку и проверяем структуру — без live-статуса каждой страницы.',
	tool_find_and_validate_xml_sitemap_faq_q5: 'Мой URL загружается или сохраняется?',
	tool_find_and_validate_xml_sitemap_faq_a5:
		'URL/хост должен дойти до Worker, чтобы запросить файлы. Проверки не хранятся как продуктовая БД. Это edge-инструмент, не «без загрузки».',
	tool_find_and_validate_xml_sitemap_references:
		'Протокол sitemaps.org; Google Search Central — обзор sitemaps.',
	tool_find_and_validate_xml_sitemap_ref_sitemaps_label: 'sitemaps.org — Протокол',
	tool_find_and_validate_xml_sitemap_ref_google_label: 'Google Search Central — Обзор sitemaps',
};

export default ru;
