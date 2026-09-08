/**
 * i18n tool shard (batch-convert-jpg-to-editable-word-with-ocr / ru).
 * Локальный заголовок: Пакетно преобразовать JPG в редактируемый Word с помощью OCR.
 */
import type { SiteLangDict } from '../../../types';

const ru: SiteLangDict = {
	tool_batch_convert_jpg_to_editable_word_with_ocr_advanced: 'Дополнительно (по желанию)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_article:
		'Перетащите несколько печатных фото или скриншотов, нажмите «Преобразовать всё», затем «Скачать Word». Каждый снимок — раздел с заголовком-именем файла и текстом, который можно править; исходное фото сверху по умолчанию, чтобы свериться. Размытый кадр пропускается. Файлы остаются на устройстве, на сервер не уходят. Нужен ZIP с TXT — страница «Пакетно преобразовать JPG в текст с помощью OCR».',
	tool_batch_convert_jpg_to_editable_word_with_ocr_choose_files: 'Выберите JPG, PNG или WebP',
	tool_batch_convert_jpg_to_editable_word_with_ocr_clear: 'Очистить',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_chars: 'Заметки',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_name: 'Файл',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_pixels: 'Пиксели',
	tool_batch_convert_jpg_to_editable_word_with_ocr_col_status: 'Статус',
	tool_batch_convert_jpg_to_editable_word_with_ocr_convert_all: 'Преобразовать всё',
	tool_batch_convert_jpg_to_editable_word_with_ocr_count_tpl: '{n} файлов (макс. 10)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_desc:
		'Пакетно преобразовать JPG в редактируемый Word с помощью OCR: очередь, Преобразовать всё, Скачать Word — остаётся на устройстве, на сервер не уходит.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_description:
		'Перетащите несколько JPG и скачайте один Word, который можно править. Распознавание идёт в этой вкладке, снимок за снимком; файлы остаются на устройстве и на сервер не уходят. Шаги: добавить изображения, Преобразовать всё, Скачать Word. Пример: два печатных образца станут двумя разделами с заголовками и необязательным фото. Ищут также как JPG в Word с OCR. Неудачный снимок пропускается. ZIP с текстом — на странице пакетного TXT.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_download_word: 'Скачать Word',
	tool_batch_convert_jpg_to_editable_word_with_ocr_drop_hint: 'Перетащите несколько фото сюда (макс. 10). Обработка остаётся во вкладке.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_empty: 'Сначала добавьте фото.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_docx: 'Этот браузер не собрал Word. Попробуйте более новый.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_empty:
		'Печатный текст не найден. Пропущен. Возьмите более чёткую печатную страницу, не рукопись.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_engine:
		'Движок OCR не загрузился. Обновите страницу и снова Преобразовать всё. Готовые разделы по-прежнему можно скачать.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_load: 'Не удалось прочитать изображение. Используйте JPEG, PNG или WebP. Пропущено.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_pdf: 'Эта страница читает фото, не PDF. Файл не добавлен.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_size: 'Больше 12 МБ. Сначала сожмите или обрежьте. Пропущено.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_err_too_many: 'Не больше 10 фото. Лишние не добавлены.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example:
		'«Загрузить пример» добавляет sample-1.jpg (ONLINEFREETOOLS и The quick brown fox) и sample-2.jpg (SAMPLE TWO и 印刷体样例), запускает Преобразовать всё и включает Скачать Word с двумя озаглавленными разделами.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_example_title: 'Пример',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a1:
		'Нет. Фото остаются в этой вкладке. Движок и скрипт Word грузятся с этого сайта; файлы на наши серверы не уходят.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a2:
		'«Пакетно преобразовать JPG в текст с помощью OCR» скачивает ZIP из TXT. Здесь собирается один редактируемый Word, раздел на фото. Движок тот же, задача другая.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a3:
		'«Изображения в Word» вставляет фото как рисунки — буквы не выделить. Здесь OCR пишет абзацы, которые можно править. Исходное фото необязательно, для сверки.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a4:
		'Нет. Этот снимок пропускается, остальные попадают в тот же Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a5:
		'Каждое удачное фото — раздел: заголовок — имя файла, затем необязательное фото, абзацы OCR и разрыв страницы. Колонки и таблицы не копируют исходную вёрстку.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a6:
		'Нет. Эта страница не принимает PDF. Сканы — на «Пакетно преобразовать отсканированные PDF в Word с помощью OCR». Цифровой PDF со слоем текста — «Превратить PDF в документ Word».',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a7:
		'Печатный шрифт надёжнее. Рукописный курсив часто срывается на этой строке. Это не продукт для рукописи.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_a8:
		'Да. JPEG, PNG и WebP в одной очереди. Даже одно фото качает Word, не TXT. Для одного снимка в текст — «Преобразовать JPG в текст с OCR».',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q1: 'Фото загружаются на сервер?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q2: 'Чем это отличается от пакетного JPG в текст с OCR?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q3: 'Чем это отличается от «Изображения в Word»?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q4: 'Если один снимок сорвался, Word будет пустым?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q5: 'Как выглядит каждый раздел в Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q6: 'Можно ли бросить сканированный PDF для OCR в Word?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q7: 'Работает ли рукопись?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_faq_q8: 'Можно PNG или только один JPG?',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_body:
		'Соберите стопку печатных фото в один редактируемый Word: добавьте изображения, нажмите Преобразовать всё (движок грузится при первом клике и читает снимок за снимком), затем Скачать Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_1: 'Перетащите несколько JPG, PNG или WebP (или выберите файлы).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_2:
		'По желанию: выберите чип языка для всей пачки (по умолчанию китайский и английский).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_3:
		'Нажмите Преобразовать всё — первый запуск грузит OCR в этой вкладке, дальше читает снимок за снимком. Неудачный кадр пропускается.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_item_4:
		'Нажмите Скачать Word — один документ, раздел на фото (заголовок, необязательное фото, редактируемый текст).',
	tool_batch_convert_jpg_to_editable_word_with_ocr_how_title: 'Как это работает',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ar: 'Арабский',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_en: 'Английский',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_ja: 'Японский',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_legend: 'Язык распознавания для всей пачки',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh: 'Китайский',
	tool_batch_convert_jpg_to_editable_word_with_ocr_lang_zh_en: 'Китайский + английский',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge: 'Самая длинная сторона перед чтением (px)',
	tool_batch_convert_jpg_to_editable_word_with_ocr_max_edge_hint: 'По умолчанию 2048. Меньше — легче на телефоне.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_hint:
		'Включено по умолчанию. В каждом разделе фото над абзацами OCR, чтобы свериться в Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_photo_label: 'Вставить исходное фото над текстом',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_body:
		'Очередь до 10 файлов. Если длинная сторона больше лимита, уменьшаем и читаем в визуальном порядке. Один OCR-воркер идёт последовательно. Сбойная строка пропускается; удачные становятся разделами одного Word.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_1:
		'Каждое удачное фото — раздел Word: заголовок 1 — имя файла, затем необязательное фото, абзацы OCR и разрыв страницы. Это JPG в Word с OCR для стопки, не ZIP из TXT.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_2:
		'Файлы остаются на устройстве и на сервер не уходят. Скрипты грузятся с этого сайта.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_3:
		'Рукопись, сильное размытие и сильная перспектива часто срываются на этой строке. Таблицы становятся строками в порядке чтения. Колонки не копируют исходную страницу.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_item_4:
		'Без PDF. ZIP из TXT — на «Пакетно преобразовать JPG в текст с помощью OCR». Фото без OCR — на «Изображения в Word».',
	tool_batch_convert_jpg_to_editable_word_with_ocr_rules_title: 'Чего ожидать',
	tool_batch_convert_jpg_to_editable_word_with_ocr_sample: 'Загрузить пример',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_done: 'Готово',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_queued: 'В очереди',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_reading: 'Читает',
	tool_batch_convert_jpg_to_editable_word_with_ocr_st_skipped: 'Пропущено',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_done: 'Готово.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_loading: 'Загрузка движка OCR…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_packing: 'Сборка Word…',
	tool_batch_convert_jpg_to_editable_word_with_ocr_status_progress: '{i}/{n} {name}',
	tool_batch_convert_jpg_to_editable_word_with_ocr_title: 'Пакетно преобразовать JPG в редактируемый Word с помощью OCR',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_1:
		'Снимите несколько страниц раздатки и скачайте один Word, чтобы поправить заголовки.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_2:
		'Соберите фото меню в один документ с картинкой над каждым разделом OCR для сверки.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecase_3:
		'Сложите скриншоты ошибок в один редактируемый Word и отправьте коллеге.',
	tool_batch_convert_jpg_to_editable_word_with_ocr_usecases_title: 'Когда это уместно',
};

export default ru;
