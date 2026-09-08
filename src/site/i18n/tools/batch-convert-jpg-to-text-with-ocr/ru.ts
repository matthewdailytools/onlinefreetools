/**
 * i18n tool shard (batch-convert-jpg-to-text-with-ocr / ru).
 * 当地主词：Пакетно преобразовать JPG в текст с помощью OCR.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_batch_convert_jpg_to_text_with_ocr_advanced: 'Дополнительные настройки (по желанию)',
	tool_batch_convert_jpg_to_text_with_ocr_article:
		'Сбросьте несколько печатных фото или скриншотов, нажмите «Преобразовать всё» и скачайте ZIP. Каждое фото — свой .txt; объединённый файл разделяет их именами. Размытый кадр пропускается. Файлы остаются на устройстве, без загрузки на сервер. Одно фото? Возьмите «Преобразовать JPG в текст с помощью OCR».',
	tool_batch_convert_jpg_to_text_with_ocr_choose_files: 'Выберите JPG, PNG или WebP',
	tool_batch_convert_jpg_to_text_with_ocr_clear: 'Очистить',
	tool_batch_convert_jpg_to_text_with_ocr_col_chars: 'Заметки',
	tool_batch_convert_jpg_to_text_with_ocr_col_name: 'Файл',
	tool_batch_convert_jpg_to_text_with_ocr_col_pixels: 'Пиксели',
	tool_batch_convert_jpg_to_text_with_ocr_col_status: 'Статус',
	tool_batch_convert_jpg_to_text_with_ocr_combined_hint:
		'Включено по умолчанию. В ZIP будет combined.txt с --- имя --- между фото.',
	tool_batch_convert_jpg_to_text_with_ocr_combined_label: 'Добавить combined.txt в ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_convert_all: 'Преобразовать всё',
	tool_batch_convert_jpg_to_text_with_ocr_copied: 'Скопировано.',
	tool_batch_convert_jpg_to_text_with_ocr_copy_combined: 'Копировать объединённый текст',
	tool_batch_convert_jpg_to_text_with_ocr_count_tpl: '{n} файлов (макс. 10)',
	tool_batch_convert_jpg_to_text_with_ocr_desc:
		'Пакетно преобразуйте JPG в текст с OCR: очередь, «Преобразовать всё», ZIP — на устройстве, без загрузки на сервер.',
	tool_batch_convert_jpg_to_text_with_ocr_description:
		'Сбросьте несколько JPG или скриншотов и скачайте ZIP с текстами. Распознавание идёт в этой вкладке, кадр за кадром, без загрузки на сервер. Шаги: добавить снимки, Преобразовать всё, Скачать ZIP. Пример: два печатных образца становятся двумя TXT плюс объединённый файл. Также ищут как пакетный OCR. Одно фото — страница одного JPG.',
	tool_batch_convert_jpg_to_text_with_ocr_download_zip: 'Скачать ZIP',
	tool_batch_convert_jpg_to_text_with_ocr_drop_hint: 'Перетащите несколько фото сюда (макс. 10). Обработка остаётся во вкладке.',
	tool_batch_convert_jpg_to_text_with_ocr_empty: 'Сначала добавьте фото.',
	tool_batch_convert_jpg_to_text_with_ocr_err_empty:
		'Печатного текста нет. Пропущено. Возьмите более чёткую страницу, не рукопись.',
	tool_batch_convert_jpg_to_text_with_ocr_err_engine:
		'Движок OCR не загрузился. Обновите страницу и нажмите «Преобразовать всё». Готовые строки можно скачать.',
	tool_batch_convert_jpg_to_text_with_ocr_err_fflate: 'Не удалось собрать ZIP в этом браузере. Попробуйте свежий.',
	tool_batch_convert_jpg_to_text_with_ocr_err_load: 'Не прочитать изображение. Нужны JPEG, PNG или WebP. Пропущено.',
	tool_batch_convert_jpg_to_text_with_ocr_err_pdf: 'Эта страница читает фото, не PDF. Файл в очередь не попал.',
	tool_batch_convert_jpg_to_text_with_ocr_err_size: 'Больше 12 МБ. Сожмите или обрежьте. Пропущено.',
	tool_batch_convert_jpg_to_text_with_ocr_err_too_many: 'Не больше 10 фото. Остальные не добавлены.',
	tool_batch_convert_jpg_to_text_with_ocr_example:
		'«Загрузить пример» добавляет sample-1.jpg и sample-2.jpg, запускает «Преобразовать всё» и включает ZIP с двумя TXT и combined.txt.',
	tool_batch_convert_jpg_to_text_with_ocr_example_title: 'Пример',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a1:
		'Нет. Фото остаются во вкладке. Скрипты движка и ZIP — с этого сайта; на наши серверы файлы не уходят.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a2:
		'Страница одного JPG копирует один текст. Здесь очередь: «Преобразовать всё», пропуск сбоя, ZIP. Тот же движок, другая задача.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a3:
		'Нет. Этот кадр пропускается, остальные идут дальше. Успешное попадает в ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a4:
		'По .txt на фото, имя как у исходника. Combined.txt по умолчанию, с --- имя --- между страницами — так несколько JPG становятся текстом за одну загрузку.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a5:
		'Для одного кадра — «Преобразовать JPG в текст с помощью OCR». Здесь кнопки «Преобразовать всё» и «Скачать ZIP».',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a6: 'Да. JPEG, PNG и WebP в одной очереди, без отдельного URL.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a7:
		'Печать работает лучше. Рукопись часто падает на этой строке. Это не услуга выездного сканирования.',
	tool_batch_convert_jpg_to_text_with_ocr_faq_a8:
		'Без PDF, Word и таблиц. Цифровой PDF со слоем текста — «Извлечь текст из PDF».',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q1: 'Загружаются ли фото на сервер?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q2: 'Чем это отличается от OCR одного JPG?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q3: 'Если одно фото сбойнет, весь пакет остановится?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q4: 'Что внутри ZIP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q5: 'У меня одно фото. Можно ли этой страницей?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q6: 'Можно ли пакетом PNG или скриншоты WebP?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q7: 'Подойдёт ли рукопись или услуга сканирования?',
	tool_batch_convert_jpg_to_text_with_ocr_faq_q8: 'Можно ли бросить отсканированный PDF?',
	tool_batch_convert_jpg_to_text_with_ocr_how_body:
		'Сделайте из стопки печатных фото ZIP с текстами: добавьте снимки, нажмите «Преобразовать всё» (движок грузится при первом клике и читает кадр за кадром), затем «Скачать ZIP» или скопируйте объединённый текст.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_1: 'Перетащите несколько JPG, PNG или WebP (или выберите файлы).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_2:
		'По желанию: язык для всего пакета (китайский и английский по умолчанию).',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_3:
		'Нажмите «Преобразовать всё» — первый запуск грузит движок в этой вкладке и читает фото одно за другим. Сбойный кадр пропускается.',
	tool_batch_convert_jpg_to_text_with_ocr_how_item_4:
		'Нажмите «Скачать ZIP» (TXT на каждое фото плюс объединённый файл) или «Копировать объединённый текст».',
	tool_batch_convert_jpg_to_text_with_ocr_how_title: 'Как это работает',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ar: 'Арабский',
	tool_batch_convert_jpg_to_text_with_ocr_lang_en: 'Английский',
	tool_batch_convert_jpg_to_text_with_ocr_lang_ja: 'Японский',
	tool_batch_convert_jpg_to_text_with_ocr_lang_legend: 'Язык распознавания для всего пакета',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh: 'Китайский',
	tool_batch_convert_jpg_to_text_with_ocr_lang_zh_en: 'Китайский + английский',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge: 'Самая длинная сторона до чтения (px)',
	tool_batch_convert_jpg_to_text_with_ocr_max_edge_hint: 'По умолчанию 2048. На телефоне меньше — легче памяти.',
	tool_batch_convert_jpg_to_text_with_ocr_preview_label: 'Просмотр объединённого текста',
	tool_batch_convert_jpg_to_text_with_ocr_rules_body:
		'До 10 фото. Если длинная сторона больше лимита — уменьшаем. Один OCR-worker читает по очереди. Сбойная строка пропускается; удачный текст идёт в ZIP.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_1:
		'Имена в ZIP как у исходников. Combined.txt (вкл.) вставляет --- имя --- между фото, как снятый буклет.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_2:
		'Файлы остаются на устройстве и не загружаются на сервер. Скрипты — с этого сайта.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_3:
		'Рукопись, сильное размытие и сильная перспектива часто падают на этой строке. Таблицы — в порядке чтения, не CSV.',
	tool_batch_convert_jpg_to_text_with_ocr_rules_item_4:
		'Без PDF, Word и searchable PDF. Одно фото с копированием — на «Преобразовать JPG в текст с помощью OCR».',
	tool_batch_convert_jpg_to_text_with_ocr_rules_title: 'Чего ожидать',
	tool_batch_convert_jpg_to_text_with_ocr_sample: 'Загрузить пример',
	tool_batch_convert_jpg_to_text_with_ocr_st_done: 'Готово',
	tool_batch_convert_jpg_to_text_with_ocr_st_queued: 'В очереди',
	tool_batch_convert_jpg_to_text_with_ocr_st_reading: 'Чтение',
	tool_batch_convert_jpg_to_text_with_ocr_st_skipped: 'Пропущено',
	tool_batch_convert_jpg_to_text_with_ocr_status_done: 'Готово.',
	tool_batch_convert_jpg_to_text_with_ocr_status_loading: 'Загрузка движка OCR…',
	tool_batch_convert_jpg_to_text_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_text_with_ocr_title: 'Пакетно преобразовать JPG в текст с помощью OCR',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_1: 'Снимите несколько страниц раздатки и скачайте ZIP TXT в заметки.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_2:
		'Пакет скриншотов чата или ошибок, когда пиксели нельзя выделить.',
	tool_batch_convert_jpg_to_text_with_ocr_usecase_3:
		'Соберите фото меню в combined.txt с разделителями имён и скопируйте для правки.',
	tool_batch_convert_jpg_to_text_with_ocr_usecases_title: 'Когда это кстати',
};

export default ru;
