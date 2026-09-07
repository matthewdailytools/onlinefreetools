/**
 * i18n tool shard (convert-html-web-pages-to-word-document / ru).
 * H1: Преобразовать HTML-страницы в документ Word.
 * IG: редактируемые заголовки/списки/таблицы Word — не A4 PDF, не скриншот, не PDF→Word, не картинки→Word.
 */
import type { SiteLangDict } from '../../../types';

/** Видимые строки конвертера HTML→Word (ru). */
const ru: SiteLangDict = {
	tool_convert_html_web_pages_to_word_document_advanced_label: 'Дополнительные настройки (по желанию)',
	tool_convert_html_web_pages_to_word_document_article:
		'Вставьте HTML или публичный адрес — получите .docx, который можно править: заголовки, списки, таблицы и ссылки становятся стилями Word. Это не PDF для печати A4 и не снимок экрана. Вставленный HTML остаётся во вкладке и не уходит на сервер. URL запрашивается один раз и не сохраняется. Печать: «Конвертировать HTML в PDF». Уже есть PDF: «Превратить PDF в документ Word».',
	tool_convert_html_web_pages_to_word_document_clear: 'Очистить',
	tool_convert_html_web_pages_to_word_document_convert: 'Конвертировать',
	tool_convert_html_web_pages_to_word_document_desc:
		'Вставьте HTML или заберите URL в редактируемый Word — не PDF и не скриншот.',
	tool_convert_html_web_pages_to_word_document_description:
		'Преобразовать HTML-страницы в документ Word (HTML в Word / HTML в DOCX): вставьте код или URL и получите редактируемый .docx, не PDF A4. Шаги: вставить или забрать, Конвертировать, Скачать. Пример: заметки о выпуске с таблицей становятся стилями Word. Вставленный HTML остаётся во вкладке; URL запрашивается один раз и не хранится.',
	tool_convert_html_web_pages_to_word_document_download: 'Скачать',
	tool_convert_html_web_pages_to_word_document_empty: 'Сначала вставьте HTML или укажите публичный URL.',
	tool_convert_html_web_pages_to_word_document_err_convert: 'Не удалось собрать Word из этого HTML. Проверьте разметку и повторите.',
	tool_convert_html_web_pages_to_word_document_err_load: 'Библиотека Word не загрузилась. Обновите страницу и попробуйте снова.',
	tool_convert_html_web_pages_to_word_document_err_url: 'Не удалось загрузить этот URL. Проверьте адрес — или сайт блокирует запрос.',
	tool_convert_html_web_pages_to_word_document_err_url_empty: 'Сначала укажите корректный http(s) URL.',
	tool_convert_html_web_pages_to_word_document_example:
		'«Загрузить пример» подставляет HTML заметок о выпуске (H1, список, таблица из двух колонок, ссылка), запускает Конвертировать и включает Скачать. В .docx настоящие стили заголовка и таблицы — текст можно править. Во вкладке URL Конвертировать забирает живой адрес.',
	tool_convert_html_web_pages_to_word_document_example_title: 'Пример',
	tool_convert_html_web_pages_to_word_document_faq_a1:
		'Да. Вкладка URL, один https, затем Конвертировать. Скрипты снимаются. Стены входа и JS-приложения часто не совпадают с живым сайтом. CSS-вёрстка не воспроизводится пиксель в пиксель.',
	tool_convert_html_web_pages_to_word_document_faq_a2:
		'Скачивается .docx (HTML в DOCX). Откройте в Word или редакторе Office Open XML. Это не двоичный .doc и не .mhtml из Chrome.',
	tool_convert_html_web_pages_to_word_document_faq_a3:
		'«Конвертировать HTML в PDF» режет на листы A4 для печати. Здесь HTML становится абзацами, заголовками, списками и таблицами, которые можно править. Тот же HTML, другой файл.',
	tool_convert_html_web_pages_to_word_document_faq_a4:
		'«Превратить PDF в документ Word» начинается с PDF и текстового слоя. Здесь — с вставленного HTML или URL. Если PDF уже есть, берите тот инструмент.',
	tool_convert_html_web_pages_to_word_document_faq_a5:
		'Вставленный HTML не покидает вкладку и не загружается на сервер. При URL мы один раз отправляем адрес, чтобы забрать HTML, и не сохраняем его. .docx собирается в браузере.',
	tool_convert_html_web_pages_to_word_document_faq_a6:
		'Нет. Экспортируйте или скопируйте HTML. Полное сохранение Chrome / MHTML — другой формат, здесь не разбирается.',
	tool_convert_html_web_pages_to_word_document_faq_q1: 'Можно ли конвертировать URL (веб-страница в Word)?',
	tool_convert_html_web_pages_to_word_document_faq_q2: 'Результат — HTML в Word / файл .docx?',
	tool_convert_html_web_pages_to_word_document_faq_q3: 'Чем это отличается от «Конвертировать HTML в PDF»?',
	tool_convert_html_web_pages_to_word_document_faq_q4: 'Чем это отличается от «Превратить PDF в документ Word»?',
	tool_convert_html_web_pages_to_word_document_faq_q5: 'Загружаются ли HTML или URL на сервер и хранятся?',
	tool_convert_html_web_pages_to_word_document_faq_q6: 'Можно ли конвертировать .mhtml из Chrome?',
	tool_convert_html_web_pages_to_word_document_how_body:
		'Сначала заголовки и таблицы становятся стилями Word, затем Скачать отдаёт редактируемый .docx. HTML в Word — не картинка экрана.',
	tool_convert_html_web_pages_to_word_document_how_item_1:
		'Свой код — вкладка «Вставить HTML». Публичный https (веб-страница в Word) — вкладка URL.',
	tool_convert_html_web_pages_to_word_document_how_item_2:
		'Нажмите Конвертировать. Скрипты снимаются. Заголовки, списки, таблицы, ссылки попадают в Word. Сломанные картинки пропускаются.',
	tool_convert_html_web_pages_to_word_document_how_item_3:
		'Нужны <img> из HTML? Откройте дополнительные настройки — «Включать изображения» включено по умолчанию; заблокированные картинки всё равно пропускаются.',
	tool_convert_html_web_pages_to_word_document_how_item_4:
		'Печать A4: «Конвертировать HTML в PDF». Скриншот: пакетно сохранить веб-страницы в PNG или JPG. Уже PDF: «Превратить PDF в документ Word».',
	tool_convert_html_web_pages_to_word_document_how_item_5: 'После успешного Конвертировать нажмите Скачать. Откройте .docx и правьте текст.',
	tool_convert_html_web_pages_to_word_document_how_title: 'Как это работает',
	tool_convert_html_web_pages_to_word_document_html_hint:
		'Фрагмент или полный HTML. Скрипты снимаются до конвертации. CSS-макет не воссоздаётся пиксель в пиксель.',
	tool_convert_html_web_pages_to_word_document_html_label: 'HTML',
	tool_convert_html_web_pages_to_word_document_html_placeholder: '<h1>Заметки о выпуске</h1><p>Вставьте HTML сюда…</p>',
	tool_convert_html_web_pages_to_word_document_imgs_hint:
		'Если включено, читаемые <img> пытаемся встроить. Битые и заблокированные пропускаем. Выключите для текстового Word.',
	tool_convert_html_web_pages_to_word_document_imgs_label: 'Включать изображения',
	tool_convert_html_web_pages_to_word_document_opts_hint:
		'«Включать изображения» пытается встроить картинки из HTML. CSS-позиционирование не мапится. На выходе всегда один .docx.',
	tool_convert_html_web_pages_to_word_document_rules_body:
		'Одно Конвертировать — один .docx. Мапятся заголовки, абзацы, списки, таблицы, ссылки и необязательные картинки. Абсолютный CSS, фиксированные панели и скрипты — нет.',
	tool_convert_html_web_pages_to_word_document_rules_item_1:
		'Вставленный HTML остаётся во вкладке, без загрузки на сервер. URL запрашивается один раз и не сохраняется.',
	tool_convert_html_web_pages_to_word_document_rules_item_2:
		'h1–h6 становятся заголовками Word. ul/ol — списками. table — таблицей. a — гиперссылкой.',
	tool_convert_html_web_pages_to_word_document_rules_item_3:
		'Стены входа, JS-приложения и print-CSS часто расходятся с живым сайтом. Это не растр скриншота.',
	tool_convert_html_web_pages_to_word_document_rules_item_4:
		'Против HTML в PDF: редактируемый Word, не листы A4. Против PDF в Word: вход — HTML или URL, не загрузка PDF. Против «Изображения в Word»: вход — разметка, не стопка фото.',
	tool_convert_html_web_pages_to_word_document_rules_title: 'Правила, которых стоит ждать',
	tool_convert_html_web_pages_to_word_document_sample: 'Загрузить пример',
	tool_convert_html_web_pages_to_word_document_status_done: 'Word готов — скачайте .docx и правьте.',
	tool_convert_html_web_pages_to_word_document_status_fetching: 'Забираем HTML по URL…',
	tool_convert_html_web_pages_to_word_document_status_working: 'Собираем документ Word…',
	tool_convert_html_web_pages_to_word_document_tab_html: 'Вставить HTML',
	tool_convert_html_web_pages_to_word_document_tab_url: 'URL',
	tool_convert_html_web_pages_to_word_document_title: 'Преобразовать HTML-страницы в документ Word',
	tool_convert_html_web_pages_to_word_document_url_hint:
		'Один публичный http(s) URL. HTML забираем один раз и переписываем CSS/картинки. Скрипты снимаются до маппинга в Word.',
	tool_convert_html_web_pages_to_word_document_url_label: 'URL',
	tool_convert_html_web_pages_to_word_document_url_placeholder: 'https://example.com/help/release-notes',
	tool_convert_html_web_pages_to_word_document_usecase_1:
		'Забрать публичный URL заметок о выпуске и оставить таблицу настоящей таблицей Word.',
	tool_convert_html_web_pages_to_word_document_usecase_2:
		'Печать A4 оставить в HTML→PDF, скриншоты — в пакетном PNG; сюда — когда нужен редактируемый .docx.',
	tool_convert_html_web_pages_to_word_document_usecase_3:
		'Сделать из HTML экспорта справки черновик, который юристы могут комментировать: заголовки остаются заголовками.',
	tool_convert_html_web_pages_to_word_document_usecases_title: 'Когда это к месту',
};

export default ru;
