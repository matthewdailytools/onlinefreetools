/**
 * i18n tool shard (hreflang-generator / ru).
 * Русский — независимая переработка под местные поисковые привычки.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_hreflang_home_title: 'Генератор hreflang',
	tool_hreflang_home_desc:
		'Скажите Google, какую языковую версию страницы показывать кому — превращайте языковые URL в теги hreflang, заголовок HTTP Link и разметку sitemap прямо в браузере.',
	tool_hreflang_title: 'Генератор hreflang — создайте языковые теги для многоязычных сайтов',
	tool_hreflang_description:
		'Без hreflang Google может считать переводы дублями. Преобразуйте URL в link-теги, HTTP Link или sitemap—локально. Пример: en, es и ja.',
	tool_hreflang_input_label: 'Список языковых URL',
	tool_hreflang_input_ph:
		'По паре в строке: код языка + URL. Пример:\nen https://example.com/\nes https://example.com/es/\nja https://example.com/ja/',
	tool_hreflang_input_hint:
		'Каждая строка — «код-языка URL» или «URL код-языка». Коды используют форму BCP 47, например en, en-US или zh-Hans.',
	tool_hreflang_xdefault_label: 'Запасной URL x-default',
	tool_hreflang_xdefault_none: '— без x-default —',
	tool_hreflang_xdefault_hint:
		'Необязательно. x-default сообщает Google, какую версию показывать, когда ни один язык не совпадает, — полезно для корневой или английской главной страницы.',
	tool_hreflang_generate: 'Создать',
	tool_hreflang_sample: 'Загрузить пример',
	tool_hreflang_clear: 'Очистить',
	tool_hreflang_copy: 'Копировать',
	tool_hreflang_copied: 'Скопировано',
	tool_hreflang_error_prefix: 'Ошибка: ',
	tool_hreflang_url_protocol: 'У одного URL не было протокола — https:// добавлен автоматически.',
	tool_hreflang_lang_invalid: 'Неверный код языка: {lang}. Используйте форму BCP 47, например en, en-US или zh-Hans.',
	tool_hreflang_no_valid_rows: 'Нет корректных строк. Добавьте хотя бы одну пару «код языка + URL».',
	tool_hreflang_output_label: 'Сгенерированная разметка',
	tool_hreflang_tab_link: 'Теги <link>',
	tool_hreflang_tab_http: 'Заголовок HTTP Link',
	tool_hreflang_tab_sitemap: 'Sitemap',
	tool_hreflang_how_title: 'Как это работает',
	tool_hreflang_how_body:
		'Генератор разбирает каждую строку на код языка и URL, затем выводит один и тот же набор связей в трёх формах. Форма <link> вставляется в <head> каждой страницы. Форма заголовка HTTP Link отправляется в ответе сервера. Форма sitemap встраивает <xhtml:link> внутрь каждого блока <url>. Каждый URL получает аннотацию hreflang-самоссылки, чтобы каждая языковая версия указывала на себя, а необязательная запись x-default покрывает посетителей, чей язык не указан.',
	tool_hreflang_rules_title: 'Правила генератора',
	tool_hreflang_rules_body: 'Эти правила взяты из Google Search Central и стандарта языковых тегов BCP 47.',
	tool_hreflang_rules_item_1:
		'Каждая языковая версия должна включать hreflang-самоссылку на собственный URL. Её пропуск ослабляет сигнал.',
	tool_hreflang_rules_item_2:
		'Каждый URL должен быть перечислен из всех языковых версий: полный набор альтернатив есть на каждой странице, а не только в одну сторону.',
	tool_hreflang_rules_item_3:
		'Коды языка по BCP 47: язык из двух букв, опционально регион (en-US) и опционально письменность (zh-Hans). x-default — специальный запасной код.',
	tool_hreflang_rules_item_4:
		'x-default указывает на страницу, показываемую, когда ни один из перечисленных языков не совпадает, например на английскую корневую страницу. Google может использовать её как запасную для всех нераспознанных языков.',
	tool_hreflang_rules_item_5:
		'Для одного набора выберите одну форму доставки: теги <link> в HTML, заголовок HTTP Link или xhtml:link в sitemap. Не смешивайте формы для одного набора — сигналы могут противоречить друг другу.',
	tool_hreflang_example_title: 'Пример',
	tool_hreflang_example:
		'В примере три версии одной страницы: https://example.com/ (en), https://example.com/es/ (es) и https://example.com/ja/ (ja). Сгенерированные теги <link> включают самоссылки для каждого языка плюс необязательный x-default на английскую корневую страницу.',
	tool_hreflang_usecases_title: 'Подходящие сценарии',
	tool_hreflang_usecase_1:
		'Запуск многоязычного сайта: один раз сгенерируйте теги <link> для каждого шаблона и проверьте, что каждая языковая версия перечисляет полный набор.',
	tool_hreflang_usecase_2:
		'После реструктуризации сайта перегенерируйте разметку, чтобы соответствие URL оставалось согласованным между языками, а не расползалось.',
	tool_hreflang_usecase_3:
		'Когда в результатах поиска отображается неверный язык, проверьте наличие самоссылок и x-default и убедитесь, что URL ведут на канонические страницы.',
	tool_hreflang_faq_q1: 'Какую из трёх форм использовать?',
	tool_hreflang_faq_a1:
		'Используйте теги <link>, если можете редактировать HTML. Используйте заголовок HTTP Link, когда страницы отдаёт ваш сервер и HTML менять сложно. Используйте форму sitemap, если хотите держать всё в XML-карте сайта.',
	tool_hreflang_faq_q2: 'Когда добавлять x-default?',
	tool_hreflang_faq_a2:
		'x-default сообщает Google, какую версию показывать, когда язык посетителя не совпадает ни с одним кодом. Добавляйте его, когда есть корневая или запасная страница, обычно английская.',
	tool_hreflang_faq_q3: 'Каждому ли URL нужна hreflang-самоссылка?',
	tool_hreflang_faq_a3:
		'Да. Каждая языковая версия должна включать собственный URL в набор с hreflang-самоссылкой на себя. Google использует полный набор, чтобы выбрать правильную страницу для каждого языка.',
	tool_hreflang_faq_q4: 'Какой формат кода языка допустим?',
	tool_hreflang_faq_a4:
		'Коды BCP 47: язык из двух-трёх букв, опционально регион (en-US) и опционально письменность (zh-Hans). Язык строчными буквами, и не придумывайте коды вроде «en-us-en».',
	tool_hreflang_faq_q5: 'Hreflang в <head> или в sitemap?',
	tool_hreflang_faq_a5:
		'Работает и то и другое, но для набора страниц выберите одну согласованную форму. Теги <link> живут в <head>, заголовок HTTP Link отправляется с ответом, а sitemap использует блоки xhtml:link.',
	tool_hreflang_faq_q6: 'Мои URL куда-то загружаются?',
	tool_hreflang_faq_a6: 'Нет. Генератор работает полностью в вашем браузере, и ничего не загружается.',
	tool_hreflang_references: 'Google Search Central — Локализованные версии (hreflang); языковые теги BCP 47.',
	tool_hreflang_ref_searchcentral_label: 'Search Central — Локализованные версии (hreflang)',
	tool_hreflang_ref_bcp47_label: 'BCP 47 — Теги для идентификации языков',
};

export default ru;
