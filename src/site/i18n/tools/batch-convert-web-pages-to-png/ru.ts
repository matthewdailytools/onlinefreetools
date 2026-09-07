/**
 * i18n tool shard (batch-convert-web-pages-to-png / ru).
 * H1: Пакетно сохранить веб-страницы в PNG. IG vs JPG: PNG без потерь, чёткая рамка 1 px, опциональная прозрачность, 1×/2× — не качество JPEG и не A4.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_batch_convert_web_pages_to_png_advanced_label: 'Дополнительные настройки (по желанию)',
	tool_batch_convert_web_pages_to_png_article:
		'Каждый публичный URL становится PNG без потерь на выбранной ширине (рабочий стол 1280, планшет 768 или телефон 390). Белый или прозрачный фон, 1× или 2×, затем ZIP из удачных строк. Это скриншот интерфейса с чёткими краями, не JPEG для чата и не печать A4. Адрес запрашиваем один раз (HTML) и не храним. Сборка PNG идёт в этой вкладке. Меньший файл для пересылки: Пакетно сохранить веб-страницы в JPG.',
	tool_batch_convert_web_pages_to_png_bg_label: 'Фон',
	tool_batch_convert_web_pages_to_png_bg_transparent: 'Прозрачный',
	tool_batch_convert_web_pages_to_png_bg_white: 'Белый',
	tool_batch_convert_web_pages_to_png_capture_first: 'Первый экран',
	tool_batch_convert_web_pages_to_png_capture_frame_title: 'Скрытая рамка захвата',
	tool_batch_convert_web_pages_to_png_capture_full: 'Вся страница',
	tool_batch_convert_web_pages_to_png_capture_label: 'Область захвата',
	tool_batch_convert_web_pages_to_png_clear: 'Очистить',
	tool_batch_convert_web_pages_to_png_col_file: 'Файл',
	tool_batch_convert_web_pages_to_png_col_status: 'Статус',
	tool_batch_convert_web_pages_to_png_col_url: 'URL',
	tool_batch_convert_web_pages_to_png_convert: 'Конвертировать все',
	tool_batch_convert_web_pages_to_png_desc:
		'Список URL в PNG без потерь (прозрачный фон и 2× по желанию), ZIP. Не JPEG и не A4.',
	tool_batch_convert_web_pages_to_png_description:
		'Пакетно сохранить веб-страницы в PNG: скриншоты без потерь и ZIP из списка URL. Белый или прозрачный фон, 1× или 2×. Шаги: вставьте URL, Конвертировать все, Скачать ZIP. Пример: два UI выходят чёткими PNG. Одна строка — страница в PNG без потерь. Запрос один раз, не храним; конвертация в этой вкладке.',
	tool_batch_convert_web_pages_to_png_download_zip: 'Скачать ZIP',
	tool_batch_convert_web_pages_to_png_empty: 'Сначала вставьте хотя бы один публичный URL.',
	tool_batch_convert_web_pages_to_png_err_convert: 'Этот адрес не удалось сохранить в PNG. Пропущен.',
	tool_batch_convert_web_pages_to_png_err_fflate: 'Этот браузер не собрал ZIP. Попробуйте свежий браузер.',
	tool_batch_convert_web_pages_to_png_err_load: 'Библиотека конвертера не загрузилась. Обновите страницу и повторите.',
	tool_batch_convert_web_pages_to_png_err_too_many: 'Не больше 10 URL. Лишние строки не добавлены.',
	tool_batch_convert_web_pages_to_png_err_url: 'Не удалось загрузить этот URL. Проверьте адрес или сайт блокирует запрос.',
	tool_batch_convert_web_pages_to_png_err_url_empty: 'Эта строка не является допустимым http(s) URL. Пропущена.',
	tool_batch_convert_web_pages_to_png_example:
		'Загрузить пример подставляет kit компонентов и полупрозрачный слой, собирает два PNG во вкладке (чёткая рамка 1 px; при прозрачном фоне альфа сохраняется), не ходит на живой сайт, и включает Скачать ZIP. Конвертировать все запрашивает вставленные адреса. Ширина, фон, масштаб и вся страница vs первый экран меняют пиксели.',
	tool_batch_convert_web_pages_to_png_example_title: 'Пример',
	tool_batch_convert_web_pages_to_png_faq_a1:
		'Прозрачность видна только там, где у самой вёрстки есть альфа или нет сплошной заливки. Белая главная останется белой. 2× удваивает пиксели (проверка retina) и увеличивает файл. Сплошной цвет «насквозь» до шахматной сетки не пробьёшь.',
	tool_batch_convert_web_pages_to_png_faq_a2:
		'Инструмент JPG пишет JPEG с потерями (ползунок качества) для чата и билетов. Здесь lossless PNG: текст и рамка 1 px остаются острыми, плюс прозрачный PNG по желанию и 1×/2×. Тот же список URL, другой файл — без ползунка JPEG.',
	tool_batch_convert_web_pages_to_png_faq_a3:
		'Конвертация идёт в этой вкладке. Если вы конвертируете список, каждый адрес один раз уходит на наш сервер, чтобы скачать HTML; страницы мы не храним. PNG собираются в вашем браузере, ZIP тоже здесь — результат не загружается на сервер на хранение.',
	tool_batch_convert_web_pages_to_png_faq_a4:
		'Удачные строки — отдельные PNG в одном ZIP. Один URL тоже работает (страница в PNG без потерь / несколько URL в PNG): вставьте одну строку. Несколько картинок в один файл не склеиваются.',
	tool_batch_convert_web_pages_to_png_faq_a5:
		'Нет. Скрипты снимаются. Стены входа, paywall и приложения на JavaScript редко совпадают с авторизованным видом. Адаптивный CSS следует выбранной ширине.',
	tool_batch_convert_web_pages_to_png_faq_a6:
		'Пакетно сохранить веб-страницы в PDF режет на листы A4 для чтения и печати. Здесь один растр PNG на URL. Нужна печать — берите PDF-инструмент.',
	tool_batch_convert_web_pages_to_png_faq_q1: 'Когда виден прозрачный фон и что меняет 2×?',
	tool_batch_convert_web_pages_to_png_faq_q2: 'Чем это отличается от Пакетно сохранить веб-страницы в JPG?',
	tool_batch_convert_web_pages_to_png_faq_q3: 'Страницы загружаются на сервер и сохраняются?',
	tool_batch_convert_web_pages_to_png_faq_q4: 'На выходе один PNG или ZIP? Можно ли одну строку URL?',
	tool_batch_convert_web_pages_to_png_faq_q5: 'Совпадёт ли сайт с логином или тяжёлым JavaScript с живым видом?',
	tool_batch_convert_web_pages_to_png_faq_q6: 'Чем это отличается от Пакетно сохранить веб-страницы в PDF?',
	tool_batch_convert_web_pages_to_png_file_count_tpl: '{n} URL в очереди',
	tool_batch_convert_web_pages_to_png_how_body:
		'Сначала пакет в ZIP на стандартных настройках (рабочий стол 1280, белый фон, 1×, вся страница): вставьте адреса и нажмите Конвертировать все. 2× и прозрачный фон — потом, в дополнительных настройках.',
	tool_batch_convert_web_pages_to_png_how_item_1:
		'По одному https URL в строке (kit компонентов и открытые UI-доки подходят). Одна строка достаточна, чтобы сохранить страницу в PNG без потерь.',
	tool_batch_convert_web_pages_to_png_how_item_2:
		'Нажмите Конвертировать все. По умолчанию: 1280, белый, 1×, вся страница. Каждый публичный URL запрашивается один раз; сбои пропускаются.',
	tool_batch_convert_web_pages_to_png_how_item_3:
		'Нужны прозрачный фон, 2×, ширина телефона или только первый экран? Откройте Дополнительные настройки для ширины, фона, масштаба, области и ожидания загрузки.',
	tool_batch_convert_web_pages_to_png_how_item_4:
		'Меньший JPEG для чата: Пакетно сохранить веб-страницы в JPG. Печатный A4: Пакетно сохранить веб-страницы в PDF. Фото уже на устройстве: Конвертировать изображения в PNG пакетом.',
	tool_batch_convert_web_pages_to_png_how_item_5: 'Когда хотя бы одна строка готова, нажмите Скачать ZIP.',
	tool_batch_convert_web_pages_to_png_how_item_6:
		'Загрузить пример прогоняет два локальных UI; панель прогресса видна во время конвертации.',
	tool_batch_convert_web_pages_to_png_how_title: 'Как пользоваться',
	tool_batch_convert_web_pages_to_png_hud_elapsed_tpl: 'прошло {s} с',
	tool_batch_convert_web_pages_to_png_hud_pct_tpl: '{pct}%',
	tool_batch_convert_web_pages_to_png_hud_step_fetch: 'Запрос',
	tool_batch_convert_web_pages_to_png_hud_step_render: 'PNG',
	tool_batch_convert_web_pages_to_png_hud_step_wait: 'Картинки',
	tool_batch_convert_web_pages_to_png_hud_title: 'Ход пакета',
	tool_batch_convert_web_pages_to_png_opts_hint:
		'Ширина меняет вёрстку. Прозрачный фон сохраняет альфу. 2× удваивает пиксели. Вся страница — высокий снимок; первый экран примерно на высоту одного экрана.',
	tool_batch_convert_web_pages_to_png_progress_tpl: '{i} / {total}',
	tool_batch_convert_web_pages_to_png_rules_body:
		'Один http(s) URL в строке, до 10. Последовательно. Сбои пропускаются. Удачные PNG — в ZIP. Фон и масштаб меняют пиксели: это не JPEG с другим расширением и не PDF.',
	tool_batch_convert_web_pages_to_png_rules_item_1:
		'Каждый URL один раз уходит на наш сервер за HTML и не сохраняется. PNG собирается в этой вкладке.',
	tool_batch_convert_web_pages_to_png_rules_item_2:
		'Частные сети, логины и битые адреса валят только эту строку. Остальной пакет идёт дальше.',
	tool_batch_convert_web_pages_to_png_rules_item_3:
		'Одинаковые имена в ZIP становятся name (2).png. Скрипты и noscript-ловушки перезагрузки снимаются. Очень высокие снимки ограничены, чтобы вкладка не упала.',
	tool_batch_convert_web_pages_to_png_rules_item_4: 'Это не обход всего сайта. Вставляйте URL, которые у вас уже есть.',
	tool_batch_convert_web_pages_to_png_rules_item_5:
		'К JPG-пакету: PNG без потерь, без ползунка JPEG, опциональная прозрачность. К PDF-пакету: без нарезки A4. К пакету картинок в PNG: вход — веб-URL, не фото на устройстве.',
	tool_batch_convert_web_pages_to_png_rules_title: 'Правила и границы',
	tool_batch_convert_web_pages_to_png_sample: 'Загрузить пример',
	tool_batch_convert_web_pages_to_png_scale_1x: '1×',
	tool_batch_convert_web_pages_to_png_scale_2x: '2× (retina)',
	tool_batch_convert_web_pages_to_png_scale_label: 'Масштаб пикселей',
	tool_batch_convert_web_pages_to_png_status_converting: 'Рисуем PNG… вкладка может замереть на несколько секунд',
	tool_batch_convert_web_pages_to_png_status_done: 'Пакет готов — проверьте таблицу и скачайте ZIP.',
	tool_batch_convert_web_pages_to_png_status_fetching: 'Запрашиваем HTML…',
	tool_batch_convert_web_pages_to_png_status_ok: 'PNG готов',
	tool_batch_convert_web_pages_to_png_status_queued: 'В очереди',
	tool_batch_convert_web_pages_to_png_status_skip: 'Пропущен',
	tool_batch_convert_web_pages_to_png_status_waiting: 'Ждём окончания картинок…',
	tool_batch_convert_web_pages_to_png_status_working: 'Конвертируем пакет…',
	tool_batch_convert_web_pages_to_png_summary_tpl: '{ok} готово · {skip} пропущено',
	tool_batch_convert_web_pages_to_png_title: 'Пакетно сохранить веб-страницы в PNG',
	tool_batch_convert_web_pages_to_png_url_hint:
		'Один публичный http(s) URL в строке, до 10. Запрашиваем один раз и переписываем CSS и картинки. Скрипты снимаются до захвата. Вёрстка следует выбранной ширине.',
	tool_batch_convert_web_pages_to_png_url_label: 'URL (по одному в строке)',
	tool_batch_convert_web_pages_to_png_url_placeholder: 'https://example.com/ui/component-kit',
	tool_batch_convert_web_pages_to_png_usecase_1:
		'Сохранить kit компонентов как чёткий PNG: подписи и рамка 1 px читаются. JPEG смазывает края.',
	tool_batch_convert_web_pages_to_png_usecase_2:
		'Выгрузить плавающую панель прозрачным PNG и положить на фрейм в Figma. Сплошная белая главная останется непрозрачной.',
	tool_batch_convert_web_pages_to_png_usecase_3:
		'JPEG для чата оставьте в Пакетно сохранить веб-страницы в JPG, A4 — в Пакетно сохранить веб-страницы в PDF; здесь только lossless-растр интерфейса.',
	tool_batch_convert_web_pages_to_png_usecases_title: 'Когда это уместно',
	tool_batch_convert_web_pages_to_png_viewport_desktop: 'Рабочий стол 1280',
	tool_batch_convert_web_pages_to_png_viewport_label: 'Ширина вида',
	tool_batch_convert_web_pages_to_png_viewport_mobile: 'Телефон 390',
	tool_batch_convert_web_pages_to_png_viewport_tablet: 'Планшет 768',
	tool_batch_convert_web_pages_to_png_wait_hint:
		'Дополнительные секунды после того, как удалённые картинки начали грузиться. По умолчанию 1. Поднимите, если в PNG пустые рамки.',
	tool_batch_convert_web_pages_to_png_wait_label: 'Ожидание загрузки (с)',
};

export default ru;
