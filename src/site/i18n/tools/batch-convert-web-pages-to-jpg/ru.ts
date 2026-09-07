/**
 * i18n tool shard (batch-convert-web-pages-to-jpg / ru).
 * H1: Пакетно сохранить веб-страницы в JPG.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_batch_convert_web_pages_to_jpg_advanced_label: 'Дополнительные параметры (необязательно)',
	tool_batch_convert_web_pages_to_jpg_article:
		'Вставьте публичный адрес по одному в строке, сделайте JPEG с выбранной шириной, пропустите сбои и скачайте ZIP. Каждый URL запрашивается один раз через сервер и не сохраняется; картинка собирается в этой вкладке. Это снимок, не PDF формата A4.',
	tool_batch_convert_web_pages_to_jpg_capture_first: 'Только первый экран',
	tool_batch_convert_web_pages_to_jpg_capture_frame_title: 'Скрытая рамка захвата',
	tool_batch_convert_web_pages_to_jpg_capture_full: 'Вся страница',
	tool_batch_convert_web_pages_to_jpg_capture_label: 'Область снимка',
	tool_batch_convert_web_pages_to_jpg_clear: 'Очистить',
	tool_batch_convert_web_pages_to_jpg_col_file: 'Файл',
	tool_batch_convert_web_pages_to_jpg_col_status: 'Статус',
	tool_batch_convert_web_pages_to_jpg_col_url: 'URL',
	tool_batch_convert_web_pages_to_jpg_convert: 'Конвертировать всё',
	tool_batch_convert_web_pages_to_jpg_desc:
		'Пакетно сохраните веб-страницы в JPG из списка URL и скачайте ZIP. Каждый адрес запрашивается один раз и не хранится.',
	tool_batch_convert_web_pages_to_jpg_description:
		'Пакетно сохранить веб-страницы в JPG из списка URL (одной строки хватит). Выберите ширину и качество JPEG, всю страницу или первый экран, затем ZIP. Шаги: вставьте URL, Конвертировать всё, Скачать ZIP. Пример: две страницы помощи станут двумя JPEG. Каждый URL запрашивается один раз и не сохраняется.',
	tool_batch_convert_web_pages_to_jpg_download_zip: 'Скачать ZIP',
	tool_batch_convert_web_pages_to_jpg_empty: 'Сначала вставьте хотя бы один адрес страницы.',
	tool_batch_convert_web_pages_to_jpg_err_convert: 'Эту страницу не удалось сделать JPEG. Пропущена.',
	tool_batch_convert_web_pages_to_jpg_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте более новый.',
	tool_batch_convert_web_pages_to_jpg_err_load: 'Библиотека конвертации не загрузилась. Обновите страницу и повторите.',
	tool_batch_convert_web_pages_to_jpg_err_too_many: 'Не больше 10 URL. Лишние строки не добавлены.',
	tool_batch_convert_web_pages_to_jpg_err_url: 'Не удалось загрузить этот URL. Проверьте адрес или сайт блокирует запрос.',
	tool_batch_convert_web_pages_to_jpg_err_url_empty: 'Эта строка не является допустимым http(s) URL. Пропущена.',
	tool_batch_convert_web_pages_to_jpg_example:
		'Загрузить пример подставляет два URL example.com, собирает два JPEG из локального HTML (без живого сайта) и включает «Скачать ZIP». «Конвертировать всё» запрашивает адреса, которые вы вставили. Ширина, качество и вся страница vs первый экран меняют пиксели.',
	tool_batch_convert_web_pages_to_jpg_example_title: 'Пример',
	tool_batch_convert_web_pages_to_jpg_faq_a1:
		'Конвертация идёт в этой вкладке. Для списка мы один раз отправляем каждый адрес на сервер, чтобы получить HTML; страницы не храним. JPEG собираются на вашем устройстве и здесь упаковываются в ZIP.',
	tool_batch_convert_web_pages_to_jpg_faq_a2:
		'PDF-сосед режет на листы A4 для чтения и печати. Здесь по одному JPEG на URL с выбранной шириной (ПК 1280, планшет 768 или телефон 390), плюс качество и вся страница или первый экран. Тот же список, другой файл.',
	tool_batch_convert_web_pages_to_jpg_faq_a3:
		'PDF в JPG начинается с загруженного PDF-файла. Здесь вход — адреса страниц. Если PDF уже есть, берите PDF в JPG; если есть список ссылок — эту страницу.',
	tool_batch_convert_web_pages_to_jpg_faq_a4:
		'Нет. Скрипты удаляются. Стены входа, paywall и приложения на JavaScript часто не совпадают с живым сайтом. Адаптивный CSS следует выбранной ширине.',
	tool_batch_convert_web_pages_to_jpg_faq_a5:
		'Успешные строки — отдельные JPEG в одном ZIP. Один URL тоже работает. Картинки в один файл не склеиваются.',
	tool_batch_convert_web_pages_to_jpg_faq_a6:
		'Ширина окна меняет вёрстку (телефон vs ПК). Качество JPEG — компромисс размера и артефактов. Вся страница берёт высоту прокрутки (с потолком, чтобы вкладка не упала); первый экран примерно равен высоте окна.',
	tool_batch_convert_web_pages_to_jpg_faq_q1: 'Страницы загружаются и хранятся на сервере?',
	tool_batch_convert_web_pages_to_jpg_faq_q2: 'Чем это отличается от пакетного сохранения веб-страниц в PDF?',
	tool_batch_convert_web_pages_to_jpg_faq_q3: 'Чем это отличается от PDF в JPG?',
	tool_batch_convert_web_pages_to_jpg_faq_q4: 'Сайт с входом или тяжёлым JavaScript будет как вживую?',
	tool_batch_convert_web_pages_to_jpg_faq_q5: 'На выходе один JPG или ZIP? Можно ли один URL?',
	tool_batch_convert_web_pages_to_jpg_faq_q6: 'Что меняют ширина окна, качество JPEG и первый экран?',
	tool_batch_convert_web_pages_to_jpg_file_count_tpl: '{n} URL в очереди',
	tool_batch_convert_web_pages_to_jpg_how_body:
		'Вставьте список публичных страниц, нажмите «Конвертировать всё» (по умолчанию ПК 1280, JPEG 85 %, вся страница) и заберите ZIP удавшихся снимков.',
	tool_batch_convert_web_pages_to_jpg_how_item_1: 'Вставьте https URL по одному в строке (справка и тикеты подходят). Одной строки хватит, чтобы сделать картинку из URL.',
	tool_batch_convert_web_pages_to_jpg_how_item_2: 'Нажмите «Конвертировать всё». По умолчанию ПК 1280, JPEG 85 % и вся страница. Каждый публичный URL запрашивается один раз; сбои пропускаются.',
	tool_batch_convert_web_pages_to_jpg_how_item_3: 'Нужна ширина телефона, только первый экран или больше ожидания, если картинки пустые? Откройте дополнительные параметры: ширина, качество JPEG, область и ожидание загрузки.',
	tool_batch_convert_web_pages_to_jpg_how_item_4: 'Нужен печатный A4, а не скриншот? Пакетно сохранить веб-страницы в PDF. Уже есть PDF? PDF в JPG.',
	tool_batch_convert_web_pages_to_jpg_how_item_5: 'Скачайте ZIP, когда хотя бы одна строка удалась.',
	tool_batch_convert_web_pages_to_jpg_how_item_6:
		'Загрузить пример прогоняет две локальные страницы; панель прогресса видна во время конвертации.',
	tool_batch_convert_web_pages_to_jpg_how_title: 'Как это работает',
	tool_batch_convert_web_pages_to_jpg_hud_elapsed_tpl: 'прошло {s} с',
	tool_batch_convert_web_pages_to_jpg_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_jpg_hud_step_fetch: 'Запрос',
	tool_batch_convert_web_pages_to_jpg_hud_step_render: 'JPG',
	tool_batch_convert_web_pages_to_jpg_hud_step_wait: 'Картинки',
	tool_batch_convert_web_pages_to_jpg_hud_title: 'Ход пакета',
	tool_batch_convert_web_pages_to_jpg_opts_hint:
		'Ширина окна меняет вёрстку. Качество JPEG меняет размер файла. Вся страница — высокий снимок; первый экран примерно равен одному окну.',
	tool_batch_convert_web_pages_to_jpg_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_jpg_quality_high: '95%',
	tool_batch_convert_web_pages_to_jpg_quality_label: 'Качество JPEG',
	tool_batch_convert_web_pages_to_jpg_quality_low: '70%',
	tool_batch_convert_web_pages_to_jpg_quality_mid: '85%',
	tool_batch_convert_web_pages_to_jpg_rules_body:
		'Один http(s) URL в строке, до 10. Последовательно. Сбои пропускаются. Удавшиеся JPEG — в ZIP. Ширина, качество и область меняют пиксели: это не PDF с другим расширением.',
	tool_batch_convert_web_pages_to_jpg_rules_item_1:
		'Каждый URL один раз уходит на сервер за HTML и не сохраняется. JPEG собирается в этой вкладке.',
	tool_batch_convert_web_pages_to_jpg_rules_item_2:
		'Частные сети, вход и отсутствующие страницы валят эту строку. Остальной пакет идёт дальше.',
	tool_batch_convert_web_pages_to_jpg_rules_item_3:
		'Повторы в ZIP становятся name (2).jpg. Скрипты и ловушки noscript-обновления снимаются. Очень высокие главные режутся, чтобы холст не уронил вкладку.',
	tool_batch_convert_web_pages_to_jpg_rules_item_4:
		'Это не обход всего сайта. Вставьте URL, которые у вас уже есть.',
	tool_batch_convert_web_pages_to_jpg_rules_item_5:
		'Сравните с пакетным PDF: нет нарезки A4. С PDF в JPG: вход — список URL, не загрузка PDF. С пакетной конвертацией фото: вход — веб-страница, не локальный файл.',
	tool_batch_convert_web_pages_to_jpg_rules_title: 'Правила, которые стоит ждать',
	tool_batch_convert_web_pages_to_jpg_sample: 'Загрузить пример',
	tool_batch_convert_web_pages_to_jpg_status_converting: 'Рисуем JPEG… вкладка может замереть на несколько секунд',
	tool_batch_convert_web_pages_to_jpg_status_done: 'Пакет готов — проверьте таблицу и скачайте ZIP.',
	tool_batch_convert_web_pages_to_jpg_status_fetching: 'Запрашиваем HTML страницы…',
	tool_batch_convert_web_pages_to_jpg_status_ok: 'JPG готов',
	tool_batch_convert_web_pages_to_jpg_status_queued: 'В очереди',
	tool_batch_convert_web_pages_to_jpg_status_skip: 'Пропущено',
	tool_batch_convert_web_pages_to_jpg_status_waiting: 'Ждём окончания картинок…',
	tool_batch_convert_web_pages_to_jpg_status_working: 'Конвертируем пакет…',
	tool_batch_convert_web_pages_to_jpg_summary_tpl: '{ok} готово · {skip} пропущено',
	tool_batch_convert_web_pages_to_jpg_title: 'Пакетно сохранить веб-страницы в JPG',
	tool_batch_convert_web_pages_to_jpg_url_hint:
		'Один публичный http(s) URL в строке, до 10. Каждую страницу запрашиваем один раз и переписываем CSS и картинки. Скрипты снимаются до снимка.',
	tool_batch_convert_web_pages_to_jpg_url_label: 'Адреса страниц (по одному в строке)',
	tool_batch_convert_web_pages_to_jpg_url_placeholder: 'https://example.com/help/getting-started',
	tool_batch_convert_web_pages_to_jpg_usecase_1: 'Сбросьте несколько ссылок справки или тикетов и получите JPEG для чата, не открывая каждую вкладку.',
	tool_batch_convert_web_pages_to_jpg_usecase_2: 'Снимите одну публичную страницу на 390 (телефон) и 1280 (ПК), чтобы сравнить первый экран перед ревью.',
	tool_batch_convert_web_pages_to_jpg_usecase_3: 'A4-архив оставьте пакетному PDF; эту страницу берите, когда из списка URL нужны файлы картинок.',
	tool_batch_convert_web_pages_to_jpg_usecases_title: 'Куда это подходит',
	tool_batch_convert_web_pages_to_jpg_viewport_desktop: 'ПК 1280',
	tool_batch_convert_web_pages_to_jpg_viewport_label: 'Ширина окна',
	tool_batch_convert_web_pages_to_jpg_viewport_mobile: 'Телефон 390',
	tool_batch_convert_web_pages_to_jpg_viewport_tablet: 'Планшет 768',
	tool_batch_convert_web_pages_to_jpg_wait_hint:
		'Дополнительные секунды после начала загрузки картинок. По умолчанию 1. Поднимите, если в JPEG пустые рамки.',
	tool_batch_convert_web_pages_to_jpg_wait_label: 'Ожидание загрузки (с)',
};

export default ru;
