/**
 * i18n tool shard (batch-convert-web-pages-to-pdf / ru).
 * H1: Пакетно сохранить веб-страницы в PDF.
 * IG относительно JPG: A4 книжная с разрывами для печати, не скриншот вьюпорта.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_batch_convert_web_pages_to_pdf_article:
		'Вставьте публичные URL — каждая страница станет PDF A4 книжной ориентации, нарезанным для печати и чтения по страницам, а не бесконечным JPEG. Сбои пропускаются, удавшиеся файлы — в ZIP. Каждый адрес запрашивается один раз и не хранится. Скриншоты в чат или сравнение телефона и рабочего стола — «Пакетно сохранить веб-страницы в JPG».',
	tool_batch_convert_web_pages_to_pdf_capture_frame_title: 'Скрытый кадр захвата страницы',
	tool_batch_convert_web_pages_to_pdf_clear: 'Очистить',
	tool_batch_convert_web_pages_to_pdf_col_file: 'Файл',
	tool_batch_convert_web_pages_to_pdf_col_status: 'Статус',
	tool_batch_convert_web_pages_to_pdf_col_url: 'URL',
	tool_batch_convert_web_pages_to_pdf_convert: 'Конвертировать все',
	tool_batch_convert_web_pages_to_pdf_desc:
		'Сохраните список URL как печатные PDF A4 книжные — ZIP; это не скриншот страницы.',
	tool_batch_convert_web_pages_to_pdf_description:
		'Пакетно сохранить веб-страницы в PDF: список URL выходит A4 книжной с разрывами — для печати и листания, не высокий JPEG. Шаги: вставьте список, Конвертировать все, Скачать ZIP. Пример: две политики станут двумя PDF. Каждый URL запрашивается один раз и не хранится. Вставка HTML — «Конвертировать HTML в PDF».',
	tool_batch_convert_web_pages_to_pdf_download_zip: 'Скачать ZIP',
	tool_batch_convert_web_pages_to_pdf_empty: 'Сначала вставьте хотя бы один URL страницы.',
	tool_batch_convert_web_pages_to_pdf_err_convert: 'Эту страницу не удалось сделать PDF. Пропущена.',
	tool_batch_convert_web_pages_to_pdf_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте более новый.',
	tool_batch_convert_web_pages_to_pdf_err_load: 'Библиотека преобразования не загрузилась. Обновите и повторите.',
	tool_batch_convert_web_pages_to_pdf_err_too_many: 'Не больше 10 URL. Лишние строки не добавлены.',
	tool_batch_convert_web_pages_to_pdf_err_url: 'Этот URL не загрузился. Проверьте адрес или сайт блокирует запрос.',
	tool_batch_convert_web_pages_to_pdf_err_url_empty: 'Эта строка — не действительный http(s) URL. Пропущена.',
	tool_batch_convert_web_pages_to_pdf_example:
		'«Загрузить пример» заполняет справку и политику example.com, собирает два локальных A4 PDF с CSS-разрывом (без живого сайта) и включает Скачать ZIP. «Конвертировать все» запрашивает адреса, которые вы вставили. Печатный CSS сдвигает места разреза.',
	tool_batch_convert_web_pages_to_pdf_example_title: 'Пример',
	tool_batch_convert_web_pages_to_pdf_faq_a1:
		'Бумага всегда A4 книжная. Длинные страницы режутся CSS page-break (плюс старый запасной режим). Это не бесконечно высокая страница. Длинный скриншот — «Пакетно сохранить веб-страницы в JPG».',
	tool_batch_convert_web_pages_to_pdf_faq_a2:
		'JPG-сосед рисует один JPEG на URL при ширине 1280 / 768 / 390, с качеством и полной страницей или первым экраном. Здесь каждый URL режется на листы A4 для печати. Тот же список, другой артефакт.',
	tool_batch_convert_web_pages_to_pdf_faq_a3:
		'Эта страница — список URL: несколько публичных страниц → отдельные A4 PDF → ZIP. Для фрагмента HTML с предпросмотром — «Конвертировать HTML в PDF».',
	tool_batch_convert_web_pages_to_pdf_faq_a4:
		'Преобразование в этой вкладке. Каждый адрес один раз уходит на сервер за HTML; страницы не хранятся. PDF собирается на устройстве, ZIP — здесь.',
	tool_batch_convert_web_pages_to_pdf_faq_a5:
		'Каждая удачная строка — отдельный PDF в одном ZIP. Склеивать не будем — после скачивания «Объединить файлы в один PDF».',
	tool_batch_convert_web_pages_to_pdf_faq_a6:
		'Нет. Скрипты снимаются. Стены входа, paywall и JavaScript-приложения часто не совпадают с живым сайтом. Печатный CSS может сдвинуть разрывы.',
	tool_batch_convert_web_pages_to_pdf_faq_q1: 'Какой формат бумаги? Получится одна бесконечно длинная страница?',
	tool_batch_convert_web_pages_to_pdf_faq_q2: 'Чем это отличается от пакетного сохранения веб-страниц в JPG?',
	tool_batch_convert_web_pages_to_pdf_faq_q3: 'Чем это отличается от «Конвертировать HTML в PDF»?',
	tool_batch_convert_web_pages_to_pdf_faq_q4: 'Страницы загружаются и хранятся на сервере?',
	tool_batch_convert_web_pages_to_pdf_faq_q5: 'На выходе один PDF или ZIP из нескольких?',
	tool_batch_convert_web_pages_to_pdf_faq_q6: 'Страница с входом или тяжёлым JavaScript совпадёт с живым сайтом?',
	tool_batch_convert_web_pages_to_pdf_file_count_tpl: '{n} URL в очереди',
	tool_batch_convert_web_pages_to_pdf_how_body:
		'Вставьте публичные URL, которые нужно архивировать или напечатать, превратите их в A4 книжные PDF и заберите ZIP удавшихся файлов.',
	tool_batch_convert_web_pages_to_pdf_how_item_1: 'По одному https URL в строке. Политики, справка и публичные документы под печать подходят.',
	tool_batch_convert_web_pages_to_pdf_how_item_2: 'Оставьте ожидание около 1 секунды, если картинки на листе A4 не пустые.',
	tool_batch_convert_web_pages_to_pdf_how_item_3: 'Нажмите «Конвертировать все». Каждый публичный URL запрашивается один раз и верстается в A4 книжную (CSS-разрывы могут резать блоки). Сбои пропускаются.',
	tool_batch_convert_web_pages_to_pdf_how_item_4: 'HTML с предпросмотром — «Конвертировать HTML в PDF». Скриншот по ширине экрана, а не бумага — «Пакетно сохранить веб-страницы в JPG».',
	tool_batch_convert_web_pages_to_pdf_how_item_5:
		'Скачайте ZIP, когда хотя бы одна строка удалась. «Загрузить пример» проверяет две локальные A4 с CSS-разрывом.',
	tool_batch_convert_web_pages_to_pdf_how_item_6: 'Чтобы сшить несколько PDF в брошюру, сначала скачайте, затем «Объединить файлы в один PDF».',
	tool_batch_convert_web_pages_to_pdf_how_title: 'Как это работает',
	tool_batch_convert_web_pages_to_pdf_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_pdf_hud_title: 'Ход пакета',
	tool_batch_convert_web_pages_to_pdf_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_pdf_hud_elapsed_tpl: 'прошло {s} с',
	tool_batch_convert_web_pages_to_pdf_hud_step_fetch: 'Загрузка',
	tool_batch_convert_web_pages_to_pdf_hud_step_wait: 'Картинки',
	tool_batch_convert_web_pages_to_pdf_hud_step_render: 'PDF',
	tool_batch_convert_web_pages_to_pdf_rules_body:
		'Один http(s) URL в строке, максимум 10. Выход — A4 книжная с CSS-разрывами, не полностраничный JPEG. Последовательно. Сбои пропускаются. Удавшиеся PDF — в ZIP.',
	tool_batch_convert_web_pages_to_pdf_rules_item_1:
		'Каждый URL один раз уходит на сервер за HTML и не хранится. PDF собирается в этой вкладке на A4 книжной.',
	tool_batch_convert_web_pages_to_pdf_rules_item_2:
		'Разрывы следуют CSS (плюс старый запасной режим). Печатные стили могут отличаться от экрана. Очень высокие страницы обрезаются, чтобы вкладка не упала.',
	tool_batch_convert_web_pages_to_pdf_rules_item_3:
		'Частные сети, вход и отсутствующие страницы ломают только эту строку. Одинаковые имена в ZIP становятся name (2).pdf. Скрипты снимаются до захвата.',
	tool_batch_convert_web_pages_to_pdf_rules_item_4:
		'Это не обход всего сайта и не инструмент скриншотов. Вставляйте публичные URL, которые у вас уже есть.',
	tool_batch_convert_web_pages_to_pdf_rules_item_5:
		'Рядом с пакетным JPG: один JPEG выбранной ширины. Рядом с HTML в PDF: вставленный HTML. Рядом с «Объединить файлы в один PDF»: здесь выходы не склеиваются.',
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
		'Один публичный http(s) URL в строке, до 10. Мы запрашиваем каждую страницу один раз и переписываем CSS и картинки. Скрипты снимаются; результат — A4 книжная с CSS-разрывами.',
	tool_batch_convert_web_pages_to_pdf_url_label: 'URL страниц (по одному в строке)',
	tool_batch_convert_web_pages_to_pdf_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_pdf_usecase_1: 'Перед встречей сохраните несколько справок или публичных документов как печатные A4 PDF, не открывая Печать в каждой вкладке.',
	tool_batch_convert_web_pages_to_pdf_usecase_2: 'Сложите политики, условия или объявления в ZIP, чтобы потом читать офлайн или приложить к письму.',
	tool_batch_convert_web_pages_to_pdf_usecase_3: 'Вставка HTML остаётся в «Конвертировать HTML в PDF». Скриншоты в чат и сравнение телефона/ПК — у JPG. Здесь печатный архив из списка URL.',
	tool_batch_convert_web_pages_to_pdf_usecases_title: 'Подходящие задачи',
	tool_batch_convert_web_pages_to_pdf_wait_hint:
		'Дополнительные секунды после начала загрузки картинок на каждом листе A4. По умолчанию 1. Увеличьте, если в PDF пустые рамки.',
	tool_batch_convert_web_pages_to_pdf_wait_label: 'Ожидание загрузки (с)',
};

export default ru;
