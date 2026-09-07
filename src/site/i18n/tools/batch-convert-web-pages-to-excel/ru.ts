/**
 * i18n tool shard (batch-convert-web-pages-to-excel / ru).
 * H1: Пакетно преобразовать веб-страницы в Excel.
 * IG: ячейки HTML-таблиц в одной книге — не скриншот, не A4 PDF, не проза Word.
 */
import type { SiteLangDict } from '../../../types';

/** Видимые строки конвертера веб→Excel (ru). */
const ru: SiteLangDict = {
	tool_batch_convert_web_pages_to_excel_advanced_label: 'Дополнительные настройки (по желанию)',
	tool_batch_convert_web_pages_to_excel_article:
		'Заберите HTML-таблицы с публичных адресов в одну книгу Excel: каждая таблица станет листом с ячейками, которые можно фильтровать. Сплошной текст и скриншоты не попадают. Это не PDF для печати A4 и не документ Word. Каждый адрес запрашивается один раз через сервер и не сохраняется. Вставленный HTML остаётся во вкладке. Печать: пакетно преобразовать веб-страницы в PDF. Правка заголовков: преобразовать HTML-страницы в документ Word.',
	tool_batch_convert_web_pages_to_excel_clear: 'Очистить',
	tool_batch_convert_web_pages_to_excel_col_file: 'Листы',
	tool_batch_convert_web_pages_to_excel_col_status: 'Статус',
	tool_batch_convert_web_pages_to_excel_col_url: 'URL',
	tool_batch_convert_web_pages_to_excel_convert: 'Конвертировать всё',
	tool_batch_convert_web_pages_to_excel_desc:
		'Вытащите HTML-таблицы из списка URL в одну книгу Excel — не скриншот, не PDF и не Word.',
	tool_batch_convert_web_pages_to_excel_description:
		'Пакетно преобразовать веб-страницы в Excel: HTML-таблицы в один .xlsx (HTML в Excel / HTML-таблица в Excel). Не скриншот и не PDF A4. Шаги: вставить URL, Конвертировать всё, Скачать Excel. Пример: прайс и склад станут двумя листами. URL запрашивается один раз и не хранится.',
	tool_batch_convert_web_pages_to_excel_download: 'Скачать Excel',
	tool_batch_convert_web_pages_to_excel_empty: 'Вставьте хотя бы один URL страницы или перейдите к «Вставить HTML».',
	tool_batch_convert_web_pages_to_excel_err_convert: 'На этой странице нет пригодной HTML-таблицы. Пропущено.',
	tool_batch_convert_web_pages_to_excel_err_html_empty: 'Сначала вставьте HTML, в котором есть <table>.',
	tool_batch_convert_web_pages_to_excel_err_load: 'Библиотека Excel не загрузилась. Обновите страницу и попробуйте снова.',
	tool_batch_convert_web_pages_to_excel_err_too_many: 'Не больше 10 URL. Лишние строки не добавлены.',
	tool_batch_convert_web_pages_to_excel_err_url: 'Не удалось загрузить этот URL. Проверьте адрес — или сайт блокирует запрос.',
	tool_batch_convert_web_pages_to_excel_err_url_empty: 'Эта строка не является корректным http(s) URL. Пропущено.',
	tool_batch_convert_web_pages_to_excel_example:
		'Загрузить пример подставляет прайс и склад, собирает локальную книгу из двух HTML-таблиц (без живого сайта) и включает Скачать Excel. «Конвертировать всё» запрашивает адреса, которые вы вставили. «Вставить HTML» — то же сопоставление таблиц без URL.',
	tool_batch_convert_web_pages_to_excel_example_title: 'Пример',
	tool_batch_convert_web_pages_to_excel_faq_a1:
		'Вставленный HTML не покидает вкладку. Если вы конвертируете URL, мы один раз отправляем каждый адрес за HTML и не храним страницы. Файл .xlsx собирается в браузере.',
	tool_batch_convert_web_pages_to_excel_faq_a2:
		'Страница Word переносит заголовки, списки и абзацы в редактируемый .docx. Здесь проза игнорируется, в листы Excel копируются только ячейки HTML-таблиц. Тот же запрос, другой файл.',
	tool_batch_convert_web_pages_to_excel_faq_a3:
		'JPG/PNG — снимки вьюпорта (ZIP картинок). PDF режет A4 для печати. Здесь числа и текст, которые фильтруются в Excel: одна книга, не ZIP фотографий.',
	tool_batch_convert_web_pages_to_excel_faq_a4:
		'Да. Одной строки хватит для «веб-страница в Excel». Удачные URL делят один .xlsx с несколькими листами.',
	tool_batch_convert_web_pages_to_excel_faq_a5:
		'Нет. Нет OCR и нет разбора PDF. Конвертируйте HTML-страницу или вставьте разметку таблицы. Если CSV уже есть — CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_faq_a6:
		'Вкладка «Вставить HTML» (HTML в Excel / HTML-таблица в Excel). Полная страница Chrome / .mhtml не поддерживается: экспортируйте HTML или скопируйте таблицу. Это не Excel в вебе.',
	tool_batch_convert_web_pages_to_excel_faq_q1: 'Страницы загружаются и сохраняются?',
	tool_batch_convert_web_pages_to_excel_faq_q2: 'Чем это отличается от «Преобразовать HTML-страницы в документ Word»?',
	tool_batch_convert_web_pages_to_excel_faq_q3: 'А чем от пакетных JPG, PNG или PDF?',
	tool_batch_convert_web_pages_to_excel_faq_q4: 'Можно конвертировать один URL?',
	tool_batch_convert_web_pages_to_excel_faq_q5: 'Вытаскиваете таблицы из PDF?',
	tool_batch_convert_web_pages_to_excel_faq_q6: 'У меня HTML или HTML-таблица, не URL. Excel в интернете или mhtml?',
	tool_batch_convert_web_pages_to_excel_file_count_tpl: '{n} URL в очереди',
	tool_batch_convert_web_pages_to_excel_how_body:
		'Вставьте публичные URL с HTML-таблицами, нажмите «Конвертировать всё» и скачайте одну книгу Excel. Сплошной текст пропускается; листами становятся только ячейки <table>.',
	tool_batch_convert_web_pages_to_excel_how_item_1:
		'Один https URL в строке (прайсы и публичные HTML-таблицы подходят). Одной строки хватит для «страница в Excel».',
	tool_batch_convert_web_pages_to_excel_how_item_2:
		'Нажмите «Конвертировать всё». Каждый публичный URL запрашивается один раз; страницы без пригодной таблицы пропускаются, остальные идут дальше.',
	tool_batch_convert_web_pages_to_excel_how_item_3:
		'Есть разметка, нет URL (HTML в Excel / HTML-таблица в Excel)? Откройте «Вставить HTML», вставьте код, затем «Конвертировать всё».',
	tool_batch_convert_web_pages_to_excel_how_item_4:
		'Нужен один лист на URL, а не на таблицу, или оставить крошечные навигационные таблицы? Откройте дополнительные настройки.',
	tool_batch_convert_web_pages_to_excel_how_item_5:
		'A4? Пакетно преобразовать веб-страницы в PDF. Заголовки? Преобразовать HTML-страницы в документ Word. Уже есть CSV? CSV ↔ JSON.',
	tool_batch_convert_web_pages_to_excel_how_item_6: 'Скачать Excel, когда сопоставлена хотя бы одна таблица.',
	tool_batch_convert_web_pages_to_excel_how_title: 'Как это работает',
	tool_batch_convert_web_pages_to_excel_html_hint: 'Вставьте фрагмент или полный HTML с <table>. Сопоставление остаётся во вкладке, ничего не отправляется.',
	tool_batch_convert_web_pages_to_excel_html_label: 'HTML с таблицами',
	tool_batch_convert_web_pages_to_excel_html_placeholder: '<table><tr><th>SKU</th><th>Кол-во</th></tr></table>',
	tool_batch_convert_web_pages_to_excel_layout_label: 'Листы',
	tool_batch_convert_web_pages_to_excel_layout_table: 'Один лист на HTML-таблицу',
	tool_batch_convert_web_pages_to_excel_layout_url: 'Один лист на URL (сложить таблицы)',
	tool_batch_convert_web_pages_to_excel_opts_hint:
		'По умолчанию один лист на HTML-таблицу в одной книге. Сложение кладёт все таблицы URL на один лист с пустой строкой между ними. Крошечные таблицы (меньше двух строк или двух столбцов) пропускаются, чтобы навигационные сетки не засоряли файл.',
	tool_batch_convert_web_pages_to_excel_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_excel_rules_body:
		'Копируются только ячейки HTML <table>. Один http(s) URL в строке, до 10. Неудачные строки пропускаются. Удачные таблицы делят один .xlsx. Это не переименованный скриншот и не экспорт PDF.',
	tool_batch_convert_web_pages_to_excel_rules_item_1:
		'Каждый URL уходит один раз за HTML и не сохраняется. Вставленный HTML не покидает вкладку. Книга собирается здесь.',
	tool_batch_convert_web_pages_to_excel_rules_item_2:
		'Частные сети, стены входа и страницы без <table> валят эту строку. Остальные продолжают.',
	tool_batch_convert_web_pages_to_excel_rules_item_3:
		'colspan вставляет пустые ячейки. rowspan сглаживается (каждая строка независима). Скрипты снимаются, поэтому таблица только на JS будет пустой.',
	tool_batch_convert_web_pages_to_excel_rules_item_4:
		'Это не обход всего сайта и не Excel в вебе. Вставьте URL или HTML, которые уже есть. Имена листов обрезаются до 31 символа.',
	tool_batch_convert_web_pages_to_excel_rules_item_5:
		'По сравнению с HTML→Word: только таблицы, не заголовки/списки. По сравнению с пакетными JPG/PNG/PDF: ячейки в одной книге, не ZIP растров и не A4. По сравнению с CSV ↔ JSON: вход — страница, не уже имеющийся файл.',
	tool_batch_convert_web_pages_to_excel_rules_title: 'Правила, которых стоит ждать',
	tool_batch_convert_web_pages_to_excel_sample: 'Загрузить пример',
	tool_batch_convert_web_pages_to_excel_skip_tiny_label: 'Пропускать крошечные таблицы (меньше 2×2)',
	tool_batch_convert_web_pages_to_excel_status_converting: 'Сопоставление HTML-таблиц…',
	tool_batch_convert_web_pages_to_excel_status_done: 'Пакет закончен — проверьте таблицу и скачайте Excel.',
	tool_batch_convert_web_pages_to_excel_status_fetching: 'Запрос HTML страницы…',
	tool_batch_convert_web_pages_to_excel_status_ok: 'Таблицы сопоставлены',
	tool_batch_convert_web_pages_to_excel_status_queued: 'В очереди',
	tool_batch_convert_web_pages_to_excel_status_skip: 'Пропущено',
	tool_batch_convert_web_pages_to_excel_status_working: 'Пакет конвертируется…',
	tool_batch_convert_web_pages_to_excel_summary_tpl: '{ok} готово · {skip} пропущено',
	tool_batch_convert_web_pages_to_excel_tab_html: 'Вставить HTML',
	tool_batch_convert_web_pages_to_excel_tab_urls: 'URL страниц',
	tool_batch_convert_web_pages_to_excel_title: 'Пакетно преобразовать веб-страницы в Excel',
	tool_batch_convert_web_pages_to_excel_url_hint: 'Один публичный http(s) URL в строке, до 10. Каждую страницу запрашиваем один раз. Скрипты снимаются. Листами становятся только HTML-таблицы.',
	tool_batch_convert_web_pages_to_excel_url_label: 'URL страниц (по одному в строке)',
	tool_batch_convert_web_pages_to_excel_url_placeholder: 'https://example.com/data/price-list',
	tool_batch_convert_web_pages_to_excel_usecase_1:
		'Сложите публичный прайс или SKU из HTML в Excel, чтобы количества остались фильтруемыми числами — PNG был бы только пикселями.',
	tool_batch_convert_web_pages_to_excel_usecase_2:
		'Сведите таблицы параметров с двух справок в одну книгу и добавьте свой столбец SUM. Word оставил бы заголовки прозой.',
	tool_batch_convert_web_pages_to_excel_usecase_3:
		'Печать A4 оставьте пакетному веб→PDF, готовый CSV — CSV ↔ JSON; эту страницу — когда источник всё ещё таблица на сайте.',
	tool_batch_convert_web_pages_to_excel_usecases_title: 'Когда это к месту',
};

export default ru;
