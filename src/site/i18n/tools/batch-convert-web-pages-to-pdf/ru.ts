/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / ru).
 * H1: Пакетно сохранить веб-страницы в PDF — местная формулировка, не калька Batch convert.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Вставьте по одному публичному адресу в строку, превратите каждую страницу в PDF A4 в этой вкладке, пропустите сбои и скачайте ZIP. Каждый URL запрашивается через сервер один раз и не хранится; преобразование остаётся на вашем устройстве.',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Скрытый кадр захвата страницы',
	tool_batch_convert_web_pages_to_pdf_clear: 'Очистить',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Файл',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Статус',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Конвертировать все',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Пакетно сохранить веб-страницы в PDF из списка URL и скачать ZIP; каждый адрес запрашивается один раз и не сохраняется.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Пакетно сохранить веб-страницы в PDF: вставьте https-адрес в каждую строку (до 10), получите A4 PDF в этой вкладке, пропустите ошибки, скачайте ZIP. Шаги: вставьте список, нажмите «Конвертировать все», проверьте таблицу, скачайте. Пример: две образцовые страницы справки и политики станут двумя PDF в одном ZIP. Каждый URL запрашивается у сервера один раз и не хранится; преобразование остаётся на устройстве. Для одного фрагмента HTML используйте «HTML в PDF».',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Скачать ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Сначала вставьте хотя бы один URL страницы.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Эту страницу не удалось сделать PDF. Пропущена.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте более новый.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'Библиотека преобразования не загрузилась. Обновите страницу и повторите.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'Не больше 10 URL. Лишние строки не добавлены.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Не удалось загрузить этот URL. Проверьте адрес или сайт блокирует запрос.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Эта строка не является корректным http(s) URL. Пропущена.',
	tool_batch_convert_web_pages_to_pdf_example:
		'«Загрузить пример» подставляет два URL example.com, собирает два PDF из локального HTML (без живого сайта) и включает «Скачать ZIP». «Конвертировать все» уже запрашивает адреса, которые вы вставили.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Пример',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'Преобразование идёт в этой вкладке. Для списка мы один раз отправляем каждый адрес на сервер, чтобы получить HTML, и не храним страницы. PDF создаются на вашем устройстве, ZIP собирается здесь.',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'Эта страница — для списка URL (несколько страниц в PDF, затем ZIP). Для одного HTML или адреса с предпросмотром используйте «HTML в PDF».',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Нет. Скрипты удаляются. Стены входа, paywall и JS-приложения редко совпадают с живым сайтом. Печатный CSS тоже может отличаться.',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Каждая успешная строка — отдельный PDF в одном ZIP. Мы не склеиваем их в один файл — после скачивания при необходимости используйте «Объединить файлы в один PDF».',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'До 10 http(s) URL. Остальное игнорируется. Сбойные строки пропускаются, чтобы партия продолжилась.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Страницы загружаются и хранятся на сервере?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Чем это отличается от «HTML в PDF»?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Страница с входом или тяжёлым JavaScript совпадёт с живым сайтом?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'На выходе один PDF или ZIP из нескольких?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'Сколько URL можно преобразовать за раз?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URL в очереди',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Вставьте список публичных страниц, преобразуйте их по очереди и заберите ZIP с удавшимися PDF.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'Вставьте по одному https URL в строку (справка и политики подходят).',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Оставьте ожидание около 1 секунды, если картинки в PDF не пустые.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Нажмите «Конвертировать все». Каждый публичный URL запрашивается один раз; сбои пропускаются.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'Нужен фрагмент HTML, а не список? Используйте «HTML в PDF».',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Скачайте ZIP, когда хотя бы одна строка удалась. «Загрузить пример» даёт две локальные страницы; во время конвертации видна панель хода.',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Как это работает',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Ход пакета',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: 'прошло {s} с',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Загрузка',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Картинки',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Один http(s) URL в строке, максимум 10. Последовательно. Сбои пропускаются. Удавшиеся PDF попадают в ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Каждый URL один раз уходит на сервер за HTML и не хранится. PDF собирается в этой вкладке.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Частные сети, вход и отсутствующие страницы ломают только эту строку. Остальные продолжают.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Одинаковые имена в ZIP становятся name (2).pdf. Скрипты снимаются до захвата.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Это не обход всего сайта. Вставляйте URL, которые у вас уже есть.',
	tool_batch_convert_web_pages_to_pdf_rules_title: 'Какие правила ждать',
	tool_batch_convert_web_pages_to_pdf_sample: 'Загрузить пример',
	tool_batch_convert_web_pages_to_pdf_status_done: 'Пакет готов — проверьте таблицу и скачайте ZIP.',
	tool_batch_convert_web_pages_to_pdf_status_fetching: 'Загрузка HTML…',
	tool_batch_convert_web_pages_to_pdf_status_ok: 'PDF готов',
	tool_batch_convert_web_pages_to_pdf_status_skip: 'Пропущено',
	tool_batch_convert_web_pages_to_pdf_status_waiting: 'Ждём окончания загрузки картинок…',
	tool_batch_convert_web_pages_to_pdf_status_converting:
		'Сборка PDF… вкладка может замереть на несколько секунд',
	tool_batch_convert_web_pages_to_pdf_status_queued: 'В очереди',
	tool_batch_convert_web_pages_to_pdf_status_working: 'Идёт пакетное преобразование…',
	tool_batch_convert_web_pages_to_pdf_summary_tpl: '{ok} готово · {skip} пропущено',
	tool_batch_convert_web_pages_to_pdf_title: 'Пакетно сохранить веб-страницы в PDF',
	tool_batch_convert_web_pages_to_pdf_url_hint:
		'Один публичный http(s) URL в строке, до 10. Мы запрашиваем каждую страницу один раз и переписываем CSS и картинки. Скрипты снимаются до PDF.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URL страниц (по одному в строке)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Сохранить несколько страниц справки или документации в PDF, не открывая каждую.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Сложить список URL публичных политик в ZIP, чтобы прочитать позже.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Вставка HTML остаётся в «HTML в PDF»; эта страница — когда ссылок уже много.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Подходящие задачи',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Дополнительные секунды после начала загрузки картинок. По умолчанию 1. Увеличьте, если в PDF пустые рамки.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Ожидание загрузки (с)',
};

export default ru;
